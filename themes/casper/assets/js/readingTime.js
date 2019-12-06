$(document).ready(function() {
    var txt = $('.post-content')[0].textContent,
    wordCount = txt.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;

    var wordCountings = wordCount + "words";
    $('article .words').html(wordCountings);
});