import { Variables } from '../../subgraph.config';

export const sourcesV4 = (variables: Variables) => [
  {
    name: 'AddressListRegistry',
    version: '4',
    block: variables.block,
    address: variables.release4.addressListRegistryAddress,
    events: [
      'ItemAddedToList(indexed uint256,address)',
      'ItemRemovedFromList(indexed uint256,address)',
      'ListCreated(indexed address,indexed address,uint256,uint8)',
      'ListOwnerSet(indexed uint256,indexed address)',
      'ListUpdateTypeSet(indexed uint256,uint8,indexed uint8)',
    ],
  },
  {
    name: 'AllowedAdaptersPolicy',
    version: '4',
    block: variables.block,
    address: variables.release4.allowedAdaptersPolicyAddress,
    events: ['ListsSetForFund(indexed address,uint256[])'],
  },
  {
    name: 'AllowedAssetsForRedemptionPolicy',
    version: '4',
    block: variables.block,
    address: variables.release4.allowedAssetsForRedemptionPolicyAddress,
    events: ['ListsSetForFund(indexed address,uint256[])'],
  },
  {
    name: 'AllowedExternalPositionTypesPolicy',
    version: '4',
    block: variables.block,
    address: variables.release4.allowedExternalPositionTypesPolicyAddress,
    events: ['AllowedExternalPositionTypeAddedForFund(indexed address,indexed uint256)'],
  },
  {
    name: 'AllowedSharesTransferRecipientsPolicy',
    version: '4',
    block: variables.block,
    address: variables.release4.allowedSharesTransferRecipientsPolicyAddress,
    events: ['ListsSetForFund(indexed address,uint256[])'],
  },
  {
    name: 'CumulativeSlippageTolerancePolicy',
    version: '4',
    block: variables.block,
    address: variables.release4.cumulativeSlippageTolerancePolicyAddress,
    events: [
      'CumulativeSlippageUpdatedForFund(indexed address,uint256)',
      'FundSettingsSet(indexed address,uint256)',
      'PricelessAssetBypassed(indexed address,indexed address)',
      'PricelessAssetTimelockStarted(indexed address,indexed address)',
    ],
  },
  {
    name: 'OnlyUntrackDustOrPricelessAssetsPolicy',
    version: '4',
    block: variables.block,
    address: variables.release4.onlyUntrackDustOrPricelessAssetsPolicyAddress,
    events: [
      'DustToleranceInWethSet(uint256)',
      'PricelessAssetBypassed(indexed address,indexed address)',
      'PricelessAssetTimelockStarted(indexed address,indexed address)',
    ],
  },
  {
    name: 'AllowedAdapterIncomingAssetsPolicy',
    version: '4',
    block: variables.block,
    address: variables.release4.allowedAdapterIncomingAssetsPolicyAddress,
    events: ['ListsSetForFund(indexed address,uint256[])'],
  },
  {
    name: 'AllowedDepositRecipientsPolicy',
    version: '4',
    block: variables.block,
    address: variables.release4.allowedDepositRecipientsPolicyAddress,
    events: ['ListsSetForFund(indexed address,uint256[])'],
  },
  {
    name: 'EntranceRateBurnFee',
    version: '4',
    block: variables.block,
    address: variables.release4.entranceRateBurnFeeAddress,
    events: ['FundSettingsAdded(indexed address,uint256)', 'Settled(indexed address,indexed address,uint256)'],
  },
  {
    name: 'EntranceRateDirectFee',
    version: '4',
    block: variables.block,
    address: variables.release4.entranceRateDirectFeeAddress,
    events: [
      'FundSettingsAdded(indexed address,uint256)',
      'RecipientSetForFund(indexed address,indexed address)',
      'Settled(indexed address,indexed address,uint256)',
    ],
  },
  {
    name: 'ExitRateBurnFee',
    version: '4',
    block: variables.block,
    address: variables.release4.exitRateBurnFeeAddress,
    events: [
      'FundSettingsAdded(indexed address,uint256,uint256)',
      'Settled(indexed address,indexed address,uint256,indexed bool)',
    ],
  },
  {
    name: 'ExitRateDirectFee',
    version: '4',
    block: variables.block,
    address: variables.release4.exitRateDirectFeeAddress,
    events: [
      'FundSettingsAdded(indexed address,uint256,uint256)',
      'RecipientSetForFund(indexed address,indexed address)',
      'Settled(indexed address,indexed address,uint256,indexed bool)',
    ],
  },
  {
    name: 'ExternalPositionFactory',
    version: '4',
    block: variables.block,
    address: variables.release4.externalPositionFactoryAddress,
    events: [
      'PositionDeployed(indexed address,indexed uint256,indexed address,bytes)',
      'PositionDeployerAdded(address)',
      'PositionDeployerRemoved(address)',
      'PositionTypeAdded(uint256,string)',
      'PositionTypeLabelUpdated(indexed uint256,string)',
    ],
  },
  {
    name: 'ExternalPositionManager',
    version: '4',
    block: variables.block,
    address: variables.release4.externalPositionManagerAddress,
    events: [
      'CallOnExternalPositionExecutedForFund(indexed address,indexed address,indexed address,uint256,bytes,address[],uint256[],address[])',
      'ExternalPositionDeployedForFund(indexed address,indexed address,address,indexed uint256,bytes)',
      'ExternalPositionTypeInfoUpdated(indexed uint256,address,address)',
    ],
  },
  {
    name: 'FeeManager',
    version: '4',
    block: variables.block,
    address: variables.release4.feeManagerAddress,
    events: [
      'FeeEnabledForFund(indexed address,indexed address,bytes)',
      'FeeSettledForFund(indexed address,indexed address,indexed uint8,address,address,uint256)',
      'SharesOutstandingPaidForFund(indexed address,indexed address,indexed address,uint256)',
    ],
  },
  {
    name: 'FundDeployer',
    version: '4',
    block: variables.block,
    address: variables.release4.fundDeployerAddress,
    events: [
      'BuySharesOnBehalfCallerDeregistered(address)',
      'BuySharesOnBehalfCallerRegistered(address)',
      'ComptrollerLibSet(address)',
      'ComptrollerProxyDeployed(indexed address,address,indexed address,uint256)',
      'MigrationRequestCreated(indexed address,indexed address,address)',
      'NewFundCreated(indexed address,address,address)',
      'ProtocolFeeTrackerSet(address)',
      'ReconfigurationRequestCancelled(indexed address,indexed address)',
      'ReconfigurationRequestCreated(indexed address,indexed address,address,uint256)',
      'ReconfigurationRequestExecuted(indexed address,indexed address,indexed address)',
      'ReconfigurationTimelockSet(uint256)',
      'ReleaseIsLive()',
      'VaultCallDeregistered(indexed address,bytes4,bytes32)',
      'VaultCallRegistered(indexed address,bytes4,bytes32)',
      'VaultLibSet(address)',
    ],
  },
  {
    name: 'GasRelayPaymasterFactory',
    version: '4',
    block: variables.block,
    address: variables.release4.gasRelayPaymasterFactoryAddress,
    events: ['CanonicalLibSet(address)', 'ProxyDeployed(indexed address,address,bytes)'],
  },
  {
    name: 'GlobalConfigLib',
    version: '4',
    block: variables.block,
    address: variables.release4.globalConfigLibAddress,
    events: ['GlobalConfigLibSet(address)'],
  },
  {
    name: 'GuaranteedRedemptionPolicy',
    version: '4',
    block: variables.block,
    address: variables.release4.guaranteedRedemptionPolicyAddress,
    events: [
      'AdapterAdded(address)',
      'AdapterRemoved(address)',
      'FundSettingsSet(indexed address,uint256,uint256)',
      'RedemptionWindowBufferSet(uint256,uint256)',
    ],
  },
  {
    name: 'IntegrationManager',
    version: '4',
    block: variables.block,
    address: variables.release4.integrationManagerAddress,
    events: [
      'CallOnIntegrationExecutedForFund(indexed address,address,indexed address,indexed bytes4,bytes,address[],uint256[],address[],uint256[])',
    ],
  },
  {
    name: 'ManagementFee',
    version: '4',
    block: variables.block,
    address: variables.release4.managementFeeAddress,
    events: [
      'ActivatedForMigratedFund(indexed address)',
      'FundSettingsAdded(indexed address,uint256)',
      'RecipientSetForFund(indexed address,indexed address)',
      'Settled(indexed address,uint256,uint256)',
    ],
  },
  {
    name: 'MinMaxInvestmentPolicy',
    version: '4',
    block: variables.block,
    address: variables.release4.minMaxInvestmentPolicyAddress,
    events: ['FundSettingsSet(indexed address,uint256,uint256)'],
  },
  {
    name: 'PerformanceFee',
    version: '4',
    block: variables.block,
    address: variables.release4.performanceFeeAddress,
    events: [
      'ActivatedForFund(indexed address,uint256)',
      'FundSettingsAdded(indexed address,uint256,uint256)',
      'LastSharePriceUpdated(indexed address,uint256,uint256)',
      'PaidOut(indexed address,uint256,uint256,uint256)',
      'PerformanceUpdated(indexed address,uint256,uint256,int256)',
      'RecipientSetForFund(indexed address,indexed address)',
    ],
  },
  {
    name: 'PolicyManager',
    version: '4',
    block: variables.block,
    address: variables.release4.policyManagerAddress,
    events: [
      'PolicyDisabledForFund(indexed address,indexed address)',
      'PolicyEnabledForFund(indexed address,indexed address,bytes)',
    ],
  },
  {
    name: 'ProtocolFeeReserveLib',
    version: '4',
    block: variables.block,
    address: variables.release4.protocolFeeReserveLibAddress,
    events: ['ProtocolFeeReserveLibSet(address)', 'SharesBoughtBack(indexed address,uint256,uint256,uint256)'],
  },
  {
    name: 'ProtocolFeeTracker',
    version: '4',
    block: variables.block,
    address: variables.release4.protocolFeeTrackerAddress,
    events: [
      'FeeBpsDefaultSet(uint256)',
      'FeeBpsOverrideSetForVault(indexed address,uint256)',
      'FeePaidForVault(indexed address,uint256,uint256)',
      'InitializedForVault(address)',
      'LastPaidSetForVault(indexed address,uint256,uint256)',
    ],
  },
  {
    name: 'ValueInterpreter',
    version: '4',
    block: variables.block,
    address: variables.release4.valueInterpreterAddress,
    events: [
      'DerivativeAdded(indexed address,address)',
      'DerivativeRemoved(indexed address)',
      'EthUsdAggregatorSet(address,address)',
      'PrimitiveAdded(indexed address,address,uint8,uint256)',
      'PrimitiveRemoved(indexed address)',
      'StalePrimitiveRemoved(indexed address)',
      'StaleRateThresholdSet(uint256,uint256)',
    ],
  },
];
