let itcount=0;
let hrcount=0;
let mdcount=0;
let salescount=0;
let seatlecount=0;
let indiacount=0;
let netcount=0;
let sharepointcount=0;
let recount=0;
let bicount=0;
let bacount=0;
let necount=0;
let pmcount=0;
let omcount=0;
let uicount=0;
let secount=0;
let talentcount=0;
var alphastore=`
<button class ="grid "><i class="fa fa-user"></i></button>
`;



for(var i=65;i<91;i++){
    
    var al=String.fromCharCode(i);
    const ser =  `
        <button class ="grid" onclick="renderEmployeesBySearch('${al.toLowerCase()}')">${al}</button>
    `;
    alphastore+=ser;
}


var alpha=document.getElementById('alpha');
alpha.innerHTML=alphastore;

function addEmployee(){
    var val = document.getElementById("job");  
    var officeselect=document.getElementById("selectoffice");
    var selectdep=document.getElementById('selectdep');
    var  fname=document.getElementById('fname').value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById('email').value;
    var job=val.options[val.selectedIndex].value;
    var office=officeselect.options[officeselect.selectedIndex].value;
    var department=selectdep.options[selectdep.selectedIndex].value;
    var pnum=document.getElementById('pnum').value;
    var skypeid=document.getElementById("skypeid");

    var emp=new employeeDetails("Image1.jfif",fname,lname,email,job,office,department,pnum,skypeid);
    if(fname==""||lname=='' || email==''|| job==''  || office=='' || department==''|| pnum==''|| skypeid==''){
        alert("Please Fill all details")
    }
    else{
        empArray.push(emp);
        empList();
        alert("Employee Details Added")
        document.getElementById("empList").style.display="";
        document.getElementById("add-form").style.display = "none";
    }
   
     
}
function openForm() {
    document.getElementById("form").style.display = "block";
    document.getElementById("empList").style.display="none";
  }
function employeeDetails(img,fname,lname,email,job,office,department,pnum,skypeid){

    this.img=img;
    this.fname=fname;
    this.lname=lname;
    this.email=email;
    this.job=job;
    this.office=office;
    this.department=department;
    this.pnum=pnum;
    this.skypeid=skypeid;
}


let emp1=new employeeDetails("Image1.jfif","Antony","Morris","antony@gmail.com","SharePoint Practice Head","Seatle","IT Department","123456789","antony@skype");
let emp2=new employeeDetails("Image2.jfif","Helen","Zimmerman","helen@gmail.com","Operations Manager","India","HR Department",123456789,"helen@skype");
let emp3=new employeeDetails("Image3.jfif","Jonathon","Smith","smith@gmail.com","Product Manager","India","UX Department",123456789,"smith@skype");
let emp4=new employeeDetails("Image4.jfif","Tami","Hopkins","tami@gmail.com","Lead Enginer-Dot Net","India","IT Department",123456789,"tami@skype");
let emp5=new employeeDetails("Image5.jfif","Franklin","Humark","humark@gmail.com","Network Engineer","India","IT Department",123456789,"humark@skype");
let emp6=new employeeDetails("Image6.jfif","Angela","Bailey","bailey@gmail.com","Talent Magnet Jr.","Seatle","HR Department",123456789,"bailey@skype");
let emp7=new employeeDetails("Image7.jfif","Robert","Mitchell","mitchell@gmail.com","Software Engineer","India","IT Department",123456789,"Robert@skype");
let emp8=new employeeDetails("Image8.jfif","Olivia","Watson","olivia@gmail.com","UI Designer","Seatle","UX Department",123456789,"watson@skype");
var  empArray=new Array();
empArray.push(emp1);
empArray.push(emp2);
empArray.push(emp3);
empArray.push(emp4);
empArray.push(emp5);
empArray.push(emp6);
empArray.push(emp7);
empArray.push(emp8);

