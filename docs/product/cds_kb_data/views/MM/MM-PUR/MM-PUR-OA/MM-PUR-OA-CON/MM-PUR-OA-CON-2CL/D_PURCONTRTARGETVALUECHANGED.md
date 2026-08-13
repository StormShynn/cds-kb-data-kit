---
name: D_PURCONTRTARGETVALUECHANGED
description: "D Purcontrtargetvaluechanged"
semantic_vi: "View này hiển thị các thay đổi giá trị mục tiêu của hợp đồng mua hàng, bao gồm các giá trị mục tiêu trước và sau cùng với các đơn vị tiền tệ tương ứng. Nó được sử dụng để theo dõi các thay đổi trong mục tiêu hợp đồng mua hàng theo thời gian."
keywords:
  - "purchase contract"
  - "hợp đồng mua hàng"
  - "target value"
  - "giá trị mục tiêu"
  - "currency"
  - "đơn vị tiền tệ"
  - "purchase contract target"
  - "mục tiêu hợp đồng mua hàng"
  - "sap mm"
  - "mm-pur"
  - "mm-pur-oa"
  - "component:mm-pur-oa-con-2cl"
semantic_en: "This view exposes the target value changes of a purchase contract, including the previous and current target amounts and currencies. It is used to track changes in purchase contract targets over time."
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
# D_PURCONTRTARGETVALUECHANGED

**D Purcontrtargetvaluechanged**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-CON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseContractTargetAmount` |  | |  | `ktwrt` |  |  |
| `DocumentCurrency` |  | |  | `waers` |  |  |
| `PurContractPrevTargetAmount` |  | |  | `ktwrt` |  |  |
| `PurContrPrevDocumentCurrency` |  | |  | `waers` |  |  |

## Source Code

```abap
@Event.sapObjectNodeType: 'PurchaseContract'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Purchase Contract Target Value Changed'
define abstract entity D_PurContrTargetValueChanged
{
    @Semantics.amount.currencyCode: 'DocumentCurrency'
    @Event.previousValue.element:'PurContractPrevTargetAmount'
    PurchaseContractTargetAmount : ktwrt;
    
    @Event.previousValue.element:'PurContrPrevDocumentCurrency'
    DocumentCurrency : waers;   
     
    @Semantics.amount.currencyCode: 'PurContrPrevDocumentCurrency'
    PurContractPrevTargetAmount : ktwrt;
    
    PurContrPrevDocumentCurrency : waers; 
}
```
