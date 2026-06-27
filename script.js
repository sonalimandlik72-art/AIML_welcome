const messages = [

"🌟 Welcome to AI & ML Batch 2026-27! Today marks the beginning of your journey into the world of Artificial Intelligence.",

"🚀 Every great AI Engineer started with their first program. Welcome!",

"💡 Learn Python. Build Intelligence. Shape the Future.",

"🤖 AI is changing the world, and today your journey begins.",

"📊 Data is the fuel. AI is the engine. You are the driver.",

"🧠 Train your mind like a Machine Learning model.",

"🌍 Dream Big. Code Bigger.",

"⚡ Artificial Intelligence is not magic. It is logic powered by curiosity.",

"🎯 Welcome Future Data Scientist!",

"🔥 Keep Learning. Keep Innovating."

// Continue until 100 messages...
];
const form=document.getElementById("studentForm");

form.addEventListener("submit",function(e){

e.preventDefault();

const roll=document.getElementById("roll").value;

const name=document.getElementById("name").value;

const random=Math.floor(Math.random()*messages.length);

document.querySelector(".container").style.display="none";

document.getElementById("welcomeCard").style.display="block";

document.getElementById("studentName").innerHTML="🎉 Welcome "+name;

document.getElementById("studentRoll").innerHTML="Roll No : "+roll;

document.getElementById("message").innerHTML=messages[random];

});
