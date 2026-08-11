---
name: I_LOANGROUPKEY2TEXT
description: "Loan Group Key 2 - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY2TEXT')/$value
semantic_en: "Loan Group Key 2 - Text"
semantic_vi: "Loan Group Key 2 - Text — CDS view giao diện dựa trên tddgb."
keywords:
  - "loan"
  - "group"
  - "key"
  - "text"
  - "language"
  - "key2"
  - "short"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANGROUPKEY2TEXT

**Loan Group Key 2 - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY2TEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanGroupKey2` | ✓ | |  | `sgrp2` | `CHAR(6)` | Group Key 2 (Freely Available) |
| `LoanGroupKey2ShortText` |  | |  | `xlbez` | `CHAR(50)` | Name |
| `LoanGroupKey2Text` |  | |  | `xkbez` | `CHAR(15)` | Short Name |
| `_Language` | | ✓ | | | | |
| `_LoanGroupKey2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanGroupKey2` | `I_LoanGroupKey2` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY2TEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY2TEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILGRPKEY2TXT',
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
    representativeKey: 'LoanGroupKey2'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Group Key 2 - Text'
define view I_LoanGroupKey2Text
  as select from tddgb
  association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language
  association [0..1] to I_LoanGroupKey2 as _LoanGroupKey2 on $projection.LoanGroupKey2 = _LoanGroupKey2.LoanGroupKey2
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
      @ObjectModel.foreignKey.association: '_LoanGroupKey2'
  key sgrp2 as LoanGroupKey2,

      @Semantics.text: true
      xlbez as LoanGroupKey2ShortText,

      @Semantics.text: true
      xkbez as LoanGroupKey2Text,

      _Language,
      _LoanGroupKey2
}
```
