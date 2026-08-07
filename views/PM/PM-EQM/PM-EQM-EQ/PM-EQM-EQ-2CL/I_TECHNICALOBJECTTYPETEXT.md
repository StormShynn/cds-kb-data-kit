---
name: I_TECHNICALOBJECTTYPETEXT
description: "Technicalobjecttypetext"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - text-view
  - text
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_TECHNICALOBJECTTYPETEXT

**Technicalobjecttypetext**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TechnicalObjectType` | ✓ | |  | `eqart` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `TechnicalObjectTypeDesc` |  | |  | `eartx` |  |  |
| `_TechnicalObjectType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TechnicalObjectType` | `I_TechnicalObjectType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Technical Object Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics: {  dataExtraction : { enabled: true , delta.changeDataCapture.automatic: true } }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ITECHOBJTYPETXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck:#CHECK
@ObjectModel.representativeKey: 'TechnicalObjectType'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@Metadata.ignorePropagatedAnnotations

@Search.searchable: true
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]


define view I_TechnicalObjectTypeText as select from t370k_t // T370K_T = Language-Dependent Texts for Object Type
association[0..1] to I_TechnicalObjectType as _TechnicalObjectType on _TechnicalObjectType.TechnicalObjectType = $projection.TechnicalObjectType
association [0..1] to I_Language as _Language on _Language.Language = $projection.Language  
{
    
    @ObjectModel.foreignKey.association: '_TechnicalObjectType'
    key t370k_t.eqart as TechnicalObjectType,
    
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key t370k_t.spras as Language, 
     
    @Semantics.text: true 
    // Optimize Type ahead for value helps - 2302
    @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
    @EndUserText.label: 'Object Type Text'
    t370k_t.eartx as TechnicalObjectTypeDesc,
       
    
     // Propagate association
     _TechnicalObjectType,
     _Language
}
```
