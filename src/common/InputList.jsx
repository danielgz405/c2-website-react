import { useState } from 'react';
import { SelectorIcon } from '@heroicons/react/solid';
import { Combobox } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function InputList({ items, selected, setSelected, type }) {
  const [query, setQuery] = useState('');
  const filteredItems =
    query === ''
      ? items
      : items.filter((item) => {
          return item?.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={selected} onChange={setSelected}>
      
      <div className="relative">
        <Combobox.Input
          className={classNames("input-form relative w-full", type && type === 'store' && 'rounded-full color-secondarie border-0' )}
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(item) => item?.name}
        />
        <Combobox.Button className={classNames("btn-input", type && type === 'store' && 'color-secondarie')}>
          <SelectorIcon className="h-1" aria-hidden="true" />
        </Combobox.Button>

        {filteredItems.length > 0 && (
          <Combobox.Options className={classNames("items-list", type && type === 'store' && 'rounded-full' )}>
            {filteredItems.map((item) => (
              <Combobox.Option
                key={item?.id}
                value={item}
                className={({ active }) => classNames('item-list', active ? '' : '')}
              >
                {({ active, selected }) => (
                  <>
                    <span className={classNames('title-form', selected && '')}>{item?.name}</span>
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
