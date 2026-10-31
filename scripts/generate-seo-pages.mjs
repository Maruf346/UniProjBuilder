import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const siteUrl = "https://uniprojectbuilder.qoderlabs.com";
const siteName = "University Project Builder";
const source = await readFile(path.join(root, "src/data/blogs.ts"), "utf8");
const baseHtml = await readFile(path.join(distDir, "index.html"), "utf8");

const monthNumbers = { JAN: "01", FEB: "02", MAR: "03", APR: "04", MAY: "05", JUN: "06", JUL: "07", AUG: "08", SEP: "09", OCT: "10", NOV: "11", DEC: "12" };
const postStarts = [...source.matchAll(/^  \{\r?\n    slug:/gm)].map((match) => match.index);

function field(block, name) {
  return block.match(new RegExp(`^    ${name}:\\s*"([^"]*)"`, "m"))?.[1];
}

function stringArray(block, name) {
  const raw = block.match(new RegExp(`^    ${name}:\\s*\\[([\\s\\S]*?)\\]`, "m"))?.[1] || "";
  return [...raw.matchAll(/"([^"]+)"/g)].map((match) => match[1]);
}

const posts = postStarts.map((start, index) => {
  const end = postStarts[index + 1] ?? source.lastIndexOf("\n];");
  const block = source.slice(start, end);
  const month = field(block, "month") || "JAN";
  const day = (field(block, "day") || "01").padStart(2, "0");
  return {
    slug: field(block, "slug"),
    title: field(block, "title"),
    seoTitle: field(block, "seoTitle"),
    description: field(block, "seoDescription") || field(block, "summary"),
    image: field(block, "image") || "Hero1.jpg",
    keywords: stringArray(block, "keywords").length ? stringArray(block, "keywords") : stringArray(block, "tags"),
    published: field(block, "datePublished") || `2026-${monthNumbers[month] || "01"}-${day}`,
    modified: field(block, "dateModified") || field(block, "datePublished") || `2026-${monthNumbers[month] || "01"}-${day}`,
    author: field(block, "author") || siteName,
  };
}).filter((post) => post.slug && post.title && post.description);

function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function replaceMeta(html, selector, value) {
  const escaped = escapeHtml(value);
  const pattern = new RegExp(`<meta ([^>]*${selector}=["'](?:${selector === "name" ? "description|keywords|robots|twitter:title|twitter:description|twitter:image" : "og:title|og:description|og:type|og:url|og:image"})["'][^>]*)>`, "i");
  return html.replace(pattern, (tag) => tag.replace(/content=["'][^"']*["']/i, `content="${escaped}"`));
}

function routeHtml({ title, description, pathname, image, keywords, type = "website", schema }) {
  const url = `${siteUrl}${pathname === "/" ? "/" : pathname}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;
  let html = baseHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = replaceMeta(html, "name", description);
  html = html.replace(/<meta name=["']description["'][^>]*>/i, `<meta name="description" content="${escapeHtml(description)}">`);
  html = html.replace(/<meta name=["']keywords["'][^>]*>/i, `<meta name="keywords" content="${escapeHtml(keywords.join(", "))}">`);
  html = html.replace(/<link rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${url}">`);
  html = html.replace(/<meta property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${escapeHtml(title)}">`);
  html = html.replace(/<meta property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${escapeHtml(description)}">`);
  html = html.replace(/<meta property=["']og:type["'][^>]*>/i, `<meta property="og:type" content="${type}">`);
  html = html.replace(/<meta property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${url}">`);
  html = html.replace(/<meta property=["']og:image["'][^>]*>/i, `<meta property="og:image" content="${imageUrl}">`);
  html = html.replace(/<meta name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(title)}">`);
  html = html.replace(/<meta name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${escapeHtml(description)}">`);
  html = html.replace(/<meta name=["']twitter:image["'][^>]*>/i, `<meta name="twitter:image" content="${imageUrl}">`);
  return html.replace("</head>", `<script type="application/ld+json" data-static-seo="true">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script></head>`);
}

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${siteName} Guides`,
  url: `${siteUrl}/blog`,
  blogPost: posts.map((post) => ({ "@type": "BlogPosting", headline: post.title, url: `${siteUrl}/blog/${post.slug}` })),
};

const blogHtml = routeHtml({
  title: "University Project & Thesis Guides Bangladesh (2026)",
  description: "Practical 2026 guides for final year CSE projects, thesis and project reports, presentation slides, IEEE documentation, and viva preparation in Bangladesh.",
  pathname: "/blog",
  image: "/assets/viva.jpg",
  keywords: ["final year project ideas for CSE students 2026", "university project help Bangladesh", "thesis writing guide Bangladesh", "project report format", "viva questions for final year project"],
  schema: blogSchema,
});

await mkdir(path.join(distDir, "blog"), { recursive: true });
await writeFile(path.join(distDir, "blog", "index.html"), blogHtml);

for (const post of posts) {
  const pathname = `/blog/${post.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${siteUrl}/assets/${post.image}`,
    datePublished: post.published,
    dateModified: post.modified,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: siteName, logo: { "@type": "ImageObject", url: `${siteUrl}/assets/logo.png` } },
    mainEntityOfPage: `${siteUrl}${pathname}`,
    inLanguage: "en-BD",
  };
  const html = routeHtml({
    title: `${post.seoTitle || post.title} | ${siteName}`,
    description: post.description,
    pathname,
    image: `/assets/${post.image}`,
    keywords: post.keywords,
    type: "article",
    schema,
  });
  const routeDir = path.join(distDir, "blog", post.slug);
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), html);
}

const sitemapUrls = [
  { loc: `${siteUrl}/`, lastmod: "2026-10-31", changefreq: "monthly", priority: "1.0" },
  { loc: `${siteUrl}/blog`, lastmod: "2026-10-31", changefreq: "weekly", priority: "0.9" },
  ...posts.map((post) => ({ loc: `${siteUrl}/blog/${post.slug}`, lastmod: post.modified, priority: "0.8" })),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((item) => `  <url><loc>${item.loc}</loc><lastmod>${item.lastmod}</lastmod>${item.changefreq ? `<changefreq>${item.changefreq}</changefreq>` : ""}<priority>${item.priority}</priority></url>`).join("\n")}\n</urlset>\n`;
await writeFile(path.join(distDir, "sitemap.xml"), sitemap);

console.log(`Generated SEO HTML for /blog and ${posts.length} article routes.`);
