---
name: I_DEBITMEMOREQUESTITEM
description: Debitmemorequestitem
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
  - item-level
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQUESTITEM

**Debitmemorequestitem**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DebitMemoRequest` | ✓ | |  | `cast(SalesDocument as debit_memo_request preserving type)` |
| `DebitMemoRequestItem` | ✓ | |  | `cast(SalesDocumentItem as debit_memo_request_item preserving type)` |
| `DebitMemoRequestItemCategory` |  | |  | `SalesDocumentItemCategory` |
| `DebitMemoRequestItemType` |  | |  | `SalesDocumentItemType` |
| `IsReturnsItem` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `CreationTime` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `Division` |  | |  |  |
| `Material` |  | |  |  |
| `Product` |  | |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |
| `MaterialByCustomer` |  | |  |  |
| `Batch` |  | |  |  |
| `ProductHierarchyNode` |  | |  |  |
| `ProductCatalog` |  | |  |  |
| `MaterialGroup` |  | |  |  |
| `ProductGroup` |  | |  |  |
| `MaterialPricingGroup` |  | |  |  |
| `ProductTaxClassification1` |  | |  |  |
| `ProductTaxClassification2` |  | |  |  |
| `ProductTaxClassification3` |  | |  |  |
| `ProductTaxClassification4` |  | |  |  |
| `ProductTaxClassification5` |  | |  |  |
| `ProductTaxClassification6` |  | |  |  |
| `ProductTaxClassification7` |  | |  |  |
| `ProductTaxClassification8` |  | |  |  |
| `ProductTaxClassification9` |  | |  |  |
| `MatlAccountAssignmentGroup` |  | |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |
| `Plant` |  | |  |  |
| `DebitMemoRequestItemText` |  | |  | `SalesDocumentItemText` |
| `PurchaseOrderByCustomer` |  | |  |  |
| `PurchaseOrderByShipToParty` |  | |  |  |
| `CorrespncExternalReference` |  | |  |  |
| `CorrespncExtRefByShipToParty` |  | |  |  |
| `UnderlyingPurchaseOrderItem` |  | |  |  |
| `UndrlgPurOrdItmByShipToParty` |  | |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |
| `CustPurOrdTypeByShipToParty` |  | |  |  |
| `BaseUnit` |  | |  |  |
| `TargetQuantity` |  | |  |  |
| `TargetQuantityUnit` |  | |  |  |
| `TargetToBaseQuantityDnmntr` |  | |  |  |
| `TargetToBaseQuantityNmrtr` |  | |  |  |
| `RequestedQuantity` |  | |  |  |
| `RequestedQuantityUnit` |  | |  |  |
| `RequestedQuantityInBaseUnit` |  | |  |  |
| `ItemGrossWeight` |  | |  |  |
| `ItemNetWeight` |  | |  |  |
| `ItemWeightUnit` |  | |  |  |
| `ItemVolume` |  | |  |  |
| `ItemVolumeUnit` |  | |  |  |
| `ServicesRenderedDate` |  | |  |  |
| `SalesDistrict` |  | |  |  |
| `SalesDeal` |  | |  |  |
| `CustomerGroup` |  | |  |  |
| `SalesDocumentRjcnReason` |  | |  |  |
| `NetAmount` |  | |  |  |
| `TransactionCurrency` |  | |  |  |
| `PricingDate` |  | |  |  |
| `ExchangeRateDate` |  | |  |  |
| `PriceDetnExchangeRate` |  | |  |  |
| `NetPriceAmount` |  | |  |  |
| `NetPriceQuantity` |  | |  |  |
| `NetPriceQuantityUnit` |  | |  |  |
| `StatisticalValueControl` |  | |  |  |
| `TaxAmount` |  | |  |  |
| `CostAmount` |  | |  |  |
| `Subtotal1Amount` |  | |  |  |
| `Subtotal2Amount` |  | |  |  |
| `Subtotal3Amount` |  | |  |  |
| `Subtotal4Amount` |  | |  |  |
| `Subtotal5Amount` |  | |  |  |
| `Subtotal6Amount` |  | |  |  |
| `DebitMemoRequestCondition` |  | |  | `SalesDocumentCondition` |
| `IncotermsClassification` |  | |  |  |
| `IncotermsTransferLocation` |  | |  |  |
| `IncotermsLocation1` |  | |  |  |
| `IncotermsLocation2` |  | |  |  |
| `IncotermsVersion` |  | |  |  |
| `BillingDocumentDate` |  | |  |  |
| `ItemIsBillingRelevant` |  | |  |  |
| `ItemBillingBlockReason` |  | |  |  |
| `ReferenceBillingPlan` |  | |  |  |
| `ReferenceBillingPlanItem` |  | |  |  |
| `CustomerPaymentTerms` |  | |  |  |
| `PaymentMethod` |  | |  |  |
| `FiscalYear` |  | |  |  |
| `FiscalPeriod` |  | |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |
| `BusinessArea` |  | |  |  |
| `ControllingArea` |  | |  |  |
| `ProfitCenter` |  | |  |  |
| `WBSElement` |  | |  |  |
| `WBSElementInternalID` |  | |  |  |
| `OrderID` |  | |  |  |
| `ControllingObject` |  | |  |  |
| `ProfitabilitySegment` |  | |  |  |
| `ProfitabilitySegment_2` |  | |  |  |
| `OriginSDDocument` |  | |  |  |
| `OriginSDDocumentItem` |  | |  |  |
| `ReferenceSDDocument` |  | |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |
| `HigherLevelItem` |  | |  |  |
| `SDProcessStatus` |  | |  |  |
| `OrderRelatedBillingStatus` |  | |  |  |
| `BillingBlockStatus` |  | |  |  |
| `ItemGeneralIncompletionStatus` |  | |  |  |
| `ItemBillingIncompletionStatus` |  | |  |  |
| `PricingIncompletionStatus` |  | |  |  |
| `SDDocumentRejectionStatus` |  | |  |  |
| `TotalSDDocReferenceStatus` |  | |  |  |
| `DebitMemoRequestType` |  | |  | `SalesDocumentType` |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `OrganizationDivision` |  | |  |  |
| `SalesOffice` |  | |  |  |
| `SalesGroup` |  | |  |  |
| `SoldToParty` |  | |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |
| `DebitMemoRequestDate` |  | |  | `SalesDocumentDate` |
| `SDDocumentReason` |  | |  |  |
| `ShipToParty` |  | |  |  |
| `PayerParty` |  | |  |  |
| `BillToParty` |  | |  |  |
| `SalesEmployee` |  | |  |  |
| `ResponsibleEmployee` |  | |  |  |
| `SalesEmployeeWorkAgreement` |  | |  |  |
| `ResponsibleEmployeeWorkAgrmt` |  | |  |  |
| `_BusinessAreaText` | | ✓ | | |
| `_MaterialText` | | ✓ | | |
| `_ProductText` | | ✓ | | |
| `_OrigMaterialText` | | ✓ | | |
| `_DebitMemoRequest` | | ✓ | | |
| `_DebitMemoRequestType` | | ✓ | | |
| `_Partner` | | ✓ | | |
| `_PricingElement` | | ✓ | | |
| `_HigherLevelItem` | | ✓ | | |
| `_StatisticalValueControl` | | ✓ | | |
| `_ItemCategory` | | ✓ | | |
| `_CreatedByUser` | | ✓ | | |
| `_Division` | | ✓ | | |
| `_Material` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_OriginallyRequestedMaterial` | | ✓ | | |
| `_MaterialPlant` | | ✓ | | |
| `_ProductHierarchyNode` | | ✓ | | |
| `_MaterialGroup` | | ✓ | | |
| `_ProductGroup` | | ✓ | | |
| `_MaterialPricingGroup` | | ✓ | | |
| `_AdditionalMaterialGroup1` | | ✓ | | |
| `_AdditionalMaterialGroup2` | | ✓ | | |
| `_AdditionalMaterialGroup3` | | ✓ | | |
| `_AdditionalMaterialGroup4` | | ✓ | | |
| `_AdditionalMaterialGroup5` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_BaseUnit` | | ✓ | | |
| `_TargetQuantityUnit` | | ✓ | | |
| `_RequestedQuantityUnit` | | ✓ | | |
| `_ItemWeightUnit` | | ✓ | | |
| `_ItemVolumeUnit` | | ✓ | | |
| `_SalesDistrict` | | ✓ | | |
| `_SalesDeal` | | ✓ | | |
| `_CustomerGroup` | | ✓ | | |
| `_CustomerPurchaseOrderType` | | ✓ | | |
| `_CustPurOrdTypeByShipToParty` | | ✓ | | |
| `_SalesDocumentRjcnReason` | | ✓ | | |
| `_TransactionCurrency` | | ✓ | | |
| `_NetPriceQuantityUnit` | | ✓ | | |
| `_IncotermsClassification` | | ✓ | | |
| `_IncotermsVersion` | | ✓ | | |
| `_ItemIsBillingRelevant` | | ✓ | | |
| `_ItemBillingBlockReason` | | ✓ | | |
| `_CustomerPaymentTerms` | | ✓ | | |
| `_CustomerAccountAssgmtGroup` | | ✓ | | |
| `_BusinessArea` | | ✓ | | |
| `_ReferenceSDDocument` | | ✓ | | |
| `_ReferenceSDDocumentItem` | | ✓ | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | |
| `_SDProcessStatus` | | ✓ | | |
| `_OrderRelatedBillingStatus` | | ✓ | | |
| `_BillingBlockStatus` | | ✓ | | |
| `_ItemGeneralIncompletionStatus` | | ✓ | | |
| `_ItemBillingIncompletionStatus` | | ✓ | | |
| `_PricingIncompletionStatus` | | ✓ | | |
| `_SDDocumentRejectionStatus` | | ✓ | | |
| `_TotalSDDocReferenceStatus` | | ✓ | | |
| `_MatlAccountAssignmentGroup` | | ✓ | | |
| `_SalesOrganization` | | ✓ | | |
| `_DistributionChannel` | | ✓ | | |
| `_OrganizationDivision` | | ✓ | | |
| `_SalesOffice` | | ✓ | | |
| `_SalesGroup` | | ✓ | | |
| `_SoldToParty` | | ✓ | | |
| `_AdditionalCustomerGroup1` | | ✓ | | |
| `_AdditionalCustomerGroup2` | | ✓ | | |
| `_AdditionalCustomerGroup3` | | ✓ | | |
| `_AdditionalCustomerGroup4` | | ✓ | | |
| `_AdditionalCustomerGroup5` | | ✓ | | |
| `_SDDocumentReason` | | ✓ | | |
| `_ShipToParty` | | ✓ | | |
| `_PayerParty` | | ✓ | | |
| `_BillToParty` | | ✓ | | |
| `_SalesEmployee` | | ✓ | | |
| `_ResponsibleEmployee` | | ✓ | | |
| `_WBSElementBasicData_2` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_MaterialText` | `I_MaterialText` | [0..*] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_OrigMaterialText` | `I_MaterialText` | [0..*] |
| `_DebitMemoRequest` | `I_DebitMemoRequest` | [1..1] |
| `_DebitMemoRequestType` | `I_DebitMemoRequestType` | [0..1] |
| `_Partner` | `I_DebitMemoReqItemPartner` | [0..*] |
| `_PricingElement` | `I_DebitMemoReqItemPrcgElmnt` | [0..*] |
| `_HigherLevelItem` | `I_DebitMemoRequestItem` | [0..1] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DebitMemoRequestItem'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]   
@EndUserText.label: 'Debit Memo Request Item'
@Metadata.allowExtensions: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AccessControl.privilegedAssociations: [ '_Partner' ,'_CreatedByUser' ,'_BusinessAreaText','_MaterialText','_ProductText','_OrigMaterialText'   ]
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AbapCatalog.sqlViewName: 'ISDDEBMEMOREQITM'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.sapObjectNodeType.name: 'DebitMemoRequestItem'

@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbap', role: #MAIN,
                    viewElement: ['DebitMemoRequest', 'DebitMemoRequestItem'],
                    tableElement: ['vbeln', 'posnr']
                },
                {
                    table: 'vbak', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['DebitMemoRequest'],
                    tableElement: ['vbeln']},
                {
                    table: 'vbkd', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['DebitMemoRequest', 'DebitMemoRequestItem'],
                    tableElement: ['vbeln', 'posnr']
                },   
                {
                    table: 'veda', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['DebitMemoRequest', 'DebitMemoRequestItem'],
                    tableElement: ['vbeln', 'vposn']
                }       
            ]
        }
    }
 }

define view I_DebitMemoRequestItem
  as select from I_SalesDocumentItem as SalesDocumentItem
  //Associations

  //--[ GENERATED:012:GFBfhyK17jY4okn0BRdW}G
  association [0..*] to I_BusinessAreaText          as _BusinessAreaText on  $projection.BusinessArea                = _BusinessAreaText.BusinessArea
  association [0..*] to I_MaterialText              as _MaterialText     on  $projection.Material                    = _MaterialText.Material
  association [0..*] to I_ProductText                  as _ProductText       on  $projection.Product = _ProductText.Product
  association [0..*] to I_MaterialText              as _OrigMaterialText on  $projection.OriginallyRequestedMaterial = _OrigMaterialText.Material
  // ]--GENERATED
  association[1..1] to I_DebitMemoRequest           as _DebitMemoRequest     on $projection.DebitMemoRequest            = _DebitMemoRequest.DebitMemoRequest
  association[0..1] to I_DebitMemoRequestType       as _DebitMemoRequestType on $projection.DebitMemoRequestType       = _DebitMemoRequestType.DebitMemoRequestType
  
  association [0..*] to I_DebitMemoReqItemPartner   as _Partner          on  $projection.DebitMemoRequest            = _Partner.DebitMemoRequest
                                                                               and $projection.DebitMemoRequestItem        = _Partner.DebitMemoRequestItem
  association [0..*] to I_DebitMemoReqItemPrcgElmnt as _PricingElement   on  $projection.DebitMemoRequest            = _PricingElement.DebitMemoRequest
                                                                               and $projection.DebitMemoRequestItem        = _PricingElement.DebitMemoRequestItem
  association [0..1] to I_DebitMemoRequestItem     as _HigherLevelItem   on  $projection.DebitMemoRequest          = _HigherLevelItem.DebitMemoRequest
                                                                             and $projection.HigherLevelItem       = _HigherLevelItem.DebitMemoRequestItem

  //Extensibility  
  association [0..1] to E_SalesDocumentItemBasic    as _Extension        on  SalesDocumentItem.SalesDocument         = _Extension.SalesDocument
                                                                         and SalesDocumentItem.SalesDocumentItem     = _Extension.SalesDocumentItem

{
      //Key
      @ObjectModel.foreignKey.association: '_DebitMemoRequest'
  key cast(SalesDocument as debit_memo_request preserving type)          as DebitMemoRequest,
      @ObjectModel.text.element: 'DebitMemoRequestItemText'
  key cast(SalesDocumentItem as debit_memo_request_item preserving type) as DebitMemoRequestItem,

      //Category
      @ObjectModel.foreignKey.association: '_ItemCategory'
      SalesDocumentItemCategory                                          as DebitMemoRequestItemCategory,
      SalesDocumentItemType                                              as DebitMemoRequestItemType,
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
      @Consumption.valueHelpDefinition: [                        //--[ GENERATED:012:GFBfhyK17jY4okn0BRdW}G
        { entity:  { name:    'I_MaterialStdVH',
                     element: 'Material' }
        }]
      @ObjectModel.text.association: '_MaterialText'             // ]--GENERATED
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
      
      @Consumption.valueHelpDefinition: [                        //--[ GENERATED:012:GFBfhyK17jY4okn0BRdW}G
        { entity:  { name:    'I_MaterialStdVH',
                     element: 'Material' }
        }]
      @ObjectModel.text.association: '_OrigMaterialText'         // ]--GENERATED
      @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
      OriginallyRequestedMaterial,
      MaterialByCustomer,
      Batch,
      ProductHierarchyNode,
      ProductCatalog,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'ProductGroup'
      MaterialGroup,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      @Analytics.internalName: #LOCAL
      ProductGroup,
      @ObjectModel.foreignKey.association: '_MaterialPricingGroup'
      MaterialPricingGroup,
      ProductTaxClassification1,
      ProductTaxClassification2,
      ProductTaxClassification3,
      ProductTaxClassification4,
      ProductTaxClassification5,
      ProductTaxClassification6,
      ProductTaxClassification7,
      ProductTaxClassification8,
      ProductTaxClassification9,
      MatlAccountAssignmentGroup,
      
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

      //Sales
      @Semantics.text: true
      SalesDocumentItemText                                              as DebitMemoRequestItemText,
      PurchaseOrderByCustomer,
      PurchaseOrderByShipToParty,
      CorrespncExternalReference,
      CorrespncExtRefByShipToParty,
      UnderlyingPurchaseOrderItem,
      UndrlgPurOrdItmByShipToParty,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerPurchaseOrderType'
      CustomerPurchaseOrderType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustPurOrdTypeByShipToParty'
      CustPurOrdTypeByShipToParty,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TargetQuantityUnit'
      TargetQuantity,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_TargetQuantityUnit'
      TargetQuantityUnit,

      TargetToBaseQuantityDnmntr,
      TargetToBaseQuantityNmrtr,

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

      ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      @Consumption.valueHelpDefinition: [              //--[ GENERATED:012:GFBfhyK17jY4okn0BRdW}G
        { entity:  { name:    'I_SalesDealStdVH',
                     element: 'SalesDeal' }    }]      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_SalesDeal'
      SalesDeal,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
      SalesDocumentRjcnReason,

      //Contract
      //TargetQuantityUnitDcmls,

      //Pricing
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      NetAmount,

      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,

      PricingDate,
      ExchangeRateDate,
      PriceDetnExchangeRate,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      NetPriceAmount,

      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      NetPriceQuantity,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_NetPriceQuantityUnit'
      NetPriceQuantityUnit,

      @ObjectModel.foreignKey.association: '_StatisticalValueControl'
      StatisticalValueControl,
      _StatisticalValueControl,

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
      SalesDocumentCondition as DebitMemoRequestCondition,

      //Shipping
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion,

      //Billing
      BillingDocumentDate,
      @ObjectModel.foreignKey.association: '_ItemIsBillingRelevant'
      ItemIsBillingRelevant,
      @ObjectModel.foreignKey.association: '_ItemBillingBlockReason'
      ItemBillingBlockReason,
      ReferenceBillingPlan,
      ReferenceBillingPlanItem,

      //Payment
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      CustomerPaymentTerms,
      PaymentMethod,
      
      //Accounting
      FiscalYear,
      FiscalPeriod,
      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      CustomerAccountAssignmentGroup,
      @Consumption.valueHelpDefinition: [                         //--[ GENERATED:012:GFBfhyK17jY4okn0BRdW}G
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.text.association: '_BusinessAreaText'          // ]--GENERATED
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @Analytics.internalName: #LOCAL
      ControllingArea,
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
      @API.element.successor:    'ProfitabilitySegment_2'
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
      @ObjectModel.foreignKey.association: '_HigherLevelItem'
      @Analytics.internalName: #LOCAL
      HigherLevelItem,

      //Status
      @ObjectModel.foreignKey.association: '_SDProcessStatus'
      SDProcessStatus,
      @ObjectModel.foreignKey.association: '_OrderRelatedBillingStatus'
      OrderRelatedBillingStatus,
      @ObjectModel.foreignKey.association: '_BillingBlockStatus'
      BillingBlockStatus,
      @ObjectModel.foreignKey.association: '_ItemGeneralIncompletionStatus'
      ItemGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemBillingIncompletionStatus'
      ItemBillingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_PricingIncompletionStatus'
      PricingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_SDDocumentRejectionStatus'
      SDDocumentRejectionStatus,
      @ObjectModel.foreignKey.association: '_TotalSDDocReferenceStatus'
      TotalSDDocReferenceStatus,
      
      @ObjectModel.foreignKey.association: '_DebitMemoRequestType'
      SalesDocumentType as DebitMemoRequestType,
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
      SalesDocumentDate as DebitMemoRequestDate,
      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      SDDocumentReason,
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
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
                                    #TO_COMPOSITION_ROOT]
      _DebitMemoRequest,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Partner,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PricingElement,
      _ItemCategory,
      _CreatedByUser,
      _Division,
      _Material,
      _Product,
      _OriginallyRequestedMaterial,
      _MaterialPlant,
      _ProductHierarchyNode,
      _MaterialGroup,
      _ProductGroup,
      _MaterialPricingGroup,
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _Plant,
      _BaseUnit,
      _TargetQuantityUnit,
      _RequestedQuantityUnit,
      _ItemWeightUnit,
      _ItemVolumeUnit,
      _SalesDistrict,
      _SalesDeal,
      _CustomerGroup,
      _CustomerPurchaseOrderType,
      _CustPurOrdTypeByShipToParty,
      _SalesDocumentRjcnReason,
      _TransactionCurrency,
      _NetPriceQuantityUnit,
      _IncotermsClassification,
      _IncotermsVersion,
      _ItemIsBillingRelevant,
      _ItemBillingBlockReason,
      _CustomerPaymentTerms,
      //_PaymentMethod,
      _CustomerAccountAssgmtGroup,
      _BusinessArea,
      _ReferenceSDDocument,
      _ReferenceSDDocumentItem,
      _ReferenceSDDocumentCategory,
      _SDProcessStatus,
      _OrderRelatedBillingStatus,
      _BillingBlockStatus,
      _ItemGeneralIncompletionStatus,
      _ItemBillingIncompletionStatus,
      _PricingIncompletionStatus,
      _SDDocumentRejectionStatus,
      _TotalSDDocReferenceStatus,
      _MatlAccountAssignmentGroup,
      
      //_ANA associations
      _DebitMemoRequestType,
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
      _ShipToParty,
      _PayerParty,
      _BillToParty,
      _SalesEmployee,
      _ResponsibleEmployee,
      //--[ GENERATED:012:GFBfhyK17jY4okn0BRdW}G
      @Consumption.hidden: true
      _BusinessAreaText,
      @Consumption.hidden: true
      _MaterialText,
      @Consumption.hidden: true
      _ProductText,
      @Consumption.hidden: true
      _OrigMaterialText,
      // ]--GENERATED
     _WBSElementBasicData_2,
      _HigherLevelItem

}
where
  SDDocumentCategory = 'L';
```
