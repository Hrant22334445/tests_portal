import React from "react";
import UserInfo from "../../../features/featuresA/components/UserInfo"
import { UserInfoProps } from "features/featuresA/components/Search/Search.interface";

const LogInPage: React.FC<UserInfoProps> = ({ user }) => {
    return (
        <UserInfo user={user} />
    )
}

export default LogInPage;