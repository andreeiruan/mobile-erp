import React from 'react';

import { Icon } from './styles';

interface Props{
  image: any
}

const IconsTabs: React.FC<Props> = ({ image }: Props) => (
  <Icon source={image} />
);

export default IconsTabs;
