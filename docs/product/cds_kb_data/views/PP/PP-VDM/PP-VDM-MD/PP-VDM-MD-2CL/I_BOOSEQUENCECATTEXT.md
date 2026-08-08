---
name: I_BOOSEQUENCECATTEXT
description: "Bill of Ops Sequence Category - Text"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOSEQUENCECATTEXT')/$value
semantic_en: "Bill of Ops Sequence Category - Text"
semantic_vi: "Bill of Ops Sequence Category - Text — CDS view giao diện dựa trên I_SequenceCategoryText."
keywords:
  - "bill"
  - "ops"
  - "sequence"
  - "category"
  - "text"
  - "operations"
  - "language"
  - "name"
tags:
  - PP
  - bo:project
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_BOOSEQUENCECATTEXT

**Bill of Ops Sequence Category - Text**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOSEQUENCECATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsSequenceCat` | ✓ | |  | `SequenceCategory` | `CHAR(1)` | Sequence Category |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `BOOSequenceCategoryName` |  | |  | `SequenceCategoryName` | `CHAR(30)` | Description of a Sequence Category |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOSEQUENCECATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOSEQUENCECATTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPPBOOSEQCATTXT'
@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BillOfOperationsSequenceCat'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Bill of Ops Sequence Category - Text'
@ObjectModel.sapObjectNodeType.name: 'BillOfOperationsSeqCatText'
@Analytics.dataExtraction.enabled: true

define view I_BOOSequenceCatText
  as select from I_SequenceCategoryText as txt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'BOOSequenceCategoryName'
  key txt.SequenceCategory     as BillOfOperationsSequenceCat,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key txt.Language             as Language,

      @Semantics.text: true
      txt.SequenceCategoryName as BOOSequenceCategoryName,

      _Language
};
```
