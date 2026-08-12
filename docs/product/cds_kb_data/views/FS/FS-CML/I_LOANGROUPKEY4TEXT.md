---
name: I_LOANGROUPKEY4TEXT
description: "Loan Group Key 4 - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY4TEXT')/$value
semantic_en: "Loan Group Key 4 - Text"
semantic_vi: "Loan Group Key 4 - Text — CDS view giao diện dựa trên tddgd."
keywords:
  - "loan"
  - "group"
  - "key"
  - "text"
  - "language"
  - "key4"
  - "short"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANGROUPKEY4TEXT

**Loan Group Key 4 - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY4TEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanGroupKey4` | ✓ | |  | `sgrp4` | `CHAR(6)` | Group Key 4 (Freely Available) |
| `LoanGroupKey4ShortText` |  | |  | `xlbez` | `CHAR(50)` | Name |
| `LoanGroupKey4Text` |  | |  | `xkbez` | `CHAR(15)` | Short Name |
| `_Language` | | ✓ | | | | |
| `_LoanGroupKey4` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanGroupKey4` | `I_LoanGroupKey4` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY4TEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY4TEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILGRPKEY4TXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'TRANSACTIONAL'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'LoanGroupKey4'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Group Key 4 - Text'
define view I_LoanGroupKey4Text
  as select from tddgd
  association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language
  association [0..1] to I_LoanGroupKey4 as _LoanGroupKey4 on $projection.LoanGroupKey4 = _LoanGroupKey4.LoanGroupKey4
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
      @ObjectModel.foreignKey.association: '_LoanGroupKey4'
  key sgrp4 as LoanGroupKey4,

      @Semantics.text: true
      xlbez as LoanGroupKey4ShortText,

      @Semantics.text: true
      xkbez as LoanGroupKey4Text,

      _Language,
      _LoanGroupKey4
}
```
