import React from "react";

import Topics from "../topics/Topics";

import styles from "./TopicSelectionOnboarding.module.css";

interface TopicSelectionOnboardingProps {
}

interface Topic {
    value: number;
    label: string;
}

const TopicSelectionOnboarding: React.FC<TopicSelectionOnboardingProps> = () => {
    const topicsList = [
        { value: 0, label: "Topic 1" },
        { value: 1, label: "Topic 2" },
        { value: 2, label: "Topic 3" },
        { value: 3, label: "Topic 4" },
        { value: 4, label: "Topic 5" },
        { value: 5, label: "Topic 6" },
        { value: 6, label: "Topic 7" },
        { value: 7, label: "Topic 8" },
        { value: 8, label: "Topic 9" },
        { value: 9, label: "Topic 10" },
        { value: 10, label: "Topic 11" },
        { value: 11, label: "Topic 12" },
        { value: 12, label: "Topic 13" },
    ];

    const handleSelectTopics = (selectedTopics: Topic[]) => {
        console.log('Selected Topics:', selectedTopics);
    };

    return (
        <>
            <p className={styles.subtitle}>Choose topics you are interested in</p>
            <Topics
                onSelectTopics={handleSelectTopics}
                topicsList={topicsList}
            />
        </>
    );
}

export default TopicSelectionOnboarding;