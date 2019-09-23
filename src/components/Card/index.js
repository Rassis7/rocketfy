import React, { useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";

import BoardContext from "../Board/context";

import { Container, Label } from "./styles";

//O card é o elemento que tanto pode ser arrastado, quanto é o que irá soltar por cima.
//Por isso uso os hooks useDrag e useDrop
export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", index, id: data.id, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [_, dropRef] = useDrop({
    accept: "CARD",
    //item => Qual card está sendo arrastado, ele pega tudo eu definro dentro do item no useDrag
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      //Para mover entre listas
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex)
        return;

      const targetSize = ref.current.getBoundingClientRect();

      //Pegar o centro do card
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      //Saber o quanto do item eu arrastei
      const draggedOffset = monitor.getClientOffset();
      //Saber o quanto eu "entrei" no outro card
      const draggedTop = draggedOffset.y - targetSize.top;

      //Se eu arrastar um item que está acima de outro, ficando acima, faço nada!
      if (draggedIndex < targetIndex && draggedTop < targetCenter) return;

      //Faço a mesma condição, mas depois
      if (draggedIndex > targetIndex && draggedTop > targetCenter) return;

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  });

  //Isso pq o react não me permite ter duas referências dentro do mesmo component
  //Com isso, coloco um ref dentro do outro!
  dragRef(dropRef(ref));

  return (
    <Container isDragging={isDragging} ref={ref}>
      <header>
        {data.labels.map(label => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Container>
  );
}
