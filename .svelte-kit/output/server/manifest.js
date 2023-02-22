export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Encryption.mp4","Encryption.ogg","favicon.png","github.png","gmail.png","jg.glb","li.png","Quantum.mp4","VehicleMapping.mp4","WinnerTakesAll.mp4"]),
	mimeTypes: {".mp4":"video/mp4",".ogg":"audio/ogg",".png":"image/png",".glb":"model/gltf-binary"},
	_: {
		entry: {"file":"_app/immutable/start-3aa88c5d.js","imports":["_app/immutable/start-3aa88c5d.js","_app/immutable/chunks/index-448d1993.js","_app/immutable/chunks/singletons-740c950e.js","_app/immutable/chunks/index-3c417924.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Header",
				pattern: /^\/Header\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/footer",
				pattern: /^\/footer\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/logo",
				pattern: /^\/logo\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/titleName",
				pattern: /^\/titleName\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
