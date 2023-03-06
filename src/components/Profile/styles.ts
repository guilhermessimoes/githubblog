import styled from "styled-components";

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  margin-top: -5rem;
`

export const ProfileCard = styled.div`
  background-color: ${props => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 2rem;

  img{
    height: 148px;
    width: 148px;
    border-radius: 8px;
  }  
`

export const HeaderCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  h1 {
    color: ${props => props.theme['base-title']};
    font-size: 24px;
  }

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
    font-weight: bold;
    color: ${props => props.theme['blue']};
  }
`

export const FooterCardContent = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`