---
name: I_SLSORDCONFANALYTICSCUBE
description: "Slsordconfanalyticscube"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - interface-view
  - analytical
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# I_SLSORDCONFANALYTICSCUBE

**Slsordconfanalyticscube**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` | ✓ | |  | `cast( SDIA.SalesDocument as vdm_sales_order preserving type )` |  |  |
| `SalesOrderItem` | ✓ | |  | `cast( SDIA.SalesDocumentItem as sales_order_item preserving type )` |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `SalesOrderType` |  | |  | `SalesDocumentType` |  |  |
| `SalesOrderItemCategory` |  | |  | `cast(SalesDocumentItemCategory as sales_order_item_category preserving type)` |  |  |
| `SalesOrderItemType` |  | |  | `cast(SalesDocumentItemType as sales_order_item_type)` |  |  |
| `IsReturnsItem` |  | |  | `cast(IsReturnsItem as returns_item_flag)` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreatedByUserName` |  | |  | `cast(_CreatedByUser.UserDescription as created_by_user_name preserving type )` |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  | `cast(CreationTime as creation_time)` |  |  |
| `CreationDateYear` |  | |  | `cast(CalendarDate.CalendarYear as creation_date_year)` |  |  |
| `CreationDateYearQuarter` |  | |  | `cast(CalendarDate.YearQuarter as creation_date_year_quarter)` |  |  |
| `CreationDateYearMonth` |  | |  | `cast(CalendarDate.YearMonth as creation_date_year_month)` |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `SalesOrderDateYear` |  | |  | `cast(CalendarDateSalesOrder.CalendarYear as sales_order_date_year)` |  |  |
| `SalesOrderDateYearQuarter` |  | |  | `cast(CalendarDateSalesOrder.YearQuarter as sales_order_date_year_quarter)` |  |  |
| `SalesOrderDateYearMonth` |  | |  | `cast(CalendarDateSalesOrder.YearMonth as sales_order_date_year_month)` |  |  |
| `SalesOrderDateYearWeek` |  | |  | `cast(CalendarDateSalesOrder.YearWeek as sales_order_date_year_week)` |  |  |
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
| `ShipToParty` |  | |  | `cast(coalesce(ItemStandardPartner.ShipToParty, StandardPartner.ShipToParty) as kunwe)` |  |  |
| `ShipToPartyName` |  | |  | `cast(coalesce(ItemStandardPartner._ShipToParty.CustomerName, StandardPartner._ShipToParty.CustomerName ) as ship_to_name)` |  |  |
| `PayerParty` |  | |  | `cast(coalesce(ItemStandardPartner.PayerParty, StandardPartner.PayerParty) as kunrg)` |  |  |
| `PayerPartyName` |  | |  | `cast(coalesce(ItemStandardPartner._PayerParty.CustomerName, StandardPartner._PayerParty.CustomerName) as payer_name)` |  |  |
| `BillToParty` |  | |  | `cast(coalesce(ItemStandardPartner.BillToParty, StandardPartner.BillToParty) as kunre)` |  |  |
| `BillToPartyName` |  | |  | `cast(coalesce(ItemStandardPartner._BillToParty.CustomerName, StandardPartner._BillToParty.CustomerName) as bill_to_name)` |  |  |
| `ResponsibleEmployee` |  | |  | `cast(coalesce(ItemStandardPartner.ResponsibleEmployeeWorkAgrmt, StandardPartner.ResponsibleEmployeeWorkAgrmt) as resp_empl)` |  |  |
| `ResponsibleEmployeeName` |  | |  | `cast(coalesce(ItemStandardPartner._ResponsibleEmployee.PersonFullName, StandardPartner._ResponsibleEmployee.PersonFullName) as resp_empl_name)` |  |  |
| `SalesEmployee` |  | |  | `cast(coalesce(ItemStandardPartner.SalesEmployeeWorkAgreement, StandardPartner.SalesEmployeeWorkAgreement) as sales_empl)` |  |  |
| `SalesEmployeeName` |  | |  | `cast(coalesce(ItemStandardPartner._SalesEmployee.PersonFullName, StandardPartner._SalesEmployee.PersonFullName) as sales_empl_name)` |  |  |
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
| `TransactionCurrency` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  | `cast(:P_DisplayCurrency as vdm_v_display_currency)` |  |  |
| `NetAmountInDisplayCurrency` |  | |  | `cast (currency_conversion( amount => NetAmount, source_currency => SDIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as net_amount_in_dsp_crcy)` |  |  |
| `PricingDate` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `PriceDetnExchangeRate` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `NetPriceQuantityUnit` |  | |  |  |  |  |
| `StatisticalValueControl` |  | |  |  |  |  |
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
| `ExchangeRateType` |  | |  | `cast(ExchangeRateType as doc_exchange_rate_type preserving type )` |  |  |
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
| `WBSElementExternalID` |  | |  |  |  |  |
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
| `SlsDocItmSchdLnConfdQty` |  | |  |  |  |  |
| `SlsDocItmSchdLnDlydQty` |  | |  |  |  |  |
| `SlsDocItmSchdLnUnconfdQty` |  | |  |  |  |  |
| `SlsDocItmSchdLnConfdAmt` |  | |  |  |  |  |
| `SlsDocItmSchdLnDlydAmt` |  | |  |  |  |  |
| `SlsDocItmSchdLnUnconfdAmt` |  | |  |  |  |  |
| `AvgDelayOfSchdLnConfdToReqdDte` |  | |  |  |  |  |
| `TotDelayOfSchdLnConfdToReqdDte` |  | |  |  |  |  |
| `MaxDelayOfSchdLnConfdToReqdDte` |  | |  |  |  |  |
| `MinDelayOfSchdLnConfdToReqdDte` |  | |  |  |  |  |
| `SlsDocItmSchdLnConfdAmtInDC` |  | |  | `cast ( currency_conversion( amount => SlsDocItmSchdLnConfdAmt, source_currency => SDIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SalesDocumentDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as ovr_conf_so_sl_amt_idc)` |  |  |
| `SlsDocItmSchdLnDlydAmtInDC` |  | |  | `cast ( currency_conversion( amount => SlsDocItmSchdLnDlydAmt, source_currency => SDIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SalesDocumentDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as ovr_conf_delayed_so_sl_amt_idc)` |  |  |
| `SlsDocItmSchdLnUnconfdAmtInDC` |  | |  | `cast ( currency_conversion( amount => SlsDocItmSchdLnUnconfdAmt, source_currency => SDIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SalesDocumentDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as ovr_unconf_so_sl_amt_idc)` |  |  |
| `NmbrOfSlsDocItemsConfdAsReqd` |  | |  | `case when SlsDocItmSchdLnConfdQty = RequestedQuantityInBaseUnit then cast(1 as req_conf_so_itm_no) else cast(0 as req_conf_so_itm_no) end` |  |  |
| `NmbrOfSlsDocItemsConfdDlyd` |  | |  | `case when SlsDocItmSchdLnDlydQty != 0 and SlsDocItmSchdLnUnconfdQty = 0 then cast(1 as req_conf_delayed_so_itm_no) else cast(0 as req_conf_delayed_so_itm_no) end` |  |  |
| `NmbrOfSlsDocItemsConfdPrtly` |  | |  | `case when RequestedQuantityInBaseUnit > ConfdDeliveryQtyInBaseUnit and ConfdDeliveryQtyInBaseUnit != 0 then cast(1 as req_part_conf_so_itm_no) else cast(0 as req_part_conf_so_itm_no) end` |  |  |
| `NmbrOfSlsDocItemsUnconfd` |  | |  | `case when ConfdDeliveryQtyInBaseUnit = 0 then cast(1 as req_unconf_so_itm_no) else cast(0 as req_unconf_so_itm_no) end` |  |  |
| `SlsDocItmReqdDelivConfSts` |  | |  | `cast( case when SlsDocItmSchdLnConfdQty = RequestedQuantityInBaseUnit then '1' else (case when SlsDocItmSchdLnDlydQty != 0 and SlsDocItmSchdLnUnconfdQty = 0 then '2' else (case when RequestedQuantityInBaseUnit > ConfdDeliveryQtyInBaseUnit and ConfdDeliveryQtyInBaseUnit != 0 then '3' else '0' end) end) end as sls_ord_itm_conf_sts )` |  |  |
| `DelivBlockReasonForSchedLine` |  | |  | `cast(DelivBlockReasonForSchedLine as deliv_block_reason_schedline preserving type)` |  |  |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderType` | | ✓ | | | | |
| `_CustomerProject` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SoldToPartyClassification` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_SalesEmployee` | | ✓ | | | | |
| `_ResponsibleEmployee` | | ✓ | | | | |
| `_SalesEmployee_2` | | ✓ | | | | |
| `_ResponsibleEmployee_2` | | ✓ | | | | |
| `_SlsDocItmReqdDelivConfSts` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_ScheduleLine` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_ItemCategory` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
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
| `_TargetQuantityUnit` | | ✓ | | | | |
| `_ItemWeightUnit` | | ✓ | | | | |
| `_ItemVolumeUnit` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_SalesDeal` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_SalesDocumentRjcnReason` | | ✓ | | | | |
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
| `_DelivBlockReasonForSchedLine` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_SalesOrderType` | `I_SalesOrderType` | [0..1] |
| `_CustomerProject` | `I_EngagementProject` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_SoldToPartyClassification` | `I_CustomerClassification` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_BillToParty` | `I_Customer` | [0..1] |
| `_PayerParty` | `I_Customer` | [0..1] |
| `_SalesEmployee` | `I_Employee` | [0..1] |
| `_ResponsibleEmployee` | `I_Employee` | [0..1] |
| `_SalesEmployee_2` | `I_PersonWorkAgreement_1` | [0..1] |
| `_ResponsibleEmployee_2` | `I_PersonWorkAgreement_1` | [0..1] |
| `_SlsDocItmReqdDelivConfSts` | `I_SlsDocItmReqdDelivConfSts` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@EndUserText.label: 'Confirmation of Sales Orders - Cube'
@Analytics.dataCategory: #CUBE
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck:#CHECK
@AccessControl.privilegedAssociations: [ '_CreatedByUser' ]
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true --AT^2: 12.4.2019
@Metadata.allowExtensions: true
@AbapCatalog.sqlViewName: 'ISDSLSORDCONFC'
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_PROVIDER ,#CDS_MODELING_DATA_SOURCE ]

