"use strict";

const pageLoadTime = Date.now();

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

//const frameworksLanguagesExpertiseButtons = [
//  {
//    name: "Flutter",
//    icon: "./assets/images/svg/flutter.svg",
//  },
//  {
//    name: "Dart",
//    icon: "./assets/images/svg/dart.svg",
//  },
//  {
//    name: "FlutterFlow",
//    icon: "./assets/images/svg/flutterflow.svg",
//  },
//  {
//    name: "Android Native",
//    icon: "./assets/images/svg/android.svg",
//  },
//  {
//    name: "Kotlin",
//    icon: "./assets/images/svg/kotlin.svg",
//  },
//  {
//    name: "iOS Native",
//    icon: "./assets/images/svg/iOS.png",
//  },
//  {
//    name: "TypeScript",
//    icon: "./assets/images/svg/typeScript.svg",
//  },
//  {
//    name: "JavaScript",
//    icon: "./assets/images/svg/javascript.svg",
//  },
//];
//
//const paymentGatewayExpertiseButtons = [
//  {
//    name: "Razorpay",
//    icon: "./assets/images/svg/razorpay.png",
//  },
//  {
//    name: "Stripe",
//    icon: "./assets/images/svg/stripe.svg",
//  },
//  {
//    name: "In App Purchase",
//    icon: "./assets/images/svg/iap.svg",
//  },
//  {
//    name: "Braintree",
//    icon: "./assets/images/svg/braintree.svg",
//  },
//  {
//    name: "Google Pay",
//    icon: "./assets/images/svg/google-pay.svg",
//  },
//];
//const apiServicesExpertiseButtons = [
//  {
//    name: "REST API",
//    icon: "./assets/images/svg/api.svg",
//  },
//  {
//    name: "GraphQL",
//    icon: "./assets/images/svg/graphql.svg",
//  },
//];
//const uiUXToolsExpertiseButtons = [
//  {
//    name: "Figma",
//    icon: "./assets/images/svg/figma.svg",
//  },
//  {
//    name: "Framer",
//    icon: "./assets/images/svg/framer.svg",
//  },
//  {
//    name: "Whimsical",
//    icon: "./assets/images/svg/whimsical.jpg",
//  },
//];
//const unitTestingExpertiseButtons = [
//  {
//    name: "Widget Tests",
//    icon: "./assets/images/svg/widget.png",
//  },
//  {
//    name: "Unit Tests",
//    icon: "./assets/images/svg/unit-testing.png",
//  },
//  {
//    name: "Integration Tests",
//    icon: "./assets/images/svg/integration-testing.webp",
//  },
//];
//const upgradeServicesExpertiseButtons = [
//  {
//    name: "Puro",
//    icon: "./assets/images/svg/puro.png",
//  },
//  {
//    name: "FVM",
//    icon: "./assets/images/svg/fvm.svg",
//  },
//];
//const deploymentProcessExpertiseButtons = [
//  "Cirrus",
//  "Travis",
//  "Codemagic",
//  "Bitrise",
//];
//const stateManagementExpertiseButtons = [
//  {
//    name: "Provider",
//    icon: "./assets/images/svg/provider.png",
//  },
//  {
//    name: "BLoC",
//    icon: "./assets/images/svg/bloc.png",
//  },
//  {
//    name: "GetX",
//    icon: "./assets/images/svg/getx.png",
//  },
//  {
//    name: "Riverpod",
//    icon: "./assets/images/svg/riverpod.svg",
//  },
//];
//const projectManagementToolsExpertiseButtons = [
//  {
//    name: "asana",
//    icon: "./assets/images/svg/asana.svg",
//  },
//  {
//    name: "Slack",
//    icon: "./assets/images/svg/slack.svg",
//  },
//  {
//    name: "Jira",
//    icon: "./assets/images/svg/jira.svg",
//  },
//  {
//    name: "Trello",
//    icon: "./assets/images/svg/trello.svg",
//  },
//];
//const crashReportingExpertiseButtons = [
//  {
//    name: "Firebase Crashlytics",
//    icon: "./assets/images/svg/firebase-crashlytics.png",
//  },
//  {
//    name: "Sentry",
//    icon: "./assets/images/svg/sentry.svg",
//  },
//];
//const deploymentExpertiseButtons = [
//  {
//    name: "Google Play Stroe",
//    icon: "./assets/images/svg/google-play.png",
//  },
//  {
//    name: "App Stroe",
//    icon: "./assets/images/svg/app-store.svg",
//  },
//  {
//    name: "Web",
//    icon: "./assets/images/svg/web.svg",
//  },
//  {
//    name: "Microsoft Store",
//    icon: "./assets/images/svg/microsoft-store.png",
//  },
//  {
//    name: "Linux",
//    icon: "./assets/images/svg/linux.svg",
//  },
//];
//const codeReviewExpertiseButtons = [
//  {
//    name: "Flutter Analyze",
//    icon: "./assets/images/svg/flutter-analyze.svg",
//  },
//  {
//    name: "Effective Dart-Default IDE Static Analysis",
//    icon: "./assets/images/svg/code-Effective.png",
//  },
//  {
//    name: "pana",
//    icon: "./assets/images/svg/pana.png",
//  },
//];
//const databaseExpertiseButtons = [
//  {
//    name: "Local Storage",
//    icon: "./assets/images/svg/local-database.png",
//  },
//  {
//    name: "Sqlite",
//    icon: "./assets/images/svg/sqlite.svg",
//  },
//  {
//    name: "Firebase Firestore",
//    icon: "./assets/images/svg/firebase-firestore.png",
//  },
//  {
//    name: "Firebase realtime database",
//    icon: "./assets/images/svg/firebase-realtime.png",
//  },
//  {
//    name: "Supabase",
//    icon: "./assets/images/svg/supabase.svg",
//  },
//  {
//    name: "Hive",
//    icon: "./assets/images/svg/hive.png",
//  },
//  {
//    name: "ObjectBox",
//    icon: "./assets/images/svg/objectbox.png",
//  },
//];
//const versionControlExpertiseButtons = [
//  {
//    name: "Git",
//    icon: "./assets/images/svg/git.svg",
//  },
//  {
//    name: "Github",
//    icon: "./assets/images/svg/github.svg",
//  },
//  {
//    name: "BitBucket",
//    icon: "./assets/images/svg/bitbucket.svg",
//  },
//];
//const tootlUtilitiesExpertiseButtons = [
//  {
//    name: "Android Studio",
//    icon: "./assets/images/svg/android-studio.svg",
//  },
//  {
//    name: "Visual Studio Code",
//    icon: "./assets/images/svg/visual-studio-code.svg",
//  },
//  {
//    name: "XCode",
//    icon: "./assets/images/svg/xcode.svg",
//  },
//  {
//    name: "Postman",
//    icon: "./assets/images/svg/postman-icon.svg",
//  },
//];
//const plugnisExpertiseButtons = [
//  {
//    name: "Firebase",
//    icon: "./assets/images/svg/firebase.svg",
//  },
//  {
//    name: "OneSignal Notifications",
//    icon: "./assets/images/svg/onesignal.svg",
//  },
//  {
//    name: "In-App-Purchase",
//    icon: "./assets/images/svg/iap.svg",
//  },
//  {
//    name: "Google Map",
//    icon: "./assets/images/svg/google-map.svg",
//  },
//  {
//    name: "Social Login",
//    icon: "./assets/images/svg/social-login.png",
//  },
//  {
//    name: "Notifications",
//    icon: "./assets/images/svg/notification.png",
//  },
//  {
//    name: "Injectable",
//    icon: "./assets/images/svg/injectable.svg",
//  },
//  {
//    name: "Json Serializable",
//    icon: "./assets/images/svg/json.svg",
//  },
//];

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const dataForm = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
const emailInput = dataForm.querySelector('input[type="email"]');
const fileInput = document.getElementById("file-upload");

