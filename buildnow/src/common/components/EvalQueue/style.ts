// style.ts
import styled from "styled-components";

export const QueueContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    4,
    23.125rem
  ); // 5 columns, each the width of the card
  grid-template-rows: repeat(
    auto-fill,
    10rem
  ); // rows as tall as the card height
  grid-gap: 2rem 1.5rem; // This sets a fixed gap between the rows and columns
  align-content: start; // Aligns the grid content to the top of the container
  width: 97rem // Sets the container to take full width of its parent
  height: 27rem; 
  padding: 3rem; // Maintains padding around the grid as per your design
  box-sizing: border-box; // Ensures padding is included in the width and height
`;
