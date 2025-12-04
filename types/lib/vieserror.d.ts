export = VIESError;
/**
 * VIES error
 */
declare function VIESError(): void;
declare class VIESError {
    /**
     * @type {string}
     */
    uid: string;
    /**
     * @type {string}
     */
    countryCode: string;
    /**
     * @type {string}
     */
    vatNumber: string;
    /**
     * @type {string}
     */
    error: string;
    /**
     * @type {Date}
     */
    date: Date;
    /**
     * @type {string}
     */
    source: string;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