/////////////////////////////////////////////////////////////////////////
// IMPORTANT NOTE  (AT 16.5.2018)                                      //   
//                                                                     //                                               
// This model exposes abstracted business driven KPIs.                 //
//                                                                     //
// To achieve an acceptable performance, please consider to use        // 
// this model in a business suitable manner:                           //    
// - use only the minimal viable set of dimensions and KPIs            //
// - consider using filters, like salesOrganization, MaterialGroup,    //
//   Plant, TotalDeliveryStatus, CreationDate etc., that allow a       //
//   good focus on the relevant data                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////

define view I_SlsOrdConfAnalyticsCube
with parameters
  P_ExchangeRateType : kurst,
  P_DisplayCurrency  : vdm_v_display_currency
as select from I_SalesDocumentItemAnalytics as SDIA

left outer to one join I_UnitOfMeasure as UnitOfMeasure
  on SDIA.OrderQuantityUnit = UnitOfMeasure.UnitOfMeasure
left outer to one join I_SDDocStandardPartner as StandardPartner
  on SDIA.SalesDocument = StandardPartner.SDDocument
left outer to one join I_SDDocItemStandardPartner as ItemStandardPartner
  on SDIA.SalesDocument = ItemStandardPartner.SDDocument
    and SDIA.SalesDocumentItem = ItemStandardPartner.SDDocumentItem
left outer to one join I_CalendarDate as CalendarDate
  on SDIA.CreationDate = CalendarDate.CalendarDate
left outer to one join I_CalendarDate as CalendarDateSalesOrder
  on SDIA.SalesDocumentDate = CalendarDateSalesOrder.CalendarDate
// I_CustomerProjectItem has been replaced by I_EngagementProjectItem
left outer to one join I_EngagementProjectItem as CustomerProjectItem
  on  SDIA.SalesDocument = CustomerProjectItem.EngagementProjectItem
    and CustomerProjectItem.EngagementProjectItemType = '0SOH'

left outer to one join I_SalesDocumentScheduleLine as SL
  on SL.SalesDocument = SDIA.SalesDocument and SL.SalesDocumentItem = SDIA.SalesDocumentItem and SL.IsRequestedDelivSchedLine = 'X' and SL.DelivBlockReasonForSchedLine != ''

association [1..1] to I_SalesOrder as _SalesOrder
  on  $projection.SalesOrder = _SalesOrder.SalesOrder
association [0..1] to I_SalesOrderType as _SalesOrderType
  on  $projection.SalesOrderType = _SalesOrderType.SalesOrderType
// I_CustomerProject has been replaced by I_EngagementProject
association [0..1] to I_EngagementProject as _CustomerProject
  on $projection.CustomerProject = _CustomerProject.EngagementProject
