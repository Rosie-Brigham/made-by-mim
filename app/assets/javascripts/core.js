core = {}; // Extend from this core object

var readyCore = function() {
  core.readyImage();
  core.readyName();
  core.readyMedium();
  core.readyInfo();
  core.readyPrice();
};

$(document).on('page:load ready', readyCore);

core.readyImage = function() {
  $(".image").click(function() {
    var image = $(this).attr("rel");
    $('#image').hide();
    $('#image').fadeIn('slow');
    $('#image').html('<img src="' + image + '"/>');

    return false;
  });
};

core.readyName = function() {
  $(".description").click(function() {
    var desc = $(this).find('.name');

    $('#title').hide();
    $('#title').fadeIn('slow');
    $('#title').text(desc.text());
  });
};

core.readyMedium = function() {
  $(".description").click(function() {
    var desc = $(this).find('.medium');

    $('#medium').hide();
    $('#medium').fadeIn('slow');
    $('#medium').text(desc.text());
  });
};

core.readyInfo = function() {
  $(".description").click(function() {
    var desc = $(this).find('.info');

    $('#info').hide();
    $('#info').fadeIn('slow');
    $('#info').text(desc.text());
  });
};

core.readyPrice = function() {
  $(".description").click(function() {
    var desc = $(this).find('.price');

    $('#price').hide();
    $('#price').fadeIn('slow');
    $('#price').text(desc.text());
  });
};

