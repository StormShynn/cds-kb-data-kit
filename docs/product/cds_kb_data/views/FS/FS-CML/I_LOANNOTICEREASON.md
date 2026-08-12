---
name: I_LOANNOTICEREASON
description: "Loan Notice Reason"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNOTICEREASON')/$value
semantic_en: "Loan Notice Reason"
semantic_vi: "Loan Notice Reason — CDS view giao diện dựa trên td04."
keywords:
  - "loan"
  - "notice"
  - "reason"
  - "procg"
  - "allwd"
  - "creditor"
tags:
  - FS
  - bo:salesorder
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANNOTICEREASON

**Loan Notice Reason**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNOTICEREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanNoticeReason` | ✓ | |  | `skuend` | `NUMC(3)` | Reason for Notice |
| `LoanNtcProcgIsAllwd` |  | |  | `sbearb` | `CHAR(1)` | ID Further Editing in Internal Functions |
| `LoanNoticeIsCreditor` |  | |  | `sgl` | `CHAR(1)` | Creditor Notice Type Indicator |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanNoticeReasonText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNOTICEREASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANNOTICEREASON')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILNOTCRSN',
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
    representativeKey: 'LoanNoticeReason'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Notice Reason'
define view I_LoanNoticeReason
  as select from td04
  association [0..*] to I_LoanNoticeReasonText as _Text on $projection.LoanNoticeReason = _Text.LoanNoticeReason
{
      @ObjectModel.text.association: '_Text'
  key skuend as LoanNoticeReason,

      @Semantics.booleanIndicator:true
      sbearb as LoanNtcProcgIsAllwd,
      sgl    as LoanNoticeIsCreditor,

      _Text
}
```
