---
name: D_WAREHOUSEORDERTASKACTIVATED
description: "D Warehouse OrderTASKACTIVATED"
semantic_vi: "View D_WAREHOUSEORDERTASKACTIVATED hiển thị các nhiệm vụ đơn hàng kho đã kích hoạt trong SAP EWM, có thể được sử dụng để theo dõi và quản lý các hoạt động kho."
keywords:
  - "warehouse order task"
  - "nhiệm vụ đơn hàng kho"
  - "sap ewm"
  - "scm"
  - "scm ewm"
  - "warehouse operation"
  - "đơn hàng kho"
  - "kho"
  - "sap scm ewm wop"
  - "component scm ewm wop 2cl"
semantic_en: "The D_WAREHOUSEORDERTASKACTIVATED view exposes activated warehouse order tasks in SAP EWM, which can be used to track and manage warehouse operations."
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
# D_WAREHOUSEORDERTASKACTIVATED

**D Warehouse OrderTASKACTIVATED**

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
@EndUserText.label: 'Warehouse Task Activated'

@Event.sapObjectNodeTypeKey: [
    { element: 'EWMWarehouse' },
    { element: 'WarehouseOrder'},
    { element: 'WarehouseTask'},
    { element: 'WarehouseTaskItem'} ]
    
@ObjectModel.sapObjectNodeType.name: 'WarehouseTask'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
@VDM.usage.type: [ #EVENT_SIGNATURE ]
define abstract entity D_WarehouseOrderTaskActivated
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
