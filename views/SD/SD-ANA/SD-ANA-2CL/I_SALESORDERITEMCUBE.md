---
name: I_SALESORDERITEMCUBE
description: Sales OrderITEMCUBE
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
  - sales-order
  - item-level
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERITEMCUBE

**Sales OrderITEMCUBE**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` | ✓ | |  | `cast( SDIA.SalesDocument as vdm_sales_order preserving type )` |  |  |
| `SalesOrderItem` | ✓ | |  | `cast( SDIA.SalesDocumentItem as sales_order_item preserving type )` |  |  |
| `SalesOrderType` |  | |  | `SalesDocumentType` |  |  |
| `SalesOrderItemCategory` |  | |  | `cast(SalesDocumentItemCategory as sales_order_item_category preserving type)` |  |  |
| `SalesOrderItemType` |  | |  | `cast(SalesDocumentItemType as sales_order_item_type)` |  |  |
| `IsReturnsItem` |  | |  | `cast(IsReturnsItem as returns_item_flag)` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreatedByUserName` |  | |  | `cast(_CreatedByUser.UserDescription as created_by_user_name )` |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `CreationDateYear` |  | |  | `cast(CalendarDate.CalendarYear as creation_date_year)` |  |  |
| `CreationDateYearQuarter` |  | |  | `cast(CalendarDate.YearQuarter as creation_date_year_quarter)` |  |  |
| `CreationDateYearMonth` |  | |  | `cast(CalendarDate.YearMonth as creation_date_year_month)` |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `SalesOrderDateYear` |  | |  | `cast(CalendarDateSalesOrder.CalendarYear as sales_order_date_year)` |  |  |
| `SalesOrderDateYearQuarter` |  | |  | `cast(CalendarDateSalesOrder.YearQuarter as sales_order_date_year_quarter)` |  |  |
| `SalesOrderDateYearMonth` |  | |  | `cast(CalendarDateSalesOrder.YearMonth as sales_order_date_year_month)` |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  | `cast(OrganizationDivision as organization_division preserving type )` |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `PartnerCompany` |  | |  | `TradingPartner` |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `MaterialByCustomer` |  | |  |  |  |  |
| `InternationalArticleNumber` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `ProductHierarchyNode` |  | |  |  |  |  |
| `ProductCatalog` |  | |  | `cast(ProductCatalog as product_catalog)` |  |  |
| `MaterialSubstitutionReason` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ProductionPlantName` |  | | `_Plant` | `PlantName` |  |  |
| `ProductionPlant` |  | |  | `Plant` |  |  |
| `_ProductionPlant` |  | |  | `_Plant` |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `StorageLocationName` |  | | `_StorageLocation` | `StorageLocationName` |  |  |
| `ProductConfiguration` |  | |  | `cast(ProductConfiguration as product_configuration)` |  |  |
| `MainItemPricingRefProduct` |  | |  |  |  |  |
| `BillOfMaterial` |  | |  |  |  |  |
| `PropagatePrftbltySgmt2BOM` |  | |  |  |  |  |
| `CostDeterminationIsRequired` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `SoldToPartyClassification` |  | |  | `CustomerClassification` |  |  |
| `SoldToPartyName` |  | |  | `cast(SDIA._SoldToParty.CustomerName as vdm_sold_to_name)` |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `ShipToPartyName` |  | |  | `cast(SDIA._ShipToParty.CustomerName as ship_to_name)` |  |  |
| `PayerParty` |  | |  |  |  |  |
| `PayerPartyName` |  | |  | `cast(SDIA._PayerParty.CustomerName as payer_name)` |  |  |
| `BillToParty` |  | |  |  |  |  |
| `BillToPartyName` |  | |  | `cast(SDIA._BillToParty.CustomerName as bill_to_name)` |  |  |
| `SalesEmployee` |  | |  |  |  |  |
| `SalesEmployeeName` |  | |  | `cast(_SalesEmployee_2.PersonFullName as sales_empl_name)` |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `ResponsibleEmployeeName` |  | |  | `cast(_ResponsibleEmployee_2.PersonFullName as resp_empl_name)` |  |  |
| `SalesEmployeeWorkAgreement` |  | |  |  |  |  |
| `ResponsibleEmployeeWorkAgrmt` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `CreditControlArea` |  | |  |  |  |  |
| `CustomerRebateAgreement` |  | |  | `cast(CustomerRebateAgreement as customer_rebate_agreement)` |  |  |
| `SalesOrderDate` |  | |  | `SalesDocumentDate` |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `SDDocumentCollectiveNumber` |  | |  |  |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `CustomerPurchaseOrderSuplmnt` |  | |  |  |  |  |
| `CustomerPurchaseOrderSupplemnt` |  | |  | `CustomerPurchaseOrderSuplmnt` |  |  |
| `SalesOrderItemText` |  | |  | `cast(SalesDocumentItemText as sales_order_item_text)` |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `UnderlyingPurchaseOrderItem` |  | |  |  |  |  |
| `OrderQuantity` |  | |  |  |  |  |
| `ConfdDelivQtyInOrderQtyUnit` |  | |  |  |  |  |
| `TargetDelivQtyInOrderQtyUnit` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `ConfdDeliveryQtyInBaseUnit` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `OrderToBaseQuantityDnmntr` |  | |  |  |  |  |
| `OrderToBaseQuantityNmrtr` |  | |  |  |  |  |
| `TargetQuantity` |  | |  |  |  |  |
| `TargetQuantityUnit` |  | |  |  |  |  |
| `TargetToBaseQuantityDnmntr` |  | |  |  |  |  |
| `TargetToBaseQuantityNmrtr` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `SalesDeal` |  | |  |  |  |  |
| `SalesDealDescription` |  | |  | `cast(_SalesDeal.SalesDealDescription as sales_deal_description)` |  |  |
| `SalesPromotion` |  | |  | `cast(SalesPromotion as sales_promotion)` |  |  |
| `RetailPromotion` |  | |  | `cast(RetailPromotion as retail_promotion)` |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `SalesDocumentRjcnReason` |  | |  |  |  |  |
| `ItemOrderProbabilityInPercent` |  | |  |  |  |  |
| `OrderQuantityUnitDcmls` |  | |  | `UnitOfMeasureDspNmbrOfDcmls` |  |  |
| `TotalNetAmount` |  | |  |  |  |  |
| `SalesOrderCondition` |  | |  | `cast(SalesDocumentCondition as sales_order_condition)` |  |  |
| `NetAmount` |  | |  |  |  |  |
| `NetAmount_2` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  | `cast(:P_DisplayCurrency as vdm_v_display_currency)` |  |  |
| `NetAmountInDisplayCurrency` |  | |  | `cast (currency_conversion( amount => NetAmount_2, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as net_amount_in_dsp_crcy)` |  |  |
| `IncomingSalesOrdersNetAmount` |  | |  |  |  |  |
| `IncomingSalesOrdersQuantity` |  | |  |  |  |  |
| `IncomingSalesOrdersNetAmtInDC` |  | |  | `cast (currency_conversion( amount => IncomingSalesOrdersNetAmount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as incg_sls_ords_net_amt_in_dc)` |  |  |
| `NumberOfIncomingSlsOrderItems` |  | |  |  |  |  |
| `OpnSOForOrdReltdInvcsNetAmount` |  | |  |  |  |  |
| `OpnSOForOrdReltdInvcsNetAmtDC` |  | |  | `cast (currency_conversion( amount => OpnSOForOrdReltdInvcsNetAmount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => BillingDocumentDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as opn_ords_for_ordrelinv_amt_idc)` |  |  |
| `OpnSlsOrdsForDelivAmtInDspCrcy` |  | |  | `cast(OpnSlsOrdsForDelivAmtInDspCrcy as opn_ord_for_del_amt_idc)` |  |  |
| `OpenConfdDelivQtyInBaseUnit` |  | |  | `cast(OpenConfdDelivQtyInBaseUnit as opn_ord_for_del_qty)` |  |  |
| `OpenReqdDelivQtyInBaseUnit` |  | |  | `cast(OpenReqdDelivQtyInBaseUnit as opn_reqd_ord_for_del_qty)` |  |  |
| `OpnSlsOrdsForInvcPlansNetAmtDC` |  | |  | `cast(OpnSlsOrdsForInvcPlansNetAmtDC as opn_ord_for_iplan_amt_idc)` |  |  |
| `NumberOfOpenSalesOrderItems` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `PriceDetnExchangeRate` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `NetPriceQuantityUnit` |  | |  |  |  |  |
| `StatisticalValueControl` |  | |  |  |  |  |
| `StatisticalValue` |  | |  | `StatisticalValueControl` |  |  |
| `TaxAmount` |  | |  |  |  |  |
| `CostAmount` |  | |  |  |  |  |
| `Subtotal1Amount` |  | |  |  |  |  |
| `Subtotal2Amount` |  | |  |  |  |  |
| `Subtotal3Amount` |  | |  |  |  |  |
| `Subtotal4Amount` |  | |  |  |  |  |
| `Subtotal5Amount` |  | |  |  |  |  |
| `Subtotal6Amount` |  | |  |  |  |  |
| `RequestedDeliveryDate` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `CompleteDeliveryIsDefined` |  | |  |  |  |  |
| `DeliveryBlockReason` |  | |  |  |  |  |
| `ShippingPoint` |  | |  |  |  |  |
| `ShippingType` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `Route` |  | |  |  |  |  |
| `DeliveryDateQuantityIsFixed` |  | |  | `cast(DeliveryDateQuantityIsFixed as fixed_delivery_date_quantity)` |  |  |
| `PartialDeliveryIsAllowed` |  | |  |  |  |  |
| `MaxNmbrOfPartialDelivery` |  | |  |  |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `MinDeliveryQtyInBaseUnit` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `OpenDeliveryLeadingUnitCode` |  | |  |  |  |  |
| `ItemIsDeliveryRelevant` |  | |  |  |  |  |
| `BillingCompanyCode` |  | |  |  |  |  |
| `HeaderBillingBlockReason` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `ItemIsBillingRelevant` |  | |  |  |  |  |
| `ItemBillingBlockReason` |  | |  | `cast(ItemBillingBlockReason as billing_block_reason_item preserving type)` |  |  |
| `BillingPlan` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `AdditionalValueDays` |  | |  |  |  |  |
| `CustomerProject` |  | |  | `EngagementProject` |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `CostCenterBusinessArea` |  | |  | `cast(CostCenterBusinessArea as business_area_cost_center preserving type)` |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ControllingAreaName` |  | | `_ControllingArea` | `ControllingAreaName` |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `WBSElement` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `WBSElementExternalID` |  | | `_WBSElementBasicData_2` | `WBSElementExternalID` |  |  |
| `OrderID` |  | |  |  |  |  |
| `ControllingObject` |  | |  | `cast(ControllingObject as controlling_object)` |  |  |
| `ProfitabilitySegment` |  | |  |  |  |  |
| `ProfitabilitySegment_2` |  | |  |  |  |  |
| `OriginSDDocument` |  | |  |  |  |  |
| `OriginSDDocumentItem` |  | |  | `cast(OriginSDDocumentItem as origin_sd_document_item)` |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `BusinessSolutionOrder` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  | `cast(OverallSDProcessStatus as overall_sd_process_status preserving type)` |  |  |
| `OverallPurchaseConfStatus` |  | |  | `cast(OverallPurchaseConfStatus as overall_purchase_conf_status preserving type)` |  |  |
| `OverallSDDocumentRejectionSts` |  | |  | `cast(OverallSDDocumentRejectionSts as ovrl_sd_doc_rejection_status preserving type)` |  |  |
| `TotalBlockStatus` |  | |  |  |  |  |
| `OverallDelivConfStatus` |  | |  | `cast(OverallDelivConfStatus as overall_delivery_conf_status preserving type)` |  |  |
| `OverallTotalDeliveryStatus` |  | |  | `cast(OverallTotalDeliveryStatus as itms_ovrl_delivery_status preserving type)` |  |  |
| `OverallDeliveryStatus` |  | |  | `cast(OverallDeliveryStatus as overall_delivery_status preserving type)` |  |  |
| `OverallDeliveryBlockStatus` |  | |  | `cast(OverallDeliveryBlockStatus as overall_delivery_block_status preserving type)` |  |  |
| `OverallOrdReltdBillgStatus` |  | |  | `cast(OverallOrdReltdBillgStatus as ovrl_ord_rel_billg_status preserving type)` |  |  |
| `OverallBillingBlockStatus` |  | |  | `cast(OverallBillingBlockStatus as overall_billing_block_status preserving type)` |  |  |
| `OverallTotalSDDocRefStatus` |  | |  | `cast(OverallTotalSDDocRefStatus as ovrl_reference_status preserving type)` |  |  |
| `OverallSDDocReferenceStatus` |  | |  | `cast(OverallSDDocReferenceStatus as ovrl_sd_doc_reference_status preserving type)` |  |  |
| `TotalCreditCheckStatus` |  | |  |  |  |  |
| `MaxDocValueCreditCheckStatus` |  | |  |  |  |  |
| `PaymentTermCreditCheckStatus` |  | |  | `cast(PaymentTermCreditCheckStatus as payt_terms_credit_check_status preserving type)` |  |  |
| `FinDocCreditCheckStatus` |  | |  |  |  |  |
| `ExprtInsurCreditCheckStatus` |  | |  |  |  |  |
| `PaytAuthsnCreditCheckSts` |  | |  |  |  |  |
| `CentralCreditCheckStatus` |  | |  | `cast(CentralCreditCheckStatus as central_credit_check_status preserving type)` |  |  |
| `CentralCreditChkTechErrSts` |  | |  | `cast(CentralCreditChkTechErrSts as centrl_crdt_chck_tech_err_sts preserving type)` |  |  |
| `HdrGeneralIncompletionStatus` |  | |  | `cast(HdrGeneralIncompletionStatus as hdr_general_incompltn_status preserving type)` |  |  |
| `OverallPricingIncompletionSts` |  | |  | `cast(OverallPricingIncompletionSts as ovrl_pricing_incompletion_sts preserving type)` |  |  |
| `HeaderDelivIncompletionStatus` |  | |  | `cast(HeaderDelivIncompletionStatus as hdrdelivincompletionstatus preserving type )` |  |  |
| `HeaderBillgIncompletionStatus` |  | |  | `cast(HeaderBillgIncompletionStatus as hdrbillgincompletionstatus preserving type )` |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  | `cast(OvrlItmGeneralIncompletionSts as itms_ovrl_incompletion_status preserving type)` |  |  |
| `OvrlItmBillingIncompletionSts` |  | |  | `cast(OvrlItmBillingIncompletionSts as ovrl_itms_incompltn_sts_billg preserving type)` |  |  |
| `OvrlItmDelivIncompletionSts` |  | |  | `cast(OvrlItmDelivIncompletionSts as ovrl_items_dlv_incompltn_sts preserving type)` |  |  |
| `SDProcessStatus` |  | |  | `cast(SDProcessStatus as sd_doc_process_status preserving type)` |  |  |
| `DeliveryConfirmationStatus` |  | |  | `cast(DeliveryConfirmationStatus as delivery_confirmation_status preserving type)` |  |  |
| `PurchaseConfirmationStatus` |  | |  | `cast(PurchaseConfirmationStatus as purchase_confirmation_status preserving type)` |  |  |
| `TotalDeliveryStatus` |  | |  |  |  |  |
| `DeliveryStatus` |  | |  |  |  |  |
| `DeliveryBlockStatus` |  | |  |  |  |  |
| `OrderRelatedBillingStatus` |  | |  |  |  |  |
| `BillingBlockStatus` |  | |  |  |  |  |
| `ItemGeneralIncompletionStatus` |  | |  | `cast(ItemGeneralIncompletionStatus as item_general_incompletion_sts preserving type)` |  |  |
| `ItemBillingIncompletionStatus` |  | |  | `cast(ItemBillingIncompletionStatus as itms_incompltn_sts_billg preserving type)` |  |  |
| `PricingIncompletionStatus` |  | |  | `cast(PricingIncompletionStatus as pricing_incompletion_status preserving type)` |  |  |
| `ItemDeliveryIncompletionStatus` |  | |  | `cast(ItemDeliveryIncompletionStatus as itm_deliv_incompletion_status preserving type)` |  |  |
| `SDDocumentRejectionStatus` |  | |  | `cast(SDDocumentRejectionStatus as sd_doc_rejection_status preserving type)` |  |  |
| `TotalSDDocReferenceStatus` |  | |  |  |  |  |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderType` | | ✓ | | | | |
| `_CustomerProject` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SoldToPartyClassification` | | ✓ | | | | |
| `_SalesEmployee` | | ✓ | | | | |
| `_ResponsibleEmployee` | | ✓ | | | | |
| `_SalesEmployee_2` | | ✓ | | | | |
| `_ResponsibleEmployee_2` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_ScheduleLine` | | ✓ | | | | |
| `_ItemCategory` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_OriginallyRequestedMaterial` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_ProductHierarchyNode` | | ✓ | | | | |
| `_MaterialSubstitutionReason` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_AdditionalMaterialGroup1` | | ✓ | | | | |
| `_AdditionalMaterialGroup2` | | ✓ | | | | |
| `_AdditionalMaterialGroup3` | | ✓ | | | | |
| `_AdditionalMaterialGroup4` | | ✓ | | | | |
| `_AdditionalMaterialGroup5` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_AdditionalCustomerGroup1` | | ✓ | | | | |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_AdditionalCustomerGroup4` | | ✓ | | | | |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |
| `_SDDocumentReason` | | ✓ | | | | |
| `_CustomerPurchaseOrderType` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_TargetQuantityUnit` | | ✓ | | | | |
| `_ItemWeightUnit` | | ✓ | | | | |
| `_ItemVolumeUnit` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_SalesDeal` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_SalesDocumentRjcnReason` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_NetPriceQuantityUnit` | | ✓ | | | | |
| `_StatisticalValueControl` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_ShippingPoint` | | ✓ | | | | |
| `_ShippingType` | | ✓ | | | | |
| `_DeliveryPriority` | | ✓ | | | | |
| `_Route` | | ✓ | | | | |
| `_PartialDeliveryItem` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_BillingCompanyCode` | | ✓ | | | | |
| `_HeaderBillingBlockReason` | | ✓ | | | | |
| `_ItemIsBillingRelevant` | | ✓ | | | | |
| `_ItemBillingBlockReason` | | ✓ | | | | |
| `_CustomerPaymentTerms` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |
| `_CostCenterBusinessArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CustomerAccountAssgmtGroup` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_WBSElementBasicData_2` | | ✓ | | | | |
| `_ReferenceSDDocument` | | ✓ | | | | |
| `_ReferenceSDDocumentItem` | | ✓ | | | | |
| `_ReferenceSDDocumentCategory` | | ✓ | | | | |
| `_OverallSDProcessStatus` | | ✓ | | | | |
| `_OverallPurchaseConfStatus` | | ✓ | | | | |
| `_OverallSDDocumentRejectionSts` | | ✓ | | | | |
| `_TotalBlockStatus` | | ✓ | | | | |
| `_OverallDelivConfStatus` | | ✓ | | | | |
| `_OverallTotalDeliveryStatus` | | ✓ | | | | |
| `_OverallDeliveryStatus` | | ✓ | | | | |
| `_OverallDeliveryBlockStatus` | | ✓ | | | | |
| `_OverallOrdReltdBillgStatus` | | ✓ | | | | |
| `_OverallBillingBlockStatus` | | ✓ | | | | |
| `_OverallTotalSDDocRefStatus` | | ✓ | | | | |
| `_OverallSDDocReferenceStatus` | | ✓ | | | | |
| `_TotalCreditCheckStatus` | | ✓ | | | | |
| `_MaxDocValueCreditCheckStatus` | | ✓ | | | | |
| `_PaymentTermCreditCheckStatus` | | ✓ | | | | |
| `_FinDocCreditCheckStatus` | | ✓ | | | | |
| `_ExprtInsurCreditCheckStatus` | | ✓ | | | | |
| `_PaytAuthsnCreditCheckSts` | | ✓ | | | | |
| `_CentralCreditCheckStatus` | | ✓ | | | | |
| `_CentralCreditChkTechErrSts` | | ✓ | | | | |
| `_HdrGeneralIncompletionStatus` | | ✓ | | | | |
| `_OverallPricingIncompletionSts` | | ✓ | | | | |
| `_HeaderDelivIncompletionStatus` | | ✓ | | | | |
| `_HeaderBillgIncompletionStatus` | | ✓ | | | | |
| `_OvrlItmGeneralIncompletionSts` | | ✓ | | | | |
| `_OvrlItmBillingIncompletionSts` | | ✓ | | | | |
| `_OvrlItmDelivIncompletionSts` | | ✓ | | | | |
| `_SDProcessStatus` | | ✓ | | | | |
| `_DeliveryConfirmationStatus` | | ✓ | | | | |
| `_PurchaseConfirmationStatus` | | ✓ | | | | |
| `_TotalDeliveryStatus` | | ✓ | | | | |
| `_DeliveryStatus` | | ✓ | | | | |
| `_DeliveryBlockStatus` | | ✓ | | | | |
| `_OrderRelatedBillingStatus` | | ✓ | | | | |
| `_BillingBlockStatus` | | ✓ | | | | |
| `_ItemGeneralIncompletionStatus` | | ✓ | | | | |
| `_ItemBillingIncompletionStatus` | | ✓ | | | | |
| `_PricingIncompletionStatus` | | ✓ | | | | |
| `_ItemDelivIncompletionSts` | | ✓ | | | | |
| `_SDDocumentRejectionStatus` | | ✓ | | | | |
| `_TotalSDDocReferenceStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_SalesOrderType` | `I_SalesOrderType` | [0..1] |
| `_CustomerProject` | `I_EngagementProject` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_SoldToPartyClassification` | `I_CustomerClassification` | [0..1] |
| `_SalesEmployee` | `I_Employee` | [0..1] |
| `_ResponsibleEmployee` | `I_Employee` | [0..1] |
| `_SalesEmployee_2` | `I_PersonWorkAgreement_1` | [0..1] |
| `_ResponsibleEmployee_2` | `I_PersonWorkAgreement_1` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Order Item - Cube'
@VDM.viewType: #COMPOSITE
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: ['_CreatedByUser']
}
@AbapCatalog: {
  sqlViewName: 'ISDSALESORDERIC',
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
@Aggregation.allowPrecisionLoss:true

define view I_SalesOrderItemCube
  with parameters
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency
  as select from           I_SalesDocumentItemAnalytics                                                                                                      as SDIA

    left outer to one join P_OpnSlsOrdsForDelivAnlyts(P_ExchangeRateType:$parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency)   as OpnSlsOrdsForDeliv                                                                         --11.12.2018 & CE1902
                                                                                                                                                                                       on  SDIA.SalesDocument     = OpnSlsOrdsForDeliv.SalesDocument       --11.12.2018 & CE1902
                                                                                                                                                                                       and SDIA.SalesDocumentItem = OpnSlsOrdsForDeliv.SalesDocumentItem   --11.12.2018 & CE1902

    left outer to one join P_OpnSlsOrdsForInvcPlnAnlyts(P_ExchangeRateType:$parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency) as OpnSlsOrdsForInvcPln                                                                       --11.12.2018 & CE1902
                                                                                                                                                                                       on  SDIA.SalesDocument     = OpnSlsOrdsForInvcPln.SalesDocument     --11.12.2018 & CE1902
                                                                                                                                                                                       and SDIA.SalesDocumentItem = OpnSlsOrdsForInvcPln.SalesDocumentItem --11.12.2018 & CE1902

    left outer to one join I_UnitOfMeasure                                                                                                                   as UnitOfMeasure          on OrderQuantityUnit = UnitOfMeasure.UnitOfMeasure
    left outer to one join I_CalendarDate                                                                                                                    as CalendarDate           on SDIA.CreationDate = CalendarDate.CalendarDate
    left outer to one join I_CalendarDate                                                                                                                    as CalendarDateSalesOrder on SDIA.SalesDocumentDate = CalendarDateSalesOrder.CalendarDate

    left outer to one join I_EngagementProjectItem                                                                                                           as CustomerProjectItem    on  SDIA.SalesDocument                            = CustomerProjectItem.EngagementProjectItem
                                                                                                                                                                                       and CustomerProjectItem.EngagementProjectItemType = '0SOH'
  association [1..1] to I_SalesOrder             as _SalesOrder                on  $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_SalesOrderType         as _SalesOrderType            on  $projection.SalesOrderType = _SalesOrderType.SalesOrderType

  association [0..1] to I_EngagementProject      as _CustomerProject           on  $projection.CustomerProject = _CustomerProject.EngagementProject
  association [0..1] to I_SalesOrganization      as _SalesOrganization         on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_CustomerClassification as _SoldToPartyClassification on  $projection.SoldToPartyClassification = _SoldToPartyClassification.CustomerClassification
  association [0..1] to I_Employee               as _SalesEmployee             on  $projection.SalesEmployee = _SalesEmployee.PersonnelNumber
  association [0..1] to I_Employee               as _ResponsibleEmployee       on  $projection.ResponsibleEmployee = _ResponsibleEmployee.PersonnelNumber
  association [0..1] to I_PersonWorkAgreement_1  as _SalesEmployee_2           on  $projection.SalesEmployee = _SalesEmployee_2.PersonWorkAgreement
  association [0..1] to I_PersonWorkAgreement_1  as _ResponsibleEmployee_2     on  $projection.ResponsibleEmployee = _ResponsibleEmployee_2.PersonWorkAgreement
  association [0..1] to I_Product                as _Product                   on  $projection.Product = _Product.Product
  association [0..1] to I_WBSElementByExternalID as _WBSElementExternalID      on  $projection.wbselementexternalid = _WBSElementExternalID.WBSElementExternalID  --AT 26.10.2021 CE2111 into of WBSElementExternalID 
  //Extensibility
  association [0..1] to E_SalesDocumentItemBasic as _Extension                 on  $projection.SalesOrder     = _Extension.SalesDocument
                                                                               and $projection.SalesOrderItem = _Extension.SalesDocumentItem
{
      // Keys
      @ObjectModel.foreignKey.association: '_SalesOrder'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesOrderStdVH', element: 'SalesOrder' } } ]
  key cast( SDIA.SalesDocument as vdm_sales_order preserving type )                         as SalesOrder,
      _SalesOrder,
  key cast( SDIA.SalesDocumentItem as sales_order_item preserving type )                    as SalesOrderItem,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ScheduleLine,

      // Category
      @ObjectModel.foreignKey.association: '_SalesOrderType'
      SalesDocumentType                                                                     as SalesOrderType,
      _SalesOrderType,
      @ObjectModel.foreignKey.association: '_ItemCategory'
      cast(SalesDocumentItemCategory as sales_order_item_category preserving type)          as SalesOrderItemCategory,
      _ItemCategory,
      cast(SalesDocumentItemType as sales_order_item_type)                                  as SalesOrderItemType,
      cast(IsReturnsItem as returns_item_flag)                                              as IsReturnsItem,

      // Admin
      CreatedByUser,
      _CreatedByUser,
      cast(_CreatedByUser.UserDescription as  created_by_user_name )                        as CreatedByUserName, --AT9.10.2018
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.calendar.year
      cast(CalendarDate.CalendarYear as creation_date_year)                                 as CreationDateYear,
      @Semantics.calendar.yearQuarter
      cast(CalendarDate.YearQuarter as creation_date_year_quarter)                          as CreationDateYearQuarter,
      @Semantics.calendar.yearMonth
      cast(CalendarDate.YearMonth as creation_date_year_month)                              as CreationDateYearMonth,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      @Semantics.calendar.year
      cast(CalendarDateSalesOrder.CalendarYear as sales_order_date_year)                    as SalesOrderDateYear,
      @Semantics.calendar.yearQuarter
      cast(CalendarDateSalesOrder.YearQuarter as sales_order_date_year_quarter)             as SalesOrderDateYearQuarter,
      @Semantics.calendar.yearMonth
      cast(CalendarDateSalesOrder.YearMonth as sales_order_date_year_month)                 as SalesOrderDateYearMonth,

      // Orgnization
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      _SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      _DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      cast(OrganizationDivision as organization_division preserving type )                  as OrganizationDivision,
      _OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
      _SalesGroup,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      _SalesOffice,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      _Division,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association:'_GlobalCompany'
      SDIA._SoldToParty.TradingPartner as PartnerCompany,
      SDIA._SoldToParty._GlobalCompany,

      // Product
      @ObjectModel.foreignKey.association: '_Material'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'Product'
      Material,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Product'
      _Material,
      @ObjectModel.foreignKey.association: '_Product'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      SDIA.Product,
      _Product,
      @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' } } ]
      OriginallyRequestedMaterial,
      _OriginallyRequestedMaterial,
      MaterialByCustomer,
      InternationalArticleNumber,
      @Analytics.internalName: #LOCAL
      @Consumption: {
          valueHelpDefinition: [{
              entity: {
                  name: 'I_BatchStdVH',
                  element: 'Batch'
              },
              additionalBinding: [{
                  localElement: 'Plant',
                  element: 'Plant'},{
                  localElement: 'Material',
                  element: 'Material'}
              ]
          }]
      }
      @ObjectModel.foreignKey.association: '_Batch'
      Batch,
      _Batch,
      @ObjectModel.foreignKey.association: '_ProductHierarchyNode'
      ProductHierarchyNode,
      _ProductHierarchyNode,
      cast(ProductCatalog as product_catalog)                                               as ProductCatalog,
      @ObjectModel.foreignKey.association: '_MaterialSubstitutionReason'
      MaterialSubstitutionReason,
      _MaterialSubstitutionReason,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ProductGroup'
      MaterialGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductGroup'
      _MaterialGroup,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      ProductGroup,
      _ProductGroup,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      AdditionalMaterialGroup1,
      _AdditionalMaterialGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      AdditionalMaterialGroup2,
      _AdditionalMaterialGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      AdditionalMaterialGroup3,
      _AdditionalMaterialGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      AdditionalMaterialGroup4,
      _AdditionalMaterialGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      AdditionalMaterialGroup5,
      _AdditionalMaterialGroup5,
      @ObjectModel.foreignKey.association: '_Plant'
      Plant,
      _Plant,
      @Semantics.text: true
      _Plant.PlantName                                                                      as ProductionPlantName,
      @EndUserText.label: 'ProductionPlant - deprecated'
      @ObjectModel.foreignKey.association: null
      Plant                                                                                 as ProductionPlant,
      _Plant                                                                                as _ProductionPlant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      StorageLocation,
      _StorageLocation,
      @Semantics.text: true
      _StorageLocation.StorageLocationName,
      cast(ProductConfiguration as product_configuration)                                   as ProductConfiguration,
      
      //BoM
      SDIA.MainItemPricingRefProduct,
      SDIA.BillOfMaterial,
      SDIA.PropagatePrftbltySgmt2BOM,
      SDIA.CostDeterminationIsRequired,

      // Sales
      @ObjectModel.foreignKey.association: '_SoldToParty'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      SDIA.SoldToParty,
      SDIA._SoldToParty,
      @ObjectModel.foreignKey.association: '_SoldToPartyClassification'
      SDIA._SoldToParty.CustomerClassification                                              as SoldToPartyClassification,
      _SoldToPartyClassification,
      cast(SDIA._SoldToParty.CustomerName as vdm_sold_to_name)                              as SoldToPartyName,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      SDIA.ShipToParty,
      SDIA._ShipToParty,
      cast(SDIA._ShipToParty.CustomerName as ship_to_name)                                  as ShipToPartyName,
      @ObjectModel.foreignKey.association: '_PayerParty'
      SDIA.PayerParty,
      SDIA._PayerParty,
      cast(SDIA._PayerParty.CustomerName as payer_name)                                     as PayerPartyName,
      @ObjectModel.foreignKey.association: '_BillToParty'
      SDIA.BillToParty,
      SDIA._BillToParty,
      cast(SDIA._BillToParty.CustomerName as bill_to_name)                                  as BillToPartyName,

      // Sales Employee & Responsible Employee
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SalesEmployee_2'
      SDIA.SalesEmployee,
      _SalesEmployee_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesEmployee_2'
      _SalesEmployee,
      cast(_SalesEmployee_2.PersonFullName as sales_empl_name)                              as SalesEmployeeName,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ResponsibleEmployee_2'
      SDIA.ResponsibleEmployee,
      _ResponsibleEmployee_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ResponsibleEmployee_2'
      _ResponsibleEmployee,
      cast(_ResponsibleEmployee_2.PersonFullName as resp_empl_name)                         as ResponsibleEmployeeName,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SalesEmployee'
      SDIA.SalesEmployeeWorkAgreement,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ResponsibleEmployee'
      SDIA.ResponsibleEmployeeWorkAgrmt,

      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      AdditionalCustomerGroup1,
      _AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      AdditionalCustomerGroup2,
      _AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      AdditionalCustomerGroup3,
      _AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      AdditionalCustomerGroup4,
      _AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      AdditionalCustomerGroup5,
      _AdditionalCustomerGroup5,
      @ObjectModel.foreignKey.association: '_CreditControlArea'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CreditControlAreaStdVH', element: 'CreditControlArea' } } ]
      CreditControlArea,
      _CreditControlArea,
      cast(CustomerRebateAgreement as customer_rebate_agreement)                            as CustomerRebateAgreement,
      SalesDocumentDate                                                                     as SalesOrderDate,
      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      SDDocumentReason,
      _SDDocumentReason,
      SDDocumentCollectiveNumber,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerPurchaseOrderType'
      CustomerPurchaseOrderType,
      _CustomerPurchaseOrderType,
      CustomerPurchaseOrderDate,
      CustomerPurchaseOrderSuplmnt,
      @EndUserText.label: 'CustomerPurchaseOrderSupplemnt - deprecated'
      CustomerPurchaseOrderSuplmnt                                                          as CustomerPurchaseOrderSupplemnt,
      cast(SalesDocumentItemText as sales_order_item_text)                                  as SalesOrderItemText,
      PurchaseOrderByCustomer,
      UnderlyingPurchaseOrderItem,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      OrderQuantity,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ConfdDelivQtyInOrderQtyUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      TargetDelivQtyInOrderQtyUnit,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      OrderQuantityUnit,
      _OrderQuantityUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ConfdDeliveryQtyInBaseUnit,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      _BaseUnit,

      OrderToBaseQuantityDnmntr,
      OrderToBaseQuantityNmrtr,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TargetQuantityUnit'
      TargetQuantity,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_TargetQuantityUnit'
      TargetQuantityUnit,
      _TargetQuantityUnit,

      TargetToBaseQuantityDnmntr,
      TargetToBaseQuantityNmrtr,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemWeightUnit'
      ItemWeightUnit,
      _ItemWeightUnit,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemVolumeUnit'
      ItemVolumeUnit,
      _ItemVolumeUnit,

      ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      _SalesDistrict,
      @ObjectModel.foreignKey.association: '_SalesDeal'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SalesDealStdVH', element: 'SalesDeal' } } ]
      SalesDeal,
      _SalesDeal,
      cast(_SalesDeal.SalesDealDescription as sales_deal_description)                       as SalesDealDescription,
      cast(SalesPromotion as sales_promotion)                                               as SalesPromotion,
      cast(RetailPromotion as retail_promotion)                                             as RetailPromotion,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      _CustomerGroup,
      @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
      SalesDocumentRjcnReason,
      _SalesDocumentRjcnReason,

      // Quotation
      ItemOrderProbabilityInPercent,

      // Contract
      //@Aggregation.default: #NOP
      UnitOfMeasure.UnitOfMeasureDspNmbrOfDcmls                                             as OrderQuantityUnitDcmls,

      // Pricing
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TotalNetAmount,

      cast(SalesDocumentCondition as sales_order_condition)                                 as SalesOrderCondition,
      
      @API.element: { releaseState: #DEPRECATED, successor: 'NetAmount_2' }
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      NetAmount,
      @Analytics.internalName: #LOCAL
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      NetAmount_2,

      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      _TransactionCurrency,

      @Semantics.currencyCode: true
      cast(:P_DisplayCurrency as vdm_v_display_currency)                                    as DisplayCurrency,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast (currency_conversion(
        amount => NetAmount_2,
        source_currency => TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as net_amount_in_dsp_crcy)                                                          as NetAmountInDisplayCurrency,

      // KPI: Incoming Orders
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      IncomingSalesOrdersNetAmount,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      IncomingSalesOrdersQuantity,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast (currency_conversion(
        amount => IncomingSalesOrdersNetAmount,
        source_currency => TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as incg_sls_ords_net_amt_in_dc)                                                     as IncomingSalesOrdersNetAmtInDC,

      @DefaultAggregation: #SUM
      NumberOfIncomingSlsOrderItems,

      // KPI: Open Orders For Invoices
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      OpnSOForOrdReltdInvcsNetAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast (currency_conversion(
        amount => OpnSOForOrdReltdInvcsNetAmount,
        source_currency => TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => BillingDocumentDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as opn_ords_for_ordrelinv_amt_idc)                                                  as OpnSOForOrdReltdInvcsNetAmtDC,

      // KPI: Open Orders For Delivery
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(OpnSlsOrdsForDelivAmtInDspCrcy as opn_ord_for_del_amt_idc)                       as OpnSlsOrdsForDelivAmtInDspCrcy,

      // KPI: Open Confimed Quantity For Delivery
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast(OpenConfdDelivQtyInBaseUnit as opn_ord_for_del_qty)                              as OpenConfdDelivQtyInBaseUnit,

      // KPI: Open Requested Quantity For Delivery
      @DefaultAggregation:  #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast(OpenReqdDelivQtyInBaseUnit as opn_reqd_ord_for_del_qty)                          as OpenReqdDelivQtyInBaseUnit,

      // KPI: Open Orders for Billing Plan
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(OpnSlsOrdsForInvcPlansNetAmtDC as opn_ord_for_iplan_amt_idc)                     as OpnSlsOrdsForInvcPlansNetAmtDC,

      @DefaultAggregation: #SUM
      NumberOfOpenSalesOrderItems,

      PricingDate,
      ExchangeRateDate,
      PriceDetnExchangeRate,

      //@Aggregation.default: #NOP
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      NetPriceAmount,

      //@Aggregation.default: #NOP
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      NetPriceQuantity,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_NetPriceQuantityUnit'
      NetPriceQuantityUnit,
      _NetPriceQuantityUnit,

      @ObjectModel.foreignKey.association: '_StatisticalValueControl'
      StatisticalValueControl,
      _StatisticalValueControl,
      @EndUserText.label: 'StatisticalValue - deprecated'
      @ObjectModel.foreignKey.association: null
      StatisticalValueControl                                                               as StatisticalValue,

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

      // Shipping
      RequestedDeliveryDate,
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      ShippingCondition,
      _ShippingCondition,
      CompleteDeliveryIsDefined,
      @ObjectModel.foreignKey.association: '_DeliveryBlockReason'
      DeliveryBlockReason,
      _DeliveryBlockReason,
      @ObjectModel.foreignKey.association: '_ShippingPoint'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ShippingPointStdVH', element: 'ShippingPoint' } } ]
      ShippingPoint,
      _ShippingPoint,
      @ObjectModel.foreignKey.association: '_ShippingType'
      ShippingType,
      _ShippingType,
      InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_DeliveryPriority'
      DeliveryPriority,
      _DeliveryPriority,
      @ObjectModel.foreignKey.association: '_Route'
      Route,
      _Route,
      cast(DeliveryDateQuantityIsFixed as fixed_delivery_date_quantity)                     as DeliveryDateQuantityIsFixed,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PartialDeliveryItem'
      PartialDeliveryIsAllowed,
      _PartialDeliveryItem,
      MaxNmbrOfPartialDelivery,
      UnlimitedOverdeliveryIsAllowed,
      OverdelivTolrtdLmtRatioInPct,
      UnderdelivTolrtdLmtRatioInPct,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MinDeliveryQtyInBaseUnit,

      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification,
      _IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      IncotermsVersion,
      _IncotermsVersion,
      OpenDeliveryLeadingUnitCode,
      ItemIsDeliveryRelevant,

      // Billing
      @ObjectModel.foreignKey.association: '_BillingCompanyCode'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      BillingCompanyCode,
      _BillingCompanyCode,
      @ObjectModel.foreignKey.association: '_HeaderBillingBlockReason'
      HeaderBillingBlockReason,
      _HeaderBillingBlockReason,
      BillingDocumentDate,
      @ObjectModel.foreignKey.association: '_ItemIsBillingRelevant'
      ItemIsBillingRelevant,
      _ItemIsBillingRelevant,
      @ObjectModel.foreignKey.association: '_ItemBillingBlockReason'
      cast(ItemBillingBlockReason as billing_block_reason_item preserving type)             as ItemBillingBlockReason,
      _ItemBillingBlockReason,
      BillingPlan,

      // Payment
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      CustomerPaymentTerms,
      _CustomerPaymentTerms,
      PaymentMethod,
      FixedValueDate,
      AdditionalValueDays,

      @ObjectModel.foreignKey.association: '_CustomerProject'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_EngagementProjectStdVH', element: 'EngagementProject' } } ]
      CustomerProjectItem.EngagementProject                                                 as CustomerProject,
      _CustomerProject,

      // Accounting
      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      ExchangeRateType,
      _ExchangeRateType,
      @ObjectModel.foreignKey.association: '_CostCenterBusinessArea'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      cast(CostCenterBusinessArea as business_area_cost_center preserving type)             as CostCenterBusinessArea,
      _CostCenterBusinessArea,
      CostCenter,
      _CostCenter,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' } } ]
      ControllingArea,
      _ControllingArea,
      @Semantics.text: true
      _ControllingArea.ControllingAreaName,
      FiscalYear,
      FiscalPeriod,
      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      CustomerAccountAssignmentGroup,
      _CustomerAccountAssgmtGroup,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      BusinessArea,
      _BusinessArea,
      
      //Note:Incompatible change when adding foreign key association with combined key, be carefaul when adding this on OP system
      //  Since I_ProfitCenter has a combined key(ControllingArea and ProfitCenter), the profit center value will be different before and after adding foreign key association(ProfitCenter vs ControllingArea/ProfitCenter)
      //  Which will leads to bookmark with ProfitCenter invalid
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_ProfitCenter' 
      ProfitCenter,
      _ProfitCenter,
      @Analytics.internalName: #LOCAL
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'WBSElementInternalID'
      WBSElement,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementBasicData_2'
      WBSElementInternalID,
      _WBSElementBasicData_2,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'     --AT 26.10.2021 CE2111 into of WBSElementExternalID 
      _WBSElementBasicData_2.WBSElementExternalID,
      _WBSElementExternalID,
      
      OrderID,
      cast(ControllingObject as controlling_object)                                         as ControllingObject,
      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor:    'ProfitabilitySegment_2'
      ProfitabilitySegment,
      ProfitabilitySegment_2,

      OriginSDDocument,
      cast(OriginSDDocumentItem as origin_sd_document_item)                                 as OriginSDDocumentItem,

      // Reference
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ReferenceSDDocument'
      ReferenceSDDocument,
      _ReferenceSDDocument,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentItem'
      ReferenceSDDocumentItem,
      _ReferenceSDDocumentItem,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      ReferenceSDDocumentCategory,
      _ReferenceSDDocumentCategory,
      HigherLevelItem,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SolutionOrder'
      SDIA.BusinessSolutionOrder, --AT15.05.2020 Solution Order References Added
      SDIA._SolutionOrder,
      //      @Analytics.internalName: #LOCAL
      //      @ObjectModel.foreignKey.association: '_SolutionOrderItem'
      //      SDIA.BusinessSolutionOrderItem, --AT4.6.2020 ignore Item Reference due to framework problems
      //      SDIA._SolutionOrderItem,

      // Status
      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      cast(OverallSDProcessStatus as overall_sd_process_status preserving type)             as OverallSDProcessStatus,
      _OverallSDProcessStatus,
      @ObjectModel.foreignKey.association: '_OverallPurchaseConfStatus'
      cast(OverallPurchaseConfStatus as overall_purchase_conf_status preserving type)       as OverallPurchaseConfStatus,
      _OverallPurchaseConfStatus,
      @ObjectModel.foreignKey.association: '_OverallSDDocumentRejectionSts'
      cast(OverallSDDocumentRejectionSts as ovrl_sd_doc_rejection_status preserving type)   as OverallSDDocumentRejectionSts,
      _OverallSDDocumentRejectionSts,
      @ObjectModel.foreignKey.association: '_TotalBlockStatus'
      TotalBlockStatus,
      _TotalBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallDelivConfStatus'
      cast(OverallDelivConfStatus as overall_delivery_conf_status preserving type)          as OverallDelivConfStatus,
      _OverallDelivConfStatus,
      @ObjectModel.foreignKey.association: '_OverallTotalDeliveryStatus'
      cast(OverallTotalDeliveryStatus as itms_ovrl_delivery_status preserving type)         as OverallTotalDeliveryStatus,
      _OverallTotalDeliveryStatus,
      @ObjectModel.foreignKey.association: '_OverallDeliveryStatus'
      cast(OverallDeliveryStatus as overall_delivery_status preserving type)                as OverallDeliveryStatus,
      _OverallDeliveryStatus,
      @ObjectModel.foreignKey.association: '_OverallDeliveryBlockStatus'
      cast(OverallDeliveryBlockStatus as overall_delivery_block_status preserving type)     as OverallDeliveryBlockStatus,
      _OverallDeliveryBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallOrdReltdBillgStatus'
      cast(OverallOrdReltdBillgStatus as ovrl_ord_rel_billg_status preserving type)         as OverallOrdReltdBillgStatus,
      _OverallOrdReltdBillgStatus,
      @ObjectModel.foreignKey.association: '_OverallBillingBlockStatus'
      cast(OverallBillingBlockStatus as overall_billing_block_status preserving type)       as OverallBillingBlockStatus,
      _OverallBillingBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallTotalSDDocRefStatus'
      cast(OverallTotalSDDocRefStatus as ovrl_reference_status preserving type)             as OverallTotalSDDocRefStatus,
      _OverallTotalSDDocRefStatus,
      @ObjectModel.foreignKey.association: '_OverallSDDocReferenceStatus'
      cast(OverallSDDocReferenceStatus as ovrl_sd_doc_reference_status preserving type)     as OverallSDDocReferenceStatus,
      _OverallSDDocReferenceStatus,
      @ObjectModel.foreignKey.association: '_TotalCreditCheckStatus'
      TotalCreditCheckStatus,
      _TotalCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_MaxDocValueCreditCheckStatus'
      MaxDocValueCreditCheckStatus,
      _MaxDocValueCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_PaymentTermCreditCheckStatus'
      cast(PaymentTermCreditCheckStatus as payt_terms_credit_check_status preserving type)  as PaymentTermCreditCheckStatus,
      _PaymentTermCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_FinDocCreditCheckStatus'
      FinDocCreditCheckStatus,
      _FinDocCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_ExprtInsurCreditCheckStatus'
      ExprtInsurCreditCheckStatus,
      _ExprtInsurCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_PaytAuthsnCreditCheckSts'
      PaytAuthsnCreditCheckSts,
      _PaytAuthsnCreditCheckSts,
      @ObjectModel.foreignKey.association: '_CentralCreditCheckStatus'
      cast(CentralCreditCheckStatus as central_credit_check_status preserving type)         as CentralCreditCheckStatus,
      _CentralCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_CentralCreditChkTechErrSts'
      cast(CentralCreditChkTechErrSts as centrl_crdt_chck_tech_err_sts preserving type)     as CentralCreditChkTechErrSts,
      _CentralCreditChkTechErrSts,
      @ObjectModel.foreignKey.association: '_HdrGeneralIncompletionStatus'
      cast(HdrGeneralIncompletionStatus as hdr_general_incompltn_status preserving type)    as HdrGeneralIncompletionStatus,
      _HdrGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_OverallPricingIncompletionSts'
      cast(OverallPricingIncompletionSts as ovrl_pricing_incompletion_sts preserving type)  as OverallPricingIncompletionSts,
      _OverallPricingIncompletionSts,
      @ObjectModel.foreignKey.association: '_HeaderDelivIncompletionStatus'
      cast(HeaderDelivIncompletionStatus as hdrdelivincompletionstatus preserving type )    as HeaderDelivIncompletionStatus,
      _HeaderDelivIncompletionStatus,
      @ObjectModel.foreignKey.association: '_HeaderBillgIncompletionStatus'
      cast(HeaderBillgIncompletionStatus as hdrbillgincompletionstatus preserving type )    as HeaderBillgIncompletionStatus,
      _HeaderBillgIncompletionStatus,
      @ObjectModel.foreignKey.association: '_OvrlItmGeneralIncompletionSts'
      cast(OvrlItmGeneralIncompletionSts as itms_ovrl_incompletion_status preserving type)  as OvrlItmGeneralIncompletionSts,
      _OvrlItmGeneralIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmBillingIncompletionSts'
      cast(OvrlItmBillingIncompletionSts as ovrl_itms_incompltn_sts_billg preserving type)  as OvrlItmBillingIncompletionSts,
      _OvrlItmBillingIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmDelivIncompletionSts'
      cast(OvrlItmDelivIncompletionSts as ovrl_items_dlv_incompltn_sts preserving type)     as OvrlItmDelivIncompletionSts,
      _OvrlItmDelivIncompletionSts,
      @ObjectModel.foreignKey.association: '_SDProcessStatus'
      cast(SDProcessStatus as sd_doc_process_status preserving type)                        as SDProcessStatus,
      _SDProcessStatus,
      @ObjectModel.foreignKey.association: '_DeliveryConfirmationStatus'
      cast(DeliveryConfirmationStatus as delivery_confirmation_status preserving type)      as DeliveryConfirmationStatus,
      _DeliveryConfirmationStatus,
      @ObjectModel.foreignKey.association: '_PurchaseConfirmationStatus'
      cast(PurchaseConfirmationStatus as purchase_confirmation_status preserving type)      as PurchaseConfirmationStatus,
      _PurchaseConfirmationStatus,
      @ObjectModel.foreignKey.association: '_TotalDeliveryStatus'
      TotalDeliveryStatus,
      _TotalDeliveryStatus,
      @ObjectModel.foreignKey.association: '_DeliveryStatus'
      DeliveryStatus,
      _DeliveryStatus,
      @ObjectModel.foreignKey.association: '_DeliveryBlockStatus'
      DeliveryBlockStatus,
      _DeliveryBlockStatus,
      @ObjectModel.foreignKey.association: '_OrderRelatedBillingStatus'
      OrderRelatedBillingStatus,
      _OrderRelatedBillingStatus,
      @ObjectModel.foreignKey.association: '_BillingBlockStatus'
      BillingBlockStatus,
      _BillingBlockStatus,
      @ObjectModel.foreignKey.association: '_ItemGeneralIncompletionStatus'
      cast(ItemGeneralIncompletionStatus as item_general_incompletion_sts preserving type)  as ItemGeneralIncompletionStatus,
      _ItemGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemBillingIncompletionStatus'
      cast(ItemBillingIncompletionStatus as itms_incompltn_sts_billg preserving type)       as ItemBillingIncompletionStatus,
      _ItemBillingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_PricingIncompletionStatus'
      cast(PricingIncompletionStatus as pricing_incompletion_status preserving type)        as PricingIncompletionStatus,
      _PricingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemDelivIncompletionSts'
      cast(ItemDeliveryIncompletionStatus as itm_deliv_incompletion_status preserving type) as ItemDeliveryIncompletionStatus,
      _ItemDelivIncompletionSts,
      @ObjectModel.foreignKey.association: '_SDDocumentRejectionStatus'
      cast(SDDocumentRejectionStatus as sd_doc_rejection_status preserving type)            as SDDocumentRejectionStatus,
      _SDDocumentRejectionStatus,
      @ObjectModel.foreignKey.association: '_TotalSDDocReferenceStatus'
      TotalSDDocReferenceStatus,
      _TotalSDDocReferenceStatus

}
where
  SDDocumentCategory = 'C';
```
