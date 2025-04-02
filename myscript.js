// Student database
const students = [
    { rollno: "210899", enrollno: "AY147274190", name: "RAKSHA JAIN", total: "246/30", sgpa: "8.2", result: "PASS" },
    { rollno: "210900", enrollno: "AY147274191", name: "FARHA KHATOON", total: "258/30", sgpa: "8.6", result: "PASS" },
    { rollno: "210901", enrollno: "AY147274209", name: "AMAAN KHAN", total: "228/30", sgpa: "7.6", result: "PASS" },
    { rollno: "210902", enrollno: "AY147274203", name: "NIDA BEE", total: "225/30", sgpa: "7.5", result: "PASS" },
    { rollno: "210903", enrollno: "AY147274194", name: "MAYANK MATHUR", total: "240/30", sgpa: "8.0", result: "PASS" },
    { rollno: "210904", enrollno: "AY147274211", name: "TULSI VISHWAKARMA", total: "237/30", sgpa: "7.9", result: "PASS" },
    { rollno: "210905", enrollno: "AY147274206", name: "UTKARSH RAI", total: "231/30", sgpa: "7.7", result: "PASS" },
    { rollno: "210906", enrollno: "AY147274193", name: "NANDNI BAIRAGI", total: "234/30", sgpa: "7.8", result: "PASS" },
    { rollno: "210907", enrollno: "AY147274214", name: "PUSHPENDRA SHARMA", total: "219/30", sgpa: "7.3", result: "PASS" },
    { rollno: "210908", enrollno: "AY147274213", name: "AAYRA QURESHI", total: "234/30", sgpa: "7.8", result: "PASS" },
    { rollno: "210909", enrollno: "AY147274186", name: "PRATEEK MISHRA", total: "246/30", sgpa: "8.2", result: "PASS" },
    { rollno: "210910", enrollno: "AY147274185", name: "SATYAM DANGI", total: "228/30", sgpa: "7.6", result: "PASS" },
    { rollno: "210911", enrollno: "AY147274184", name: "CHETAN JADIYA", total: "240/30", sgpa: "8.0", result: "PASS" },
    { rollno: "210912", enrollno: "AY147274208", name: "SOMIL NEMA", total: "243/30", sgpa: "8.1", result: "PASS" },
    { rollno: "210913", enrollno: "AY147274198", name: "AMIT LODHI", total: "213/30", sgpa: "7.1", result: "PASS" },
    { rollno: "210914", enrollno: "AY147274217", name: "NIKIT RAJPUT", total: "222/30", sgpa: "7.4", result: "PASS" }
];

// Function to populate the table with students
function populateTable(studentArray) {
    const tableBody = document.getElementById('studentsBody');
    tableBody.innerHTML = '';
    
    studentArray.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.rollno}</td>
            <td>${student.enrollno}</td>
            <td>${student.name}</td>
            <td>${student.total}</td>
            <td>${student.sgpa}</td>
            <td><span class="result-pass">${student.result}</span></td>
            <td><button onclick="viewStudent('${student.rollno}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg>
                View
            </button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Search by name function
function searchByName() {
    const searchTerm = document.getElementById('nameSearch').value.trim().toUpperCase();
    
    if (searchTerm === '') {
        populateTable(students);
    } else {
        const filteredStudents = students.filter(student => 
            student.name.toUpperCase().includes(searchTerm)
        );
        populateTable(filteredStudents);
    }
    
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('resultsPage').style.display = 'block';
    document.getElementById('studentInfo').style.display = 'none';
}

// View student details
function viewStudent(rollno) {
    const student = students.find(s => s.rollno === rollno);
    
    if (student) {
        document.getElementById('infoName').textContent = student.name;
        document.getElementById('infoRollNo').textContent = student.rollno;
        document.getElementById('infoEnrollNo').textContent = student.enrollno;
        document.getElementById('infoSGPA').textContent = student.sgpa;
        document.getElementById('infoMarks').textContent = student.total;
        document.getElementById('infoResult').textContent = student.result;
        
        document.getElementById('studentInfo').style.display = 'block';
    }
}

// Go back function
function goBack() {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('resultsPage').style.display = 'none';
}

// Open add student modal
function openAddStudentModal() {
    document.getElementById('addStudentModal').style.display = 'block';
}

// Close add student modal
function closeAddStudentModal() {
    document.getElementById('addStudentModal').style.display = 'none';
}

// Add student form submit handler
document.getElementById('addStudentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const newStudent = {
        rollno: document.getElementById('rollNo').value,
        enrollno: document.getElementById('enrollNo').value,
        name: document.getElementById('studentName').value.toUpperCase(),
        total: document.getElementById('totalMarks').value,
        sgpa: document.getElementById('sgpa').value,
        result: "PASS"
    };
    
    // Add to the beginning of the array
    students.unshift(newStudent);
    
    // Reset form
    document.getElementById('addStudentForm').reset();
    
    // Close modal
    closeAddStudentModal();
    
    // Show notification
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('addStudentModal');
    if (event.target === modal) {
        closeAddStudentModal();
    }
};

// Load all students initially
window.onload = function() {
    // No need to load all students initially
    // Only populate the table after search
};