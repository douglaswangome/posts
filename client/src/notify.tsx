import toast from "react-hot-toast";

const notify = (status: string, message: string): void => {
	if (status === "reaction") {
		toast(message, {
			icon: "🔥",
		});
	} else if (status === "delete") {
		toast.error(message);
	}
};

export default notify;
