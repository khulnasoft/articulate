/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useState } from 'react';
import { canDisableClear } from '../helpers/canDisableClear';
import { haveDependenciesChanged } from '../helpers/dependenciesHelper';
import { getDependenciesKeyFrom } from '../helpers/getDependenciesKeyFrom';
import { orchestrateSelections } from '../helpers/selectionsOrchestrator';
import { IOption } from '../models/IOption';
import { Dropdown } from './Dropdown';
import { NothingToSelect } from './NothingToSelect';

export const SingleDropdown = (props: any) => {
  const [dropdownOptions, setDropdownOptions] = useState<IOption[]>([]);
  const [dimension, setDimension] = useState<string>();

  const onSelectChange = (selectedValue: string | null) => {
    props.onChange(selectedValue);
  };

  const cleanupSelections = () => {
    props.onChange(null);
  };

  const updateDepencenciesKey = () => {
    props.dependenciesKeyRef.current = getDependenciesKeyFrom(props);
  };

  useEffect(() => {
    const updateSelections = async () => {
      try {
        const options = (await orchestrateSelections(props)) || {};
        const _dimension = Object.keys(options)[0];
        setDropdownOptions(options[_dimension]);
        setDimension(_dimension);
        if (haveDependenciesChanged(props)) {
          cleanupSelections();
          updateDepencenciesKey();
        }
      } catch (e) {
        console.error('Error', e);
      }
    };
    updateSelections();
  }, [props.newDependenciesKey]);

  if (!dimension) {
    return <NothingToSelect name={props.field.name as string} />;
  }

  return (
    <div data-testid="SINGLE_DROPDOWN">
      <Dropdown
        key={dimension}
        disableClear={canDisableClear(props)}
        onSelectChange={onSelectChange}
        options={dropdownOptions}
        dimension={dimension}
        selectedValue={props.value ?? ''}
      />
    </div>
  );
};
