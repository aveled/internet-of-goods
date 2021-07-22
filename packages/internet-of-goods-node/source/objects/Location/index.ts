// #region module
/**
 * Location format
 *
 * <node name>-<tube number>-<segment number>
 *
 * e.g. A-1-2, node A, tube 1, segment 2
 *
 */
class Location {
    private value: string;

    constructor(
        value: string,
    ) {
        this.value = value;
    }
}
// #endregion module



// #region exports
export default Location;
// #endregion exports
