---
name: I_SALESORDERITEMTP
description: Sales OrderITEMTP
app_component: SD-SLS-API-2CL
software_component: SAPSCORE
release_state: released
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

| Field | Data Source |
|---|---|
| key `SalesOrder` | `SalesOrderItem.SalesOrder` |
| key `SalesOrderItem` | `SalesOrderItem.SalesOrderItem` |
| `HigherLevelItem` | `SalesOrderItem.HigherLevelItem` |
| `SalesOrderItemCategory` | `SalesOrderItem.SalesOrderItemCategory` |
| `SalesOrderItemText` | `SalesOrderItem.SalesOrderItemText` |
| `Product` | `SalesOrderItem.Product` |
| `ProductGroup` | `SalesOrderItem.ProductGroup` |
| `MaterialByCustomer` | `SalesOrderItem.MaterialByCustomer` |
| `InternationalArticleNumber` | `SalesOrderItem.InternationalArticleNumber` |
| `PurchaseOrderByCustomer` | `SalesOrderItem.PurchaseOrderByCustomer` |
| `RequestedDeliveryDate` | `SalesOrderItem.RequestedDeliveryDate` |
| `ConfirmedDeliveryDate` | `SalesOrderItem.ConfirmedDeliveryDate` |
| `ConfdDelivQtyInOrderQtyUnit` | `SalesOrderItem.ConfdDelivQtyInOrderQtyUnit` |
| `OrderQuantityUnit` | `SalesOrderItem.OrderQuantityUnit` |
| `RequestedQuantity` | `SalesOrderItem.RequestedQuantity` |
| `RequestedQuantityUnit` | `SalesOrderItem.RequestedQuantityUnit` |
| `ItemGrossWeight` | `SalesOrderItem.ItemGrossWeight` |
| `ItemNetWeight` | `SalesOrderItem.ItemNetWeight` |
| `ItemWeightUnit` | `SalesOrderItem.ItemWeightUnit` |
| `ItemVolume` | `SalesOrderItem.ItemVolume` |
| `ItemVolumeUnit` | `SalesOrderItem.ItemVolumeUnit` |
| `PricingDate` | `SalesOrderItem.PricingDate` |
| `ServicesRenderedDate` | `SalesOrderItem.ServicesRenderedDate` |
| `BillingDocumentDate` | `SalesOrderItem.BillingDocumentDate` |
| `FixedValueDate` | `SalesOrderItem.FixedValueDate` |
| `CustomerGroup` | `SalesOrderItem.CustomerGroup` |
| `Batch` | `SalesOrderItem.Batch` |
| `Plant` | `SalesOrderItem.Plant` |
| `StorageLocation` | `SalesOrderItem.StorageLocation` |
| `ShippingPoint` | `SalesOrderItem.ShippingPoint` |
| `ShippingType` | `SalesOrderItem.ShippingType` |
| `Route` | `SalesOrderItem.Route` |
| `DeliveryPriority` | `SalesOrderItem.DeliveryPriority` |
| `PartialDeliveryIsAllowed` | `SalesOrderItem.PartialDeliveryIsAllowed` |
| `MaxNmbrOfPartialDelivery` | `SalesOrderItem.MaxNmbrOfPartialDelivery` |
| `DeliveryDateQuantityIsFixed` | `SalesOrderItem.DeliveryDateQuantityIsFixed` |
| `DeliveryDateTypeRule` | `SalesOrderItem.DeliveryDateTypeRule` |
| `ReceivingPoint` | `SalesOrderItem.ReceivingPoint` |
| `DeliveryGroup` | `SalesOrderItem.DeliveryGroup` |
| `ProductConfiguration` | `SalesOrderItem.ProductConfiguration` |
| `IncotermsClassification` | `SalesOrderItem.IncotermsClassification` |
| `IncotermsLocation1` | `SalesOrderItem.IncotermsLocation1` |
| `IncotermsLocation2` | `SalesOrderItem.IncotermsLocation2` |
| `OrderCombinationIsAllowed` | `SalesOrderItem.OrderCombinationIsAllowed` |
| `IncotermsVersion` | `SalesOrderItem.IncotermsVersion` |
| `CustomerPaymentTerms` | `SalesOrderItem.CustomerPaymentTerms` |
| `CustomerPriceGroup` | `SalesOrderItem.CustomerPriceGroup` |
| `MaterialPricingGroup` | `SalesOrderItem.MaterialPricingGroup` |
| `ItemBillingBlockReason` | `SalesOrderItem.ItemBillingBlockReason` |
| `SalesDocumentRjcnReason` | `SalesOrderItem.SalesDocumentRjcnReason` |
| `TransactionCurrency` | `SalesOrderItem.TransactionCurrency` |
| `NetAmount` | `SalesOrderItem.NetAmount` |
| `TaxAmount` | `SalesOrderItem.TaxAmount` |
| `SDProcessStatus` | `SalesOrderItem.SDProcessStatus` |
| `SDDocumentRejectionStatus` | `SalesOrderItem.SDDocumentRejectionStatus` |
| `DeliveryStatus` | `SalesOrderItem.DeliveryStatus` |
| `BillingBlockStatus` | `SalesOrderItem.BillingBlockStatus` |
| `ItemGeneralIncompletionStatus` | `SalesOrderItem.ItemGeneralIncompletionStatus` |
| `DeliveryBlockStatus` | `SalesOrderItem.DeliveryBlockStatus` |
| `SlsOrderItemDownPaymentStatus` | `SalesOrderItem.SlsOrderItemDownPaymentStatus` |
| `OrderRelatedBillingStatus` | `SalesOrderItem.OrderRelatedBillingStatus` |
| `ChmlCmplncStatus` | `SalesOrderItem.ChmlCmplncStatus` |
| `DangerousGoodsStatus` | `SalesOrderItem.DangerousGoodsStatus` |
| `SafetyDataSheetStatus` | `SalesOrderItem.SafetyDataSheetStatus` |
| `TrdCmplncEmbargoSts` | `SalesOrderItem.TrdCmplncEmbargoSts` |
| `TrdCmplncSnctndListChkSts` | `SalesOrderItem.TrdCmplncSnctndListChkSts` |
| `OvrlTrdCmplncLegalCtrlChkSts` | `SalesOrderItem.OvrlTrdCmplncLegalCtrlChkSts` |
| `BusinessArea` | `SalesOrderItem.BusinessArea` |
| `ProfitCenter` | `SalesOrderItem.ProfitCenter` |
| `ControllingArea` | `SalesOrderItem.ControllingArea` |
| `MatlAccountAssignmentGroup` | `SalesOrderItem.MatlAccountAssignmentGroup` |
| `SDPricingProcedure` | `SalesOrderItem.SDPricingProcedure` |
| `ItemCategoryGroup` | `SalesOrderItem.ItemCategoryGroup` |
| `SDDocumentItemUsage` | `SalesOrderItem.SDDocumentItemUsage` |
| `HigherLevelItemCategory` | `SalesOrderItem.HigherLevelItemCategory` |
| `ReferenceSDDocument` | `SalesOrderItem.ReferenceSDDocument` |
| `ReferenceSDDocumentItem` | `SalesOrderItem.ReferenceSDDocumentItem` |
| `ReferenceSDDocumentCategory` | `SalesOrderItem.ReferenceSDDocumentCategory` |
| `OriginallyRequestedMaterial` | `SalesOrderItem.OriginallyRequestedMaterial` |
| `SalesOrderType` | `SalesOrderItem.SalesOrderType` |
| `SalesOrganization` | `SalesOrderItem.SalesOrganization` |
| `DistributionChannel` | `SalesOrderItem.DistributionChannel` |
| `OrganizationDivision` | `SalesOrderItem.OrganizationDivision` |
| `_SalesOrder` | *Association* |
| `_ItemPartner` | *Association* |
| `_ItemText` | *Association* |
| `_ItemPricingElement` | *Association* |
| `_ScheduleLine` | *Association* |

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
