
var img =new Image();
img.src='Image1.jfif';
let employeelistArray=new Array();
if(localStorage.getItem('emplistkey')){
  employeelistArray= localStorage.getItem('emplistkey');
  employeelistArray = JSON.parse(employeelistArray);
}


// Function to Add New Employee...............................................................................................
function addEmployee(){
  
  var val = document.getElementById("job");
  var officeselect = document.getElementById("selectoffice");
  var selectdep = document.getElementById("selectdep");
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var preferredname=document.getElementById('preferredname').value;
  var email = document.getElementById("email").value;
  var job = val.options[val.selectedIndex].value;
  var office = officeselect.options[officeselect.selectedIndex].value;
  var department = selectdep.options[selectdep.selectedIndex].value;
  
  var pnum = document.getElementById("pnum").value;
  var skypeid = document.getElementById("skypeid").value;
  
  
  
  getPreferredname();
  let employeeobject={'firstname':fname,'lastname':lname,'preferredname':preferredname,'email':email,'job':job,'office':office,'department':department,'phone':pnum,'skypeid':skypeid};
  if (fname == "" || lname == "" || preferredname==""||email == "" || job == "" || office == "" ||department == "" || skypeid == ""||pnum == "") {
    alert("Please Fill all details");
  } else {
    employeelistArray.push(employeeobject);
    
    localStorage.setItem('emplistkey',JSON.stringify(employeelistArray));
    document.getElementById('fname').value="";
    document.getElementById('lname').value="";
    document.getElementById('preferredname').value="";
    document.getElementById('email').value="";
    document.getElementById('job').value="";
    document.getElementById('selectoffice').value="";
    document.getElementById('selectdep').value="";
    document.getElementById('pnum').value="";
    document.getElementById('skypeid').value="";
  
  
    displayEmployeeList();
    populateEmployeeCount();
    alert("Employee Details Added");
    document.getElementById("empList").style.display = "";
    document.getElementById("add-form").style.display = "none";
  }
}