// Function to check overall form validity
function validateForm() {
  const allFieldsFilled = Array.from(formInputs).every(input => input.value.trim() !== "");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailPattern.test(emailInput.value);

  if (allFieldsFilled && isEmailValid) {
    formBtn.removeAttribute("disabled");
  } else {
    formBtn.setAttribute("disabled", "");
  }
}

const fileLabelText = document.getElementById("file-label-text");
const removeFileBtn = document.getElementById("remove-file-btn");

fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];

  if (file) {
    if (file.type !== "application/pdf") {
      alert("Only PDF files are allowed.");
      fileInput.value = "";
      fileLabelText.textContent = "Attach PDF (Optional)";
      removeFileBtn.style.display = "none";
    } else if (file.size > 1 * 1024 * 1024) {
      alert("File must be under 1MB.");
      fileInput.value = "";
      fileLabelText.textContent = "Attach PDF (Optional)";
      removeFileBtn.style.display = "none";
    } else {
      fileLabelText.textContent = file.name.length > 30
        ? file.name.substring(0, 27) + "..."
        : file.name;
      removeFileBtn.style.display = "inline-block";
    }
  } else {
    fileLabelText.textContent = "Attach PDF (Optional)";
    removeFileBtn.style.display = "none";
  }
});

// Handle remove button click
removeFileBtn.addEventListener("click", function () {
  fileInput.value = "";
  fileLabelText.textContent = "Attach PDF (Optional)";
  removeFileBtn.style.display = "none";
});

