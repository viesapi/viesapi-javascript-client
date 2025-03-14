/**
 * Copyright 2022-2025 NETCAT (www.netcat.pl)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author NETCAT <firma@netcat.pl>
 * @copyright 2022-2025 NETCAT (www.netcat.pl)
 * @license http://www.apache.org/licenses/LICENSE-2.0
 */

'use strict';


const CLI_CONNECT         = 201;
const CLI_RESPONSE        = 202;
const CLI_NUMBER          = 203;
const CLI_NIP             = 204;
const CLI_EUVAT           = 207;
const CLI_EXCEPTION       = 209;
const CLI_DATEFORMAT      = 210;
const CLI_INPUT           = 211;

const codes = [
	/* CLI_CONNECT     */ 'Failed to connect to the VIES API service',
	/* CLI_RESPONSE    */ 'VIES API service response has invalid format',
	/* CLI_NUMBER      */ 'Invalid number type',
	/* CLI_NIP         */ 'NIP is invalid',
	/* UNUSED          */ '',
	/* UNUSED          */ '',
	/* CLI_EUVAT       */ 'EU VAT ID is invalid',
	/* UNUSED          */ '',
	/* CLI_EXCEPTION   */ 'Function generated an exception',
	/* CLI_DATEFORMAT  */ 'Date has an invalid format',
	/* CLI_INPUT       */ 'Invalid input parameter'
];

/**
 * Get error message
 * @param {int} code error code
 * @return {string|null} error message
 */
function message(code)
{
	if (code < CLI_CONNECT || code > CLI_INPUT) {
		return null;
	}

	return codes[code - CLI_CONNECT];
}

module.exports = {
	NIP_EMPTY			: 1,
	NIP_UNKNOWN			: 2,
	GUS_LOGIN			: 3,
	GUS_CAPTCHA			: 4,
	GUS_SYNC			: 5,
	NIP_UPDATE			: 6,
	NIP_BAD				: 7,
	CONTENT_SYNTAX		: 8,
	NIP_NOT_ACTIVE		: 9,
	INVALID_PATH		: 10,
	EXCEPTION			: 11,
	NO_PERMISSION		: 12,
	GEN_INVOICES		: 13,
	GEN_SPEC_INV		: 14,
	SEND_INVOICE		: 15,
	PREMIUM_FEATURE		: 16,
	SEND_ANNOUNCEMENT	: 17,
	INVOICE_PAYMENT		: 18,
	REGON_BAD			: 19,
	SEARCH_KEY_EMPTY	: 20,
	KRS_BAD				: 21,
	EUVAT_BAD			: 22,
	VIES_SYNC			: 23,
	CEIDG_SYNC			: 24,
	RANDOM_NUMBER		: 25,
	PLAN_FEATURE		: 26,
	SEARCH_TYPE			: 27,
	PPUMF_SYNC			: 28,
	PPUMF_DIRECT		: 29,
	NIP_FEATURE			: 30,
	REGON_FEATURE		: 31,
	KRS_FEATURE			: 32,
	TEST_MODE			: 33,
	ACTIVITY_CHECK		: 34,
	ACCESS_DENIED		: 35,
	MAINTENANCE			: 36,
	BILLING_PLANS		: 37,
	DOCUMENT_PDF		: 38,
	EXPORT_PDF			: 39,
	RANDOM_TYPE			: 40,
	LEGAL_FORM			: 41,
	GROUP_CHECKS		: 42,
	CLIENT_COUNTERS		: 43,
	URE_SYNC			: 44,
	URE_DATA			: 45,
	DKN_BAD				: 46,
	SEND_REMAINDER		: 47,
	EXPORT_JPK			: 48,
	GEN_ORDER_INV		: 49,
	SEND_EXPIRATION		: 50,
	IBAN_SYNC			: 51,
	ORDER_CANCEL        : 52,
	WHITELIST_CHECK     : 53,
	AUTH_TIMESTAMP      : 54,
	AUTH_MAC            : 55,
	IBAN_BAD            : 56,

	DB_AUTH_IP			: 101,
	DB_AUTH_KEY_STATUS	: 102,
	DB_AUTH_KEY_VALUE	: 103,
	DB_AUTH_OVER_PLAN	: 104,
	DB_CLIENT_LOCKED	: 105,
	DB_CLIENT_TYPE		: 106,
	DB_CLIENT_NOT_PAID	: 107,
	DB_AUTH_KEYID_VALUE	: 108,

	CLI_CONNECT         : CLI_CONNECT,
	CLI_RESPONSE        : CLI_RESPONSE,
	CLI_NUMBER          : CLI_NUMBER,
	CLI_NIP             : CLI_NIP,
	CLI_EUVAT           : CLI_EUVAT,
	CLI_EXCEPTION       : CLI_EXCEPTION,
	CLI_DATEFORMAT      : CLI_DATEFORMAT,
	CLI_INPUT           : CLI_INPUT,

	message: message
};
