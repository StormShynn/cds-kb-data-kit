---
name: I_SAMPLINGTYPE
description: "Samplingtype"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
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
# I_SAMPLINGTYPE

**Samplingtype**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SamplingType` | ✓ | |  | `stichprart` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SamplingTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Sampling Type' //same as DDL description
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'SamplingType'
@Analytics.technicalName: 'ISMPLGTYPE'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #S, dataClass: #MASTER }
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SamplingType
   as select from qdsa

   association [0..*] to I_SamplingTypeText as _Text
      on $projection.SamplingType = _Text.SamplingType
      
{
   @ObjectModel.text.association: '_Text'
   @Search: { defaultSearchElement: true, ranking: #HIGH }
   key qdsa.stichprart   as SamplingType,

//       qdsa.kztab, 
//       qdsa.kzant, 
//       qdsa.kzfix, 
//       qdsa.kz100, 
//       qdsa.kznvwsa, 
//       qdsa.ersteller, 
//       qdsa.aenderer, 
//       qdsa.erstelldat, 
//       qdsa.aenderdat
   
   /* Associtions */
   _Text
}
```
