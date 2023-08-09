import { CiCircleCheck } from "react-icons/ci";

const HomeCta = () => {
  const cta = [
    {
      header: "Join the Indigenous Movement",
      description: [
        "Be a part of our 100% Indigenous-owned conference services that are free from government influence.",
        "Embrace the power of First Nations culture and unity!",
      ],
    },
    {
      header: "Celebrate Cultural Identity",
      description: [
        "Join us in preserving and celebrating Indigenous cultural identity while striving for self-determination.",
        "Our heritage, paired with professional event management, sets the standard for excellence.",
      ],
    },
    {
      header: "Forge Partnerships, Not Just Events",
      description: [
        "Partner with us and fund conferences without relying on government sources.",
        "Shape the agenda and address your organization's specific needs. Let's make your event truly impactful.",
      ],
    },
    {
      header: "Empower Indigenous Independence",
      description: [
        "Support Indigenous independence through private enterprise.",
        "By working together, we can make a lasting impact on Indigenous communities' success and prosperity.",
      ],
    },
  ];

  return (
    <section className="bg-dark_beige text-white">
      <div className="container lg:my-12">
        {cta.map((c) => (
          <div className="mb-5 md:mb-7">
            <div className="flex items-center mb-1 md:mb-2 text-xl md:text-3xl">
              <CiCircleCheck className="mr-1" />
              <span>{c.header}</span>
            </div>
            {c.description.map((desc) => (
              <p className="md:text-2xl mb-1 text-white">{desc}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCta;
