---
name: D_WAREHOUSEORDERTASKCANCELED
description: "D Warehouse OrderTASKCANCELED"
semantic_vi: "View này hiển thị dữ liệu hủy bỏ nhiệm vụ đơn hàng kho, có thể được sử dụng để theo dõi và phân tích việc hủy bỏ nhiệm vụ đơn hàng kho trong hệ thống EWM."
keywords:
  - "warehouse order task"
  - "cancellation"
  - "ewm"
  - "scm"
  - "warehouse order"
  - "task"
  - "canceled"
  - "đơn hàng kho"
  - "hủy bỏ"
  - "nhiệm vụ"
  - "đơn hàng"
  - "kho"
semantic_en: "This view exposes warehouse order task cancellation data, which can be used to track and analyze cancellations of warehouse order tasks in the EWM system."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - warehouse
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# D_WAREHOUSEORDERTASKCANCELED

**D Warehouse OrderTASKCANCELED**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `'EWMWarehouse'` |  | |  | `element: 'EWMWarehouse'` |  |  |

## Source Code

```abap
@EndUserText.label: 'Warehouse Task Canceled'

@Event.sapObjectNodeTypeKey: [
    { element: 'EWMWarehouse' },
    { element: 'WarehouseOrder'},
    { element: 'WarehouseTask'},
    { element: 'WarehouseTaskItem'} ]
    
@ObjectModel.sapObjectNodeType.name: 'WarehouseTask'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
@VDM.usage.type: [ #EVENT_SIGNATURE ]
define abstract entity D_WarehouseOrderTaskCanceled
{

  /* SONT Keys */
  WarehouseTask            : /scwm/tanum_conv_alpha;
//
  WarehouseTaskItem        : /scwm/tapos_noconv;

  /* Filter Properties */
//  WarehouseOrder               : /scwm/de_who_noconv;
  
  WarehouseProcessType         : /scwm/de_procty;

  IsHandlingUnitWarehouseTask  : /scwm/flghuto;

  WarehouseOrderQueue          : /scwm/de_queue;

  EWMReferenceDocumentCategory : /scwm/de_doccat;

}
```
