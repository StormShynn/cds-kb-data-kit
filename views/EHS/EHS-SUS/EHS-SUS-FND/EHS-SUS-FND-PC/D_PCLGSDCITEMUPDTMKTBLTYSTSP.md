---
name: D_PCLGSDCITEMUPDTMKTBLTYSTSP
description: "D Pclgsdcitemupdtmktbltystsp"
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - item-level
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCITEMUPDTMKTBLTYSTSP

**D Pclgsdcitemupdtmktbltystsp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdCmplncMarketabilityStatus` |  | |  | `ehfnd_cci_logistics_status` |  |  |

## Source Code

```abap
@EndUserText.label: 'Product Marketability Status Parameters'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
define root abstract entity D_PCLgsDcItemUpdtMktbltyStsP
{  
  ProdCmplncMarketabilityStatus  : ehfnd_cci_logistics_status;
}
```
