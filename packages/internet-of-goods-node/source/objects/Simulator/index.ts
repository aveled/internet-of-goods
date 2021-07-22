// #region imports
    // #region external
    import Pod from '../Pod';
    // #endregion external
// #endregion imports



// #region module
class Simulator {
    private time = 0;
    private pods: Pod[] = [];
    private locations: string[];


    constructor(
        locations: string[],
    ) {
        this.locations = locations;
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
}
// #endregion module



// #region exports
export default Simulator;
// #endregion exports
