// import React, {ChangeEvent, useState} from 'react';
//
// import Input from "../input/Input";
// import Select from "../select/Select";
//
//
// interface PersonalGoalsOnboardingProps {
// }
//
// const PersonalGoalsOnboarding: React.FC<PersonalGoalsOnboardingProps> = () => {
//     const [selectedCountry, setSelectedCountry] = useState<string>("");
//
//     const topicsList = [
//         'AI',
//         'Career',
//         'Investment',
//         'Psychology',
//         'Marketing',
//         'Medicine',
//         'Design',
//         'Sales',
//         'Engineering',
//         'Creative',
//         'Software',
//         'Traveling',
//         'Writing',
//     ];
//
//     const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
//
//     };
//
//     return (
//         <>
//             <Select
//                 name="purpose"
//                 label="Purpose"
//                 placeholder="What are you here for?"
//                 // @ts-ignore
//                 onChange={handleCountryChange}
//                 value={selectedCountry}
//                 list={topicsList}
//             />
//         </>
//     );
// };
//
// export default PersonalGoalsOnboarding;
import React, { useState } from 'react';

import Input from "../input/Input";
import Button from "../button/Button";

import styles from './PersonalGoalsOnboarding.module.css';
import {useNavigate} from "react-router-dom";

interface PersonalGoalsInputProps {
    onAddGoal: (newGoal: string) => void;
}

const PersonalGoalsInput: React.FC<PersonalGoalsInputProps> = ({ onAddGoal }) => {
    const [newGoal, setNewGoal] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewGoal(e.target.value);
    };

    const handleAddGoal = () => {
        if (newGoal.trim() !== '') {
            onAddGoal(newGoal);
            setNewGoal('');
        }
    };

    return (
        <div className={styles.goalsInputContainer}>
            <Input
                required
                type="text"
                name="newGoal"
                label="Create new goal"
                placeholder="Add new goal"
                value={newGoal}
                onChange={handleInputChange}
            />
            <Button className={styles.button} onClick={handleAddGoal}>+</Button>
        </div>
    );
};

interface PersonalGoalsListProps {
    goals: string[];
}

const PersonalGoalsList: React.FC<PersonalGoalsListProps> = ({ goals }) => {
    return (
        <ul className={styles.goalsList}>
            {goals.map((goal, index) => (
                <li key={index}>{`${index + 1}. ${goal}`}</li>
            ))}
        </ul>
    );
};

const PersonalGoalsOnboarding: React.FC = () => {
    const [goals, setGoals] = useState<string[]>([]);

    const handleAddGoal = (newGoal: string) => {
        setGoals([...goals, newGoal]);
    };

    return (
        <div className={styles.goalsOnboarding}>
            <PersonalGoalsList goals={goals} />
            <PersonalGoalsInput onAddGoal={handleAddGoal} />
        </div>
    );
};

export default PersonalGoalsOnboarding;

