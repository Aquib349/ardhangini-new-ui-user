import { useContext } from "react";
import { AddressContext } from "../context/address/address";

export const useAddress = () => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error("context must be withing contextProvider");
  }

  return context;
};
