---
name: I_DEBITMEMOREQUESTITEMTP
description: "Debitmemorequestitemtp"
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DebitMemoRequest` | ✓ | |  |  |  |  |
| `DebitMemoRequestItem` | ✓ | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `DebitMemoRequestItemCategory` |  | |  |  |  |  |
| `DebitMemoRequestItemText` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `MaterialByCustomer` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `MaterialPricingGroup` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `RequestedQuantity` |  | |  |  |  |  |
| `RequestedQuantityUnit` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ItemBillingBlockReason` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `TargetQuantity` |  | |  |  |  |  |
| `TargetQuantityUnit` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `SalesDocumentRjcnReason` |  | |  |  |  |  |
| `TaxAmount` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `SDProcessStatus` |  | |  |  |  |  |
| `OrderRelatedBillingStatus` |  | |  |  |  |  |
| `BillingBlockStatus` |  | |  |  |  |  |
| `ItemGeneralIncompletionStatus` |  | |  |  |  |  |
| `SDDocumentRejectionStatus` |  | |  |  |  |  |
| `TotalSDDocReferenceStatus` |  | |  |  |  |  |
| `DebitMemoRequestType` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `_DebitMemoRequest` | | ✓ | | | | |
| `_ItemPartner` | | ✓ | | | | |
| `_ItemText` | | ✓ | | | | |
| `_ItemPricingElement` | | ✓ | | | | |

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
