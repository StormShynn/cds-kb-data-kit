---
name: I_PURCONTRACCOUNTASSGMTAPI01
description: Purcontraccountassgmtapi 01
app_component: MM-PUR-OA-CON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - component:MM-PUR-OA-CON-2CL
  - lob:Sourcing & Procurement
---
# I_PURCONTRACCOUNTASSGMTAPI01

**Purcontraccountassgmtapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-CON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PurchaseContract` | ✓ | |  |  |
| `PurchaseContractItem` | ✓ | |  |  |
| `AccountAssignmentNumber` | ✓ | |  |  |
| `CostCenter` |  | |  |  |
| `MasterFixedAsset` |  | |  |  |
| `ProjectNetwork` |  | |  |  |
| `Quantity` |  | |  |  |
| `OrderQuantityUnit` |  | | `_PurchaseContractItemAPI01` | `OrderQuantityUnit` |
| `MultipleAcctAssgmtDistrPercent` |  | |  |  |
| `PurgDocNetAmount` |  | |  |  |
| `DocumentCurrency` |  | | `_PurchaseContractAPI01` | `DocumentCurrency` |
| `IsDeleted` |  | |  |  |
| `GLAccount` |  | |  |  |
| `BusinessArea` |  | |  |  |
| `SalesOrder` |  | |  |  |
| `SalesOrderItem` |  | |  |  |
| `SalesOrderScheduleLine` |  | |  |  |
| `FixedAsset` |  | |  |  |
| `OrderID` |  | |  |  |
| `UnloadingPointName` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `CostObject` |  | |  |  |
| `ProfitCenter` |  | |  |  |
| `WBSElementInternalID` |  | |  | `cast( WBSElementInternalID_2 as ps_psp_pnr )` |
| `WBSElementInternalID_2` |  | |  |  |
| `CommitmentItem` |  | |  |  |
| `CommitmentItemShortID` |  | |  |  |
| `FunctionalArea` |  | |  |  |
| `GoodsRecipientName` |  | |  |  |
| `RealEstateObject` |  | |  | `cast( _RealEstateObject.REInternalFinNumber as imkey )` |
| `REInternalFinNumber` |  | | `_RealEstateObject` | `REInternalFinNumber` |
| `PartnerAccountNumber` |  | |  |  |
| `JointVentureRecoveryCode` |  | |  |  |
| `SettlementReferenceDate` |  | |  |  |
| `TaxCode` |  | |  |  |
| `TaxJurisdiction` |  | |  |  |
| `NonDeductibleInputTaxAmount` |  | |  |  |
| `CostCtrActivityType` |  | |  |  |
| `GrantID` |  | |  |  |
| `BudgetPeriod` |  | |  |  |
| `EarmarkedFundsDocument` |  | |  |  |
| `FundsCenter` |  | |  |  |
| `BusinessProcess` |  | |  |  |
| `_PurchaseContractAPI01` | | ✓ | | |
| `_PurchaseContractItemAPI01` | | ✓ | | |
| `_RealEstateObject` | | ✓ | | |
| `_CommitmentItemShortID` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseContractAPI01` | `I_PurchaseContractAPI01` | [1..1] |
| `_PurchaseContractItemAPI01` | `I_PurchaseContractItemAPI01` | [1..1] |
| `_RealEstateObject` | `I_REObjectByIntFinNumber` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPDACCTASSGMTAPI'
@VDM.viewType : #COMPOSITE //BASIC
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Account Assgmt in Purchase Contract'
define view I_PurContrAccountAssgmtAPI01
  as select from I_PurContrAccountAssgmt
  
  association [1..1] to I_PurchaseContractAPI01     as _PurchaseContractAPI01     on  _PurchaseContractAPI01.PurchaseContract = $projection.PurchaseContract

  association [1..1] to I_PurchaseContractItemAPI01 as _PurchaseContractItemAPI01 on  _PurchaseContractItemAPI01.PurchaseContract     = $projection.PurchaseContract
                                                                                  and _PurchaseContractItemAPI01.PurchaseContractItem = $projection.PurchaseContractItem
  association [1..1] to I_REObjectByIntFinNumber as _RealEstateObject   on  _RealEstateObject.REInternalFinNumber = $projection.reinternalfinnumber
{
  key PurchaseContract,
  key PurchaseContractItem,
  key AccountAssignmentNumber,
      CostCenter,
      MasterFixedAsset,
      ProjectNetwork,
      
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      Quantity,
      _PurchaseContractItemAPI01.OrderQuantityUnit,
      MultipleAcctAssgmtDistrPercent,
      
     @Semantics.amount.currencyCode: 'DocumentCurrency'
      PurgDocNetAmount,
      _PurchaseContractAPI01.DocumentCurrency,
      IsDeleted,
      GLAccount,
      BusinessArea,
      SalesOrder,
      SalesOrderItem,
      SalesOrderScheduleLine,
      FixedAsset,
      OrderID,
      UnloadingPointName,
      ControllingArea,
      CostObject,
      ProfitCenter,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID_2'
      cast( WBSElementInternalID_2 as ps_psp_pnr ) as WBSElementInternalID, // with conv. exit
      WBSElementInternalID_2, // no conv. exit
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CommitmentItemShortID'
      CommitmentItem,
      CommitmentItemShortID,
      FunctionalArea,
      GoodsRecipientName,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'REInternalFinNumber'
      cast( _RealEstateObject.REInternalFinNumber as imkey ) as RealEstateObject,
      _RealEstateObject.REInternalFinNumber,
      PartnerAccountNumber,
      JointVentureRecoveryCode,
      SettlementReferenceDate,
      TaxCode,
      TaxJurisdiction,
      
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NonDeductibleInputTaxAmount,
      CostCtrActivityType,
      GrantID,
      BudgetPeriod,
      EarmarkedFundsDocument,
      FundsCenter,
      BusinessProcess,

      _PurchaseContractAPI01,
      _RealEstateObject,
      _PurchaseContractItemAPI01,
      _CommitmentItemShortID
}
```