// function to display employee list...................................................................................
function displayEmployeeList(){
  let templist = "";
  for (var i = 0; i < employeelistArray.length; i++) {
    let value=localStorage.getItem("emplistkey");
    let parsedvalue=JSON.parse(value);
    const employeelist = `    
    <div class="list">
    <div onclick='getDetails(${i})'>
        <div class="row">
            <div class="col-4 ">
              <img class="profile p-2 " src="Image1.jfif">
            </div>
        <div class="col p-0">
            <div>${parsedvalue[i].firstname} ${parsedvalue[i].lastname}</div>
            <div>${parsedvalue[i].job}</div>
            <div>${parsedvalue[i].department}</div>
            <i><img class="icon" src="call-grey.png"></i>
            <i><img class="icon" src="popup.png"></i>
            <i><img class="icon" src="message.png"></i>
            <i><img class="icon" src="heart.png"></i>
            <i><img class="icon" src="star.png"></i>
        </div>
      </div>
    </div>
    </div>              
    `;

    templist = templist + employeelist;
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = templist;
  populateEmployeeCount();
}

window.addEventListener("load", displayEmployeeList);

// Loop to get alphabets................................................................................
var alphastore = `
<button class ="grid "><i class="fa fa-user"></i></button>
`;

for (let i = 65; i < 91; i++) {
  var al = String.fromCharCode(i);
  const series = `
        <button class ="grid" onclick="renderEmployeesBySearch('${al.toLowerCase()}')">${al}</button>
    `;
  alphastore += series;
}
var alpha = document.getElementById("alpha");
alpha.innerHTML = alphastore;
function clearButton(){
  displayEmployeeList();
  document.getElementById('search').value='';
 
}
// function to get employe details.............................................................................
function getDetails(key) {
  let values=localStorage.getItem('emplistkey');
 let parsedvalue=JSON.parse(values);
  const emplist = `
   <div id="det-form" class="modal">
        <form class="modal-content animate">
          <div class="imgcontainer ">
            <span onclick="closeDetForm()" class="close" title="Close Modal">&times;</span>
            <img src="Image1.jfif" alt="Avatar" class="avatar">
          </div>
          <div class="container p-5 text-center">
            <p><b>Firstname:-</b>${parsedvalue[key].firstname}</p>
            <p><b> last Name:-</b>${parsedvalue[key].lastname}</p>
            <p><b> Preferred Name:-</b>${parsedvalue[key].preferredname}</p>
            <p><b>Email:-</b>${parsedvalue[key].email}</p>
            <p><b>Job:-${parsedvalue[key].job}</p>
            <p><b> Office:-</b> ${parsedvalue[key].office}</p>
            <p><b> department:-</b>${parsedvalue[key].department}</p>
            <p><b>Phone Number:-</b> ${parsedvalue[key].phone}</p>
            <p><b>SkypeId :-<b>${parsedvalue[key].skypeid}</p>
            <button type="button" onclick="popInfo(${key})">Update</button>
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
function popInfo(key) {
  let values=localStorage.getItem('emplistkey');
  let parsedvalue=JSON.parse(values);
  const emplist = `
    <div id="updateForm" class="modal">
    <form class="modal-content animate">
      <div class="imgcontainer">
        <span onclick="closeSubmitForm()" class="close" title="Close Modal">&times;</span>
        <img src="Image1.jfif" alt="Avatar" class="avatar">
      </div>
      <div class="container p-5 ">
        <div class="row">
            <div class="col">
            <label><b>First Name: </b></label>
            <input type="text" class="w-100" id="fname" value="${parsedvalue[key].firstname}"><br>
            <label><b>Last Name</b></label>
            <input type="text" class="w-100"id="lname" value="${parsedvalue[key].lastname}"><br>
            <label><b>Preferred Name</b></label>
            <input type="text" class="w-100"id="preferredname" value="${parsedvalue[key].preferredname}"><br>
            <label><b>Emaill Address</b></label>
            <input type="text" class="w-100" id="email" value="${parsedvalue[key].email}"><br><br>
            <label><b>Job</b></label><br>
                  <select id="jobtitle" class="border-1 w-100 text-black" type="text" >
                  <option value=""disabled selected hidden>${parsedvalue[key].job}</option>
                  <option >SharePoint Practice head</option>
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
            <div class="col">
            <label><b>Office</b></label>
            <select id="office" class="border-1 w-100 text-black" type="text" ><br><br>
              <option value=""disabled selected hidden>${parsedvalue[key].office}</option>
              <option >Seatle</option>
              <option>India</option>
            </select>
            <label><b>Department</b></label>
            <select id="department" class="border-1 w-100 text-black" type="text" >
              <option value=""disabled selected hidden>${parsedvalue[key].department}</option>
              <option>IT Department</option>
              <option>HR Department</option>
              <option>UX Department</option>
              <option>Sales Department</option>
              <option>MD Department</option>
            </select>
            
            <label><b>Phone Number</b></label>
            <input type="text" class="w-100" id="pnum" value="${parsedvalue[key].phone}"><br><br>
            <label><b>Skype Id</b></label>
            <input type="text" class="w-100" id="skypeid" value="${parsedvalue[key].skypeid}"><br><br>
            <button type="button" onclick="onSubmit(${key})">Submit</button>
            </div>
        </div>
    </div>
    </form>
  </div>
    `;
  
  var empListid = document.getElementById("empList");
  empListid.innerHTML = emplist;
  populateEmployeeCount();
  document.getElementById("updateForm").style.display = "block";
}

function searchBox() {
 
  let val = document.getElementById("search").value.toLowerCase();
  renderEmployeesBySearch(val);
}
function getPreferredname(){
  let fname = document.getElementById("fname").value;
  let lname =document.getElementById('lname').value;
    document.getElementById("preferredname").value=fname+" "+lname;
}



// function to filter data ..................................................................................................
const renderEmployeesBySearch = (inputStr) => {
  var temp = "";
 
  var val = preferred();
 console.log(val);
 if (val == "preferredname") {
  console.log(val);
  for (var i = 0; i < employeelistArray.length; i++) {
    let values=localStorage.getItem('emplistkey');
    if (
      JSON.parse(values)[i].preferredname.toLowerCase().includes(inputStr.toLowerCase())
    ) {
     
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
}
else if (val == "fname") {
 
  for (var i = 0; i < employeelistArray.length; i++) {
    let values=localStorage.getItem('emplistkey');
    if (
      JSON.parse(values)[i].firstname.toLowerCase().includes(inputStr.toLowerCase())
    ) {
     
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
  }

else if (val == "job") {
  for (var i = 0; i < employeelistArray.length; i++) {
    let values=localStorage.getItem('emplistkey');
    if (
      JSON.parse(values)[i].job.toLowerCase().includes(inputStr.toLowerCase())
    ) {
     
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
  }
else if (val == "department") {
  for (var i = 0; i < employeelistArray.length; i++) {
    let values=localStorage.getItem('emplistkey');
    if (
      JSON.parse(values)[0].department.toLowerCase().includes(inputStr.toLowerCase())
    ) {
     
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
  }
else if (val == "email") {
  for (var i = 0; i < employeelistArray.length; i++) {
    let values=localStorage.getItem('emplistkey');
    if (
      JSON.parse(values)[0].email.toLowerCase().includes(inputStr.toLowerCase())
    ) {
     
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
  }

else if (val == "office") {
  for (var i = 0; i <employeelistArray.length; i++) {
    let values=localStorage.getItem('emplistkey');
    if (
      JSON.parse(values)[i].office.toLowerCase().includes(inputStr.toLowerCase())
    ) {
     
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
  var preferredname=document.getElementById('preferredname').value;
  var email = document.getElementById("email").value;
  var job = val.options[val.selectedIndex].text;
 
  var office = officeselect.options[officeselect.selectedIndex].text;
  
  var department = selectdep.options[selectdep.selectedIndex].text;
  
  var phone = document.getElementById("pnum").value;
  var skypeid = document.getElementById("skypeid").value;
 
  let employee={'firstname':fname,'lastname':lname,'preferredname':preferredname,'email':email,'job':job,'office':office,'department':department,'phone':phone,'skypeid':skypeid};
  if (fname == "" || lname == "" || preferredname==""||email == "" || job == "" || office == "" ||department == "" || skypeid == ""||pnum == "") {
    alert("Please Fill all details");
  } else {
  employeelistArray[key]=employee;
  localStorage.setItem('emplistkey',JSON.stringify(employeelistArray));
  document.getElementById("fname").value="";
  alert("Employee Details Updated Succesfully");
  document.getElementById("empList").style.display = "";
  document.getElementById("add-form").style.display = "none";
  displayEmployeeList();
  populateEmployeeCount();
}
}

function getDepartment(val) {
  var departmentstrore = "";
  for (var i = 0; i < employeelistArray.length; i++) {
    let value=localStorage.getItem('emplistkey');
    if (JSON.parse(value)[i].department.toLowerCase().includes(val.toLowerCase())) {
      departmentstrore = departmentstrore + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = departmentstrore;
}

function getOffice(val) {
  var officestrore = "";
  for (var i = 0; i < employeelistArray.length; i++) {
    let value=localStorage.getItem('emplistkey');
    if (JSON.parse(value)[i].office.toLowerCase().includes(val.toLowerCase())) {
     
      officestrore = officestrore + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = officestrore;
}

function getJob(val) {
  var jobstore = "";
  for (var i = 0; i <employeelistArray.length; i++) {
    let value=localStorage.getItem('emplistkey');
    console.log(JSON.parse(value).job+ " "+ val);
    if (JSON.parse(value)[i].job.toLowerCase().includes(val.toLowerCase())) {
     
      var jobstore = jobstore + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = jobstore;
}
// function to get count for each catergoies...........................................................................
function populateEmployeeCount() {
    let itcount = hrcount = mdcount = salescount = seatlecount = indiacount = netcount = sharepointcount = recount = bicount = bacount = networkcount = productmangercount = operationsmangercount = uicount = softwareengineercount = talentcount = 0;
  for (var i = 0; i < employeelistArray.length; i++) {
    let value=localStorage.getItem('emplistkey');
    let parsevalue=JSON.parse(value);
    if (parsevalue[i].department.startsWith("IT Department")) {
      itcount++;
    }
    if (parsevalue[i].department.startsWith("HR")) {
      hrcount++;
    }
    if (parsevalue[i].department.startsWith("MD")) {
      mdcount++;
    }
    if (parsevalue[i].department.startsWith("Sales")) {
      salescount++;
    }
    if (parsevalue[i].job.startsWith("SharePoint Practice Head")) {
      sharepointcount++;
      
    }
  
    if (parsevalue[i].job.startsWith(".Net Development Lead")) {
      netcount++;
    }
    if (parsevalue[i].job.startsWith("Recruiting Expert")) {
      recount++;
    }
    if (parsevalue[i].office.toLowerCase().startsWith("seatle")) {
      seatlecount++;
    }
    if (parsevalue[i].office.startsWith("India")) {
      indiacount++;
    }
    if (parsevalue[i].job == "Operations Manager") {
        operationsmangercount++
      }
    if (parsevalue[i].job == "Product Manager") {
        productmangercount++;
      }
    if (parsevalue[i].job == "Network Engineer") {
        networkcount++;
      }
    if (parsevalue[i].job == "UI Designer") {
        uicount++;
      }
    if (parsevalue[i].job == "Software Engineer") {
        softwareengineercount++;
      }
    if (parsevalue[i].job == "Talent Magnet Jr.") {
        talentcount++;
      }
    if (parsevalue[i].job == "UX Designer") {
        uicount++;
      }
    if (parsevalue[i].job == 'Business Analyst') {
        bacount++;
    }
  }

  document.getElementById("itcount").innerHTML = itcount;
  document.getElementById("hrcount").innerHTML = hrcount;
  document.getElementById("mdcount").innerHTML = mdcount;
  document.getElementById("salescount").innerHTML = salescount;
  document.getElementById("sharepointcount").innerHTML = sharepointcount;
  document.getElementById("netcount").innerHTML = netcount;
  document.getElementById("recount").innerHTML = recount;
  document.getElementById("seatlecount").innerHTML = seatlecount;
  document.getElementById("indiacount").innerHTML = indiacount;
  document.getElementById("bacount").innerHTML = bacount;
  document.getElementById("bicount").innerHTML = bicount;
  document.getElementById('omcount').innerHTML=operationsmangercount;
  document.getElementById('pmcount').innerHTML=productmangercount;
  document.getElementById('secount').innerHTML=softwareengineercount;
  document.getElementById('necount').innerHTML=networkcount;
  document.getElementById('talentcount').innerHTML=talentcount;
  document.getElementById('uicount').innerHTML=uicount;
  
}

function viewMore() {

    document.getElementById('viewmore').style.display="block ";
    document.getElementById('less').style.display="";
    document.getElementById("more").style.display = "none";
}

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
  let value=localStorage.getItem('emplistkey');
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
            <i><img class="icon" src="call-grey.png"></i>
            <i><img class="icon" src="popup.png"></i>
            <i><img class="icon" src="message.png"></i>
            <i><img class="icon" src="heart.png"></i>
            <i><img class="icon" src="star.png"></i>
        </div>
    </div>
    </div>
</div>              
`;
  return list;
}
function closeAddForm(){
  document.getElementById('add-form').style.display='none';
  document.getElementById('empList').style.display='';
}
populateEmployeeCount();

function filterBy( val,inputStr){
 
  for (var i = 1; i <= localStorage.length; i++) {
    let values=localStorage.getItem(i);
   JSON.parse(values).val;
    if (
      JSON.parse(values).s.toLowerCase().startsWith(inputStr.toLowerCase())
    ) {
     
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
}