---
name: D_SALESDOCCREATEWITHREFITEMP
description: "D Salesdoccreatewithrefitemp"
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
  - item-level
  - component:SD-SLS-SO-RAP-2CL
  - lob:Sales & Distribution
---
# D_SALESDOCCREATEWITHREFITEMP

**D Salesdoccreatewithrefitemp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-RAP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReferenceSDDocumentItem` |  | |  | `vgpos` |  |  |
| `RequestedQuantity` |  | |  | `reqd_qty` |  |  |
| `RequestedQuantityUnit` |  | |  | `reqd_qty_unit` |  |  |

## Source Code

```abap
@EndUserText.label: 'Actn Param Cr with Ref Item in Sls Doc'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define root abstract entity D_SalesDocCreateWithRefItemP
{
  ReferenceSDDocumentItem : vgpos;

  @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
  @Semantics.valueRange.minimum: '0'
  RequestedQuantity       : reqd_qty;

  RequestedQuantityUnit   : reqd_qty_unit;

}
```
