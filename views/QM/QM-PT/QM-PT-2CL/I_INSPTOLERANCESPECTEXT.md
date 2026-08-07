---
name: I_INSPTOLERANCESPECTEXT
description: Insptolerancespectext
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
  - text-view
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPTOLERANCESPECTEXT

**Insptolerancespectext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `InspToleranceSpecification` | ✓ | |  | `toleranzsl` |
| `Language` | ✓ | |  | `sprache` |
| `InspToleranceSpecificationText` |  | |  | `kurztext` |
| `_Language` | | ✓ | | |
| `_InspToleranceSpecification` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_InspToleranceSpecification` | `I_InspToleranceSpecification` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Inspection Tolerance Specification - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ] 
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        sizeCategory: #S,
        serviceQuality: #A
    },
    dataCategory: #TEXT,
    representativeKey: 'InspToleranceSpecification'
}
@Analytics.technicalName: 'IINSPTOLRNCSPECT'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_InspToleranceSpecText as select from tq29t

   association [0..1] to I_Language as _Language  
      on $projection.Language = _Language.Language

   association [1..1] to I_InspToleranceSpecification as _InspToleranceSpecification 
      on $projection.InspToleranceSpecification = _InspToleranceSpecification.InspToleranceSpecification

{
   @EndUserText.label: 'Inspection Tolerance Specification'
   key tq29t.toleranzsl as InspToleranceSpecification,
   @ObjectModel.foreignKey.association: '_Language'
   @Semantics.language: true
   key tq29t.sprache as Language,

   @EndUserText.label: 'Inspection Tolerance Specification Text'
   @Semantics.text: true
   @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
   tq29t.kurztext as InspToleranceSpecificationText

   /* Associations */ 
   ,_InspToleranceSpecification
   ,_Language
   
}
```
