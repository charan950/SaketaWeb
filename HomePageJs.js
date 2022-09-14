let itcount =hrcount =mdcount =salescount =seatlecount =indiacount =netcount =
sharepointcount =recount =bicount =bacount  =productmangercount =operationsmangercount  =softwareengineercount =0;

var img = new Image();
img.src = "Image1.jfif";
let employeelistArray = new Array();
if (localStorage.getItem("emplistkey")) {
  employeelistArray = localStorage.getItem("emplistkey");
  employeelistArray = JSON.parse(employeelistArray);
}

// Function to Add New Employee...............................................................................................
function addEmployee() {
  
  var jobDropdown = document.getElementById("job");
  var officedropdown = document.getElementById("selectoffice");
  var departmentdropdown = document.getElementById("selectdep");
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var preferredname = document.getElementById("preferredname").value;
  var email = document.getElementById("email").value;
  var job = jobDropdown.options[jobDropdown.selectedIndex].value;
  var office = officedropdown.options[officedropdown.selectedIndex].value;
  var department = departmentdropdown.options[departmentdropdown.selectedIndex].value;
  var phonenumber = document.getElementById("pnum").value;
  var skypeid = document.getElementById("skypeid").value;
  getPreferredname();
  let employeeobject = {
    firstname: fname,
    lastname: lname,
    preferredname: preferredname,
    email: email,
    job: job,
    office: office,
    department: department,
    phonenumber: phonenumber,
    skypeid: skypeid,
  };
  if (
    fname == "" ||
    lname == "" ||
    preferredname == "" ||
    email == "" ||
    job == "" ||
    office == "" ||
    department == "" ||
    skypeid == "" ||
    phonenumber == ""
  ) {
    alert("Please Fill all details");
    return;
  } 
  employeelistArray.push(employeeobject);
  localStorage.setItem("emplistkey", JSON.stringify(employeelistArray));
  
  var formElements=["fname","lname","preferredname","email","job","selectoffice","selectdep","skypeid","pnum"];
  for(var v in formElements){
    document.getElementById(formElements[v]).value = "";
  }

  displayEmployeeList();
  
  alert("Employee Details Added");
  document.getElementById("empList").style.display = "";
  document.getElementById("add-form").style.display = "none";
}

