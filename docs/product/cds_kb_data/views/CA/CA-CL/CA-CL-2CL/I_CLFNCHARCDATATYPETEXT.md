---
name: I_CLFNCHARCDATATYPETEXT
description: "Clfncharcdatatypetext"
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
# I_CLFNCHARCDATATYPETEXT

**Clfncharcdatatypetext**

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
| `CharcDataType` | ✓ | |  | `cast( dd07t.domvalue_l as atfor)` | `CHAR(4)` | Data type of characteristic |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `CharcDataTypeName` |  | |  | `cast( dd07t.ddtext as charcdatatypename preserving type )` | `CHAR(60)` | Characteristic Data Type Name |
| `_Language` | | ✓ | | | | |
| `_CharcDataType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCHR22'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Data Type of Clfn Characteristic - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CharcDataType'
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
define view I_ClfnCharcDataTypeText
  as select from dd07t 
  association to parent I_ClfnCharcDataType as _CharcDataType
    on $projection.CharcDataType = _CharcDataType.CharcDataType
  association [0..1] to I_Language as _Language      
    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language, 
      @ObjectModel.foreignKey.association: '_CharcDataType'
      @ObjectModel.text.element: ['CharcDataTypeName']
  key cast( dd07t.domvalue_l as atfor) as CharcDataType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as charcdatatypename preserving type ) as CharcDataTypeName,
      
      _CharcDataType,
      _Language
} 
where dd07t.domname  = 'ATFOR'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
  and dd07t.domvalue_l <> 'UDEF'
```
