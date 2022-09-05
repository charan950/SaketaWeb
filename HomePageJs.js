
var img =new Image();
img.src='Image1.jfif';

// Function to Add New Employee...............................................................................................
function addEmployee(){
  let nextkey=0;
  nextkey = localStorage.length+1;
  var val = document.getElementById("job");
  var officeselect = document.getElementById("selectoffice");
  var selectdep = document.getElementById("selectdep");
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  
  var email = document.getElementById("email").value;
  var job = val.options[val.selectedIndex].text;
  console.log(job);
  var office = officeselect.options[officeselect.selectedIndex].text;
  console.log(office);
  var department = selectdep.options[selectdep.selectedIndex].text;
  console.log(department)
  var pnum = document.getElementById("pnum").value;
  var skypeid = document.getElementById("skypeid").value;
  function getPreferredname(){
    return fname;
  }
  getPreferredname();
  let employeeobject={'firstname':fname,'lastname':lname,'preferredname':preferredname,'email':email,'job':job,'office':office,'department':department,'phone':pnum,'skypeid':skypeid};
  if (fname == "" || lname == "" || preferredname==""||email == "" || job == "" || office == "" ||department == "" || skypeid == ""||pnum == "") {
    alert("Please Fill all details");
  } else {
    localStorage.setItem(nextkey,JSON.stringify(employeeobject));
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
  for (var i = 1; i <= localStorage.length; i++) {
    let values=localStorage.getItem(i);
    let parsedvalue=JSON.parse(values);
    const list = `    
    <div class="list">
    <div onclick='getDetails(${i})'>
        <div class="row">
            <div class="col-4 ">
              <img class="profile p-2 " src="Image1.jfif">
            </div>
        <div class="col p-0">
            <div>${parsedvalue.firstname} ${parsedvalue.lastname}</div>
            <div>${parsedvalue.job}</div>
            <div>${parsedvalue.department}</div>
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

    templist = templist + list;
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = templist;
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
  let values=localStorage.getItem(key);
 let parsedvalue=JSON.parse(values);
  const list = `
   <div id="det-form" class="modal">
        <form class="modal-content animate">
          <div class="imgcontainer ">
            <span onclick="closeDetForm()" class="close" title="Close Modal">&times;</span>
            <img src="Image1.jfif" alt="Avatar" class="avatar">
          </div>
          <div class="container p-5 text-center">
            <p><b>Firstname:-</b>${parsedvalue.firstname}</p>
            <p><b> last Name:-</b>${parsedvalue.lastname}</p>
            <p><b> Preferred Name:-</b>${parsedvalue.preferredname}</p>
            <p><b>Email:-</b>${parsedvalue.email}</p>
            <p><b>Job:-${parsedvalue.job}</p>
            <p><b> Office:-</b> ${parsedvalue.office}</p>
            <p><b> department:-</b>${parsedvalue.department}</p>
            <p><b>Phone Number:-</b> ${parsedvalue.phone}</p>
            <p><b>SkypeId :-<b>${parsedvalue.skypeid}</p>
            <button type="button" onclick="popInfo(${key})">Update</button>
          </div>
        </form>
      </div>
   `;
  const empListid = document.getElementById("empList");
  empListid.innerHTML = list;
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
  let values=localStorage.getItem(key);
  let parsedvalue=JSON.parse(values);
  const list = `
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
            <input type="text" class="w-100" id="fname" value="${parsedvalue.firstname}"><br>
            <label><b>Last Name</b></label>
            <input type="text" class="w-100"id="lname" value="${parsedvalue.lastname}"><br>
            <label><b>Preferred Name</b></label>
            <input type="text" class="w-100"id="preferredname" value="${parsedvalue.preferredname}"><br>
            <label><b>Emaill Address</b></label>
            <input type="text" class="w-100" id="email" value="${parsedvalue.email}"><br><br>
            <label><b>Job</b></label><br>
                  <select id="jobtitle" class="border-1 w-100 text-black" type="text" >
                  <option value=""disabled selected hidden>${parsedvalue.job}</option>
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
              <option value=""disabled selected hidden>${parsedvalue.office}</option>
              <option >Seatle</option>
              <option>India</option>
            </select>
            <label><b>Department</b></label>
            <select id="department" class="border-1 w-100 text-black" type="text" >
              <option value=""disabled selected hidden>${parsedvalue.department}</option>
              <option>IT Department</option>
              <option>HR Department</option>
              <option>UX Department</option>
              <option>Sales Department</option>
              <option>MD Department</option>
            </select>
            
            <label><b>Phone Number</b></label>
            <input type="text" class="w-100" id="pnum" value="${parsedvalue.phone}"><br><br>
            <label><b>Skype Id</b></label>
            <input type="text" class="w-100" id="skypeid" value="${parsedvalue.skypeid}"><br><br>
            <button type="button" onclick="onSubmit(${key})">Submit</button>
            </div>
        </div>
    </div>
    </form>
  </div>
    `;
  
  var empListid = document.getElementById("empList");
  empListid.innerHTML = list;
  document.getElementById("updateForm").style.display = "block";
}

function searchBox() {
 
  let val = document.getElementById("search").value.toLowerCase();
  renderEmployeesBySearch(val);
}
function getPreferredname(){
  let val = document.getElementById("fname").value;
  
    document.getElementById("preferredname").value=val;
}



// function to filter data ..................................................................................................
const renderEmployeesBySearch = (inputStr) => {
  var temp = "";
 
  var val = preferred();
 
 if (val == "preferredname") {
  for (var i = 1; i <= localStorage.length; i++) {
    let values=localStorage.getItem(i);
    if (
      JSON.parse(values).preferredname.toLowerCase().startsWith(inputStr.toLowerCase())
    ) {
     
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
}
else if (val == "fname") {
 
  for (var i = 1; i <= localStorage.length; i++) {
    let values=localStorage.getItem(i);
    if (
      JSON.parse(values).firstname.toLowerCase().startsWith(inputStr.toLowerCase())
    ) {
     
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
  }

else if (val == "job") {
  for (var i = 1; i <= localStorage.length; i++) {
    let values=localStorage.getItem(i);
    if (
      JSON.parse(values).job.toLowerCase().startsWith(inputStr.toLowerCase())
    ) {
     
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
  }
else if (val == "department") {
  for (var i = 1; i <= localStorage.length; i++) {
    let values=localStorage.getItem(i);
    if (
      JSON.parse(values).department.toLowerCase().startsWith(inputStr.toLowerCase())
    ) {
     
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
  }
else if (val == "email") {
  for (var i = 1; i <= localStorage.length; i++) {
    let values=localStorage.getItem(i);
    if (
      JSON.parse(values).email.toLowerCase().startsWith(inputStr.toLowerCase())
    ) {
     
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
  }
else if (val == "job") {
  for (var i = 1; i <= localStorage.length; i++) {
    let values=localStorage.getItem(i);
    if (
      JSON.parse(values).job.toLowerCase().startsWith(inputStr.toLowerCase())
    ) {
     
      temp = temp + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = temp;
  }
else if (val == "office") {
  for (var i = 1; i <= localStorage.length; i++) {
    let values=localStorage.getItem(i);
    if (
      JSON.parse(values).office.toLowerCase().startsWith(inputStr.toLowerCase())
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
  console.log(job);
  var office = officeselect.options[officeselect.selectedIndex].text;
  console.log(office);
  var department = selectdep.options[selectdep.selectedIndex].text;
  console.log(department)
  var phone = document.getElementById("pnum").value;
  var skypeid = document.getElementById("skypeid").value;
  console.log(skypeid);
  let employee={'firstname':fname,'lastname':lname,'preferredname':preferredname,'email':email,'job':job,'office':office,'department':department,'phone':phone,'skypeid':skypeid};
  // let employee={'firstname':fname,'lastname':lname,'email':email,'job':job,'office':office,'department':department,'phone':phone,'skypeid':skypeid};
  localStorage.setItem(key,JSON.stringify(employee));
  document.getElementById("fname").value="";
  alert("Employee Details Updated Succesfully");
  document.getElementById("empList").style.display = "";
  document.getElementById("add-form").style.display = "none";
  displayEmployeeList();
  populateEmployeeCount();
}


function getDepartment(val) {
  var departmentstrore = "";
  for (var i = 1; i <= localStorage.length; i++) {
    let value=localStorage.getItem(i);
    if (JSON.parse(value).department.toLowerCase().startsWith(val.toLowerCase())) {
      departmentstrore = departmentstrore + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = departmentstrore;
}

function getOffice(val) {
  var officestrore = "";
  for (var i = 1; i <= localStorage.length; i++) {
    let value=localStorage.getItem(i);
    if (JSON.parse(value).office.toLowerCase().startsWith(val.toLowerCase())) {
     
      officestrore = officestrore + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = officestrore;
}

function getJob(val) {
  var jobstore = "";
  for (var i = 1; i <= localStorage.length; i++) {
    let value=localStorage.getItem(i);
    console.log(JSON.parse(value).job+ " "+ val);
    if (JSON.parse(value).job.toLowerCase().startsWith(val.toLowerCase())) {
     
      var jobstore = jobstore + filters(i);
    }
  }
  var alpha = document.getElementById("empList");
  alpha.innerHTML = jobstore;
}
// function to get count for each catergoies...........................................................................
function populateEmployeeCount() {
    let itcount = hrcount = mdcount = salescount = seatlecount = indiacount = netcount = sharepointcount = recount = bicount = bacount = networkcount = productmangercount = operationsmangercount = uicount = softwareengineercount = talentcount = 0;
  for (var i = 1; i <= localStorage.length; i++) {
    let value=localStorage.getItem(i);
    JSON.parse(value).job
    if (JSON.parse(value).department.startsWith("IT Department")) {
      itcount++;
    }
    if (JSON.parse(value).department.startsWith("HR")) {
      hrcount++;
    }
    if (JSON.parse(value).department.startsWith("MD")) {
      mdcount++;
    }
    if (JSON.parse(value).department.startsWith("Sales")) {
      salescount++;
    }
    if (JSON.parse(value).job.startsWith("SharePoint Practice Head")) {
      sharepointcount++;
      
    }
  
    if (JSON.parse(value).job.startsWith(".Net Development Lead")) {
      netcount++;
    }
    if (JSON.parse(value).job.startsWith("Recruiting Expert")) {
      recount++;
    }
    if (JSON.parse(value).office.toLowerCase().startsWith("seatle")) {
      seatlecount++;
    }
    if (JSON.parse(value).office.startsWith("India")) {
      indiacount++;
    }
    if (JSON.parse(value).job == "Operations Manager") {
        operationsmangercount++
      }
    if (JSON.parse(value).job == "Product Manager") {
        productmangercount++;
      }
    if (JSON.parse(value).job == "Network Engineer") {
        networkcount++;
      }
    if (JSON.parse(value).job == "UI Designer") {
        uicount++;
      }
    if (JSON.parse(value).job == "Software Engineer") {
        softwareengineercount++;
      }
    if (JSON.parse(value).job == "Talent Magnet Jr.") {
        talentcount++;
      }
    if (JSON.parse(value).job == "UX Designer") {
        uicount++;
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
  let value=localStorage.getItem(key);
  const list = `
          
    <div class="list">
    <div onclick='getDetails(${JSON.parse(key)})'>
        <div class="row">
            <div class="col-4 ">
                <img class="profile p-2 " src="Image1.jfif">
            </div>
        <div class="col p-0">
            <div>${JSON.parse(value).firstname} ${JSON.parse(value).lastname}</div>
            <div>${JSON.parse(value).job}</div>
            <div>${JSON.parse(value).department}</div>
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