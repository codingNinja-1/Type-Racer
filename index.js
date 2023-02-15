window.addEventListener('load',init)


const words=[
  'boy',
 'family',
 'amount',  
 'citation',
 'import',
 'keyboard',
 'fill',
 'abandon',
 'fable',
 'labor',
 'iceberg',
 'kernel',
 'fabric',
 'grace',
 'zigzag',
 'baboon',
 'radar',
 'wagon',
 'zealous',
 'galaxy',
 'jacket',
 'gaseous',
 'gather',
 "paddle",
 "awesome",
 "distance",
 "fertile",
 "wakeful",
 "belief",
 "answer",
 "slippery",
 "bizarre",
 "learned",
 "vivacious",
 "grandmother",
 "illegal",
 "thirsty",
 "wholesale",
 "tenuous",
 "skillful",
 "deteriorate",
 "poised",
 "humorous",
 "scrape",
 "replace",
 "languid",
 "adjoining",
 "interesting",
 "stranger",
 "polite",
 "scissors",
 "brainy",
 "interrogation", 
 'facilitator',
 "cabin",
 'yard',
 "sack",
 'gallant',
 "bachelor",
 'suck',
 "value",
 "answer",
 "name"

]

const Levels={
 Easy:5,
 Medium:3,
 Hard:1,
};
var currentLevel=Levels.Easy
let time =currentLevel
let score=0
let playing

const wordinput=document.querySelector("#input")
const seconds= document.querySelector('#seconds')
const easyEle=document.querySelector('#easy')
const mediumEle=document.querySelector('#medium')
const hardEle=document.querySelector('#hard')
const currentWords=document.querySelector('#currentWords')
const message=document.querySelector('#notification')
const timer=document.querySelector('#timer')
const levels=document.querySelectorAll('.levelchild')
const scoreBoard=document.querySelector('#score')
easyEle.addEventListener("click",addRemove)
mediumEle.addEventListener("click",addRemove)
hardEle.addEventListener("click",addRemove)

function init() {
 seconds.innerHTML=currentLevel
 showWords(words)
 wordinput.addEventListener('input',startmatch)
 wordinput.addEventListener('input',()=>{
  wordinput.value=wordinput.value.toLowerCase().trim();
 })
setInterval(countdown,1000) 
setInterval(playGround,50)
}
function startmatch(){
 if(matchwords()){
  playing= true
  showWords(words)
  time=currentLevel +1
wordinput.value="".toLocaleLowerCase()
score++
 }
 if (score===-1) {
        scoreBoard.innerHTML= 0;
        

    }else{
        scoreBoard.innerHTML= score;

    }

}









function showWords(words){
 const randindex=Math.floor(Math.random()*words.length)
currentWords.innerHTML=words[randindex] 
}
function matchwords(){
 if (wordinput.value===currentWords.innerHTML){
  
  message.innerHTML='Correct!!!!!'
  return true;
  }
  else{
   message.innerHTML=''
   return false;
  }
}
function playGround(){
if (!playing && time==0) {
 message.innerHTML="Game over!!!"
 score=-1
}
}
function countdown(){
 if(time>0){
  time--
 }
 else if(time===0){
  playing=false
 }
 timer.innerHTML=time
}
// console.log(words);
function addRemove(e){
 const text = e.target.textContent;
 levels.forEach((elem)=>{
  elem.className="levelchild"
 })
 e.target.className="levelchild showlevel "
 
 if (text=== "Easy "){
  currentLevel=Levels.Easy
 }
 else if (text==="Medium"){
  currentLevel=Levels.Medium
 }
 else{
  currentLevel=Levels.Hard
 }
 
 seconds.innerHTML=currentLevel
}