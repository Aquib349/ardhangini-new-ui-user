import { useContext } from "react"
import { UserContext } from "../context/user/user"

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("context must be within the contextProvider");
    }

    return context;
}