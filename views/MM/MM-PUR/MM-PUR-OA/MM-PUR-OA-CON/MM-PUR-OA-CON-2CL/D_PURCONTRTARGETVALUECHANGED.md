---
name: D_PURCONTRTARGETVALUECHANGED
description: D Purcontrtargetvaluechanged
app_component: MM-PUR-OA-CON-2CL
software_component: SAPSCORE
release_state: released
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

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PurchaseContractTargetAmount` |  | |  | `ktwrt` |
| `DocumentCurrency` |  | |  | `waers` |
| `PurContractPrevTargetAmount` |  | |  | `ktwrt` |
| `PurContrPrevDocumentCurrency` |  | |  | `waers` |

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
