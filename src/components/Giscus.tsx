import CONFIG from "morethan-log.config";
import { useEffect } from "react";

//TODO: useRef?

type Props = {
  mapping: string;
};

const Giscus: React.FC<Props> = ({ mapping }) => {
  useEffect(() => {
    var getTheme = window.localStorage && window.localStorage.getItem("theme");
    getTheme = getTheme == null ? "{{$.Site.Params.defaultTheme}}" : getTheme;
    const script = document.createElement("script");
    const anchor = document.getElementById("comments");
    if (!anchor) return;

    let theme = getTheme === "dark" ? "dark_dimmed" : "light";
    script.setAttribute("src", "https://giscus.app/client.js");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", `true`);
    script.setAttribute("data-theme", theme);
    script.setAttribute("data-repo", "JoungChanok/bulind-log");
    script.setAttribute("data-repo-id", "R_kgDOIxnfAw");
    script.setAttribute("data-category", "Giscus");
    script.setAttribute("data-category-id", "DIC_kwDOIxnfA84CTlui");
    script.setAttribute("data-mapping", mapping);
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-lang", "ko");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-emit-metadata", "0");

    const config: { [key: string]: string } = CONFIG.giscus.config;
    Object.keys(config).forEach((key) => {
      script.setAttribute(key, config[key]);
    });
    anchor.appendChild(script);
    return () => {
      anchor.innerHTML = "";
    };
  });
  return (
    <>
      <div id="comments" className="md:-ml-16">
        <div className="giscus-frame"></div>
      </div>
    </>
  );
};

export default Giscus;
