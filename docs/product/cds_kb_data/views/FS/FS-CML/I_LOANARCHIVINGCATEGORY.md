---
name: I_LOANARCHIVINGCATEGORY
description: "Loan Archiving Category"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANARCHIVINGCATEGORY')/$value
semantic_en: "Loan Archiving Category"
semantic_vi: "Loan Archiving Category — CDS view giao diện dựa trên dd07l."
keywords:
  - "loan"
  - "archiving"
  - "category"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANARCHIVINGCATEGORY

**Loan Archiving Category**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANARCHIVINGCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanArchivingCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as sarchiv preserving type)` | `CHAR(1)` | Archiving Category Indicator |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanArchivingCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANARCHIVINGCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANARCHIVINGCATEGORY')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILARCAT',
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
    representativeKey: 'LoanArchivingCategory'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Archiving Category'
define view I_LoanArchivingCategory
  as select from dd07l
  association [0..*] to I_LoanArchivingCategoryText as _Text on $projection.LoanArchivingCategory = _Text.LoanArchivingCategory
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as sarchiv preserving type) as LoanArchivingCategory,

      _Text
}
where
      dd07l.domname  = 'VDLOAN_ARCH_CAT'
  and dd07l.as4local = 'A'
```
