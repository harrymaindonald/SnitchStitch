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
import '../shared-styles.js';

import {} from '@polymer/paper-tabs/paper-tabs.js';
import {} from '@polymer/paper-tabs/paper-tab.js';
import {} from '@polymer/iron-pages/iron-pages.js';
import '../elements/ss-by-user-chart.js';
import '../elements/ss-by-browser-chart.js';
import '../elements/ss-by-route-chart.js';
import '../pages/ss-by-browser.js';
import '../pages/ss-by-route.js';
import '../elements/ss-sort-by-project.js';



class SSDailySummary extends PolymerElement {

  static get template() {
    return html `
      <style include="shared-styles">

        :host {
          display: block;
          height:100%;
          margin:0;  
               
        }

        .error-info{    
            margin-bottom:24px;
            margin-top:0;
        }
     
        .daily-summary-head{
            display: flex;
            flex-direction: row;
            align-items: center;
            
        }

       .select-project select{
            background:transparent;
            padding: 5px; 
            border: 1px solid #ccc;
            font-size: 16px;
            width: 240px;  
            height: 34px;
        }



        .title-date{
            width:70%;
        }

        .select-project{
            width:30%;
        }

      

        .tab{
          padding-left: 24px;
        }

        .inner-content{
          border:1px solid #ABB2B9;
          padding:1.5rem;
          overflow:auto;
        }

        paper-tabs{
          --paper-tab-ink: #0099ff;
          --paper-tabs-selection-bar-color :#0099ff;
        }
        
        @media only screen and (max-width: 1050px){
            .daily-summary-head{
            display: block;
         
        }

        }

      </style>
    <div class="wrapper">
        <div class="card daily-summary-head">
            <div class="title-date">
                <h3>Daily Summary for:<i class="stand-out">{{Date}} Tuesday 30/10/2018</i></h3>  
            </div>
            
            <div class="select-project">
               <ss-sort-by-project></ss-sort-by-project>
            </div>
          
        </div>


        <div class="card error-info">
            <paper-tabs selected="{{selected}}" autoselect autoselect-delay="1000">
                <paper-tab>By User</paper-tab>
                <paper-tab>By Browser</paper-tab>
                <paper-tab>By Route</paper-tab>
            </paper-tabs>

            <iron-pages selected="{{selected}}" >
                <div class="inner-content">
                    ${this.userTemplate}
                </div>
                <div class="inner-content">
                    ${this.browserTemplate}
                </div>
                <div class="inner-content">
                    ${this.routeTemplate}
                </div> 
            </iron-pages> 
       
        </div>   
     </div>   
                
    `;
  }
  connectedCallback() {
    super.connectedCallback();

  //  var template = this.shadowRoot.this.querySelector()

    
}
    static get userTemplate(){
        return html `<ss-by-user-chart></ss-by-user-chart>`;
    }
    static get browserTemplate(){
        return html `<ss-by-browser-chart></ss-by-browser-chart>`;
    }
    static get routeTemplate(){
        return html `<ss-by-route-chart></ss-by-route-chart>`;
    }


  static get properties() {
    return {
/** 
 * Projects
 */
    projects:{
       value(){
           return [
               {projectName: 'All'},
               {projectName: 'UFG'}, 
               {projectName: 'Actively'}, 
               {projectName: 'Leigh Jackson'}
            ];
       }
    },

      /**
       * Selected Tab
       */
      selected: {
        type: Number,
        value: 0
      },

      /**
       * Tabs Model
       */
      model: {
        type: Object,
        value: {
          user: {content: 'errors by user'},
          browser: {content: 'errors sorted by browser'},
          route: {content: 'errors sorted by route'}
        },
      }
    };
  }

 
  
}

window.customElements.define('ss-daily-summary', SSDailySummary);