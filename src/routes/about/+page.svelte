<script lang="ts">
    import "../../style.css";
	import "./about.css";
    import face from '../../lib/face.png';
    import face2 from '../../lib/face2.png';
    import { reveal } from 'svelte-reveal';
</script>



<!--ABOUT & SKILLS-->
<div class="row" use:reveal={{ transition: "blur" }}>

    <div class="flexColumn1" id="aboutCard">
        <button class="shadowButton tooltip" id="showTextButton" ><span class="tooltiptext">Click me!</span>
            &lt;About me&gt;
        </button>
    
        <!--ABOUT SECTION-->
            <div class="hidden" id="textToShow" use:reveal={{ transition: "slide" }}>
                <div class="about-Title">// About</div>
                <div class="thePara3">
                    <div class="faceContainer">
                        <div class="facePic" />
                    </div>
                    <div class="p-5">
                        <h5 class="theBrackets">&lt;About me&gt;</h5>
                        <p class="mb-3 aboutPara">Hi there! I'm Jeremiah Grant, a 26-year-old Full-stack Developer based out of Detroit.
                            <br />
                            <br />
                            I enjoy <span class="redText">resolving</span> design problems, 
                            <span class="redText">creating</span> intuitive solutions and 
                            <span class="redText">building</span> upon my knowledge.
                            <br />
                            <br />
                            <button class="animated-button" id="closeTextButton">&lt;/About me&gt;</button>
                        </p>
                    </div>
                </div>
            </div>
    </div>

    <div class="flexColumn2" id="skillCard"> 
        <button class="shadowButton3" id="showSkills">
            &lt;Skills&gt;
        </button>
            <div id="skillsToShow" class="hidden" use:reveal={{ transition: "slide" }}>
                <div class="skill-Title">// Skills</div>
                <div class="thePara5">
                    <h2 class="theBrackets">&lt;Skills&gt;</h2>
                    <ul class="list-none">
                    <li class="mb-4">
                        <p class="skillText">CLI/GIT/GCC</p>
                        <div class="skillBar">
                            <div class="skillFull1"></div>
                        </div>
                    </li>          
                    <li class="mb-4">
                        <p class="skillText">CSS/HTML</p>
                        <div class="skillBar">
                            <div class="skillFull1"></div>
                        </div>
                    </li>    
                    <li class="mb-4">
                        <p class="skillText">C</p>
                        <div class="skillBar">
                            <div class="skillFull2"></div>
                        </div>
                    </li>           
                    <li class="mb-4">
                    <p class="skillText">C++</p>
                    <div class="skillBar">
                        <div class="skillFull2"></div>
                    </div>
                    </li>            
                    <li class="mb-4">
                    <p class="skillText">TypeScript</p>
                    <div class="skillBar">
                        <div class="skillFull2"></div>
                    </div>
                    </li>            
                    <li class="mb-4">
                        <p class="skillText">Javascript</p>
                        <div class="skillBar">
                            <div class="skillFull2"></div>
                        </div>
                    </li>        
                    <li class="mb-4">
                        <p class="skillText">Linux/Unix</p>
                        <div class="skillBar">
                            <div class="skillFull2"></div>
                        </div>
                    </li>	          
                    <li class="mb-4">
                        <p class="skillText">C#</p>
                        <div class="skillBar">
                            <div class="skillFull3"></div>
                        </div>
                    </li>        
                    <li class="mb-4">
                    <p class="skillText">Android</p>
                    <div class="skillBar">
                        <div class="skillFull3"></div>
                    </div>
                    </li>    
                    <li class="mb-4">
                    <p class="skillText">SQL Server</p>
                    <div class="skillBar">
                        <div class="skillFull3"></div>
                    </div>
                    </li>      
                    <li class="mb-4">
                    <p class="skillText">AWS</p>
                    <div class="skillBar">
                        <div class="skillFull4"></div>
                    </div>
                    </li>           
                    <li class="mb-4">
                    <p class="skillText">PHP</p>
                    <div class="skillBar">
                        <div class="skillFull5"></div>
                    </div>
                    </li>
                    <br />
                        <button class="animated-button" id="closeSkills">&lt;/Skills&gt;</button>
                    </ul>
                </div>
            </div>
        </div>    
</div>

<style>



	@keyframes -global-from-left {
	0% {
	  transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
	  opacity: 1;
	}
	100% {
	  transform: rotateX(0deg) translateX(0) skewX(0deg);
	  opacity: 1;
	}
  }


 @-webkit-keyframes -global-puff-in-hor {
  0% {
    -webkit-transform: scaleX(2);
            transform: scaleX(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes -global-puff-in-hor {
  0% {
    -webkit-transform: scaleX(2);
            transform: scaleX(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}


 @-webkit-keyframes -global-puff-in-ver {
  0% {
    -webkit-transform: scaleY(2);
            transform: scaleY(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes -global-puff-in-ver {
  0% {
    -webkit-transform: scaleY(2);
            transform: scaleY(2);
    -webkit-filter: blur(4px);
            filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}

</style>