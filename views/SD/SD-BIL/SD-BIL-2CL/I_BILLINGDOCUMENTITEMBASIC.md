---
name: I_BILLINGDOCUMENTITEMBASIC
description: "Billing DocumentUMENTITEMBASIC"
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - interface-view
  - billing-document
  - billing
  - document
  - item-level
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTITEMBASIC

**Billing DocumentUMENTITEMBASIC**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocument` | ✓ | |  |  |  |  |
| `BillingDocumentItem` | ✓ | |  |  |  |  |
| `SalesDocumentItemCategory` |  | |  |  |  |  |
| `SalesDocumentItemType` |  | |  |  |  |  |
| `ReturnItemProcessingType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `ReferenceLogicalSystem` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `Material` |  | |  | `cast(BillingDocumentItem.Product as matnr preserving type)` |  |  |
| `Product` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `InternationalArticleNumber` |  | |  |  |  |  |
| `PricingReferenceMaterial` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `ProductHierarchyNode` |  | |  |  |  |  |
| `MaterialGroup` |  | |  | `cast(BillingDocumentItem.ProductGroup as matkl preserving type)` |  |  |
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
| `TransitPlant` |  | |  |  |  |  |
| `ValueChainCategory` |  | |  |  |  |  |
| `BOMExplosion` |  | |  |  |  |  |
| `MaterialDeterminationType` |  | |  |  |  |  |
| `SoldProduct` |  | |  |  |  |  |
| `BillingDocumentItemText` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `BillingQuantity` |  | |  |  |  |  |
| `BillingQuantityUnit` |  | |  |  |  |  |
| `BillingQuantityInBaseUnit` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `MRPRequiredQuantityInBaseUnit` |  | |  |  |  |  |
| `BillingToBaseQuantityDnmntr` |  | |  |  |  |  |
| `BillingToBaseQuantityNmrtr` |  | |  |  |  |  |
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
| `DownPaymentProcessingVariant` |  | |  |  |  |  |
| `DocumentBillingStatus` |  | |  |  |  |  |
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
| `WBSElement` |  | |  | `cast(BillingDocumentItem.WBSElementInternalID as ps_psp_pnr preserving type)` |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `ProviderContract` |  | |  |  |  |  |
| `ProviderContractItem` |  | |  |  |  |  |
| `BillingPerformancePeriodStrDte` |  | |  |  |  |  |
| `BillingPeriodOfPerfStartDate` |  | |  | `cast(BillingDocumentItem.BillingPerformancePeriodStrDte as fm_perop_fi_low preserving type)` |  |  |
| `BillingPerformancePeriodEndDte` |  | |  |  |  |  |
| `BillingPeriodOfPerfEndDate` |  | |  | `cast(BillingDocumentItem.BillingPerformancePeriodEndDte as fm_perop_fi_high preserving type)` |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ProfitabilitySegment` |  | |  | `cast(case when BillingDocumentItem.ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad(BillingDocumentItem.ProfitabilitySegment_2, 10, '0') end as rkeobjnr_numc)` |  |  |
| `ProfitabilitySegment_2` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
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
| `ExternalReferenceDocumentItem` |  | |  | `cast(BillingDocumentItem.BillingDocExtReferenceDocItem as ext_reference_document_item preserving type)` |  |  |
| `BillingDocExtReferenceDocItem` |  | |  |  |  |  |
| `PrelimBillingDocument` |  | |  |  |  |  |
| `PrelimBillingDocumentItem` |  | |  |  |  |  |
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
| `BillingDocumentIsTemporary` |  | |  |  |  |  |
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
| `OverallBillingStatus` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `County` |  | |  |  |  |  |
| `CustomerRebateAgreement` |  | |  |  |  |  |
| `BillingDocumentCategory` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `CancelledBillingDocument` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `SalesEmployee` |  | |  |  |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `CustomsPreference` |  | |  |  |  |  |
| `TrdPrefStmntExternalOriginCode` |  | |  |  |  |  |
| `TrdPrefStmntInternalOriginCode` |  | |  |  |  |  |
| `PricingIsIncomplete` |  | |  |  |  |  |
| `_MaterialText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_SoldProductText` | | ✓ | | | | |
| `_OriginallyRequestedMatlText` | | ✓ | | | | |
| `_PricingReferenceMaterialText` | | ✓ | | | | |
| `_MainItemPricingRefMatlText` | | ✓ | | | | |
| `_MaterialGroupText` | | ✓ | | | | |
| `_ShippingPointText` | | ✓ | | | | |
| `_WBSElementText` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |
| `_BillingDocumentBasic` | | ✓ | | | | |
| `_PartnerBasic` | | ✓ | | | | |
| `_PricingElementBasic` | | ✓ | | | | |
| `_SalesDocumentItemCategory` | | ✓ | | | | |
| `_SalesDocumentItemType` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_ReferenceLogicalSystem` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
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
| `_StorageLocation` | | ✓ | | | | |
| `_PlantRegion` | | ✓ | | | | |
| `_TransitPlant` | | ✓ | | | | |
| `_ValueChainCategory` | | ✓ | | | | |
| `_BillingQuantityUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_ItemWeightUnit` | | ✓ | | | | |
| `_ItemVolumeUnit` | | ✓ | | | | |
| `_BillToPartyCountry` | | ✓ | | | | |
| `_BillToPartyRegion` | | ✓ | | | | |
| `_BillingPlanRule` | | ✓ | | | | |
| `_DownPaymentProcessingVariant` | | ✓ | | | | |
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
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_MatlAccountAssignmentGroup` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CostCenter_2` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ReferenceSalesDocumentItem` | | ✓ | | | | |
| `_ReferenceDeliveryDocumentItem` | | ✓ | | | | |
| `_ReferenceBillingDocItemBasic` | | ✓ | | | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_SalesSDDocumentCategory` | | ✓ | | | | |
| `_HigherLevelItemBasic` | | ✓ | | | | |
| `_HigherLvlItmOfBatSpltItmBasic` | | ✓ | | | | |
| `_PrelimBillingDocument` | | ✓ | | | | |
| `_PrelimBillingDocumentItem` | | ✓ | | | | |
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
| `_ProviderContract` | | ✓ | | | | |
| `_ProviderContractItem` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_BillingDocumentCategory` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_CustomerPriceGroup` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_CityCode` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_County` | | ✓ | | | | |
| `_CancelledBillingDocumentBasic` | | ✓ | | | | |
| `_OverallSDProcessStatus` | | ✓ | | | | |
| `_OverallBillingStatus` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_SalesEmployee` | | ✓ | | | | |
| `_ResponsibleEmployee` | | ✓ | | | | |
| `_SolutionOrder` | | ✓ | | | | |
| `_SolutionOrderItem` | | ✓ | | | | |
| `_CustomsPreference` | | ✓ | | | | |
| `_TrdPrefStmntIntOriginCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaterialText` | `I_MaterialText` | [0..*] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_SoldProductText` | `I_ProductText` | [0..*] |
| `_OriginallyRequestedMatlText` | `I_MaterialText` | [0..*] |
| `_PricingReferenceMaterialText` | `I_MaterialText` | [0..*] |
| `_MainItemPricingRefMatlText` | `I_MaterialText` | [0..*] |
| `_MaterialGroupText` | `I_MaterialGroupText` | [0..*] |
| `_ShippingPointText` | `I_ShippingPointText` | [0..*] |
| `_WBSElementText` | `I_WBSElementText` | [0..*] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_BillingDocumentBasic` | `I_BillingDocumentBasic` | [1..1] |
| `_PartnerBasic` | `I_BillingDocItemPartnerBasic` | [0..*] |
| `_PricingElementBasic` | `I_BillingDocItemPrcgElmntBasic` | [0..*] |
| `_SalesDocumentItemCategory` | `I_SalesDocumentItemCategory` | [0..1] |
| `_SalesDocumentItemType` | `I_SalesDocumentItemType` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_ReferenceLogicalSystem` | `I_LogicalSystem` | [0..1] |
| `_OrganizationDivision` | `I_Division` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_SalesOffice` | `I_SalesOffice` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_SoldProduct` | `I_Product` | [0..1] |
| `_OriginallyRequestedMaterial` | `I_Material` | [0..1] |
| `_PricingReferenceMaterial` | `I_Material` | [0..1] |
| `_Batch` | `I_Batch` | [0..1] |
| `_ProductHierarchyNode` | `I_ProductHierarchyNode` | [0..1] |
| `_MaterialGroup` | `I_MaterialGroup` | [0..1] |
| `_ProductGroup` | `I_ProductGroup_2` | [0..1] |
| `_AdditionalMaterialGroup1` | `I_AdditionalMaterialGroup1` | [0..1] |
| `_AdditionalMaterialGroup2` | `I_AdditionalMaterialGroup2` | [0..1] |
| `_AdditionalMaterialGroup3` | `I_AdditionalMaterialGroup3` | [0..1] |
| `_AdditionalMaterialGroup4` | `I_AdditionalMaterialGroup4` | [0..1] |
| `_AdditionalMaterialGroup5` | `I_AdditionalMaterialGroup5` | [0..1] |
| `_MaterialCommissionGroup` | `I_MaterialCommissionGroup` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_PlantRegion` | `I_Region` | [0..1] |
| `_TransitPlant` | `I_Plant` | [0..1] |
| `_ValueChainCategory` | `I_ValueChainCategory` | [0..1] |
| `_BillingQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ItemWeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ItemVolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BillToPartyCountry` | `I_Country` | [0..1] |
| `_BillToPartyRegion` | `I_Region` | [0..1] |
| `_BillingPlanRule` | `I_BillingPlanRule` | [0..1] |
| `_DownPaymentProcessingVariant` | `I_DownPaymentProcessingVariant` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_StatisticalValueControl` | `I_StatisticalValueControl` | [0..1] |
| `_MaterialPricingGroup` | `I_MaterialPricingGroup` | [0..1] |
| `_MainItemPricingRefMaterial` | `I_Material` | [0..1] |
| `_MainItemMaterialPricingGroup` | `I_MaterialPricingGroup` | [0..1] |
| `_TimeSheetOvertimeCat` | `I_TimeSheetOvertimeCat` | [0..1] |
| `_PricingRelevance` | `I_PricingRelevance` | [0..1] |
| `_DepartureCountry` | `I_Country` | [0..1] |
| `_CountryOfOrigin` | `I_Country` | [0..1] |
| `_RegionOfOrigin` | `I_Region` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_WBSElement` | `I_WBSElement` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_MatlAccountAssignmentGroup` | `I_MatlAccountAssignmentGroup` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..1] |
| `_CostCenter_2` | `I_CostCenter` | [0..*] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_ReferenceSalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_ReferenceDeliveryDocumentItem` | `I_DeliveryDocumentItem` | [0..1] |
| `_ReferenceBillingDocItemBasic` | `I_BillingDocumentItemBasic` | [0..1] |
| `_ReferenceSDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_SalesSDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_HigherLevelItemBasic` | `I_BillingDocumentItemBasic` | [0..1] |
| `_HigherLvlItmOfBatSpltItmBasic` | `I_BillingDocumentItemBasic` | [0..1] |
| `_PrelimBillingDocument` | `I_PrelimBillingDocument` | [0..1] |
| `_PrelimBillingDocumentItem` | `I_PrelimBillingDocumentItem` | [0..1] |
| `_SalesGroup` | `I_SalesGroup` | [0..1] |
| `_AdditionalCustomerGroup1` | `I_AdditionalCustomerGroup1` | [0..1] |
| `_AdditionalCustomerGroup2` | `I_AdditionalCustomerGroup2` | [0..1] |
| `_AdditionalCustomerGroup3` | `I_AdditionalCustomerGroup3` | [0..1] |
| `_AdditionalCustomerGroup4` | `I_AdditionalCustomerGroup4` | [0..1] |
| `_AdditionalCustomerGroup5` | `I_AdditionalCustomerGroup5` | [0..1] |
| `_SDDocumentReason` | `I_SDDocumentReason` | [0..1] |
| `_RetailPromotion` | `I_RetailPromotion` | [0..1] |
| `_SalesDeal` | `I_SalesDeal` | [0..1] |
| `_SalesOrderSalesDistrict` | `I_SalesDistrict` | [0..1] |
| `_SalesOrderCustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_SalesOrderCustomerPriceGroup` | `I_CustomerPriceGroup` | [0..1] |
| `_SalesOrderPriceListType` | `I_PriceListType` | [0..1] |
| `_SalesOrderSalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_SalesOrderDistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_ShippingPoint` | `I_ShippingPoint` | [0..1] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_ProviderContract` | `I_ProviderContract` | [0..1] |
| `_ProviderContractItem` | `I_ProviderContractItem` | [0..1] |
| `_SDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_BillingDocumentCategory` | `I_BillingDocumentCategory` | [0..1] |
| `_BillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_CustomerPriceGroup` | `I_CustomerPriceGroup` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_CityCode` | `I_CityCode` | [0..1] |
| `_SalesDistrict` | `I_SalesDistrict` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_County` | `I_TaxingCounty` | [0..1] |
| `_CancelledBillingDocumentBasic` | `I_BillingDocumentBasic` | [0..1] |
| `_OverallSDProcessStatus` | `I_OverallSDProcessStatus` | [0..1] |
| `_OverallBillingStatus` | `I_OverallBillingStatus` | [0..1] |
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_PayerParty` | `I_Customer` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_BillToParty` | `I_Customer` | [0..1] |
| `_SalesEmployee` | `I_PersonWorkAgreement_1` | [0..1] |
| `_ResponsibleEmployee` | `I_PersonWorkAgreement_1` | [0..1] |
| `_SolutionOrder` | `I_ServiceDocumentEnhcd` | [0..1] |
| `_SolutionOrderItem` | `I_ServiceDocumentItemEnhcd` | [0..1] |
| `_CustomsPreference` | `I_CustomsPreference` | [0..1] |
| `_TrdPrefStmntIntOriginCode` | `I_TrdPrefStmntIntOriginCode` | [0..1] |
| `_Extension` | `E_BillingDocumentItem` | [1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ISDBILLDOCITBC'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@AccessControl.privilegedAssociations: [ '_MaterialGroupText',
                                         '_MainItemPricingRefMatlText',
                                         '_PricingReferenceMaterialText',
                                         '_OriginallyRequestedMatlText',
                                         '_MaterialText',
                                         '_ProductText',
                                         '_CreatedByUser',
                                         '_ShippingPointText',
                                         '_WBSElementText',
                                         '_BusinessAreaText' ]

