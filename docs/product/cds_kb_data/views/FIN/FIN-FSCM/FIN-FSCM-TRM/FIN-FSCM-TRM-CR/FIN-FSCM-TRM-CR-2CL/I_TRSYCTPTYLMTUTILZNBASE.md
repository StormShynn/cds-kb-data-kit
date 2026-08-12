---
name: I_TRSYCTPTYLMTUTILZNBASE
description: "Trsyctptylmtutilznbase"
app_component: FIN-FSCM-TRM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-CR-2CL
  - lob:Other
---
# I_TRSYCTPTYLMTUTILZNBASE

**Trsyctptylmtutilznbase**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LimitUtilizationBase` | ✓ | |  | `sli` |  |  |
| `LmtUtilznIsCrtedBySglTransChk` |  | |  | `egp` |  |  |
| `_LmtUtilznBaseText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LmtUtilznBaseText` | `I_TrsyCtptyLmtUtilznBaseText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'ITRSYCTPTYLUB',
                compiler.compareFilter: true,
                preserveKey: true,
                buffering.status: #SWITCHED_OFF }
                
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: { representativeKey: 'LimitUtilizationBase',
                usageType.dataClass: #CUSTOMIZING,
                usageType.serviceQuality: #D,
                usageType.sizeCategory: #S,
                supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE  ],
                modelingPattern: #ANALYTICAL_DIMENSION }

@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Treasury Counterparty Limit Utilization Base'
define view I_TrsyCtptyLmtUtilznBase as select from atlsli
association [0..*] to I_TrsyCtptyLmtUtilznBaseText as _LmtUtilznBaseText on $projection.LimitUtilizationBase = _LmtUtilznBaseText.LimitUtilizationBase
{
@ObjectModel.text.association: '_LmtUtilznBaseText'
key sli as LimitUtilizationBase,
egp as LmtUtilznIsCrtedBySglTransChk,
_LmtUtilznBaseText
}
```
