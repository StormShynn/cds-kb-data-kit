---
name: I_LOANMANUALDUNLEVELTEXT
description: "Loan Manual Dunning Level - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANMANUALDUNLEVELTEXT')/$value
semantic_en: "Loan Manual Dunning Level - Text"
semantic_vi: "Loan Manual Dunning Level - Text — CDS view giao diện dựa trên tdmahns_mant."
keywords:
  - "loan"
  - "manual"
  - "dunning"
  - "level"
  - "text"
  - "language"
  - "short"
tags:
  - FS
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANMANUALDUNLEVELTEXT

**Loan Manual Dunning Level - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANMANUALDUNLEVELTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanManualDunLevel` | ✓ | |  | `smahnm` | `CHAR(1)` | Loan Manual Dunning Level |
| `LoanManualDunLevelShortText` |  | |  | `xlbez` | `CHAR(50)` | Name |
| `LoanManualDunLevelText` |  | |  | `xkbez` | `CHAR(15)` | Short Name |
| `_Language` | | ✓ | | | | |
| `_LoanManualDunLevel` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanManualDunLevel` | `I_LoanManualDunLevel` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANMANUALDUNLEVELTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANMANUALDUNLEVELTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILMANDUNLVLTXT',
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
    representativeKey: 'LoanManualDunLevel'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Manual Dunning Level - Text'
define view I_LoanManualDunLevelText
  as select from tdmahns_mant
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
  association [0..1] to I_LoanManualDunLevel as _LoanManualDunLevel on $projection.LoanManualDunLevel = _LoanManualDunLevel.LoanManualDunLevel
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras  as Language,
      @ObjectModel.foreignKey.association: '_LoanManualDunLevel'
  key smahnm as LoanManualDunLevel,

      @Semantics.text: true
      xlbez  as LoanManualDunLevelShortText,

      @Semantics.text: true
      xkbez  as LoanManualDunLevelText,

      _Language,
      _LoanManualDunLevel
}
```
