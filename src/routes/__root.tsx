import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

// routes = []
// reoutesauthen = []

// <Routes>
//     <Route >
//         routes = []
//     </Route>
//     <Authen>
//     Route >
//     reoutesauthen = []
//     </Route>
//     </Authen>
export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/meeting" className="[&.active]:font-bold">
          Meeting
        </Link>{" "}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
