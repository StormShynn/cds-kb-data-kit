---
name: I_COSTCENTERTP_2
description: Cost CenterTP 2
app_component: CA-GTF-FXU-FI-CO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-FXU
  - interface-view
  - transactional-processing
  - cost-center
  - component:CA-GTF-FXU-FI-CO
  - lob:Cross-Application Components
  - bo:CostCenter
---
# I_COSTCENTERTP_2

**Cost CenterTP 2**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-CO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ControllingArea` | `ControllingArea` |
| key `CostCenter` | `CostCenter` |
| key `ValidityEndDate` | `ValidityEndDate` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ControllingAreaForEdit` | `ControllingAreaForEdit` |
| `CostCenterForEdit` | `CostCenterForEdit` |
| `ValidityEndDateForEdit` | `ValidityEndDateForEdit` |
| `CostCenterName` | `CostCenterName` |
| `CostCenterDescription` | `CostCenterDescription` |
| `IsBlkdForPrimaryCostsPosting` | `IsBlkdForPrimaryCostsPosting` |
| `IsBlockedForPlanPrimaryCosts` | `IsBlockedForPlanPrimaryCosts` |
| `CompanyCode` | `CompanyCode` |
| `BusinessArea` | `BusinessArea` |
| `CostCenterCategory` | `CostCenterCategory` |
| `CostCtrResponsiblePersonName` | `CostCtrResponsiblePersonName` |
| `CostCtrResponsibleUser` | `CostCtrResponsibleUser` |
| `CostCenterCurrency` | `CostCenterCurrency` |
| `CostingSheet` | `CostingSheet` |
| `TaxJurisdiction` | `TaxJurisdiction` |
| `ProfitCenter` | `ProfitCenter` |
| `Plant` | `Plant` |
| `LogicalSystem` | `LogicalSystem` |
| `CostCenterCreationDate` | `CostCenterCreationDate` |
| `CostCenterCreatedByUser` | `CostCenterCreatedByUser` |
| `IsBlkdForSecondaryCostsPosting` | `IsBlkdForSecondaryCostsPosting` |
| `IsBlockedForRevenuePosting` | `IsBlockedForRevenuePosting` |
| `IsBlockedForCommitmentPosting` | `IsBlockedForCommitmentPosting` |
| `IsBlockedForPlanSecondaryCosts` | `IsBlockedForPlanSecondaryCosts` |
| `IsBlockedForPlanRevenues` | `IsBlockedForPlanRevenues` |
| `CostCenterAllocationMethod` | `CostCenterAllocationMethod` |
| `ConsumptionQtyIsRecorded` | `ConsumptionQtyIsRecorded` |
| `Department` | `Department` |
| `Country` | `Country` |
| `FormOfAddress` | `FormOfAddress` |
| `AddressName` | `AddressName` |
| `AddressAdditionalName` | `AddressAdditionalName` |
| `CostCenterAddrName3` | `CostCenterAddrName3` |
| `CostCenterAddrName4` | `CostCenterAddrName4` |
| `CityName` | `CityName` |
| `District` | `District` |
| `StreetAddressName` | `StreetAddressName` |
| `POBox` | `POBox` |
| `PostalCode` | `PostalCode` |
| `POBoxPostalCode` | `POBoxPostalCode` |
| `Region` | `Region` |
| `Language` | `Language` |
| `TeleboxNumber` | `TeleboxNumber` |
| `PhoneNumber1` | `PhoneNumber1` |
| `PhoneNumber2` | `PhoneNumber2` |
| `FaxNumber` | `FaxNumber` |
| `TeletexNumber` | `TeletexNumber` |
| `TelexNumber` | `TelexNumber` |
| `DataCommunicationPhoneNumber` | `DataCommunicationPhoneNumber` |
| `CostCenterPrinterDestination` | `CostCenterPrinterDestination` |
| `CostCenterStandardHierArea` | `CostCenterStandardHierArea` |
| `CostCenterFunction` | `CostCenterFunction` |
| `CostCenterAlternativeFunction` | `CostCenterAlternativeFunction` |
| `FunctionalArea` | `FunctionalArea` |
| `ActyIndepFormulaPlanningTmpl` | `ActyIndepFormulaPlanningTmpl` |
| `ActyDepdntFormulaPlanningTmpl` | `ActyDepdntFormulaPlanningTmpl` |
| `ActyIndependentAllocationTmpl` | `ActyIndependentAllocationTmpl` |
| `ActyDependentAllocationTmpl` | `ActyDependentAllocationTmpl` |
| `ActlIndepStatisticalKeyFigures` | `ActlIndepStatisticalKeyFigures` |
| `ActlDepStatisticalKeyFigures` | `ActlDepStatisticalKeyFigures` |
| `JointVenture` | `JointVenture` |
| `JointVentureRecoveryCode` | `JointVentureRecoveryCode` |
| `JointVentureEquityType` | `JointVentureEquityType` |
| `JointVentureObjectType` | `JointVentureObjectType` |
| `JointVentureClass` | `JointVentureClass` |
| `JointVentureSubClass` | `JointVentureSubClass` |
| `BudgetCarryingCostCenter` | `BudgetCarryingCostCenter` |
| `AvailabilityControlProfile` | `AvailabilityControlProfile` |
| `AvailabilityControlIsActive` | `AvailabilityControlIsActive` |
| `Fund` | `Fund` |
| `GrantID` | `GrantID` |
| `FundIsFixAssigned` | `FundIsFixAssigned` |
| `GrantIDIsFixAssigned` | `GrantIDIsFixAssigned` |
| `FunctionalAreaIsFixAssigned` | `FunctionalAreaIsFixAssigned` |
| `CostCenterIsBudgetCarrying` | `CostCenterIsBudgetCarrying` |
| `ChangeDocObject` | `ChangeDocObject` |
| `CostCenterCreationTime` | `CostCenterCreationTime` |
| `CostCenterLastChangedByUser` | `CostCenterLastChangedByUser` |
| `CostCenterLastChangedOnDate` | `CostCenterLastChangedOnDate` |
| `CostCenterLastChangedAtTime` | `CostCenterLastChangedAtTime` |
| `_CostCenterTextTP` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Cost Center'

