document.addEventListener("DOMContentLoaded", () => {
  const themeLink = document.createElement("link");
  themeLink.rel = "stylesheet";
  themeLink.href = "./theme.css";
  document.head.appendChild(themeLink);

  const educationByPage = {
    "ece-ankit-bhurane.html": "B.E. Electronics and Communication, Sant Gadge Baba Amravati University (2008); M.Tech. Electronics, SGGSIET, Nanded (2011); Ph.D. Signal Processing, Indian Institute of Technology Bombay (2016).",
    "ece-surendar-kannaiyan.html": "B.E. ECE, Bharathidasan University (2004); M.Tech. Control and Instrumentation, NIT Trichy (2006); Ph.D. Modelling, Control and Estimation, IIT Bombay (2021).",
    "ece-puneetkumar-bhavsar.html": "B.E. Electronics Engineering, Sardar Patel University (2009); M.Tech. Electronics and Communication Engineering, IIT Roorkee (2012); Ph.D. Electrical Engineering, IIT Gandhinagar (2019).",
    "ece-anamika-singh.html": "B.Tech. Electronics and Communication Engineering, B.I.T. Sindri (2007); Ph.D. Optical Communication, IIT (ISM) Dhanbad (2013).",
    "ece-arvind-kumar.html": "Ph.D. Microwave and RF Engineering, National Institute of Technology Tiruchirappalli (2019).",
    "ece-praveen-pawar.html": "B.E. Electronics and Communication, SATI Vidisha (2010); M.Tech. Digital Communication, ABV-IIITM Gwalior (2013); Ph.D. Information Technology, ABV-IIITM Gwalior (2020).",
    "ece-amit-agarwal.html": "B.Tech. Electronics and Communications Engineering, NIT Kurukshetra (2011); M.Tech. Telecommunications, IIT Delhi (2014); Ph.D. Wireless Communications, IIT Delhi (2019).",
    "ece-vipin-kamble.html": "B.Tech. Electronics and Communication Engineering, VNIT Nagpur (2011); M.Tech. Electronic Systems and Communication, NIT Rourkela (2013); Ph.D. Image Processing, VNIT Nagpur (2018)."
  };
  const profileDetails = document.querySelector(".profile-details");
  const pageName = window.location.pathname.split("/").pop();
  if (profileDetails && educationByPage[pageName] && !profileDetails.querySelector("[data-education]")) {
    const education = document.createElement("p");
    education.dataset.education = "true";
    education.innerHTML = `<strong>Education</strong> ${educationByPage[pageName]}`;
    profileDetails.prepend(education);
  }

  const qrImg = document.getElementById("qr-code-img");
  if (!qrImg) return;

  // Dynamically fetch current domain/URL or fallback value
  const targetData = window.location.href;

  // Use reliable API encoding
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(targetData)}`;

  qrImg.src = qrApiUrl;
  qrImg.style.display = "block";
});
