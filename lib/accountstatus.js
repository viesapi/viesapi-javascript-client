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


/**
 * Current account status information
 */
function AccountStatus()
{
    /**
     * @type {string}
     */
	this.uid = undefined;

    /**
     * @type {string}
     */
	this.type = undefined;

    /**
     * @type {Date}
     */
	this.validTo = undefined;

    /**
     * @type {string}
     */
	this.billingPlanName = undefined;

    /**
     * @type {number}
     */
	this.subscriptionPrice = undefined;

    /**
     * @type {number}
     */
	this.itemPrice = undefined;

    /**
     * @type {number}
     */
	this.itemPriceStatus = undefined;

    /**
     * @type {number}
     */
	this.itemPriceParsed = undefined;

    /**
     * @type {number}
     */
	this.limit = undefined;

    /**
     * @type {number}
     */
	this.requestDelay = undefined;

    /**
     * @type {number}
     */
	this.domainLimit = undefined;

    /**
     * @type {boolean}
     */
	this.overPlanAllowed = undefined;

    /**
     * @type {boolean}
     */
	this.excelAddIn = undefined;

    /**
     * @type {boolean}
     */
	this.app = undefined;

    /**
     * @type {boolean}
     */
	this.cli = undefined;

    /**
     * @type {boolean}
     */
	this.stats = undefined;

    /**
     * @type {boolean}
     */
	this.monitor = undefined;

    /**
     * @type {boolean}
     */
	this.funcGetVIESData = undefined;

    /**
     * @type {boolean}
     */
	this.funcGetVIESDataParsed = undefined;

    /**
     * @type {number}
     */
	this.viesDataCount = undefined;

    /**
     * @type {number}
     */
	this.viesDataParsedCount = undefined;

    /**
     * @type {number}
     */
	this.totalCount = undefined;
}

/**
 * String representation
 * @return {string} object info
 */
AccountStatus.prototype.toString = function() {
	return 'AccountStatus: [uid = ' + this.uid
		+ ', type = ' + this.type
		+ ', validTo = ' + this.validTo
		+ ', billingPlanName = ' + this.billingPlanName

		+ ', subscriptionPrice = ' + this.subscriptionPrice
		+ ', itemPrice = ' + this.itemPrice
		+ ', itemPriceStatus = ' + this.itemPriceStatus
		+ ', itemPriceParsed = ' + this.itemPriceParsed

		+ ', limit = ' + this.limit
		+ ', requestDelay = ' + this.requestDelay
		+ ', domainLimit = ' + this.domainLimit
		+ ', overPlanAllowed = ' + this.overPlanAllowed

		+ ', excelAddIn = ' + this.excelAddIn
		+ ', app = ' + this.app
		+ ', cli = ' + this.cli
		+ ', stats = ' + this.stats
		+ ', monitor = ' + this.monitor

		+ ', funcGetVIESData = ' + this.funcGetVIESData
		+ ', funcGetVIESDataParsed = ' + this.funcGetVIESDataParsed

		+ ', VIESDataCount = ' + this.viesDataCount
		+ ', VIESDataParsedCount = ' + this.viesDataParsedCount
		+ ', totalCount = ' + this.totalCount
		+ ']';
};

module.exports = AccountStatus;
