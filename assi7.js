fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
  .then(response => response.json())
  .then(data => {

    // Sort by NRR (ascending)
    data.sort((a, b) => a.NRR - b.NRR);

    let tableBody = document.getElementById("table-body");

    data.forEach(team => {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${team.Team}</td>
            <td>${team.Matches}</td>
            <td>${team.Won}</td>
            <td>${team.Lost}</td>
            <td>${team.NRR}</td>
            <td>${team.Points}</td>
        `;

        tableBody.appendChild(row);
    });

  })
  .catch(error => console.log("Error:", error));