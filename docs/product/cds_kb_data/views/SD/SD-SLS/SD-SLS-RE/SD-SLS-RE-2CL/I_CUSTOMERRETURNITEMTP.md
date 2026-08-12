---
name: I_CUSTOMERRETURNITEMTP
description: "Customerreturnitemtp"
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerReturn` | ✓ | |  |  |  |  |
| `CustomerReturnItem` | ✓ | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `CustomerReturnItemCategory` |  | |  |  |  |  |
| `CustomerReturnItemText` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `MaterialByCustomer` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `RequestedQuantity` |  | |  |  |  |  |
| `RequestedQuantityUnit` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ProductionPlant` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `ShippingPoint` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `SalesDocumentRjcnReason` |  | |  |  |  |  |
| `ItemBillingBlockReason` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `RetsMgmtProcess` |  | |  |  |  |  |
| `RetsMgmtProcessItem` |  | |  |  |  |  |
| `ReturnReason` |  | |  |  |  |  |
| `RetsMgmtProcessingBlock` |  | |  |  |  |  |
| `CustRetItmFollowUpActivity` |  | |  |  |  |  |
| `ReturnsMaterialHasBeenReceived` |  | |  |  |  |  |
| `CustRetItmCustomerText` |  | |  |  |  |  |
| `CustRetItmInspectionText` |  | |  |  |  |  |
| `ReturnsRefundType` |  | |  |  |  |  |
| `ReturnsRefundProcgMode` |  | |  |  |  |  |
| `ReturnsRefundExtent` |  | |  |  |  |  |
| `PrelimRefundIsDetermined` |  | |  |  |  |  |
| `ReturnsRefundRjcnReason` |  | |  |  |  |  |
| `ReplacementMaterial` |  | |  |  |  |  |
| `ReplacementMaterialQuantity` |  | |  |  |  |  |
| `ReplacementMaterialQtyUnit` |  | |  |  |  |  |
| `ReplacementMaterialIsRequested` |  | |  |  |  |  |
| `ReplacementMatlSupplyingPlant` |  | |  |  |  |  |
| `NextPlantForFollowUpActivity` |  | |  |  |  |  |
| `ReturnsTransshipmentPlant` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplierRetMatlAuthzn` |  | |  |  |  |  |
| `SuplrRetMatlAuthznIsRequired` |  | |  |  |  |  |
| `CustomerRetMatlInspResultCode` |  | |  |  |  |  |
| `NextFllwUpActivityForMatlInsp` |  | |  |  |  |  |
| `RetMatlInspResultCode` |  | |  |  |  |  |
| `ProductIsInspectedAtCustSite` |  | |  |  |  |  |
| `CustRetMatlAuthzn` |  | |  |  |  |  |
| `CRMLogicalSystem` |  | |  |  |  |  |
| `CRMObjectUUID` |  | |  |  |  |  |
| `CRMObjectID` |  | |  |  |  |  |
| `CRMObjectType` |  | |  |  |  |  |
| `RetsMgmtItmLogProcgStatus` |  | |  |  |  |  |
| `RetsMgmtItmCompnProcgStatus` |  | |  |  |  |  |
| `RetsMgmtItmProcgStatus` |  | |  |  |  |  |
| `ReturnsDocumentStatus` |  | |  |  |  |  |
| `ReturnsDocumentApprovalStatus` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `SDProcessStatus` |  | |  |  |  |  |
| `SDDocumentRejectionStatus` |  | |  |  |  |  |
| `CustomerReturnType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_CustomerReturn` | | ✓ | | | | |
| `_ItemPartner` | | ✓ | | | | |
| `_ItemText` | | ✓ | | | | |
| `_ItemPricingElement` | | ✓ | | | | |

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
