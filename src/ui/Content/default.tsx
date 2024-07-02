import { ContentSliceDefaultPrimary } from "../../../prismicio-types";
import { PrismicRichText } from '@prismicio/react'
import { component } from "../utils";


const Content = (props: ContentSliceDefaultPrimary) => {
  return (
    <div className="max-w-screen-md mx-auto px-5">
      <PrismicRichText field={props.textcontent} components={component}/>
    </div>
  );
};

export default Content;
