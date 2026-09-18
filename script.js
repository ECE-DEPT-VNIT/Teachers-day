document.addEventListener("DOMContentLoaded", () => {
  const qrImg = document.getElementById("qr-code-img");
  if (!qrImg) return;

  // Dynamically fetch current domain/URL or fallback value
  const targetData = window.location.href;

  // Use reliable API encoding
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(targetData)}`;

  qrImg.src = qrApiUrl;
  qrImg.style.display = "block";
});
