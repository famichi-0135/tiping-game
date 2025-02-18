{
  window.addEventListener('click',()=>{
    const startDisplay = document.querySelector('.startDisplay');
    startDisplay.classList.remove('startDisplay');
    startDisplay.classList.add('startDisplayNone');
    const tipingGame = document.querySelector('.tipingGame');
    tipingGame.classList.remove();
    tipingGame.classList.add('tipingGameScreen');
    // tipingSistem();
  });


  //１ゲームの出題問題数
  const quesitonNo = 10;

  const tipingDocument =[
    {english:'yakkyoku', japanese:'薬局',},
    {english:'akapajama', japanese:'赤パジャマ',},
    {english:'dokutiwawa', japanese:'毒チワワ',},
    {english:'erefanntokasimasi', japanese:'エレファントカシマシ',},
    {english:'toukyouerekutoronn', japanese:'東京エレクトロン',},
    {english:'sisumekkusu', japanese:'シスメックス',},
    {english:'bandainamuko', japanese:'バンダイナムコ',},
    {english:'sukueaenikkusu', japanese:'スクエアエニックス',},
  ];



    function tipingSistem(corectNo){
      if(corectNo < quesitonNo){
        renderQuestionNo(corectNo);
        checkSpell();
      }else{
        return;
      }
    }



  function renderDocument(){
    let randam = Math.floor(Math.random() * tipingDocument.length);
    document.querySelector('#DocumentJapanese').innerHTML = tipingDocument[randam].japanese;
    document.querySelector('#DocumentEnglish').innerHTML = tipingDocument[randam].english;
    console.log(randam);
    console.log(tipingDocument.length);
    return randam;
  };

  function renderQuestionNo(corectNo){
    const quesitonDigit = document.querySelector('.tipingGame h2');
    quesitonDigit.textContent =`${corectNo + 1}問目`;
  }
  
  function editSpell(){
    let randam = renderDocument();
    let document = (tipingDocument[randam].english);
    let documentSlice = [];
    for(let i = 0; i < tipingDocument[randam].english.length; i++){
      documentSlice[i] = document[i].slice(0,tipingDocument[randam].english.length);
      // document[i].classList.add = `digit${i}`;
    }
    console.log(documentSlice);
    return documentSlice;
  }

  let corectNo = 0;
  let digitNo = 0;

  function checkSpell(){
    // let corectNo = 0;
    let questonD = editSpell();
      window.addEventListener('keydown',function(event){
        if(questonD[digitNo] === event.key){
          console.log("corect");
          digitNo++;
          if(digitNo === questonD.length){
            console.log('All corect');
            digitNo = 0;
            corectNo++;
            questonD = '';
            tipingSistem(corectNo);
          }
        }else if(questonD[digitNo] !== event.key){
          console.log('wrong');
        }
      });
  };

  function keydownHolder(event){
    if(questonD[digitNo] === event.key){
      console.log("corect");
      digitNo++;
      if(digitNo === questonD.length){
        console.log('All corect');
        digitNo = 0;
        corectNo++;
        questonD = '';
        tipingSistem(corectNo);
      }
    }else if(questonD[digitNo] !== event.key){
      console.log('wrong');
    }
  }
  checkSpell();
 
}