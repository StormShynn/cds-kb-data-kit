---
name: I_CUSTOMERRETURNITEMTP
description: Customerreturnitemtp
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - interface-view
  - transactional-processing
  - customer
  - item-level
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERRETURNITEMTP

**Customerreturnitemtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CustomerReturn` | `CustomerReturnItem.CustomerReturn` |
| key `CustomerReturnItem` | `CustomerReturnItem.CustomerReturnItem` |
| `HigherLevelItem` | `CustomerReturnItem.HigherLevelItem` |
| `CustomerReturnItemCategory` | `CustomerReturnItem.CustomerReturnItemCategory` |
| `CustomerReturnItemText` | `CustomerReturnItem.CustomerReturnItemText` |
| `PurchaseOrderByCustomer` | `CustomerReturnItem.PurchaseOrderByCustomer` |
| `Product` | `CustomerReturnItem.Product` |
| `MaterialByCustomer` | `CustomerReturnItem.MaterialByCustomer` |
| `ProductGroup` | `CustomerReturnItem.ProductGroup` |
| `Batch` | `CustomerReturnItem.Batch` |
| `RequestedQuantity` | `CustomerReturnItem.RequestedQuantity` |
| `RequestedQuantityUnit` | `CustomerReturnItem.RequestedQuantityUnit` |
| `ItemGrossWeight` | `CustomerReturnItem.ItemGrossWeight` |
| `ItemNetWeight` | `CustomerReturnItem.ItemNetWeight` |
| `ItemWeightUnit` | `CustomerReturnItem.ItemWeightUnit` |
| `ItemVolume` | `CustomerReturnItem.ItemVolume` |
| `ItemVolumeUnit` | `CustomerReturnItem.ItemVolumeUnit` |
| `NetAmount` | `CustomerReturnItem.NetAmount` |
| `TransactionCurrency` | `CustomerReturnItem.TransactionCurrency` |
| `ProductionPlant` | `CustomerReturnItem.ProductionPlant` |
| `Plant` | `CustomerReturnItem.Plant` |
| `StorageLocation` | `CustomerReturnItem.StorageLocation` |
| `ShippingPoint` | `CustomerReturnItem.ShippingPoint` |
| `DeliveryPriority` | `CustomerReturnItem.DeliveryPriority` |
| `SalesDocumentRjcnReason` | `CustomerReturnItem.SalesDocumentRjcnReason` |
| `ItemBillingBlockReason` | `CustomerReturnItem.ItemBillingBlockReason` |
| `ProfitCenter` | `CustomerReturnItem.ProfitCenter` |
| `IncotermsClassification` | `CustomerReturnItem.IncotermsClassification` |
| `IncotermsTransferLocation` | `CustomerReturnItem.IncotermsTransferLocation` |
| `IncotermsLocation1` | `CustomerReturnItem.IncotermsLocation1` |
| `IncotermsLocation2` | `CustomerReturnItem.IncotermsLocation2` |
| `CustomerPaymentTerms` | `CustomerReturnItem.CustomerPaymentTerms` |
| `RetsMgmtProcess` | `CustomerReturnItem.RetsMgmtProcess` |
| `RetsMgmtProcessItem` | `CustomerReturnItem.RetsMgmtProcessItem` |
| `ReturnReason` | `CustomerReturnItem.ReturnReason` |
| `RetsMgmtProcessingBlock` | `CustomerReturnItem.RetsMgmtProcessingBlock` |
| `CustRetItmFollowUpActivity` | `CustomerReturnItem.CustRetItmFollowUpActivity` |
| `ReturnsMaterialHasBeenReceived` | `CustomerReturnItem.ReturnsMaterialHasBeenReceived` |
| `CustRetItmCustomerText` | `CustomerReturnItem.CustRetItmCustomerText` |
| `CustRetItmInspectionText` | `CustomerReturnItem.CustRetItmInspectionText` |
| `ReturnsRefundType` | `CustomerReturnItem.ReturnsRefundType` |
| `ReturnsRefundProcgMode` | `CustomerReturnItem.ReturnsRefundProcgMode` |
| `ReturnsRefundExtent` | `CustomerReturnItem.ReturnsRefundExtent` |
| `PrelimRefundIsDetermined` | `CustomerReturnItem.PrelimRefundIsDetermined` |
| `ReturnsRefundRjcnReason` | `CustomerReturnItem.ReturnsRefundRjcnReason` |
| `ReplacementMaterial` | `CustomerReturnItem.ReplacementMaterial` |
| `ReplacementMaterialQuantity` | `CustomerReturnItem.ReplacementMaterialQuantity` |
| `ReplacementMaterialQtyUnit` | `CustomerReturnItem.ReplacementMaterialQtyUnit` |
| `ReplacementMaterialIsRequested` | `CustomerReturnItem.ReplacementMaterialIsRequested` |
| `ReplacementMatlSupplyingPlant` | `CustomerReturnItem.ReplacementMatlSupplyingPlant` |
| `NextPlantForFollowUpActivity` | `CustomerReturnItem.NextPlantForFollowUpActivity` |
| `ReturnsTransshipmentPlant` | `CustomerReturnItem.ReturnsTransshipmentPlant` |
| `Supplier` | `CustomerReturnItem.Supplier` |
| `SupplierRetMatlAuthzn` | `CustomerReturnItem.SupplierRetMatlAuthzn` |
| `SuplrRetMatlAuthznIsRequired` | `CustomerReturnItem.SuplrRetMatlAuthznIsRequired` |
| `CustomerRetMatlInspResultCode` | `CustomerReturnItem.CustomerRetMatlInspResultCode` |
| `NextFllwUpActivityForMatlInsp` | `CustomerReturnItem.NextFllwUpActivityForMatlInsp` |
| `RetMatlInspResultCode` | `CustomerReturnItem.RetMatlInspResultCode` |
| `ProductIsInspectedAtCustSite` | `CustomerReturnItem.ProductIsInspectedAtCustSite` |
| `CustRetMatlAuthzn` | `CustomerReturnItem.CustRetMatlAuthzn` |
| `CRMLogicalSystem` | `CustomerReturnItem.CRMLogicalSystem` |
| `CRMObjectUUID` | `CustomerReturnItem.CRMObjectUUID` |
| `CRMObjectID` | `CustomerReturnItem.CRMObjectID` |
| `CRMObjectType` | `CustomerReturnItem.CRMObjectType` |
| `RetsMgmtItmLogProcgStatus` | `CustomerReturnItem.RetsMgmtItmLogProcgStatus` |
| `RetsMgmtItmCompnProcgStatus` | `CustomerReturnItem.RetsMgmtItmCompnProcgStatus` |
| `RetsMgmtItmProcgStatus` | `CustomerReturnItem.RetsMgmtItmProcgStatus` |
| `ReturnsDocumentStatus` | `CustomerReturnItem.ReturnsDocumentStatus` |
| `ReturnsDocumentApprovalStatus` | `CustomerReturnItem.ReturnsDocumentApprovalStatus` |
| `ReferenceSDDocument` | `CustomerReturnItem.ReferenceSDDocument` |
| `ReferenceSDDocumentItem` | `CustomerReturnItem.ReferenceSDDocumentItem` |
| `ReferenceSDDocumentCategory` | `CustomerReturnItem.ReferenceSDDocumentCategory` |
| `SDProcessStatus` | `CustomerReturnItem.SDProcessStatus` |
| `SDDocumentRejectionStatus` | `CustomerReturnItem.SDDocumentRejectionStatus` |
| `CustomerReturnType` | `CustomerReturnItem.CustomerReturnType` |
| `SalesOrganization` | `CustomerReturnItem.SalesOrganization` |
| `DistributionChannel` | `CustomerReturnItem.DistributionChannel` |
| `OrganizationDivision` | `CustomerReturnItem.OrganizationDivision` |
| `_CustomerReturn` | *Association* |
| `_ItemPartner` | *Association* |
| `_ItemText` | *Association* |
| `_ItemPricingElement` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Returns Order Item - TP'

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
    semanticKey:           ['CustomerReturn', 'CustomerReturnItem'],
    modelingPattern:       #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    sapObjectNodeType.name: 'CustomerReturnItem'
}
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDI', 
  dataSources: ['CustomerReturnItem'],  
  quota: {
    maximumFields: 204, 
    maximumBytes: 6800 
  }  
} 
@Metadata.ignorePropagatedAnnotations: true

define view entity I_CustomerReturnItemTP
  as projection on R_CustomerReturnItemTP as CustomerReturnItem  
{
  key CustomerReturnItem.CustomerReturn,
  key CustomerReturnItem.CustomerReturnItem,

      CustomerReturnItem.HigherLevelItem,
      CustomerReturnItem.CustomerReturnItemCategory,
      @Semantics.text: true
      CustomerReturnItem.CustomerReturnItemText,
      
      CustomerReturnItem.PurchaseOrderByCustomer,
      CustomerReturnItem.Product,
      CustomerReturnItem.MaterialByCustomer,
      CustomerReturnItem.ProductGroup, 
      CustomerReturnItem.Batch,
      
      @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
      CustomerReturnItem.RequestedQuantity,
      CustomerReturnItem.RequestedQuantityUnit,

      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      CustomerReturnItem.ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      CustomerReturnItem.ItemNetWeight,
      CustomerReturnItem.ItemWeightUnit,
      
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      CustomerReturnItem.ItemVolume,
      CustomerReturnItem.ItemVolumeUnit,
      
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CustomerReturnItem.NetAmount,
      CustomerReturnItem.TransactionCurrency, 

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'Plant'
      CustomerReturnItem.ProductionPlant,
      CustomerReturnItem.Plant,
      CustomerReturnItem.StorageLocation,
      CustomerReturnItem.ShippingPoint,
      CustomerReturnItem.DeliveryPriority,
  
      CustomerReturnItem.SalesDocumentRjcnReason,
      CustomerReturnItem.ItemBillingBlockReason,
      CustomerReturnItem.ProfitCenter,
      
      CustomerReturnItem.IncotermsClassification,
      CustomerReturnItem.IncotermsTransferLocation,
      CustomerReturnItem.IncotermsLocation1,
      CustomerReturnItem.IncotermsLocation2,
      CustomerReturnItem.CustomerPaymentTerms,
      
      //ARM Fields
      CustomerReturnItem.RetsMgmtProcess,
      CustomerReturnItem.RetsMgmtProcessItem,
      CustomerReturnItem.ReturnReason,
      CustomerReturnItem.RetsMgmtProcessingBlock,
      CustomerReturnItem.CustRetItmFollowUpActivity,
      @Semantics.booleanIndicator:true
      CustomerReturnItem.ReturnsMaterialHasBeenReceived,
      CustomerReturnItem.CustRetItmCustomerText, 
      CustomerReturnItem.CustRetItmInspectionText,      
      
      CustomerReturnItem.ReturnsRefundType,
      CustomerReturnItem.ReturnsRefundProcgMode,
      CustomerReturnItem.ReturnsRefundExtent,
      @Semantics.booleanIndicator:true
      CustomerReturnItem.PrelimRefundIsDetermined,
      CustomerReturnItem.ReturnsRefundRjcnReason,
      
      CustomerReturnItem.ReplacementMaterial,
      @Semantics.quantity.unitOfMeasure: 'ReplacementMaterialQtyUnit'
      CustomerReturnItem.ReplacementMaterialQuantity,
      CustomerReturnItem.ReplacementMaterialQtyUnit,
      @Semantics.booleanIndicator:true
      CustomerReturnItem.ReplacementMaterialIsRequested,
      CustomerReturnItem.ReplacementMatlSupplyingPlant,
      
      CustomerReturnItem.NextPlantForFollowUpActivity,
      CustomerReturnItem.ReturnsTransshipmentPlant,
      CustomerReturnItem.Supplier,
      CustomerReturnItem.SupplierRetMatlAuthzn,
      @Semantics.booleanIndicator:true
      CustomerReturnItem.SuplrRetMatlAuthznIsRequired,
      CustomerReturnItem.CustomerRetMatlInspResultCode,
      CustomerReturnItem.NextFllwUpActivityForMatlInsp,
      CustomerReturnItem.RetMatlInspResultCode,
      @Semantics.booleanIndicator:true
      CustomerReturnItem.ProductIsInspectedAtCustSite,
      CustomerReturnItem.CustRetMatlAuthzn,
      
      CustomerReturnItem.CRMLogicalSystem,
      @Semantics.uuid
      CustomerReturnItem.CRMObjectUUID,
      CustomerReturnItem.CRMObjectID,
      CustomerReturnItem.CRMObjectType,
      
      CustomerReturnItem.RetsMgmtItmLogProcgStatus,
      CustomerReturnItem.RetsMgmtItmCompnProcgStatus,
      CustomerReturnItem.RetsMgmtItmProcgStatus,
      CustomerReturnItem.ReturnsDocumentStatus,
      CustomerReturnItem.ReturnsDocumentApprovalStatus,
      
      //Reference
      CustomerReturnItem.ReferenceSDDocument,
      CustomerReturnItem.ReferenceSDDocumentItem,
      CustomerReturnItem.ReferenceSDDocumentCategory,
      
      //Status
      CustomerReturnItem.SDProcessStatus,
      CustomerReturnItem.SDDocumentRejectionStatus, 
      
      // For Access control
      @Consumption.hidden: true
      CustomerReturnItem.CustomerReturnType,
      @Consumption.hidden: true
      CustomerReturnItem.SalesOrganization,
      @Consumption.hidden: true
      CustomerReturnItem.DistributionChannel,
      @Consumption.hidden: true
      CustomerReturnItem.OrganizationDivision,

      //Composition
      _CustomerReturn     : redirected to parent I_CustomerReturnTP,
      _ItemPartner        : redirected to composition child I_CustomerReturnItemPartnerTP,
      _ItemText           : redirected to composition child I_CustomerReturnItemTextTP,
      _ItemPricingElement : redirected to composition child I_CustRetItemPricingElementTP 
}
```
