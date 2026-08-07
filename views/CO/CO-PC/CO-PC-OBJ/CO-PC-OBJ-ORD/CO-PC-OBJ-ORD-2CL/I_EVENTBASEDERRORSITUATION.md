---
name: I_EVENTBASEDERRORSITUATION
description: Eventbasederrorsituation
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
  - component:CO-PC-OBJ-ORD-2CL
  - lob:Controlling
---
# I_EVENTBASEDERRORSITUATION

**Eventbasederrorsituation**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `EventbasedProductCostgErrorID` | ✓ | |  |  |
| `CompanyCode` |  | |  |  |
| `SystemMessageClass` |  | |  |  |
| `SystemMessageNumber` |  | |  |  |
| `LogMessageText` |  | |  | `cast ( Text as le_msg_text)` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Event-Based Error for Situation Handling'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #S,
  dataClass: #MIXED
}
//@VDM.private:false
@VDM.viewType:#COMPOSITE
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[#SITUATION_ANCHOR, #SITUATION_TRIGGER, #SITUATION_DATACONTEXT]
@ObjectModel.semanticKey: ['EventbasedProductCostgErrorID']
define view entity I_EventBasedErrorSituation 
    as select from P_EvtBsdErrorSituation as error
{
    key EventbasedProductCostgErrorID,   
        CompanyCode,
        SystemMessageClass,
        @EndUserText.label: 'Message Number'
        SystemMessageNumber,
        cast ( Text as  le_msg_text)  as LogMessageText
}
```
