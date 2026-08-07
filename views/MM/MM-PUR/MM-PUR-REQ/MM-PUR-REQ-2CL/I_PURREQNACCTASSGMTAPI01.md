---
name: I_PURREQNACCTASSGMTAPI01
description: Purreqnacctassgmtapi 01
app_component: MM-PUR-REQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-REQ
  - interface-view
  - component:MM-PUR-REQ-2CL
  - lob:Sourcing & Procurement
---
# I_PURREQNACCTASSGMTAPI01

**Purreqnacctassgmtapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseRequisition` | ✓ | |  |  |  |  |
| `PurchaseRequisitionItem` | ✓ | |  |  |  |  |
| `PurchaseReqnAcctAssgmtNumber` | ✓ | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `MasterFixedAsset` |  | |  |  |  |  |
| `ProjectNetwork` |  | |  |  |  |  |
| `Quantity` |  | |  |  |  |  |
| `BaseUnit` |  | | `_PurchaseRequisition_Api01` | `BaseUnit` |  |  |
| `MultipleAcctAssgmtDistrPercent` |  | |  |  |  |  |
| `PurReqnNetAmount` |  | |  |  |  |  |
| `PurReqnItemCurrency` |  | | `_PurchaseRequisition_Api01` | `PurReqnItemCurrency` |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `CostElement` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `SDDocument` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesDocumentItem` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `ScheduleLine` |  | |  |  |  |  |
| `SalesOrderScheduleLine` |  | |  |  |  |  |
| `FixedAsset` |  | |  |  |  |  |
| `ProcessOrder` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CostObject` |  | |  |  |  |  |
| `ProfitabilitySegment` |  | |  | `cast(I_PurReqnAcctAssgmt.ProfitabilitySegment as rkeobjnr_numc )` |  |  |
| `ProfitabilitySegment_2` |  | |  | `cast(I_PurReqnAcctAssgmt.ProfitabilitySegment as rkeobjnr_char )` |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  | `cast( I_PurReqnAcctAssgmt.WBSElementInternalID_2 as ps_psp_pnr )` |  |  |
| `WBSElementInternalID_2` |  | |  |  |  |  |
| `ProjectNetworkInternalID` |  | |  |  |  |  |
| `CommitmentItem` |  | |  | `cast(I_PurReqnAcctAssgmt.CommitmentItemShortID as fipos)` |  |  |
| `CommitmentItemShortID` |  | |  |  |  |  |
| `FundsCenter` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `GoodsRecipientName` |  | |  |  |  |  |
| `RealEstateObject` |  | |  |  |  |  |
| `REInternalFinNumber` |  | |  |  |  |  |
| `NetworkActivityInternalID` |  | |  |  |  |  |
| `PartnerAccountNumber` |  | |  |  |  |  |
| `JointVentureRecoveryCode` |  | |  |  |  |  |
| `SettlementReferenceDate` |  | |  |  |  |  |
| `OrderInternalID` |  | |  |  |  |  |
| `OrderIntBillOfOperationsItem` |  | |  |  |  |  |
| `EarmarkedFundsDocument` |  | |  |  |  |  |
| `ServiceDocID` |  | |  |  |  |  |
| `ServiceDocItemID` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `CostCtrActivityType` |  | |  |  |  |  |
| `BusinessProcess` |  | |  |  |  |  |
| `GrantID` |  | |  |  |  |  |
| `ValidityDate` |  | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `WBSElement` |  | |  |  |  |  |
| `WBSElementExternalID_2` |  | |  |  |  |  |
| `ProcmtHubWBSElementExternalID` |  | |  |  |  |  |
| `PurchaseRequisitionType` |  | | `_PurchaseRequisition_Api01` | `PurchaseRequisitionType` |  |  |
| `Plant` |  | | `_PurchaseRequisition_Api01` | `Plant` |  |  |
| `PurchasingOrganization` |  | | `_PurchaseRequisition_Api01` | `PurchasingOrganization` |  |  |
| `PurchasingGroup` |  | | `_PurchaseRequisition_Api01` | `PurchasingGroup` |  |  |
| `_PurchaseRequisitionItem` |  | |  | `_PurchaseRequisition_Api01` |  |  |
| `_PurchaseRequisition_Api01` | | ✓ | | | | |
| `_CommitmentItemShortID` | | ✓ | | | | |
| `_REObjectByIntFinNumber` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseRequisition_Api01` | `I_PurchaseRequisitionItemAPI01` | [0..1] |
| `_CommitmentItemShortID` | `I_CommitmentItemShortID` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRACCASMTAPI01'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass:#TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory:#L //Inserted by VDM CDS Suite Plugin
//@ObjectModel.representativeKey: 'PurchaseReqnAcctAssgmtNumber'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Account Assgmt in Purchase Requisition'
@AccessControl.personalData.blocking: #NOT_REQUIRED
define view I_PurReqnAcctAssgmtAPI01
  as select from I_PurReqnAcctAssgmt

  /* association [0..1] to I_PurchaseRequisitionItemAPI01 as _PurchaseRequisitionItem on  $projection.PurchaseRequisition     = _PurchaseRequisitionItem.PurchaseRequisition
                                                                                    and $projection.PurchaseRequisitionItem = _PurchaseRequisitionItem.PurchaseRequisitionItem*/
  association [0..1] to I_PurchaseRequisitionItemAPI01 as _PurchaseRequisition_Api01 on  $projection.PurchaseRequisition     = _PurchaseRequisition_Api01.PurchaseRequisition
                                                                                     and $projection.PurchaseRequisitionItem = _PurchaseRequisition_Api01.PurchaseRequisitionItem
  association [0..1] to I_CommitmentItemShortID        as _CommitmentItemShortID     on  $projection.CommitmentItemShortID   = _CommitmentItemShortID.CommitmentItemShortID
                                                                                     

