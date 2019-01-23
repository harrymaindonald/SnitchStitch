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

class SSInstall extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
        display:flex;
        flex-flow:column;
          height:100%;
          margin:0;
        }
   
        
      .card-head{
        flex: 0 1 auto;
      }

        
        .card-body{
          flex: 1 1 auto; 
        }
    
      </style>

      <div class="card card-head">
        <div id="title">
        <h1>Install Snitch Stitch to your app</h1>
        </div>
        <div>
        <i id="hello">Hello User</i>
        </div>
      </div>

      <div class="card card-body">
      Hello some content
      </div>
     
    `;
  }

}

window.customElements.define('ss-install', SSInstall);