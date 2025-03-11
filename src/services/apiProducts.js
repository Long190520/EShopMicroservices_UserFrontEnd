import axios from "axios";

export async function getProducts() {
  try {
    const res = await axios({
      method: "GET",
      url: "https://localhost:6060/products?PageNumber=1&PageSize=6",
    });

    return res.data;
  } catch (error) {
    console.error(error.message);
  }
}
