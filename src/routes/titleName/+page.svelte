<script lang="ts">
	import '../../style.css';
</script>

<!--NAME LOGO-->
<div class="total2" data-value="-8">
<div class="logoWrap">
	<div class="logo">
		<span style="--i:1">J</span>
		<span style="--i:2">E</span>
		<span style="--i:3">R</span>
		<span style="--i:4">E</span>
		<span style="--i:5">M</span>
		<span style="--i:6">I</span>
		<span style="--i:7">A</span>
		<span style="--i:8">H</span>
	</div>
	<div class="logo2" >
		<span style="--i:10">G</span>
		<span style="--i:11">R</span>
		<span style="--i:12">A</span>
		<span style="--i:13">N</span>
		<span style="--i:14">T</span>
	</div>
</div>
</div>
<style>
@media only screen and (max-width: 600px) {
	div.logo {
	font-size: 2.2rem;
	}
	div.logo2 {
	font-size: 2.2rem;
	}
}
.total2{
	background-size: 100% 120%;
	width: fit-content;
	height: fit-content;
	align-self: center;
	top: 8rem;
	position: relative;
	margin-bottom: 6rem;

}
.logoWrap{
	background-color: transparent;
	border-radius: 1rem; /* 8px */
	border: 0.3rem solid var(--bordercolor);
	width: fit-content;
	height: 100%;
	padding: 1rem;
	font: 1rem 'Montserrat', sans-serif 600;
}
.logo{
	text-align: center;
	font-size: 4rem;
	font-weight: 500;
}
.logo span {
	color: var(--color-header-text);
	/* offset-x | offset-y | blur-radius | color */
	display: inline-block;
	animation: waviy .85s 1;
	animation-delay: calc(.1s * var(--i));
	opacity: 0;
	filter: blur(4px);
	animation-fill-mode: both
}
.logo span:hover{
	animation: wiggle;
	animation-delay: calc(0s * var(--i));
}
.logo2{
	text-align: center;
	font-size: 4rem;
	font-weight: 500;
}
.logo2 span {
	color: var(--color-header-text);
	/* offset-x | offset-y | blur-radius | color */
	display: inline-block;
	animation: waviy .85s 1;
	animation-delay: calc(.1s * var(--i));
	opacity: 0;
	filter: blur(4px);
	animation-fill-mode: both
}
.logo2 span:hover{
	animation: wiggle;
	animation-delay: calc(0s * var(--i));
}


  @keyframes waviy {
	0% {
	  transform: translate3d(0, -200px, 0) rotateY(1deg) ;
	  color: rgb(255,0,0);
	  opacity: .1;
	}  
	8%{
		color: rgb(255,127,0);
	}
	16%{
		color: rgb(255,255,0);
	}
	25%{
		color: rgb(127,255,0);
	}
	33%{
		color: rgb(0,255,0);
	}
	41%{
		color: rgb(0,255,127);
	}
	50%{
		color: rgb(0,255,255);
	}
	58%{
		color: rgb(0,127,255);
	}
	66%{
		color: rgb(0,0,255);
	}
	75%{
		color: rgb(127,0,255);
	}
	83%{
		color: rgb(255,0,255);
	}
	91%{
		color: rgb(255,0,127);
	}
	100% {
	  transition: 2s;
	  transform: translate3d(0, 0px, 0) rotateY(360deg);
	  color: var(--color-header-text);
	  opacity: 1;
	  filter: blur(0);
	}
  }

@-webkit-keyframes -global-slide-in-elliptic-top-fwd {
  0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
  }
}
@keyframes -global-slide-in-elliptic-top-fwd {
  0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
            transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
            transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
            transform-origin: 50% 1400px;
    opacity: 1;
  }
}

</style>