import conferencesService from "@/services/conferences";
import { NotionRenderer } from "@notion-render/client";

const page = async ({ params }) => {
  const conference = await conferencesService.getConference(params.slug);

  if (!conference) {
    return <div>Not found...</div>;
  }

  const blocks = await conferencesService.getConferenceBlocks(conference.id);
  const renderer = new NotionRenderer({
    client: conferencesService.notion,
  });
  const html = await renderer.render(...blocks);

  console.log("before");
  console.log(blocks);
  // return (
  //   <div>
  //     Conference Page
  //     {params.slug}
  //   </div>
  // );
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default page;
