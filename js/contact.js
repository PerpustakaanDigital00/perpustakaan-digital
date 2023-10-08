document.getElementById("actionButton").addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    // Mengambil nilai dari input
    var namaValue = document.getElementById("nama").value;
    var emailValue = document.getElementById("email").value;
    var pesanValue = document.getElementById("message").value;

    // Membuat objek data JSON
    var jsonData = {
        nama: namaValue,
        email: emailValue,
        message: pesanValue
    };

    // Mengirim data ke URL menggunakan metode POST
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(jsonData),
        redirect: 'follow'
    };

    fetch("https://eoig90x4en8zl9s.m.pipedream.net", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
            alert("Data berhasil dikirim ke Pipedream.");
            // Mengatur nilai-nilai input kembali menjadi kosong setelah pengiriman berhasil
            document.getElementById("nama").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch(error => {
            console.log('error', error);
            alert("Terjadi kesalahan saat mengirim data.");
        });
});
