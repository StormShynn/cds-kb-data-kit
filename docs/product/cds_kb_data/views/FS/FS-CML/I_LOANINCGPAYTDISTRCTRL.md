---
name: I_LOANINCGPAYTDISTRCTRL
description: "Loan Incoming Payment Distribution Control"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANINCGPAYTDISTRCTRL')/$value
semantic_en: "Loan Incoming Payment Distribution Control"
semantic_vi: "Loan Incoming Payment Distribution Control — CDS view giao diện dựa trên tvz01."
keywords:
  - "loan"
  - "incoming"
  - "payment"
  - "distribution"
  - "control"
  - "incg"
  - "payt"
  - "distr"
  - "ctrl"
  - "smmrzn"
  - "level"
  - "over"
  - "prelim"
  - "fltr"
  - "open"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
  - payment
---
# I_LOANINCGPAYTDISTRCTRL

**Loan Incoming Payment Distribution Control**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANINCGPAYTDISTRCTRL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanIncgPaytDistrCtrl` | ✓ | |  | `szkey` | `NUMC(2)` | Indicator for Control of Incoming Payment Distribution |
| `LoanPaymentSmmrznLevel` |  | |  | `szvdeb` | `NUMC(2)` | Payment summarization level |
| `LoanOverPaymentPrelimFltr` |  | |  | `szvfvuz` | `NUMC(2)` | Advance payments / overpayments preliminary filter |
| `LoanOpenItemGroupLevel` |  | |  | `szgrdbop` | `NUMC(2)` | Grouping level open items/incoming payment distribution |
| `LoanOpenItemPrelimFilter` |  | |  | `szvfop` | `NUMC(2)` | Open items/incoming pmnt distribution pre-filter |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanIncgPaytDistrCtrlText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANINCGPAYTDISTRCTRL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANINCGPAYTDISTRCTRL')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILIPDCTRL',
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
    representativeKey: 'LoanIncgPaytDistrCtrl'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Incoming Payment Distribution Control'
define view I_LoanIncgPaytDistrCtrl
  as select from tvz01
  association [0..*] to I_LoanIncgPaytDistrCtrlText as _Text on $projection.LoanIncgPaytDistrCtrl = _Text.LoanIncgPaytDistrCtrl
{
      @ObjectModel.text.association: '_Text'
  key szkey    as LoanIncgPaytDistrCtrl,

      szvdeb   as LoanPaymentSmmrznLevel,
      szvfvuz  as LoanOverPaymentPrelimFltr,
      szgrdbop as LoanOpenItemGroupLevel,
      szvfop   as LoanOpenItemPrelimFilter,

      _Text
}
```
