
<!-- #high chart props -->
<highcharts-chart 
    [Highcharts]="Highcharts"
    [constructorType]="chartOptions"
    [options]="chartOptions"
    [callbackFunction]="chartCallback"
    [(update)]="updateFlag"
    [(oneToOne)]="oneToOneFlag"
    [runOutsideAngular]="runOutsideAngularFlag"
    style="width: 100%; height: 400px; display:block;" 
>

</highcharts-chart>