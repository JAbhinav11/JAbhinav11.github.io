"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};
const frameworksLanguagesExpertiseButtons = [
  {
    name: "Flutter",
    icon: "./bundles/images/svg/flutter.svg",
  },
  {
    name: "Dart",
    icon: "./bundles/images/svg/dart.svg",
  },
  {
    name: "FlutterFlow",
    icon: "./bundles/images/svg/flutterflow.svg",
  },
  {
    name: "Android Native",
    icon: "./bundles/images/svg/android.svg",
  },
  {
    name: "Kotlin",
    icon: "./bundles/images/svg/kotlin.svg",
  },
  {
    name: "iOS Native",
    icon: "./bundles/images/svg/iOS.png",
  },
  {
    name: "TypeScript",
    icon: "./bundles/images/svg/typeScript.svg",
  },
  {
    name: "JavaScript",
    icon: "./bundles/images/svg/javascript.svg",
  },
];

const paymentGatewayExpertiseButtons = [
  {
    name: "Razorpay",
    icon: "./bundles/images/svg/razorpay.png",
  },
  {
    name: "Stripe",
    icon: "./bundles/images/svg/stripe.svg",
  },
  {
    name: "In App Purchase",
    icon: "./bundles/images/svg/iap.svg",
  },
  {
    name: "Braintree",
    icon: "./bundles/images/svg/braintree.svg",
  },
  {
    name: "Google Pay",
    icon: "./bundles/images/svg/google-pay.svg",
  },
];
const apiServicesExpertiseButtons = [
  {
    name: "REST API",
    icon: "./bundles/images/svg/api.svg",
  },
  {
    name: "GraphQL",
    icon: "./bundles/images/svg/graphql.svg",
  },
];
const uiUXToolsExpertiseButtons = [
  {
    name: "Figma",
    icon: "./bundles/images/svg/figma.svg",
  },
  {
    name: "Framer",
    icon: "./bundles/images/svg/framer.svg",
  },
  {
    name: "Whimsical",
    icon: "./bundles/images/svg/whimsical.jpg",
  },
];
const unitTestingExpertiseButtons = [
  {
    name: "Widget Tests",
    icon: "./bundles/images/svg/widget.png",
  },
  {
    name: "Unit Tests",
    icon: "./bundles/images/svg/unit-testing.png",
  },
  {
    name: "Integration Tests",
    icon: "./bundles/images/svg/integration-testing.webp",
  },
];
const upgradeServicesExpertiseButtons = [
  {
    name: "Puro",
    icon: "./bundles/images/svg/puro.png",
  },
  {
    name: "FVM",
    icon: "./bundles/images/svg/fvm.svg",
  },
];
const deploymentProcessExpertiseButtons = [
  "Cirrus",
  "Travis",
  "Codemagic",
  "Bitrise",
];
const stateManagementExpertiseButtons = [
  {
    name: "Provider",
    icon: "./bundles/images/svg/provider.png",
  },
  {
    name: "BLoC",
    icon: "./bundles/images/svg/bloc.png",
  },
  {
    name: "GetX",
    icon: "./bundles/images/svg/getx.png",
  },
  {
    name: "Riverpod",
    icon: "./bundles/images/svg/riverpod.svg",
  },
];
const projectManagementToolsExpertiseButtons = [
  {
    name: "asana",
    icon: "./bundles/images/svg/asana.svg",
  },
  {
    name: "Slack",
    icon: "./bundles/images/svg/slack.svg",
  },
  {
    name: "Jira",
    icon: "./bundles/images/svg/jira.svg",
  },
  {
    name: "Trello",
    icon: "./bundles/images/svg/trello.svg",
  },
];
const crashReportingExpertiseButtons = [
  {
    name: "Firebase Crashlytics",
    icon: "./bundles/images/svg/firebase-crashlytics.png",
  },
  {
    name: "Sentry",
    icon: "./bundles/images/svg/sentry.svg",
  },
];
const deploymentExpertiseButtons = [
  {
    name: "Google Play Stroe",
    icon: "./bundles/images/svg/google-play.png",
  },
  {
    name: "App Stroe",
    icon: "./bundles/images/svg/app-store.svg",
  },
  {
    name: "Web",
    icon: "./bundles/images/svg/web.svg",
  },
  {
    name: "Microsoft Store",
    icon: "./bundles/images/svg/microsoft-store.png",
  },
  {
    name: "Linux",
    icon: "./bundles/images/svg/linux.svg",
  },
];
const codeReviewExpertiseButtons = [
  {
    name: "Flutter Analyze",
    icon: "./bundles/images/svg/flutter-analyze.svg",
  },
  {
    name: "Effective Dart-Default IDE Static Analysis",
    icon: "./bundles/images/svg/code-Effective.png",
  },
  {
    name: "pana",
    icon: "./bundles/images/svg/pana.png",
  },
];
const databaseExpertiseButtons = [
  {
    name: "Local Storage",
    icon: "./bundles/images/svg/local-database.png",
  },
  {
    name: "Sqlite",
    icon: "./bundles/images/svg/sqlite.svg",
  },
  {
    name: "Firebase Firestore",
    icon: "./bundles/images/svg/firebase-firestore.png",
  },
  {
    name: "Firebase realtime database",
    icon: "./bundles/images/svg/firebase-realtime.png",
  },
  {
    name: "Supabase",
    icon: "./bundles/images/svg/supabase.svg",
  },
  {
    name: "Hive",
    icon: "./bundles/images/svg/hive.png",
  },
  {
    name: "ObjectBox",
    icon: "./bundles/images/svg/objectbox.png",
  },
];
const versionControlExpertiseButtons = [
  {
    name: "Git",
    icon: "./bundles/images/svg/git.svg",
  },
  {
    name: "Github",
    icon: "./bundles/images/svg/github.svg",
  },
  {
    name: "BitBucket",
    icon: "./bundles/images/svg/bitbucket.svg",
  },
];
const tootlUtilitiesExpertiseButtons = [
  {
    name: "Android Studio",
    icon: "./bundles/images/svg/android-studio.svg",
  },
  {
    name: "Visual Studio Code",
    icon: "./bundles/images/svg/visual-studio-code.svg",
  },
  {
    name: "XCode",
    icon: "./bundles/images/svg/xcode.svg",
  },
  {
    name: "Postman",
    icon: "./bundles/images/svg/postman-icon.svg",
  },
];
const plugnisExpertiseButtons = [
  {
    name: "Firebase",
    icon: "./bundles/images/svg/firebase.svg",
  },
  {
    name: "OneSignal Notifications",
    icon: "./bundles/images/svg/onesignal.svg",
  },
  {
    name: "In-App-Purchase",
    icon: "./bundles/images/svg/iap.svg",
  },
  {
    name: "Google Map",
    icon: "./bundles/images/svg/google-map.svg",
  },
  {
    name: "Social Login",
    icon: "./bundles/images/svg/social-login.png",
  },
  {
    name: "Notifications",
    icon: "./bundles/images/svg/notification.png",
  },
  {
    name: "Injectable",
    icon: "./bundles/images/svg/injectable.svg",
  },
  {
    name: "Json Serializable",
    icon: "./bundles/images/svg/json.svg",
  },
];

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

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const overlay = document.querySelector("[data-overlay]");
const testimonialImg = document.querySelector("[data-testimonials-avatar]");

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

