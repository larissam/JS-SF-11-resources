/*
  Please add all Javascript code to this file.
*/

let articles = [];

$("#source1").on("click", function() {
  const url = "https://newsapi.org/v2/top-headlines";
  $.get(
    url,
    {
      country: "us",
      apiKey: "" // replace with your own key
    },
    function(response) {
      articles = response.articles; // pull articles out of the response object and store in global variable

      // for every article, create an HTML element
      // use data attribute to store the array index the article
      // is located at
      for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        const template = `
          <article class="article" data-id="${i}">
            <section class="featuredImage">
              <img src="${article.urlToImage || ""}" alt="" />
            </section>
            <section class="articleContent">
                <a href="#"><h3>${article.title}</h3></a>
                <h6>${article.source.name}</h6>
            </section>
            <div class="clearfix"></div>
          </article>
        `;
        $("#main").append(template);
      }
    }
  );
});

$("#main").on("click", ".article", function() {
  // extract the article index from the data attribute
  // attached to the article
  const idx = $(this).data("id");

  // use it to locate the article in our global "articles" variable
  const article = articles[idx];

  // show the popup
  $("#popUp h1").text(article.title);
  $("#popUp p").text(article.description);
  $("#popUp .popUpAction").attr("href", article.url);
  $("#popUp").removeClass("hidden");
});

$(".closePopUp").on("click", function() {
  $("#popUp").addClass("hidden");
});
