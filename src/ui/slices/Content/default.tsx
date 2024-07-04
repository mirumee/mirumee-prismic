import { component } from "@/ui/utils/prismicRichText";
import { ContentSliceDefaultPrimary } from "../../../../prismicio-types";
import { PrismicRichText } from '@prismicio/react'



const Content = (props: ContentSliceDefaultPrimary) => {
  return (
    <div className="max-w-screen-md mx-auto px-5">
      <PrismicRichText field={props.textcontent} components={component}/>
    </div>
  );
};

export default Content;
