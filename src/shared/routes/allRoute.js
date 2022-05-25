import Home from "../../pages/home";
import AllBlogs from "../../pages/allBlogs";
import CreateBlog from "../../pages/CreateBlog";

let allPublicRoute = [
  {
    path: "/",
    component: AllBlogs,
    name: "All Blogs",
  },
];
let loggedInRoute = [
  {
    path: "/",
    component: AllBlogs,
    name: "All Blogs",
  },
  {
    path: "/home/:id",
    component: Home,
    name: "Home",
  },
  {
    path: "/home/:id/create",
    component: CreateBlog,
    name: "Create Blog",
  },
];
export { allPublicRoute, loggedInRoute };
