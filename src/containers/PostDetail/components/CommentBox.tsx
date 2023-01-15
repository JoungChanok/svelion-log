import { TPost } from "@/src/types";
import CONFIG from "svelion-log.config";
import dynamic from "next/dynamic";

const GiscusComponent = dynamic(
  () => {
    return import("@/src/components/Giscus");
  },
  { ssr: false }
);

type Props = {
  data: TPost;
};

const CommentBox: React.FC<Props> = ({ data }) => {
  return <div>{CONFIG.giscus.enable && <GiscusComponent mapping={data.id} />}</div>;
};

export default CommentBox;