// Add input event listener to each form input
formInputs.forEach(input => {
  input.addEventListener("input", validateForm);
});

// Initial validation on page load
validateForm();

// Handle form submission
const form = document.getElementById("contact-form");
const button = form.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  button.disabled = true;
  button.querySelector("span").textContent = "Sending...";

  grecaptcha.ready(function () {
    grecaptcha.execute("6LfdbHArAAAAAPeDLaw6tVOunsir0DJs14gteGKi", { action: "submit" }).then(async function (token) {
      const formData = new FormData(form);

      const isMobile = /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      formData.append("deviceType", isMobile ? "Mobile" : "Desktop");
      formData.append("g-recaptcha-response", token);

      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbzY44QUQgMtOanfoBLAMjiqxFJm8rqBdFseUkwOpR_nItUX5LQ0j9mcx4L_pZgo33o2/exec", {
          method: "POST",
          body: formData
        });

        if (response.ok) {
          alert("Thank you! Your message has been sent.");
          form.reset();
          validateForm(); // Re-check form after reset
        } else {
          alert("Error: Could not send form.");
        }
      } catch (error) {
        console.error("Submission error:", error);
        alert("Something went wrong.");
      } finally {
        button.disabled = false;
        button.querySelector("span").textContent = "Send Message";
      }
    });
  });
});


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

