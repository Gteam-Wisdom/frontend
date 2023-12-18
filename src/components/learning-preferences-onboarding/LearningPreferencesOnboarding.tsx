import React, {ChangeEvent, useState} from 'react';

import Select from "../select/Select";

import styles from "./LearningPreferencesOnboarding.module.css";

interface LearningPreferencesOnboardingProps {}

const LearningPreferencesOnboarding: React.FC<LearningPreferencesOnboardingProps> = () => {
    const [selectedLearningMethods, setSelectedLearningMethods] = useState<string>("");

    const learnList = [
        { value: 0, label: "Learn 1" },
        { value: 1, label: "Learn 2" },
        { value: 2, label: "Learn 3" },
    ];

    const handleLearningMethodChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedLearningMethods(value);
    };

    return (
        <Select
            name="favoriteLearningMethod"
            label="What is your favorite way to learn?"
            placeholder="Choose one or several options"
            onChange={handleLearningMethodChange}
            value={selectedLearningMethods}
            list={learnList}
        />
    );
};

export default LearningPreferencesOnboarding;
