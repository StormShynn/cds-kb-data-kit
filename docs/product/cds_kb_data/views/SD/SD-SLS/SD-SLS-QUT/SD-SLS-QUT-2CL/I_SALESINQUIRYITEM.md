---
name: I_SALESINQUIRYITEM
description: "Salesinquiryitem"
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-QUT
  - interface-view
  - item-level
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SALESINQUIRYITEM

**Salesinquiryitem**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesInquiry` | ✓ | |  | `cast(SalesDocument as sales_inquiry preserving type)` |  |  |
| `SalesInquiryItem` | ✓ | |  | `cast(SalesDocumentItem as sales_inquiry_item preserving type)` |  |  |
| `SalesInquiryItemCategory` |  | |  | `SalesDocumentItemCategory` |  |  |
| `SalesInquiryItemType` |  | |  | `SalesDocumentItemType` |  |  |
| `IsReturnsItem` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `MaterialByCustomer` |  | |  |  |  |  |
| `InternationalArticleNumber` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `ProductHierarchyNode` |  | |  |  |  |  |
| `ProductCatalog` |  | |  |  |  |  |
| `MaterialSubstitutionReason` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |  |  |
| `ProductConfiguration` |  | |  |  |  |  |
| `SalesInquiryItemText` |  | |  | `SalesDocumentItemText` |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `UnderlyingPurchaseOrderItem` |  | |  |  |  |  |
| `OrderQuantity` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `OrderToBaseQuantityDnmntr` |  | |  |  |  |  |
| `OrderToBaseQuantityNmrtr` |  | |  |  |  |  |
| `RequestedQuantity` |  | |  |  |  |  |
| `RequestedQuantityUnit` |  | |  |  |  |  |
| `RequestedQuantityInBaseUnit` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `SalesDeal` |  | |  |  |  |  |
| `SalesPromotion` |  | |  |  |  |  |
| `RetailPromotion` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `SalesDocumentRjcnReason` |  | |  |  |  |  |
| `AlternativeToItem` |  | |  |  |  |  |
| `ItemOrderProbabilityInPercent` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `PriceDetnExchangeRate` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `NetPriceQuantityUnit` |  | |  |  |  |  |
| `StatisticalValueControl` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `TaxAmount` |  | |  |  |  |  |
| `CostAmount` |  | |  |  |  |  |
| `Subtotal1Amount` |  | |  |  |  |  |
| `Subtotal2Amount` |  | |  |  |  |  |
| `Subtotal3Amount` |  | |  |  |  |  |
| `Subtotal4Amount` |  | |  |  |  |  |
| `Subtotal5Amount` |  | |  |  |  |  |
| `Subtotal6Amount` |  | |  |  |  |  |
| `SalesInquiryCondition` |  | |  | `SalesDocumentCondition` |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `DeliveryDateQuantityIsFixed` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `AdditionalValueDays` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `WBSElement` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `ControllingObject` |  | |  |  |  |  |
| `ProfitabilitySegment` |  | |  |  |  |  |
| `ProfitabilitySegment_2` |  | |  |  |  |  |
| `OriginSDDocument` |  | |  |  |  |  |
| `OriginSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `SDProcessStatus` |  | |  |  |  |  |
| `BillingBlockStatus` |  | |  |  |  |  |
| `ItemGeneralIncompletionStatus` |  | |  |  |  |  |
| `ItemBillingIncompletionStatus` |  | |  |  |  |  |
| `PricingIncompletionStatus` |  | |  |  |  |  |
| `ItemDeliveryIncompletionStatus` |  | |  |  |  |  |
| `SDDocumentRejectionStatus` |  | |  |  |  |  |
| `TotalSDDocReferenceStatus` |  | |  |  |  |  |
| `SalesInquiryType` |  | |  | `cast( SalesDocumentType as sales_inquiry_type preserving type )` |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `SalesInquiryDate` |  | |  | `SalesDocumentDate` |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `RequestedDeliveryDate` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `SalesEmployee` |  | |  |  |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `SalesEmployeeWorkAgreement` |  | |  |  |  |  |
| `ResponsibleEmployeeWorkAgrmt` |  | |  |  |  |  |
| `_SalesInquiry` | | ✓ | | | | |
| `_SalesInquiryType` | | ✓ | | | | |
| `_StatisticalValueControl` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_ItemCategory` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_OriginallyRequestedMaterial` | | ✓ | | | | |
| `_ProductHierarchyNode` | | ✓ | | | | |
| `_MaterialSubstitutionReason` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_AdditionalMaterialGroup1` | | ✓ | | | | |
| `_AdditionalMaterialGroup2` | | ✓ | | | | |
| `_AdditionalMaterialGroup3` | | ✓ | | | | |
| `_AdditionalMaterialGroup4` | | ✓ | | | | |
| `_AdditionalMaterialGroup5` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_RequestedQuantityUnit` | | ✓ | | | | |
| `_ItemWeightUnit` | | ✓ | | | | |
| `_ItemVolumeUnit` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_SalesDeal` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_SalesDocumentRjcnReason` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_NetPriceQuantityUnit` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_CustomerPaymentTerms` | | ✓ | | | | |
| `_CustomerAccountAssgmtGroup` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ReferenceSDDocument` | | ✓ | | | | |
| `_ReferenceSDDocumentItem` | | ✓ | | | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | | | |
| `_SDProcessStatus` | | ✓ | | | | |
| `_BillingBlockStatus` | | ✓ | | | | |
| `_ItemGeneralIncompletionStatus` | | ✓ | | | | |
| `_ItemBillingIncompletionStatus` | | ✓ | | | | |
| `_PricingIncompletionStatus` | | ✓ | | | | |
| `_ItemDelivIncompletionSts` | | ✓ | | | | |
| `_SDDocumentRejectionStatus` | | ✓ | | | | |
| `_TotalSDDocReferenceStatus` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_AdditionalCustomerGroup1` | | ✓ | | | | |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_AdditionalCustomerGroup4` | | ✓ | | | | |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_SDDocumentReason` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_SalesEmployee` | | ✓ | | | | |
| `_ResponsibleEmployee` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesInquiry` | `I_SalesInquiry` | [1..1] |
| `_SalesInquiryType` | `I_SalesInquiryType` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SalesInquiryItem'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@EndUserText.label: 'Sales Inquiry Item'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: [ '_Partner', '_CreatedByUser' ]
@AbapCatalog.sqlViewName: 'ISDSLSINQYITM'
@AbapCatalog.compiler.compareFilter: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbap', role: #MAIN,
                    viewElement: ['SalesInquiry', 'SalesInquiryItem'],
                    tableElement: ['vbeln', 'posnr']
                },
                {
                    table: 'vbak', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesInquiry'],
                    tableElement: ['vbeln']},
                {
                    table: 'vbkd', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesInquiry', 'SalesInquiryItem'],
                    tableElement: ['vbeln', 'posnr']
                },   
                {
                    table: 'veda', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesInquiry', 'SalesInquiryItem'],
                    tableElement: ['vbeln', 'vposn']
                }       
            ]
        }
    }
 }

