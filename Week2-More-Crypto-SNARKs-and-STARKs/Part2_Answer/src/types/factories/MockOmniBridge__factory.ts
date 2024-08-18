/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockOmniBridge,
  MockOmniBridgeInterface,
} from "../MockOmniBridge";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IAMB",
        name: "_AMB",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "OnTokenTransfer",
    type: "event",
  },
  {
    inputs: [],
    name: "AMB",
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
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "who",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct MockOmniBridge.Call[]",
        name: "_calls",
        type: "tuple[]",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onTokenTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105b03803806105b083398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610082565b600060208284031215610065578081fd5b81516001600160a01b038116811461007b578182fd5b9392505050565b61051f806100916000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063a4c0ed3614610051578063baae8abf1461007a578063cd5965831461009b578063d69f9d61146100b0575b600080fd5b61006461005f36600461027b565b6100b8565b604051610071919061043c565b60405180910390f35b61008d61008836600461032c565b610143565b604051610071929190610447565b6100a3610219565b604051610071919061046a565b6100a3610228565b60408051600080825260208201909252825185906014116100f8576100dc84610237565b90506014845111156100f8578351601319016014850190815291505b7ffe42f2faa6fa7b7575a9c5e333dd1feb2ba373103cdb011302442ce895696de7338783888660405161012f9594939291906103f6565b60405180910390a150600195945050505050565b6000606060005b838110156102115784848281811061015e57fe5b905060200281019061017091906104ca565b61017e90602081019061025a565b6001600160a01b031685858381811061019357fe5b90506020028101906101a591906104ca565b6101b390602081019061047e565b6040516101c19291906103e6565b6000604051808303816000865af19150503d80600081146101fe576040519150601f19603f3d011682016040523d82523d6000602084013e610203565b606091505b50909350915060010161014a565b509250929050565b6000546001600160a01b031690565b6000546001600160a01b031681565b6014015190565b80356001600160a01b038116811461025557600080fd5b919050565b60006020828403121561026b578081fd5b6102748261023e565b9392505050565b60008060006060848603121561028f578182fd5b6102988461023e565b92506020808501359250604085013567ffffffffffffffff808211156102bc578384fd5b818701915087601f8301126102cf578384fd5b8135818111156102db57fe5b604051601f8201601f19168101850183811182821017156102f857fe5b60405281815283820185018a101561030e578586fd5b81858501868301378585838301015280955050505050509250925092565b6000806020838503121561033e578182fd5b823567ffffffffffffffff80821115610355578384fd5b818501915085601f830112610368578384fd5b813581811115610376578485fd5b8660208083028501011115610389578485fd5b60209290920196919550909350505050565b60008151808452815b818110156103c0576020818501810151868301820152016103a4565b818111156103d15782602083870101525b50601f01601f19169290920160200192915050565b6000828483379101908152919050565b6001600160a01b0386811682528581166020830152841660408201526060810183905260a0608082018190526000906104319083018461039b565b979650505050505050565b901515815260200190565b6000831515825260406020830152610462604083018461039b565b949350505050565b6001600160a01b0391909116815260200190565b6000808335601e19843603018112610494578283fd5b83018035915067ffffffffffffffff8211156104ae578283fd5b6020019150368190038213156104c357600080fd5b9250929050565b60008235603e198336030181126104df578182fd5b919091019291505056fea264697066735822122084586e5ce949105ddbe96d65bae3d3bdf456114666fa461f3f2bd7ffa31c87a064736f6c63430007060033";

export class MockOmniBridge__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _AMB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockOmniBridge> {
    return super.deploy(_AMB, overrides || {}) as Promise<MockOmniBridge>;
  }
  getDeployTransaction(
    _AMB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_AMB, overrides || {});
  }
  attach(address: string): MockOmniBridge {
    return super.attach(address) as MockOmniBridge;
  }
  connect(signer: Signer): MockOmniBridge__factory {
    return super.connect(signer) as MockOmniBridge__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockOmniBridgeInterface {
    return new utils.Interface(_abi) as MockOmniBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockOmniBridge {
    return new Contract(address, _abi, signerOrProvider) as MockOmniBridge;
  }
}
