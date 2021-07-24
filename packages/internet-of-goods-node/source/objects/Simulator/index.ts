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
    constructor() {
        super();

        this.on('addNode', this.addNode);
        this.on('sendPod', this.sendPod);
    }


    private addNode(
        nodeDefinition: NodeDefinition,
    ) {

    }

    private sendPod(
        pod: Pod,
    ) {

    }
}


class Simulator {
    private network = new Network();
    private definitions: NodeDefinition[] = [];


    constructor(
        definitions: NodeDefinition[],
    ) {
        this.definitions = definitions;
        this.initializeNodes();
    }


    private initializeNodes() {
        for (const node of this.definitions) {
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
