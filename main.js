{
  // window.addEventListener('click',()=>{
  //   const startDisplay = document.querySelector('.startDisplay');
  //   startDisplay.classList.remove('startDisplay');
  //   startDisplay.classList.add('startDisplayNone');
  //   const tipingGame = document.querySelector('.tipingGame');
  //   tipingGame.classList.remove();
  //   tipingGame.classList.add('tipingGameScreen');
  //   // tipingSistem();
  // },{once: true});

  function startToTaiping(){
    const sbutton = document.querySelector('#startDisplay > button');
    sbutton.addEventListener('click',() =>{
      checkSpell()
      startToTaipingGame();
    });
  }
  startToTaiping();
  // function oneClick(){
  //   window.addEventListener('click',()=>{
  //     startToTaipingGame();
  //   },{once: true});
  // }


  //１ゲームの出題問題数
  const quesitonNo = 2;

  let corectNo = 0;
  let digitNo = 0;

  let questonD = [];

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
        tipingGameToFinishDisplay();
       corectNo = 0;
       digitNo = 0;
       questonD = '';
       switchFinishButton();
        // return;
      }
    }
    // tipingSistem(corectNo);

    function tipingGameToStartDisplay(){
      window.removeEventListener('keydown',keydownHandler);
        let tipingGame = document.querySelector('#tipingGame');
        tipingGame.classList.remove('tipingGameScreen');
        tipingGame.classList.add('tipingGame');
        let startScreen = document.querySelector('#startDisplay');
        startScreen.classList.remove('startDisplayNone');
        startScreen.classList.add('startDisplay');
    }

    function startToTaipingGame(){
      const startDisplay = document.querySelector('.startDisplay');
      startDisplay.classList.remove('startDisplay');
      startDisplay.classList.add('startDisplayNone');
      const tipingGame = document.querySelector('.tipingGame');
      tipingGame.classList.remove();
      tipingGame.classList.add('tipingGameScreen');
    }

    function tipingGameToFinishDisplay(){
        let tipingGame = document.querySelector('#tipingGame');
        tipingGame.classList.remove('tipingGameScreen');
        tipingGame.classList.add('tipingGame');
        let finishScreen = document.querySelector('#finalDisplay');
        finishScreen.classList.remove('finalDisplay');
        finishScreen.classList.add('finalDisplayScreen');
    }

    function FinishDisplayToStartDisplay(){
      let finishScreen = document.querySelector('#finalDisplay');
      finishScreen.classList.add('finalDisplay');
      finishScreen.classList.remove('finalDisplayScreen');
      let startScreen = document.querySelector('#startDisplay');
        startScreen.classList.remove('startDisplayNone');
        startScreen.classList.add('startDisplay');
    };

    function switchFinishButton(){
      const button = document.querySelector('#finalDisplay > div > button');
      button.addEventListener('click',()=>{
        FinishDisplayToStartDisplay();
      },{once: true});
    }



  function renderDocument(){
    let randam = Math.floor(Math.random() * tipingDocument.length);
    let documentSlice = [];
    const english = tipingDocument[randam].english;
    for(let i = 0; i < tipingDocument[randam].english.length; i++){
      documentSlice = english.slice(0,tipingDocument[randam].english.length);
      let span = document.createElement('span');
      span.classList.add(`color${i}`);
      span.innerHTML = documentSlice[i];
      let ptag = document.querySelector('#DocumentEnglish');
      ptag.appendChild(span);
    }
    document.querySelector('#DocumentJapanese').innerHTML = tipingDocument[randam].japanese;
    // document.querySelector('#DocumentEnglish').innerHTML = documentSlice;
    console.log(randam);
    // console.log(tipingDocument.length);
    return documentSlice;
  };

  function renderQuestionNo(corectNo){
    const quesitonDigit = document.querySelector('#tipingGame h2');
    quesitonDigit.textContent =`${corectNo + 1}問目`;
    corectNo = 0;
  }
  

  

  function keydownHandler(event){
    // let questonD = editSpell();
    if(questonD[digitNo] === event.key){
      console.log("corect");
      let span = document.querySelector(`.color${digitNo}`);
      span.classList.add('addcolor');
      digitNo++;
      if(digitNo === questonD.length){
        console.log('All corect');
        digitNo = 0;
        corectNo++;
        for(let i = 0; i < questonD.length;i++){
          let span = document.querySelector(`.color${i}`)
          span.remove();
        }
        questonD = '';
        tipingSistem(corectNo);
      }
    }else if(questonD[digitNo] !== event.key){
      console.log('wrong');
    }
  }
  
  
 function checkSpell(){
    // digitNo = 0;
    questonD = renderDocument();
    window.removeEventListener('keydown',keydownHandler);
    window.addEventListener('keydown',keydownHandler);
  };

  function addColorSpell(documentSlice,i){
    const span = document.createElement('span').classList.add(`color${i}`);
    span.textContent = documentSlice;
    const p = document.querySelector('#DocumentEnglish');
    p.appendChild(span);
  };
  

}