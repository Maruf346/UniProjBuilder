import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

export default function App() {
  const pathname = window.location.pathname;

  if (pathname === "/blog" || pathname === "/blog/") {
    return <Blog />;
  }

  if (pathname.startsWith("/blog/")) {
    const slug = pathname.replace(/^\/blog\//, "").replace(/\/$/, "");
    return <BlogDetails slug={slug} />;
  }

  return <Home />;
}
