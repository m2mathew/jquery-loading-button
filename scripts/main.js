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
        setTimeout(function ()
        {
            if($("#progressbar").find('div').length <= 10)
            {
                $("#divfillmeUp").append("<div style='background-color: red; width: 10%; height: 1%;float: left'></div>");
                fillAgain();
            }
        },2000)
    }
