---
name: I_INSPTOLERANCESPECIFICATION
description: "Insptolerancespecification"
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
# I_INSPTOLERANCESPECIFICATION

**Insptolerancespecification**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspToleranceSpecification` | ✓ | |  | `toleranzsl` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InspToleranceSpecText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Inspection Tolerance Specification'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] 
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        sizeCategory: #S,
        serviceQuality: #A
    },
    representativeKey: 'InspToleranceSpecification'
}
@Analytics.technicalName: 'IINSPTOLRNCSPEC'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_InspToleranceSpecification as select from tq29

   association [0..*] to I_InspToleranceSpecText as _Text 
      on $projection.InspToleranceSpecification = _Text.InspToleranceSpecification

{
   @EndUserText.label: 'Inspection Tolerance Specification'
   @ObjectModel.text.association: '_Text'
   @Search: { defaultSearchElement: true, ranking: #HIGH }
   key tq29.toleranzsl            as InspToleranceSpecification
 
//       tq29.stellen, 
//       tq29.einheit, 
//       tq29.kzsollwert, 
//       tq29.sollwert, 
//       tq29.sollwni, 
//       tq29.kztolrel, 
//       tq29.toleranzob, 
//       tq29.tolobni, 
//       tq29.toleranzun, 
//       tq29.tolunni, 
//       tq29.tolsoll

   /* Associations */
   ,_Text
   
}
```
