/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Quoter, QuoterInterface } from "../../../contracts/lens/Quoter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_deployer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_WETH9",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
  {
    inputs: [
      {
        internalType: "int256",
        name: "amount0Delta",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1Delta",
        type: "int256",
      },
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
    ],
    name: "pancakeV3SwapCallback",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "quoteExactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "quoteExactInputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "path",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "quoteExactOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceLimitX96",
        type: "uint160",
      },
    ],
    name: "quoteExactOutputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e060405234801561001057600080fd5b50604051620013443803806200134483398101604081905261003191610074565b6001600160601b0319606093841b811660805291831b821660a05290911b1660c0526100b6565b80516001600160a01b038116811461006f57600080fd5b919050565b600080600060608486031215610088578283fd5b61009184610058565b925061009f60208501610058565b91506100ad60408501610058565b90509250925092565b60805160601c60a05160601c60c05160601c61124e620000f66000398061046052508061048452508061015a52806104f65280610722525061124e6000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063c45a01551161005b578063c45a0155146100f3578063cdca1753146100fb578063d5f394881461010e578063f7729d431461011657610088565b806323a69e751461008d5780632f80bb1d146100a257806330d07f21146100cb5780634aa4a4fc146100de575b600080fd5b6100a061009b366004610f3b565b610129565b005b6100b56100b0366004610ed5565b610234565b6040516100c2919061117f565b60405180910390f35b6100b56100d9366004610e67565b610299565b6100e661045e565b6040516100c291906110bb565b6100e6610482565b6100b5610109366004610ed5565b6104a6565b6100e66104f4565b6100b5610124366004610e67565b610518565b60008313806101385750600082135b61014157600080fd5b600080600061014f84610697565b9250925092506101817f00000000000000000000000000000000000000000000000000000000000000008484846106c8565b5060008060008089136101c7578573ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1610888a6000036101fc565b8473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161089896000035b925092509250821561021357604051818152602081fd5b6000541561022957600054811461022957600080fd5b604051828152602081fd5b60005b6000610242846106de565b9050600080600061025287610697565b925092509250610266828483896000610299565b9550831561027e57610277876106e6565b965061028a565b85945050505050610293565b50505050610237565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff808616878216109083166102c45760008490555b6102cf87878761071b565b73ffffffffffffffffffffffffffffffffffffffff1663128acb0830836102f588610759565b60000373ffffffffffffffffffffffffffffffffffffffff88161561031a5787610340565b856103395773fffd8963efd1fc6a506488495d951d5263988d25610340565b6401000276a45b8b8b8e60405160200161035593929190611055565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016103849594939291906110dc565b6040805180830381600087803b15801561039d57600080fd5b505af19250505080156103eb575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526103e891810190610f18565b60015b610451573d808015610419576040519150601f19603f3d011682016040523d82523d6000602084013e61041e565b606091505b5073ffffffffffffffffffffffffffffffffffffffff841661043f57600080555b6104488161078b565b92505050610455565b5050505b95945050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60005b60006104b4846106de565b905060008060006104c487610697565b9250925092506104d8838383896000610518565b9550831561027e576104e9876106e6565b9650505050506104a9565b7f000000000000000000000000000000000000000000000000000000000000000081565b600073ffffffffffffffffffffffffffffffffffffffff8086169087161061054187878761071b565b73ffffffffffffffffffffffffffffffffffffffff1663128acb08308361056788610759565b73ffffffffffffffffffffffffffffffffffffffff88161561058957876105af565b856105a85773fffd8963efd1fc6a506488495d951d5263988d256105af565b6401000276a45b8c8b8d6040516020016105c493929190611055565b6040516020818303038152906040526040518663ffffffff1660e01b81526004016105f39594939291906110dc565b6040805180830381600087803b15801561060c57600080fd5b505af192505050801561065a575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261065791810190610f18565b60015b610451573d808015610688576040519150601f19603f3d011682016040523d82523d6000602084013e61068d565b606091505b506104488161078b565b600080806106a5848261083c565b92506106b284601461093c565b90506106bf84601761083c565b91509193909250565b6000610455856106d9868686610a2c565b610aa9565b516042111590565b80516060906102939083906017907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe901610ad9565b60006107517f000000000000000000000000000000000000000000000000000000000000000061074c868686610a2c565b610cc0565b949350505050565b60007f8000000000000000000000000000000000000000000000000000000000000000821061078757600080fd5b5090565b60008151602014610828576044825110156107db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d290611148565b60405180910390fd5b600482019150818060200190518101906107f59190610f89565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d2919061112e565b818060200190518101906102939190610ff3565b6000818260140110156108b057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f746f416464726573735f6f766572666c6f770000000000000000000000000000604482015290519081900360640190fd5b816014018351101561092357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f746f416464726573735f6f75744f66426f756e64730000000000000000000000604482015290519081900360640190fd5b5001602001516c01000000000000000000000000900490565b6000818260030110156109b057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f746f55696e7432345f6f766572666c6f77000000000000000000000000000000604482015290519081900360640190fd5b8160030183511015610a2357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f746f55696e7432345f6f75744f66426f756e6473000000000000000000000000604482015290519081900360640190fd5b50016003015190565b610a34610df6565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161115610a6c579192915b506040805160608101825273ffffffffffffffffffffffffffffffffffffffff948516815292909316602083015262ffffff169181019190915290565b6000610ab58383610cc0565b90503373ffffffffffffffffffffffffffffffffffffffff82161461029357600080fd5b60608182601f011015610b4d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b828284011015610bbe57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f736c6963655f6f766572666c6f77000000000000000000000000000000000000604482015290519081900360640190fd5b81830184511015610c3057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f736c6963655f6f75744f66426f756e6473000000000000000000000000000000604482015290519081900360640190fd5b606082158015610c4f5760405191506000825260208201604052610cb7565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015610c88578051835260209283019201610c70565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6000816020015173ffffffffffffffffffffffffffffffffffffffff16826000015173ffffffffffffffffffffffffffffffffffffffff1610610d0257600080fd5b508051602080830151604093840151845173ffffffffffffffffffffffffffffffffffffffff94851681850152939091168385015262ffffff166060808401919091528351808403820181526080840185528051908301207fff0000000000000000000000000000000000000000000000000000000000000060a085015294901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001660a183015260b58201939093527f6ce8eb472fa82df5469c6ab6d485f17c3ad13c8cd7af59b3d4a8026c5ce0f7e260d5808301919091528251808303909101815260f5909101909152805191012090565b604080516060810182526000808252602082018190529181019190915290565b600082601f830112610e26578081fd5b8135610e39610e34826111ac565b611188565b818152846020838601011115610e4d578283fd5b816020850160208301379081016020019190915292915050565b600080600080600060a08688031215610e7e578081fd5b8535610e898161121c565b94506020860135610e998161121c565b9350604086013562ffffff81168114610eb0578182fd5b9250606086013591506080860135610ec78161121c565b809150509295509295909350565b60008060408385031215610ee7578182fd5b823567ffffffffffffffff811115610efd578283fd5b610f0985828601610e16565b95602094909401359450505050565b60008060408385031215610f2a578182fd5b505080516020909101519092909150565b600080600060608486031215610f4f578283fd5b8335925060208401359150604084013567ffffffffffffffff811115610f73578182fd5b610f7f86828701610e16565b9150509250925092565b600060208284031215610f9a578081fd5b815167ffffffffffffffff811115610fb0578182fd5b8201601f81018413610fc0578182fd5b8051610fce610e34826111ac565b818152856020838501011115610fe2578384fd5b6104558260208301602086016111ec565b600060208284031215611004578081fd5b5051919050565b600081518084526110238160208601602086016111ec565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b606093841b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116825260e89390931b7fffffff0000000000000000000000000000000000000000000000000000000000166014820152921b166017820152602b0190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b600073ffffffffffffffffffffffffffffffffffffffff8088168352861515602084015285604084015280851660608401525060a0608083015261112360a083018461100b565b979650505050505050565b600060208252611141602083018461100b565b9392505050565b60208082526010908201527f556e6578706563746564206572726f7200000000000000000000000000000000604082015260600190565b90815260200190565b60405181810167ffffffffffffffff811182821017156111a457fe5b604052919050565b600067ffffffffffffffff8211156111c057fe5b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60005b838110156112075781810151838201526020016111ef565b83811115611216576000848401525b50505050565b73ffffffffffffffffffffffffffffffffffffffff8116811461123e57600080fd5b5056fea164736f6c6343000706000a";

type QuoterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: QuoterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Quoter__factory extends ContractFactory {
  constructor(...args: QuoterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _deployer: PromiseOrValue<string>,
    _factory: PromiseOrValue<string>,
    _WETH9: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Quoter> {
    return super.deploy(
      _deployer,
      _factory,
      _WETH9,
      overrides || {}
    ) as Promise<Quoter>;
  }
  override getDeployTransaction(
    _deployer: PromiseOrValue<string>,
    _factory: PromiseOrValue<string>,
    _WETH9: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _deployer,
      _factory,
      _WETH9,
      overrides || {}
    );
  }
  override attach(address: string): Quoter {
    return super.attach(address) as Quoter;
  }
  override connect(signer: Signer): Quoter__factory {
    return super.connect(signer) as Quoter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): QuoterInterface {
    return new utils.Interface(_abi) as QuoterInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Quoter {
    return new Contract(address, _abi, signerOrProvider) as Quoter;
  }
}
