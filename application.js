$(document).ready(function() {
  $('#style_editor').on('submit', function(e) {
    e.preventDefault();
    var selector = $('input[name="selector"]').val();
    var property = $('input[name="property"]').val();
    var value = $('input[name="value"]').val();
    $(selector).css(property, value);
  });
});