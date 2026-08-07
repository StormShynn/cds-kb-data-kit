---
name: I_TRSYCTPTYLIMITPRODUCTGROUP
description: Trsyctptylimitproductgroup
app_component: FIN-FSCM-TRM-CR-2CL
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
  - product
  - component:FIN-FSCM-TRM-CR-2CL
  - lob:Other
---
# I_TRSYCTPTYLIMITPRODUCTGROUP

**Trsyctptylimitproductgroup**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LimitProductGroup` | ✓ | |  | `slpg` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TrsyCtptyLimitProductGrpText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName:            'ITRSYCTPTYLPG',
                compiler.compareFilter: true,
                preserveKey:            true,
                buffering: { status:    #NOT_ALLOWED } }

@Analytics: { dataCategory: #DIMENSION,
              internalName: #LOCAL }

@AccessControl: { authorizationCheck: #NOT_REQUIRED,
                  personalData.blocking: #NOT_REQUIRED }

@Metadata.ignorePropagatedAnnotations:true

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType: { serviceQuality: #D,
                          sizeCategory:   #S,
                          dataClass:      #CUSTOMIZING }
@ObjectModel.supportedCapabilities : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE  ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'LimitProductGroup'

@VDM: { viewType: #BASIC }

@Search.searchable: true

@EndUserText.label: 'Treasury Counterparty Limit Product Group'

define view I_TrsyCtptyLimitProductGroup
  as select from atlpg

  association [0..*] to I_TrsyCtptyLimitProductGrpText as _Text on $projection.LimitProductGroup = _Text.LimitProductGroup
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.association: '_Text'
  key slpg as LimitProductGroup,
      @Consumption.hidden: true
      _Text
}
```
