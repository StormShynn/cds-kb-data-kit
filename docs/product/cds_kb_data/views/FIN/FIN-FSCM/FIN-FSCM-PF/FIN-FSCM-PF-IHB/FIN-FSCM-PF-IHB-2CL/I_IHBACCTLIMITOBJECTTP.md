---
name: I_IHBACCTLIMITOBJECTTP
description: "Ihbacctlimitobjecttp"
app_component: FIN-FSCM-PF-IHB-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_IHBACCTLIMITOBJECTTP

**Ihbacctlimitobjecttp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF-IHB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IHBObjectUUID` | ✓ | |  |  |  |  |
| `IHBObjectReferenceUUID` |  | |  |  |  |  |
| `IHBObjectType` |  | |  |  |  |  |
| `IHBObjectCategory` |  | |  |  |  |  |
| `IHBObjectKeyUUID` |  | |  |  |  |  |
| `IHBReleaseStatus` |  | |  |  |  |  |
| `IHBObjectApprovalActivity` |  | |  |  |  |  |
| `IHBObjectDeadlineDateTime` |  | |  |  |  |  |
| `IHBBankArea` |  | |  |  |  |  |
| `IHBObjectLevel` |  | |  |  |  |  |
| `IHBObjectReleaseDateTime` |  | |  |  |  |  |
| `IHBObjectReleasedByUser` |  | |  |  |  |  |
| `InhouseBankGroupID` |  | |  |  |  |  |
| `IHBObjectTotalChangedDateTime` |  | |  |  |  |  |
| `IHBObjectCreatedDateTime` |  | |  |  |  |  |
| `IHBObjectCreatedByUser` |  | |  |  |  |  |
| `IHBObjectChangedDateTime` |  | |  |  |  |  |
| `IHBObjectChangedByUser` |  | |  |  |  |  |
| `_IHBGroupAssignmentTP` | | ✓ | | | | |
| `_IHBAcctLimitTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'IHB Limits - TP'
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

define root view entity I_IHBAcctLimitObjectTP
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
      // Composition
      //
      _IHBGroupAssignmentTP : redirected to composition child I_IHBAcctLimitGroupAssgmtTP,
      _IHBAcctLimitTP       : redirected to composition child I_IHBAcctLimitTP
}
```
