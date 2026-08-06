---
name: I_SALESCONTRACTITEM
description: Salescontractitem
app_component: SD-SLS-OA-CCO-2CL
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
  - sales-contract
  - contract
  - item-level
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRACTITEM

**Salescontractitem**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesContract` | `cast(SalesDocument as sales_contract preserving type)` |
| key `SalesContractItem` | `cast(SalesDocumentItem as sales_contract_item preserving type)` |
| `SalesContractItemCategory` | `SalesDocumentItemCategory` |
| `SalesDocumentItemType` | `SalesDocumentItemType` |
| `IsReturnsItem` | `IsReturnsItem` |
| `CompletionRule` | `CompletionRule` |
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
| `ProductHierarchyNode` | `ProductHierarchyNode` |
| `ProductCatalog` | `ProductCatalog` |
| `MaterialSubstitutionReason` | `MaterialSubstitutionReason` |
| `MaterialGroup` | `MaterialGroup` |
| `ProductGroup` | `ProductGroup` |
| `MaterialPricingGroup` | `MaterialPricingGroup` |
| `AdditionalMaterialGroup1` | `AdditionalMaterialGroup1` |
| `AdditionalMaterialGroup2` | `AdditionalMaterialGroup2` |
| `AdditionalMaterialGroup3` | `AdditionalMaterialGroup3` |
| `AdditionalMaterialGroup4` | `AdditionalMaterialGroup4` |
| `AdditionalMaterialGroup5` | `AdditionalMaterialGroup5` |
| `Plant` | `Plant` |
| `Batch` | `Batch` |
| `StorageLocation` | `StorageLocation` |
| `ProductConfiguration` | `ProductConfiguration` |
| `BillOfMaterial` | `cast(BillOfMaterial as char8 preserving type )` |
| `ValContrRlvtProdUnivHierarchy` | `ValContrRlvtProdUnivHierarchy` |
| `ValContrRlvtProdUnivHierNode` | `cast(ValContrRlvtProdUnivHierNode as tdd_valcontr_prodh_node_value preserving type)` |
| `SalesContractItemText` | `SalesDocumentItemText` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `OrderQuantity` | `OrderQuantity` |
| `OrderQuantityUnit` | `OrderQuantityUnit` |
| `OrderToBaseQuantityDnmntr` | `OrderToBaseQuantityDnmntr` |
| `OrderToBaseQuantityNmrtr` | `OrderToBaseQuantityNmrtr` |
| `BaseUnit` | `BaseUnit` |
| `TargetQuantity` | `TargetQuantity` |
| `TargetQuantityUnit` | `TargetQuantityUnit` |
| `TargetToBaseQuantityDnmntr` | `TargetToBaseQuantityDnmntr` |
| `TargetToBaseQuantityNmrtr` | `TargetToBaseQuantityNmrtr` |
| `RequestedQuantity` | `RequestedQuantity` |
| `RequestedQuantityUnit` | `RequestedQuantityUnit` |
| `RequestedQuantityInBaseUnit` | `RequestedQuantityInBaseUnit` |
| `ItemGrossWeight` | `ItemGrossWeight` |
| `ItemNetWeight` | `ItemNetWeight` |
| `ItemWeightUnit` | `ItemWeightUnit` |
| `ItemVolume` | `ItemVolume` |
| `ItemVolumeUnit` | `ItemVolumeUnit` |
| `ServicesRenderedDate` | `ServicesRenderedDate` |
| `SalesDistrict` | `SalesDistrict` |
| `SalesDeal` | `SalesDeal` |
| `SalesPromotion` | `SalesPromotion` |
| `RetailPromotion` | `RetailPromotion` |
| `CustomerGroup` | `CustomerGroup` |
| `SalesDocumentRjcnReason` | `SalesDocumentRjcnReason` |
| `SalesContractReleasedAmount` | `_SalesContractReleasedAmount.SalesContractReleasedAmount` |
| `ItemOrderProbabilityInPercent` | `ItemOrderProbabilityInPercent` |
| `OutlineAgreementTargetAmount` | `OutlineAgreementTargetAmount` |
| `SalesContractValidityStartDate` | `SalesContractValidityStartDate` |
| `SalesContractValidityEndDate` | `SalesContractValidityEndDate` |
| `NmbrOfSalesContractValdtyPerd` | `NmbrOfSalesContractValdtyPerd` |
| `SalesContractValidityPerdUnit` | `SalesContractValidityPerdUnit` |
| `SalesContractValidityPerdCat` | `SalesContractValidityPerdCat` |
| `SalesContractSignedDate` | `SalesContractSignedDate` |
| `EquipmentInstallationDate` | `EquipmentInstallationDate` |
| `EquipmentDeliveryAccptcDate` | `EquipmentDeliveryAccptcDate` |
| `EquipmentDismantlingDate` | `EquipmentDismantlingDate` |
| `SalesContractCanclnProcedure` | `SalesContractCanclnProcedure` |
| `RequestedCancellationDate` | `RequestedCancellationDate` |
| `SlsContractCanclnReqRcptDate` | `SlsContractCanclnReqRcptDate` |
| `CanclnDocByContrPartner` | `CanclnDocByContrPartner` |
| `ContractPartnerCanclnDocDate` | `ContractPartnerCanclnDocDate` |
| `SalesContractCanclnParty` | `SalesContractCanclnParty` |
| `SalesContractCanclnReason` | `SalesContractCanclnReason` |
| `SalesContractFollowUpAction` | `SalesContractFollowUpAction` |
| `SlsContractFollowUpActionDate` | `SlsContractFollowUpActionDate` |
| `SalesDocumentItemProcgCode` | `SalesDocumentItemProcgCode` |
| `NetAmount` | `NetAmount` |
| `TransactionCurrency` | `TransactionCurrency` |
| `PricingDate` | `PricingDate` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `PriceDetnExchangeRate` | `PriceDetnExchangeRate` |
| `NetPriceAmount` | `NetPriceAmount` |
| `NetPriceQuantity` | `NetPriceQuantity` |
| `NetPriceQuantityUnit` | `NetPriceQuantityUnit` |
| `CustomerPriceGroup` | `CustomerPriceGroup` |
| `StatisticalValueControl` | `StatisticalValueControl` |
| `MatlAccountAssignmentGroup` | `MatlAccountAssignmentGroup` |
| `TaxAmount` | `TaxAmount` |
| `CostAmount` | `CostAmount` |
| `Subtotal1Amount` | `Subtotal1Amount` |
| `Subtotal2Amount` | `Subtotal2Amount` |
| `Subtotal3Amount` | `Subtotal3Amount` |
| `Subtotal4Amount` | `Subtotal4Amount` |
| `Subtotal5Amount` | `Subtotal5Amount` |
| `Subtotal6Amount` | `Subtotal6Amount` |
| `SalesContractCondition` | `SalesDocumentCondition` |
| `ShippingPoint` | `ShippingPoint` |
| `ShippingType` | `ShippingType` |
| `Route` | `Route` |
| `OverdelivTolrtdLmtRatioInPct` | `OverdelivTolrtdLmtRatioInPct` |
| `UnderdelivTolrtdLmtRatioInPct` | `UnderdelivTolrtdLmtRatioInPct` |
| `IncotermsClassification` | `IncotermsClassification` |
| `IncotermsTransferLocation` | `IncotermsTransferLocation` |
| `IncotermsLocation1` | `IncotermsLocation1` |
| `IncotermsLocation2` | `IncotermsLocation2` |
| `IncotermsVersion` | `IncotermsVersion` |
| `BillingDocumentDate` | `BillingDocumentDate` |
| `ItemBillingBlockReason` | `ItemBillingBlockReason` |
| `BillingBlockStatus` | `BillingBlockStatus` |
| `BillingPlan` | `BillingPlan` |
| `CustomerPaymentTerms` | `CustomerPaymentTerms` |
| `PaymentMethod` | `PaymentMethod` |
| `FixedValueDate` | `FixedValueDate` |
| `AdditionalValueDays` | `AdditionalValueDays` |
| `FiscalYear` | `FiscalYear` |
| `FiscalPeriod` | `FiscalPeriod` |
| `CustomerAccountAssignmentGroup` | `CustomerAccountAssignmentGroup` |
| `BusinessArea` | `BusinessArea` |
| `ControllingArea` | `ControllingArea` |
| `ProfitCenter` | `ProfitCenter` |
| `WBSElement` | `WBSElement` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `OrderID` | `OrderID` |
| `ControllingObject` | `ControllingObject` |
| `ProfitabilitySegment` | `ProfitabilitySegment` |
| `ProfitabilitySegment_2` | `ProfitabilitySegment_2` |
| `OriginSDDocument` | `OriginSDDocument` |
| `OriginSDDocumentItem` | `OriginSDDocumentItem` |
| `ReferenceSDDocument` | `ReferenceSDDocument` |
| `ReferenceSDDocumentItem` | `}] ReferenceSDDocumentItem` |
| `ReferenceSDDocumentCategory` | `ReferenceSDDocumentCategory` |
| `HigherLevelItem` | `HigherLevelItem` |
| `SDProcessStatus` | `SDProcessStatus` |
| `ItemGeneralIncompletionStatus` | `ItemGeneralIncompletionStatus` |
| `ItemBillingIncompletionStatus` | `ItemBillingIncompletionStatus` |
| `PricingIncompletionStatus` | `PricingIncompletionStatus` |
| `ItemDeliveryIncompletionStatus` | `ItemDeliveryIncompletionStatus` |
| `SDDocumentRejectionStatus` | `SDDocumentRejectionStatus` |
| `TotalSDDocReferenceStatus` | `TotalSDDocReferenceStatus` |
| `SDDocReferenceStatus` | `SDDocReferenceStatus` |
| `ContractItemDownPaymentStatus` | `ContractItemDownPaymentStatus` |
| `ChmlCmplncStatus` | `ChmlCmplncStatus` |
| `DangerousGoodsStatus` | `DangerousGoodsStatus` |
| `SafetyDataSheetStatus` | `SafetyDataSheetStatus` |
| `TrdCmplncEmbargoSts` | `TrdCmplncEmbargoSts` |
| `TrdCmplncSnctndListChkSts` | `TrdCmplncSnctndListChkSts` |
| `OvrlTrdCmplncLegalCtrlChkSts` | `OvrlTrdCmplncLegalCtrlChkSts` |
| `SalesContractType` | `cast( SalesDocumentType as sales_contract_type preserving type )` |
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
| `SalesContractDate` | `SalesDocumentDate` |
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
| `_SalesContract` | *Association* |
| `_SalesContractType` | *Association* |
| `_BusinessAreaText` | *Association* |
| `_MaterialText` | *Association* |
| `_ProductText` | *Association* |
| `_OriginalRequestedMaterialText` | *Association* |
| `_ShippingPointText` | *Association* |
| `_PricingElement` | *Association* |
| `_ItemBillingPlan` | *Association* |
| `_HigherLevelItem` | *Association* |
| `_ProdUnivHierarchyNodeText` | *Association* |
| `_StatisticalValueControl` | *Association* |
| `_Partner` | *Association* |
| `_ItemCategory` | *Association* |
| `_CreatedByUser` | *Association* |
| `_Division` | *Association* |
| `_Material` | *Association* |
| `_Product` | *Association* |
| `_OriginallyRequestedMaterial` | *Association* |
| `_MaterialPlant` | *Association* |
| `_ProductHierarchyNode` | *Association* |
| `_MaterialSubstitutionReason` | *Association* |
| `_MaterialGroup` | *Association* |
| `_ProductGroup` | *Association* |
| `_MaterialPricingGroup` | *Association* |
| `_AdditionalMaterialGroup1` | *Association* |
| `_AdditionalMaterialGroup2` | *Association* |
| `_AdditionalMaterialGroup3` | *Association* |
| `_AdditionalMaterialGroup4` | *Association* |
| `_AdditionalMaterialGroup5` | *Association* |
| `_MatlAccountAssignmentGroup` | *Association* |
| `_Plant` | *Association* |
| `_StorageLocation` | *Association* |
| `_OrderQuantityUnit` | *Association* |
| `_BaseUnit` | *Association* |
| `_TargetQuantityUnit` | *Association* |
| `_RequestedQuantityUnit` | *Association* |
| `_ItemWeightUnit` | *Association* |
| `_ItemVolumeUnit` | *Association* |
| `_SalesDistrict` | *Association* |
| `_SalesDeal` | *Association* |
| `_CustomerGroup` | *Association* |
| `_SalesDocumentRjcnReason` | *Association* |
| `_SalesContractValidityPerdUnit` | *Association* |
| `_SalesContractCanclnParty` | *Association* |
| `_SalesContractCanclnReason` | *Association* |
| `_ContractItemDownPaymentStatus` | *Association* |
| `_SalesDocumentItemProcgCode` | *Association* |
| `_NetPriceQuantityUnit` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_ShippingPoint` | *Association* |
| `_IncotermsClassification` | *Association* |
| `_IncotermsVersion` | *Association* |
| `_ItemBillingBlockReason` | *Association* |
| `_CustomerPaymentTerms` | *Association* |
| `_CustomerAccountAssgmtGroup` | *Association* |
| `_BusinessArea` | *Association* |
| `_ReferenceSDDocument` | *Association* |
| `_ReferenceSDDocumentItem` | *Association* |
| `_BillingBlockStatus` | *Association* |
| `_ReferenceSDDocumentCategory` | *Association* |
| `_SDProcessStatus` | *Association* |
| `_SDDocumentRejectionStatus` | *Association* |
| `_ItemGeneralIncompletionStatus` | *Association* |
| `_ItemBillingIncompletionStatus` | *Association* |
| `_PricingIncompletionStatus` | *Association* |
| `_ItemDelivIncompletionSts` | *Association* |
| `_TotalSDDocReferenceStatus` | *Association* |
| `_SDDocReferenceStatus` | *Association* |
| `_WBSElementBasicData_2` | *Association* |
| `_ShippingType` | *Association* |
| `_Route` | *Association* |
| `_CustomerPriceGroup` | *Association* |
| `_ChmlCmplncStatus` | *Association* |
| `_DangerousGoodsStatus` | *Association* |
| `_SafetyDataSheetStatus` | *Association* |
| `_TrdCmplncEmbargoSts` | *Association* |
| `_TrdCmplncSnctndListChkSts` | *Association* |
| `_OvrlTrdCmplncLegalCtrlChkSts` | *Association* |
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
| `_SalesContract` | `I_SalesContract` | [1..1] |
| `_SalesContractType` | `I_SalesContractType` | [0..1] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_MaterialText` | `I_MaterialText` | [0..*] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_OriginalRequestedMaterialText` | `I_MaterialText` | [0..*] |
| `_ShippingPointText` | `I_ShippingPointText` | [0..*] |
| `_PricingElement` | `I_SlsContrItemPricingElement` | [0..*] |
| `_ItemBillingPlan` | `I_SalesContractItemBillingPlan` | [0..1] |
| `_SalesContractReleasedAmount` | `P_SalesContractReleasedAmount2` | [0..1] |
| `_HigherLevelItem` | `I_SalesContractItem` | [0..1] |
| `_ProdUnivHierarchyNodeText` | `I_ProdHierarchyNormalNodeT_2` | [0..*] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Contract Item'
@AbapCatalog:{
    sqlViewName: 'ISDSLSCONTRITEM',
    compiler.compareFilter: true,
    preserveKey: true
}
@ObjectModel:{
    representativeKey: 'SalesContractItem',
    usageType:{
        dataClass: #TRANSACTIONAL,
        serviceQuality: #C,
        sizeCategory: #L
        },
    supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE],
    modelingPattern: #ANALYTICAL_DIMENSION
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData.blocking: #('TRANSACTIONAL_DATA'),
    privilegedAssociations: [ '_Partner', '_CreatedByUser', '_BusinessAreaText', '_ShippingPointText', '_MaterialText' , '_ProductText', '_OriginalRequestedMaterialText']
}
@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel.sapObjectNodeType.name: 'SalesContractItem'

