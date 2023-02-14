import type { PageLoad } from './$types';

export const load = (async () => {
    return {
        fetch: `../../lib/jglogo.glb`,
        
    };
}) satisfies PageLoad;