import Link from "next/link"
import styled from "styled-components"

const AboutStyled = styled.main`
background: green;
height: 500px;
display: flex;
align-items: center;
width: 100%;`

export default function About () {
  return (
    <AboutStyled>
      <h1>Estou no about</h1>
      <p>tem algum conteudo deo header e footer em volta de mim?</p>
      <Link href="/">voltar para a principal</Link>
    </AboutStyled>
  )
}