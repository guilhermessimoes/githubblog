import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: 2rem;  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem; 
  a {
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
  }
`

export const CardContent = styled.div`
  background-color: ${props => props.theme['base-post']};
  width: 100%;
  padding: 3rem;
  cursor: pointer;
 
;
`

export const ParagraphCardContent = styled.div`
  margin-bottom: 1rem;
  color: ${props => props.theme['base-text']} !important;
  
  p {
    text-align: justify;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }  
`

export const CardContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;

  h1 {
    width: 350px;
    font-weight: bold;
    font-size: 24px;
    color: ${props => props.theme['base-title']};
  }
  span {
    color: ${props => props.theme['base-span']};    
  }
`