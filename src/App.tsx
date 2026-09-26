import Home from "./pages/Home";
import Blog from "./pages/Blog";

export default function App() {
  return window.location.pathname.startsWith("/blog") ? <Blog /> : <Home />;
}
