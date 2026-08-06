---
name: I_IHBACCTINTRSTCOMPNOBJTP
description: Ihbacctintrstcompnobjtp
app_component: FIN-FSCM-PF-IHB-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-PF
  - interface-view
  - transactional-processing
  - component:FIN-FSCM-PF-IHB-2CL
  - lob:Other
---
# I_IHBACCTINTRSTCOMPNOBJTP

**Ihbacctintrstcompnobjtp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF-IHB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `IHBObjectUUID` | `IHBObjectUUID` |
| `IHBObjectReferenceUUID` | `IHBObjectReferenceUUID` |
| `IHBObjectType` | `IHBObjectType` |
| `IHBObjectCategory` | `IHBObjectCategory` |
| `IHBObjectKeyUUID` | `IHBObjectKeyUUID` |
| `IHBReleaseStatus` | `IHBReleaseStatus` |
| `IHBObjectApprovalActivity` | `IHBObjectApprovalActivity` |
| `IHBObjectDeadlineDateTime` | `IHBObjectDeadlineDateTime` |
| `IHBBankArea` | `IHBBankArea` |
| `IHBObjectLevel` | `IHBObjectLevel` |
| `IHBObjectReleaseDateTime` | `IHBObjectReleaseDateTime` |
| `IHBObjectReleasedByUser` | `IHBObjectReleasedByUser` |
| `InhouseBankGroupID` | `InhouseBankGroupID` |
| `IHBObjectTotalChangedDateTime` | `IHBObjectTotalChangedDateTime` |
| `IHBObjectCreatedDateTime` | `IHBObjectCreatedDateTime` |
| `IHBObjectCreatedByUser` | `IHBObjectCreatedByUser` |
| `IHBObjectChangedDateTime` | `IHBObjectChangedDateTime` |
| `IHBObjectChangedByUser` | `IHBObjectChangedByUser` |
| `_IHBGroupAssignmentTP` | *Association* |
| `_IHBAcctIntrstCompnTP` | *Association* |

## Source Code

```abap
@EndUserText.label: 'IHB Interest Compensation - TP'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@ObjectModel: {
   sapObjectNodeType:{
      name: 'InhouseBankMasterObject'},
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['IHBObjectUUID']
 }
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'IBO', 
  dataSources: ['InHouseBankMasterObject'],  
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }  
} 
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define root view entity I_IHBAcctIntrstCompnObjTP
provider contract transactional_interface
  as projection on R_IHBMasterDataObjectTP as InHouseBankMasterObject
  
  {
  
  key IHBObjectUUID,
  IHBObjectReferenceUUID,
  IHBObjectType,
  IHBObjectCategory,
  IHBObjectKeyUUID,
  IHBReleaseStatus,
  IHBObjectApprovalActivity,
  IHBObjectDeadlineDateTime,
  IHBBankArea,
  IHBObjectLevel,
  IHBObjectReleaseDateTime,
  IHBObjectReleasedByUser,
  InhouseBankGroupID,
  IHBObjectTotalChangedDateTime,
  IHBObjectCreatedDateTime,
  IHBObjectCreatedByUser,
  IHBObjectChangedDateTime,
  IHBObjectChangedByUser,
  /* Associations */
  _IHBGroupAssignmentTP       : redirected to composition child I_IHBAcctIntrstCompnItmTP,
  _IHBAcctIntrstCompnTP       : redirected to composition child I_IHBAcctIntrstCompnTP
  }
```