console.log(empArray.length);
function empList(){
    let templist="";
    for(var i=0;i<empArray.length;i++){
       
        filters(i)
    
    templist =templist+ filters(i);
    }
    var alpha=document.getElementById('empList');
    alpha.innerHTML=templist;
    
}
function getDetails(v){
   const le=`
   <div id="det-form" class="modal">
        <form class="modal-content animate">
          <div class="imgcontainer ">
            <span onclick="closeDetForm()" class="close" title="Close Modal">&times;</span>
            <img src="${empArray[v].img}" alt="Avatar" class="avatar">
          </div>
          <div class="container p-5 text-center">
            <p><b>Firstname:-</b>${empArray[v].fname}</p>
            <p><b> last Name:-</b>${empArray[v].lname}</p>
            <p><b>Email:-</b>${empArray[v].email}</p>
            <p><b>Job:-${empArray[v].job}</p>
            <p><b> Office:-</b> ${empArray[v].office}</p>
            <p><b> department:-</b>${empArray[v].department}</p>
            <p><b>Phone Number:-</b> ${empArray[v].pnum}</p>
            <p><b>SkypeId :${empArray[v].skypeid}</p>
            <button type="button" onclick="popInfo(${v})">Update</button>
          </div>
        </form>
      </div>
   `;
   const a=document.getElementById("empList");
   a.innerHTML=le
   document.getElementById('det-form').style.display='block';
}
function closeDetForm(){
    empList();
    document.getElementById('det-form').style.display="none";
   
}
function closeSubmitForm(){
    empList();
    document.getElementById('updateForm').style.display="none";
}
function popInfo(v){

    const le=`
    <div id="updateForm" class="modal">
    <form class="modal-content animate">
      <div class="imgcontainer">
        <span onclick="closeSubmitForm()" class="close" title="Close Modal">&times;</span>
        <img src="${empArray[v].img}" alt="Avatar" class="avatar">
      </div>
      <div class="container p-5 ">
        <div class="row">
            <div class="col">
            <label><b>First Name: </b></label>
            <input type="text" class="w-100" id="fname" value="${empArray[v].fname}"><br><br>
            <label><b>Last Name</b></label>
            <input type="text" class="w-100"id="lname" value="${empArray[v].lname}"><br><br>
            <label><b>Emaill Address</b></label>
            <input type="text" class="w-100" id="email" value="${empArray[v].email}"><br><br>
            <label><b>Job</b></label>
            <input type="text"class="w-100" id="job" value="${empArray[v].job}"><br><br>
            </div>
            <div class="col">
            <label><b>Office</b></label>
            <input type="text" class="w-100"  id="office" value="${empArray[v].office}"><br><br>
            <label><b>Department</b></label>
            <input type="text" class="w-100" id="department" value="${empArray[v].department}"><br><br>
            <label><b>Phone Number</b></label>
            <input type="text" class="w-100" id="pnum" value="${empArray[v].pnum}"><br><br>
            <label><b>Skype Id</b></label>
            <input type="text" class="w-100" id="skypeid" value="${empArray[v].skypeid}"><br><br>
            <button type="button" onclick="onSubmit(${v})">Submit</button>
            </div>
        </div>
    </div>
    </form>
  </div>
    `;
    var alpha=document.getElementById('empList');
    alpha.innerHTML=le;
    document.getElementById('updateForm').style.display='block';
   
}




function searchBox(){
    let val=document.getElementById('search').value.toLowerCase();
    renderEmployeesBySearch(val);
}

