---
name: I_TREASURYLEDGERTRANSACTION
description: Treasuryledgertransaction
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYLEDGERTRANSACTION

**Treasuryledgertransaction**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryLedgerTransaction` | ✓ | |  | `cast(os_guid as ftr_gen_trl_trans preserving type )` |  |  |
| `TreasuryBusinessTransCategory` |  | |  | `cast( bustranscat as ftr_gen_business_trans_categ preserving type )` |  |  |
| `TreasuryPositionLedgerDate` |  | |  | `trldate` |  |  |
| `TreasuryBusinessTransaction` |  | |  | `cast( bustransid as ftr_gen_business_transaction preserving type )` |  |  |
| `TrsyBusTransactionCreationDate` |  | |  | `cast( create_date as tpm_bt_create_date preserving type )` |  |  |
| `TrsyBusTransactionCreationTime` |  | |  | `cast( create_time as tpm_bt_create_time preserving type )` |  |  |
| `TrsyDerivedBusinessTransStatus` |  | |  | `cast( bustransstate as ftr_gen_trltranstate preserving type )` |  |  |
| `TreasuryBusinessTransStatus` |  | |  | `cast( booking_state as ftr_gen_trl_bookingstate preserving type )` |  |  |
| `TreasuryValuationArea` |  | |  | `valuation_area` |  |  |
| `CompanyCode` |  | |  | `cast( tr_acc_code as bukrs preserving type )` |  |  |
| `OriglTrsyBusinessTransaction` |  | |  | `cast( refbustransid as ftr_gen_bustransid_orig preserving type )` |  |  |
| `PostingDate` |  | |  | `fi_post_date` |  |  |
| `PostingReversalDate` |  | |  | `fi_rev_date` |  |  |
| `TrsyIntragroupTransacStatus` |  | |  | `cast( igt_status as ftr_gen_igt_status preserving type )` |  |  |
| `TreasuryUserStatisticsUUID` |  | |  | `cast( user_data_oid as ftr_gen_user_data_guid preserving type )` |  |  |
| `_TrlFlow` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TrlFlow` | `I_TrsyLedgerTransactionFlow` | [0..*] |

## Source Code

```abap
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE , #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.sapObjectNodeType.name: 'TreasuryLedgerTransaction'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Treasury Ledger Transaction'
@VDM.viewType: #BASIC
define view entity I_TreasuryLedgerTransaction
  as select from trlt_transaction
  association [0..*] to I_TrsyLedgerTransactionFlow as _TrlFlow on $projection.TreasuryLedgerTransaction = _TrlFlow.TreasuryLedgerTransaction
{
  key cast(os_guid                                          as ftr_gen_trl_trans preserving type )              as TreasuryLedgerTransaction,
      cast( bustranscat                                     as ftr_gen_business_trans_categ   preserving type ) as TreasuryBusinessTransCategory,
      trldate                                                                                                   as TreasuryPositionLedgerDate,
      cast( bustransid                                      as ftr_gen_business_transaction   preserving type ) as TreasuryBusinessTransaction,
      cast( create_date                                     as tpm_bt_create_date             preserving type ) as TrsyBusTransactionCreationDate,
      cast( create_time                                     as tpm_bt_create_time             preserving type ) as TrsyBusTransactionCreationTime,
      cast( bustransstate                                   as ftr_gen_trltranstate preserving type )           as TrsyDerivedBusinessTransStatus,
      cast( booking_state                                   as ftr_gen_trl_bookingstate       preserving type ) as TreasuryBusinessTransStatus,
      valuation_area                                                                                            as TreasuryValuationArea,
      cast( tr_acc_code                                     as bukrs                          preserving type ) as CompanyCode,
      cast( refbustransid                                   as ftr_gen_bustransid_orig        preserving type ) as OriglTrsyBusinessTransaction,
      fi_post_date                                                                                              as PostingDate,
      fi_rev_date                                                                                               as PostingReversalDate,
      cast( igt_status                                      as ftr_gen_igt_status             preserving type ) as TrsyIntragroupTransacStatus,
      cast( user_data_oid                                   as ftr_gen_user_data_guid         preserving type ) as TreasuryUserStatisticsUUID,
      // for DCL
      @Consumption.hidden: true
      _TrlFlow
}
```
