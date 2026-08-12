---
name: I_SALESORDERCUBE
description: "Sales OrderCUBE"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - interface-view
  - analytical
  - sales-order
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERCUBE

**Sales OrderCUBE**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` | ✓ | |  | `cast(SDH.SalesDocument as vdm_sales_order preserving type)` |  |  |
| `SalesOrderType` |  | |  | `SalesDocumentType` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreatedByUserName` |  | |  | `cast(SDH._CreatedByUser.UserDescription as created_by_user_name)` |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `CreationDateYear` |  | |  | `cast(CalendarDate.CalendarYear as creation_date_year)` |  |  |
| `CreationDateYearQuarter` |  | |  | `cast(CalendarDate.YearQuarter as creation_date_year_quarter)` |  |  |
| `CreationDateYearMonth` |  | |  | `cast(CalendarDate.YearMonth as creation_date_year_month)` |  |  |
| `SalesOrderDateYear` |  | |  | `cast(CalendarDateSalesOrder.CalendarYear as sales_order_date_year)` |  |  |
| `SalesOrderDateYearQuarter` |  | |  | `cast(CalendarDateSalesOrder.YearQuarter as sales_order_date_year_quarter)` |  |  |
| `SalesOrderDateYearMonth` |  | |  | `cast(CalendarDateSalesOrder.YearMonth as sales_order_date_year_month)` |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  | `cast(SDH.OrganizationDivision as organization_division preserving type)` |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `PartnerCompany` |  | |  | `TradingPartner` |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `SoldToPartyClassification` |  | |  | `CustomerClassification` |  |  |
| `ShipToParty` |  | |  | `cast(StandardPartner.ShipToParty as kunwe)` |  |  |
| `PayerParty` |  | |  | `cast(StandardPartner.PayerParty as kunrg)` |  |  |
| `BillToParty` |  | |  | `cast(StandardPartner.BillToParty as kunre)` |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `CustomerRebateAgreement` |  | |  | `cast(SDH.CustomerRebateAgreement as customer_rebate_agreement)` |  |  |
| `SalesOrderDate` |  | |  | `SalesDocumentDate` |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `SDDocumentCollectiveNumber` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `CustomerPurchaseOrderSuplmnt` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `ProductCatalog` |  | |  | `cast(SDH.ProductCatalog as product_catalog)` |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  | `cast(:P_DisplayCurrency as vdm_v_display_currency)` |  |  |
| `PricingDate` |  | |  |  |  |  |
| `RetailPromotion` |  | |  | `cast(SDH.RetailPromotion as retail_promotion)` |  |  |
| `SalesOrderCondition` |  | |  | `cast(SDH.SalesDocumentCondition as sales_order_condition)` |  |  |
| `NumberOfIncomingSalesOrders` |  | |  | `cast(1 as nmbr_of_incg_sls_ords)` |  |  |
| `IncomingSalesOrdersNetAmount` |  | |  | `cast(SDH.TotalNetAmount as incg_sls_ords_net_amt)` |  |  |
| `IncomingSalesOrdersNetAmtInDC` |  | |  | `cast (currency_conversion( amount => SDH.TotalNetAmount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SDH.CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as incg_sls_ords_net_amt_in_dc)` |  |  |
| `OpnSOForOrdReltdInvcsNetAmtDC` |  | |  | `cast(OpnSOForOrdReltdInvcsNetAmtDC as opn_ords_for_ordrelinv_amt_idc)` |  |  |
| `OpnSlsOrdsForDelivAmtInDspCrcy` |  | |  | `cast(OpnSlsOrdsForDelivAmtInDspCrcy as opn_ord_for_del_amt_idc)` |  |  |
| `OpnSlsOrdsForInvcPlansNetAmtDC` |  | |  | `cast(OpnSlsOrdsForInvcPlansNetAmtDC as opn_ord_for_iplan_amt_idc)` |  |  |
| `NumberOfOpenSalesOrders` |  | |  | `cast(case when OverallSDProcessStatus != 'C' then 1 else 0 end as nmbr_of_opn_sls_ords)` |  |  |
| `RequestedDeliveryDate` |  | |  |  |  |  |
| `ShippingType` |  | |  |  |  |  |
| `ShippingCondition` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `CompleteDeliveryIsDefined` |  | |  |  |  |  |
| `DeliveryBlockReason` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `BillingCompanyCode` |  | |  |  |  |  |
| `HeaderBillingBlockReason` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `CustomerProject` |  | |  | `EngagementProject` |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |  |  |
| `CostCenterBusinessArea` |  | |  | `cast(SDH.CostCenterBusinessArea as business_area_cost_center preserving type)` |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `ControllingObject` |  | |  | `cast(SDH.ControllingObject as controlling_object)` |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `BusinessSolutionOrder` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  | `cast(SDH.OverallSDProcessStatus as overall_sd_process_status preserving type)` |  |  |
| `OverallPurchaseConfStatus` |  | |  | `cast(SDH.OverallPurchaseConfStatus as overall_purchase_conf_status preserving type)` |  |  |
| `OverallSDDocumentRejectionSts` |  | |  | `cast(SDH.OverallSDDocumentRejectionSts as ovrl_sd_doc_rejection_status preserving type)` |  |  |
| `TotalBlockStatus` |  | |  |  |  |  |
| `OverallDelivConfStatus` |  | |  | `cast(SDH.OverallDelivConfStatus as overall_delivery_conf_status preserving type)` |  |  |
| `OverallTotalDeliveryStatus` |  | |  | `cast(SDH.OverallTotalDeliveryStatus as itms_ovrl_delivery_status preserving type)` |  |  |
| `OverallDeliveryStatus` |  | |  | `cast(SDH.OverallDeliveryStatus as overall_delivery_status preserving type)` |  |  |
| `OverallDeliveryBlockStatus` |  | |  | `cast(SDH.OverallDeliveryBlockStatus as overall_delivery_block_status preserving type)` |  |  |
| `OverallOrdReltdBillgStatus` |  | |  | `cast(SDH.OverallOrdReltdBillgStatus as ovrl_ord_rel_billg_status preserving type)` |  |  |
| `OverallBillingBlockStatus` |  | |  | `cast(SDH.OverallBillingBlockStatus as overall_billing_block_status preserving type)` |  |  |
| `OverallTotalSDDocRefStatus` |  | |  | `cast(SDH.OverallTotalSDDocRefStatus as ovrl_reference_status preserving type)` |  |  |
| `OverallSDDocReferenceStatus` |  | |  | `cast(SDH.OverallSDDocReferenceStatus as ovrl_sd_doc_reference_status preserving type)` |  |  |
| `TotalCreditCheckStatus` |  | |  |  |  |  |
| `MaxDocValueCreditCheckStatus` |  | |  |  |  |  |
| `PaymentTermCreditCheckStatus` |  | |  | `cast(SDH.PaymentTermCreditCheckStatus as payt_terms_credit_check_status preserving type)` |  |  |
| `FinDocCreditCheckStatus` |  | |  |  |  |  |
| `ExprtInsurCreditCheckStatus` |  | |  |  |  |  |
| `PaytAuthsnCreditCheckSts` |  | |  |  |  |  |
| `CentralCreditCheckStatus` |  | |  | `cast(SDH.CentralCreditCheckStatus as central_credit_check_status preserving type)` |  |  |
| `CentralCreditChkTechErrSts` |  | |  | `cast(SDH.CentralCreditChkTechErrSts as centrl_crdt_chck_tech_err_sts preserving type)` |  |  |
| `HdrGeneralIncompletionStatus` |  | |  | `cast(SDH.HdrGeneralIncompletionStatus as hdr_general_incompltn_status preserving type)` |  |  |
| `OverallPricingIncompletionSts` |  | |  | `cast(SDH.OverallPricingIncompletionSts as ovrl_pricing_incompletion_sts preserving type)` |  |  |
| `HeaderDelivIncompletionStatus` |  | |  | `cast(SDH.HeaderDelivIncompletionStatus as hdrdelivincompletionstatus preserving type)` |  |  |
| `HeaderBillgIncompletionStatus` |  | |  | `cast(SDH.HeaderBillgIncompletionStatus as hdrbillgincompletionstatus preserving type)` |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  | `cast(SDH.OvrlItmGeneralIncompletionSts as itms_ovrl_incompletion_status preserving type)` |  |  |
| `OvrlItmBillingIncompletionSts` |  | |  | `cast(SDH.OvrlItmBillingIncompletionSts as ovrl_itms_incompltn_sts_billg preserving type)` |  |  |
| `OvrlItmDelivIncompletionSts` |  | |  | `cast(SDH.OvrlItmDelivIncompletionSts as ovrl_items_dlv_incompltn_sts preserving type)` |  |  |
| `_SalesOrderType` | | ✓ | | | | |
| `_CustomerProject` | | ✓ | | | | |
| `_SoldToPartyClassification` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrderType` | `I_SalesOrderType` | [0..1] |
| `_CustomerProject` | `I_EngagementProject` | [0..1] |
| `_SoldToPartyClassification` | `I_CustomerClassification` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_BillToParty` | `I_Customer` | [0..1] |
| `_PayerParty` | `I_Customer` | [0..1] |
| `_Extension` | `E_SalesDocumentBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Order - Cube'
@VDM.viewType: #COMPOSITE
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDSALESORDERHC',
  compiler.compareFilter: true
}
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #L
   }
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities:
   [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

define view I_SalesOrderCube
  with parameters
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency
  as select from           I_SalesDocument                                                                                                                 as SDH

    left outer to one join P_OpenSalesOrdersAnalytics(P_ExchangeRateType:$parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency) as OpnSlsOrdAnlyts        on SDH.SalesDocument = OpnSlsOrdAnlyts.SalesOrder
    left outer to one join I_SDDocStandardPartner                                                                                                          as StandardPartner        on SDH.SalesDocument = StandardPartner.SDDocument
    left outer to one join I_CalendarDate                                                                                                                  as CalendarDate           on SDH.CreationDate = CalendarDate.CalendarDate
    left outer to one join I_CalendarDate                                                                                                                  as CalendarDateSalesOrder on SDH.SalesDocumentDate = CalendarDateSalesOrder.CalendarDate
  //I_CustomerProjectItem has been replaced by I_EngagementProjectItem
    left outer to one join I_EngagementProjectItem                                                                                                         as CustomerProjectItem    on  SDH.SalesDocument                             = CustomerProjectItem.EngagementProjectItem
                                                                                                                                                                                     and CustomerProjectItem.EngagementProjectItemType = '0SOH'
  //Association
  association [0..1] to I_SalesOrderType         as _SalesOrderType            on $projection.SalesOrderType = _SalesOrderType.SalesOrderType
  association [0..1] to I_EngagementProject      as _CustomerProject           on $projection.CustomerProject = _CustomerProject.EngagementProject
  association [0..1] to I_CustomerClassification as _SoldToPartyClassification on $projection.SoldToPartyClassification = _SoldToPartyClassification.CustomerClassification
  association [0..1] to I_Customer               as _ShipToParty               on $projection.ShipToParty = _ShipToParty.Customer
  association [0..1] to I_Customer               as _BillToParty               on $projection.BillToParty = _BillToParty.Customer
  association [0..1] to I_Customer               as _PayerParty                on $projection.PayerParty = _PayerParty.Customer

  //Extensibility
  association [0..1] to E_SalesDocumentBasic     as _Extension                 on SDH.SalesDocument = _Extension.SalesDocument
{
      // Key
  key cast(SDH.SalesDocument as vdm_sales_order preserving type)                               as SalesOrder,

      // Category
      @ObjectModel.foreignKey.association: '_SalesOrderType'
      SDH.SalesDocumentType                                                                    as SalesOrderType,
      _SalesOrderType,

      // Admin
      SDH.CreatedByUser,
      SDH._CreatedByUser,
      cast(SDH._CreatedByUser.UserDescription as created_by_user_name)                         as CreatedByUserName,
      @Semantics.systemDate.createdAt: true
      SDH.CreationDate,
      @Semantics.systemTime.createdAt: true
      SDH.CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      SDH.LastChangeDate,

      @Semantics.calendar.year
      cast(CalendarDate.CalendarYear as creation_date_year)                                    as CreationDateYear,
      @Semantics.calendar.yearQuarter
      cast(CalendarDate.YearQuarter as creation_date_year_quarter)                             as CreationDateYearQuarter,
      @Semantics.calendar.yearMonth
      cast(CalendarDate.YearMonth as creation_date_year_month)                                 as CreationDateYearMonth,
      @Semantics.calendar.year
      cast(CalendarDateSalesOrder.CalendarYear as sales_order_date_year)                       as SalesOrderDateYear,
      @Semantics.calendar.yearQuarter
      cast(CalendarDateSalesOrder.YearQuarter as sales_order_date_year_quarter)                as SalesOrderDateYearQuarter,
      @Semantics.calendar.yearMonth
      cast(CalendarDateSalesOrder.YearMonth as sales_order_date_year_month)                    as SalesOrderDateYearMonth,

      // Orgnization
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SDH.SalesOrganization,
      SDH._SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      SDH.DistributionChannel,
      SDH._DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      cast(SDH.OrganizationDivision as organization_division preserving type)                  as OrganizationDivision,
      SDH._OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SDH.SalesGroup,
      SDH._SalesGroup,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SDH.SalesOffice,
      SDH._SalesOffice,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association:'_GlobalCompany'
      SDH._SoldToParty.TradingPartner as PartnerCompany,
      SDH._SoldToParty._GlobalCompany,
      
      // Sales
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SDH.SoldToParty,
      SDH._SoldToParty,

      @ObjectModel.foreignKey.association: '_SoldToPartyClassification'
      SDH._SoldToParty.CustomerClassification                                                  as SoldToPartyClassification,
      _SoldToPartyClassification,
      //cast(SDH._SoldToParty.CustomerName as vdm_sold_to_name)                  as  SoldToPartyName,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      cast(StandardPartner.ShipToParty as kunwe)                                               as ShipToParty,
      _ShipToParty,
      //cast(StandardPartner._ShipToParty.CustomerName as ship_to_name)           as  ShipToPartyName,
      @ObjectModel.foreignKey.association: '_PayerParty'
      cast(StandardPartner.PayerParty as kunrg)                                                as PayerParty,
      _PayerParty,
      //cast(StandardPartner._PayerParty.CustomerName as payer_name)              as  PayerPartyName,
      @ObjectModel.foreignKey.association: '_BillToParty'
      cast(StandardPartner.BillToParty as kunre)                                               as BillToParty,
      _BillToParty,
      //cast(StandardPartner._BillToParty.CustomerName as bill_to_name)           as  BillToPartyName,

      @ObjectModel.foreignKey.association: '_CustomerGroup'
      SDH.CustomerGroup,
      SDH._CustomerGroup,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      SDH.AdditionalCustomerGroup1,
      SDH._AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      SDH.AdditionalCustomerGroup2,
      SDH._AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      SDH.AdditionalCustomerGroup3,
      SDH._AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      SDH.AdditionalCustomerGroup4,
      SDH._AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      SDH.AdditionalCustomerGroup5,
      SDH._AdditionalCustomerGroup5,
      cast(SDH.CustomerRebateAgreement as customer_rebate_agreement)                           as CustomerRebateAgreement,
      SDH.SalesDocumentDate                                                                    as SalesOrderDate,
      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      SDH.SDDocumentReason,
      SDH._SDDocumentReason,
      SDH.SDDocumentCollectiveNumber,
      SDH.PurchaseOrderByCustomer,
      SDH.CustomerPurchaseOrderType,
      SDH.CustomerPurchaseOrderDate,
      SDH.CustomerPurchaseOrderSuplmnt,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SDH.SalesDistrict,
      SDH._SalesDistrict,
      cast(SDH.ProductCatalog as product_catalog)                                              as ProductCatalog,
      SDH.ServicesRenderedDate,

      // Pricing
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      SDH.TransactionCurrency,
      SDH._TransactionCurrency,
      @Semantics.currencyCode: true
      cast(:P_DisplayCurrency as vdm_v_display_currency)                                       as DisplayCurrency,
      SDH.PricingDate,
      cast(SDH.RetailPromotion as retail_promotion)                                            as RetailPromotion,
      cast(SDH.SalesDocumentCondition as sales_order_condition)                                as SalesOrderCondition,

      // KPI: Sales Orders
      @DefaultAggregation: #SUM
      cast(1 as nmbr_of_incg_sls_ords)                                                         as NumberOfIncomingSalesOrders,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast(SDH.TotalNetAmount as incg_sls_ords_net_amt)                                        as IncomingSalesOrdersNetAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast (currency_conversion(
        amount => SDH.TotalNetAmount,
        source_currency => TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => SDH.CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as incg_sls_ords_net_amt_in_dc)                                                        as IncomingSalesOrdersNetAmtInDC,

      // KPI: Open Orders For Invoices
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(OpnSOForOrdReltdInvcsNetAmtDC as opn_ords_for_ordrelinv_amt_idc)                    as OpnSOForOrdReltdInvcsNetAmtDC,

      // KPI: Open Orders For Delivery
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(OpnSlsOrdsForDelivAmtInDspCrcy as opn_ord_for_del_amt_idc)                          as OpnSlsOrdsForDelivAmtInDspCrcy,

      // KPI: Open Orders for Billing Plan
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast(OpnSlsOrdsForInvcPlansNetAmtDC as opn_ord_for_iplan_amt_idc)                        as OpnSlsOrdsForInvcPlansNetAmtDC,

      @DefaultAggregation: #SUM
      cast(case when OverallSDProcessStatus != 'C'
        then 1
        else 0
      end as nmbr_of_opn_sls_ords)                                                             as NumberOfOpenSalesOrders,

      // Shipping
      SDH.RequestedDeliveryDate,
      @ObjectModel.foreignKey.association: '_ShippingType'
      SDH.ShippingType,
      SDH._ShippingType,
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      SDH.ShippingCondition,
      SDH._ShippingCondition,
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      SDH.IncotermsClassification,
      SDH._IncotermsClassification,
      SDH.IncotermsTransferLocation,
      SDH.IncotermsLocation1,
      SDH.IncotermsLocation2,
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      SDH.IncotermsVersion,
      SDH._IncotermsVersion,
      SDH.CompleteDeliveryIsDefined,
      @ObjectModel.foreignKey.association: '_DeliveryBlockReason'
      SDH.DeliveryBlockReason,
      SDH._DeliveryBlockReason,

      // Billing
      SDH.BillingDocumentDate,
      @ObjectModel.foreignKey.association: '_BillingCompanyCode'
      SDH.BillingCompanyCode,
      SDH._BillingCompanyCode,
      @ObjectModel.foreignKey.association: '_HeaderBillingBlockReason'
      SDH.HeaderBillingBlockReason,
      SDH._HeaderBillingBlockReason,

      // Payment
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      SDH.CustomerPaymentTerms,
      SDH._CustomerPaymentTerms,
      SDH.PaymentMethod,
      SDH.FixedValueDate,
      @ObjectModel.foreignKey.association: '_CustomerProject'
      CustomerProjectItem.EngagementProject                                                    as CustomerProject,
      _CustomerProject,

      // Accounting
      SDH.FiscalYear,
      SDH.FiscalPeriod,
      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      SDH.ExchangeRateType,
      SDH._ExchangeRateType,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      SDH.BusinessArea,
      SDH._BusinessArea,
      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      SDH.CustomerAccountAssignmentGroup,
      SDH._CustomerAccountAssgmtGroup,
      @ObjectModel.foreignKey.association: '_CostCenterBusinessArea'
      cast(SDH.CostCenterBusinessArea as business_area_cost_center preserving type)            as CostCenterBusinessArea,
      SDH._CostCenterBusinessArea,
      SDH.CostCenter,
      SDH._CostCenter,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      SDH.ControllingArea,
      SDH._ControllingArea,
      //SDH._ControllingArea.ControllingAreaName,
      SDH.OrderID,
      cast(SDH.ControllingObject as controlling_object)                                        as ControllingObject,

      // Reference
      SDH.ReferenceSDDocument,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      SDH.ReferenceSDDocumentCategory,
      SDH._ReferenceSDDocumentCategory,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SolutionOrder'
      SDH.BusinessSolutionOrder, --AT14May2020: Added for CE2008
      SDH._SolutionOrder,

      // Status
      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      cast(SDH.OverallSDProcessStatus as overall_sd_process_status preserving type)            as OverallSDProcessStatus,
      SDH._OverallSDProcessStatus,
      @ObjectModel.foreignKey.association: '_OverallPurchaseConfStatus'
      cast(SDH.OverallPurchaseConfStatus as overall_purchase_conf_status preserving type)      as OverallPurchaseConfStatus,
      SDH._OverallPurchaseConfStatus,
      @ObjectModel.foreignKey.association: '_OverallSDDocumentRejectionSts'
      cast(SDH.OverallSDDocumentRejectionSts as ovrl_sd_doc_rejection_status preserving type)  as OverallSDDocumentRejectionSts,
      SDH._OverallSDDocumentRejectionSts,
      @ObjectModel.foreignKey.association: '_TotalBlockStatus'
      SDH.TotalBlockStatus,
      SDH._TotalBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallDelivConfStatus'
      cast(SDH.OverallDelivConfStatus as overall_delivery_conf_status preserving type)         as OverallDelivConfStatus,
      SDH._OverallDelivConfStatus,
      @ObjectModel.foreignKey.association: '_OverallTotalDeliveryStatus'
      cast(SDH.OverallTotalDeliveryStatus as itms_ovrl_delivery_status preserving type)        as OverallTotalDeliveryStatus,
      SDH._OverallTotalDeliveryStatus,
      @ObjectModel.foreignKey.association: '_OverallDeliveryStatus'
      cast(SDH.OverallDeliveryStatus as overall_delivery_status preserving type)               as OverallDeliveryStatus,
      SDH._OverallDeliveryStatus,
      @ObjectModel.foreignKey.association: '_OverallDeliveryBlockStatus'
      cast(SDH.OverallDeliveryBlockStatus as overall_delivery_block_status preserving type)    as OverallDeliveryBlockStatus,
      SDH._OverallDeliveryBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallOrdReltdBillgStatus'
      cast(SDH.OverallOrdReltdBillgStatus as ovrl_ord_rel_billg_status preserving type)        as OverallOrdReltdBillgStatus,
      SDH._OverallOrdReltdBillgStatus,
      @ObjectModel.foreignKey.association: '_OverallBillingBlockStatus'
      cast(SDH.OverallBillingBlockStatus as overall_billing_block_status preserving type)      as OverallBillingBlockStatus,
      SDH._OverallBillingBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallTotalSDDocRefStatus'
      cast(SDH.OverallTotalSDDocRefStatus as ovrl_reference_status preserving type)            as OverallTotalSDDocRefStatus,
      SDH._OverallTotalSDDocRefStatus,
      @ObjectModel.foreignKey.association: '_OverallSDDocReferenceStatus'
      cast(SDH.OverallSDDocReferenceStatus as ovrl_sd_doc_reference_status preserving type)    as OverallSDDocReferenceStatus,
      SDH._OverallSDDocReferenceStatus,
      @ObjectModel.foreignKey.association: '_TotalCreditCheckStatus'
      SDH.TotalCreditCheckStatus,
      SDH._TotalCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_MaxDocValueCreditCheckStatus'
      SDH.MaxDocValueCreditCheckStatus,
      SDH._MaxDocValueCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_PaymentTermCreditCheckStatus'
      cast(SDH.PaymentTermCreditCheckStatus as payt_terms_credit_check_status preserving type) as PaymentTermCreditCheckStatus,
      SDH._PaymentTermCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_FinDocCreditCheckStatus'
      SDH.FinDocCreditCheckStatus,
      SDH._FinDocCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_ExprtInsurCreditCheckStatus'
      SDH.ExprtInsurCreditCheckStatus,
      SDH._ExprtInsurCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_PaytAuthsnCreditCheckSts'
      SDH.PaytAuthsnCreditCheckSts,
      SDH._PaytAuthsnCreditCheckSts,
      @ObjectModel.foreignKey.association: '_CentralCreditCheckStatus'
      cast(SDH.CentralCreditCheckStatus as central_credit_check_status preserving type)        as CentralCreditCheckStatus,
      SDH._CentralCreditCheckStatus,
      @ObjectModel.foreignKey.association: '_CentralCreditChkTechErrSts'
      cast(SDH.CentralCreditChkTechErrSts as centrl_crdt_chck_tech_err_sts preserving type)    as CentralCreditChkTechErrSts,
      SDH._CentralCreditChkTechErrSts,
      @ObjectModel.foreignKey.association: '_HdrGeneralIncompletionStatus'
      cast(SDH.HdrGeneralIncompletionStatus as hdr_general_incompltn_status preserving type)   as HdrGeneralIncompletionStatus,
      SDH._HdrGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_OverallPricingIncompletionSts'
      cast(SDH.OverallPricingIncompletionSts as ovrl_pricing_incompletion_sts preserving type) as OverallPricingIncompletionSts,
      SDH._OverallPricingIncompletionSts,
      @ObjectModel.foreignKey.association: '_HeaderDelivIncompletionStatus'
      cast(SDH.HeaderDelivIncompletionStatus as hdrdelivincompletionstatus  preserving type)   as HeaderDelivIncompletionStatus,
      SDH._HeaderDelivIncompletionStatus,
      @ObjectModel.foreignKey.association: '_HeaderBillgIncompletionStatus'
      cast(SDH.HeaderBillgIncompletionStatus as hdrbillgincompletionstatus preserving type)    as HeaderBillgIncompletionStatus,
      SDH._HeaderBillgIncompletionStatus,
      @ObjectModel.foreignKey.association: '_OvrlItmGeneralIncompletionSts'
      cast(SDH.OvrlItmGeneralIncompletionSts as itms_ovrl_incompletion_status preserving type) as OvrlItmGeneralIncompletionSts,
      SDH._OvrlItmGeneralIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmBillingIncompletionSts'
      cast(SDH.OvrlItmBillingIncompletionSts as ovrl_itms_incompltn_sts_billg preserving type) as OvrlItmBillingIncompletionSts,
      SDH._OvrlItmBillingIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmDelivIncompletionSts'
      cast(SDH.OvrlItmDelivIncompletionSts as ovrl_items_dlv_incompltn_sts preserving type)    as OvrlItmDelivIncompletionSts,
      SDH._OvrlItmDelivIncompletionSts

}
where
  SDH.SDDocumentCategory = 'C';
```