// Add input event listener to each form input
formInputs.forEach(input => {
  input.addEventListener("input", validateForm);
});

// Initial validation on page load
validateForm();

// Handle form submission
const form = document.getElementById("contact-form");
const button = form.querySelector("button");
const buttonSpan = button.querySelector("span");
let isSubmitting = false;

form.addEventListener("submit", function (e) {
  if (isSubmitting) return; // Prevent multiple submissions
  isSubmitting = true; // Set flag to prevent further submissions
  e.preventDefault(); // Prevent default form submission

  button.disabled = true;
  buttonSpan.textContent = "Sending. . .";

  grecaptcha.ready(function () {
    grecaptcha.execute("6LfdbHArAAAAAPeDLaw6tVOunsir0DJs14gteGKi", { action: "submit" }).then(async function (token) {
      const formData = new FormData(form);

      // Add file if selected
      const file = fileInput.files[0];
      if (file) {
        const base64 = await toBase64(file);
        formData.append("fileData", base64);
        formData.append("fileName", file.name);
      }

      formData.append("g-recaptcha-response", token);
      await appendTrackingData(formData);

      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbx950TFO1DbPxrsRHfaMWq-qboyrRy1QRLsL-94UwLg04hTGPkCpB5nhlHxHlSARgBY/exec", {
          method: "POST",
          body: formData
        });
        console.log("response: ", response);
        if (response.ok) {
          const result = await response.json();
          console.log("Google Script Response: ", result);

          if (result.status === "success") {
            showToast("success", "Thank you! Your message has been sent.");
            form.reset(); resetFileUploadUI(); validateForm();
          } else {
            if (result.message.includes("reCAPTCHA failed")) {
                showToast("warning", "reCAPTCHA flagged this as suspicious. Please refresh and try again.");
            } else if (result.message.includes("Missing reCAPTCHA token")) {
                showToast("warning", "Submission failed. Please refresh and try again.");
            } else {
                showToast("error", "Error: Could not send the message. Please try again after sometime.");
            }
          }
        } else {
          showToast("error", "Error: Could not send the message. Please try again after sometime.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        showToast("error", "Something went wrong. Please contact us at hello@iabhinav.me");
      } finally {
        buttonSpan.textContent = "Send Message";
        isSubmitting = false;
      }
    });
  });
});

async function appendTrackingData(formData) {
  formData.append("userAgent", navigator.userAgent);
  const isMobile = /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  formData.append("deviceType", isMobile ? "Mobile" : "Desktop");
  formData.append("referrer", document.referrer || "Direct");
  formData.append("pageUrl", window.location.href);
  const ip = await getIPFromIpify();
  if (ip) { formData.append("ipAddress", ip); }
  const ipData = await getIPInfo();
  if (ipData) { formData.append("ipInfo", JSON.stringify(ipData)); }
  const timeSpent = Math.round((Date.now() - pageLoadTime) / 1000);
  formData.append("timeSpentSeconds", timeSpent);
}

