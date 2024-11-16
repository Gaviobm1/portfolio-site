import * as React from "react";
import useSiteMetadata from "../../hooks/useSiteMetadata";

export default function Seo({ title }: { title: String }) {
  const data = useSiteMetadata();
  return (
    <title>
      {title} | {data.title}
    </title>
  );
}
