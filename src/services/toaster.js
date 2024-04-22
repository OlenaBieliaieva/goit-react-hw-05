import toast from "react-hot-toast";

export const showError = (error) => {
  toast.error(error, {
    position: "top-center",
    duration: 5000,
  });
};
