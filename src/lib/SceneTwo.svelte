<script>
    import{
        PerspectiveCamera,
        DirectionalLight,
        AmbientLight,
        OrbitControls,
    } from '@threlte/core';
    import{GLTF, useGltf} from '@threlte/extras';
    const url="jg.glb?url";

</script>

<PerspectiveCamera 
position={{ x:0, y:0, z:8 }} 
lookAt={{ x:0, y:0, z:0}}>

    <OrbitControls  autoRotate enableZoom={false} enablePan={false} />
</PerspectiveCamera>

<DirectionalLight />
<AmbientLight color='white' intensity={6} />

<GLTF {url} scale={25} position={{ x:0, y:0, z:0 }}
receiveShadow
castShadow
viewportAware
useDraco={true}
/>
