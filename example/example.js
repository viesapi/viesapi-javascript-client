/**
 * Copyright 2022 NETCAT (www.netcat.pl)
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
 * @copyright 2022 NETCAT (www.netcat.pl)
 * @license http://www.apache.org/licenses/LICENSE-2.0
 */

'use strict';

const VIESAPI = require('viesapi-client');

// Create client object and establish connection to the production system
// id – API identifier
// key – API key (keep it secret)
// const viesapi = new VIESAPI.VIESAPIClient('id', 'key');

// Create client object and establish connection to the test system
const viesapi = new VIESAPI.VIESAPIClient();

const nip = '7171642051';
const nip_eu = 'PL' + nip;

// Get current account status
viesapi.getAccountStatus().then((account) => {
	console.log(account.toString());
}).catch((e) => {
	console.log(e.message);
});

// Get VIES data from VIES system
viesapi.getVIESData(nip_eu).then((vies) => {
	console.log(vies.toString());
}).catch((e) => {
	console.log(e.message);
});
