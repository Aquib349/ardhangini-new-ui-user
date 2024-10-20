import { createContext, ReactNode, useEffect, useState } from "react";
import {
  updateResponse,
  User,
  userContextProps,
  UserResponse,
} from "./interface";
import { getUserDetail, updateUserDetail } from "./user.service";
import { toastService } from "../../services/toast/toast.service";

export const UserContext = createContext<userContextProps | undefined>(
  undefined
);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userDetail, setUserDetail] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  // Function to get the user detail
  async function getLoggedInUserDetail() {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.log("Cannot find userId");
      return;
    }
    setLoading(true);
    try {
      toastService.showToast("updating..", "loading", {
        position: "top-center",
      });
      const data: UserResponse = await getUserDetail(userId);
      toastService.dismissToast();
      setUserDetail(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  // Function to update the user-detail
  async function updateUserDetails(
    firstname: string,
    lastname: string,
    email: string,
    mobile: string
  ) {
    const userId = localStorage.getItem("userId");
    const body = {
      userId: userId,
      firstname: firstname,
      lastname: lastname,
      email: email,
      mobile: mobile,
    };
    try {
      const data: updateResponse = await updateUserDetail(body);
      setUserDetail(data);
      toastService.showToast("udpated successfully", "success", {
        position: "top-center",
      });
    } catch (error) {}
  }

  // Fetch user details when the component mounts
  useEffect(() => {
    getLoggedInUserDetail();
  }, []);

  return (
    <UserContext.Provider value={{ userDetail: userDetail, updateUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
