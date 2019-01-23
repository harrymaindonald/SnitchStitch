import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/paper-spinner/paper-spinner.js";

class SSAffectedBrowsers extends PolymerElement {
  static get template() {
    return html`
       <style include="shared-styles">
              .list{
          width:100%;
          font-size: 14px;
         
      }
      h3{
          margin-top:0;
          border-bottom: 1px solid #f7f7f7;
      }

        .message{
          width:80%;
          text-align:left;   
      }
      
      .count{
          text-align:right;
      }

      .spinner{
                text-align:center;
            }

            paper-spinner{
                padding: 10px;
            }

             a{
            text-decoration:none;
            color: inherit;
            cursor: pointer;
          }
        </style>
                <h3><iron-icon icon="ss-icons:spider"></iron-icon> Affected Browsers</h3>
                <table class="list">
                    <thead>
                        <tr>
                            <th class="message">Browser</th>
                            <th class="count">Count</th>
                        </tr>
                    </thead>             
                    <tbody>
                        <template is="dom-if" if="{{!browsers.length}}">
                            <div class="spinner">
                                <paper-spinner active></paper-spinner>
                            </div>
                        </template>    
                    
                        <template is="dom-if" if="{{browsers.length}}">
                            <template is="dom-repeat" items="{{browsers}}">
                           
                                <tr>
                                    <td class="stand-out message"> <a href="[[rootPath]]browserdetail/[[item._id]]">[[item.name]] [[item.version]]</a></td>
                                    <td id="counter" class="count count-no">[[item.instances.length]]</td>
                                </tr>
                            
                            </template>
                        </template>
                    </tbody> 
                </table>
      
     
  
      `;
  }

  static get properties() {
    return {
      browsers: {
        type: Array,
        value: []
      },
      browser: {
        type: Object,
        value: null
      },
      project: {
        type: Object,
        value: null
      },
      instances: {
        type: Array
      }
    };
  }

  ready() {
    super.ready();
    var db = firebase.firestore();
    var collectorRef = db.collection("Projects").doc("TestingProject").collection("collector_Browser"); //in future once errors amount is added into db change order by to errors amount -hm

    collectorRef.orderBy("instances").limit(2).onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          let newElem = this.makeElem(change);
          this.push('browsers', newElem);
        }

        if (change.type === "modified") {
          let modifiedElement = this.makeElem(change);
          let index = this.getElemIndex(change.doc.id);
          this.set(`browsers.${index}`, modifiedElement);
        }

        if (change.type === "removed") {
          let deletedElement = this.getElemIndex(change.doc.id);
          this.splice('browsers', deletedElement, 1);
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
    let index = this.elems.findIndex(browser => {
      if (browser.$id == id) {
        return true;
      }
    });
    return index;
  }

}

window.customElements.define('ss-affected-browsers', SSAffectedBrowsers);