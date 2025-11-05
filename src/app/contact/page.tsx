import { ContactHorizontalScroll } from "@/components/sections/ContactHorizontalScroll";


export default function ContactPage({searchParams, }: { searchParams?: { package?: string}; }) {
  const packageName = searchParams?.package;

  return (
    <ContactHorizontalScroll initialPackage={packageName}/>
  );
}