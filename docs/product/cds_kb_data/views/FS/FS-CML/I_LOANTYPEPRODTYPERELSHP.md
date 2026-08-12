---
name: I_LOANTYPEPRODTYPERELSHP
description: "Loan Type Product Type Relationship"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANTYPEPRODTYPERELSHP')/$value
semantic_en: "Loan Type Product Type Relationship"
semantic_vi: "Loan Type Product Type Relationship — CDS view giao diện dựa trên td03."
keywords:
  - "loan"
  - "type"
  - "product"
  - "relationship"
tags:
  - FS
  - bo:material
  - component:FS-CML
  - FS-CML
  - interface-view
  - product
---
# I_LOANTYPEPRODTYPERELSHP

**Loan Type Product Type Relationship**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANTYPEPRODTYPERELSHP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanProductType` | ✓ | |  | `gsart` | `CHAR(3)` | Product Type |
| `LoanType` | ✓ | |  | `stitel` | `NUMC(3)` | Loan Type Indicator |
| `_FinancialInstrProductType` | | ✓ | | | | |
| `_LoanType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinancialInstrProductType` | `I_FinancialinstrProductType` | [0..1] |
| `_LoanType` | `I_LoanType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANTYPEPRODTYPERELSHP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANTYPEPRODTYPERELSHP')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILTYPPRDTYPREL',
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
    supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ]
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Type Product Type Relationship'
define view I_LoanTypeProdTypeRelshp
  as select from td03
  association [0..1] to I_FinancialinstrProductType as _FinancialInstrProductType on $projection.LoanProductType = _FinancialInstrProductType.FinancialInstrumentProductType
  association [0..1] to I_LoanType                  as _LoanType                  on $projection.LoanType = _LoanType.LoanType
{
      @ObjectModel.foreignKey.association: '_FinancialInstrProductType'
  key gsart  as LoanProductType,
      @ObjectModel.foreignKey.association: '_LoanType'
  key stitel as LoanType,

      _FinancialInstrProductType,
      _LoanType
}
where
  $projection.loanproducttype <> ''
```
