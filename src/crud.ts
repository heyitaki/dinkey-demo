import { User } from "./user";

async function createUser() {
  try {
    await User.sync(); // This line ensures the table is created if it doesn't exist
    const user = await User.create({
      name: "John Doe",
      email: "john.doe@example.com",
    });
    console.log("User successfully created:", user);
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

async function fetchUsers() {
  try {
    const users = await User.findAll();
    console.log("Users:", users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

(async () => {
  await createUser();
  await fetchUsers();
})();
