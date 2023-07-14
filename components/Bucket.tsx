import { Children, type CSSProperties, type FC  , ReactNode} from 'react'
import { useDrop } from 'react-dnd'

import { ItemTypes } from './Box'

const style: CSSProperties = {
    flex: 1,
    height: '100%',
    width: '100%',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	color: 'white',
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left',
}

interface BucketProps {
	children: ReactNode,
	iamDroped: ()=> void
}

export const Bucket: React.FC<BucketProps> = ({ children, iamDroped }: BucketProps) => {
	const [{ canDrop, isOver }, drop] = useDrop(() => ({
		accept: ItemTypes.BOX,
		drop: () => {
			// { name: 'Dustbinas' }
			// console.log('sdfdsfdsf', drop);
			iamDroped()
}
		,
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	}))

	const isActive = canDrop && isOver
	let backgroundColor = '#222'
	if (isActive) {
		backgroundColor = 'darkgreen'
	} else if (canDrop) {
		backgroundColor = 'darkkhaki'
	}

	return (
		<div ref={drop} style={{ ...style, backgroundColor }} data-testid="dustbin">
            {isActive ? 'Release to drop' : 'Drag a box here'}
            {children}
		</div>
	)
}