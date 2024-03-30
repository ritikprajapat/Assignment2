fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((json) => {
    const tbody = document.querySelector("#customers_table tbody");
    json.forEach((photo) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${photo.id}</td>
        <td><img src="${photo.thumbnailUrl}" alt="Photo"></td>
        <td>${photo.title}</td>
        <td>${photo.url}</td>
      `;

      tbody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

setTimeout(function () {
  showTableData();
}, 3000);

function showTableData() {
  document.querySelector(".loading_spinner").style.display = "none";
  document.querySelector(".table_body").style.display = "block";
}
