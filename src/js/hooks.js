import * as React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { log } from './utils';

export const useCurrentPatient = () => {
  const Patient = useSelector((state) => state.Patient);
  return Patient || null;
};
