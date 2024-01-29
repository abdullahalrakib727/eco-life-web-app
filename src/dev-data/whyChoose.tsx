type pros = {
  image: string;
  heading: string | React.ReactNode;
  description: string;
};

const data: pros[] = [
  {
    image: "/group1.png",
    heading: "Diverse Eco-Friendly Products",
    description:
      "Explore eco-friendly products, from sustainable fashion to green home essentials, for a variety of environmentally responsible options.",
  },
  {
    image: "/group2.png",
    heading: "Commitment to Sustainability",
    description:
      "We prioritize sustainability, partnering with like-minded brands to reduce environmental impact and build a greener future",
  },
  {
    image: "/group3.png",
    heading: "Expertise and Education",
    description:
      "Join our eco-conscious community for more than just shopping. Get informed with empowering articles to make sustainable choices.",
  },
  {
    image: "/group4.png",
    heading: (
      <>
        Long lasting <br /> impact
      </>
    ),
    description:
      "You're not just shopping; Your purchases create a positive, lasting impact on the planet through our eco-initiatives.",
  },
];

export const whyChoose = () => {
  return data;
};
