---
name: I_TREASURYLEDGERPOSITION
description: "Treasuryledgerposition"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_TREASURYLEDGERPOSITION

**Treasuryledgerposition**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TreasuryPosition` | ✓ | |  | `os_guid` |  |  |
| `TreasuryPositionZeroDate` |  | |  | `zero_pos_date` |  |  |
| `TreasuryPosAssetLiabilityCode` |  | |  | `cast(trlt_position.active_passive as ftr_gen_asset_liab_indicator preserving type)` |  |  |
| `TrsyPosManagementProcedure` |  | |  | `cast(trlt_position.pos_man_proc as ftr_gen_pos_man_proc preserving type)` |  |  |
| `PositionCurrency` |  | |  | `position_curr` |  |  |
| `ValuationCurrency` |  | |  | `valuation_curr` |  |  |
| `CreatedByUser` |  | |  | `rerf` |  |  |
| `FirstResponseByDate` |  | |  | `derf` |  |  |
| `CorrespondenceCreationTime` |  | |  | `terf` |  |  |
| `_PositionIdentifier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PositionIdentifier` | `I_TreasuryPositionIdentifier` | [1..1] |

## Source Code

```abap
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.representativeKey: 'TreasuryPosition'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'TreasuryLedgerPosition'
@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture.automatic: true } 
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Treasury Ledger Position'
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
define view entity I_TreasuryLedgerPosition
  as select from trlt_position
  association [1..1] to I_TreasuryPositionIdentifier as _PositionIdentifier on $projection.TreasuryPosition = _PositionIdentifier.TreasuryPosition
{
  key trlt_position.os_guid                                                              as TreasuryPosition,
      trlt_position.zero_pos_date                                                        as TreasuryPositionZeroDate,
      cast(trlt_position.active_passive as ftr_gen_asset_liab_indicator preserving type) as TreasuryPosAssetLiabilityCode,
      cast(trlt_position.pos_man_proc as ftr_gen_pos_man_proc preserving type)           as TrsyPosManagementProcedure,

      position_curr                                                                      as PositionCurrency,
      valuation_curr                                                                     as ValuationCurrency,
      rerf                                                                               as CreatedByUser,
      derf                                                                               as FirstResponseByDate,
      terf                                                                               as CorrespondenceCreationTime,
      // for DCL
      @Consumption.hidden: true
      _PositionIdentifier
}
```
