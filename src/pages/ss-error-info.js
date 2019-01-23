/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {
  PolymerElement,
  html
} from '@polymer/polymer/polymer-element.js';
import '/src/elements/ss-collapse.js';
import '../shared-styles.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';


class SSErrorInfo extends PolymerElement {
  static get template() {
    return html `
      <style include="shared-styles">
      /* global to element */    
      :host {
          display: block;
          color: #757575;
        }
  /* global to element */
        .container {
          display: grid;
          grid-template-columns: 50% 50%;
        }

        .container hr{
          opacity: 0.3;
        }
/* bottom box styling */
        .instance-info{            
          margin-bottom: 24px;
          margin-top:0px;
          grid-column-start:1;
          grid-column-end:3;
        }
/* top right box styling */
        .instances{
          display:grid;
          padding:0px;
          grid-template-columns: 20% 45% 35%;
          height:282px;
          text-align:center;
          margin: 24px 24px 24px 12px;          
          box-shadow: 0 8px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }

        .occurance-item{
          display:grid;
          grid-template-columns: 20% 45% 35%;
          background-color: #F0F0F0;
          justify-content: space-around;
          width:100%;
        } 

        .occurance-item:nth-child(odd){
          background-color: #ddd;
        }
        .occurance-item:hover{
          background-color:#9E9E9E;
          cursor: pointer;
        }
        .list-item, .table-header{
          padding:10px;
        }

        .table-header{
          background-color: #14213D;
          color: white;
        }
        .scrollable-area{
          overflow-y:auto;
          grid-column-start: 1;
          grid-column-end: 4;
        }
      
/* top left box styling */
        .main-info span{
          
          font-weight:normal;
        }



        .main-info{
          height:250px;
          border-radius:0;
          
          margin-right:12px;
        }

        
/* responsiveness */
        @media only screen and (max-width: 1024px){
          .container{
            display: block;
            font-size:15px;
          }
          .instances{
            margin-left: 24px;
          }
          .main-info{
            margin-right:24px;
          }
        }
      </style>

<app-route route="{{route}}" pattern="/:ID" data="{{routeData}}" tail="{{subroute}}">

      <div class="wrapper">
      <div class="container">
      <div class="card main-info">
        <div id="title">
        <h4>Error Message:  <span class="stand-out">Uncaught TypeError: Cannot read property</span></h4>
        <hr>
        <h4>File Name: <span class="stand-out">my-dashboard.js</span></h4>
        <hr>
        <h4>Line Number: <span class="stand-out">45</span></h4>
        </div>
      </div>
      
      
        <div class="instances">
          <div class="table-header">Occurance ID</div>
          <div class="table-header">Date Stamp</div>
          <div class="table-header" id="userHeader">User</div>
          <div class="scrollable-area">
            <template is="dom-repeat" items="{{occurances}}" class="single-occurance">  
              <div class="occurance-item">
                <div class="list-item">[[item.errorid]]</div> 
                <div class="list-item">[[item.datestamp]]</div> 
                <div class="list-item">[[item.user]]</div>      
              </div> 
            </template>
          </div>         
        </div></div>

      <div class="card instance-info">
        <ss-collapse></ss-collapse>
       <!--  <h4>Date Stamp: <span>04-10-2018 1:57 PM</span></h4>
        <h4>Browser: <span>Chrome 68.0.3440</span></h4>
        <h4>User: <span>Fred</span></h4>
        <h4>Operating System: <span>Windows 10</span></h4>
        <h4>Hardware: <span>Quad-Core</span></h4> -->
      </div> 
    </div>
     
    `;
  }

  static get is() {
    return 'occurance-list';
  }
  static get properties() {
    return {
      occurances: {
        value() {
          return [{
              errorid: '4232',
              datestamp: '04-10-2018 1:57 PM',
              user: 'Harry'
            },
            {
              errorid: '4232',
              datestamp: '04-10-2018 1:57 PM',
              user: 'Harry'
            },
            {
              errorid: '4232',
              datestamp: '04-10-2018 1:57 PM',
              user: 'Harry'
            },
            {
              errorid: '4232',
              datestamp: '04-10-2018 1:57 PM',
              user: 'Harry'
            },
            {
              errorid: '4232',
              datestamp: '04-10-2018 1:57 PM',
              user: 'Harry'
            },
            {
              errorid: '4232',
              datestamp: '04-10-2018 1:57 PM',
              user: 'Harry'
            },
            {
              errorid: '4232',
              datestamp: '04-10-2018 1:57 PM',
              user: 'Harry'
            },
            {
              errorid: '4232',
              datestamp: '04-10-2018 1:57 PM',
              user: 'Harry'
            },
            {
              errorid: '4232',
              datestamp: '04-10-2018 1:57 PM',
              user: 'Harry'
            }
          ];
        }
      }
    };
  }
}

window.customElements.define('ss-error-info', SSErrorInfo);