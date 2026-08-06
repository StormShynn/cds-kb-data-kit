---
name: I_SERVICEDOCUMENTITEM_2
description: Service DocumentUMENTITEM 2
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - service
  - document
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENTITEM_2

**Service DocumentUMENTITEM 2**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceObjectType` | `objtype_h` |
| key `ServiceDocument` | `object_id` |
| key `ServiceDocumentItem` | `number_int` |
| `ServiceDocumentDescription` | `description_h` |
| `ServiceDocumentType` | `process_type` |
| `ServiceDocumentItemPriority` | `priority` |
| `PostingDate` | `posting_date` |
| `ServicesRenderedDate` | `srv_rendered_date` |
| `SrvcDocItmPostingDateTime` | `cast( order_date as crms4_order_date preserving type )` |
| `SrvcDocItmValdtyStartDateTime` | `cast( valid_from as crms4_valid_from preserving type )` |
| `SrvcDocItmValdtyEndDateTime` | `cast( valid_to as crms4_valid_to preserving type )` |
| `ServiceDocumentItemUUID` | `item_guid` |
| `ServiceDocumentItemCharUUID` | `cast(item_guid_char as sysuuid_c preserving type )` |
| `ServiceDocumentItemObjectType` | `objtype_i` |
| `ServiceDocumentUUID` | `header_guid` |
| `ParentServiceDocumentItemUUID` | `parent` |
| `ServiceDocumentItemDescription` | `description_i` |
| `Language` | `itm_language` |
| `ServiceDocumentTemplateType` | `template_type` |
| `ServiceDocItemCreationDateTime` | `created_at_i` |
| `ServiceDocItemChangedDateTime` | `changed_at_i` |
| `ServiceDocItemCreatedByUser` | `created_by_i` |
| `ServiceDocItemChangedByUser` | `changed_by_i` |
| `OriginallyRequestedProduct` | `ordered_prod` |
| `Product` | `product_id` |
| `ServiceDocItemCategory` | `itm_type` |
| `ProfitCenter` | `profit_center` |
| `ResponsibleCostCenter` | `cost_center` |
| `ControllingArea` | `kokrs` |
| `ProfitCenterDeterminationDate` | `profit_determine_date` |
| `RefBusinessSolutionOrder` | `refbussolnord` |
| `RefBusinessSolutionOrderItem` | `refbussolnorditm` |
| `SrvcDocItmRequestedQuantity` | `} ordered_quantity` |
| `InvoiceAmountInInvoiceDocCrcy` | `} billed_value` |
| `InvoiceQuantity` | `} billed_quantity` |
| `SrvcDocItmDeliveredQuantity` | `} dlv_quantity` |
| `SrvcDocItmReleasedQuantity` | `} released_quantity` |
| `CumulativeConfirmedQuantity` | `} confirmed_qty` |
| `SrvcDocItmReldAmtInTransCrcy` | `} released_value` |
| `SrvcDocItmOrdToBaseQtyNmrtr` | `process_qty_num` |
| `SrvcDocItmOrdToBaseQtyDnmntr` | `process_qty_den` |
| `OrderToBaseQuantityExponent` | `exponent10` |
| `ServiceDocItemQuantityUnit` | `process_qty_unit` |
| `SrvcDocItemBaseQuantityUnit` | `base_qty_unit` |
| `SrvcDocItemIsRlvtForProdHier` | `prod_hierarchy_relevance` |
| `SlsProdHierarchyParentNodeUUID` | `prodh_parent_node_uuid` |
| `SrvcDocItmProdHierarchyOrigin` | `prod_hierarchy_ori` |
| `BillingDateTime` | `bill_date` |
| `BillingDocCreationDateTime` | `invcr_date` |
| `BillingPlanTimeZone` | `billplan_timezone` |
| `BillingPriceSourceName` | `price_source` |
| `SoldToParty` | `sold_to_party` |
| `SoldToPartyCountry` | `sold_to_country` |
| `SoldToPartyRegion` | `sold_to_region` |
| `RespEmployeeBusinessPartnerId` | `person_resp` |
| `ServiceEmployee` | `service_employee` |
| `ContactPersonBusinessPartnerId` | `contact_person` |
| `PayerParty` | `payer` |
| `BillToParty` | `bill_to_party` |
| `ShipToParty` | `ship_to_party` |
| `ServiceDocumentItemStatus` | `stat_lifecycle` |
| `ServiceDocumentItemHasError` | `stat_error` |
| `ServiceDocItemBillingStatus` | `stat_billing` |
| `SrvcDocItmIsReleasedForBilling` | `stat_for_billing` |
| `ServiceDocumentItemIsOpen` | `stat_open` |
| `SrvcDocItmDeliveryStatus` | `stat_delivery` |
| `SrvcDocItmGoodsIssueStatus` | `stat_goods_issue` |
| `ServiceDocumentItemIsReleased` | `stat_released` |
| `ServiceDocumentItemIsRejected` | `stat_cancelled` |
| `ServiceDocumentItemIsQuotation` | `stat_quotation` |
| `SrvcDocItemTransferStatus` | `stat_transfer` |
| `SrvcDocItemExecutionStatus` | `stat_maintenance` |
| `ServiceDocumentItemQuantity` | `} order_qty` |
| `TransactionCurrency` | `currency` |
| `StatisticsCurrency` | `ref_currency` |
| `ExchangeRateType` | `exchg_type` |
| `ExchangeRateDate` | `exchg_date` |
| `AccountingExchangeRate` | `cast(exchg_rate as fis_exchange_rate preserving type )` |
| `PaymentTerms` | `pmnttrms` |
| `PaymentMethod` | `payment_method` |
| `SrvcSEPAMandateRelevance` | `sepa_on` |
| `SEPAMandate` | `mandate_id` |
| `WBSElementInternalID` | `wbs_element` |
| `BillableControl` | `ac_indicator` |
| `ServiceDocumentItemNetAmount` | `} net_value_i` |
| `ServiceDocumentItemTaxAmount` | `} tax_amount_i` |
| `ServiceDocItemGrossAmount` | `} gross_value_i` |
| `BillingBlockReason` | `billing_block` |
| `MaterialPricingGroup` | `prod_pr_group` |
| `ProductGroup1` | `prc_group1` |
| `ProductGroup2` | `prc_group2` |
| `ProductGroup3` | `prc_group3` |
| `ProductGroup4` | `prc_group4` |
| `ProductGroup5` | `prc_group5` |
| `Industry` | `industry` |
| `PurchaseOrderByCustomer` | `po_number_sold` |
| `PurchaseOrderByShipToParty` | `po_number_ship` |
| `ServiceDocItemRejectionReason` | `rejection` |
| `CustomerGroup` | `cust_group` |
| `AdditionalCustomerGroup1` | `cust_group1` |
| `AdditionalCustomerGroup2` | `cust_group2` |
| `AdditionalCustomerGroup3` | `cust_group3` |
| `AdditionalCustomerGroup4` | `cust_group4` |
| `AdditionalCustomerGroup5` | `cust_group5` |
| `Plant` | `plant` |
| `SettlementPeriodRuleUUID` | `billplan_d_rule_period_date` |
| `BillingPlanBillingDateRuleUUID` | `billplan_d_rule_bill_date` |
| `BillingPlanPriceDateRule` | `billplan_d_rule_price_date` |
| `BillingPlanIsFinalized` | `billingplanisfinalized` |
| `DistributionChannel` | `dis_channel` |
| `Division` | `division` |
| `ResponsibleSalesOrganization` | `sales_org_resp` |
| `SalesOrganization` | `sales_org_sd` |
| `SalesOffice` | `sales_office_sd` |
| `SalesGroup` | `sales_group_sd` |
| `RespyMgmtServiceTeam` | `service_team_rm` |
| `EnterpriseProjectServiceOrg` | `proj_org_id` |
| `RequestedServiceStartDateTime` | `srv_cust_beg` |
| `RequestedServiceEndDateTime` | `srv_cust_end` |
| `ServiceContrItemStartDateTime` | `contstart` |
| `ServiceContrItemEndDateTime` | `contend` |
| `ServiceFirstResponseByDateTime` | `srv_rfirst` |
| `SrvcDocItemSLADueByDateTime` | `srv_rready` |
| `ActualServiceStartDateTime` | `srvc_actual` |
| `ActualServiceEndDateTime` | `srvc_act_to` |
| `ServiceWorkDuration` | `srq_work_dura_2` |
| `ServiceWorkDurationUnit` | `srq_work_unit` |
| `SrvcContrItemRenewalDateTime` | `auto_renew_start` |
| `SrvcContrItemRnwlDuration` | `} auto_renew_period` |
| `SrvcContrItemRnwlDurationUnit` | `auto_renew_period_unit` |
| `SrvcContrItemExtensionDuration` | `} auto_renew_exten` |
| `SrvcContrItemExtnDurationUnit` | `auto_renew_exten_unit` |
| `PlannedServiceStartDateTime` | `spla_planfr` |
| `PlannedServiceEndDateTime` | `spla_planto` |
| `SrvcDocSubitemOrigin` | `itm_usage` |
| `ActualServiceDuration` | `} srv_conf_time` |
| `ActualServiceDurationUnit` | `srv_conf_tunit` |
| `SrvcOrderConfirmationRelevance` | `confirm_relevant` |
| `ResponseProfile` | `srv_escal` |
| `ServiceProfile` | `srv_serwi` |
| `ServiceDuration` | `} duration` |
| `ServiceDurationUnit` | `duration_unit` |
| `TimeSheetOvertimeCategory` | `overtime_cat` |
| `ContractAccount` | `contract_account` |
| `ItemOrderProbabilityInPercent` | `probability` |
| `QuotationIsAccepted` | `stat_accepted` |
| `ConfigurationNumber` | `int_obj_no` |
| `IncotermsPart1` | `incoterms1` |
| `IncotermsPart2` | `incoterms2` |
| `DeliveryPriority` | `dlv_prio` |
| `OrderCombinationIsAllowed` | `ordercombind` |
| `PartialDeliveryIsAllowed` | `part_dlv_itm` |
| `RevenueAccountingReference` | `revacc_refid` |
| `RevenueAccountingRefType` | `revacc_reftype` |
| `ItemGrossWeight` | `} gross_weight_i` |
| `ItemNetWeight` | `net_weight_i` |
| `ItemWeightUnit` | `weight_unit_i` |
| `ItemVolume` | `volume_i` |
| `ItemVolumeUnit` | `volume_unit_i` |
| `CustomerPriceGroup` | `price_grp` |
| `DeliveryGroup` | `dlv_group` |
| `DeliveryBlockReason` | `delivery_block` |
| `ErlstConfirmedDeliveryDateTime` | `first_conf_date` |
| `LtstConfirmedDeliveryDateTime` | `latest_conf_date` |
| `RequestedDeliveryDateTime` | `cast(first_req_date as tzntstmps preserving type )` |
| `SrvcTransChangeProcess` | `btmf_process` |
| `SrvcTransChangeProcessType` | `btmf_process_type` |
| `SrvcTransChgProcSourceItemUUID` | `ci_contract_item` |
| `SubscrpnContrTrmsAreSpecified` | `default_terms_ovrwrt` |
| `MidBillgCycExprtnIsAllowed` | `midbillcycexprtnallwd` |
| `SubscriptionBillingCycle` | `subscrpnbillgcycle` |
| `SubscrpnBillgRatePlanCharUUID` | `rate_plan_id` |
| `ServiceDocumentItemCanclnParty` | `cancparty` |
| `ServiceDocumentItmCanclnReason` | `canc_reason` |
| `SrvcDocItmCanclnProcedure` | `cancproc` |
| `ServiceDocumentRnwlDuration` | `} auto_renew_period` |
| `ServiceDocRnwlDurationUnit` | `auto_renew_period_unit` |
| `ServiceDocExtensionDuration` | `} auto_renew_exten` |
| `ServiceDocExtnDurationUnit` | `auto_renew_exten_unit` |
| `SubscrpnContrAutoRnwlIsActv` | `auto_renew_indicator` |
| `SrvcDocItemCreditStatus` | `stat_credit` |
| `SrvcDocItmBslnCostPostgStatus` | `stat_bsln_cost_postg` |
| `SrvcDocItmContinuousCostStatus` | `stat_cont_cost_calc` |
| `SrvcDocItemIsUnplanned` | `is_unplanned_item` |
| `ShippingCondition` | `ship_cond` |
| `BusSolnOrdItemBundleProduct` | `bundle_product_id` |
| `BusSolnOrdItemBundleItem` | `bundle_item_number` |
| `SrvcDocItmPartReferenceItem` | `item_no_partner` |
| `SrvcDocItmApptRefObjectUUID` | `ref_guid_appt` |
| `SrvcDocItmApptReferenceItem` | `item_no_appt` |
| `_SoldToParty` | *Association* |
| `_RespEmployee` | *Association* |
| `_ServiceEmployee` | *Association* |
| `_ContactPerson` | *Association* |
| `_PayerParty` | *Association* |
| `_BillToParty` | *Association* |
| `_ShipToParty` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_ServiceDocItemCategory` | *Association* |
| `_ServiceDocItemPriority` | *Association* |
| `_SrvcDocItmLifecycleStatus` | *Association* |
| `_ServiceDocItemBillingStatus` | *Association* |
| `_SrvcDocItemIsRelForBillgSts` | *Association* |
| `_ServiceDocItemHasError` | *Association* |
| `_ServiceDocumentIsOpen` | *Association* |
| `_BillingBlockReason` | *Association* |
| `_DeliveryBlockReason` | *Association* |
| `_BillingRequestItem` | *Association* |
| `_ServiceProductList` | *Association* |
| `_BaseUnit` | *Association* |
| `_SalesUnit` | *Association* |
| `_ServiceDurationUnit` | *Association* |
| `_ActualServiceDurationUnit` | *Association* |
| `_SrvcContrItemExtnDurationUnit` | *Association* |
| `_SrvcContrItemRnwlDurationUnit` | *Association* |
| `_VolumeUnit` | *Association* |
| `_WeightUnit` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_PaymentTerms` | *Association* |
| `_PaymentMethod` | *Association* |
| `_SrvcSEPAMandateRelevance` | *Association* |
| `_FixedPrice` | *Association* |
| `_StatusObjItemStatus` | *Association* |
| `_SalesOrganization` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |
| `_DistributionChannel` | *Association* |
| `_Division` | *Association* |
| `_ServiceDocOvertimeCat` | *Association* |
| `_Industry` | *Association* |
| `_ServiceDocItemRejectionReason` | *Association* |
| `_SoldToPartyRegion` | *Association* |
| `_SoldToPartyCountry` | *Association* |
| `_ServiceTeamHeader` | *Association* |
| `_BillPlanDateRule` | *Association* |
| `_SettlementDateRule` | *Association* |
| `_ResponseProfile` | *Association* |
| `_ServiceProfile` | *Association* |
| `_BillableControl` | *Association* |
| `_ProfitCenter` | *Association* |
| `_ControllingArea` | *Association* |
| `_MaterialPricingGroup` | *Association* |
| `_AdditionalMaterialGroup1` | *Association* |
| `_AdditionalMaterialGroup2` | *Association* |
| `_AdditionalMaterialGroup3` | *Association* |
| `_AdditionalMaterialGroup4` | *Association* |
| `_AdditionalMaterialGroup5` | *Association* |
| `_CustomerGroup` | *Association* |
| `_AdditionalCustomerGroup1` | *Association* |
| `_AdditionalCustomerGroup2` | *Association* |
| `_AdditionalCustomerGroup3` | *Association* |
| `_AdditionalCustomerGroup4` | *Association* |
| `_AdditionalCustomerGroup5` | *Association* |
| `_SrvcDocItemTransferStatus` | *Association* |
| `_SrvcDocItemCreditStatus` | *Association* |
| `_SrvcDocItmBslnCostPostgStat` | *Association* |
| `_SrvcDocItmContinuousCostStat` | *Association* |
| `_SrvcDocExecutionStatus` | *Association* |
| `_ServiceObjType` | *Association* |
| `_ServiceDocument` | *Association* |
| `_Product` | *Association* |
| `_SrvcDocIsQuotation` | *Association* |
| `_SrvcDocIsQuotation_2` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SoldToParty` | `I_BusinessPartner` | [0..1] |
| `_RespEmployee` | `I_BusinessPartner` | [0..1] |
| `_ServiceEmployee` | `I_BusinessPartner` | [0..1] |
| `_ContactPerson` | `I_BusinessPartner` | [0..1] |
| `_PayerParty` | `I_BusinessPartner` | [0..1] |
| `_BillToParty` | `I_BusinessPartner` | [0..1] |
| `_ShipToParty` | `I_BusinessPartner` | [0..1] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceDocItemCategory` | `I_ServiceDocItemCategory` | [0..1] |
| `_ServiceDocItemPriority` | `I_ServiceDocumentPriority` | [0..1] |
| `_SrvcDocItmLifecycleStatus` | `I_SrvcDocLifecycleStatus` | [0..1] |
| `_ServiceDocItemBillingStatus` | `I_ServiceDocBillingStatus` | [0..1] |
| `_SrvcDocItemIsRelForBillgSts` | `I_SrvcDocRelForBillgSts` | [0..1] |
| `_ServiceDocItemHasError` | `I_ServiceDocErrorStatus` | [0..1] |
| `_ServiceDocumentIsOpen` | `I_ServiceDocOpenStatus` | [0..1] |
| `_BillingBlockReason` | `I_BillingBlockReason` | [0..1] |
| `_DeliveryBlockReason` | `I_DeliveryBlockReason` | [0..1] |
| `_BillingRequestItem` | `I_BillingRequestItem` | [0..*] |
| `_ServiceProductList` | `I_ServiceProductList` | [0..*] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SalesUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ServiceDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ActualServiceDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SrvcContrItemExtnDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SrvcContrItemRnwlDurationUnit` | `I_UnitOfMeasure` | [0..1] |
| `_VolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_WeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_PaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_PaymentMethod` | `I_SrvcDocPaymentMethod` | [0..1] |
| `_SrvcSEPAMandateRelevance` | `I_SrvcSEPAMandateRelevance` | [0..1] |
| `_FixedPrice` | `I_ServiceDocumentFixedPrice` | [0..1] |
| `_StatusObjItemStatus` | `I_StatusObjectUUIDStatus` | [0..*] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_SalesOffice` | `I_SalesOffice` | [0..1] |
| `_SalesGroup` | `I_SalesGroup` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_ServiceDocOvertimeCat` | `I_TimeSheetOvertimeCat` | [0..1] |
| `_Industry` | `I_CustomerSupplierIndustry` | [0..1] |
| `_ServiceDocItemRejectionReason` | `I_SalesDocumentRjcnReason` | [0..1] |
| `_SoldToPartyRegion` | `I_Region` | [0..1] |
| `_SoldToPartyCountry` | `I_Country` | [0..1] |
| `_ServiceTeamHeader` | `I_RespyMgmtTeamHeaderDetail` | [0..1] |
| `_ServiceDocItemExt` | `E_ServiceDocumentItem` | [0..1] |
| `_BillPlanDateRule` | `I_SrvcMgmtDateRule` | [0..1] |
| `_SettlementDateRule` | `I_SrvcMgmtDateRule` | [0..1] |
| `_ResponseProfile` | `I_ResponseProfile` | [0..1] |
| `_ServiceProfile` | `I_ServiceProfile` | [0..1] |
| `_BillableControl` | `I_BillableControl` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_MaterialPricingGroup` | `I_MaterialPricingGroup` | [0..1] |
| `_AdditionalMaterialGroup1` | `I_AdditionalMaterialGroup1` | [0..1] |
| `_AdditionalMaterialGroup2` | `I_AdditionalMaterialGroup2` | [0..1] |
| `_AdditionalMaterialGroup3` | `I_AdditionalMaterialGroup3` | [0..1] |
| `_AdditionalMaterialGroup4` | `I_AdditionalMaterialGroup4` | [0..1] |
| `_AdditionalMaterialGroup5` | `I_AdditionalMaterialGroup5` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_AdditionalCustomerGroup1` | `I_AdditionalCustomerGroup1` | [0..1] |
| `_AdditionalCustomerGroup2` | `I_AdditionalCustomerGroup2` | [0..1] |
| `_AdditionalCustomerGroup3` | `I_AdditionalCustomerGroup3` | [0..1] |
| `_AdditionalCustomerGroup4` | `I_AdditionalCustomerGroup4` | [0..1] |
| `_AdditionalCustomerGroup5` | `I_AdditionalCustomerGroup5` | [0..1] |
| `_SrvcDocItemTransferStatus` | `I_SrvcDocTransferStatus` | [0..1] |
| `_SrvcDocItemCreditStatus` | `I_SrvcDocItemCreditStatus` | [0..1] |
| `_SrvcDocItmBslnCostPostgStat` | `I_SrvcDocItmBslnCostPostgStat` | [0..1] |
| `_SrvcDocItmContinuousCostStat` | `I_SrvcDocItmBslnCostPostgStat` | [0..1] |
| `_SrvcDocExecutionStatus` | `I_SrvcDocExecutionStatus` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction Item v2'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: [ '_BillPlanDateRule',
                              '_SettlementDateRule',
                              '_StatusObjItemStatus' ],
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
  representativeKey: 'ServiceDocumentItem',
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #A,
    sizeCategory:   #XXL
  },
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE
  ],
  modelingPattern: #ANALYTICAL_DIMENSION
}
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.internalName:#LOCAL

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ServiceDocumentItem_2
  as select from crms4d_serv_i
  association [0..1] to I_BusinessPartner             as _SoldToParty                   on  $projection.SoldToParty = _SoldToParty.BusinessPartner
  association [0..1] to I_BusinessPartner             as _RespEmployee                  on  $projection.RespEmployeeBusinessPartnerId = _RespEmployee.BusinessPartner
  association [0..1] to I_BusinessPartner             as _ServiceEmployee               on  $projection.ServiceEmployee = _ServiceEmployee.BusinessPartner
  association [0..1] to I_BusinessPartner             as _ContactPerson                 on  $projection.ContactPersonBusinessPartnerId = _ContactPerson.BusinessPartner
  association [0..1] to I_BusinessPartner             as _PayerParty                    on  $projection.PayerParty = _PayerParty.BusinessPartner
  association [0..1] to I_BusinessPartner             as _BillToParty                   on  $projection.BillToParty = _BillToParty.BusinessPartner
  association [0..1] to I_BusinessPartner             as _ShipToParty                   on  $projection.ShipToParty = _ShipToParty.BusinessPartner

  association [0..1] to I_ServiceDocumentType         as _ServiceDocumentType           on  $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType
  association [0..1] to I_ServiceDocItemCategory      as _ServiceDocItemCategory        on  $projection.ServiceDocItemCategory = _ServiceDocItemCategory.ServiceDocItemCategory
  association [0..1] to I_ServiceDocumentPriority     as _ServiceDocItemPriority        on  $projection.ServiceDocumentItemPriority = _ServiceDocItemPriority.ServiceDocumentPriority
  association [0..1] to I_SrvcDocLifecycleStatus      as _SrvcDocItmLifecycleStatus     on  $projection.ServiceDocumentItemStatus = _SrvcDocItmLifecycleStatus.ServiceDocumentStatus
  association [0..1] to I_ServiceDocBillingStatus     as _ServiceDocItemBillingStatus   on  $projection.ServiceDocItemBillingStatus = _ServiceDocItemBillingStatus.ServiceDocBillingStatus
  association [0..1] to I_SrvcDocRelForBillgSts       as _SrvcDocItemIsRelForBillgSts   on  $projection.SrvcDocItmIsReleasedForBilling = _SrvcDocItemIsRelForBillgSts.ServiceDocIsReleasedForBilling
  association [0..1] to I_ServiceDocErrorStatus       as _ServiceDocItemHasError        on  $projection.ServiceDocumentItemHasError = _ServiceDocItemHasError.ServiceDocumentHasError
  association [0..1] to I_ServiceDocOpenStatus        as _ServiceDocumentIsOpen         on  $projection.ServiceDocumentItemIsOpen = _ServiceDocumentIsOpen.ServiceDocumentIsOpen
  association of exact one to one I_ServiceDocument_2 as _ServiceDocument               on  $projection.ServiceObjectType = _ServiceDocument.ServiceObjectType
                                                                                        and $projection.ServiceDocument   = _ServiceDocument.ServiceDocument

  association of exact one to one I_CustMgmtBusObjType as _ServiceObjType                on  $projection.ServiceObjectType = _ServiceObjType.BusinessObjectType

  association [0..1] to I_BillingBlockReason          as _BillingBlockReason            on  $projection.BillingBlockReason = _BillingBlockReason.BillingBlockReason
  association [0..1] to I_DeliveryBlockReason         as _DeliveryBlockReason           on  $projection.DeliveryBlockReason = _DeliveryBlockReason.DeliveryBlockReason

  association [0..*] to I_BillingRequestItem          as _BillingRequestItem            on  $projection.ServiceObjectType   = _BillingRequestItem.ServiceObjectType
                                                                                        and $projection.ServiceDocument     = _BillingRequestItem.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem = _BillingRequestItem.ServiceDocumentItem

  association [0..*] to I_ServiceProductList          as _ServiceProductList            on  $projection.ServiceObjectType   = _ServiceProductList.ServiceObjectType
                                                                                        and $projection.ServiceDocument     = _ServiceProductList.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem = _ServiceProductList.ServiceDocumentItem

  
  association [0..1] to I_UnitOfMeasure               as _BaseUnit                    on  $projection.SrvcDocItemBaseQuantityUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _SalesUnit                     on  $projection.ServiceDocItemQuantityUnit = _SalesUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _ServiceDurationUnit           on  $projection.ServiceDurationUnit = _ServiceDurationUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _ActualServiceDurationUnit     on  $projection.ActualServiceDurationUnit = _ActualServiceDurationUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _SrvcContrItemExtnDurationUnit on  $projection.SrvcContrItemExtnDurationUnit = _SrvcContrItemExtnDurationUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _SrvcContrItemRnwlDurationUnit on  $projection.SrvcContrItemRnwlDurationUnit = _SrvcContrItemRnwlDurationUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _VolumeUnit                    on  $projection.ItemVolumeUnit = _VolumeUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _WeightUnit                    on  $projection.ItemWeightUnit = _WeightUnit.UnitOfMeasure
  association [0..1] to I_Currency                    as _TransactionCurrency           on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_PaymentTerms                as _PaymentTerms                  on  $projection.PaymentTerms = _PaymentTerms.PaymentTerms

  association [0..1] to I_SrvcDocPaymentMethod        as _PaymentMethod                 on  $projection.PaymentMethod                = _PaymentMethod.PaymentMethod
                                                                                        and 
                                                                                           $projection.SalesOrganization             = _PaymentMethod.SalesOrganization
                                                                                        and _PaymentMethod.OrgUnitTypeIDConcatenated is initial                                                                                        

  association [0..1] to I_SrvcSEPAMandateRelevance    as _SrvcSEPAMandateRelevance      on  $projection.SrvcSEPAMandateRelevance = _SrvcSEPAMandateRelevance.SrvcSEPAMandateRelevance

  association [0..1] to I_ServiceDocumentFixedPrice   as _FixedPrice                    on  $projection.ServiceObjectType   = _FixedPrice.ServiceObjectType
                                                                                        and $projection.ServiceDocument     = _FixedPrice.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem = _FixedPrice.PricingDocumentItem

  association [0..*] to I_StatusObjectUUIDStatus      as _StatusObjItemStatus           on  $projection.ServiceDocumentItemUUID = _StatusObjItemStatus.StatusObjectUUID
  //

  association [0..1] to I_SalesOrganization           as _SalesOrganization             on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization

  association [0..1] to I_SalesOffice                 as _SalesOffice                   on  $projection.SalesOffice = _SalesOffice.SalesOffice

  association [0..1] to I_SalesGroup                  as _SalesGroup                    on  $projection.SalesGroup = _SalesGroup.SalesGroup

  association [0..1] to I_DistributionChannel         as _DistributionChannel           on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel

  association [0..1] to I_Division                    as _Division                      on  $projection.Division = _Division.Division

  association [0..1] to I_TimeSheetOvertimeCat        as _ServiceDocOvertimeCat         on  $projection.TimeSheetOvertimeCategory = _ServiceDocOvertimeCat.TimeSheetOvertimeCategory

  association [0..1] to I_CustomerSupplierIndustry    as _Industry                      on  $projection.Industry = _Industry.Industry

  association [0..1] to I_SalesDocumentRjcnReason     as _ServiceDocItemRejectionReason on  $projection.ServiceDocItemRejectionReason = _ServiceDocItemRejectionReason.SalesDocumentRjcnReason

  association [0..1] to I_Region                      as _SoldToPartyRegion             on  $projection.SoldToPartyRegion  = _SoldToPartyRegion.Region
                                                                                        and $projection.SoldToPartyCountry = _SoldToPartyRegion.Country

  association [0..1] to I_Country                     as _SoldToPartyCountry            on  $projection.SoldToPartyCountry = _SoldToPartyCountry.Country

  association [0..1] to I_RespyMgmtTeamHeaderDetail   as _ServiceTeamHeader             on  $projection.RespyMgmtServiceTeam = _ServiceTeamHeader.RespyMgmtTeamID


  association [0..1] to E_ServiceDocumentItem         as _ServiceDocItemExt             on  $projection.ServiceObjectType   = _ServiceDocItemExt.ServiceCategory
                                                                                        and $projection.ServiceDocument     = _ServiceDocItemExt.ServiceOrderItem
                                                                                        and $projection.ServiceDocumentItem = _ServiceDocItemExt.ServiceLineExternalID
  association [0..1] to I_SrvcMgmtDateRule            as _BillPlanDateRule              on  $projection.BillingPlanBillingDateRuleUUID = _BillPlanDateRule.CustMgmtDateRuleUUID

  association [0..1] to I_SrvcMgmtDateRule            as _SettlementDateRule            on  $projection.SettlementPeriodRuleUUID = _SettlementDateRule.CustMgmtDateRuleUUID

  association [0..1] to I_ResponseProfile             as _ResponseProfile               on  $projection.ResponseProfile = _ResponseProfile.ResponseProfile

  association [0..1] to I_ServiceProfile              as _ServiceProfile                on  $projection.ServiceProfile = _ServiceProfile.ServiceProfile

  association [0..1] to I_BillableControl             as _BillableControl               on  $projection.BillableControl = _BillableControl.BillableControl

  association [0..*] to I_ProfitCenter                as _ProfitCenter                  on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                        and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter

  association [0..1] to I_ControllingArea             as _ControllingArea               on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association of exact one to one I_Product           as _Product                       on  $projection.Product = _Product.Product

  association [0..1] to I_MaterialPricingGroup        as _MaterialPricingGroup        on  $projection.MaterialPricingGroup = _MaterialPricingGroup.MaterialPricingGroup

  association [0..1] to I_AdditionalMaterialGroup1    as _AdditionalMaterialGroup1      on  $projection.ProductGroup1 = _AdditionalMaterialGroup1.AdditionalMaterialGroup1

  association [0..1] to I_AdditionalMaterialGroup2    as _AdditionalMaterialGroup2      on  $projection.ProductGroup2 = _AdditionalMaterialGroup2.AdditionalMaterialGroup2

  association [0..1] to I_AdditionalMaterialGroup3    as _AdditionalMaterialGroup3      on  $projection.ProductGroup3 = _AdditionalMaterialGroup3.AdditionalMaterialGroup3

  association [0..1] to I_AdditionalMaterialGroup4    as _AdditionalMaterialGroup4      on  $projection.ProductGroup4 = _AdditionalMaterialGroup4.AdditionalMaterialGroup4

  association [0..1] to I_AdditionalMaterialGroup5    as _AdditionalMaterialGroup5      on  $projection.ProductGroup5 = _AdditionalMaterialGroup5.AdditionalMaterialGroup5

  association [0..1] to I_CustomerGroup               as _CustomerGroup                 on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup

  association [0..1] to I_AdditionalCustomerGroup1    as _AdditionalCustomerGroup1      on  $projection.AdditionalCustomerGroup1 = _AdditionalCustomerGroup1.AdditionalCustomerGroup1

  association [0..1] to I_AdditionalCustomerGroup2    as _AdditionalCustomerGroup2      on  $projection.AdditionalCustomerGroup2 = _AdditionalCustomerGroup2.AdditionalCustomerGroup2

  association [0..1] to I_AdditionalCustomerGroup3    as _AdditionalCustomerGroup3      on  $projection.AdditionalCustomerGroup3 = _AdditionalCustomerGroup3.AdditionalCustomerGroup3

  association [0..1] to I_AdditionalCustomerGroup4    as _AdditionalCustomerGroup4      on  $projection.AdditionalCustomerGroup4 = _AdditionalCustomerGroup4.AdditionalCustomerGroup4

  association [0..1] to I_AdditionalCustomerGroup5    as _AdditionalCustomerGroup5      on  $projection.AdditionalCustomerGroup5 = _AdditionalCustomerGroup5.AdditionalCustomerGroup5

  association [0..1] to I_SrvcDocTransferStatus       as _SrvcDocItemTransferStatus     on  $projection.SrvcDocItemTransferStatus = _SrvcDocItemTransferStatus.SrvcDocTransferStatus

  association [0..1] to I_SrvcDocItemCreditStatus     as _SrvcDocItemCreditStatus       on  $projection.SrvcDocItemCreditStatus = _SrvcDocItemCreditStatus.SrvcDocItemCreditStatus

  association [0..1] to I_SrvcDocItmBslnCostPostgStat as _SrvcDocItmBslnCostPostgStat   on  $projection.SrvcDocItmBslnCostPostgStatus = _SrvcDocItmBslnCostPostgStat.SrvcDocItmBslnCostPostgStatus

  association [0..1] to I_SrvcDocItmBslnCostPostgStat as _SrvcDocItmContinuousCostStat  on  $projection.SrvcDocItmContinuousCostStatus = _SrvcDocItmContinuousCostStat.SrvcDocItmBslnCostPostgStatus

  association [0..1] to I_SrvcDocExecutionStatus      as _SrvcDocExecutionStatus        on  $projection.SrvcDocItemExecutionStatus     = _SrvcDocExecutionStatus.SrvcDocExecutionStatus
                                                                                        and $projection.ServiceDocumentItemIsQuotation = _SrvcDocExecutionStatus.ServiceDocumentIsQuotation

  association of exact one to one I_Indicator         as _SrvcDocIsQuotation            on  $projection.ServiceDocumentItemIsQuotation = _SrvcDocIsQuotation.IndicatorValue
  association of exact one to one I_SrvcDocQuotationStatus_2         as _SrvcDocIsQuotation_2            on  $projection.ServiceDocumentItemIsQuotation = _SrvcDocIsQuotation_2.ServiceDocumentIsQuotation


