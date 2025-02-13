import { useState } from "react";
import Title from "../../components/Title";
import { Container } from "../../styles";
import { FirstContainer, SecondContainer } from "./style";

// Definindo o tipo da prop para que possamos acessar os dados dinamicamente
interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
}
interface CardProps {
  post: Post;
}
const Card: React.FC<CardProps>= ({post}) => {
  const [image, setImage] = useState<string>('./favoritos.svg');
  const handleImage = (): void => {
    if (image === './favoritos.svg') {
      setImage('./coracao-preenchido.svg');
    } else {
      setImage('./favoritos.svg');
    }
  };
  return(
    <Container>
      <FirstContainer>
        <span>{post.date} - {post.author}</span>
        <img onClick={handleImage} src={image} alt="ícone de coração"/>
      </FirstContainer>
      <SecondContainer>
        <Title fontSize={20}>
          <span>{post.title}</span>
        </Title>
        <p>
          {post.content}
        </p>
      </SecondContainer>
    </Container>
  )
}
export default Card;
