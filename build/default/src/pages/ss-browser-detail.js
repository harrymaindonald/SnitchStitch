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
import "../../node_modules/@polymer/paper-spinner/paper-spinner.js";

class SSBrowserDetail extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        
    /*top heading styling*/
        .heading{
            display:flex;
            flex-flow:row;
        }

        .left-heading-info{
            flex-basis: 70%;
        }

        .left-heading-info > h4{
            padding-left:10px;
        }

        .right-heading-info{
           flex-basis:30%;
           display:flex;
            justify-content: center;
            align-items: center;
        }

        .error-number{
            font-size: 20px;
            display:flex;
            justify-content: center;
            align-items: center;
        }

        h4{
            color:blue;
        }

        /*General information card styling*/

        .general-info-card{
            display:flex;
            flex-flow:row;
        }

        .general-title{
            flex-basis:30%;
            font-weight:bold;
        }
        .general-infos{
            flex-basis: 70%;
            display:flex;
            flex-flow: row wrap;
            border:1px solid #e5e5e5;
            padding: 8px;
        }

        .info-item{
            width: 50%;
            font-weight:bold;
        }

        .general-title h3{
            font-weight:1;
        }
    

    /*Main table styling*/
    .user-chart{
                font-size:14px;
                
            }
            
            /*chart heading styling*/
            .heading-row{
                overflow:auto;
                width:100%;
                display:table;
                border-bottom:1px solid #dcdcdc;
                padding-bottom:10px;
                padding-left:10px;
            }

            .heading-row > div {
                display:table-cell;
                font-weight:bold;
            }

            .timestamp-heading{
                width:155px;
                padding-right:10px;
            }

            .message-heading{
                width:350px;
            }
           

            /*chart contents styling*/
            .user-info-row{
                padding-left: 10px;
                width: 100%;
                display:table;
                border-bottom: 1px solid #efefef;
                cursor:pointer;
                
            }   

            .user-info-row:hover{
                background:#eeeeef;
            }
            
            .user-info-row > div{
                display:table-cell;
                padding-top:12px;
                padding-bottom:12px;
                
            }
            
            .item-timestamp{
                width: 155px;
                padding-right:10px;
            }
            
            .item-message{
                width:350px;
                
            }

            .info{
              font-weight:normal;
              font-style:italic;
            }
           

            .item-url{
             overflow:hidden;
             max-height:1.3em;
             transition: max-height 0.4s;
            }

            .item-url:hover{
                max-height:100px;
            }
            
            a{
            text-decoration:none;
            color: inherit;
            cursor: auto;
          }
           .spinner{
                text-align:center;
            }

            paper-spinner{
                padding: 23px;
            }

      </style>

      <app-route route="{{route}}" pattern="/:ID" data="{{routeData}}" tail="{{subroute}}">

    <div class="wrapper">
        <div class="card heading">
            <div class="left-heading-info">
                <h2>[[browser.name]] [[browser.version]]</h2>
                <h4 class="stand-out"><i>For project: [[project._id]]</i></h4>
            </div>
            <div class="right-heading-info">
                <div class="error-number circle">
                    <div>
                        <template is="dom-if" if="{{!instances.length}}">
                            <div class="spinner2">
                                <paper-spinner active></paper-spinner>
                            </div>
                        </template>
                        <template is="dom-if" if="{{instances.length}}">  
                            <span id="counter"></span><br />Errors  
                        </template>
                    </div>
                </div>
            </div>
        </div>

        <div class="card general-info-card">
            <div class="general-title">
                <h3>General Infomation</h3>
            </div>
            <div class="general-infos">
                <div class="info-item">First Occurance: <span class="info" id="firstOccurance"></span></div>
                <div class="info-item">URL's Affected: </div>
                <div class="info-item">Last Occurance: <span class="info" id="lastOccurance"></span></div>
                <div class="info-item">User's Affected: </div>
            </div>
        </div>

        <div class="card error-table">
            <h3>Errors</h3>
            <div class="user-chart"> 
            
                <div class="heading-row">
                    <div class="headings timestamp-heading">Timestamp</div>
                    <div class="headings message-heading">Message</div>
                    <div class="url-head-box">
                    <div class="headings url-heading">URL (Stack)</div></div>      
                </div>

                <template is="dom-if" if="{{!instances.length}}">
                    <div class="spinner">
                        <paper-spinner active></paper-spinner>
                    </div>
                </template>
                
                <template is="dom-if" if="{{instances.length}}">
                    <template is="dom-repeat" items="{{instances}}" class="single-user">
                        <a href$="[[rootPath]]errorinfo/[[item._id]]">
                            <div id="test" on-click="_clickError" class="user-info-row">
                                <div class="item-timestamp">[[_parseCreationTime(item)]]</div>
                                <div class="stand-out item-message">[[item.message]]</div>
                                <div class="stack-container">
                                    <div class="item-url">[[item.stack]]</div>  
                                </div>      
                            </div>
                        </a>   
                    </template>
                </template>
            </div>
        </div>
        </div>
     
     
    `;
  }

  static get properties() {
    return {
      docID: {
        type: String,
        reflectToAttribute: true,
        observer: '_docIDChanged'
      },
      browser: {
        type: Object,
        value: null
      },
      project: {
        type: Object,
        value: null
      },
      instance: {
        type: Object,
        value: null
      },
      instances: {
        type: Array
      },
      enviroment: {
        type: Object,
        value: null
      }
    };
  }

  static get observers() {
    return ['_routeChanged(routeData.ID)'];
  }

  _routeChanged(id) {
    console.log("Route Change - value is unchecked", id);
    this.docID = id;
  }

  _docIDChanged(id) {
    console.log("Running _docIDChanged with ", id); // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.

    var page = this;
    firebase.firestore().collection("Projects").doc("TestingProject").collection("collector_Browser").doc(this.docID).onSnapshot(doc => {
      page.browser = doc.data();
      page.instances = [];
      const promises = [];

      for (const instIndex in page.browser.instances) {
        promises.push(page.browser.instances[instIndex].get().then(result => {
          page.push("instances", result.data());
        }));
      }

      Promise.all(promises).then(() => {
        console.log("Loaded Instances");
        const instCount = page.instances.length;
        console.log(instCount);
        var firstOccur = this.shadowRoot.querySelector('#firstOccurance');
        var firstDate = this.instances[0].creationTime.local.toDate().toLocaleString();
        var lastOccur = this.shadowRoot.querySelector('#lastOccurance');
        var lastDate = this.instances[this.instances.length - 1].creationTime.local.toDate().toLocaleString();
        firstOccur.innerHTML = firstDate;
        lastOccur.innerHTML = lastDate;
        const errorNumber = this.shadowRoot.querySelector('#counter');
        errorNumber.innerHTML = instCount;
      });
    });
    console.log("Page ID Changed - This one can be called via software. Changed to: ", id);
  }

  _parseCreationTime(item) {
    return item.creationTime.local.toDate().toLocaleString();
  }

  ready() {
    super.ready();
    firebase.firestore().collection("Projects").doc("TestingProjects").onSnapshot(doc => {
      this.project = doc.data();
    });
  }

  makeElem(change) {
    let data = change.doc.data();
    data.$id = change.doc.id;
    return data;
  }

  getElemIndex(id) {
    let index = this.elems.findIndex(browser => {
      if (browser.$id == id) {
        return true;
      }
    });
    return index;
  } //routing


  _clickBrowser() {
    console.log(arguments);
    this.set('route.path', 'browserdetail');
  }

}

window.customElements.define('ss-browser-detail', SSBrowserDetail);