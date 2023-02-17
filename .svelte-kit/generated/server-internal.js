
import root from './root.svelte';
import { set_building, set_paths, set_private_env, set_public_env, set_version } from '../../node_modules/@sveltejs/kit/src/runtime/shared.js';

set_paths({"base":"","assets":""});
set_version("1676667188161");

export const options = {
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null, // added lazily, via `get_hooks`
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\" data-value=\"5\">\n\t<svelte:head>\n\t\t<title>Jeremiah Grant - Programming Portfolio</title>\n\t</svelte:head>\n\t<head>\n\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n\t\t<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\" />\n\t\t<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css\" />\n\t\t<link href=\"/dist/output.css\" rel=\"stylesheet\">\n\t\t<link href=\"./style.css\" rel=\"stylesheet\">\n\t\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Lexend:wght@200;600&family=Montserrat:wght@200;300;600&display=swap\" rel=\"stylesheet\">\n\t\t" + head + "\n\t</head>\n\t<body class=\"total\" data-sveltekit-preload-data=\"hover\" data-value=\"0.8\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\n\t\t<script>\n\t\t\t//THEMEING SCRIPT\n\t\t\tconst colorThemes = document.querySelectorAll('[name=\"theme\"]');\n\t\t\t// store theme\n\t\t\tconst storeTheme = function (theme) {\n\t\t\t\tlocalStorage.setItem(\"theme\", theme);\n\t\t\t};\n\t\t\t// set theme when visitor returns\n\t\t\tconst setTheme = function () {\n\t\t\tconst activeTheme = localStorage.getItem(\"theme\");\n\t\t\tcolorThemes.forEach((themeOption) => {\n\t\t\t\tif (themeOption.id === activeTheme) {\n\t\t\t\tthemeOption.checked = true;\n\t\t\t\t}\n\t\t\t});\n\t\t\t// fallback for no :has() support\n\t\t\tdocument.documentElement.className = activeTheme;\n\t\t\t};\n\t\t\tcolorThemes.forEach((themeOption) => {\n\t\t\tthemeOption.addEventListener(\"click\", () => {\n\t\t\t\tstoreTheme(themeOption.id);\n\t\t\t\t// fallback for no :has() support\n\t\t\t\tdocument.documentElement.className = themeOption.id;\n\t\t\t});\n\t\t\t});\n\t\t\tdocument.onload = setTheme();\n\t\t</script>\n\n\t\t<script type=\"text/javascript\">\n\t\t\t// BACKGROUND MOVEMENT\n\t\t\tdocument.addEventListener(\"mousemove\", parallex);\n\t\t\tfunction parallex(e){\n\t\t\t\tdocument.querySelectorAll(\".total\").forEach(function(move){\n\t\t\t\t\tvar moving_value = move.getAttribute(\"data-value\");\n\t\t\t\t\tvar x = (e.clientX * moving_value) / 120;\n\t\t\t\t\tvar y = (e.clientY * moving_value) / 120;\n\t\t\t\t\tmove.style.transform = \"translateX(\" + x + \"px) translateY(\" + y + \"px)\";\n\t\t\t\t});\n\t\t\t}\n\t\t</script>\n\n\t\t<script type=\"text/javascript\">\n\t\t\t// CURSOR CHANGES\n\t\t\tconst cursor = document.querySelector(\".cursor\");\n\t\t\t// Follow cursor on mousemove\n\t\t\tdocument.addEventListener(\"mousemove\", (e)=>{\n\t\t\t\tlet x = e.pageX;\n\t\t\t\tlet y = e.pageY;\n\t\t\t\tcursor.style.top = y + \"px\";\n\t\t\t\tcursor.style.left = x + \"px\";\n\t\t\t\tcursor.style.display = \"block\";\n\t\t\t\t// Cursor effects on mouse stopped\n\t\t\t\tfunction mouseStopped(){cursor.style.display = \"none\";}\n\t\t\t\tclearTimeout(timeout);\n\t\t\t\ttimeout = setTimeout(mouseStopped, 100);\n\t\t\t});\n\t\t\t// Cursor effects on mouseout\n\t\t\tdocument.addEventListener(\"mouseout\", () => {cursor.style.display = \"none\";});\n\t\t\tdocument.addEventListener(\"mousedown\", () => {cursor.style.background = \"transparent\";});\n\t\t\tdocument.addEventListener(\"mouseup\", () => {cursor.style.background = \"#c9a16f\";});\n\n\t\t\t// Javascript for animate cursor on mouse click\n\t\t\tconst cursorAnimation = document.querySelector(\".cursor\");\n\t\t\tconst cursors = document.querySelectorAll(\".cursor\");\n\n\t\t\tdocument.addEventListener(\"click\", (e)=>{\n\t\t\t\tlet x = e.pageX;\n\t\t\t\tlet y = e.pageY;\n\n\t\t\t\tcursorAnimation.style.top = y + \"px\";\n\t\t\t\tcursorAnimation.style.left = x + \"px\";\n\n\t\t\t\tcursors.forEach((cursor) => {\n\t\t\t\t\tcursor.classList.add(\"active\");\n\n\t\t\t\t\tfunction removeCursorActive(){\n\t\t\t\t\t\tcursor.classList.remove(\"active\");\n\t\t\t\t\t}\n\t\t\t\t\tsetTimeout(removeCursorActive, 100);\n\t\t\t\t});\n\n\t\t\t\tlet cursorClone = cursorAnimation.cloneNode(true);\n\t\t\t\tdocument.querySelector(\".app\").appendChild(cursorClone);\n\t\t\t\tsetTimeout(()=>{\n\t\t\t\t\tcursorClone.remove();\n\t\t\t\t}, 1000);\n\t\t\t});\n\t\t</script>\n\t</body>\n</html>\n\n<style>\n.total{\n\tbackground-color: var(--color-bg-1);\n}\n</style>",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid #ccc;\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	}
};

export function get_hooks() {
	return {};
}

export { set_building, set_paths, set_private_env, set_public_env };
