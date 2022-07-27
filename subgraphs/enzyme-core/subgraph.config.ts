import {
  Configurator,
  Contexts,
  DataSourceTemplateUserDeclaration,
  DataSourceUserDeclaration,
  SdkUserDeclaration,
  Template,
} from '@enzymefinance/subgraph-cli';
import * as persistent from './config/persistent';
import * as v2 from './config/v2';
import * as v3 from './config/v3';
import * as v4 from './config/v4';
import { ethereum } from './contexts/ethereum';
import { ethereumDevDeployment } from './contexts/ethereum-dev';
import { polygon } from './contexts/polygon';
import { testnet } from './contexts/testnet';

export interface Variables {
  block: number;
  wethTokenAddress: string;
  chainlinkAggregatorAddresses: {
    audUsd: string;
    btcEth: string;
    btcusd: string;
    chfusd: string;
    ethUsd: string;
    eurUsd: string;
    gbpUsd: string;
    jpyUsd: string;
  };
  persistent: {
    dispatcherAddress: string;
    externalPositionFactoryAddress: string;
    sharesSplitterFactoryAddress: string;
  };
  releases: {
    v2: v2.ReleaseVariables;
    v3: v3.ReleaseVariables;
    v4: v4.ReleaseVariables;
  };
  external: {
    curveMinterAddress: string;
    cvxLockerV2Address: string;
    cvxAddress: string;
  };
}

