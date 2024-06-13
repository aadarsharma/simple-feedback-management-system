import React from 'react';

// Define the interface for a single feedback item
interface Feedback {
    name: string;
    feedback: string;
}

// Define the interface for the props of the Feedbacks component
interface FeedbacksProps {
    feedbacks: Feedback[];
}

export function Feedbacks({ feedbacks }: FeedbacksProps) {
    return (
        <div>
            {feedbacks.map((feedback, index) => (
                <div key={index}>
                    <h1>{feedback.name}</h1>
                    <p>{feedback.feedback}</p>
                </div>
            ))}
        </div>
    );
}
