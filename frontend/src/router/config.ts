const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/login"],
    exact: true,
    component: "Login",
  },
  {
    path: ["/signup"],
    exact: true,
    component: "Signup",
  },
  {
    path: ["/detect"],
    exact: true,
    component: "Detect",
  },
];

export default routes;
