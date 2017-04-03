// author: Michael Reynolds - github.com/michaelreynolds
// date: April 2016
//
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-fullscreen/jquery.fullscreen-min.js
//= require d3
//= require bootstrap-sprockets
//= require_tree ./channels
//= require_tree .
$(document).ready(function() {

    if ($("#barcode").length) {
        generateCode39Barcode();
    }

    $("#patient_mobile_number:input").mask('+1-(000)-000-0000');
    $("#patient_dob:input").mask('00/00/0000');

    $('.message a').click(function() {
        $('form').animate({
            height: "toggle",
            opacity: "toggle"
        }, "slow");
    });

    $('#patient_zip').focusout(function() {
        $('#patient_dob').focus();
    });

    if ($("#patient_zip").length) {
        var state, city;
        var sumitted = false;
        $("#patient_zip:input").on('keyup, focusout', function() {
            if ($(this).val().length == 5 && $.isNumeric) {
                console.log($(this).val());
                $.getJSON('https://api.zippopotam.us/us/' + $(this).val())
                    .success(function(data) {
                        console.log(data["places"][0]["place name"]);
                        console.log(data["places"][0]["state abbreviation"]);
                        $("#patient_state:input").val(data["places"][0]["state abbreviation"]);
                        $("#patient_city:input").val(data["places"][0]["place name"]);
                    })
                    .fail(function() {
                        console.log("Zipcode not found. Please check the number.");
                        $("#patient_state:input").val("");
                        $("#patient_city:input").val("");
                        $("#patient_zip:input").val("");
                        // $('#patient_zip').blur(function(){
                        // 	$('#patient_zip').focus();
                        // });
                    });
            } else {
                $("#patient_state:input").val("");
                $("#patient_city:input").val("");
                console.log("Zipcode is not a valid length. Please add a zipcode.");
            }
        });
    }

    if ($("#assessment").length) {
        // modified from: www.deadosaurus.com/detect-a-usb-barcode-scanner-with-javascript
        var pressed = false;
        var chars = [];
        $(window).keypress(function(e) {
            if (e.which >= 48 && e.which <= 57) {
                chars.push(String.fromCharCode(e.which));
            }
            console.log(e.which + ":" + chars.join("|"));
            if (pressed === false) {
                setTimeout(function() {
                    if (chars.length === 6) {
                        var barcode = chars.join("");
                        console.log("Barcode Scanned: " + barcode);
                        $(".barcode-search-field").val("");
                        $(".barcode-search-field").val(barcode);
                        //if (! $(".barcode-search-field").is(":focus")){}
                        $('#barcode_search').submit();
                    } else if ((!$(".barcode-search-field").is(":focus")) || (chars.length > 6) || ($(".barcode-search-field").val().length > 6)) {
                        $(".barcode-search-field").val("");
                        console.log("'not focused' or 'is not a barcode' or 'input value is longer than 6 chars' so clear input value");
                    }
                    chars = [];
                    pressed = false;
                }, 300);
            }
            pressed = true;
        });
    }

    //https://github.com/private-face/jquery.fullscreen
    // open in fullscreen
    $('#fullscreen-button').click(function() {
        console.log('Entering Fullscreen');
        $('#fullscreen').toggleFullScreen();
        //$('#fullscreen').fullScreen(true);
    });

});
