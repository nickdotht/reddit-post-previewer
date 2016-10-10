$("#text-field").append('<div id="post-preview" class="md"></div>');

var   converter = new showdown.Converter();

$('textarea[name="text"]').on("input propertychange", function() {
  $("#post-preview").html(converter.makeHtml(this.value));
});