association [0..1] to I_SalesOrganization as _SalesOrganization
  on $projection.SalesOrganization = _SalesOrganization.SalesOrganization
association [0..1] to I_CustomerClassification as _SoldToPartyClassification
  on $projection.SoldToPartyClassification = _SoldToPartyClassification.CustomerClassification
association [0..1] to I_Customer as _ShipToParty
  on $projection.ShipToParty = _ShipToParty.Customer
association [0..1] to I_Customer as _BillToParty
  on $projection.BillToParty = _BillToParty.Customer
association [0..1] to I_Customer as _PayerParty
  on $projection.PayerParty = _PayerParty.Customer
association [0..1] to I_Employee as _SalesEmployee  
  on $projection.SalesEmployee = _SalesEmployee.PersonnelNumber
association [0..1] to I_Employee as _ResponsibleEmployee
  on $projection.ResponsibleEmployee = _ResponsibleEmployee.PersonnelNumber
//AT19.08.2019 Adoption Employee Handling  -START-
association [0..1] to I_PersonWorkAgreement_1       as _SalesEmployee_2            
  on $projection.SalesEmployee = _SalesEmployee_2.PersonWorkAgreement
association [0..1] to I_PersonWorkAgreement_1       as _ResponsibleEmployee_2      
  on $projection.ResponsibleEmployee = _ResponsibleEmployee_2.PersonWorkAgreement
//AT19.08.2019 Adoption Employee Handling  -END-
association [0..1] to I_SlsDocItmReqdDelivConfSts as _SlsDocItmReqdDelivConfSts     
  on $projection.SlsDocItmReqdDelivConfSts = _SlsDocItmReqdDelivConfSts.SlsDocItmReqdDelivConfSts  
//association [0..1] to   I_Product             as _Product                  --AT25.10.2019: in meantime defined on layer below  
//  on  $projection.Product            = _Product.Product  

// AT^2: 12.4.19 these associations are used in annotations, but are not defined/reused from below  
//        Note: this means, we had and have some inconsistent annotations in this model (some foreign key annotation)
//association [0..*] to I_MaterialText                 as _MaterialText                  
//  on  $projection.Material = _MaterialText.Material  
//association [0..*] to I_MaterialText                 as _OrigMaterialText              
//  on  $projection.OriginallyRequestedMaterial = _OrigMaterialText.Material
// 
 
 association [0..1] to I_WBSElementByExternalID   as _WBSElementExternalID          on  $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID  --AT 26.10.2021 CE2111 into of WBSElementExternalID 
 
