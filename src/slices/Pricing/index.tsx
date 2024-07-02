import { Content } from "@prismicio/client"
import PricingDefault from "@/ui/Pricing/default"
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Pricing`.
 */
export type PricingProps = SliceComponentProps<Content.PricingSlice>;

/**
 * Component for "Pricing" Slices.
 */
const Pricing = ({ slice }: PricingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PricingDefault {...slice.primary} />
    </section>
  );
};

export default Pricing;
