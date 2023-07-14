import React, { useState, forwardRef, Ref, CSSProperties } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';


interface ItemProps {
    id: string;
    children: React.ReactNode;
    style?: CSSProperties;
}

// eslint-disable-next-line react/display-name
const Item = forwardRef<HTMLDivElement, ItemProps>(({ id, children, style }, ref) => {
      return <div ref={ref} style={style}>{id}</div>;

});



const SortableItem = ({ id }: ItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Item id={id} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      ITEM 1
    </Item>
  );
};

export const SortableTable = () => {
  const [items] = useState(['1sdvsvdv', 'ssdfsfd2', '3dfdsfdsfdsd']);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((id) => (
          <SortableItem key={id} id={id} >{id}</SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
};
