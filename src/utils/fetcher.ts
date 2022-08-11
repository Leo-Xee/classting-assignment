import axios from "axios";

axios.defaults.baseURL = "https://opentdb.com/api.php";

const fetcher = async <T>(
  method: "get" | "post" | "put" | "patch" | "delete",
  url: string,
  ...rest: object[]
) => {
  try {
    const { data } = await axios[method]<T>(url, ...rest);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }

    throw new Error("different error than axios");
  }
};

export default fetcher;
