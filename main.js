{
  window.addEventListener('click',()=>{
    const startDisplay = document.querySelector('.startDisplay');
    startDisplay.classList.remove();
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

  let answerNo = 0;

    const tipingSistem = (digitNo,questonD) =>{
      checkSpell();
    }

    tipingSistem();


  function renderDocument(){
    let randam = Math.floor(Math.random(0) * tipingDocument.length);
    document.querySelector('#DocumentJapanese').innerHTML = tipingDocument[randam].japanese;
    document.querySelector('#DocumentEnglish').innerHTML = tipingDocument[randam].english;
    console.log(randam);
    console.log(tipingDocument.length);
    return randam;
  };
  
  function editSpell(){
    let randam = renderDocument();
    let document = (tipingDocument[randam].english);
    let documentSlice = [];
    for(let i = 0; i < tipingDocument[randam].english.length; i++){
      documentSlice[i] = document[i].slice(0,tipingDocument[randam].english.length);
    }
    console.log(documentSlice);
    return documentSlice;
  }

  function checkSpell(){
    let digitNo = 0;
    let questonD = editSpell();
    window.addEventListener('keydown',function(event){
      if(questonD[digitNo] === event.key){
        console.log("corect");
        digitNo++;
      }else{
        console.log('wrong');
      }
      if(digitNo === questonD.length){
        console.log('All corect');
        digitNo = 0;
      }
    });
    return;
  };
  
 
}