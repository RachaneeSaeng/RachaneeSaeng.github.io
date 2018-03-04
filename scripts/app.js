var $ = require('jquery');
window.$ = $;

var jQuery = require('jquery');
window.jQuery = jQuery;
var jQueryEasing = require('jquery-easing');

var Highcharts = require('highcharts');

var PhotoSwipe = require('photoswipe');
var PhotoSwipeUI_Default = require('photoswipe/dist/photoswipe-ui-default');

$(function() {  

    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', onClickNav);
    createSkillChart();
    // createJobChart();
    initPhotoSwipeFromDOM('.my-gallery');  

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function() { console.log('Service Worker Registered'); });
    } 
    
});

function onClickNav(e) {
    e.preventDefault();

    $(document).off("scroll");                
    $('.page-scroll a').each(function () {
        $(this).removeClass('active');
    })
    $(this).addClass('active');    
    
    var target = $(this).prop("hash");
    
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top+2
    }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
}

function onScroll(e){
    var scrollPos = $(document).scrollTop();

    $('.page-scroll a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href")); 

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.page-scroll a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

function createSkillChart() {
    var chart;  
    var chartData;
    var currentSize;

    var xAxisLabels = {
        0: ' ',
        12.5: 'Front-End',
        37.5: 'Back-End',        
        62.5: 'Methodology', 
        87.5: 'Tools'
    };

    var yAxisLabels = {
        0: ' ',
        20: 'Beginner',
        40: 'Familiar',
        60: 'Proficient',
        80: 'Expert', 
        100: 'Master'
    };

    function getSize() {
        var pageSize = window.innerWidth;
        if (pageSize < 600)
            return 'S';
        if (pageSize < 1000)
            return 'M';
        return 'L';
    }
    currentSize = getSize();

    function setAxisLabel(ch, size) {
        if (size == 'S') 
            ch.yAxis[0].update({ labels: { enabled: false } });
        else
            ch.yAxis[0].update({ labels: { enabled: true } });
    }

    function genDataToPlot(data, size) {
        var multiplyer = 1;
        if (size == 'S') 
            multiplyer = 0.4
        else if (size == 'M') 
            multiplyer = 0.7
        
        return data.filter((d) => d.isShow).map(
            function(d) {                                 
                return {
                        name: d.name,
                        x: d.x, y: d.y,
                        marker: {
                                symbol: d.marker.symbol,
                                width: d.marker.width * multiplyer, height: d.marker.height * multiplyer
                            }
                    };
            });
    }

    function plotChart(data, xLabels, yLabels){        
        return new Highcharts.Chart({
            chart: {
                type: 'scatter',
                renderTo: 'skillChart',
                height: 450,         
                animation: {
                    duration: 100
                }
            },
            title: null,
            credits: {
                enabled: false
            },
            xAxis: {
                title: null,
                min: 0,
                max: 100,
                tickInterval: 12.5,
                labels: {
                    formatter: function () {
                        var value = xLabels[this.value];
                        return value ? value : ' ';
                    }
                },
                plotBands: [
                    { 
                        color: '#F2FFFA',
                        from: 0,
                        to: 25
                    }, { 
                        color: '#F6F6F7',
                        from: 25,
                        to: 50
                    }, { 
                        color: '#F2FFFA',
                        from: 50,
                        to: 75
                    }, { 
                        color: '#F6F6F7',
                        from: 75,
                        to: 100
                    }
                ],
            },
            yAxis: {
                title: null,
                min: 0,
                tickInterval: 20,
                labels: {
                    formatter: function () {
                        var value = yLabels[this.value];
                        return value ? value : ' ';
                    }
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                scatter: {                
                    marker: {
                        radius: 1,
                        states: {
                            hover: {
                                enabled: true                            
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                    tooltip: {
                        headerFormat: '',
                        pointFormat: '<b>{point.name}</b>'
                    }
                }
            },        
            series: [{
                name: 'Skill',     
                color: 'rgba(96, 128, 153, .5)',       
                data: data
            }]
        });
    }

    function getDataAndPlotChart() {    

         var dataUrl = "data/skills.json";

        //  // Offline data
        //  if ('caches' in window) {
        //      caches.match(dataUrl).then(response => {
        //         if (response) {
        //         response.json().then(result => {
        //             if (!chartData) {
        //                 chartData = result.data
        //                 var dataToPlot = genDataToPlot(chartData, currentSize)
        //                 chart = plotChart(dataToPlot, xAxisLabels, yAxisLabels);   
        //                 setAxisLabel(chart, currentSize);
        //                 console.log("plot from caches");
        //             }                     
        //         });
        //         }
        //     });
        //  }
         
         if(self.fetch) {
            fetch(dataUrl)
            .then((response) => {
                if(response.ok) {
                        response.json().then(json => {
                            if (!chartData) {
                                chartData = json.data
                                var dataToPlot = genDataToPlot(chartData, currentSize)
                                chart = plotChart(dataToPlot, xAxisLabels, yAxisLabels);  
                                setAxisLabel(chart, currentSize); 
                                console.log("plot from fetch");
                            }   
                        });
                } else {
                    console.log('Network response was not ok.');
                }
            })
            .catch(error => {
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
        } 
        else {
            $.ajax({
                url: dataUrl,
                success: function (result) {            
                    if (!chartData) {
                        chartData = result.data
                        var dataToPlot = genDataToPlot(chartData, currentSize)
                        chart = plotChart(dataToPlot, xAxisLabels, yAxisLabels); 
                        setAxisLabel(chart, currentSize);  
                        console.log("plot from ajax");
                    }  
                }      
            }); 
        }
        
    }  

    getDataAndPlotChart();
   
    //Resize image when resize page
    $(window).resize(function() {
        var size = getSize(); 
        if (currentSize != size && chartData) {
            currentSize = size;
            var data = genDataToPlot(chartData, currentSize);
            chart.series[0].setData(data, true);    
            setAxisLabel(chart, currentSize);       
        }            
    });
}

function initPhotoSwipeFromDOM(gallerySelector) {
    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    function parseThumbnailElements(el) {
        //var thumbElements = el.childNodes,
        var thumbElements = el.getElementsByTagName("figure"),
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for (var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if (figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };

            if (figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };

    // triggers when user clicks on thumbnail
    function onThumbnailsClick(e) {        
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function (el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if (!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute				
        var clickedGallery = clickedListItem.parentNode.parentNode,
            childNodes = clickedGallery.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }

            if (childNodes[i] === clickedListItem.parentNode) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }

        if (index >= 0) {
            // open PhotoSwipe if valid index found					
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    function photoswipeParseHash() {
        var hash = window.location.hash.substring(1),
        params = {};

        if (hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function (index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            }

        };

        // PhotoSwipe opened from URL
        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }

        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = $(gallerySelector);            
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
}    

// var clickedJob = '';
// function createJobChart() {
//     Highcharts.theme = {
//         colors: ["#EB0074", "#109618", "#0099C6", "#DC3912", "#3366CC", "#990099", "#FFB700"]
//     };
//     // Apply the theme
//     Highcharts.setOptions(Highcharts.theme);
    
//     $('#jobPieChart').highcharts({
//         chart: {
//             type: 'pie',
//             margin: 0,
//             backgroundColor: 'rgba(255, 255, 255, 0)',
//             animation: {
//                 duration: 800
//             }
//         },
//         credits: {
//             enabled: false
//         },
//         title: null,
//         tooltip: {
//             headerFormat: '',
//     pointFormat: '<span style="color:{point.color}">Click to view detail.</span>.'
//     },
//         plotOptions: {
//             pie: {
//                 size: '90%',
//                 allowPointSelect: true,
//                 cursor: 'pointer',
//                 dataLabels: {
//                     enabled: true,
//                     inside: true,
//                     align: "center",
//                     verticalAlign: "middle",
//                     distance: -50,
//                     format: '{point.name}: {point.y}%'
//                 }
//             }
//         },
//         series: [{
//             name: "Percent",
//             colorByPoint: true,
//             data: [{
//                 name: "Software Analysis<br/>and Design",
//                 y: 30
//             }, {
//                 name: "Software<br/>Documentation",
//                 y: 20
//             }, {
//                 name: "Coding and<br/>Testing",
//                 y: 40
//             }, {
//                 name: "Others",
//                 y: 10
//             }],
//             point: {
//                 events: {
//                     click: function(e) {
//                         if (clickedJob == this.name) {
//                             clickedJob = '';
//                             $('#jobDescription').html('');
//                         }
//                         else {
//                             clickedJob = this.name;
//                             var jobDesc = '';
//                             if (clickedJob == 'Software Analysis<br/>and Design') { 
//                                 jobDesc = '<p>Capture user requirements and analyze business conditions then design system structure and business logic.</p>';
//                             }
//                             else if (clickedJob == 'Software<br/>Documentation') { 
//                                 jobDesc = '<p>Provide system documents including system requirement, system architecture/design, test plan/test result and system deployment.</p>';
//                             }
//                             else if (clickedJob == 'Coding and<br/>Testing') { 
//                                 jobDesc = '<p>Develop, integrate, test and implement related application components including front-end, back-end and database.</p>';
//                             }
//                             else if (clickedJob == 'Others') { 
//                                 jobDesc = '<p>Train new hires and colleagues in topics Basic SQL, PL/SQL Programming and Salesforce.com Development. Sometimes, lead teamwork activities for example IT new year party and corporate social activities.</p>';
//                             }
//                             $('#jobDescription').html(jobDesc);
//                         }	
//                     }
//                 }
//             },
//         }]
//     });
// }