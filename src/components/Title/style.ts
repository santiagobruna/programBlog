import styled from "styled-components";

import {Props} from './index'

export const Title = styled.h3<Props>`
  font-size: ${(props) => props.fontSize ? props.fontSize + 'px' : '14px'};
  font-weight: bold;
  color:  #fff;
  margin-bottom: 16px;
  span {
    color: #76453b;
  }
`
