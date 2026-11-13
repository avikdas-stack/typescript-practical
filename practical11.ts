const user = {
  name: "Avik Das",
  role: "others",
};

switch (user.role) {
  case "admin":
    console.log(
      `Hello ${user.name} ! You have full access of the application.`,
    );
    break;

  case "editor":
    console.log(
      `Hello ${user.name} ! You have edit and view only access of the application.`,
    );
    break;

  case "user":
    console.log(
      `Hello ${user.name} ! You have view only access of the application.`,
    );
    break;

  default:
    console.log(
      `Hello ${user.name} ! You don't have any access to the application.`,
    );
}
