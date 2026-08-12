---
name: I_LOANNONACCPTCRSNTEXT
description: "Loan Non Acceptance Reason - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNONACCPTCRSNTEXT')/$value
semantic_en: "Loan Non Acceptance Reason - Text"
semantic_vi: "Loan Non Acceptance Reason - Text — CDS view giao diện dựa trên tda5t."
keywords:
  - "loan"
  - "non"
  - "acceptance"
  - "reason"
  - "text"
  - "language"
  - "company"
  - "code"
  - "product"
  - "type"
  - "accptc"
tags:
  - FS
  - bo:salesorder
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANNONACCPTCRSNTEXT

**Loan Non Acceptance Reason - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNONACCPTCRSNTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `LoanProductType` | ✓ | |  | `gsart` | `CHAR(3)` | Product Type |
| `LoanNonAccptcRsn` | ✓ | |  | `snichtab` | `NUMC(2)` | Reason for Non-Acceptance |
| `LoanNonAccptcRsnText` |  | |  | `xtext` | `CHAR(40)` | Reason Name |
| `_Language` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FinancialInstrProductType` | | ✓ | | | | |
| `_LoanNonAccptcRsn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinancialInstrProductType` | `I_FinancialinstrProductType` | [0..1] |
| `_LoanNonAccptcRsn` | `I_LoanNonAccptcRsn` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNONACCPTCRSNTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNONACCPTCRSNTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILNONACCRSNTXTA',
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
    representativeKey: 'LoanNonAccptcRsn'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Non Acceptance Reason - Text'
define view I_LoanNonAccptcRsnText
  as select from tda5t
  association [0..1] to I_Language                  as _Language                  on  $projection.Language = _Language.Language
  association [0..1] to I_CompanyCode               as _CompanyCode               on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialinstrProductType as _FinancialInstrProductType on  $projection.LoanProductType = _FinancialInstrProductType.FinancialInstrumentProductType
  association [0..1] to I_LoanNonAccptcRsn          as _LoanNonAccptcRsn          on  $projection.CompanyCode      = _LoanNonAccptcRsn.CompanyCode
                                                                                  and $projection.LoanProductType  = _LoanNonAccptcRsn.LoanProductType
                                                                                  and $projection.LoanNonAccptcRsn = _LoanNonAccptcRsn.LoanNonAccptcRsn
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras    as Language,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs    as CompanyCode,
      @ObjectModel.foreignKey.association: '_FinancialInstrProductType'
  key gsart    as LoanProductType,
      @ObjectModel.foreignKey.association: '_LoanNonAccptcRsn'
  key snichtab as LoanNonAccptcRsn,

      @Semantics.text: true
      xtext    as LoanNonAccptcRsnText,

      _Language,
      _CompanyCode,
      _FinancialInstrProductType,
      _LoanNonAccptcRsn
}
```
