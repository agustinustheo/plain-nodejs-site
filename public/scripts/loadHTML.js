
        function loadHTML(myDivId, url) {
            var xmlhttp;
            if (window.XMLHttpRequest) 
            {
                xmlhttp = new XMLHttpRequest();
            } 
            else 
            {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
        
            xmlhttp.onreadystatechange = function() 
            {
                if (xmlhttp.readyState == XMLHttpRequest.DONE ) 
                {
                   if(xmlhttp.status == 200){
                       document.getElementById(myDivId).innerHTML = xmlhttp.responseText;
                       var allScripts = document.getElementById(myDivId).getElementsByTagName('script');
                       for (var n = 0; n < allScripts .length; n++)
                       {
                           eval(allScripts [n].innerHTML)//run script inside div generally not a good idea but these scripts are anyways intended to be executed.
                       }
                   }
                   else {
                       alert('Error');
                   }
                }
            }
        
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        }