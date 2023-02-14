import { c as create_ssr_component, e as compute_rest_props, f as spread, g as escape_object, h as escape_attribute_value, d as add_attribute, v as validate_component } from "../../../chunks/index2.js";
/* empty css                     */import classNames from "classnames";
const project = "";
const Thumbnail_svelte_svelte_type_style_lang = "";
const Indicator_svelte_svelte_type_style_lang = "";
const Video = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "type", "trackSrc", "srclang", "label"]);
  let { src } = $$props;
  let { type = "video/mp4" } = $$props;
  let { trackSrc = "" } = $$props;
  let { srclang = "en" } = $$props;
  let { label = "english_captions" } = $$props;
  let videoClass = classNames($$props.class);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.trackSrc === void 0 && $$bindings.trackSrc && trackSrc !== void 0)
    $$bindings.trackSrc(trackSrc);
  if ($$props.srclang === void 0 && $$bindings.srclang && srclang !== void 0)
    $$bindings.srclang(srclang);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  return `<video${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(videoClass)
      }
    ],
    {}
  )}><source${add_attribute("src", src, 0)}${add_attribute("type", type, 0)}>${slots.default ? slots.default({}) : ``}<track${add_attribute("src", trackSrc, 0)} kind="${"captions"}"${add_attribute("srclang", srclang, 0)}${add_attribute("label", label, 0)}>
  Your browser does not support the video tag.
</video>`;
});
const Encryption = "/_app/immutable/assets/Encryption-86c34db0.mp4";
const Quantum = "/_app/immutable/assets/Quantum-b5457b41.mp4";
const VehicleMapping = "/_app/immutable/assets/VehicleMapping-0e48228a.mp4";
const WinnerTakesAll = "/_app/immutable/assets/WinnerTakesAll-ef2d24b4.mp4";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes from-left{0%{transform:rotateX(50deg) translateX(-200vw) skewX(-50deg);opacity:1}100%{transform:rotateX(0deg) translateX(0) skewX(0deg);opacity:1}}@keyframes puff-in-hor{0%{transform:scaleX(2);filter:blur(4px);opacity:0}100%{transform:scaleX(1);filter:blur(0px);opacity:1}}@keyframes puff-in-ver{0%{transform:scaleY(2);filter:blur(4px);opacity:0}100%{transform:scaleY(1);filter:blur(0px);opacity:1}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"projectRow"}"><div id="${"vehicleCard"}"><button class="${"shadowButton"}" id="${"showHierarchy"}">&lt;Vehicle&gt;
		</button>
		<div class="${"text-gray-200 hidden"}" id="${"hierToShow"}"><div class="${"vehicle-Title"}">// Vehicle</div>
		<div class="${"thePara"}"><span class="${"theBrackets"}">&lt;Vehicle Hierarchy&gt;</span>
			<br>
			<br>
			Vehicle Hierarchy system based on Angular, SQL &amp; Typescript. 
			<br>
			<br>
			I Created a star schema database system to create a hierarchical mapping system for 100,000 lines of data.
			Designed a front-end tree system to organize this data. 
			<br>
			<br>
			CRUD, dragging &amp; dropping and filtration were created. 
			<br>
			<br>
			Ingress &amp; Egress APIs were used to retrieve the initial data &amp; export the modified data.
			<br>
			<br>
		<button class="${"animated-button"}" id="${"closeHierarchy"}">&lt;/Vehicle Hierarchy&gt;
		</button></div>
		<div class="${"videoContainer"}">${validate_component(Video, "Video").$$render(
    $$result,
    {
      src: VehicleMapping,
      controls: true,
      class: "w-90 h-auto videoBlurb",
      trackSrc: "flowbite.mp4"
    },
    {},
    {}
  )}</div></div></div>

		
	<div id="${"quantumCard"}"><button class="${"shadowButton2"}" id="${"showQuant"}">&lt;Quantum&gt;
		</button>
		<div class="${"text-gray-200 hidden"}" id="${"QuantToShow"}"><div class="${"vehicle-Title"}">// Quantum</div>
			<div class="${"videoContainer2"}">${validate_component(Video, "Video").$$render(
    $$result,
    {
      src: Quantum,
      controls: true,
      class: "w-90 h-auto videoBlurb",
      trackSrc: "flowbite.mp4"
    },
    {},
    {}
  )}</div>
		<div class="${"thePara2"}"><span class="${"theBrackets"}">&lt;Quantum Computing&gt;</span>
			<br>
			<br>
			Quantum program based on Qiskit.
			<br>
			<br>
			I Designed a quantum program to boost the statistics of guessing randomized outcomes.
			<br>
			<br>
			Used quantum gates and circuits to influence multiple factors to a higher level of certainty. 
			<br>			
			<br>
			Models are based on a simple coin flip, a jar of marbles and a stock index.
			<br>
			<br>
			<button class="${"animated-button"}" id="${"closeQuant"}">&lt;/Quantum Computing&gt;
			</button></div></div></div>

	
	<div id="${"awsCard"}"><button class="${"shadowButton"}" id="${"showAws"}">&lt;AWS&gt;
		</button>
			<div class="${"hidden"}" id="${"AwsToShow"}"><div class="${"vehicle-Title"}">// AWS</div>
			<div class="${"thePara"}"><span class="${"theBrackets"}">&lt;AWS Encrypted Storage&gt;</span>
				<br>
				<br>
				Utilized S3FS, Rivest Cipher 4, OpenSSL &amp; Linux.
				<br>
				<br>
				I Created a filesystem with automatic encryption &amp; decryption to &amp; from the local drive &amp; AWS cloud storage.
				<br>
				<br>
				Designed my own encryption algorithm with salt &amp; no-salt.
				<br>
				<br>
				Automatic encryption &amp; decryption to S3FS from local filesystem.
				<br>
				<br>
				Automatic encryption &amp; decryption to local filesystem from S3FS.
				<br>
				<br>
			<button class="${"animated-button"}" id="${"closeAws"}">&lt;/AWS Encrypted Storage&gt;
		</button></div>
		<div class="${"videoContainer"}">${validate_component(Video, "Video").$$render(
    $$result,
    {
      src: Encryption,
      controls: true,
      class: "w-90 h-auto videoBlurb",
      trackSrc: "flowbite.mp4"
    },
    {},
    {}
  )}</div></div></div>


	
	<div id="${"winnerCard"}"><button class="${"shadowButton2"}" id="${"showWin"}">&lt;Winner&gt;
		</button>
			<div class="${"text-gray-200 hidden"}" id="${"WinToShow"}"><div class="${"vehicle-Title"}">// Winner</div>
		<div class="${"videoContainer2"}">${validate_component(Video, "Video").$$render(
    $$result,
    {
      src: WinnerTakesAll,
      controls: true,
      class: "w-90 h-auto videoBlurb",
      trackSrc: "flowbite.mp4"
    },
    {},
    {}
  )}</div>
		<div class="${"thePara2"}"><span class="${"theBrackets"}">&lt;Winner Takes All&gt;</span>
			<br>
			<br>
			Sports betting app relying on Android, Firestore &amp; 2 distinct APIs.
			<br>
			<br>
			I Setup &amp; connected the database to include authentication &amp; storage.
			<br>
			<br>
			Designed a memorable front-end experience.
			<br>
			<br>
			Designed a leaderboard based on incoming API data &amp; the users performance.
			<br>
			<br>
		<button class="${"animated-button"}" id="${"closeWin"}">&lt;/Winner Takes All&gt;
	</button></div></div></div>


	
	<div id="${"ue5Card"}"><button class="${"shadowButton"}" id="${"showUe"}">&lt;UE5&gt;
		</button>
			<div class="${"text-gray-200 hidden"}" id="${"UeToShow"}"><div class="${"vehicle-Title"}">// UE5 </div>
				<div class="${"thePara"}"><span class="${"theBrackets"}">&lt;UE5 Learning&gt;</span>
				<br>
				<br>
				A Side project with Unreal Engine 5 for fun.
				<br>
				<br>
				Spend 45 minutes each day to learn the new engine.
				<br>
				<br>
				An outlet to work on different tech outside of my normal technology stack.
				<br>
				<br>
			<button class="${"animated-button"}" id="${"closeUe"}">&lt;/UE5 Learning&gt;
		</button></div>
		<div class="${"videoContainer"}">${validate_component(Video, "Video").$$render(
    $$result,
    {
      src: "",
      controls: true,
      class: "w-90 h-auto videoBlurb",
      trackSrc: "flowbite.mp4"
    },
    {},
    {}
  )}</div></div></div>
</div>`;
});
export {
  Page as default
};
