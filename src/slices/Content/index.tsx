import { SliceComponentProps } from "@prismicio/react";
import ContentDefault from "@/ui/Content/default"
import { Content as PrismicContent } from "@prismicio/client";
/**
 * Props for `Content`.
 */
export type ContentProps = SliceComponentProps<PrismicContent.ContentSlice>;

/**
 * Component for "Content" Slices.
 */
const Content = ({ slice }: ContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ContentDefault {...slice.primary} />
    </section>
  );
};

export default Content;
