/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';


class SSUserDetail extends PolymerElement {
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
                width:175px;
            }

            .message-heading{
                width:400px;
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
                padding-right:0px;
            }
            
            .item-timestamp{
                width: 175px;
            }
            
            .item-message{
                width:400px;
                
            }
            .background{
                width:100%;
                
            }
    
      </style>

<app-route route="{{route}}" pattern="/:ID" data="{{routeData}}" tail="{{subroute}}">

      <div class="wrapper">
        <div class="card heading">
            <div class="left-heading-info">
                <h2>Windows 10 Chrome User@218.101.127.66</h2>
                <h4 class="stand-out"><i>For project: Snitchstitch</i></h4>
            </div>
            <div class="right-heading-info">
                <div class="error-number circle">
                    <div>21<br />
                        Errors
                    </div>
                </div>
            </div>
        </div>

        <div class="card general-info-card">
            <div class="general-title">
                <h3>General Infomation</h3>
            </div>
            <div class="general-infos">
                <div class="info-item">First Occurance: </div>
                <div class="info-item">URL's Affected: </div>
                <div class="info-item">Last Occurance: </div>
                <div class="info-item">Unique Errors: </div>
            </div>
        </div>

        <div class="card error-table">
            <h3>Errors</h3>
            <div class="user-chart"> 
            
                <div class="heading-row">
                    <div class="headings timestamp-heading">Timestamp</div>
                    <div class="headings message-heading">Message</div>
                    <div class="headings url-heading">URL</div>
                    
                </div>
                
                <template is="dom-repeat" items="{{bErrors}}" class="single-user">
                    <div on-click="_clickError" class="user-info-row">
                        <div class="item-timestamp">[[item.timestamp]]tba</div>
                        <div class="stand-out item-message">[[item.message]]</div>
                        <div class="item-url">[[item.url]]</div>        
                    </div>   
                </template>
            </div>
        </div>
        </div>
     
     
    `;
  }

  connectedCallback() {
    super.connectedCallback();

    var db = firebase.firestore();
    this.set('errors',[]);

    var collectorRef = db.collection("Projects").doc("TestingProject").collection("error_Browser").doc("item._id");
    //in future once errors amount is added into db change order by to errors amount -hm
    collectorRef.onSnapshot((querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                let newElem = this.makeElem(change);
                this.push('errors', newElem);
                console.log("New!", change);
            }
            if (change.type === "modified") {
                let modifiedElement = this.makeElem(change);
                let index = this.getElemIndex(change.doc.id);
                this.set(`errors.${index}`, modifiedElement);
                console.log("Modified!", change);
            }
            if (change.type === "removed") {
                let deletedElement = this.getElemIndex(change.doc.id);
                this.splice('errors', deletedElement, 1);
                console.log("Removed!", change);
            }
        });
    });

}

makeElem(change) {
    let data = change.doc.data();
    data.$id = change.doc.id;
    return data;
}

getElemIndex(id) {
    let index = this.elems.findIndex((user) => {
        if (user.$id == id) {
            return true;
        }
    });
    return index;
}

  static get observers() {
    return [
        '_routeChanged(routeData.ID)'
    ];
}

_routeChanged(id) {

    console.log("Route Change - value is unchecked", id);

    this.docID = id;

}

_docIDChanged(id) {

    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.

    var page = this;

    
    firebase.firestore()
        .collection("Projects")
        .doc("TestingProject")
        .collection("collector_Browser")
        .doc(this.docID).onSnapshot((doc) => {
            page.browser = doc.data();
            
        });

       

    console.log("Page ID Changed - This one can be called via software. Changed to: ", id);
}


  
  _clickError(){
   
    this.set('route.path', 'errorinfo');
}

  static get properties() {
    return {
        bErrors: {
            type: Array
            
        }
    };
  }
}

window.customElements.define('ss-user-detail', SSUserDetail);
