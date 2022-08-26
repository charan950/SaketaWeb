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
   
    var  fname=document.getElementById('fname').value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById('email').value;
    var job=document.getElementById('job').value;
    var title=document.getElementById("title").value;
    var office=document.getElementById("office").value;
    var department=document.getElementById("department").value;
    var pnum=document.getElementById('pnum').value;
    var skypeid=document.getElementById("skypeid");

    var emp=new employeeDetails("Image1.jfif",fname,lname,email,job,title,office,department,pnum,skypeid);
    empArray.push(emp);
    empList();
    document.getElementById("empList").style.display="";
    document.getElementById("form").style.display = "none";
     
}
function openForm() {
    document.getElementById("form").style.display = "block";
    document.getElementById("empList").style.display="none";
  }
function employeeDetails(img,fname,lname,email,job ,title,office,department,pnum,skypeid){
    this.img=img;
    this.fname=fname;
    this.lname=lname;
    this.email=email;
    this.job=job;
    this.title=title;
    this.office=office;
    this.department=department;
    this.pnum=pnum;
    this.skypeid=skypeid;
    // employeeDetails.prototype.fullname = function() {
    //     return this.fname + " " + this.lname;
    //   };

}


let emp1=new employeeDetails("Image1.jfif","Antony","Morris","antony@gmail.com","SharePoint Practice Head","SharePoint Practice Head","Seattle","IT Department","123456789","antony@skype");
let emp2=new employeeDetails("Image2.jfif","Helen","Zimmerman","helen@gmail.com","Operations Manager","Operations Manager","India","HR Department",123456789,"helen@skype");
let emp3=new employeeDetails("Image3.jfif","Jonathon","Smith","smith@gmail.com","Product Manager","Product Manager","India","UX Department",123456789,"smith@skype");
let emp4=new employeeDetails("Image4.jfif","Tami","Hopkins","tami@gmail.com","Lead Enginer-Dot Net","Lead Enginer-Dot Net","India","IT Department",123456789,"tami@skype");
let emp5=new employeeDetails("Image5.jfif","Franklin","Humark","humark@gmail.com","Network Engineer","NetWork Engineer","India","IT Department",123456789,"humark@skype");
let emp6=new employeeDetails("Image6.jfif","Angela","Bailey","bailey@gmail.com","Talent Magnet Jr.","Talent Magnet","Seatle","HR Department",123456789,"bailey@skype");
let emp7=new employeeDetails("Image7.jfif","Robert","Mitchell","mitchell@gmail.com","Software Engineer","Software Engineer","India","IT Department",123456789,"Robert@skype");
let emp8=new employeeDetails("Image8.jfif","Olivia","Watson","olivia@gmail.com","UI Designer","UI Designer","Seatle","UX Department",123456789,"watson@skype");
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
       
       
        const list = `
        
        <div class="list" >
        <div onclick='getDetails(${i})'>
            <div class="row" >
                <div class="col-4 ">
                    <img class="profile p-2 " src="${empArray[i].img}">
                </div>
            <div class="col p-0">
                <div>${empArray[i].fname} ${empArray[i].lname}</div>
                <div>${empArray[i].job}</div>
                <div>${empArray[i].department}</div>
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
    templist =templist+list;
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
          Firstname:${empArray[v].fname}<br>
          last Name:${empArray[v].lname}<br><br>
          Email:${empArray[v].email}<br><br>
          Job:${empArray[v].job}<br><br>
          title: ${empArray[v].title}<br><br>
          Office: ${empArray[v].office}<br><br>
          department:${empArray[v].department}><br><br>
          Phone Number: ${empArray[v].pnum}<br><br>
          SkypeId :${empArray[v].skypeid}<br><br>
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
      <label><b>First Name: </b></label>
      <input type="text" class="w-100" id="fname" value="${empArray[v].fname}"><br><br>
      <label><b>Last Name</b></label>
      <input type="text" class="w-100"id="lname" value="${empArray[v].lname}"><br><br>
      <label><b>Emaill Address</b></label>
      <input type="text" class="w-100" id="email" value="${empArray[v].email}"><br><br>
      <label><b>Job</b></label>
      <input type="text"class="w-100" id="job" value="${empArray[v].job}"><br><br>
      <label><b>Title</b></label>
      <input type="text" class="w-100" id="title"value="${empArray[v].title}"><br><br>
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
    </form>
  </div>
       
    
    `;
    var alpha=document.getElementById('empList');
    alpha.innerHTML=le;
    document.getElementById('updateForm').style.display='block';
   
}




