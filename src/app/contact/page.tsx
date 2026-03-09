import { ContactHorizontalScroll } from "@/components/sections/ContactHorizontalScroll";


export default async function ContactPage({searchParams, }: { searchParams: Promise<{ package?: string}>; }) {
  const params = await searchParams;
  const packageName = params?.package;

  return (
    <ContactHorizontalScroll initialPackage={packageName}/>
  );
}