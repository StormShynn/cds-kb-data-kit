---
name: I_SAMPLEDETERMINATIONRULE
description: "Sampledeterminationrule"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_SAMPLEDETERMINATIONRULE

**Sampledeterminationrule**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SampleDeterminationRule` | ✓ | |  | `fbkey` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SampleDeterminationRuleText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Sample Determination Rule' //same as DDL description
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'SampleDeterminationRule'
@Analytics.technicalName: 'ISMPLDETNRULE'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #S, dataClass: #MASTER }
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SampleDeterminationRule
   as select from qdfb

   association [0..*] to I_SampleDeterminationRuleText as _Text
     on $projection.SampleDeterminationRule = _Text.SampleDeterminationRule
     
{
   @ObjectModel.text.association: '_Text'
   @Search: { defaultSearchElement: true, ranking: #HIGH }
   key qdfb.fbkey       as SampleDeterminationRule,
   
//       qdfb.fbname, 
//       qdfb.kztab, 
//       qdfb.kzant, 
//       qdfb.kzfix, 
//       qdfb.kz100, 
//       qdfb.ersteller, 
//       qdfb.aenderer, 
//       qdfb.erstelldat, 
//       qdfb.aenderdat   

   /* Associations */
   _Text
   
}
```
