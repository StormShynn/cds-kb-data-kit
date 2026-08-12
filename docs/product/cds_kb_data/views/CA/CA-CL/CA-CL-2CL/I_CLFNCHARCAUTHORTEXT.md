---
name: I_CLFNCHARCAUTHORTEXT
description: "Clfncharcauthortext"
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - text-view
  - text
  - component:CA-CL-2CL
  - lob:Cross-Application Components
---
# I_CLFNCHARCAUTHORTEXT

**Clfncharcauthortext**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `CharcAuthor` | ✓ | |  | `cast( dd07t.domvalue_l as ataut )` | `CHAR(1)` | Classification Author |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `CharcAuthorName` |  | |  | `cast( dd07t.ddtext as charcauthorname preserving type )` | `CHAR(60)` | Characteristic Author Name |
| `_Language` | | ✓ | | | | |
| `_CharcAuthor` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCHR26'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Author of Clfn Characteristic - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CharcAuthor'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #SQL_DATA_SOURCE,
     #EXTRACTION_DATA_SOURCE,
     #SEARCHABLE_ENTITY               ] 
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_ClfnCharcAuthorText
  as select from dd07t 
  association to parent I_ClfnCharcAuthor as _CharcAuthor
    on $projection.CharcAuthor = _CharcAuthor.CharcAuthor   
  association [0..1] to I_Language as _Language      
    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language, 
      @ObjectModel.foreignKey.association: '_CharcAuthor'
      @ObjectModel.text.element: ['CharcAuthorName']
  key cast( dd07t.domvalue_l as ataut ) as CharcAuthor,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as charcauthorname preserving type ) as CharcAuthorName,
      
      _CharcAuthor,
      _Language
} 
where dd07t.domname  = 'ATAUT'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
