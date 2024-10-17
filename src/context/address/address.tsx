import React, {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from "react";
import { AddressContextProps, UserAddress } from "./interface";
import { getUserAddress, addAddress, deleteAddress } from "./address.service";
import { toastService } from "../../services/toast/toast.service";

export const AddressContext = createContext<AddressContextProps | undefined>(
  undefined
);

export const AddressProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userAddress, setUserAddress] = useState<UserAddress[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Function to fetch user addresses
  const fetchUserAddress = useCallback(async () => {
    const userId = "01c0c1b7-31ab-4e63-8a5a-464164310947";
    setLoading(true);
    try {
      const data = await getUserAddress(userId);
      setUserAddress(data);
    } catch (error) {
      console.error("Failed to fetch user address", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Function to handle API calls with toast notifications
  const handleApiCall = async (
    apiCall: () => Promise<any>,
    successMessage: string,
    loadingMessage: string,
    updateState: (response: any) => void
  ) => {
    toastService.showToast(loadingMessage, "loading", {
      position: "top-center",
    });
    try {
      const response = await apiCall();
      updateState(response);
      toastService.showToast(successMessage, "success", {
        position: "top-center",
      });
    } catch (error) {
      toastService.showToast("Operation failed", "error", {
        position: "top-center",
      });
      console.error("API call failed", error);
    } finally {
      toastService.dismissToast();
    }
  };

  // Function to add a new address
  const addUserAddress = async (
    firstName: string,
    lastName: string,
    addressLine1: string,
    addressLine2: string,
    pin: number,
    state: string,
    town: string,
    mobileNumber: string
  ) => {
    const body = {
      firstName,
      lastName,
      addressLine1,
      addressLine2,
      pin,
      state,
      town,
      mobileNumber,
      userId: "01c0c1b7-31ab-4e63-8a5a-464164310947",
    };
    await handleApiCall(
      () => addAddress(body),
      "Added successfully",
      "Adding..",
      (response) => setUserAddress((prev) => [...prev, response])
    );
  };

  // Function to delete an address by ID
  const removeUserAddress = async (addressId: string) => {
    await handleApiCall(
      () => deleteAddress(addressId),
      "Address removed",
      "Deleting..",
      () => fetchUserAddress()
    );
  };

  useEffect(() => {
    fetchUserAddress();
  }, [fetchUserAddress]);

  return (
    <AddressContext.Provider
      value={{ addresses: userAddress, addUserAddress, removeUserAddress }}
    >
      {children}
    </AddressContext.Provider>
  );
};
