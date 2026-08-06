---
name: D_PRODUCTIONORDERCHANGED
description: D Production OrderCHANGED
app_component: PP-SFC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - product
  - production-order
  - component:PP-SFC-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# D_PRODUCTIONORDERCHANGED

**D Production OrderCHANGED**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ManufacturingOrder` | `manufacturingorder` |
| `ProductionOrderType` | `aufart` |
| `ProductionPlant` | `werks_d` |

## Source Code

```abap
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name: 'ProductionOrder'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
@EndUserText.label: 'Production Order Changed'
define abstract entity D_ProductionOrderChanged 
{
// no key for RAP events - key derived implicitly from root node
      ManufacturingOrder          : manufacturingorder;
      ProductionOrderType         : aufart;
      ProductionPlant             : werks_d;
}
```