{
      // Header Keys
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key objtype_h                                              as ServiceObjectType,
      @ObjectModel.foreignKey.association: '_ServiceDocument'
  key object_id                                              as ServiceDocument,
      @ObjectModel.text.element: ['ServiceDocumentItemDescription']
  key number_int                                             as ServiceDocumentItem,

      // Header Details
      description_h                                          as ServiceDocumentDescription,
      // Process Type is required for Search by Document Type view
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      process_type                                           as ServiceDocumentType,
      priority                                               as ServiceDocumentItemPriority,
      posting_date                                           as PostingDate,
      srv_rendered_date                                      as ServicesRenderedDate,
      //      order_date                           as SrvcDocItmPostingDateTime,
      //      valid_from                           as SrvcDocItmValdtyStartDateTime,
      //      valid_to                             as SrvcDocItmValdtyEndDateTime,
      cast( order_date as crms4_order_date preserving type ) as SrvcDocItmPostingDateTime,
      cast( valid_from as crms4_valid_from preserving type ) as SrvcDocItmValdtyStartDateTime,
      cast( valid_to as crms4_valid_to preserving type )     as SrvcDocItmValdtyEndDateTime,

      // Item Details
      item_guid                                              as ServiceDocumentItemUUID,
      cast(item_guid_char as sysuuid_c preserving type )     as ServiceDocumentItemCharUUID,
      objtype_i                                              as ServiceDocumentItemObjectType,
      header_guid                                            as ServiceDocumentUUID,
      parent                                                 as ParentServiceDocumentItemUUID,
      @Semantics.text: true
      description_i                                          as ServiceDocumentItemDescription,
      itm_language                                           as Language,
      template_type                                          as ServiceDocumentTemplateType,
      created_at_i                                           as ServiceDocItemCreationDateTime,
      changed_at_i                                           as ServiceDocItemChangedDateTime,
      created_by_i                                           as ServiceDocItemCreatedByUser,
      changed_by_i                                           as ServiceDocItemChangedByUser,
      ordered_prod                                           as OriginallyRequestedProduct,
      @ObjectModel.foreignKey.association: '_Product'
      product_id                                             as Product, //represents MATNR & is added to enable JOIN with MVKE
      @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
      itm_type                                               as ServiceDocItemCategory,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      profit_center                                          as ProfitCenter,
      cost_center                                            as ResponsibleCostCenter,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      kokrs                                                  as ControllingArea,
      profit_determine_date                                  as ProfitCenterDeterminationDate,
      refbussolnord                                          as RefBusinessSolutionOrder,
      refbussolnorditm                                       as RefBusinessSolutionOrderItem,

      // Item - Cumulated Value
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ordered_quantity                                       as SrvcDocItmRequestedQuantity,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      billed_value                                           as InvoiceAmountInInvoiceDocCrcy,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      billed_quantity                                        as InvoiceQuantity,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      dlv_quantity                                           as SrvcDocItmDeliveredQuantity,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      released_quantity                                      as SrvcDocItmReleasedQuantity,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      confirmed_qty                                          as CumulativeConfirmedQuantity,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      released_value                                         as SrvcDocItmReldAmtInTransCrcy,

      // Item - Product
      process_qty_num                                        as SrvcDocItmOrdToBaseQtyNmrtr,
      process_qty_den                                        as SrvcDocItmOrdToBaseQtyDnmntr,
      exponent10                                             as OrderToBaseQuantityExponent,
      @ObjectModel.foreignKey.association: '_SalesUnit'
      //@Semantics.unitOfMeasure:true
      process_qty_unit                                       as ServiceDocItemQuantityUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit'
      //@Semantics.unitOfMeasure:true
      base_qty_unit                                          as SrvcDocItemBaseQuantityUnit,
      prod_hierarchy_relevance                               as SrvcDocItemIsRlvtForProdHier,
      prodh_parent_node_uuid                                 as SlsProdHierarchyParentNodeUUID,
      prod_hierarchy_ori                                     as SrvcDocItmProdHierarchyOrigin,

      // Billing Set
      bill_date                                              as BillingDateTime,
      invcr_date                                             as BillingDocCreationDateTime,
      billplan_timezone                                      as BillingPlanTimeZone,

      // Item Pricing
      price_source                                           as BillingPriceSourceName,

      // Partner Details
      @ObjectModel.foreignKey.association: '_SoldToParty'
      sold_to_party                                          as SoldToParty,
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      sold_to_country                                        as SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      sold_to_region                                         as SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      person_resp                                            as RespEmployeeBusinessPartnerId,
      @ObjectModel.foreignKey.association: '_ServiceEmployee'
      service_employee                                       as ServiceEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      contact_person                                         as ContactPersonBusinessPartnerId,
      @ObjectModel.foreignKey.association: '_PayerParty'
      payer                                                  as PayerParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      bill_to_party                                          as BillToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ship_to_party                                          as ShipToParty,

      // Status
      @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
      stat_lifecycle                                         as ServiceDocumentItemStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocItemHasError'
      @Semantics.booleanIndicator: true
      stat_error                                             as ServiceDocumentItemHasError,
      @ObjectModel.foreignKey.association: '_ServiceDocItemBillingStatus'
      stat_billing                                           as ServiceDocItemBillingStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocItemIsRelForBillgSts'
      @Semantics.booleanIndicator: true
      stat_for_billing                                       as SrvcDocItmIsReleasedForBilling,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      @Semantics.booleanIndicator: true
      stat_open                                              as ServiceDocumentItemIsOpen,
      stat_delivery                                          as SrvcDocItmDeliveryStatus,
      stat_goods_issue                                       as SrvcDocItmGoodsIssueStatus,
      @Semantics.booleanIndicator: true
      stat_released                                          as ServiceDocumentItemIsReleased,
      @Semantics.booleanIndicator: true
      stat_cancelled                                         as ServiceDocumentItemIsRejected,

      @ObjectModel.foreignKey.association: '_SrvcDocIsQuotation_2'
      @Semantics.booleanIndicator: true
      stat_quotation                                         as ServiceDocumentItemIsQuotation,

      @ObjectModel.foreignKey.association: '_SrvcDocItemTransferStatus'
      stat_transfer                                          as SrvcDocItemTransferStatus,

      @ObjectModel.foreignKey.association: '_SrvcDocExecutionStatus'
      stat_maintenance                                       as SrvcDocItemExecutionStatus,
      // Item - Schedule Line
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      order_qty                                              as ServiceDocumentItemQuantity,

      // Pricing Parameter Set
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      currency                                               as TransactionCurrency,
      ref_currency                                           as StatisticsCurrency,
      exchg_type                                             as ExchangeRateType,
      exchg_date                                             as ExchangeRateDate,
      cast(exchg_rate as fis_exchange_rate preserving type ) as AccountingExchangeRate,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      pmnttrms                                               as PaymentTerms,

      @ObjectModel.foreignKey.association: '_PaymentMethod'
      payment_method                                         as PaymentMethod,

      @ObjectModel.foreignKey.association: '_SrvcSEPAMandateRelevance'
      sepa_on                                                as SrvcSEPAMandateRelevance,
      mandate_id                                             as SEPAMandate,

      wbs_element                                            as WBSElementInternalID,

      @ObjectModel.foreignKey.association: '_BillableControl'
      ac_indicator                                           as BillableControl,

      // Item - Pricing
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      net_value_i                                            as ServiceDocumentItemNetAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      tax_amount_i                                           as ServiceDocumentItemTaxAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      gross_value_i                                          as ServiceDocItemGrossAmount,

      // Billing Set
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      billing_block                                          as BillingBlockReason,

      // Item Product
      
      @ObjectModel.foreignKey.association: '_MaterialPricingGroup'
      prod_pr_group                                          as MaterialPricingGroup,

      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      prc_group1                                             as ProductGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      prc_group2                                             as ProductGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      prc_group3                                             as ProductGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      prc_group4                                             as ProductGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      prc_group5                                             as ProductGroup5,


      // Item - Sales Set
      @ObjectModel.foreignKey.association: '_Industry'
      industry                                               as Industry,
      po_number_sold                                         as PurchaseOrderByCustomer,
      po_number_ship                                         as PurchaseOrderByShipToParty,
      @ObjectModel.foreignKey.association: '_ServiceDocItemRejectionReason'
      rejection                                              as ServiceDocItemRejectionReason,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      cust_group                                             as CustomerGroup,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      cust_group1                                            as AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      cust_group2                                            as AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      cust_group3                                            as AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      cust_group4                                            as AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      cust_group5                                            as AdditionalCustomerGroup5,
      plant                                                  as Plant,

      // Item - Billing Plan
      billplan_d_rule_period_date                            as SettlementPeriodRuleUUID,
      billplan_d_rule_bill_date                              as BillingPlanBillingDateRuleUUID,
      billplan_d_rule_price_date                             as BillingPlanPriceDateRule,
      billingplanisfinalized                                 as BillingPlanIsFinalized,

      // Organization Unit Set

      @ObjectModel.foreignKey.association: '_DistributionChannel'
      dis_channel                                            as DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      division                                               as Division,
      sales_org_resp                                         as ResponsibleSalesOrganization,

      // Organizational units with the S/4 SD codes
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      sales_org_sd                                           as SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      sales_office_sd                                        as SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      sales_group_sd                                         as SalesGroup,

      // Service Organizational Units with S/4 Code
      service_team_rm                                        as RespyMgmtServiceTeam,

      //Service Organization-Enterprise Project
      proj_org_id                                            as EnterpriseProjectServiceOrg,

      // Dates
      srv_cust_beg                                           as RequestedServiceStartDateTime,
      srv_cust_end                                           as RequestedServiceEndDateTime,
      contstart                                              as ServiceContrItemStartDateTime,
      contend                                                as ServiceContrItemEndDateTime,
      srv_rfirst                                             as ServiceFirstResponseByDateTime,
      srv_rready                                             as SrvcDocItemSLADueByDateTime,
      srvc_actual                                            as ActualServiceStartDateTime,
      srvc_act_to                                            as ActualServiceEndDateTime,

     
      srq_work_dura_2                                        as ServiceWorkDuration,
      srq_work_unit                                          as ServiceWorkDurationUnit,

      @Semantics.dateTime: true
      auto_renew_start                                       as SrvcContrItemRenewalDateTime,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      auto_renew_period                                      as SrvcContrItemRnwlDuration,
      @ObjectModel.foreignKey.association: '_SrvcContrItemRnwlDurationUnit'
      auto_renew_period_unit                                 as SrvcContrItemRnwlDurationUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      auto_renew_exten                                       as SrvcContrItemExtensionDuration,
      @ObjectModel.foreignKey.association: '_SrvcContrItemExtnDurationUnit'
      auto_renew_exten_unit                                  as SrvcContrItemExtnDurationUnit,
      spla_planfr                                            as PlannedServiceStartDateTime,
      spla_planto                                            as PlannedServiceEndDateTime,

      itm_usage                                              as SrvcDocSubitemOrigin,

      // Item - Service
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ActualServiceDurationUnit'} }
      srv_conf_time                                          as ActualServiceDuration,
      @ObjectModel.foreignKey.association: '_ActualServiceDurationUnit'
      srv_conf_tunit                                         as ActualServiceDurationUnit,
      confirm_relevant                                       as SrvcOrderConfirmationRelevance, // Despite the DB field name, this is not a boolean value
      @ObjectModel.foreignKey.association: '_ResponseProfile'
      srv_escal                                              as ResponseProfile,
      @ObjectModel.foreignKey.association: '_ServiceProfile'
      srv_serwi                                              as ServiceProfile,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDurationUnit'} }
      duration                                               as ServiceDuration,
      @ObjectModel.foreignKey.association: '_ServiceDurationUnit'
      duration_unit                                          as ServiceDurationUnit,
      @ObjectModel.foreignKey.association: '_ServiceDocOvertimeCat'
      overtime_cat                                           as TimeSheetOvertimeCategory,

      // Business Solution Quotation

      contract_account                                       as ContractAccount,
      probability                                            as ItemOrderProbabilityInPercent,
      @Semantics.booleanIndicator: true
      stat_accepted                                          as QuotationIsAccepted,

      int_obj_no                                             as ConfigurationNumber,
      incoterms1                                             as IncotermsPart1,
      incoterms2                                             as IncotermsPart2,
      dlv_prio                                               as DeliveryPriority,
      ordercombind                                           as OrderCombinationIsAllowed,
      part_dlv_itm                                           as PartialDeliveryIsAllowed,
      revacc_refid                                           as RevenueAccountingReference,
      revacc_reftype                                         as RevenueAccountingRefType,
      //      ac_object_type                                                                                 as SettAccAssgmntObjectType,
      //      ac_assignment                                                                                  as SettlementAccountAssignment,
      //       price_source                                                                                  as PriceSource,

      // Volume & Weights

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ItemWeightUnit'} }
      gross_weight_i                                         as ItemGrossWeight,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      net_weight_i                                           as ItemNetWeight,
      //@Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_WeightUnit'
      weight_unit_i                                          as ItemWeightUnit,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      volume_i                                               as ItemVolume,
      //@Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_VolumeUnit'
      volume_unit_i                                          as ItemVolumeUnit,

      

      price_grp                                              as CustomerPriceGroup,

      // Delivery details
      dlv_group                                              as DeliveryGroup,
      @ObjectModel.foreignKey.association: '_DeliveryBlockReason'
      delivery_block                                         as DeliveryBlockReason,

     // @Semantics.dateTime: true
      first_conf_date                                        as ErlstConfirmedDeliveryDateTime,

      //@Semantics.dateTime: true
      latest_conf_date                                       as LtstConfirmedDeliveryDateTime,


      cast(first_req_date as  tzntstmps preserving type )    as RequestedDeliveryDateTime,
      //      cast(first_conf_date as tzntstmps)   as FirstConfdDeliveryDateTime,

      // Item - Subscription specific data

      btmf_process                                           as SrvcTransChangeProcess,
      btmf_process_type                                      as SrvcTransChangeProcessType,
      ci_contract_item                                       as SrvcTransChgProcSourceItemUUID,
      @Semantics.booleanIndicator:true
      default_terms_ovrwrt                                   as SubscrpnContrTrmsAreSpecified,
      @Semantics.booleanIndicator:true
      midbillcycexprtnallwd                                  as MidBillgCycExprtnIsAllowed,
      subscrpnbillgcycle                                     as SubscriptionBillingCycle,
      @Semantics.uuid
      rate_plan_id                                           as SubscrpnBillgRatePlanCharUUID,
      

      // Cancellation
      cancparty                                              as ServiceDocumentItemCanclnParty,
      canc_reason                                            as ServiceDocumentItmCanclnReason,
      cancproc                                               as SrvcDocItmCanclnProcedure,

      // Auto renew
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocRnwlDurationUnit'} }
      auto_renew_period                                      as ServiceDocumentRnwlDuration,
      auto_renew_period_unit                                 as ServiceDocRnwlDurationUnit,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocExtnDurationUnit'} }
      auto_renew_exten                                       as ServiceDocExtensionDuration,
      auto_renew_exten_unit                                  as ServiceDocExtnDurationUnit,

      // Subscription Contract
      auto_renew_indicator                                   as SubscrpnContrAutoRnwlIsActv,

      // Credit Status
      @ObjectModel.foreignKey.association: '_SrvcDocItemCreditStatus'
      stat_credit                                            as SrvcDocItemCreditStatus,

      @ObjectModel.foreignKey.association: '_SrvcDocItmBslnCostPostgStat'
      stat_bsln_cost_postg                                   as SrvcDocItmBslnCostPostgStatus,

      // Cost Posting Status for Continuous Planning
      @ObjectModel.foreignKey.association: '_SrvcDocItmContinuousCostStat'
      stat_cont_cost_calc                                    as SrvcDocItmContinuousCostStatus,

      is_unplanned_item                                      as SrvcDocItemIsUnplanned,

      //Shipping
      ship_cond                                              as ShippingCondition,
      
      bundle_product_id                                      as BusSolnOrdItemBundleProduct,
      bundle_item_number                                     as BusSolnOrdItemBundleItem,

      // Associations
      // Item Key Association
      _ServiceObjType,
      _ServiceDocument,

      // Header Details
      _ServiceDocumentType,
      _ServiceDocItemPriority,

      // Item Details
      _ServiceDocItemCategory,
      _ProfitCenter,
      _ControllingArea,


      // Partner
      _SoldToParty,
      _RespEmployee,
      _ServiceEmployee,
      _ContactPerson,
      _PayerParty,
      _BillToParty,
      _ShipToParty,

      // Status
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocItmLifecycleStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocItemHasError,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocItemBillingStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocItemIsRelForBillgSts,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentIsOpen,

      // Billing Set
      _BillingBlockReason,

      _BillingRequestItem,
      _ServiceProductList,

      // Item - Product
      _BaseUnit,
      _SalesUnit,
      _WeightUnit,
      _VolumeUnit,
      _TransactionCurrency,
      _PaymentTerms,
      _PaymentMethod,

      //sepa mandate
      _SrvcSEPAMandateRelevance,

      _FixedPrice,
      _StatusObjItemStatus,



      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _Division,
      _DistributionChannel,
      _ServiceTeamHeader,



      _ServiceDocOvertimeCat,
      _Industry,
      _ServiceDocItemRejectionReason,
      _SoldToPartyRegion,
      _SoldToPartyCountry,
      _SettlementDateRule,
      _BillPlanDateRule,
      _ResponseProfile,
      _ServiceProfile,

      _BillableControl,
      _DeliveryBlockReason,



      _Product,
      _MaterialPricingGroup,
      _AdditionalMaterialGroup1,
      _AdditionalMaterialGroup2,
      _AdditionalMaterialGroup3,
      _AdditionalMaterialGroup4,
      _AdditionalMaterialGroup5,
      _CustomerGroup,
      _AdditionalCustomerGroup1,
      _AdditionalCustomerGroup2,
      _AdditionalCustomerGroup3,
      _AdditionalCustomerGroup4,
      _AdditionalCustomerGroup5,

      _SrvcDocItemTransferStatus,

      // Item - Service Assocations
      _ActualServiceDurationUnit,
      _ServiceDurationUnit,
      _SrvcContrItemRnwlDurationUnit,
      _SrvcContrItemExtnDurationUnit,

      // Credit Status association
      _SrvcDocItemCreditStatus,

      // Baseline Cost Posting status
      _SrvcDocItmBslnCostPostgStat,

      // Cost Calculation Status for Continuous Planning
      _SrvcDocItmContinuousCostStat,

      // Service Document Execution Status
      _SrvcDocExecutionStatus,
      
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: '_SrvcDocIsQuotation_2'
      _SrvcDocIsQuotation,
      
       @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocIsQuotation_2,

      //RAP : Inheritance of Complex Set
      item_no_partner                                        as SrvcDocItmPartReferenceItem,
      ref_guid_appt                                          as SrvcDocItmApptRefObjectUUID,
      item_no_appt                                           as SrvcDocItmApptReferenceItem
}
```
