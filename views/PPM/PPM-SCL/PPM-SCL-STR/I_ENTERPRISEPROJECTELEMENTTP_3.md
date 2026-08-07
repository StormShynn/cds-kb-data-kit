---
name: I_ENTERPRISEPROJECTELEMENTTP_3
description: "Enterpriseprojectelementtp 3"
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
# I_ENTERPRISEPROJECTELEMENTTP_3

**Enterpriseprojectelementtp 3**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectElementUUID` | ✓ | |  |  |  |  |
| `ProjectElement` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `ProjectUUID` |  | |  |  |  |  |
| `ProjectElementDescription` |  | |  |  |  |  |
| `ParentObjectUUID` |  | |  |  |  |  |
| `ProjectElementOrdinalNumber` |  | |  |  |  |  |
| `ProcessingStatus` |  | |  |  |  |  |
| `EntProjectElementType` |  | |  |  |  |  |
| `PlannedStartDate` |  | |  |  |  |  |
| `PlannedEndDate` |  | |  |  |  |  |
| `ActualStartDate` |  | |  |  |  |  |
| `ActualEndDate` |  | |  |  |  |  |
| `ResponsibleCostCenter` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Location` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `FunctionalLocation` |  | |  |  |  |  |
| `FactoryCalendar` |  | |  |  |  |  |
| `CostingSheet` |  | |  |  |  |  |
| `InvestmentProfile` |  | |  |  |  |  |
| `WBSIsStatisticalWBSElement` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `WBSElementIsBillingElement` |  | |  |  |  |  |
| `ResultAnalysisInternalID` |  | |  |  |  |  |
| `IsProjectMilestone` |  | |  |  |  |  |
| `ForecastedEndDate` |  | |  |  |  |  |
| `MilestoneApprovalStatus` |  | |  |  |  |  |
| `IsMainMilestone` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `_EnterpriseProject` | | ✓ | | | | |
| `_SubProjElement` | | ✓ | | | | |
| `_ParentProjElement` | | ✓ | | | | |
| `_EntProjectElementJVA` | | ✓ | | | | |
| `_EntProjElmntBlkFunc` | | ✓ | | | | |
| `_EntProjectElmntPublicSector` | | ✓ | | | | |
| `_EntProjElmntDlvbrl` | | ✓ | | | | |
| `_EntProjElmntWorkItem` | | ✓ | | | | |
| `_EnterpriseProjectForUser` | | ✓ | | | | |

## Source Code

```abap
@VDM:{
    viewType: #TRANSACTIONAL,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
    authorizationCheck:     #CHECK,
    personalData.blocking:  #BLOCKED_DATA_EXCLUDED
}
@ObjectModel: {
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    usageType: {
      dataClass:       #MASTER,
      serviceQuality:  #C,
      sizeCategory:    #XL
    }
}

@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Enterprise Project Element - TP'

define view entity I_EnterpriseProjectElementTP_3
  as projection on I_EnterpriseProjectElementTP_2 as EnterpriseProjElem2

{

  key  ProjectElementUUID,
       ProjectElement,
       WBSElementInternalID,
       ProjectUUID,
       ProjectElementDescription,
       ParentObjectUUID,
       ProjectElementOrdinalNumber,
       ProcessingStatus,
       //EntProjectElementObjectType,
       EntProjectElementType,
       PlannedStartDate,
       PlannedEndDate,
       ActualStartDate,
       ActualEndDate,
       ResponsibleCostCenter,
       CompanyCode,
       ProfitCenter,
       FunctionalArea,
       ControllingArea,
       Plant,
       Location,
       TaxJurisdiction,
       FunctionalLocation,
       FactoryCalendar,
       CostingSheet,
       InvestmentProfile,
       WBSIsStatisticalWBSElement,
       CostCenter,
       WBSElementIsBillingElement,   
       // CE2308 RA Key Changes
       ResultAnalysisInternalID,    
       
       @Semantics.booleanIndicator
       IsProjectMilestone,
       //milestone
       ForecastedEndDate,
       MilestoneApprovalStatus,
       IsMainMilestone,
       
      //admin data
       CreatedByUser,
       CreationDateTime,
       LastChangeDateTime,
       LastChangedByUser,
//Association
       _EnterpriseProject              : redirected to parent  I_EnterpriseProjectTP_3,
       _SubProjElement                 : redirected to I_EnterpriseProjectElementTP_3,
       _ParentProjElement              : redirected to I_EnterpriseProjectElementTP_3,
       _EntProjectElementJVA           : redirected to composition child I_EntProjElmntJntVntrAcctTP_3,
       _EntProjElmntBlkFunc            : redirected to composition child I_EntProjElmntBlockFuncTP_3,
       _EntProjectElmntPublicSector    : redirected to composition child I_EntProjElmntPublicSectorTP_3,
       @Semantics.valueRange.maximum: '1'
       _EntProjElmntDlvbrl             : redirected to composition child I_EntProjElmntDlvbrlTP,
       _EntProjElmntWorkItem           : redirected to composition child I_EntProjElmntWorkItemTP,
       _EnterpriseProjectForUser
       

}
```
