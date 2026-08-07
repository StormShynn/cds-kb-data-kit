---
name: I_SERVICECOSTRATETP
description: Servicecostratetp
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - interface-view
  - transactional-processing
  - service
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_SERVICECOSTRATETP

**Servicecostratetp**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingCostRateUUID` | ✓ | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ActivityType` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ReceivingCompanyCode` |  | |  |  |  |  |
| `IsIntercompanyRate` |  | |  |  |  |  |
| `ValidityStartFiscalYear` |  | |  |  |  |  |
| `ValidityStartFiscalPeriod` |  | |  |  |  |  |
| `ValidityEndFiscalYear` |  | |  |  |  |  |
| `ValidityEndFiscalPeriod` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `TimeSheetOvertimeCategory` |  | |  |  |  |  |
| `ServiceCostLevel` |  | |  |  |  |  |
| `PersonnelNumber` |  | |  |  |  |  |
| `WorkItem` |  | |  |  |  |  |
| `WBSElementExternalID` |  | |  |  |  |  |
| `WBSElementDescription` |  | |  |  |  |  |
| `CostRateVarblAmount` |  | |  |  |  |  |
| `CostRateScaleFactor` |  | |  |  |  |  |
| `CostCtrActivityTypeQtyUnit` |  | |  |  |  |  |
| `Ledger` |  | |  |  |  |  |
| `CostRateIsOverwriteMode` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_CostCtrActivityTypeText` | | ✓ | | | | |
| `_ControllingAreaText` | | ✓ | | | | |
| `_ReceivingCompanyCode` | | ✓ | | | | |
| `_TimeSheetOvertimeCatText` | | ✓ | | | | |
| `_CurrentServiceCostLevelText` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_WorkItemText` | | ✓ | | | | |
| `_LedgerText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}
@EndUserText.label: 'Service Cost Rate - TP'
@VDM:{
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType.name: 'AccountingCostRate',
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER,
    #UI_PROVIDER_PROJECTION_SOURCE
  ],
  usageType: {
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
  }
}
@Metadata.ignorePropagatedAnnotations: true
@Feature: 'FINS_PARALLEL_ACCOUNTING_BF'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define root view entity I_ServiceCostRateTP
  provider contract transactional_interface
  as projection on R_ServiceCostRateTP as ServiceCostRate
{
  key AccountingCostRateUUID,
      @ObjectModel.text.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeVH', element: 'CompanyCode' }, useAsTemplate: true } ]
      CompanyCode,
      // @ObjectModel.text.association: '_CostCenterText'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterVH', element: 'CostCenter' }, useAsTemplate: true } ] // TODO: VH not released as C1
      CostCenter,
      @ObjectModel.text.association: '_CostCtrActivityTypeText'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterActivityTypeVH', element: 'CostCtrActivityType' }, useAsTemplate: true } ] // TODO: VH not released as C1
      ActivityType,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Currency', element: 'Currency' }, useAsTemplate: true } ]
      Currency,
      @ObjectModel.text.association: '_ControllingAreaText'
      ControllingArea,

      @ObjectModel.text.association: '_ReceivingCompanyCode'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeVH', element: 'CompanyCode' }, useAsTemplate: true } ]
      ReceivingCompanyCode,
      IsIntercompanyRate,

      ValidityStartFiscalYear,
      ValidityStartFiscalPeriod,
      ValidityEndFiscalYear,
      ValidityEndFiscalPeriod,
      
      ValidityStartDate,
      ValidityEndDate,

      @ObjectModel.text.association: '_TimeSheetOvertimeCatText'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_TimeSheetOvertimeCat', element: 'TimeSheetOvertimeCategory' }, useAsTemplate: true } ]
      TimeSheetOvertimeCategory,
      @ObjectModel.text.association: '_CurrentServiceCostLevelText'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ServiceCostLevelVH', element: 'ServiceCostLevel' }, useAsTemplate: true } ] // TODO: VH not released as C1
      ServiceCostLevel,
      @ObjectModel.text.association: '_PersonWorkAgreement'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkAssignmentsVH', element: 'WorkAssignment' }, useAsTemplate: true } ] // TODO: VH not released as C1
      PersonnelNumber,
      // @ObjectModel.text.association: '_WorkItemText'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'C_WorkItemVH', element: 'WorkItem'  }, useAsTemplate: true } ]
      WorkItem,
      @ObjectModel.text.element: ['WBSElementDescription']
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementExternalID' }, useAsTemplate: true } ]
      WBSElementExternalID,
      WBSElementDescription,
      
      @Semantics.amount.currencyCode: 'Currency'
      CostRateVarblAmount,
      CostRateScaleFactor,
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'C_CostCtrActyTypeUnitOfMsrVH', element: 'UnitOfMeasure' }, useAsTemplate: true } ]
      CostCtrActivityTypeQtyUnit,

      @ObjectModel.text.association: '_LedgerText'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_StdLdgrWthoutShadowVH', element: 'Ledger' }, useAsTemplate: true } ] // TODO: VH not released as C1
      Ledger,
      CostRateIsOverwriteMode,
      
      _CompanyCode,
      // _CostCenterText,
      _CostCtrActivityTypeText,
      _ControllingAreaText,
      _ReceivingCompanyCode,
      _TimeSheetOvertimeCatText,
      _CurrentServiceCostLevelText,
      _PersonWorkAgreement,
      _WorkItemText,
      _LedgerText
}
```
