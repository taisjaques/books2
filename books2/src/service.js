let baseUrl = "https://www.googleapis.com/books/v1";

// function getBooks() {
//   return fetch(`${baseUrl}/volumes?q=search+comida`)
//     .then(function(response) {
//       if (response.ok) {
//         return response.json();
//       } else {
//         console.log("Network response was not ok.");
//       }
//     })
//     .then(function(meu) {
//       console.log("Meuuuu:", meu);
//       return meu.items;
//     })
//     .catch(function(error) {
//       console.log(
//         "There has been a problem with your fetch operation: " + error.message
//       );
//     });
// }

async function getBooks() {
  try {
    const response = await fetch(`${baseUrl}/volumes?q=search+comida`);
    if (response.ok) {
      return response.json();
    }
    else {
      console.log("Network response was not ok.");
    }
    const meu = undefined;
    console.log("Meuuuu:", meu);
    return meu.items;
  }
  catch (error) {
    console.log("There has been a problem with your fetch operation: " + error.message);
  }
}

export default getBooks;
