import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/paper-spinner/paper-spinner.js";

class SSByBrowserChart extends PolymerElement {
  static get template() {
    return html`
          <style include="shared-styles">
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
            .errors-heading{
                width:100px;
            }
            .last-seen-heading{
                width:125px;
            }
            .users-affected-heading{
                width:100px;
                text-align:center;
            }

            .user-heading{
                padding-left:20px;
            }
            /*chart contents styling*/
            .user-info-row{
                padding-left: 10px;
                width: 100%;
                display:table;
                border-bottom: 1px solid #efefef;
                
            }
            
            .user-info-row > div{
                display:table-cell;
                padding-top:12px;
                padding-bottom:12px;
                padding-right:0px;
            }

             .user-info-row:hover{
                background:#eeeeef;
            }

            .errors-item{
                width:100px;
            }
            .last-seen-item{
                width:125px;       
            } 

            .user-item{
                padding-left:20px;
            }
            
            .users-affect-item{
                width: 100px;
                text-align:center;
            }
            /* indivdual segment background color
            .user-info-row{
                background-color: #F0F0F0;
            }

            .user-info-row:nth-child(odd){
                background-color:#ddd;
            } */

            .spinner{
                text-align:center;
            }

            paper-spinner{
                padding: 23px;
            }

            a{
            text-decoration:none;
            color: inherit;
            cursor: auto;
          }

          </style>
                
           <!-- test button to add data <button on-click="_addData">Add</button> -->
            
        

        
       
            <div class="user-chart"> 
                <div class="heading-row">
                    <div class="headings errors-heading">Errors</div>
                    <div class="headings last-seen-heading">Last Seen</div>
                    <div class="headings users-affected-heading"># Affected</div>
                    <div class="headings user-heading">Browser</div>
                </div>

                <template is="dom-if" if="{{!browsers.length}}">
                    <div class="spinner">
                        <paper-spinner active></paper-spinner>
                    </div>
                </template>
                
                <template is="dom-if" if="{{browsers.length}}">
                    <template is="dom-repeat" items="{{browsers}}" class="single-user" sort="sortByCount">
                        <a href="[[rootPath]]browserdetail/[[item._id]]">
                            <div class="user-info-row">
                                <div class="info-item errors-item">[[item.instances.length]]</div>
                                <div class="info-item last-seen-item">[[_getLastSeen]]</div>
                                <div class="info-item users-affect-item">[[item.usersAffect]]tba</div>
                                <div class="info-item user-item stand-out">[[item.name]] [[item.version]]</div>      
                            </div>
                        </a>
                    </template>
                </template>
            </div>
      
  
      `;
  }

  static get properties() {
    return {
      browsers: {
        type: Array
      }
    };
  }

  sortByCount(a, b) {
    var nameA = a.instances.length;
    var nameB = b.instances.length;

    if (nameA < nameB) {
      return 1;
    }

    if (nameA > nameB) {
      return -1;
    }

    return 0;
  }

  ready() {
    super.ready();
    var db = firebase.firestore();
    this.set('browsers', []); //in future once errors amount is added into db change order by to errors amount -hm

    db.collection("Projects").doc("TestingProject").collection("collector_Browser").onSnapshot(querySnapshot => {
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
    console.log(newElem.instances[0]);
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

window.customElements.define('ss-by-browser-chart', SSByBrowserChart);