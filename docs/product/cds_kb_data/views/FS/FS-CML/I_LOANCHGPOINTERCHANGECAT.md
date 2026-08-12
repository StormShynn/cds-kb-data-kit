---
name: I_LOANCHGPOINTERCHANGECAT
description: "Loan Change Pointer Change Category"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERCHANGECAT')/$value
semantic_en: "Loan Change Pointer Change Category"
semantic_vi: "Loan Change Pointer Change Category — CDS view giao diện dựa trên tdchgcatg."
keywords:
  - "loan"
  - "change"
  - "pointer"
  - "category"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANCHGPOINTERCHANGECAT

**Loan Change Pointer Change Category**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERCHANGECAT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanChgPointerChangeCat` | ✓ | |  | `chgcatg` | `CHAR(4)` | Change Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanChgPointerChangeCatText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERCHANGECAT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERCHANGECAT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCPCHGCAT',
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
    representativeKey: 'LoanChgPointerChangeCat'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Change Pointer Change Category'
define view I_LoanChgPointerChangeCat
  as select from tdchgcatg
  association [0..*] to I_LoanChgPointerChangeCatText as _Text on $projection.LoanChgPointerChangeCat = _Text.LoanChgPointerChangeCat
{
      @ObjectModel.text.association: '_Text'
  key chgcatg as LoanChgPointerChangeCat,

      _Text
}
```
