---
name: I_CLFNCHARCEXPONENTFORMATTEXT
description: Clfncharcexponentformattext
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
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
# I_CLFNCHARCEXPONENTFORMATTEXT

**Clfncharcexponentformattext**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `CharcExponentFormat` | ✓ | |  | `cast( dd07t.domvalue_l as atdex)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `CharcExponentFormatName` |  | |  | `cast( dd07t.ddtext as charcexponentformatname preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_CharcExponentFormat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCHR24'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Exponent Format of Clfn Charc - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CharcExponentFormat'
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
define view I_ClfnCharcExponentFormatText
  as select from dd07t 
  association to parent I_ClfnCharcExponentFormat as _CharcExponentFormat
    on $projection.CharcExponentFormat = _CharcExponentFormat.CharcExponentFormat
  association [0..1] to I_Language as _Language      
    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language, 
      @ObjectModel.foreignKey.association: '_CharcExponentFormat'
      @ObjectModel.text.element: ['CharcExponentFormatName']
  key cast( dd07t.domvalue_l as atdex) as CharcExponentFormat,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as charcexponentformatname preserving type ) as CharcExponentFormatName,
      
      _CharcExponentFormat,
      _Language
} 
where dd07t.domname  = 'ATDEX'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
