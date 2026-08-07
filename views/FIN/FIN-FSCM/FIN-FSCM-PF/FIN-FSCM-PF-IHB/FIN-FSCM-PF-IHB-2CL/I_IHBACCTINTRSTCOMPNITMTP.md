---
name: I_IHBACCTINTRSTCOMPNITMTP
description: Ihbacctintrstcompnitmtp
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
# I_IHBACCTINTRSTCOMPNITMTP

**Ihbacctintrstcompnitmtp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF-IHB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `IHBGroupAssignmentUUID` | ✓ | |  |  |
| `IHBObjectUUID` |  | |  |  |
| `IHBGroupAssignmentRefUUID` |  | |  |  |
| `IHBObjectCategory` |  | |  |  |
| `IHBObjectKeyUUID` |  | |  |  |
| `IHBAccountNumber` |  | |  |  |
| `IHBAccountCurrency` |  | |  |  |
| `IHBGroupAssgmtValidFromDate` |  | |  |  |
| `IHBGroupAssgmtValidToDate` |  | |  |  |
| `IHBObjectTotalChangedDateTime` |  | |  |  |
| `IHBObjectCreatedDateTime` |  | |  |  |
| `IHBObjectCreatedByUser` |  | |  |  |
| `IHBObjectChangedDateTime` |  | |  |  |
| `IHBObjectChangedByUser` |  | |  |  |
| `_IHBAccount` | | ✓ | | |
| `_IHBMasterDataObjectTP` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'IHB Interest Compensation Item - TP'
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['IHBGroupAssignmentUUID']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
  }
 define view entity I_IHBAcctIntrstCompnItmTP
  as projection on R_IHBGroupAssignmentTP as InhouseBankInterestCompnItem
{ 
key IHBGroupAssignmentUUID,
IHBObjectUUID,
IHBGroupAssignmentRefUUID,
IHBObjectCategory,
IHBObjectKeyUUID,
IHBAccountNumber,
IHBAccountCurrency,
IHBGroupAssgmtValidFromDate,
IHBGroupAssgmtValidToDate,
IHBObjectTotalChangedDateTime,
IHBObjectCreatedDateTime,
IHBObjectCreatedByUser,
IHBObjectChangedDateTime,
IHBObjectChangedByUser,
/* Associations */
_IHBAccount,
_IHBMasterDataObjectTP : redirected to parent I_IHBAcctIntrstCompnObjTP

}
```
