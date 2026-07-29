export = AddressComponents;
/**
 * Address components
 */
declare function AddressComponents(): void;
declare class AddressComponents {
    /**
     * @type {string|undefined}
     */
    country: string | undefined;
    /**
     * @type {string|undefined}
     */
    postalCode: string | undefined;
    /**
     * @type {string|undefined}
     */
    city: string | undefined;
    /**
     * @type {string|undefined}
     */
    street: string | undefined;
    /**
     * @type {string|undefined}
     */
    streetNumber: string | undefined;
    /**
     * @type {string|undefined}
     */
    houseNumber: string | undefined;
    /**
     * @type {string|undefined}
     */
    other: string | undefined;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
