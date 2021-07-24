// #region imports
    // #region libraries
    import {
        EventEmitter,
    } from 'events';
    // #endregion libraries


    // #region external
    import {
        NodeDefinition,
    } from '~data/interfaces';

    import Node from '../Node';
    import Pod from '../Pod';
    // #endregion external
// #endregion imports



// #region module
class Network extends EventEmitter {
    private nodes: Node[] = [];
    private sendingPods: Pod[] = [];


    constructor() {
        super();

        this.on('addNode', this.addNode);
        this.on('sendPod', this.sendPod);

        setInterval(() => {
            this.update();
        }, 1_000);
    }


    private addNode(
        nodeDefinition: NodeDefinition,
    ) {
        const node = new Node(nodeDefinition);
        this.nodes.push(node);
    }

    private sendPod(
        pod: Pod,
    ) {
        this.sendingPods.push(pod);
    }

    private update() {
        console.log('network running');
    }
}


class Simulator {
    private network = new Network();
    private definitions: Record<string, NodeDefinition> = {};


    constructor(
        definitions: Record<string, NodeDefinition>,
    ) {
        this.definitions = definitions;
        this.initializeNodes();
    }


    private initializeNodes() {
        for (const [name, node] of Object.entries(this.definitions)) {
            this.network.emit('addNode', node);
        }
    }


    public send(
        from: string,
        to: string,
    ) {
        const pod = new Pod(from, to);
        this.network.emit('sendPod', pod);
    }
}
// #endregion module



// #region exports
export default Simulator;
// #endregion exports
