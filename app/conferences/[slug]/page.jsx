import CallToAction from "@/components/CallToAction";
import conferencesService from "@/services/conferences";
import ReactMarkdown from "react-markdown";
// import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";

const PageHeader = ({ post }) => {
  const localizedFormat = require("dayjs/plugin/localizedFormat");
  dayjs.extend(localizedFormat);
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1">
          <Image src={post.cover} width={600} height={400} />
          <h1>{post.title}</h1>
          <span>
            🗓️
            {dayjs(post.date.start).format("DD")}
            -
            {dayjs(post.date.end).format("DD MMM YYYY")}
          </span>
          <a href={post.address} target="_blank" rel="noreferrer">
            {post.hotel}
          </a>
        </div>
      </div>
    </section>
  );
};

const page = async ({ params }) => {
  const { post, markdown } = await conferencesService.getConference(
    params.slug,
  );

  console.log(post);
  return (
    <>
      <PageHeader post={post} />
      <section>
        <div className="container markdown">
          <ReactMarkdown
            children={markdown.parent}
          />
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default page;
