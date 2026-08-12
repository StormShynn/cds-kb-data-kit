---
name: I_LOANCONTRACTNOTICETYPE
description: "Loan Contract Notice Type"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTNOTICETYPE')/$value
semantic_en: "Loan Contract Notice Type"
semantic_vi: "Loan Contract Notice Type — CDS view giao diện dựa trên td27."
keywords:
  - "loan"
  - "contract"
  - "notice"
  - "type"
  - "contr"
  - "adjmt"
tags:
  - FS
  - component:FS-CML
  - contract
  - FS-CML
  - interface-view
---
# I_LOANCONTRACTNOTICETYPE

**Loan Contract Notice Type**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTNOTICETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanContrNtcType` | ✓ | |  | `skueart` | `NUMC(3)` | Notice Type for the Loan |
| `LoanContrNtcAdjmtType` |  | |  | `skueartb` | `NUMC(2)` | Adjustment Indicator for Notice Fields |
| `_Text` | | ✓ | | | | |
| `_LoanContrNtcAdjmtType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanContractNoticeTypeText` | [0..*] |
| `_LoanContrNtcAdjmtType` | `I_LoanContrNtcAdjmtType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTNOTICETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCONTRACTNOTICETYPE')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCNTCTYP',
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
    representativeKey: 'LoanContrNtcType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Contract Notice Type'
define view I_LoanContractNoticeType
  as select from td27
  association [0..*] to I_LoanContractNoticeTypeText as _Text                  on $projection.LoanContrNtcType = _Text.LoanContrNtcType
  association [0..1] to I_LoanContrNtcAdjmtType      as _LoanContrNtcAdjmtType on $projection.LoanContrNtcAdjmtType = _LoanContrNtcAdjmtType.LoanContrNtcAdjmtType
{
      @ObjectModel.text.association: '_Text'
  key skueart  as LoanContrNtcType,

      @ObjectModel.foreignKey.association: '_LoanContrNtcAdjmtType'
      skueartb as LoanContrNtcAdjmtType,

      _Text,
      _LoanContrNtcAdjmtType
}
```
