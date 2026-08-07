---
name: C_SALESDOCUMENTITEMDEX_1
description: "Salesdocumentitemdex 1"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - consumption-view
  - data-extraction
  - sales-document
  - document
  - item-level
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# C_SALESDOCUMENTITEMDEX_1

**Salesdocumentitemdex 1**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocument` | ✓ | |  |  |  |  |
| `SalesDocumentItem` | ✓ | |  |  |  |  |
| `SalesDocumentItemUUID` |  | |  |  |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `SalesDocumentType` |  | |  |  |  |  |
| `SalesDocumentItemCategory` |  | |  |  |  |  |
| `SalesDocumentItemType` |  | |  |  |  |  |
| `IsReturnsItem` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `InternationalArticleNumber` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `MaterialSubstitutionReason` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `SalesDocumentItemText` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `SalesEmployee` |  | |  |  |  |  |
| `SalesEmployeeWorkAgreement` |  | |  |  |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `ResponsibleEmployeeWorkAgrmt` |  | |  |  |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `SalesDocumentDate` |  | |  |  |  |  |
| `OrderQuantity` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `TargetQuantity` |  | |  |  |  |  |
| `TargetQuantityUnit` |  | |  |  |  |  |
| `TargetToBaseQuantityDnmntr` |  | |  |  |  |  |
| `TargetToBaseQuantityNmrtr` |  | |  |  |  |  |
| `OrderToBaseQuantityDnmntr` |  | |  |  |  |  |
| `OrderToBaseQuantityNmrtr` |  | |  |  |  |  |
| `ConfdDelivQtyInOrderQtyUnit` |  | |  |  |  |  |
| `TargetDelivQtyInOrderQtyUnit` |  | |  |  |  |  |
| `ConfdDeliveryQtyInBaseUnit` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `RequestedQuantityInBaseUnit` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `HdrOrderProbabilityInPercent` |  | |  |  |  |  |
| `ItemOrderProbabilityInPercent` |  | |  |  |  |  |
| `SalesDocumentRjcnReason` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `PriceDetnExchangeRate` |  | |  |  |  |  |
| `AbsltPriceDetnExchangeRate` |  | |  | `cast(abs(SalesDocumentItem.PriceDetnExchangeRate) as kursk_abs)` |  |  |
| `PriceDetnExchRateIsIndrctQtan` |  | |  | `cast(case when SalesDocumentItem.PriceDetnExchangeRate < 0 then 'X' else ' ' end as kursk_quotatn_is_indirect)` |  |  |
| `StatisticalValueControl` |  | |  |  |  |  |
| `MatlAccountAssignmentGroup` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `SalesOrganizationCurrency` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `NetPriceQuantityUnit` |  | |  |  |  |  |
| `TaxAmount` |  | |  |  |  |  |
| `CostAmount` |  | |  |  |  |  |
| `Subtotal1Amount` |  | |  |  |  |  |
| `Subtotal2Amount` |  | |  |  |  |  |
| `Subtotal3Amount` |  | |  |  |  |  |
| `Subtotal4Amount` |  | |  |  |  |  |
| `Subtotal5Amount` |  | |  |  |  |  |
| `Subtotal6Amount` |  | |  |  |  |  |
| `CappedNetAmount` |  | |  |  |  |  |
| `SalesDocumentCondition` |  | |  |  |  |  |
| `ShippingPoint` |  | |  |  |  |  |
| `ShippingType` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `RequestedDeliveryDate` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `DeliveryBlockReason` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `OriginalPlant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `Route` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `MinDeliveryQtyInBaseUnit` |  | |  |  |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `PartialDeliveryIsAllowed` |  | |  |  |  |  |
| `BindingPeriodValidityStartDate` |  | |  |  |  |  |
| `BindingPeriodValidityEndDate` |  | |  |  |  |  |
| `CompletionRule` |  | |  |  |  |  |
| `OutlineAgreementTargetAmount` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `BillingCompanyCode` |  | |  |  |  |  |
| `HeaderBillingBlockReason` |  | |  |  |  |  |
| `ItemBillingBlockReason` |  | |  |  |  |  |
| `ItemIsBillingRelevant` |  | |  |  |  |  |
| `BillingPlan` |  | |  |  |  |  |
| `ReferenceBillingPlan` |  | |  |  |  |  |
| `ReferenceBillingPlanItem` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `ProfitabilitySegment` |  | |  | `cast( case when ProfitabilitySegment > '9999999999' then '9999999999' else lpad( ProfitabilitySegment, 10, '0' ) end as rkeobjnr_numc )` |  |  |
| `ProfitabilitySegment_2` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `AbsltAccountingExchangeRate` |  | |  | `cast(abs( SalesDocumentItem.AccountingExchangeRate ) as kurrf_abs)` |  |  |
| `AcctgExchangeRateIsIndrctQtan` |  | |  | `cast(case when SalesDocumentItem.AccountingExchangeRate < 0 then 'X' else ' ' end as kurrf_quotatn_is_indirect)` |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `OriginSDDocument` |  | |  |  |  |  |
| `OriginSDDocumentItem` |  | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `ValueContract` |  | |  |  |  |  |
| `ValueContractItem` |  | |  |  |  |  |
| `BusinessSolutionOrder` |  | |  |  |  |  |
| `BusinessSolutionOrderItem` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `ServiceDocument` |  | |  |  |  |  |
| `ServiceDocumentItem` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `OverallTotalDeliveryStatus` |  | |  |  |  |  |
| `OverallOrdReltdBillgStatus` |  | |  |  |  |  |
| `TotalCreditCheckStatus` |  | |  |  |  |  |
| `OverallSDDocumentRejectionSts` |  | |  |  |  |  |
| `OverallTotalSDDocRefStatus` |  | |  |  |  |  |
| `OverallSDDocReferenceStatus` |  | |  |  |  |  |
| `OverallDelivConfStatus` |  | |  |  |  |  |
| `OverallDeliveryStatus` |  | |  |  |  |  |
| `DeliveryBlockStatus` |  | |  |  |  |  |
| `BillingBlockStatus` |  | |  |  |  |  |
| `TotalSDDocReferenceStatus` |  | |  |  |  |  |
| `SDDocReferenceStatus` |  | |  |  |  |  |
| `SDDocumentRejectionStatus` |  | |  |  |  |  |
| `ItemGeneralIncompletionStatus` |  | |  |  |  |  |
| `ItemBillingIncompletionStatus` |  | |  |  |  |  |
| `PricingIncompletionStatus` |  | |  |  |  |  |
| `ItemDeliveryIncompletionStatus` |  | |  |  |  |  |
| `DeliveryConfirmationStatus` |  | |  |  |  |  |
| `OrderRelatedBillingStatus` |  | |  |  |  |  |
| `SDProcessStatus` |  | |  |  |  |  |
| `TotalDeliveryStatus` |  | |  |  |  |  |
| `DeliveryStatus` |  | |  |  |  |  |
| `_SalesDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExtensionItem` | `E_SalesDocumentItemBasic` | [0..1] |
| `_ExtensionHeader` | `E_SalesDocumentBasic` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CSDSLSDOCITMDX1'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Data Extraction for Sales Document Item'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.representativeKey: 'SalesDocumentItem'
@ObjectModel.sapObjectNodeType.name: 'SalesDocumentItem'
@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities:  [ #EXTRACTION_DATA_SOURCE ]

@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbap', role: #MAIN,
                    viewElement: ['SalesDocument', 'SalesDocumentItem'],
                    tableElement: ['vbeln', 'posnr']
                },
                {
                    table: 'vbak', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesDocument'],
                    tableElement: ['vbeln']}
            ]
        }
    }
 }

