var btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
});

// Klik: kembali ke posisi atas halaman (header)
btnTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});