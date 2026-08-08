---
name: I_INSPQUALITYSCOREPROCEDURE
description: "Inspqualityscoreprocedure"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPQUALITYSCOREPROCEDURE

**Inspqualityscoreprocedure**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspQualityScoreProcedure` | ✓ | |  | `qkzverf` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InspQltyScoreProcedureTxt` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel:{
               usageType:{
                           sizeCategory: #S,
                           serviceQuality: #A,
                           dataClass:#CUSTOMIZING
                         },
               supportedCapabilities:[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY ]                         
             }
@EndUserText.label: 'Procedure to Calculate Quality Score'
@Metadata.ignorePropagatedAnnotations:true
define view entity I_InspQualityScoreProcedure
  as select from tq06
  association [0..*] to I_InspQltyScoreProcedureTxt as _Text on $projection.InspQualityScoreProcedure = _Text.InspQualityScoreProcedure
{
      @ObjectModel.text.association: '_Text'
  key qkzverf as InspQualityScoreProcedure,
      _Text
}
```
