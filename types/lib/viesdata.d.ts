export = VIESData;
/**
 * VIES data
 */
declare function VIESData(): void;
declare class VIESData {
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
     * @type {boolean|undefined}
     */
    valid: boolean | undefined;
    /**
     * @type {string|undefined}
     */
    traderName: string | undefined;
    /**
     * @type {NameComponents|undefined}
     */
    traderNameComponents: NameComponents | undefined;
    /**
     * @type {string|undefined}
     */
    traderCompanyType: string | undefined;
    /**
     * @type {string|undefined}
     */
    traderAddress: string | undefined;
    /**
     * @type {AddressComponents|undefined}
     */
    traderAddressComponents: AddressComponents | undefined;
    /**
     * @type {string|undefined}
     */
    id: string | undefined;
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
import NameComponents = require("./namecomponents");
import AddressComponents = require("./addresscomponents");
