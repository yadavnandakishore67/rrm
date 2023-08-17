import { Response, Request } from "express";
import suggestionsModal from "../schemas/suggestions";

interface Suggestions {
  id: string;
  accountNameSuggestions: string[];
  skillSuggestions: string[];
}

const updateSuggestions = async function (
  skillSet: string[],
  accountName: string
) {
  const suggestions: Suggestions[] | any = await suggestionsModal.find();
  const isAccountName =
    suggestions[0].accountNameSuggestions.includes(accountName);
  let newSkills = skillSet.filter((skill: string) => {
    return !suggestions[0].skillSuggestions.includes(skill);
  });
  const id = suggestions[0].id;
  if (!isAccountName || newSkills.length > 0) {
    newSkills = newSkills.map(
      (skill) => skill.charAt(0).toUpperCase() + skill.slice(1)
    );
    const updatedAccountNames = [
      ...new Set(suggestions[0].accountNameSuggestions.concat(accountName)),
    ];
    const updatedSkills = [
      ...new Set(suggestions[0].skillSuggestions.concat(newSkills)),
    ];
    const updatedSuggestions = {
      _id: id,
      accountNameSuggestions: updatedAccountNames,
      skillSuggestions: updatedSkills,
    };
    await suggestionsModal.findOneAndUpdate({ _id: id }, updatedSuggestions);
  }
};

const getSuggestions = async (req: Request, res: Response) => {
  try {
    const suggestions = await suggestionsModal.find();
    res.status(200).json({ suggestions: suggestions });
  } catch (error) {
    res.send(error);
  }
};

const updateSkillSuggestions = async function (skills: string[]) {
  const suggestions: Suggestions[] | any = await suggestionsModal.find();
  let newSkills = skills.filter(
    (skill: string) => !suggestions[0].skillSuggestions.includes(skill)
  );
  if (newSkills.length > 0) {
    newSkills = newSkills.map(
      (skill) => skill.charAt(0).toUpperCase() + skill.slice(1)
    );
    const id = suggestions[0].id;
    const accountNames = suggestions.accountNameSuggestions;
    const updatedSkills = [
      ...new Set(suggestions[0].skillSuggestions.concat(newSkills)),
    ];
    const updatedSuggestions = {
      _id: id,
      accountNameSuggestions: accountNames,
      skillSuggestions: updatedSkills,
    };
    await suggestionsModal.findOneAndUpdate({ _id: id }, updatedSuggestions);
  }
};

const suggestionsController = {
  updateSuggestions,
  getSuggestions,
  updateSkillSuggestions,
};

export default suggestionsController;
