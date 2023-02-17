import { c as create_ssr_component, s as setContext, v as validate_component, m as missing_component } from "./index2.js";
let assets = "";
let base = "";
let version = "";
let public_env = {};
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
function set_building(value) {
}
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_version(value) {
  version = value;
}
function afterUpdate() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  {
    stores.page.set(page);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0 }, {}, {
    default: () => {
      return `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, form }, {}, {})}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, form }, {}, {})}`}

${``}`;
});
set_paths({ "base": "", "assets": "" });
set_version("1676670179874");
const options = {
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  // added lazily, via `get_hooks`
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en" data-value="5">\n	<svelte:head>\n		<title>Jeremiah Grant - Programming Portfolio</title>\n	</svelte:head>\n	<head>\n\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n		<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />\n		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />\n		<link href="/dist/output.css" rel="stylesheet">\n		<link href="./style.css" rel="stylesheet">\n		<link rel="preconnect" href="https://fonts.googleapis.com">\n		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n		<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@200;600&family=Montserrat:wght@200;300;600&display=swap" rel="stylesheet">\n		' + head + '\n	</head>\n	<body class="total" data-sveltekit-preload-data="hover" data-value="0.8">\n		<div style="display: contents">' + body + `</div>

		<script>
			//THEMEING SCRIPT
			const colorThemes = document.querySelectorAll('[name="theme"]');
			// store theme
			const storeTheme = function (theme) {
				localStorage.setItem("theme", theme);
			};
			// set theme when visitor returns
			const setTheme = function () {
			const activeTheme = localStorage.getItem("theme");
			colorThemes.forEach((themeOption) => {
				if (themeOption.id === activeTheme) {
				themeOption.checked = true;
				}
			});
			// fallback for no :has() support
			document.documentElement.className = activeTheme;
			};
			colorThemes.forEach((themeOption) => {
			themeOption.addEventListener("click", () => {
				storeTheme(themeOption.id);
				// fallback for no :has() support
				document.documentElement.className = themeOption.id;
			});
			});
			document.onload = setTheme();
		<\/script>

		<script type="text/javascript">
			// BACKGROUND MOVEMENT
			document.addEventListener("mousemove", parallex);
			function parallex(e){
				document.querySelectorAll(".total").forEach(function(move){
					var moving_value = move.getAttribute("data-value");
					var x = (e.clientX * moving_value) / 120;
					var y = (e.clientY * moving_value) / 120;
					move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
				});
			}
		<\/script>

		<script type="text/javascript">
			// CURSOR CHANGES
			const cursor = document.querySelector(".cursor");
			// Follow cursor on mousemove
			document.addEventListener("mousemove", (e)=>{
				let x = e.pageX;
				let y = e.pageY;
				cursor.style.top = y + "px";
				cursor.style.left = x + "px";
				cursor.style.display = "block";
				// Cursor effects on mouse stopped
				function mouseStopped(){cursor.style.display = "none";}
				clearTimeout(timeout);
				timeout = setTimeout(mouseStopped, 100);
			});
			// Cursor effects on mouseout
			document.addEventListener("mouseout", () => {cursor.style.display = "none";});
			document.addEventListener("mousedown", () => {cursor.style.background = "transparent";});
			document.addEventListener("mouseup", () => {cursor.style.background = "#c9a16f";});

			// Javascript for animate cursor on mouse click
			const cursorAnimation = document.querySelector(".cursor");
			const cursors = document.querySelectorAll(".cursor");

			document.addEventListener("click", (e)=>{
				let x = e.pageX;
				let y = e.pageY;

				cursorAnimation.style.top = y + "px";
				cursorAnimation.style.left = x + "px";

				cursors.forEach((cursor) => {
					cursor.classList.add("active");

					function removeCursorActive(){
						cursor.classList.remove("active");
					}
					setTimeout(removeCursorActive, 100);
				});

				let cursorClone = cursorAnimation.cloneNode(true);
				document.querySelector(".app").appendChild(cursorClone);
				setTimeout(()=>{
					cursorClone.remove();
				}, 1000);
			});
		<\/script>
	</body>
</html>

<style>
.total{
	background-color: var(--color-bg-1);
}
</style>`,
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  }
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_building as c,
  set_paths as d,
  set_private_env as e,
  get_hooks as g,
  options as o,
  public_env as p,
  set_public_env as s,
  version as v
};
