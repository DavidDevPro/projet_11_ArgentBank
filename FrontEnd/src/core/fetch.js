export async function fetchLogin(email, password) {
  try {
    const responseLogin = await fetch(
      "http://localhost:3001/api/v1/user/login",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (responseLogin.ok) {
      return responseLogin.json();
    } else {
      throw new Error(
        "le fetch login n'a pas réussi, erreur: " + responseLogin.status
      );
    }
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    throw error;
  }
}
//
//
//
//
//

export async function fetchUser(token) {
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
      throw new Error(
        "le fetch user n'a pas réussi, erreur: " + responseUser.status
      );
    }
  } catch (error) {
    console.error(
      "erreur du fetch, les infos user ne sont pas récupérés",
      error
    );
  }
}
//
//
//
//
//
export async function fetchEdit(token, userName) {
  try {
    const responseEdit = await fetch(
      "http://localhost:3001/api/v1/user/profile",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName }),
      }
    );
    if (responseEdit.ok) {
      return responseEdit;
    } else {
      throw new Error("le edit n'a pas réussi, erreur: " + responseEdit.status);
    }
  } catch (error) {
    console.error("erreur du fetch, le userName n'a pas été édité", error);
  }
}
