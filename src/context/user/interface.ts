export interface userContextProps {
    userDetail: User | null;
    updateUserDetails: (
        firstname: string,
        lastname: string,
        email: string,
        mobile: string) => void;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    dob: string;
    email: string;
    mobile: string;
    bio: string;
    accountStatus: string;
    blackListReason: string;
    sex: string;
}

export interface UserResponse {
    id: string;
    firstName: string;
    lastName: string;
    dob: string;
    email: string;
    mobile: string;
    bio: string;
    accountStatus: string;
    blackListReason: string;
    sex: string;
}

export interface updateResponse {
    id: string;
    firstName: string;
    lastName: string;
    dob: string;
    email: string;
    mobile: string;
    bio: string;
    accountStatus: string;
    blackListReason: string;
    sex: string;
}
