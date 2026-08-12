---
name: I_TRSYCTPTYLIMITTYPE
description: "Trsyctptylimittype"
app_component: FIN-FSCM-TRM-CR-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
