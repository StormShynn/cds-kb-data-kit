---
name: D_SRVCCONTRITEMUPDATEPRICESP
description: D Srvccontritemupdatepricesp
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - item-level
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# D_SRVCCONTRITEMUPDATEPRICESP

**D Srvccontritemupdatepricesp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PricingType` |  | |  | `crms4_pricing_type` |

## Source Code

```abap
@EndUserText.label: 'Update Prices for Service Contract Item'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#CDS_MODELING_ASSOCIATION_TARGET] 
define abstract entity D_SrvcContrItemUpdatePricesP
{
  @EndUserText.label : 'Pricing Type'
  @Consumption.valueHelpDefinition: [
      { entity:  { name:    'C_SrvcContrPricingTypeVH',
                   element: 'PricingType' }
      }]
//  @ObjectModel.mandatory: true    
  PricingType : crms4_pricing_type;
}
```
