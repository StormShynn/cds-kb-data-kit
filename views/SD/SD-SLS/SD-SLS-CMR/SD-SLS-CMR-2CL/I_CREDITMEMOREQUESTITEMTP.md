---
name: I_CREDITMEMOREQUESTITEMTP
description: Creditmemorequestitemtp
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - interface-view
  - transactional-processing
  - credit
  - item-level
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_CREDITMEMOREQUESTITEMTP

**Creditmemorequestitemtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CreditMemoRequest` | `CreditMemoRequestItem.CreditMemoRequest` |
| key `CreditMemoRequestItem` | `CreditMemoRequestItem.CreditMemoRequestItem` |
| `HigherLevelItem` | `CreditMemoRequestItem.HigherLevelItem` |
| `CreditMemoRequestItemCategory` | `CreditMemoRequestItem.CreditMemoRequestItemCategory` |
| `CreditMemoRequestItemText` | `CreditMemoRequestItem.CreditMemoRequestItemText` |
| `PurchaseOrderByCustomer` | `CreditMemoRequestItem.PurchaseOrderByCustomer` |
| `Product` | `CreditMemoRequestItem.Product` |
| `MaterialByCustomer` | `CreditMemoRequestItem.MaterialByCustomer` |
| `ProductGroup` | `CreditMemoRequestItem.ProductGroup` |
| `MaterialPricingGroup` | `CreditMemoRequestItem.MaterialPricingGroup` |
| `Batch` | `CreditMemoRequestItem.Batch` |
| `PricingDate` | `CreditMemoRequestItem.PricingDate` |
| `RequestedQuantity` | `CreditMemoRequestItem.RequestedQuantity` |
| `RequestedQuantityUnit` | `CreditMemoRequestItem.RequestedQuantityUnit` |
| `NetAmount` | `CreditMemoRequestItem.NetAmount` |
| `TransactionCurrency` | `CreditMemoRequestItem.TransactionCurrency` |
| `ItemBillingBlockReason` | `CreditMemoRequestItem.ItemBillingBlockReason` |
| `Plant` | `CreditMemoRequestItem.Plant` |
| `TargetQuantity` | `CreditMemoRequestItem.TargetQuantity` |
| `TargetQuantityUnit` | `CreditMemoRequestItem.TargetQuantityUnit` |
| `ItemGrossWeight` | `CreditMemoRequestItem.ItemGrossWeight` |
| `ItemNetWeight` | `CreditMemoRequestItem.ItemNetWeight` |
| `ItemWeightUnit` | `CreditMemoRequestItem.ItemWeightUnit` |
| `ItemVolume` | `CreditMemoRequestItem.ItemVolume` |
| `ItemVolumeUnit` | `CreditMemoRequestItem.ItemVolumeUnit` |
| `ServicesRenderedDate` | `CreditMemoRequestItem.ServicesRenderedDate` |
| `SalesDocumentRjcnReason` | `CreditMemoRequestItem.SalesDocumentRjcnReason` |
| `TaxAmount` | `CreditMemoRequestItem.TaxAmount` |
| `IncotermsClassification` | `CreditMemoRequestItem.IncotermsClassification` |
| `IncotermsLocation1` | `CreditMemoRequestItem.IncotermsLocation1` |
| `IncotermsLocation2` | `CreditMemoRequestItem.IncotermsLocation2` |
| `IncotermsVersion` | `CreditMemoRequestItem.IncotermsVersion` |
| `BillingDocumentDate` | `CreditMemoRequestItem.BillingDocumentDate` |
| `CustomerPaymentTerms` | `CreditMemoRequestItem.CustomerPaymentTerms` |
| `ProfitCenter` | `CreditMemoRequestItem.ProfitCenter` |
| `ReferenceSDDocument` | `CreditMemoRequestItem.ReferenceSDDocument` |
| `ReferenceSDDocumentItem` | `CreditMemoRequestItem.ReferenceSDDocumentItem` |
| `SDProcessStatus` | `CreditMemoRequestItem.SDProcessStatus` |
| `OrderRelatedBillingStatus` | `CreditMemoRequestItem.OrderRelatedBillingStatus` |
| `BillingBlockStatus` | `CreditMemoRequestItem.BillingBlockStatus` |
| `ItemGeneralIncompletionStatus` | `CreditMemoRequestItem.ItemGeneralIncompletionStatus` |
| `SDDocumentRejectionStatus` | `CreditMemoRequestItem.SDDocumentRejectionStatus` |
| `TotalSDDocReferenceStatus` | `CreditMemoRequestItem.TotalSDDocReferenceStatus` |
| `CreditMemoRequestType` | `CreditMemoRequestItem.CreditMemoRequestType` |
| `OrganizationDivision` | `CreditMemoRequestItem.OrganizationDivision` |
| `SalesOrganization` | `CreditMemoRequestItem.SalesOrganization` |
| `DistributionChannel` | `CreditMemoRequestItem.DistributionChannel` |
| `_CreditMemoRequest` | *Association* |
| `_ItemPartner` | *Association* |
| `_ItemText` | *Association* |
| `_ItemPricingElement` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Credit Memo Request Item - TP'
@ObjectModel.sapObjectNodeType.name: 'CreditMemoRequestItem'
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
    semanticKey:           ['CreditMemoRequest', 'CreditMemoRequestItem'],
    modelingPattern:       #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDI', 
  dataSources: ['CreditMemoRequestItem'],  
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }  
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_CreditMemoRequestItemTP
  as projection on R_CreditMemoRequestItemTP as CreditMemoRequestItem
{
  key CreditMemoRequestItem.CreditMemoRequest,
  key CreditMemoRequestItem.CreditMemoRequestItem,
  
      CreditMemoRequestItem.HigherLevelItem,
      CreditMemoRequestItem.CreditMemoRequestItemCategory,
      @Semantics.text: true
      CreditMemoRequestItem.CreditMemoRequestItemText,
      CreditMemoRequestItem.PurchaseOrderByCustomer,
      CreditMemoRequestItem.Product,
      CreditMemoRequestItem.MaterialByCustomer,
      CreditMemoRequestItem.ProductGroup,
      CreditMemoRequestItem.MaterialPricingGroup,
      CreditMemoRequestItem.Batch,
      CreditMemoRequestItem.PricingDate,
      
      @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
      CreditMemoRequestItem.RequestedQuantity,
      CreditMemoRequestItem.RequestedQuantityUnit,
      
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CreditMemoRequestItem.NetAmount,
      CreditMemoRequestItem.TransactionCurrency,
      
      CreditMemoRequestItem.ItemBillingBlockReason,
      CreditMemoRequestItem.Plant,
      
      @Semantics.quantity.unitOfMeasure: 'TargetQuantityUnit'
      CreditMemoRequestItem.TargetQuantity,
      CreditMemoRequestItem.TargetQuantityUnit,
      
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      CreditMemoRequestItem.ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      CreditMemoRequestItem.ItemNetWeight,
      CreditMemoRequestItem.ItemWeightUnit,
      
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      CreditMemoRequestItem.ItemVolume,
      CreditMemoRequestItem.ItemVolumeUnit,
      
      CreditMemoRequestItem.ServicesRenderedDate,
      CreditMemoRequestItem.SalesDocumentRjcnReason,
      
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CreditMemoRequestItem.TaxAmount,
      CreditMemoRequestItem.IncotermsClassification,
      CreditMemoRequestItem.IncotermsLocation1,
      CreditMemoRequestItem.IncotermsLocation2,
      CreditMemoRequestItem.IncotermsVersion,
      CreditMemoRequestItem.BillingDocumentDate,
      CreditMemoRequestItem.CustomerPaymentTerms,
      CreditMemoRequestItem.ProfitCenter,
      CreditMemoRequestItem.ReferenceSDDocument,
      CreditMemoRequestItem.ReferenceSDDocumentItem,
      CreditMemoRequestItem.SDProcessStatus,
      CreditMemoRequestItem.OrderRelatedBillingStatus,
      CreditMemoRequestItem.BillingBlockStatus,
      CreditMemoRequestItem.ItemGeneralIncompletionStatus,
      CreditMemoRequestItem.SDDocumentRejectionStatus,
      CreditMemoRequestItem.TotalSDDocReferenceStatus,
      
      // For Access control
      @Consumption.hidden: true
      CreditMemoRequestItem.CreditMemoRequestType,
      @Consumption.hidden: true
      CreditMemoRequestItem.OrganizationDivision,
      @Consumption.hidden: true
      CreditMemoRequestItem.SalesOrganization,
      @Consumption.hidden: true
      CreditMemoRequestItem.DistributionChannel,
      
      //Compositions
      _CreditMemoRequest  : redirected to parent I_CreditMemoRequestTP,
      _ItemPartner        : redirected to composition child I_CreditMemoReqItemPartnerTP,
      _ItemText           : redirected to composition child I_CreditMemoRequestItemTextTP,
      _ItemPricingElement : redirected to composition child I_CrdtMemoReqItmPrcgElmntTP
}
```