//Extensibility
association [0..1] to E_SalesDocumentItemBasic as _Extension    
                   on  $projection.SalesOrder    = _Extension.SalesDocument and $projection.SalesOrderItem = _Extension.SalesDocumentItem
{
  // Keys
  @ObjectModel.foreignKey.association: '_SalesOrder'
  key cast( SDIA.SalesDocument as vdm_sales_order preserving type ) as SalesOrder,
  _SalesOrder,
  key cast( SDIA.SalesDocumentItem as sales_order_item preserving type ) as SalesOrderItem,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _ScheduleLine,

  // Category
  @ObjectModel.foreignKey.association: '_SDDocumentCategory'
  SDDocumentCategory,
  _SDDocumentCategory,
  @ObjectModel.foreignKey.association: '_SalesOrderType'
  SalesDocumentType as SalesOrderType,
  _SalesOrderType,
  @ObjectModel.foreignKey.association: '_ItemCategory'
  cast(SalesDocumentItemCategory as sales_order_item_category preserving type) as  SalesOrderItemCategory,
  _ItemCategory,
  cast(SalesDocumentItemType as sales_order_item_type) as  SalesOrderItemType,
  cast(IsReturnsItem as returns_item_flag) as  IsReturnsItem,

  // Admin
  CreatedByUser,
  _CreatedByUser,
  cast(_CreatedByUser.UserDescription as  created_by_user_name preserving type ) as  CreatedByUserName, --AT9.10.2018
  @Semantics.systemDate.createdAt: true
  CreationDate,
  cast(CreationTime as creation_time) as  CreationTime,
  @Semantics.calendar.year
  cast(CalendarDate.CalendarYear as creation_date_year) as  CreationDateYear,
  @Semantics.calendar.yearQuarter
  cast(CalendarDate.YearQuarter as creation_date_year_quarter) as  CreationDateYearQuarter,
  @Semantics.calendar.yearMonth
  cast(CalendarDate.YearMonth as creation_date_year_month) as  CreationDateYearMonth,
  @Semantics.systemDate.lastChangedAt: true
  LastChangeDate,

  @Semantics.calendar.year
  cast(CalendarDateSalesOrder.CalendarYear as sales_order_date_year) as  SalesOrderDateYear,
  @Semantics.calendar.yearQuarter
  cast(CalendarDateSalesOrder.YearQuarter as sales_order_date_year_quarter) as  SalesOrderDateYearQuarter,
  @Semantics.calendar.yearMonth
  cast(CalendarDateSalesOrder.YearMonth as sales_order_date_year_month) as  SalesOrderDateYearMonth,
  @Semantics.calendar.yearWeek
  cast(CalendarDateSalesOrder.YearWeek as sales_order_date_year_week) as SalesOrderDateYearWeek,

  // Orgnization
  @ObjectModel.foreignKey.association: '_SalesOrganization'
  SalesOrganization,
  _SalesOrganization,
  @ObjectModel.foreignKey.association: '_DistributionChannel'
  DistributionChannel,
  _DistributionChannel,
  @ObjectModel.foreignKey.association: '_OrganizationDivision'
  cast(OrganizationDivision as organization_division preserving type ) as  OrganizationDivision,
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
--CE2111 AT BK intro of dimension TradingPartner
  @Analytics.internalName: #LOCAL      
  @ObjectModel.foreignKey.association:'_GlobalCompany'
  SDIA._SoldToParty.TradingPartner as PartnerCompany, 
  SDIA._SoldToParty._GlobalCompany,


  // Product
  --CE1808: will probably deprecated, kept for existing apps (that can't be changed on short notice)
  @ObjectModel.foreignKey.association: '_Material'
  @API.element.releaseState: #DEPRECATED            --AT25.10.2019  
  @API.element.successor: 'Product'                 --AT25.10.2019
//  @ObjectModel.text.association: '_MaterialText'  "AT^2 13.5.2019 not used in cube
//  @Consumption.valueHelpDefinition: [             "AT^2 13.5.2019 not used in cube 
//        { entity:  { name:    'I_MaterialStdVH',
//                     element: 'Material' }
//        }]
  Material,
  @API.element.releaseState: #DEPRECATED            --AT25.10.2019
  @API.element.successor: '_Product'                --AT25.10.2019
  _Material,
  
  --CE1808: released alternative to Material
  @ObjectModel.foreignKey.association: '_Product'   
//  cast( Material as productnumber preserving type ) as Product,    --AT25.10.2019: in meantime defined one level below 
  Product,
  _Product,
  @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
//  @ObjectModel.text.association: '_OrigMaterialText' --AT^2 13.5.2019 not used in cube
//   @Consumption.valueHelpDefinition: [               --AT^2 13.5.2019 not used in cube
//        { entity:  { name:    'I_MaterialStdVH',
//                     element: 'Material' }
//        }]
  OriginallyRequestedMaterial,
  _OriginallyRequestedMaterial,
  
  MaterialByCustomer,
  InternationalArticleNumber,
  @Analytics.internalName: #LOCAL                  --AT:   27.5.2019 since considered as newly added foreign key association
  @ObjectModel.foreignKey.association: '_Batch'    --AT^2: 13.5.2019 explicitley added after ignorepropagation true
//  @Consumption.valueHelpDefinition: [            --AT^2: 13.5.2019 not used in cube
//        { entity:  { name:    'I_BatchStdVH',
//                     element: 'Batch' },
//          additionalBinding: [{ localElement: 'Plant',
//                                element: 'Plant' },
//                              { localElement: 'Material',
//                                element: 'Material' }]
//        }]
  Batch,
  _Batch,                                          --AT^2: 13.5.2019 explicitley added after ignorepropagation true
  @ObjectModel.foreignKey.association: '_ProductHierarchyNode'
  ProductHierarchyNode,
  _ProductHierarchyNode,
  cast(ProductCatalog as product_catalog) as  ProductCatalog,
  @ObjectModel.foreignKey.association: '_MaterialSubstitutionReason'
  MaterialSubstitutionReason,
  _MaterialSubstitutionReason,
  @ObjectModel.foreignKey.association: '_MaterialGroup'
  @API.element.releaseState: #DEPRECATED    --AT25.10.2019: ProductGroup added, MaterialGroup deprecated
  @API.element.successor: 'ProductGroup'         
  MaterialGroup,
  @API.element.releaseState: #DEPRECATED
  @API.element.successor: '_ProductGroup'
  _MaterialGroup,
  @ObjectModel.foreignKey.association: '_ProductGroup'
  @Analytics.internalName: #LOCAL
  ProductGroup,
  @Analytics.internalName: #LOCAL
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
  _Plant.PlantName    as  ProductionPlantName,
  @ObjectModel.foreignKey.association: '_StorageLocation'
  StorageLocation,
  _StorageLocation,
  @Semantics.text: true
  _StorageLocation.StorageLocationName,
  cast(ProductConfiguration as product_configuration) as  ProductConfiguration,
  
  
  //BoM
  MainItemPricingRefProduct,
  BillOfMaterial,
  PropagatePrftbltySgmt2BOM,
  CostDeterminationIsRequired, 

  // Sales
  @ObjectModel.foreignKey.association: '_SoldToParty'    --AT^2 13.5.2019 not used in cube
//        @Consumption.valueHelpDefinition: [            --AT^2 13.5.2019 not used in cube
//        { entity:  { name:    'I_Customer_VH',
//                     element: 'Customer' }
//        }]
  SDIA.SoldToParty,
  SDIA._SoldToParty,
  @ObjectModel.foreignKey.association: '_SoldToPartyClassification'
  SDIA._SoldToParty.CustomerClassification as  SoldToPartyClassification,
  _SoldToPartyClassification,                                                                                                                                                
  cast(SDIA._SoldToParty.CustomerName as vdm_sold_to_name) as  SoldToPartyName,
  @ObjectModel.foreignKey.association: '_ShipToParty'
  cast(coalesce(ItemStandardPartner.ShipToParty, StandardPartner.ShipToParty) as kunwe) as  ShipToParty,
  _ShipToParty,
  cast(coalesce(ItemStandardPartner._ShipToParty.CustomerName, StandardPartner._ShipToParty.CustomerName ) as ship_to_name) as  ShipToPartyName,
  @ObjectModel.foreignKey.association: '_PayerParty'
  cast(coalesce(ItemStandardPartner.PayerParty, StandardPartner.PayerParty) as kunrg) as  PayerParty,
  _PayerParty,
  cast(coalesce(ItemStandardPartner._PayerParty.CustomerName, StandardPartner._PayerParty.CustomerName) as payer_name) as  PayerPartyName,
  @ObjectModel.foreignKey.association: '_BillToParty'
  cast(coalesce(ItemStandardPartner.BillToParty, StandardPartner.BillToParty) as kunre) as  BillToParty,
  _BillToParty,
  cast(coalesce(ItemStandardPartner._BillToParty.CustomerName, StandardPartner._BillToParty.CustomerName) as bill_to_name) as  BillToPartyName,
  
//AT19.08.2019 Adoption Employee Handling  -START-
// @ObjectModel.foreignKey.association: '_ResponsibleEmployee'
//  cast(COALESCE(ItemStandardPartner.ResponsibleEmployee, StandardPartner.ResponsibleEmployee) as resp_empl) as  ResponsibleEmployee,
//  _ResponsibleEmployee,

//  cast(COALESCE(ItemStandardPartner._ResponsibleEmployee.EmployeeFullName, StandardPartner._ResponsibleEmployee.EmployeeFullName) as resp_empl_name) as  ResponsibleEmployeeName,
//  @ObjectModel.foreignKey.association: '_SalesEmployee'
//  cast(COALESCE(ItemStandardPartner.SalesEmployee, StandardPartner.SalesEmployee) as sales_empl) as  SalesEmployee,
//  _SalesEmployee,
//  cast(COALESCE(ItemStandardPartner._SalesEmployee.EmployeeFullName, StandardPartner._SalesEmployee.EmployeeFullName) as sales_empl_name) as  SalesEmployeeName,

  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_ResponsibleEmployee_2'
  cast(coalesce(ItemStandardPartner.ResponsibleEmployeeWorkAgrmt, StandardPartner.ResponsibleEmployeeWorkAgrmt) as resp_empl) as  ResponsibleEmployee,
  _ResponsibleEmployee_2,
  @API.element.releaseState: #DEPRECATED
  @API.element.successor: '_ResponsibleEmployee_2'
  _ResponsibleEmployee,
  cast(coalesce(ItemStandardPartner._ResponsibleEmployee.PersonFullName, StandardPartner._ResponsibleEmployee.PersonFullName) as resp_empl_name) as  ResponsibleEmployeeName,
  
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_SalesEmployee_2'
  cast(coalesce(ItemStandardPartner.SalesEmployeeWorkAgreement, StandardPartner.SalesEmployeeWorkAgreement) as sales_empl) as  SalesEmployee,
  _SalesEmployee_2,
  @API.element.releaseState: #DEPRECATED
  @API.element.successor: '_SalesEmployee_2'
  _SalesEmployee,
  cast(coalesce(ItemStandardPartner._SalesEmployee.PersonFullName, StandardPartner._SalesEmployee.PersonFullName) as sales_empl_name) as  SalesEmployeeName,
//AT19.08.2019 Adoption Employee Handling  -END-

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
//  @Consumption.valueHelpDefinition: [                     --AT^2 13.5.2019 not used in cube
//        { entity:  { name:    'I_CreditControlAreaStdVH',
//                     element: 'CreditControlArea' }
//        }]
//  @ObjectModel.text.association: '_CreditControlAreaText' --AT^2 13.5.2019 not used in cube
  CreditControlArea,
  _CreditControlArea,
  cast(CustomerRebateAgreement as customer_rebate_agreement) as  CustomerRebateAgreement,
  SalesDocumentDate as  SalesOrderDate,
  @ObjectModel.foreignKey.association: '_SDDocumentReason'
  SDDocumentReason,
  _SDDocumentReason,
  SDDocumentCollectiveNumber,
  @Analytics.internalName: #LOCAL                                   --AT:   27.5.2019 since considered as newly added foreign key association
  @ObjectModel.foreignKey.association: '_CustomerPurchaseOrderType' --AT^2: 13.5.2019 explicitley added after ignorepropagation true
  CustomerPurchaseOrderType,
  _CustomerPurchaseOrderType,                                       --AT^2: 13.5.2019 explicitley added after ignorepropagation true
  CustomerPurchaseOrderDate,
  CustomerPurchaseOrderSuplmnt,
  cast(SalesDocumentItemText as sales_order_item_text) as  SalesOrderItemText,
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
  SDIA.OrderQuantityUnit,
  SDIA._OrderQuantityUnit,

  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  ConfdDeliveryQtyInBaseUnit,

  @Semantics.unitOfMeasure: true
  @ObjectModel.foreignKey.association: '_BaseUnit'
  SDIA.BaseUnit,
  SDIA._BaseUnit,

  SDIA.OrderToBaseQuantityDnmntr,
  SDIA.OrderToBaseQuantityNmrtr,

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
//  @Consumption.valueHelpDefinition: [       --AT^2 13.5.2019 not used in cube
//        { entity:  { name:    'I_SalesDealStdVH',
//                     element: 'SalesDeal' }
//        }]
  SalesDeal,
  _SalesDeal,
  cast(_SalesDeal.SalesDealDescription as sales_deal_description) as  SalesDealDescription,
  cast(SalesPromotion as sales_promotion) as  SalesPromotion,
  cast(RetailPromotion as retail_promotion) as  RetailPromotion,
  @ObjectModel.foreignKey.association: '_CustomerGroup'
  CustomerGroup,
  _CustomerGroup,
  @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
  SalesDocumentRjcnReason,
  _SalesDocumentRjcnReason,

  // Quotation
  ItemOrderProbabilityInPercent,

  // Contract
  --@Aggregation.default:#NOP           --AT test 24.1.2019 
  UnitOfMeasure.UnitOfMeasureDspNmbrOfDcmls as OrderQuantityUnitDcmls,

  // Pricing
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  TotalNetAmount,

  cast(SalesDocumentCondition as sales_order_condition) as  SalesOrderCondition,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  NetAmount,

  @Semantics.currencyCode: true
  @ObjectModel.foreignKey.association: '_TransactionCurrency'
  SDIA.TransactionCurrency,
  SDIA._TransactionCurrency,

  @Semantics.currencyCode: true
  cast(:P_DisplayCurrency as vdm_v_display_currency) as  DisplayCurrency,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast (currency_conversion(
    amount => NetAmount,
    source_currency => SDIA.TransactionCurrency,
    target_currency => :P_DisplayCurrency,
    exchange_rate_date => CreationDate,
    exchange_rate_type => :P_ExchangeRateType,
    error_handling => 'FAIL_ON_ERROR',
    round => #CDSBoolean.true,
    decimal_shift => #CDSBoolean.true,
    decimal_shift_back => #CDSBoolean.true
  ) as net_amount_in_dsp_crcy) as  NetAmountInDisplayCurrency,

  PricingDate,
  ExchangeRateDate,
  --@Aggregation.default:#NOP           --AT test 24.1.2019 
  PriceDetnExchangeRate,

  --@DefaultAggregation: #NONE        --AT 3.6.2019: according RSRTS_ODP_DIS "not included" when used like this - fix with NOP
  @Aggregation.default:  #NOP         --AT 3.6.2019:  fixed with NOP
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  NetPriceAmount,

  @DefaultAggregation: #NONE
  @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
  NetPriceQuantity,

  @Semantics.unitOfMeasure: true
  @ObjectModel.foreignKey.association: '_NetPriceQuantityUnit'
  NetPriceQuantityUnit,
  _NetPriceQuantityUnit,

  @ObjectModel.foreignKey.association: '_StatisticalValueControl'
  StatisticalValueControl,
  _StatisticalValueControl,
  --@EndUserText.label: 'StatisticalValue - deprecated'
  --@ObjectModel.foreignKey.association: null
  --StatisticalValueControl as StatisticalValue,
  
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
  SDIA.RequestedDeliveryDate,
  @ObjectModel.foreignKey.association: '_ShippingCondition'
  ShippingCondition,
  _ShippingCondition,
  CompleteDeliveryIsDefined,
  @ObjectModel.foreignKey.association: '_DeliveryBlockReason'
  DeliveryBlockReason,
  _DeliveryBlockReason,
  @ObjectModel.foreignKey.association: '_ShippingPoint'
//  @ObjectModel.text.association: '_ShippingPointText' --AT^2 13.5.2019 not used in cube
//  @Consumption.valueHelpDefinition: [                 --AT^2 13.5.2019 not used in cube
//        { entity:  { name:    'I_ShippingPointStdVH',
//                     element: 'ShippingPoint' }
//        }]
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
  cast(DeliveryDateQuantityIsFixed as fixed_delivery_date_quantity) as  DeliveryDateQuantityIsFixed,
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_PartialDeliveryItem'  --AT^2: 13.5.2019 explicitley added after ignorepropagation true
  PartialDeliveryIsAllowed,
  _PartialDeliveryItem,                                        --AT^2: 13.5.2019 explicitley added after ignorepropagation true
  MaxNmbrOfPartialDelivery,
  UnlimitedOverdeliveryIsAllowed,
  --@Aggregation.default:#NOP           --AT test 24.1.2019 
  OverdelivTolrtdLmtRatioInPct,
  --@Aggregation.default:#NOP           --AT test 24.1.2019 
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
  SDIA.ItemIsDeliveryRelevant,

  // Billing
  @ObjectModel.foreignKey.association: '_BillingCompanyCode'
//  @Consumption.valueHelpDefinition: [               --AT^2 13.5.2019 not used in cube
//        { entity:  { name:    'I_CompanyCodeStdVH',
//                     element: 'CompanyCode' }
//        }]
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
  cast(ItemBillingBlockReason as billing_block_reason_item preserving type) as  ItemBillingBlockReason,
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
  CustomerProjectItem.EngagementProject as  CustomerProject,
  _CustomerProject,

  // Accounting
  @ObjectModel.foreignKey.association: '_ExchangeRateType'
  cast(ExchangeRateType as doc_exchange_rate_type preserving type ) as ExchangeRateType,
  _ExchangeRateType,
  @ObjectModel.foreignKey.association: '_CostCenterBusinessArea'
  cast(CostCenterBusinessArea as business_area_cost_center preserving type) as  CostCenterBusinessArea,
  _CostCenterBusinessArea,
  CostCenter,
  _CostCenter,
  @ObjectModel.foreignKey.association: '_ControllingArea'
//  @Consumption.valueHelpDefinition: [               --AT^2 13.5.2019 not used in cube
//        { entity:  { name:    'I_ControllingAreaStdVH',
//                     element: 'ControllingArea' }
//        }]
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
//  @ObjectModel.text.association: '_BusinessAreaText' --AT^2 13.5.2019 not used in cube
//  @Consumption.valueHelpDefinition: [                --AT^2 13.5.2019 not used in cube
//        { entity:  { name:    'I_BusinessAreaStdVH',
//                     element: 'BusinessArea' }
//        }]
  BusinessArea,
  _BusinessArea,
  ProfitCenter,
  @API.element.releaseState: #DEPRECATED
  @API.element.successor:    'WBSElementInternalID'
  WBSElement,
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_WBSElementBasicData_2' --AT 26.10.2021 CE2202 fk added
  WBSElementInternalID,
  _WBSElementBasicData_2,
  @Analytics.internalName: #LOCAL                        --AT 26.10.2021 CE2202 into of WBSElementExternalID 
  @ObjectModel.foreignKey.association: '_WBSElementExternalID'   
  SDIA._WBSElementBasicData_2.WBSElementExternalID                              as WBSElementExternalID,
  _WBSElementExternalID,
  
  SDIA.OrderID,
  cast(ControllingObject as controlling_object) as  ControllingObject,
  
  --ProfitabilitySegment,  --AT14.04.2021 Deprecation of ProfitabilitySegment (Email Rene de V.)
  @API.element.releaseState: #DECOMMISSIONED
  @API.element.successor:    'ProfitabilitySegment_2'
  ProfitabilitySegment,
  @Analytics.internalName: #LOCAL
  ProfitabilitySegment_2,
  
  OriginSDDocument,
  cast(OriginSDDocumentItem as origin_sd_document_item) as  OriginSDDocumentItem,

  // Reference
  @Analytics.internalName: #LOCAL                                 --AT:   27.5.2019 since considered as newly added foreign key association
  @ObjectModel.foreignKey.association: '_ReferenceSDDocument'     --AT^2: 13.5.2019 explicitley added after ignorepropagation true
  ReferenceSDDocument,
  _ReferenceSDDocument,
  @Analytics.internalName: #LOCAL                                 --AT:   27.5.2019 since considered as newly added foreign key association
  @ObjectModel.foreignKey.association: '_ReferenceSDDocumentItem' --AT^2: 13.5.2019 explicitley added after ignorepropagation true
  ReferenceSDDocumentItem,
  _ReferenceSDDocumentItem,
  @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
  ReferenceSDDocumentCategory,
  _ReferenceSDDocumentCategory,
  HigherLevelItem,
  
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_SolutionOrder'
  SDIA.BusinessSolutionOrder,  --AT15.05.2020 Solution Order References Added
  SDIA._SolutionOrder,
//  @Analytics.internalName: #LOCAL
//  @ObjectModel.foreignKey.association: '_SolutionOrderItem' 
//  SDIA.BusinessSolutionOrderItem, --AT4.6.2020 ignore Item Reference due to framework problems
//  SDIA._SolutionOrderItem,

  // Status
  @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
  cast(OverallSDProcessStatus as overall_sd_process_status preserving type) as  OverallSDProcessStatus,
  _OverallSDProcessStatus,
  @ObjectModel.foreignKey.association: '_OverallPurchaseConfStatus'
  cast(OverallPurchaseConfStatus as overall_purchase_conf_status preserving type) as  OverallPurchaseConfStatus,
  _OverallPurchaseConfStatus,
  @ObjectModel.foreignKey.association: '_OverallSDDocumentRejectionSts'
  cast(OverallSDDocumentRejectionSts as ovrl_sd_doc_rejection_status preserving type) as  OverallSDDocumentRejectionSts,
  _OverallSDDocumentRejectionSts,
  @ObjectModel.foreignKey.association: '_TotalBlockStatus'
  TotalBlockStatus,
  _TotalBlockStatus,
  @ObjectModel.foreignKey.association: '_OverallDelivConfStatus'
  cast(OverallDelivConfStatus as overall_delivery_conf_status preserving type) as  OverallDelivConfStatus,
  _OverallDelivConfStatus,
  @ObjectModel.foreignKey.association: '_OverallTotalDeliveryStatus'
  cast(OverallTotalDeliveryStatus as itms_ovrl_delivery_status preserving type) as  OverallTotalDeliveryStatus,
  _OverallTotalDeliveryStatus,
  @ObjectModel.foreignKey.association: '_OverallDeliveryStatus'
  cast(OverallDeliveryStatus as overall_delivery_status preserving type) as  OverallDeliveryStatus,
  _OverallDeliveryStatus,
  @ObjectModel.foreignKey.association: '_OverallDeliveryBlockStatus'
  cast(OverallDeliveryBlockStatus as overall_delivery_block_status preserving type) as  OverallDeliveryBlockStatus,
  _OverallDeliveryBlockStatus,
  @ObjectModel.foreignKey.association: '_OverallOrdReltdBillgStatus'
  cast(OverallOrdReltdBillgStatus as ovrl_ord_rel_billg_status preserving type) as OverallOrdReltdBillgStatus,
  _OverallOrdReltdBillgStatus,
  @ObjectModel.foreignKey.association: '_OverallBillingBlockStatus'
  cast(OverallBillingBlockStatus as overall_billing_block_status preserving type) as  OverallBillingBlockStatus,
  _OverallBillingBlockStatus,
  @ObjectModel.foreignKey.association: '_OverallTotalSDDocRefStatus'
  cast(OverallTotalSDDocRefStatus as ovrl_reference_status preserving type) as OverallTotalSDDocRefStatus,
  _OverallTotalSDDocRefStatus,
  @ObjectModel.foreignKey.association: '_OverallSDDocReferenceStatus'
  cast(OverallSDDocReferenceStatus as ovrl_sd_doc_reference_status preserving type) as  OverallSDDocReferenceStatus,
  _OverallSDDocReferenceStatus,
  @ObjectModel.foreignKey.association: '_TotalCreditCheckStatus'
  TotalCreditCheckStatus,
  _TotalCreditCheckStatus,
  @ObjectModel.foreignKey.association: '_MaxDocValueCreditCheckStatus'
  MaxDocValueCreditCheckStatus,
  _MaxDocValueCreditCheckStatus,
  @ObjectModel.foreignKey.association: '_PaymentTermCreditCheckStatus'
  cast(PaymentTermCreditCheckStatus as payt_terms_credit_check_status preserving type) as  PaymentTermCreditCheckStatus,
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
  cast(CentralCreditCheckStatus as central_credit_check_status preserving type) as  CentralCreditCheckStatus,
  _CentralCreditCheckStatus,
  @ObjectModel.foreignKey.association: '_CentralCreditChkTechErrSts'
  cast(CentralCreditChkTechErrSts as centrl_crdt_chck_tech_err_sts preserving type) as  CentralCreditChkTechErrSts,
  _CentralCreditChkTechErrSts,
  @ObjectModel.foreignKey.association: '_HdrGeneralIncompletionStatus'
  cast(HdrGeneralIncompletionStatus as hdr_general_incompltn_status preserving type) as  HdrGeneralIncompletionStatus,
  _HdrGeneralIncompletionStatus,
  @ObjectModel.foreignKey.association: '_OverallPricingIncompletionSts'
  cast(OverallPricingIncompletionSts as ovrl_pricing_incompletion_sts preserving type) as  OverallPricingIncompletionSts,
  _OverallPricingIncompletionSts,
  @ObjectModel.foreignKey.association: '_HeaderDelivIncompletionStatus'
  cast(HeaderDelivIncompletionStatus as hdrdelivincompletionstatus preserving type ) as HeaderDelivIncompletionStatus,
  _HeaderDelivIncompletionStatus,
  @ObjectModel.foreignKey.association: '_HeaderBillgIncompletionStatus'
  cast(HeaderBillgIncompletionStatus as hdrbillgincompletionstatus preserving type ) as HeaderBillgIncompletionStatus,
  _HeaderBillgIncompletionStatus,
  @ObjectModel.foreignKey.association: '_OvrlItmGeneralIncompletionSts'
  cast(OvrlItmGeneralIncompletionSts as itms_ovrl_incompletion_status preserving type) as  OvrlItmGeneralIncompletionSts,
  _OvrlItmGeneralIncompletionSts,
  @ObjectModel.foreignKey.association: '_OvrlItmBillingIncompletionSts'
  cast(OvrlItmBillingIncompletionSts as ovrl_itms_incompltn_sts_billg preserving type) as  OvrlItmBillingIncompletionSts,
  _OvrlItmBillingIncompletionSts,
  @ObjectModel.foreignKey.association: '_OvrlItmDelivIncompletionSts'
  cast(OvrlItmDelivIncompletionSts as ovrl_items_dlv_incompltn_sts preserving type) as  OvrlItmDelivIncompletionSts,
  _OvrlItmDelivIncompletionSts,
  @ObjectModel.foreignKey.association: '_SDProcessStatus'
  cast(SDProcessStatus as sd_doc_process_status preserving type) as  SDProcessStatus,
  _SDProcessStatus,
  @ObjectModel.foreignKey.association: '_DeliveryConfirmationStatus'
  cast(DeliveryConfirmationStatus as delivery_confirmation_status preserving type) as  DeliveryConfirmationStatus,
  _DeliveryConfirmationStatus,
  @ObjectModel.foreignKey.association: '_PurchaseConfirmationStatus'
  cast(PurchaseConfirmationStatus as purchase_confirmation_status preserving type) as  PurchaseConfirmationStatus,
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
  cast(ItemGeneralIncompletionStatus as item_general_incompletion_sts preserving type) as  ItemGeneralIncompletionStatus,
  _ItemGeneralIncompletionStatus,
  @ObjectModel.foreignKey.association: '_ItemBillingIncompletionStatus'
  cast(ItemBillingIncompletionStatus as itms_incompltn_sts_billg preserving type) as  ItemBillingIncompletionStatus,
  _ItemBillingIncompletionStatus,
  @ObjectModel.foreignKey.association: '_PricingIncompletionStatus'
  cast(PricingIncompletionStatus as pricing_incompletion_status preserving type) as  PricingIncompletionStatus,
  _PricingIncompletionStatus,
  @ObjectModel.foreignKey.association: '_ItemDelivIncompletionSts'
  cast(ItemDeliveryIncompletionStatus as itm_deliv_incompletion_status preserving type) as  ItemDeliveryIncompletionStatus,
  _ItemDelivIncompletionSts,
  @ObjectModel.foreignKey.association: '_SDDocumentRejectionStatus'
  cast(SDDocumentRejectionStatus as sd_doc_rejection_status preserving type) as  SDDocumentRejectionStatus,
  _SDDocumentRejectionStatus,
  @ObjectModel.foreignKey.association: '_TotalSDDocReferenceStatus'
  TotalSDDocReferenceStatus,
  _TotalSDDocReferenceStatus,
  
// KPI: Confirmation Info
  --Raw KPIs: Quantities
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'    
  SlsDocItmSchdLnConfdQty,   --Quantity Confirmed In Time (CiTQ)
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit' 
  SlsDocItmSchdLnDlydQty,    --Quantity Confirmed With Delay (CwDQ = CumCQ – CiTQ )
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  SlsDocItmSchdLnUnconfdQty, -- Quantity Not Confirmed   ( NCQ = CumReqQ – CumCQ )

  --Raw KPIs: Values/Amounts
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  SlsDocItmSchdLnConfdAmt,   --Value Confirmed in Time (CiTV = CiTV = GesamtWert * CiTQ / CumReqQ )
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  SlsDocItmSchdLnDlydAmt,    -- Value Confirmed With Delay (Ges.W. * CwDQ / CumReqQ)  
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  SlsDocItmSchdLnUnconfdAmt, -- Value Not Confirmed (Ges.W. * NCQ / CumReqQ)
   
  --Raw KPIs: Delays
  @DefaultAggregation: #AVG                         --AT 3.6.2019: according RSRT_ODP_DIS "not included" - so discarded to prevent misuse in queries --AT120609: took in again, as pragmatic/fast solution for F+ ATC
  AvgDelayOfSchdLnConfdToReqdDte,   --AvgDelay,
  @DefaultAggregation: #SUM 
  TotDelayOfSchdLnConfdToReqdDte,   --SumDelay ,
  @DefaultAggregation: #MAX 
  MaxDelayOfSchdLnConfdToReqdDte,   --MaxDelay ,
  @DefaultAggregation: #MIN 
  MinDelayOfSchdLnConfdToReqdDte,   --MINDelay    
   
   
   
  -- CurrencyConverted Value Confirmed in Time                                                                                                                                                                     as         DisplayCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast ( currency_conversion(
    amount => SlsDocItmSchdLnConfdAmt,
    source_currency => SDIA.TransactionCurrency,
    target_currency => :P_DisplayCurrency,
    exchange_rate_date => SalesDocumentDate,  -- check vbak-audat
    exchange_rate_type => :P_ExchangeRateType,
    error_handling => 'FAIL_ON_ERROR',
    round => #CDSBoolean.true,
    decimal_shift => #CDSBoolean.true,
    decimal_shift_back => #CDSBoolean.true
  ) as ovr_conf_so_sl_amt_idc)        
  as         SlsDocItmSchdLnConfdAmtInDC,

   -- CurrencyConverted Value Confirmed with Delay                                                                                                                                                                   as         DisplayCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast ( currency_conversion(
    amount => SlsDocItmSchdLnDlydAmt,
    source_currency => SDIA.TransactionCurrency,
    target_currency => :P_DisplayCurrency,
    exchange_rate_date => SalesDocumentDate,  -- check vbak-audat
    exchange_rate_type => :P_ExchangeRateType,
    error_handling => 'FAIL_ON_ERROR',
    round => #CDSBoolean.true,
    decimal_shift => #CDSBoolean.true,
    decimal_shift_back => #CDSBoolean.true
  ) as ovr_conf_delayed_so_sl_amt_idc)        
  as         SlsDocItmSchdLnDlydAmtInDC,
  
   -- CurrencyConverted Value Not Confirmed                                                                                                                                                                     as         DisplayCurrency,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  cast ( currency_conversion(
    amount => SlsDocItmSchdLnUnconfdAmt,
    source_currency => SDIA.TransactionCurrency,
    target_currency => :P_DisplayCurrency,
    exchange_rate_date => SalesDocumentDate,  -- check vbak-audat
    exchange_rate_type => :P_ExchangeRateType,
    error_handling => 'FAIL_ON_ERROR',
    round => #CDSBoolean.true,
    decimal_shift => #CDSBoolean.true,
    decimal_shift_back => #CDSBoolean.true
  ) as ovr_unconf_so_sl_amt_idc)        
  as         SlsDocItmSchdLnUnconfdAmtInDC,
  
 --Derived Number: Confirmed (Perfectly in quantity and time)
  @DefaultAggregation: #SUM
  case when SlsDocItmSchdLnConfdQty = RequestedQuantityInBaseUnit    --CiTQ = CumReqQ
  then cast(1  as req_conf_so_itm_no)   
  else cast(0  as req_conf_so_itm_no) 
  end as NmbrOfSlsDocItemsConfdAsReqd,    
 
 --Derived Number: Confirmed with delay (Completely in Quantities but with delay)
  @DefaultAggregation: #SUM
  case when SlsDocItmSchdLnDlydQty   != 0 and SlsDocItmSchdLnUnconfdQty = 0     --CwDQ > 0 and NCQ = 0
  then cast(1  as req_conf_delayed_so_itm_no)         
  else cast(0  as req_conf_delayed_so_itm_no)
  end as NmbrOfSlsDocItemsConfdDlyd,
  
  --Derived Number: Partially Confirmed (Partially in quantity)
  @DefaultAggregation: #SUM
  case when RequestedQuantityInBaseUnit > ConfdDeliveryQtyInBaseUnit and ConfdDeliveryQtyInBaseUnit != 0  --if CumReqQ > CumCQ and CumCq > 0
  then cast(1  as req_part_conf_so_itm_no) 
  else cast(0  as req_part_conf_so_itm_no)
  end  as NmbrOfSlsDocItemsConfdPrtly,          

  --Derived Number: Not Confirmed (not at all)
  @DefaultAggregation: #SUM
  case when  ConfdDeliveryQtyInBaseUnit = 0  --CumCQ = 0)
  then cast(1  as req_unconf_so_itm_no)                
  else cast(0  as req_unconf_so_itm_no)
  end as NmbrOfSlsDocItemsUnconfd ,
  
  //  Calculated dimension: 
    -- Sales Order Item Confirmation Status
  @ObjectModel.foreignKey.association: '_SlsDocItmReqdDelivConfSts'
  cast( 
  case when SlsDocItmSchdLnConfdQty = RequestedQuantityInBaseUnit
       then '1'            ---> 1 = Confirmed 
      else 
       (case when SlsDocItmSchdLnDlydQty != 0 and SlsDocItmSchdLnUnconfdQty = 0
             then '2'        --> 2 = Delayed
            else
            (case when RequestedQuantityInBaseUnit > ConfdDeliveryQtyInBaseUnit and ConfdDeliveryQtyInBaseUnit != 0
                  then '3'   --> 3 = Partially Confirmed
                 else  '0'   --> 0 = Not Confirmed
             end) 
        end)
   end as sls_ord_itm_conf_sts
       ) as SlsDocItmReqdDelivConfSts,
  
  @ObjectModel.foreignKey.association: '_DelivBlockReasonForSchedLine'
  cast(DelivBlockReasonForSchedLine as deliv_block_reason_schedline preserving type) as DelivBlockReasonForSchedLine,
  --DelivBlockReasonForSchedLine,
  _DelivBlockReasonForSchedLine,
  _SlsDocItmReqdDelivConfSts
  
}

where   -- redundant to core layer, but to improve performance
        OrderQuantity > 0  and 
        SDDocumentCategory != 'E' and SDDocumentCategory != 'F' and SDDocumentCategory != 'W' and SDDocumentCategory != 'D'
```
