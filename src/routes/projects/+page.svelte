<script lang="ts">
    import "../../style.css";
    import './project.css';
	import { Video } from 'flowbite-svelte'
	import Encryption from '../../lib/videos/Encryption.mp4';
	import Encryption2 from '../../lib/videos/Encryption.ogg';
	import Quantum from '../../lib/videos/Quantum.mp4';
	import VehicleMapping from '../../lib/videos/VehicleMapping.mp4';
	import WinnerTakesAll from '../../lib/videos/WinnerTakesAll.mp4';
	import { reveal } from 'svelte-reveal';
</script>





<div class="projectRow">
	<div id="vehicleCard" use:reveal={{ transition: "blur" }}>
		<button class="shadowButton" id="showHierarchy">
			&lt;Vehicle&gt;
		</button>
		<div class="text-gray-200  hidden" id="hierToShow" use:reveal={{ transition: "slide" }}>
			<div class="vehicle-Title">// Vehicle</div>
		<div class="thePara">
			<span class="theBrackets">&lt;Vehicle Hierarchy&gt;</span>
			<br />
			<br />
			Vehicle Hierarchy system based on Angular, SQL & Typescript. 
			<br />
			<br />
			I Created a star schema database system to create a hierarchical mapping system for 100,000 lines of data.
			Designed a front-end tree system to organize this data. 
			<br />
			<br />
			CRUD, dragging & dropping and filtration were created. 
			<br />
			<br />
			Ingress & Egress APIs were used to retrieve the initial data & export the modified data.
			<br />
			<br />
		<button class="animated-button" id="closeHierarchy">
		&lt;/Vehicle Hierarchy&gt;
		</button>
		</div>
		<div class="videoContainer">
			<Video src='{VehicleMapping}' controls  class='w-90 h-auto videoBlurb' trackSrc='flowbite.mp4' />
		</div>
		</div>
	</div>

		<!--QUANTUM COMPUTING-->
	<div id="quantumCard" use:reveal={{ transition: "blur" }}>
		<button class="shadowButton2" id="showQuant">
			&lt;Quantum&gt;
		</button>
		<div class="text-gray-200 hidden" id="QuantToShow" use:reveal={{ transition: "slide" }}>
			<div class="vehicle-Title">// Quantum</div>
			<div class="videoContainer2">
				<Video src='{Quantum}' controls  class='w-90 h-auto videoBlurb' trackSrc='flowbite.mp4' />
		</div>
		<div class="thePara2">
			<span class="theBrackets">&lt;Quantum Computing&gt;</span>
			<br />
			<br />
			Quantum program based on Qiskit.
			<br />
			<br />
			I Designed a quantum program to boost the statistics of guessing randomized outcomes.
			<br />
			<br />
			Used quantum gates and circuits to influence multiple factors to a higher level of certainty. 
			<br />			
			<br />
			Models are based on a simple coin flip, a jar of marbles and a stock index.
			<br />
			<br />
			<button class="animated-button" id="closeQuant">
				&lt;/Quantum Computing&gt;
			</button>
		</div>
		</div>
	</div>

	<!--AWS ENCRYPTED STORAGE-->
	<div id="awsCard" use:reveal={{ transition: "blur" }}>
		<button class="shadowButton" id="showAws">
			&lt;AWS&gt;
		</button>
			<div class="hidden" id="AwsToShow" use:reveal={{ transition: "slide" }}>
				<div class="vehicle-Title">// AWS</div>
			<div class="thePara">
				<span class="theBrackets">&lt;AWS Encrypted Storage&gt;</span>
				<br />
				<br />
				Utilized S3FS, Rivest Cipher 4, OpenSSL & Linux.
				<br />
				<br />
				I Created a filesystem with automatic encryption & decryption to & from the local drive & AWS cloud storage.
				<br />
				<br />
				Designed my own encryption algorithm with salt & no-salt.
				<br />
				<br />
				Automatic encryption & decryption to S3FS from local filesystem.
				<br />
				<br />
				Automatic encryption & decryption to local filesystem from S3FS.
				<br />
				<br />
			<button class="animated-button" id="closeAws">
			&lt;/AWS Encrypted Storage&gt;
		</button>
		</div>
		<div class="videoContainer">
			<Video controls  class='w-90 h-auto videoBlurb' trackSrc='flowbite.mp4'  >
				<source src='{Encryption}' type="video/mp4" />
				<source src='{Encryption2}' type="video/ogg" />
			</Video>
		</div>
		</div>
	</div>


	<!--WINNER TAKES ALL-->
	<div  id="winnerCard" use:reveal={{ transition: "blur" }}>
		<button class="shadowButton2" id="showWin">
			&lt;Winner&gt;
		</button>
			<div class="text-gray-200 hidden" id="WinToShow" use:reveal={{ transition: "slide" }}>
				<div class="vehicle-Title">// Winner</div>
		<div class="videoContainer2">
			<Video src='{WinnerTakesAll}' controls  class='w-90 h-auto videoBlurb' trackSrc='flowbite.mp4' />
		</div>
		<div class="thePara2">
			<span class="theBrackets">&lt;Winner Takes All&gt;</span>
			<br />
			<br />
			Sports betting app relying on Android, Firestore & 2 distinct APIs.
			<br />
			<br />
			I Setup & connected the database to include authentication & storage.
			<br />
			<br />
			Designed a memorable front-end experience.
			<br />
			<br />
			Designed a leaderboard based on incoming API data & the users performance.
			<br />
			<br />
		<button class="animated-button" id="closeWin">
		&lt;/Winner Takes All&gt;
	</button>
	</div>
	</div>
	</div>


	<!--UNREAL ENGINE 5
	<div id="ue5Card" use:reveal={{ transition: "blur" }}>
		<button class="shadowButton" id="showUe">
			&lt;UE5&gt;
		</button>
			<div class="text-gray-200 hidden" id="UeToShow" use:reveal={{ transition: "slide" }}>
				<div class="vehicle-Title">// UE5 </div>
				<div class="thePara">
				<span class="theBrackets">&lt;UE5 Learning&gt;</span>
				<br />
				<br />
				A Side project with Unreal Engine 5 for fun.
				<br />
				<br />
				Spend 45 minutes each day to learn the new engine.
				<br />
				<br />
				An outlet to work on different tech outside of my normal technology stack.
				<br />
				<br />
			<button class="animated-button" id="closeUe">
			&lt;/UE5 Learning&gt;
		</button>
		</div>
		<div class="videoContainer">
			<Video src='' controls  class='w-90 h-auto videoBlurb' trackSrc='flowbite.mp4' />
		</div>
		</div>
	</div>
	-->

	
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

