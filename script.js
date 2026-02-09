let subjects = JSON.parse(localStorage.getItem('subjects')||'[]');

function addSubject(){
const s=document.getElementById('subject').value;
const t=document.getElementById('topics').value.split(',');
const d=document.getElementById('examDate').value;
const diff=parseInt(document.getElementById('difficulty').value);
const h=parseFloat(document.getElementById('hours').value);
if(!s||!d||!h)return alert('Fill all fields');
subjects.push({s,t,d,diff,h});
localStorage.setItem('subjects',JSON.stringify(subjects));
generate();
}

function generate(){
const box=document.getElementById('schedule');
box.innerHTML='';
subjects.forEach(sub=>{
const days=Math.max(1,Math.ceil((new Date(sub.d)-new Date())/86400000));
const totalWeight=sub.diff*sub.t.length;
box.innerHTML+=`<div class="day"><strong>${sub.s}</strong><br>
${days} days left | ${sub.h} hrs/day<br>
Topics: ${sub.t.join(', ')}</div>`;
});
}
generate();
