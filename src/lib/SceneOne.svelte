<script>
    import{
        PerspectiveCamera,
        DirectionalLight,
        AmbientLight,
        Mesh,
        useFrame
    } from '@threlte/core';
    import{
        MeshStandardMaterial,
        IcosahedronGeometry,
		Material,
    } from 'three';
    import{tweened} from 'svelte/motion';

    const t = tweened(3, {duration: 2000});
    setTimeout(() => t.set(-3))
    let r=0;
    useFrame(() =>{
        r+=0.05;
    })
</script>

<PerspectiveCamera 
position={{ x:0, y:0, z:10 }} 
lookAt={{ x:0, y:0, z:0}}>

</PerspectiveCamera>

<DirectionalLight />
<AmbientLight />

<!-- svelte-ignore missing-declaration -->
<Mesh geometry={ new IcosahedronGeometry() } 
material={ new MeshStandardMaterial({color: 'seagreen'})}
position={{x:$t }} 
rotation={{ y:r}}
interactive on:click={() => $t = $t > 0 ? -3 : 3}
/><!--scale={$t}-->