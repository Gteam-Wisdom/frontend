import React, { ChangeEvent, useState } from "react";

import Select from "../select/Select";

// import styles from "./PurposeOnboarding.module.css";

interface PurposeOnboardingProps {}

const PurposeOnboarding: React.FC<PurposeOnboardingProps> = () => {
    const [selectedPurpose, setSelectedPurpose] = useState<string>("");

    const purposeList = [
        { value: 0, label: "Purpose 1" },
        { value: 1, label: "Purpose 2" },
        { value: 2, label: "Purpose 3" },
    ];

    const handlePurposeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedPurpose(value);
    };

    return (
        <Select
            name="purpose"
            label="Purpose"
            placeholder="What are you here for?"
            onChange={handlePurposeChange}
            value={selectedPurpose}
            list={purposeList}
        />
    );
};

export default PurposeOnboarding;
