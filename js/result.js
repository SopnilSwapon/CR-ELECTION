function getVoteValue (e){
  const gotVote = document.getElementById(e).innerText;
  const gotVoteInt = parseInt(gotVote);
  return gotVoteInt;
};
//______________ set result value__________________ //
function setResult(e, value){
    const currentVote = document.getElementById(e);
    currentVote.innerText = value;
}



const resultBtn = document.getElementById('result-btn');
resultBtn.addEventListener('click', function(){
    // ____Rubel result_________//
    const rubelGotVote = getVoteValue('rubel-vote');
    setResult('rubel-got', rubelGotVote);
    //________________Robbu_______________//
    const robbuGotVote = getVoteValue('robbu-vote');
    setResult('robbu-got', robbuGotVote);

    //___________Milon________________//
    const milonGoteVote = getVoteValue('milon-vote');
    setResult('milon-got', milonGoteVote);

    //___________Shariya_______________//
    const shariyaGoteVote = getVoteValue('shariya-vote');
    setResult('shariya-got', shariyaGoteVote);
    const firstPerson = document.getElementById('first-person');
    if(rubelGotVote > robbuGotVote && rubelGotVote > milonGoteVote && rubelGotVote > shariyaGoteVote){
        firstPerson.innerText = 'Congratulations Md.Rubel Mia,You have selected Our CR for next semester.'
    }
    else if(robbuGotVote > rubelGotVote && robbuGotVote > milonGoteVote && robbuGotVote > shariyaGoteVote){
        firstPerson.innerText = 'Congratulations Md.Robbu Khan,You have selected Our CR for next semester.'

    }
    else if(milonGoteVote > rubelGotVote && milonGoteVote > robbuGotVote && milonGoteVote > shariyaGoteVote){
        firstPerson.innerText = 'Congratulations Md.Milon khan,You have selected Our CR for next semester.'

    }
    else if(shariyaGoteVote > rubelGotVote && shariyaGoteVote > milonGoteVote && shariyaGoteVote > robbuGotVote){
        firstPerson.innerText = 'Congratulations Mst. Shariya akter,You have selected Our CR for next semester.'

    }
    else{
        firstPerson.innerText = 'Many people get equal vote,Arange again vote to select a CR.'
    }
})