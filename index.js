let currentStep = 1;
let formData = {
  fullName: "",
  emailAddress: "",
  birthDate: "",
  phoneNumber: "",
  profilePicture: null,
  about: "",
  location: "",
  education: "",
  skills: "",
  interests: "",
  motivateApplication: "",
  portfolio: "",
};

function renderStep() {
  const container = document.getElementById("form-container");
  let html = "";

  switch (currentStep) {
    case 1:
      html += `
        <h2>Step 1: Personal Information</h2>
        <label for="fullName">Full Name:</label>
        <input type="text" id="fullName" value="${formData.fullName}" required>
        <label for="birthDate">Birth Date:</label>
        <input type="date" id="birthDate" value="${formData.birthDate}" required>
        <label for="profilePicture">Profile Picture:</label>
        <input type="file" id="profilePicture" accept="image/*">
        <label for="about">About:</label>
        <textarea id="about" required>${formData.about}</textarea>
        <label for="location">Location:</label>
        <input type="text" id="location" value="${formData.location}" required>
      `;
      break;

    case 2:
      html += `
        <h2>Step 2: Contact Information</h2>
        <label for="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" value="${formData.phoneNumber}" required>
        <label for="emailAddress">Email:</label>
        <input type="email" id="emailAddress" value="${formData.emailAddress}" required>
      `;
      break;

    case 3:
      html += `
        <h2>Step 3: Education and Skills</h2>
        <label for="education">Education:</label>
        <input type="text" id="education" value="${formData.education}" required>
        <label for="skills">Skills:</label>
        <input type="text" id="skills" value="${formData.skills}" required>
      `;
      break;

    case 4:
      html += `
        <h2>Step 4: Interests and Motivation</h2>
        <label for="interests">Interests:</label>
        <input type="text" id="interests" value="${formData.interests}" required>
        <label for="motivateApplication">Motivation for Application:</label>
        <textarea id="motivateApplication" required>${formData.motivateApplication}</textarea>
        <label for="portfolio">Portfolio (Provide a URL):</label>
        <input type="url" id="portfolio" value="${formData.portfolio}" placeholder="https://yourportfolio.com" required>
        <button onclick="submitForm()">Submit</button>
      `;
      break;
  }

  container.innerHTML = html;

  document.getElementById("prevBtn").style.display = currentStep === 1 ? "none" : "inline";
  document.getElementById("nextBtn").style.display = currentStep === 4 ? "none" : "inline";
}

function nextStep() {
  if (!validateStep()) {
    alert("Please fill in all required fields before proceeding.");
    return; 
  }

  saveData();
  if (currentStep < 4) {
    currentStep++;
    renderStep();
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    renderStep();
  }
}

function validateStep() {
  let requiredFields = [];

  switch (currentStep) {
    case 1:
      requiredFields = ["fullName", "birthDate", "about", "location"];
      break;
    case 2:
      requiredFields = ["phoneNumber", "emailAddress"];
      break;
    case 3:
      requiredFields = ["education", "skills"];
      break;
    case 4:
      requiredFields = ["interests", "motivateApplication", "portfolio"];
      break;
  }

  return requiredFields.every(field => {
    const inputElement = document.getElementById(field);
    return inputElement && inputElement.value.trim() !== ""; // Ensure no empty values
  });
}

function saveData() {
  if (currentStep === 1) {
    formData.fullName = document.getElementById("fullName").value;
    formData.birthDate = document.getElementById("birthDate").value;
    formData.profilePicture = document.getElementById("profilePicture").files[0] || null;
    formData.about = document.getElementById("about").value;
    formData.location = document.getElementById("location").value;
  } else if (currentStep === 2) {
    formData.phoneNumber = document.getElementById("phoneNumber").value;
    formData.emailAddress = document.getElementById("emailAddress").value;
  } else if (currentStep === 3) {
    formData.education = document.getElementById("education").value;
    formData.skills = document.getElementById("skills").value;
  } else if (currentStep === 4) {
    formData.interests = document.getElementById("interests").value;
    formData.motivateApplication = document.getElementById("motivateApplication").value;
    formData.portfolio = document.getElementById("portfolio").value;
  }
}

function submitForm() {
  saveData();
  const container = document.getElementById("form-container");
  container.innerHTML = `<h2>Thank You, ${formData.fullName}, for your application!</h2>
                         <p>Your portfolio: <a href="${formData.portfolio}" target="_blank">${formData.portfolio}</a></p>`;
  document.querySelector('.nav-buttons').style.display = "none";

  console.log("Form submitted with data:", formData);
}

window.onload = renderStep;
