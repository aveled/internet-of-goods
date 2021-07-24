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
    private self = new EventEmitter();


    constructor() {
        super();

        this.self.on('addNode', this.addNode);
        this.self.on('sendPod', this.sendPod);
    }


    private addNode(
        node: any,
    ) {

    }

    private sendPod(
        node: any,
    ) {

    }
}


class Simulator {
    private network = new Network();


    constructor(
        nodes: NodeDefinition[],
    ) {
        for (const node of nodes) {
            this.network.emit('addNode', node);
        }
    }


    private initializeNodes() {

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
