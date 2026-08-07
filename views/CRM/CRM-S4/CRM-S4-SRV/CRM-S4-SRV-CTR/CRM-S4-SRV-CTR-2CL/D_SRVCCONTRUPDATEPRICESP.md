---
name: D_SRVCCONTRUPDATEPRICESP
description: "D Srvccontrupdatepricesp"
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
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