// function to display employee list...................................................................................
function displayEmployeeList() {
  let listToRender = "";
  let rawStoredEmployeeList = localStorage.getItem("emplistkey");
  let storedEmployeeList = JSON.parse(rawStoredEmployeeList);
  for (var i = 0; i < employeelistArray.length; i++) {
    const employeelist = `    
    <div class="list">
    <div onclick='getDetails(${i})'>
        <div class="row">
            <div class="col-4 ">
              <img class="profile p-2 " src="./Images/Image1.jfif">
            </div>
        <div class="col p-0">
            <div>${storedEmployeeList[i].firstname} ${storedEmployeeList[i].lastname}</div>
            <div>${storedEmployeeList[i].job}</div>
            <div>${storedEmployeeList[i].department}</div>
            <i><img class="icon" src="./Images/call-grey.png"></i>
            <i><img class="icon" src="./Images/popup.png"></i>
            <i><img class="icon" src="./Images/message.png"></i>
            <i><img class="icon" src="./Images/heart.png"></i>
            <i><img class="icon" src="./Images/star.png"></i>
        </div>
      </div>
    </div>
    </div>              
    `;

    listToRender = listToRender + employeelist;
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = listToRender;
  sideBarMenu();
}

window.addEventListener("load", displayEmployeeList);

// Loop to get alphabets................................................................................
var alphastore = `
<button class ="grid "><i class="fa fa-user"></i></button>
`;

for (let i = 65; i < 91; i++) {
  var al = String.fromCharCode(i);
  const series = `
        <button class ="grid" onclick="renderEmployeesBySearch('${al.toLowerCase()}',true)">${al}</button>
    `;
  alphastore += series;
}
var alpha = document.getElementById("alpha");
alpha.innerHTML = alphastore;

function clearButton() {
  displayEmployeeList();
  document.getElementById("search").value = "";
}
// function to get employe details.............................................................................
function getDetails(key) {
  let rawStoredEmployeeList = localStorage.getItem("emplistkey");
  let storedEmployeeList = JSON.parse(rawStoredEmployeeList);
  const emplist = `
   <div id="det-form" class="modal">
        <form class="modal-content animate">
          <div class="imgcontainer ">
            <span onclick="closeDetForm()" class="close" title="Close Modal">&times;</span>
            <img src="./Images/Image1.jfif" alt="Avatar" class="avatar">
          </div>
          <div class="container p-5 text-center">
            <p><b>Firstname:-</b>${storedEmployeeList[key].firstname}</p>
            <p><b> last Name:-</b>${storedEmployeeList[key].lastname}</p>
            <p><b> Preferred Name:-</b>${storedEmployeeList[key].preferredname}</p>
            <p><b>Email:-</b>${storedEmployeeList[key].email}</p>
            <p><b>Job:-</b>${storedEmployeeList[key].job}</p>
            <p><b> Office:-</b> ${storedEmployeeList[key].office}</p>
            <p><b> department:-</b>${storedEmployeeList[key].department}</p>
            <p><b>Phone Number:-</b> ${storedEmployeeList[key].phonenumber}</p>
            <p><b>SkypeId :-</b>${storedEmployeeList[key].skypeid}</p>
            <button type="button" onclick="UpdateEmployeelist(${key})">Update</button>
          </div>
        </form>
      </div>
   `;
  const empListid = document.getElementById("empList");
  empListid.innerHTML = emplist;
  document.getElementById("det-form").style.display = "block";
}


function openForm() {
  document.getElementById("add-form").style.display = "block";
  document.getElementById("empList").style.display = "none";
}

function closeDetForm() {
  displayEmployeeList();
  document.getElementById("det-form").style.display = "none";
}
function closeSubmitForm() {
  displayEmployeeList();
  document.getElementById("updateForm").style.display = "none";
}

// function to update employee details..................................................................................................
function UpdateEmployeelist(key) {
  let values = localStorage.getItem("emplistkey");
  let storedEmployeeList = JSON.parse(values);
  const emplist = `
    <div id="updateForm" class="modal">
    <form class="modal-content animate">
      <div class="imgcontainer">
        <span onclick="closeSubmitForm()" class="close" title="Close Modal">&times;</span>
        <img src="./Images/Image1.jfif" alt="Avatar" class="avatar">
      </div>
      <div class="container p-5 ">
        <div class="row">
            <div class="col">
            <label><b>First Name: </b></label>
            <input type="text" class="w-100" id="fname" value="${storedEmployeeList[key].firstname}"><br>
            <label><b>Last Name</b></label>
            <input type="text" class="w-100"id="lname" value="${storedEmployeeList[key].lastname}"><br>
            <label><b>Preferred Name</b></label>
            <input type="text" class="w-100"id="preferredname" value="${storedEmployeeList[key].preferredname}"><br>
            <label><b>Emaill Address</b></label>
            <input type="text" class="w-100" id="email" value="${storedEmployeeList[key].email}"><br><br>
            <label><b>Job</b></label><br>
                  <select id="jobtitle" class="border-1 w-100 text-black" type="text" >
                  <option value=""disabled selected hidden>${storedEmployeeList[key].job}</option>
                  <option>SharePoint Practice Head</option>
                    <option>.Net Development Lead  </option>
                    <option> Recruiting Expert </option>
                    <option> BI Developer</option>
                    <option> Business Analyst</option>
                    <option> Operations Manger </option>
                    <option> Software Engineer</option>
                    <option> Business Analyst</option>
                    <option> Product Manger </option>
                </select>
            </div>
            <div class="col ps-5 ">
                  <label><b class="mb-5 ms-2">Office</b></label>
                  <select id="office" class="border-1 w-100 text-black m-2">
                    <option  value=""disabled selected hidden >${storedEmployeeList[key].office}</option>
                    <option>Seatle</option>
                    <option>India</option>
                  </select>
                  <label><b  class="ms-2">Department</b></label><br>
                  <select id="department" class="border-1 w-100 text-black m-2">
                    <option  value=""disabled selected hidden>${storedEmployeeList[key].department}</option>
                    <option>IT Department</option>
                    <option>HR Department</option>
                    <option>Sales Department</option>
                    <option>MD Department</option>
                  </select>
                  <label><b  class="ms-2">Phone Number</b></label>
                  <input type="text" id="phone" name="phone"  class="w-100 border m-2"placeholder="PHONE NUMBER" value="${storedEmployeeList[key].phonenumber}"><br>
                  <label><b class="ms-2">Skype Id</b></label>
                  <input type="text" class="w-100 m-2" id="skypeid"placeholder="SKYPE ID"value="${storedEmployeeList[key].skypeid}"><br><br>
              </div>
              </div>
              <button type="button" onclick="onSubmit(${key})">Submit</button>
            </div>
        </div>
    </div>
    </form>
  </div>
    `;

  var empListid = document.getElementById("empList");
  empListid.innerHTML = emplist;
  // populateEmployeeCount();
  document.getElementById("updateForm").style.display = "block";
}

function searchBox() {
  let val = document.getElementById("search").value.toLowerCase();
  renderEmployeesBySearch(val, false);
}
function getPreferredname() {
  let firstname = document.getElementById("fname").value;
  let lastname = document.getElementById("lname").value;
  document.getElementById("preferredname").value = firstname + " " + lastname;
}

// function to filter data ..................................................................................................
const renderEmployeesBySearch = (inputStr, bool) => {
var temp = "";
var val = preferred();
 if (val == "preferredname") {
  for (var i = 0; i < employeelistArray.length; i++) {
    let values=localStorage.getItem('emplistkey');
    if(bool && JSON.parse(values)[i].preferredname.toLowerCase().startsWith(inputStr.toLowerCase())){
      temp = temp + filters(i);
    }
    else if(bool==false && JSON.parse(values)[i].preferredname.toLowerCase().includes(inputStr.toLowerCase())){
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
}
else if (val == "fname") {
  for (var i = 0; i < employeelistArray.length; i++) {
    let values=localStorage.getItem('emplistkey');
    if(bool && JSON.parse(values)[i].firstname.toLowerCase().startsWith(inputStr.toLowerCase())){
      temp = temp + filters(i);
    }
    else if(bool==false && JSON.parse(values)[i].firstname.toLowerCase().includes(inputStr.toLowerCase())){
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
}

else if (val == "job") {
  for (var i = 0; i < employeelistArray.length; i++) {
    let values=localStorage.getItem('emplistkey');
    if(bool && JSON.parse(values)[i].job.toLowerCase().startsWith(inputStr.toLowerCase())){
      temp = temp + filters(i);
    }
    else if(bool==false && JSON.parse(values)[i].job.toLowerCase().includes(inputStr.toLowerCase())){
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
}
else if (val == "department") {
  for (var i = 0; i < employeelistArray.length; i++) {
    let values=localStorage.getItem('emplistkey');
    if(bool && JSON.parse(values)[i].department.toLowerCase().startsWith(inputStr.toLowerCase())){
      temp = temp + filters(i);
    }
    else if(bool==false && JSON.parse(values)[i].department.toLowerCase().includes(inputStr.toLowerCase())){
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
}
else if (val == "email") {
  for (var i = 0; i < employeelistArray.length; i++) {
    let values=localStorage.getItem('emplistkey');
    if(bool && JSON.parse(values)[i].email.toLowerCase().startsWith(inputStr.toLowerCase())){
      temp = temp + filters(i);
    }
    else if(bool==false && JSON.parse(values)[i].email.toLowerCase().includes(inputStr.toLowerCase())){
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
}

else if (val == "office") {
  for (var i = 0; i < employeelistArray.length; i++) {
    let values=localStorage.getItem('emplistkey');
    if(bool && JSON.parse(values)[i].office.toLowerCase().startsWith(inputStr.toLowerCase())){
      temp = temp + filters(i);
    }
    else if(bool==false && JSON.parse(values)[i].office.toLowerCase().includes(inputStr.toLowerCase())){
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
}
};


// function to add updated details into localStorage ............................................................................
function onSubmit(key) {
  var val = document.getElementById("jobtitle");
  var officeselect = document.getElementById("office");
  var selectdep = document.getElementById("department");
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var preferredname = document.getElementById("preferredname").value;
  var email = document.getElementById("email").value;
  var job = val.options[val.selectedIndex].text;

  var office = officeselect.options[officeselect.selectedIndex].text;

  var department = selectdep.options[selectdep.selectedIndex].text;

  var phone = document.getElementById("phone").value;
  var skypeid = document.getElementById("skypeid").value;

  let employee = {
    firstname: fname,
    lastname: lname,
    preferredname: preferredname,
    email: email,
    job: job,
    office: office,
    department: department,
    phonenumber: phone,
    skypeid: skypeid,
  };
  if (
    fname == "" ||
    lname == "" ||
    preferredname == "" ||
    email == "" ||
    job == "" ||
    office == "" ||
    department == "" ||
    skypeid == "" ||
    pnum == ""
  ) {
    alert("Please Fill all details");
  } else {
    employeelistArray[key] = employee;
    localStorage.setItem("emplistkey", JSON.stringify(employeelistArray));
    document.getElementById("fname").value = "";
    alert("Employee Details Updated Succesfully");
    document.getElementById("empList").style.display = "";
    document.getElementById("add-form").style.display = "none";
    displayEmployeeList();
    // populateEmployeeCount();
    
  }
}

function getDepartment(departmentvalue) {
  console.log(departmentvalue);
  var departmentstrore = "";
  for (let i = 0; i < employeelistArray.length; i++) {
    let value = localStorage.getItem("emplistkey");
    if (
      JSON.parse(value)[i].department.toLowerCase().includes(departmentvalue.toLowerCase())
    ) {
      departmentstrore = departmentstrore + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = departmentstrore;
}

function getOffice(officevalue) {
  var officestrore = "";
  for (var i = 0; i < employeelistArray.length; i++) {
    let value = localStorage.getItem("emplistkey");
    if (JSON.parse(value)[i].office.toLowerCase().includes(officevalue.toLowerCase())) {
      officestrore = officestrore + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = officestrore;
}

function getJob(jobvalue) {
  var jobstore = "";

  for (var i = 0; i < employeelistArray.length; i++) {
    let value = localStorage.getItem("emplistkey");
    if (JSON.parse(value)[i].job.toLowerCase().includes(jobvalue.toLowerCase())) {
      jobstore = jobstore + filters(i);
    }
  }

  var alpha = document.getElementById("empList");
  alpha.innerHTML = jobstore;
}
// function to get count for each catergoies...........................................................................
function populateEmployeeCount() {
  for (var i = 0; i < employeelistArray.length; i++) {
    let value = localStorage.getItem("emplistkey");
    let parsevalue = JSON.parse(value);

    if (parsevalue[i].department.includes("IT Department")) {
       itcount++;
    }
    if (parsevalue[i].department.includes("HR")) {
       hrcount++;
    }
    if (parsevalue[i].department.includes("MD")) {
      mdcount++
    }
    if (parsevalue[i].department.includes("Sales")) {
      salescount++;
      
    }
    if (parsevalue[i].job.includes("SharePoint Practice Head")) {
      sharepointcount++;
    }

    if (parsevalue[i].job.includes(".Net Development Lead")) {
      netcount++;
    }
    if (parsevalue[i].job.includes("Recruiting Expert")) {
      recount++;
    }
    if (parsevalue[i].office.includes("Seatle")) {
      seatlecount++;
    }
    if (parsevalue[i].office.includes("India")) {
     indiacount++;
    }
    if (parsevalue[i].job.includes("Operations Manger")) {
     operationsmangercount++;
    }
    if (parsevalue[i].job.includes("Product Manger")) {
      productmangercount++;
    }
    
    if (parsevalue[i].job.includes("Software Engineer")) {
      softwareengineercount++;
    }
  
    
    if (parsevalue[i].job == "Business Analyst") {
    bacount++;
    }
    if (parsevalue[i].job == "BI Developer") {
      bicount++;
    }
  }
  
}

function sideBarMenu(){
  populateEmployeeCount();
  let tempdepartmentlist='';
  let tempjoblist='';
  let tempofficelist='';
  let departmentlist=new Map([
    ["IT", itcount],
    ["HR", hrcount],
    ["MD", mdcount],
    ["Sales", salescount]
  ]);
  let officelist=new Map([
    ["India", indiacount],
    ["Seatle",seatlecount]
  ])
  let joblist=new Map([
    ["SharePoint Practice Head", sharepointcount],
    [".Net Development Lead", netcount],
    ["Recruiting Expert", recount],
    ["BI Developer", bicount],
    ["Business Analyst", bacount],
   
  ])
  
  departmentlist.forEach((value, key) =>{
   
    let menu=`

    <span id=${key}  onclick="getDepartment(this.id)">${key}(${value})</span><br>

    `;
    tempdepartmentlist+=menu;
  });
  document.getElementById('departmentlist').innerHTML= tempdepartmentlist;

  officelist.forEach((value, key) =>{
   
    let menu=`

    <span id=${key}  onclick="getOffice(this.id)">${key}(${value})</span><br>

    `;
    tempofficelist+=menu;
  });
  document.getElementById('officelist').innerHTML= tempofficelist;
  joblist.forEach((value, key) =>{
   
    let menu=`

    <span id=${key}  onclick="getJob(this.id)">${key}(${value})</span><br>

    `;
    tempjoblist+=menu;
  });
  document.getElementById('joblist').innerHTML= tempjoblist;
  itcount =hrcount =mdcount =salescount =seatlecount =indiacount =netcount =
sharepointcount =recount =bicount =bacount  =productmangercount =operationsmangercount  =softwareengineercount =0;

}


// sideBarMenu()
function viewMore() {
  operationsmangercount=0;
  productmangercount=0;
  softwareengineercount=0;
  populateEmployeeCount();
  let tempmorejoblist='';
  let morejoblist=new Map([
    ["Operations Manger", operationsmangercount],
    ["Product Manger", productmangercount],
    ["Software Engineer", softwareengineercount]
    
  ]);
  morejoblist.forEach((value, key) =>{
   
    let menu=`

    <span id=${key}  onclick="getJob(this.id)">${key}(${value})</span><br>

    `;
    tempmorejoblist+=menu;
  });
  let viewless=`
  <div class="text-info mt-2" id="less" onclick="viewLess()">View Less</div>
  `;
  tempmorejoblist+=viewless;
  document.getElementById('viewmore').innerHTML= tempmorejoblist;
  document.getElementById("viewmore").style.display = "block ";
  document.getElementById("less").style.display = "";
  document.getElementById("more").style.display = "none";
}

function filterselectDropDown(){
  let tempoptionlist='';
  let filterselectDropDownlist = new Map([
    ['preferredname','Preferred Name'],
    ['fname',"First Name"],
    ['job','Job'],
    ['department','Departments'],
    ['office','Office'],
    ['email','Email']
  ]);
 
  filterselectDropDownlist.forEach((value, key) =>{
    console.log(key);
    let optionlist=`
    <div value="${value}">${key}</div>
    `;
    tempoptionlist+=optionlist;
  });
  document.getElementById('selct').innerHTML=tempoptionlist;

}
filterselectDropDown();
function viewLess() {
  document.getElementById("viewmore").style.display = "none";
  document.getElementById("more").style.display = "block";
}

function preferred() {
  var value = document.getElementById("select");
  var getvalue = value.options[value.selectedIndex].value;

  return getvalue;
}
function filters(key) {
  let value = localStorage.getItem("emplistkey");
  const list = `
          
    <div class="list">
    <div onclick='getDetails(${JSON.parse(key)})'>
        <div class="row">
            <div class="col-4 ">
                <img class="profile p-2 " src="Image1.jfif">
            </div>
        <div class="col p-0">
            <div>${JSON.parse(value)[key].firstname} ${JSON.parse(value)[key].lastname}</div>
            <div>${JSON.parse(value)[key].job}</div>
            <div>${JSON.parse(value)[key].department}</div>
            <i><img class="icon" src="./Images/call-grey.png"></i>
            <i><img class="icon" src="./Images/popup.png"></i>
            <i><img class="icon" src="./Images/message.png"></i>
            <i><img class="icon" src="./Images/heart.png"></i>
            <i><img class="icon" src="./Images/star.png"></i>
        </div>
    </div>
    </div>
</div>              
`;
  return list;
}
function closeAddForm() {
  document.getElementById("add-form").style.display = "none";
  document.getElementById("empList").style.display = "";
}
// populateEmployeeCount();

