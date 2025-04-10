import {
  Configurator,
  Contexts,
  DataSourceTemplateUserDeclaration,
  DataSourceUserDeclaration,
  SdkUserDeclaration,
  Template,
} from '@enzymefinance/subgraph-cli';

import { getEnvironment } from '@enzymefinance/environment/all';
import { Deployment } from '@enzymefinance/environment';

interface Variables {
  dispatcher: string;
  weth: string;
  savingsDai: string;
  start: number;
}

const name = 'enzyme-vault-balances';

const deployments = {
  ethereum: getEnvironment(Deployment.ETHEREUM),
  polygon: getEnvironment(Deployment.POLYGON),
  testnet: getEnvironment(Deployment.TESTNET),
};

export const contexts: Contexts<Variables> = {
  arbitrum: {
    name: `${name}-arbitrum`,
    network: 'arbitrum-one',
    variables: {
      dispatcher: '0x6242E80B4344897b644Eb48152c36AA35643CdAe',
      weth: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
      savingsDai: '0x0000000000000000000000000000000000000000',
      start: 302977549,
    },
  },
  ethereum: {
    name,
    network: 'mainnet',
    variables: {
      dispatcher: "0x1ceD23645550bE49003A12bdB61DCD3cbdBf7338",
      weth: deployments.ethereum.namedTokens.weth.id,
      savingsDai: '0x83f20f44975d03b1b09e64809b757c47f942beea',
      start: 22033364,
    },
  },
  polygon: {
    name: `${name}-polygon`,
    network: 'matic',
    variables: {
      dispatcher: deployments.polygon.contracts.Dispatcher,
      weth: deployments.polygon.namedTokens.weth.id,
      savingsDai: '0x0000000000000000000000000000000000000000',
      start: 26191606,
    },
  },
  testnet: {
    name: `${name}-testnet`,
    network: 'matic',
    variables: {
      dispatcher: deployments.testnet.contracts.Dispatcher,
      weth: deployments.testnet.namedTokens.weth.id,
      savingsDai: '0x0000000000000000000000000000000000000000',
      start: 25731749,
    },
  },
};

export const templates: Template[] = [
  {
    template: 'templates/addresses.ts',
    destination: 'generated/addresses.ts',
  },
];

export const configure: Configurator<Variables> = (variables) => {
  const sdks: SdkUserDeclaration[] = [
    {
      name: 'ERC20',
      abis: {
        ERC20: 'abis/ERC20.json',
      },
      functions: (abis) => [abis.ERC20.getFunction('decimals'), abis.ERC20.getFunction('balanceOf')],
    },
  ];

  const sources: DataSourceUserDeclaration[] = [
    {
      name: 'Dispatcher',
      block: variables.start,
      address: variables.dispatcher,
      events: (abi) => [abi.getEvent('VaultProxyDeployed')],
    },
    {
      name: 'Asset',
      abi: 'abis/ERC20.json',
      block: variables.start,
      events: (abi) => [abi.getEvent('Transfer')],
    },
    {
      name: 'SavingsDai',
      abi: 'abis/SavingsDai.json',
      block: variables.start,
      address: variables.savingsDai,
      events: (abi) => [abi.getEvent('Deposit'), abi.getEvent('Withdraw')],
    },
  ];

  const templates: DataSourceTemplateUserDeclaration[] = [
    {
      name: 'Vault',
      events: (abi) => [
        abi.getEvent('TrackedAssetAdded'),
        abi.getEvent('TrackedAssetRemoved'),
        abi.getEvent('EthReceived'),
      ],
    },
  ];

  return { sdks, sources, templates };
};