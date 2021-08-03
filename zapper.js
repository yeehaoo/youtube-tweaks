function hideComments() {
    document.querySelectorAll('#masthead-ad')[1].style.display = "none";
    document.querySelector('ytd-comments').style.display = "none";
    document.querySelectorAll('#header')[2].style.display = "none";
    document.querySelector('#buttons > ytd-button-renderer').style.display = "none";
    document.querySelector('#end').style.display = "none";
    document.querySelector('#guide-content').style.display = "none";
    document.querySelector('#voice-search-button').style.display = "none";
    document.querySelector('#items > ytd-compact-radio-renderer').style.display = "none";
    document.querySelector('#guide-button').style.display = "none";
}

setTimeout(hideComments, 3000);
