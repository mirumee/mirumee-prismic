import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from '@prismicio/react'
import type { Metadata } from 'next'


export default async function Home() {
  const client = createClient();
  const page = await client.getByType("home");

  return (
    <>
      <SliceZone slices={page.results[0].data.slices} components={components} />
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> { 
  const client = createClient();
  const page = await client.getByType("home");
 
  return {
    title: page.results[0].data.meta_title,
    description: page.results[0].data.meta_description,
    openGraph: {
      images: [String(page.results[0].data.meta_image.url)],
    },
  }
}