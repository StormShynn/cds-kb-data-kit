---
name: I_PRODNRSCETOOLCATEGORYTEXT
description: Prodnrscetoolcategorytext
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - text-view
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODNRSCETOOLCATEGORYTEXT

**Prodnrscetoolcategorytext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdnRsceToolCategory` | ✓ | |  | `fhmar` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ProdnRsceToolCategoryName` |  | |  | `faktx` |  |  |
| `ProdnRsceToolCategoryExtCode` |  | |  | `fhmar_ext` |  |  |
| `_ProdnRsceToolCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProdnRsceToolCategory` | `I_ProdnRsceToolCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRTCATEGTXT'
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ProdnRsceToolCategory'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.lifecycle.status: #DEPRECATED  // conversion exit on key field FHMAR
@VDM.lifecycle.successor: 'I_ProdnRsceToolCategoryText_2'
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Resource Tool Category - Text'

define view I_ProdnRsceToolCategoryText
  as select from tcf03

  association [0..1] to I_ProdnRsceToolCategory as _ProdnRsceToolCategory on $projection.ProdnRsceToolCategory = _ProdnRsceToolCategory.ProdnRsceToolCategory
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
{
      // Key
      @ObjectModel.foreignKey.association: '_ProdnRsceToolCategory'
  key fhmar     as ProdnRsceToolCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras     as Language,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      faktx     as ProdnRsceToolCategoryName,
      
      fhmar_ext as ProdnRsceToolCategoryExtCode,

      // Associations
      _Language,
      _ProdnRsceToolCategory
};
```
