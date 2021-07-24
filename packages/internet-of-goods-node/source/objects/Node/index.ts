// #region imports
    // #region external
    import {
        NodeDefinition,
    } from '~data/interfaces';

    import Pod from '../Pod';
    import Location from '../Location';
    // #endregion external
// #endregion imports



// #region module
class Node {
    private time = 0;
    private pods: Pod[] = [];
    private locations: Location[];
    private inputs: string[];


    constructor(
        definition: NodeDefinition,
    ) {
        const {
            locations,
            inputs,
        } = definition;

        this.locations = this.computeLocations(
            locations,
        );
        this.inputs = inputs;
    }


    public send(
        from: string,
        to: string,
    ) {
        const pod = new Pod(
            from,
            to,
        );

        this.pods.push(pod);
    }

    public run() {
        this.loop();
    }


    private loop() {
        setInterval(() => {
            this.update();
        }, 1_000);
    }

    private update() {
        console.log(`Running at time ${this.time}`);
        this.time += 1;

        for (const pod of this.pods) {
            this.step(pod);
        }

        this.refreshArrivedPods();
    }

    private step(
        pod: Pod,
    ) {
        if (pod.arrived) {
            return;
        }
    }

    private refreshArrivedPods() {
    }

    private computeLocations(
        locations: string[],
    ) {
        const data: Location[] = [];

        for (const value of locations) {
            const location = new Location(value);
            data.push(location);
        }

        return data;
    }
}
// #endregion module



// #region exports
export default Node;
// #endregion exports
