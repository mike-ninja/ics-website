import conferencesService from "@/services/conferences";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const PageHeader = ({ cover }) => {
  return (
    <div className="my-3">
      <img src={cover} />
    </div>
  );
};

const page = async ({ params }) => {
  const { post, markdown } = await conferencesService.getConference(
    params.slug,
  );

  console.log(markdown.parent)
  return (
    <>
      <div className="container markdown">
        <PageHeader cover={post.cover} />
        <ReactMarkdown
          children={markdown.parent}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </>
  );
};

export default page;
