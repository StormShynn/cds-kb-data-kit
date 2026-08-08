---
name: D_SALESDOCUPDATEPRICESP
description: "D Salesdocupdatepricesp"
app_component: SD-SLS-SO-RAP-2CL
software_component: SAPSCORE
release_state: released
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