@ObjectModel.sapObjectNodeType.name: 'SalesInquiryItem'

define view I_SalesInquiryItem
  as select from I_SalesDocumentItem as SalesDocumentItem

  //Association
  association [1..1] to I_SalesInquiry     as _SalesInquiry     on $projection.SalesInquiry = _SalesInquiry.SalesInquiry
  association [0..1] to I_SalesInquiryType as _SalesInquiryType on $projection.SalesInquiryType = _SalesInquiryType.SalesInquiryType
  
{
      //key
      @ObjectModel.foreignKey.association: '_SalesInquiry'
  key cast(SalesDocument as sales_inquiry preserving type)          as SalesInquiry,
      @ObjectModel.text.element: 'SalesInquiryItemText'
  key cast(SalesDocumentItem as sales_inquiry_item preserving type) as SalesInquiryItem,

      //Category
      @ObjectModel.foreignKey.association: '_ItemCategory'
      SalesDocumentItemCategory                                     as SalesInquiryItemCategory,
      SalesDocumentItemType                                         as SalesInquiryItemType,
      IsReturnsItem,

      //Admin
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      @ObjectModel.foreignKey.association: '_Division'
      Division,

      //Product
      @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_MaterialStdVH',
                       element: 'Material' }
          }]
      @ObjectModel.foreignKey.association: '_Material'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'Product'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'Product'
      Material,
      @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_ProductStdVH',
                       element: 'Product' }
          }]
      @ObjectModel.foreignKey.association: '_Product'
      @Analytics.internalName: #LOCAL
      Product,

      @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_MaterialStdVH',
                       element: 'Material' }
          }]
      @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
      OriginallyRequestedMaterial,
      MaterialByCustomer,
      InternationalArticleNumber,
      @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_BatchStdVH',
                       element: 'Batch' },
            additionalBinding: [{ localElement: 'Material',
                                  element: 'Material' }]
          }]
      Batch,
      ProductHierarchyNode,
      ProductCatalog,
      @ObjectModel.foreignKey.association: '_MaterialSubstitutionReason'
      MaterialSubstitutionReason,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'ProductGroup'
      MaterialGroup,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      @Analytics.internalName: #LOCAL
      ProductGroup,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      AdditionalMaterialGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      AdditionalMaterialGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      AdditionalMaterialGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      AdditionalMaterialGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      AdditionalMaterialGroup5,
      ProductConfiguration,

      //Sales
      @Semantics.text: true
      SalesDocumentItemText                                         as SalesInquiryItemText,
      PurchaseOrderByCustomer,
      UnderlyingPurchaseOrderItem,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      OrderQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      OrderQuantityUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      OrderToBaseQuantityDnmntr,
      OrderToBaseQuantityNmrtr,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
      RequestedQuantity,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_RequestedQuantityUnit'
      RequestedQuantityUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      RequestedQuantityInBaseUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemWeightUnit'
      ItemWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemVolumeUnit'
      ItemVolumeUnit,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_SalesDealStdVH',
                       element: 'SalesDeal' }
          }]
      @ObjectModel.foreignKey.association: '_SalesDeal'
      SalesDeal,
      SalesPromotion,
      RetailPromotion,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
      SalesDocumentRjcnReason,
      AlternativeToItem,

      //Inquiry
      ItemOrderProbabilityInPercent,

      //Currency
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      ExchangeRateDate,

      //Pricing
      PriceDetnExchangeRate,
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      NetPriceQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_NetPriceQuantityUnit'
      NetPriceQuantityUnit,

      @ObjectModel.foreignKey.association: '_StatisticalValueControl'
      StatisticalValueControl,
      _StatisticalValueControl,

      //Amount
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      NetAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      NetPriceAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CostAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal1Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal2Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal3Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal4Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal5Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal6Amount,
      SalesDocumentCondition                                as SalesInquiryCondition,

      //Shipping
      InventorySpecialStockType,
      DeliveryDateQuantityIsFixed,
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion,

      //Billing
      BillingDocumentDate,

      //Payment
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      CustomerPaymentTerms,
      PaymentMethod,
      FixedValueDate,
      AdditionalValueDays,

      //Accounting
      FiscalYear,
      FiscalPeriod,
      CustomerAccountAssignmentGroup,
      @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_BusinessAreaStdVH',
                       element: 'BusinessArea' }
          }]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      ProfitCenter,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID'
      WBSElement,
      WBSElementInternalID,
      OrderID,
      ControllingObject,
      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor: 'ProfitabilitySegment_2'
      ProfitabilitySegment,
      ProfitabilitySegment_2,
      OriginSDDocument,
      OriginSDDocumentItem,

      //Reference
      @ObjectModel.foreignKey.association: '_ReferenceSDDocument'
      ReferenceSDDocument,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentItem'
      ReferenceSDDocumentItem,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      ReferenceSDDocumentCategory,
      HigherLevelItem,

      //Status
      @ObjectModel.foreignKey.association: '_SDProcessStatus'
      SDProcessStatus,
      @ObjectModel.foreignKey.association: '_BillingBlockStatus'
      BillingBlockStatus,
      @ObjectModel.foreignKey.association: '_ItemGeneralIncompletionStatus'
      ItemGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemBillingIncompletionStatus'
      ItemBillingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_PricingIncompletionStatus'
      PricingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemDelivIncompletionSts'
      ItemDeliveryIncompletionStatus,
      @ObjectModel.foreignKey.association: '_SDDocumentRejectionStatus'
      SDDocumentRejectionStatus,
      @ObjectModel.foreignKey.association: '_TotalSDDocReferenceStatus'
      TotalSDDocReferenceStatus,
      
      //_ANA Fields
      @ObjectModel.foreignKey.association: '_SalesInquiryType'
      cast( SalesDocumentType as sales_inquiry_type preserving type ) as SalesInquiryType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      AdditionalCustomerGroup5,
      SalesDocumentDate  as SalesInquiryDate,
      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      SDDocumentReason,
      RequestedDeliveryDate,
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      ShippingCondition,
      // Analytics partner fields
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      @ObjectModel.foreignKey.association: '_PayerParty'
      PayerParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_SalesEmployee'
      SalesEmployee,
      @ObjectModel.foreignKey.association: '_ResponsibleEmployee'
      ResponsibleEmployee,
      SalesEmployeeWorkAgreement,
      ResponsibleEmployeeWorkAgrmt,

      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
                                     #TO_COMPOSITION_ROOT]
      _SalesInquiry,
      _Partner,

      _ItemCategory,
      _CreatedByUser,
      _Division,
      _Material,
      _Product,
      _OriginallyRequestedMaterial,
      _ProductHierarchyNode,
      _MaterialSubstitutionReason,
      _MaterialGroup,
      _ProductGroup,
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _OrderQuantityUnit,
      _BaseUnit,
      _RequestedQuantityUnit,
      _ItemWeightUnit,
      _ItemVolumeUnit,
      _SalesDistrict,
      _SalesDeal,
      _CustomerGroup,
      _SalesDocumentRjcnReason,
      _TransactionCurrency,
      _NetPriceQuantityUnit,
      _IncotermsClassification,
      _IncotermsVersion,
      _CustomerPaymentTerms,
      // _PaymentMethod,
      _CustomerAccountAssgmtGroup,
      _BusinessArea,
      //_ProfitCenter
      _ReferenceSDDocument,
      _ReferenceSDDocumentItem,
      _ReferenceSDDocumentCategory,

      _SDProcessStatus,
      _BillingBlockStatus,
      _ItemGeneralIncompletionStatus,
      _ItemBillingIncompletionStatus,
      _PricingIncompletionStatus,
      _ItemDelivIncompletionSts,
      _SDDocumentRejectionStatus,
      _TotalSDDocReferenceStatus,
      
      //_ANA associations
      _SalesInquiryType,
      _SalesOrganization,
      _DistributionChannel,
      _OrganizationDivision,
      _SalesOffice,
      _SalesGroup,
      _SoldToParty,
      _AdditionalCustomerGroup1,
      _AdditionalCustomerGroup2,
      _AdditionalCustomerGroup3,
      _AdditionalCustomerGroup4,
      _AdditionalCustomerGroup5,
      _SDDocumentReason,
      _ShippingCondition,
      _ShipToParty,
      _PayerParty,
      _BillToParty,
      _SalesEmployee,
      _ResponsibleEmployee
}
where
  SDDocumentCategory = 'A';
```
