---
name: I_PRVDRCONTRITEMCHGREASONTXT
description: Prvdrcontritemchgreasontxt
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_PRVDRCONTRITEMCHGREASONTXT

**Prvdrcontritemchgreasontxt**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAPrvdrContrItmChgReason` | `change_reason` |
| key `Language` | `langu` |
| `CAPrvdrContrItmChgReasonName` | `text` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Prvdr Contract Item Chg Reason - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAPrvdrContrItmChgReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_PrvdrContrItemChgReasonTxt 
  as select from tfk_ra_chrsn_t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key change_reason as CAPrvdrContrItmChgReason,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu      as Language,

      @Semantics.text
      text as CAPrvdrContrItmChgReasonName,

      _Language
}
```
