document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

document.getElementById("fortuneButton").onclick = function () {
axios.get("http://localhost:4000/api/fortune/")
    .then(function (response) {
        const data = response.data;
        alert(data);
    });
};

// Submit a new name to the server.
document.getElementById("nameQuestion").onsubmit = function (event) {
    event.preventDefault();
    
    let usersName = document.getElementById("nameField").value;

    let body = {
        name: usersName
    }

    if(usersName === '') {
        alert('Name cannot be empty.');
        return;
    }

    axios.post("http://localhost:4000/api/name/", body)
        .then(function (response) {
            const data = response.data;
            alert(data);
        });
};

// Update a name to the server.
document.getElementById("changeName").onsubmit = function (event) {
    event.preventDefault();

    let oldName = document.getElementById("oldName").value;
    let newName = document.getElementById("newName").value;

    let body = {
        newName
    }

    if(oldName === '' || newName === '') {
        alert("Both name fields must have a value");
        return;
    }

    if(oldName === newName) {
        alert("Names cannot be the same. Please enter 2 unique values.");
        return;
    }

    axios.put(`http://localhost:4000/api/name/${oldName}`, body)
        .then(function (response) {
        const data = response.data;
        alert(data);
    });
};


// Delete a name to the server.
document.getElementById("deleteName").onsubmit = function (event) {
    event.preventDefault();

    let nameToDelete = document.getElementById("nameToDelete").value;

    if(nameToDelete === '') {
        alert("Name cannot be empty.");
        return;
    }

    axios.delete(`http://localhost:4000/api/name/${nameToDelete}`).then(function (response) {
        const data = response.data;
        alert(data);
    });
};