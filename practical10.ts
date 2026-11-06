let user = {
  name: "raju dutta",
  role: "user",
};

if (user.role === "admin" || user.role === "editor" || user.role === "user") {
  if (user.role === "admin") {
    console.log(
      `Hello ${user.name} ! You have full access of the application.`,
    );
  }
  if (user.role === "editor") {
    console.log(
      `Hello ${user.name} ! You have edit and view only access of the application.`,
    );
  }
  if (user.role === "user") {
    console.log(
      `Hello ${user.name} ! You have view only access access of the application.`,
    );
  }
} else {
  console.log(
    `Hello ${user.name}! you don't have any access to the application.`,
  );
}
