---
name: I_LOANCHGPOINTERCHGSUBCATTEXT
description: "Loan Change Pointer Change Sub Category - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERCHGSUBCATTEXT')/$value
semantic_en: "Loan Change Pointer Change Sub Category - Text"
semantic_vi: "Loan Change Pointer Change Sub Category - Text — CDS view giao diện dựa trên tdchgcatgsub_t."
keywords:
  - "loan"
  - "change"
  - "pointer"
  - "sub"
  - "category"
  - "text"
  - "language"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANCHGPOINTERCHGSUBCATTEXT

**Loan Change Pointer Change Sub Category - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERCHGSUBCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanChgPointerChangeCat` | ✓ | |  | `chgcatg` | `CHAR(4)` | Change Category |
| `LoanChgPointerChgSubCat` | ✓ | |  | `chgcatgsub` | `CHAR(4)` | Change Sub-Category |
| `LoanChgPointerChgSubCatText` |  | |  | `xchgcatgsub` | `CHAR(50)` | Name of Change Sub-Category |
| `_Language` | | ✓ | | | | |
| `_LoanChgPointerChangeCat` | | ✓ | | | | |
| `_LoanChgPointerChgSubCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanChgPointerChangeCat` | `I_LoanChgPointerChangeCat` | [0..1] |
| `_LoanChgPointerChgSubCat` | `I_LoanChgPointerChgSubCat` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERCHGSUBCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERCHGSUBCATTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCPCHGSUBCATTXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'LoanChgPointerChgSubCat'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Change Pointer Change Sub Category - Text'
define view I_LoanChgPointerChgSubCatText
  as select from tdchgcatgsub_t
  association [0..1] to I_Language                as _Language                on  $projection.Language = _Language.Language
  association [0..1] to I_LoanChgPointerChangeCat as _LoanChgPointerChangeCat on  $projection.LoanChgPointerChangeCat = _LoanChgPointerChangeCat.LoanChgPointerChangeCat
  association [0..1] to I_LoanChgPointerChgSubCat as _LoanChgPointerChgSubCat on  $projection.LoanChgPointerChangeCat = _LoanChgPointerChgSubCat.LoanChgPointerChangeCat
                                                                              and $projection.LoanChgPointerChgSubCat = _LoanChgPointerChgSubCat.LoanChgPointerChgSubCat
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras       as Language,
      @ObjectModel.foreignKey.association: '_LoanChgPointerChangeCat'
  key chgcatg     as LoanChgPointerChangeCat,
      @ObjectModel.foreignKey.association: '_LoanChgPointerChgSubCat'
  key chgcatgsub  as LoanChgPointerChgSubCat,

      @Semantics.text: true
      xchgcatgsub as LoanChgPointerChgSubCatText,

      _Language,
      _LoanChgPointerChangeCat,
      _LoanChgPointerChgSubCat
}
```
