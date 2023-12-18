import React, { useState } from "react";
import DialogCard from "./DialogCard"; // Adjust the path accordingly

const MoveToCollection = ({ open }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(open);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitModal = () => {
    handleCloseModal();
  };

  return (
    <div>
      <DialogCard
        open={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        name="Move to collection"
      >
        <p>This is the content of your modal.</p>
      </DialogCard>
    </div>
  );
};

export default MoveToCollection;
