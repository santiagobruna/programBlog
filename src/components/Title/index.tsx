import { ReactNode } from 'react';
import { Title as TitleStyle } from './style';
export type Props = {
  children: ReactNode,
  fontSize?: number,
  color?: string,
}
const Title = (props: Props) => <TitleStyle fontSize={props.fontSize} color={props.color}>{props.children}</TitleStyle>

export default Title
