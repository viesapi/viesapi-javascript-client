/**
 * Copyright 2022-2024 NETCAT (www.netcat.pl)
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
 * @copyright 2022-2024 NETCAT (www.netcat.pl)
 * @license http://www.apache.org/licenses/LICENSE-2.0
 */

const VIESAPI = require('viesapi-client');

// Create client object and establish connection to the production system
// id – API identifier
// key – API key (keep it secret)
// const viesapi = new VIESAPI.VIESAPIClient('id', 'key');

// Create client object and establish connection to the test system
const viesapi = new VIESAPI.VIESAPIClient();

const nip_eu = 'PL7171642051';

async function fetchData() {
    return {
        // Get current account status
        accountStatus:   await viesapi.getAccountStatus(),
        // Get VIES data from VIES system
        viesData:        await viesapi.getVIESData(nip_eu)
    };
}

const app = document.querySelector('#app');

fetchData().then(data => {
    app.innerHTML = `
        <table>
            <tr>
                <th>Function</th>
                <th>Result</th>
            </tr>
            ${createRow('getAccountStatus()', data.accountStatus)}
            ${createRow('getVIESData()', data.viesData)}
        </table>
    `;
}).catch(error => {
    app.innerHTML = error;
});

function createRow(key, value) {
    return `
        <tr>
            <td><pre>${key}</pre></td>
            <td><pre>${value}</pre></td>
        </tr>
    `;
}