@VDM:{
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType.name: 'CostCenter', 
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    serviceQuality: #B, 
    sizeCategory: #L, 
    dataClass: #MASTER
  }
}

@Metadata.ignorePropagatedAnnotations: true

define root view entity I_CostCenterTP_2
  provider contract transactional_interface
  as projection on R_CostCenterTP as CostCenterTP
{
  key ControllingArea,
  key CostCenter,
  key ValidityEndDate,
      ValidityStartDate,
      @ObjectModel.editableFieldFor: 'ControllingArea'
      ControllingAreaForEdit,
      @ObjectModel.editableFieldFor: 'CostCenter'
      CostCenterForEdit,
      @ObjectModel.editableFieldFor: 'ValidityEndDate'
      ValidityEndDateForEdit,
      CostCenterName,
      CostCenterDescription,
      @Semantics.booleanIndicator: true
      IsBlkdForPrimaryCostsPosting,
      @Semantics.booleanIndicator: true
      IsBlockedForPlanPrimaryCosts,
      CompanyCode,
      BusinessArea,
      CostCenterCategory,
      CostCtrResponsiblePersonName,
      CostCtrResponsibleUser,
      CostCenterCurrency,
      CostingSheet,
      TaxJurisdiction,
      ProfitCenter,
      Plant,
      LogicalSystem,
      CostCenterCreationDate,
      CostCenterCreatedByUser,
      @Semantics.booleanIndicator: true
      IsBlkdForSecondaryCostsPosting,
      @Semantics.booleanIndicator: true
      IsBlockedForRevenuePosting,
      @Semantics.booleanIndicator: true
      IsBlockedForCommitmentPosting,
      @Semantics.booleanIndicator: true
      IsBlockedForPlanSecondaryCosts,
      @Semantics.booleanIndicator: true
      IsBlockedForPlanRevenues,
      CostCenterAllocationMethod,
      @Semantics.booleanIndicator: true
      ConsumptionQtyIsRecorded,
      Department,
//      SubsequentCostCenter,
//      ConditionUsage,
//      ConditionApplication,
//      CostCenterAccountingOverhead,
      Country,
      FormOfAddress,
      AddressName,
      AddressAdditionalName,
      CostCenterAddrName3,
      CostCenterAddrName4,
      CityName,
      District,
      StreetAddressName,
      POBox,
      PostalCode,
      POBoxPostalCode,
      Region,
      Language,
      TeleboxNumber,
      PhoneNumber1,
      PhoneNumber2,
      FaxNumber,
      TeletexNumber,
      TelexNumber,
      DataCommunicationPhoneNumber,
      CostCenterPrinterDestination,
      CostCenterStandardHierArea,
//      CostCollector,
//      CostCenterIsComplete,
//      IsStatisticalCostCenter,
//      ObjectInternalID,
      CostCenterFunction,
      CostCenterAlternativeFunction,
      FunctionalArea,
      ActyIndepFormulaPlanningTmpl,
      ActyDepdntFormulaPlanningTmpl,
      ActyIndependentAllocationTmpl,
      ActyDependentAllocationTmpl,
      ActlIndepStatisticalKeyFigures,
      ActlDepStatisticalKeyFigures,
      JointVenture,
      JointVentureRecoveryCode,
      JointVentureEquityType,
      JointVentureObjectType,
      JointVentureClass,
      JointVentureSubClass,
      BudgetCarryingCostCenter,
      AvailabilityControlProfile,
      AvailabilityControlIsActive,
      Fund,
      GrantID,
      FundIsFixAssigned,
      GrantIDIsFixAssigned,
      FunctionalAreaIsFixAssigned,
      CostCenterIsBudgetCarrying,
      ChangeDocObject,
      CostCenterCreationTime,
      CostCenterLastChangedByUser,
      CostCenterLastChangedOnDate,
      CostCenterLastChangedAtTime,

      /* Compositions */
      _CostCenterTextTP : redirected to composition child I_CostCenterTextTP_2
}
```
