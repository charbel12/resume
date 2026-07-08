import resume from "../content/resume.json";

export async function GET({ site }) {
  const url = (path) => new URL(path, site).toString();

  const lastmod = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${url("/")}</loc><lastmod>${lastmod}</lastmod></url>
  <url><loc>${url("/#experience")}</loc><lastmod>${lastmod}</lastmod></url>
  <url><loc>${url("/#skills")}</loc><lastmod>${lastmod}</lastmod></url>
  <url><loc>${url("/#education")}</loc><lastmod>${lastmod}</lastmod></url>
  <url><loc>${url("/#learning")}</loc><lastmod>${lastmod}</lastmod></url>
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}

