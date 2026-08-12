---
name: I_LOANCONTRNTCADJMTTYPETEXT
description: "Loan Contract Notice Adjustment Type - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRNTCADJMTTYPETEXT')/$value
semantic_en: "Loan Contract Notice Adjustment Type - Text"
semantic_vi: "Loan Contract Notice Adjustment Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "loan"
  - "contract"
  - "notice"
  - "adjustment"
  - "type"
  - "text"
  - "language"
  - "contr"
  - "adjmt"
tags:
  - FS
  - component:FS-CML
  - contract
  - FS-CML
  - interface-view
---
# I_LOANCONTRNTCADJMTTYPETEXT

**Loan Contract Notice Adjustment Type - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRNTCADJMTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `LoanContrNtcAdjmtType` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as vvskueartb)` | `NUMC(2)` | Adjustment Indicator for Notice Fields |
| `LoanContrNtcAdjmtTypeText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_LoanContrNtcAdjmtType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanContrNtcAdjmtType` | `I_LoanContrNtcAdjmtType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRNTCADJMTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRNTCADJMTTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCNTCADJTYPTXT',
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
    representativeKey: 'LoanContrNtcAdjmtType'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Contract Notice Adjustment Type - Text'
define view I_LoanContrNtcAdjmtTypeText
  as select from dd07t
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language
  association [0..1] to I_LoanContrNtcAdjmtType as _LoanContrNtcAdjmtType on $projection.LoanContrNtcAdjmtType = _LoanContrNtcAdjmtType.LoanContrNtcAdjmtType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                      as Language,
      @ObjectModel.foreignKey.association: '_LoanContrNtcAdjmtType'
  key cast(substring(domvalue_l, 1, 2) as vvskueartb) as LoanContrNtcAdjmtType,

      @Semantics.text: true
      ddtext                                          as LoanContrNtcAdjmtTypeText,

      _Language,
      _LoanContrNtcAdjmtType
}
where
      domname  = 'VVSKUEARTB'
  and as4local = 'A'
```
