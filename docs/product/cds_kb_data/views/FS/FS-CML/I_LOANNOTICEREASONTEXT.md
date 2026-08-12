---
name: I_LOANNOTICEREASONTEXT
description: "Loan Notice Reason - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNOTICEREASONTEXT')/$value
semantic_en: "Loan Notice Reason - Text"
semantic_vi: "Loan Notice Reason - Text — CDS view giao diện dựa trên td04t."
keywords:
  - "loan"
  - "notice"
  - "reason"
  - "text"
  - "language"
tags:
  - FS
  - bo:salesorder
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANNOTICEREASONTEXT

**Loan Notice Reason - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNOTICEREASONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanNoticeReason` | ✓ | |  | `skuend` | `NUMC(3)` | Reason for Notice |
| `LoanNoticeReasonText` |  | |  | `xltext` | `CHAR(30)` | Text (30 Characters) |
| `_Language` | | ✓ | | | | |
| `_LoanNoticeReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanNoticeReason` | `I_LoanNoticeReason` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNOTICEREASONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNOTICEREASONTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILNOTCRSNTXT',
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
    representativeKey: 'LoanNoticeReason'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Notice Reason - Text'
define view I_LoanNoticeReasonText
  as select from td04t
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
  association [0..1] to I_LoanNoticeReason as _LoanNoticeReason on $projection.LoanNoticeReason = _LoanNoticeReason.LoanNoticeReason
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras  as Language,
      @ObjectModel.foreignKey.association: '_LoanNoticeReason'
  key skuend as LoanNoticeReason,

      @Semantics.text: true
      xltext as LoanNoticeReasonText,

      _Language,
      _LoanNoticeReason
}
```
