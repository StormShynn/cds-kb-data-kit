---
name: I_SALESSCHEDGAGRMTITEM
description: Salesschedgagrmtitem
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - item-level
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
---
# I_SALESSCHEDGAGRMTITEM

**Salesschedgagrmtitem**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesSchedulingAgreement` | `cast(SalesDocument as vdm_sales_schedg_agrmt preserving type)` |
| key `SalesSchedulingAgreementItem` | `cast(SalesDocumentItem as vdm_sales_schedg_agrmt_item preserving type)` |
| `SalesSchedgAgrmtItemCategory` | `SalesDocumentItemCategory` |
| `SalesSchedgAgrmtItemType` | `SalesDocumentItemType` |
| `IsReturnsItem` | `IsReturnsItem` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `LastChangeDate` | `LastChangeDate` |
| `Division` | `Division` |
| `Material` | `Material` |
| `Product` | `Product` |
| `OriginallyRequestedMaterial` | `OriginallyRequestedMaterial` |
| `MaterialByCustomer` | `MaterialByCustomer` |
| `InternationalArticleNumber` | `InternationalArticleNumber` |
| `Batch` | `}] Batch` |
| `MaterialSubstitutionReason` | `MaterialSubstitutionReason` |
| `MaterialGroup` | `MaterialGroup` |
| `ProductGroup` | `ProductGroup` |
| `AdditionalMaterialGroup1` | `AdditionalMaterialGroup1` |
| `AdditionalMaterialGroup2` | `AdditionalMaterialGroup2` |
| `AdditionalMaterialGroup3` | `AdditionalMaterialGroup3` |
| `AdditionalMaterialGroup4` | `AdditionalMaterialGroup4` |
| `AdditionalMaterialGroup5` | `AdditionalMaterialGroup5` |
| `Plant` | `Plant` |
| `StorageLocation` | `StorageLocation` |
| `DeliveryGroup` | `DeliveryGroup` |
| `ProductConfiguration` | `ProductConfiguration` |
| `BillOfMaterial` | `BillOfMaterial` |
| `ProdAvailabilityCheckGroup` | `ProdAvailabilityCheckGroup` |
| `MRPArea` | `MRPArea` |
| `SalesSchedgAgrmtItemText` | `SalesDocumentItemText` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `UnderlyingPurchaseOrderItem` | `UnderlyingPurchaseOrderItem` |
| `OrderQuantity` | `OrderQuantity` |
| `OrderQuantityUnit` | `OrderQuantityUnit` |
| `OrderToBaseQuantityDnmntr` | `OrderToBaseQuantityDnmntr` |
| `OrderToBaseQuantityNmrtr` | `OrderToBaseQuantityNmrtr` |
| `TargetQuantity` | `TargetQuantity` |
| `TargetQuantityUnit` | `TargetQuantityUnit` |
| `TargetToBaseQuantityDnmntr` | `TargetToBaseQuantityDnmntr` |
| `TargetToBaseQuantityNmrtr` | `TargetToBaseQuantityNmrtr` |
| `ConfdDelivQtyInOrderQtyUnit` | `ConfdDelivQtyInOrderQtyUnit` |
| `TargetDelivQtyInOrderQtyUnit` | `TargetDelivQtyInOrderQtyUnit` |
| `ConfdDeliveryQtyInBaseUnit` | `ConfdDeliveryQtyInBaseUnit` |
| `BaseUnit` | `BaseUnit` |
| `RequestedQuantityUnit` | `RequestedQuantityUnit` |
| `ItemGrossWeight` | `ItemGrossWeight` |
| `ItemNetWeight` | `ItemNetWeight` |
| `ItemWeightUnit` | `ItemWeightUnit` |
| `ItemVolume` | `ItemVolume` |
| `ItemVolumeUnit` | `ItemVolumeUnit` |
| `SalesDistrict` | `SalesDistrict` |
| `CustomerGroup` | `CustomerGroup` |
| `SalesDocumentRjcnReason` | `SalesDocumentRjcnReason` |
| `QuantityIsFixed` | `QuantityIsFixed` |
| `MainItemPricingRefProduct` | `MainItemPricingRefProduct` |
| `NetAmount` | `NetAmount` |
| `TransactionCurrency` | `TransactionCurrency` |
| `MaterialPricingGroup` | `MaterialPricingGroup` |
| `PricingDate` | `PricingDate` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `PriceDetnExchangeRate` | `PriceDetnExchangeRate` |
| `NetPriceAmount` | `NetPriceAmount` |
| `NetPriceQuantity` | `NetPriceQuantity` |
| `NetPriceQuantityUnit` | `NetPriceQuantityUnit` |
| `CostAmount` | `CostAmount` |
| `Subtotal1Amount` | `Subtotal1Amount` |
| `Subtotal2Amount` | `Subtotal2Amount` |
| `Subtotal3Amount` | `Subtotal3Amount` |
| `Subtotal4Amount` | `Subtotal4Amount` |
| `Subtotal5Amount` | `Subtotal5Amount` |
| `Subtotal6Amount` | `Subtotal6Amount` |
| `SalesSchedgAgrmtCondition` | `SalesDocumentCondition` |
| `ProductTaxClassification3` | `ProductTaxClassification3` |
| `ProductTaxClassification4` | `ProductTaxClassification4` |
| `ProductTaxClassification5` | `ProductTaxClassification5` |
| `ProductTaxClassification6` | `ProductTaxClassification6` |
| `ProductTaxClassification7` | `ProductTaxClassification7` |
| `ProductTaxClassification8` | `ProductTaxClassification8` |
| `ProductTaxClassification9` | `ProductTaxClassification9` |
| `StatisticalValueControl` | `StatisticalValueControl` |
| `ShippingPoint` | `ShippingPoint` |
| `ShippingType` | `ShippingType` |
| `DeliveryPriority` | `DeliveryPriority` |
| `Route` | `Route` |
| `DeliveryDateQuantityIsFixed` | `DeliveryDateQuantityIsFixed` |
| `PartialDeliveryIsAllowed` | `PartialDeliveryIsAllowed` |
| `MaxNmbrOfPartialDelivery` | `MaxNmbrOfPartialDelivery` |
| `UnlimitedOverdeliveryIsAllowed` | `UnlimitedOverdeliveryIsAllowed` |
| `UnderdelivTolrtdLmtRatioInPct` | `UnderdelivTolrtdLmtRatioInPct` |
| `ItemIsDeliveryRelevant` | `ItemIsDeliveryRelevant` |
| `IncotermsVersion` | `IncotermsVersion` |
| `IncotermsClassification` | `IncotermsClassification` |
| `IncotermsTransferLocation` | `IncotermsTransferLocation` |
| `IncotermsLocation1` | `IncotermsLocation1` |
| `IncotermsLocation2` | `IncotermsLocation2` |
| `PaymentMethod` | `PaymentMethod` |
| `AdditionalValueDays` | `AdditionalValueDays` |
| `CustomerPaymentTerms` | `CustomerPaymentTerms` |
| `BillingDocumentDate` | `BillingDocumentDate` |
| `ItemIsBillingRelevant` | `ItemIsBillingRelevant` |
| `ItemBillingBlockReason` | `ItemBillingBlockReason` |
| `FiscalYear` | `FiscalYear` |
| `FiscalPeriod` | `FiscalPeriod` |
| `BusinessArea` | `BusinessArea` |
| `ProfitCenter` | `ProfitCenter` |
| `WBSElement` | `WBSElement` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `OrderID` | `OrderID` |
| `ControllingObject` | `ControllingObject` |
| `ProfitabilitySegment` | `ProfitabilitySegment` |
| `ProfitabilitySegment_2` | `ProfitabilitySegment_2` |
| `OriginSDDocument` | `OriginSDDocument` |
| `OriginSDDocumentItem` | `OriginSDDocumentItem` |
| `PlngDelivSchedInstrn` | `PlngDelivSchedInstrn` |
| `ReferenceSDDocumentCategory` | `ReferenceSDDocumentCategory` |
| `HigherLevelItem` | `HigherLevelItem` |
| `SDProcessStatus` | `SDProcessStatus` |
| `DeliveryStatus` | `DeliveryStatus` |
| `OrderRelatedBillingStatus` | `OrderRelatedBillingStatus` |
| `ItemGeneralIncompletionStatus` | `ItemGeneralIncompletionStatus` |
| `ItemBillingIncompletionStatus` | `ItemBillingIncompletionStatus` |
| `ItemDeliveryIncompletionStatus` | `ItemDeliveryIncompletionStatus` |
| `SDDocumentRejectionStatus` | `SDDocumentRejectionStatus` |
| `SalesSchedgAgrmtType` | `cast(SalesDocumentType as vdm_sales_schedg_agrmt_type preserving type)` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `OrganizationDivision` | `OrganizationDivision` |
| `SalesOffice` | `SalesOffice` |
| `SalesGroup` | `SalesGroup` |
| `SoldToParty` | `SoldToParty` |
| `AdditionalCustomerGroup1` | `AdditionalCustomerGroup1` |
| `AdditionalCustomerGroup2` | `AdditionalCustomerGroup2` |
| `AdditionalCustomerGroup3` | `AdditionalCustomerGroup3` |
| `AdditionalCustomerGroup4` | `AdditionalCustomerGroup4` |
| `AdditionalCustomerGroup5` | `AdditionalCustomerGroup5` |
| `SalesSchedgAgrmtDate` | `SalesDocumentDate` |
| `SDDocumentReason` | `SDDocumentReason` |
| `RequestedDeliveryDate` | `RequestedDeliveryDate` |
| `ShippingCondition` | `ShippingCondition` |
| `ShipToParty` | `ShipToParty` |
| `PayerParty` | `PayerParty` |
| `BillToParty` | `BillToParty` |
| `SalesEmployee` | `SalesEmployee` |
| `ResponsibleEmployee` | `ResponsibleEmployee` |
| `SalesEmployeeWorkAgreement` | `SalesEmployeeWorkAgreement` |
| `ResponsibleEmployeeWorkAgrmt` | `ResponsibleEmployeeWorkAgrmt` |
| `_SalesSchedgAgrmt` | *Association* |
| `_SalesSchedgAgrmtType` | *Association* |
| `_SalesSchedgAgrmtDelivSched` | *Association* |
| `_Partner` | *Association* |
| `_PricingElement` | *Association* |
| `_PartDesc` | *Association* |
| `_Division` | *Association* |
| `_Material` | *Association* |
| `_Product` | *Association* |
| `_OriginallyRequestedMaterial` | *Association* |
| `_Batch` | *Association* |
| `_MaterialSubstitutionReason` | *Association* |
| `_MaterialGroup` | *Association* |
| `_ProductGroup` | *Association* |
| `_AdditionalMaterialGroup1` | *Association* |
| `_AdditionalMaterialGroup2` | *Association* |
| `_AdditionalMaterialGroup3` | *Association* |
| `_AdditionalMaterialGroup4` | *Association* |
| `_AdditionalMaterialGroup5` | *Association* |
| `_Plant` | *Association* |
| `_StorageLocation` | *Association* |
| `_OrderQuantityUnit` | *Association* |
| `_BaseUnit` | *Association* |
| `_TargetQuantityUnit` | *Association* |
| `_ItemWeightUnit` | *Association* |
| `_ItemVolumeUnit` | *Association* |
| `_SalesDistrict` | *Association* |
| `_CustomerGroup` | *Association* |
| `_SalesDocumentRjcnReason` | *Association* |
| `_NetPriceQuantityUnit` | *Association* |
| `_StatisticalValueControl` | *Association* |
| `_ShippingPoint` | *Association* |
| `_ShippingType` | *Association* |
| `_Route` | *Association* |
| `_IncotermsClassification` | *Association* |
| `_IncotermsVersion` | *Association* |
| `_BusinessArea` | *Association* |
| `_ReferenceSDDocumentCategory` | *Association* |
| `_SDProcessStatus` | *Association* |
| `_DeliveryStatus` | *Association* |
| `_OrderRelatedBillingStatus` | *Association* |
| `_MaterialPricingGroup` | *Association* |
| `_CustomerPaymentTerms` | *Association* |
| `_ItemGeneralIncompletionStatus` | *Association* |
| `_ItemBillingIncompletionStatus` | *Association* |
| `_ItemDelivIncompletionSts` | *Association* |
| `_ItemCategory` | *Association* |
| `_PlngDelivSchedInstrn` | *Association* |
| `_DeliveryPriority` | *Association* |
| `_BusinessAreaText` | *Association* |
| `_MaterialText` | *Association* |
| `_ProductText` | *Association* |
| `_OrigMaterialText` | *Association* |
| `_ShippingPointText` | *Association* |
| `_RequestedQuantityUnit` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_ItemBillingBlockReason` | *Association* |
| `_CreatedByUser` | *Association* |
| `_ItemIsBillingRelevant` | *Association* |
| `_SDDocumentRejectionStatus` | *Association* |
| `_WBSElementBasicData_2` | *Association* |
| `_MainItemPricingRefProduct` | *Association* |
| `_SalesOrganization` | *Association* |
| `_DistributionChannel` | *Association* |
| `_OrganizationDivision` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |
| `_SoldToParty` | *Association* |
| `_AdditionalCustomerGroup1` | *Association* |
| `_AdditionalCustomerGroup2` | *Association* |
| `_AdditionalCustomerGroup3` | *Association* |
| `_AdditionalCustomerGroup4` | *Association* |
| `_AdditionalCustomerGroup5` | *Association* |
| `_SDDocumentReason` | *Association* |
| `_ShippingCondition` | *Association* |
| `_ShipToParty` | *Association* |
| `_PayerParty` | *Association* |
| `_BillToParty` | *Association* |
| `_SalesEmployee` | *Association* |
| `_ResponsibleEmployee` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesSchedgAgrmt` | `I_SalesSchedgAgrmt` | [1..1] |
| `_SalesSchedgAgrmtType` | `I_SalesSchedgAgrmtType` | [0..1] |
| `_SalesSchedgAgrmtDelivSched` | `I_SalesSchedgAgrmtDelivSched` | [0..*] |
| `_Partner` | `I_SalesSchedgAgrmtItemPartner` | [0..*] |
| `_PricingElement` | `I_SalesSchedgAgrmtItmPrcgElmnt` | [0..*] |
| `_PartDesc` | `I_SlsSchedgAgrmtPartDesc` | [0..1] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Scheduling Agreement Item'
@VDM: {
  viewType: #BASIC
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser', '_BusinessAreaText','_MaterialText','_ProductText','_OrigMaterialText','_ShippingPointText' ]
}
@AbapCatalog: {
  sqlViewName:            'ISDSCHEDGAGRMTI',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
  representativeKey: 'SalesSchedulingAgreementItem',
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #B,
    sizeCategory:   #XL
  },
  supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION,#EXTRACTION_DATA_SOURCE],
  modelingPattern: #ANALYTICAL_DIMENSION
}
@Analytics.dataCategory: #DIMENSION
@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbap', role: #MAIN,
                    viewElement: ['SalesSchedulingAgreement', 'SalesSchedulingAgreementItem'],
                    tableElement: ['vbeln', 'posnr']
                },
                {
                    table: 'vbak', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesSchedulingAgreement'],
                    tableElement: ['vbeln']},
                {
                    table: 'vbkd', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesSchedulingAgreement', 'SalesSchedulingAgreementItem'],
                    tableElement: ['vbeln', 'posnr']
                },   
                {
                    table: 'veda', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesSchedulingAgreement', 'SalesSchedulingAgreementItem'],
                    tableElement: ['vbeln', 'vposn']
                }       
            ]
        }
    }
 }
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@ObjectModel.sapObjectNodeType.name: 'SalesSchedulingAgreementItem'

define view I_SalesSchedgAgrmtItem
  as select from I_SalesDocumentItem as SalesDocumentItem

  association [1..1] to I_SalesSchedgAgrmt             as _SalesSchedgAgrmt           on  $projection.SalesSchedulingAgreement = _SalesSchedgAgrmt.SalesSchedulingAgreement
  association [0..1] to I_SalesSchedgAgrmtType         as _SalesSchedgAgrmtType       on  $projection.SalesSchedgAgrmtType = _SalesSchedgAgrmtType.SalesSchedgAgrmtType
  association [0..*] to I_SalesSchedgAgrmtDelivSched   as _SalesSchedgAgrmtDelivSched on  $projection.SalesSchedulingAgreement     = _SalesSchedgAgrmtDelivSched.SalesSchedulingAgreement
                                                                                      and $projection.SalesSchedulingAgreementItem = _SalesSchedgAgrmtDelivSched.SalesSchedulingAgreementItem
  association [0..*] to I_SalesSchedgAgrmtItemPartner  as _Partner                    on  $projection.SalesSchedulingAgreement     = _Partner.SalesSchedulingAgreement
                                                                                      and $projection.SalesSchedulingAgreementItem = _Partner.SalesSchedulingAgreementItem
  association [0..*] to I_SalesSchedgAgrmtItmPrcgElmnt as _PricingElement             on  $projection.SalesSchedulingAgreement     = _PricingElement.SalesSchedulingAgreement
                                                                                      and $projection.SalesSchedulingAgreementItem = _PricingElement.SalesSchedulingAgreementItem
  association [0..1] to I_SlsSchedgAgrmtPartDesc       as _PartDesc                   on  $projection.SalesSchedulingAgreement     = _PartDesc.SalesSchedulingAgreement
                                                                                      and $projection.SalesSchedulingAgreementItem = _PartDesc.SalesSchedulingAgreementItem
  //Extensibility
  association [0..1] to E_SalesDocumentItemBasic       as _Extension                  on  SalesDocumentItem.SalesDocument     = _Extension.SalesDocument
                                                                                      and SalesDocumentItem.SalesDocumentItem = _Extension.SalesDocumentItem

{
      //Key
      @ObjectModel.foreignKey.association: '_SalesSchedgAgrmt'
  key cast(SalesDocument as vdm_sales_schedg_agrmt preserving type)          as SalesSchedulingAgreement,
      @ObjectModel.text.element: 'SalesSchedgAgrmtItemText'
  key cast(SalesDocumentItem as vdm_sales_schedg_agrmt_item preserving type) as SalesSchedulingAgreementItem,

      // Category
      @ObjectModel.foreignKey.association: '_ItemCategory'
      SalesDocumentItemCategory                                              as SalesSchedgAgrmtItemCategory,
      SalesDocumentItemType                                                  as SalesSchedgAgrmtItemType,
      IsReturnsItem,
      //Admin
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      //Org
      @ObjectModel.foreignKey.association: '_Division'
      Division,

      //Product
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MaterialStdVH',
                     element: 'Material' }
        }]
      @ObjectModel.text.association: '_MaterialText'
      @ObjectModel.foreignKey.association: '_Material'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'Product'
      Material,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      @ObjectModel.text.association: '_ProductText'
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      @ObjectModel.text.association: '_OrigMaterialText'
      @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
      OriginallyRequestedMaterial,
      MaterialByCustomer,
      InternationalArticleNumber,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BatchStdVH',
                     element: 'Batch' },
          additionalBinding: [{ localElement: 'Plant',
                                element: 'Plant' },
                              { localElement: 'Material',
                                element: 'Material' }]
        }]
      @ObjectModel.foreignKey.association: '_Batch'
      Batch,
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
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      StorageLocation,
      DeliveryGroup,
      ProductConfiguration,
      BillOfMaterial,
      ProdAvailabilityCheckGroup,
      //MaterialDeterminationType,
      MRPArea,

      //Sales
      @Semantics.text: true
      SalesDocumentItemText                                                  as SalesSchedgAgrmtItemText,
      PurchaseOrderByCustomer,
      UnderlyingPurchaseOrderItem,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      OrderQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      OrderQuantityUnit,
      OrderToBaseQuantityDnmntr,
      OrderToBaseQuantityNmrtr,
      @Semantics.quantity.unitOfMeasure: 'TargetQuantityUnit'
      TargetQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_TargetQuantityUnit'
      TargetQuantityUnit,
      TargetToBaseQuantityDnmntr,
      TargetToBaseQuantityNmrtr,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ConfdDelivQtyInOrderQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      TargetDelivQtyInOrderQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ConfdDeliveryQtyInBaseUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_RequestedQuantityUnit'
      RequestedQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemWeightUnit'
      ItemWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemVolumeUnit'
      ItemVolumeUnit,
      //ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
      SalesDocumentRjcnReason,
      QuantityIsFixed,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_MainItemPricingRefProduct'
      MainItemPricingRefProduct,

      // Pricing
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      NetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      @ObjectModel.foreignKey.association: '_MaterialPricingGroup'
      MaterialPricingGroup,
      PricingDate,
      ExchangeRateDate,
      PriceDetnExchangeRate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      NetPriceAmount,
      @DefaultAggregation: #NONE
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      NetPriceQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_NetPriceQuantityUnit'
      NetPriceQuantityUnit,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CostAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal1Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal2Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal3Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal4Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal5Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal6Amount,
      SalesDocumentCondition                                                 as SalesSchedgAgrmtCondition,
      ProductTaxClassification3,
      ProductTaxClassification4,
      ProductTaxClassification5,
      ProductTaxClassification6,
      ProductTaxClassification7,
      ProductTaxClassification8,
      ProductTaxClassification9,
      
      @ObjectModel.foreignKey.association: '_StatisticalValueControl'
      StatisticalValueControl,

      //Shipping
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ShippingPointStdVH',
                     element: 'ShippingPoint' }
        }]
      @ObjectModel.text.association: '_ShippingPointText'
      @ObjectModel.foreignKey.association: '_ShippingPoint'
      ShippingPoint,
      @ObjectModel.foreignKey.association: '_ShippingType'
      ShippingType,
      @ObjectModel.foreignKey.association: '_DeliveryPriority'
      DeliveryPriority,
      @ObjectModel.foreignKey.association: '_Route'
      Route,
      DeliveryDateQuantityIsFixed,
      PartialDeliveryIsAllowed,
      MaxNmbrOfPartialDelivery,
      UnlimitedOverdeliveryIsAllowed,
      UnderdelivTolrtdLmtRatioInPct,
      ItemIsDeliveryRelevant,

      //Incoterms
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion,
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,

      //Payment
      PaymentMethod,
      AdditionalValueDays,
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      CustomerPaymentTerms,

      //Billing
      BillingDocumentDate,
      @ObjectModel.foreignKey.association: '_ItemIsBillingRelevant'
      ItemIsBillingRelevant,
      @ObjectModel.foreignKey.association: '_ItemBillingBlockReason'
      ItemBillingBlockReason,

      //Accounting
      FiscalYear,
      FiscalPeriod,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.text.association: '_BusinessAreaText'
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      ProfitCenter,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID'
      WBSElement,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementBasicData_2'
      WBSElementInternalID,
      OrderID,
      ControllingObject,
      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor: 'ProfitabilitySegment_2'
      ProfitabilitySegment,
      ProfitabilitySegment_2,
      OriginSDDocument,
      OriginSDDocumentItem,

      //Sales Scheduling Agreement
      @ObjectModel.foreignKey.association: '_PlngDelivSchedInstrn'
      PlngDelivSchedInstrn,

      //Reference
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      ReferenceSDDocumentCategory,
      HigherLevelItem,

      //Status
      @ObjectModel.foreignKey.association: '_SDProcessStatus'
      SDProcessStatus,
      @ObjectModel.foreignKey.association: '_DeliveryStatus'
      DeliveryStatus,
      @ObjectModel.foreignKey.association: '_OrderRelatedBillingStatus'
      OrderRelatedBillingStatus,
      @ObjectModel.foreignKey.association: '_ItemGeneralIncompletionStatus'
      ItemGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemBillingIncompletionStatus'
      ItemBillingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemDelivIncompletionSts'
      ItemDeliveryIncompletionStatus,
      @ObjectModel.foreignKey.association: '_SDDocumentRejectionStatus'
      SDDocumentRejectionStatus,
      
      //_ANA Fields
      @ObjectModel.foreignKey.association: '_SalesSchedgAgrmtType'
      cast(SalesDocumentType as vdm_sales_schedg_agrmt_type preserving type)    as SalesSchedgAgrmtType,
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
      SalesDocumentDate as SalesSchedgAgrmtDate,
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

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _SalesSchedgAgrmtDelivSched,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Partner,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PricingElement,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SalesSchedgAgrmt,
      _Division,
      _Material,
      _Product,
      _OriginallyRequestedMaterial,
      _Batch,
      _MaterialSubstitutionReason,
      _MaterialGroup,
      _ProductGroup,
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _Plant,
      _StorageLocation,
      _OrderQuantityUnit,
      _BaseUnit,
      _TargetQuantityUnit,
      _ItemWeightUnit,
      _ItemVolumeUnit,
      _SalesDistrict,
      _CustomerGroup,
      _SalesDocumentRjcnReason,
      _NetPriceQuantityUnit,
      _StatisticalValueControl,
      _ShippingPoint,
      _ShippingType,
      _Route,
      _IncotermsClassification,
      _IncotermsVersion,
      _BusinessArea,
      _ReferenceSDDocumentCategory,
      _SDProcessStatus,
      _DeliveryStatus,
      _OrderRelatedBillingStatus,
      _MaterialPricingGroup,
      _CustomerPaymentTerms,
      _ItemGeneralIncompletionStatus,
      _ItemBillingIncompletionStatus,
      _ItemDelivIncompletionSts,
      _ItemCategory,
      _PlngDelivSchedInstrn,
      _DeliveryPriority,
      @Consumption.hidden: true
      _BusinessAreaText,
      @Consumption.hidden: true
      _MaterialText,
      @Consumption.hidden: true
      _ProductText,
      @Consumption.hidden: true
      _OrigMaterialText,
      @Consumption.hidden: true
      _ShippingPointText,
      _RequestedQuantityUnit,
      _TransactionCurrency,
      _ItemBillingBlockReason,
      _CreatedByUser,
      _ItemIsBillingRelevant,
      _SDDocumentRejectionStatus,
      _PartDesc,
      _WBSElementBasicData_2,
      _MainItemPricingRefProduct,
      
      //_ANA associations
      _SalesSchedgAgrmtType,
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
     SalesDocumentItem.SDDocumentCategory = 'E'
  or SalesDocumentItem.SDDocumentCategory = 'F';
```
