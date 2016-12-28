// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("#left-menu")
      .addEventListener("click", function () {

        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("/snippets/home.html", 
            function (request) {
              var name = request.responseText;
              console.log("name " + name);
              document.querySelector("#left-menu")
                .innerHTML = name;
            });
      });
  }
);




