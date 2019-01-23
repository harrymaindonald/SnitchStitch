/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
    :host{
      --stand-out-text-color: #f04c36;
      --main-text-color: #14213D;

    }
      .card {
        margin: 24px;
        padding: 16px;
        color: var(--main-text-color);
        border-radius: 2px;
        background-color: #FFFFFF;
        box-shadow: 0 8px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .stand-out{
        color: var(--stand-out-text-color);
        cursor:pointer;
      }

      .circle {
        width:100px;
        height:100px;
        border-radius:250px;
        font-size:50px;
        color:#fff;
        vertical-align: middle;
        display: table-cell;
        text-align:center;
        background:#7b7676;
        font-size:10px;
      }

      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
      }

      .wrapper{
        height: calc(100vh - 104px);
        overflow: auto;
    }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
