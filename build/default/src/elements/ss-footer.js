import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";

class SSFooter extends PolymerElement {
  static get template() {
    return html`
          <style>
              footer{
                position: fixed;
                margin-bottom: 0px;
                left: 0px;
                right: 0px;
                bottom:0px;
                background-color: #A39F9F;
                height: 40px;
                }

            .footer-bar{
                flex: 0 0 80%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: flex-end;
            }

            .copyright{
                font-size: 0.7em;
                padding-right: 24px;
            } 
          </style>
            <footer class="footer-bar">
                <p class="copyright">	&copy; 2018 Unify Digital </p>
            </footer>
      
  
      `;
  }

}

window.customElements.define('ss-footer', SSFooter);