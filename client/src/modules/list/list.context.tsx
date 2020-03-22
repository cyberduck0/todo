import React from 'react';
import { TODO_LIST_MAX_PER_PAGE } from './list-item/list-item.model';

const DisplayLimit = React.createContext<[number, (arg: number) => void]>([TODO_LIST_MAX_PER_PAGE, () => {}]);

export default DisplayLimit;