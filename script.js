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
  const whatsappByPage = {
    "ece-abhay-g7n2.html": "9028061382",
    "ece-kishor-b4q8.html": "9822939421",
    "ece-ashwin-k2m6.html": "9890164705",
    "ece-vishal-s8r1.html": "8806693777",
    "ece-prabhat-p5d3.html": "8860532330",
    "ece-saugata-f6w0.html": "8806120222",
    "ece-deep-d9v4.html": "9358190782",
    "ece-pradnya-h3j7.html": "9423633401",
    "ece-joydeep-q8k5.html": "9673701738",
    "ece-neeraj-r2x9.html": "9730467298",
    "ece-ankit-b8m5.html": "9960402260",
    "ece-surendar-k5v8.html": "8879538369",
    "ece-puneetkumar-b6n3.html": "9722993392",
    "ece-anamika-s6p2.html": "7506188386",
    "ece-arvind-k3r9.html": "8903228621",
    "ece-praveen-p4x7.html": "7987231873",
    "ece-amit-a7k4.html": "9999746128",
    "ece-vipin-k9d2.html": "8055663524"
  };
  const profileDetails = document.querySelector(".profile-details");
  const pageName = window.location.pathname.split("/").pop();
  if (profileDetails && educationByPage[pageName] && !profileDetails.querySelector("[data-education]")) {
    const education = document.createElement("p");
    education.dataset.education = "true";
    education.innerHTML = `<strong>Education</strong> ${educationByPage[pageName]}`;
    profileDetails.prepend(education);
  }

  const linksContainer = document.querySelector(".links-container");
  const whatsappNumber = whatsappByPage[pageName];
  if (linksContainer && whatsappNumber && !linksContainer.querySelector("[data-whatsapp]")) {
    const whatsappLink = document.createElement("a");
    whatsappLink.className = "link-card";
    whatsappLink.href = `https://wa.me/91${whatsappNumber}`;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
    whatsappLink.dataset.whatsapp = "true";
    whatsappLink.innerHTML = '<span class="icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"/><path d="M8.5 9.5c.4 1.2 1.3 2.2 2.4 2.8 1.1.6 1.7.8 2.2.3l.7-.8"/></svg></span><span><strong>WhatsApp</strong><small>Message on WhatsApp</small></span><span class="arrow" aria-hidden="true">&#8594;</span>';
    linksContainer.appendChild(whatsappLink);
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
