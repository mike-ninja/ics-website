import Link from "next/link";

const HomeAbout = () => {
  return (
    <section>
      <div className="container grid gap-3 lg:grid-cols-2 items-center">
        <div className="h-[400px] flex my-3">
          <div className="bg-[url('/assets/images/about-img-1.jpg')] bg-cover bg-center w-1/2 h-full translate-y-[10px] translate-x-[3px] rounded transition-all hover:scale-105 hover:z-10">
          </div>
          <div className="bg-[url('/assets/images/about-img-2.jpg')] bg-cover bg-center w-1/2 h-full translate-y-[-10px] translate-x-[-3px] rounded transition-all hover:scale-105 ">
          </div>
        </div>
        <div>
          <h2>About ICS</h2>
          <div className="h-[2px] w-20 bg-dark_brown mb-2"></div>
          <div>
            <div className="inline-block">
              <p>
                INDIGENOUS CONFERENCE SERVICES is an Indigenous-owned company
                operating independently and without government funding. They
                prioritize First Nations culture and self-determination. With a
                skilled team, they manage various events for community
                organizations, focusing on promoting Indigenous identity,
                education, and partnerships. By funding conferences through
                partnerships, they avoid government funding and support agenda
                customization. CEO Tom Callaghan specializes in working with
                NGOs and governments. Their conferences facilitate positive
                information sharing, cooperation, and discussions, emphasizing
                face-to-face networking for empowerment and community
                enhancement.
              </p>
              <Link href="/about" className="btn btn_primary">
                Find Out More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
