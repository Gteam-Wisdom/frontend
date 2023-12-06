import { useState } from "react";
import AvatarForm from "./components/AvatarForm";
import AvatarView from "./AvatarView";

const Avatar = () => {
  const [created, setCreated] = useState(false);
  const handleSubmit = () => {
    setCreated(true);
  };
  return (
    <>
      {created ? (
        <AvatarView></AvatarView>
      ) : (
        <AvatarForm onSubmit={handleSubmit} />
      )}
    </>
  );
};

export default Avatar;
