import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index2.js";
/* empty css                     */import { a as gmail, g as github } from "../../../chunks/gmail.js";
const contact = "";
const linkedin = "/_app/immutable/assets/li-3c0149f2.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
<div class="${"thePara4"}" id="${"contactCard"}"><br>
    <p class="${"theBrackets text-center"}">Let&#39;s build the next big thing!</p>
    <br>
    <form class="${"space-y-8"}" action="${"https://formsubmit.co/jeremiahgrantwork@gmail.com"}" method="${"POST"}"><div class="${"contactForm"}"><label for="${"email"}" class="${"formPrompt"}">Your email</label>
            <input name="${"Email"}" class="${"contactInput"}" placeholder="${"name@flowbite.com"}" required></div>
        <div class="${"contactForm"}"><label for="${"subject"}" class="${"formPrompt"}">Subject</label>
            <input name="${"Subject"}" class="${"contactInput"}" placeholder="${"Main idea!"}" required></div>
        <div class="${"sm:col-span-2 contactForm"}"><label for="${"message"}" class="${"formPrompt"}">Your message</label>
            <textarea name="${"Message"}" rows="${"6"}" class="${"contactInput"}" placeholder="${"What's on your mind?"}" required></textarea></div>
            <button type="${"submit"}" class="${"sendButton"}">Send!</button>
        <br>
        <br></form>
    <p class="${"contactLinks"}"><a href="${"https://www.linkedin.com/in/jeremiah-grant-75a95b25a/"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"tooltip2"}"><img${add_attribute("src", linkedin, 0)} alt="${"linkedin logo"}" class="${"contactPics btn--wiggle"}"><span class="${"tooltiptext2"}">Visit my LinkedIn!</span></a>
        <a href="${"mailto: JeremiahGrantWork@gmail.com"}" target="${"_blank"}" class="${"tooltip2"}"><img${add_attribute("src", gmail, 0)} alt="${"gmail logo"}" class="${"contactPics btn--jump"}"><span class="${"tooltiptext2"}">Email me!</span></a>
        <a href="${"https://github.com/JerGrant"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"tooltip2"}"><img${add_attribute("src", github, 0)} alt="${"github logo"}" class="${"contactPics btn--wiggle"}"><span class="${"tooltiptext2"}">Visit my Github!</span></a></p>
    <br>
    <br></div>`;
});
export {
  Page as default
};
