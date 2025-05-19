function showResultModal(){
  document.getElementById('resultModal').classList.add('active');
  document.getElementById('nameInput').focus();
}
function closeResultModal(){
  document.getElementById('resultModal').classList.remove('active');
}
function showDevMsg(){
  var card=document.getElementById('devMsgCard');
  card.classList.add('show');
  clearTimeout(window.devMsgTimeout);
  window.devMsgTimeout=setTimeout(function(){card.classList.remove('show');},3000);
}
const students=[
  {roll:'210899',enroll:'AY147274190',name:'RAKSHA JAIN',marks:'246/30 - SGPA :8.2',result:'PASS'},
  {roll:'210900',enroll:'AY147274191',name:'FARHA KHATOON',marks:'258/30 - SGPA :8.6',result:'PASS'},
  {roll:'210901',enroll:'AY147274209',name:'AMAAN KHAN',marks:'228/30 - SGPA :7.6',result:'PASS'},
  {roll:'210902',enroll:'AY147274203',name:'NIDA BEE',marks:'225/30 - SGPA :7.5',result:'PASS'},
  {roll:'210903',enroll:'AY147274194',name:'MAYANK MATHUR',marks:'240/30 - SGPA :8',result:'PASS'},
  {roll:'210904',enroll:'AY147274211',name:'TULSI VISHWAKARMA',marks:'237/30 - SGPA :7.9',result:'PASS'},
  {roll:'210905',enroll:'AY147274206',name:'UTKARSH RAI',marks:'231/30 - SGPA :7.7',result:'PASS'},
  {roll:'210906',enroll:'AY147274193',name:'NANDNI BAIRAGI',marks:'234/30 - SGPA :7.8',result:'PASS'},
  {roll:'210907',enroll:'AY147274214',name:'PUSHPENDRA SHARMA',marks:'219/30 - SGPA :7.3',result:'PASS'},
  {roll:'210908',enroll:'AY147274213',name:'AAYRA QURESHI',marks:'234/30 - SGPA :7.8',result:'PASS'},
  {roll:'210909',enroll:'AY147274186',name:'PRATEEK MISHRA',marks:'246/30 - SGPA :8.2',result:'PASS'},
  {roll:'210910',enroll:'AY147274185',name:'SATYAM DANGI',marks:'228/30 - SGPA :7.6',result:'PASS'},
  {roll:'210911',enroll:'AY147274184',name:'CHETAN JADIYA',marks:'240/30 - SGPA :8',result:'PASS'},
  {roll:'210912',enroll:'AY147274208',name:'SOMIL NEMA',marks:'243/30 - SGPA :8.1',result:'PASS'},
  {roll:'210913',enroll:'AY147274198',name:'AMIT LODHI',marks:'213/30 - SGPA :7.1',result:'PASS'},
  {roll:'210914',enroll:'AY147274217',name:'NIKIT RAJPUT',marks:'222/30 - SGPA :7.4',result:'PASS'}
];
function showResult(){
  const nameInput=document.getElementById('nameInput').value.trim().toUpperCase();
  const nameSpan=document.getElementById('studentName');
  const rollSpan=document.getElementById('studentRoll');
  const enrollSpan=document.getElementById('studentEnroll');
  const marksSpan=document.getElementById('studentMarks');
  const resultSpan=document.getElementById('studentResult');
  if(!nameInput){
    nameSpan.textContent='-';
    rollSpan.textContent='-';
    enrollSpan.textContent='-';
    marksSpan.textContent='-';
    resultSpan.textContent='-';
    return;
  }
  const found=students.find(s=>s.name.includes(nameInput));
  if(found){
    nameSpan.textContent=found.name;
    rollSpan.textContent=found.roll;
    enrollSpan.textContent=found.enroll;
    marksSpan.textContent=found.marks;
    resultSpan.innerHTML='<span class="result-badge">'+found.result+'</span>';
  }else{
    nameSpan.textContent='Not Found';
    rollSpan.textContent='-';
    enrollSpan.textContent='-';
    marksSpan.textContent='-';
    resultSpan.textContent='-';
  }
}
showResult();
const mainSliderImgs=[
  {src:'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80',cap:'Campus Main Gate'},
  {src:'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80',cap:'Library'},
  {src:'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80',cap:'Sports Complex'},
  {src:'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80',cap:'Annual Events'}
];
let mainIdx=0,mainSliding=false;
function slideMain(dir){
  if(mainSliding)return;
  mainSliding=true;
  let a=document.getElementById('mainImgA'),b=document.getElementById('mainImgB'),cap=document.getElementById('mainCap');
  let nextIdx=(mainIdx+dir+mainSliderImgs.length)%mainSliderImgs.length;
  b.src=mainSliderImgs[nextIdx].src;
  b.className=dir>0?'slider-img slide-in':'slider-img slide-out';
  setTimeout(()=>{
    a.className=dir>0?'slider-img slide-out':'slider-img slide-in';
    b.className='slider-img active';
    cap.textContent=mainSliderImgs[nextIdx].cap;
    setTimeout(()=>{
      a.className=dir>0?'slider-img slide-in':'slider-img slide-out';
      b.className='slider-img active';
      let tmp=a;a=b;b=tmp;
      document.getElementById('mainImgA').id='mainImgB';
      document.getElementById('mainImgB').id='mainImgA';
      mainIdx=nextIdx;
      mainSliding=false;
    },700);
  },10);
}
setInterval(()=>{slideMain(1);},4000);
document.getElementById('resultModal').addEventListener('click',function(e){if(e.target===this)closeResultModal();});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeResultModal();}});
const events=[
  {date:'10 May 2025',title:'Industry Day on Intelligent Decision Support Systems'},
  {date:'09 May 2025',title:'Workshop on Security Trends in Telecom Networks'},
  {date:'03 May 2025',title:'Commencement 2025'},
  {date:'28 Apr 2025',title:'Annual Tech Fest'},
  {date:'15 Apr 2025',title:'Cultural Night'},
  {date:'01 Apr 2025',title:'Alumni Meet'},
  {date:'20 Mar 2025',title:'Research Symposium'},
  {date:'10 Mar 2025',title:'Sports Day'},
  {date:'01 Mar 2025',title:'Freshers Orientation'}
];
let eventIdx=0;
function renderEvents(){
  const list=document.getElementById('eventsList');
  list.innerHTML='';
  for(let i=0;i<3;i++){
    const e=events[(eventIdx+i)%events.length];
    const card=document.createElement('div');
    card.className='event-card';
    card.innerHTML=`<div class='event-date'>${e.date}</div><div class='event-title'>${e.title}</div>`;
    list.appendChild(card);
  }
}
function slideEvents(dir){
  eventIdx=(eventIdx+dir+events.length)%events.length;
  renderEvents();
}
renderEvents();
setInterval(()=>{slideEvents(1);},5000);
