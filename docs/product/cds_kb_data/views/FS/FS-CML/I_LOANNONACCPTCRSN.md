---
name: I_LOANNONACCPTCRSN
description: "Loan Non Acceptance Reason"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNONACCPTCRSN')/$value
semantic_en: "Loan Non Acceptance Reason"
semantic_vi: "Loan Non Acceptance Reason — CDS view giao diện dựa trên tda5."
keywords:
  - "loan"
  - "non"
  - "acceptance"
  - "reason"
  - "company"
  - "code"
  - "product"
  - "type"
  - "accptc"
  - "life"
  - "cycle"
  - "status"
tags:
  - FS
  - bo:salesorder
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANNONACCPTCRSN

**Loan Non Acceptance Reason**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNONACCPTCRSN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `LoanProductType` | ✓ | |  | `gsart` | `CHAR(3)` | Product Type |
| `LoanNonAccptcRsn` | ✓ | |  | `snichtab` | `NUMC(2)` | Reason for Non-Acceptance |
| `LoanLifeCycleStatus` |  | |  | `sstati` | `NUMC(2)` | Status which can be reached as target status |
| `_CompanyCode` | | ✓ | | | | |
| `_FinancialInstrProductType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinancialInstrProductType` | `I_FinancialinstrProductType` | [0..1] |
| `_Text` | `I_LoanNonAccptcRsnText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNONACCPTCRSN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNONACCPTCRSN')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILNONACCRSNA',
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
    representativeKey: 'LoanNonAccptcRsn'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Non Acceptance Reason'
define view I_LoanNonAccptcRsn
  as select from tda5
  association [0..1] to I_CompanyCode               as _CompanyCode               on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialinstrProductType as _FinancialInstrProductType on  $projection.LoanProductType = _FinancialInstrProductType.FinancialInstrumentProductType
  association [0..*] to I_LoanNonAccptcRsnText      as _Text                      on  $projection.CompanyCode      = _Text.CompanyCode
                                                                                  and $projection.LoanProductType  = _Text.LoanProductType
                                                                                  and $projection.LoanNonAccptcRsn = _Text.LoanNonAccptcRsn
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs    as CompanyCode,
      @ObjectModel.foreignKey.association: '_FinancialInstrProductType'
  key gsart    as LoanProductType,
      @ObjectModel.text.association: '_Text'
  key snichtab as LoanNonAccptcRsn,

      sstati   as LoanLifeCycleStatus,

      _CompanyCode,
      _FinancialInstrProductType,
      _Text
}
```
