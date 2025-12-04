export = AddressComponents;
/**
 * Address components
 */
declare function AddressComponents(): void;
declare class AddressComponents {
    /**
     * @type {string}
     */
    country: string;
    /**
     * @type {string}
     */
    postalCode: string;
    /**
     * @type {string}
     */
    city: string;
    /**
     * @type {string}
     */
    street: string;
    /**
     * @type {string}
     */
    streetNumber: string;
    /**
     * @type {string}
     */
    houseNumber: string;
    /**
     * @type {string}
     */
    other: string;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
