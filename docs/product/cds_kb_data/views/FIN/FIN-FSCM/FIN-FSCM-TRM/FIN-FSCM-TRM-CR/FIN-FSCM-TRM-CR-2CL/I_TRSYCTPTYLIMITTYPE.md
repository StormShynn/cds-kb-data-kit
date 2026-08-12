---
name: I_TRSYCTPTYLIMITTYPE
description: "Trsyctptylimittype"
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
# I_TRSYCTPTYLIMITTYPE

**Trsyctptylimittype**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LimitType` | ✓ | |  | `sla` |  |  |
| `LimitUtilznDetnProcedure` |  | |  | `sle` |  |  |
| `RelationshipCategory` |  | |  | `spr` |  |  |
| `CtptyLmtBPAttributionDirection` |  | |  | `spd` |  |  |
| `CtptyLmtWrngThresholdCategory` |  | |  | `sigtyp` |  |  |
| `_LimitTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LimitTypeText` | `I_TrsyCtptyLimitTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'ITRSYCTPTYLT',
                compiler.compareFilter: true,
                preserveKey: true,
                buffering.status: #SWITCHED_OFF }
                
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: { representativeKey: 'LimitType',
                usageType.dataClass: #CUSTOMIZING,
                usageType.serviceQuality: #D,
                usageType.sizeCategory: #S,
                supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE  ],
                modelingPattern: #ANALYTICAL_DIMENSION }

@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Treasury Counterparty Limit Type'
define view I_TrsyCtptyLimitType as select from atla
association [0..*] to I_TrsyCtptyLimitTypeText as _LimitTypeText on $projection.LimitType = _LimitTypeText.LimitType 
{
@ObjectModel.text.association: '_LimitTypeText'
key sla as LimitType,
sle as LimitUtilznDetnProcedure,
spr as RelationshipCategory,
spd as CtptyLmtBPAttributionDirection,
sigtyp as CtptyLmtWrngThresholdCategory,
_LimitTypeText
}
```
