import styled from "styled-components";

export const SearchContainer = styled.section`
  display: grid;
  gap: 1rem;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: 5rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 1px solid ${props => props.theme['base-border']};
    background-color: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-label']};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme['base-label']};
    }
  }
`

export const SearchHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`