function searchBox(){
    let val=document.getElementById('preferd').value.toLowerCase();
    renderEmployeesBySearch(val);
}

const renderEmployeesBySearch = (inputStr) => {
   filtearray=["fullname",]
   var temp="";
    for(var i=0;i<empArray.length;i++){
        if(empArray[i].department.toLowerCase().includes(inputStr)||empArray[i].fname.toLowerCase().includes(inputStr)|| empArray[i].job.toLowerCase().includes(inputStr)){

            const list = `
        
            <div class="list">
            <div onclick='popInfo(${i})'>
                <div class="row">
                    <div class="col-4 ">
                        <img class="profile p-2 " src="Image8.jfif">
                    </div>
                <div class="col p-0">
                    <div>${empArray[i].fname} ${empArray[i].lname}</div>
                    <div>${empArray[i].job}</div>
                    <div>${empArray[i].department}</div>
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
        temp =temp+list;
        } 
    }
    var alpha=document.getElementById('empList');
    alpha.innerHTML=temp;
}
function onSubmit(val){
    var img=empArray[val].img;
    var  fname=document.getElementById('fname').value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById('email').value;
    var job=document.getElementById('job').value;
    var title=document.getElementById("title").value;
    var office=document.getElementById("office").value;
    var department=document.getElementById("department").value;
    var phone=document.getElementById('pnum').value;
    var skypeid=document.getElementById("skypeid");

    var emp=new employeeDetails(img,fname,lname,email,job,title,office,department,pnum,skypeid);
    empArray[val]=emp;
    alert("Employee Details Updated Succesfully");
    document.getElementById("empList").style.display="";
    document.getElementById("form").style.display="none";
    empList();
    
   
}
window.addEventListener("load",empList);
function GetDataURL()
{
    var imageInput=document.getElementById("form");
    const reader=new FileReader();
    var URL=undefined;
    reader.addEventListener('load',()=>{
        URL=reader.result;
        return URL;
    });
    reader.readAsDataURL((imageInput.files)[0]);
    
}

function getDepartment(val) {
    console.log(val);
  var departmentstrore="";
    for(var i=0;i<empArray.length;i++){
        if(empArray[i].department.toLowerCase().includes(val.toLowerCase())){

            const list = `
        
            <div class="list">
            <div onclick='popInfo(${i})'>
                <div class="row">
                    <div class="col-4 ">
                        <img class="profile p-2 " src="${empArray[i].img}">
                    </div>
                <div class="col p-0">
                    <div>${empArray[i].fname} ${empArray[i].lname}</div>
                    <div>${empArray[i].job}</div>
                    <div>${empArray[i].department}</div>
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
        departmentstrore =departmentstrore+list;
        }
        
    }
    var alpha=document.getElementById('empList');
        alpha.innerHTML=departmentstrore;
}
    
function getOffice(val) {
   
  var officestrore="";
    for(var i=0;i<empArray.length;i++){
        if(empArray[i].office.toLowerCase().includes(val.toLowerCase())){

            const list = `
        
            <div class="list">
            <div onclick='popInfo(${i})'>
                <div class="row">
                    <div class="col-4 ">
                        <img class="profile p-2 " src="${empArray[i].img}">
                    </div>
                <div class="col p-0">
                    <div>${empArray[i].fname} ${empArray[i].lname}</div>
                    <div>${empArray[i].job}</div>
                    <div>${empArray[i].department}</div>
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
        officestrore =officestrore+list;
        }
        
    }
    var alpha=document.getElementById('empList');
        alpha.innerHTML=officestrore;
}
function getJob(val) {
   
    var jobstore="";
      for(var i=0;i<empArray.length;i++){
          if(empArray[i].job.toLowerCase().includes(val.toLowerCase())){
  
              const list = `
          
              <div class="list">
              <div onclick='popInfo(${i})'>
                  <div class="row">
                      <div class="col-4 ">
                          <img class="profile p-2 " src="${empArray[i].img}">
                      </div>
                  <div class="col p-0">
                      <div>${empArray[i].fname} ${empArray[i].lname}</div>
                      <div>${empArray[i].job}</div>
                      <div>${empArray[i].department}</div>
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
          var jobstore=jobstore+list;
          }
          
      }
      var alpha=document.getElementById('empList');
          alpha.innerHTML=jobstore;
  }