export = VIESStatus;
/**
 * Current VIES system status information
 */
declare function VIESStatus(): void;
declare class VIESStatus {
    /**
     * @type {string|undefined}
     */
    uid: string | undefined;
    /**
     * @type {boolean|undefined}
     */
    available: boolean | undefined;
    /**
     * @type {CountryStatus[]}
     */
    countries: CountryStatus[];
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
import CountryStatus = require("./countrystatus");
