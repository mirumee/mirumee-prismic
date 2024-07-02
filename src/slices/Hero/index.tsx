import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import HeroSplit from "@/ui/Hero/splitWithImage"
import HeroDefault from "@/ui/Hero/simpleCentered"

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && <HeroDefault {...slice.primary} />}
      {slice.variation === "splitWithImage" && <HeroSplit {...slice.primary} />}
    </section>
  );
};

export default Hero;
