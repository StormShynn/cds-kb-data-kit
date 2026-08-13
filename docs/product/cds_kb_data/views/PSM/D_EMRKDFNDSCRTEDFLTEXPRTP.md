---
name: D_EMRKDFNDSCRTEDFLTEXPRTP
description: "D Emrkdfndscrtedfltexprtp"
semantic_vi: "View D_EMRKDFNDSCRTEDFLTEXPRTP hiển thị dữ liệu liên quan đến các trường được mã hóa trong một hệ thống xử lý giao dịch cụ thể, thường được sử dụng cho phân tích dữ liệu và báo cáo."
keywords:
  - "transactional processing"
  - "encrypted fields"
  - "transactional data"
  - "data analysis"
  - "reporting"
  - "hệ thống xử lý giao dịch"
  - "trường được mã hóa"
  - "phân tích dữ liệu"
  - "báo cáo"
  - "psm"
  - "component:psm"
  - "lob:other"
semantic_en: "The D_EMRKDFNDSCRTEDFLTEXPRTP view exposes transactional data related to encrypted fields in a specific transactional processing system, typically used for data analysis and reporting."
app_component: PSM
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - transactional-processing
  - component:PSM
  - lob:Other
---
# D_EMRKDFNDSCRTEDFLTEXPRTP

**D Emrkdfndscrtedfltexprtp**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransactionCurrency` |  | |  | `twaer` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |

## Source Code

```abap
@EndUserText.label: 'Actn Exprt Param wth Create Default Val'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE, #ACTION_PARAMETER_STRUCTURE]
//@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define abstract entity D_EmrkdFndsCrteDfltExprtP
{

  @Consumption.valueHelpDefinition: [
    { 
      entity: { 
        element: 'Currency',
        name: 'I_CurrencyStdVH'
      },
      label : 'Currency'
    } 
  ]
  @EndUserText.label  : 'Currency'
  TransactionCurrency : twaer;
  
  CompanyCode : bukrs;

}
```
