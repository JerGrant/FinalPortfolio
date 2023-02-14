<script lang="ts">
    import { browser } from '$app/environment'
    import * as Threlte from '@threlte/core';
    import * as Extra from '@threlte/extras';
    import type { Object3D } from 'three';

    // 3D LOGO
  let inViewport: any
  const onViewportEnter = (e: CustomEvent<Object3D>) => {
    console.log('PointLight entered the viewport.')
  }
  const onViewportLeave = (e: CustomEvent<Object3D>) => {
    console.log('PointLight left the viewport.')
  }
  </script>
  
  <div class="scene tooltip"><span class="tooltiptext">3D model using Blender and threeJS! Give it a drag!</span>


<!-- The <Canvas> is where the magic happens and where things get rendered on the screen. --> 
    <Threlte.Canvas>
        <!-- I’m using a <PerspectiveCamera> that’s slightly above the mesh with a set field of view -->
      <!-- Camera -->
      <Threlte.PerspectiveCamera position={{ x:5, y:5, z:5 }} fov={35}
      viewportAware
      bind:inViewport>
        <!-- Controls -->
        <Threlte.OrbitControls autoRotate enableZoom={false} enablePan={false} />
      </Threlte.PerspectiveCamera>
  <!-- The <AmbientLight> is going to equally light your scene, think of it as cheap global illumination -->
      <!-- Lights the scene equally -->
      <Threlte.AmbientLight color="blue" intensity={5} />
<!--The <DirectionalLight> is more like a sun in your scene that also casts a shadow (the shadow camera also has to be adjusted)-->
      <!-- Light that casts a shadow -->
      <Threlte.DirectionalLight
      viewportAware
      bind:inViewport
        color="white"
        intensity={5}
        shadow={{
          camera: { top: 20 },
        }}

      />

<!--The sphere uses <Threlte.Mesh> where you can set the geometry and material for the mesh including casting shadows-->
      <!-- Sphere -->

      <Extra.GLTF url="../../src/lib/jglogo.glb"
      position={{ y:-2 }}
      receiveShadow
      castShadow
      viewportAware
      bind:inViewport
      />
      <!-- Floor -->


    </Threlte.Canvas>
  </div>

