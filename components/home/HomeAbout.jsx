import Link from "next/link";
import { BiSolidRightArrow } from "react-icons/bi";

const HomeAbout = () => {
  return (
    <section className="bg-light_beige">
      <div className="container grid gap-3 lg:gap-10 lg:grid-cols-2 items-center">
        <div>
          <h2 className="text-light_blue">About ICS</h2>
          <div className="flex text-metal_gray items-center mb-3">
            <BiSolidRightArrow />
            <h3>
              Indigenous Conference Services
            </h3>
          </div>
          <div>
            <div className="inline-block">
              <p>
                ICS is an Indigenous-owned company operating independently and
                without government funding. They prioritize First Nations
                culture and self-determination. With a skilled team, they manage
                various events for community organizations, focusing on
                promoting Indigenous identity, education, and partnerships. By
                funding conferences through partnerships, they avoid government
                funding and support agenda customization.
              </p>
              <p>
                CEO Tom Callaghan specializes in working with NGOs and
                governments. Their conferences facilitate positive information
                sharing, cooperation, and discussions, emphasizing face-to-face
                networking for empowerment and community enhancement.
              </p>
              <Link href="/about" className="btn btn_blue">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[400px] flex my-3 bg-dark_beige rounded">
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
