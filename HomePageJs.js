var alphastore="";

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
        <div onclick='popInfo(${i})'>
            <div class="row" >
                <div class="col-4 ">
                    <img class="profile p-2 " src="${empArray[i].img}">
                </div>
            <div class="col p-0">
                <div>${empArray[i].fname}</div>
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
function popInfo(v){

    const le=`
    <form>
        <label for="file-select">Upload:</label>
        <input type="file" name="upload" id="file-select" <br><br>
        Firstname:<input type="text" id="fname" value="${empArray[v].fname}"><br><br>
        last Name:<input type="text" id="lname" value="${empArray[v].lname}"><br><br>
        Email: <input type="text" id="email" value="${empArray[v].email}"><br><br>
        Job: <input type="text" id="job" value="${empArray[v].job}"><br><br>
        title: <input type="text" id="title"value="${empArray[v].title}"><br><br>
        Office: <input type="text" id="office"value="${empArray[v].office}"><br><br>
        department: <input type="text" id="department"value="${empArray[v].department}"><br><br>
        Phone Number: <input type="text" id="pnum"value="${empArray[v].pnum}"><br><br>
        SkypeId :<input type="text" id="skypeid"value="${empArray[v].skypeid}"><br><br>
        <button type="button" onclick="onSubmit(${v})">Submit</button>
    </form>

    `;
    var alpha=document.getElementById('empList');
    alpha.innerHTML=le;
   
   
}


function displayIt(){
    
    let ItStore="";
    let value="IT Department"
    for(var i=0;i<empArray.length;i++){
        if(empArray[i].department.includes(value)){
           
            const list = `
        
            <div class="list">
            <div onclick='popInfo(${i})'>
                <div class="row">
                    <div class="col-4 ">
                        <img class="profile p-2 " src="Image8.jfif">
                    </div>
                <div class="col p-0">
                    <div>${empArray[i].fname}</div>
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
        ItStore =ItStore+list;
        }
        
    }
    var alpha=document.getElementById('empList');
        alpha.innerHTML=ItStore;
}
function displayHr(){
    let hrstore="";
    
    let value="HR Department"
    for(var i=0;i<empArray.length;i++){
        if(empArray[i].department.includes(value)){

            const list = `
        
            <div class="list">
            <div onclick='popInfo(${i})'>
                <div class="row">
                    <div class="col-4 ">
                        <img class="profile p-2 " src="Image8.jfif">
                    </div>
                <div class="col p-0">
                    <div>${empArray[i].fname}</div>
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
        hrstore =hrstore+list;
        }
        
    }
    var alpha=document.getElementById('empList');
        alpha.innerHTML=hrstore;
}
function searchBox(){
    let val=document.getElementById('preferd').value.toLowerCase();
    // let val=document.getElementById('search').value.toLowerCase();
    renderEmployeesBySearch(val);
}
var s=document.getElementsByTagName('option');
console.log(s[0]);
const renderEmployeesBySearch = (inputStr) => {
   filtearray=["fullname",]
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
                    <div>${empArray[i].fname}</div>
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
    var  fname=document.getElementById('fname').value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById('email').value;
    var job=document.getElementById('job').value;
    var title=document.getElementById("title").value;
    var office=document.getElementById("office").value;
    var department=document.getElementById("department").value;
    var phone=document.getElementById('pnum').value;
    var skypeid=document.getElementById("skypeid");

    var emp=new employeeDetails(fname,lname,email,job,title,office,department,pnum,skypeid);
    empArray[val]=emp;
    alert("Employee Details Updated Succesfully");
    document.getElementById("empList").style.display="";
    document.getElementById("form").style.display="none";
    empList();
    
   
}
window.addEventListener("load",empList);