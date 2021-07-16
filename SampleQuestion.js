function getAdmins() {
  const users = fetch("https://jsonplaceholder.typicode.com/users");
  const admins = [];
  users.forEach(user => { // TypeError: users.forEach is not a function
    if (user.role === "admin") {
      admins.push(user);
    }
  });
  return admins;
}