



for(var i=65;i<91;i++){
    var temp;
    var al=String.fromCharCode(i);
    const ser =  `
        <button class ="grid" onclick="renderEmployeesBySearch('${al.toLowerCase()}')">${al}</button>
    `;
    temp+=ser;
}
var alpha=document.getElementById('alpha');
alpha.innerHTML=temp;

// function searchWithChar(char){
//     let temp="";
//     for(var i=0;i<empArray.length;i++){
//         if(empArray[i].department.toLowerCase().includes(char)||empArray[i].fname.toLowerCase().includes(char)|| empArray[i].job.toLowerCase().includes(char)){

//             const list = `
        
//             <div class="list">
//                 <div class="row">
//                     <div class="col-4 ">
//                         <img class="profile p-2 " src="Image8.jfif">
//                     </div>
//                 <div class="col p-0">
//                     <div>${empArray[i].fname}</div>
//                     <div>${empArray[i].job}</div>
//                     <div>${empArray[i].department}</div>
//                     <i><img class="icon" src="call-grey.png"></i>
//                     <i><img class="icon" src="popup.png"></i>
//                     <i><img class="icon" src="message.png"></i>
//                     <i><img class="icon" src="heart.png"></i>
//                     <i><img class="icon" src="star.png"></i>
//                 </div>
//             </div>
//         </div>              
//         `;
//         temp =temp+list;
//         }
        
//     }
//     var alpha=document.getElementById('empList');
//         alpha.innerHTML=temp;
// }

function employeeDetails(fname,lname,email,job ,title,office,department,pnum,skypeid){
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

let emp1=new employeeDetails("Antony","Morris","antony@gmail.com","SharePoint Practice Head","SharePoint Practice Head","Seattle","IT Department","123456789","antony@skype");
let emp2=new employeeDetails("Helen","Zimmerman","helen@gmail.com","Operations Manager","Operations Manager","India","HR Department",123456789,"helen@skype");
let emp3=new employeeDetails("Jonathon","Smith","smith@gmail.com","Product Manager","Product Manager","India","UX Department",123456789,"smith@skype");
let emp4=new employeeDetails("Tami","Hopkins","tami@gmail.com","Lead Enginer-Dot Net","Lead Enginer-Dot Net","India","IT Department",123456789,"tami@skype");

var  empArray=new Array();
empArray.push(emp1);
empArray.push(emp2);
empArray.push(emp3);
empArray.push(emp4);


function onloadEmployeesList(){
    let temp="";
    for(var i=0;i<empArray.length;i++){
   
        const list = `
        
        <div class="list">
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
    `;
    temp =temp+list;
    }
    var alpha=document.getElementById('empList');
    alpha.innerHTML=temp;
    
}

function displayIt(){
    
    let temp="";
    let value="IT Department"
    for(var i=0;i<empArray.length;i++){
        if(empArray[i].department.includes(value)){
           
            const list = `
        
            <div class="list">
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
        `;
        temp =temp+list;
        }
        
    }
    var alpha=document.getElementById('empList');
        alpha.innerHTML=temp;
}
function displayHr(){
    let temp="";
    
    let value="HR Department"
    for(var i=0;i<empArray.length;i++){
        if(empArray[i].department.includes(value)){

            const list = `
        
            <div class="list">
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
        `;
        temp =temp+list;
        }
        
    }
    var alpha=document.getElementById('empList');
        alpha.innerHTML=temp;
}
function searchBox(){
    let val=document.getElementById('search').value.toLowerCase();
    renderEmployeesBySearch(val);
}

const renderEmployeesBySearch = (inputStr) => {
    let temp="";

    for(var i=0;i<empArray.length;i++){
        if(empArray[i].department.toLowerCase().includes(inputStr)||empArray[i].fname.toLowerCase().includes(inputStr)|| empArray[i].job.toLowerCase().includes(inputStr)){

            const list = `
        
            <div class="list">
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
        `;
        temp =temp+list;
        }
        
    }
    var alpha=document.getElementById('empList');
    alpha.innerHTML=temp;
}
