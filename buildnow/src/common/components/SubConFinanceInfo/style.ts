// style.ts
import styled from "styled-components";

export const TableComponent = styled.div`
  width: 85%;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  margin-right: 5rem;
  margin-left: 5rem;
  margin-bottom: 3rem;
  text-align: center; // Align the text to the left
  &:first-child {
    margin-top: 1.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap; // Allows child elements to wrap onto the next line
  align-items: center;
  justify-content: center;
  width: 60rem;
  padding: 1rem 0rem // Updated to add padding on all sides
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

export const SmallContainer = styled.div`
  display: flex;
  align-items: center;
  width: 53.9rem;
  border-radius: 0.25rem;
  background-color: none;
`;

export const LargeContainer = styled.div`
display: flex; // Use flex to align items
align-items: center; // This will vertically center the text
justify-content: center; // This will horizontally center the text
  width: 60rem;
  height : 16rem;
  padding: 1rem 0rem // Updated to add padding on all sides
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
`;

export const SmallIndividualTableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 25%;
  margin: 2rem 0rem;
`;
export const MiddleIndividualTableContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: center;
  width: 50%;
  margin-bottom: 1.2rem;
  margin-top: 0.5rem;

  &:first-child() {
    margin-left: 5%;
  }

  &:last-child() {
    margin-right: 5%;
  }
`;

export const TableHeader = styled.div`
  font-size: 1rem;
  text-align: left; // Align the text to the left
  color: black; // Set the text color
  display: flex; // Use flexbox for alignment
  align-items: center; // Center items vertically
  gap: 0.5rem; // Gap between the square and the text
  margin-bottom: 0.5rem; // Space below the header, adjust as needed
`;

export const TableTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: left; // Align the text to the left
  color: #333; // Set the text color
  margin-bottom: 0.3rem; // Space below the header, adjust as needed
`;
