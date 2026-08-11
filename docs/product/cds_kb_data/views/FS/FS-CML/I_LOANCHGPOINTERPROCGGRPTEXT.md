---
name: I_LOANCHGPOINTERPROCGGRPTEXT
description: "Loan Change Pointer Processing Group - Text"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERPROCGGRPTEXT')/$value
semantic_en: "Loan Change Pointer Processing Group - Text"
semantic_vi: "Loan Change Pointer Processing Group - Text — CDS view giao diện dựa trên tdale_exp_groupt."
keywords:
  - "loan"
  - "change"
  - "pointer"
  - "processing"
  - "group"
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
# I_LOANCHGPOINTERPROCGGRPTEXT

**Loan Change Pointer Processing Group - Text**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERPROCGGRPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `LoanChgPointerProcgGrp` | ✓ | |  | `ale_exp_group` | `NUMC(2)` | ALE Processing Group |
| `LoanChgPointerProcgGrpText` |  | |  | `xale_exp_group` | `CHAR(50)` | Name of ALE Processing Groups |
| `_Language` | | ✓ | | | | |
| `_LoanChgPointerProcgGrp` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LoanChgPointerProcgGrp` | `I_LoanChgPointerProcgGrp` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERPROCGGRPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERPROCGGRPTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCPPROCGRPTXT',
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
    representativeKey: 'LoanChgPointerProcgGrp'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Change Pointer Processing Group - Text'
define view I_LoanChgPointerProcgGrpText
  as select from tdale_exp_groupt
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
  association [0..1] to I_LoanChgPointerProcgGrp as _LoanChgPointerProcgGrp on $projection.LoanChgPointerProcgGrp = _LoanChgPointerProcgGrp.LoanChgPointerProcgGrp
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras          as Language,
      @ObjectModel.foreignKey.association: '_LoanChgPointerProcgGrp'
  key ale_exp_group  as LoanChgPointerProcgGrp,

      @Semantics.text: true
      xale_exp_group as LoanChgPointerProcgGrpText,

      _Language,
      _LoanChgPointerProcgGrp
}
```
