import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Seo from "./components/Seo";
import { blogPosts } from "./data/blogs";

function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#07171a] px-6 text-center text-white">
      <Seo
        title="Page Not Found | University Project Builder"
        description="The page you requested could not be found."
        path={window.location.pathname}
        noindex
      />
      <div>
        <p className="text-sm font-bold uppercase tracking-[.2em] text-[#2dd4bf]">404</p>
        <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
        <p className="mt-3 text-white/70">The link may be outdated or the page may have moved.</p>
        <a href="/" className="mt-7 inline-flex rounded-full bg-[#18797d] px-6 py-3 font-bold">Return home</a>
      </div>
    </main>
  );
}

export default function App() {
  const pathname = window.location.pathname;

  let page;

  if (pathname === "/blog" || pathname === "/blog/") {
    page = <Blog />;
  } else if (pathname.startsWith("/blog/")) {
    const slug = pathname.replace(/^\/blog\//, "").replace(/\/$/, "");
    page = blogPosts.some((post) => post.slug === slug) ? <BlogDetails slug={slug} /> : <NotFound />;
  } else if (pathname === "/" || pathname === "") {
    page = <Home />;
  } else {
    page = <NotFound />;
  }

  return (
    <>
      {page}
      <FloatingWhatsApp />
    </>
  );
}
