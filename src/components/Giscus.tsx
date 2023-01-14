import CONFIG from "morethan-log.config";
import { useEffect } from "react";

//TODO: useRef?

type Props = {
  mapping: string;
};

const Giscus: React.FC<Props> = ({ mapping }) => {
  useEffect(() => {
    const theme = "github-light";
    // 'github-dark'
    const script = document.createElement("script");
    const anchor = document.getElementById("comments");
    if (!anchor) return;

    script.setAttribute("src", "https://giscus.app/client.js");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", `true`);
    script.setAttribute("theme", theme);
    script.setAttribute("repo", "JoungChanok/bulind-log");
    script.setAttribute("repo-id", "R_kgDOIxnfAw");
    script.setAttribute("category", "General");
    script.setAttribute("category-id", "DIC_kwDOIxnfA84CTlth");
    script.setAttribute("mapping", mapping);
    script.setAttribute("strict", "0");
    script.setAttribute("reactions-enabled", "bottom");
    script.setAttribute("lang", "ko");
    script.setAttribute("reactions-enabled", "1");
    script.setAttribute("emit-metadata", "0");

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
