// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [{ 
        sectionNum: 1,
        roomNum: 'STC 353',
        enrolled: 26,
        days: 'TTh',
        instructor: 'Bro T'
    },
    {
        sectionNum: 2,
        roomNum: 'STC 347',
        enrolled: 28,
        days: 'TTh',
        instructor: 'Sis A'
    }],

    enrollStudent: function(sectionNum) {
       const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
       );
       
       if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled++;
        showSections(this.sections)
       }
    },

    dropStident: function(sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );

        if (sectionIndex >= 0) {
            this.sections[sectionNum].enrolled--;
            showSections(this.sections)
        }
    },

  };
  
  // set the name and number of the course in the HTML
  function setCourseData(course) {
    const courseName = document.querySelector("#courseName");
    courseName.textContent = course.name;

    const courseCode = document.querySelector("#courseCode");
    courseCode.textContent = course.code;
  }

  // output the sections into the table
  function showSections(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
        </tr>`);
    
    document.querySelector("#sections").innerHTML = html.join();
  }
 setCourseData(aCourse);
 showSections(aCourse.sections);

 // Event listeners

 document.querySelector("#enrollStudent").addEventListener("click", function() {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
 });

 document.querySelector("#dropStudent").addEventListener("click", function() {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStident(sectionNum);
 });