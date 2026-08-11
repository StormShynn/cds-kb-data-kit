---
name: I_LOANSALESREGION
description: "Loan Sales Region"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSALESREGION')/$value
semantic_en: "Loan Sales Region"
semantic_vi: "Loan Sales Region — CDS view giao diện dựa trên td18."
keywords:
  - "loan"
  - "sales"
  - "region"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANSALESREGION

**Loan Sales Region**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSALESREGION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanSalesRegion` | ✓ | |  | `sregion` | `CHAR(4)` | Sales Region |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanSalesRegionText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSALESREGION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSALESREGION')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILSALESREG',
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
    representativeKey: 'LoanSalesRegion'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Sales Region'
define view I_LoanSalesRegion
  as select from td18
  association [0..*] to I_LoanSalesRegionText as _Text on $projection.LoanSalesRegion = _Text.LoanSalesRegion
{
      @ObjectModel.text.association: '_Text'
  key sregion as LoanSalesRegion,

      _Text
}
```
