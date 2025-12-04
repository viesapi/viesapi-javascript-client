export = BatchResult;
/**
 * Batch result
 */
declare function BatchResult(): void;
declare class BatchResult {
    /**
     * @type {string}
     */
    uid: string;
    /**
     * @type {VIESData[]}
     */
    numbers: VIESData[];
    /**
     * @type {VIESError[]}
     */
    errors: VIESError[];
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
import VIESData = require("./viesdata");
import VIESError = require("./vieserror");
