export = NameComponents;
/**
 * Name components
 */
declare function NameComponents(): void;
declare class NameComponents {
    /**
     * @type {string|undefined}
     */
    name: string | undefined;
    /**
     * @type {string|undefined}
     */
    legalForm: string | undefined;
    /**
     * @type {number|undefined} LegalForm values
     */
    legalFormCanonicalId: number | undefined;
    /**
     * @type {string|undefined}
     */
    legalFormCanonicalName: string | undefined;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
