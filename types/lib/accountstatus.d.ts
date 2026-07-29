export = AccountStatus;
/**
 * Current account status information
 */
declare function AccountStatus(): void;
declare class AccountStatus {
    /**
     * @type {string|undefined}
     */
    uid: string | undefined;
    /**
     * @type {string|undefined}
     */
    type: string | undefined;
    /**
     * @type {Date|undefined}
     */
    validTo: Date | undefined;
    /**
     * @type {string|undefined}
     */
    billingPlanName: string | undefined;
    /**
     * @type {number|undefined}
     */
    subscriptionPrice: number | undefined;
    /**
     * @type {number|undefined}
     */
    itemPrice: number | undefined;
    /**
     * @type {number|undefined}
     */
    itemPriceStatus: number | undefined;
    /**
     * @type {number|undefined}
     */
    itemPriceParsed: number | undefined;
    /**
     * @type {number|undefined}
     */
    limit: number | undefined;
    /**
     * @type {number|undefined}
     */
    requestDelay: number | undefined;
    /**
     * @type {number|undefined}
     */
    domainLimit: number | undefined;
    /**
     * @type {boolean|undefined}
     */
    overPlanAllowed: boolean | undefined;
    /**
     * @type {boolean|undefined}
     */
    excelAddIn: boolean | undefined;
    /**
     * @type {boolean|undefined}
     */
    app: boolean | undefined;
    /**
     * @type {boolean|undefined}
     */
    cli: boolean | undefined;
    /**
     * @type {boolean|undefined}
     */
    stats: boolean | undefined;
    /**
     * @type {boolean|undefined}
     */
    monitor: boolean | undefined;
    /**
     * @type {boolean|undefined}
     */
    funcGetVIESData: boolean | undefined;
    /**
     * @type {boolean|undefined}
     */
    funcGetVIESDataParsed: boolean | undefined;
    /**
     * @type {number|undefined}
     */
    viesDataCount: number | undefined;
    /**
     * @type {number|undefined}
     */
    viesDataParsedCount: number | undefined;
    /**
     * @type {number|undefined}
     */
    totalCount: number | undefined;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
