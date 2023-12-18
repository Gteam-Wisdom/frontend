import React, { useState } from 'react';

import styles from "./Topics.module.css";

interface Topic {
    value: number;
    label: string;
}

interface TopicsProps {
    onSelectTopics: (selectedTopics: Topic[]) => void;
    topicsList: Topic[];
}

const Topics: React.FC<TopicsProps> = ({ onSelectTopics, topicsList }) => {
    const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);

    const toggleTopic = (topic: Topic) => {
        const newSelectedTopics = selectedTopics.some(t => t.value === topic.value)
            ? selectedTopics.filter((selectedTopic) => selectedTopic.value !== topic.value)
            : [...selectedTopics, topic];

        setSelectedTopics(newSelectedTopics);
        onSelectTopics(newSelectedTopics);
    };

    return (
        <div className={styles.checkboxWrapper}>
            {topicsList.map((topic) => (
                <label
                    key={topic.value}
                    className={`${styles.checkbox} ${selectedTopics.some(t => t.value === topic.value) ? styles.checked : ''}`}
                >
                    <input
                        type="checkbox"
                        onChange={() => toggleTopic(topic)}
                        checked={selectedTopics.some(t => t.value === topic.value)}
                    />
                    <span>{topic.label}</span>
                </label>
            ))}
        </div>
    );
};

export default Topics;
