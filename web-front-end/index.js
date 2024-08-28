
document
.getElementById("delete-user-form")
.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = document.getElementById("deleteUsername").value;
  console.log(username);

  const response = await fetch(
    `http://127.0.0.1:4001/auth/delete/user`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
      }),
      credentials: "include",
    }
  );

  console.log(response);

  const result = await response.json();
  // handle response
  if (result.ok) {
    alert("User deleted successfully");
    return;
  } else {
    alert(result.message);
  }
});