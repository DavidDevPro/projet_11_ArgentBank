export async function fetchUser(token) {
  //récupéreration es infos user d'utilisateur avec token d'authentification
  try {
    const responseUser = await fetch(
      "http://localhost:3001/api/v1/user/profile",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );

    if (responseUser.ok) {
      return await responseUser.json();
    } else {
      console.log("le fetch user n'a pas fonctionné");
    }
  } catch (error) {
    console.error("erreur du fetch, les infos user ne sont pas récupérés");
  }
}
