import { Response, Request } from "express";
import suggestionsModal from "../schemas/suggestions";

interface Suggestions {
  id: string;
  accountNameSuggestions: string[];
  skillSuggestions: string[];
}

const updateSuggestions = async function (
  accountName: string,
  skillSet: string[]
) {
  const suggestions: Suggestions[] | any = await suggestionsModal.find();
  const isAccountName =
    suggestions[0].accountNameSuggestions.includes(accountName);
  const newSkills = skillSet.filter((skill: string) => {
    return !suggestions[0].skillSuggestions.includes(skill);
  });
  const id = suggestions[0].id;
  if (!isAccountName || newSkills.length > 0) {
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

const suggestionsController = {
  updateSuggestions,
  getSuggestions,
};

export default suggestionsController;
