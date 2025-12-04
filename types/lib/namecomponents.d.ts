export = NameComponents;
/**
 * Name components
 */
declare function NameComponents(): void;
declare class NameComponents {
    /**
     * @type {string}
     */
    name: string;
    /**
     * @type {string}
     */
    legalForm: string;
    /**
     * @type {number} LegalForm values
     */
    legalFormCanonicalId: number;
    /**
     * @type {string}
     */
    legalFormCanonicalName: string;
    /**
     * String representation
     * @return {string} object info
     */
    toString(): string;
}
