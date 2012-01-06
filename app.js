function convertDataToArray(data){
  return data.split(',');
}

function displayLink(link){
  var the_link = JSON.parse(localStorage.getItem(link));

  $('#links').append("<li><a href='" + the_link.link + "'>" + the_link.text + "</a></li>");
}

var alllinks = new Array();

function buildJSON(link, text){
  return '{ "text": "' + text + '", "link": "' + link + '"}';
}

function saveLink(link, text){
  var linkname = "link" + alllinks.length;
  console.log(linkname);
  alllinks[alllinks.length] = linkname;
  console.log(alllinks);
  localStorage.setItem(linkname, buildJSON(link,text));
  localStorage.setItem("links", alllinks.join(','));
  displayLink(linkname);
}

$(document).ready(function(){
  if(localStorage.length > 0){
    alllinks = convertDataToArray(localStorage.links);

    for(var i = 0; i < alllinks.length; i++){
      displayLink(alllinks[i]);
    }

  } else {
    localStorage.links = "link1";
    localStorage.link1 = '{ "text" : "Buddy Lindsey", "link" : "http://buddylindsey.com" }';
    console.log(localStorage.link0);
  } 

  $("#addlinks").click(function() {
    $("#addlinkform").slideToggle('fast');
  });

  $("#submit").click(function(){
    saveLink($("#link").val(), $("#linktext").val());
    return false;
  });

});
