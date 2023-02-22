<script>
	import{
		Canvas
	} from '@threlte/core';
	import SceneOne from '$lib/SceneOne.svelte';
	import SceneTwo from '$lib/SceneTwo.svelte';
</script>

<section>
	<div class="scene tooltip"><span class="tooltiptext">3D model using Blender and threeJS! Give it a drag!</span>
	<div class="logo">
		<Canvas>
			<SceneTwo />
		</Canvas>
	</div>
	</div>
</section>



<style>
	.logo{
		position: relative;
		padding: 1rem 0rem 1rem 1rem;
		width: 4rem;
		height: 4rem;
	}
</style>