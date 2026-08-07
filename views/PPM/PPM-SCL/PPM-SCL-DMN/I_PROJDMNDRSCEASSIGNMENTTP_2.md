---
name: I_PROJDMNDRSCEASSIGNMENTTP_2
description: Projdmndrsceassignmenttp 2
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - transactional-processing
  - component:PPM-SCL-DMN
  - lob:Other
---
# I_PROJDMNDRSCEASSIGNMENTTP_2

**Projdmndrsceassignmenttp 2**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProjDmndRsceAssgmtUUID` | ✓ | |  |  |
| `ProjectDemandWorkUUID` |  | |  |  |
| `ProjectDemandUUID` |  | |  |  |
| `ProjDmndRsceAssgmt` |  | |  |  |
| `ProjDmndRsceAssgmtQuantity` |  | |  | `} ProjDmndRsceAssgmtQuantity` |
| `ProjDmndRsceAssgmtQuantityUnit` |  | |  |  |
| `ProjectUUID` |  | |  |  |
| `ReferencedObjectUUID` |  | |  |  |
| `ProjectDemandSupplyIdentifier` |  | |  |  |
| `ProjectDemandSupplyDeliveryOrg` |  | |  |  |
| `ProjectDemandSourceOfSupply` |  | |  |  |
| `ProjAssgmtLastUpdateSource` |  | |  |  |
| `ProjDmndRsceWorkAssgmtOID` |  | |  |  |
| `ProjDmndRsceWrkfrcPersonOID` |  | |  |  |
| `ProjDmndRsceAssgmtStartDate` |  | |  |  |
| `ProjDmndRsceAssgmtEndDate` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `_Root` | | ✓ | | |
| `_Work` | | ✓ | | |
| `_RsceAssgmtQuantityUnit` | | ✓ | | |
| `_AssgmtDistribution` | | ✓ | | |
| `_PersonWorkAgreement` | | ✓ | | |

## Source Code

```abap
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel: { modelingPattern       : #TRANSACTIONAL_INTERFACE,
                semanticKey           : [ 'ProjDmndRsceAssgmt' ],
                supportedCapabilities : [#TRANSACTIONAL_PROVIDER],
                usageType             : { serviceQuality : #A,
                                          dataClass      : #TRANSACTIONAL,
                                          sizeCategory   : #XL  } }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Resource Assignment to Resource Dmnd - TP'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ] 

define view entity I_ProjDmndRsceAssignmentTP_2
  as projection on I_ProjDmndResourceAssignmentTP as DemandResourceAssignment
{
      @UI.hidden: true
  key ProjDmndRsceAssgmtUUID,
      @UI.hidden: true
      ProjectDemandWorkUUID,
      @UI.hidden: true
      ProjectDemandUUID,
      ProjDmndRsceAssgmt,
      @Semantics: { quantity : {unitOfMeasure: 'ProjDmndRsceAssgmtQuantityUnit'} }
      ProjDmndRsceAssgmtQuantity,
      ProjDmndRsceAssgmtQuantityUnit,
      ProjectUUID,
      ReferencedObjectUUID,
      ProjectDemandSupplyIdentifier,
      ProjectDemandSupplyDeliveryOrg,
      ProjectDemandSourceOfSupply,
      ProjAssgmtLastUpdateSource,
      ProjDmndRsceWorkAssgmtOID,
      ProjDmndRsceWrkfrcPersonOID,
      ProjDmndRsceAssgmtStartDate,
      ProjDmndRsceAssgmtEndDate,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,

      /* Associations */
      _Root               : redirected to I_ProjectDemandTP_2,
      _Work               : redirected to parent I_ProjectDemandResourceTP,
      _RsceAssgmtQuantityUnit,
      _AssgmtDistribution : redirected to composition child I_ProjDmndRsceAssgmtDistrTP,
      _PersonWorkAgreement
}
```
