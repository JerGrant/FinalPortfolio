import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/index2.js";
import { g as github, a as gmail } from "../../../chunks/gmail.js";
import Page$1 from "../logo/_page.svelte.js";
/* empty css                     */const linkedin = "/_app/immutable/assets/li-3c0149f2.png";
const header = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header><div class="${"navWrapper"}">${validate_component(Page$1, "LogoData").$$render($$result, {}, {}, {})}
    <a href="${"#aboutCard"}" id="${"aboutNav"}">About</a>
    <a href="${"#skillCard"}" id="${"skillNav"}">Skills</a>
    <div class="${"dropDown"}"><button class="${"dropBtn"}"><span class="${"projectButton"}">Projects
            <span class="${"material-symbols-outlined chevy"}">expand_more
            </span></span></button>
        <div class="${"dropItems"}"><a href="${"#vehicleCard"}" id="${"vehicleNav"}" class="${"dropnavLink"}"><span class="${"material-symbols-outlined car animate__animated"}">directions_car</span>
                Vehicle Hierarchy</a>
            <a href="${"#quantumCard"}" id="${"quantumNav"}" class="${"dropnavLink"}"><span class="${"material-symbols-outlined electron animate__animated"}">blur_on</span>
                Quantum Computing</a>
            <a href="${"#awsCard"}" id="${"awsNav"}" class="${"dropnavLink"}"><span class="${"material-symbols-outlined shield animate__animated"}">security</span>
                AWS Encrypted Storage</a>
            <a href="${"#winnerCard"}" id="${"winnerNav"}" class="${"dropnavLink"}"><span class="${"material-symbols-outlined flag animate__animated"}">sports_score</span>
                Winner Takes All</a>
            <a href="${"#ue5Card"}" id="${"ue5Nav"}" class="${"dropnavLink"}"><span class="${"material-symbols-outlined controller animate__animated"}">stadia_controller</span>
                Unreal Engine 5</a></div></div>
    <a href="${"#contactCard"}" id="${"contactNav"}">Contact</a>
    <div class="${"imgWrapper"}"><a href="${"https://github.com/sveltejs/kit"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"tooltip"}"><img${add_attribute("src", github, 0)} alt="${"GitHub"}"> <span class="${"tooltiptext"}">Visit my Github!</span></a>
        <a href="${"https://www.linkedin.com/in/jeremiah-grant-75a95b25a/"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"tooltip"}"><img${add_attribute("src", linkedin, 0)} alt="${"linkedin"}"> <span class="${"tooltiptext"}">Visit my LinkedIn!</span></a>
        <a href="${"mailto: JeremiahGrantWork@gmail.com"}" target="${"_blank"}" class="${"tooltip"}"><img${add_attribute("src", gmail, 0)} alt="${"gmail"}"> <span class="${"tooltiptext"}">Email me!</span></a></div>

    <div class="${"themeDrop"}"><span class="${"material-symbols-outlined gear animate__animated"}">settings</span>
        <div class="${"themeItems"}"><form class="${"color-picker"}" action="${""}"><fieldset><legend class="${""}">Pick a theme!</legend>
                    <br>
                    <label for="${"theme"}" class="${""}">Metallic:</label>
                    <input type="${"radio"}" name="${"theme"}" id="${"metallic"}">
                    <br>
                    <label for="${"theme"}" class="${""}">Light:</label>
                    <input type="${"radio"}" name="${"theme"}" id="${"light"}">
                    <br>
                    <label for="${"theme"}" class="${""}">Dark:</label>
                    <input type="${"radio"}" name="${"theme"}" id="${"dark"}">
                    <br>
                    <label for="${"theme"}" class="${""}">Smoke:</label>
                    <input type="${"radio"}" name="${"theme"}" id="${"something"}">
                    <br>
                    <label for="${"theme"}" class="${""}">Dyslexia-Friendly:</label>
                    <input type="${"radio"}" name="${"theme"}" id="${"dyslexia"}"></fieldset></form></div></div></div></header>`;
});
export {
  Page as default
};
