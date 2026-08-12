---
name: I_LOANCHGPOINTERCHANGECATTEXT
description: "Loan Change Pointer Change Category - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERCHANGECATTEXT')/$value
semantic_en: "Loan Change Pointer Change Category - Text"
semantic_vi: "Loan Change Pointer Change Category - Text — CDS view giao diện dựa trên tdchgcatg_t."
keywords:
  - "loan"
  - "change"
  - "pointer"
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
# I_LOANCHGPOINTERCHANGECATTEXT

**Loan Change Pointer Change Category - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERCHANGECATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanChgPointerChangeCat` | ✓ | |  | `chgcatg` | `CHAR(4)` | Change Category |
| `LoanChgPointerChangeCatText` |  | |  | `xchgcatg` | `CHAR(50)` | Name of Change Category |
| `_Language` | | ✓ | | | | |
| `_LoanChgPointerChangeCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanChgPointerChangeCat` | `I_LoanChgPointerChangeCat` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERCHANGECATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERCHANGECATTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCPCHGCATTXT',
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
    representativeKey: 'LoanChgPointerChangeCat'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Change Pointer Change Category - Text'
define view I_LoanChgPointerChangeCatText
  as select from tdchgcatg_t
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
  association [0..1] to I_LoanChgPointerChangeCat as _LoanChgPointerChangeCat on $projection.LoanChgPointerChangeCat = _LoanChgPointerChangeCat.LoanChgPointerChangeCat
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras    as Language,
      @ObjectModel.foreignKey.association: '_LoanChgPointerChangeCat'
  key chgcatg  as LoanChgPointerChangeCat,

      @Semantics.text: true
      xchgcatg as LoanChgPointerChangeCatText,

      _Language,
      _LoanChgPointerChangeCat
}
```
