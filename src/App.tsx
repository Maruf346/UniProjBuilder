import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  const pathname = window.location.pathname;

  let page;

  if (pathname === "/blog" || pathname === "/blog/") {
    page = <Blog />;
  } else if (pathname.startsWith("/blog/")) {
    const slug = pathname.replace(/^\/blog\//, "").replace(/\/$/, "");
    page = <BlogDetails slug={slug} />;
  } else {
    page = <Home />;
  }

  return (
    <>
      {page}
      <FloatingWhatsApp />
    </>
  );
}
