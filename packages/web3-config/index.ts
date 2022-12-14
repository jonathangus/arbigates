import goerliDeployment from './deployments/arbitrumGoerli/ArbiGates.json';
export * from './typechain';
import * as _typechain from './typechain';
import { chain } from 'wagmi';

import { ArbiGates__factory } from './typechain';

export type AvailableContracts = ArbiGates__factory['contractName'];

type AddressObj = Record<AvailableContracts, string>;

const _counter = new ArbiGates__factory();

export const Address: Record<number, AddressObj> = {
  [chain.arbitrumGoerli.id]: {
    [_counter.contractName]: goerliDeployment.address,
  },
};

export const getAddress = (
  _chain: number,
  contract: AvailableContracts
): string => Address[chain.arbitrumGoerli.id][contract];
