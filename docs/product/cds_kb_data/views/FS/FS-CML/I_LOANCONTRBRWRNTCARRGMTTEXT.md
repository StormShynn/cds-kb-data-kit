---
name: I_LOANCONTRBRWRNTCARRGMTTEXT
description: "Loan Contract Borrower Notice Arrangement - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRBRWRNTCARRGMTTEXT')/$value
semantic_en: "Loan Contract Borrower Notice Arrangement - Text"
semantic_vi: "Loan Contract Borrower Notice Arrangement - Text — CDS view giao diện dựa trên td29t."
keywords:
  - "loan"
  - "contract"
  - "borrower"
  - "notice"
  - "arrangement"
  - "text"
  - "language"
  - "contr"
  - "brwr"
  - "arrgmt"
tags:
  - FS
  - component:FS-CML
  - contract
  - FS-CML
  - interface-view
---
# I_LOANCONTRBRWRNTCARRGMTTEXT

**Loan Contract Borrower Notice Arrangement - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRBRWRNTCARRGMTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanContrBrwrNtcArrgmt` | ✓ | |  | `skuedn` | `NUMC(3)` | Notice Arrangement Borrower |
| `LoanContrBrwrNtcArrgmtText` |  | |  | `xltext` | `CHAR(30)` | Text (30 Characters) |
| `_Language` | | ✓ | | | | |
| `_LoanContrBrwrNtcArrgmt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanContrBrwrNtcArrgmt` | `I_LoanContrBrwrNtcArrgmt` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRBRWRNTCARRGMTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRBRWRNTCARRGMTTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCBRWNTCARRTXT',
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
    representativeKey: 'LoanContrBrwrNtcArrgmt'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Contract Borrower Notice Arrangement - Text'
define view I_LoanContrBrwrNtcArrgmtText
  as select from td29t
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
  association [0..1] to I_LoanContrBrwrNtcArrgmt as _LoanContrBrwrNtcArrgmt on $projection.LoanContrBrwrNtcArrgmt = _LoanContrBrwrNtcArrgmt.LoanContrBrwrNtcArrgmt
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras  as Language,
      @ObjectModel.foreignKey.association: '_LoanContrBrwrNtcArrgmt'
  key skuedn as LoanContrBrwrNtcArrgmt,

      @Semantics.text: true
      xltext as LoanContrBrwrNtcArrgmtText,

      _Language,
      _LoanContrBrwrNtcArrgmt
}
```
