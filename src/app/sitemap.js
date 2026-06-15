export default function sitemap() {
  const baseUrl = 'https://www.adbimmo.com';

  const staticRoutes = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${baseUrl}/properties`, priority: 0.9, changeFrequency: 'daily' },
    { url: `${baseUrl}/buy`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/rent`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/services`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/about`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${baseUrl}/contact`, priority: 0.7, changeFrequency: 'monthly' },
  ];

  const propertyIds = [1, 2, 3, 4, 5, 6, 7];
  const propertyRoutes = propertyIds.map((id) => ({
    url: `${baseUrl}/property/${id}`,
    priority: 0.8,
    changeFrequency: 'weekly',
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: route.url,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...propertyRoutes.map((route) => ({
      url: route.url,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
  ];
}
