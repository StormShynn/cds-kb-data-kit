---
name: D_CNSLDTNGRPJRNLENTRPOSTP
description: "D Cnsldtngrpjrnlentrpostp"
semantic_vi: "View D_CNSLDTNGRPJRNLENTRPOSTP hiển thị dữ liệu đăng ký nhập vào tài khoản tổng hợp, được sử dụng trong quá trình hợp nhất tài chính."
keywords:
  - "consolidated journal entry"
  - "financial consolidation"
  - "fiscal year"
  - "consolidation version"
  - "transactional processing"
  - "sap financials"
  - "tổng hợp tài khoản"
  - "quá trình hợp nhất tài chính"
  - "năm tài chính"
  - "bản tổng hợp"
  - "xử lý giao dịch"
semantic_en: "The D_CNSLDTNGRPJRNLENTRPOSTP view exposes consolidated journal entry posting data, which is used in financial consolidation processes."
app_component: FIN-CS-JE-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-JE
  - transactional-processing
  - component:FIN-CS-JE-2CL
  - lob:Other
---
# D_CNSLDTNGRPJRNLENTRPOSTP

**D Cnsldtngrpjrnlentrpostp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-JE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `abap.char(1)` |  | |  | `key DummyKey : abap.char(1)` |  |  |
| `FiscalYear` |  | |  | `gjahr` |  |  |
| `ConsolidationVersion` |  | |  | `fc_rvers` |  |  |
| `FiscalPeriod` |  | |  | `poper` |  |  |
| `ConsolidationChartOfAccounts` |  | |  | `fc_itclg` |  |  |
| `ConsolidationDocumentType` |  | |  | `fc_docty` |  |  |
| `DocumentItemText` |  | |  | `sgtxt` |  |  |
| `ConsolidationUnit` |  | |  | `fincs_consolidationunit` |  |  |
| `ConsolidationGroup` |  | |  | `fc_congr` |  |  |
| `ConsolidationUnit1` |  | |  | `fc_bunit1` |  |  |
| `ConsolidationUnit2` |  | |  | `fc_bunit2` |  |  |
| `D_CnsldtnGrpJrnlEntrPostItemP` |  | |  | `_Item : composition [1..*] of D_CnsldtnGrpJrnlEntrPostItemP` |  |  |

## Source Code

```abap
@EndUserText.label: 'Cons. Group JE abstract entity parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]

define root abstract entity D_CnsldtnGrpJrnlEntrPostP
{
  key DummyKey                       : abap.char(1);
      FiscalYear                     : gjahr;
      ConsolidationVersion           : fc_rvers;
      FiscalPeriod                   : poper;
      ConsolidationChartOfAccounts   : fc_itclg;
      ConsolidationDocumentType      : fc_docty;
      DocumentItemText               : sgtxt;
      ConsolidationUnit              : fincs_consolidationunit;
      ConsolidationGroup             : fc_congr;
      ConsolidationUnit1             : fc_bunit1;
      ConsolidationUnit2             : fc_bunit2;
      _Item                          : composition [1..*] of D_CnsldtnGrpJrnlEntrPostItemP;
}
```