@Analytics.dataCategory: #DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Item in Billing Process Document'

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'BillingDocumentItem'

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #A, sizeCategory: #XL }

@VDM.viewType: #BASIC

define view I_BillingDocumentItemBasic
  as select from P_BillingDocumentItemBasic_1 as BillingDocumentItem
  // Association

  association [0..*] to I_MaterialText                 as _MaterialText
    on $projection.Material = _MaterialText.Material

  association [0..*] to I_ProductText                  as _ProductText
    on $projection.Product = _ProductText.Product

  association [0..*] to I_ProductText                  as _SoldProductText
    on $projection.SoldProduct = _SoldProductText.Product

  association [0..*] to I_MaterialText                 as _OriginallyRequestedMatlText
    on $projection.OriginallyRequestedMaterial = _OriginallyRequestedMatlText.Material

  association [0..*] to I_MaterialText                 as _PricingReferenceMaterialText
    on $projection.PricingReferenceMaterial = _PricingReferenceMaterialText.Material

  association [0..*] to I_MaterialText                 as _MainItemPricingRefMatlText
    on $projection.MainItemPricingRefMaterial = _MainItemPricingRefMatlText.Material

  association [0..*] to I_MaterialGroupText            as _MaterialGroupText
    on $projection.MaterialGroup = _MaterialGroupText.MaterialGroup

  association [0..*] to I_ShippingPointText            as _ShippingPointText
    on $projection.ShippingPoint = _ShippingPointText.ShippingPoint

  association [0..*] to I_WBSElementText               as _WBSElementText
    on $projection.WBSElement = _WBSElementText.WBSElementObject

  association [0..*] to I_BusinessAreaText             as _BusinessAreaText
    on $projection.BusinessArea = _BusinessAreaText.BusinessArea

  association [1..1] to I_BillingDocumentBasic         as _BillingDocumentBasic
    on $projection.BillingDocument = _BillingDocumentBasic.BillingDocument

  association [0..*] to I_BillingDocItemPartnerBasic   as _PartnerBasic
    on  $projection.BillingDocument     = _PartnerBasic.BillingDocument
    and $projection.BillingDocumentItem = _PartnerBasic.BillingDocumentItem

  association [0..*] to I_BillingDocItemPrcgElmntBasic as _PricingElementBasic
    on  $projection.BillingDocument     = _PricingElementBasic.BillingDocument
    and $projection.BillingDocumentItem = _PricingElementBasic.BillingDocumentItem

  association [0..1] to I_SalesDocumentItemCategory    as _SalesDocumentItemCategory
    on $projection.SalesDocumentItemCategory = _SalesDocumentItemCategory.SalesDocumentItemCategory

  association [0..1] to I_SalesDocumentItemType        as _SalesDocumentItemType
    on $projection.SalesDocumentItemType = _SalesDocumentItemType.SalesDocumentItemType

  association [0..1] to I_User                         as _CreatedByUser
    on $projection.CreatedByUser = _CreatedByUser.UserID

  association [0..1] to I_LogicalSystem                as _ReferenceLogicalSystem
    on $projection.ReferenceLogicalSystem = _ReferenceLogicalSystem.LogicalSystem

  association [0..1] to I_Division                     as _OrganizationDivision
    on $projection.OrganizationDivision = _OrganizationDivision.Division

  association [0..1] to I_Division                     as _Division
    on $projection.Division = _Division.Division

  association [0..1] to I_SalesOffice                  as _SalesOffice
    on $projection.SalesOffice = _SalesOffice.SalesOffice

  association [0..1] to I_Material                     as _Material
    on $projection.Material = _Material.Material

  association [0..1] to I_Product                      as _Product
    on $projection.Product = _Product.Product

  association [0..1] to I_Product                      as _SoldProduct
    on $projection.SoldProduct = _SoldProduct.Product

  association [0..1] to I_Material                     as _OriginallyRequestedMaterial
    on $projection.OriginallyRequestedMaterial = _OriginallyRequestedMaterial.Material

  association [0..1] to I_Material                     as _PricingReferenceMaterial
    on $projection.PricingReferenceMaterial = _PricingReferenceMaterial.Material

  association [0..1] to I_Batch                        as _Batch
    on  $projection.Plant    = _Batch.Plant
    and $projection.Material = _Batch.Material
    and $projection.Batch    = _Batch.Batch

  association [0..1] to I_ProductHierarchyNode         as _ProductHierarchyNode
    on $projection.ProductHierarchyNode = _ProductHierarchyNode.ProductHierarchyNode

  association [0..1] to I_MaterialGroup                as _MaterialGroup
    on $projection.MaterialGroup = _MaterialGroup.MaterialGroup

  association [0..1] to I_ProductGroup_2               as _ProductGroup
    on $projection.ProductGroup = _ProductGroup.ProductGroup

  association [0..1] to I_AdditionalMaterialGroup1     as _AdditionalMaterialGroup1
    on $projection.AdditionalMaterialGroup1 = _AdditionalMaterialGroup1.AdditionalMaterialGroup1

  association [0..1] to I_AdditionalMaterialGroup2     as _AdditionalMaterialGroup2
    on $projection.AdditionalMaterialGroup2 = _AdditionalMaterialGroup2.AdditionalMaterialGroup2

  association [0..1] to I_AdditionalMaterialGroup3     as _AdditionalMaterialGroup3
    on $projection.AdditionalMaterialGroup3 = _AdditionalMaterialGroup3.AdditionalMaterialGroup3

  association [0..1] to I_AdditionalMaterialGroup4     as _AdditionalMaterialGroup4
    on $projection.AdditionalMaterialGroup4 = _AdditionalMaterialGroup4.AdditionalMaterialGroup4

  association [0..1] to I_AdditionalMaterialGroup5     as _AdditionalMaterialGroup5
    on $projection.AdditionalMaterialGroup5 = _AdditionalMaterialGroup5.AdditionalMaterialGroup5

  association [0..1] to I_MaterialCommissionGroup      as _MaterialCommissionGroup
    on $projection.MaterialCommissionGroup = _MaterialCommissionGroup.MaterialCommissionGroup

  association [0..1] to I_Plant                        as _Plant
    on $projection.Plant = _Plant.Plant

  association [0..1] to I_StorageLocation              as _StorageLocation
    on  $projection.Plant           = _StorageLocation.Plant
    and $projection.StorageLocation = _StorageLocation.StorageLocation

  association [0..1] to I_Region                       as _PlantRegion
    on  $projection.DepartureCountry = _PlantRegion.Country
    and $projection.PlantRegion      = _PlantRegion.Region

  association [0..1] to I_Plant                        as _TransitPlant
    on $projection.TransitPlant = _TransitPlant.Plant

  association [0..1] to I_ValueChainCategory           as _ValueChainCategory
    on $projection.ValueChainCategory = _ValueChainCategory.ValueChainCategory

  association [0..1] to I_UnitOfMeasure                as _BillingQuantityUnit
    on $projection.BillingQuantityUnit = _BillingQuantityUnit.UnitOfMeasure

  association [0..1] to I_UnitOfMeasure                as _BaseUnit
    on $projection.BaseUnit = _BaseUnit.UnitOfMeasure

  association [0..1] to I_UnitOfMeasure                as _ItemWeightUnit
    on $projection.ItemWeightUnit = _ItemWeightUnit.UnitOfMeasure

  association [0..1] to I_UnitOfMeasure                as _ItemVolumeUnit
    on $projection.ItemVolumeUnit = _ItemVolumeUnit.UnitOfMeasure

  association [0..1] to I_Country                      as _BillToPartyCountry
    on $projection.BillToPartyCountry = _BillToPartyCountry.Country

  association [0..1] to I_Region                       as _BillToPartyRegion
    on  $projection.BillToPartyCountry = _BillToPartyRegion.Country
    and $projection.BillToPartyRegion  = _BillToPartyRegion.Region

  association [0..1] to I_BillingPlanRule              as _BillingPlanRule
    on $projection.BillingPlanRule = _BillingPlanRule.BillingPlanRule

  association [0..1] to I_DownPaymentProcessingVariant as _DownPaymentProcessingVariant
    on $projection.DownPaymentProcessingVariant = _DownPaymentProcessingVariant.DownPaymentProcessingVariant

  association [0..1] to I_Currency                     as _TransactionCurrency
    on $projection.TransactionCurrency = _TransactionCurrency.Currency

  association [0..1] to I_StatisticalValueControl      as _StatisticalValueControl
    on $projection.StatisticalValueControl = _StatisticalValueControl.StatisticalValueControl

  association [0..1] to I_MaterialPricingGroup         as _MaterialPricingGroup
    on $projection.MaterialPricingGroup = _MaterialPricingGroup.MaterialPricingGroup

  association [0..1] to I_Material                     as _MainItemPricingRefMaterial
    on $projection.MainItemPricingRefMaterial = _MainItemPricingRefMaterial.Material

  association [0..1] to I_MaterialPricingGroup         as _MainItemMaterialPricingGroup
    on $projection.MainItemMaterialPricingGroup = _MainItemMaterialPricingGroup.MaterialPricingGroup

  association [0..1] to I_TimeSheetOvertimeCat         as _TimeSheetOvertimeCat
    on $projection.TimeSheetOvertimeCategory = _TimeSheetOvertimeCat.TimeSheetOvertimeCategory

  association [0..1] to I_PricingRelevance             as _PricingRelevance
    on $projection.PricingRelevance = _PricingRelevance.PricingRelevance

  association [0..1] to I_Country                      as _DepartureCountry
    on $projection.DepartureCountry = _DepartureCountry.Country

  association [0..1] to I_Country                      as _CountryOfOrigin
    on $projection.CountryOfOrigin = _CountryOfOrigin.Country

  association [0..1] to I_Region                       as _RegionOfOrigin
    on  $projection.CountryOfOrigin = _RegionOfOrigin.Country
    and $projection.RegionOfOrigin  = _RegionOfOrigin.Region

  association [0..1] to I_BusinessArea                 as _BusinessArea
    on $projection.BusinessArea = _BusinessArea.BusinessArea

  association [0..1] to I_WBSElement                   as _WBSElement
    on $projection.WBSElement = _WBSElement.WBSElement

  association [0..1] to I_WBSElementBasicData          as _WBSElementBasicData
    on $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID

  association [0..1] to I_ControllingArea              as _ControllingArea
    on $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_MatlAccountAssignmentGroup   as _MatlAccountAssignmentGroup
    on $projection.MatlAccountAssignmentGroup = _MatlAccountAssignmentGroup.MatlAccountAssignmentGroup

  association [0..1] to I_CostCenter                   as _CostCenter
    on  $projection.CostCenter         = _CostCenter.CostCenter
    and $projection.ControllingArea    = _CostCenter.ControllingArea
    and _CostCenter.ValidityEndDate   >= $projection.CreationDate
    and _CostCenter.ValidityStartDate <= $projection.CreationDate

  association [0..*] to I_CostCenter                   as _CostCenter_2
    on  $projection.CostCenter      = _CostCenter_2.CostCenter
    and $projection.ControllingArea = _CostCenter_2.ControllingArea

  association [0..*] to I_ProfitCenter                 as _ProfitCenter
    on  $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
    and $projection.ControllingArea = _ProfitCenter.ControllingArea

  association [0..1] to I_SalesDocumentItem            as _ReferenceSalesDocumentItem
    on  $projection.ReferenceSDDocument     = _ReferenceSalesDocumentItem.SalesDocument
    and $projection.ReferenceSDDocumentItem = _ReferenceSalesDocumentItem.SalesDocumentItem
    and (   $projection.ReferenceSDDocumentCategory = 'C' // Order
         or $projection.ReferenceSDDocumentCategory = 'G' // Contract
         or $projection.ReferenceSDDocumentCategory = 'H' // Returns
         or $projection.ReferenceSDDocumentCategory = 'I' // Order wo Charge
         or $projection.ReferenceSDDocumentCategory = 'K' // Credit Memo Request
         or $projection.ReferenceSDDocumentCategory = 'L' // Debit Memo Request
         or $projection.ReferenceSDDocumentCategory = ':' // Service Order
       )

  association [0..1] to I_DeliveryDocumentItem         as _ReferenceDeliveryDocumentItem
    on  $projection.ReferenceSDDocument     = _ReferenceDeliveryDocumentItem.DeliveryDocument
    and $projection.ReferenceSDDocumentItem = _ReferenceDeliveryDocumentItem.DeliveryDocumentItem
    and (   $projection.ReferenceSDDocumentCategory = 'J' // Delivery
         or $projection.ReferenceSDDocumentCategory = 'T' // Returns Delivery for Order
       )

  association [0..1] to I_BillingDocumentItemBasic     as _ReferenceBillingDocItemBasic
    on  $projection.ReferenceSDDocument     = _ReferenceBillingDocItemBasic.BillingDocument
    and $projection.ReferenceSDDocumentItem = _ReferenceBillingDocItemBasic.BillingDocumentItem
    and (   $projection.ReferenceSDDocumentCategory = 'M'    // Invoice
         or $projection.ReferenceSDDocumentCategory = 'N'    // Invoice Canceled
         or $projection.ReferenceSDDocumentCategory = 'O'    // Credit Memo
         or $projection.ReferenceSDDocumentCategory = 'P'    // Debit Memo
         or $projection.ReferenceSDDocumentCategory = 'S'    // Credit Memo Canceled
         or $projection.ReferenceSDDocumentCategory = 'U'    // Pro Forma Invoice
         or $projection.ReferenceSDDocumentCategory = '3'    // Invoice List
         or $projection.ReferenceSDDocumentCategory = '4'    // Credit Memo List
         or $projection.ReferenceSDDocumentCategory = '5'    // Intercompany Invoice
         or $projection.ReferenceSDDocumentCategory = '6'    // Intercompany Credit Memo
         or $projection.ReferenceSDDocumentCategory = 'EBDR' // External Billing Document Request
         or $projection.ReferenceSDDocumentCategory = 'PBD'  // Preliminary Billing Document
       )

  association [0..1] to I_SDDocumentCategory           as _ReferenceSDDocumentCategory
    on $projection.ReferenceSDDocumentCategory = _ReferenceSDDocumentCategory.SDDocumentCategory

  association [0..1] to I_SalesDocument                as _SalesDocument
    on $projection.SalesDocument = _SalesDocument.SalesDocument

  association [0..1] to I_SalesDocumentItem            as _SalesDocumentItem
    on  $projection.SalesDocument     = _SalesDocumentItem.SalesDocument
    and $projection.SalesDocumentItem = _SalesDocumentItem.SalesDocumentItem

  association [0..1] to I_SDDocumentCategory           as _SalesSDDocumentCategory
    on $projection.SalesSDDocumentCategory = _SalesSDDocumentCategory.SDDocumentCategory

  association [0..1] to I_BillingDocumentItemBasic     as _HigherLevelItemBasic
    on  $projection.BillingDocument = _HigherLevelItemBasic.BillingDocument
    and $projection.HigherLevelItem = _HigherLevelItemBasic.BillingDocumentItem

  association [0..1] to I_BillingDocumentItemBasic     as _HigherLvlItmOfBatSpltItmBasic
    on  $projection.BillingDocument          = _HigherLvlItmOfBatSpltItmBasic.BillingDocument
    and $projection.HigherLvlItmOfBatSpltItm = _HigherLvlItmOfBatSpltItmBasic.BillingDocumentItem

  association [0..1] to I_PrelimBillingDocument        as _PrelimBillingDocument
    on $projection.PrelimBillingDocument = _PrelimBillingDocument.PrelimBillingDocument

  association [0..1] to I_PrelimBillingDocumentItem    as _PrelimBillingDocumentItem
    on  $projection.PrelimBillingDocument     = _PrelimBillingDocumentItem.PrelimBillingDocument
    and $projection.PrelimBillingDocumentItem = _PrelimBillingDocumentItem.PrelimBillingDocumentItem

  association [0..1] to I_SalesGroup                   as _SalesGroup
    on $projection.SalesGroup = _SalesGroup.SalesGroup

  association [0..1] to I_AdditionalCustomerGroup1     as _AdditionalCustomerGroup1
    on $projection.AdditionalCustomerGroup1 = _AdditionalCustomerGroup1.AdditionalCustomerGroup1

  association [0..1] to I_AdditionalCustomerGroup2     as _AdditionalCustomerGroup2
    on $projection.AdditionalCustomerGroup2 = _AdditionalCustomerGroup2.AdditionalCustomerGroup2

  association [0..1] to I_AdditionalCustomerGroup3     as _AdditionalCustomerGroup3
    on $projection.AdditionalCustomerGroup3 = _AdditionalCustomerGroup3.AdditionalCustomerGroup3

  association [0..1] to I_AdditionalCustomerGroup4     as _AdditionalCustomerGroup4
    on $projection.AdditionalCustomerGroup4 = _AdditionalCustomerGroup4.AdditionalCustomerGroup4

  association [0..1] to I_AdditionalCustomerGroup5     as _AdditionalCustomerGroup5
    on $projection.AdditionalCustomerGroup5 = _AdditionalCustomerGroup5.AdditionalCustomerGroup5

  association [0..1] to I_SDDocumentReason             as _SDDocumentReason
    on $projection.SDDocumentReason = _SDDocumentReason.SDDocumentReason

  association [0..1] to I_RetailPromotion              as _RetailPromotion
    on $projection.RetailPromotion = _RetailPromotion.RetailPromotion

  association [0..1] to I_SalesDeal                    as _SalesDeal
    on $projection.SalesDeal = _SalesDeal.SalesDeal

  association [0..1] to I_SalesDistrict                as _SalesOrderSalesDistrict
    on $projection.SalesOrderSalesDistrict = _SalesOrderSalesDistrict.SalesDistrict

  association [0..1] to I_CustomerGroup                as _SalesOrderCustomerGroup
    on $projection.SalesOrderCustomerGroup = _SalesOrderCustomerGroup.CustomerGroup

  association [0..1] to I_CustomerPriceGroup           as _SalesOrderCustomerPriceGroup
    on $projection.SalesOrderCustomerPriceGroup = _SalesOrderCustomerPriceGroup.CustomerPriceGroup

  association [0..1] to I_PriceListType                as _SalesOrderPriceListType
    on $projection.SalesOrderPriceListType = _SalesOrderPriceListType.PriceListType

  association [0..1] to I_SalesOrganization            as _SalesOrderSalesOrganization
    on $projection.SalesOrderSalesOrganization = _SalesOrderSalesOrganization.SalesOrganization

  association [0..1] to I_DistributionChannel          as _SalesOrderDistributionChannel
    on $projection.SalesOrderDistributionChannel = _SalesOrderDistributionChannel.DistributionChannel

  association [0..1] to I_ShippingPoint                as _ShippingPoint
    on $projection.ShippingPoint = _ShippingPoint.ShippingPoint

  association [0..1] to I_ServiceDocumentType          as _ServiceDocumentType
    on $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType

  association [0..1] to I_ProviderContract             as _ProviderContract
    on $projection.ProviderContract = _ProviderContract.ProviderContract

  association [0..1] to I_ProviderContractItem         as _ProviderContractItem
    on  $projection.ProviderContract     = _ProviderContractItem.ProviderContract
    and $projection.ProviderContractItem = _ProviderContractItem.ProviderContractItem

  // Analytics fields
  association [0..1] to I_SDDocumentCategory           as _SDDocumentCategory
    on $projection.SDDocumentCategory = _SDDocumentCategory.SDDocumentCategory

  association [0..1] to I_BillingDocumentCategory      as _BillingDocumentCategory
    on $projection.BillingDocumentCategory = _BillingDocumentCategory.BillingDocumentCategory

  association [0..1] to I_BillingDocumentType          as _BillingDocumentType
    on $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType

  association [0..1] to I_SalesOrganization            as _SalesOrganization
    on $projection.SalesOrganization = _SalesOrganization.SalesOrganization

  association [0..1] to I_DistributionChannel          as _DistributionChannel
    on $projection.DistributionChannel = _DistributionChannel.DistributionChannel

  association [0..1] to I_CustomerPriceGroup           as _CustomerPriceGroup
    on $projection.CustomerPriceGroup = _CustomerPriceGroup.CustomerPriceGroup

  association [0..1] to I_CustomerGroup                as _CustomerGroup
    on $projection.CustomerGroup = _CustomerGroup.CustomerGroup

  association [0..1] to I_Country                      as _Country
    on $projection.Country = _Country.Country

  association [0..1] to I_CityCode                     as _CityCode
    on  $projection.CityCode = _CityCode.CityCode
    and $projection.Country  = _CityCode.Country
    and $projection.Region   = _CityCode.Region

  association [0..1] to I_SalesDistrict                as _SalesDistrict
    on $projection.SalesDistrict = _SalesDistrict.SalesDistrict

  association [0..1] to I_Region                       as _Region
    on  $projection.Region  = _Region.Region
    and $projection.Country = _Region.Country

  association [0..1] to I_TaxingCounty                 as _County
    on  $projection.Country = _County.Country
    and $projection.Region  = _County.Region
    and $projection.County  = _County.TaxingCounty

  association [0..1] to I_BillingDocumentBasic         as _CancelledBillingDocumentBasic
    on $projection.CancelledBillingDocument = _CancelledBillingDocumentBasic.BillingDocument

  association [0..1] to I_OverallSDProcessStatus       as _OverallSDProcessStatus
    on $projection.OverallSDProcessStatus = _OverallSDProcessStatus.OverallSDProcessStatus

  association [0..1] to I_OverallBillingStatus         as _OverallBillingStatus
    on $projection.OverallBillingStatus = _OverallBillingStatus.OverallBillingStatus

  association [0..1] to I_Customer                     as _SoldToParty
    on $projection.SoldToParty = _SoldToParty.Customer

  association [0..1] to I_Customer                     as _PayerParty
    on $projection.PayerParty = _PayerParty.Customer

  association [0..1] to I_CompanyCode                  as _CompanyCode
    on $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_Customer                     as _ShipToParty
    on $projection.ShipToParty = _ShipToParty.Customer

  association [0..1] to I_Customer                     as _BillToParty
    on $projection.BillToParty = _BillToParty.Customer

  association [0..1] to I_PersonWorkAgreement_1        as _SalesEmployee
    on $projection.SalesEmployee = _SalesEmployee.PersonWorkAgreement

  association [0..1] to I_PersonWorkAgreement_1        as _ResponsibleEmployee
    on $projection.ResponsibleEmployee = _ResponsibleEmployee.PersonWorkAgreement

  association [0..1] to I_ServiceDocumentEnhcd         as _SolutionOrder
    on  _SolutionOrder.ServiceObjectType  = 'BUS2000172'
    and $projection.BusinessSolutionOrder = _SolutionOrder.ServiceDocument

  association [0..1] to I_ServiceDocumentItemEnhcd     as _SolutionOrderItem
    on  _SolutionOrderItem.ServiceObjectType  = 'BUS2000172'
    and $projection.BusinessSolutionOrder     = _SolutionOrderItem.ServiceDocument
    and $projection.BusinessSolutionOrderItem = _SolutionOrderItem.ServiceDocumentItem

  association [0..1] to I_CustomsPreference            as _CustomsPreference
    on $projection.CustomsPreference = _CustomsPreference.CustomsPreference

  association [0..1] to I_TrdPrefStmntIntOriginCode    as _TrdPrefStmntIntOriginCode
    on $projection.TrdPrefStmntInternalOriginCode = _TrdPrefStmntIntOriginCode.TrdPrefStmntInternalOriginCode

  // Extension Association
  association [1] to    E_BillingDocumentItem          as _Extension
    on  $projection.BillingDocument     = _Extension.BillingDocument
    and $projection.BillingDocumentItem = _Extension.BillingDocumentItem

