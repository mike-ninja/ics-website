import CallToAction from "@/components/CallToAction";
import conferencesService from "@/services/conferences";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";
import Image from "next/image";

const PageHeader = ({ post }) => {
  const localizedFormat = require("dayjs/plugin/localizedFormat");
  dayjs.extend(localizedFormat);
  return (
    <div>
      <div className="w-full h-[60vh] max-h-[500px] relative">
        <div className="rounded-3xl text-dark_brown z-10 bg-off_white p-4 md:p-10 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[90%] md:w-max">
          <h1 className="text-lg md:text-3xl font-semibold tracking-wide text-center">{post.title}</h1>
        </div>
        <Image
          src={post.cover}
          fill
          style={{ objectFit: "cover", objectPosition: "50% 30%" }}
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

  // <div>
  //   <span className="text-xl">
  //     🗓️&nbsp;
  //     {dayjs(post.date.start).format("DD")}
  //     &nbsp;-&nbsp;
  //     {dayjs(post.date.end).format("DD MMMM YYYY")}
  //   </span>
  // </div>
  // <a
  //   href={post.address}
  //   target="_blank"
  //   rel="noreferrer"
  //   className="text-xl"
  // >
  //   {post.hotel}
  // </a>
  // console.log(post);
  return (
    <>
      <PageHeader post={post} />
      <section>
        <div className="container markdown">
          <ReactMarkdown
            children={markdown.parent}
          />
        </div>
        <div className="container">
          <div className="transition-all hover:scale-105 text-center py-6">
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="underline text-3xl text-light_blue "
            >
              Register
            </a>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default page;
