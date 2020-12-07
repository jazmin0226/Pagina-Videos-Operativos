function fillVideo(url) {  
  $('#frameId').attr('src', url);
  $('#modalId').modal();
  
}

$('.btnAction').on('click', function() {
    fillVideo(this.dataset.url);
});