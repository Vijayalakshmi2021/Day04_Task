//Q1 Create your own resume data in JSON format

const resumeData = {
    name: "Vijayalakshmi",
    contact: {
      email: "sviji1792@email.com",
      phone: "+91 7010095377",
      address:
        "No 2/115, Marukkampatti, Gendenahalli, Dharmapuri-636811",
    },
    
    education: [
      {
        degree: "B.TECH IT",
        university: "Kalasalingam University",
        graduation_year: 2013,
      },
    ],
    experience1: [
      {
        position: "Corporate Agency Manager",
        company: "HDFC LIFE INSURANCE PVT LTD",
        start_date: "Oct 2015",
        end_date: "Jan 2018",
        responsibilities: [
          "Responsible to generate business through HDFC Bank.",
          "Maintaining excellent service levels by effectively co-ordinate with the branch staff resources with in the branch.",
        ],
      },
    ],
    experience2: [
        {
          position: "Senior Associate",
          company: "TNQ Tech PVT LTD",
          start_date: "June 2018",
          end_date: "Till Date",
          responsibilities: [
            "Manage team work schedules and production according to productivity standards.",
            "Perform editing and formatting the content for the publication.",
          ],
        },
      ],
    
  };
  
  console.log(resumeData);
  
  //Q2 JSON using for loop
  
  var jsonArray = [
    {
      name: "David",
      age: 30,
      city: "New York",
    },
    {
      name: "Smith",
      age: 32,
      city: "Australia",
    },
    {
      name: "John",
      age: 35,
      city: "Sydney",
    },
  ];
  for (var i = 0; i < jsonArray.length; i = i + 1) {
    var person = jsonArray[i];
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("City: " + person.city);
  }
  
  //JSON using for in loop
  
  var jsonArray = [
    {
      name: "David",
      age: 30,
      city: "New York",
    },
    {
        name: "Smith",
        age: 32,
        city: "Australia",
    },
    {
        name: "John",
        age: 35,
        city: "Sydney",
    },
  ];
  for (let key in jsonArray) {
    var person = jsonArray[key];
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("City: " + person.city);
  }
  
  //JSON using for of loop
  
  var jsonArray = [
    {
      name: "David",
      age: 30,
      city: "New York",
    },
    {
        name: "Smith",
        age: 32,
        city: "Australia",
    },
    {
        name: "John",
        age: 35,
        city: "Sydney",
    },
  ];
  for (let person of jsonArray) {
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("City: " + person.city);
  }
  
  //JSON using for each loop
  
  var jsonArray = [
    {
      name: "David",
      age: 30,
      city: "New York",
    },
    {
      name: "Smith",
      age: 32,
      city: "Australia",
    },
    {
        name: "John",
        age: 35,
        city: "Sydney",
    },
  ];
  
  jsonArray.forEach(function (person) {
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("City: " + person.city);
  });