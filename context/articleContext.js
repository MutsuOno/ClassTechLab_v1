import { createContext, useState } from "react";

const initialState = {
  searchWord: "",
  category: "",
  school: "",
  articles: [],
};

export const ArticleContext = createContext(initialState);

export const useArticleContext = () => {
  const [searchWord, setWord] = useState("");
  const [storedArticles, setStoredArticles] = useState([]);
  const [category, setCategory] = useState("");
  const [school, setSchool] = useState("");

  return {
    searchWord,
    category,
    school,
    storedArticles,
    setWord,
    setCategory,
    setSchool,
    setStoredArticles,
  };
};
