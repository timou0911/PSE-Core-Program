/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Sacrifice, SacrificeInterface } from "../Sacrifice";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_recipient",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
];

const _bytecode =
  "0x60806040526040516032380380603283398181016040526020811015602357600080fd5b50516001600160a01b038116fffe";

export class Sacrifice__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _recipient: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<Sacrifice> {
    return super.deploy(_recipient, overrides || {}) as Promise<Sacrifice>;
  }
  getDeployTransaction(
    _recipient: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_recipient, overrides || {});
  }
  attach(address: string): Sacrifice {
    return super.attach(address) as Sacrifice;
  }
  connect(signer: Signer): Sacrifice__factory {
    return super.connect(signer) as Sacrifice__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SacrificeInterface {
    return new utils.Interface(_abi) as SacrificeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Sacrifice {
    return new Contract(address, _abi, signerOrProvider) as Sacrifice;
  }
}
