import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from '@prismicio/react'
import type { Metadata } from 'next'

import { LanguageSwitcher } from '@/ui/components/LanguageSwitcher';
import { getLocales } from "@/ui/utils/getLocales";


type Props = {
  params: { lang: string };
}

export default async function Home({params: { lang }}: Props) {
  const client = createClient();
  const page = await client.getByType("home", { lang });
  const home = page.results[0]
  const locales = await getLocales(home, client);


  return (
    <>
      <LanguageSwitcher locales={locales} />
      <SliceZone slices={home.data.slices} components={components} />
    </>
  )
}

export async function generateMetadata({params: { lang }}: Props): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByType("home", { lang });

  return {
    title: page.results[0].data.meta_title,
    description: page.results[0].data.meta_description,
    openGraph: {
      images: [String(page.results[0].data.meta_image.url)],
    },
  }
}