import { useState } from 'react';

export function CreateFeedback() {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handleFeedbackChange = (e: React.ChangeEvent<HTMLInputElement>) => setFeedback(e.target.value);
    const handleSubmit = () => {
        fetch("http://localhost:3000/feedback", {
            method: 'POST',
            body: JSON.stringify({ name, feedback }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(async (res) => {
            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.msg || 'Failed to submit feedback');
            }
            const json = await res.json();
            alert("Feedback published successfully");
        })
        .catch(err => {
            console.error("Error:", err.message);
            alert("Error: " + err.message);
        });
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <input
                style={inputStyle}
                type="text"
                placeholder="Name"
                onChange={handleNameChange}
                value={name}
            />
            <input
                style={inputStyle}
                type="text"
                placeholder="Feedback"
                onChange={handleFeedbackChange}
                value={feedback}
            />
            <button
                style={buttonStyle}
                onClick={handleSubmit}
            >
                Give Feedback
            </button>
        </div>
    );
}

const inputStyle = {
    width: '90%',
    padding: '10px',
    fontSize: '16px',
    margin: '10px 0',
    display: 'block'
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '10px 0',
    display: 'block'
};