@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbap', role: #MAIN,
                    viewElement: ['SalesContract', 'SalesContractItem'],
                    tableElement: ['vbeln', 'posnr']
                },
                {
                    table: 'vbak', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesContract'],
                    tableElement: ['vbeln']},
                {
                    table: 'vbkd', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesContract', 'SalesContractItem'],
                    tableElement: ['vbeln', 'posnr']
                },
                {
                    table: 'veda', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesContract', 'SalesContractItem'],
                    tableElement: ['vbeln', 'vposn']
                }
            ]
        }
    }
 }


define view I_SalesContractItem
  as select from I_SalesDocumentItem as SalesDocumentItem
  //Associations
  association [1..1] to I_SalesContract                as _SalesContract                 on  $projection.SalesContract = _SalesContract.SalesContract
  association [0..1] to I_SalesContractType            as _SalesContractType             on  $projection.SalesContractType = _SalesContractType.SalesContractType
  //VH adoption 1805 CL
  association [0..*] to I_BusinessAreaText             as _BusinessAreaText              on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..*] to I_MaterialText                 as _MaterialText                  on  $projection.Material = _MaterialText.Material
  association [0..*] to I_ProductText                  as _ProductText                   on  $projection.Product = _ProductText.Product
  association [0..*] to I_MaterialText                 as _OriginalRequestedMaterialText on  $projection.OriginallyRequestedMaterial = _OriginalRequestedMaterialText.Material
  association [0..*] to I_ShippingPointText            as _ShippingPointText             on  $projection.ShippingPoint = _ShippingPointText.ShippingPoint
  association [0..*] to I_SlsContrItemPricingElement   as _PricingElement                on  $projection.SalesContract     = _PricingElement.SalesContract
                                                                                         and $projection.SalesContractItem = _PricingElement.SalesContractItem
  association [0..1] to I_SalesContractItemBillingPlan as _ItemBillingPlan               on  $projection.SalesContract     = _ItemBillingPlan.SalesContract
                                                                                         and $projection.SalesContractItem = _ItemBillingPlan.SalesContractItem
                                                                                         and $projection.BillingPlan       = _ItemBillingPlan.BillingPlan
  association [0..1] to P_SalesContractReleasedAmount2 as _SalesContractReleasedAmount   on  $projection.SalesContract     = _SalesContractReleasedAmount.SalesContract
                                                                                         and $projection.SalesContractItem = _SalesContractReleasedAmount.SalesContractItem
  association [0..1] to I_SalesContractItem            as _HigherLevelItem               on  $projection.SalesContract   = _HigherLevelItem.SalesContract
                                                                                         and $projection.HigherLevelItem = _HigherLevelItem.SalesContractItem
  association [0..*] to I_ProdHierarchyNormalNodeT_2   as _ProdUnivHierarchyNodeText     on  $projection.ValContrRlvtProdUnivHierNode = _ProdUnivHierarchyNodeText.ProdUnivHierarchyNode
  //Extensibility
  association [0..1] to E_SalesDocumentItemBasic       as _Extension                     on  SalesDocumentItem.SalesDocument     = _Extension.SalesDocument
                                                                                         and SalesDocumentItem.SalesDocumentItem = _Extension.SalesDocumentItem

