// #region module
class Magnet {
    private position: string;

    public state: 'repel' | 'attract' = 'repel';


    constructor(
        position: string,
    ) {
        this.position = position;
    }


    public flip() {
        if (this.state === 'attract') {
            this.state = 'repel';
        } else {
            this.state = 'attract';
        }

        this.affect();
    }


    private affect() {
        // affect the hardware
    }
}
// #endregion module



// #region exports
export default Magnet;
// #endregion exports
