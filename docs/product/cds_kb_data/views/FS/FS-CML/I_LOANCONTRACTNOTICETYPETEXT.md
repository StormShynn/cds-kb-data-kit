---
name: I_LOANCONTRACTNOTICETYPETEXT
description: "Loan Contract Notice Type - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTNOTICETYPETEXT')/$value
semantic_en: "Loan Contract Notice Type - Text"
semantic_vi: "Loan Contract Notice Type - Text — CDS view giao diện dựa trên td27t."
keywords:
  - "loan"
  - "contract"
  - "notice"
  - "type"
  - "text"
  - "language"
  - "contr"
tags:
  - FS
  - component:FS-CML
  - contract
  - FS-CML
  - interface-view
---
# I_LOANCONTRACTNOTICETYPETEXT

**Loan Contract Notice Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTNOTICETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanContrNtcType` | ✓ | |  | `skueart` | `NUMC(3)` | Notice Type for the Loan |
| `LoanContractNoticeTypeText` |  | |  | `xltext` | `CHAR(30)` | Text (30 Characters) |
| `_Language` | | ✓ | | | | |
| `_LoanContractNoticeType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanContractNoticeType` | `I_LoanContractNoticeType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTNOTICETYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTNOTICETYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCNTCTYPTXT',
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
    representativeKey: 'LoanContrNtcType'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Contract Notice Type - Text'
define view I_LoanContractNoticeTypeText
  as select from td27t
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
  association [0..1] to I_LoanContractNoticeType as _LoanContractNoticeType on $projection.LoanContrNtcType = _LoanContractNoticeType.LoanContrNtcType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras   as Language,
      @ObjectModel.foreignKey.association: '_LoanContractNoticeType'
  key skueart as LoanContrNtcType,

      @Semantics.text: true
      xltext  as LoanContractNoticeTypeText,

      _Language,
      _LoanContractNoticeType
}
```
