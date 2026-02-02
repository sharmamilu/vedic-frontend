import axios from "axios";

const affirmationsAPIEn = "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random";

export const getAffirmations = async () => {
    try {
        const response = await axios.get(affirmationsAPIEn);
        return response.data;
    } catch (error) {
        console.error("Error fetching affirmations:", error);
        throw error;
    }
};