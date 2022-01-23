import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import {
  SnippetContext,
  Snippet as SnippetType,
} from "../../contexts/SnippetProvider";
import Snippet from "./Snippet";
import { Heading, StyledTH, StyledTR, Table } from "./styles";

const Home = () => {
  const snippets = useContext(SnippetContext);

  if (!snippets) {
    return <Spinner />;
  }

  return (
    <div style={{ width: "100%", display: "grid", placeItems: "center" }}>
      <Heading>Latest Snippets</Heading>
      <Table>
        <tbody>
          <StyledTR>
            <StyledTH>Title</StyledTH>
            <StyledTH>Created</StyledTH>
            <StyledTH>ID</StyledTH>
          </StyledTR>
          {snippets.map((el: SnippetType, id: number) => (
            <Snippet el={el} key={String(id)} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
