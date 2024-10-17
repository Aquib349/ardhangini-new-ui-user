export interface AddressContextProps {
  addresses: UserAddress[];
  removeUserAddress: (addressId: string) => void;
  addUserAddress: (
    firstName: string,
    lastName: string,
    addressLine1: string,
    addressLine2: string,
    pin: number,
    state: string,
    town: string,
    mobileNumber: string
  ) => void;
}

export interface UserAddress {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2: string;
  pin: number;
  state: string;
  town: string;
  mobileNumber: string;
}
