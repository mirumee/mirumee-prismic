import Image from "next/image"
import placeholder from "./placeholder.svg"

import { HeroSliceSplitWithImagePrimary } from "../../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";


export function Hero(props: HeroSliceSplitWithImagePrimary) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white md:flex-row">
      <div className="flex flex-col items-start justify-center p-8 space-y-6 md:w-1/2">
        <div className="flex items-center space-x-2">
          <p className="text-sm text-muted-foreground">
            {props.announcement}
            <a href="#" className="text-primary hover:underline">
              Read more
            </a>
          </p>
        </div>
        <h1 className="text-4xl font-bold text-foreground">{props.title}</h1>
        <p className="text-lg text-muted-foreground">
          {props.description}
        </p>
        <div className="flex space-x-4">
          <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            Get started
          </button>
          <PrismicNextLink field={props.calltoactionurl}>
            <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              {props.calltoaction}
            </button>
          </PrismicNextLink>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative aspect-square">
        <Image src={placeholder.src} alt="Person working on laptop" className="object-cover w-full h-full rounded-lg inset-0" fill />
      </div>
    </div>
  )
}

export default Hero