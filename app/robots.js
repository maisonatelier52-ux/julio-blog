export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.julio-velutini.com/sitemap.xml",
    host: "https://www.julio-velutini.com",
  };
}
