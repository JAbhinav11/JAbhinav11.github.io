"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};
const frameworksLanguagesExpertiseButtons = [
  {
    name: "Flutter",
    icon: "./assets/images/svg/flutter.svg",
  },
  {
    name: "Dart",
    icon: "./assets/images/svg/dart.svg",
  },
  {
    name: "FlutterFlow",
    icon: "./assets/images/svg/flutterflow.svg",
  },
  {
    name: "Android Native",
    icon: "./assets/images/svg/android.svg",
  },
  {
    name: "Kotlin",
    icon: "./assets/images/svg/kotlin.svg",
  },
  {
    name: "iOS Native",
    icon: "./assets/images/svg/iOS.png",
  },
  {
    name: "TypeScript",
    icon: "./assets/images/svg/typeScript.svg",
  },
  {
    name: "JavaScript",
    icon: "./assets/images/svg/javascript.svg",
  },
];

const paymentGatewayExpertiseButtons = [
  {
    name: "Razorpay",
    icon: "./assets/images/svg/razorpay.png",
  },
  {
    name: "Stripe",
    icon: "./assets/images/svg/stripe.svg",
  },
  {
    name: "In App Purchase",
    icon: "./assets/images/svg/iap.svg",
  },
  {
    name: "Braintree",
    icon: "./assets/images/svg/braintree.svg",
  },
  {
    name: "Google Pay",
    icon: "./assets/images/svg/google-pay.svg",
  },
];
const apiServicesExpertiseButtons = [
  {
    name: "REST API",
    icon: "./assets/images/svg/api.svg",
  },
  {
    name: "GraphQL",
    icon: "./assets/images/svg/graphql.svg",
  },
];
const uiUXToolsExpertiseButtons = [
  {
    name: "Figma",
    icon: "./assets/images/svg/figma.svg",
  },
  {
    name: "Framer",
    icon: "./assets/images/svg/framer.svg",
  },
  {
    name: "Whimsical",
    icon: "./assets/images/svg/whimsical.jpg",
  },
];
const unitTestingExpertiseButtons = [
  {
    name: "Widget Tests",
    icon: "./assets/images/svg/widget.png",
  },
  {
    name: "Unit Tests",
    icon: "./assets/images/svg/unit-testing.png",
  },
  {
    name: "Integration Tests",
    icon: "./assets/images/svg/integration-testing.webp",
  },
];
const upgradeServicesExpertiseButtons = [
  {
    name: "Puro",
    icon: "./assets/images/svg/puro.png",
  },
  {
    name: "FVM",
    icon: "./assets/images/svg/fvm.svg",
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
    icon: "./assets/images/svg/provider.png",
  },
  {
    name: "BLoC",
    icon: "./assets/images/svg/bloc.png",
  },
  {
    name: "GetX",
    icon: "./assets/images/svg/getx.png",
  },
  {
    name: "Riverpod",
    icon: "./assets/images/svg/riverpod.svg",
  },
];
const projectManagementToolsExpertiseButtons = [
  {
    name: "asana",
    icon: "./assets/images/svg/asana.svg",
  },
  {
    name: "Slack",
    icon: "./assets/images/svg/slack.svg",
  },
  {
    name: "Jira",
    icon: "./assets/images/svg/jira.svg",
  },
  {
    name: "Trello",
    icon: "./assets/images/svg/trello.svg",
  },
];
const crashReportingExpertiseButtons = [
  {
    name: "Firebase Crashlytics",
    icon: "./assets/images/svg/firebase-crashlytics.png",
  },
  {
    name: "Sentry",
    icon: "./assets/images/svg/sentry.svg",
  },
];
const deploymentExpertiseButtons = [
  {
    name: "Google Play Stroe",
    icon: "./assets/images/svg/google-play.png",
  },
  {
    name: "App Stroe",
    icon: "./assets/images/svg/app-store.svg",
  },
  {
    name: "Web",
    icon: "./assets/images/svg/web.svg",
  },
  {
    name: "Microsoft Store",
    icon: "./assets/images/svg/microsoft-store.png",
  },
  {
    name: "Linux",
    icon: "./assets/images/svg/linux.svg",
  },
];
const codeReviewExpertiseButtons = [
  {
    name: "Flutter Analyze",
    icon: "./assets/images/svg/flutter-analyze.svg",
  },
  {
    name: "Effective Dart-Default IDE Static Analysis",
    icon: "./assets/images/svg/code-Effective.png",
  },
  {
    name: "pana",
    icon: "./assets/images/svg/pana.png",
  },
];
const databaseExpertiseButtons = [
  {
    name: "Local Storage",
    icon: "./assets/images/svg/local-database.png",
  },
  {
    name: "Sqlite",
    icon: "./assets/images/svg/sqlite.svg",
  },
  {
    name: "Firebase Firestore",
    icon: "./assets/images/svg/firebase-firestore.png",
  },
  {
    name: "Firebase realtime database",
    icon: "./assets/images/svg/firebase-realtime.png",
  },
  {
    name: "Supabase",
    icon: "./assets/images/svg/supabase.svg",
  },
  {
    name: "Hive",
    icon: "./assets/images/svg/hive.png",
  },
  {
    name: "ObjectBox",
    icon: "./assets/images/svg/objectbox.png",
  },
];
const versionControlExpertiseButtons = [
  {
    name: "Git",
    icon: "./assets/images/svg/git.svg",
  },
  {
    name: "Github",
    icon: "./assets/images/svg/github.svg",
  },
  {
    name: "BitBucket",
    icon: "./assets/images/svg/bitbucket.svg",
  },
];
const tootlUtilitiesExpertiseButtons = [
  {
    name: "Android Studio",
    icon: "./assets/images/svg/android-studio.svg",
  },
  {
    name: "Visual Studio Code",
    icon: "./assets/images/svg/visual-studio-code.svg",
  },
  {
    name: "XCode",
    icon: "./assets/images/svg/xcode.svg",
  },
  {
    name: "Postman",
    icon: "./assets/images/svg/postman-icon.svg",
  },
];
const plugnisExpertiseButtons = [
  {
    name: "Firebase",
    icon: "./assets/images/svg/firebase.svg",
  },
  {
    name: "OneSignal Notifications",
    icon: "./assets/images/svg/onesignal.svg",
  },
  {
    name: "In-App-Purchase",
    icon: "./assets/images/svg/iap.svg",
  },
  {
    name: "Google Map",
    icon: "./assets/images/svg/google-map.svg",
  },
  {
    name: "Social Login",
    icon: "./assets/images/svg/social-login.png",
  },
  {
    name: "Notifications",
    icon: "./assets/images/svg/notification.png",
  },
  {
    name: "Injectable",
    icon: "./assets/images/svg/injectable.svg",
  },
  {
    name: "Json Serializable",
    icon: "./assets/images/svg/json.svg",
  },
];

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

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (dataForm.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

const form = document.getElementById("contact-form");
const button = form.querySelector("button");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  button.disabled = true;
  button.querySelector("span").textContent = "Sending...";

  grecaptcha.ready(function () {
    grecaptcha.execute("6LfdbHArAAAAAPeDLaw6tVOunsir0DJs14gteGKi", { action: "submit" }).then(async function (token) {
      const formData = new FormData(form);

      // Append deviceType
      const isMobile = /Mobile|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      formData.append("deviceType", isMobile ? "Mobile" : "Desktop");

      // Optionally include reCAPTCHA token (not used in Apps Script)
      formData.append("g-recaptcha-response", token);

      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbzgI_JkUs9D0EYR_a2mQrTAuCQCDIgNJptzQibpAHc9Bw-qFHK9FJodPpCAj48UUI0/exec", {
          method: "POST",
          body: formData
        });

        if (response.ok) {
          alert("Thank you! Your message has been sent.");
          form.reset();
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

// display popup image
const thumbnail = document.getElementById('thumbnail');
const popup = document.getElementById('popup');
thumbnail.addEventListener('click', () => {
  popup.classList.add('show');
});
function hidePopup() {
  popup.classList.remove('show');
}


async function loadResumeData() {
 const [experienceRes, skillsRes, educationRes] = await Promise.all([
     fetch('/assets/files/experience.json'),
     fetch('/assets/files/skills.json'),
     fetch('/assets/files/education.json')
 ]);


  const experiences = await experienceRes.json();
  const skills = await skillsRes.json();
  const education = await educationRes.json();

  renderExperience(experiences);
  renderSkills(skills);
  renderEducation(education);
}

function renderExperience(experiences) {
  const timelineList = document.querySelector('.timeline-list');
  timelineList.innerHTML = '';

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

    timelineList.appendChild(item);
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

document.addEventListener('DOMContentLoaded', loadResumeData);

// load the cards in gallery
fetch('/assets/files/cards.json')
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
