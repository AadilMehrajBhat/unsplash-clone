import { Children } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const SuggestionHeading = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.25;
  color: #111111;
`;

const SuggestionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0.85em 0;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
`;

const SuggestionItem = styled.a`
  padding: 8px 16px;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
  border: 1px solid ${(props) => props.theme.colors.grey};
  color: #767676;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.1s ease-in-out;
  &:hover {
    background-color: #f5f5f5;
  }
`;

function SuggestionList({ title, suggestions }) {
  return (
    <>
      <SuggestionHeading>{title}</SuggestionHeading>
      <SuggestionContent>
        {Children.map(suggestions, (suggestion) => (
          <Link href={`/s/photos/${suggestion}`} passHref>
            <SuggestionItem>{suggestion}</SuggestionItem>
          </Link>
        ))}
      </SuggestionContent>
    </>
  );
}

export default SuggestionList;