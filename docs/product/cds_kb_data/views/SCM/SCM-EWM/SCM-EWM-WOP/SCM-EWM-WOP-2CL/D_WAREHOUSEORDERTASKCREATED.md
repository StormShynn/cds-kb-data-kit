---
name: D_WAREHOUSEORDERTASKCREATED
description: "D Warehouse OrderTASKCREATED"
semantic_vi: "Chứa dữ liệu tạo nhiệm vụ đặt hàng kho để sử dụng trong các ứng dụng quản lý chuỗi cung ứng (SCM) và quản lý kho mở rộng (EWM)."
keywords:
  - "warehouse"
  - "order"
  - "task"
  - "scm"
  - "ewm"
  - "supply chain management"
  - "extended warehouse management"
  - "warehouse order"
  - "task creation"
  - "nhiệm vụ đặt hàng kho"
  - "quản lý chuỗi cung ứng"
  - "quản lý kho mở rộng"
semantic_en: "Exposes warehouse order task creation data for use in Supply Chain Management (SCM) and Extended Warehouse Management (EWM) applications."
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
# D_WAREHOUSEORDERTASKCREATED

**D Warehouse OrderTASKCREATED**

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
@EndUserText.label: 'Warehouse Task Created'

@Event.sapObjectNodeTypeKey: [
    { element: 'EWMWarehouse' },
    { element: 'WarehouseOrder'},
    { element: 'WarehouseTask'},
    { element: 'WarehouseTaskItem'} ]
    
@ObjectModel.sapObjectNodeType.name: 'WarehouseTask'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
@VDM.usage.type: [ #EVENT_SIGNATURE ]
define abstract entity D_WarehouseOrderTaskCreated
{

//  /* SONT Keys */
  WarehouseTask            : /scwm/tanum_conv_alpha;
  WarehouseTaskItem        : /scwm/tapos_noconv;

  /* Filter Properties */
//  WarehouseOrder               : /scwm/de_who_noconv;
  
  WarehouseTaskStatus          : /scwm/de_tostat;
  
  WarehouseProcessType         : /scwm/de_procty;

  IsHandlingUnitWarehouseTask  : /scwm/flghuto;

  WarehouseOrderQueue          : /scwm/de_queue;

  EWMReferenceDocumentCategory : /scwm/de_doccat;

}
```
