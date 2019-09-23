import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 30px 0;
  /** Isso fará com que ele ocupe a tela toda (menos os 80px do header), isso porque
  quero colocar uma borda que ocupe a tela toda e não somente até onde existe card */
  height: calc(100% - 80px);
`;
