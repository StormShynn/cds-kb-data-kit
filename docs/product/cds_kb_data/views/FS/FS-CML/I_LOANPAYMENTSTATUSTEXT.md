---
name: I_LOANPAYMENTSTATUSTEXT
description: "Loan Payment Status - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPAYMENTSTATUSTEXT')/$value
semantic_en: "Loan Payment Status - Text"
semantic_vi: "Loan Payment Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "loan"
  - "payment"
  - "status"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
  - payment
---
# I_LOANPAYMENTSTATUSTEXT

**Loan Payment Status - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPAYMENTSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `LoanPaymentStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as tb_paym_status preserving type)` | `CHAR(1)` | Payment Status |
| `LoanPaymentStatusText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_LoanPaymentStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanPaymentStatus` | `I_LoanPaymentStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPAYMENTSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPAYMENTSTATUSTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILPAYSTATTXT',
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
    representativeKey: 'LoanPaymentStatus'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Payment Status - Text'
define view I_LoanPaymentStatusText
  as select from dd07t
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
  association [0..1] to I_LoanPaymentStatus as _LoanPaymentStatus on $projection.LoanPaymentStatus = _LoanPaymentStatus.LoanPaymentStatus
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                          as Language,
      @ObjectModel.foreignKey.association: '_LoanPaymentStatus'
  key cast(substring(domvalue_l, 1, 1) as tb_paym_status preserving type) as LoanPaymentStatus,

      @Semantics.text: true
      ddtext                                                              as LoanPaymentStatusText,

      _Language,
      _LoanPaymentStatus
}
where
      domname  = 'T_PAYM_STATUS'
  and as4local = 'A'
```
