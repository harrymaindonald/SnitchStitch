import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';
import 'chart.js/dist/Chart.bundle.min.js';

class SSLineChart extends PolymerElement {

  static get template() {
      return html `
      <style include="shared-styles">
          .wrapper{
              position: relative;
              width: 100%;
              height: 100%;
              margin: auto; 
          }

          label{
            color:#14213D;
          }

          

          
      </style>
    

      <div class="wrapper">
      <canvas id="lineChart"></canvas>
      </div>
   
  `;
  }

  connectedCallback() {
      super.connectedCallback();

      var ctx = this.shadowRoot.querySelector("#lineChart");
      var lineChart = new Chart(ctx, {
          type: 'line',
          
          data: {
              disabledlabels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              datasets: [{
                  label: 'Leigh Jackson',
                  data: [{
                          t: new Date("10/03/2018"),
                          y: Math.round(Math.random() * 100),
                          id: 1234
                      }, {
                          t: new Date("10/04/2018"),
                          y: Math.round(Math.random() * 100),
                          id: 8923589
                      }, {
                          t: new Date("10/05/2018"),
                          y: Math.round(Math.random() * 100),
                          id: 1289434189
                      }, {
                          t: new Date("10/06/2018"),
                          y: Math.round(Math.random() * 100),
                          id: 12804983
                      }, {
                          t: new Date("10/07/2018"),
                          y: Math.round(Math.random() * 100)
                      }, {
                          t: new Date("10/08/2018"),
                          y: Math.round(Math.random() * 100)
                      }, {
                          t: new Date("10/09/2018"),
                          y: Math.round(Math.random() * 100)
                      },

                  ],
                  backgroundColor: [
                      'rgba(0,138,230, 0.05)'
                  ],
                  borderColor: [
                      'rgba(0,138,230,1)'
                  ],
                  borderWidth: 2,
                  defaultFontColor: '#14213D'

              }, {
                  label: 'UFG',
                  data: [{
                          t: new Date("10/03/2018"),
                          y: Math.round(Math.random() * 100),
                          id: 1234
                      }, {
                          t: new Date("10/04/2018"),
                          y: Math.round(Math.random() * 100),
                          id: 8923589
                      }, {
                          t: new Date("10/05/2018"),
                          y: Math.round(Math.random() * 100),
                          id: 1289434189
                      }, {
                          t: new Date("10/06/2018"),
                          y: Math.round(Math.random() * 100),
                          id: 12804983
                      }, {
                          t: new Date("10/07/2018"),
                          y: Math.round(Math.random() * 100)
                      }, {
                          t: new Date("10/08/2018"),
                          y: Math.round(Math.random() * 100)
                      }, {
                          t: new Date("10/09/2018"),
                          y: Math.round(Math.random() * 100)
                      },

                  ],
                  
                  
                  backgroundColor: [
                      'rgba(18, 147, 28, 0.05)'
                  ],
                  borderColor: [
                      'rgba(18, 147, 28,1)'
                  ],
                  borderWidth: 2

              },{
                  label: 'Actively',
                  data: [{
                          t: new Date("10/03/2018"),
                          y: Math.round(Math.random() * 100),
                          id: 1234
                      }, {
                          t: new Date("10/04/2018"),
                          y: Math.round(Math.random() * 100),
                          id: 8923589
                      }, {
                          t: new Date("10/05/2018"),
                          y: Math.round(Math.random() * 100),
                          id: 1289434189
                      }, {
                          t: new Date("10/06/2018"),
                          y: Math.round(Math.random() * 100),
                          id: 12804983
                      }, {
                          t: new Date("10/07/2018"),
                          y: Math.round(Math.random() * 100)
                      }, {
                          t: new Date("10/08/2018"),
                          y: Math.round(Math.random() * 100)
                      }, {
                          t: new Date("10/09/2018"),
                          y: Math.round(Math.random() * 100)
                      },

                  ],
                  backgroundColor: [
                      'rgba(133, 38, 117, 0.05)'
                  ],
                  borderColor: [
                      'rgba(133, 38, 117,1)'
                  ],
                  borderWidth: 2

              }, ]
          },
          options: {
              maintainAspectRatio: false,
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }],
                  xAxes: [{
                      type: 'time',
                      time: {
                          unit: 'day'
                      }
                  }]
              },
              onClick: function(event) {
                  console.log(arguments);
                  console.log(lineChart.getElementAtEvent(event));
                  this.set('route.path', 'dailysummary');
              }.bind(this)
          }
      });

      window.addEventListener('resize', function () {
          window.setTimeout(() => {
              lineChart.resize()
          });
      });
  }



}

window.customElements.define('ss-linechart', SSLineChart);