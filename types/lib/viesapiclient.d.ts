export = VIESAPIClient;
/**
 * Construct new service client object
 * @param {string} id API key identifier
 * @param {string} key API key
 * @constructor
 */
declare function VIESAPIClient(id?: string, key?: string): void;
declare class VIESAPIClient {
    /**
     * Construct new service client object
     * @param {string} id API key identifier
     * @param {string} key API key
     * @constructor
     */
    constructor(id?: string, key?: string);
    url: string;
    id: string;
    key: string;
    app: string;
    errcode: number;
    err: string;
    VERSION: string;
    PRODUCTION_URL: string;
    TEST_URL: string;
    TEST_ID: string;
    TEST_KEY: string;
    /**
     * Set non default service URL
     * @param {string} url service URL
     */
    setURL(url: string): void;
    /**
     * Set application info
     * @param {string} app app info
     */
    setApp(app: string): void;
    /**
     * Get VIES data for specified number
     * @param {string} euvat EU VAT number with 2-letter country prefix
     * @return {Promise<VIESData>} promise returning VIES data on success
     */
    getVIESData(euvat: string): Promise<VIESData>;
    /**
     * Get VIES data returning parsed data for specified number
     * @param {string} euvat EU VAT number with 2-letter country prefix
     * @return {Promise<VIESData>} promise returning VIES data on success
     */
    getVIESDataParsed(euvat: string): Promise<VIESData>;
    /**
     * Upload batch of VAT numbers and get their current VAT statuses and traders data
     * @param {string[]} numbers Array of EU VAT numbers with 2-letter country prefix
     * @return {Promise<string>} promise returning Batch token for checking status and getting the result
     */
    getVIESDataAsync(numbers: string[]): Promise<string>;
    /**
     * Check batch result and download data
     * @param {string} token Batch token received from getVIESDataAsync function
     * @return {Promise<BatchResult>} promise returning batch result on success
     */
    getVIESDataAsyncResult(token: string): Promise<BatchResult>;
    /**
     * Get current account status
     * @return {Promise<AccountStatus>} promise returning account status on success
     */
    getAccountStatus(): Promise<AccountStatus>;
    /**
     * Get current EU VIES system status
     * @return {Promise<VIESStatus>} promise returning VIES system status on success
     */
    getVIESStatus(): Promise<VIESStatus>;
    /**
     * Get last error code
     * @returns {number} error code
     */
    getLastErrorCode(): number;
    /**
     * Get last error message
     * @returns {string} error message
     */
    getLastError(): string;
}
import VIESData = require("./viesdata");
import BatchResult = require("./batchresult");
import AccountStatus = require("./accountstatus");
import VIESStatus = require("./viesstatus");
