alert("Welcome to the Scholarship Application Form!");

let currentStep =1;
let formData ={ 
    name:"",
    emaill:"",
     password:"",
     profilePic:null,
     education:"",
    codingExperience:"",
}
function renderStep(step) {
    const container = document.getElementById("form-container");
    let html = "";

    switch (step) { 
        case 1:
            html = `
                <h2>Step 1: Personal Information</h2>
                <div>
                    <input type="text" id="name" placeholder="Full Name" value="${formData.name}" required />
                    <input type="email" id="email" placeholder="Email" value="${formData.email}" required />
                    <label>Upload Profile Picture</label>
                    <input type="file" id="profilePic" accept="image/*" onchange="handleFileUpload(event)" required />
                </div>`;
            break;

        case 2:
            html = `
                <h2>Step 2: Education</h2>
                <div>
                    <input type="text" id="education" placeholder="Education" value="${formData.education}" required />
                    <input type="text" id="codingExperience" placeholder="Coding Experience" value="${formData.codingExperience}" required />
                </div>`;
            break;

        case 3: 
            html = `
                <h2>Step 3: Why Should You Get The Scholarship?</h2>
                <textarea id="scholarshipReason" placeholder="Why should you get the scholarship?" required></textarea>
                <button onClick="submitForm()">Submit</button>`;
            break;

        
    }

    container.innerHTML = html;
}

     