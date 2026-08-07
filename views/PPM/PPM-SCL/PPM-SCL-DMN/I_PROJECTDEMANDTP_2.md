---
name: I_PROJECTDEMANDTP_2
description: Projectdemandtp 2
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
  - project
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Project
---
# I_PROJECTDEMANDTP_2

**Projectdemandtp 2**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProjectDemandUUID` | ✓ | |  |  |
| `ProjectDemand` |  | |  |  |
| `ProjectDemandName` |  | |  |  |
| `ProjectDemandDescription` |  | |  |  |
| `ProjectDemandCategory` |  | |  |  |
| `ProjectDemandType` |  | |  |  |
| `ProjectUUID` |  | |  |  |
| `ReferencedObjectUUID` |  | |  |  |
| `ProjectDemandStatus` |  | |  |  |
| `ProjectDemandDateMaintenance` |  | |  |  |
| `ProjectDemandStartDate` |  | |  |  |
| `ProjectDemandEndDate` |  | |  |  |
| `ProjectDemandReleasedDateTime` |  | |  |  |
| `ProjDmndActualSupplyDate` |  | |  |  |
| `ProjectDemandPerUnitAmount` |  | |  | `} ProjectDemandPerUnitAmount` |
| `ProjectDemandRequestCurrency` |  | |  |  |
| `ProjDmndRequestedQuantityUnit` |  | |  |  |
| `PriceUnitQty` |  | |  |  |
| `ProjectDemandRequestNetAmount` |  | |  | `} ProjectDemandRequestNetAmount` |
| `ProjDmndReqNetAmountCurrency` |  | |  |  |
| `ProjectDemandOverallAmount` |  | |  | `} ProjectDemandOverallAmount` |
| `ProjDmndRequestedQuantity` |  | |  | `} ProjDmndRequestedQuantity` |
| `Plant` |  | |  |  |
| `PurchasingGroup` |  | |  |  |
| `PurchasingOrganization` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `ProjectDemandLastChangedByUser` |  | |  |  |
| `ProjDemandLastChangeDateTime` |  | |  |  |
| `ProjectDemandOverallRevenue` |  | |  | `} ProjectDemandOverallRevenue` |
| `ProjDmndOverallRevenueCurrency` |  | |  |  |
| `ProjDmndDataModelVersion` |  | |  |  |
| `_Material` | | ✓ | | |
| `_Service` | | ✓ | | |
| `_Work` | | ✓ | | |
| `_Expense` | | ✓ | | |
| `_WorkPackage` | | ✓ | | |
| `_ProjectDemandCurrency` | | ✓ | | |
| `_ProjectDemandNetCurrency` | | ✓ | | |
| `_ProjDmndQuantityUnit` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_PurchasingGroup` | | ✓ | | |
| `_PurchasingOrganisation` | | ✓ | | |
| `_MngProjDmndSrvcPurReqnOrd` | | ✓ | | |
| `_ProjDmndMatlPurReqnOrd` | | ✓ | | |
| `_ProjectDemandVH` | | ✓ | | |
| `_Project` | | ✓ | | |
| `_EnterpriseProjectForUser` | | ✓ | | |

## Source Code

```abap
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.dataMaintenance: #RESTRICTED
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: { sapObjectNodeType     : {name: 'ProjectDemand'},
                modelingPattern       : #TRANSACTIONAL_INTERFACE,
                supportedCapabilities : [#TRANSACTIONAL_PROVIDER],
                semanticKey           : [ 'ProjectDemand' ],
                representativeKey     : 'ProjectDemandUUID',
                usageType             : { serviceQuality : #B,
                                          dataClass      : #TRANSACTIONAL,
                                          sizeCategory   : #XL } }
@AbapCatalog.extensibility : {
                              extensible    : true,
                              elementSuffix : 'PDM',
                              quota.maximumFields:  300 ,
                              quota.maximumBytes  : 45000,
                              dataSources : [ 'ProjectDemand' ] 
                             }
                                          
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Project Demand - TP'

define root view entity I_ProjectDemandTP_2
  provider contract transactional_interface
  as projection on I_ProjectDemandTP as ProjectDemand 
{
  key ProjectDemandUUID,
      ProjectDemand,
      ProjectDemandName,
      ProjectDemandDescription,
                             // this is derived from the Type and set implicitly!
      ProjectDemandCategory, // category not mandatory as being set by determination
                             // can be changed only when created usually
      ProjectDemandType,
      ProjectUUID,
                             // can only be changed until transfer
      ReferencedObjectUUID,
                             // can only be changed until transfer
      ProjectDemandStatus,
      ProjectDemandDateMaintenance,
                             // can be changed only when not synched
                             // required before transfer
      ProjectDemandStartDate,
                             // can be changed only when not synched
                             // required before transfer
      ProjectDemandEndDate,
      ProjectDemandReleasedDateTime,
      ProjDmndActualSupplyDate,
      @Semantics: { amount : {currencyCode: 'ProjectDemandRequestCurrency'} } // can be changed only when created usually
      ProjectDemandPerUnitAmount,
                             // can be changed only when created usually
      ProjectDemandRequestCurrency,
                             // can be changed only when created usually
      ProjDmndRequestedQuantityUnit,
                             // can be changed only when created usually
      PriceUnitQty,
                             // can be changed only when created usually
      @Semantics: { amount : {currencyCode: 'ProjDmndReqNetAmountCurrency'} } // can be changed only when created usually
      ProjectDemandRequestNetAmount,
                             // can be changed only when created usually
      ProjDmndReqNetAmountCurrency,
      @Semantics: { amount : {currencyCode: 'ProjDmndReqNetAmountCurrency'} } // can be changed only when created usually
      ProjectDemandOverallAmount,
      @Semantics: { quantity : {unitOfMeasure: 'ProjDmndRequestedQuantityUnit'} }
      ProjDmndRequestedQuantity,
                             // Mandatory before requested
      Plant,
                             // Mandatory before requested
      PurchasingGroup,
      PurchasingOrganization,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,
      ProjectDemandLastChangedByUser,
      ProjDemandLastChangeDateTime,
      
      @Semantics: { amount : {currencyCode: 'ProjDmndOverallRevenueCurrency'} }
      ProjectDemandOverallRevenue, 
      ProjDmndOverallRevenueCurrency,
      ProjDmndDataModelVersion,
      
      /* Associations */
      //Compositions
      _Material : redirected to composition child I_ProjectDemandMaterialTP_2,
      _Service  : redirected to composition child I_ProjectDemandServiceTP_2,
      _Work     : redirected to composition child I_ProjectDemandResourceTP,
      _Expense  : redirected to composition child I_ProjectDemandExpenseTP,

      _WorkPackage,
      _ProjectDemandCurrency,
      _ProjectDemandNetCurrency,
      _ProjDmndQuantityUnit,
      _Plant,
      _PurchasingGroup,
      _PurchasingOrganisation,
      _MngProjDmndSrvcPurReqnOrd,
      _ProjDmndMatlPurReqnOrd,
      _ProjectDemandVH,
      _Project,
      @Consumption.hidden: true
      _EnterpriseProjectForUser      
}
```
