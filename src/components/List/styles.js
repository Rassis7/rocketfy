import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  /**
  Isso flex: 0 0 320px; é um atalho para isso: 
  flex-grow:0; 
  flex-shrink:0;
  flex-basis:320px

  flex-grow: Habilidade de um componente esticar, uso o 0 para definir uma largura 
    fixa, se fosse 1 ele esticava para ocupar todo espaço possível;
  flex-shrink: Habilidade de um componente reduzir, uso o 0 para ele manter e criar 
    uma scroll, se fosse 1 ele reduziria de acordo com a tela
  flex-basis: Determina o tamanho base desse elemento, ele sabe que largura e não altura,
    porque o elemento que está em volta (Board) está com flex-direction: row (default)
  */
  opacity: ${props => (props.done ? 0.6 : 1)};

  /** & + div: Isso diz que quero adc alguma coisa em uma div que antes exite alguma div,
  ou seja, ele vai pular a primeira div */
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
