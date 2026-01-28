export default function sitemap() {
  const baseUrl = "https://www.julio-velutini.com";
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/julio-herrera-velutini-professional-profile`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/julio-herrera-velutini-legacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/julio-herrera-velutini-vision-and-global-influence`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/julio-herrera-velutini-global-reach`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
