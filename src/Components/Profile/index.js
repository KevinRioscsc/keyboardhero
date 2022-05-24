import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { ProfileLayout, ProfileDiv, Logout } from "./ProfileStyled";
import { useAuth } from "../../Context/AuthContext";

const Profile = () => {
  const { logout, currentUser } = useAuth();

  const signout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log("something went wrong");
    }
  };
  return (
    <>
      <ProfileLayout>
        <ProfileDiv>
          {currentUser.displayName ? currentUser.displayName.charAt(0) : "h"}
        </ProfileDiv>
        <Logout onClick={signout}>
          <AiOutlineLogout size={30} />
        </Logout>
      </ProfileLayout>
    </>
  );
};

export default Profile;
