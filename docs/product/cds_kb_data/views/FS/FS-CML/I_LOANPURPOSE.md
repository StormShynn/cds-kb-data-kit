---
name: I_LOANPURPOSE
description: "Loan Purpose"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPURPOSE')/$value
semantic_en: "Loan Purpose"
semantic_vi: "Loan Purpose — CDS view giao diện dựa trên td07."
keywords:
  - "loan"
  - "purpose"
  - "product"
  - "type"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANPURPOSE

**Loan Purpose**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPURPOSE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanProductType` | ✓ | |  | `gsart` | `CHAR(3)` | Product Type |
| `LoanPurpose` | ✓ | |  | `svzweck` | `CHAR(2)` | Purpose of Loan |
| `_FinancialInstrProductType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinancialInstrProductType` | `I_FinancialinstrProductType` | [0..1] |
| `_Text` | `I_LoanPurposeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPURPOSE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANPURPOSE')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILPURPOSE',
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
    representativeKey: 'LoanPurpose'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Purpose'
define view I_LoanPurpose
  as select from td07
  association [0..1] to I_FinancialinstrProductType as _FinancialInstrProductType on  $projection.LoanProductType = _FinancialInstrProductType.FinancialInstrumentProductType
  association [0..*] to I_LoanPurposeText           as _Text                      on  $projection.LoanProductType = _Text.LoanProductType
                                                                                  and $projection.LoanPurpose     = _Text.LoanPurpose
{
      @ObjectModel.foreignKey.association: '_FinancialInstrProductType'
  key gsart   as LoanProductType,
      @ObjectModel.text.association: '_Text'
  key svzweck as LoanPurpose,

      _FinancialInstrProductType,

      _Text
}
```
