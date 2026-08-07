---
name: I_ENTERPRISEPROJECTTP_3
description: Enterpriseprojecttp 3
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - transactional-processing
  - project
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# I_ENTERPRISEPROJECTTP_3

**Enterpriseprojecttp 3**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProjectUUID` | ✓ | |  |  |
| `ProjectSummaryTaskUUID` |  | |  |  |
| `ProjectInternalID` |  | |  |  |
| `Project` |  | |  |  |
| `ProjectCategory` |  | |  |  |
| `ProjectDescription` |  | |  |  |
| `EnterpriseProjectType` |  | |  |  |
| `PriorityCode` |  | |  |  |
| `ProjectStartDate` |  | |  |  |
| `ProjectEndDate` |  | |  |  |
| `ActualStartDate` |  | |  |  |
| `ActualEndDate` |  | |  |  |
| `CustomerUUID` |  | |  |  |
| `EnterpriseProjectServiceOrg` |  | |  |  |
| `EntProjectIsConfidential` |  | |  |  |
| `RestrictedTimePosting` |  | |  |  |
| `ProcessingStatus` |  | |  |  |
| `ResponsibleCostCenter` |  | |  |  |
| `ProfitCenter` |  | |  |  |
| `ProjectProfileCode` |  | |  |  |
| `FunctionalArea` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `Plant` |  | |  |  |
| `Location` |  | |  |  |
| `TaxJurisdiction` |  | |  |  |
| `ProjectCurrency` |  | |  |  |
| `AvailabilityControlProfile` |  | |  |  |
| `AvailabilityControlIsActive` |  | |  |  |
| `FunctionalLocation` |  | |  |  |
| `IsBillingRelevant` |  | |  |  |
| `InvestmentProfile` |  | |  |  |
| `ProjectLastChangedDateTime` |  | |  |  |
| `EntProjIsMultiSlsOrdItmsEnbld` |  | |  |  |
| `ResultAnalysisInternalID` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `EntProjHasProjectStockEnabled` |  | |  |  |
| `InventorySpecialStockValnType` |  | |  |  |
| `_EnterpriseProjectElement` | | ✓ | | |
| `_EnterpriseProjectJVA` | | ✓ | | |
| `_EntProjectPublicSector` | | ✓ | | |
| `_EntProjBlkFunc` | | ✓ | | |
| `_EntProjRole` | | ✓ | | |
| `_EntProjTeamMember` | | ✓ | | |
| `_EnterpriseProjectForUser` | | ✓ | | |

## Source Code

```abap
@AccessControl: {
    authorizationCheck:     #CHECK,
    personalData.blocking:  #BLOCKED_DATA_EXCLUDED
}

@VDM:{
    lifecycle.contract.type: #PUBLIC_LOCAL_API,
    viewType:#TRANSACTIONAL
}
@ObjectModel: {
    sapObjectNodeType:{
      name: 'EnterpriseProject'},
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern       : #TRANSACTIONAL_INTERFACE,
    usageType: {
      dataClass:       #MASTER,
      serviceQuality:  #C,
      sizeCategory:    #XL
    }
}

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Enterprise Project - TP'

define root view entity I_EnterpriseProjectTP_3  
  provider contract transactional_interface
  as projection on I_EnterpriseProjectTP_2 as EnterpriseProject
  
{
  key ProjectUUID,
      @Consumption.hidden: true
      ProjectSummaryTaskUUID,
      ProjectInternalID,
      @ObjectModel.text.element: ['ProjectDescription']
      Project,
      @Consumption.hidden: true
      ProjectCategory,
      @Semantics.text: true      
      ProjectDescription,
      EnterpriseProjectType,
      PriorityCode,
      ProjectStartDate,
      ProjectEndDate,
      ActualStartDate,
      ActualEndDate,  
      CustomerUUID,    
      EnterpriseProjectServiceOrg,
      EntProjectIsConfidential,
      RestrictedTimePosting,      
      ProcessingStatus,
      ResponsibleCostCenter,
      ProfitCenter,
      ProjectProfileCode,
      FunctionalArea,
      CompanyCode,
      ControllingArea,
      Plant,
      Location,
      TaxJurisdiction,
      ProjectCurrency,
      AvailabilityControlProfile,
      AvailabilityControlIsActive,
      FunctionalLocation,
      IsBillingRelevant,
      InvestmentProfile,
      ProjectLastChangedDateTime,
      EntProjIsMultiSlsOrdItmsEnbld,
      ResultAnalysisInternalID,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,
      EntProjHasProjectStockEnabled,
      InventorySpecialStockValnType,

      _EnterpriseProjectElement : redirected to composition child I_EnterpriseProjectElementTP_3,
      _EnterpriseProjectJVA     : redirected to composition child I_EntProjJntVntrAcctgTP_3,
      _EntProjectPublicSector   : redirected to composition child I_EntProjectPublicSectorTP_3,
      _EntProjBlkFunc           : redirected to composition child I_EntProjectBlockFunctionTP_3,
      _EntProjRole              : redirected to composition child I_EnterpriseProjectRoleTP_3,
      _EntProjTeamMember        : redirected to composition child I_EntProjectTeamMemberTP_3,
      _EnterpriseProjectForUser

}
```
