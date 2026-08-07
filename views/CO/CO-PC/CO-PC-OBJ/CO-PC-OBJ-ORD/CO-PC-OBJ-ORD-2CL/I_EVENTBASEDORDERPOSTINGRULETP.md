---
name: I_EVENTBASEDORDERPOSTINGRULETP
description: Eventbasedorderpostingruletp
app_component: CO-PC-OBJ-ORD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-OBJ
  - interface-view
  - transactional-processing
  - component:CO-PC-OBJ-ORD-2CL
  - lob:Controlling
---
# I_EVENTBASEDORDERPOSTINGRULETP

**Eventbasedorderpostingruletp**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventBasedDistrPostingRuleUUID` | ✓ | |  |  |  |  |
| `SAPObjectNodeType` |  | |  |  |  |  |
| `ControllingObject` |  | |  |  |  |  |
| `ControllingObjectType` |  | |  |  |  |  |
| `EventBasedDistributionRuleSqnc` |  | |  |  |  |  |
| `EventBasedDistributionType` |  | |  |  |  |  |
| `EvtBsdDistrSourceStructure` |  | |  |  |  |  |
| `EvtBsdDistrSourceAssignment` |  | |  |  |  |  |
| `EventBasedDistrRateInPercent` |  | |  |  |  |  |
| `EvtBsdDistrEquivalenceFactor` |  | |  |  |  |  |
| `EventBasedDistributionDfltRule` |  | |  |  |  |  |
| `EvtBsdDistrTracingFctrDetnMeth` |  | |  |  |  |  |
| `MfgOrdNonMatlRcvrAcctDetnMeth` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `OrderItem` |  | |  |  |  |  |
| `OrderCategory` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `PartnerControllingObjectType` |  | |  |  |  |  |
| `EvtBsdPostingRuleReceiver` |  | |  |  |  |  |
| `EvtBsdPostingRuleReceiverText` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `RecentlyChangedDateTime` |  | |  |  |  |  |

## Source Code

```abap
@EndUserText.label: 'Event-Based Manufacturing Order Posting Rule - TP'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY 
@VDM: {viewType: #TRANSACTIONAL,
       lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata.ignorePropagatedAnnotations: true  
@ObjectModel: {
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType.name:'EventBasedOrderPostingRule',
    usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XL 
     }
}
define root view entity I_EventBasedOrderPostingRuleTP provider contract transactional_interface
as projection on R_EventBasedOrderPostingRuleTP as EventBasedOrderPostingRule
{
  key EventBasedDistrPostingRuleUUID,
      SAPObjectNodeType,
      ControllingObject,
      ControllingObjectType,
      EventBasedDistributionRuleSqnc,
      EventBasedDistributionType,
      EvtBsdDistrSourceStructure,
      EvtBsdDistrSourceAssignment,
      EventBasedDistrRateInPercent,
      EvtBsdDistrEquivalenceFactor,
      EventBasedDistributionDfltRule,
      EvtBsdDistrTracingFctrDetnMeth,
      MfgOrdNonMatlRcvrAcctDetnMeth,      
      OrderID,
      OrderItem,
      OrderCategory,
      SalesOrder,
      SalesOrderItem, 
      WBSElementInternalID, 
                    
      PartnerControllingObjectType,
      
      @ObjectModel.text.element: ['EvtBsdPostingRuleReceiverText'] 
      EvtBsdPostingRuleReceiver, 
      @Semantics.text: true
      EvtBsdPostingRuleReceiverText,
      
      @Semantics.user.createdBy: true
      CreatedByUser,              
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.systemTime.createdAt: true 
      CreationTime,
      
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,         
      @Semantics.systemDateTime.lastChangedAt: true
      RecentlyChangedDateTime   
  
}
```
