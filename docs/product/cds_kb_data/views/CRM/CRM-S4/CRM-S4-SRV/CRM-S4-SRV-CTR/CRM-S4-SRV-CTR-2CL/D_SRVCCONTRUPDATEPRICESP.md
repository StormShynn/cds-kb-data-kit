---
name: D_SRVCCONTRUPDATEPRICESP
description: "D Srvccontrupdatepricesp"
semantic_vi: "Dịch vụ xem lại giá cho hợp đồng dịch vụ cung cấp thông tin về giá cho hợp đồng dịch vụ, có thể được sử dụng để cập nhật giá trong hệ thống CRM."
keywords:
  - "service contract"
  - "hợp đồng dịch vụ"
  - "price update"
  - "cập nhật giá"
  - "crm"
  - "hệ thống quản lý mối quan hệ khách hàng"
  - "sap"
  - "service view"
semantic_en: "Service contract update prices service view provides pricing information for service contracts, which can be used to update prices in the CRM system."
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# D_SRVCCONTRUPDATEPRICESP

**D Srvccontrupdatepricesp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingType` |  | |  | `crms4_pricing_type` |  |  |

## Source Code

```abap
@EndUserText.label: 'Update Prices for Service Contract'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#CDS_MODELING_ASSOCIATION_TARGET] 
define abstract entity D_SrvcContrUpdatePricesP
{
  @EndUserText.label : 'Pricing Type'
  @Consumption.valueHelpDefinition: [
      { entity:  { name:    'C_SrvcContrPricingTypeVH',
                   element: 'PricingType' }
      }]
  PricingType  : crms4_pricing_type;
}
```
