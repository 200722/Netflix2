// this should be in env file
const token = "pj11daaQRz7zUIH56B9Z";

export const getCategories = async (setCategories) => {
  const requestOptions = {
    headers: { token },
    method: "GET",
    redirect: "follow",
  };
  const result = await fetch(
    "https://frontend-case-api.sbdev.nl/api/categories",
    requestOptions
  )
    .then((res) => res.json())
    .catch((error) => console.log("error", error));

  // we need to assign new properties {label , value} to each item in categories array to make it work with react-select
  result.map((category) => {
    category.value = category.id;
    category.label = category.name;
  });
  console.log(result);
  setCategories(result);
};
