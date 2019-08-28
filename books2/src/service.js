let baseUrl = "https://www.googleapis.com/books/v1";

async function getBooks() {
  try {
    const response = await fetch(`${baseUrl}/volumes?q=search+comida`);
    if (response.ok) {
      return response.json();
    }
    else {
      console.log("Network response was not ok.");
    }
  }
  catch (error) {
    console.log("There has been a problem with your fetch operation: " + error.message);
  }
}

export default getBooks;
