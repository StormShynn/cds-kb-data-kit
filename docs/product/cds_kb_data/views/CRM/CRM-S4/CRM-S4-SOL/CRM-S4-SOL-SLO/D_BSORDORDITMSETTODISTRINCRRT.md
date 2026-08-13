---
name: D_BSORDORDITMSETTODISTRINCRRT
description: "D Bsordorditmsettodistrincrrt"
semantic_vi: "View này hiển thị các thiết lập cho mục đơn hàng dịch vụ trong các khoảng, liên quan đến các đơn hàng giải pháp kinh doanh CRM-S4-SOL-SLO."
keywords:
  - "service document"
  - "distribution increment"
  - "crm-s4-sol-slo"
  - "business solution order"
  - "đơn hàng dịch vụ"
  - "đơn đặt hàng"
  - "đơn vị kinh doanh"
  - "s4-sol-slo"
semantic_en: "This view exposes service document item settings for distribution in increments, relevant for CRM-S4-SOL-SLO business solution orders."
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# D_BSORDORDITMSETTODISTRINCRRT

**D Bsordorditmsettodistrincrrt**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceDocumentItemObjectType` |  | |  | `crmt_swo_objtyp_process_itm_db` |  |  |
| `CustMgmtObjectType` |  | |  | `crmt_subobject_category_db` |  |  |
| `BusinessSolutionOrderUUID` |  | |  | `crmt_object_guid` |  |  |
| `BusinessSolutionOrderItemUUID` |  | |  | `crmt_object_guid` |  |  |

## Source Code

```abap
@EndUserText.label: 'Business Solution Order Item Distribution Incorrect'
@ObjectModel.sapObjectNodeType.name: 'BusinessSolutionOrderItem'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_BSOrdOrdItmSetToDistrIncrrt
{
  ServiceDocumentItemObjectType : crmt_swo_objtyp_process_itm_db;
  CustMgmtObjectType            : crmt_subobject_category_db;
  BusinessSolutionOrderUUID     : crmt_object_guid;
  BusinessSolutionOrderItemUUID : crmt_object_guid;
}
```
