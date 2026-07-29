/**
 * Copyright 2022-2026 NETCAT (www.netcat.pl)
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
 * @copyright 2022-2026 NETCAT (www.netcat.pl)
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
     * @type {string|undefined}
     */
	this.uid = undefined;

    /**
     * @type {string|undefined}
     */
	this.countryCode = undefined;

    /**
     * @type {string|undefined}
     */
	this.vatNumber = undefined;

    /**
     * @type {boolean|undefined}
     */
	this.valid = undefined;

    /**
     * @type {string|undefined}
     */
	this.traderName = undefined;

    /**
     * @type {NameComponents|undefined}
     */
    this.traderNameComponents = undefined;

    /**
     * @type {string|undefined}
     */
	this.traderCompanyType = undefined;

    /**
     * @type {string|undefined}
     */
	this.traderAddress = undefined;

    /**
     * @type {AddressComponents|undefined}
     */
	this.traderAddressComponents = undefined;

    /**
     * @type {string|undefined}
     */
	this.id = undefined;

    /**
     * @type {Date|undefined}
     */
	this.date = undefined;

    /**
     * @type {string|undefined}
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
