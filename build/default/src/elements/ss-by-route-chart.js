import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/paper-spinner/paper-spinner.js";

class SSByRouteChart extends PolymerElement {
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
  
            <div class="user-chart"> 
                <div class="heading-row">
                    <div class="headings errors-heading">Errors</div>
                    <div class="headings last-seen-heading">Last Seen</div>
                    <div class="headings users-affected-heading"># Affected</div>
                    <div class="headings user-heading">Url</div>
                </div>

                <template is="dom-if" if="{{!routes.length}}">
                    <div class="spinner">
                        <paper-spinner active></paper-spinner>
                    </div>
                </template>
                
                <template is="dom-if" if="{{routes.length}}">
                    <template is="dom-repeat" items="{{routes}}" class="single-user">
                        <div class="user-info-row">
                            <div class="info-item errors-item">[[item.errorNo]]tba</div>
                            <div class="info-item last-seen-item">[[item.lastSeen]]tba</div>
                            <div class="info-item users-affect-item">[[item.usersAffect]]tba</div>
                            <div class="info-item user-item stand-out">[[item.sourceUrl]]</div>      
                        </div>   
                    </template>
                </template>
            </div>
     
     
  
      `;
  }

  static get properties() {
    return {
      routes: {
        type: Array
      }
    };
  }

  ready() {
    super.ready();
    var db = firebase.firestore();
    this.set('routes', []);
    var collectorRef = db.collection("Projects").doc("TestingProject").collection("collector_Environment"); //in future once errors amount is added into db change order by to errors amount -hm

    collectorRef.onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          let newElem = this.makeElem(change);
          this.push('routes', newElem);
        }

        if (change.type === "modified") {
          let modifiedElement = this.makeElem(change);
          let index = this.getElemIndex(change.doc.id);
          this.set(`routes.${index}`, modifiedElement);
        }

        if (change.type === "removed") {
          let deletedElement = this.getElemIndex(change.doc.id);
          this.splice('routes', deletedElement, 1);
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

window.customElements.define('ss-by-route-chart', SSByRouteChart);