import { useContext } from "react";
import { useParams } from "react-router-dom";
import { SnippetContext } from "../../contexts/SnippetProvider";
import { MetaData, Page, Pre, Snippet, Strong, Time } from "./styles";

const SnippetPage = () => {
  const { id } = useParams();
  const snippet = useContext(SnippetContext).find((el) => el.id === Number(id));
  return (
    <Page>
      <Snippet>
        <MetaData>
          <Strong>{snippet?.title}</Strong>
          <span style={{ float: "right" }}>#{snippet?.id}</span>
        </MetaData>
        <Pre>
          <code>{snippet?.content}</code>
        </Pre>
        <MetaData>
          <Time>Created: {snippet?.created}</Time>
          <Time>Expires: {snippet?.expires}</Time>
        </MetaData>
      </Snippet>
    </Page>
  );
};

export default SnippetPage;
