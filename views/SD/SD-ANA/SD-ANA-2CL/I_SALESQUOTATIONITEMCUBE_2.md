---
name: I_SALESQUOTATIONITEMCUBE_2
description: Salesquotationitemcube 2
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
  - sales-quotation
  - item-level
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# I_SALESQUOTATIONITEMCUBE_2

**Salesquotationitemcube 2**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesQuotation` | ✓ | |  | `cast(SDIA.SalesDocument as sales_quotation preserving type)` |  |  |
| `SalesQuotationItem` | ✓ | |  | `cast(SDIA.SalesDocumentItem as sales_quotation_item preserving type)` |  |  |
| `SalesQuotationType` |  | |  | `SalesDocumentType` |  |  |
| `SalesQuotationItemType` |  | |  | `SalesDocumentItemType` |  |  |
| `SalesQuotationItemCategory` |  | |  | `SalesDocumentItemCategory` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `CreationDateYear` |  | |  | `cast(CalendarDate.CalendarYear as creation_date_year)` |  |  |
| `CreationDateYearQuarter` |  | |  | `cast(CalendarDate.YearQuarter as creation_date_year_quarter)` |  |  |
| `CreationDateYearMonth` |  | |  | `cast(CalendarDate.YearMonth as creation_date_year_month)` |  |  |
| `SalesQuotationDateYear` |  | |  | `cast(CalendarDateSalesQuotation.CalendarYear as sales_quotation_date_year)` |  |  |
| `SalesQuotationDateYearQuarter` |  | |  | `cast(CalendarDateSalesQuotation.YearQuarter as sales_qtan_date_year_quarter)` |  |  |
| `SalesQuotationDateYearMonth` |  | |  | `cast(CalendarDateSalesQuotation.YearMonth as sales_qtan_date_year_month)` |  |  |
| `BindingPeriodValidityStartDate` |  | |  |  |  |  |
| `BindingPeriodValidityEndDate` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  | `cast(SDIA.OrganizationDivision as organization_division preserving type)` |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `PartnerCompany` |  | |  | `TradingPartner` |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `SalesQuotationDate` |  | |  | `SalesDocumentDate` |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `RequestedDeliveryDate` |  | |  |  |  |  |
| `SalesQuotationItemText` |  | |  | `SalesDocumentItemText` |  |  |
| `SalesDocumentRjcnReason` |  | |  |  |  |  |
| `SlsQtanToOrdProbltyInPercent` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `CompleteDeliveryIsDefined` |  | |  |  |  |  |
| `DeliveryBlockReason` |  | |  |  |  |  |
| `ShippingPoint` |  | |  |  |  |  |
| `DeliveryPriority` |  | |  |  |  |  |
| `ShippingType` |  | |  |  |  |  |
| `Route` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `MaterialByCustomer` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `MainItemPricingRefProduct` |  | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `BillOfMaterial` |  | |  |  |  |  |
| `PropagatePrftbltySgmt2BOM` |  | |  |  |  |  |
| `CostDeterminationIsRequired` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `TaxAmount` |  | |  |  |  |  |
| `CostAmount` |  | |  |  |  |  |
| `Subtotal1Amount` |  | |  |  |  |  |
| `Subtotal2Amount` |  | |  |  |  |  |
| `Subtotal3Amount` |  | |  |  |  |  |
| `Subtotal4Amount` |  | |  |  |  |  |
| `Subtotal5Amount` |  | |  |  |  |  |
| `Subtotal6Amount` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  | `cast(:P_DisplayCurrency as vdm_v_display_currency)` |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `AdditionalValueDays` |  | |  |  |  |  |
| `BillingCompanyCode` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |  |  |
| `SalesQuotationNetAmount` |  | |  |  |  |  |
| `SalesQuotationNetAmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => SDIA.SalesQuotationNetAmount, source_currency => SDIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SDIA.CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as sales_qtan_net_amt_in_dsp_crcy )` |  |  |
| `CnvrtdSalesQuotationNetAmount` |  | |  |  |  |  |
| `CnvrtdSalesQtanNetAmtInDspCrcy` |  | |  | `cast( currency_conversion( amount => SDIA.CnvrtdSalesQuotationNetAmount, source_currency => SDIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SDIA.CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as cnvrtd_sls_qtan_net_amt_in_dc )` |  |  |
| `SalesQuotationQuantity` |  | |  |  |  |  |
| `NmbrOfOpenSlsQuotationItems` |  | |  |  |  |  |
| `SlsQuotationOpenNetAmount` |  | |  |  |  |  |
| `SlsQuotationOpenNetAmtInDC` |  | |  | `cast( currency_conversion( amount => SDIA.SlsQuotationOpenNetAmount, source_currency => SDIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SDIA.CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true) as opn_sls_qtans_net_amt_idc )` |  |  |
| `NmbrOfExpiredSlsQuotationItems` |  | |  | `cast( case when SDIA.BindingPeriodValidityEndDate > '00000000' and SDIA.BindingPeriodValidityEndDate <= $session.system_date then SDIA.NmbrOfOpenSlsQuotationItems end as nmbr_of_expired_sls_qtan_items )` |  |  |
| `SlsQuotationExpiredNetAmount` |  | |  | `cast( case when SDIA.BindingPeriodValidityEndDate > '00000000' and SDIA.BindingPeriodValidityEndDate <= $session.system_date then SDIA.SlsQuotationOpenNetAmount end as expired_sls_qtans_net_amt )` |  |  |
| `SlsQuotationExpiredNetAmtInDC` |  | |  | `cast( case when SDIA.BindingPeriodValidityEndDate > '00000000' and SDIA.BindingPeriodValidityEndDate <= $session.system_date then currency_conversion( amount => SDIA.SlsQuotationOpenNetAmount, source_currency => SDIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SDIA.CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) end as expired_sls_qtans_net_amt_idc )` |  |  |
| `NmbrOfExprgSlsQuotationItems` |  | |  | `cast( case when SDIA.BindingPeriodValidityEndDate > $session.system_date and SDIA.BindingPeriodValidityEndDate <= dats_add_days(SDIA.TodayDate, 7, 'FAIL') then SDIA.NmbrOfOpenSlsQuotationItems end as nmbr_of_exprg_sls_qtan_items )` |  |  |
| `SlsQuotationExpiringNetAmount` |  | |  | `cast( case when SDIA.BindingPeriodValidityEndDate > $session.system_date and SDIA.BindingPeriodValidityEndDate <= dats_add_days(SDIA.TodayDate, 7, 'FAIL') then SDIA.SlsQuotationOpenNetAmount end as exprg_sls_qtans_net_amt )` |  |  |
| `SlsQuotationExpiringNetAmtInDC` |  | |  | `cast( case when SDIA.BindingPeriodValidityEndDate > $session.system_date and SDIA.BindingPeriodValidityEndDate <= dats_add_days(SDIA.TodayDate, 7, 'FAIL') then currency_conversion( amount => SDIA.SlsQuotationOpenNetAmount, source_currency => SDIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SDIA.CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) end as exprg_sls_qtans_net_amt_idc )` |  |  |
| `NmbrOfRejectedSlsQtanItems` |  | |  |  |  |  |
| `SlsQtanRejectedNetAmount` |  | |  |  |  |  |
| `SlsQtanRejectedNetAmountInDC` |  | |  | `cast( currency_conversion( amount => SDIA.SlsQtanRejectedNetAmount, source_currency => SDIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SDIA.CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true) as rjctd_sls_qtans_net_amt_idc )` |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  | `cast(SDIA.OverallSDProcessStatus as overall_sd_process_status preserving type)` |  |  |
| `OverallSDDocumentRejectionSts` |  | |  | `cast(SDIA.OverallSDDocumentRejectionSts as ovrl_sd_doc_rejection_status preserving type)` |  |  |
| `TotalBlockStatus` |  | |  |  |  |  |
| `OverallDelivConfStatus` |  | |  | `cast(SDIA.OverallDelivConfStatus as overall_delivery_conf_status preserving type)` |  |  |
| `OverallTotalDeliveryStatus` |  | |  | `cast(SDIA.OverallTotalDeliveryStatus as itms_ovrl_delivery_status preserving type)` |  |  |
| `OverallDeliveryStatus` |  | |  | `cast(SDIA.OverallDeliveryStatus as overall_delivery_status preserving type)` |  |  |
| `OverallDeliveryBlockStatus` |  | |  | `cast(SDIA.OverallDeliveryBlockStatus as overall_delivery_block_status preserving type)` |  |  |
| `OverallOrdReltdBillgStatus` |  | |  | `cast(SDIA.OverallOrdReltdBillgStatus as ovrl_ord_rel_billg_status preserving type )` |  |  |
| `OverallBillingBlockStatus` |  | |  | `cast(SDIA.OverallBillingBlockStatus as overall_billing_block_status preserving type)` |  |  |
| `OverallTotalSDDocRefStatus` |  | |  | `cast(SDIA.OverallTotalSDDocRefStatus as ovrl_reference_status preserving type )` |  |  |
| `OverallSDDocReferenceStatus` |  | |  | `cast(SDIA.OverallSDDocReferenceStatus as ovrl_sd_doc_reference_status preserving type)` |  |  |
| `HdrGeneralIncompletionStatus` |  | |  | `cast(SDIA.HdrGeneralIncompletionStatus as hdr_general_incompltn_status preserving type)` |  |  |
| `HeaderDelivIncompletionStatus` |  | |  | `cast(SDIA.HeaderDelivIncompletionStatus as hdrdelivincompletionstatus preserving type )` |  |  |
| `HeaderBillgIncompletionStatus` |  | |  | `cast(SDIA.HeaderBillgIncompletionStatus as hdrbillgincompletionstatus preserving type )` |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  | `cast(SDIA.OvrlItmGeneralIncompletionSts as itms_ovrl_incompletion_status preserving type)` |  |  |
| `OvrlItmBillingIncompletionSts` |  | |  | `cast(SDIA.OvrlItmBillingIncompletionSts as ovrl_itms_incompltn_sts_billg preserving type)` |  |  |
| `OvrlItmDelivIncompletionSts` |  | |  | `cast(SDIA.OvrlItmDelivIncompletionSts as ovrl_items_dlv_incompltn_sts preserving type)` |  |  |
| `SDProcessStatus` |  | |  | `cast(SDIA.SDProcessStatus as sd_doc_process_status preserving type)` |  |  |
| `DeliveryConfirmationStatus` |  | |  | `cast(SDIA.DeliveryConfirmationStatus as delivery_confirmation_status preserving type)` |  |  |
| `TotalDeliveryStatus` |  | |  |  |  |  |
| `DeliveryStatus` |  | |  |  |  |  |
| `DeliveryBlockStatus` |  | |  |  |  |  |
| `OrderRelatedBillingStatus` |  | |  |  |  |  |
| `BillingBlockStatus` |  | |  |  |  |  |
| `ItemGeneralIncompletionStatus` |  | |  | `cast(SDIA.ItemGeneralIncompletionStatus as item_general_incompletion_sts preserving type)` |  |  |
| `ItemBillingIncompletionStatus` |  | |  | `cast(SDIA.ItemBillingIncompletionStatus as itms_incompltn_sts_billg preserving type)` |  |  |
| `ItemDeliveryIncompletionStatus` |  | |  | `cast(SDIA.ItemDeliveryIncompletionStatus as itm_deliv_incompletion_status preserving type)` |  |  |
| `SDDocumentRejectionStatus` |  | |  | `cast(SDIA.SDDocumentRejectionStatus as sd_doc_rejection_status preserving type)` |  |  |
| `TotalSDDocReferenceStatus` |  | |  |  |  |  |
| `PurchaseConfirmationStatus` |  | |  | `cast(SDIA.PurchaseConfirmationStatus as purchase_confirmation_status preserving type)` |  |  |
| `PricingIncompletionStatus` |  | |  | `cast(SDIA.PricingIncompletionStatus as pricing_incompletion_status preserving type)` |  |  |
| `_SalesQuotation` | | ✓ | | | | |
| `_SalesQuotationType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesQuotation` | `I_SalesQuotation` | [1..1] |
| `_SalesQuotationType` | `I_SalesQuotationType` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Quotation Item - Cube'
@VDM.viewType: #COMPOSITE
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDSLSQTANITMC2',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #L
   }
}
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities:
   [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true

define view I_SalesQuotationItemCube_2
  with parameters
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency
  as select from           I_SalesQuotationItemAnalytics as SDIA
    left outer to one join I_CalendarDate                as CalendarDate               on SDIA.CreationDate = CalendarDate.CalendarDate
    left outer to one join I_CalendarDate                as CalendarDateSalesQuotation on SDIA.SalesDocumentDate = CalendarDateSalesQuotation.CalendarDate

  //Association
  association [1..1] to I_SalesQuotation         as _SalesQuotation     on  $projection.SalesQuotation = _SalesQuotation.SalesQuotation
  association [0..1] to I_SalesQuotationType     as _SalesQuotationType on  $projection.SalesQuotationType = _SalesQuotationType.SalesQuotationType
  association [0..1] to I_Product                as _Product            on  $projection.Product = _Product.Product

  //Extensibility
  association [0..1] to E_SalesDocumentItemBasic as _Extension          on  SDIA.SalesDocument     = _Extension.SalesDocument
                                                                        and SDIA.SalesDocumentItem = _Extension.SalesDocumentItem
{
      //Key
      @ObjectModel.foreignKey.association: '_SalesQuotation'
  key cast(SDIA.SalesDocument as sales_quotation preserving type)                                as SalesQuotation,
      _SalesQuotation,
  key cast(SDIA.SalesDocumentItem as sales_quotation_item preserving type)                       as SalesQuotationItem,

      //Category
      @ObjectModel.foreignKey.association: '_SalesQuotationType'
      SDIA.SalesDocumentType                                                                     as SalesQuotationType,
      _SalesQuotationType,
      SDIA.SalesDocumentItemType                                                                 as SalesQuotationItemType,
      @ObjectModel.foreignKey.association: '_ItemCategory'
      SDIA.SalesDocumentItemCategory                                                             as SalesQuotationItemCategory,
      SDIA._ItemCategory,

      //Admin
      SDIA.CreatedByUser,
      SDIA._CreatedByUser,
      @Semantics.systemDate.createdAt: true
      SDIA.CreationDate,
      SDIA.CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      SDIA.LastChangeDate,
      @Semantics.calendar.year
      cast(CalendarDate.CalendarYear as creation_date_year)                                      as CreationDateYear,
      @Semantics.calendar.yearQuarter
      cast(CalendarDate.YearQuarter as creation_date_year_quarter)                               as CreationDateYearQuarter,
      @Semantics.calendar.yearMonth
      cast(CalendarDate.YearMonth as creation_date_year_month)                                   as CreationDateYearMonth,
      @Semantics.calendar.year
      cast(CalendarDateSalesQuotation.CalendarYear as sales_quotation_date_year)                 as SalesQuotationDateYear,
      @Semantics.calendar.yearQuarter
      cast(CalendarDateSalesQuotation.YearQuarter as sales_qtan_date_year_quarter)               as SalesQuotationDateYearQuarter,
      @Semantics.calendar.yearMonth
      cast(CalendarDateSalesQuotation.YearMonth as sales_qtan_date_year_month)                   as SalesQuotationDateYearMonth,

      //Quotation
      SDIA.BindingPeriodValidityStartDate,
      SDIA.BindingPeriodValidityEndDate,

      //Organization
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SDIA.SalesOrganization,
      SDIA._SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      SDIA.DistributionChannel,
      SDIA._DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      cast(SDIA.OrganizationDivision as organization_division preserving type)                   as OrganizationDivision,
      SDIA._OrganizationDivision,
      @ObjectModel.foreignKey.association: '_Division'
      SDIA.Division,
      SDIA._Division,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SDIA.SalesOffice,
      SDIA._SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SDIA.SalesGroup,
      SDIA._SalesGroup,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association:'_GlobalCompany'
      SDIA._SoldToParty.TradingPartner as PartnerCompany,
      SDIA._SoldToParty._GlobalCompany,

      //Sales
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SDIA.SoldToParty,
      SDIA._SoldToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      SDIA.ShipToParty,
      SDIA._ShipToParty,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      SDIA.CustomerGroup,
      SDIA._CustomerGroup,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      SDIA.AdditionalCustomerGroup1,
      SDIA._AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      SDIA.AdditionalCustomerGroup2,
      SDIA._AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      SDIA.AdditionalCustomerGroup3,
      SDIA._AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      SDIA.AdditionalCustomerGroup4,
      SDIA._AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      SDIA.AdditionalCustomerGroup5,
      SDIA._AdditionalCustomerGroup5,
      SalesDocumentDate                                                                          as SalesQuotationDate,
      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      SDIA.SDDocumentReason,
      SDIA._SDDocumentReason,
      SDIA.CustomerPurchaseOrderType,
      SDIA.PurchaseOrderByCustomer,
      SDIA.CustomerPurchaseOrderDate,
      SDIA.RequestedDeliveryDate,
      SDIA.SalesDocumentItemText                                                                 as SalesQuotationItemText,
      @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
      SDIA.SalesDocumentRjcnReason,
      SDIA._SalesDocumentRjcnReason,
      SDIA.SlsQtanToOrdProbltyInPercent,

      //Shipping
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      SDIA.ShippingCondition,
      SDIA._ShippingCondition,
      SDIA.CompleteDeliveryIsDefined,
      @ObjectModel.foreignKey.association: '_DeliveryBlockReason'
      SDIA.DeliveryBlockReason,
      SDIA._DeliveryBlockReason,
      @ObjectModel.foreignKey.association: '_ShippingPoint'
      SDIA.ShippingPoint,
      SDIA._ShippingPoint,
      @ObjectModel.foreignKey.association: '_DeliveryPriority'
      SDIA.DeliveryPriority,
      SDIA._DeliveryPriority,
      @ObjectModel.foreignKey.association: '_ShippingType'
      SDIA.ShippingType,
      SDIA._ShippingType,
      SDIA.Route,

      //Product
      @ObjectModel.foreignKey.association: '_Product'
      SDIA.Product,
      _Product,
      SDIA.OriginallyRequestedMaterial,
      SDIA.MaterialByCustomer,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProductGroup'
      SDIA.ProductGroup,
      SDIA._ProductGroup,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      SDIA.AdditionalMaterialGroup1,
      SDIA._AdditionalMaterialGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      SDIA.AdditionalMaterialGroup2,
      SDIA._AdditionalMaterialGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      SDIA.AdditionalMaterialGroup3,
      SDIA._AdditionalMaterialGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      SDIA.AdditionalMaterialGroup4,
      SDIA._AdditionalMaterialGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      SDIA.AdditionalMaterialGroup5,
      SDIA._AdditionalMaterialGroup5,
      @ObjectModel.foreignKey.association: '_Plant'
      SDIA.Plant,
      SDIA._Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      SDIA.StorageLocation,
      SDIA._StorageLocation,
      
      //BoM
      MainItemPricingRefProduct,
      HigherLevelItem,
      BillOfMaterial,
      PropagatePrftbltySgmt2BOM,
      CostDeterminationIsRequired,
      
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemWeightUnit'
      SDIA.ItemWeightUnit,
      SDIA._ItemWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SDIA.ItemGrossWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SDIA.ItemNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemVolumeUnit'
      SDIA.ItemVolumeUnit,
      SDIA._ItemVolumeUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      SDIA.ItemVolume,

      //Pricing
      SDIA.PricingDate,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SDIA.SalesDistrict,
      SDIA._SalesDistrict,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.TaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.CostAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.Subtotal1Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.Subtotal2Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.Subtotal3Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.Subtotal4Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.Subtotal5Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.Subtotal6Amount,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      SDIA.BaseUnit,
      SDIA._BaseUnit,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      SDIA.TransactionCurrency,
      SDIA._TransactionCurrency,
      @Semantics.currencyCode: true
      cast(:P_DisplayCurrency as vdm_v_display_currency)                                         as DisplayCurrency,

      //Terms of Delivery
      SDIA.IncotermsVersion,
      SDIA.IncotermsClassification,
      SDIA._IncotermsClassification,
      SDIA.IncotermsTransferLocation,
      SDIA.IncotermsLocation1,
      SDIA.IncotermsLocation2,

      //Payment
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      SDIA.CustomerPaymentTerms,
      SDIA._CustomerPaymentTerms,
      SDIA.PaymentMethod,
      SDIA.FixedValueDate,
      SDIA.AdditionalValueDays,

      //Billing
      @ObjectModel.foreignKey.association: '_BillingCompanyCode'
      SDIA.BillingCompanyCode,
      SDIA._BillingCompanyCode,
      SDIA.BillingDocumentDate,
      //TaxClassification

      //Accounting
      SDIA.FiscalYear,
      SDIA.FiscalPeriod,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      SDIA.BusinessArea,
      SDIA._BusinessArea,
      SDIA.ProfitCenter,
      //SDIA.WBSElement Global Field Name has been deprecated
      SDIA.CustomerAccountAssignmentGroup,

      //KPI of Quotation
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.SalesQuotationNetAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
        amount => SDIA.SalesQuotationNetAmount,
        source_currency => SDIA.TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => SDIA.CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as sales_qtan_net_amt_in_dsp_crcy )                                                      as SalesQuotationNetAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.CnvrtdSalesQuotationNetAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
        amount => SDIA.CnvrtdSalesQuotationNetAmount,
        source_currency => SDIA.TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => SDIA.CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as cnvrtd_sls_qtan_net_amt_in_dc )                                                       as CnvrtdSalesQtanNetAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SDIA.SalesQuotationQuantity,

      //KPI of Open Quotation
      @DefaultAggregation: #SUM
      SDIA.NmbrOfOpenSlsQuotationItems,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.SlsQuotationOpenNetAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
        amount => SDIA.SlsQuotationOpenNetAmount,
        source_currency => SDIA.TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => SDIA.CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true)
      as opn_sls_qtans_net_amt_idc )                                                             as SlsQuotationOpenNetAmtInDC,

      //KPI of Expired Quotation
      @DefaultAggregation: #SUM
      cast(
        case when SDIA.BindingPeriodValidityEndDate > '00000000' and SDIA.BindingPeriodValidityEndDate <= $session.system_date
          then SDIA.NmbrOfOpenSlsQuotationItems
        end
      as nmbr_of_expired_sls_qtan_items )                                                        as NmbrOfExpiredSlsQuotationItems,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast(
        case when SDIA.BindingPeriodValidityEndDate > '00000000' and SDIA.BindingPeriodValidityEndDate <= $session.system_date
          then SDIA.SlsQuotationOpenNetAmount
        end
      as expired_sls_qtans_net_amt )                                                             as SlsQuotationExpiredNetAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(
        case when SDIA.BindingPeriodValidityEndDate > '00000000' and SDIA.BindingPeriodValidityEndDate <= $session.system_date
          then
            currency_conversion(
            amount => SDIA.SlsQuotationOpenNetAmount,
            source_currency => SDIA.TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => SDIA.CreationDate,
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
            )
        end
      as expired_sls_qtans_net_amt_idc )                                                         as SlsQuotationExpiredNetAmtInDC,

      //KPI of Expiring Quotation
      @DefaultAggregation: #SUM
      cast(
        case when SDIA.BindingPeriodValidityEndDate > $session.system_date and SDIA.BindingPeriodValidityEndDate <= dats_add_days(SDIA.TodayDate, 7, 'FAIL')
          then SDIA.NmbrOfOpenSlsQuotationItems
        end
      as nmbr_of_exprg_sls_qtan_items )                                                          as NmbrOfExprgSlsQuotationItems,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast(
        case when SDIA.BindingPeriodValidityEndDate > $session.system_date and SDIA.BindingPeriodValidityEndDate <= dats_add_days(SDIA.TodayDate, 7, 'FAIL')
          then SDIA.SlsQuotationOpenNetAmount
        end
      as exprg_sls_qtans_net_amt )                                                               as SlsQuotationExpiringNetAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(
        case when SDIA.BindingPeriodValidityEndDate > $session.system_date and SDIA.BindingPeriodValidityEndDate <= dats_add_days(SDIA.TodayDate, 7, 'FAIL')
          then
            currency_conversion(
            amount => SDIA.SlsQuotationOpenNetAmount,
            source_currency => SDIA.TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => SDIA.CreationDate,
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
            )
        end
      as exprg_sls_qtans_net_amt_idc )                                                           as SlsQuotationExpiringNetAmtInDC,

      //KPI of Rejected Quotation
      @DefaultAggregation: #SUM
      SDIA.NmbrOfRejectedSlsQtanItems,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.SlsQtanRejectedNetAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
        amount => SDIA.SlsQtanRejectedNetAmount,
        source_currency => SDIA.TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => SDIA.CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true)
      as rjctd_sls_qtans_net_amt_idc )                                                           as SlsQtanRejectedNetAmountInDC,

      //Reference
      @ObjectModel.foreignKey.association: '_ReferenceSDDocument'
      SDIA.ReferenceSDDocument,
      SDIA._ReferenceSDDocument,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentItem'
      SDIA.ReferenceSDDocumentItem,
      SDIA._ReferenceSDDocumentItem,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      SDIA.ReferenceSDDocumentCategory,
      SDIA._ReferenceSDDocumentCategory,

      //Status
      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      cast(SDIA.OverallSDProcessStatus as overall_sd_process_status preserving type)             as OverallSDProcessStatus,
      SDIA._OverallSDProcessStatus,
      @ObjectModel.foreignKey.association: '_OverallSDDocumentRejectionSts'
      cast(SDIA.OverallSDDocumentRejectionSts as ovrl_sd_doc_rejection_status preserving type)   as OverallSDDocumentRejectionSts,
      SDIA._OverallSDDocumentRejectionSts,
      @ObjectModel.foreignKey.association: '_TotalBlockStatus'
      SDIA.TotalBlockStatus,
      SDIA._TotalBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallDelivConfStatus'
      cast(SDIA.OverallDelivConfStatus as overall_delivery_conf_status preserving type)          as OverallDelivConfStatus,
      SDIA._OverallDelivConfStatus,
      @ObjectModel.foreignKey.association: '_OverallTotalDeliveryStatus'
      cast(SDIA.OverallTotalDeliveryStatus as itms_ovrl_delivery_status preserving type)         as OverallTotalDeliveryStatus,
      SDIA._OverallTotalDeliveryStatus,
      @ObjectModel.foreignKey.association: '_OverallDeliveryStatus'
      cast(SDIA.OverallDeliveryStatus as overall_delivery_status preserving type)                as OverallDeliveryStatus,
      SDIA._OverallDeliveryStatus,
      @ObjectModel.foreignKey.association: '_OverallDeliveryBlockStatus'
      cast(SDIA.OverallDeliveryBlockStatus as overall_delivery_block_status preserving type)     as OverallDeliveryBlockStatus,
      SDIA._OverallDeliveryBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallOrdReltdBillgStatus'
      cast(SDIA.OverallOrdReltdBillgStatus as ovrl_ord_rel_billg_status preserving type )        as OverallOrdReltdBillgStatus,
      SDIA._OverallOrdReltdBillgStatus,
      @ObjectModel.foreignKey.association: '_OverallBillingBlockStatus'
      cast(SDIA.OverallBillingBlockStatus as overall_billing_block_status preserving type)       as OverallBillingBlockStatus,
      SDIA._OverallBillingBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallTotalSDDocRefStatus'
      cast(SDIA.OverallTotalSDDocRefStatus as ovrl_reference_status preserving type )            as OverallTotalSDDocRefStatus,
      SDIA._OverallTotalSDDocRefStatus,
      @ObjectModel.foreignKey.association: '_OverallSDDocReferenceStatus'
      cast(SDIA.OverallSDDocReferenceStatus as ovrl_sd_doc_reference_status preserving type)     as OverallSDDocReferenceStatus,
      SDIA._OverallSDDocReferenceStatus,
      @ObjectModel.foreignKey.association: '_HdrGeneralIncompletionStatus'
      cast(SDIA.HdrGeneralIncompletionStatus as hdr_general_incompltn_status preserving type)    as HdrGeneralIncompletionStatus,
      SDIA._HdrGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_HeaderDelivIncompletionStatus'
      cast(SDIA.HeaderDelivIncompletionStatus as hdrdelivincompletionstatus preserving type )    as HeaderDelivIncompletionStatus,
      SDIA._HeaderDelivIncompletionStatus,
      @ObjectModel.foreignKey.association: '_HeaderBillgIncompletionStatus'
      cast(SDIA.HeaderBillgIncompletionStatus as hdrbillgincompletionstatus preserving type )    as HeaderBillgIncompletionStatus,
      SDIA._HeaderBillgIncompletionStatus,
      @ObjectModel.foreignKey.association: '_OvrlItmGeneralIncompletionSts'
      cast(SDIA.OvrlItmGeneralIncompletionSts as itms_ovrl_incompletion_status preserving type)  as OvrlItmGeneralIncompletionSts,
      SDIA._OvrlItmGeneralIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmBillingIncompletionSts'
      cast(SDIA.OvrlItmBillingIncompletionSts as ovrl_itms_incompltn_sts_billg preserving type)  as OvrlItmBillingIncompletionSts,
      SDIA._OvrlItmBillingIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmDelivIncompletionSts'
      cast(SDIA.OvrlItmDelivIncompletionSts as ovrl_items_dlv_incompltn_sts preserving type)     as OvrlItmDelivIncompletionSts,
      SDIA._OvrlItmDelivIncompletionSts,
      @ObjectModel.foreignKey.association: '_SDProcessStatus'
      cast(SDIA.SDProcessStatus as sd_doc_process_status preserving type)                        as SDProcessStatus,
      SDIA._SDProcessStatus,
      @ObjectModel.foreignKey.association: '_DeliveryConfirmationStatus'
      cast(SDIA.DeliveryConfirmationStatus as delivery_confirmation_status preserving type)      as DeliveryConfirmationStatus,
      SDIA._DeliveryConfirmationStatus,
      @ObjectModel.foreignKey.association: '_TotalDeliveryStatus'
      SDIA.TotalDeliveryStatus,
      SDIA._TotalDeliveryStatus,
      @ObjectModel.foreignKey.association: '_DeliveryStatus'
      SDIA.DeliveryStatus,
      SDIA._DeliveryStatus,
      @ObjectModel.foreignKey.association: '_DeliveryBlockStatus'
      SDIA.DeliveryBlockStatus,
      SDIA._DeliveryBlockStatus,
      @ObjectModel.foreignKey.association: '_OrderRelatedBillingStatus'
      SDIA.OrderRelatedBillingStatus,
      SDIA._OrderRelatedBillingStatus,
      @ObjectModel.foreignKey.association: '_BillingBlockStatus'
      SDIA.BillingBlockStatus,
      SDIA._BillingBlockStatus,
      @ObjectModel.foreignKey.association: '_ItemGeneralIncompletionStatus'
      cast(SDIA.ItemGeneralIncompletionStatus as item_general_incompletion_sts preserving type)  as ItemGeneralIncompletionStatus,
      SDIA._ItemGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemBillingIncompletionStatus'
      cast(SDIA.ItemBillingIncompletionStatus as itms_incompltn_sts_billg preserving type)       as ItemBillingIncompletionStatus,
      SDIA._ItemBillingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemDelivIncompletionSts'
      cast(SDIA.ItemDeliveryIncompletionStatus as itm_deliv_incompletion_status preserving type) as ItemDeliveryIncompletionStatus,
      SDIA._ItemDelivIncompletionSts,
      @ObjectModel.foreignKey.association: '_SDDocumentRejectionStatus'
      cast(SDIA.SDDocumentRejectionStatus as sd_doc_rejection_status preserving type)            as SDDocumentRejectionStatus,
      SDIA._SDDocumentRejectionStatus,
      @ObjectModel.foreignKey.association: '_TotalSDDocReferenceStatus'
      SDIA.TotalSDDocReferenceStatus,
      SDIA._TotalSDDocReferenceStatus,

      @ObjectModel.foreignKey.association: '_PurchaseConfirmationStatus'
      cast(SDIA.PurchaseConfirmationStatus as purchase_confirmation_status preserving type)      as PurchaseConfirmationStatus,
      SDIA._PurchaseConfirmationStatus,
      @ObjectModel.foreignKey.association: '_PricingIncompletionStatus'
      cast(SDIA.PricingIncompletionStatus as pricing_incompletion_status preserving type)        as PricingIncompletionStatus,
      SDIA._PricingIncompletionStatus

}
where
  SDIA.SDDocumentCategory = 'B'
```
