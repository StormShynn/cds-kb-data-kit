---
name: D_WAREHOUSEORDERTASKCONFIRMED
description: "D Warehouse OrderTASKCONFIRMED"
semantic_vi: "CDS view D_WAREHOUSEORDERTASKCONFIRMED hiển thị dữ liệu xác nhận nhiệm vụ kho trong hệ thống EWM, có thể sử dụng để theo dõi trạng thái nhiệm vụ kho."
keywords:
  - "warehouse"
  - "order"
  - "task"
  - "confirmation"
  - "ewm"
  - "scm"
  - "scm-ewm"
  - "warehouse order task"
  - "d_warehouseordertaskconfirmed"
  - "nhiệm vụ kho"
  - "xác nhận nhiệm vụ kho"
semantic_en: "The D_WAREHOUSEORDERTASKCONFIRMED CDS view exposes warehouse order task confirmation data, which is useful when tracking the status of warehouse tasks in the EWM system."
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
# D_WAREHOUSEORDERTASKCONFIRMED

**D Warehouse OrderTASKCONFIRMED**

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
@EndUserText.label: 'Warehouse Task Confirmed'

@Event.sapObjectNodeTypeKey: [
    { element: 'EWMWarehouse' },
    { element: 'WarehouseOrder'},
    { element: 'WarehouseTask'},
    { element: 'WarehouseTaskItem'} ]
    
@ObjectModel.sapObjectNodeType.name: 'WarehouseTask'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
@VDM.usage.type: [ #EVENT_SIGNATURE ]
define abstract entity D_WarehouseOrderTaskConfirmed
{

  /* SONT Keys */
  WarehouseTask            : /scwm/tanum_conv_alpha;

  WarehouseTaskItem        : /scwm/tapos_noconv;

  /* Filter Properties */
//  WarehouseOrder               : /scwm/de_who_noconv;
  
  WarehouseProcessType         : /scwm/de_procty;

  IsHandlingUnitWarehouseTask  : /scwm/flghuto;

  WarehouseOrderQueue          : /scwm/de_queue;

  EWMReferenceDocumentCategory : /scwm/de_doccat;


}
```
