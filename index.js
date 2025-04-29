let currentStep =1;
let formData ={
  fullName: "",
  email:"",
  phoneNumber:"",
  profilePicture:"null",
  emailAdress:"",
  about:"",
  location:"",
education:"",
skills:"",
  interests:"",
  motivateApplication:"",
  portfolio:"null",
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
    <label for="about">about:</label>
     <label for="profilePicture">Profile Picture:</label>
    <input type="file" id="profilePicture" accept="image/*" onchange="handleFileUpload(event)">
    <input type="about" id="about" value="${formData.about}" required>
<label for="location">Location:</label>
<input type="text" id="location" value="${formData.location}" required>
`;
break;

  case 2:
    html += `
    <h2>Step 2: Contact Information</h2>
    <label for="phoneNumber">Phone Number:</label>
    <input type="tel" id="phoneNumber" value="${formData.phoneNumber}" required>
    <label for="email">Email:</label>
    <input type="email" id="email" value="${formData.email}" required>
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
    <input type="hidden" id="portfolio" value="${formData.portfolio}" required>
`;
}  
}