function createButtonListWithIcon(buttonNames, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  buttonNames.forEach((item) => {
    const button = document.createElement("button");
    const icon = document.createElement("img"); // Use img instead of span
    icon.className = "icon";
    icon.src = item.icon;
    icon.alt = `${item.name} icon`;

    button.className = "toolBtn";
    button.textContent = item.name;
    button.appendChild(icon);
    container.appendChild(button);
  });
}

// calculate years of experience
const startYear = 2018;
const currentYear = new Date().getFullYear();
const experienceYears = currentYear - startYear;
document.getElementById("experience-years").textContent = `+${experienceYears}`;

//// display popup image
//const thumbnail = document.getElementById('thumbnail');
//const popup = document.getElementById('popup');
//thumbnail.addEventListener('click', () => {
//  popup.classList.add('show');
//});
//function hidePopup() {
//  popup.classList.remove('show');
//}

// Generic image popup logic
const popup = document.getElementById("popup");
const popupImg = popup.querySelector("img");

document.addEventListener("click", function (e) {
  const target = e.target;
  if (target.matches("[data-popup-image]")) {
    const src = target.getAttribute("src");
    popupImg.setAttribute("src", src);
    popup.classList.add("show");
  }
});

function hidePopup() {
  popup.classList.remove("show");
  setTimeout(() => {
    popupImg.removeAttribute("src");
  }, 500); // Delay before clearing image
}

/**
 * Function to load resume data
 */
async function loadResumeData() {
 const [experienceRes, skillsRes, educationRes] = await Promise.all([
     fetch('/bundles/files/experience.json'),
     fetch('/bundles/files/skills.json'),
     fetch('/bundles/files/education.json')
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

// load the cards in gallery
fetch('/bundles/files/cards.json')
    .then(response => response.json())
    .then(cardsData => {
      const container = document.getElementById('cardContainer');

      cardsData.forEach(card => {
        const cardHTML = `
          <div class="card-wrap">
            <div class="card">
              <div class="card-bg" style="background-image: url('${card.image}');"></div>
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
        bg.style.transform = `translate(${bgTranslateX}px, ${bgTranslateY}px) scale(1.1)`;
      });

      cardWrap.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        bg.style.transform = 'translate(0, 0)';
      });
    });
  }

// Call the function with different lists and container IDs
createButtonListWithIcon(
  frameworksLanguagesExpertiseButtons,
  "frameworksLanguagesExpertise"
);

createButtonListWithIcon(
  paymentGatewayExpertiseButtons,
  "paymentGatewayExpertise"
);
createButtonListWithIcon(plugnisExpertiseButtons, "plugnisExpertise");
createButtonListWithIcon(
  tootlUtilitiesExpertiseButtons,
  "tootlUtilitiesExpertise"
);
createButtonListWithIcon(
  versionControlExpertiseButtons,
  "versionControlExpertise"
);
createButtonListWithIcon(databaseExpertiseButtons, "databaseExpertise");
createButtonListWithIcon(apiServicesExpertiseButtons, "apiServicesExpertise");
createButtonListWithIcon(codeReviewExpertiseButtons, "codeReviewExpertise");
createButtonListWithIcon(deploymentExpertiseButtons, "deploymentExpertise");
createButtonListWithIcon(
  crashReportingExpertiseButtons,
  "crashReportingExpertise"
);
createButtonListWithIcon(
  projectManagementToolsExpertiseButtons,
  "projectManagementToolsExpertise"
);

createButtonListWithIcon(
  stateManagementExpertiseButtons,
  "stateManagementExpertise"
);
createButtonListWithIcon(
  upgradeServicesExpertiseButtons,
  "upgradeServicesExpertise"
);
createButtonListWithIcon(unitTestingExpertiseButtons, "unitTestingExpertise");
createButtonListWithIcon(uiUXToolsExpertiseButtons, "uiUXToolsExpertise");