function resetFileUploadUI() {
  fileInput.value = "";
  fileLabelText.textContent = "Attach PDF (Optional)";
  removeFileBtn.style.display = "none";
}

function toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = reject;
    });
 }

async function getIPFromIpify() {
  try {
    const response = await fetch("https://api.ipify.org/?format=json");
    const data = await response.json();
    if (data && data.ip) return data.ip;
  } catch (_) {}
  return null;
}

async function getIPInfo() {
  try {
    const response = await fetch("https://ipwho.is/?fields=ip,country,city,region,latitude,longitude");
    const ipData = await response.json();
    if (ipData.success !== false) return ipData;
  } catch (_) {}
  return null;
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

//function createButtonListWithIcon(buttonNames, containerId) {
//  const container = document.getElementById(containerId);
//  container.innerHTML = "";
//
//  buttonNames.forEach((item) => {
//    const button = document.createElement("button");
//    const icon = document.createElement("img"); // Use img instead of span
//    icon.className = "icon";
//    icon.src = item.icon;
//    icon.alt = `${item.name} icon`;
//
//    button.className = "toolBtn";
//    button.textContent = item.name;
//    button.appendChild(icon);
//    container.appendChild(button);
//  });
//}

// calculate years of experience
const startYear = 2018;
const currentYear = new Date().getFullYear();
const experienceYears = currentYear - startYear;
document.getElementById("experience-years").textContent = `+${experienceYears}`;

// Generic image popup logic
const popup = document.getElementById("popup");
const popupImg = popup.querySelector("img");

document.addEventListener("click", function (e) {
  const target = e.target;
  if (target.matches("[data-popup-image]")) {
    const src = target.currentSrc;
    const alt = target.alt;
    popupImg.setAttribute("src", src);
    popupImg.setAttribute("alt", alt);
    popup.classList.add("show");
  }
});

function hidePopup() {
  popup.classList.remove("show");
  setTimeout(() => {
    popupImg.removeAttribute("src");
    popupImg.removeAttribute("alt");
  }, 500); // Delay before clearing image
}

document.addEventListener("keydown", function (e) {
  if ((e.key === "Escape" || e.key === " ")
      && popup.classList.contains("show")) {
        e.preventDefault();
        hidePopup();
  }
}, { passive: false });

/**
 * Function to load resume data
 */
async function loadResumeData() {
 const [experienceRes, skillsRes, educationRes] = await Promise.all([
     fetch('/assets/files/json/experience.json'),
     fetch('/assets/files/json/skills.json'),
     fetch('/assets/files/json/education.json')
 ]);


  const experiences = await experienceRes.json();
  const skills = await skillsRes.json();
  const education = await educationRes.json();

  renderExperience(experiences);
  renderSkills(skills);
  renderEducation(education);
}

function renderExperience(experiences) {
  const experienceList = document.querySelector('.experience-list');
  experienceList.innerHTML = '';

  experiences.forEach(exp => {
    const item = document.createElement('li');
    item.className = 'timeline-item';

    const pointsHTML = Array.isArray(exp.points)
      ? exp.points.map(point => `<li>${point}</li>`).join('')
      : '';

    item.innerHTML = `
      <h4 class="h4 timeline-item-title">
        ${exp.title}
        <p class="timeline-text">${exp.company}</p>
      </h4>
      <span>${exp.duration}</span>
      <ul class="timeline-text">
        ${pointsHTML}
      </ul>
    `;

    experienceList.appendChild(item);
  });
}

function renderEducation(educationData) {
  const educationList = document.querySelector('.education-list');
  educationList.innerHTML = '';

  educationData.forEach(edu => {
    const item = document.createElement('li');
    item.className = 'timeline-item';

    item.innerHTML = `
      <h4 class="h4 timeline-item-title">
        ${edu.degree}
        <p class="timeline-text">${edu.institution}</p>
      </h4>
      <span>${edu.duration}</span>
      <p class="timeline-text">${edu.description}</p>
    `;

    educationList.appendChild(item);
  });
}

function renderSkills(skills) {
  const skillsList = document.querySelector('.skills-list');
  skillsList.innerHTML = '';

  skills.forEach(skill => {
    const item = document.createElement('li');
    item.className = 'skills-item';

    item.innerHTML = `
      <div class="title-wrapper">
        <h5 class="h5">${skill.name}</h5>
        <data value="${skill.value}">${skill.value}%</data>
      </div>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: ${skill.value}%"></div>
      </div>
    `;

    skillsList.appendChild(item);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  window.scrollTo(0, 0);
  loadResumeData();
});

function applyCardTiltEffect() {
document.querySelectorAll('.card-wrap').forEach(cardWrap => {
  const card = cardWrap.querySelector('.card');
  const bg = cardWrap.querySelector('.card-bg');

  cardWrap.addEventListener('mousemove', e => {
    const rect = cardWrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    const bgTranslateX = ((x - centerX) / centerX) * -15;
    const bgTranslateY = ((y - centerY) / centerY) * -15;
    bg.style.transform = `translate(${bgTranslateX}px, ${bgTranslateY}px) scale(1.11)`;
  });

  cardWrap.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    bg.style.transform = 'translate(0, 0)';
  });
});
}

