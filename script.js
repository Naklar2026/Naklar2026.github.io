function toggleSongInfo(button) {
  const currentInfo = button.nextElementSibling;
  const isOpen = currentInfo.classList.contains("open");
  const allInfos = document.querySelectorAll(".song-info");
  const allButtons = document.querySelectorAll(".song-info-toggle");

  allInfos.forEach(info => info.classList.remove("open"));
  allButtons.forEach(btn => btn.textContent = "Zur Entstehung");

  if (!isOpen) {
    currentInfo.classList.add("open");
    button.textContent = "Schließen";
  }
}
