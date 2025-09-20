
import { GoogleGenAI, Type } from '@google/genai';
import { QuizQuestion } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const cleanHtml = (html: string): string => {
    return html.replace(/<[^>]*>?/gm, ' ');
}

export const generateQuizQuestion = async (articleContent: string): Promise<QuizQuestion | null> => {
    const textContent = cleanHtml(articleContent);

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Based on the following article content, create one multiple-choice (mcq) question. Ensure the options are distinct and there is only one correct answer. The question should be of medium difficulty.
---
ARTICLE CONTENT:
${textContent}
---
`,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        question: { type: Type.STRING },
                        options: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING }
                        },
                        answer: { type: Type.STRING }
                    }
                },
            },
        });

        const jsonText = response.text.trim();
        const parsedResponse = JSON.parse(jsonText);

        if (
            parsedResponse.question &&
            Array.isArray(parsedResponse.options) &&
            parsedResponse.options.length === 4 &&
            parsedResponse.answer
        ) {
            return {
                id: `gen-${Date.now()}`,
                question: parsedResponse.question,
                type: 'mcq',
                options: parsedResponse.options,
                answer: parsedResponse.answer,
                difficulty: 'medium',
            };
        } else {
            console.error("Generated JSON does not match expected schema:", parsedResponse);
            return null;
        }

    } catch (error) {
        console.error("Error generating quiz question from Gemini:", error);
        throw new Error("Failed to generate a new quiz question.");
    }
};
