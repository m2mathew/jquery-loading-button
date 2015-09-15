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
