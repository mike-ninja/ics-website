import conferencesService from "@/services/conferences";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const page = async ({ params }) => {
  const conference = await conferencesService.getConference(params.slug);
  console.log(conference.markdown);
  return (
    <>
      <div className="container markdown">
        <ReactMarkdown children={conference.markdown.parent} remarkPlugins={[remarkGfm]} />
      </div>
    </>
  );
};

export default page;
