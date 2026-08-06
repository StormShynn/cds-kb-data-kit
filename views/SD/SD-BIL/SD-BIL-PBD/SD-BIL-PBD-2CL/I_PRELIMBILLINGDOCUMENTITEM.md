---
name: I_PRELIMBILLINGDOCUMENTITEM
description: PRELIMBilling DocumentUMENTITEM
app_component: SD-BIL-PBD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-PBD
  - interface-view
  - billing-document
  - billing
  - document
  - item-level
  - component:SD-BIL-PBD-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_PRELIMBILLINGDOCUMENTITEM

**PRELIMBilling DocumentUMENTITEM**

| Property | Value |
|---|---|
| App Component | `SD-BIL-PBD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PrelimBillingDocument` | `cast( BillingDocument as prelim_billing_document preserving type )` |
| key `PrelimBillingDocumentItem` | `cast( BillingDocumentItem as prelim_billing_document_item preserving type )` |
| `SalesDocumentItemCategory` | `SalesDocumentItemCategory` |
| `SalesDocumentItemType` | `cast( SalesDocumentItemType as sales_document_item_type preserving type )` |
| `ReturnItemProcessingType` | `ReturnItemProcessingType` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `ReferenceLogicalSystem` | `ReferenceLogicalSystem` |
| `OrganizationDivision` | `OrganizationDivision` |
| `Division` | `Division` |
| `SalesOffice` | `SalesOffice` |
| `Material` | `Material` |
| `Product` | `Product` |
| `OriginallyRequestedMaterial` | `OriginallyRequestedMaterial` |
| `InternationalArticleNumber` | `InternationalArticleNumber` |
| `PricingReferenceMaterial` | `PricingReferenceMaterial` |
| `Batch` | `}] Batch` |
| `ProductHierarchyNode` | `ProductHierarchyNode` |
| `MaterialGroup` | `MaterialGroup` |
| `ProductGroup` | `ProductGroup` |
| `AdditionalMaterialGroup1` | `AdditionalMaterialGroup1` |
| `AdditionalMaterialGroup2` | `AdditionalMaterialGroup2` |
| `AdditionalMaterialGroup3` | `AdditionalMaterialGroup3` |
| `AdditionalMaterialGroup4` | `AdditionalMaterialGroup4` |
| `AdditionalMaterialGroup5` | `AdditionalMaterialGroup5` |
| `ProductConfiguration` | `ProductConfiguration` |
| `MaterialCommissionGroup` | `MaterialCommissionGroup` |
| `Plant` | `Plant` |
| `StorageLocation` | `StorageLocation` |
| `ReplacementPartType` | `ReplacementPartType` |
| `MaterialGroupHierarchy1` | `MaterialGroupHierarchy1` |
| `MaterialGroupHierarchy2` | `MaterialGroupHierarchy2` |
| `PlantRegion` | `PlantRegion` |
| `PlantCounty` | `PlantCounty` |
| `PlantCity` | `PlantCity` |
| `BOMExplosion` | `BOMExplosion` |
| `MaterialDeterminationType` | `MaterialDeterminationType` |
| `SoldProduct` | `SoldProduct` |
| `BillingDocumentItemText` | `cast( BillingDocumentItemText as billing_document_item_desc preserving type )` |
| `ServicesRenderedDate` | `ServicesRenderedDate` |
| `BillingQuantity` | `cast( BillingQuantity as billing_quantity preserving type )` |
| `BillingQuantityUnit` | `cast( BillingQuantityUnit as billing_quantity_unit preserving type )` |
| `BillingQuantityInBaseUnit` | `BillingQuantityInBaseUnit` |
| `BaseUnit` | `BaseUnit` |
| `MRPRequiredQuantityInBaseUnit` | `MRPRequiredQuantityInBaseUnit` |
| `BillingToBaseQuantityDnmntr` | `cast( BillingToBaseQuantityDnmntr as billing_to_base_qty_dnmntr preserving type )` |
| `BillingToBaseQuantityNmrtr` | `cast( BillingToBaseQuantityNmrtr as billing_to_base_qty_nmrtr preserving type )` |
| `ItemGrossWeight` | `ItemGrossWeight` |
| `ItemNetWeight` | `ItemNetWeight` |
| `ItemWeightUnit` | `ItemWeightUnit` |
| `ItemVolume` | `ItemVolume` |
| `ItemVolumeUnit` | `ItemVolumeUnit` |
| `BillToPartyCountry` | `BillToPartyCountry` |
| `BillToPartyRegion` | `BillToPartyRegion` |
| `BillingPlanRule` | `BillingPlanRule` |
| `BillingPlan` | `BillingPlan` |
| `BillingPlanItem` | `BillingPlanItem` |
| `NetAmount` | `NetAmount` |
| `TransactionCurrency` | `TransactionCurrency` |
| `GrossAmount` | `GrossAmount` |
| `PricingDate` | `PricingDate` |
| `PriceDetnExchangeRate` | `PriceDetnExchangeRate` |
| `PricingScaleQuantityInBaseUnit` | `PricingScaleQuantityInBaseUnit` |
| `TaxAmount` | `TaxAmount` |
| `CostAmount` | `CostAmount` |
| `Subtotal1Amount` | `Subtotal1Amount` |
| `Subtotal2Amount` | `Subtotal2Amount` |
| `Subtotal3Amount` | `Subtotal3Amount` |
| `Subtotal4Amount` | `Subtotal4Amount` |
| `Subtotal5Amount` | `Subtotal5Amount` |
| `Subtotal6Amount` | `Subtotal6Amount` |
| `StatisticalValueControl` | `StatisticalValueControl` |
| `CashDiscountIsDeductible` | `CashDiscountIsDeductible` |
| `CustomerConditionGroup1` | `CustomerConditionGroup1` |
| `CustomerConditionGroup2` | `CustomerConditionGroup2` |
| `CustomerConditionGroup3` | `CustomerConditionGroup3` |
| `CustomerConditionGroup4` | `CustomerConditionGroup4` |
| `CustomerConditionGroup5` | `CustomerConditionGroup5` |
| `ManualPriceChangeType` | `ManualPriceChangeType` |
| `MaterialPricingGroup` | `MaterialPricingGroup` |
| `StatisticsExchangeRate` | `StatisticsExchangeRate` |
| `MainItemPricingRefMaterial` | `MainItemPricingRefMaterial` |
| `MainItemMaterialPricingGroup` | `MainItemMaterialPricingGroup` |
| `TimeSheetOvertimeCategory` | `TimeSheetOvertimeCategory` |
| `PricingRelevance` | `PricingRelevance` |
| `DepartureCountry` | `DepartureCountry` |
| `TaxJurisdiction` | `TaxJurisdiction` |
| `ProductTaxClassification1` | `ProductTaxClassification1` |
| `ProductTaxClassification2` | `ProductTaxClassification2` |
| `ProductTaxClassification3` | `ProductTaxClassification3` |
| `ProductTaxClassification4` | `ProductTaxClassification4` |
| `ProductTaxClassification5` | `ProductTaxClassification5` |
| `ProductTaxClassification6` | `ProductTaxClassification6` |
| `ProductTaxClassification7` | `ProductTaxClassification7` |
| `ProductTaxClassification8` | `ProductTaxClassification8` |
| `ProductTaxClassification9` | `ProductTaxClassification9` |
| `ZeroVATRsn` | `ZeroVATRsn` |
| `TaxCode` | `TaxCode` |
| `TaxRateValidityStartDate` | `TaxRateValidityStartDate` |
| `CountryOfOrigin` | `CountryOfOrigin` |
| `RegionOfOrigin` | `RegionOfOrigin` |
| `CommodityCode` | `CommodityCode` |
| `EligibleAmountForCashDiscount` | `EligibleAmountForCashDiscount` |
| `BusinessArea` | `BusinessArea` |
| `ProfitCenter` | `ProfitCenter` |
| `OrderID` | `OrderID` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `ProviderContract` | `ProviderContract` |
| `ProviderContractItem` | `ProviderContractItem` |
| `ControllingArea` | `ControllingArea` |
| `ProfitabilitySegment` | `cast ( case when ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc )` |
| `ProfitabilitySegment_2` | `ProfitabilitySegment_2` |
| `CostCenter` | `CostCenter` |
| `OriginSDDocument` | `OriginSDDocument` |
| `OriginSDDocumentItem` | `OriginSDDocumentItem` |
| `PriceDetnExchangeRateDate` | `PriceDetnExchangeRateDate` |
| `MatlAccountAssignmentGroup` | `MatlAccountAssignmentGroup` |
| `ReferenceSDDocument` | `ReferenceSDDocument` |
| `ReferenceSDDocumentItem` | `ReferenceSDDocumentItem` |
| `ReferenceSDDocumentCategory` | `ReferenceSDDocumentCategory` |
| `SalesDocument` | `SalesDocument` |
| `SalesDocumentItem` | `}] SalesDocumentItem` |
| `SalesSDDocumentCategory` | `SalesSDDocumentCategory` |
| `HigherLevelItem` | `}] HigherLevelItem` |
| `HigherLvlItmOfBatSpltItm` | `HigherLvlItmOfBatSpltItm` |
| `BillingDocumentItemInPartSgmt` | `BillingDocumentItemInPartSgmt` |
| `ExternalReferenceDocument` | `ExternalReferenceDocument` |
| `ExternalReferenceDocumentItem` | `ExternalReferenceDocumentItem` |
| `BillingDocExtReferenceDocItem` | `BillingDocExtReferenceDocItem` |
| `SalesGroup` | `SalesGroup` |
| `AdditionalCustomerGroup1` | `AdditionalCustomerGroup1` |
| `AdditionalCustomerGroup2` | `AdditionalCustomerGroup2` |
| `AdditionalCustomerGroup3` | `AdditionalCustomerGroup3` |
| `AdditionalCustomerGroup4` | `AdditionalCustomerGroup4` |
| `AdditionalCustomerGroup5` | `AdditionalCustomerGroup5` |
| `SDDocumentReason` | `SDDocumentReason` |
| `RetailPromotion` | `RetailPromotion` |
| `RebateBasisAmount` | `RebateBasisAmount` |
| `VolumeRebateGroup` | `VolumeRebateGroup` |
| `ItemIsRelevantForCredit` | `ItemIsRelevantForCredit` |
| `CreditRelatedPrice` | `CreditRelatedPrice` |
| `SalesDeal` | `SalesDeal` |
| `SalesPromotion` | `SalesPromotion` |
| `SalesOrderSalesDistrict` | `SalesOrderSalesDistrict` |
| `SalesOrderCustomerGroup` | `SalesOrderCustomerGroup` |
| `SalesOrderCustomerPriceGroup` | `SalesOrderCustomerPriceGroup` |
| `SalesOrderPriceListType` | `SalesOrderPriceListType` |
| `SalesOrderSalesOrganization` | `SalesOrderSalesOrganization` |
| `SalesOrderDistributionChannel` | `SalesOrderDistributionChannel` |
| `SalesDocIsCreatedFromReference` | `SalesDocIsCreatedFromReference` |
| `ShippingPoint` | `ShippingPoint` |
| `ServiceDocumentType` | `ServiceDocumentType` |
| `ServiceDocument` | `ServiceDocument` |
| `ServiceDocumentItem` | `ServiceDocumentItem` |
| `BusinessSolutionOrder` | `BusinessSolutionOrder` |
| `BusinessSolutionOrderItem` | `BusinessSolutionOrderItem` |
| `HigherLevelItemUsage` | `HigherLevelItemUsage` |
| `SDDocumentCategory` | `SDDocumentCategory` |
| `BillingDocumentType` | `BillingDocumentType` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `CustomerPriceGroup` | `CustomerPriceGroup` |
| `CustomerGroup` | `CustomerGroup` |
| `Country` | `Country` |
| `Region` | `Region` |
| `CityCode` | `CityCode` |
| `SalesDistrict` | `SalesDistrict` |
| `OverallSDProcessStatus` | `OverallSDProcessStatus` |
| `SoldToParty` | `SoldToParty` |
| `PayerParty` | `PayerParty` |
| `BillingDocumentDate` | `BillingDocumentDate` |
| `CompanyCode` | `CompanyCode` |
| `County` | `County` |
| `CustomerRebateAgreement` | `CustomerRebateAgreement` |
| `BillingDocumentCategory` | `BillingDocumentCategory` |
| `ShipToParty` | `ShipToParty` |
| `BillToParty` | `BillToParty` |
| `SalesEmployee` | `SalesEmployee` |
| `ResponsibleEmployee` | `ResponsibleEmployee` |
| `CustomsPreference` | `CustomsPreference` |
| `TrdPrefStmntExternalOriginCode` | `TrdPrefStmntExternalOriginCode` |
| `TrdPrefStmntInternalOriginCode` | `TrdPrefStmntInternalOriginCode` |
| `PricingIsIncomplete` | `PricingIsIncomplete` |
| `_PrelimBillingDocument` | *Association* |
| `_Partner` | *Association* |
| `_PricingElement` | *Association* |
| `_HigherLevelItem` | *Association* |
| `_HigherLvlItmOfBatSpltItm` | *Association* |
| `_SalesDocumentItemCategory` | *Association* |
| `_SalesDocumentItemType` | *Association* |
| `_CreatedByUser` | *Association* |
| `_ReferenceLogicalSystem` | *Association* |
| `_OrganizationDivision` | *Association* |
| `_Division` | *Association* |
| `_SalesOffice` | *Association* |
| `_Material` | *Association* |
| `_Product` | *Association* |
| `_OriginallyRequestedMaterial` | *Association* |
| `_PricingReferenceMaterial` | *Association* |
| `_Batch` | *Association* |
| `_ProductHierarchyNode` | *Association* |
| `_MaterialGroup` | *Association* |
| `_ProductGroup` | *Association* |
| `_AdditionalMaterialGroup1` | *Association* |
| `_AdditionalMaterialGroup2` | *Association* |
| `_AdditionalMaterialGroup3` | *Association* |
| `_AdditionalMaterialGroup4` | *Association* |
| `_AdditionalMaterialGroup5` | *Association* |
| `_MaterialCommissionGroup` | *Association* |
| `_Plant` | *Association* |
| `_SoldProduct` | *Association* |
| `_StorageLocation` | *Association* |
| `_PlantRegion` | *Association* |
| `_BillingQuantityUnit` | *Association* |
| `_BaseUnit` | *Association* |
| `_ItemWeightUnit` | *Association* |
| `_ItemVolumeUnit` | *Association* |
| `_BillToPartyCountry` | *Association* |
| `_BillToPartyRegion` | *Association* |
| `_BillingPlanRule` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_StatisticalValueControl` | *Association* |
| `_MaterialPricingGroup` | *Association* |
| `_MainItemPricingRefMaterial` | *Association* |
| `_MainItemMaterialPricingGroup` | *Association* |
| `_TimeSheetOvertimeCat` | *Association* |
| `_PricingRelevance` | *Association* |
| `_DepartureCountry` | *Association* |
| `_CountryOfOrigin` | *Association* |
| `_RegionOfOrigin` | *Association* |
| `_BusinessArea` | *Association* |
| `_ProfitCenter` | *Association* |
| `_WBSElementBasicData` | *Association* |
| `_ControllingArea` | *Association* |
| `_CostCenter` | *Association* |
| `_CostCenter_2` | *Association* |
| `_ReferenceSDDocumentCategory` | *Association* |
| `_SalesDocument` | *Association* |
| `_SalesDocumentItem` | *Association* |
| `_SalesSDDocumentCategory` | *Association* |
| `_SalesGroup` | *Association* |
| `_AdditionalCustomerGroup1` | *Association* |
| `_AdditionalCustomerGroup2` | *Association* |
| `_AdditionalCustomerGroup3` | *Association* |
| `_AdditionalCustomerGroup4` | *Association* |
| `_AdditionalCustomerGroup5` | *Association* |
| `_SDDocumentReason` | *Association* |
| `_RetailPromotion` | *Association* |
| `_SalesDeal` | *Association* |
| `_SalesOrderSalesDistrict` | *Association* |
| `_SalesOrderCustomerGroup` | *Association* |
| `_SalesOrderCustomerPriceGroup` | *Association* |
| `_SalesOrderPriceListType` | *Association* |
| `_SalesOrderSalesOrganization` | *Association* |
| `_SalesOrderDistributionChannel` | *Association* |
| `_ShippingPoint` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_MatlAccountAssignmentGroup` | *Association* |
| `_ProviderContract` | *Association* |
| `_ProviderContractItem` | *Association* |
| `_CustomsPreference` | *Association* |
| `_TrdPrefStmntIntOriginCode` | *Association* |
| `_BusinessAreaText` | *Association* |
| `_MaterialText` | *Association* |
| `_ProductText` | *Association* |
| `_ShippingPointText` | *Association* |
| `_PricingReferenceMaterialText` | *Association* |
| `_MainItemPricingRefMatlText` | *Association* |
| `_OriginallyRequestedMatlText` | *Association* |
| `_SoldProductText` | *Association* |
| `_SDDocumentCategory` | *Association* |
| `_BillingDocumentCategory` | *Association* |
| `_BillingDocumentType` | *Association* |
| `_SalesOrganization` | *Association* |
| `_DistributionChannel` | *Association* |
| `_CustomerPriceGroup` | *Association* |
| `_CustomerGroup` | *Association* |
| `_Country` | *Association* |
| `_Region` | *Association* |
| `_CityCode` | *Association* |
| `_SalesDistrict` | *Association* |
| `_OverallSDProcessStatus` | *Association* |
| `_SoldToParty` | *Association* |
| `_PayerParty` | *Association* |
| `_CompanyCode` | *Association* |
| `_County` | *Association* |
| `_ShipToParty` | *Association* |
| `_BillToParty` | *Association* |
| `_SalesEmployee` | *Association* |
| `_ResponsibleEmployee` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrelimBillingDocument` | `I_PrelimBillingDocument` | [1..1] |
| `_Partner` | `I_PrelimBillingDocItemPartner` | [0..*] |
| `_PricingElement` | `I_PrelimBillgDocItemPrcgElmnt` | [0..*] |
| `_HigherLevelItem` | `I_PrelimBillingDocumentItem` | [1..1] |
| `_HigherLvlItmOfBatSpltItm` | `I_PrelimBillingDocumentItem` | [0..1] |
| `_Extension` | `E_BillingDocumentItem` | [1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.representativeKey: 'PrelimBillingDocumentItem'
@ObjectModel.sapObjectNodeType.name: 'PrelimBillingDocumentItem'
@ObjectModel.modelingPattern:         #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@Analytics.dataCategory: #DIMENSION
@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbrp', role: #MAIN,
                    viewElement: ['PrelimBillingDocument', 'PrelimBillingDocumentItem'],
                    tableElement: ['vbeln', 'posnr']
                }

            ]
        }
    }
 }
@EndUserText.label: 'Preliminary Billing Document Item'
@VDM.viewType: #BASIC
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: ['_CreatedByUser', '_BusinessAreaText', '_PricingReferenceMaterialText', '_OriginallyRequestedMatlText', '_MaterialText', '_ProductText', '_ShippingPointText', '_MainItemPricingRefMatlText']
}
@AbapCatalog: {
  sqlViewName: 'ISDPREBILDOCITEM',
  compiler.compareFilter: true,
  preserveKey: true
}

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

define view I_PrelimBillingDocumentItem
  as select from I_BillingDocumentItemBasic as Item

  association [1..1] to I_PrelimBillingDocument       as _PrelimBillingDocument on  $projection.PrelimBillingDocument = _PrelimBillingDocument.PrelimBillingDocument
  association [0..*] to I_PrelimBillingDocItemPartner as _Partner               on  $projection.PrelimBillingDocument     = _Partner.PrelimBillingDocument
                                                                                and $projection.PrelimBillingDocumentItem = _Partner.PrelimBillingDocumentItem
  association [0..*] to I_PrelimBillgDocItemPrcgElmnt as _PricingElement        on  $projection.PrelimBillingDocument     = _PricingElement.PrelimBillingDocument
                                                                                and $projection.PrelimBillingDocumentItem = _PricingElement.PrelimBillingDocumentItem

  association [1..1] to I_PrelimBillingDocumentItem   as _HigherLevelItem       on  $projection.PrelimBillingDocument = _HigherLevelItem.PrelimBillingDocument
                                                                                and $projection.HigherLevelItem       = _HigherLevelItem.PrelimBillingDocumentItem
  association [0..1] to I_PrelimBillingDocumentItem   as _HigherLvlItmOfBatSpltItm on  $projection.PrelimBillingDocument = _HigherLvlItmOfBatSpltItm.PrelimBillingDocument
                                                                           and $projection.HigherLvlItmOfBatSpltItm = _HigherLvlItmOfBatSpltItm.PrelimBillingDocumentItem
                                                                                
 
  //Extensibility
  association [1]    to E_BillingDocumentItem         as _Extension             on  $projection.PrelimBillingDocument           = _Extension.BillingDocument
                                                                                and $projection.PrelimBillingDocumentItem       = _Extension.BillingDocumentItem                                                                   

{
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_PrelimBillingDocumentStdVH',
                         element: 'PrelimBillingDocument' }
            }]
      @ObjectModel.foreignKey.association: '_PrelimBillingDocument'
  key cast( BillingDocument as prelim_billing_document preserving type )                as PrelimBillingDocument,
      @ObjectModel.text.element:  ['BillingDocumentItemText']
  key cast( BillingDocumentItem as prelim_billing_document_item preserving type )       as PrelimBillingDocumentItem,

      //Category
      @ObjectModel.foreignKey.association: '_SalesDocumentItemCategory'
      SalesDocumentItemCategory,
      @ObjectModel.foreignKey.association: '_SalesDocumentItemType'
      cast( SalesDocumentItemType as sales_document_item_type preserving type )         as SalesDocumentItemType,
      ReturnItemProcessingType,

      //Admin
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.systemTime.createdAt
      CreationTime,
      @ObjectModel.foreignKey.association: '_ReferenceLogicalSystem'
      ReferenceLogicalSystem,

      //Organization
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      OrganizationDivision,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,

      //Product
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      @ObjectModel.text.association: '_MaterialText'
      @ObjectModel.foreignKey.association: '_Material'
      @API.element: { releaseState: #DEPRECATED, successor: 'Product' }
      @VDM.lifecycle: { status: #DEPRECATED, successor: 'Product' }
      Material,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      @ObjectModel.text.association: '_ProductText'
      @ObjectModel.foreignKey.association: '_Product'
      Product,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      @ObjectModel.text.association: '_OriginallyRequestedMatlText'
      @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
      OriginallyRequestedMaterial,
      InternationalArticleNumber,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      @ObjectModel.text.association: '_PricingReferenceMaterialText'
      @ObjectModel.foreignKey.association: '_PricingReferenceMaterial'
      PricingReferenceMaterial,
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
      @ObjectModel.foreignKey.association: '_ProductHierarchyNode'
      ProductHierarchyNode,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @API.element: { releaseState: #DEPRECATED, successor: 'ProductGroup' }
      MaterialGroup,
      @ObjectModel.foreignKey.association: '_ProductGroup'
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
      @ObjectModel.foreignKey.association: '_MaterialCommissionGroup'
      MaterialCommissionGroup,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      StorageLocation,
      ReplacementPartType,
      MaterialGroupHierarchy1,
      MaterialGroupHierarchy2,
      @ObjectModel.foreignKey.association: '_PlantRegion'
      PlantRegion,
      PlantCounty,
      PlantCity,
      BOMExplosion,
      MaterialDeterminationType,
      @ObjectModel.text.association: '_SoldProductText'
      @ObjectModel.foreignKey.association: '_SoldProduct'
      SoldProduct,

      //Billing
      @Semantics.text: true
      cast( BillingDocumentItemText as billing_document_item_desc preserving type )     as BillingDocumentItemText,
      ServicesRenderedDate,
      @Semantics.quantity.unitOfMeasure: 'BillingQuantityUnit'
      cast( BillingQuantity as billing_quantity preserving type )                       as BillingQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BillingQuantityUnit'
      cast( BillingQuantityUnit as billing_quantity_unit preserving type )              as BillingQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      BillingQuantityInBaseUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MRPRequiredQuantityInBaseUnit,
      cast( BillingToBaseQuantityDnmntr as billing_to_base_qty_dnmntr preserving type ) as BillingToBaseQuantityDnmntr,
      cast( BillingToBaseQuantityNmrtr as billing_to_base_qty_nmrtr preserving type )   as BillingToBaseQuantityNmrtr,
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
      @ObjectModel.foreignKey.association: '_BillToPartyCountry'
      BillToPartyCountry,
      @ObjectModel.foreignKey.association: '_BillToPartyRegion'
      BillToPartyRegion,
      @ObjectModel.foreignKey.association: '_BillingPlanRule'
      BillingPlanRule,
      BillingPlan,
      BillingPlanItem,

      //Pricing
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      NetAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      GrossAmount,
      PricingDate,
      PriceDetnExchangeRate,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      PricingScaleQuantityInBaseUnit,
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
      @ObjectModel.foreignKey.association: '_StatisticalValueControl'
      StatisticalValueControl,
      CashDiscountIsDeductible,
      CustomerConditionGroup1,
      CustomerConditionGroup2,
      CustomerConditionGroup3,
      CustomerConditionGroup4,
      CustomerConditionGroup5,
      ManualPriceChangeType,
      @ObjectModel.foreignKey.association: '_MaterialPricingGroup'
      MaterialPricingGroup,
      StatisticsExchangeRate,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      @ObjectModel.text.association: '_MainItemPricingRefMatlText'
      @ObjectModel.foreignKey.association: '_MainItemPricingRefMaterial'
      MainItemPricingRefMaterial,
      @ObjectModel.foreignKey.association: '_MainItemMaterialPricingGroup'
      MainItemMaterialPricingGroup,
      @ObjectModel.foreignKey.association: '_TimeSheetOvertimeCat'
      TimeSheetOvertimeCategory,
      @ObjectModel.foreignKey.association: '_PricingRelevance'
      PricingRelevance,      
      
      // Tax
      @ObjectModel.foreignKey.association: '_DepartureCountry'
      DepartureCountry,
      TaxJurisdiction,
      ProductTaxClassification1,
      ProductTaxClassification2,
      ProductTaxClassification3,
      ProductTaxClassification4,
      ProductTaxClassification5,
      ProductTaxClassification6,
      ProductTaxClassification7,
      ProductTaxClassification8,
      ProductTaxClassification9,
      ZeroVATRsn,
      TaxCode,
      TaxRateValidityStartDate,

      // Foreign trade
      @ObjectModel.foreignKey.association: '_CountryOfOrigin'
      CountryOfOrigin,
      @ObjectModel.foreignKey.association: '_RegionOfOrigin'
      RegionOfOrigin,
      CommodityCode,

      //Payment
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      EligibleAmountForCashDiscount,

      //Accounting
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.text.association: '_BusinessAreaText'
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      @ObjectModel.foreignKey.association: '_ProfitCenter'      
      ProfitCenter,
      OrderID,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_ProviderContract'
      ProviderContract,
      @ObjectModel.foreignKey.association: '_ProviderContractItem'
      ProviderContractItem,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      @API.element: { releaseState: #DECOMMISSIONED, successor: 'ProfitabilitySegment_2' }
      cast ( case when ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc ) as ProfitabilitySegment,      
      ProfitabilitySegment_2,
      @ObjectModel.foreignKey.association: '_CostCenter_2'      
      CostCenter,
      OriginSDDocument,
      OriginSDDocumentItem,
      PriceDetnExchangeRateDate,
      @ObjectModel.foreignKey.association: '_MatlAccountAssignmentGroup'
      MatlAccountAssignmentGroup,

      //Reference
      ReferenceSDDocument,
      ReferenceSDDocumentItem,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      ReferenceSDDocumentCategory,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesDocumentStdVH',
                     element: 'SalesDocument' }
        }]
      @ObjectModel.foreignKey.association: '_SalesDocument'
      SalesDocument,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesDocumentItemStdVH',
                     element: 'SalesDocumentItem' },
          additionalBinding: [{ localElement: 'SalesDocument',
                                element: 'SalesDocument' }]
        }]
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      SalesDocumentItem,
      @ObjectModel.foreignKey.association: '_SalesSDDocumentCategory'
      SalesSDDocumentCategory,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_PrelimBillingDocItemStdVH',
                     element: 'PrelimBillingDocumentItem' },
          additionalBinding: [{ localElement: 'PrelimBillingDocument',
                                element: 'PrelimBillingDocument' }]
        }]
      @ObjectModel.foreignKey.association: '_HigherLevelItem'
      HigherLevelItem,
      @ObjectModel.foreignKey.association: '_HigherLvlItmOfBatSpltItm'
      HigherLvlItmOfBatSpltItm,
      BillingDocumentItemInPartSgmt,
      ExternalReferenceDocument,
      @API.element: { releaseState: #DEPRECATED, successor: 'BillingDocExtReferenceDocItem' }
      ExternalReferenceDocumentItem,
      BillingDocExtReferenceDocItem,

      //Sales
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
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
      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      SDDocumentReason,
      @ObjectModel.foreignKey.association: '_RetailPromotion'
      RetailPromotion,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      RebateBasisAmount,
      VolumeRebateGroup,
      ItemIsRelevantForCredit,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CreditRelatedPrice,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SalesDealStdVH',
                     element: 'SalesDeal' }
        }]
      @ObjectModel.foreignKey.association: '_SalesDeal'
      SalesDeal,
      SalesPromotion,
      @ObjectModel.foreignKey.association: '_SalesOrderSalesDistrict'
      SalesOrderSalesDistrict,
      @ObjectModel.foreignKey.association: '_SalesOrderCustomerGroup'
      SalesOrderCustomerGroup,
      @ObjectModel.foreignKey.association: '_SalesOrderCustomerPriceGroup'
      SalesOrderCustomerPriceGroup,
      @ObjectModel.foreignKey.association: '_SalesOrderPriceListType'
      SalesOrderPriceListType,
      @ObjectModel.foreignKey.association: '_SalesOrderSalesOrganization'
      SalesOrderSalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOrderDistributionChannel'
      SalesOrderDistributionChannel,
      SalesDocIsCreatedFromReference,

      //Shipping
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ShippingPointStdVH',
                     element: 'ShippingPoint' }
        }]
      @ObjectModel.text.association: '_ShippingPointText'
      @ObjectModel.foreignKey.association: '_ShippingPoint'
      ShippingPoint,

      //CRM
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      ServiceDocumentType,
      ServiceDocument,
      ServiceDocumentItem,

      //Solution Order
      BusinessSolutionOrder,
      BusinessSolutionOrderItem,
      
      //Other fields
      HigherLevelItemUsage,      
      
      //Added Analytics fields
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      SDDocumentCategory,
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      BillingDocumentType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_CustomerPriceGroup'
      CustomerPriceGroup,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_Country'
      Country,
      @ObjectModel.foreignKey.association: '_Region'
      Region,
      @ObjectModel.foreignKey.association: '_CityCode'
      CityCode,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      OverallSDProcessStatus,
      //sales
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SoldToParty,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]
      @ObjectModel.foreignKey.association: '_PayerParty'
      PayerParty,
      BillingDocumentDate,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      @ObjectModel.foreignKey.association: '_County'
      County,
      CustomerRebateAgreement,
      BillingDocumentCategory,
      //ship-to
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]

      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      //bill-to
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_Customer_VH',
                     element: 'Customer' }
        }]

      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_SalesEmployee'
      SalesEmployee,
      @ObjectModel.foreignKey.association: '_ResponsibleEmployee'
      ResponsibleEmployee,
      
      // GTS 
      @ObjectModel.foreignKey.association: '_CustomsPreference'
      CustomsPreference,
      // Note: The field contains code values. Code list view is not available.
      TrdPrefStmntExternalOriginCode,
      @ObjectModel.foreignKey.association: '_TrdPrefStmntIntOriginCode'
      TrdPrefStmntInternalOriginCode,

      @Semantics.booleanIndicator: true
      PricingIsIncomplete,
      
      //association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _PrelimBillingDocument,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Partner,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _PricingElement,
      _SalesDocumentItemCategory,
      _SalesDocumentItemType,
      _CreatedByUser,
      _ReferenceLogicalSystem,
      _OrganizationDivision,
      _Division,
      _SalesOffice,
      @API.element: { releaseState: #DEPRECATED, successor: '_Product' }
      _Material,
      _Product,
      _OriginallyRequestedMaterial,
      _PricingReferenceMaterial,
      _Batch,
      _ProductHierarchyNode,
      @API.element: { releaseState: #DEPRECATED, successor: '_ProductGroup' }
      _MaterialGroup,
      _ProductGroup,
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _MaterialCommissionGroup,
      _Plant,
      _SoldProduct,
      _StorageLocation,
      _PlantRegion,
      _BillingQuantityUnit,
      _BaseUnit,
      _ItemWeightUnit,
      _ItemVolumeUnit,
      _BillToPartyCountry,
      _BillToPartyRegion,
      _BillingPlanRule,
      _TransactionCurrency,
      _StatisticalValueControl,
      _MaterialPricingGroup,
      _MainItemPricingRefMaterial,
      _MainItemMaterialPricingGroup,
      _TimeSheetOvertimeCat,
      _PricingRelevance,      
      _DepartureCountry,
      _CountryOfOrigin,
      _RegionOfOrigin,
      _BusinessArea,
      _ProfitCenter,      
      _WBSElementBasicData,      
      _ControllingArea,
      @API.element: { releaseState: #DEPRECATED, successor: '_CostCenter_2' }      
      _CostCenter,
      _CostCenter_2,
      _ReferenceSDDocumentCategory,
      _SalesDocument,
      _SalesDocumentItem,
      _SalesSDDocumentCategory,
      _HigherLevelItem,
      _HigherLvlItmOfBatSpltItm,
      _SalesGroup,
      _AdditionalCustomerGroup1,
      _AdditionalCustomerGroup2,
      _AdditionalCustomerGroup3,
      _AdditionalCustomerGroup4,
      _AdditionalCustomerGroup5,
      _SDDocumentReason,
      _RetailPromotion,
      _SalesDeal,
      _SalesOrderSalesDistrict,
      _SalesOrderCustomerGroup,
      _SalesOrderCustomerPriceGroup,
      _SalesOrderPriceListType,
      _SalesOrderSalesOrganization,
      _SalesOrderDistributionChannel,
      _ShippingPoint,
      _ServiceDocumentType,
      _MatlAccountAssignmentGroup,
      _ProviderContract,
      _ProviderContractItem,
      _CustomsPreference,
      _TrdPrefStmntIntOriginCode,

      @Consumption.hidden: true
      _BusinessAreaText,
      @Consumption.hidden: true
      @API.element: { releaseState: #DEPRECATED, successor: '_ProductText' }
      _MaterialText,
      @Consumption.hidden: true
      _ProductText,
      @Consumption.hidden: true
      _ShippingPointText,
      @Consumption.hidden: true
      _PricingReferenceMaterialText,
      @Consumption.hidden: true
      _MainItemPricingRefMatlText,
      @Consumption.hidden: true
      _OriginallyRequestedMatlText,
      @Consumption.hidden: true
      _SoldProductText,
      
      //Analytics
      _SDDocumentCategory,
      _BillingDocumentCategory,
      _BillingDocumentType,
      _SalesOrganization,
      _DistributionChannel,
      _CustomerPriceGroup,
      _CustomerGroup,
      _Country,
      _Region,
      _CityCode,
      _SalesDistrict,
      _OverallSDProcessStatus,
      _SoldToParty,
      _PayerParty,
      _CompanyCode,
      _County,
      _ShipToParty,
      _BillToParty,
      _SalesEmployee,
      _ResponsibleEmployee
}
where
  SDDocumentCategory = 'PBD'
```
