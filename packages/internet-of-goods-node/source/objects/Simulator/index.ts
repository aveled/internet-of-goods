// #region imports
    // #region external
    import Pod from '../Pod';
    // #endregion external
// #endregion imports



// #region module
class Simulator {
    private pods: Pod[] = [];


    public send(
        from: string,
        to: string,
        pod: string,
    ) {}

    public run() {
        this.loop();
    }


    private loop() {
        setInterval(() => {
            this.update();
        }, 1000);
    }

    private update() {
        for (const pod of this.pods) {
            this.step(pod);
        }

        this.refreshArrivedPods();
    }

    private step(
        pod: Pod,
    ) {

    }

    private refreshArrivedPods() {
    }
}
// #endregion module



// #region exports
export default Simulator;
// #endregion exports
