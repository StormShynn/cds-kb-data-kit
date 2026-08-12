---
name: I_DEPRAREAFORLEDGERTEXT
description: "This CDS view provides the prerequisites for answering the following business question: How many depreciation areas are defined in a company code / ledger?"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRAREAFORLEDGERTEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How many depreciation areas are defined in a company code / ledger?"
semantic_vi: "Depreciation Area - Text — CDS view giao diện dựa trên faac_cmp_da0_t."
keywords:
  - "depreciation"
  - "area"
  - "text"
  - "company"
  - "code"
  - "ledger"
  - "asset"
  - "language"
  - "name"
tags:
  - FI
  - bo:asset
  - component:FI-FIO-AA-ANA-2CL
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - interface-view
  - lob:finance
---
# I_DEPRAREAFORLEDGERTEXT

**This CDS view provides the prerequisites for answering the following business question: How many depreciation areas are defined in a company code / ledger?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRAREAFORLEDGERTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `comp_code` | `CHAR(4)` | Company Code |
| `Ledger` | ✓ | |  | `ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `AssetDepreciationArea` | ✓ | |  | `cast(depr_area as afaber)` | `NUMC(2)` | Depreciation Area Real or Derived |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `AssetDepreciationAreaName` |  | |  | `cast (description_long as fis_afbtxt)` | `CHAR(50)` | Depreciation Area Name |
| `AssetDepreciationAreaShortName` |  | |  | `description_short` | `CHAR(12)` | Short Name for Depreciation Area |
| `_CompanyCode` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRAREAFORLEDGERTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEPRAREAFORLEDGERTEXT')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IFIDEPRAREALDGRT', preserveKey: true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Depreciation Area - Text'
@VDM.viewType: #BASIC
@ObjectModel: { representativeKey: 'AssetDepreciationArea',
                dataCategory: #TEXT,
                usageType.serviceQuality: #B,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SEARCHABLE_ENTITY]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_DeprAreaForLedgerText
  as select from faac_cmp_da0_t

  association [1..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Ledger      as _Ledger      on $projection.Ledger = _Ledger.Ledger
  association [0..1] to I_Language    as _Language    on $projection.Language = _Language.Language
{
       @ObjectModel.foreignKey.association: '_CompanyCode'
  key  comp_code as CompanyCode,
       @ObjectModel.foreignKey.association: '_Ledger'
  key  ledger as Ledger,
  key  cast(depr_area as afaber) as AssetDepreciationArea,
       @ObjectModel.foreignKey.association: '_Language'
       @Semantics.language: true
  key  language as Language,

       @Semantics.text: true
       @Search.defaultSearchElement: true
       @Search.fuzzinessThreshold: 0.8
       @Search.ranking: #LOW
       cast (description_long as fis_afbtxt) as AssetDepreciationAreaName,
       @Semantics.text: true
       description_short as AssetDepreciationAreaShortName,

       /* Associations */
       _CompanyCode,
       _Ledger,
       _Language
}
```
