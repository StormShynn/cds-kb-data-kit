---
name: I_DEBITMEMOREQUESTITEMTP
description: Debitmemorequestitemtp
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
  - item-level
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQUESTITEMTP

**Debitmemorequestitemtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `DebitMemoRequest` | `DebitMemoRequestItem.DebitMemoRequest` |
| key `DebitMemoRequestItem` | `DebitMemoRequestItem.DebitMemoRequestItem` |
| `HigherLevelItem` | `DebitMemoRequestItem.HigherLevelItem` |
| `DebitMemoRequestItemCategory` | `DebitMemoRequestItem.DebitMemoRequestItemCategory` |
| `DebitMemoRequestItemText` | `DebitMemoRequestItem.DebitMemoRequestItemText` |
| `PurchaseOrderByCustomer` | `DebitMemoRequestItem.PurchaseOrderByCustomer` |
| `Product` | `DebitMemoRequestItem.Product` |
| `MaterialByCustomer` | `DebitMemoRequestItem.MaterialByCustomer` |
| `ProductGroup` | `DebitMemoRequestItem.ProductGroup` |
| `MaterialPricingGroup` | `DebitMemoRequestItem.MaterialPricingGroup` |
| `Batch` | `DebitMemoRequestItem.Batch` |
| `PricingDate` | `DebitMemoRequestItem.PricingDate` |
| `RequestedQuantity` | `DebitMemoRequestItem.RequestedQuantity` |
| `RequestedQuantityUnit` | `DebitMemoRequestItem.RequestedQuantityUnit` |
| `NetAmount` | `DebitMemoRequestItem.NetAmount` |
| `TransactionCurrency` | `DebitMemoRequestItem.TransactionCurrency` |
| `ItemBillingBlockReason` | `DebitMemoRequestItem.ItemBillingBlockReason` |
| `Plant` | `DebitMemoRequestItem.Plant` |
| `TargetQuantity` | `DebitMemoRequestItem.TargetQuantity` |
| `TargetQuantityUnit` | `DebitMemoRequestItem.TargetQuantityUnit` |
| `ItemGrossWeight` | `DebitMemoRequestItem.ItemGrossWeight` |
| `ItemNetWeight` | `DebitMemoRequestItem.ItemNetWeight` |
| `ItemWeightUnit` | `DebitMemoRequestItem.ItemWeightUnit` |
| `ItemVolume` | `DebitMemoRequestItem.ItemVolume` |
| `ItemVolumeUnit` | `DebitMemoRequestItem.ItemVolumeUnit` |
| `ServicesRenderedDate` | `DebitMemoRequestItem.ServicesRenderedDate` |
| `SalesDocumentRjcnReason` | `DebitMemoRequestItem.SalesDocumentRjcnReason` |
| `TaxAmount` | `DebitMemoRequestItem.TaxAmount` |
| `IncotermsClassification` | `DebitMemoRequestItem.IncotermsClassification` |
| `IncotermsLocation1` | `DebitMemoRequestItem.IncotermsLocation1` |
| `IncotermsLocation2` | `DebitMemoRequestItem.IncotermsLocation2` |
| `IncotermsVersion` | `DebitMemoRequestItem.IncotermsVersion` |
| `BillingDocumentDate` | `DebitMemoRequestItem.BillingDocumentDate` |
| `CustomerPaymentTerms` | `DebitMemoRequestItem.CustomerPaymentTerms` |
| `ProfitCenter` | `DebitMemoRequestItem.ProfitCenter` |
| `ReferenceSDDocument` | `DebitMemoRequestItem.ReferenceSDDocument` |
| `ReferenceSDDocumentItem` | `DebitMemoRequestItem.ReferenceSDDocumentItem` |
| `SDProcessStatus` | `DebitMemoRequestItem.SDProcessStatus` |
| `OrderRelatedBillingStatus` | `DebitMemoRequestItem.OrderRelatedBillingStatus` |
| `BillingBlockStatus` | `DebitMemoRequestItem.BillingBlockStatus` |
| `ItemGeneralIncompletionStatus` | `DebitMemoRequestItem.ItemGeneralIncompletionStatus` |
| `SDDocumentRejectionStatus` | `DebitMemoRequestItem.SDDocumentRejectionStatus` |
| `TotalSDDocReferenceStatus` | `DebitMemoRequestItem.TotalSDDocReferenceStatus` |
| `DebitMemoRequestType` | `DebitMemoRequestItem.DebitMemoRequestType` |
| `OrganizationDivision` | `DebitMemoRequestItem.OrganizationDivision` |
| `SalesOrganization` | `DebitMemoRequestItem.SalesOrganization` |
| `DistributionChannel` | `DebitMemoRequestItem.DistributionChannel` |
| `_DebitMemoRequest` | *Association* |
| `_ItemPartner` | *Association* |
| `_ItemText` | *Association* |
| `_ItemPricingElement` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@ObjectModel.sapObjectNodeType.name: 'DebitMemoRequestItem'
@EndUserText.label: 'Debit Memo Request Item - TP'

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
    semanticKey:           ['DebitMemoRequest', 'DebitMemoRequestItem'],
    modelingPattern:       #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDI', 
  dataSources: ['DebitMemoRequestItem'],  
  quota: {
    maximumFields: 204,
    maximumBytes: 6800
  }  
} 

