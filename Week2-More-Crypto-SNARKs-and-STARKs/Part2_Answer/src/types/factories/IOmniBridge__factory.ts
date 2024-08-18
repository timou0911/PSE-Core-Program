/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IOmniBridge, IOmniBridgeInterface } from "../IOmniBridge";

const _abi = [
  {
    inputs: [],
    name: "bridgeContract",
    outputs: [
      {
        internalType: "contract IAMB",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IOmniBridge__factory {
  static readonly abi = _abi;
  static createInterface(): IOmniBridgeInterface {
    return new utils.Interface(_abi) as IOmniBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOmniBridge {
    return new Contract(address, _abi, signerOrProvider) as IOmniBridge;
  }
}
