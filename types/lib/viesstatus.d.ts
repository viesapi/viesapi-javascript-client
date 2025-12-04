export = VIESStatus;
/**
 * Current VIES system status information
 */
declare function VIESStatus(): void;
declare class VIESStatus {
    /**
     * @type {string}
     */
    uid: string;
    /**
     * @type {boolean}
     */
    available: boolean;
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
