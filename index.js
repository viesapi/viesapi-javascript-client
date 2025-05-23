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


module.exports = {
	AccountStatus: require('./lib/accountstatus'),
	Err: require('./lib/error'),
	EUVAT: require('./lib/euvat'),
	NIP: require('./lib/nip'),
	VIESAPIClient: require('./lib/viesapiclient'),
	Number: require('./lib/number'),
	LegalForm: require('./lib/legalform'),
	NameComponents: require('./lib/namecomponents'),
	AddressComponents: require('./lib/addresscomponents'),
	VIESData: require('./lib/viesdata'),
	VIESError: require('./lib/vieserror'),
	BatchResult: require('./lib/batchresult')
};