{
      // Key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BillingDocumentBasicStdVH', element: 'BillingDocument' } } ]
      @ObjectModel.foreignKey.association: '_BillingDocumentBasic'
  key BillingDocumentItem.BillingDocument,

      @ObjectModel.text.element: [ 'BillingDocumentItemText' ]
  key BillingDocumentItem.BillingDocumentItem,

      @ObjectModel.foreignKey.association: '_SalesDocumentItemCategory'
      BillingDocumentItem.SalesDocumentItemCategory,

      @ObjectModel.foreignKey.association: '_SalesDocumentItemType'
      BillingDocumentItem.SalesDocumentItemType,

      BillingDocumentItem.ReturnItemProcessingType,

      // Admin
      @Semantics.user.createdBy: true
      BillingDocumentItem.CreatedByUser,

      @Semantics.systemDate.createdAt: true
      BillingDocumentItem.CreationDate,

      @Semantics.systemTime.createdAt
      BillingDocumentItem.CreationTime,

      @ObjectModel.foreignKey.association: '_ReferenceLogicalSystem'
      BillingDocumentItem.ReferenceLogicalSystem,

      // Organization
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      BillingDocumentItem.OrganizationDivision,

      @ObjectModel.foreignKey.association: '_Division'
      BillingDocumentItem.Division,

      @ObjectModel.foreignKey.association: '_SalesOffice'
      BillingDocumentItem.SalesOffice,

      // Product
      @API.element: { releaseState: #DEPRECATED, successor: 'Product' }
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      @ObjectModel.foreignKey.association: '_Material'
      @ObjectModel.text.association: '_MaterialText'
      cast(BillingDocumentItem.Product as matnr preserving type)                                                        as Material,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_Product'
      @ObjectModel.text.association: '_ProductText'
      BillingDocumentItem.Product,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
      @ObjectModel.text.association: '_OriginallyRequestedMatlText'
      BillingDocumentItem.OriginallyRequestedMaterial,

      BillingDocumentItem.InternationalArticleNumber,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      @ObjectModel.foreignKey.association: '_PricingReferenceMaterial'
      @ObjectModel.text.association: '_PricingReferenceMaterialText'
      BillingDocumentItem.PricingReferenceMaterial,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BatchStdVH', element: 'Batch' },
                                            additionalBinding: [ { localElement: 'Plant',    element: 'Plant'    },
                                                                 { localElement: 'Material', element: 'Material' } ] } ]
      @ObjectModel.foreignKey.association: '_Batch'
      BillingDocumentItem.Batch,

      @ObjectModel.foreignKey.association: '_ProductHierarchyNode'
      BillingDocumentItem.ProductHierarchyNode,

      @API.element: { releaseState: #DEPRECATED, successor: 'ProductGroup' }
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialGroup', element: 'MaterialGroup' } } ]
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @ObjectModel.text.association: '_MaterialGroupText'
      cast(BillingDocumentItem.ProductGroup as matkl preserving type)                                                   as MaterialGroup,

      @ObjectModel.foreignKey.association: '_ProductGroup'
      BillingDocumentItem.ProductGroup,

      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      BillingDocumentItem.AdditionalMaterialGroup1,

      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      BillingDocumentItem.AdditionalMaterialGroup2,

      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      BillingDocumentItem.AdditionalMaterialGroup3,

      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      BillingDocumentItem.AdditionalMaterialGroup4,

      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      BillingDocumentItem.AdditionalMaterialGroup5,

      BillingDocumentItem.ProductConfiguration,

      @ObjectModel.foreignKey.association: '_MaterialCommissionGroup'
      BillingDocumentItem.MaterialCommissionGroup,

      @ObjectModel.foreignKey.association: '_Plant'
      BillingDocumentItem.Plant,

      @ObjectModel.foreignKey.association: '_StorageLocation'
      BillingDocumentItem.StorageLocation,

      BillingDocumentItem.ReplacementPartType,
      BillingDocumentItem.MaterialGroupHierarchy1,
      BillingDocumentItem.MaterialGroupHierarchy2,

      @ObjectModel.foreignKey.association: '_PlantRegion'
      BillingDocumentItem.PlantRegion,

      BillingDocumentItem.PlantCounty,
      BillingDocumentItem.PlantCity,

      @ObjectModel.foreignKey.association: '_TransitPlant'
      BillingDocumentItem.TransitPlant,

      @ObjectModel.foreignKey.association: '_ValueChainCategory'
      BillingDocumentItem.ValueChainCategory,

      BillingDocumentItem.BOMExplosion,
      BillingDocumentItem.MaterialDeterminationType,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      @ObjectModel.foreignKey.association: '_SoldProduct'
      @ObjectModel.text.association: '_SoldProductText'
      BillingDocumentItem.SoldProduct,

      // Billing
      @Semantics.text: true
      BillingDocumentItem.BillingDocumentItemText,

      BillingDocumentItem.ServicesRenderedDate,

      @Semantics.quantity.unitOfMeasure: 'BillingQuantityUnit'
      BillingDocumentItem.BillingQuantity,

      @ObjectModel.foreignKey.association: '_BillingQuantityUnit'
      @Semantics.unitOfMeasure: true
      BillingDocumentItem.BillingQuantityUnit,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      BillingDocumentItem.BillingQuantityInBaseUnit,

      @ObjectModel.foreignKey.association: '_BaseUnit'
      @Semantics.unitOfMeasure: true
      BillingDocumentItem.BaseUnit,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      BillingDocumentItem.MRPRequiredQuantityInBaseUnit,

      BillingDocumentItem.BillingToBaseQuantityDnmntr,
      BillingDocumentItem.BillingToBaseQuantityNmrtr,

      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      BillingDocumentItem.ItemGrossWeight,

      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      BillingDocumentItem.ItemNetWeight,

      @ObjectModel.foreignKey.association: '_ItemWeightUnit'
      @Semantics.unitOfMeasure: true
      BillingDocumentItem.ItemWeightUnit,

      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      BillingDocumentItem.ItemVolume,

      @ObjectModel.foreignKey.association: '_ItemVolumeUnit'
      @Semantics.unitOfMeasure: true
      BillingDocumentItem.ItemVolumeUnit,

      @ObjectModel.foreignKey.association: '_BillToPartyCountry'
      BillingDocumentItem.BillToPartyCountry,

      @ObjectModel.foreignKey.association: '_BillToPartyRegion'
      BillingDocumentItem.BillToPartyRegion,

      @ObjectModel.foreignKey.association: '_BillingPlanRule'
      BillingDocumentItem.BillingPlanRule,

      BillingDocumentItem.BillingPlan,
      BillingDocumentItem.BillingPlanItem,

      @ObjectModel.foreignKey.association: '_DownPaymentProcessingVariant'
      BillingDocumentItem.DownPaymentProcessingVariant,

      // Status
      // foreign key association has to be defined (in next release (?)), target: I_DocBillingStatus
      BillingDocumentItem.DocumentBillingStatus,

      // Pricing

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BillingDocumentItem.NetAmount,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode: true
      BillingDocumentItem.TransactionCurrency,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BillingDocumentItem.GrossAmount,

      BillingDocumentItem.PricingDate,
      BillingDocumentItem.PriceDetnExchangeRate,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      BillingDocumentItem.PricingScaleQuantityInBaseUnit,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BillingDocumentItem.TaxAmount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BillingDocumentItem.CostAmount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BillingDocumentItem.Subtotal1Amount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BillingDocumentItem.Subtotal2Amount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BillingDocumentItem.Subtotal3Amount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BillingDocumentItem.Subtotal4Amount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BillingDocumentItem.Subtotal5Amount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BillingDocumentItem.Subtotal6Amount,

      @ObjectModel.foreignKey.association: '_StatisticalValueControl'
      BillingDocumentItem.StatisticalValueControl,

      BillingDocumentItem.CashDiscountIsDeductible,
      BillingDocumentItem.CustomerConditionGroup1,
      BillingDocumentItem.CustomerConditionGroup2,
      BillingDocumentItem.CustomerConditionGroup3,
      BillingDocumentItem.CustomerConditionGroup4,
      BillingDocumentItem.CustomerConditionGroup5,
      BillingDocumentItem.ManualPriceChangeType,

      @ObjectModel.foreignKey.association: '_MaterialPricingGroup'
      BillingDocumentItem.MaterialPricingGroup,

      BillingDocumentItem.StatisticsExchangeRate,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      @ObjectModel.foreignKey.association: '_MainItemPricingRefMaterial'
      @ObjectModel.text.association: '_MainItemPricingRefMatlText'
      BillingDocumentItem.MainItemPricingRefMaterial,

      @ObjectModel.foreignKey.association: '_MainItemMaterialPricingGroup'
      BillingDocumentItem.MainItemMaterialPricingGroup,

      @ObjectModel.foreignKey.association: '_TimeSheetOvertimeCat'
      BillingDocumentItem.TimeSheetOvertimeCategory,

      @ObjectModel.foreignKey.association: '_PricingRelevance'
      BillingDocumentItem.PricingRelevance,

      // Tax
      @ObjectModel.foreignKey.association: '_DepartureCountry'
      BillingDocumentItem.DepartureCountry,

      BillingDocumentItem.TaxJurisdiction,
      BillingDocumentItem.ProductTaxClassification1,
      BillingDocumentItem.ProductTaxClassification2,
      BillingDocumentItem.ProductTaxClassification3,
      BillingDocumentItem.ProductTaxClassification4,
      BillingDocumentItem.ProductTaxClassification5,
      BillingDocumentItem.ProductTaxClassification6,
      BillingDocumentItem.ProductTaxClassification7,
      BillingDocumentItem.ProductTaxClassification8,
      BillingDocumentItem.ProductTaxClassification9,
      BillingDocumentItem.ZeroVATRsn,
      BillingDocumentItem.TaxCode,
      BillingDocumentItem.TaxRateValidityStartDate,

      // Foreign trade
      @ObjectModel.foreignKey.association: '_CountryOfOrigin'
      BillingDocumentItem.CountryOfOrigin,

      @ObjectModel.foreignKey.association: '_RegionOfOrigin'
      BillingDocumentItem.RegionOfOrigin,

      BillingDocumentItem.CommodityCode,

      // Payment
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BillingDocumentItem.EligibleAmountForCashDiscount,

      // Accounting
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @ObjectModel.text.association: '_BusinessAreaText'
      BillingDocumentItem.BusinessArea,

      @ObjectModel.foreignKey.association: '_ProfitCenter'
      BillingDocumentItem.ProfitCenter,

      @API.element: { releaseState: #DEPRECATED, successor: 'WBSElementInternalID' }
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementStdVH', element: 'WBSElement' } } ]
      @ObjectModel.foreignKey.association: '_WBSElement'
      @ObjectModel.text.association: '_WBSElementText'
      cast(BillingDocumentItem.WBSElementInternalID as ps_psp_pnr preserving type)                                      as WBSElement,

      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      BillingDocumentItem.WBSElementInternalID,

      @ObjectModel.foreignKey.association: '_ProviderContract'
      BillingDocumentItem.ProviderContract,

      @ObjectModel.foreignKey.association: '_ProviderContractItem'
      BillingDocumentItem.ProviderContractItem,

      @API.element: { releaseState: #DEPRECATED, successor: 'BillingPeriodOfPerfStartDate' }
      BillingDocumentItem.BillingPerformancePeriodStrDte,

      cast(BillingDocumentItem.BillingPerformancePeriodStrDte as fm_perop_fi_low preserving type)                       as BillingPeriodOfPerfStartDate,

      @API.element: { releaseState: #DEPRECATED, successor: 'BillingPeriodOfPerfEndDate' }
      BillingDocumentItem.BillingPerformancePeriodEndDte,

      cast(BillingDocumentItem.BillingPerformancePeriodEndDte as fm_perop_fi_high preserving type)                      as BillingPeriodOfPerfEndDate,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' } } ]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      BillingDocumentItem.ControllingArea,

      @API.element: { releaseState: #DECOMMISSIONED, successor: 'ProfitabilitySegment_2' }
      cast(case when BillingDocumentItem.ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad(BillingDocumentItem.ProfitabilitySegment_2, 10, '0') end as rkeobjnr_numc)
                                                                                                                        as ProfitabilitySegment,

      BillingDocumentItem.ProfitabilitySegment_2,

      BillingDocumentItem.OrderID,

      @ObjectModel.foreignKey.association: '_CostCenter_2'
      BillingDocumentItem.CostCenter,

      BillingDocumentItem.OriginSDDocument,
      BillingDocumentItem.OriginSDDocumentItem,
      BillingDocumentItem.PriceDetnExchangeRateDate,

      @ObjectModel.foreignKey.association: '_MatlAccountAssignmentGroup'
      BillingDocumentItem.MatlAccountAssignmentGroup,

      // Reference
      BillingDocumentItem.ReferenceSDDocument,
      BillingDocumentItem.ReferenceSDDocumentItem,

      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      BillingDocumentItem.ReferenceSDDocumentCategory,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesDocumentStdVH', element: 'SalesDocument' } } ]
      @ObjectModel.foreignKey.association: '_SalesDocument'
      BillingDocumentItem.SalesDocument,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesDocumentItemStdVH', element: 'SalesDocumentItem' },
                                            additionalBinding: [ { localElement: 'SalesDocument',
                                                                   element: 'SalesDocument' } ] } ]
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      BillingDocumentItem.SalesDocumentItem,

      @ObjectModel.foreignKey.association: '_SalesSDDocumentCategory'
      BillingDocumentItem.SalesSDDocumentCategory,


      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BillgDocItmBscStdVH', element: 'BillingDocumentItem' },
                                            additionalBinding: [ { localElement: 'BillingDocument',
                                                                   element: 'BillingDocument' } ] } ]
      @ObjectModel.foreignKey.association: '_HigherLevelItemBasic'
      BillingDocumentItem.HigherLevelItem,

      @ObjectModel.foreignKey.association: '_HigherLvlItmOfBatSpltItmBasic'
      BillingDocumentItem.HigherLvlItmOfBatSpltItm,

      BillingDocumentItem.BillingDocumentItemInPartSgmt,
      BillingDocumentItem.ExternalReferenceDocument,

      @API.element: { releaseState: #DEPRECATED, successor: 'BillingDocExtReferenceDocItem' }
      cast(BillingDocumentItem.BillingDocExtReferenceDocItem as ext_reference_document_item preserving type)            as ExternalReferenceDocumentItem,

      BillingDocumentItem.BillingDocExtReferenceDocItem,

      @ObjectModel.foreignKey.association: '_PrelimBillingDocument'
      BillingDocumentItem.PrelimBillingDocument,

      @ObjectModel.foreignKey.association: '_PrelimBillingDocumentItem'
      BillingDocumentItem.PrelimBillingDocumentItem,

      // Sales
      @ObjectModel.foreignKey.association: '_SalesGroup'
      BillingDocumentItem.SalesGroup,

      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      BillingDocumentItem.AdditionalCustomerGroup1,

      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      BillingDocumentItem.AdditionalCustomerGroup2,

      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      BillingDocumentItem.AdditionalCustomerGroup3,

      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      BillingDocumentItem.AdditionalCustomerGroup4,

      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      BillingDocumentItem.AdditionalCustomerGroup5,

      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      BillingDocumentItem.SDDocumentReason,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_RetailPromotionStdVH', element: 'RetailPromotion' } } ]
      @ObjectModel.foreignKey.association: '_RetailPromotion'
      BillingDocumentItem.RetailPromotion,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BillingDocumentItem.RebateBasisAmount,

      BillingDocumentItem.VolumeRebateGroup,
      BillingDocumentItem.ItemIsRelevantForCredit,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BillingDocumentItem.CreditRelatedPrice,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesDealStdVH', element: 'SalesDeal' } } ]
      @ObjectModel.foreignKey.association: '_SalesDeal'
      BillingDocumentItem.SalesDeal,

      BillingDocumentItem.SalesPromotion,

      @ObjectModel.foreignKey.association: '_SalesOrderSalesDistrict'
      BillingDocumentItem.SalesOrderSalesDistrict,

      @ObjectModel.foreignKey.association: '_SalesOrderCustomerGroup'
      BillingDocumentItem.SalesOrderCustomerGroup,

      @ObjectModel.foreignKey.association: '_SalesOrderCustomerPriceGroup'
      BillingDocumentItem.SalesOrderCustomerPriceGroup,

      @ObjectModel.foreignKey.association: '_SalesOrderPriceListType'
      BillingDocumentItem.SalesOrderPriceListType,

      @ObjectModel.foreignKey.association: '_SalesOrderSalesOrganization'
      BillingDocumentItem.SalesOrderSalesOrganization,

      @ObjectModel.foreignKey.association: '_SalesOrderDistributionChannel'
      BillingDocumentItem.SalesOrderDistributionChannel,

      BillingDocumentItem.SalesDocIsCreatedFromReference,

      // Shipping
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ShippingPointStdVH', element: 'ShippingPoint' } } ]
      @ObjectModel.foreignKey.association: '_ShippingPoint'
      @ObjectModel.text.association: '_ShippingPointText'
      BillingDocumentItem.ShippingPoint,

      // CRM
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      BillingDocumentItem.ServiceDocumentType,

      BillingDocumentItem.ServiceDocument,
      BillingDocumentItem.ServiceDocumentItem,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SolutionOrder'
      BillingDocumentItem.BusinessSolutionOrder,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SolutionOrderItem'
      BillingDocumentItem.BusinessSolutionOrderItem,

      // Other fields
      BillingDocumentItem.HigherLevelItemUsage,
      BillingDocumentItem.BillingDocumentIsTemporary,

      // Added Analytics fields
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      BillingDocumentItem.SDDocumentCategory,

      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      BillingDocumentItem.BillingDocumentType,

      @ObjectModel.foreignKey.association: '_SalesOrganization'
      BillingDocumentItem.SalesOrganization,

      @ObjectModel.foreignKey.association: '_DistributionChannel'
      BillingDocumentItem.DistributionChannel,

      @ObjectModel.foreignKey.association: '_CustomerPriceGroup'
      BillingDocumentItem.CustomerPriceGroup,

      @ObjectModel.foreignKey.association: '_CustomerGroup'
      BillingDocumentItem.CustomerGroup,

      @ObjectModel.foreignKey.association: '_Country'
      BillingDocumentItem.Country,

      @ObjectModel.foreignKey.association: '_Region'
      BillingDocumentItem.Region,

      @ObjectModel.foreignKey.association: '_CityCode'
      BillingDocumentItem.CityCode,

      @ObjectModel.foreignKey.association: '_SalesDistrict'
      BillingDocumentItem.SalesDistrict,

      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      BillingDocumentItem.OverallSDProcessStatus,

      @ObjectModel.foreignKey.association: '_OverallBillingStatus'
      BillingDocumentItem.OverallBillingStatus,

      // sales
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      @ObjectModel.foreignKey.association: '_SoldToParty'
      BillingDocumentItem.SoldToParty,

      // payment
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      @ObjectModel.foreignKey.association: '_PayerParty'
      BillingDocumentItem.PayerParty,

      BillingDocumentItem.BillingDocumentDate,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      BillingDocumentItem.CompanyCode,

      @ObjectModel.foreignKey.association: '_County'
      BillingDocumentItem.County,

      BillingDocumentItem.CustomerRebateAgreement,

      @ObjectModel.foreignKey.association: '_BillingDocumentCategory'
      BillingDocumentItem.BillingDocumentCategory,

      // ship-to
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]

      BillingDocumentItem.PricingDocument,

      @ObjectModel.foreignKey.association: '_CancelledBillingDocumentBasic'
      BillingDocumentItem.CancelledBillingDocument,

      // ship-to
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      @ObjectModel.foreignKey.association: '_ShipToParty'
      BillingDocumentItem.ShipToParty,

      // bill-to
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillingDocumentItem.BillToParty,

      @ObjectModel.foreignKey.association: '_SalesEmployee' //_2
      BillingDocumentItem.SalesEmployee,

      @ObjectModel.foreignKey.association: '_ResponsibleEmployee' //_2 removed
      BillingDocumentItem.ResponsibleEmployee,

      // GTS 
      @ObjectModel.foreignKey.association: '_CustomsPreference'
      BillingDocumentItem.CustomsPreference,

      // Note: The field contains code values. Code list view is not available.
      BillingDocumentItem.TrdPrefStmntExternalOriginCode,

      @ObjectModel.foreignKey.association: '_TrdPrefStmntIntOriginCode'
      BillingDocumentItem.TrdPrefStmntInternalOriginCode,

      @Semantics.booleanIndicator: true
      BillingDocumentItem.PricingIsIncomplete,

      // association
      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _BillingDocumentBasic,

      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _PartnerBasic,

      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _PricingElementBasic,

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
      _TransitPlant,
      _ValueChainCategory,
      _BillingQuantityUnit,
      _BaseUnit,
      _ItemWeightUnit,
      _ItemVolumeUnit,
      _BillToPartyCountry,
      _BillToPartyRegion,
      _BillingPlanRule,
      _DownPaymentProcessingVariant,
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

      @API.element: { releaseState: #DEPRECATED, successor: '_WBSElementBasicData' }
      _WBSElement,

      _WBSElementBasicData,
      _ControllingArea,
      _MatlAccountAssignmentGroup,

      @API.element: { releaseState: #DEPRECATED, successor: '_CostCenter_2' }
      _CostCenter,

      _CostCenter_2,
      _ReferenceSalesDocumentItem,
      _ReferenceDeliveryDocumentItem,
      _ReferenceBillingDocItemBasic,
      _ReferenceSDDocumentCategory,
      _SalesDocument,
      _SalesDocumentItem,
      _SalesSDDocumentCategory,
      _HigherLevelItemBasic,
      _HigherLvlItmOfBatSpltItmBasic,
      _PrelimBillingDocument,
      _PrelimBillingDocumentItem,
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
      _ProviderContract,
      _ProviderContractItem,
      _SolutionOrder,
      _SolutionOrderItem,
      _CustomsPreference,
      _TrdPrefStmntIntOriginCode,

      @Consumption.hidden: true
      _MaterialGroupText,

      @Consumption.hidden: true
      _ShippingPointText,

      @Consumption.hidden: true
      _BusinessAreaText,

      @API.element: { releaseState: #DEPRECATED, successor: '_WBSElementBasicData' }
      @Consumption.hidden: true
      _WBSElementText,

      @API.element: { releaseState: #DEPRECATED, successor: '_ProductText' }
      @Consumption.hidden: true
      _MaterialText,

      @Consumption.hidden: true
      _ProductText,

      @Consumption.hidden: true
      _PricingReferenceMaterialText,

      @Consumption.hidden: true
      _MainItemPricingRefMatlText,

      @Consumption.hidden: true
      _OriginallyRequestedMatlText,

      @Consumption.hidden: true
      _SoldProductText,

      // Analytics
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
      _OverallBillingStatus,
      _SoldToParty,
      _PayerParty,
      _CompanyCode,
      _County,
      _CancelledBillingDocumentBasic,
      _ShipToParty,
      _BillToParty,
      _SalesEmployee,
      _ResponsibleEmployee
}
```
