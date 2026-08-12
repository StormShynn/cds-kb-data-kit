---
name: I_LOANTERM
description: "Loan Term"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANTERM')/$value
semantic_en: "Loan Term"
semantic_vi: "Loan Term — CDS view giao diện dựa trên td09."
keywords:
  - "loan"
  - "term"
  - "number"
  - "months"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANTERM

**Loan Term**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANTERM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanTerm` | ✓ | |  | `sfrist` | `NUMC(2)` | Loan Term |
| `LoanMinNumberOfMonths` |  | |  | `min_term` | `NUMC(3)` | Minimum Term in Months |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanTermText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANTERM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANTERM')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILTERM',
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
    representativeKey: 'LoanTerm'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Term'
define view I_LoanTerm
  as select from td09
  association [0..*] to I_LoanTermText as _Text on $projection.LoanTerm = _Text.LoanTerm
{
      @ObjectModel.text.association: '_Text'
  key sfrist   as LoanTerm,

      min_term as LoanMinNumberOfMonths,

      _Text
}
```
