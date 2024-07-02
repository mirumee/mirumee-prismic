import { PrismicRichText } from "@prismicio/react";
import { PricingSliceDefault } from "../../../prismicio-types";
import { PrismicNextLink } from '@prismicio/next'
import { component } from "../utils";

const Pricing = (props: PricingSliceDefault["primary"]) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid gap-8 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{props.title}</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {props.description}
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {props.pricing.map((item, index) => (
            <div key={index} className="rounded-lg border bg-background p-6 md:p-8">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold">{item.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="grid gap-2 text-muted-foreground">
                  <PrismicRichText field={item.features} components={component}/>
                </ul>
                <PrismicNextLink field={item.calltoaction}>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">Get Started</button>
                </PrismicNextLink>
              </div>
            </div>
          ))}


        </div>
      </div>
    </section>
  );
};

export default Pricing;
