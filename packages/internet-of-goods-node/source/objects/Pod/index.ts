// #region module
class Pod {
    public sender = '';
    public destination = '';
    public location = '';
    public arrived = false;


    constructor(
        sender: string,
        destination: string,
    ) {
        this.sender = sender;
        this.destination = destination;
    }

    public updateLocation(
        location: string,
    ) {
        this.location = location;
    }
}
// #endregion module



// #region exports
export default Pod;
// #endregion exports
