import { FeaturesSliceCenteredGridPrimary } from '../../../prismicio-types'
import { PrismicRichText } from '@prismicio/react'
import { component } from '../utils'

export default function Feature(props: FeaturesSliceCenteredGridPrimary) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">{props.title}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {props.header}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {props.description}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 text-center">
            {props.features.map((feature, intex) => (
              <PrismicRichText key={intex} field={feature.content} components={component}/>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}