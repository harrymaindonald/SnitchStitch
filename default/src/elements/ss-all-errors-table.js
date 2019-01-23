import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/iron-icon/iron-icon.js";
import "../../node_modules/@polymer/iron-icons/iron-icons.js";

class SSAllErrorsTable extends PolymerElement {
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
          .actions-heading{
            width:100px;
            text-align:end;
            padding-right:10px;
          }
          /*chart contents styling*/
          .user-info-row{
              padding-left: 10px;
              width: 100%;
              display:table;
              border-bottom: 1px solid #efefef;   
              
          }

          .info-item a{
            text-decoration:none;
            color: #757575;
           
          }
          
          .user-info-row > div{
              display:table-cell;
              padding-top:12px;
              padding-bottom:12px;
              
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

          .action-item{
            width:100px;
            text-align:end;
            padding-right:10px;
          }
          iron-icon{
              width:20px;
          }

          iron-icon:hover{
            color:#f04c36;
            cursor:pointer;
          }

          a{
            text-decoration:none;
            color: inherit;
            cursor: auto;
          }

          /* Tooltip container */
          .tooltip {
              position: relative;
              display: inline-block;        
          }
          /* Tooltip text */
          .tooltip .tooltiptext {
              visibility: hidden;
              width: 60px;
              background-color: #14213D;
              color: #fff;
              text-align: center;
              padding: 5px 0;
              border-radius: 6px;
              position: absolute;
              z-index: 1;
              bottom: 125%;
                left: 50%;
              margin-left: -32px;
          }
          /* Tooltip arrow */
          .tooltip .tooltiptext::after {
              content: "";
              position: absolute;
              top: 100%;
              left: 50%;
              margin-left: -5px;
              border-width: 5px;
              border-style: solid;
              border-color: #14213D transparent transparent transparent;
          }
        
          /* Show delete message when hover over icon */
          .tooltip:hover .tooltiptext {
              visibility: visible;
              opacity: 0.8;
          }

            
      </style>
   

        <div>
          <div class="user-chart"> 
              <div class="heading-row">
                  <div class="headings errors-heading">Instances</div>
                  <div class="headings last-seen-heading">Last Seen</div>
                  <div class="headings users-affected-heading"># Affected</div>
                  <div class="headings user-heading">Message</div>
                  <div class="headings actions-heading">Action</div>
              </div>
              
              
                <template is="dom-repeat" items="{{errors}}" class="single-user" sort="sortByCount">
                    <a href="[[rootPath]]errorinfo/[[item._id]]">
                        <div class="user-info-row">
                            <div class="info-item errors-item">[[item.instances.length]]</div>
                            <div class="info-item last-seen-item">[[item.lastSeen]]tba</div>
                            <div class="info-item users-affect-item">[[item.usersAffect]]tba</div>
                           <div class="info-item user-item stand-out">[[item.name]]: [[item.message]]</div>
                            <div class="info-item action-item">
                                <div class="tooltip"><iron-icon icon="ss-icons:ignore"></iron-icon> <span class="tooltiptext">Ignore</span></div>
                                <div class="tooltip"><iron-icon icon="ss-icons:trash-alt"></iron-icon> <span class="tooltiptext">Delete</span></div>
                            </div> 
                        </div>  
                    </a> 
                </template>
          </div>
      </div>
   

    `;
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

  static get properties() {
    return {
      errors: {
        type: Array
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    var db = firebase.firestore();
    this.set('errors', []);
    db.collection("Projects").doc("TestingProject").collection("error_generic").onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
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
    let index = this.elems.findIndex(user => {
      if (user.$id == id) {
        return true;
      }
    });
    return index;
  }

}

window.customElements.define('ss-all-errors-table', SSAllErrorsTable);