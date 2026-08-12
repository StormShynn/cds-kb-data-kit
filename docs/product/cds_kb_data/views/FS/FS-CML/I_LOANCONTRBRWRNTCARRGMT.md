---
name: I_LOANCONTRBRWRNTCARRGMT
description: "Loan Contract Borrower Notice Arrangement"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRBRWRNTCARRGMT')/$value
semantic_en: "Loan Contract Borrower Notice Arrangement"
semantic_vi: "Loan Contract Borrower Notice Arrangement — CDS view giao diện dựa trên td29."
keywords:
  - "loan"
  - "contract"
  - "borrower"
  - "notice"
  - "arrangement"
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
# I_LOANCONTRBRWRNTCARRGMT

**Loan Contract Borrower Notice Arrangement**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRBRWRNTCARRGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanContrBrwrNtcArrgmt` | ✓ | |  | `skuedn` | `NUMC(3)` | Notice Arrangement Borrower |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanContrBrwrNtcArrgmtText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRBRWRNTCARRGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRBRWRNTCARRGMT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCBRWNTCARR',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'LoanContrBrwrNtcArrgmt'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Contract Borrower Notice Arrangement'
define view I_LoanContrBrwrNtcArrgmt
  as select from td29
  association [0..*] to I_LoanContrBrwrNtcArrgmtText as _Text on $projection.LoanContrBrwrNtcArrgmt = _Text.LoanContrBrwrNtcArrgmt
{
      @ObjectModel.text.association: '_Text'
  key skuedn as LoanContrBrwrNtcArrgmt,

      _Text
}
```
