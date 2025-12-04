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

const NameComponents = require('./namecomponents');
const AddressComponents = require('./addresscomponents');

/**
 * VIES data
 */
function VIESData()
{
    /**
     * @type {string}
     */
	this.uid = undefined;

    /**
     * @type {string}
     */
	this.countryCode = undefined;

    /**
     * @type {string}
     */
	this.vatNumber = undefined;

    /**
     * @type {boolean}
     */
	this.valid = undefined;

    /**
     * @type {string}
     */
	this.traderName = undefined;

    /**
     * @type {NameComponents}
     */
    this.traderNameComponents = undefined;

    /**
     * @type {string}
     */
	this.traderCompanyType = undefined;

    /**
     * @type {string}
     */
	this.traderAddress = undefined;

    /**
     * @type {AddressComponents}
     */
	this.traderAddressComponents = undefined;

    /**
     * @type {string}
     */
	this.id = undefined;

    /**
     * @type {Date}
     */
	this.date = undefined;

    /**
     * @type {string}
     */
	this.source = undefined;
}

/**
 * String representation
 * @return {string} object info
 */
VIESData.prototype.toString = function() {
	return 'VIESData: [uid = ' + this.uid
		+ ', countryCode = ' + this.countryCode
		+ ', vatNumber = ' + this.vatNumber
		+ ', valid = ' + this.valid
		+ ', traderName = ' + this.traderName
        + ', traderNameComponents = ' + this.traderNameComponents
		+ ', traderCompanyType = ' + this.traderCompanyType
		+ ', traderAddress = ' + this.traderAddress
		+ ', traderAddressComponents = ' + this.traderAddressComponents
		+ ', id = ' + this.id
		+ ', date = ' + this.date
		+ ', source = ' + this.source
		+ ']';
};

module.exports = VIESData;
