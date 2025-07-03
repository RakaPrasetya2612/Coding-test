// sidebar & latest news on mobile
document.getElementById('menuToggle').onclick = function() { // Saat tombol menu diklik
  var sidebar = document.getElementById('sidebar'); // Ambil elemen sidebar
  var latest = document.querySelector('.latest-news'); // Ambil elemen latest news
  sidebar.classList.toggle('active'); // Tampilkan dan sembunyikan sidebar
  latest.classList.toggle('active'); // Tampilkan dan sembunyikan latest news
};
