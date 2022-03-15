var stickyadstatus = "";
        function fix_stickyad() {
          document.getElementById("stickypos").style.position = "sticky";
          var elem = document.getElementById("stickyadcontainer");
          if (!elem) {return false;}
          if (document.getElementById("skyscraper")) {
            var skyWidth = Number(w3_getStyleValue(document.getElementById("skyscraper"), "width").replace("px", ""));  
            }
          else {
            var skyWidth = Number(w3_getStyleValue(document.getElementById("right"), "width").replace("px", ""));  
          }
          elem.style.width = skyWidth + "px";
          if (window.innerWidth <= 992) {
            elem.style.position = "";
            elem.style.top = stickypos + "px";
            return false;
          }
          var stickypos = document.getElementById("stickypos").offsetTop;
          var docTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          var adHeight = Number(w3_getStyleValue(elem, "height").replace("px", ""));
          if (stickyadstatus == "") {
            if ((stickypos - docTop) < 60) {
              elem.style.position = "fixed";
              elem.style.top = "60px";
              stickyadstatus = "sticky";
              document.getElementById("stickypos").style.position = "sticky";
        
            }
          } else {
            if ((docTop + 60) - stickypos < 0) {  
              elem.style.position = "";
              elem.style.top = stickypos + "px";
              stickyadstatus = "";
              document.getElementById("stickypos").style.position = "static";
            }
          }
          if (stickyadstatus == "sticky") {
            if ((docTop + adHeight + 60) > document.getElementById("footer").offsetTop) {
              elem.style.position = "absolute";
              elem.style.top = (document.getElementById("footer").offsetTop - adHeight) + "px";
              document.getElementById("stickypos").style.position = "static";
            } else {
                elem.style.position = "fixed";
                elem.style.top = "60px";
                stickyadstatus = "sticky";
                document.getElementById("stickypos").style.position = "sticky";
            }
          }
        }
        function w3_getStyleValue(elmnt,style) {
          if (window.getComputedStyle) {
            return window.getComputedStyle(elmnt,null).getPropertyValue(style);
          } else {
            return elmnt.currentStyle[style];
          }
        }

        (
            function setThemeMode() {
              var x = localStorage.getItem("preferredmode");
              var y = localStorage.getItem("preferredpagemode");  
              if (x == "dark") {
                document.body.className += " darktheme";
                ga('send', 'event', 'theme' , "darkcode");    
              }
              if (y == "dark") {
                document.body.className += " darkpagetheme";
                ga('send', 'event', 'theme' , "darkpage");
              }
            })();

            (
                function setThemeCheckboxes() {
                  var x = localStorage.getItem("preferredmode");
                  var y = localStorage.getItem("preferredpagemode");  
                  if (x == "dark") {
                    document.getElementById("radio_darkcode").checked = true;
                    
                  }
                  if (y == "dark") {
                    document.getElementById("radio_darkpage").checked = true;
                  }
                })();
                
                function mouseoverdarkicon() {
                  if(window.matchMedia("(pointer: coarse)").matches) {
                    return false;
                  }
                  var a = document.getElementById("darkmodemenu");
                  a.style.top = "44px";
                }
                function mouseoutofdarkicon() {
                  var a = document.getElementById("darkmodemenu");
                  a.style.top = "-40px";
                }
                function changepagetheme(n) {
                  var a = document.getElementById("radio_darkcode");
                  var b = document.getElementById("radio_darkpage");
                  document.body.className = document.body.className.replace("darktheme", "");
                  document.body.className = document.body.className.replace("darkpagetheme", "");    
                  document.body.className = document.body.className.replace("  ", " ");
                  if (a.checked && b.checked) {
                    localStorage.setItem("preferredmode", "light");
                    localStorage.setItem("preferredpagemode", "light");
                    a.checked = false;
                    b.checked = false;    
                  } else {
                    document.body.className += " darktheme";
                    document.body.className += " darkpagetheme";  
                    localStorage.setItem("preferredmode", "dark");
                    localStorage.setItem("preferredpagemode", "dark");
                    a.checked = true;
                    b.checked = true;    
                  }
                }
                
                
                function click_darkpage() {
                  var b = document.getElementById("radio_darkpage");
                  if (b.checked) {
                    document.body.className += " darkpagetheme";
                    document.body.className = document.body.className.replace("  ", " ");    
                    localStorage.setItem("preferredpagemode", "dark");
                  } else {
                    document.body.className = document.body.className.replace("darkpagetheme", "");
                    document.body.className = document.body.className.replace("  ", " ");    
                    localStorage.setItem("preferredpagemode", "light");
                  }
                }
                
                function click_darkcode() {
                  var a = document.getElementById("radio_darkcode");
                  if (a.checked) {
                    document.body.className += " darktheme";
                    document.body.className = document.body.className.replace("  ", " ");    
                    localStorage.setItem("preferredmode", "dark");
                  } else {
                    document.body.className = document.body.className.replace("darktheme", "");
                    document.body.className = document.body.className.replace("  ", " ");
                    localStorage.setItem("preferredmode", "light");
                  }
                }

                function Lights() {
                  var element = document.body;
                  element.classList.toggle("dark-mode");
              }