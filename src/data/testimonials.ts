export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const assetPathPrefix = "/assets";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Devon Lane",
    role: "Co. Founder",
    text: "We've been working with Bexon for years, and they continue to deliver outstanding results. Their team is proactive, responsive, and always goes the extra mile to ensure our needs are met. They've become a key contributor to our growth and success that really help us",
    avatar: `${assetPathPrefix}/3c623.png`,
  },
  {
    id: 2,
    name: "Guy Hawkins",
    role: "Co. Founder",
    text: "Working with Bexon has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner.",
    avatar: `${assetPathPrefix}/87b36.png`,
  },
  {
    id: 3,
    name: "Ralph Edwards",
    role: "Co. Founder",
    text: "The results we've seen after partnering with Bexon are beyond our expectations. They not only understood our vision but also brought new ideas to the table that have taken our business to the next level. Their expertise and commitment to success make them a trusted.",
    avatar: `${assetPathPrefix}/c0a09.png`,
  },
];
