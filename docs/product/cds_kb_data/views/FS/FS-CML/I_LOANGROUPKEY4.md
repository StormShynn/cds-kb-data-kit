---
name: I_LOANGROUPKEY4
description: "Loan Group Key 4"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY4')/$value
semantic_en: "Loan Group Key 4"
semantic_vi: "Loan Group Key 4 — CDS view giao diện dựa trên tddg4."
keywords:
  - "loan"
  - "group"
  - "key"
  - "key4"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANGROUPKEY4

**Loan Group Key 4**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY4')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanGroupKey4` | ✓ | |  | `sgrp4` | `CHAR(6)` | Group Key 4 (Freely Available) |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanGroupKey4Text` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY4')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY4')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILGRPKEY4',
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
    representativeKey: 'LoanGroupKey4'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Group Key 4'
define view I_LoanGroupKey4
  as select from tddg4
  association [0..*] to I_LoanGroupKey4Text as _Text on $projection.LoanGroupKey4 = _Text.LoanGroupKey4
{
      @ObjectModel.text.association: '_Text'
  key sgrp4 as LoanGroupKey4,

      _Text
}
```
