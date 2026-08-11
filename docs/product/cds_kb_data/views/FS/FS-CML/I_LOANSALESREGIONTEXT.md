---
name: I_LOANSALESREGIONTEXT
description: "Loan Sales Region - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSALESREGIONTEXT')/$value
semantic_en: "Loan Sales Region - Text"
semantic_vi: "Loan Sales Region - Text — CDS view giao diện dựa trên td18t."
keywords:
  - "loan"
  - "sales"
  - "region"
  - "text"
  - "language"
  - "short"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANSALESREGIONTEXT

**Loan Sales Region - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSALESREGIONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanSalesRegion` | ✓ | |  | `sregion` | `CHAR(4)` | Sales Region |
| `LoanSalesRegionShortText` |  | |  | `kbez` | `CHAR(15)` | Short Name |
| `LoanSalesRegionText` |  | |  | `lbez` | `CHAR(50)` | Name |
| `_Language` | | ✓ | | | | |
| `_LoanSalesRegion` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanSalesRegion` | `I_LoanSalesRegion` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSALESREGIONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANSALESREGIONTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILSALESREGTXT',
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
    representativeKey: 'LoanSalesRegion'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Sales Region - Text'
define view I_LoanSalesRegionText
  as select from td18t
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
  association [0..1] to I_LoanSalesRegion as _LoanSalesRegion on $projection.LoanSalesRegion = _LoanSalesRegion.LoanSalesRegion
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras   as Language,
      @ObjectModel.foreignKey.association: '_LoanSalesRegion'
  key sregion as LoanSalesRegion,

      @Semantics.text: true
      kbez    as LoanSalesRegionShortText,

      //mbez is never filled

      @Semantics.text: true
      lbez    as LoanSalesRegionText,

      _Language,
      _LoanSalesRegion
}
```
