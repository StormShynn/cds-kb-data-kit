---
name: I_SALESORDERITEMTP
description: "Sales OrderITEMTP"
app_component: SD-SLS-API-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-API
  - interface-view
  - transactional-processing
  - sales-order
  - item-level
  - component:SD-SLS-API-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERITEMTP

**Sales OrderITEMTP**

| Property | Value |
|---|---|
| App Component | `SD-SLS-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` | ✓ | |  |  |  |  |
| `SalesOrderItem` | ✓ | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `SalesOrderItemCategory` |  | |  |  |  |  |
| `SalesOrderItemText` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `MaterialByCustomer` |  | |  |  |  |  |
| `InternationalArticleNumber` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `RequestedDeliveryDate` |  | |  |  |  |  |
| `ConfirmedDeliveryDate` |  | |  |  |  |  |
| `ConfdDelivQtyInOrderQtyUnit` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `RequestedQuantity` |  | |  |  |  |  |
| `RequestedQuantityUnit` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `ShippingPoint` |  | |  |  |  |  |
| `ShippingType` |  | |  |  |  |  |
| `Route` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `PartialDeliveryIsAllowed` |  | |  |  |  |  |
| `MaxNmbrOfPartialDelivery` |  | |  |  |  |  |
| `DeliveryDateQuantityIsFixed` |  | |  |  |  |  |
| `DeliveryDateTypeRule` |  | |  |  |  |  |
| `ReceivingPoint` |  | |  |  |  |  |
| `DeliveryGroup` |  | |  |  |  |  |
| `ProductConfiguration` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `OrderCombinationIsAllowed` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `MaterialPricingGroup` |  | |  |  |  |  |
| `ItemBillingBlockReason` |  | |  |  |  |  |
| `SalesDocumentRjcnReason` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `TaxAmount` |  | |  |  |  |  |
| `SDProcessStatus` |  | |  |  |  |  |
| `SDDocumentRejectionStatus` |  | |  |  |  |  |
| `DeliveryStatus` |  | |  |  |  |  |
| `BillingBlockStatus` |  | |  |  |  |  |
| `ItemGeneralIncompletionStatus` |  | |  |  |  |  |
| `DeliveryBlockStatus` |  | |  |  |  |  |
| `SlsOrderItemDownPaymentStatus` |  | |  |  |  |  |
| `OrderRelatedBillingStatus` |  | |  |  |  |  |
| `ChmlCmplncStatus` |  | |  |  |  |  |
| `DangerousGoodsStatus` |  | |  |  |  |  |
| `SafetyDataSheetStatus` |  | |  |  |  |  |
| `TrdCmplncEmbargoSts` |  | |  |  |  |  |
| `TrdCmplncSnctndListChkSts` |  | |  |  |  |  |
| `OvrlTrdCmplncLegalCtrlChkSts` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `MatlAccountAssignmentGroup` |  | |  |  |  |  |
| `SDPricingProcedure` |  | |  |  |  |  |
| `ItemCategoryGroup` |  | |  |  |  |  |
| `SDDocumentItemUsage` |  | |  |  |  |  |
| `HigherLevelItemCategory` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `SalesOrderType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_SalesOrder` | | ✓ | | | | |
| `_ItemPartner` | | ✓ | | | | |
| `_ItemText` | | ✓ | | | | |
| `_ItemPricingElement` | | ✓ | | | | |
| `_ScheduleLine` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Order Item - TP'
@ObjectModel.sapObjectNodeType.name: 'SalesOrderItem'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #C,
        sizeCategory:   #L
    },
    semanticKey:           ['SalesOrder', 'SalesOrderItem'],
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDI', 
  dataSources: ['SalesOrderItem'],  
  quota: {
    maximumFields: 204, 
    maximumBytes: 6800
  }
} 

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SalesOrderItemTP
  as projection on R_SalesOrderItemTP as SalesOrderItem  
{
  key SalesOrderItem.SalesOrder,
  key SalesOrderItem.SalesOrderItem,

      SalesOrderItem.HigherLevelItem,
      SalesOrderItem.SalesOrderItemCategory,
      SalesOrderItem.SalesOrderItemText,
      SalesOrderItem.Product,
      SalesOrderItem.ProductGroup,
      SalesOrderItem.MaterialByCustomer,
      SalesOrderItem.InternationalArticleNumber,
      SalesOrderItem.PurchaseOrderByCustomer,
      SalesOrderItem.RequestedDeliveryDate,
      SalesOrderItem.ConfirmedDeliveryDate,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesOrderItem.ConfdDelivQtyInOrderQtyUnit,
      SalesOrderItem.OrderQuantityUnit,

      @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
      SalesOrderItem.RequestedQuantity,
      SalesOrderItem.RequestedQuantityUnit,

      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SalesOrderItem.ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SalesOrderItem.ItemNetWeight,
      SalesOrderItem.ItemWeightUnit,

      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      SalesOrderItem.ItemVolume,
      SalesOrderItem.ItemVolumeUnit,

      SalesOrderItem.PricingDate,
      SalesOrderItem.ServicesRenderedDate,
      SalesOrderItem.BillingDocumentDate,
      SalesOrderItem.FixedValueDate,
      SalesOrderItem.CustomerGroup,
      SalesOrderItem.Batch,
      SalesOrderItem.Plant,
      SalesOrderItem.StorageLocation,
      SalesOrderItem.ShippingPoint,
      SalesOrderItem.ShippingType,
      SalesOrderItem.Route,
      SalesOrderItem.DeliveryPriority,
      SalesOrderItem.PartialDeliveryIsAllowed,
      SalesOrderItem.MaxNmbrOfPartialDelivery,
      SalesOrderItem.DeliveryDateQuantityIsFixed,
      SalesOrderItem.DeliveryDateTypeRule,
      SalesOrderItem.ReceivingPoint,
      SalesOrderItem.DeliveryGroup,  
      SalesOrderItem.ProductConfiguration,    
      SalesOrderItem.IncotermsClassification,
      SalesOrderItem.IncotermsLocation1,
      SalesOrderItem.IncotermsLocation2,
      SalesOrderItem.OrderCombinationIsAllowed,
      SalesOrderItem.IncotermsVersion,
      SalesOrderItem.CustomerPaymentTerms,
      SalesOrderItem.CustomerPriceGroup,
      SalesOrderItem.MaterialPricingGroup,
      SalesOrderItem.ItemBillingBlockReason,
      SalesOrderItem.SalesDocumentRjcnReason,
      SalesOrderItem.TransactionCurrency,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesOrderItem.NetAmount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesOrderItem.TaxAmount,

      SalesOrderItem.SDProcessStatus,
      SalesOrderItem.SDDocumentRejectionStatus,
      SalesOrderItem.DeliveryStatus,
      SalesOrderItem.BillingBlockStatus,
      SalesOrderItem.ItemGeneralIncompletionStatus,
      SalesOrderItem.DeliveryBlockStatus,
      SalesOrderItem.SlsOrderItemDownPaymentStatus,
      SalesOrderItem.OrderRelatedBillingStatus,
      SalesOrderItem.ChmlCmplncStatus,
      SalesOrderItem.DangerousGoodsStatus,
      SalesOrderItem.SafetyDataSheetStatus,
      SalesOrderItem.TrdCmplncEmbargoSts,
      SalesOrderItem.TrdCmplncSnctndListChkSts,      
      SalesOrderItem.OvrlTrdCmplncLegalCtrlChkSts,
      SalesOrderItem.BusinessArea,
      SalesOrderItem.ProfitCenter,
      SalesOrderItem.ControllingArea,
      SalesOrderItem.MatlAccountAssignmentGroup,
      SalesOrderItem.SDPricingProcedure,
      SalesOrderItem.ItemCategoryGroup,
      SalesOrderItem.SDDocumentItemUsage,
      SalesOrderItem.HigherLevelItemCategory,
      SalesOrderItem.ReferenceSDDocument,
      SalesOrderItem.ReferenceSDDocumentItem,
      SalesOrderItem.ReferenceSDDocumentCategory,
      SalesOrderItem.OriginallyRequestedMaterial,
       

      //DCL
      @Consumption.hidden: true
      SalesOrderItem.SalesOrderType,
      @Consumption.hidden: true
      SalesOrderItem.SalesOrganization,
      @Consumption.hidden: true
      SalesOrderItem.DistributionChannel,
      @Consumption.hidden: true
      SalesOrderItem.OrganizationDivision,   

      //Composition
      _SalesOrder         : redirected to parent I_SalesOrderTP,
      _ItemPartner        : redirected to composition child I_SalesOrderItemPartnerTP,
      _ItemText           : redirected to composition child I_SalesOrderItemTextTP,
      _ItemPricingElement : redirected to composition child I_SalesOrderItemPrcgElmntTP ,
      _ScheduleLine       : redirected to composition child I_SalesOrderScheduleLineTP 
}
```
