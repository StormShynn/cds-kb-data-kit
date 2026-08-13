---
name: D_PRODUCTIONORDERRELEASEP
description: "D Production OrderRELEASEP"
semantic_vi: "View D_PRODUCTIONORDERRELEASEP hiển thị dữ liệu về việc phát hành đơn đặt hàng sản xuất, có liên quan khi quản lý đơn đặt hàng sản xuất trong thành phần PP-SFC-2CL của SAP."
keywords:
  - "production order"
  - "đơn đặt hàng sản xuất"
  - "pp-sfc-2cl"
  - "sfc"
  - "manufacturing"
  - "release"
  - "production order release"
  - "đơn đặt hàng sản xuất phát hành"
  - "sap pp"
  - "lob:manufacturing"
  - "bo:productionorder"
semantic_en: "The D_PRODUCTIONORDERRELEASEP view exposes production order release data, which is relevant when managing production orders in the SAP PP-SFC-2CL component."
app_component: PP-SFC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - product
  - production-order
  - lease
  - component:PP-SFC-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# D_PRODUCTIONORDERRELEASEP

**D Production OrderRELEASEP**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrdRelIsPmtdDsptMisgParts` |  | |  | `abap_boolean` |  |  |

## Source Code

```abap
@EndUserText.label: 'Release Production Order Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_ProductionOrderReleaseP
{
  OrdRelIsPmtdDsptMisgParts : abap_boolean;
}
```
