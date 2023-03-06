import styled from "styled-components";

export const ParagraphCardContent = styled.p`
  margin-bottom: 1rem;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem;
  margin-top: 2rem;  
  text-align: justify;
  display: -webkit-box;
  font-size: 16px;
  line-height: 1.8;
  
  color: ${props => props.theme['base-text']};
`