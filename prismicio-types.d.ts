// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogpageDocumentDataSlicesSlice = ContentSlice | HeroSlice;

/**
 * Content for blogPage documents
 */
interface BlogpageDocumentData {
  /**
   * Slice Zone field in *blogPage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogpageDocumentDataSlicesSlice> /**
   * Meta Title field in *blogPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blogpage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *blogPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blogpage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *blogPage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blogpage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * blogPage document from Prismic
 *
 * - **API ID**: `blogpage`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogpageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogpageDocumentData>,
    "blogpage",
    Lang
  >;

type CustompageDocumentDataSlicesSlice = PricingSlice | HeroSlice;

/**
 * Content for customPage documents
 */
interface CustompageDocumentData {
  /**
   * Slice Zone field in *customPage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: custompage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CustompageDocumentDataSlicesSlice> /**
   * Meta Title field in *customPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: custompage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *customPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: custompage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *customPage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: custompage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * customPage document from Prismic
 *
 * - **API ID**: `custompage`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CustompageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CustompageDocumentData>,
    "custompage",
    Lang
  >;

type HomeDocumentDataSlicesSlice =
  | FeaturesSlice
  | PricingSlice
  | ContentSlice
  | HeroSlice;

/**
 * Content for home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Title field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes =
  | BlogpageDocument
  | CustompageDocument
  | HomeDocument;

/**
 * Primary content in *Content → Default → Primary*
 */
export interface ContentSliceDefaultPrimary {
  /**
   * textContent field in *Content → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content.default.primary.textcontent
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  textcontent: prismic.RichTextField;
}

/**
 * Default variation for Content Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContentSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Content*
 */
type ContentSliceVariation = ContentSliceDefault;

/**
 * Content Shared Slice
 *
 * - **API ID**: `content`
 * - **Description**: Content
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentSlice = prismic.SharedSlice<
  "content",
  ContentSliceVariation
>;

/**
 * Item in *Features → centeredGrid → Primary → Features*
 */
export interface FeaturesSliceCenteredGridPrimaryFeaturesItem {
  /**
   * Content field in *Features → centeredGrid → Primary → Features*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.centeredGrid.primary.features[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Primary content in *Features → Default → Primary*
 */
export interface FeaturesSliceDefaultPrimary {
  /**
   * Content field in *Features → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * screenshot field in *Features → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: features.default.primary.screenshot
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  screenshot: prismic.ImageField<never>;
}

/**
 * Default variation for Features Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturesSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Features → centeredGrid → Primary*
 */
export interface FeaturesSliceCenteredGridPrimary {
  /**
   * Title field in *Features → centeredGrid → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.centeredGrid.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Header field in *Features → centeredGrid → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.centeredGrid.primary.header
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  header: prismic.KeyTextField;

  /**
   * Description field in *Features → centeredGrid → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.centeredGrid.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Features field in *Features → centeredGrid → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: features.centeredGrid.primary.features[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  features: prismic.GroupField<
    Simplify<FeaturesSliceCenteredGridPrimaryFeaturesItem>
  >;
}

/**
 * centeredGrid variation for Features Slice
 *
 * - **API ID**: `centeredGrid`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSliceCenteredGrid = prismic.SharedSliceVariation<
  "centeredGrid",
  Simplify<FeaturesSliceCenteredGridPrimary>,
  never
>;

/**
 * Slice variation for *Features*
 */
type FeaturesSliceVariation = FeaturesSliceDefault | FeaturesSliceCenteredGrid;

/**
 * Features Shared Slice
 *
 * - **API ID**: `features`
 * - **Description**: Features
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSlice = prismic.SharedSlice<
  "features",
  FeaturesSliceVariation
>;

/**
 * Primary content in *Hero → Simple centered → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * announcement field in *Hero → Simple centered → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.announcement
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  announcement: prismic.KeyTextField;

  /**
   * title field in *Hero → Simple centered → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *Hero → Simple centered → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * callToAction field in *Hero → Simple centered → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.calltoaction
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  calltoaction: prismic.KeyTextField;

  /**
   * callToActionUrl field in *Hero → Simple centered → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.calltoactionurl
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  calltoactionurl: prismic.LinkField;
}

/**
 * Simple centered variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Split with image → Primary*
 */
export interface HeroSliceSplitWithImagePrimary {
  /**
   * announcement field in *Hero → Split with image → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.splitWithImage.primary.announcement
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  announcement: prismic.KeyTextField;

  /**
   * title field in *Hero → Split with image → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.splitWithImage.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *Hero → Split with image → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.splitWithImage.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * callToAction field in *Hero → Split with image → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.splitWithImage.primary.calltoaction
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  calltoaction: prismic.KeyTextField;

  /**
   * callToActionUrl field in *Hero → Split with image → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.splitWithImage.primary.calltoactionurl
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  calltoactionurl: prismic.LinkField;
}

/**
 * Split with image variation for Hero Slice
 *
 * - **API ID**: `splitWithImage`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceSplitWithImage = prismic.SharedSliceVariation<
  "splitWithImage",
  Simplify<HeroSliceSplitWithImagePrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceSplitWithImage;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *Pricing → Default → Primary → Pricing*
 */
export interface PricingSliceDefaultPrimaryPricingItem {
  /**
   * Name field in *Pricing → Default → Primary → Pricing*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pricing.default.primary.pricing[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Description field in *Pricing → Default → Primary → Pricing*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pricing.default.primary.pricing[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Price field in *Pricing → Default → Primary → Pricing*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: pricing.default.primary.pricing[].price
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;

  /**
   * Features field in *Pricing → Default → Primary → Pricing*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pricing.default.primary.pricing[].features
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  features: prismic.RichTextField;

  /**
   * CallToAction field in *Pricing → Default → Primary → Pricing*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: pricing.default.primary.pricing[].calltoaction
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  calltoaction: prismic.LinkField;
}

/**
 * Primary content in *Pricing → Default → Primary*
 */
export interface PricingSliceDefaultPrimary {
  /**
   * Title field in *Pricing → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pricing.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Pricing → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: pricing.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Pricing field in *Pricing → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: pricing.default.primary.pricing[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  pricing: prismic.GroupField<Simplify<PricingSliceDefaultPrimaryPricingItem>>;
}

/**
 * Default variation for Pricing Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PricingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PricingSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Pricing*
 */
type PricingSliceVariation = PricingSliceDefault;

/**
 * Pricing Shared Slice
 *
 * - **API ID**: `pricing`
 * - **Description**: Pricing
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PricingSlice = prismic.SharedSlice<
  "pricing",
  PricingSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogpageDocument,
      BlogpageDocumentData,
      BlogpageDocumentDataSlicesSlice,
      CustompageDocument,
      CustompageDocumentData,
      CustompageDocumentDataSlicesSlice,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      AllDocumentTypes,
      ContentSlice,
      ContentSliceDefaultPrimary,
      ContentSliceVariation,
      ContentSliceDefault,
      FeaturesSlice,
      FeaturesSliceDefaultPrimary,
      FeaturesSliceCenteredGridPrimaryFeaturesItem,
      FeaturesSliceCenteredGridPrimary,
      FeaturesSliceVariation,
      FeaturesSliceDefault,
      FeaturesSliceCenteredGrid,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceSplitWithImagePrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceSplitWithImage,
      PricingSlice,
      PricingSliceDefaultPrimaryPricingItem,
      PricingSliceDefaultPrimary,
      PricingSliceVariation,
      PricingSliceDefault,
    };
  }
}
