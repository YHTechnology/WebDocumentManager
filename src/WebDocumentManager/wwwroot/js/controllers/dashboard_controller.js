angular.module('App').controller('DashboardController',
    function ($rootScope, $scope, $http, $timeout) {
        $scope.$on('$viewContentLoaded', function () {
            App.initAjax();
        });

        //This is not a highcharts object. It just looks a little like one!
        $scope.chartConfig = {

            options: {
                //This is the Main Highcharts chart config. Any Highchart options are valid here.
                //will be overriden by values specified below.
                chart: {
                    type: 'pie'
                },
                tooltip: {
                    style: {
                        padding: 10,
                        fontWeight: 'bold'
                    }
                }
            },
            //The below properties are watched separately for changes.

            //Series object (optional) - a list of series using normal Highcharts series options.
            series: [{
                data: [{
                    name:"建安代开",
                    y:10
                }, 
                {
                    name:'专票代开',
                    y:15
                },
                {
                    name:'普票代开',
                    y:12
                },
                {
                    name:'固定户',
                    y:16
                },
                ]
            }],
            //Title configuration (optional)
            title: {
                text: '纳税人比例'
            },
            //Boolean to control showing loading status on chart (optional)
            //Could be a string if you want to show specific loading text.
            loading: false,
            //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
            //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
            xAxis: {
                currentMin: 0,
                currentMax: 20,
                title: { text: '比例' }
            },
            //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
            useHighStocks: false,
            //size (optional) if left out the chart will default to size of the div or something sensible.
            //function (optional)
            func: function (chart) {
                //setup some logic for the chart
            }
        };


         //This is not a highcharts object. It just looks a little like one!
        $scope.TaxChart = {

            options: {
                //This is the Main Highcharts chart config. Any Highchart options are valid here.
                //will be overriden by values specified below.
                chart: {
                    type: 'column'
                },
                tooltip: {
                    style: {
                        padding: 10,
                        fontWeight: 'bold'
                    }
                }
            },
           
            //The below properties are watched separately for changes.

            //Series object (optional) - a list of series using normal Highcharts series options.
            series: [{
                name: '纳税',
                data: [{
                    name:"建安代开",
                    color: '#a40',
                    y:9000
                }, 
                {
                    name:'专票代开',
                    color: '#04a',
                    y:7000
                }
                ]
            }],
            //Title configuration (optional)
            title: {
                text: '交款'
            },
            //Boolean to control showing loading status on chart (optional)
            //Could be a string if you want to show specific loading text.
            loading: false,
            //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
            //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
            xAxis: {
                categories : ['应缴合计','已缴合计'],
                //currentMin: 100000,
                //currentMax: 0,
                //title: { text: '元' }
            },
            yAxis: {
                title: { text: '元' }
            },
            //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
            useHighStocks: false,
            //size (optional) if left out the chart will default to size of the div or something sensible.
            //function (optional)
            func: function (chart) {
                //setup some logic for the chart
            }
        };

    });