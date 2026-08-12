---
name: I_LOANTYPEPRODTYPERELSHP
description: "Loan Type Product Type Relationship"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
