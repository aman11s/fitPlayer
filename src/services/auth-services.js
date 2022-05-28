import axios from "axios";
import toast from "react-hot-toast";

export const loginHandler = async ({
  e,
  setBtnLoader,
  email,
  password,
  setUserData,
  navigate,
}) => {
  e.preventDefault();
  try {
    setBtnLoader(true);
    const { data, status } = await axios({
      method: "POST",
      url: "/api/auth/login",
      data: { email, password },
    });
    if (status === 200) {
      setBtnLoader(false);
      const userData = { token: data.encodedToken, user: data.foundUser };
      localStorage.setItem("userData", JSON.stringify(userData));
      setUserData(userData);
      navigate("/videos");
      toast.success("Successfully Logged in!");
    }
  } catch (error) {
    console.error(error);
    const { status } = error.response;
    if (status === 401) {
      setBtnLoader(false);
      toast.error("Wrong Credentials. Please try again");
    } else if (status === 404) {
      setBtnLoader(false);
      toast.error("User not found. Create new account");
    }
  }
};
