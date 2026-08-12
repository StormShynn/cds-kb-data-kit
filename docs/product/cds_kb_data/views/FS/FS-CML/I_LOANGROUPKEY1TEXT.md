---
name: I_LOANGROUPKEY1TEXT
description: "Loan Group Key 1 - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY1TEXT')/$value
semantic_en: "Loan Group Key 1 - Text"
semantic_vi: "Loan Group Key 1 - Text — CDS view giao diện dựa trên tddga."
keywords:
  - "loan"
  - "group"
  - "key"
  - "text"
  - "language"
  - "key1"
  - "short"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANGROUPKEY1TEXT

**Loan Group Key 1 - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY1TEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanGroupKey1` | ✓ | |  | `sgrp1` | `CHAR(6)` | Group Key 1 (Freely Available) |
| `LoanGroupKey1ShortText` |  | |  | `xlbez` | `CHAR(50)` | Name |
| `LoanGroupKey1Text` |  | |  | `xkbez` | `CHAR(15)` | Short Name |
| `_Language` | | ✓ | | | | |
| `_LoanGroupKey1` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanGroupKey1` | `I_LoanGroupKey1` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY1TEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANGROUPKEY1TEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILGRPKEY1TXT',
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
    representativeKey: 'LoanGroupKey1'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Group Key 1 - Text'
define view I_LoanGroupKey1Text
  as select from tddga
  association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language
  association [0..1] to I_LoanGroupKey1 as _LoanGroupKey1 on $projection.LoanGroupKey1 = _LoanGroupKey1.LoanGroupKey1
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
      @ObjectModel.foreignKey.association: '_LoanGroupKey1'
  key sgrp1 as LoanGroupKey1,

      @Semantics.text: true
      xlbez as LoanGroupKey1ShortText,

      @Semantics.text: true
      xkbez as LoanGroupKey1Text,

      _Language,
      _LoanGroupKey1
}
```
