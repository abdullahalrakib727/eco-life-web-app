type pros = {
  image: string;
  heading: string;
  description: string;
};

const data: pros[] = [
  {
    image: "www.google.com",
    heading: "Diverse Eco-Friendly Products",
    description:
      "Explore eco-friendly products, from sustainable fashion to green home essentials, for a variety of environmentally responsible options.",
  },
  {
    image: "www.google.com",
    heading: "Commitment to Sustainability",
    description:
      "We prioritize sustainability, partnering with like-minded brands to reduce environmental impact and build a greener future",
  },
  {
    image: "www.google.com",
    heading: "Expertise and Education",
    description:
      "Join our eco-conscious community for more than just shopping. Get informed with empowering articles to make sustainable choices.",
  },
  {
    image: "www.google.com",
    heading: "Long lasting impact",
    description:
      "You're not just shopping; Your purchases create a positive, lasting impact on the planet through our eco-initiatives.",
  },
];

export const whyChoose = () => {
  return data;
};
