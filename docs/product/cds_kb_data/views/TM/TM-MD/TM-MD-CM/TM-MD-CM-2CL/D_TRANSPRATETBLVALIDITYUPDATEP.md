---
name: D_TRANSPRATETBLVALIDITYUPDATEP
description: "D Transpratetblvalidityupdatep"
semantic_vi: "View D_TRANSPRATETBLVALIDITYUPDATEP hiển thị dữ liệu cập nhật mức phí vận chuyển, cụ thể tính hợp lệ của sự thay đổi mức phí trong đơn vị phần trăm và đơn vị tiền tệ. Nó được sử dụng khi cập nhật mức phí vận chuyển trong một phần trăm hoặc đơn vị tiền tệ cụ thể."
keywords:
  - "transportation rate"
  - "mức phí vận chuyển"
  - "update"
  - "cập nhật"
  - "percentage"
  - "phần trăm"
  - "currency"
  - "đơn vị tiền tệ"
  - "sap"
  - "tm-md-cm-2cl"
semantic_en: "The D_TRANSPRATETBLVALIDITYUPDATEP view exposes transportation rate update data, specifically the validity of rate changes in a percentage unit and currency. It is used when updating transportation rates in a specific percentage or currency unit."
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - component:TM-MD-CM-2CL
  - lob:Other
---
# D_TRANSPRATETBLVALIDITYUPDATEP

**D Transpratetblvalidityupdatep**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspRateIncrDecrInPct` |  | |  | `/scmtms/percentage_amt` |  |  |
| `TranspRateAmountInRateCrcy` |  | |  | `/scmtms/amount` |  |  |
| `TranspRateValidityCurrency` |  | |  | `/scmtms/currency` |  |  |
| `TranspRateValidityPctUnit` |  | |  | `msehi` |  |  |
| `TranspRateSignIncrDecr` |  | |  | `/scmtms/sign` |  |  |

## Source Code

```abap
@EndUserText.label: 'Action Parameter for Update Rates'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_TranspRateTblValidityUpdateP
{
  @EndUserText.label         : 'Percent'
  TranspRateIncrDecrInPct    : /scmtms/percentage_amt;

  @EndUserText.label         : 'Amount'
  TranspRateAmountInRateCrcy :  /scmtms/amount;
//  cast( TranspRateAmountInRateCrcy :  /scmtms/amount as /scmtms/vdm_amount_max_length );

  @EndUserText.label         : 'Currency'
  @UI.hidden                 : true
  @Consumption.valueHelpDefinition: [{ entity :  { name: 'I_CurrencyStdVH', element   : 'Currency' } }]
  @Semantics.currencyCode    : true
  TranspRateValidityCurrency : /scmtms/currency;

  @Semantics.unitOfMeasure   : true
  TranspRateValidityPctUnit  : msehi;

  @EndUserText.label         : 'Increase/Decrease'
  TranspRateSignIncrDecr     : /scmtms/sign; 
}
```
