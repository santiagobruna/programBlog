import { useState } from "react";
import GlobalStyle from "./styles";
import Blog from "./containers/Blog";
import Card from "./containers/Card";
import styled from 'styled-components';
import { posts } from "./data";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const SearchInput = styled.input`
  width: 75%;
  color: #FFF;
  height: 40px;
  background-color: rgb(34, 34, 34);
  border: 1px solid #43766c;
  padding-left: 20px;
`;

function App() {
  const [termoPesquisa, setTermoPesquisa] = useState("");

  const handlePesquisaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermoPesquisa(e.target.value);
  };
  // filtrando posts
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(termoPesquisa.toLowerCase())  ||
    post.content.toLowerCase().includes(termoPesquisa.toLowerCase())
  );
  return (
    <>
    <GlobalStyle/>
      <Blog></Blog>
      <SearchContainer>
        <SearchInput
          type="search"
          value={termoPesquisa}
          onChange={handlePesquisaChange}
          placeholder="Pesquisar no ProgamBlog"
        />
      </SearchContainer>
      {filteredPosts.map((post) => (
        <Card key={post.id} post={post}></Card>
      ))}
    </>
  )
}

export default App