const galleryPopup = document.getElementById("gallery-popup");
const popupImage = document.getElementById("popup-image");
const popupClose = document.getElementById("popup-close-btn");
const prevBtn = document.querySelector(".popup-prev");
const nextBtn = document.querySelector(".popup-next");

let galleryData = [];
let currentCardIndex = 0;
let currentImageIndex = 0;

fetch('/assets/files/json/cards.json')
  .then(response => response.json())
  .then(cardsData => {
    galleryData = cardsData;
    renderGallery(cardsData);
    updateNavigationHint();
  });

function renderGallery(cardsData) {
  const container = document.getElementById('cardContainer');
  container.innerHTML = '';

  cardsData.forEach((card, index) => {
    const originalImg = card.images[0];
    const webpImg = originalImg.replace(/\.(jpg|jpeg|png)$/i, '.webp');

    const cardHTML = `
      <div class="card-wrap" data-card-index="${index}">
        <div class="card">
          <div class="card-bg">
            <picture>
              <source srcset="${webpImg}" type="image/webp">
              <img src="${originalImg}" alt="${card.title}" loading="lazy" />
            </picture>
          </div>
          <div class="card-info">
            <h2>${card.title}</h2>
            <p>${card.text}</p>
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', cardHTML);
  });

  // Add tilt effect after rendering cards
  applyCardTiltEffect();

  document.querySelectorAll('.card-wrap').forEach(card => {
    card.addEventListener('click', () => {
      currentCardIndex = parseInt(card.getAttribute('data-card-index'));
      currentImageIndex = 0;
      showPopupImage();
    });
  });
}

function showPopupImage() {
  const currentCard = galleryData[currentCardIndex];
  const imageList = currentCard.images;

  const originalImg = imageList[currentImageIndex];
  const webpImg = originalImg.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  // Check if browser supports WebP
  const canUseWebP = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
  popupImage.src = canUseWebP ? webpImg : originalImg;

  const watermarkEl = document.querySelector('.watermark');
  watermarkEl.textContent = currentCard.title;

  galleryPopup.classList.add("show");
  document.body.style.overflow = "hidden";
  updateNavigationHint();
}

function hidePopupImage() {
  galleryPopup.classList.remove("show");
  popupImage.src = "";
  document.body.style.overflow = "";
}

function nextImage() {
  const images = galleryData[currentCardIndex].images;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showPopupImage();
}

function prevImage() {
  const images = galleryData[currentCardIndex].images;
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showPopupImage();
}

// Controls
popupClose.addEventListener("click", hidePopupImage);
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

document.addEventListener("keydown", e => {
  if (!galleryPopup.classList.contains("show")) return;
  if (e.code === "Escape" || e.code === "Space") {
      e.preventDefault();
      hidePopupImage();
  }
  if (e.key === "ArrowRight" || e.key.toLowerCase() === "n") nextImage();
  if (e.key === "ArrowLeft" || e.key.toLowerCase() === "p") prevImage();
}, { passive: false });

// Mobile swipe for cards
let touchStartX = 0;

galleryPopup.addEventListener("touchstart", e => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

galleryPopup.addEventListener("touchend", e => {
  const touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextImage();
    else prevImage();
  }
});

document.getElementById("gallery-popup").addEventListener("click", (e) => {
  const popupInner = document.querySelector(".popup-inner");
  if (!popupInner.contains(e.target)) {
    hidePopupImage();
  }
});

function updateNavigationHint() {
  const keysHint = document.querySelector(".keys");
  if (!keysHint) return;
  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  keysHint.textContent = isTouchDevice
      ? "Swipe left/right to navigate"
      : "Use ← and → keys to navigate";
}


const toastThemes = {
  success: { icon: "checkmark-done-outline", glow: "rgba(0,255,0,0.5)", shadow: "0px 0px 10px 3px rgba(0, 255, 0, 0.1)" },
  error: { icon: "close-outline", glow: "rgba(255,0,0,0.5)", shadow: "0px 0px 10px 3px rgba(255, 0, 0, 0.1)" },
  warning: { icon: "alert-outline", glow: "rgba(255,165,0,0.5)", shadow: "0px 0px 10px 3px rgba(255, 165, 0, 0.1)" },
  info: { icon: "information", glow: "rgba(0,123,255,0.5)", shadow: "0px 0px 10px 3px rgba(0, 123, 255, 0.1)" },
  default: { icon: "accessibility-outline", glow: "rgba(255,255,255,0.5)", shadow: "0px 0px 10px 3px rgba(255, 255, 255, 0.1)" }
};

function showToast(status = "default", message = "") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const { icon, glow, shadow } = toastThemes[status] || toastThemes.default;

  const toast = document.createElement("div");
  toast.className = "toast professional";

  const iconElem = document.createElement("ion-icon");
  iconElem.setAttribute("name", icon);

  const text = document.createElement("span");
  text.textContent = message;
  text.innerHTML = message.replace(/\n/g, "<br>");

  const glowElem = document.createElement("div");
  glowElem.className = "toast-glow";
  glowElem.style.background = `radial-gradient(circle, ${glow}, transparent 70%)`;

  toast.append(iconElem, text, glowElem);
	toast.classList.add(status);
	toast.style.boxShadow = shadow;
  container.appendChild(toast);

  toast.onclick = () => {
    toast.classList.add("fade-out");
    setTimeout(() => toast.remove(), 500);
  };

  setTimeout(() => {
		toast.classList.add("fade-out");
		setTimeout(() => toast.remove(), 500);
	}, 6500);
}

//// Call the function with different lists and container IDs
//createButtonListWithIcon(
//  frameworksLanguagesExpertiseButtons,
//  "frameworksLanguagesExpertise"
//);
//
//createButtonListWithIcon(
//  paymentGatewayExpertiseButtons,
//  "paymentGatewayExpertise"
//);
//createButtonListWithIcon(plugnisExpertiseButtons, "plugnisExpertise");
//createButtonListWithIcon(
//  tootlUtilitiesExpertiseButtons,
//  "tootlUtilitiesExpertise"
//);
//createButtonListWithIcon(
//  versionControlExpertiseButtons,
//  "versionControlExpertise"
//);
//createButtonListWithIcon(databaseExpertiseButtons, "databaseExpertise");
//createButtonListWithIcon(apiServicesExpertiseButtons, "apiServicesExpertise");
//createButtonListWithIcon(codeReviewExpertiseButtons, "codeReviewExpertise");
//createButtonListWithIcon(deploymentExpertiseButtons, "deploymentExpertise");
//createButtonListWithIcon(
//  crashReportingExpertiseButtons,
//  "crashReportingExpertise"
//);
//createButtonListWithIcon(
//  projectManagementToolsExpertiseButtons,
//  "projectManagementToolsExpertise"
//);
//
//createButtonListWithIcon(
//  stateManagementExpertiseButtons,
//  "stateManagementExpertise"
//);
//createButtonListWithIcon(
//  upgradeServicesExpertiseButtons,
//  "upgradeServicesExpertise"
//);
//createButtonListWithIcon(unitTestingExpertiseButtons, "unitTestingExpertise");
//createButtonListWithIcon(uiUXToolsExpertiseButtons, "uiUXToolsExpertise");
