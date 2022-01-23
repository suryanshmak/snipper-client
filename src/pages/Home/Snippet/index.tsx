import { Link } from "react-router-dom";
import { Snippet as SnippetType } from "../../../contexts/SnippetProvider";
import { StyledA } from "../../../components/NavBar/styles";
import { StyledTD, StyledTR } from "../styles";

type SnippetProps = {
  el: SnippetType;
};

const Snippet = ({ el }: SnippetProps) => {
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

  const humanDate = (date: Date) => {
    return `${date.getDate()} ${
      monthNames[date.getMonth()]
    } ${date.getUTCHours()}:${date.getUTCMinutes()}`;
  };

  return (
    <StyledTR>
      <StyledTD>
        <StyledA to={`/snippet/${el.id}`}>{el.title}</StyledA>
      </StyledTD>
      <StyledTD>{humanDate(new Date(el.created))}</StyledTD>
      <StyledTD>#{el.id}</StyledTD>
    </StyledTR>
  );
};

export default Snippet;
