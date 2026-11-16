let hasilGenap = "";
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    hasilGenap += i + " ";
  }
}
document.getElementById("genap").innerHTML = hasilGenap;

let tabel = "<table>";

tabel += "<tr>";
tabel += "<td class='putih'>BILANGAN</td>";
for (let k = 1; k <= 10; k++) {
  tabel += "<td class='hijau'>" + k + "</td>";
}
tabel += "</tr>";

for (let baris = 1; baris <= 10; baris++) {
  tabel += "<tr>";
  tabel += "<td class='hijau'>" + baris + "</td>";

  for (let kolom = 1; kolom <= 10; kolom++) {
    let hasil = baris * kolom;
    let warna = (hasil % 2 === 0) ? "cyan" : "kuning";
    tabel += "<td class='" + warna + "'>" + hasil + "</td>";
  }

  tabel += "</tr>";
}

tabel += "</table>";
document.getElementById("tabel").innerHTML = tabel;