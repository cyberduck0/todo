import DragIndicator from '@material-ui/icons/DragIndicator';
import React, { Component } from 'react';
import './sortable-list.component.scss';

type SortableItem<T> = T & { index: number };

interface SortableListComponent<T> {
  items: SortableItem<T>[];
  onOrderChange?: (data: { item: SortableItem<T>; newIndex: number }) => void;
}

export default class SortableList<T> extends Component<SortableListComponent<T>> {
  onDrop(ev: React.DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    const targetItemIndex = Number(ev.dataTransfer.getData('text'));
    const itemIndex = Number(this.locateSortableItemParent(ev.target as HTMLElement));

    const afterItemIndex = this.props.items.findIndex(singleItem => singleItem.index === itemIndex);

    if (this.props.onOrderChange) {
      if (this.props.items.length - 1 === afterItemIndex) {
        this.props.onOrderChange({
          item: this.props.items[targetItemIndex],
          newIndex: afterItemIndex + 1,
        });
      } else {
        // Example 5 - 4 / 2 + 4 = 4.5 the new index
        const newIndex = (this.props.items[afterItemIndex + 1].index - this.props.items[afterItemIndex].index) / 2 + this.props.items[afterItemIndex].index;
        this.props.onOrderChange({
          item: this.props.items[targetItemIndex],
          newIndex,
        });
      }
    }
  }

  dragStart(ev: React.DragEvent<HTMLDivElement>, index: number) {
    ev.dataTransfer.setData('text', index.toString());
  }

  locateSortableItemParent(element: HTMLElement): string {
    const index = element.getAttribute('item-index');
    return index || (element.parentElement && this.locateSortableItemParent(element.parentElement)) || '';
  }

  render() {
    const { children, items } = this.props;
    if (!children) {
      return 'SortableList must have children';
    }

    return (
      <div className='sortable-list'>
        {items
          .sort((itemA, itemB) => itemA.index - itemB.index)
          .map((singleItem, index) => (
            <div
              className='sortable-item'
              draggable={true}
              key={'draggable_' + index}
              item-index={singleItem.index}
              onDrop={event => this.onDrop(event)}
              onDragOver={ev => ev.preventDefault()}
              onDragStart={ev => this.dragStart(ev, index)}>
              <div className='sortable-item-drag'>
                <DragIndicator />
              </div>
              <div className='sortable-item-content'>{(children as (item: T) => T)(singleItem)}</div>
            </div>
          ))}
      </div>
    );
  }
}
