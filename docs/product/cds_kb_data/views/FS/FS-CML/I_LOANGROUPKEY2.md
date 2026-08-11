---
name: I_LOANGROUPKEY2
description: "Loan Group Key 2"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY2')/$value
semantic_en: "Loan Group Key 2"
semantic_vi: "Loan Group Key 2 — CDS view giao diện dựa trên tddg2."
keywords:
  - "loan"
  - "group"
  - "key"
  - "key2"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANGROUPKEY2

**Loan Group Key 2**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanGroupKey2` | ✓ | |  | `sgrp2` | `CHAR(6)` | Group Key 2 (Freely Available) |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanGroupKey2Text` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY2')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILGRPKEY2',
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
    representativeKey: 'LoanGroupKey2'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Group Key 2'
define view I_LoanGroupKey2
  as select from tddg2
  association [0..*] to I_LoanGroupKey2Text as _Text on $projection.LoanGroupKey2 = _Text.LoanGroupKey2
{
      @ObjectModel.text.association: '_Text'
  key sgrp2 as LoanGroupKey2,

      _Text
}
```
