import { z } from 'zod';

// Define the createFeedback schema
export const createFeedbackSchema = z.object({
    name: z.string(),
    feedback: z.string(),
});

// Define the updateFeedback schema
export const updateFeedbackSchema = z.object({
    id: z.string(),
});

// Export the schemas
export {
    createFeedbackSchema as createFeedback,
    updateFeedbackSchema as updateFeedback
};
