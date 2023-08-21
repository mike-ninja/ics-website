import CallToAction from "@/components/CallToAction";
import conferencesService from "@/services/conferences";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";
import Image from "next/image";
import FooterContact from "@/components/FooterContact";
import remarkGfm from "remark-gfm";

const PageHeader = ({ post }) => {
  const localizedFormat = require("dayjs/plugin/localizedFormat");
  dayjs.extend(localizedFormat);
  return (
    <div>
      <div className="w-full h-[65vh] min-h-[500px] relative">
        <div className="rounded-md text-dark_brown z-10 bg-off_white p-4 md:p-10 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[90%] md:w-max">
          <h1 className="text-lg md:text-3xl lg:text-5xl font-semibold tracking-wide text-center">
            {post.title}
          </h1>
        </div>
        <Image
          src={post.cover}
          fill
          style={{ objectFit: "cover", objectPosition: "50% 50%" }}
          className="z-0"
        />
      </div>
    </div>
  );
};

const page = async ({ params }) => {
  const { post, markdown } = await conferencesService.getConference(
    params.slug,
  );

  return (
    <>
      <PageHeader post={post} />
      <article>
        <div className="container grid grid-cols-1 md:grid-cols-3 mt-4 lg:my-12">
          <div className="text-center">
            <span className="text-xl underline underline-offset-[6px]">
              🗓️&nbsp;
              {dayjs(post.date.start).format("DD")}
              &nbsp;-&nbsp;
              {dayjs(post.date.end).format("DD MMMM YYYY")}
            </span>
          </div>
          <div className="text-center underline underline-offset-[6px]">
            <a
              href={post.address}
              target="_blank"
              rel="noreferrer"
              className="text-xl"
            >
              {post.hotel}
            </a>
          </div>
          <div className="text-center underline underline-offset-[6px]">
            <a
              href={post.address}
              target="_blank"
              rel="noreferrer"
              className="text-xl"
            >
              ⏰&nbsp;View Schedule
            </a>
          </div>
        </div>
        <div className="container markdown">
          <ReactMarkdown
            children={markdown.parent}
            remarkPlugins={[remarkGfm]}
          />
        </div>
        <div className="container">
          <div className="transition-all hover:scale-105 text-center py-6 lg:py-12">
            <a
              href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAa__ZvvzOdUOFJaVzVPRTUxRjhPT0dVV0lJTlNaRzg5Uy4u"
              target="_blank"
              rel="noreferrer"
              className="underline text-3xl text-light_blue uppercase"
            >
              Register Now
            </a>
          </div>
        </div>
      </article>
      <CallToAction />
      <FooterContact />
    </>
  );
};

export default page;
