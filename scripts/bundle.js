(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// target elements
var $loadingButton = $('#loading-button');

// create functions
function loadingTime() {
    $loadingButton.prop('disabled', true);
    $loadingButton.html('Loading...');
    setTimeout(originalButton, 4000);
}

function originalButton() {
    $loadingButton.prop('disabled', false);
    $loadingButton.html('Submit');
}

// add event listener
$loadingButton.on('click', loadingTime);

// $(function() {
//     $("#progressbar").progressbar({ value: 0 });
//     setTimeout(updateProgress, 500);
//     });

// function updateProgress() {
//   var progress;
//   progress = $("#progressbar")
//     .progressbar("option","value");
//   if (progress < 100) {
//       $("#progressbar")
//         .progressbar("option", "value", progress + 1);
//       setTimeout(updateProgress, 500);
//   }
// }

function makeMoney() {
    $("#makeMoney").attr('disabled', 'disabled');
    fillAgain();
}

function fillAgain() {
    setTimeout(function () {
        if ($("#progressbar").find('div').length <= 10) {
            $("#divfillmeUp").append("<div style='background-color: red; width: 10%; height: 1%;float: left'></div>");
            fillAgain();
        }
    }, 2000);
}

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map