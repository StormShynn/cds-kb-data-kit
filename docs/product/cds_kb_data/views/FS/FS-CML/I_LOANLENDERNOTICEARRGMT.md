---
name: I_LOANLENDERNOTICEARRGMT
description: "Loan Lender Notice Arrangement"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANLENDERNOTICEARRGMT')/$value
semantic_en: "Loan Lender Notice Arrangement"
semantic_vi: "Loan Lender Notice Arrangement — CDS view giao diện dựa trên td28."
keywords:
  - "loan"
  - "lender"
  - "notice"
  - "arrangement"
  - "arrgmt"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANLENDERNOTICEARRGMT

**Loan Lender Notice Arrangement**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANLENDERNOTICEARRGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanLenderNoticeArrgmt` | ✓ | |  | `skuegl` | `NUMC(3)` | Notice Arrangement Lender |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanLenderNoticeArrgmtText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANLENDERNOTICEARRGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANLENDERNOTICEARRGMT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILLNDNOTARR',
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
    representativeKey: 'LoanLenderNoticeArrgmt'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Lender Notice Arrangement'
define view I_LoanLenderNoticeArrgmt
  as select from td28
  association [0..*] to I_LoanLenderNoticeArrgmtText as _Text on $projection.LoanLenderNoticeArrgmt = _Text.LoanLenderNoticeArrgmt
{
      @ObjectModel.text.association: '_Text'
  key skuegl as LoanLenderNoticeArrgmt,

      _Text
}
```
