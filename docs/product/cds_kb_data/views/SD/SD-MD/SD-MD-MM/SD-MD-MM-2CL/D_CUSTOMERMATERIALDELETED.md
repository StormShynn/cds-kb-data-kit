---
name: D_CUSTOMERMATERIALDELETED
description: "D Customermaterialdeleted"
app_component: SD-MD-MM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-MM
  - customer
  - material
  - component:SD-MD-MM-2CL
  - lob:Sales & Distribution
  - bo:Material
  - bo:Customer
---
# D_CUSTOMERMATERIALDELETED

**D Customermaterialdeleted**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` |  | |  | `matnr` |  |  |
| `MaterialByCustomer` |  | |  | `matnr_ku` |  |  |
| `MaterialDescriptionByCustomer` |  | |  | `postx` |  |  |
| `Plant` |  | |  | `werks_d` |  |  |
| `DeliveryPriority` |  | |  | `lprio` |  |  |
| `MinDeliveryQtyInBaseUnit` |  | |  | `minlf` |  |  |
| `BaseUnit` |  | |  | `meins` |  |  |

## Source Code

```abap
@EndUserText.label: 'Customer Material Deleted'
@Event:{
    sapObjectNodeType: 'CustomerMaterial',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CustomerMaterialDeleted
{
  Material                      : matnr;
  MaterialByCustomer            : matnr_ku;
  MaterialDescriptionByCustomer : postx;
  Plant                         : werks_d;
  DeliveryPriority              : lprio;
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  MinDeliveryQtyInBaseUnit      : minlf;
  BaseUnit                      : meins;
}
```
