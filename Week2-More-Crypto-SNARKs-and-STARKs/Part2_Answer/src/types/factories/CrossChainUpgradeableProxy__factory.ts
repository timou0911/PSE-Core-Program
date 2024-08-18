/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CrossChainUpgradeableProxy,
  CrossChainUpgradeableProxyInterface,
} from "../CrossChainUpgradeableProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_ambBridge",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_adminChainId",
        type: "uint256",
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
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ambBridge",
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
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isCalledByOwner",
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
  {
    inputs: [],
    name: "owner",
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
    name: "ownerChainId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162000eb738038062000eb7833981810160405260a08110156200003757600080fd5b815160208301516040808501805191519395929483019291846401000000008211156200006357600080fd5b9083019060208201858111156200007957600080fd5b82516401000000008111828201881017156200009457600080fd5b82525081516020918201929091019080838360005b83811015620000c3578181015183820152602001620000a9565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b506040908152602082015191015190925090508181858781878281620001178262000179565b8051156200013857620001368282620001f060201b620005e31760201c565b505b50620001419050565b6200014c826200021f565b5050506001600160601b0319606093841b8116608052921b90911660c05260a05250620004009350505050565b6200018f816200024360201b6200060f1760201c565b620001cc5760405162461bcd60e51b815260040180806020018281038252603681526020018062000e5b6036913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b606062000218838360405180606001604052806027815260200162000e346027913962000249565b9392505050565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b3b151590565b6060620002568462000243565b620002935760405162461bcd60e51b815260040180806020018281038252602681526020018062000e916026913960400191505060405180910390fd5b600080856001600160a01b0316856040518082805190602001908083835b60208310620002d25780518252601f199092019160209182019101620002b1565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811462000334576040519150601f19603f3d011682016040523d82523d6000602084013e62000339565b606091505b5090925090506200034c82828662000356565b9695505050505050565b606083156200036757508162000218565b825115620003785782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620003c4578181015183820152602001620003aa565b50505050905090810190601f168015620003f25780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b60805160601c60a05160c05160601c6109e86200044c6000398061036b52806104e05250806102bc52806105c1525080610263528061029252806102dd528061039552506109e86000f3fe60806040526004361061008a5760003560e01c80635c60da1b116100595780635c60da1b146101ae5780638da5cb5b146101c35780638f283970146101d8578063f851a4401461020b578063ff4d18151461022057610099565b80630ba54df6146100a1578063270af851146100d25780633659cfe6146100fb5780634f1ef2861461012e57610099565b3661009957610097610247565b005b610097610247565b3480156100ad57600080fd5b506100b6610261565b604080516001600160a01b039092168252519081900360200190f35b3480156100de57600080fd5b506100e7610285565b604080519115158252519081900360200190f35b34801561010757600080fd5b506100976004803603602081101561011e57600080fd5b50356001600160a01b0316610429565b6100976004803603604081101561014457600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561016f57600080fd5b82018360208201111561018157600080fd5b803590602001918460018302840111640100000000831117156101a357600080fd5b50909250905061044f565b3480156101ba57600080fd5b506100b66104b8565b3480156101cf57600080fd5b506100b66104de565b3480156101e457600080fd5b50610097600480360360208110156101fb57600080fd5b50356001600160a01b0316610502565b34801561021757600080fd5b506100b66105a8565b34801561022c57600080fd5b506102356105bf565b60408051918252519081900360200190f35b61024f61025f565b61025f61025a610615565b61063a565b565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561036257507f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639e307dff6040518163ffffffff1660e01b815260040160206040518083038186803b15801561033457600080fd5b505afa158015610348573d6000803e3d6000fd5b505050506040513d602081101561035e57600080fd5b5051145b801561042357507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d67bdd256040518163ffffffff1660e01b815260040160206040518083038186803b1580156103ec57600080fd5b505afa158015610400573d6000803e3d6000fd5b505050506040513d602081101561041657600080fd5b50516001600160a01b0316145b90505b90565b610431610285565b156104445761043f8161065e565b61044c565b61044c610247565b50565b610457610285565b156104ab576104658361065e565b6104a58383838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506105e392505050565b506104b3565b6104b3610247565b505050565b60006104c2610285565b156104d6576104cf610615565b9050610426565b610426610247565b7f000000000000000000000000000000000000000000000000000000000000000081565b61050a610285565b15610444576001600160a01b0381166105545760405162461bcd60e51b815260040180806020018281038252603a8152602001806108f6603a913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61057d61069e565b604080516001600160a01b03928316815291841660208301528051918290030190a161043f816106c3565b60006105b2610285565b156104d6576104cf61069e565b7f000000000000000000000000000000000000000000000000000000000000000081565b60606106088383604051806060016040528060278152602001610930602791396106e7565b9392505050565b3b151590565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e808015610659573d6000f35b3d6000fd5b610667816107e9565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b60606106f28461060f565b61072d5760405162461bcd60e51b815260040180806020018281038252602681526020018061098d6026913960400191505060405180910390fd5b600080856001600160a01b0316856040518082805190602001908083835b6020831061076a5780518252601f19909201916020918201910161074b565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146107ca576040519150601f19603f3d011682016040523d82523d6000602084013e6107cf565b606091505b50915091506107df828286610851565b9695505050505050565b6107f28161060f565b61082d5760405162461bcd60e51b81526004018080602001828103825260368152602001806109576036913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b60608315610860575081610608565b8251156108705782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156108ba5781810151838201526020016108a2565b50505050905090810190601f1680156108e75780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe5472616e73706172656e745570677261646561626c6550726f78793a206e65772061646d696e20697320746865207a65726f2061646472657373416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c65645570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374a26469706673582212200b2c205675bd13a341a01bedccffb0fe9e7015dd22c5473a4f07dfd756771b2964736f6c63430007060033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c65645570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6e7472616374";

export class CrossChainUpgradeableProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _logic: string,
    _admin: string,
    _data: BytesLike,
    _ambBridge: string,
    _adminChainId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CrossChainUpgradeableProxy> {
    return super.deploy(
      _logic,
      _admin,
      _data,
      _ambBridge,
      _adminChainId,
      overrides || {}
    ) as Promise<CrossChainUpgradeableProxy>;
  }
  getDeployTransaction(
    _logic: string,
    _admin: string,
    _data: BytesLike,
    _ambBridge: string,
    _adminChainId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _logic,
      _admin,
      _data,
      _ambBridge,
      _adminChainId,
      overrides || {}
    );
  }
  attach(address: string): CrossChainUpgradeableProxy {
    return super.attach(address) as CrossChainUpgradeableProxy;
  }
  connect(signer: Signer): CrossChainUpgradeableProxy__factory {
    return super.connect(signer) as CrossChainUpgradeableProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrossChainUpgradeableProxyInterface {
    return new utils.Interface(_abi) as CrossChainUpgradeableProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrossChainUpgradeableProxy;
  }
}
