---
name: I_LOANCHGPOINTERPROCGGRP
description: "Loan Change Pointer Processing Group"
app_component: FS-CML
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERPROCGGRP')/$value
semantic_en: "Loan Change Pointer Processing Group"
semantic_vi: "Loan Change Pointer Processing Group — CDS view giao diện dựa trên tdale_exp_group."
keywords:
  - "loan"
  - "change"
  - "pointer"
  - "processing"
  - "group"
  - "procg"
  - "master"
  - "data"
  - "read"
  - "cash"
  - "flow"
  - "capital"
  - "amount"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CML
  - FS-CML
  - interface-view
---
# I_LOANCHGPOINTERPROCGGRP

**Loan Change Pointer Processing Group**

| Property | Value |
|---|---|
| App Component | `FS-CML` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERPROCGGRP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LoanChgPointerProcgGrp` | ✓ | |  | `ale_exp_group` | `NUMC(2)` | ALE Processing Group |
| `LoanMasterDataIsRead` |  | |  | `rq_details` | `CHAR(1)` | Read Details for Master Data |
| `LoanCashFlowIsRead` |  | |  | `rq_cashflows` | `CHAR(1)` | Determination of Cash Flows |
| `LoanCapitalAmountIsRead` |  | |  | `rq_capitals` | `CHAR(1)` | Determining Capital Amounts |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_LoanChgPointerProcgGrpText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERPROCGGRP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOANCHGPOINTERPROCGGRP')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ILCPPROCGRP',
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
    representativeKey: 'LoanChgPointerProcgGrp'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Loan Change Pointer Processing Group'
define view I_LoanChgPointerProcgGrp
  as select from tdale_exp_group
  association [0..*] to I_LoanChgPointerProcgGrpText as _Text on $projection.LoanChgPointerProcgGrp = _Text.LoanChgPointerProcgGrp
{
      @ObjectModel.text.association: '_Text'
  key ale_exp_group as LoanChgPointerProcgGrp,

      rq_details    as LoanMasterDataIsRead,
      rq_cashflows  as LoanCashFlowIsRead,
      rq_capitals   as LoanCapitalAmountIsRead,
      
      //Collateral, Collateral Objects and Collateral Values are not applicable in S4
      //rq_collaterals,
      //rq_objects,
      //rq_values

      _Text
}
```
