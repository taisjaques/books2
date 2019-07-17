let baseUrl = "https://www.googleapis.com/books/v1";

function getBooks() {
  fetch(`${baseUrl}/volumes?q=search+comida`)
    .then(function(response) {
      if (response.ok) {
        response.json().then(function(meu) {
            console.log("Meuuuu:", meu)
            return meu
        })
      } else {
        console.log("Network response was not ok.");
      }
    })
    .catch(function(error) {
      console.log(
        "There has been a problem with your fetch operation: " + error.message
      );
    });
}

export default getBooks