{
      //Key
      //--[ GENERATED:012:GlBfhyJl7jY4vnYCeAyGn0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesContractStdVH',
                     element: 'SalesContract' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_SalesContract'
  key cast(SalesDocument as sales_contract preserving type)          as SalesContract,
      @ObjectModel.text.element: 'SalesContractItemText'
  key cast(SalesDocumentItem as sales_contract_item preserving type) as SalesContractItem,

      //Category
      @ObjectModel.foreignKey.association: '_ItemCategory'
      SalesDocumentItemCategory                                      as SalesContractItemCategory,
      SalesDocumentItemType,
      IsReturnsItem,
      CompletionRule,

      //Admin
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      //Organization
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
      @ObjectModel.foreignKey.association: '_Product'
      @Analytics.internalName: #LOCAL
      Product,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MaterialStdVH',
                     element: 'Material' }
        }]
      @ObjectModel.text.association: '_OriginalRequestedMaterialText'
      @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
      OriginallyRequestedMaterial,
      MaterialByCustomer,
      InternationalArticleNumber,
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
      @ObjectModel.foreignKey.association: '_MaterialPricingGroup'
      MaterialPricingGroup,
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
      Batch,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      StorageLocation,
      ProductConfiguration,
      cast(BillOfMaterial as char8 preserving type )                 as BillOfMaterial,
      
      ValContrRlvtProdUnivHierarchy,
      cast(ValContrRlvtProdUnivHierNode as tdd_valcontr_prodh_node_value preserving type)       as ValContrRlvtProdUnivHierNode,   

      //Sales
      @Semantics.text: true
      SalesDocumentItemText                                          as SalesContractItemText,
      PurchaseOrderByCustomer,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      OrderQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      OrderQuantityUnit,
      OrderToBaseQuantityDnmntr,
      OrderToBaseQuantityNmrtr,
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

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _SalesContractReleasedAmount.SalesContractReleasedAmount,

      //Quotation
      ItemOrderProbabilityInPercent,

      // Contract
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      OutlineAgreementTargetAmount,
      //TargetQuantityUnitDcmls,
      SalesContractValidityStartDate,
      SalesContractValidityEndDate,
      NmbrOfSalesContractValdtyPerd,
      @ObjectModel.foreignKey.association: '_SalesContractValidityPerdUnit'
      SalesContractValidityPerdUnit,
      SalesContractValidityPerdCat,
      SalesContractSignedDate,
      EquipmentInstallationDate,
      EquipmentDeliveryAccptcDate,
      EquipmentDismantlingDate,
      SalesContractCanclnProcedure,
      RequestedCancellationDate,
      SlsContractCanclnReqRcptDate,
      CanclnDocByContrPartner,
      ContractPartnerCanclnDocDate,
      @ObjectModel.foreignKey.association: '_SalesContractCanclnParty'
      SalesContractCanclnParty,
      @ObjectModel.foreignKey.association: '_SalesContractCanclnReason'
      SalesContractCanclnReason,
      SalesContractFollowUpAction,
      SlsContractFollowUpActionDate,
      @ObjectModel.foreignKey.association: '_SalesDocumentItemProcgCode'
      SalesDocumentItemProcgCode,

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
      @DefaultAggregation: #NONE
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      NetPriceQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_NetPriceQuantityUnit'
      NetPriceQuantityUnit,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerPriceGroup'
      CustomerPriceGroup,

      @ObjectModel.foreignKey.association: '_StatisticalValueControl'
      StatisticalValueControl,
      _StatisticalValueControl,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_MatlAccountAssignmentGroup'
      MatlAccountAssignmentGroup,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TaxAmount,
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
      SalesDocumentCondition                                         as SalesContractCondition,

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
      @ObjectModel.foreignKey.association: '_Route'
      Route,
      OverdelivTolrtdLmtRatioInPct,
      UnderdelivTolrtdLmtRatioInPct,
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion,

      //Billing
      BillingDocumentDate,
      @ObjectModel.foreignKey.association: '_ItemBillingBlockReason'
      ItemBillingBlockReason,
      @ObjectModel.foreignKey.association: '_BillingBlockStatus'
      BillingBlockStatus,
      BillingPlan,

      //Payment
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      CustomerPaymentTerms,
      PaymentMethod,
      FixedValueDate,
      AdditionalValueDays,

      //Accounting
      FiscalYear,
      FiscalPeriod,
      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      CustomerAccountAssignmentGroup,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.text.association: '_BusinessAreaText'
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
      @API.element.successor: 'ProfitabilitySegment_2'
      ProfitabilitySegment,
      ProfitabilitySegment_2,
      OriginSDDocument,
      OriginSDDocumentItem,

      //Reference
      //--[ GENERATED:012:GlBfhyJl7jY4vnYCeAyGn0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesDocumentStdVH',
                     element: 'SalesDocument' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ReferenceSDDocument'
      ReferenceSDDocument,
      //--[ GENERATED:012:GlBfhyJl7jY4vnYCeAyGn0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesDocumentItemStdVH',
                     element: 'SalesDocumentItem' },
          additionalBinding: [{ localElement: 'ReferenceSDDocument',
                                element: 'SalesDocument' }]
        }]
      // ]--GENERATED
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
      @ObjectModel.foreignKey.association: '_SDDocReferenceStatus'
      SDDocReferenceStatus,
      @ObjectModel.foreignKey.association: '_ContractItemDownPaymentStatus'
      ContractItemDownPaymentStatus,

      // Product Compliance Status
      @ObjectModel.foreignKey.association: '_ChmlCmplncStatus'
      ChmlCmplncStatus,
      @ObjectModel.foreignKey.association: '_DangerousGoodsStatus'
      DangerousGoodsStatus,
      @ObjectModel.foreignKey.association: '_SafetyDataSheetStatus'
      SafetyDataSheetStatus,
      // Trade Compliance Status
      @ObjectModel.foreignKey.association: '_TrdCmplncEmbargoSts'
      TrdCmplncEmbargoSts,
      @ObjectModel.foreignKey.association: '_TrdCmplncSnctndListChkSts'
      TrdCmplncSnctndListChkSts,
      @ObjectModel.foreignKey.association: '_OvrlTrdCmplncLegalCtrlChkSts'
      OvrlTrdCmplncLegalCtrlChkSts,
      
      //_ANA Fields
      @ObjectModel.foreignKey.association: '_SalesContractType'
      cast( SalesDocumentType as sales_contract_type preserving type ) as SalesContractType,
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
      SalesDocumentDate as SalesContractDate,
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


      //Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
                                     #TO_COMPOSITION_ROOT]
      _SalesContract,
      _Partner,
      _ItemCategory,
      _CreatedByUser,
      _Division,
      _Material,
      _Product,
      _ItemBillingPlan,

      _OriginallyRequestedMaterial,
      _MaterialPlant,

      _ProductHierarchyNode,
      _MaterialSubstitutionReason,
      _MaterialGroup,
      _ProductGroup,
      _MaterialPricingGroup,
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _MatlAccountAssignmentGroup,
      _Plant,
      _StorageLocation,
      _HigherLevelItem,

      _OrderQuantityUnit,
      _BaseUnit,
      _TargetQuantityUnit,
      _RequestedQuantityUnit,
      _ItemWeightUnit,
      _ItemVolumeUnit,
      _SalesDistrict,
      _SalesDeal,
      _CustomerGroup,
      _SalesDocumentRjcnReason,

      _SalesContractValidityPerdUnit,
      _SalesContractCanclnParty,
      _SalesContractCanclnReason,
      _ContractItemDownPaymentStatus,
      _SalesDocumentItemProcgCode,
      _PricingElement,
      _NetPriceQuantityUnit,
      _TransactionCurrency,
      _ShippingPoint,
      _IncotermsClassification,
      _IncotermsVersion,
      _ItemBillingBlockReason,
      _CustomerPaymentTerms,
      //_PaymentMethod,
      _CustomerAccountAssgmtGroup,
      _BusinessArea,
      _ReferenceSDDocument,
      _ReferenceSDDocumentItem,
      _BillingBlockStatus,
      _ReferenceSDDocumentCategory,
      _SDProcessStatus,
      _SDDocumentRejectionStatus,
      _ItemGeneralIncompletionStatus,
      _ItemBillingIncompletionStatus,
      _PricingIncompletionStatus,
      _ItemDelivIncompletionSts,
      _TotalSDDocReferenceStatus,
      _SDDocReferenceStatus,
      _WBSElementBasicData_2,
      _ShippingType,
      _Route,
      _CustomerPriceGroup,

      _ChmlCmplncStatus,
      _DangerousGoodsStatus,
      _SafetyDataSheetStatus,
      _TrdCmplncEmbargoSts,
      _TrdCmplncSnctndListChkSts,
      _OvrlTrdCmplncLegalCtrlChkSts,
      
      //_ANA associations
      _SalesContractType,
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
      _ResponsibleEmployee,

      //VH
      @Consumption.hidden: true
      _BusinessAreaText,
      @Consumption.hidden: true
      _MaterialText,
      @Consumption.hidden: true
      _ProductText,
      @Consumption.hidden: true
      _OriginalRequestedMaterialText,
      @Consumption.hidden: true
      _ShippingPointText,
      @Consumption.hidden: true
      _ProdUnivHierarchyNodeText

}
where
  SDDocumentCategory = 'G';
```
