---
name: I_RETURNSDOCUMENTTYPETEXT
description: "Returnsdocumenttypetext"
app_component: LO-ARM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-ARM
  - interface-view
  - text-view
  - document
  - text
  - component:LO-ARM-2CL
  - lob:Logistics General
---
# I_RETURNSDOCUMENTTYPETEXT

**Returnsdocumenttypetext**

| Property | Value |
|---|---|
| App Component | `LO-ARM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReturnsDocumentType` | ✓ | |  | `cast( substring(dd07t.domvalue_l, 1, 2) as msr_doc_type)` |  |  |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `ReturnsDocumentTypeName` |  | |  | `ddtext` |  |  |
| `_ReturnsDocumentType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReturnsDocumentType` | `I_ReturnsDocumentType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ReturnsDocumentType'
@ObjectModel.usageType.dataClass:  #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@Metadata.ignorePropagatedAnnotations : true
@EndUserText.label: 'Returns Document Type - Text'
@ObjectModel.modelingPattern          : #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities    : [
  #LANGUAGE_DEPENDENT_TEXT,
  #SQL_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET,
  #CDS_MODELING_DATA_SOURCE,
  #EXTRACTION_DATA_SOURCE,
  #SEARCHABLE_ENTITY
]
@AbapCatalog.preserveKey: true
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IRMRETDOCTYPET'

define view I_ReturnsDocumentTypeText
as select from
dd07t
association [0..1] to I_ReturnsDocumentType
as _ReturnsDocumentType on $projection.ReturnsDocumentType = _ReturnsDocumentType.ReturnsDocumentType
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    //Key
    @ObjectModel.foreignKey.association: '_ReturnsDocumentType'
    @ObjectModel.text.element: ['ReturnsDocumentTypeName']
    key cast( substring(dd07t.domvalue_l, 1, 2) as msr_doc_type)  as ReturnsDocumentType,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key cast( dd07t.ddlanguage as spras preserving type ) as Language,
    
    //Name
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    @Semantics.text: true
    dd07t.ddtext as ReturnsDocumentTypeName,
    //Associations
    _ReturnsDocumentType,
    _Language
}
where (dd07t.domname = 'MSR_DOC_TYPE') and (dd07t.as4local = 'A');
```
