import { model } from "./ai";
import { promptStructure } from "./promptStructure";
import { promptStructureInput } from "../types/gitManagement";

export async function summarizeGitData(input: promptStructureInput): Promise<string> {
    const prompt = promptStructure(input);

    const result = await model.generateContent(prompt);
    return result.response.text();

}