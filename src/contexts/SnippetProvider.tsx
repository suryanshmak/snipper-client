import { createContext, useEffect, useState, ReactElement } from "react";
import axios from "axios";

export type Snippet = {
  id: number;
  title: String;
  content: String;
  created: Date | string;
  expires: Date | string;
};

export const SnippetContext = createContext<Snippet[]>([]);

type SnippetProviderProps = {
  children: ReactElement;
};

const SnippetProvider = ({ children }: SnippetProviderProps) => {
  const [snippets, setSnippets] = useState<Snippet[]>([]);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const humanDate = (stringDate: string | Date) => {
    const date = new Date(stringDate);
    return `${date.getDate()} ${
      monthNames[date.getMonth()]
    } ${date.getUTCHours()}:${date.getUTCMinutes()}`;
  };

  const formatDate = (response: Snippet[]) => {
    return response.map((snippet: Snippet) => {
      snippet.created = humanDate(snippet.created);
      snippet.expires = humanDate(snippet.expires);
      return snippet;
    });
  };

  useEffect(() => {
    const func = async () => {
      const response = await axios.get<Snippet[]>("http://localhost:8080/", {
        responseType: "json",
      });
      setSnippets(formatDate(response.data));
    };
    func();
  }, []);

  return (
    <SnippetContext.Provider value={snippets}>
      {children}
    </SnippetContext.Provider>
  );
};

export default SnippetProvider;
