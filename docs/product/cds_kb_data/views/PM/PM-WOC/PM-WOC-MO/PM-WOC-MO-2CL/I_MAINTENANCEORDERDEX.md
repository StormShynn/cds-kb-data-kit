---
name: I_MAINTENANCEORDERDEX
description: "Maintenance OrderDEX"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - data-extraction
  - maintenance-order
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
  - bo:MaintenanceOrder
---
# I_MAINTENANCEORDERDEX

**Maintenance OrderDEX**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrder` | ✓ | |  |  |  |  |
| `MaintOrderRoutingNumber` |  | |  |  |  |  |
| `MaintenanceOrderType` |  | |  |  |  |  |
| `MaintenanceOrderDesc` |  | |  |  |  |  |
| `MaintOrdBasicStartDate` |  | |  |  |  |  |
| `MaintOrdBasicStartTime` |  | |  |  |  |  |
| `MaintOrdBasicEndDate` |  | |  |  |  |  |
| `MaintOrdBasicEndTime` |  | |  |  |  |  |
| `ScheduledBasicStartDate` |  | |  |  |  |  |
| `ScheduledBasicStartTime` |  | |  |  |  |  |
| `ScheduledBasicEndDate` |  | |  |  |  |  |
| `ScheduledBasicEndTime` |  | |  |  |  |  |
| `MaintOrderReferenceDate` |  | |  |  |  |  |
| `MaintOrderReferenceTime` |  | |  |  |  |  |
| `MainWorkCompletedDateTime` |  | |  |  |  |  |
| `MaintenanceNotification` |  | |  |  |  |  |
| `OrdIsNotSchedldAutomatically` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `MainWorkCenterInternalID` |  | |  | `WorkCenterInternalID` |  |  |
| `MainWorkCenterTypeCode` |  | |  | `WorkCenterTypeCode` |  |  |
| `MainWorkCenter` |  | |  |  |  |  |
| `MainWorkCenterPlant` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | | `_LocationAccountAssignment` | `WorkCenterInternalID` |  |  |
| `WorkCenterTypeCode` |  | | `_LocationAccountAssignment` | `WorkCenterTypeCode` |  |  |
| `WorkCenter` |  | | `_LocationAccountAssignment._WorkCenter` | `WorkCenter` |  |  |
| `MaintenancePlanningPlant` |  | |  |  |  |  |
| `MaintenancePlant` |  | |  |  |  |  |
| `Assembly` |  | |  |  |  |  |
| `MaintOrdProcessPhaseCode` |  | |  |  |  |  |
| `MaintOrdProcessSubPhaseCode` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CostCenter` |  | | `_LocationAccountAssignment` | `CostCenter` |  |  |
| `CostingSheet` |  | |  |  |  |  |
| `ReferenceElement` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `AdditionalDeviceData` |  | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `FunctionalLocation` |  | |  | `cast ( _LocationAccountAssignment.FunctionalLocation as vdm_eam_tplnr )` |  |  |
| `MaintenanceOrderPlanningCode` |  | |  |  |  |  |
| `MaintenancePlannerGroup` |  | |  |  |  |  |
| `MaintenanceActivityType` |  | |  |  |  |  |
| `MaintPriority` |  | |  |  |  |  |
| `MaintPriorityType` |  | |  |  |  |  |
| `OrderProcessingGroup` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `ResponsibleCostCenter` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `MaintenanceRevision` |  | |  |  |  |  |
| `SerialNumber` |  | |  |  |  |  |
| `Product` |  | |  | `Material` |  |  |
| `SuperiorProjectNetwork` |  | |  |  |  |  |
| `OperationSystemCondition` |  | |  |  |  |  |
| `WBSElement` |  | | `_WBSElement` | `WBSElementExternalID` |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `ProjectInternalID` |  | |  | `cast( ProjectInternalID as ps_s4_proj_pspnr )` |  |  |
| `ControllingObjectClass` |  | |  |  |  |  |
| `MaintenanceOrderInternalID` |  | |  |  |  |  |
| `MaintenanceObjectList` |  | |  | `MaintenanceItemObjectList` |  |  |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  |  |  |
| `AssetLocation` |  | | `_LocationAccountAssignment` | `AssetLocation` |  |  |
| `AssetRoom` |  | | `_LocationAccountAssignment` | `AssetRoom` |  |  |
| `PlantSection` |  | | `_LocationAccountAssignment` | `PlantSection` |  |  |
| `ABCIndicator` |  | | `_LocationAccountAssignment` | `ABCIndicator` |  |  |
| `MaintObjectFreeDefinedAttrib` |  | | `_LocationAccountAssignment` | `MaintObjectFreeDefinedAttrib` |  |  |
| `BasicSchedulingType` |  | |  |  |  |  |
| `LatestAcceptableCompletionDate` |  | |  |  |  |  |
| `MaintOrdPersonResponsible` |  | |  |  |  |  |
| `LastChangeByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  | `cast( LastChangeDateTime as rslastchangedat preserving type )` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `OrderHasLongText` |  | |  |  |  |  |
| `MaintenanceOrderOverheadCode` |  | |  |  |  |  |
| `PlannedCostsCostingVariant` |  | |  |  |  |  |
| `ActualCostsCostingVariant` |  | |  |  |  |  |
| `MaintenancePlan` |  | |  |  |  |  |
| `MaintenanceCall` |  | |  |  |  |  |
| `MaintenanceItem` |  | |  |  |  |  |
| `LeadingOrder` |  | |  |  |  |  |
| `TaskListType` |  | |  |  |  |  |
| `TaskListGroup` |  | |  |  |  |  |
| `TaskListGroupCounter` |  | |  |  |  |  |
| `LocAcctAssgmtWBSElement` |  | | `_LocationAccountAssignment._WBSElementBasicData` | `WBSElementExternalID` |  |  |
| `LocAcctAssgmtWBSElmntIntID` |  | |  | `cast ( _LocationAccountAssignment.WBSElementInternalID as ps_s4_pspnr preserving type )` |  |  |
| `ControllingSettlementProfile` |  | | `_CtrlgObjectSettlementRule` | `ControllingSettlementProfile` |  |  |
| `LocAcctAssgmtBusinessArea` |  | | `_LocationAccountAssignment` | `BusinessArea` |  |  |
| `LocAcctAssgmtControllingArea` |  | | `_LocationAccountAssignment` | `ControllingArea` |  |  |
| `LocAcctAssgmtCompanyCode` |  | | `_LocationAccountAssignment` | `CompanyCode` |  |  |
| `MaintOrderProcessingContext` |  | |  |  |  |  |
| `_FunctionalLocation` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FunctionalLocation` | `I_FunctionalLocationData` | [0..1] |
| `_MaintenanceOrderExtension` | `E_MaintenanceOrder` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@VDM.usage.type: [ #TRANSACTIONAL_PROCESSING_SERVICE ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name:'MaintenanceOrder'
@Analytics: {
  dataCategory: #FACT,
  dataExtraction: {
    enabled: true,
        delta.changeDataCapture: {
            mapping:[
                      {
                        table: 'AFIH', role: #MAIN,
                        viewElement: ['MaintenanceOrder'],
                        tableElement: ['AUFNR']
                      },
                      {
                        table: 'AUFK', role:  #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement: ['MaintenanceOrder'],
                        tableElement: ['AUFNR']
                      },
                      {
                        table: 'AFKO', role:  #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement: ['MaintenanceOrder'],
                        tableElement: ['AUFNR']
                      }
                    ]
                 }
              }
          }
@EndUserText.label: 'Maintenance Order Data'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'ORI',
  dataSources: ['_MaintenanceOrderExtension'],
  quota: {
    maximumFields: 250,
    maximumBytes: 5000
  }
}
define view entity I_MaintenanceOrderDEX
  as select from I_MaintenanceOrder as MaintenanceOrder

  association [0..1] to I_FunctionalLocationData as _FunctionalLocation        on $projection.FunctionalLocation = _FunctionalLocation.FunctionalLocation
  association [0..1] to E_MaintenanceOrder       as _MaintenanceOrderExtension on $projection.MaintenanceOrder = _MaintenanceOrderExtension.MaintenanceOrder
{
  key  MaintenanceOrder,
       MaintOrderRoutingNumber,
       MaintenanceOrderType,
       MaintenanceOrderDesc,
       MaintOrdBasicStartDate,
       MaintOrdBasicStartTime,
       MaintOrdBasicEndDate,
       MaintOrdBasicEndTime,
       ScheduledBasicStartDate,
       ScheduledBasicStartTime,
       ScheduledBasicEndDate,
       ScheduledBasicEndTime,
       MaintOrderReferenceDate,
       MaintOrderReferenceTime,
       MainWorkCompletedDateTime,
       MaintenanceNotification,
       @Semantics.booleanIndicator: true
       OrdIsNotSchedldAutomatically,

       ControllingArea,
       WorkCenterInternalID                                                                    as MainWorkCenterInternalID,
       WorkCenterTypeCode                                                                      as MainWorkCenterTypeCode,
       MainWorkCenter,
       MainWorkCenterPlant,

       _LocationAccountAssignment.WorkCenterInternalID,
       _LocationAccountAssignment.WorkCenterTypeCode,

       _LocationAccountAssignment._WorkCenter.WorkCenter,
       MaintenancePlanningPlant,
       MaintenancePlant,

       Assembly,

       MaintOrdProcessPhaseCode,
       MaintOrdProcessSubPhaseCode,

       BusinessArea,
       CompanyCode,
       _LocationAccountAssignment.CostCenter,
       CostingSheet,
       ReferenceElement,
       FunctionalArea,
       AdditionalDeviceData,
       Equipment,
       _Equipment._EquipmentText[1:Language=$session.system_language].EquipmentName,
       cast ( _LocationAccountAssignment.FunctionalLocation as vdm_eam_tplnr )                 as FunctionalLocation,
       MaintenanceOrderPlanningCode,
       MaintenancePlannerGroup,
       MaintenanceActivityType,
       MaintPriority,
       MaintPriorityType,
       OrderProcessingGroup,
       ProfitCenter,
       ResponsibleCostCenter,
       Currency,
       MaintenanceRevision,
       SerialNumber,
       Material                                                                                as Product,
       SuperiorProjectNetwork,
       OperationSystemCondition,
       _WBSElement.WBSElementExternalID                                                        as WBSElement,
       WBSElementInternalID,
       cast( ProjectInternalID as ps_s4_proj_pspnr )                                           as ProjectInternalID,
       ControllingObjectClass,
       MaintenanceOrderInternalID,
       MaintenanceItemObjectList                                                               as MaintenanceObjectList,
       MaintObjectLocAcctAssgmtNmbr,
       _LocationAccountAssignment.AssetLocation,
       _LocationAccountAssignment.AssetRoom,
       _LocationAccountAssignment.PlantSection,
       _LocationAccountAssignment.ABCIndicator,
       _LocationAccountAssignment.MaintObjectFreeDefinedAttrib,
       BasicSchedulingType,
       LatestAcceptableCompletionDate,
       MaintOrdPersonResponsible,
       LastChangeByUser,
       @Semantics.systemDateTime.lastChangedAt: true
       cast( LastChangeDateTime as rslastchangedat preserving type )                           as LastChangeDateTime,
       CreatedByUser,
       OrderHasLongText,
       MaintenanceOrderOverheadCode,
       PlannedCostsCostingVariant,
       ActualCostsCostingVariant,
       MaintenancePlan,
       MaintenanceCall,
       MaintenanceItem,
       LeadingOrder,
       TaskListType,
       TaskListGroup,
       TaskListGroupCounter,
       _LocationAccountAssignment._WBSElementBasicData.WBSElementExternalID                    as LocAcctAssgmtWBSElement,
       cast ( _LocationAccountAssignment.WBSElementInternalID as ps_s4_pspnr preserving type ) as LocAcctAssgmtWBSElmntIntID,
       _CtrlgObjectSettlementRule.ControllingSettlementProfile,
       _LocationAccountAssignment.BusinessArea                                                 as LocAcctAssgmtBusinessArea,
       _LocationAccountAssignment.ControllingArea                                              as LocAcctAssgmtControllingArea,
       _LocationAccountAssignment.CompanyCode                                                  as LocAcctAssgmtCompanyCode,
       MaintOrderProcessingContext,

       _Equipment,
       _FunctionalLocation

}
```
