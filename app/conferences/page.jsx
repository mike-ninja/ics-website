import ConferencesCards from "@/components/ConferencesCards";
import ConferencesHeader from "@/components/conferences/ConferencesHeader";

// /post

const page = () => {
  return (
    <>
      <ConferencesHeader />
      <section>
        <div className="container">
          <h2 className="text-center text-5xl text-dark_beige">About ICS</h2>
          <h3 className="text-center mb-8 text-3xl italic font-thin text-dark_brown">
            Building better future together
          </h3>
          <ConferencesCards />
        </div>
      </section>
    </>
  );
};

export default page;
