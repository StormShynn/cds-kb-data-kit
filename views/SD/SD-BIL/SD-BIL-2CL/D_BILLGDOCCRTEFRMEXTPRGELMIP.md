---
name: D_BILLGDOCCRTEFRMEXTPRGELMIP
description: D Billgdoccrtefrmextprgelmip
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# D_BILLGDOCCRTEFRMEXTPRGELMIP

**D Billgdoccrtefrmextprgelmip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConditionType` | `kschl` |
| `ConditionRateAmount` | `vfprc_rate_amount` |
| `ConditionCurrency` | `waers` |
| `ConditionQuantity` | `kpein` |
| `ConditionQuantityUnit` | `kmein` |
| `ConditionRateRatio` | `vfprc_element_ratio` |
| `ConditionRateRatioUnit` | `msehi` |

## Source Code

```abap
@EndUserText.label: 'Bill Doc Create From Ext Data Pricing Element - Parameter'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_BillgDocCrteFrmExtPrgElmIP
{
  ConditionType          : kschl;
 
  @OData.v2.amount.noDecimalShift: true
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  ConditionRateAmount    : vfprc_rate_amount;
 
  @Semantics.currencyCode: true
  ConditionCurrency      : waers;
 
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
  ConditionQuantity      : kpein;
 
  @Semantics.unitOfMeasure: true
  ConditionQuantityUnit  : kmein;
 
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  ConditionRateRatio     : vfprc_element_ratio; 
 
  @Semantics.unitOfMeasure: true
  ConditionRateRatioUnit : msehi;
 
}
```
