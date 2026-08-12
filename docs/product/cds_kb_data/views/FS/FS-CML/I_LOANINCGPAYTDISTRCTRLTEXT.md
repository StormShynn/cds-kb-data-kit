---
name: I_LOANINCGPAYTDISTRCTRLTEXT
description: "Loan Incoming Payment Distribution Control - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANINCGPAYTDISTRCTRLTEXT')/$value
semantic_en: "Loan Incoming Payment Distribution Control - Text"
semantic_vi: "Loan Incoming Payment Distribution Control - Text — CDS view giao diện dựa trên tvz0a."
keywords:
  - "loan"
  - "incoming"
  - "payment"
  - "distribution"
  - "control"
  - "text"
  - "language"
  - "incg"
  - "payt"
  - "distr"
  - "ctrl"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
  - payment
---
# I_LOANINCGPAYTDISTRCTRLTEXT

**Loan Incoming Payment Distribution Control - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANINCGPAYTDISTRCTRLTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanIncgPaytDistrCtrl` | ✓ | |  | `szkey` | `NUMC(2)` | Indicator for Control of Incoming Payment Distribution |
| `LoanIncgPaytDistrCtrlText` |  | |  | `xtext` | `CHAR(15)` | Text (15 characters) |
| `_Language` | | ✓ | | | | |
| `_LoanIncgPaytDistrCtrl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanIncgPaytDistrCtrl` | `I_LoanIncgPaytDistrCtrl` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANINCGPAYTDISTRCTRLTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANINCGPAYTDISTRCTRLTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILIPDCTRLTXT',
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
    representativeKey: 'LoanIncgPaytDistrCtrl'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Incoming Payment Distribution Control - Text'
define view I_LoanIncgPaytDistrCtrlText
  as select from tvz0a
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
  association [0..1] to I_LoanIncgPaytDistrCtrl as _LoanIncgPaytDistrCtrl on $projection.LoanIncgPaytDistrCtrl = _LoanIncgPaytDistrCtrl.LoanIncgPaytDistrCtrl
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
      @ObjectModel.foreignKey.association: '_LoanIncgPaytDistrCtrl'
  key szkey as LoanIncgPaytDistrCtrl,

      @Semantics.text: true
      xtext as LoanIncgPaytDistrCtrlText,

      _Language,
      _LoanIncgPaytDistrCtrl
}
```
