/**
 * Normalizes form of the NIP number
 * @param {string} nip input string
 * @return {string|undefined} normalized number
 */
export function normalize(nip: string): string | undefined;
/**
 * Checks if specified NIP is valid
 * @param {string} nip input number
 * @return {boolean} true if number is valid
 */
export function isValid(nip: string): boolean;
