import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-spinner/paper-spinner.js';


class SSTopOccurances extends PolymerElement {
  static get template() {
    return html `
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
  <h3><iron-icon icon="ss-icons:alert"></iron-icon> Top Occurances</h3>
                <table class="list">
                    <thead>
                        <tr>
                            <th class="message">Message</th>
                            <th class="count">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                    <template is="dom-if" if="{{!errors.length}}">
                            <div class="spinner">
                                <paper-spinner active></paper-spinner>
                            </div>
                        </template> 
                        <template is="dom-if" if="{{errors.length}}">
                    <template is="dom-repeat" items="{{errors}}" sort="sortByCount">
                        <tr>
                            <td on-click="_toError" class="stand-out message"><a href="[[rootPath]]errorinfo/[[item._id]]">[[item.name]]: [[item.message]]</a></td>
                            <td  class="count count-no">[[item.instances.length]]</td>
                        </tr>
                        </template>
                        </template>
                    </tbody>
                </table>
            
                    
                        
                     
                      
   

    `;
  }
  static get properties() {
      return {
        errors: {
            type: Array
            
        }
      };
    }

   
    
    sortByCount(a, b){
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
  
    _toError() {
      this.set('route.path', 'errorinfo');
  }

  ready(){
      super.ready();
      
        this.set('errors',[]);

         
        //in future once errors amount is added into db change order by to errors amount -hm
        firebase.firestore().collection("Projects")
        .doc("TestingProject")
        .collection("error_generic")
        .limit(2)
        .orderBy("instances")
        .onSnapshot((querySnapshot) => {
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
      let index = this.elems.findIndex((browser) => {
        if(browser.$id == id) {
          return true;
        }
      });
      return index;
    }




}

window.customElements.define('ss-top-occurances', SSTopOccurances);