const renderEmployeesBySearch = (inputStr) => {
  
   var temp="";
   var val=preferred();
   console.log(val);
   if(val=="fname"){
    for(var i=0;i<empArray.length;i++){
      
        if(empArray[i].fname[0].toLowerCase().match(inputStr.toLowerCase())){
            filters(i)
            temp =temp+ filters(i);
        } 
    }
    var alpha=document.getElementById('empList');
    alpha.innerHTML=temp;
   }
   if(val=="job"){
    for(var i=0;i<empArray.length;i++){
        if(empArray[i].job.toLowerCase().includes(inputStr.toLowerCase())){
            filters(i)
            temp =temp+ filters(i);
        } 
    }
    var alpha=document.getElementById('empList');
    alpha.innerHTML=temp;
   }
   if(val=="department"){
    for(var i=0;i<empArray.length;i++){
        if(empArray[i].department.toLowerCase().includes(inputStr.toLowerCase())){
            filters(i)
            temp =temp+ filters(i);
        } 
    }
    var alpha=document.getElementById('empList');
    alpha.innerHTML=temp;
   }
   if(val=="email"){
    for(var i=0;i<empArray.length;i++){
        if(empArray[i].email.toLowerCase().includes(inputStr.toLowerCase())){
            filters(i)
            temp =temp+ filters(i);
        } 
    }
    var alpha=document.getElementById('empList');
    alpha.innerHTML=temp;
   }
   if(val=="job"){
    for(var i=0;i<empArray.length;i++){
        if(empArray[i].job.toLowerCase().includes(inputStr.toLowerCase())){
            filters(i)
            temp =temp+ filters(i);
        } 
    }
    var alpha=document.getElementById('empList');
    alpha.innerHTML=temp;
   }
   if(val=="office"){
    for(var i=0;i<empArray.length;i++){
        if(empArray[i].office.toLowerCase().includes(inputStr.toLowerCase())){
            filters(i)
            temp =temp+ filters(i);
        } 
    }
    var alpha=document.getElementById('empList');
    alpha.innerHTML=temp;
   }
   if(val=="preferredname"){
    for(var i=0;i<empArray.length;i++){
        if(empArray[i].fname.toLowerCase().match(inputStr.toLowerCase())||empArray[i].office.includes(inputStr.toLowerCase())||empArray[i].department.includes(inputStr.toLowerCase())||empArray[i].job.includes(inputStr.toLowerCase())){
            filters(i)
            temp =temp+ filters(i);
        } 
    }
    var alpha=document.getElementById('empList');
    alpha.innerHTML=temp;
   }
    
}
function onSubmit(val){
    var img=empArray[val].img;
    var  fname=document.getElementById('fname').value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById('email').value;
    var job=document.getElementById('job').value;
    var office=document.getElementById("office").value;
    var department=document.getElementById("department").value;
    var phone=document.getElementById('pnum').value;
    var skypeid=document.getElementById("skypeid");

    var emp=new employeeDetails(img,fname,lname,email,job,office,department,pnum,skypeid);
    empArray[val]=emp;
    alert("Employee Details Updated Succesfully");
    document.getElementById("empList").style.display="";
    document.getElementById("form").style.display="none";
    empList();
    
   
}
window.addEventListener("load",empList);


function getDepartment(val) {
   
  var departmentstrore="";
    for(var i=0;i<empArray.length;i++){
        if(empArray[i].department.toLowerCase().includes(val.toLowerCase())){
            filters(i)
            departmentstrore =departmentstrore+ filters(i);
        }
        
    }
    var alpha=document.getElementById('empList');
        alpha.innerHTML=departmentstrore;
}
    
