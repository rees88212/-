function logview(cookieName) {
    const storedCookieName = 'visitedPages'; // Fixed name for the cookie that stores the list

    // Function to get the value of a cookie by name
    function getCookie_pagevisit(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    // Function to set a cookie
    function setCookie_pagevisit(name, value) {
        const domain = window.location.hostname.startsWith('www.') ? window.location.hostname.substring(4) : window.location.hostname;
        document.cookie = name + "=" + encodeURIComponent(value) + "; path=/; domain=." + domain;
    }

    // Retrieve the current list from the cookie or initialize a new array if none exists
    let currentPageList = getCookie_pagevisit(storedCookieName) ? getCookie_pagevisit(storedCookieName).split(',') : [];

    // Check if the cookieName is already in the list
    if (currentPageList.includes(cookieName)) {
        console.log("Page '" + cookieName + "' has already been visited.");
    } else {
        // Add the new page to the list and update the cookie
        currentPageList.push(cookieName);
        setCookie_pagevisit(storedCookieName, currentPageList.join(',')); // Update the cookie with the new list
        console.log("Page '" + cookieName + "' has been added to visited pages.");

        // Make a POST request
        fetch('https://internal.mobrog.com/stats/update-page-stats.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'pageid=' + encodeURIComponent(cookieName)
            })
            .then(response => response.text()) // Retrieving the text of the response
            .then(text => console.log('Response Text:', text))
            .catch((error) => console.error('Error:', error));
    }
}

function logfeature(pageid) {


    const http = new XMLHttpRequest()
    http.open('POST', 'https://internal.mobrog.com/stats/update-feature-stats.php')
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    var datainlogview = 'pageid=' + pageid;
    http.send(datainlogview) 
    http.onload = function() {
        // Do whatever with response
        console.log(http.responseText);
    }
}


function telegram_view_fetch(tid) {


    const http = new XMLHttpRequest()
    http.open('POST', 'https://internal.mobrog.com/telegram/telegram.php')
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    var datainlogtlg = 'tid=' + tid;
    http.send(datainlogtlg) 
    http.onload = function() {
        // Do whatever with response
        document.getElementById("tlgc").innerHTML = http.responseText;
    }
}