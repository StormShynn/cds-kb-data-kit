---
name: I_BILLINGDOCUMENTITEMCUBE
description: Billing DocumentUMENTITEMCUBE
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - interface-view
  - analytical
  - billing-document
  - billing
  - document
  - item-level
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTITEMCUBE

**Billing DocumentUMENTITEMCUBE**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillingDocument` | `BillingDocument` |
| key `BillingDocumentItem` | `BillingDocumentItem` |
| `SDDocumentCategory` | `SDDocumentCategory` |
| `BillingDocumentCategory` | `BillingDocumentCategory` |
| `BillingDocumentType` | `BillingDocumentType` |
| `SalesDocumentItemCategory` | `SalesDocumentItemCategory` |
| `SalesDocumentItemType` | `SalesDocumentItemType` |
| `ReturnItemProcessingType` | `ReturnItemProcessingType` |
| `LastChangeDate` | `LastChangeDate` |
| `CreatedByUser` | `CreatedByUser` |
| `CreatedByUserName` | `cast(CreatedByUserName as created_by_user_name preserving type)` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `LogicalSystem` | `LogicalSystem` |
| `CreationDateYear` | `cast(CalendarDate.CalendarYear as creation_date_year)` |
| `CreationDateYearQuarter` | `cast(CalendarDate.YearQuarter as creation_date_year_quarter)` |
| `CreationDateYearMonth` | `cast(CalendarDate.YearMonth as creation_date_year_month)` |
| `BillingDocumentDateYear` | `cast(CalendarDateBillingDoc.CalendarYear as billing_document_date_year)` |
| `BillingDocDateYearQuarter` | `cast(CalendarDateBillingDoc.YearQuarter as billing_doc_date_year_quarter)` |
| `BillingDocDateYearMonth` | `cast(CalendarDateBillingDoc.YearMonth as billing_doc_date_year_month)` |
| `BillingDocDateCalendarMonth` | `cast(CalendarDateBillingDoc.CalendarMonth as billing_doc_date_cal_month)` |
| `BillingDocumentDateCalendarDay` | `cast(CalendarDateBillingDoc.CalendarDay as billing_doc_date_cal_day)` |
| `SoldToParty` | `Item.SoldToParty` |
| `SoldToPartyName` | `Item.SoldToPartyName` |
| `Customer` | `cast (Item.SoldToParty as kunnr)` |
| `SoldToPartyClassification` | `Item.SoldToPartyClassification` |
| `ShipToParty` | `Item.ShipToParty` |
| `ShipToPartyName` | `Item.ShipToPartyName` |
| `BillToParty` | `Item.BillToParty` |
| `BillToPartyName` | `Item.BillToPartyName` |
| `PayerParty` | `Item.PayerParty` |
| `PayerPartyName` | `Item.PayerPartyName` |
| `SalesEmployee` | `cast(Item.SalesEmployee as sales_empl)` |
| `SalesEmployeeName` | `cast(SalesEmployeeWorkAgreement.PersonFullName as sales_empl_name)` |
| `ResponsibleEmployee` | `cast(Item.ResponsibleEmployee as resp_empl)` |
| `ResponsibleEmployeeName` | `cast(RespEmployeeWorkAgreement.PersonFullName as resp_empl_name)` |
| `SalesEmployeeWorkAgreement` | `cast(Item.SalesEmployee as sales_empl_wrk_agrmt)` |
| `ResponsibleEmployeeWorkAgrmt` | `cast(Item.ResponsibleEmployee as resp_empl_wrk_agrmt)` |
| `PartnerCompany` | `Item.PartnerCompany` |
| `PurchaseOrderByCustomer` | `PurchaseOrderByCustomer` |
| `CustomerGroup` | `CustomerGroup` |
| `SalesDistrict` | `SalesDistrict` |
| `Country` | `Country` |
| `Region` | `Region` |
| `CityCode` | `CityCode` |
| `County` | `County` |
| `County_2` | `County_2` |
| `CreditControlArea` | `CreditControlArea` |
| `CustomerRebateAgreement` | `CustomerRebateAgreement` |
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
| `SalesDealDescription` | `SalesDealDescription` |
| `SalesPromotion` | `SalesPromotion` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `OrganizationDivision` | `OrganizationDivision` |
| `Division` | `Division` |
| `SalesOffice` | `SalesOffice` |
| `Material` | `Material` |
| `Product` | `cast( Material as productnumber preserving type )` |
| `OriginallyRequestedMaterial` | `OriginallyRequestedMaterial` |
| `InternationalArticleNumber` | `InternationalArticleNumber` |
| `PricingReferenceMaterial` | `PricingReferenceMaterial` |
| `Batch` | `, additionalBinding: [{ localElement: 'Plant', element: 'Plant' }, { localElement: 'Material', element: 'Material' } ] }] } Batch` |
| `ProductHierarchyNode` | `ProductHierarchyNode` |
| `MaterialGroup` | `MaterialGroup` |
| `ProductGroup` | `cast (MaterialGroup as productgroup preserving type)` |
| `AdditionalMaterialGroup1` | `AdditionalMaterialGroup1` |
| `AdditionalMaterialGroup2` | `AdditionalMaterialGroup2` |
| `AdditionalMaterialGroup3` | `AdditionalMaterialGroup3` |
| `AdditionalMaterialGroup4` | `AdditionalMaterialGroup4` |
| `AdditionalMaterialGroup5` | `AdditionalMaterialGroup5` |
| `MaterialCommissionGroup` | `MaterialCommissionGroup` |
| `Plant` | `Plant` |
| `PlantName` | `PlantName` |
| `StorageLocation` | `StorageLocation` |
| `StorageLocationName` | `StorageLocationName` |
| `BillingDocumentDate` | `BillingDocumentDate` |
| `BillingDocumentIsCancelled` | `BillingDocumentIsCancelled` |
| `CancelledBillingDocument` | `CancelledBillingDocument` |
| `ForeignTrade` | `ForeignTrade` |
| `IsExportDelivery` | `IsExportDelivery` |
| `BillingDocCombinationCriteria` | `BillingDocCombinationCriteria` |
| `ManualInvoiceMaintIsRelevant` | `ManualInvoiceMaintIsRelevant` |
| `BillingDocumentItemText` | `BillingDocumentItemText` |
| `ServicesRenderedDate` | `ServicesRenderedDate` |
| `BillingQuantity` | `BillingQuantity` |
| `BillingQuantityUnit` | `BillingQuantityUnit` |
| `BillingQuantityInBaseUnit` | `BillingQuantityInBaseUnit` |
| `BaseUnit` | `BaseUnit` |
| `MRPRequiredQuantityInBaseUnit` | `MRPRequiredQuantityInBaseUnit` |
| `BillingToBaseQuantityDnmntr` | `BillingToBaseQuantityDnmntr` |
| `BillingToBaseQuantityNmrtr` | `BillingToBaseQuantityNmrtr` |
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
| `CustomerPriceGroup` | `CustomerPriceGroup` |
| `PriceListType` | `PriceListType` |
| `TaxDepartureCountry` | `TaxDepartureCountry` |
| `VATRegistration` | `VATRegistration` |
| `VATRegistrationOrigin` | `VATRegistrationOrigin` |
| `VATRegistrationCountry` | `VATRegistrationCountry` |
| `CustomerTaxClassification1` | `CustomerTaxClassification1` |
| `CustomerTaxClassification2` | `CustomerTaxClassification2` |
| `CustomerTaxClassification3` | `CustomerTaxClassification3` |
| `CustomerTaxClassification4` | `CustomerTaxClassification4` |
| `CustomerTaxClassification5` | `CustomerTaxClassification5` |
| `CustomerTaxClassification6` | `CustomerTaxClassification6` |
| `CustomerTaxClassification7` | `CustomerTaxClassification7` |
| `CustomerTaxClassification8` | `CustomerTaxClassification8` |
| `CustomerTaxClassification9` | `CustomerTaxClassification9` |
| `SDPricingProcedure` | `SDPricingProcedure` |
| `TransactionCurrency` | `TransactionCurrency` |
| `ItemNetAmountOfBillingDoc` | `ItemNetAmountOfBillingDoc` |
| `ItemNetAmountOfBillingDoc_2` | `ItemNetAmountOfBillingDoc_2` |
| `ItemGrossAmountOfBillingDoc` | `ItemGrossAmountOfBillingDoc` |
| `PricingDate` | `PricingDate` |
| `PriceDetnExchangeRate` | `PriceDetnExchangeRate` |
| `PricingScaleQuantityInBaseUnit` | `PricingScaleQuantityInBaseUnit` |
| `TaxAmount` | `Item.TaxAmount` |
| `CostAmount` | `CostAmount` |
| `Subtotal1Amount` | `Subtotal1Amount` |
| `Subtotal2Amount` | `Subtotal2Amount` |
| `Subtotal3Amount` | `Subtotal3Amount` |
| `Subtotal4Amount` | `Subtotal4Amount` |
| `Subtotal5Amount` | `Subtotal5Amount` |
| `Subtotal6Amount` | `Subtotal6Amount` |
| `StatisticalValueControl` | `StatisticalValueControl` |
| `StatisticalValue` | `StatisticalValueControl` |
| `MainItemPricingRefMaterial` | `MainItemPricingRefMaterial` |
| `DisplayCurrency` | `cast(:P_DisplayCurrency as vdm_v_display_currency)` |
| `NetAmountInDisplayCurrency` | `cast ( currency_conversion( amount => ItemNetAmountOfBillingDoc_2, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => BillingDocumentDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as net_amount_in_dsp_crcy)` |
| `ShippingCondition` | `ShippingCondition` |
| `IncotermsClassification` | `IncotermsClassification` |
| `IncotermsTransferLocation` | `IncotermsTransferLocation` |
| `IncotermsLocation1` | `IncotermsLocation1` |
| `IncotermsLocation2` | `IncotermsLocation2` |
| `IncotermsVersion` | `IncotermsVersion` |
| `ShippingPoint` | `ShippingPoint` |
| `ContractAccount` | `ContractAccount` |
| `CustomerPaymentTerms` | `CustomerPaymentTerms` |
| `PaymentMethod` | `PaymentMethod` |
| `PaymentMethodName` | `PaymentMethodName` |
| `PaymentReference` | `PaymentReference` |
| `FixedValueDate` | `FixedValueDate` |
| `AdditionalValueDays` | `AdditionalValueDays` |
| `EligibleAmountForCashDiscount` | `EligibleAmountForCashDiscount` |
| `CustomerProject` | `CustomerProjectItem.EngagementProject` |
| `CompanyCode` | `CompanyCode` |
| `CompanyCodeName` | `CompanyCodeName` |
| `FiscalYear` | `FiscalYear` |
| `AccountingDocument` | `AccountingDocument` |
| `FiscalPeriod` | `FiscalPeriod` |
| `CustomerAccountAssignmentGroup` | `CustomerAccountAssignmentGroup` |
| `AccountingExchangeRateIsSet` | `AccountingExchangeRateIsSet` |
| `AccountingExchangeRate` | `AccountingExchangeRate` |
| `ExchangeRateType` | `cast(ExchangeRateType as doc_exchange_rate_type preserving type )` |
| `DocumentReferenceID` | `DocumentReferenceID` |
| `AssignmentReference` | `AssignmentReference` |
| `DunningArea` | `}] DunningArea` |
| `DunningBlockingReason` | `DunningBlockingReason` |
| `DunningKey` | `DunningKey` |
| `InternalFinancialDocument` | `InternalFinancialDocument` |
| `BusinessArea` | `BusinessArea` |
| `ProfitCenter` | `ProfitCenter` |
| `WBSElement` | `WBSElement` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `WBSElementExternalID` | `_WBSElementBasicData.WBSElementExternalID` |
| `ControllingArea` | `ControllingArea` |
| `ControllingAreaName` | `ControllingAreaName` |
| `ProfitabilitySegment` | `cast( case when ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc )` |
| `ProfitabilitySegment_2` | `ProfitabilitySegment_2` |
| `OrderID` | `OrderID` |
| `CostCenter` | `CostCenter` |
| `OriginSDDocument` | `OriginSDDocument` |
| `OriginSDDocumentItem` | `OriginSDDocumentItem` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `ReferenceSDDocument` | `ReferenceSDDocument` |
| `ReferenceSDDocumentItem` | `ReferenceSDDocumentItem` |
| `ReferenceSDDocumentCategory` | `ReferenceSDDocumentCategory` |
| `SalesDocument` | `SalesDocument` |
| `SalesDocumentItem` | `}] SalesDocumentItem` |
| `SalesSDDocumentCategory` | `SalesSDDocumentCategory` |
| `HigherLevelItem` | `}] HigherLevelItem` |
| `BillingDocumentItemInPartSgmt` | `BillingDocumentItemInPartSgmt` |
| `PropagatePrftbltySgmt2BOM` | `PropagatePrftbltySgmt2BOM` |
| `CostDeterminationIsRequired` | `CostDeterminationIsRequired` |
| `BusinessSolutionOrder` | `BusinessSolutionOrder` |
| `BusinessSolutionOrderItem` | `BusinessSolutionOrderItem` |
| `OverallSDProcessStatus` | `OverallSDProcessStatus` |
| `OverallBillingStatus` | `OverallBillingStatus` |
| `AccountingPostingStatus` | `AccountingPostingStatus` |
| `AccountingTransferStatus` | `AccountingTransferStatus` |
| `BillingIssueType` | `BillingIssueType` |
| `InvoiceListStatus` | `InvoiceListStatus` |
| `OvrlItmGeneralIncompletionSts` | `OvrlItmGeneralIncompletionSts` |
| `OverallPricingIncompletionSts` | `OverallPricingIncompletionSts` |
| `StatisticsCurrency` | `StatisticsCurrency` |
| `SalesVolumeNetAmount` | `SalesVolumeNetAmount` |
| `SalesVolumeNetAmount_2` | `SalesVolumeNetAmount_2` |
| `SlsVolumeNetAmtInDspCrcy` | `cast ( currency_conversion( amount => SalesVolumeNetAmount_2, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => BillingDocumentDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as mc_umnetwr )` |
| `CancldSlsVolumeNetAmt` | `CancldSlsVolumeNetAmt` |
| `CancldSlsVolumeNetAmtInDspCrcy` | `cast ( currency_conversion( amount => CancldSlsVolumeNetAmt, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => BillingDocumentDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as cancld_sls_vol_net_amt_idc )` |
| `SalesProfitMarginNetAmount` | `SalesProfitMarginNetAmount` |
| `SlsProfitMargNetAmtInDspCrcy` | `cast ( currency_conversion( amount => SalesProfitMarginNetAmount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => BillingDocumentDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as prf_marg_net_amt_idc )` |
| `CustomerCreditMemoNetAmount` | `CustomerCreditMemoNetAmount` |
| `CustomerCreditMemoNetAmount_2` | `CustomerCreditMemoNetAmount_2` |
| `CustCrdtMemoNetAmtInDspCrcy` | `cast ( currency_conversion( amount => CustomerCreditMemoNetAmount_2, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => BillingDocumentDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as mc_gunetwr )` |
| `CustCrdtMemoPrftMargNetAmt` | `CustCrdtMemoPrftMargNetAmt` |
| `CustCrdtMemoPrftMargNetAmtInDC` | `cast ( currency_conversion( amount => CustCrdtMemoPrftMargNetAmt, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => BillingDocumentDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as cm_prf_marg_net_amt_idc )` |
| `SalesVolumeQuantity` | `SalesVolumeQuantity` |
| `CustCreditMemoQuantity` | `CustCreditMemoQuantity` |
| `_CustomerProject` | *Association* |
| `_Customer` | *Association* |
| `_ShipToParty` | *Association* |
| `_BillToParty` | *Association* |
| `_SalesEmployee` | *Association* |
| `_ResponsibleEmployee` | *Association* |
| `_SalesEmployee_2` | *Association* |
| `_ResponsibleEmployee_2` | *Association* |
| `_Product` | *Association* |
| `_ProductGroup` | *Association* |
| `_WBSElement` | *Association* |
| `_WBSElementExternalID` | *Association* |
| `_BillingDocument` | *Association* |
| `_SDDocumentCategory` | *Association* |
| `_BillingDocumentCategory` | *Association* |
| `_BillingDocumentType` | *Association* |
| `_SalesDocumentItemCategory` | *Association* |
| `_SalesDocumentItemType` | *Association* |
| `_CreatedByUser` | *Association* |
| `_LogicalSystem` | *Association* |
| `_SoldToPartyClassification` | *Association* |
| `_CustomerGroup` | *Association* |
| `_SalesDistrict` | *Association* |
| `_Country` | *Association* |
| `_Region` | *Association* |
| `_CityCode` | *Association* |
| `_County` | *Association* |
| `_County_2` | *Association* |
| `_CreditControlArea` | *Association* |
| `_SalesGroup` | *Association* |
| `_AdditionalCustomerGroup1` | *Association* |
| `_AdditionalCustomerGroup2` | *Association* |
| `_AdditionalCustomerGroup3` | *Association* |
| `_AdditionalCustomerGroup4` | *Association* |
| `_AdditionalCustomerGroup5` | *Association* |
| `_SDDocumentReason` | *Association* |
| `_SalesDeal` | *Association* |
| `_SalesOrganization` | *Association* |
| `_DistributionChannel` | *Association* |
| `_OrganizationDivision` | *Association* |
| `_Division` | *Association* |
| `_SalesOffice` | *Association* |
| `_Material` | *Association* |
| `_OriginallyRequestedMaterial` | *Association* |
| `_PricingReferenceMaterial` | *Association* |
| `_Batch` | *Association* |
| `_ProductHierarchyNode` | *Association* |
| `_MaterialGroup` | *Association* |
| `_AdditionalMaterialGroup1` | *Association* |
| `_AdditionalMaterialGroup2` | *Association* |
| `_AdditionalMaterialGroup3` | *Association* |
| `_AdditionalMaterialGroup4` | *Association* |
| `_AdditionalMaterialGroup5` | *Association* |
| `_MaterialCommissionGroup` | *Association* |
| `_Plant` | *Association* |
| `_StorageLocation` | *Association* |
| `_BillingQuantityUnit` | *Association* |
| `_BaseUnit` | *Association* |
| `_ItemWeightUnit` | *Association* |
| `_ItemVolumeUnit` | *Association* |
| `_BillToPartyCountry` | *Association* |
| `_BillToPartyRegion` | *Association* |
| `_BillingPlanRule` | *Association* |
| `_StatisticalValueControl` | *Association* |
| `_CustomerPriceGroup` | *Association* |
| `_PriceListType` | *Association* |
| `_TaxDepartureCountry` | *Association* |
| `_VATRegistrationOrigin` | *Association* |
| `_VATRegistrationCountry` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_ShippingCondition` | *Association* |
| `_IncotermsClassification` | *Association* |
| `_ShippingPoint` | *Association* |
| `_IncotermsVersion` | *Association* |
| `_CustomerPaymentTerms` | *Association* |
| `_PaymentMethod` | *Association* |
| `_CompanyCode` | *Association* |
| `_FiscalYear` | *Association* |
| `_CustomerAccountAssgmtGroup` | *Association* |
| `_ExchangeRateType` | *Association* |
| `_DunningArea` | *Association* |
| `_DunningBlockingReason` | *Association* |
| `_DunningKey` | *Association* |
| `_BusinessArea` | *Association* |
| `_ProfitCenter` | *Association* |
| `_WBSElementBasicData` | *Association* |
| `_ControllingArea` | *Association* |
| `_OrderID` | *Association* |
| `_CostCenter` | *Association* |
| `_ReferenceSDDocumentCategory` | *Association* |
| `_SalesSDDocumentCategory` | *Association* |
| `_SalesDocument` | *Association* |
| `_SalesDocumentItem` | *Association* |
| `_HigherLevelItem` | *Association* |
| `_MainItemPricingRefMaterial` | *Association* |
| `_OverallSDProcessStatus` | *Association* |
| `_OverallBillingStatus` | *Association* |
| `_AccountingPostingStatus` | *Association* |
| `_AccountingTransferStatus` | *Association* |
| `_BillingIssueType` | *Association* |
| `_InvoiceListStatus` | *Association* |
| `_OvrlItmGeneralIncompletionSts` | *Association* |
| `_OverallPricingIncompletionSts` | *Association* |
| `_StatisticsCurrency` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerProject` | `I_EngagementProject` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_BillToParty` | `I_Customer` | [0..1] |
| `_SalesEmployee` | `I_Employee` | [0..1] |
| `_ResponsibleEmployee` | `I_Employee` | [0..1] |
| `_SalesEmployee_2` | `I_PersonWorkAgreement_1` | [0..1] |
| `_ResponsibleEmployee_2` | `I_PersonWorkAgreement_1` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductGroup` | `I_ProductGroup_2` | [0..1] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_Extension` | `E_BillingDocumentItem` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Volume - Cube'
@VDM.viewType: #COMPOSITE
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: ['_CreatedByUser']
}
@AbapCatalog: {
  sqlViewName: 'ISDBILLGDOCITMC',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
  usageType: {
    dataClass:      #MIXED,
    serviceQuality: #D,
    sizeCategory:   #XL
  }
}
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities:
   [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations:true
}
@Aggregation.allowPrecisionLoss:true --AT25.1.22 APL Adoption

define view I_BillingDocumentItemCube
  with parameters
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency
  as select from           I_BillingDocItemAnalytics as Item
    left outer to one join I_PersonWorkAgreement_1   as SalesEmployeeWorkAgreement on Item.SalesEmployee = SalesEmployeeWorkAgreement.PersonWorkAgreement
    left outer to one join I_PersonWorkAgreement_1   as RespEmployeeWorkAgreement  on Item.ResponsibleEmployee = RespEmployeeWorkAgreement.PersonWorkAgreement

    left outer to one join I_CalendarDate            as CalendarDate               on Item.CreationDate = CalendarDate.CalendarDate
    left outer to one join I_CalendarDate            as CalendarDateBillingDoc     on Item.BillingDocumentDate = CalendarDateBillingDoc.CalendarDate
    left outer to one join I_EngagementProjectItem   as CustomerProjectItem        on  Item.SalesDocument                            = CustomerProjectItem.EngagementProjectItem
                                                                                   and CustomerProjectItem.EngagementProjectItemType = '0SOH'
  // Association
  association [0..1] to I_EngagementProject      as _CustomerProject       on  $projection.CustomerProject = _CustomerProject.EngagementProject
  association [0..1] to I_Customer               as _Customer              on  $projection.Customer = _Customer.Customer
  association [0..1] to I_Customer               as _ShipToParty           on  $projection.ShipToParty = _ShipToParty.Customer
  association [0..1] to I_Customer               as _BillToParty           on  $projection.BillToParty = _BillToParty.Customer
  association [0..1] to I_Employee               as _SalesEmployee         on  $projection.SalesEmployee = _SalesEmployee.PersonnelNumber
  association [0..1] to I_Employee               as _ResponsibleEmployee   on  $projection.ResponsibleEmployee = _ResponsibleEmployee.PersonnelNumber
  association [0..1] to I_PersonWorkAgreement_1  as _SalesEmployee_2       on  $projection.SalesEmployee = _SalesEmployee_2.PersonWorkAgreement
  association [0..1] to I_PersonWorkAgreement_1  as _ResponsibleEmployee_2 on  $projection.ResponsibleEmployee = _ResponsibleEmployee_2.PersonWorkAgreement
  association [0..1] to I_Product                as _Product               on  $projection.Product = _Product.Product
  association [0..1] to I_ProductGroup_2         as _ProductGroup          on  $projection.ProductGroup = _ProductGroup.ProductGroup
  association [0..1] to I_WBSElementBasicData    as _WBSElement            on  $projection.WBSElement = _WBSElement.WBSElementInternalID
  association [0..1] to I_WBSElementByExternalID as _WBSElementExternalID  on  $projection.wbselementexternalid = _WBSElementExternalID.WBSElementExternalID  --AT 26.10.2021 CE2111 into of WBSElementExternalID 
  // Extension Association
  association [0..1] to E_BillingDocumentItem   as _Extension             on  $projection.BillingDocument     = _Extension.BillingDocument
                                                                          and $projection.BillingDocumentItem = _Extension.BillingDocumentItem
{
      // Key
      @ObjectModel.foreignKey.association: '_BillingDocument'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BillingDocumentBasicStdVH', element: 'BillingDocument' } } ]
  key BillingDocument,
  key BillingDocumentItem,

      // Key Association
      _BillingDocument,

      // Category
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      SDDocumentCategory,
      @ObjectModel.foreignKey.association: '_BillingDocumentCategory'
      BillingDocumentCategory,
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      BillingDocumentType,
      @ObjectModel.foreignKey.association: '_SalesDocumentItemCategory'
      SalesDocumentItemCategory,
      @ObjectModel.foreignKey.association: '_SalesDocumentItemType'
      SalesDocumentItemType,
      ReturnItemProcessingType,

      // Category Association
      _SDDocumentCategory,
      _BillingDocumentCategory,
      _BillingDocumentType,
      _SalesDocumentItemCategory,
      _SalesDocumentItemType,

      // Admin
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.user.createdBy: true
      CreatedByUser,
      cast(CreatedByUserName as  created_by_user_name preserving type)          as CreatedByUserName, --AT9.10.2018

      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @ObjectModel.foreignKey.association: '_LogicalSystem'
      LogicalSystem,
      @Semantics.calendar.year
      cast(CalendarDate.CalendarYear as creation_date_year)                     as CreationDateYear,
      @Semantics.calendar.yearQuarter
      cast(CalendarDate.YearQuarter as creation_date_year_quarter)              as CreationDateYearQuarter,
      @Semantics.calendar.yearMonth
      cast(CalendarDate.YearMonth as creation_date_year_month)                  as CreationDateYearMonth,
      @Semantics.calendar.year
      cast(CalendarDateBillingDoc.CalendarYear as billing_document_date_year)   as BillingDocumentDateYear,
      @Semantics.calendar.yearQuarter
      cast(CalendarDateBillingDoc.YearQuarter as billing_doc_date_year_quarter) as BillingDocDateYearQuarter,
      @Semantics.calendar.yearMonth
      cast(CalendarDateBillingDoc.YearMonth as billing_doc_date_year_month)     as BillingDocDateYearMonth,
      @Semantics.calendar.month: true
      cast(CalendarDateBillingDoc.CalendarMonth as billing_doc_date_cal_month)  as BillingDocDateCalendarMonth,
      @Semantics.calendar.dayOfMonth: true
      cast(CalendarDateBillingDoc.CalendarDay as billing_doc_date_cal_day)      as BillingDocumentDateCalendarDay,
      // Admin
      _CreatedByUser,
      _LogicalSystem,

      // Sales
      @ObjectModel.foreignKey.association: '_SoldToParty'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      Item.SoldToParty,
      Item.SoldToPartyName,
      @ObjectModel.foreignKey.association: '_Customer'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      cast (Item.SoldToParty as kunnr)                                          as Customer,
      @ObjectModel.foreignKey.association: '_SoldToPartyClassification'
      Item.SoldToPartyClassification,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      Item.ShipToParty,
      Item.ShipToPartyName,
      @ObjectModel.foreignKey.association: '_BillToParty'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      Item.BillToParty,
      Item.BillToPartyName,
      @ObjectModel.foreignKey.association: '_PayerParty'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      Item.PayerParty,
      Item.PayerPartyName,

      //Sales Employee ID & Responsible Employee ID
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SalesEmployee_2'
      cast(Item.SalesEmployee as sales_empl)                                    as SalesEmployee,
      cast(SalesEmployeeWorkAgreement.PersonFullName as sales_empl_name)        as SalesEmployeeName,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ResponsibleEmployee_2'
      cast(Item.ResponsibleEmployee as resp_empl)                               as ResponsibleEmployee,
      cast(RespEmployeeWorkAgreement.PersonFullName as resp_empl_name)          as ResponsibleEmployeeName,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SalesEmployee'
      cast(Item.SalesEmployee as sales_empl_wrk_agrmt)                          as SalesEmployeeWorkAgreement,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ResponsibleEmployee'
      cast(Item.ResponsibleEmployee as resp_empl_wrk_agrmt)                     as ResponsibleEmployeeWorkAgrmt,
      @Analytics.internalName: #LOCAL                       --CE2111: foreign key added and _GlobalCompany exposed
      @ObjectModel.foreignKey.association: '_GlobalCompany' 
      Item.PartnerCompany,                                       
      Item._GlobalCompany,                                  
      PurchaseOrderByCustomer,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      @ObjectModel.foreignKey.association: '_Country'
      Country,
      @ObjectModel.foreignKey.association: '_Region'
      Region,
      @ObjectModel.foreignKey.association: '_CityCode'
      CityCode,
      @API.element: { releaseState: #DEPRECATED, successor: 'County_2' } 
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_County'
      County,
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_County_2'
      County_2, 
      @ObjectModel.foreignKey.association: '_CreditControlArea'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CreditControlAreaStdVH', element: 'CreditControlArea' } } ]
      CreditControlArea,
      CustomerRebateAgreement,
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
      RetailPromotion,
      //@Aggregation.default: #NOP
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      RebateBasisAmount,
      VolumeRebateGroup,
      ItemIsRelevantForCredit,
      //@Aggregation.default: #NOP
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CreditRelatedPrice,
      @ObjectModel.foreignKey.association: '_SalesDeal'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesDealStdVH', element: 'SalesDeal' } } ]
      SalesDeal,
      SalesDealDescription,
      SalesPromotion,

      // Sales
      Item._SoldToParty,
      _Customer,
      _SoldToPartyClassification,
      _ShipToParty,
      _BillToParty,
      Item._PayerParty,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesEmployee_2'
      _SalesEmployee,
      _SalesEmployee_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ResponsibleEmployee_2'
      _ResponsibleEmployee,
      _ResponsibleEmployee_2,
      _CustomerGroup,
      _SalesDistrict,
      _Country,
      _Region,
      _CityCode,
      @API.element: { releaseState: #DEPRECATED, successor: '_County_2' }
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes:true
      _County,
      _County_2,
      _CreditControlArea,
      _SalesGroup,
      _AdditionalCustomerGroup1,
      _AdditionalCustomerGroup2,
      _AdditionalCustomerGroup3,
      _AdditionalCustomerGroup4,
      _AdditionalCustomerGroup5,
      _SDDocumentReason,
      _SalesDeal,

      // Organization
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      OrganizationDivision,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,

      // Organization
      _SalesOrganization,
      _DistributionChannel,
      _OrganizationDivision,
      _Division,
      _SalesOffice,

      // Product
      @ObjectModel.foreignKey.association: '_Material'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'Product'
      Material,
      @ObjectModel.foreignKey.association: '_Product'
      cast( Material as productnumber preserving type )                         as Product,
      @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      OriginallyRequestedMaterial,
      InternationalArticleNumber,
      @ObjectModel.foreignKey.association: '_PricingReferenceMaterial'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      PricingReferenceMaterial,
      @Analytics.internalName: #LOCAL
      @Consumption: {
          valueHelpDefinition: [{
              entity: {
                  name: 'I_BatchStdVH',
                  element: 'Batch'
              },
              additionalBinding: [{
                  localElement: 'Plant',
                  element: 'Plant'
              },
              {
                  localElement: 'Material',
                  element: 'Material'
              }
              ]
          }]
      }
      @ObjectModel.foreignKey.association: '_Batch'
      Batch,
      @ObjectModel.foreignKey.association: '_ProductHierarchyNode'
      ProductHierarchyNode,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialGroup', element: 'MaterialGroup' } } ]
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ProductGroup'
      MaterialGroup,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      cast (MaterialGroup as productgroup preserving type)                      as ProductGroup,
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
      @ObjectModel.foreignKey.association: '_MaterialCommissionGroup'
      MaterialCommissionGroup,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      @Semantics.text: true
      PlantName,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      StorageLocation,
      @Semantics.text: true
      StorageLocationName,

      // Plant
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Product'
      _Material,
      _Product,
      _OriginallyRequestedMaterial,
      _PricingReferenceMaterial,
      _Batch,
      _ProductHierarchyNode,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductGroup'
      _MaterialGroup,
      _ProductGroup,
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _MaterialCommissionGroup,
      _Plant,
      _StorageLocation,

      // Billing
      BillingDocumentDate,
      BillingDocumentIsCancelled,
      CancelledBillingDocument,
      ForeignTrade,
      IsExportDelivery,
      BillingDocCombinationCriteria,
      ManualInvoiceMaintIsRelevant,
      BillingDocumentItemText,
      ServicesRenderedDate,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BillingQuantityUnit'
      BillingQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BillingQuantityUnit'
      BillingQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      BillingQuantityInBaseUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      //@Aggregation.default: #NOP
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MRPRequiredQuantityInBaseUnit,
      BillingToBaseQuantityDnmntr,
      BillingToBaseQuantityNmrtr,
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
      @ObjectModel.foreignKey.association: '_BillToPartyCountry'
      BillToPartyCountry,
      @ObjectModel.foreignKey.association: '_BillToPartyRegion'
      BillToPartyRegion,
      @ObjectModel.foreignKey.association: '_BillingPlanRule'
      BillingPlanRule,
      BillingPlan,
      BillingPlanItem,

      // Billing
      _BillingQuantityUnit,
      _BaseUnit,
      _ItemWeightUnit,
      _ItemVolumeUnit,
      _BillToPartyCountry,
      _BillToPartyRegion,
      _BillingPlanRule,

      // Pricing
      @ObjectModel.foreignKey.association: '_CustomerPriceGroup'
      CustomerPriceGroup,
      @ObjectModel.foreignKey.association: '_PriceListType'
      PriceListType,
      @ObjectModel.foreignKey.association: '_TaxDepartureCountry'
      TaxDepartureCountry,
      VATRegistration,
      @ObjectModel.foreignKey.association: '_VATRegistrationOrigin'
      VATRegistrationOrigin,
      @ObjectModel.foreignKey.association: '_VATRegistrationCountry'
      VATRegistrationCountry,
      CustomerTaxClassification1,
      CustomerTaxClassification2,
      CustomerTaxClassification3,
      CustomerTaxClassification4,
      CustomerTaxClassification5,
      CustomerTaxClassification6,
      CustomerTaxClassification7,
      CustomerTaxClassification8,
      CustomerTaxClassification9,
      SDPricingProcedure,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      @API.element: { releaseState: #DEPRECATED, successor: 'ItemNetAmountOfBillingDoc_2' }
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ItemNetAmountOfBillingDoc,
      @Analytics.internalName: #LOCAL
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ItemNetAmountOfBillingDoc_2,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ItemGrossAmountOfBillingDoc,
      PricingDate,
      PriceDetnExchangeRate,
      //@Aggregation.default: #NOP
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      PricingScaleQuantityInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Item.TaxAmount,
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

      @ObjectModel.foreignKey.association: '_StatisticalValueControl'
      StatisticalValueControl,
      _StatisticalValueControl,
      @EndUserText.label: 'StatisticalValue - deprecated'
      @ObjectModel.foreignKey.association: null
      StatisticalValueControl                                                   as StatisticalValue,
      
      @ObjectModel.foreignKey.association: '_MainItemPricingRefMaterial'
      MainItemPricingRefMaterial,

      @Semantics.currencyCode: true
      cast(:P_DisplayCurrency as vdm_v_display_currency)                        as DisplayCurrency,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast ( currency_conversion(
        amount => ItemNetAmountOfBillingDoc_2,
        source_currency => TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => BillingDocumentDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as net_amount_in_dsp_crcy)                                              as NetAmountInDisplayCurrency,

      // Pricing
      _CustomerPriceGroup,
      _PriceListType,
      _TaxDepartureCountry,
      _VATRegistrationOrigin,
      _VATRegistrationCountry,
      _TransactionCurrency,

      // Shipping
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      ShippingCondition,
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion,
      @ObjectModel.foreignKey.association: '_ShippingPoint'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ShippingPointStdVH', element: 'ShippingPoint' } } ]
      ShippingPoint,

      // Shipping
      _ShippingCondition,
      _IncotermsClassification,
      _ShippingPoint,
      _IncotermsVersion,

      // Payment
      ContractAccount,
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      CustomerPaymentTerms,
      @ObjectModel.foreignKey.association: '_PaymentMethod'
      PaymentMethod,
      @Semantics.text: true
      PaymentMethodName,
      PaymentReference,
      FixedValueDate,
      AdditionalValueDays,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      EligibleAmountForCashDiscount,
      @ObjectModel.foreignKey.association: '_CustomerProject'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_EngagementProjectStdVH', element: 'EngagementProject' } } ]
      CustomerProjectItem.EngagementProject                                     as CustomerProject,

      // Payment
      _CustomerPaymentTerms,
      _PaymentMethod,
      _CustomerProject,

      // Accounting
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      CompanyCode,
      @Semantics.text: true
      CompanyCodeName,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FiscalYear'
      FiscalYear,
      AccountingDocument,
      FiscalPeriod,
      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      CustomerAccountAssignmentGroup,
      AccountingExchangeRateIsSet,
      AccountingExchangeRate,
      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      cast(ExchangeRateType as doc_exchange_rate_type preserving type ) as ExchangeRateType,
      DocumentReferenceID,
      AssignmentReference,
      @ObjectModel.foreignKey.association: '_DunningArea'
      @Consumption.valueHelpDefinition: [{
        entity:{name: 'I_DunningAreaStdVH', element :'DunningArea'},
                additionalBinding:[
                  {localElement: 'CompanyCode', element: 'CompanyCode'}
                ]
      }]
      DunningArea,
      @ObjectModel.foreignKey.association: '_DunningBlockingReason'
      DunningBlockingReason,
      @ObjectModel.foreignKey.association: '_DunningKey'
      DunningKey,
      InternalFinancialDocument,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      BusinessArea,
      
      //Note:Incompatible change when adding foreign key association with combined key, be carefaul when adding this on OP system
      //  Since I_ProfitCenter has a combined key(ControllingArea and ProfitCenter), the profit center value will be different before and after adding foreign key association(ProfitCenter vs ControllingArea/ProfitCenter)
      //  Which will leads to bookmark with ProfitCenter invalid
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      @Analytics.internalName: #LOCAL
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementStdVH', element: 'WBSElementInternalID' } } ]
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID'
      @ObjectModel.foreignKey.association: '_WBSElement'
      WBSElement,
      @Analytics.internalName: #LOCAL
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_WBSElementStdVH', element: 'WBSElementInternalID' } } ]
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      WBSElementInternalID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      _WBSElementBasicData.WBSElementExternalID,
      
      @ObjectModel.foreignKey.association: '_ControllingArea'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' } } ]
      ControllingArea,
      @Semantics.text: true
      ControllingAreaName,
      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor:    'ProfitabilitySegment_2'
      cast( case when ProfitabilitySegment_2 > '9999999999' then '9999999999' else lpad( ProfitabilitySegment_2, 10, '0' ) end as rkeobjnr_numc )  as ProfitabilitySegment,
      ProfitabilitySegment_2,
      @ObjectModel.foreignKey.association: '_OrderID'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      OrderID,
      CostCenter,
      OriginSDDocument,
      OriginSDDocumentItem,
      ExchangeRateDate,

      // Accounting
      _CompanyCode,
      _FiscalYear,
      _CustomerAccountAssgmtGroup,
      _ExchangeRateType,
      _DunningArea,
      _DunningBlockingReason,
      _DunningKey,
      _BusinessArea,
      _ProfitCenter,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_WBSElementBasicData'
      _WBSElement,
      _WBSElementBasicData,
      _WBSElementExternalID,
      _ControllingArea,
      _OrderID,
      _CostCenter,

      // Reference
      ReferenceSDDocument,
      ReferenceSDDocumentItem,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      ReferenceSDDocumentCategory,
      @Analytics.internalName: #LOCAL
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesDocumentStdVH', element: 'SalesDocument' } } ]
      @ObjectModel.foreignKey.association: '_SalesDocument'
      SalesDocument,
      @Analytics.internalName: #LOCAL
      @Consumption.valueHelpDefinition: [{
        entity:{name: 'I_SalesDocumentItemStdVH', element :'SalesDocumentItem'},
                additionalBinding:[
                  {localElement: 'SalesDocument', element: 'SalesDocument'}
                ]
      }]
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      SalesDocumentItem,
      @ObjectModel.foreignKey.association: '_SalesSDDocumentCategory'
      SalesSDDocumentCategory,
      @Analytics.internalName: #LOCAL
      @Consumption.valueHelpDefinition: [{
        entity:{name: 'I_BillgDocItmBscStdVH', element :'BillingDocumentItem'},
                additionalBinding:[
                  {localElement: 'BillingDocument', element: 'BillingDocument'}
                ]
      }]
      @ObjectModel.foreignKey.association: '_HigherLevelItem'
      HigherLevelItem,
      BillingDocumentItemInPartSgmt,
      
      //Bom
      PropagatePrftbltySgmt2BOM,
      CostDeterminationIsRequired,

      // Reference
      _ReferenceSDDocumentCategory,
      _SalesSDDocumentCategory,
      _SalesDocument,
      _SalesDocumentItem,
      _HigherLevelItem,
      _MainItemPricingRefMaterial,

      // Solution Order
      BusinessSolutionOrder,
      BusinessSolutionOrderItem,

      // Status
      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      OverallSDProcessStatus,
      @ObjectModel.foreignKey.association: '_OverallBillingStatus'
      OverallBillingStatus,
      @ObjectModel.foreignKey.association: '_AccountingPostingStatus'
      AccountingPostingStatus,
      @ObjectModel.foreignKey.association: '_AccountingTransferStatus'
      AccountingTransferStatus,
      @ObjectModel.foreignKey.association: '_BillingIssueType'
      BillingIssueType,
      @ObjectModel.foreignKey.association: '_InvoiceListStatus'
      InvoiceListStatus,
      @ObjectModel.foreignKey.association: '_OvrlItmGeneralIncompletionSts'
      OvrlItmGeneralIncompletionSts,
      @ObjectModel.foreignKey.association: '_OverallPricingIncompletionSts'
      OverallPricingIncompletionSts,

      // Status
      _OverallSDProcessStatus,
      _OverallBillingStatus,
      _AccountingPostingStatus,
      _AccountingTransferStatus,
      _BillingIssueType,
      _InvoiceListStatus,
      _OvrlItmGeneralIncompletionSts,
      _OverallPricingIncompletionSts,

      // Analytics KPI
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_StatisticsCurrency'
      StatisticsCurrency,
      _StatisticsCurrency,
      
      @API.element: { releaseState: #DEPRECATED, successor: 'SalesVolumeNetAmount_2' }
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesVolumeNetAmount,
      @Analytics.internalName: #LOCAL
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesVolumeNetAmount_2,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast ( currency_conversion(
        amount => SalesVolumeNetAmount_2,
        source_currency => TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => BillingDocumentDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as mc_umnetwr )                                                         as SlsVolumeNetAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CancldSlsVolumeNetAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast ( currency_conversion(
        amount => CancldSlsVolumeNetAmt,
        source_currency => TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => BillingDocumentDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as cancld_sls_vol_net_amt_idc )                                         as CancldSlsVolumeNetAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesProfitMarginNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast ( currency_conversion(
        amount => SalesProfitMarginNetAmount,
        source_currency => TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => BillingDocumentDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as prf_marg_net_amt_idc )                                               as SlsProfitMargNetAmtInDspCrcy,
      
      @API.element: { releaseState: #DEPRECATED, successor: 'CustomerCreditMemoNetAmount_2' }
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CustomerCreditMemoNetAmount,
      @Analytics.internalName: #LOCAL
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CustomerCreditMemoNetAmount_2,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast ( currency_conversion(
        amount => CustomerCreditMemoNetAmount_2,
        source_currency => TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => BillingDocumentDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as mc_gunetwr )                                                         as CustCrdtMemoNetAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CustCrdtMemoPrftMargNetAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast ( currency_conversion(
        amount => CustCrdtMemoPrftMargNetAmt,
        source_currency => TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => BillingDocumentDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as cm_prf_marg_net_amt_idc )                                            as CustCrdtMemoPrftMargNetAmtInDC, --AT 1.2.2018 added for CE1805

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesVolumeQuantity,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      CustCreditMemoQuantity
}
```
