import { useState } from "react";
import AvatarForm from "./components/AvatarForm";
import AvatarView from "./AvatarView";

const Avatar = () => {
  const [created, setCreated] = useState(false);
  const handleSubmit = () => {
    setCreated(true);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      {created ? (
        <AvatarView></AvatarView>
      ) : (
        <AvatarForm onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default Avatar;
