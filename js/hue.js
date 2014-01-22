/**
 * Created by vlemert on 1/19/14.
 */

function discoverBridges(success) {
    var xmlhttp;

    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            success(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET","http://www.meethue.com/api/nupnp",true);
    xmlhttp.send();
}

function getLights(success) {
    var xmlhttp;

    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            success(xmlhttp.responseText);
        }
    }

    var config = JSON.parse(window.localStorage.lampConfiguration);
    xmlhttp.open("GET", "http://" + config.bridgeIp + "/api/" + config.bridgeUsername + "/lights",true);
    xmlhttp.send();
}

function blinkLightSingle(lightId, success) {
    var xmlhttp;

    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            success(xmlhttp.responseText);
        }
    }

    var config = JSON.parse(window.localStorage.lampConfiguration);
    xmlhttp.open("PUT", "http://" + config.bridgeIp + "/api/" + config.bridgeUsername + "/lights/" + lightId + "/state",true);
    var message = JSON.stringify({
        "alert": "select"
    });
    xmlhttp.send(message);
}

function blinkLight(lightId, success) {
    var xmlhttp;

    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            success(xmlhttp.responseText);
        }
    }

    var config = JSON.parse(window.localStorage.lampConfiguration);
    xmlhttp.open("PUT", "http://" + config.bridgeIp + "/api/" + config.bridgeUsername + "/lights/" + lightId + "/state",true);
    var message = JSON.stringify({
        "alert": "lselect"
    });
    xmlhttp.send(message);
}

function stopBlinkLight(lightId, success) {
    var xmlhttp;

    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            success(xmlhttp.responseText);
        }
    }

    var config = JSON.parse(window.localStorage.lampConfiguration);
    xmlhttp.open("PUT", "http://" + config.bridgeIp + "/api/" + config.bridgeUsername + "/lights/" + lightId + "/state",true);
    var message = JSON.stringify({
        "alert": "none"
    });
    xmlhttp.send(message);
}

function renameLight(lightId, name, success) {
    var xmlhttp;

    // rename the light
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            success(xmlhttp.responseText);
        }
    }

    var config = JSON.parse(window.localStorage.lampConfiguration);
    xmlhttp.open("PUT", "http://" + config.bridgeIp + "/api/" + config.bridgeUsername + "/lights/" + lightId,true);
    var message = JSON.stringify({
        "name": name
    });
    xmlhttp.send(message);
}