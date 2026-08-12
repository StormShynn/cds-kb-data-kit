---
name: I_FINTRANSOPTNUNDRLGALLOCATION
description: "Fintransoptnundrlgallocation"
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
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSOPTNUNDRLGALLOCATION

**Fintransoptnundrlgallocation**

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
| `FinTransOptionNumber` | ✓ | |  | `optnr` |  |  |
| `OptionUnderlyingTransaction` | ✓ | |  | `cast( rfha as option_underlying_transaction preserving type )` |  |  |
| `FinancialTransactionFromExer` |  | |  | `vrfha` |  |  |
| `_FinTrans` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinTrans` | `I_FinancialTransaction` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Fin Trans Option Underlying Allocation'
@ObjectModel.sapObjectNodeType.name: 'FinTransOptnUndrlgAllocation'
@Analytics.technicalName: 'IFINTRAOPTUNDALL'

@AccessControl.authorizationCheck: #CHECK

@VDM.viewType: #BASIC

@ObjectModel: {
  usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #B, sizeCategory: #M },
  modelingPattern: #ANALYTICAL_FACT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
}

@Analytics: {
  dataExtraction.enabled: true
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_FinTransOptnUndrlgAllocation
  as select from vtiofzu

  association [1..1] to I_FinancialTransaction as _FinTrans             on $projection.FinTransOptionNumber = _FinTrans.FinTransOptionNumber
{

  key optnr                                                         as FinTransOptionNumber,
  key cast( rfha as option_underlying_transaction preserving type ) as OptionUnderlyingTransaction,
      vrfha                                                         as FinancialTransactionFromExer,

      //association
      _FinTrans

}
```
