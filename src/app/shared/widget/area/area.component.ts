import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  chartOptions = {};
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Historic and Estimated worldwide population growth by origin'
      },
      subtitle: {
        text: 'source: abhisofriendly'
      },
      xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          text: 'Billions'
        },
        labels: {
          // formatter : function() {
          //   return this.value /1000 ;
          // }
        }
      },
      tooltip: {
        split: true,
        valueSuffix: 'millions'
      },
      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666'
          }
        }
      },
      series: [
        {
          name: 'asia',
          data : [502, 635, 809, 947, 1402, 2555, 76767]
        },
        {
          name: 'aferica',
          data: [102, 103,107,202,240,280]
        }
      ]
    }
  }

}
