---
name: I_LOANCHGPOINTERPROCGSTS
description: "Loan Change Pointer Processing Status"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERPROCGSTS')/$value
semantic_en: "Loan Change Pointer Processing Status"
semantic_vi: "Loan Change Pointer Processing Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "loan"
  - "change"
  - "pointer"
  - "processing"
  - "status"
  - "procg"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANCHGPOINTERPROCGSTS

**Loan Change Pointer Processing Status**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERPROCGSTS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanChgPointerProcgSts` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as tb_ale_process preserving type)` | `CHAR(1)` | Status of Change Pointer Regarding ALE Processing |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanChgPointerProcgStsText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERPROCGSTS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERPROCGSTS')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCPPROCSTS',
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
    representativeKey: 'LoanChgPointerProcgSts'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Change Pointer Processing Status'
define view I_LoanChgPointerProcgSts
  as select from dd07l
  association [0..*] to I_LoanChgPointerProcgStsText as _Text on $projection.LoanChgPointerProcgSts = _Text.LoanChgPointerProcgSts
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as tb_ale_process preserving type) as LoanChgPointerProcgSts,

      _Text
}
where
      dd07l.domname  = 'T_ALE_PROCESS'
  and dd07l.as4local = 'A'
```