function getOffice(val) {
   
  var officestrore="";
    for(var i=0;i<empArray.length;i++){
        if(empArray[i].office.toLowerCase().includes(val.toLowerCase())){
            filters(i)
       
        officestrore =officestrore+ filters(i);
        }
        
    }
    var alpha=document.getElementById('empList');
        alpha.innerHTML=officestrore;
}
function getJob(val) {
   
    var jobstore="";
      for(var i=0;i<empArray.length;i++){
        console.log(empArray[i].job+" "+val)
          if(empArray[i].job.toLowerCase().includes(val.toLowerCase())){
              console.log('si')
            filters(i);
            var jobstore=jobstore+filters(i);
          }
          
      }
      var alpha=document.getElementById('empList');
          alpha.innerHTML=jobstore;
       
  }
  
  for(var i=0;i<empArray.length;i++){
  
        if(empArray[i].department.includes('IT')){
            itcount++;
        }
        if(empArray[i].department.includes('HR')){
            hrcount++;
        }
        if(empArray[i].department.includes('MD')){
        mdcount++;
        }
        if(empArray[i].department.includes("Sales")){
            salescount++;
        }
        if(empArray[i].job.includes('SharePoint Practice Head')){
            sharepointcount++;
        }
        if(empArray[i].job.includes('Lead Enginer-Dot Net')){
            netcount++;
        }
        if(empArray[i].job.includes('Recruiting Expert')){
                recount++;
        }
        if(empArray[i].office.toLowerCase().includes('seatle')){
            seatlecount++;
            }
        if(empArray[i].office.includes('India')){
            indiacount++;
        }
       
        if(empArray[i].job=="Operations Manager"){
            omcount=omcount+1;
            console.log(omcount);
        }
        if(empArray[i].job==("Product Manager")){
            pmcount++;
        }
        if(empArray[i].job==("Network Engineer")){
            necount++;
        }
        if(empArray[i].job==("UI Designer")){
            uicount++;
        }
        if(empArray[i].job=="Software Engineer"){
            secount++;
        }
        if(empArray[i].job=="Talent Magnet Jr."){
            talentcount++;
        }
        if(empArray[i].job=="UX Designer"){
            uicount++;
        }
       
  }
  
  document.getElementById("itcount").innerHTML = itcount;
  document.getElementById("hrcount").innerHTML=hrcount;
  document.getElementById("mdcount").innerHTML= mdcount;
  document.getElementById("salescount").innerHTML= salescount;
  document.getElementById("sharepointcount").innerHTML= sharepointcount;
  document.getElementById("netcount").innerHTML= netcount;
  document.getElementById("recount").innerHTML= recount;
  document.getElementById("seatlecount").innerHTML= seatlecount;
  document.getElementById("indiacount").innerHTML= indiacount;
  document.getElementById("bacount").innerHTML= bacount;
  document.getElementById("bicount").innerHTML= bicount;

function viewMore(){
   
    const view=`
        <div id='Operations Manager' onclick='getJob(this.id)'> Operations Manger(<span id="omcount">${omcount}</span>)</div>
        <div id="Product Manager"onclick='getJob(this.id)'>Product Manager(<span id="pmcount">${pmcount}</span>)</div>
        <div id='Software Engineer'onclick='getJob(this.id)'>Software Engineer(<span id="secount">${secount}</span>)</div>
        <div id='Network Engineer'onclick='getJob(this.id)'>Network Engineer(<span id="necount">${necount}</span>)</div>
        <div id="Talent Magnet Jr."onclick='getJob(this.id)'>Talent Magnent Jr(<span id="talentcount">${talentcount}</span>)</div>
        <div id='UI Designer'onclick='getJob(this.id)'>UI Designer(<span id="uicount">${uicount}</span>)</div>
    `;

    let more=document.getElementById('viewmore');
    more.innerHTML=view;
    document.getElementById('more').style.display="none";
}

function preferred(){
    var p='';
   var value = document.getElementById("select");  
    var getvalue = value.options[value.selectedIndex].value;  
    var gettext = value.options[value.selectedIndex].text; 
    var a=gettext;
  return getvalue
    
    // // console.log(empArray[0])
    // if(a=="fname"){
    //     var jobstore="";
    //   for(var i=0;i<empArray.length;i++){
    //       if(empArray[i].fname.toLowerCase().includes(document.getElementById('search').toLowerCase())){
    //         filters(i);
    //         var jobstore=jobstore+filters(i);
    //       }
          
    //   }
    //   var alpha=document.getElementById('empList');
    //       alpha.innerHTML=jobstore;
       
        
    // }
    
  
   
}
function filters(index){
    const list = `
          
    <div class="list">
    <div onclick='getDetails(${index})'>
        <div class="row">
            <div class="col-4 ">
                <img class="profile p-2 " src="${empArray[index].img}">
            </div>
        <div class="col p-0">
            <div>${empArray[index].fname} ${empArray[index].lname}</div>
            <div>${empArray[index].job}</div>
            <div>${empArray[index].department}</div>
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

// alert("value:-" +" "+ getvalue + " "+ "Text:-" +" "+ gettext);  