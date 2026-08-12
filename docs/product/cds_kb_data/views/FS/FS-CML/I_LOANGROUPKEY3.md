---
name: I_LOANGROUPKEY3
description: "Loan Group Key 3"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY3')/$value
semantic_en: "Loan Group Key 3"
semantic_vi: "Loan Group Key 3 — CDS view giao diện dựa trên tddg3."
keywords:
  - "loan"
  - "group"
  - "key"
  - "key3"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANGROUPKEY3

**Loan Group Key 3**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY3')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanGroupKey3` | ✓ | |  | `sgrp3` | `CHAR(6)` | Group Key 3 (Freely Available) |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanGroupKey3Text` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY3')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY3')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILGRPKEY3',
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
    representativeKey: 'LoanGroupKey3'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Group Key 3'
define view I_LoanGroupKey3
  as select from tddg3
  association [0..*] to I_LoanGroupKey3Text as _Text on $projection.LoanGroupKey3 = _Text.LoanGroupKey3
{
      @ObjectModel.text.association: '_Text'
  key sgrp3 as LoanGroupKey3,

      _Text
}
```
