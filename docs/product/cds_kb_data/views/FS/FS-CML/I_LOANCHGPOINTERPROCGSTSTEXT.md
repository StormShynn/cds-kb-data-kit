---
name: I_LOANCHGPOINTERPROCGSTSTEXT
description: "Loan Change Pointer Processing Status - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERPROCGSTSTEXT')/$value
semantic_en: "Loan Change Pointer Processing Status - Text"
semantic_vi: "Loan Change Pointer Processing Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "loan"
  - "change"
  - "pointer"
  - "processing"
  - "status"
  - "text"
  - "language"
  - "procg"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANCHGPOINTERPROCGSTSTEXT

**Loan Change Pointer Processing Status - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERPROCGSTSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `LoanChgPointerProcgSts` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as tb_ale_process preserving type)` | `CHAR(1)` | Status of Change Pointer Regarding ALE Processing |
| `LoanChgPointerProcgStsText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_LoanChgPointerProcgSts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanChgPointerProcgSts` | `I_LoanChgPointerProcgSts` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERPROCGSTSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERPROCGSTSTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCPPROCSTSTXT',
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
    representativeKey: 'LoanChgPointerProcgSts'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Change Pointer Processing Status - Text'
define view I_LoanChgPointerProcgStsText
  as select from dd07t
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
  association [0..1] to I_LoanChgPointerProcgSts as _LoanChgPointerProcgSts on $projection.LoanChgPointerProcgSts = _LoanChgPointerProcgSts.LoanChgPointerProcgSts
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                          as Language,
      @ObjectModel.foreignKey.association: '_LoanChgPointerProcgSts'
  key cast(substring(domvalue_l, 1, 1) as tb_ale_process preserving type) as LoanChgPointerProcgSts,

      @Semantics.text: true
      ddtext                                                              as LoanChgPointerProcgStsText,

      _Language,
      _LoanChgPointerProcgSts
}
where
      domname  = 'T_ALE_PROCESS'
  and as4local = 'A'
```
