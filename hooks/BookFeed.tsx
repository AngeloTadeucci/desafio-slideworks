import { createContext, useContext, useState } from "react";
import { Props } from "../pages/_app";
import api from "../services/API";

interface BookData {
    id: number;
    title: string;
    author: string;
    genre: string;
    description: string;
    isbn: string;
    image: string;
    published: string;
    publisher: string;
}

interface BookContext {
    booksData?: BookData[];
    loadingBooks: boolean;
    getAllBooks: () => Promise<void>;
}

const BookContext = createContext<BookContext>({} as BookContext);

export const BookProvider = ({ children }: Props) => {
    const [booksData, setBooksData] = useState<BookData[]>();

    const [loadingBooks, setLoadingBooks] = useState(true);

    const getAllBooks = async () => {
        if (typeof window === "undefined") {
            // don't try to execute request on server
            return;
        }

        try {
            const response = await api.get("/books");

            setBooksData(response.data.data);
        } catch (error) {
            return;
        }

        setLoadingBooks(false);
    };

    return (
        <BookContext.Provider
            value={{
                booksData,
                loadingBooks,
                getAllBooks
            }}
        >
            {children}
        </BookContext.Provider>
    );
};

function useBookFeed(): BookContext {
    const context = useContext(BookContext);

    if (!context) {
        throw new Error("useBookFeed must be used within an BookContext");
    }

    return context;
}

export { useBookFeed };
export type { BookData };

