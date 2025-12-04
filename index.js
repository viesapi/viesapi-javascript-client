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

const Err = require('./lib/error');
const Number = require('./lib/number');
const EUVAT = require('./lib/euvat');
const NIP = require('./lib/nip');
const LegalForm = require('./lib/legalform');
const AccountStatus = require('./lib/accountstatus');
const AddressComponents = require('./lib/addresscomponents');
const BatchResult = require('./lib/batchresult');
const CountryStatus = require('./lib/countrystatus');
const NameComponents = require('./lib/namecomponents');
const VIESData = require('./lib/viesdata');
const VIESError = require('./lib/vieserror');
const VIESStatus = require('./lib/viesstatus');
const VIESAPIClient = require('./lib/viesapiclient');

module.exports = {
    Err,
    Number,
    EUVAT,
    NIP,
    LegalForm,
	AccountStatus,
    AddressComponents,
    BatchResult,
    CountryStatus,
	NameComponents,
	VIESData,
	VIESError,
    VIESStatus,
    VIESAPIClient
};
