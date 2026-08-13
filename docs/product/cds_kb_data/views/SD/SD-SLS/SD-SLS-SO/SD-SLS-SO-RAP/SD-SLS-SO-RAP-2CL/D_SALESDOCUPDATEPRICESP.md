---
name: D_SALESDOCUPDATEPRICESP
description: "D Salesdocupdatepricesp"
semantic_vi: "View này hiển thị dữ liệu cập nhật giá cho tài liệu bán hàng, được sử dụng khi cập nhật giá cho tài liệu bán hàng."
keywords:
  - "sales document"
  - "tài liệu bán hàng"
  - "update price"
  - "cập nhật giá"
  - "sales document update price"
  - "dữ liệu cập nhật giá"
  - "sap sales"
  - "bán hàng sap"
  - "sd sales"
  - "sd bán hàng"
  - "sales document update price data"
semantic_en: "This view exposes sales document update price data, which is used when updating prices for sales documents."
app_component: SD-SLS-SO-RAP-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - component:SD-SLS-SO-RAP-2CL
  - lob:Sales & Distribution
---
# D_SALESDOCUPDATEPRICESP

**D Salesdocupdatepricesp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-RAP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingType` |  | |  | `knprs` |  |  |

## Source Code

```abap
@EndUserText.label: 'Update Prices in Sales Doc.(Item)-Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_SalesDocUpdatePricesP 
{
    @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesDocRepricingPricingType',
                     element: 'PricingType' }
        }]
    @UI.defaultValue: 'B'
    @EndUserText.label: 'Pricing Type'
    PricingType : knprs;
    
}
```
