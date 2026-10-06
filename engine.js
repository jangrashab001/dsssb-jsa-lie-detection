
(function(){
class TestEngine{
 constructor({id,title,questions,minutes=60,marking={correct:1,wrong:-.25,unattempted:0},studyMode=false,resumeState=null}){
  this.id=id;this.title=title;this.questions=questions;this.minutes=minutes;this.marking=marking;this.studyMode=studyMode;this.startedAt=Date.now();this.endsAt=this.startedAt+minutes*60000;this.index=0;this.answers={};this.marked={};this.submitted=false;
  if(resumeState){Object.assign(this,resumeState);this.questions=questions;this.marking=marking;this.submitted=false}
 }
 answer(i,opt){this.answers[this.questions[i].id]=opt;this.save()}
 clear(i){delete this.answers[this.questions[i].id];this.save()}
 toggleMark(i){const id=this.questions[i].id;if(this.marked[id])delete this.marked[id];else this.marked[id]=true;this.save()}
 remainingMs(){return Math.max(0,this.endsAt-Date.now())}
 counts(){const answered=Object.keys(this.answers).length,marked=Object.keys(this.marked).length;return{answered,marked,unattempted:this.questions.length-answered}}
 snapshot(){return{id:this.id,title:this.title,minutes:this.minutes,studyMode:this.studyMode,startedAt:this.startedAt,endsAt:this.endsAt,index:this.index,answers:this.answers,marked:this.marked,questionIds:this.questions.map(q=>q.id)}}
 save(){localStorage.setItem('dsssb-active-test',JSON.stringify(this.snapshot()))}
 submit(){this.submitted=true;localStorage.removeItem('dsssb-active-test');const res=this.result();localStorage.setItem('dsssb-last-result',JSON.stringify(res));return res}
 result(){let correct=0,wrong=0,unattempted=0;const items=[];const sectionMap={};for(const q of this.questions){const a=this.answers[q.id];let status='unattempted';if(a===undefined)unattempted++;else if(a===q.correctIndex){correct++;status='correct'}else{wrong++;status='wrong'};items.push({id:q.id,answer:a,status});const s=sectionMap[q.section_id]||(sectionMap[q.section_id]={section:q.section,total:0,correct:0,wrong:0,unattempted:0});s.total++;s[status]++}
 const score=correct*this.marking.correct+wrong*this.marking.wrong;const max=this.questions.length*this.marking.correct;const attempted=correct+wrong;return{id:this.id,title:this.title,submittedAt:Date.now(),startedAt:this.startedAt,timeSeconds:Math.max(0,Math.round((Math.min(Date.now(),this.endsAt)-this.startedAt)/1000)),correct,wrong,unattempted,attempted,score,max,percent:max?score/max*100:0,accuracy:attempted?correct/attempted*100:0,items,sections:Object.entries(sectionMap).map(([id,v])=>({id,...v})),questionIds:this.questions.map(q=>q.id),answers:this.answers}}
}
window.TestEngine=TestEngine;
})();
