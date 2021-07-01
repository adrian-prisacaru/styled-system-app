import {Box} from "theme-ui";
import LocalStorageDB from "local-storage-db";
import Article from "./components/Article";

const db = new LocalStorageDB('documents');

const Articles = () => {
  const articles = db.get('articles');
  return (
    <Box>
      { articles && articles.map(article => <Article article={article}/>) }
    </Box>
  )
}

export default Articles
