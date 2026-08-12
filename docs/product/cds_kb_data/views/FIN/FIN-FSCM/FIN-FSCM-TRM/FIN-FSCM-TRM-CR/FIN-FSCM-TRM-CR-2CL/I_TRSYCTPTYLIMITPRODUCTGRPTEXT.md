---
name: I_TRSYCTPTYLIMITPRODUCTGRPTEXT
description: "Trsyctptylimitproductgrptext"
app_component: FIN-FSCM-TRM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - product
  - text
  - component:FIN-FSCM-TRM-CR-2CL
  - lob:Other
---
# I_TRSYCTPTYLIMITPRODUCTGRPTEXT

**Trsyctptylimitproductgrptext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `LimitProductGroup` | ✓ | |  | `slpg` |  |  |
| `LimitProductGroupName` |  | |  | `xlpg` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'ITRSYCTPTYLPGT',
                compiler.compareFilter: true,
                preserveKey: true,
                buffering.status: #SWITCHED_OFF }
                 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'LimitProductGroup',
                usageType.dataClass: #CUSTOMIZING,
                usageType.serviceQuality: #D,
                usageType.sizeCategory: #S,
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET  ],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT }

@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Treasury Counterparty Limit Product Group - Text'
define view I_TrsyCtptyLimitProductGrpText as select from atlpgt
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language {
  @Semantics.language: true   
  key spras as Language,   
  key slpg as LimitProductGroup, 
  @Semantics.text: true 
  xlpg  as LimitProductGroupName,
  _Language
}
```
