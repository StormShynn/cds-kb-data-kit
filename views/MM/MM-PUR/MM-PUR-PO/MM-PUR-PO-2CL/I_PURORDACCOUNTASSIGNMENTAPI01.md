---
name: I_PURORDACCOUNTASSIGNMENTAPI01
description: Purordaccountassignmentapi 01
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
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# I_PURORDACCOUNTASSIGNMENTAPI01

**Purordaccountassignmentapi 01**

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
| `Quantity` | `Quantity` |
| `PurchaseOrderQuantityUnit` | `OrderQuantityUnit` |
| `MultipleAcctAssgmtDistrPercent` | `MultipleAcctAssgmtDistrPercent` |
| `PurgDocNetAmount` | `PurgDocNetAmount` |
| `DocumentCurrency` | `DocumentCurrency` |
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
| `ProfitabilitySegment` | `cast( case when ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc )` |
| `ProfitabilitySegment_2` | `ProfitabilitySegment_2` |
| `ProfitCenter` | `ProfitCenter` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `WBSElementInternalID_2` | `WBSElementInternalID_2` |
| `ProjectNetworkInternalID` | `ProjectNetworkInternalID` |
| `CommitmentItem` | `CommitmentItem` |
| `CommitmentItemShortID` | `CommitmentItemShortID` |
| `FundsCenter` | `FundsCenter` |
| `Fund` | `Fund` |
| `FunctionalArea` | `FunctionalArea` |
| `GoodsRecipientName` | `GoodsRecipientName` |
| `IsFinallyInvoiced` | `IsFinallyInvoiced` |
| `RealEstateObject` | `cast (REInternalFinNumber as imkey preserving type )` |
| `REInternalFinNumber` | `REInternalFinNumber` |
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
| `EarmarkedFundsItem` | `EarmarkedFundsItem` |
| `EarmarkedFundsDocumentItem` | `EarmarkedFundsDocumentItem` |
| `ServiceDocumentType` | `ServiceDocumentType` |
| `ServiceDocument` | `ServiceDocument` |
| `ServiceDocumentItem` | `ServiceDocumentItem` |
| `ValidityDate` | `ValidityDate` |
| `ChartOfAccounts` | `ChartOfAccounts` |
| `_PurchaseOrder` | *Association* |
| `_PurchaseOrderItem` | *Association* |
| `_ControllingArea` | *Association* |
| `_CostCenterText` | *Association* |
| `_GLAccountText` | *Association* |
| `_BusinessAreaText` | *Association* |
| `_ProfitCenterText` | *Association* |
| `_TaxJurisdictionText` | *Association* |
| `_PurchaseOrderQuantityUnitText` | *Association* |
| `_DocumentCurrencyText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrder` | `I_PurchaseOrderAPI01` | [1..1] |
| `_PurchaseOrderItem` | `I_PurchaseOrderItemAPI01` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IMMPURORDAAAPI01'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType : #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Account Assignment in Purchase Order'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true

define view I_PurOrdAccountAssignmentAPI01 
    as select from I_PurOrdAccountAssignment

    association [1..1] to I_PurchaseOrderAPI01           as _PurchaseOrder          on  $projection.PurchaseOrder     = _PurchaseOrder.PurchaseOrder
    association [1..1] to I_PurchaseOrderItemAPI01       as _PurchaseOrderItem      on  $projection.PurchaseOrder     = _PurchaseOrderItem.PurchaseOrder
                                                                                    and $projection.PurchaseOrderItem = _PurchaseOrderItem.PurchaseOrderItem
                                                                                    


