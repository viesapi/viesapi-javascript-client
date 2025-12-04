export = CountryStatus;
/**
 * EU member country status
 */
declare function CountryStatus(): void;
declare class CountryStatus {
    /**
     * @type {string}
     */
    countryCode: string;
    /**
     * @type {string}
     */
    status: string;
    UNKNOWN: string;
    AVAILABLE: string;
    UNAVAILABLE: string;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
