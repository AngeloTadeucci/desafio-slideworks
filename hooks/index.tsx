import { Props } from "../pages/_app";
import { BookProvider } from "./BookFeed";

export default function AppProvider({children} : Props) {
    return <BookProvider>{children}</BookProvider>;
}