{
  key I_PurReqnAcctAssgmt.PurchaseRequisition            as PurchaseRequisition,
  key I_PurReqnAcctAssgmt.PurchaseRequisitionItem        as PurchaseRequisitionItem,
  key I_PurReqnAcctAssgmt.PurchaseReqnAcctAssgmtNumber   as PurchaseReqnAcctAssgmtNumber,
      I_PurReqnAcctAssgmt.CostCenter,
      I_PurReqnAcctAssgmt.MasterFixedAsset,
      I_PurReqnAcctAssgmt.ProjectNetwork,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      I_PurReqnAcctAssgmt.Quantity,
      @Semantics.unitOfMeasure: true
      _PurchaseRequisition_Api01.BaseUnit,
      I_PurReqnAcctAssgmt.MultipleAcctAssgmtDistrPercent,
      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      I_PurReqnAcctAssgmt.PurReqnNetAmount,
      @Semantics.currencyCode: true
      _PurchaseRequisition_Api01.PurReqnItemCurrency,
      I_PurReqnAcctAssgmt.IsDeleted,
      I_PurReqnAcctAssgmt.CostElement,
      I_PurReqnAcctAssgmt.GLAccount,
      I_PurReqnAcctAssgmt.BusinessArea,
      I_PurReqnAcctAssgmt.SDDocument,
      I_PurReqnAcctAssgmt.SalesOrder,
      I_PurReqnAcctAssgmt.SalesDocumentItem,
      I_PurReqnAcctAssgmt.SalesOrderItem,
      I_PurReqnAcctAssgmt.ScheduleLine,
      I_PurReqnAcctAssgmt.SalesOrderScheduleLine,
      I_PurReqnAcctAssgmt.FixedAsset,
      I_PurReqnAcctAssgmt.ProcessOrder,
      I_PurReqnAcctAssgmt.OrderID,
      I_PurReqnAcctAssgmt.UnloadingPointName,
      I_PurReqnAcctAssgmt.ControllingArea,
      I_PurReqnAcctAssgmt.CostObject,
      
      @API.element.releaseState:#DECOMMISSIONED
      @API.element.successor:'ProfitabilitySegment_2'
      cast(I_PurReqnAcctAssgmt.ProfitabilitySegment as rkeobjnr_numc ) as ProfitabilitySegment,
      cast(I_PurReqnAcctAssgmt.ProfitabilitySegment as rkeobjnr_char ) as ProfitabilitySegment_2,
            
      I_PurReqnAcctAssgmt.ProfitCenter,
      
      @API.element.releaseState:#DEPRECATED
      @API.element.successor:'WBSElementInternalID_2'
      cast( I_PurReqnAcctAssgmt.WBSElementInternalID_2 as ps_psp_pnr ) as WBSElementInternalID,
      I_PurReqnAcctAssgmt.WBSElementInternalID_2,
      
      I_PurReqnAcctAssgmt.ProjectNetworkInternalID,

      @API.element.releaseState:#DEPRECATED
      @API.element.successor:'CommitmentItemShortID'
      cast(I_PurReqnAcctAssgmt.CommitmentItemShortID as fipos)                                 as CommitmentItem,
      I_PurReqnAcctAssgmt.CommitmentItemShortID,
      I_PurReqnAcctAssgmt.FundsCenter,
      I_PurReqnAcctAssgmt.Fund,
      I_PurReqnAcctAssgmt.FunctionalArea,
      I_PurReqnAcctAssgmt.CreationDate,
      I_PurReqnAcctAssgmt.GoodsRecipientName,
      
      @API.element.releaseState:#DEPRECATED
      @API.element.successor:'REInternalFinNumber'
      RealEstateObject,
      
      REInternalFinNumber,
      
      I_PurReqnAcctAssgmt.NetworkActivityInternalID,
      I_PurReqnAcctAssgmt.PartnerAccountNumber,
      I_PurReqnAcctAssgmt.JointVentureRecoveryCode,
      I_PurReqnAcctAssgmt.SettlementReferenceDate,
      I_PurReqnAcctAssgmt.OrderInternalID,
      I_PurReqnAcctAssgmt.OrderIntBillOfOperationsItem,
      I_PurReqnAcctAssgmt.EarmarkedFundsDocument,
      
      I_PurReqnAcctAssgmt.ServiceDocID,
      I_PurReqnAcctAssgmt.ServiceDocItemID,
      I_PurReqnAcctAssgmt.ServiceDocumentType,
      
      I_PurReqnAcctAssgmt.CostCtrActivityType,
      I_PurReqnAcctAssgmt.BusinessProcess,
      I_PurReqnAcctAssgmt.GrantID,
      I_PurReqnAcctAssgmt.ValidityDate,
      I_PurReqnAcctAssgmt.ChartOfAccounts,
      
      @API.element.releaseState:#DEPRECATED
      @API.element.successor:'WBSElementExternalID_2'
      I_PurReqnAcctAssgmt.WBSElement,
      I_PurReqnAcctAssgmt.WBSElementExternalID_2,
      
      I_PurReqnAcctAssgmt.ProcmtHubWBSElementExternalID,
      _PurchaseRequisition_Api01.PurchaseRequisitionType as PurchaseRequisitionType,
      _PurchaseRequisition_Api01.Plant                   as Plant,
      _PurchaseRequisition_Api01.PurchasingOrganization  as PurchasingOrganization,
      _PurchaseRequisition_Api01.PurchasingGroup         as PurchasingGroup,

      /*associations*/
      _REObjectByIntFinNumber,
      @API.element.releaseState:#DEPRECATED
      @API.element.successor:'_PurchaseRequisition_Api01'
     _PurchaseRequisition_Api01 as _PurchaseRequisitionItem,
     _PurchaseRequisition_Api01,
     _CommitmentItemShortID
     

}
```