export const contexts: Contexts<Variables> = {
  ethereum,
  'ethereum-dev': ethereumDevDeployment,
  polygon,
  testnet,
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
      name: 'Protocol',
      abis: {
        ChainlinkAggregator: 'abis/ChainlinkAggregator.json',
        Dispatcher: 'abis/Dispatcher.json',
        ValueInterpreterA: 'abis/v2/ValueInterpreter.json',
        ValueInterpreterB: 'abis/v4/ValueInterpreter.json',
        VaultLib: 'abis/v4/VaultLib.json',
        ComptrollerLibA: 'abis/v2/ComptrollerLib.json',
        ComptrollerLibB: 'abis/v4/ComptrollerLib.json',
        CompoundDebtPositionLib: 'abis/v4/CompoundDebtPositionLib.json',
        AaveDebtPositionLib: 'abis/v4/AaveDebtPositionLib.json',
        GasRelayPaymasterLib: 'abis/v4/GasRelayPaymasterLib.json',
        ProtocolFeeTracker: 'abis/v4/ProtocolFeeTracker.json',
        OnlyUntrackDustOrPricelessAssetsPolicy: 'abis/v4/OnlyUntrackDustOrPricelessAssetsPolicy.json',
        IExternalPositionProxy: 'abis/v4/IExternalPositionProxy.json',
        UniswapV3LiquidityPositionLib: 'abis/v4/UniswapV3LiquidityPositionLib.json',
        IStakingWrapper: 'abis/v4/IStakingWrapper.json',
      },
      functions: (abis) => [
        abis.ChainlinkAggregator.getFunction('latestAnswer'),
        abis.ChainlinkAggregator.getFunction('latestTimestamp'),
        abis.Dispatcher.getFunction('getMigrationTimelock'),
        abis.Dispatcher.getFunction('getSharesTokenSymbol'),
        abis.Dispatcher.getFunction('getOwner'),
        abis.Dispatcher.getFunction('getNominatedOwner'),
        abis.ValueInterpreterA.getFunction('calcCanonicalAssetValue'),
        abis.ValueInterpreterB.getFunction('calcCanonicalAssetValue'),
        abis.VaultLib.getFunction('name'),
        abis.VaultLib.getFunction('getProtocolFeeTracker'),
        abis.VaultLib.getFunction('balanceOf'),
        abis.VaultLib.getFunction('totalSupply'),
        abis.ComptrollerLibA.getFunction('calcGav'),
        abis.ComptrollerLibB.getFunction('calcGav'),
        abis.ComptrollerLibA.getFunction('calcGrossShareValue'),
        abis.ComptrollerLibB.getFunction('calcGrossShareValue'),
        abis.ComptrollerLibA.getFunction('getDenominationAsset'),
        abis.ComptrollerLibA.getFunction('getVaultProxy'),
        abis.CompoundDebtPositionLib.getFunction('getManagedAssets'),
        abis.CompoundDebtPositionLib.getFunction('getDebtAssets'),
        abis.AaveDebtPositionLib.getFunction('getManagedAssets'),
        abis.AaveDebtPositionLib.getFunction('getDebtAssets'),
        abis.GasRelayPaymasterLib.getFunction('getParentComptroller'),
        abis.GasRelayPaymasterLib.getFunction('getRelayHubDeposit'),
        abis.ProtocolFeeTracker.getFunction('getFeeBpsForVault'),
        abis.OnlyUntrackDustOrPricelessAssetsPolicy.getFunction('getFundDeployer'),
        abis.IExternalPositionProxy.getFunction('getExternalPositionType'),
        abis.UniswapV3LiquidityPositionLib.getFunction('getNonFungibleTokenManager'),
        abis.IStakingWrapper.getFunction('getRewardTokens'),
      ],
    },
    {
      name: 'Maple',
      abis: {
        MaplePool: 'abis/MaplePool.json',
        MapleRewards: 'abis/MapleRewards.json',
      },
      functions: (abis) => [
        abis.MaplePool.getFunction('liquidityAsset'),
        abis.MapleRewards.getFunction('stakingToken'),
      ],
    },
    {
      name: 'ERC20',
      abis: {
        ERC20: 'abis/ERC20.json',
      },
      functions: (abis) => [
        abis.ERC20.getFunction('totalSupply'),
        abis.ERC20.getFunction('allowance'),
        abis.ERC20.getFunction('balanceOf'),
        abis.ERC20.getFunction('decimals'),
        abis.ERC20.getFunction('symbol'),
        abis.ERC20.getFunction('name'),
      ],
    },
    {
      name: 'ERC20Bytes',
      abis: {
        ERC20Bytes: 'abis/ERC20Bytes.json',
      },
      functions: (abis) => [abis.ERC20Bytes.getFunction('symbol'), abis.ERC20Bytes.getFunction('name')],
    },
    {
      name: 'UniswapV3',
      abis: {
        NonfungiblePositionManager: 'abis/NonfungiblePositionManager.json',
        UniswapV3Factory: 'abis/UniswapV3Factory.json',
        UniswapV3Pool: 'abis/UniswapV3Pool.json',
      },
      functions: (abis) => [
        abis.NonfungiblePositionManager.getFunction('positions'),
        abis.NonfungiblePositionManager.getFunction('factory'),
        abis.NonfungiblePositionManager.getFunction('tokenURI'),
        abis.UniswapV3Factory.getFunction('getPool'),
        abis.UniswapV3Pool.getFunction('slot0'),
      ],
    },
    {
      name: 'CurveLiquidityGaugeV2',
      abis: {
        CurveLiquidityGaugeV2: 'abis/CurveLiquidityGaugeV2.json',
      },
      functions: (abis) => [abis.CurveLiquidityGaugeV2.getFunction('reward_tokens')],
    },
    {
      name: 'CurveMinter',
      abis: {
        CurveMinter: 'abis/CurveMinter.json',
      },
      functions: (abis) => [abis.CurveMinter.getFunction('token')],
    },
    {
      name: 'CvxLockerV2',
      abis: {
        CvxLockerV2: 'abis/CvxLockerV2.json',
      },
      functions: (abis) => [abis.CvxLockerV2.getFunction('userLocks')],
    },
  ];

  const sources: DataSourceUserDeclaration[] = [
    ...persistent.sources(variables),
    ...v2.sources(variables.releases.v2).map((item) => ({ ...item, version: 2, block: variables.block })),
    ...v3.sources(variables.releases.v3).map((item) => ({ ...item, version: 3, block: variables.block })),
    ...v4.sources(variables.releases.v4).map((item) => ({ ...item, version: 4, block: variables.block })),
  ];

  const templates: DataSourceTemplateUserDeclaration[] = [
    ...persistent.templates,
    ...v2.templates.map((item) => ({ ...item, version: 2 })),
    ...v3.templates.map((item) => ({ ...item, version: 3 })),
    ...v4.templates.map((item) => ({ ...item, version: 4 })),
  ];

  return {
    sdks,
    templates,
    sources: [...sources],
  };
};
