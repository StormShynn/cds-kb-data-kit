---
name: D_PURCONTRITMTGTQTYCHANGED
description: "D Purcontritmtgtqtychanged"
semantic_vi: "View D_PURCONTRITMTGTQTYCHANGED hiển thị các thay đổi về lượng mục tiêu trong hợp đồng mua hàng, có thể sử dụng để theo dõi và phân tích các thay đổi về lượng mục tiêu trong hợp đồng mua hàng."
keywords:
  - "purchase contract"
  - "hợp đồng mua hàng"
  - "target quantity"
  - "lượng mục tiêu"
  - "change"
  - "thay đổi"
  - "sap mm"
  - "mm-pur"
  - "mm-pur-oa"
  - "sourcing & procurement"
semantic_en: "The D_PURCONTRITMTGTQTYCHANGED CDS view exposes purchase contract target quantity changes, which can be used to track and analyze changes to target quantities in purchase contracts."
app_component: MM-PUR-OA-CON-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - component:MM-PUR-OA-CON-2CL
  - lob:Sourcing & Procurement
---
# D_PURCONTRITMTGTQTYCHANGED

**D Purcontritmtgtqtychanged**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-CON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseContractTargetQuantity` |  | |  | `ktmng` |  |  |
| `PurContractOrderQuantityUnit` |  | |  | `meins` |  |  |
| `PurContractPrevTargetQuantity` |  | |  | `ktmng` |  |  |
| `PurContrPrevOrderQuantityUnit` |  | |  | `meins` |  |  |

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'PurchaseContractItem'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Pur Contract Itm Target Quant chgd'
define abstract entity D_PurContrItmTgtQtyChanged
{
   
  @Event.previousValue.element   :'PurContractOrderQuantityUnit'
  @Semantics.quantity.unitOfMeasure: 'PurContractOrderQuantityUnit'
  PurchaseContractTargetQuantity : ktmng;
 
  @Event.previousValue.element   :'PurContrPrevOrderQuantityUnit'
  PurContractOrderQuantityUnit   : meins;
 
  @Semantics.quantity.unitOfMeasure: 'PurContrPrevOrderQuantityUnit'
  PurContractPrevTargetQuantity  : ktmng;
 
  PurContrPrevOrderQuantityUnit  : meins;
 
}
```
