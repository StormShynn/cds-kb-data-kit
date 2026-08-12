---
name: I_SALESQUOTATIONITEMTP
description: "Salesquotationitemtp"
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-QUT
  - interface-view
  - transactional-processing
  - sales-quotation
  - item-level
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SALESQUOTATIONITEMTP

**Salesquotationitemtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesQuotation` | ✓ | |  |  |  |  |
| `SalesQuotationItem` | ✓ | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `SalesQuotationItemCategory` |  | |  |  |  |  |
| `SalesQuotationItemText` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `MaterialByCustomer` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `ItemOrderProbabilityInPercent` |  | |  |  |  |  |
| `RequestedQuantity` |  | |  |  |  |  |
| `RequestedQuantityUnit` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `AlternativeToItem` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `MaterialPricingGroup` |  | |  |  |  |  |
| `SalesDocumentRjcnReason` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `SDProcessStatus` |  | |  |  |  |  |
| `SDDocumentRejectionStatus` |  | |  |  |  |  |
| `ItemGeneralIncompletionStatus` |  | |  |  |  |  |
| `TotalSDDocReferenceStatus` |  | |  |  |  |  |
| `SDDocReferenceStatus` |  | |  |  |  |  |
| `PricingIncompletionStatus` |  | |  |  |  |  |
| `SalesQuotationType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_SalesQuotation` | | ✓ | | | | |
| `_ItemPartner` | | ✓ | | | | |
| `_ItemText` | | ✓ | | | | |
| `_ItemPricingElement` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Item - TP'
@ObjectModel.sapObjectNodeType.name: 'SalesQuotationItem'  
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
    semanticKey:           ['SalesQuotation', 'SalesQuotationItem'],
    modelingPattern:       #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'SDI', 
  dataSources: ['SalesQuotationItem'],  
  quota: {
    maximumFields: 204, 
    maximumBytes: 6800 
     }  
} 

@Metadata.ignorePropagatedAnnotations: true

define view entity I_SalesQuotationItemTP
  as projection on R_SalesQuotationItemTP as SalesQuotationItem
{
  key SalesQuotationItem.SalesQuotation,
  key SalesQuotationItem.SalesQuotationItem,

      SalesQuotationItem.HigherLevelItem,
      SalesQuotationItem.SalesQuotationItemCategory,
      SalesQuotationItem.SalesQuotationItemText,
      SalesQuotationItem.Product,
      SalesQuotationItem.ProductGroup,
      SalesQuotationItem.MaterialByCustomer,
      SalesQuotationItem.PurchaseOrderByCustomer,
      SalesQuotationItem.ItemOrderProbabilityInPercent,

      @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
      SalesQuotationItem.RequestedQuantity,
      SalesQuotationItem.RequestedQuantityUnit,

      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SalesQuotationItem.ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SalesQuotationItem.ItemNetWeight,
      SalesQuotationItem.ItemWeightUnit,

      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      SalesQuotationItem.ItemVolume,
      SalesQuotationItem.ItemVolumeUnit,

      SalesQuotationItem.AlternativeToItem,

      SalesQuotationItem.Batch,
      SalesQuotationItem.Plant,
      SalesQuotationItem.IncotermsClassification,
      SalesQuotationItem.IncotermsLocation1,
      SalesQuotationItem.IncotermsLocation2,
      SalesQuotationItem.IncotermsVersion,
      SalesQuotationItem.CustomerPaymentTerms,
      SalesQuotationItem.MaterialPricingGroup,
      SalesQuotationItem.SalesDocumentRjcnReason,
      SalesQuotationItem.TransactionCurrency,
      SalesQuotationItem.ProfitCenter,
      SalesQuotationItem.PricingDate,

      SalesQuotationItem.ReferenceSDDocument,
      SalesQuotationItem.ReferenceSDDocumentItem,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesQuotationItem.NetAmount,

      SalesQuotationItem.SDProcessStatus,
      SalesQuotationItem.SDDocumentRejectionStatus,
      SalesQuotationItem.ItemGeneralIncompletionStatus,
      SalesQuotationItem.TotalSDDocReferenceStatus,
      SalesQuotationItem.SDDocReferenceStatus,
      SalesQuotationItem.PricingIncompletionStatus,
      
      //DCL
      @Consumption.hidden: true
      SalesQuotationItem.SalesQuotationType,
      @Consumption.hidden: true
      SalesQuotationItem.SalesOrganization,
      @Consumption.hidden: true
      SalesQuotationItem.DistributionChannel,
      @Consumption.hidden: true
      SalesQuotationItem.OrganizationDivision,

      //Composition
      _SalesQuotation : redirected to parent I_SalesQuotationTP,
      _ItemPartner    : redirected to composition child I_SalesQuotationItemPartnerTP,
      _ItemText       : redirected to composition child I_SalesQuotationItemTextTP,
      _ItemPricingElement : redirected to composition child I_SlsQtanItemPricingElementTP
}
```
