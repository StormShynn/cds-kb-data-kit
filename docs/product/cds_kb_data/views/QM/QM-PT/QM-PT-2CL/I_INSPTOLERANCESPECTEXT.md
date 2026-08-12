---
name: I_INSPTOLERANCESPECTEXT
description: "Insptolerancespectext"
app_component: QM-PT-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspToleranceSpecification` | ✓ | |  | `toleranzsl` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `InspToleranceSpecificationText` |  | |  | `kurztext` |  |  |
| `_Language` | | ✓ | | | | |
| `_InspToleranceSpecification` | | ✓ | | | | |

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
