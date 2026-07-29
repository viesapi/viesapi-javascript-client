export = VIESError;
/**
 * VIES error
 */
declare function VIESError(): void;
declare class VIESError {
    /**
     * @type {string|undefined}
     */
    uid: string | undefined;
    /**
     * @type {string|undefined}
     */
    countryCode: string | undefined;
    /**
     * @type {string|undefined}
     */
    vatNumber: string | undefined;
    /**
     * @type {string|undefined}
     */
    error: string | undefined;
    /**
     * @type {Date|undefined}
     */
    date: Date | undefined;
    /**
     * @type {string|undefined}
     */
    source: string | undefined;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
