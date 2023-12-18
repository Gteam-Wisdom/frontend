// import React from "react";
// import { ProgressBar, Step } from "react-step-progress-bar";
//
// import styles from "./MultiStepProgressBar.module.css";
//
// interface MultiStepProgressBarProps {
//     page: number;
//     onPageNumberClick: (pageNumber: string) => void;
// }
//
// const MultiStepProgressBar: React.FC<MultiStepProgressBarProps> = ({ page, onPageNumberClick }) => {
//     const getStepClass = (index: number) => {
//         const stepClass = `${styles.indexedStep} ${index === 1 ? styles.firstStep : ''} ${index === 4 ? styles.lastStep : ''}`;
//
//         if (index === page) {
//             return `${stepClass} ${styles.activeStep}`;
//         }
//         return stepClass;
//     };
//
//     let stepPercentage = 0;
//
//     console.log(page);
//     if (page === 1) {
//         stepPercentage = 16;
//     } else if (page === 2) {
//         stepPercentage = 49.5;
//     } else if (page === 3) {
//         stepPercentage = 82.5;
//     } else if (page === 4) {
//         stepPercentage = 100;
//     } else {
//         stepPercentage = 0;
//     }
//
//     return (
//         <ProgressBar percent={stepPercentage}>
//             {[1, 2, 3, 4].map((index) => (
//                 <Step key={index}>
//                     {({ accomplished }) => (
//                         <div
//                             className={`${getStepClass(index)} ${accomplished ? styles.accomplished : null}`}
//                             onClick={() => onPageNumberClick(index.toString())}
//                         ><span>{`Step ${index}`}</span></div>
//                     )}
//                 </Step>
//             ))}
//         </ProgressBar>
//     );
// };
//
// export default MultiStepProgressBar;

import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";

import styles from "./MultiStepProgressBar.module.css";

interface MultiStepProgressBarProps {
    page: number;
    onPageNumberClick: (pageNumber: string) => void;
    totalSteps: number;
}

const MultiStepProgressBar: React.FC<MultiStepProgressBarProps> = ({
    page,
    onPageNumberClick,
    totalSteps,
}) => {
    const getStepClass = (index: number) => {
        const stepClass = `${styles.indexedStep} ${index === 1 ? styles.firstStep : ''} ${
            index === totalSteps ? styles.lastStep : ''
        }`;

        if (index === page) {
            return `${stepClass} ${styles.activeStep}`;
        }
        return stepClass;
    };

    const stepPercentage = (100 / totalSteps) * page;

    return (
        <ProgressBar percent={stepPercentage}>
            {Array.from({ length: totalSteps }).map((_, index) => (
                <Step key={index + 1}>
                    {({ accomplished }) => (
                        <div
                            className={`${getStepClass(index + 1)} ${
                                accomplished ? styles.accomplished : null
                            }`}
                            onClick={() => onPageNumberClick((index + 1).toString())}
                        >
                            <span>{`Step ${index + 1}`}</span>
                        </div>
                    )}
                </Step>
            ))}
        </ProgressBar>
    );
};

export default MultiStepProgressBar;
