{
  
  function startToTaiping(){
    const sbutton = document.querySelector('#startDisplay > div > button');
    sbutton.addEventListener('click',() =>{
    //checkSpell()
       corectNo = 0;
       digitNo = 0;
       questonD = '';
       missed = false;
       wrongDigit = 0;
       allDigit = 0;
      tipingSistem(corectNo);
      startToTaipingGame();
    });
  }
  startToTaiping();
  
  //ゲームの出題問題数
  const quesitonNo = 5;
  // 現在の問題番号
  let corectNo = 0;
  //自分が今何文字打ったかをカウントする変数
  let digitNo = 0;
  //現在の出題単語の文字数記録変数
  let questonD = [];
  //問題全ての文字数
  let allDigit = 0;
  //不正確なタイピング記録変数
  let wrongDigit = 0;
  //一回目のミスのみを記録するためのブール関数的な何か
  let missed = false;

  const tipingDocument =[
    {english:'yakkyoku', japanese:'薬局',},
    {english:'akapajama', japanese:'赤パジャマ',},
    {english:'dokutiwawa', japanese:'毒チワワ',},
    {english:'erefanntokasimasi', japanese:'エレファントカシマシ',},
    {english:'toukyouerekutoronn', japanese:'東京エレクトロン',},
    {english:'sisumekkusu', japanese:'シスメックス',},
    {english:'banndainamuko', japanese:'バンダイナムコ',},
    {english:'sukueaenikkusu', japanese:'スクエアエニックス',},
    {english:'ko-e-tekumo', japanese:'コーエーテクモ',},
    {english:'furomusofutowea', japanese:'フロムソフトウェア',},
    {english:'kapukonn', japanese:'カプコン',},
    {english:'nihonnseitetu', japanese:'日本製鉄',},
    {english:'saiba-e-zyento', japanese:'サイバーエージェント',},
    {english:'suteranntelisu', japanese:'ステンランティス',},
  ];



    function tipingSistem(corectNo){
      if(corectNo < quesitonNo){
        renderQuestionNo(corectNo);
        checkSpell();
      }else{
        tipingGameToFinishDisplay();
        console.log(Math.floor((allDigit - wrongDigit) / allDigit));
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
        let finishScreenP = document.querySelector('#finalDisplay  p');
        finishScreen.classList.remove('finalDisplay');
        finishScreen.classList.add('finalDisplayScreen');
        finishScreenP.textContent = `${Math.floor(((allDigit - wrongDigit) / allDigit) * 100)}%`;
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
    //文字数数え上げ変数
    allDigit = allDigit + english.length;
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
    const audioTipe = new Audio('タイピング-メカニカル単2.mp3');
    const audioMiss = new Audio('エラー2.mp3');
    const audioOK = new Audio('正解4.mp3');

    audioMiss.volume = .1;
    audioTipe.volume = .5;
    audioOK.volume = .2;
    let wdigit = 0;
    if(questonD[digitNo] === event.key){
      console.log("corect");
      audioTipe.currentTime = 0;
      audioTipe.play();
      let span = document.querySelector(`.color${digitNo}`);
      span.classList.remove('addcolorWrong');
      span.classList.add('addcolor');
      missed = false;
      digitNo++;
      if(digitNo === questonD.length){
        console.log('All corect');
        audioOK.currentTime = 0;
        audioOK.play();
        digitNo = 0;
        corectNo++;
        for(let i = 0; i < questonD.length;i++){
          let span = document.querySelector(`.color${i}`)
          span.remove();
        }
        questonD = '';
        missed = false;
        tipingSistem(corectNo);
      }
    }else if(questonD[digitNo] !== event.key){
      audioMiss.currentTime = 0;
      audioMiss.play();
      if(missed === false){
        wdigit++;
        wrongDigit +=  wdigit;
        missed = true;
      }
      let span = document.querySelector(`.color${digitNo}`);
      span.classList.add('addcolorWrong');
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