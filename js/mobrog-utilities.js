function classChecker(target, name, checkInheritance) {
    "use strict";
    if (
        target.className &&
        // We cast to string as className could be
        // SVGAnimatedString for example
        target.className.toString().split(" ").indexOf(name) !== -1
    ) {
        return target;
    } else if (!checkInheritance) {
        return null;
    } else if (!target.parentElement) {
        return null;
    } else {
        return classChecker(
            target.parentElement,
            name,
            checkInheritance
        );
    }
}

function hasOrInheritsClass(target, name) {
    "use strict";
    if (classChecker(target, name, true)) {
        return true;
    }
    else {
        return false;
    }
}

//Checks if device is a mobile device and
//optionally if it is an android or iOS
function deviceIsMobile(deviceType) {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const iOSDevices = /iPhone|iPad|iPod/i;
    const androidDevices = /Android/i;

    return (
        deviceType === "iOS"
        ? iOSDevices.test(navigator.userAgent)
        : deviceType === "android"
        ? androidDevices.test(navigator.userAgent)
        : regex.test(navigator.userAgent)
    );
}

//Return amount of points required to reach the next level
function getPointsForCurrentAndPreviousLevel(points) {
    const allPoints = [
        {levelOne: 5001}, {levelTwo: 10001},
        {levelThree: 20001}, {levelFour: 40001},
        {levelFive: 60001}, {levelSix: 80001},
        {levelSeven: 100001}, {levelEight: 200001},
        {levelNine: 300001}, {levelTen: 400001},
        {levelEleven: 500001}, {levelTweleve: 600001}
    ];

    const lastLevelPoints = allPoints[11]["levelTweleve"];

    for (let i = 0; i < allPoints.length; i++) {
        const point = allPoints[i];
        const previousPoint = (
            i > 0
            ? allPoints[i - 1]
            : {levelZero: 0}
        )

        const levelPoints = point[Object.keys(point)[0]];
        const previousLevelPoints = previousPoint[Object.keys(previousPoint)[0]];

        if (points < levelPoints) {
            return {
                "currentLevel": levelPoints,
                "previousLevel": previousLevelPoints
            };
        }

        if (lastLevelPoints && points >= lastLevelPoints) {
            return {
                "currentLevel": 0,
                "previousLevel": 0
            };
        }
    }
}

//Sets the root variable --level-progress to the current progress level
function setUserLevelValue() {
    const userLevelProgressBar = document.getElementById("user-level-progress");
    if(!userLevelProgressBar) { return false; }
    const userLevelPoints = Number(userLevelProgressBar.getAttribute("data-current-level-points"));

    const pointsForNextLevel = getPointsForCurrentAndPreviousLevel(userLevelPoints)?.currentLevel;
    const pointsForPreviousLevel = getPointsForCurrentAndPreviousLevel(userLevelPoints)?.previousLevel;

    const strokeDashArrayString = getComputedStyle(document.documentElement).getPropertyValue('--max-level-progress');
    const strokeDashArrayInt = Number(strokeDashArrayString);
    let progressValue;
    let progressOnScale;

    if(pointsForNextLevel && userLevelPoints && strokeDashArrayInt) {
        progressValue = (
            (userLevelPoints - pointsForPreviousLevel)/(pointsForNextLevel - pointsForPreviousLevel)
        );
        progressOnScale = Math.floor(
            strokeDashArrayInt - (progressValue * strokeDashArrayInt)
        );
    }

    if(!progressOnScale) { return false; }

    if(progressOnScale < 0) {
        document.documentElement.style.setProperty('--level-progress', "0");
    } else {
        document.documentElement.style.setProperty('--level-progress', progressOnScale.toString());
    }
}

//Appends click event which triggers fn param on the querySelectorString param
function initClickEventOnElements(querySelectorString, fn) {
    const elements = document.querySelectorAll(querySelectorString);

    elements.forEach(element => {
        element.addEventListener("click", fn);
    });
}

function gethost() {
    var gethostval = location.hostname;
    gethostval = gethostval.toLowerCase();
    if (gethostval == 'internal.mobrog.com') {
      gethostval = 'mobrog.com';
    } else if (gethostval == 'helpdesk.mobrog.com') {
      gethostval = 'mobrog.com';
    } else if (gethostval == 'surveys.mobrog.com') {
      gethostval = 'mobrog.com';
    } else if (gethostval == 'www.mobrog.com') {
      gethostval = 'mobrog.com';
    } else if (gethostval == 'surveys.befragmich.de') {
      gethostval = 'befragmich.de';
    } else if (gethostval == 'helpdesk.befragmich.de') {
      gethostval = 'befragmich.de';
    } else if (gethostval == 'surveys.opinionhero.com') {
      gethostval = 'opinionhero.com';
    } else if (gethostval == 'helpdesk.opinionhero.com') {
      gethostval = 'opinionhero.com';
    } else if (gethostval == 'surveys.mymarktforschung.de') {
      gethostval = 'mymarktforschung.de';
    } else if (gethostval == 'helpdesk.mymarktforschung.de') {
      gethostval = 'mymarktforschung.de';
    } else if (gethostval == 'd349.keyingress.de') {
        gethostval = 'keyingress.de';
      }
    return gethostval;
  }

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function set_cookie(name, value) {
    var realhostvalset = gethost();

    const currentDate = new Date();
    currentDate.setUTCMonth(currentDate.getUTCMonth() + 3);
    //UTC date string for 3 months from today
    const utcString = currentDate.toUTCString(); 

    document.cookie = name +'='+ value +';domain=.'+realhostvalset+';path=/; Expires=' + utcString + ';';
}