import { toBigDecimal } from '@enzymefinance/subgraph-utils';
import { ensureAccount } from '../../entities/Account';
import { ensureEntranceRateDirectFee } from '../../entities/EntranceRateDirectFee';
import { linkSharesSplitterToVault } from '../../entities/SharesSplitter';
import {
  FundSettingsAdded,
  RecipientSetForFund,
  Settled,
} from '../../generated/contracts/EntranceRateDirectFee4Events';

export function handleFundSettingsAdded(event: FundSettingsAdded): void {
  let fee = ensureEntranceRateDirectFee(event.params.comptrollerProxy, event.address, event);
  fee.rate = toBigDecimal(event.params.rate, 4);
  fee.save();
}
export function handleRecipientSetForFund(event: RecipientSetForFund): void {
  let recipient = ensureAccount(event.params.recipient, event);

  let fee = ensureEntranceRateDirectFee(event.params.comptrollerProxy, event.address, event);
  fee.recipient = recipient.id;
  fee.save();

  linkSharesSplitterToVault(recipient, event.params.comptrollerProxy);
}

export function handleSettled(event: Settled): void {
  let fee = ensureEntranceRateDirectFee(event.params.comptrollerProxy, event.address, event);
  fee.lastSettled = event.block.timestamp.toI32();
  fee.save();
}
