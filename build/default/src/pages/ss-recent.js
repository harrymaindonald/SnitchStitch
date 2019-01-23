/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
import { PolymerElement, html } from "../../node_modules/@polymer/polymer/polymer-element.js";
import '../shared-styles.js';
import "../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../node_modules/@polymer/iron-icons/iron-icons.js";
import '../elements/ss-all-errors-table.js';
import '../elements/ss-sort-by-project.js';

class SSRecent extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        
        
       
        ss-sort-by-project{
        margin-left:30px;
      }
      
      </style>
    <div class="wrapper">
        <div class="card">
            <h1>Recent Errors</h1>
            <ss-sort-by-project></ss-sort-by-project>
        </div>

        <div class="card table-card">
            <ss-all-errors-table></ss-all-errors-table>
        </div>
    </div>
     
    `;
  }
  /* _deleteRow(row) {
    var d = row.parentNode.parentNode;
    d.parentNode.removeChild(row);
  } */


}

window.customElements.define('ss-recent', SSRecent);