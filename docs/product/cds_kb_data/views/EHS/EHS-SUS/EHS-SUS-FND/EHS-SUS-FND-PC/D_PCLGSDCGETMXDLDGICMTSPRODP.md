---
name: D_PCLGSDCGETMXDLDGICMTSPRODP
description: "D Pclgsdcgetmxdldgicmtsprodp"
semantic_vi: "Chứa dữ liệu sản phẩm và thông tin đóng gói cho thành phần EHS-SUS-FND-PC, hữu ích cho việc quản lý sản phẩm và thông tin đóng gói của chúng."
keywords:
  - "product"
  - "packing instruction"
  - "ehs-sus-fnd-pc"
  - "component"
  - "product data"
  - "đóng gói"
  - "sản phẩm"
  - "thông tin sản phẩm"
  - "ehs"
  - "sap"
semantic_en: "Exposes product and packing instruction data for EHS-SUS-FND-PC component, useful for managing products and their packaging information."
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCGETMXDLDGICMTSPRODP

**D Pclgsdcgetmxdldgicmtsprodp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` |  | |  | `ehfnd_mat_id` |  |  |
| `PackingInstructionNumber` |  | |  | `ehfnd_pi_id` |  |  |
| `_Root` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Get Mxd Loading Icmts Product Parameter'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
define abstract entity D_PCLgsDcGetMxdLdgIcmtsProdP
{
  Product                          : ehfnd_mat_id;
  PackingInstructionNumber         : ehfnd_pi_id;
  _Root : association to parent D_PCLgsDcGetMxdLdgIcmtsP; 
}
```
