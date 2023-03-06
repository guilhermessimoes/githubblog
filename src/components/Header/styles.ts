import styled from "styled-components";

export const HeaderContainer = styled.header`
  /* background-color: ${props => props.theme['base-label']}; */
  background: linear-gradient(
      180deg,      
      rgba(11, 27, 43, 80%),
      rgba(50, 148, 248, 10%)
  );
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

`

