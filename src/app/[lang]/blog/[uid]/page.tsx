import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import type { Metadata } from 'next'
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

type Props = {
  params: { uid: string }
}

export default async function Page({ params }: Props) {
  const client = createClient();

  const page = await client
    .getByUID("blogpage", params.uid)
    .catch(() => notFound())

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateStaticParams() {
  const client = createClient()

  const pages = await client.getAllByType('blogpage')

  return pages.map((page) => {
    return {
      uid: page.uid,
    }
  })
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("custompage", params.uid)
    .catch(() => notFound())
 
  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [String(page.data.meta_image.url)],
    },
  }
}