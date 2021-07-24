// #region module
export interface LocationValue {
    node: string;
    tube: string;
    segment: string;
}


/**
 * Location format
 *
 * <node name>-<tube number>-<segment number>
 *
 * e.g. A-1-2, node A, tube 1, segment 2
 *
 */
class Location {
    private value: LocationValue;

    constructor(
        value: string,
    ) {
        this.value = this.parseValue(value);
    }

    private parseValue (
        value: string,
    ) {
        const split = value.split('-');
        const [
            node,
            tube,
            segment,
        ] = split;

        if (
            !node
            || !tube
            || !segment
        ) {
            throw 'Invalid location';
        }

        return {
            node,
            tube,
            segment,
        };
    }
}
// #endregion module



// #region exports
export default Location;
// #endregion exports