{
    key PurchaseOrder,
    key PurchaseOrderItem,
    key AccountAssignmentNumber,
        
        @ObjectModel.text.association: '_CostCenterText'  // CustomUI
        CostCenter,
        MasterFixedAsset,
        ProjectNetwork,
        @Semantics: { quantity.unitOfMeasure : 'PurchaseOrderQuantityUnit' }
        Quantity,
        @Semantics.unitOfMeasure: true
        @ObjectModel.text.association: '_PurchaseOrderQuantityUnitText'
        @Consumption.valueHelpDefinition: [{ entity: { name: 'I_UnitOfMeasureStdVH', element: 'UnitOfMeasure' }, useAsTemplate: true }]       //CustomUI
        OrderQuantityUnit as PurchaseOrderQuantityUnit,
        MultipleAcctAssgmtDistrPercent,
        @Semantics: { amount.currencyCode: 'DocumentCurrency' }
        PurgDocNetAmount,
        @Semantics.currencyCode: true
        @ObjectModel.text.association: '_DocumentCurrencyText'
        @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true }]       //CustomUI
        DocumentCurrency,
        IsDeleted,
        @ObjectModel.text.association: '_GLAccountText'  // CustomUI
        @Consumption.valueHelpDefinition: [{ entity: { name: 'I_GLAccountStdVH', element: 'GLAccount' }, useAsTemplate: true }]       //CustomUI
        GLAccount,
        @ObjectModel.text.association: '_BusinessAreaText'  // CustomUI
        @Consumption.valueHelpDefinition: [{ entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' }, useAsTemplate: true }]       //CustomUI
        BusinessArea,
        SalesOrder,
        SalesOrderItem,
        SalesOrderScheduleLine,
        @Consumption.valueHelpDefinition: [{ entity: { name: 'I_FixedAssetStdVH', element: 'FixedAsset' }, useAsTemplate: true }]       //CustomUI
        FixedAsset,
        OrderID,
        UnloadingPointName,
        @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' }, useAsTemplate: true }]       //CustomUI
        ControllingArea,
        CostObject,
        @API.element.releaseState: #DECOMMISSIONED
        @API.element.successor:    'ProfitabilitySegment_2'
        cast( case when ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' )       end as rkeobjnr_numc )  as ProfitabilitySegment,
        
        ProfitabilitySegment_2, 
        @ObjectModel.text.association: '_ProfitCenterText'  // CustomUI
        @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ProfitCenterVH', element: 'ProfitCenter' }, useAsTemplate: true }]       //CustomUI
        ProfitCenter,
        @API.element.releaseState: #DEPRECATED
        @API.element.successor:    'WBSElementInternalID_2'
        WBSElementInternalID,
        WBSElementInternalID_2,
        ProjectNetworkInternalID,
        @API.element.releaseState: #DEPRECATED
        @API.element.successor:    'CommitmentItemShortID'
        CommitmentItem,
        CommitmentItemShortID,
        FundsCenter,
        Fund,
        FunctionalArea,
        GoodsRecipientName,
        IsFinallyInvoiced,
        @API.element.releaseState: #DEPRECATED
        @API.element.successor: 'REInternalFinNumber'     
        cast   (REInternalFinNumber as imkey preserving type ) as RealEstateObject,
        REInternalFinNumber,
        NetworkActivityInternalID,
        PartnerAccountNumber,
        JointVentureRecoveryCode,
        SettlementReferenceDate,
        OrderInternalID,
        OrderIntBillOfOperationsItem,
        TaxCode,
        @ObjectModel.text.association: '_TaxJurisdictionText'  // CustomUI
        TaxJurisdiction,
        @Semantics: { amount.currencyCode: 'DocumentCurrency' }
        NonDeductibleInputTaxAmount,
        CostCtrActivityType,
        BusinessProcess,
        GrantID,
        BudgetPeriod,
        EarmarkedFundsDocument,
        @API.element.releaseState: #DEPRECATED
        @API.element.successor: 'EarmarkedFundsDocumentItem'
        EarmarkedFundsItem,
        EarmarkedFundsDocumentItem,
        ServiceDocumentType,
        ServiceDocument,
        ServiceDocumentItem,
        
    //  CustomUI additional keys for associations
    
        ValidityDate,
        ChartOfAccounts,  
    
        _PurchaseOrder,
        _PurchaseOrderItem,
    
        // CustomUI additions
        _ControllingArea,
        _CostCenterText,
        _GLAccountText,
        _BusinessAreaText,
        _ProfitCenterText,
        _TaxJurisdictionText,
        _PurchaseOrderQuantityUnitText,
        _DocumentCurrencyText
}
```
