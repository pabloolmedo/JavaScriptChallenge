/****************
  Complete the code! Good Luck
******************************/

const urlFirstStep = "https://us-central1-verto-backend-dev.cloudfunctions.net/challengeFirstStep";
const urlLastStep ="https://us-central1-verto-backend-dev.cloudfunctions.net/challengeFinalStep";
const idLastStep = "l5QMCyGQEmpnQuti5rNC";
//Module pattern
(function(){

  //Module data
  

  //DOM
  const btnFirstStep = document.getElementById("first");
  const btnLastStep = document.getElementById("step");
  const txtEmail = document.getElementById("email");
  const txtName = document.getElementById("name");
  const txtMsg = document.getElementById("msg");

  //Events
  btnFirstStep.addEventListener("click", gotoFirstStep);
  btnLastStep.addEventListener("click", gotoLastStep );

  //Callbacks
  function gotoFirstStep(){

    //First Step. Using promises
    fetch(urlFirstStep, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({
      token: window.appToken,
      email: txtEmail.value
      
      })
    })
    .then(response=>response.json())
    .then(data=>{
      console.log("FromServer", data);
       btnLastStep.disabled = false;
    });

  }

  function gotoLastStep(){

    //Last Step. Using promises
    fetch(urlLastStep, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      
      body: JSON.stringify({
        token: window.appToken,
        name: txtName.value,
        id: idLastStep
      })
    })
    .then(response=>response.json())
    .then(data=>{
      console.log("FromServer LastStep", data);
      txtMsg.innerText =  (Object.values(data));
    });
  }
})()
