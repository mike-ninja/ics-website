import conferencesService from "@/services/conferences";
import ReactMarkdown from "react-markdown";

const page = async ({ params }) => {
  const conference = await conferencesService.getConference(params.slug);

  return (
    <>
      Conference Page
      <ReactMarkdown>{conference.markdown.parent}</ReactMarkdown>
    </>
  );
};

export default page;
