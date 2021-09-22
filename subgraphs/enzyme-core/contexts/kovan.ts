import { Context } from '@enzymefinance/subgraph-cli';
import { Variables } from '../subgraph.config';

export const kovanContext: Context<Variables> = {
  name: 'enzymefinance/enzyme-core-kovan',
  network: 'kovan',
  variables: {
    block: 27096029,
    dispatcherAddress: '0xb5f802D8e7d4c8aCD51e7097fAA03F286e90609d',
    wethTokenAddress: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
    chainlinkAggregatorAddresses: {
      audUsd: '0x5813A90f826e16dB392abd2aF7966313fc1fd5B8',
      btcEth: '0xF7904a295A029a3aBDFFB6F12755974a958C7C25',
      btcusd: '0x6135b13325bfC4B00278B4abC5e20bbce2D6580e',
      chfusd: '0xed0616BeF04D374969f302a34AE4A63882490A8C',
      ethUsd: '0x9326BFA02ADD2366b30bacB125260Af641031331',
      eurUsd: '0x0c15Ab9A0DB086e062194c273CC79f41597Bbf13',
      gbpUsd: '0x28b0061f44E6A9780224AA61BEc8C3Fcb0d37de9',
      jpyUsd: '0xD627B1eF3AC23F1d3e576FA6206126F3c1Bd0942',
    },
    release2: {
      fundDeployerAddress: '0x0000000000000000000000000000000000000000',
      vaultLibAddress: '0x0000000000000000000000000000000000000000',
      comptrollerLibAddress: '0x0000000000000000000000000000000000000000',
      valueInterpreterAddress: '0x0000000000000000000000000000000000000000',
      integrationManagerAddress: '0x0000000000000000000000000000000000000000',
      policyManagerAddress: '0x0000000000000000000000000000000000000000',
      feeManagerAddress: '0x0000000000000000000000000000000000000000',

      // Prices
      aggregatedDerivativePriceFeedAddress: '0x0000000000000000000000000000000000000000',
      chainlinkPriceFeedAddress: '0x0000000000000000000000000000000000000000',

      // Fees
      managementFeeAddress: '0x0000000000000000000000000000000000000000',
      performanceFeeAddress: '0x0000000000000000000000000000000000000000',
      entranceRateBurnFeeAddress: '0x0000000000000000000000000000000000000000',
      entranceRateDirectFeeAddress: '0x0000000000000000000000000000000000000000',

      // Policies
      adapterBlacklistAddress: '0x0000000000000000000000000000000000000000',
      adapterWhitelistAddress: '0x0000000000000000000000000000000000000000',
      assetBlacklistAddress: '0x0000000000000000000000000000000000000000',
      assetWhitelistAddress: '0x0000000000000000000000000000000000000000',
      investorWhitelistAddress: '0x0000000000000000000000000000000000000000',
      guaranteedRedemptionAddress: '0x0000000000000000000000000000000000000000',
      maxConcentrationAddress: '0x0000000000000000000000000000000000000000',
      minMaxInvestmentAddress: '0x0000000000000000000000000000000000000000',
      buySharesCallerWhitelistAddress: '0x0000000000000000000000000000000000000000',
    },
    release3: {
      fundDeployerAddress: '0x0000000000000000000000000000000000000000',
      vaultLibAddress: '0x0000000000000000000000000000000000000000',
      comptrollerLibAddress: '0x0000000000000000000000000000000000000000',
      valueInterpreterAddress: '0x0000000000000000000000000000000000000000',
      integrationManagerAddress: '0x0000000000000000000000000000000000000000',
      policyManagerAddress: '0x0000000000000000000000000000000000000000',
      feeManagerAddress: '0x0000000000000000000000000000000000000000',

      // Prices
      aggregatedDerivativePriceFeedAddress: '0x0000000000000000000000000000000000000000',
      chainlinkPriceFeedAddress: '0x0000000000000000000000000000000000000000',

      // Fees
      managementFeeAddress: '0x0000000000000000000000000000000000000000',
      performanceFeeAddress: '0x0000000000000000000000000000000000000000',
      entranceRateBurnFeeAddress: '0x0000000000000000000000000000000000000000',
      entranceRateDirectFeeAddress: '0x0000000000000000000000000000000000000000',

      // Policies
      adapterBlacklistAddress: '0x0000000000000000000000000000000000000000',
      adapterWhitelistAddress: '0x0000000000000000000000000000000000000000',
      assetBlacklistAddress: '0x0000000000000000000000000000000000000000',
      assetWhitelistAddress: '0x0000000000000000000000000000000000000000',
      investorWhitelistAddress: '0x0000000000000000000000000000000000000000',
      guaranteedRedemptionAddress: '0x0000000000000000000000000000000000000000',
      maxConcentrationAddress: '0x0000000000000000000000000000000000000000',
      minMaxInvestmentAddress: '0x0000000000000000000000000000000000000000',
      buySharesCallerWhitelistAddress: '0x0000000000000000000000000000000000000000',
    },
    release4: {
      addressListRegistryAddress: '0xC30721CFF9A1F6067902478ffFde0d45eC787750',
      allowedAdapterIncomingAssetsPolicyAddress: '0x5796714e32539c9043036475582FEB87859afa8e',
      allowedAdaptersPolicyAddress: '0xE37aC0F39e45A1aF74B2E49D46603502189F97A9',
      allowedAssetsForRedemptionPolicyAddress: '0xAFa6E22Be4F8F4b3dA4B17215DF2E6065cEff11D',
      allowedDepositRecipientsPolicyAddress: '0xDd46d32DC9f575e7D5d70e0a005091228091617e',
      allowedExternalPositionTypesPolicyAddress: '0xC71b856B30911BeBd477e704e7E82ae04d1C715B',
      allowedSharesTransferRecipientsPolicyAddress: '0x08ef12F211Fa6bb0e5DfA660F98a479940E8E6C9',
      comptrollerLibAddress: '0x3b82A772Cb274Be9D256b6063ddeb7db367C067d',
      cumulativeSlippageTolerancePolicyAddress: '0xE50857bD8508C94D15CCc503c9174060058A7e3a',
      entranceRateBurnFeeAddress: '0x80AE6bFa8b1d4CbFbbf9557e11Ec294e6E5E2907',
      entranceRateDirectFeeAddress: '0x17C08869a36992DD5eE3A6eC270ebBA69110Dc1f',
      exitRateBurnFeeAddress: '0xD293ff7c45CFD06D90dbB360B4B67Cf90B636f5a',
      exitRateDirectFeeAddress: '0xAF94720c55D5518079E7726e5438f32357847557',
      externalPositionFactoryAddress: '0x90ab385E4e50c458c2b95187cbc7F25D03C68062',
      externalPositionManagerAddress: '0xEcd6cf4cF9ed8bC581A81B13A2a7C03b7fDd7AA8',
      feeManagerAddress: '0x125B5165D64C4723e4a63262f6d45C59409AFE08',
      fundDeployerAddress: '0x13Fa584E403587Ed82538ffab0231938A5baBa11',
      gasRelayPaymasterFactoryAddress: '0xbA4411e50023B909C36C778A842A6EDc385a52D2',
      globalConfigLibAddress: '0x29eea5610a1D2d9015Fa94C39667f42Ef8875D74',
      guaranteedRedemptionPolicyAddress: '0xFDd38046E5a358Df9d96ACf0df6F785AF9437627',
      integrationManagerAddress: '0x313A1299318339f5d8B45fc0467D42eE9715Dc43',
      managementFeeAddress: '0x222d0537F1Bd645f5Ae970e73f260be2424d0bD8',
      minMaxInvestmentPolicyAddress: '0x60028C24A78b2D8a26635178ff7FeC1C7D00Ad03',
      onlyUntrackDustOrPricelessAssetsPolicyAddress: '0x755E93c9bd1c0491873Ee6227861932667a95BB5',
      performanceFeeAddress: '0x5bc8E2e2bBd5c0F69D2e2a273EF53535CdEd32Ef',
      policyManagerAddress: '0xB782928693F42969499ADe9619DeBca1956FC32c',
      protocolFeeReserveLibAddress: '0x035073A04348fC2CAbC7483b059473f8b6b0C3c4',
      protocolFeeTrackerAddress: '0x7a699F8dF06212E1BB8B67e1aeF07FBC7B18cDbb',
      valueInterpreterAddress: '0xa0D82f26BA5dF54bE26A0282cEf26ca651b9cA52',
      vaultLibAddress: '0xd39ba877fABb81f18238Ec257a011E3f993286E2',
    },
  },
};
