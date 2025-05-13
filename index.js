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
        <div>
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
          
          <h2>Step 2: Contact Information</h2>
          <label for="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" value="${formData.phoneNumber}" required>
          
          <label for="emailAddress">Email:</label>
          <input type="email" id="emailAddress" value="${formData.emailAddress}" required>
          
          <h2>Step 3: Education and Skills</h2>
          <label for="education">Education:</label>
          <input type="text" id="education" value="${formData.education}" required>
          
          <label for="skills">Skills:</label>
          <input type="text" id="skills" value="${formData.skills}" required>
          
          <h2>Step 4: Interests and Motivation</h2>
          <label for="interests">Interests:</label>
          <input type="text" id="interests" value="${formData.interests}" required>
          
          <label for="motivateApplication">Motivation for Application:</label>
          <textarea id="motivateApplication" required>${formData.motivateApplication}</textarea>
          
          <label for="portfolio">Portfolio (Provide a URL):</label>
          <input type="url" id="portfolio" value="${formData.portfolio}" placeholder="https://yourportfolio.com" required>
          
          <button onclick="submitForm()">Submit</button>
        </div>
      `;
      break;
  }

  container.innerHTML = html;
}


function saveData() {
  const get = id => document.getElementById(id)?.value || "";

  formData.fullName = get("fullName");
  formData.birthDate = get("birthDate");
  formData.profilePicture = document.getElementById("profilePicture")?.files[0] || null;
  formData.about = get("about");
  formData.location = get("location");
  formData.phoneNumber = get("phoneNumber");
  formData.emailAddress = get("emailAddress");
  formData.education = get("education");
  formData.skills = get("skills");
  formData.interests = get("interests");
  formData.motivateApplication = get("motivateApplication");
  formData.portfolio = get("portfolio");
}

function validateStep() {
  const required = document.querySelectorAll("#form-container input[required], #form-container textarea[required]");
  return Array.from(required).every(input => input.value.trim() !== "");
}


function submitForm() {
  if (validateStep()) {
    saveData();
    document.getElementById("main-content").style.display = "none";
    document.getElementById("thank-you").style.display = "block";
    console.log("Submitted Data:", formData);
  } else {
    alert("Please fill in all required fields.");
  }
}

function enterSite() {
  document.getElementById("cover-page").style.display = "none";
  document.getElementById("about-page").style.display = "block";
}


function goToForm() {
  document.getElementById("about-page").style.display = "none";
  document.getElementById("main-content").style.display = "block";
  renderStep();
}


window.onload = () => {
  
};
