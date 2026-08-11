---
name: I_LOANLENDERNOTICEARRGMTTEXT
description: "Loan Lender Notice Arrangement - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANLENDERNOTICEARRGMTTEXT')/$value
semantic_en: "Loan Lender Notice Arrangement - Text"
semantic_vi: "Loan Lender Notice Arrangement - Text — CDS view giao diện dựa trên td28t."
keywords:
  - "loan"
  - "lender"
  - "notice"
  - "arrangement"
  - "text"
  - "language"
  - "arrgmt"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANLENDERNOTICEARRGMTTEXT

**Loan Lender Notice Arrangement - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANLENDERNOTICEARRGMTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanLenderNoticeArrgmt` | ✓ | |  | `skuegl` | `NUMC(3)` | Notice Arrangement Lender |
| `LoanLenderNoticeArrgmtText` |  | |  | `xltext` | `CHAR(30)` | Text (30 Characters) |
| `_Language` | | ✓ | | | | |
| `_LoanLenderNoticeArrgmt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanLenderNoticeArrgmt` | `I_LoanLenderNoticeArrgmt` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANLENDERNOTICEARRGMTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANLENDERNOTICEARRGMTTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILLNDNOTARRTXT',
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
    representativeKey: 'LoanLenderNoticeArrgmt'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Lender Notice Arrangement - Text'
define view I_LoanLenderNoticeArrgmtText
  as select from td28t
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
  association [0..1] to I_LoanLenderNoticeArrgmt as _LoanLenderNoticeArrgmt on $projection.LoanLenderNoticeArrgmt = _LoanLenderNoticeArrgmt.LoanLenderNoticeArrgmt
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras  as Language,
      @ObjectModel.foreignKey.association: '_LoanLenderNoticeArrgmt'
  key skuegl as LoanLenderNoticeArrgmt,

      @Semantics.text: true
      xltext as LoanLenderNoticeArrgmtText,

      _Language,
      _LoanLenderNoticeArrgmt
}
```
