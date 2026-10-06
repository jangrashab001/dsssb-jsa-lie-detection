
(function(){
  const bank=window.DSSSB_BANK;
  const byId=new Map(bank.questions.map(q=>[q.id,q]));
  function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
  function questionsForMock(mockId){const m=bank.mocks.find(x=>x.mockId===mockId);return m?m.questionIds.map(id=>byId.get(id)).filter(Boolean):[]}
  function filterQuestions({section='ALL',difficulty='ALL',query='' }={}){let q=bank.questions;if(section!=='ALL')q=q.filter(x=>x.section_id===section);if(difficulty!=='ALL')q=q.filter(x=>x.difficulty===difficulty);query=query.trim().toLowerCase();if(query)q=q.filter(x=>`${x.id} ${x.question} ${x.correctAnswer} ${x.explanation} ${x.topic}`.toLowerCase().includes(query));return q}
  function customQuestions({sections=['ALL'],difficulty='ALL',count=100}={}){let q=bank.questions;if(sections.length&& !sections.includes('ALL'))q=q.filter(x=>sections.includes(x.section_id));if(difficulty!=='ALL')q=q.filter(x=>x.difficulty===difficulty);return shuffle(q).slice(0,Math.min(count,q.length))}
  function balancedRandom(count=100){const secs=bank.syllabus.map(s=>s.id);const per=Math.floor(count/secs.length),extra=count%secs.length;let out=[];secs.forEach((sid,i)=>{const take=per+(i<extra?1:0);out.push(...shuffle(bank.questions.filter(q=>q.section_id===sid)).slice(0,take))});return shuffle(out)}
  window.QuestionPool={bank,byId,shuffle,questionsForMock,filterQuestions,customQuestions,balancedRandom};
})();
