---
name: I_IHBCONDITIONOBJECTTP
description: Ihbconditionobjecttp
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
  - pricing-condition
  - component:FIN-FSCM-PF-IHB-2CL
  - lob:Other
---
# I_IHBCONDITIONOBJECTTP

**Ihbconditionobjecttp**

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
| `_IHBAccount` | | ✓ | | | | |
| `_IHBGroupType` | | ✓ | | | | |
| `_IHBGroupAssignmentTP` | | ✓ | | | | |
| `_IHBConditionTP` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.extensibility: { extensible: true,
                              elementSuffix: 'IBO',
                              dataSources: [ 'InhouseBankMasterObject' ],
                              quota: { maximumFields: 204, maximumBytes: 6800 } }

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@EndUserText.label: 'IHB Condition - TP'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.sapObjectNodeType.name: 'InhouseBankMasterObject'
@ObjectModel.semanticKey: [ 'IHBObjectUUID' ]
@ObjectModel.supportedCapabilities: [ #TRANSACTIONAL_PROVIDER ]
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL }

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define root view entity I_IHBConditionObjectTP
provider contract transactional_interface
  as projection on R_IHBMasterDataObjectTP as InhouseBankMasterObject
  
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
  _IHBAccount,
  _IHBGroupType,
  _IHBGroupAssignmentTP : redirected to composition child I_IHBConditionGroupAssgmtTP,
  _IHBConditionTP       : redirected to composition child I_IHBConditionTP
  }
```
