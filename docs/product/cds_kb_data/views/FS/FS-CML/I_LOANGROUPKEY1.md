---
name: I_LOANGROUPKEY1
description: "Loan Group Key 1"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY1')/$value
semantic_en: "Loan Group Key 1"
semantic_vi: "Loan Group Key 1 — CDS view giao diện dựa trên tddg1."
keywords:
  - "loan"
  - "group"
  - "key"
  - "key1"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANGROUPKEY1

**Loan Group Key 1**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanGroupKey1` | ✓ | |  | `sgrp1` | `CHAR(6)` | Group Key 1 (Freely Available) |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanGroupKey1Text` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY1')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY1')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILGRPKEY1',
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
    representativeKey: 'LoanGroupKey1'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Group Key 1'
define view I_LoanGroupKey1
  as select from tddg1
  association [0..*] to I_LoanGroupKey1Text as _Text on $projection.LoanGroupKey1 = _Text.LoanGroupKey1
{
      @ObjectModel.text.association: '_Text'
  key sgrp1 as LoanGroupKey1,

      _Text
}
```
