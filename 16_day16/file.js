//take array of objects where each object contains empid, empname, empcompany, empsalary, empaddress where empaddress contains further contains an object which includes 2 propoerties such as empcity,area. 
//Display all these employee data on the UI in a table through javascript.
let arr = [
    {
        empid: "ID1",
        empname: "Akshay",
        empcompany: "Google",
        empsalary: 250000,
        empaddress: {
            empcity: "Hyderabad",
            area: "Hiteccity"
        }
    },
    {
        empid: "ID2",
        empname: "Raj",
        empcompany: "Microsoft",
        empsalary: 150000,
        empaddress: {
            empcity: "Bangalore",
            area: "Whitefield"
        }
    },
    {
        empid: "ID3",
        empname: "Rahul",
        empcompany: "Amazon",
        empsalary: 200000,
        empaddress: {
            empcity: "Chennai",
            area: "OMR"
        }
    },
    {
        empid: "ID4",
        empname: "Rohit",
        empcompany: "TCS",
        empsalary: 200000,
        empaddress: {
            empcity: "Pune",
            area: "Hinjewadi"
        }
    },
    {
        empid: "ID5",
        empname: "Ravi",
        empcompany: "Infosys",
        empsalary: 200000,
        empaddress: {
            empcity: "Mumbai",
            area: "Andheri"
        }
    }
];



// const table = document.createElement("table");
// table.border = "1";
// table.style.width = "100%";
// table.style.borderCollapse = "collapse";


// const headerRow = document.createElement("tr");
// ["Emp ID", "Name", "Company", "Salary", "City", "Area"].forEach(headerText => {
//     const th = document.createElement("th");
//     th.textContent = headerText;
//     th.style.padding = "8px";
//     th.style.backgroundColor = "#f2f2f2";
//     headerRow.appendChild(th);
// });
// table.appendChild(headerRow);


// arr.forEach(emp => {
//     const row = document.createElement("tr");
//     const cellData = [
//         emp.empid,
//         emp.empname,
//         emp.empcompany,
//         emp.empsalary,
//         emp.empaddress.empcity,
//         emp.empaddress.area
//     ];

//     cellData.forEach(data => {
//         const td = document.createElement("td");
//         td.textContent = data;
//         td.style.padding = "8px";
//         row.appendChild(td);
//     });
//     table.appendChild(row);
// });


// document.body.appendChild(table);

[...arr].map(user=>{
    const store=document.getElementById("store")
    store.innerHTML+=`
    <tr>
        <td>${user.empid}</td>
        <td>${user.empname}</td>
        <td>${user.empsalary}</td>
        <td>${user.empaddress.empcity}</td>
        <td>${user.empsalary}</td>
    </tr>
    `
    
})