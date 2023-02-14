const toggleText = () => {
    const closeTextButton = document.getElementById("closeTextButton");
    const showTextButton = document.getElementById("showTextButton");
    const textToShow = document.getElementById("textToShow");
    const aboutNav = document.getElementById("aboutNav");
    
  
    if (showTextButton && textToShow) {
      showTextButton.addEventListener("click", () => {
        textToShow.classList.toggle("hidden");
        showTextButton.classList.toggle("hidden");
      });
    }
    if (closeTextButton && textToShow && showTextButton){
        closeTextButton.addEventListener("click", () => {
            textToShow.classList.toggle("hidden");
            showTextButton.classList.toggle("hidden");
        });
    }
    if (aboutNav && showTextButton && textToShow) {
      aboutNav.addEventListener("click", () => {
        textToShow.classList.toggle("hidden");
        showTextButton.classList.toggle("hidden");
      });
    }
  
  /*                                                          SKILLS START HERE                                       */
    const closeSkills = document.getElementById("closeSkills");
    const showSkills = document.getElementById("showSkills");
    const skillsToShow = document.getElementById("skillsToShow");
    const skillNav = document.getElementById("skillNav");
  
    if (showSkills && skillsToShow) {
      showSkills.addEventListener("click", () => {
        skillsToShow.classList.toggle("hidden");
        showSkills.classList.toggle("hidden");
      });
    }
    if (closeSkills && skillsToShow && showSkills){
      closeSkills.addEventListener("click", () => {
        skillsToShow.classList.toggle("hidden");
        showSkills.classList.toggle("hidden");
        });
    }
    if (skillNav && showSkills && skillsToShow){
      skillNav.addEventListener("click", () => {
        skillsToShow.classList.toggle("hidden");
        showSkills.classList.toggle("hidden");
      });
    }
  /*                                                          SKILLS ENDS HERE                               */
  
  
  /*                                                          VEHICLE HIERARCHY STARTS HERE                               */
    const closeHierarchy = document.getElementById("closeHierarchy");
    const showHierarchy = document.getElementById("showHierarchy");
    const hierToShow = document.getElementById("hierToShow");
    const vehicleNav = document.getElementById("vehicleNav");
  
    if (showHierarchy && hierToShow) {
      showHierarchy.addEventListener("click", () => {
        hierToShow.classList.toggle("hidden");
        showHierarchy.classList.toggle("hidden");
      });
    }
    if (closeHierarchy && hierToShow && showHierarchy){
      closeHierarchy.addEventListener("click", () => {
        hierToShow.classList.toggle("hidden");
        showHierarchy.classList.toggle("hidden");
        });
    }
      if (vehicleNav && showHierarchy && hierToShow){
      vehicleNav.addEventListener("click", () => {
        hierToShow.classList.toggle("hidden");
        showHierarchy.classList.toggle("hidden");
      });
    }
  /*                                                          VEHICLE HIERARCHY ENDS HERE                               */
  
  
  /*                                                          QUANTUM STARTS HERE                               */
    const closeQuant = document.getElementById("closeQuant");
    const showQuant = document.getElementById("showQuant");
    const QuantToShow = document.getElementById("QuantToShow");
    const quantumNav = document.getElementById("quantumNav");
  
    if (showQuant && QuantToShow) {
      showQuant.addEventListener("click", () => {
        QuantToShow.classList.toggle("hidden");
        showQuant.classList.toggle("hidden");
      });
    }
    if (closeQuant && QuantToShow && showQuant){
      closeQuant.addEventListener("click", () => {
        QuantToShow.classList.toggle("hidden");
        showQuant.classList.toggle("hidden");
        });
    }
      if (quantumNav && showQuant && QuantToShow) {
      quantumNav.addEventListener("click", () => {
        QuantToShow.classList.toggle("hidden");
        showQuant.classList.toggle("hidden");
      });
    }
  /*                                                          QUANTUM ENDS HERE                               */
  
  /*                                                          AWS STARTS HERE                               */
    const closeAws = document.getElementById("closeAws");
    const showAws = document.getElementById("showAws");
    const AwsToShow = document.getElementById("AwsToShow");
    const awsNav = document.getElementById("awsNav");
  
    if (showAws && AwsToShow) {
      showAws.addEventListener("click", () => {
        AwsToShow.classList.toggle("hidden");
        showAws.classList.toggle("hidden");
      });
    }
    if (closeAws && AwsToShow && showAws){
      closeAws.addEventListener("click", () => {
        AwsToShow.classList.toggle("hidden");
        showAws.classList.toggle("hidden");
        });
    }
    if (awsNav && showAws && AwsToShow) {
      awsNav.addEventListener("click", () => {
        AwsToShow.classList.toggle("hidden");
        showAws.classList.toggle("hidden");
      });
    }
  /*                                                          AWS ENDS HERE                               */
  
  
  /*                                                          WINNER TAKES ALL STARTS HERE                               */
    const closeWin = document.getElementById("closeWin");
    const showWin = document.getElementById("showWin");
    const WinToShow = document.getElementById("WinToShow");
    const winnerNav = document.getElementById("winnerNav");
  
    if (showWin && WinToShow) {
      showWin.addEventListener("click", () => {
        WinToShow.classList.toggle("hidden");
        showWin.classList.toggle("hidden");
      });
    }
    if (closeWin && WinToShow && showWin){
      closeWin.addEventListener("click", () => {
        WinToShow.classList.toggle("hidden");
        showWin.classList.toggle("hidden");
        });
    }
    if (winnerNav && showWin && WinToShow) {
      winnerNav.addEventListener("click", () => {
        WinToShow.classList.toggle("hidden");
        showWin.classList.toggle("hidden");
      });
    }
  /*                                                          WINNER TAKES ALL ENDS HERE                               */
  
  
  
  /*                                                          UE5 STARTS HERE                               */
    const closeUe = document.getElementById("closeUe");
    const showUe = document.getElementById("showUe");
    const UeToShow = document.getElementById("UeToShow");
    const ue5Nav = document.getElementById("ue5Nav");
  
    if (showUe && UeToShow) {
      showUe.addEventListener("click", () => {
        UeToShow.classList.toggle("hidden");
        showUe.classList.toggle("hidden");
      });
    }
    if (closeUe && UeToShow && showUe){
      closeUe.addEventListener("click", () => {
        UeToShow.classList.toggle("hidden");
        showUe.classList.toggle("hidden");
        });
    }
    if (ue5Nav && showUe && UeToShow) {
      ue5Nav.addEventListener("click", () => {
        UeToShow.classList.toggle("hidden");
        showUe.classList.toggle("hidden");
      });
    }
  };
  /*                                                          UE5 ENDS HERE                               */
  
  export default toggleText;