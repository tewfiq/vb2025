// A Genkit Flow that generates project ideas based on user interests.

'use server';

/**
 * @fileOverview An AI agent that generates project ideas for users based on their interests.
 *
 * - generateProjectIdeas - A function that generates project ideas.
 * - ProjectIdeasInput - The input type for the generateProjectIdeas function.
 * - ProjectIdeasOutput - The return type for the generateProjectIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectIdeasInputSchema = z.object({
  interests: z
    .string()
    .describe('A description of the user\'s interests and skills.'),
});
export type ProjectIdeasInput = z.infer<typeof ProjectIdeasInputSchema>;

const ProjectIdeasOutputSchema = z.object({
  projectIdeas: z
    .array(z.string())
    .describe('A list of project ideas based on the user input.'),
});
export type ProjectIdeasOutput = z.infer<typeof ProjectIdeasOutputSchema>;

export async function generateProjectIdeas(
  input: ProjectIdeasInput
): Promise<ProjectIdeasOutput> {
  return generateProjectIdeasFlow(input);
}

const projectIdeasPrompt = ai.definePrompt({
  name: 'projectIdeasPrompt',
  input: {schema: ProjectIdeasInputSchema},
  output: {schema: ProjectIdeasOutputSchema},
  prompt: `You are an expert in generating project ideas for coding workshops.

  Generate a list of project ideas based on the user's interests and skills.
  The project ideas should be suitable for a 2-hour coding workshop.

  Interests and Skills: {{{interests}}}

  Project Ideas:`,
});

const generateProjectIdeasFlow = ai.defineFlow(
  {
    name: 'generateProjectIdeasFlow',
    inputSchema: ProjectIdeasInputSchema,
    outputSchema: ProjectIdeasOutputSchema,
  },
  async input => {
    const {output} = await projectIdeasPrompt(input);
    return output!;
  }
);
