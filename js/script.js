// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    var i=0;
	var x = document.querySelectorAll(".content-loader");
	while(x[i]){
      x[i].addEventListener("click", function () {
        console.log("request sent");
		console.log(this.id);
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("/snippets/" + this.id + ".html", 
            function (request) {
              var content = request.responseText;
              console.log("content " + content);
              document.querySelector("#main-content")
                .innerHTML = content;
            });
      });
		i++;
	}
  }
);




