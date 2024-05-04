import { useState } from 'react';

import type { SelectOptionType } from '@/types';

export const useOptionSelector = <
  T extends ReadonlyArray<{ key: string; label: string }>,
>(
  options: T,
) => {
  const [currentOption, setCurrentOption] = useState<SelectOptionType<T>>(
    options[0],
  );

  const changeOption = (option: SelectOptionType<T>) => {
    setCurrentOption(option);
  };

  return { currentOption, changeOption };
};
