---
name: I_LOANGROUPKEY3TEXT
description: "Loan Group Key 3 - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY3TEXT')/$value
semantic_en: "Loan Group Key 3 - Text"
semantic_vi: "Loan Group Key 3 - Text — CDS view giao diện dựa trên tddgc."
keywords:
  - "loan"
  - "group"
  - "key"
  - "text"
  - "language"
  - "key3"
  - "short"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANGROUPKEY3TEXT

**Loan Group Key 3 - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY3TEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanGroupKey3` | ✓ | |  | `sgrp3` | `CHAR(6)` | Group Key 3 (Freely Available) |
| `LoanGroupKey3ShortText` |  | |  | `xlbez` | `CHAR(50)` | Name |
| `LoanGroupKey3Text` |  | |  | `xkbez` | `CHAR(15)` | Short Name |
| `_Language` | | ✓ | | | | |
| `_LoanGroupKey3` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanGroupKey3` | `I_LoanGroupKey3` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY3TEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY3TEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILGRPKEY3TXT',
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
    representativeKey: 'LoanGroupKey3'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Group Key 3 - Text'
define view I_LoanGroupKey3Text
  as select from tddgc
  association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language
  association [0..1] to I_LoanGroupKey3 as _LoanGroupKey3 on $projection.LoanGroupKey3 = _LoanGroupKey3.LoanGroupKey3
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
      @ObjectModel.foreignKey.association: '_LoanGroupKey3'
  key sgrp3 as LoanGroupKey3,

      @Semantics.text: true
      xlbez as LoanGroupKey3ShortText,

      @Semantics.text: true
      xkbez as LoanGroupKey3Text,

      _Language,
      _LoanGroupKey3
}
```
