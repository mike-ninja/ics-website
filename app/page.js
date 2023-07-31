// import Image from "next/image";
import ConferencesCards from "@/components/ConferencesCards";
import Header from "@/components/Header";
// Landing Page

// <section>
//   <ConferencesCards />
// </section>;

export default async function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <section className="py-6">
          <div className="p-20 bg-white text-black text-justify rounded-lg">
            <h2 className="p-5 bg-yellow-700 rounded-lg">
              In ALL Indigenous Conference Services (ICS) documents, the term
              First Nations People is used encompassing Aboriginal people,
              Torres Strait Islander people and the Mob -Koorie, Koori,
              Goori,Yolngu, Anangu, Palawa, Murri, All ICS conferences are 100%
              open to First Nations People as well as Non-First Nations People.
              ICS wishes to invite you and your colleagues with an in interest
              in humanities and improving outcomes for First Nations people to
              our next event.
            </h2>
          </div>
        </section>
        <section className="py-6">
          <div className="pb-5">
            <h2 className="text-2xl pb-2">What We Do</h2>
            <p className="text-justify">
              ICS has organised conferences up to 6,500 delegates, festivals up
              to 70,000 over two (2) days and thousands of smaller conferences
              and events. We offer a wide range of services from total event
              management to marketing and even a free of charge service for
              conference venues. One of the most important contributions toward
              a successful event is the correct choice of location and venue.
              Organising an Indigenous specific conference is not the same as
              organising a mainstream event. We believe there are several major
              differences that we adhere too.
            </p>
            <ul className="pt-2 list-decimal">
              <li className="ml-8">Engaging</li>
              <li className="ml-8">Cultural</li>
              <li className="ml-8">
                Working with all the local communities wherever and however
                possible
              </li>
              <li className="ml-8">
                Understanding the communities, the needs of both client and the
                target audience
              </li>
              <li className="ml-8">
                Able to work with both Government & Community Organizations
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl pb-2">Who We Are</h2>
            <p className="text-justify">
              INDIGENOUS CONFERENCE SERVICES (ICS-MEES PTY LTD) is totally 100%
              Indigenous owned. The absolute core and soul of our company is our
              people and culture. We believe that the people who make up ICS
              have a commitment to First Nations affairs both through their work
              life and experiences. Our motto is be positive, be strong, be
              independent, and always walk the walk and talk the talk. Over the
              years, we have built the most experienced Indigenous Conference
              Management team you will find worldwide. Since opening our doors,
              we have clocked up an impressive array of events both within
              Australia and internationally.
            </p>
          </div>
        </section>
        <section className="py-6">
          <h2 className="text-2xl pb-2">Conferences</h2>
          <ConferencesCards />
        </section>
      </div>
    </>
  );
}
