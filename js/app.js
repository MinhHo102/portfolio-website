$(document).ready(function() {
  $('#page_holder').pagify({
    pages: ['front.html', 'about.html', 'resume.html', 'projects.html'],
    'default': 'front.html',
    animation: 'fadeIn',
    animationOut: 'fadeOut',
    cache: true
    onChange: select
  });
});



function select(pageName){
  console.log(pageName);
  $('#' + pageName).click();
}
