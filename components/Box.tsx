import type { CSSProperties, FC, ReactNode } from 'react'
import { useDrag } from 'react-dnd'

export const ItemTypes = {
    BOX: 'box',
    CARD: 'card',
}

const style: CSSProperties = {
    flex:1,
	border: '1px dark-gray solid',
	backgroundColor: 'white',
	padding: '0.1rem 1rem',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    marginTop: '0.5rem',
	cursor: 'move',
	color: 'black',
	borderRadius: 10
}

export interface BoxProps {
    item: any,
    name: string
    children: ReactNode,
    movedItemSuccesHanlder: (item: any)=> void // TODO Put the Item Type
}

interface DropResult {
    name: string,
}

export const Box: FC<BoxProps> = function Box({ item, name, children, movedItemSuccesHanlder }: BoxProps) {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: ItemTypes.BOX,
		product: { name, ...item },
		end: (product, monitor) => {
			const dropResult = monitor.getDropResult<DropResult>()
			if (product && dropResult) {
                // alert(`You dropped ${product.id} into ${dropResult.name}!`)
                movedItemSuccesHanlder(item);
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
			handlerId: monitor.getHandlerId(),
		}),
	}))

	const opacity = isDragging ? 0.4 : 1
	return (
		<div ref={drag} style={{ ...style, opacity }} data-testid={'box'}>
            {name}
            {children}
		</div>
	)
}