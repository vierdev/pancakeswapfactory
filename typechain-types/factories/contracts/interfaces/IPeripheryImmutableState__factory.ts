/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPeripheryImmutableState,
  IPeripheryImmutableStateInterface,
} from "../../../contracts/interfaces/IPeripheryImmutableState";

const _abi = [
  {
    inputs: [],
    name: "WETH9",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deployer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IPeripheryImmutableState__factory {
  static readonly abi = _abi;
  static createInterface(): IPeripheryImmutableStateInterface {
    return new utils.Interface(_abi) as IPeripheryImmutableStateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPeripheryImmutableState {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IPeripheryImmutableState;
  }
}
