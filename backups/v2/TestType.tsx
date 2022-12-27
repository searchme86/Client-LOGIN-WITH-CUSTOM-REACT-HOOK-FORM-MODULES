import React, { BaseSyntheticEvent } from 'react';

export type GenericOnSubmit = (
  data: Record<string, any>,
  event?: BaseSyntheticEvent
) => void;
