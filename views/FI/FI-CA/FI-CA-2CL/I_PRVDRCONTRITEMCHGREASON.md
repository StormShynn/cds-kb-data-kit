---
name: I_PRVDRCONTRITEMCHGREASON
description: Prvdrcontritemchgreason
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
# I_PRVDRCONTRITEMCHGREASON

**Prvdrcontritemchgreason**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAPrvdrContrItmChgReason` | ✓ | |  | `change_reason` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PrvdrContrItemChgReasonTxt` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Provider Contract Item Change Reason'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAPrvdrContrItmChgReason',
                sapObjectNodeType.name: 'PrvdrContractItemChangeReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_PrvdrContrItemChgReason 
  as select from tfk_ra_chrsn

  association [1..*] to I_PrvdrContrItemChgReasonTxt as _Text on $projection.CAPrvdrContrItmChgReason = _Text.CAPrvdrContrItmChgReason

{
      @ObjectModel.text.association: '_Text'
  key change_reason as CAPrvdrContrItmChgReason,

      _Text
}
```
