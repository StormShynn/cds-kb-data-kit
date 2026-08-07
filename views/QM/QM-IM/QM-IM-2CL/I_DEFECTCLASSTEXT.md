---
name: I_DEFECTCLASSTEXT
description: Defectclasstext
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
  - text-view
  - text
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_DEFECTCLASSTEXT

**Defectclasstext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DefectClass` | ✓ | |  | `fehlklasse` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `DefectClassText` |  | |  | `kurztext` |  |  |
| `_Language` | | ✓ | | | | |
| `_DefectClass` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_DefectClass` | `I_DefectClass` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Defect Class - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    usageType: { dataClass: #CUSTOMIZING, sizeCategory: #M, serviceQuality: #A },
    representativeKey: 'DefectClass',
    dataCategory: #TEXT
}
@Analytics.technicalName: 'IDEFECTCLASST'
@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true
define view entity I_DefectClassText as select from tq17t 
   association [0..1] to I_Language as _Language
      on     $projection.Language = _Language.Language
   association [0..1] to I_DefectClass as _DefectClass
      on     $projection.DefectClass = _DefectClass.DefectClass

{
  key fehlklasse as DefectClass,
  @Semantics.language: true
  key sprache    as Language,
  @Semantics.text: true
  @Search: {
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #HIGH
  }
  kurztext       as DefectClassText,
  
   /* Associations */
  _DefectClass,
  _Language 
  
}
```
