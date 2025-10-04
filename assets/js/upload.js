fetch("components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });

 const locationSelect = document.getElementById("location");
    const categorySelect = document.getElementById("category");

    const locations = [...new Set(products.map(p => p.location))];
    const categories = [...new Set(products.map(p => p.category))];

    locations.forEach(loc => {
        const option = document.createElement("option");
        option.value = loc;
        option.textContent = loc.charAt(0).toUpperCase() + loc.slice(1);
        locationSelect.appendChild(option);
    });

    categories.forEach(cat => {
        const option = document.createElement("option");
        option.value = cat;
        option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
        categorySelect.appendChild(option);
    });

    const form = document.getElementById("uploadForm");
    const uploadBtn = document.getElementById("uploadBtn");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); 
        uploadBtn.textContent = "Uploaded";
        uploadBtn.disabled = true;

        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            window.location.href = "index.html";
        })
        .catch(error => {
            console.error(error);
            uploadBtn.textContent = "Upload";
            uploadBtn.disabled = false;
        });
    });
    fetch("components/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;
    });
