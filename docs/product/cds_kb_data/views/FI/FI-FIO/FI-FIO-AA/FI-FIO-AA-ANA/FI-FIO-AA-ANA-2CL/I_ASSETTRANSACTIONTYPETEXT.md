---
name: I_ASSETTRANSACTIONTYPETEXT
description: "This CDS view provides the prerequisites for answering the following business question: How many asset transaction types are defined?"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETTRANSACTIONTYPETEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How many asset transaction types are defined?"
semantic_vi: "Asset Transaction Type - Text — CDS view giao diện dựa trên tabwt."
keywords:
  - "asset"
  - "transaction"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - FI
  - bo:companycode
  - component:FI-FIO-AA-ANA-2CL
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_ASSETTRANSACTIONTYPETEXT

**This CDS view provides the prerequisites for answering the following business question: How many asset transaction types are defined?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETTRANSACTIONTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetTransactionType` | ✓ | |  | `bwasl` | `CHAR(3)` | Asset Transaction Type |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `AssetTransactionTypeName` |  | |  | `cast(tabwt.bwatxt as fis_bwatxt)` | `CHAR(50)` | Asset Transaction Type Name |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETTRANSACTIONTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETTRANSACTIONTYPETEXT')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IFIASSETTRTYPT', preserveKey: true}
@EndUserText.label: 'Asset Transaction Type - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AssetTransactionType',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_AssetTransactionTypeText
  as select from tabwt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key tabwt.bwasl                      as AssetTransactionType,
      @Semantics.language: true
  key tabwt.spras                      as Language,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      cast(tabwt.bwatxt as fis_bwatxt) as AssetTransactionTypeName,

      _Language
}
```
