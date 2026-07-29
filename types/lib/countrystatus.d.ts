export = CountryStatus;
/**
 * EU member country status
 */
declare function CountryStatus(): void;
declare class CountryStatus {
    /**
     * @type {string|undefined}
     */
    countryCode: string | undefined;
    /**
     * @type {string|undefined}
     */
    status: string | undefined;
    UNKNOWN: string;
    AVAILABLE: string;
    UNAVAILABLE: string;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
