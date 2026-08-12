---
name: I_PRELIMBILLINGDOCUMENTITEM
description: "PRELIMBilling DocumentUMENTITEM"
app_component: SD-BIL-PBD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PrelimBillingDocument` | ✓ | |  | `cast( BillingDocument as prelim_billing_document preserving type )` |  |  |
| `PrelimBillingDocumentItem` | ✓ | |  | `cast( BillingDocumentItem as prelim_billing_document_item preserving type )` |  |  |
| `SalesDocumentItemCategory` |  | |  |  |  |  |
| `SalesDocumentItemType` |  | |  | `cast( SalesDocumentItemType as sales_document_item_type preserving type )` |  |  |
| `ReturnItemProcessingType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `ReferenceLogicalSystem` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `InternationalArticleNumber` |  | |  |  |  |  |
| `PricingReferenceMaterial` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `ProductHierarchyNode` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |  |  |
| `ProductConfiguration` |  | |  |  |  |  |
| `MaterialCommissionGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `ReplacementPartType` |  | |  |  |  |  |
| `MaterialGroupHierarchy1` |  | |  |  |  |  |
| `MaterialGroupHierarchy2` |  | |  |  |  |  |
| `PlantRegion` |  | |  |  |  |  |
| `PlantCounty` |  | |  |  |  |  |
| `PlantCity` |  | |  |  |  |  |
| `BOMExplosion` |  | |  |  |  |  |
| `MaterialDeterminationType` |  | |  |  |  |  |
| `SoldProduct` |  | |  |  |  |  |
| `BillingDocumentItemText` |  | |  | `cast( BillingDocumentItemText as billing_document_item_desc preserving type )` |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `BillingQuantity` |  | |  | `cast( BillingQuantity as billing_quantity preserving type )` |  |  |
| `BillingQuantityUnit` |  | |  | `cast( BillingQuantityUnit as billing_quantity_unit preserving type )` |  |  |
| `BillingQuantityInBaseUnit` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `MRPRequiredQuantityInBaseUnit` |  | |  |  |  |  |
| `BillingToBaseQuantityDnmntr` |  | |  | `cast( BillingToBaseQuantityDnmntr as billing_to_base_qty_dnmntr preserving type )` |  |  |
| `BillingToBaseQuantityNmrtr` |  | |  | `cast( BillingToBaseQuantityNmrtr as billing_to_base_qty_nmrtr preserving type )` |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `BillToPartyCountry` |  | |  |  |  |  |
| `BillToPartyRegion` |  | |  |  |  |  |
| `BillingPlanRule` |  | |  |  |  |  |
| `BillingPlan` |  | |  |  |  |  |
| `BillingPlanItem` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `GrossAmount` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `PriceDetnExchangeRate` |  | |  |  |  |  |
| `PricingScaleQuantityInBaseUnit` |  | |  |  |  |  |
| `TaxAmount` |  | |  |  |  |  |
| `CostAmount` |  | |  |  |  |  |
| `Subtotal1Amount` |  | |  |  |  |  |
| `Subtotal2Amount` |  | |  |  |  |  |
| `Subtotal3Amount` |  | |  |  |  |  |
| `Subtotal4Amount` |  | |  |  |  |  |
| `Subtotal5Amount` |  | |  |  |  |  |
| `Subtotal6Amount` |  | |  |  |  |  |
| `StatisticalValueControl` |  | |  |  |  |  |
| `CashDiscountIsDeductible` |  | |  |  |  |  |
| `CustomerConditionGroup1` |  | |  |  |  |  |
| `CustomerConditionGroup2` |  | |  |  |  |  |
| `CustomerConditionGroup3` |  | |  |  |  |  |
| `CustomerConditionGroup4` |  | |  |  |  |  |
| `CustomerConditionGroup5` |  | |  |  |  |  |
| `ManualPriceChangeType` |  | |  |  |  |  |
| `MaterialPricingGroup` |  | |  |  |  |  |
| `StatisticsExchangeRate` |  | |  |  |  |  |
| `MainItemPricingRefMaterial` |  | |  |  |  |  |
| `MainItemMaterialPricingGroup` |  | |  |  |  |  |
| `TimeSheetOvertimeCategory` |  | |  |  |  |  |
| `PricingRelevance` |  | |  |  |  |  |
| `DepartureCountry` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `ProductTaxClassification1` |  | |  |  |  |  |
| `ProductTaxClassification2` |  | |  |  |  |  |
| `ProductTaxClassification3` |  | |  |  |  |  |
| `ProductTaxClassification4` |  | |  |  |  |  |
| `ProductTaxClassification5` |  | |  |  |  |  |
| `ProductTaxClassification6` |  | |  |  |  |  |
| `ProductTaxClassification7` |  | |  |  |  |  |
| `ProductTaxClassification8` |  | |  |  |  |  |
| `ProductTaxClassification9` |  | |  |  |  |  |
| `ZeroVATRsn` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `TaxRateValidityStartDate` |  | |  |  |  |  |
| `CountryOfOrigin` |  | |  |  |  |  |
| `RegionOfOrigin` |  | |  |  |  |  |
| `CommodityCode` |  | |  |  |  |  |
| `EligibleAmountForCashDiscount` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `ProviderContract` |  | |  |  |  |  |
| `ProviderContractItem` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ProfitabilitySegment` |  | |  | `cast ( case when ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc )` |  |  |
| `ProfitabilitySegment_2` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `OriginSDDocument` |  | |  |  |  |  |
| `OriginSDDocumentItem` |  | |  |  |  |  |
| `PriceDetnExchangeRateDate` |  | |  |  |  |  |
| `MatlAccountAssignmentGroup` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `SalesDocument` |  | |  |  |  |  |
| `SalesDocumentItem` |  | |  |  |  |  |
| `SalesSDDocumentCategory` |  | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `HigherLvlItmOfBatSpltItm` |  | |  |  |  |  |
| `BillingDocumentItemInPartSgmt` |  | |  |  |  |  |
| `ExternalReferenceDocument` |  | |  |  |  |  |
| `ExternalReferenceDocumentItem` |  | |  |  |  |  |
| `BillingDocExtReferenceDocItem` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `RetailPromotion` |  | |  |  |  |  |
| `RebateBasisAmount` |  | |  |  |  |  |
| `VolumeRebateGroup` |  | |  |  |  |  |
| `ItemIsRelevantForCredit` |  | |  |  |  |  |
| `CreditRelatedPrice` |  | |  |  |  |  |
| `SalesDeal` |  | |  |  |  |  |
| `SalesPromotion` |  | |  |  |  |  |
| `SalesOrderSalesDistrict` |  | |  |  |  |  |
| `SalesOrderCustomerGroup` |  | |  |  |  |  |
| `SalesOrderCustomerPriceGroup` |  | |  |  |  |  |
| `SalesOrderPriceListType` |  | |  |  |  |  |
| `SalesOrderSalesOrganization` |  | |  |  |  |  |
| `SalesOrderDistributionChannel` |  | |  |  |  |  |
| `SalesDocIsCreatedFromReference` |  | |  |  |  |  |
| `ShippingPoint` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `ServiceDocument` |  | |  |  |  |  |
| `ServiceDocumentItem` |  | |  |  |  |  |
| `BusinessSolutionOrder` |  | |  |  |  |  |
| `BusinessSolutionOrderItem` |  | |  |  |  |  |
| `HigherLevelItemUsage` |  | |  |  |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `CityCode` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `County` |  | |  |  |  |  |
| `CustomerRebateAgreement` |  | |  |  |  |  |
| `BillingDocumentCategory` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `SalesEmployee` |  | |  |  |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `CustomsPreference` |  | |  |  |  |  |
| `TrdPrefStmntExternalOriginCode` |  | |  |  |  |  |
| `TrdPrefStmntInternalOriginCode` |  | |  |  |  |  |
| `PricingIsIncomplete` |  | |  |  |  |  |
| `_PrelimBillingDocument` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_PricingElement` | | ✓ | | | | |
| `_HigherLevelItem` | | ✓ | | | | |
| `_HigherLvlItmOfBatSpltItm` | | ✓ | | | | |
| `_SalesDocumentItemCategory` | | ✓ | | | | |
| `_SalesDocumentItemType` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_ReferenceLogicalSystem` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_OriginallyRequestedMaterial` | | ✓ | | | | |
| `_PricingReferenceMaterial` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_ProductHierarchyNode` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_AdditionalMaterialGroup1` | | ✓ | | | | |
| `_AdditionalMaterialGroup2` | | ✓ | | | | |
| `_AdditionalMaterialGroup3` | | ✓ | | | | |
| `_AdditionalMaterialGroup4` | | ✓ | | | | |
| `_AdditionalMaterialGroup5` | | ✓ | | | | |
| `_MaterialCommissionGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_PlantRegion` | | ✓ | | | | |
| `_BillingQuantityUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_ItemWeightUnit` | | ✓ | | | | |
| `_ItemVolumeUnit` | | ✓ | | | | |
| `_BillToPartyCountry` | | ✓ | | | | |
| `_BillToPartyRegion` | | ✓ | | | | |
| `_BillingPlanRule` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_StatisticalValueControl` | | ✓ | | | | |
| `_MaterialPricingGroup` | | ✓ | | | | |
| `_MainItemPricingRefMaterial` | | ✓ | | | | |
| `_MainItemMaterialPricingGroup` | | ✓ | | | | |
| `_TimeSheetOvertimeCat` | | ✓ | | | | |
| `_PricingRelevance` | | ✓ | | | | |
| `_DepartureCountry` | | ✓ | | | | |
| `_CountryOfOrigin` | | ✓ | | | | |
| `_RegionOfOrigin` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CostCenter_2` | | ✓ | | | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_SalesSDDocumentCategory` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_AdditionalCustomerGroup1` | | ✓ | | | | |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_AdditionalCustomerGroup4` | | ✓ | | | | |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_SDDocumentReason` | | ✓ | | | | |
| `_RetailPromotion` | | ✓ | | | | |
| `_SalesDeal` | | ✓ | | | | |
| `_SalesOrderSalesDistrict` | | ✓ | | | | |
| `_SalesOrderCustomerGroup` | | ✓ | | | | |
| `_SalesOrderCustomerPriceGroup` | | ✓ | | | | |
| `_SalesOrderPriceListType` | | ✓ | | | | |
| `_SalesOrderSalesOrganization` | | ✓ | | | | |
| `_SalesOrderDistributionChannel` | | ✓ | | | | |
| `_ShippingPoint` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_MatlAccountAssignmentGroup` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_ProviderContractItem` | | ✓ | | | | |
| `_CustomsPreference` | | ✓ | | | | |
| `_TrdPrefStmntIntOriginCode` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |
| `_MaterialText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_ShippingPointText` | | ✓ | | | | |
| `_PricingReferenceMaterialText` | | ✓ | | | | |
| `_MainItemPricingRefMatlText` | | ✓ | | | | |
| `_OriginallyRequestedMatlText` | | ✓ | | | | |
| `_SoldProductText` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_BillingDocumentCategory` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_CustomerPriceGroup` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_CityCode` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_OverallSDProcessStatus` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_County` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_SalesEmployee` | | ✓ | | | | |
| `_ResponsibleEmployee` | | ✓ | | | | |

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
