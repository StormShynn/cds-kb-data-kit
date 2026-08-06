---
name: I_PURORDACCOUNTASSIGNMENTTP_2
description: Purordaccountassignmenttp 2
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - interface-view
  - transactional-processing
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_PURORDACCOUNTASSIGNMENTTP_2

**Purordaccountassignmenttp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchaseOrder` | `PurchaseOrder` |
| key `PurchaseOrderItem` | `PurchaseOrderItem` |
| key `AccountAssignmentNumber` | `AccountAssignmentNumber` |
| `CostCenter` | `CostCenter` |
| `MasterFixedAsset` | `MasterFixedAsset` |
| `ProjectNetwork` | `ProjectNetwork` |
| `NetworkActivity` | `NetworkActivity` |
| `OrderQuantityUnit` | `OrderQuantityUnit` |
| `Quantity` | `Quantity` |
| `MultipleAcctAssgmtDistrPercent` | `MultipleAcctAssgmtDistrPercent` |
| `DocumentCurrency` | `DocumentCurrency` |
| `PurgDocNetAmount` | `PurgDocNetAmount` |
| `IsDeleted` | `IsDeleted` |
| `GLAccount` | `GLAccount` |
| `BusinessArea` | `BusinessArea` |
| `SalesOrder` | `SalesOrder` |
| `SalesOrderItem` | `SalesOrderItem` |
| `SalesOrderScheduleLine` | `SalesOrderScheduleLine` |
| `FixedAsset` | `FixedAsset` |
| `OrderID` | `OrderID` |
| `UnloadingPointName` | `UnloadingPointName` |
| `ControllingArea` | `ControllingArea` |
| `CostObject` | `CostObject` |
| `ProfitabilitySegment` | `ProfitabilitySegment` |
| `ProfitCenter` | `ProfitCenter` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `WBSElementExternalID` | `WBSElementExternalID` |
| `ProjectNetworkInternalID` | `ProjectNetworkInternalID` |
| `CommitmentItemShortID` | `CommitmentItemShortID` |
| `FundsCenter` | `FundsCenter` |
| `Fund` | `Fund` |
| `FunctionalArea` | `FunctionalArea` |
| `LastChangedDate` | `LastChangedDate` |
| `GoodsRecipientName` | `GoodsRecipientName` |
| `IsFinallyInvoiced` | `IsFinallyInvoiced` |
| `NetworkActivityInternalID` | `NetworkActivityInternalID` |
| `PartnerAccountNumber` | `PartnerAccountNumber` |
| `JointVentureRecoveryCode` | `JointVentureRecoveryCode` |
| `SettlementReferenceDate` | `SettlementReferenceDate` |
| `OrderInternalID` | `OrderInternalID` |
| `OrderIntBillOfOperationsItem` | `OrderIntBillOfOperationsItem` |
| `TaxCode` | `TaxCode` |
| `TaxJurisdiction` | `TaxJurisdiction` |
| `NonDeductibleInputTaxAmount` | `NonDeductibleInputTaxAmount` |
| `CostCtrActivityType` | `CostCtrActivityType` |
| `BusinessProcess` | `BusinessProcess` |
| `GrantID` | `GrantID` |
| `BudgetPeriod` | `BudgetPeriod` |
| `EarmarkedFundsDocument` | `EarmarkedFundsDocument` |
| `EarmarkedFundsDocumentItem` | `EarmarkedFundsDocumentItem` |
| `ValidityDate` | `ValidityDate` |
| `ChartOfAccounts` | `ChartOfAccounts` |
| `ServiceDocumentType` | `ServiceDocumentType` |
| `ServiceDocument` | `ServiceDocument` |
| `ServiceDocumentItem` | `ServiceDocumentItem` |
| `CreationDate` | `CreationDate` |
| `IsAcctLineFinal` | `IsAcctLineFinal` |
| `AcctLineFinalReason` | `AcctLineFinalReason` |
| `CompanyCode` | `CompanyCode` |
| `_PurchaseOrderItem` | *Association* |
| `_PurchaseOrder` | *Association* |
| `_BusinessArea` | *Association* |
| `_BusinessAreaText` | *Association* |
| `_BusinessProcess` | *Association* |
| `_BusinessProcessText` | *Association* |
| `_CommitmentItemShortID` | *Association* |
| `_ControllingArea` | *Association* |
| `_CostCenter` | *Association* |
| `_CostCenterActivityType` | *Association* |
| `_CostCenterActivityTypeText` | *Association* |
| `_CostCenterText` | *Association* |
| `_FixedAssetWorklist` | *Association* |
| `_FunctionalArea` | *Association* |
| `_FunctionalAreaText` | *Association* |
| `_GLAccount` | *Association* |
| `_GLAccountText` | *Association* |
| `_ProfitCenter` | *Association* |
| `_ProfitCenterText` | *Association* |
| `_SalesDocumentScheduleLine` | *Association* |
| `_SalesOrder` | *Association* |
| `_SalesOrderItem` | *Association* |
| `_TaxCode` | *Association* |
| `_TaxCodeText` | *Association* |
| `_TaxJurisdiction` | *Association* |
| `_TaxJurisdictionText` | *Association* |
| `_WBSElement` | *Association* |
| `_WBSElementByInternalKey` | *Association* |
| `_PurchaseOrderQuantityUnitText` | *Association* |
| `_DocumentCurrencyText` | *Association* |

## Source Code

```abap
@EndUserText.label: 'PO Account Assignment Projection'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
define view entity I_PurOrdAccountAssignmentTP_2
  as projection on R_PurOrdAccountAssignmentTP
{
  key PurchaseOrder,
  key PurchaseOrderItem,
  key AccountAssignmentNumber,
      
      @ObjectModel.text.association: '_CostCenterText'
      CostCenter,
      MasterFixedAsset,
      ProjectNetwork,
      NetworkActivity,
      @ObjectModel.text.association: '_PurchaseOrderQuantityUnitText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true }]       //CustomUI
      OrderQuantityUnit,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      Quantity,
      MultipleAcctAssgmtDistrPercent,
      @ObjectModel.text.association: '_DocumentCurrencyText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true }]       //CustomUI
      DocumentCurrency,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      PurgDocNetAmount,
      IsDeleted,
      @ObjectModel.text.association: '_GLAccountText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' }, useAsTemplate: true }]       //CustomUI
      GLAccount,
      @ObjectModel.text.association: '_BusinessAreaText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' }, useAsTemplate: true }]       //CustomUI
      BusinessArea,
      SalesOrder,
      SalesOrderItem,
      SalesOrderScheduleLine,
      FixedAsset,
      OrderID,
      // OrderOperation,
      UnloadingPointName,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' }, useAsTemplate: true }]       //CustomUI
      ControllingArea,
      CostObject,
      ProfitabilitySegment,
      @ObjectModel.text.association: '_ProfitCenterText'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ProfitCenterVH', element: 'ProfitCenter' }, useAsTemplate: true }]       //CustomUI
      ProfitCenter,
      WBSElementInternalID,
      WBSElementExternalID,
      ProjectNetworkInternalID,
      CommitmentItemShortID,
      FundsCenter,
      Fund,
      FunctionalArea,
      @Consumption.hidden: true
      LastChangedDate,
      GoodsRecipientName,
      IsFinallyInvoiced,
      // RealEstateObject,
      NetworkActivityInternalID,
      PartnerAccountNumber,
      JointVentureRecoveryCode,
      SettlementReferenceDate,
      OrderInternalID,
      OrderIntBillOfOperationsItem,
      TaxCode,
      @ObjectModel.text.association: '_TaxJurisdictionText'
      TaxJurisdiction,

      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NonDeductibleInputTaxAmount,
      CostCtrActivityType,
      BusinessProcess,
      GrantID,
      BudgetPeriod,
      EarmarkedFundsDocument,
      //      EarmarkedFundsItem,
      EarmarkedFundsDocumentItem,
      ValidityDate,
      ChartOfAccounts,

      //      @Consumption.valueHelp: '_AcctgServiceDocumentTypeVH'
      ServiceDocumentType,

      //      @Consumption.valueHelp: '_AcctgServiceDocumentVH'
      ServiceDocument,

      //      @Consumption.valueHelp: '_AcctgServiceDocumentItemVH'
      ServiceDocumentItem,

      CreationDate,
      IsAcctLineFinal,
      AcctLineFinalReason,
      CompanyCode,

      /* Composition */
      _PurchaseOrderItem : redirected to parent I_PurchaseOrderItemTP_2,
      _PurchaseOrder     : redirected to I_PurchaseOrderTP_2,

      /* Associations */
//      _AcctgServiceDocumentItemVH,
//      _AcctgServiceDocumentTypeVH,
//      _AcctgServiceDocumentVH,
      _BusinessArea,
      _BusinessAreaText,
      _BusinessProcess,
      _BusinessProcessText,
      _CommitmentItemShortID,
      _ControllingArea,
      _CostCenter,
      _CostCenterActivityType,
      _CostCenterActivityTypeText,
      _CostCenterText,
      _FixedAssetWorklist,
      _FunctionalArea,
      _FunctionalAreaText,
      _GLAccount,
      _GLAccountText,
      _ProfitCenter,
      _ProfitCenterText,
      _SalesDocumentScheduleLine,
      _SalesOrder,
      _SalesOrderItem,
      _TaxCode,
      _TaxCodeText,
      _TaxJurisdiction,
      _TaxJurisdictionText,
      _WBSElement,
      _WBSElementByInternalKey,
      
      // Text associations for CustomUI
      _PurchaseOrderQuantityUnitText,
      _DocumentCurrencyText
}
```
