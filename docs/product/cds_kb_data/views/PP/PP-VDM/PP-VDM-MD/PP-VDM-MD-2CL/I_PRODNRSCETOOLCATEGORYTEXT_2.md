---
name: I_PRODNRSCETOOLCATEGORYTEXT_2
description: "Prodnrscetoolcategorytext 2"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - text
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODNRSCETOOLCATEGORYTEXT_2

**Prodnrscetoolcategorytext 2**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdnRsceToolCategory` | ✓ | |  | `cast(fhmar as mpe_fhmar preserving type)` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ProdnRsceToolCategoryName` |  | |  | `faktx` |  |  |
| `ProdnRsceToolCategoryExtCode` |  | |  | `fhmar_ext` |  |  |
| `_ProdnRsceToolCategory` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProdnRsceToolCategory` | `I_ProdnRsceToolCategory_2` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPPRTCATEGTXT2'
@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL, numberOfKeyFields: 000}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ProdnRsceToolCategory'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY,#EXTRACTION_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Resource Tool Category - Text'
@ObjectModel.sapObjectNodeType.name: 'PRTCategoryText'
@Analytics.dataExtraction.enabled: true
// Sucessor of I_ProdnRsceToolCategoryText w/o conversion exit of key field

define view I_ProdnRsceToolCategoryText_2
  as select from tcf03

  association [0..1] to I_ProdnRsceToolCategory_2 as _ProdnRsceToolCategory on $projection.ProdnRsceToolCategory = _ProdnRsceToolCategory.ProdnRsceToolCategory
  association [0..1] to I_Language                as _Language              on $projection.Language = _Language.Language
{
      // Key
      @ObjectModel.foreignKey.association: '_ProdnRsceToolCategory'
      @ObjectModel.text.element: ['ProdnRsceToolCategoryName']
  key cast(fhmar as mpe_fhmar preserving type) as ProdnRsceToolCategory,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras     as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      faktx     as ProdnRsceToolCategoryName,
      @ObjectModel.text.element: ['ProdnRsceToolCategoryName']      
      fhmar_ext as ProdnRsceToolCategoryExtCode,

      // Associations
      _Language,
      _ProdnRsceToolCategory
};
```
