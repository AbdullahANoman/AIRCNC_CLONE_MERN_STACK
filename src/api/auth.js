export const saveUser = (user) => {
  const currentUser = {
    email: user?.email,
  };
  fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};


// update the use making host
export const updateToHost = async (email) => {
  const currentUser = {
    role: "host",
  };
  const res = await fetch(`${import.meta.env.VITE_API_URL}/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  });
  const data = await res.json();
  return data;
};


// find that user is host or not 

export const checkHost = async (email) =>{
    const url = `${import.meta.env.VITE_API_URL}/users/${email}`
    const res = await fetch(url)
    const data = await res.json()
    return data[0].role
}