@Metadata.ignorePropagatedAnnotations: true

define view entity I_DebitMemoRequestItemTP
  as projection on R_DebitMemoRequestItemTP as DebitMemoRequestItem 
{ 
  key DebitMemoRequestItem.DebitMemoRequest,
  key DebitMemoRequestItem.DebitMemoRequestItem,
  
      DebitMemoRequestItem.HigherLevelItem,
      DebitMemoRequestItem.DebitMemoRequestItemCategory,
      @Semantics.text: true
      DebitMemoRequestItem.DebitMemoRequestItemText,
      DebitMemoRequestItem.PurchaseOrderByCustomer,
      DebitMemoRequestItem.Product,
      DebitMemoRequestItem.MaterialByCustomer,
      DebitMemoRequestItem.ProductGroup,
      DebitMemoRequestItem.MaterialPricingGroup,
      DebitMemoRequestItem.Batch,
      DebitMemoRequestItem.PricingDate,
      @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
      DebitMemoRequestItem.RequestedQuantity,
      DebitMemoRequestItem.RequestedQuantityUnit,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      DebitMemoRequestItem.NetAmount,
      DebitMemoRequestItem.TransactionCurrency,
      DebitMemoRequestItem.ItemBillingBlockReason,
      DebitMemoRequestItem.Plant,
      @Semantics.quantity.unitOfMeasure: 'TargetQuantityUnit'
      DebitMemoRequestItem.TargetQuantity,
      DebitMemoRequestItem.TargetQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      DebitMemoRequestItem.ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      DebitMemoRequestItem.ItemNetWeight,
      DebitMemoRequestItem.ItemWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      DebitMemoRequestItem.ItemVolume,
      DebitMemoRequestItem.ItemVolumeUnit,
      DebitMemoRequestItem.ServicesRenderedDate,
      DebitMemoRequestItem.SalesDocumentRjcnReason,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      DebitMemoRequestItem.TaxAmount,
      DebitMemoRequestItem.IncotermsClassification,
      DebitMemoRequestItem.IncotermsLocation1,
      DebitMemoRequestItem.IncotermsLocation2,
      DebitMemoRequestItem.IncotermsVersion,
      DebitMemoRequestItem.BillingDocumentDate,
      DebitMemoRequestItem.CustomerPaymentTerms,
      DebitMemoRequestItem.ProfitCenter,
      DebitMemoRequestItem.ReferenceSDDocument,
      DebitMemoRequestItem.ReferenceSDDocumentItem,
      
      DebitMemoRequestItem.SDProcessStatus,
      DebitMemoRequestItem.OrderRelatedBillingStatus,
      DebitMemoRequestItem.BillingBlockStatus,
      DebitMemoRequestItem.ItemGeneralIncompletionStatus,
      DebitMemoRequestItem.SDDocumentRejectionStatus,
      DebitMemoRequestItem.TotalSDDocReferenceStatus,
      
      // For Access control
      @Consumption.hidden: true
      DebitMemoRequestItem.DebitMemoRequestType,
      @Consumption.hidden: true
      DebitMemoRequestItem.OrganizationDivision,
      @Consumption.hidden: true
      DebitMemoRequestItem.SalesOrganization,
      @Consumption.hidden: true
      DebitMemoRequestItem.DistributionChannel,
      
      //Compositions
      _DebitMemoRequest   : redirected to parent I_DebitMemoRequestTP,
      _ItemPartner        : redirected to composition child I_DebitMemoReqItemPartnerTP,
      _ItemText           : redirected to composition child I_DebitMemoRequestItemTextTP,
      _ItemPricingElement : redirected to composition child I_DebitMemoReqItmPrgElmTP
}
```
