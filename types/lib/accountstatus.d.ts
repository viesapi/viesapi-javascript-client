export = AccountStatus;
/**
 * Current account status information
 */
declare function AccountStatus(): void;
declare class AccountStatus {
    /**
     * @type {string}
     */
    uid: string;
    /**
     * @type {string}
     */
    type: string;
    /**
     * @type {Date}
     */
    validTo: Date;
    /**
     * @type {string}
     */
    billingPlanName: string;
    /**
     * @type {number}
     */
    subscriptionPrice: number;
    /**
     * @type {number}
     */
    itemPrice: number;
    /**
     * @type {number}
     */
    itemPriceStatus: number;
    /**
     * @type {number}
     */
    itemPriceParsed: number;
    /**
     * @type {number}
     */
    limit: number;
    /**
     * @type {number}
     */
    requestDelay: number;
    /**
     * @type {number}
     */
    domainLimit: number;
    /**
     * @type {boolean}
     */
    overPlanAllowed: boolean;
    /**
     * @type {boolean}
     */
    excelAddIn: boolean;
    /**
     * @type {boolean}
     */
    app: boolean;
    /**
     * @type {boolean}
     */
    cli: boolean;
    /**
     * @type {boolean}
     */
    stats: boolean;
    /**
     * @type {boolean}
     */
    monitor: boolean;
    /**
     * @type {boolean}
     */
    funcGetVIESData: boolean;
    /**
     * @type {boolean}
     */
    funcGetVIESDataParsed: boolean;
    /**
     * @type {number}
     */
    viesDataCount: number;
    /**
     * @type {number}
     */
    viesDataParsedCount: number;
    /**
     * @type {number}
     */
    totalCount: number;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
