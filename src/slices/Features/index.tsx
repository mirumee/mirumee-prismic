import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import FeatureCentered from "@/ui/Feature/centeredGrid"
import FeatureDefault from "@/ui/Feature/withProductScreen"
/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {

  
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && <FeatureDefault {...slice.primary} />}
      {slice.variation === "centeredGrid" && <FeatureCentered {...slice.primary} />}
    </section>
  );
};

export default Features;
