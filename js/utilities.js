function getCurrentvoteValueById (elementId){
  const element = document.getElementById(elementId);
  const elementValue = element.innerText;
  const value = parseInt(elementValue);
  return value;
}

function setValueById (elementId, value){
    const voteResultElement = document.getElementById(elementId);
    const voteResult = voteResultElement.innerText;
    const vote = parseInt(voteResult);
    voteResultElement.innerText = vote + 1;
}