define view C_SalesDocumentItemDEX_1

  as select from           I_SalesDocumentItem as SalesDocumentItem


    left outer to one join I_SalesDocument     as SalesDocument on SalesDocumentItem.SalesDocument = SalesDocument.SalesDocument
    left outer to one join I_CompanyCode       as CompanyCode   on SalesDocument.BillingCompanyCode = CompanyCode.CompanyCode

  //Extensibility
  association [0..1] to E_SalesDocumentItemBasic as _ExtensionItem   on  $projection.SalesDocument     = _ExtensionItem.SalesDocument
                                                                     and $projection.SalesDocumentItem = _ExtensionItem.SalesDocumentItem

  association [0..1] to E_SalesDocumentBasic     as _ExtensionHeader on  $projection.SalesDocument = _ExtensionHeader.SalesDocument

{
      // Key
      @ObjectModel.foreignKey.association: '_SalesDocument'
  key SalesDocumentItem.SalesDocument,
  key SalesDocumentItem.SalesDocumentItem,

      SalesDocumentItem.SalesDocumentItemUUID,

      //Category
      SalesDocumentItem.SDDocumentCategory,
      SalesDocumentItem.SalesDocumentType,
      SalesDocumentItem.SalesDocumentItemCategory,
      SalesDocumentItem.SalesDocumentItemType,
      SalesDocumentItem.IsReturnsItem,

      //Admin
      SalesDocumentItem.CreatedByUser,
      SalesDocumentItem.CreationDate,
      SalesDocumentItem.CreationTime,
      SalesDocumentItem.LastChangeDate,

      //Organization
      SalesDocumentItem.SalesOrganization,
      SalesDocumentItem.DistributionChannel,
      SalesDocumentItem.Division,
      SalesDocumentItem.SalesGroup,
      SalesDocumentItem.SalesOffice,

      //Product
      SalesDocumentItem.InternationalArticleNumber,
      SalesDocumentItem.Batch,
      SalesDocumentItem.Material,
      @Analytics.internalName: #LOCAL
      SalesDocumentItem.Product,
      SalesDocumentItem.OriginallyRequestedMaterial,
      SalesDocumentItem.MaterialSubstitutionReason,
      SalesDocumentItem.MaterialGroup,
      @Analytics.internalName: #LOCAL
      SalesDocumentItem.ProductGroup,
      SalesDocumentItem.AdditionalMaterialGroup1,
      SalesDocumentItem.AdditionalMaterialGroup2,
      SalesDocumentItem.AdditionalMaterialGroup3,
      SalesDocumentItem.AdditionalMaterialGroup4,
      SalesDocumentItem.AdditionalMaterialGroup5,



      //Sales
      SalesDocumentItem.PurchaseOrderByCustomer, -- BK. 04.10.2021 added for BLI SDANALYTICS01-901
      SalesDocumentItem.SalesDocumentItemText, -- BK. 04.10.2021 added for BLI SDANALYTICS01-901
      SalesDocumentItem.SoldToParty,
      SalesDocumentItem.AdditionalCustomerGroup1,
      SalesDocumentItem.AdditionalCustomerGroup2,
      SalesDocumentItem.AdditionalCustomerGroup3,
      SalesDocumentItem.AdditionalCustomerGroup4,
      SalesDocumentItem.AdditionalCustomerGroup5,

      SalesDocumentItem.ShipToParty                                                                                                           as ShipToParty,
      SalesDocumentItem.PayerParty                                                                                                            as PayerParty,
      SalesDocumentItem.BillToParty                                                                                                           as BillToParty,

      SalesDocumentItem.SalesEmployee,
      SalesDocumentItem.SalesEmployeeWorkAgreement,
      SalesDocumentItem.ResponsibleEmployee,
      SalesDocumentItem.ResponsibleEmployeeWorkAgrmt,


      SalesDocumentItem.SDDocumentReason,
      SalesDocumentItem.SalesDocumentDate,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesDocumentItem.OrderQuantity,
      @Semantics.unitOfMeasure: true
      SalesDocumentItem.OrderQuantityUnit,

      @Semantics.quantity.unitOfMeasure: 'TargetQuantityUnit'
      SalesDocumentItem.TargetQuantity,
      @Semantics.unitOfMeasure: true
      SalesDocumentItem.TargetQuantityUnit,
      SalesDocumentItem.TargetToBaseQuantityDnmntr,
      SalesDocumentItem.TargetToBaseQuantityNmrtr,
      SalesDocumentItem.OrderToBaseQuantityDnmntr,
      SalesDocumentItem.OrderToBaseQuantityNmrtr,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesDocumentItem.ConfdDelivQtyInOrderQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      SalesDocumentItem.TargetDelivQtyInOrderQtyUnit,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesDocumentItem.ConfdDeliveryQtyInBaseUnit,
      @Semantics.unitOfMeasure: true
      SalesDocumentItem.BaseUnit,
      ---  >1911 JB 27.08.19
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesDocumentItem.RequestedQuantityInBaseUnit,
      ---   1911 JB 27.08.19<

      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SalesDocumentItem.ItemGrossWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SalesDocumentItem.ItemNetWeight,
      @Semantics.unitOfMeasure: true
      SalesDocumentItem.ItemWeightUnit,

      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      SalesDocumentItem.ItemVolume,
      @Semantics.unitOfMeasure: true
      SalesDocumentItem.ItemVolumeUnit,

      SalesDocumentItem.ServicesRenderedDate,
      SalesDocumentItem.SalesDistrict,
      SalesDocumentItem.CustomerGroup,

      SalesDocument.HdrOrderProbabilityInPercent,
      SalesDocumentItem.ItemOrderProbabilityInPercent,
      SalesDocumentItem.SalesDocumentRjcnReason,


      //Pricing
      SalesDocumentItem.PricingDate,
      SalesDocumentItem.ExchangeRateDate,
      SalesDocumentItem.PriceDetnExchangeRate,
      cast(abs(SalesDocumentItem.PriceDetnExchangeRate) as kursk_abs)                                                                         as AbsltPriceDetnExchangeRate,
      @Semantics.booleanIndicator: true
      cast(case when SalesDocumentItem.PriceDetnExchangeRate < 0 then 'X' else ' ' end  as kursk_quotatn_is_indirect)                         as PriceDetnExchRateIsIndrctQtan,
      SalesDocumentItem.StatisticalValueControl,
      SalesDocumentItem.MatlAccountAssignmentGroup,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.NetAmount,
      @Semantics.currencyCode: true
      SalesDocumentItem.TransactionCurrency,
      @Semantics.currencyCode: true
      SalesDocumentItem._SalesOrganization.SalesOrganizationCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.NetPriceAmount,

      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      SalesDocumentItem.NetPriceQuantity,
      @Semantics.unitOfMeasure: true
      SalesDocumentItem.NetPriceQuantityUnit,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.TaxAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.CostAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.Subtotal1Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.Subtotal2Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.Subtotal3Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.Subtotal4Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.Subtotal5Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.Subtotal6Amount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.CappedNetAmount, -- BK. 04.10.2021 added for BLI SDANALYTICS01-901

      SalesDocumentItem.SalesDocumentCondition,

      //Shipping
      SalesDocumentItem.ShippingPoint,
      SalesDocumentItem.ShippingType,
      SalesDocumentItem.DeliveryPriority,
      SalesDocumentItem.InventorySpecialStockType,
      SalesDocumentItem.RequestedDeliveryDate,
      SalesDocumentItem.ShippingCondition,
      SalesDocument.DeliveryBlockReason,
      SalesDocumentItem.Plant,
      SalesDocumentItem.OriginalPlant,
      SalesDocumentItem.StorageLocation,
      SalesDocumentItem.Route,
      SalesDocumentItem.IncotermsClassification,
      SalesDocumentItem.IncotermsVersion,
      SalesDocumentItem.IncotermsTransferLocation,
      SalesDocumentItem.IncotermsLocation1,
      SalesDocumentItem.IncotermsLocation2,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesDocumentItem.MinDeliveryQtyInBaseUnit,
      SalesDocumentItem.UnlimitedOverdeliveryIsAllowed,
      SalesDocumentItem.OverdelivTolrtdLmtRatioInPct,
      SalesDocumentItem.UnderdelivTolrtdLmtRatioInPct,
      SalesDocumentItem.PartialDeliveryIsAllowed,

      //Quotation
      SalesDocument.BindingPeriodValidityStartDate,
      SalesDocument.BindingPeriodValidityEndDate,
      ---  >1911 JB 27.08.19
      SalesDocumentItem.CompletionRule,
      ---   1911 JB 27.08.19<

      //Contract
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesDocumentItem.OutlineAgreementTargetAmount,

      //Billing
      SalesDocumentItem.BillingDocumentDate,
      SalesDocument.BillingCompanyCode,
      SalesDocument.HeaderBillingBlockReason,
      SalesDocumentItem.ItemBillingBlockReason,
      ---  >1911 JB 27.08.19
      SalesDocumentItem.ItemIsBillingRelevant,
      ---   1911 JB 27.08.19<
      SalesDocumentItem.BillingPlan, -- BK. 04.10.2021 added for BLI SDANALYTICS01-901
      SalesDocumentItem.ReferenceBillingPlan,
      SalesDocumentItem.ReferenceBillingPlanItem,
      SalesDocumentItem.CustomerPaymentTerms, -- BK. 04.10.2021 added for BLI SDANALYTICS01-901

      //Accounting
      SalesDocumentItem.FiscalYear,
      SalesDocumentItem.FiscalPeriod,
      SalesDocumentItem.CustomerAccountAssignmentGroup,
      SalesDocument.ExchangeRateType,
      @Semantics.currencyCode: true
      CompanyCode.Currency,
      CompanyCode.FiscalYearVariant,
      SalesDocumentItem.BusinessArea,
      SalesDocumentItem.ProfitCenter,
      SalesDocumentItem.OrderID,
      @Analytics.internalName: #LOCAL
      SalesDocumentItem.WBSElementInternalID,

      -- ProfitabilitySegment, --Cube -- BK 14.02.2021. Deprecation
      @API.element.releaseState:  #DECOMMISSIONED
      @API.element.successor:    'ProfitabilitySegment_2'
      cast( case when ProfitabilitySegment > '9999999999' then '9999999999' else lpad( ProfitabilitySegment, 10, '0' ) end as rkeobjnr_numc ) as ProfitabilitySegment,
      @Analytics.internalName: #LOCAL
      ProfitabilitySegment_2,

      SalesDocumentItem.ControllingArea,
      //SalesDocumentItem.AccountingExchangeRate,
      cast(abs( SalesDocumentItem.AccountingExchangeRate ) as kurrf_abs)                                                                      as AbsltAccountingExchangeRate,
      @Semantics.booleanIndicator: true
      cast(case when SalesDocumentItem.AccountingExchangeRate < 0 then 'X' else ' ' end  as kurrf_quotatn_is_indirect)                        as AcctgExchangeRateIsIndrctQtan,

      //Reference
      SalesDocumentItem.ReferenceSDDocument,
      SalesDocumentItem.ReferenceSDDocumentItem,
      SalesDocumentItem.ReferenceSDDocumentCategory,
      SalesDocumentItem.OriginSDDocument,
      SalesDocumentItem.OriginSDDocumentItem,
      SalesDocumentItem.HigherLevelItem,
      SalesDocumentItem.ValueContract,
      SalesDocumentItem.ValueContractItem,
      SalesDocumentItem.BusinessSolutionOrder,     ---- AT 11.04.2022
      SalesDocumentItem.BusinessSolutionOrderItem, ---- AT 11.04.2022

      //CRM
      SalesDocumentItem.ServiceDocumentType,
      SalesDocumentItem.ServiceDocument,
      SalesDocumentItem.ServiceDocumentItem,

      //Status
      SalesDocument.OverallSDProcessStatus,
      SalesDocument.OverallTotalDeliveryStatus,
      SalesDocument.OverallOrdReltdBillgStatus,
      SalesDocument.TotalCreditCheckStatus,
      SalesDocument.OverallSDDocumentRejectionSts,
      SalesDocument.OverallTotalSDDocRefStatus,
      SalesDocument.OverallSDDocReferenceStatus,
      ---  >1911 JB 27.08.19
      SalesDocument.OverallDelivConfStatus,
      SalesDocument.OverallDeliveryStatus,
      ---   1911 JB 27.08.19<

      SalesDocumentItem.DeliveryBlockStatus,
      SalesDocumentItem.BillingBlockStatus,
      SalesDocumentItem.TotalSDDocReferenceStatus,
      SalesDocumentItem.SDDocReferenceStatus,
      SalesDocumentItem.SDDocumentRejectionStatus,
      SalesDocumentItem.ItemGeneralIncompletionStatus,
      SalesDocumentItem.ItemBillingIncompletionStatus,
      SalesDocumentItem.PricingIncompletionStatus,
      SalesDocumentItem.ItemDeliveryIncompletionStatus,
      ---  >1911 JB 27.08.19
      SalesDocumentItem.DeliveryConfirmationStatus,
      SalesDocumentItem.OrderRelatedBillingStatus,
      SalesDocumentItem.SDProcessStatus,
      SalesDocumentItem.TotalDeliveryStatus,
      SalesDocumentItem.DeliveryStatus,
      ---   1911 JB 27.08.19<

      //Association
      _SalesDocument

}

where
     SalesDocumentItem.SDDocumentCategory = 'A' // Inquiry
  or SalesDocumentItem.SDDocumentCategory = 'B' // Quotation
  or SalesDocumentItem.SDDocumentCategory = 'C' // Order
  or SalesDocumentItem.SDDocumentCategory = 'G' // Contract
  or SalesDocumentItem.SDDocumentCategory = 'H' // Returns
  or SalesDocumentItem.SDDocumentCategory = 'I' // Order w/o charge
  or SalesDocumentItem.SDDocumentCategory = 'K' // Credit Memo Request
  or SalesDocumentItem.SDDocumentCategory = 'L' // Debit Memo Request
```
