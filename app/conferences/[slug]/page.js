import conferencesService from "@/services/conferences";
import ReactMarkdown from "react-markdown";

const page = async ({ params }) => {
  const conference = await conferencesService.getConference(params.slug);
  console.log(conference.markdown);
  return (
    <>
      <div className="container markdown">
        <ReactMarkdown>
          {conference.markdown.parent}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default page;
