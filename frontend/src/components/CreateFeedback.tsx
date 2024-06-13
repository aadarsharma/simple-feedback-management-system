import React, { useState, ChangeEvent } from 'react';

interface CreateFeedbackProps {}

export function CreateFeedback(props: CreateFeedbackProps) {
    const [name, setName] = useState<string>('');
    const [feedback, setFeedback] = useState<string>('');

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleFeedbackChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = () => {
        fetch("http://localhost:3000/feedback", {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                feedback: feedback,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(async (res) => {
            const json = await res.json();
            alert("Feedback published successfully");
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Failed to publish feedback");
        });
    };

    return (
        <div>
            <input
                style={{
                    width: '10%',
                    padding: '10px',
                    fontSize: '16px',
                    margin: 10
                }}
                type="text"
                placeholder="name"
                onChange={handleNameChange}
            /><br />
            <input
                style={{
                    width: '10%',
                    padding: '10px',
                    fontSize: '16px',
                    margin: 10
                }}
                type="text"
                placeholder="feedback"
                onChange={handleFeedbackChange}
            /><br />
            <button
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    margin: 10
                }}
                onClick={handleSubmit}
            >
                Give feedback
            </button>
        </div>
    );
}
