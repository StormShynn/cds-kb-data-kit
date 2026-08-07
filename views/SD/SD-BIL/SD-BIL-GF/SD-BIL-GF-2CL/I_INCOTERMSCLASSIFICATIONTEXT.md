---
name: I_INCOTERMSCLASSIFICATIONTEXT
description: "Incotermsclassificationtext"
app_component: SD-BIL-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-GF
  - interface-view
  - text-view
  - classification
  - text
  - component:SD-BIL-GF-2CL
  - lob:Sales & Distribution
---
# I_INCOTERMSCLASSIFICATIONTEXT

**Incotermsclassificationtext**

| Property | Value |
|---|---|
| App Component | `SD-BIL-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IncotermsClassification` | ✓ | |  | `inco1` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `IncotermsClassificationName` |  | |  | `cast(bezei as incoterms_classification_name preserving type )` |  |  |
| `_IncotermsClassification` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_IncotermsClassification` | `I_IncotermsClassification` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'IncotermsClassification'
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Incoterms Classification - Text'
@VDM.viewType: #BASIC
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDINCOTERMCLSST'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.preserveKey:true 
@Metadata.ignorePropagatedAnnotations:true 

define view I_IncotermsClassificationText
as
select from tinct
association [0..1] to I_IncotermsClassification as _IncotermsClassification on $projection.IncotermsClassification = _IncotermsClassification.IncotermsClassification
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_IncotermsClassification'
    key inco1 as IncotermsClassification,

    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,

    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    @Semantics.text
    cast(bezei as incoterms_classification_name preserving type ) as IncotermsClassificationName,
    
    _IncotermsClassification,
    _Language
};
```
