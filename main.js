const API_KEY = 'e7876d6cb4msh27b7ff2857de2fap1cd873jsn27f09211d522';

const submitForm = (e) => {
  event.preventDefault();
  const url = 'https://summarize-texts.p.rapidapi.com/pipeline';
  const inputText = document.getElementById("floatingTextarea2").value;
  const data = {
    input: inputText
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'summarize-texts.p.rapidapi.com'
    },
    body: JSON.stringify(data)
  };

  // Make the API request
  fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json(); // Convert the response to JSON
    })
    .then((response) => {
      const summaryElement = document.getElementById("summaryText");
      summaryElement.textContent = response.output[0].text;
    })
    .catch(error => {
      console.error(error);
    });
};
