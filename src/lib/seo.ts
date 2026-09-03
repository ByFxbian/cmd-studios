import type { Metadata } from "next";

type SocialMetadataInput = {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
};

type SocialMetadata = {
  openGraph: NonNullable<Metadata["openGraph"]>;
  twitter: NonNullable<Metadata["twitter"]>;
};

export function createSocialMetadata({
  title,
  description,
  url,
  image = "/opengraph-image",
  imageAlt = "CMD Studios - Digital mit Charakter",
}: SocialMetadataInput): SocialMetadata {
  const images = [{ url: image, alt: imageAlt }];

  return {
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "de_DE",
      siteName: "CMD Studios",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}
