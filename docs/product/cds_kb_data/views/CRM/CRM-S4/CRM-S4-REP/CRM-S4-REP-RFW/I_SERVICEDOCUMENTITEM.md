---
name: I_SERVICEDOCUMENTITEM
description: "Service DocumentUMENTITEM"
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
# I_SERVICEDOCUMENTITEM

**Service DocumentUMENTITEM**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceObjectType` | ✓ | |  | `objtype_h` |  |  |
| `ServiceDocument` | ✓ | |  | `object_id` |  |  |
| `ServiceDocumentItem` | ✓ | |  | `number_int` |  |  |
| `ServiceDocumentDescription` |  | |  | `description_h` |  |  |
| `ServiceDocumentType` |  | |  | `process_type` |  |  |
| `ServiceDocumentItemPriority` |  | |  | `priority` |  |  |
| `PostingDate` |  | |  | `posting_date` |  |  |
| `ServicesRenderedDate` |  | |  | `srv_rendered_date` |  |  |
| `SrvcDocItmPostingDateTime` |  | |  | `cast( order_date as crms4_order_date preserving type )` |  |  |
| `SrvcDocItmValdtyStartDateTime` |  | |  | `cast( valid_from as crms4_valid_from preserving type )` |  |  |
| `SrvcDocItmValdtyEndDateTime` |  | |  | `cast( valid_to as crms4_valid_to preserving type )` |  |  |
| `ServiceDocumentItemUUID` |  | |  | `item_guid` |  |  |
| `ServiceDocumentItemCharUUID` |  | |  | `item_guid_char` |  |  |
| `ServiceDocumentItemObjectType` |  | |  | `objtype_i` |  |  |
| `ServiceDocumentUUID` |  | |  | `header_guid` |  |  |
| `ParentServiceDocumentItemUUID` |  | |  | `parent` |  |  |
| `ServiceDocumentItemDescription` |  | |  | `description_i` |  |  |
| `Language` |  | |  | `itm_language` |  |  |
| `ServiceDocumentTemplateType` |  | |  | `template_type` |  |  |
| `ServiceDocItemCreationDateTime` |  | |  | `created_at_i` |  |  |
| `ServiceDocItemChangedDateTime` |  | |  | `changed_at_i` |  |  |
| `ServiceDocItemCreatedByUser` |  | |  | `created_by_i` |  |  |
| `ServiceDocItemChangedByUser` |  | |  | `changed_by_i` |  |  |
| `OriginallyRequestedProduct` |  | |  | `ordered_prod` |  |  |
| `Product` |  | |  | `product_id` |  |  |
| `ServiceDocItemCategory` |  | |  | `itm_type` |  |  |
| `ProfitCenter` |  | |  | `profit_center` |  |  |
| `ResponsibleCostCenter` |  | |  | `cost_center` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `ProfitCenterDeterminationDate` |  | |  | `profit_determine_date` |  |  |
| `RefBusinessSolutionOrder` |  | |  | `refbussolnord` |  |  |
| `RefBusinessSolutionOrderItem` |  | |  | `refbussolnorditm` |  |  |
| `BusSolnOrdItemBundleProduct` |  | |  | `bundle_product_id` |  |  |
| `BusSolnOrdItemBundleItem` |  | |  | `bundle_item_number` |  |  |
| `SrvcDocItmRequestedQuantity` |  | |  | `ordered_quantity` |  |  |
| `InvoiceAmountInInvoiceDocCrcy` |  | |  | `billed_value` |  |  |
| `InvoiceQuantity` |  | |  | `billed_quantity` |  |  |
| `SrvcDocItmDeliveredQuantity` |  | |  | `dlv_quantity` |  |  |
| `SrvcDocItmReleasedQuantity` |  | |  | `released_quantity` |  |  |
| `CumulativeConfirmedQuantity` |  | |  | `confirmed_qty` |  |  |
| `SrvcDocItmReldAmtInTransCrcy` |  | |  | `released_value` |  |  |
| `SrvcDocItemCumulatedNetAmount` |  | |  | `main_item_cum_net_value` |  |  |
| `SrvcDocItmOrdToBaseQtyNmrtr` |  | |  | `process_qty_num` |  |  |
| `SrvcDocItmOrdToBaseQtyDnmntr` |  | |  | `process_qty_den` |  |  |
| `OrderToBaseQuantityExponent` |  | |  | `exponent10` |  |  |
| `ServiceDocItemQuantityUnit` |  | |  | `process_qty_unit` |  |  |
| `SrvcDocItemBaseQuantityUnit` |  | |  | `base_qty_unit` |  |  |
| `SrvcDocItemIsRlvtForProdHier` |  | |  | `prod_hierarchy_relevance` |  |  |
| `SlsProdHierarchyParentNodeUUID` |  | |  | `prodh_parent_node_uuid` |  |  |
| `SrvcDocItmProdHierarchyOrigin` |  | |  | `prod_hierarchy_ori` |  |  |
| `BillingDateTime` |  | |  | `bill_date` |  |  |
| `BillingDocCreationDateTime` |  | |  | `invcr_date` |  |  |
| `BillingPlanTimeZone` |  | |  | `billplan_timezone` |  |  |
| `BillingPriceSourceName` |  | |  | `price_source` |  |  |
| `SoldToParty` |  | |  | `sold_to_party` |  |  |
| `SoldToPartyCountry` |  | |  | `sold_to_country` |  |  |
| `SoldToPartyRegion` |  | |  | `sold_to_region` |  |  |
| `ServiceTeam` |  | |  | `service_team` |  |  |
| `ResponsibleEmployee` |  | |  | `person_resp` |  |  |
| `ServiceEmployee` |  | |  | `service_employee` |  |  |
| `ContactPerson` |  | |  | `contact_person` |  |  |
| `PayerParty` |  | |  | `payer` |  |  |
| `BillToParty` |  | |  | `bill_to_party` |  |  |
| `ShipToParty` |  | |  | `ship_to_party` |  |  |
| `ServiceDocumentItemStatus` |  | |  | `stat_lifecycle` |  |  |
| `ServiceDocumentItemHasError` |  | |  | `stat_error` |  |  |
| `ServiceDocItemBillingStatus` |  | |  | `stat_billing` |  |  |
| `SrvcDocItmIsReleasedForBilling` |  | |  | `stat_for_billing` |  |  |
| `ServiceDocumentItemIsOpen` |  | |  | `stat_open` |  |  |
| `SrvcDocItmDeliveryStatus` |  | |  | `stat_delivery` |  |  |
| `SrvcDocItmGoodsIssueStatus` |  | |  | `stat_goods_issue` |  |  |
| `ServiceDocumentItemIsReleased` |  | |  | `stat_released` |  |  |
| `ServiceDocumentItemIsRejected` |  | |  | `stat_cancelled` |  |  |
| `SrvcDocItemIsWithdrawn` |  | |  | `stat_withdrawn` |  |  |
| `ServiceDocumentItemIsQuotation` |  | |  | `stat_quotation` |  |  |
| `SrvcDocItemTransferStatus` |  | |  | `stat_transfer` |  |  |
| `MaintSrvcOrdExecutionStatus` |  | |  | `stat_maintenance` |  |  |
| `SrvcDocItemExecutionStatus` |  | |  | `stat_maintenance` |  |  |
| `ServiceDocumentItemQuantity` |  | |  | `order_qty` |  |  |
| `TransactionCurrency` |  | |  | `currency` |  |  |
| `StatisticsCurrency` |  | |  | `ref_currency` |  |  |
| `ExchangeRateType` |  | |  | `exchg_type` |  |  |
| `ExchangeRateDate` |  | |  | `exchg_date` |  |  |
| `AccountingExchangeRate` |  | |  | `exchg_rate` |  |  |
| `PaymentTerms` |  | |  | `pmnttrms` |  |  |
| `PaymentMethod` |  | |  | `payment_method` |  |  |
| `SrvcSEPAMandateRelevance` |  | |  | `sepa_on` |  |  |
| `SEPAMandate` |  | |  | `mandate_id` |  |  |
| `WBSElementInternalID` |  | |  | `wbs_element` |  |  |
| `BillableControl` |  | |  | `ac_indicator` |  |  |
| `VATRegistrationCountry` |  | |  | `tax_dest_cty` |  |  |
| `ProductTaxClassification1` |  | |  | `taxm1` |  |  |
| `ProductTaxClassification2` |  | |  | `taxm2` |  |  |
| `ProductTaxClassification3` |  | |  | `taxm3` |  |  |
| `ProductTaxClassification4` |  | |  | `taxm4` |  |  |
| `ProductTaxClassification5` |  | |  | `taxm5` |  |  |
| `ProductTaxClassification6` |  | |  | `taxm6` |  |  |
| `ProductTaxClassification7` |  | |  | `taxm7` |  |  |
| `ProductTaxClassification8` |  | |  | `taxm8` |  |  |
| `ProductTaxClassification9` |  | |  | `taxm9` |  |  |
| `ServiceDocumentItemNetAmount` |  | |  | `net_value_i` |  |  |
| `ServiceDocumentItemTaxAmount` |  | |  | `tax_amount_i` |  |  |
| `ServiceDocItemGrossAmount` |  | |  | `gross_value_i` |  |  |
| `ServiceDocumentItemNetPrice` |  | |  | `net_price_i` |  |  |
| `BillingBlockReason` |  | |  | `billing_block` |  |  |
| `SrvcDocItmBillingRelevance` |  | |  | `billing_relevance` |  |  |
| `DynItemProcessorPrfl` |  | |  | `dip_profile` |  |  |
| `ProductGroup` |  | |  | `prod_pr_group` |  |  |
| `SrvcMaterialPricingGroup` |  | |  | `prod_pr_group` |  |  |
| `MaterialPricingGroup_2` |  | |  | `prod_pr_group` |  |  |
| `ProductGroup1` |  | |  | `prc_group1` |  |  |
| `ProductGroup2` |  | |  | `prc_group2` |  |  |
| `ProductGroup3` |  | |  | `prc_group3` |  |  |
| `ProductGroup4` |  | |  | `prc_group4` |  |  |
| `ProductGroup5` |  | |  | `prc_group5` |  |  |
| `ProductHierarchy` |  | |  | `prod_hierarchy` |  |  |
| `Industry` |  | |  | `industry` |  |  |
| `PurchaseOrderByCustomer` |  | |  | `po_number_sold` |  |  |
| `PurchaseOrderByShipToParty` |  | |  | `po_number_ship` |  |  |
| `ServiceDocItemRejectionReason` |  | |  | `rejection` |  |  |
| `CustomerGroup` |  | |  | `cust_group` |  |  |
| `AdditionalCustomerGroup1` |  | |  | `cust_group1` |  |  |
| `AdditionalCustomerGroup2` |  | |  | `cust_group2` |  |  |
| `AdditionalCustomerGroup3` |  | |  | `cust_group3` |  |  |
| `AdditionalCustomerGroup4` |  | |  | `cust_group4` |  |  |
| `AdditionalCustomerGroup5` |  | |  | `cust_group5` |  |  |
| `Plant` |  | |  | `plant` |  |  |
| `ServiceSchema1Category1UUID` |  | |  | `catlvlguid01_01` |  |  |
| `ServiceSchema1Category2UUID` |  | |  | `catlvlguid02_01` |  |  |
| `ServiceSchema1Category3UUID` |  | |  | `catlvlguid03_01` |  |  |
| `ServiceSchema1Category4UUID` |  | |  | `catlvlguid04_01` |  |  |
| `ServiceSchema1Category5UUID` |  | |  | `catlvlguid05_01` |  |  |
| `ServiceSchema1Category6UUID` |  | |  | `catlvlguid06_01` |  |  |
| `ServiceSchema1Category7UUID` |  | |  | `catlvlguid07_01` |  |  |
| `ServiceSchema1Category8UUID` |  | |  | `catlvlguid08_01` |  |  |
| `ServiceSchema1Category9UUID` |  | |  | `catlvlguid09_01` |  |  |
| `ServiceSchema1Category10UUID` |  | |  | `catlvlguid10_01` |  |  |
| `SrvcCatztnSchema1` |  | |  | `asp_id_01` |  |  |
| `SrvcCatztnSchemaCategory1` |  | |  | `cat_id_01` |  |  |
| `ServiceSchema2Category1UUID` |  | |  | `catlvlguid01_02` |  |  |
| `ServiceSchema2Category2UUID` |  | |  | `catlvlguid02_02` |  |  |
| `ServiceSchema2Category3UUID` |  | |  | `catlvlguid03_02` |  |  |
| `ServiceSchema2Category4UUID` |  | |  | `catlvlguid04_02` |  |  |
| `ServiceSchema2Category5UUID` |  | |  | `catlvlguid05_02` |  |  |
| `ServiceSchema2Category6UUID` |  | |  | `catlvlguid06_02` |  |  |
| `ServiceSchema2Category7UUID` |  | |  | `catlvlguid07_02` |  |  |
| `ServiceSchema2Category8UUID` |  | |  | `catlvlguid08_02` |  |  |
| `ServiceSchema2Category9UUID` |  | |  | `catlvlguid09_02` |  |  |
| `ServiceSchema2Category10UUID` |  | |  | `catlvlguid10_02` |  |  |
| `SrvcCatztnSchema2` |  | |  | `asp_id_02` |  |  |
| `SrvcCatztnSchemaCategory2` |  | |  | `cat_id_02` |  |  |
| `SettlementPeriodRuleUUID` |  | |  | `billplan_d_rule_period_date` |  |  |
| `BillingPlanBillingDateRuleUUID` |  | |  | `billplan_d_rule_bill_date` |  |  |
| `BillingPlanPriceDateRule` |  | |  | `billplan_d_rule_price_date` |  |  |
| `BillingPlanIsFinalized` |  | |  | `billingplanisfinalized` |  |  |
| `SalesOrganizationOrgUnitID` |  | |  | `sales_org` |  |  |
| `SalesOfficeOrgUnitID` |  | |  | `sales_office` |  |  |
| `SalesGroupOrgUnitID` |  | |  | `sales_group` |  |  |
| `DistributionChannel` |  | |  | `dis_channel` |  |  |
| `Division` |  | |  | `division` |  |  |
| `ResponsibleSalesOrganization` |  | |  | `sales_org_resp` |  |  |
| `ServiceOrganization` |  | |  | `service_org` |  |  |
| `ResponsibleServiceOrganization` |  | |  | `service_org_resp` |  |  |
| `SalesOrganization` |  | |  | `sales_org_sd` |  |  |
| `SalesOffice` |  | |  | `sales_office_sd` |  |  |
| `SalesGroup` |  | |  | `sales_group_sd` |  |  |
| `RespyMgmtServiceTeam` |  | |  | `service_team_rm` |  |  |
| `EnterpriseServiceOrganization` |  | |  | `enterprise_service_org` |  |  |
| `EnterpriseProjectServiceOrg` |  | |  | `proj_org_id` |  |  |
| `RequestedServiceStartDateTime` |  | |  | `srv_cust_beg` |  |  |
| `RequestedServiceEndDateTime` |  | |  | `srv_cust_end` |  |  |
| `ServiceContrItemStartDateTime` |  | |  | `contstart` |  |  |
| `ServiceContrItemEndDateTime` |  | |  | `contend` |  |  |
| `ServiceFirstResponseByDateTime` |  | |  | `srv_rfirst` |  |  |
| `SrvcDocItemSLADueByDateTime` |  | |  | `srv_rready` |  |  |
| `ActualServiceStartDateTime` |  | |  | `srvc_actual` |  |  |
| `ActualServiceEndDateTime` |  | |  | `srvc_act_to` |  |  |
| `ServiceWorkDuration` |  | |  | `srq_work_dura` |  |  |
| `ServiceWorkDuration_2` |  | |  | `srq_work_dura_2` |  |  |
| `ServiceWorkDurationUnit` |  | |  | `srq_work_unit` |  |  |
| `SrvcDocItmTmeSliceStrtDteTme` |  | |  | `cont_start_ts` |  |  |
| `SrvcDocItmTmeSliceEndDteTme` |  | |  | `cont_end_ts` |  |  |
| `SrvcContrItemRenewalDateTime` |  | |  | `auto_renew_start` |  |  |
| `SrvcContrItemRnwlDuration` |  | |  | `auto_renew_period` |  |  |
| `SrvcContrItemRnwlDurationUnit` |  | |  | `auto_renew_period_unit` |  |  |
| `SrvcContrItemExtensionDuration` |  | |  | `auto_renew_exten` |  |  |
| `SrvcContrItemExtnDurationUnit` |  | |  | `auto_renew_exten_unit` |  |  |
| `PlannedServiceStartDateTime` |  | |  | `spla_planfr` |  |  |
| `PlannedServiceEndDateTime` |  | |  | `spla_planto` |  |  |
| `SrvcDocItemGracePeriod` |  | |  | `grace_period` |  |  |
| `SrvcDocItemGracePeriodUnit` |  | |  | `grace_period_unit` |  |  |
| `SrvcDocItmGrcePerdEndDateTime` |  | |  | `grace_period_end` |  |  |
| `SbscrContrItmBizValdStrtDteTme` |  | |  | `biz_valid_start` |  |  |
| `SbscrContrItmBizValdEndDteTme` |  | |  | `biz_valid_end` |  |  |
| `SrvcDocSubitemOrigin` |  | |  | `itm_usage` |  |  |
| `SrvcDocItmAcctAssgmtObjectType` |  | |  | `cast(ac_object_type as crmt_ac_object_type_no_conv preserving type )` |  |  |
| `SrvcDocItmAcctAssgmtObject` |  | |  | `ac_assignment` |  |  |
| `ActualServiceDuration` |  | |  | `srv_conf_time` |  |  |
| `ActualServiceDurationUnit` |  | |  | `srv_conf_tunit` |  |  |
| `SrvcOrderConfirmationRelevance` |  | |  | `confirm_relevant` |  |  |
| `ServiceTransactionChargeType` |  | |  | `service_type` |  |  |
| `SrvcTransactionValuationType` |  | |  | `valuation_type` |  |  |
| `ResponseProfile` |  | |  | `srv_escal` |  |  |
| `ServiceProfile` |  | |  | `srv_serwi` |  |  |
| `ServiceDuration` |  | |  | `duration` |  |  |
| `ServiceDurationUnit` |  | |  | `duration_unit` |  |  |
| `TimeSheetOvertimeCategory` |  | |  | `overtime_cat` |  |  |
| `MasterWarranty` |  | |  | `warranty_id` |  |  |
| `ContractAccount` |  | |  | `contract_account` |  |  |
| `ItemOrderProbabilityInPercent` |  | |  | `probability` |  |  |
| `QuotationIsAccepted` |  | |  | `stat_accepted` |  |  |
| `ConfigurationNumber` |  | |  | `int_obj_no` |  |  |
| `IncotermsPart1` |  | |  | `incoterms1` |  |  |
| `IncotermsPart2` |  | |  | `incoterms2` |  |  |
| `DeliveryPriority` |  | |  | `dlv_prio` |  |  |
| `OrderCombinationIsAllowed` |  | |  | `ordercombind` |  |  |
| `PartialDeliveryIsAllowed` |  | |  | `part_dlv_itm` |  |  |
| `CABillgCycle` |  | |  | `ci_billing_cycle` |  |  |
| `RevenueAccountingReference` |  | |  | `revacc_refid` |  |  |
| `RevenueAccountingRefType` |  | |  | `revacc_reftype` |  |  |
| `ItemGrossWeight` |  | |  | `gross_weight_i` |  |  |
| `ItemNetWeight` |  | |  | `net_weight_i` |  |  |
| `ItemWeightUnit` |  | |  | `weight_unit_i` |  |  |
| `ItemVolume` |  | |  | `volume_i` |  |  |
| `ItemVolumeUnit` |  | |  | `volume_unit_i` |  |  |
| `MaterialPricingGroup` |  | |  | `price_grp` |  |  |
| `CustomerPriceGroup` |  | |  | `price_grp` |  |  |
| `DeliveryGroup` |  | |  | `dlv_group` |  |  |
| `DeliveryBlockReason` |  | |  | `delivery_block` |  |  |
| `ErlstConfirmedDeliveryDateTime` |  | |  | `first_conf_date` |  |  |
| `LtstConfirmedDeliveryDateTime` |  | |  | `latest_conf_date` |  |  |
| `RequestedDeliveryDateTime` |  | |  | `cast(first_req_date as tzntstmps)` |  |  |
| `SubscrpnOrdProdSelType` |  | |  | `prod_sel_type` |  |  |
| `SubscriptionContract` |  | |  | `ci_contract_id` |  |  |
| `SrvcTransChangeProcess` |  | |  | `btmf_process` |  |  |
| `SrvcTransChangeProcessType` |  | |  | `btmf_process_type` |  |  |
| `SrvcTransChgProcSourceItemUUID` |  | |  | `ci_contract_item` |  |  |
| `CustMgmtMasterAgreement` |  | |  | `ma_head_objid` |  |  |
| `CustMgmtMstrAgrmtItem` |  | |  | `ma_item_objid` |  |  |
| `SubscrpnContrActivationStatus` |  | |  | `stat_activation` |  |  |
| `SubscrpnContrTimeSliceStatus` |  | |  | `stat_cont_ts` |  |  |
| `SharingContractID` |  | |  | `pool_agr_ref` |  |  |
| `CrsCatalogMappingVersionNumber` |  | |  | `ccm_version` |  |  |
| `CustMgmtMstrAgrmtParentItem` |  | |  | `ma_root_objid` |  |  |
| `SubscrpnContractSharingGroupID` |  | |  | `sharing_group_id` |  |  |
| `CAPartnerSettlementRule` |  | |  | `ci_partner_rule` |  |  |
| `ChangeProcessGroup` |  | |  | `changeprocessgroup` |  |  |
| `BusSolutionQtnItemIsPhased` |  | |  | `phase_indicator` |  |  |
| `BusSolnQtnItmPhasedPrdcssrItem` |  | |  | `successor_of` |  |  |
| `SubscriptionContractItem` |  | |  | `cont_ref_item` |  |  |
| `SrvcDocItemWithdrawalReason` |  | |  | `withdrawal_reason` |  |  |
| `SrvcDocItemRefundType` |  | |  | `refund_code` |  |  |
| `SrvcDocItmRecrrgChrgNetAmount` |  | |  | `recurring_charge` |  |  |
| `SubscrpnContrTrmsAreSpecified` |  | |  | `default_terms_ovrwrt` |  |  |
| `MidBillgCycExprtnIsAllowed` |  | |  | `midbillcycexprtnallwd` |  |  |
| `SrvcDocItmRecrrgChrgTaxAmount` |  | |  | `recurring_tax` |  |  |
| `SrvcDocItmRecrrgChrgGrossAmt` |  | |  | `recurring_gross` |  |  |
| `SrvcDocItmRecrrgChrgDuration` |  | |  | `rec_duration` |  |  |
| `SrvcDocItmRecrrgChrgDurnUnit` |  | |  | `rec_time_unit` |  |  |
| `SubscriptionContractReference` |  | |  | `cont_ref` |  |  |
| `SubscriptionBillingCycle` |  | |  | `subscrpnbillgcycle` |  |  |
| `SubscrpnBillgRatePlanCharUUID` |  | |  | `rate_plan_id` |  |  |
| `SubscriptionContractExternalID` |  | |  | `subscriptioncontractexternalid` |  |  |
| `SbscrShContrSvTrMtAgrItmUUID` |  | |  | `ma_share_ref` |  |  |
| `SbscrShContrSvTrMtAgrItmCstPrd` |  | |  | `ma_share_ref_prod_id` |  |  |
| `SvTrMtAgrItmIsFxdConfign` |  | |  | `case fix_config when 'A' then 'X' else '' end` |  |  |
| `SubscrpnContrItmBillgPlnCyc` |  | |  | `ci_billing_plan_cycle` |  |  |
| `SubscrpnOrdIsPending` |  | |  | `subscrp_stat_is_pndg` |  |  |
| `NrOfBillgCyclesBilledTogether` |  | |  | `billgcyc_billd_togthr_nr` |  |  |
| `ServiceDocumentItemCanclnParty` |  | |  | `cancparty` |  |  |
| `ServiceDocumentItmCanclnReason` |  | |  | `canc_reason` |  |  |
| `SrvcDocItmCanclnProcedure` |  | |  | `cancproc` |  |  |
| `ServiceDocumentRnwlDuration` |  | |  | `auto_renew_period` |  |  |
| `ServiceDocRnwlDurationUnit` |  | |  | `auto_renew_period_unit` |  |  |
| `ServiceDocExtensionDuration` |  | |  | `auto_renew_exten` |  |  |
| `ServiceDocExtnDurationUnit` |  | |  | `auto_renew_exten_unit` |  |  |
| `SubscrpnContrAutoRnwlIsActv` |  | |  | `auto_renew_indicator` |  |  |
| `ReferenceInHouseRepair` |  | |  | `ref_inhouse_repair` |  |  |
| `ReferenceInHouseRepairItem` |  | |  | `ref_inhouse_repair_item` |  |  |
| `RefInHouseRepairIsExisting` |  | |  | `has_ref_inhouse_repair` |  |  |
| `SrvcDocItemCreditStatus` |  | |  | `stat_credit` |  |  |
| `SrvcDocItmBslnCostPostgStatus` |  | |  | `stat_bsln_cost_postg` |  |  |
| `SrvcDocItmContinuousCostStatus` |  | |  | `stat_cont_cost_calc` |  |  |
| `SrvcDocItemConcurStatus` |  | |  | `stat_concur` |  |  |
| `SrvcDocItemIsUnplanned` |  | |  | `is_unplanned_item` |  |  |
| `ShippingCondition` |  | |  | `ship_cond` |  |  |
| `SrvcDocItmGoodsIssueQuantity` |  | |  | `gi_quantity` |  |  |
| `Batch` |  | |  | `batch` |  |  |
| `SrvcDocItmPartReferenceItem` |  | |  | `item_no_partner` |  |  |
| `SrvcDocItmApptRefObjectUUID` |  | |  | `ref_guid_appt` |  |  |
| `SrvcDocItmApptReferenceItem` |  | |  | `item_no_appt` |  |  |
| `SrvcDocItmRefObjReferenceItem` |  | |  | `item_no_refobj` |  |  |
| `_SoldToParty` | | ✓ | | | | |
| `_RespEmployee` | | ✓ | | | | |
| `_ServiceTeam` | | ✓ | | | | |
| `_ServiceEmployee` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocItemCategory` | | ✓ | | | | |
| `_ServiceDocItemPriority` | | ✓ | | | | |
| `_ServiceDocItemStatus` | | ✓ | | | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocItemBillingStatus` | | ✓ | | | | |
| `_SrvcDocItemIsRelForBillgSts` | | ✓ | | | | |
| `_ServiceDocItemHasError` | | ✓ | | | | |
| `_ServiceDocumentIsOpen` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceObjType` | | ✓ | | | | |
| `_BillingBlockReason` | | ✓ | | | | |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_BillingRequestItem` | | ✓ | | | | |
| `_ServiceProductList` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_BaseUnit_2` | | ✓ | | | | |
| `_SalesUnit` | | ✓ | | | | |
| `_ServiceDurationUnit` | | ✓ | | | | |
| `_ActualServiceDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemExtnDurationUnit` | | ✓ | | | | |
| `_SrvcContrItemRnwlDurationUnit` | | ✓ | | | | |
| `_VolumeUnit` | | ✓ | | | | |
| `_WeightUnit` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_SrvcSEPAMandateRelevance` | | ✓ | | | | |
| `_FixedPrice` | | ✓ | | | | |
| `_StatusObjItemStatus` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit` | | ✓ | | | | |
| `_RespSrvcOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit` | | ✓ | | | | |
| `_SalesOfficeOrgUnit` | | ✓ | | | | |
| `_SalesGroupOrgUnit` | | ✓ | | | | |
| `_SalesOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOfficeOrgUnit_2` | | ✓ | | | | |
| `_SalesGroupOrgUnit_2` | | ✓ | | | | |
| `_ServiceOrganizationOrgUnit_2` | | ✓ | | | | |
| `_RespSrvcOrganizationOrgUnit_2` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_ServiceDocOvertimeCat` | | ✓ | | | | |
| `_Industry` | | ✓ | | | | |
| `_ServiceDocItemRejectionReason` | | ✓ | | | | |
| `_SoldToPartyRegion` | | ✓ | | | | |
| `_SoldToPartyCountry` | | ✓ | | | | |
| `_VATRegistrationCountry` | | ✓ | | | | |
| `_ServiceTeamHeader` | | ✓ | | | | |
| `_EnterpriseServiceOrg` | | ✓ | | | | |
| `_BillPlanDateRule` | | ✓ | | | | |
| `_SettlementDateRule` | | ✓ | | | | |
| `_ResponseProfile` | | ✓ | | | | |
| `_ServiceProfile` | | ✓ | | | | |
| `_TechResource` | | ✓ | | | | |
| `_MasterAgrmtItem` | | ✓ | | | | |
| `_BillableControl` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_SrvcMgmtProductHierarchy` | | ✓ | | | | |
| `_SrvcMaterialPricingGroup` | | ✓ | | | | |
| `_MaterialPricingGroup_2` | | ✓ | | | | |
| `_AdditionalMaterialGroup1` | | ✓ | | | | |
| `_AdditionalMaterialGroup2` | | ✓ | | | | |
| `_AdditionalMaterialGroup3` | | ✓ | | | | |
| `_AdditionalMaterialGroup4` | | ✓ | | | | |
| `_AdditionalMaterialGroup5` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_AdditionalCustomerGroup1` | | ✓ | | | | |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_AdditionalCustomerGroup4` | | ✓ | | | | |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_SrvcDocItemTransferStatus` | | ✓ | | | | |
| `_SrvcDocItemCreditStatus` | | ✓ | | | | |
| `_SrvcDocItmBslnCostPostgStat` | | ✓ | | | | |
| `_SrvcDocItmContinuousCostStat` | | ✓ | | | | |
| `_SrvcDocExecutionStatus` | | ✓ | | | | |
| `_SrvcDocIsQuotation` | | ✓ | | | | |
| `_SrvcDocIsQuotation_2` | | ✓ | | | | |
| `_SrvcDocItemBillgRlvnce` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SoldToParty` | `I_BusinessPartner` | [0..1] |
| `_RespEmployee` | `I_BusinessPartner` | [0..1] |
| `_ServiceTeam` | `I_BusinessPartner` | [0..1] |
| `_ServiceEmployee` | `I_BusinessPartner` | [0..1] |
| `_ContactPerson` | `I_BusinessPartner` | [0..1] |
| `_PayerParty` | `I_BusinessPartner` | [0..1] |
| `_BillToParty` | `I_BusinessPartner` | [0..1] |
| `_ShipToParty` | `I_BusinessPartner` | [0..1] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceDocItemCategory` | `I_ServiceDocItemCategory` | [0..1] |
| `_ServiceDocItemPriority` | `I_ServiceDocumentPriority` | [0..1] |
| `_ServiceDocItemStatus` | `I_ServiceDocumentStatus` | [0..1] |
| `_SrvcDocItmLifecycleStatus` | `I_SrvcDocLifecycleStatus` | [0..1] |
| `_ServiceDocItemBillingStatus` | `I_ServiceDocBillingStatus` | [0..1] |
| `_SrvcDocItemIsRelForBillgSts` | `I_SrvcDocRelForBillgSts` | [0..1] |
| `_ServiceDocItemHasError` | `I_ServiceDocErrorStatus` | [0..1] |
| `_ServiceDocumentIsOpen` | `I_ServiceDocOpenStatus` | [0..1] |
| `_ServiceDocument` | `I_ServiceDocument` | [1..1] |
| `_ServiceObjType` | `I_CustMgmtBusObjType` | [1..1] |
| `_BillingBlockReason` | `I_BillingBlockReason` | [0..1] |
| `_DeliveryBlockReason` | `I_DeliveryBlockReason` | [0..1] |
| `_BillingRequestItem` | `I_BillingRequestItem` | [0..*] |
| `_ServiceProductList` | `I_ServiceProductList` | [0..*] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BaseUnit_2` | `I_UnitOfMeasure` | [0..1] |
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
| `_ServiceOrganizationOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_RespSrvcOrganizationOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesOrganizationOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesOfficeOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesGroupOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesOrganizationOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_SalesOfficeOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_SalesGroupOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_ServiceOrganizationOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_RespSrvcOrganizationOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
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
| `_VATRegistrationCountry` | `I_Country` | [0..1] |
| `_ServiceTeamHeader` | `I_RespyMgmtTeamHeaderDetail` | [0..1] |
| `_EnterpriseServiceOrg` | `I_EnterpriseServiceOrg` | [0..1] |
| `_ServiceDocItemExt` | `E_ServiceDocumentItem` | [0..1] |
| `_BillPlanDateRule` | `I_CustMgmtDateRule` | [0..1] |
| `_SettlementDateRule` | `I_CustMgmtDateRule` | [0..1] |
| `_ResponseProfile` | `I_ResponseProfile` | [0..1] |
| `_ServiceProfile` | `I_ServiceProfile` | [0..1] |
| `_TechResource` | `I_SubscrpnItmTechResource` | [0..*] |
| `_MasterAgrmtItem` | `I_CustMgmtMasterAgrmtItem` | [0..1] |
| `_BillableControl` | `I_BillableControl` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Product` | `I_Product` | [1..1] |
| `_ProductGroup` | `I_ProductGroup_2` | [0..1] |
| `_SrvcMgmtProductHierarchy` | `I_SrvcMgmtProductHierarchy` | [0..1] |
| `_SrvcMaterialPricingGroup` | `I_MaterialPricingGroup` | [0..1] |
| `_MaterialPricingGroup_2` | `I_MaterialPricingGroup` | [0..1] |
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
| `_SrvcDocIsQuotation` | `I_Indicator` | [1..1] |
| `_SrvcDocIsQuotation_2` | `I_SrvcDocQuotationStatus_2` | [1..1] |
| `_SrvcDocItemBillgRlvnce` | `I_SrvcDocItemBillgRlvnce` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction Item'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AbapCatalog: {
  sqlViewName: 'ISERVDOCITM',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl: {
  authorizationCheck: #CHECK,
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

define view I_ServiceDocumentItem
  as select from crms4d_serv_i
  association [0..1] to I_BusinessPartner             as _SoldToParty                   on  $projection.SoldToParty = _SoldToParty.BusinessPartner
  association [0..1] to I_BusinessPartner             as _RespEmployee                  on  $projection.ResponsibleEmployee = _RespEmployee.BusinessPartner
  association [0..1] to I_BusinessPartner             as _ServiceTeam                   on  $projection.ServiceTeam = _ServiceTeam.BusinessPartner
  association [0..1] to I_BusinessPartner             as _ServiceEmployee               on  $projection.ServiceEmployee = _ServiceEmployee.BusinessPartner
  association [0..1] to I_BusinessPartner             as _ContactPerson                 on  $projection.ContactPerson = _ContactPerson.BusinessPartner
  association [0..1] to I_BusinessPartner             as _PayerParty                    on  $projection.PayerParty = _PayerParty.BusinessPartner
  association [0..1] to I_BusinessPartner             as _BillToParty                   on  $projection.BillToParty = _BillToParty.BusinessPartner
  association [0..1] to I_BusinessPartner             as _ShipToParty                   on  $projection.ShipToParty = _ShipToParty.BusinessPartner

  association [0..1] to I_ServiceDocumentType         as _ServiceDocumentType           on  $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType
  association [0..1] to I_ServiceDocItemCategory      as _ServiceDocItemCategory        on  $projection.ServiceDocItemCategory = _ServiceDocItemCategory.ServiceDocItemCategory
  association [0..1] to I_ServiceDocumentPriority     as _ServiceDocItemPriority        on  $projection.ServiceDocumentItemPriority = _ServiceDocItemPriority.ServiceDocumentPriority
  association [0..1] to I_ServiceDocumentStatus       as _ServiceDocItemStatus          on  $projection.ServiceDocumentItemStatus = _ServiceDocItemStatus.ServiceDocumentStatus
  association [0..1] to I_SrvcDocLifecycleStatus      as _SrvcDocItmLifecycleStatus     on  $projection.ServiceDocumentItemStatus = _SrvcDocItmLifecycleStatus.ServiceDocumentStatus
  association [0..1] to I_ServiceDocBillingStatus     as _ServiceDocItemBillingStatus   on  $projection.ServiceDocItemBillingStatus = _ServiceDocItemBillingStatus.ServiceDocBillingStatus
  association [0..1] to I_SrvcDocRelForBillgSts       as _SrvcDocItemIsRelForBillgSts   on  $projection.SrvcDocItmIsReleasedForBilling = _SrvcDocItemIsRelForBillgSts.ServiceDocIsReleasedForBilling
  association [0..1] to I_ServiceDocErrorStatus       as _ServiceDocItemHasError        on  $projection.ServiceDocumentItemHasError = _ServiceDocItemHasError.ServiceDocumentHasError
  association [0..1] to I_ServiceDocOpenStatus        as _ServiceDocumentIsOpen         on  $projection.ServiceDocumentItemIsOpen = _ServiceDocumentIsOpen.ServiceDocumentIsOpen
  association [1..1] to I_ServiceDocument             as _ServiceDocument               on  $projection.ServiceObjectType = _ServiceDocument.ServiceObjectType
                                                                                        and $projection.ServiceDocument   = _ServiceDocument.ServiceDocument

  association [1..1] to I_CustMgmtBusObjType          as _ServiceObjType                on  $projection.ServiceObjectType = _ServiceObjType.BusinessObjectType

  association [0..1] to I_BillingBlockReason          as _BillingBlockReason            on  $projection.BillingBlockReason = _BillingBlockReason.BillingBlockReason
  association [0..1] to I_DeliveryBlockReason         as _DeliveryBlockReason           on  $projection.DeliveryBlockReason = _DeliveryBlockReason.DeliveryBlockReason

  association [0..*] to I_BillingRequestItem          as _BillingRequestItem            on  $projection.ServiceObjectType   = _BillingRequestItem.ServiceObjectType
                                                                                        and $projection.ServiceDocument     = _BillingRequestItem.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem = _BillingRequestItem.ServiceDocumentItem

  association [0..*] to I_ServiceProductList          as _ServiceProductList            on  $projection.ServiceObjectType   = _ServiceProductList.ServiceObjectType
                                                                                        and $projection.ServiceDocument     = _ServiceProductList.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem = _ServiceProductList.ServiceDocumentItem

  association [0..1] to I_UnitOfMeasure               as _BaseUnit                      on  $projection.ServiceDocItemQuantityUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _BaseUnit_2                    on  $projection.SrvcDocItemBaseQuantityUnit = _BaseUnit_2.UnitOfMeasure
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
                                                                                        and (
                                                                                           $projection.SalesOrganization             = _PaymentMethod.SalesOrganization
                                                                                           or $projection.SalesOrganizationOrgUnitID = _PaymentMethod.OrgUnitTypeIDConcatenated
                                                                                         )

  association [0..1] to I_SrvcSEPAMandateRelevance    as _SrvcSEPAMandateRelevance      on  $projection.SrvcSEPAMandateRelevance = _SrvcSEPAMandateRelevance.SrvcSEPAMandateRelevance

  association [0..1] to I_ServiceDocumentFixedPrice   as _FixedPrice                    on  $projection.ServiceObjectType   = _FixedPrice.ServiceObjectType
                                                                                        and $projection.ServiceDocument     = _FixedPrice.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem = _FixedPrice.PricingDocumentItem

  association [0..*] to I_StatusObjectUUIDStatus      as _StatusObjItemStatus           on  $projection.ServiceDocumentItemUUID = _StatusObjItemStatus.StatusObjectUUID

  association [0..1] to I_SalesOrganizationUnit       as _ServiceOrganizationOrgUnit    on  $projection.ServiceOrganization = _ServiceOrganizationOrgUnit.OrganizationalUnit

  association [0..1] to I_SalesOrganizationUnit       as _RespSrvcOrganizationOrgUnit   on  $projection.ResponsibleServiceOrganization = _RespSrvcOrganizationOrgUnit.OrganizationalUnit


  association [0..1] to I_SalesOrganizationUnit       as _SalesOrganizationOrgUnit      on  $projection.SalesOrganizationOrgUnitID = _SalesOrganizationOrgUnit.OrganizationalUnit

  association [0..1] to I_SalesOrganizationUnit       as _SalesOfficeOrgUnit            on  $projection.SalesOfficeOrgUnitID = _SalesOfficeOrgUnit.OrganizationalUnit

  association [0..1] to I_SalesOrganizationUnit       as _SalesGroupOrgUnit             on  $projection.SalesGroupOrgUnitID = _SalesGroupOrgUnit.OrganizationalUnit

  // Added to correct the CRM Organizational Unit
  association [0..1] to I_SrvcMgmtOrganizationUnit    as _SalesOrganizationOrgUnit_2    on  $projection.SalesOrganizationOrgUnitID = _SalesOrganizationOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit    as _SalesOfficeOrgUnit_2          on  $projection.SalesOfficeOrgUnitID = _SalesOfficeOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit    as _SalesGroupOrgUnit_2           on  $projection.SalesGroupOrgUnitID = _SalesGroupOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit    as _ServiceOrganizationOrgUnit_2  on  $projection.ServiceOrganization = _ServiceOrganizationOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit    as _RespSrvcOrganizationOrgUnit_2 on  $projection.ResponsibleServiceOrganization = _RespSrvcOrganizationOrgUnit_2.OrgUnitTypeIDConcatenated
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

  association [0..1] to I_Country                     as _VATRegistrationCountry        on  $projection.VATRegistrationCountry = _VATRegistrationCountry.Country

  association [0..1] to I_RespyMgmtTeamHeaderDetail   as _ServiceTeamHeader             on  $projection.RespyMgmtServiceTeam = _ServiceTeamHeader.RespyMgmtTeamID

  association [0..1] to I_EnterpriseServiceOrg        as _EnterpriseServiceOrg          on  $projection.EnterpriseServiceOrganization = _EnterpriseServiceOrg.EnterpriseServiceOrganization

  association [0..1] to E_ServiceDocumentItem         as _ServiceDocItemExt             on  $projection.ServiceObjectType   = _ServiceDocItemExt.ServiceCategory
                                                                                        and $projection.ServiceDocument     = _ServiceDocItemExt.ServiceOrderItem
                                                                                        and $projection.ServiceDocumentItem = _ServiceDocItemExt.ServiceLineExternalID
  association [0..1] to I_CustMgmtDateRule            as _BillPlanDateRule              on  $projection.BillingPlanBillingDateRuleUUID = _BillPlanDateRule.CustMgmtDateRuleUUID

  association [0..1] to I_CustMgmtDateRule            as _SettlementDateRule            on  $projection.SettlementPeriodRuleUUID = _SettlementDateRule.CustMgmtDateRuleUUID

  association [0..1] to I_ResponseProfile             as _ResponseProfile               on  $projection.ResponseProfile = _ResponseProfile.ResponseProfile

  association [0..1] to I_ServiceProfile              as _ServiceProfile                on  $projection.ServiceProfile = _ServiceProfile.ServiceProfile


  association [0..*] to I_SubscrpnItmTechResource     as _TechResource                  on  $projection.ServiceObjectType   = _TechResource.ServiceObjectType
                                                                                        and $projection.ServiceDocument     = _TechResource.ServiceDocument
                                                                                        and $projection.ServiceDocumentItem = _TechResource.ServiceDocumentItem

  association [0..1] to I_CustMgmtMasterAgrmtItem     as _MasterAgrmtItem               on  _MasterAgrmtItem.ServiceObjectType  = 'BUS2000267'
                                                                                        and $projection.CustMgmtMasterAgreement = _MasterAgrmtItem.CustMgmtMasterAgreement
                                                                                        and $projection.CustMgmtMstrAgrmtItem   = _MasterAgrmtItem.CustMgmtMstrAgrmtItem

  association [0..1] to I_BillableControl             as _BillableControl               on  $projection.BillableControl = _BillableControl.BillableControl

  association [0..*] to I_ProfitCenter                as _ProfitCenter                  on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                        and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter

  association [0..1] to I_ControllingArea             as _ControllingArea               on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [1..1] to I_Product                     as _Product                       on  $projection.Product = _Product.Product

  association [0..1] to I_ProductGroup_2              as _ProductGroup                  on  $projection.ProductGroup = _ProductGroup.ProductGroup

  association [0..1] to I_SrvcMgmtProductHierarchy    as _SrvcMgmtProductHierarchy      on  $projection.ProductHierarchy = _SrvcMgmtProductHierarchy.SrvcProductHierarchy

  association [0..1] to I_MaterialPricingGroup        as _SrvcMaterialPricingGroup      on  $projection.SrvcMaterialPricingGroup = _SrvcMaterialPricingGroup.MaterialPricingGroup

  association [0..1] to I_MaterialPricingGroup        as _MaterialPricingGroup_2        on  $projection.MaterialPricingGroup_2 = _MaterialPricingGroup_2.MaterialPricingGroup

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

  association [1..1] to I_Indicator                   as _SrvcDocIsQuotation            on  $projection.ServiceDocumentItemIsQuotation = _SrvcDocIsQuotation.IndicatorValue
  association [1..1] to I_SrvcDocQuotationStatus_2    as _SrvcDocIsQuotation_2          on  $projection.ServiceDocumentItemIsQuotation = _SrvcDocIsQuotation_2.ServiceDocumentIsQuotation

  association [1..1] to I_SrvcDocItemBillgRlvnce      as _SrvcDocItemBillgRlvnce        on  $projection.SrvcDocItmBillingRelevance = _SrvcDocItemBillgRlvnce.SrvcDocItmBillingRelevance
{
      // Header Keys
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key objtype_h                                                            as ServiceObjectType,
      @ObjectModel.foreignKey.association: '_ServiceDocument'
  key object_id                                                            as ServiceDocument,
      @ObjectModel.text.element: 'ServiceDocumentItemDescription'
  key number_int                                                           as ServiceDocumentItem,

      // Header Details
      description_h                                                        as ServiceDocumentDescription,
      // Process Type is required for Search by Document Type view
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      process_type                                                         as ServiceDocumentType,
      priority                                                             as ServiceDocumentItemPriority,
      posting_date                                                         as PostingDate,
      srv_rendered_date                                                    as ServicesRenderedDate,
      //      order_date                           as SrvcDocItmPostingDateTime,
      //      valid_from                           as SrvcDocItmValdtyStartDateTime,
      //      valid_to                             as SrvcDocItmValdtyEndDateTime,
      cast( order_date as crms4_order_date preserving type )               as SrvcDocItmPostingDateTime,
      cast( valid_from as crms4_valid_from preserving type )               as SrvcDocItmValdtyStartDateTime,
      cast( valid_to as crms4_valid_to preserving type )                   as SrvcDocItmValdtyEndDateTime,

      // Item Details
      item_guid                                                            as ServiceDocumentItemUUID,
      item_guid_char                                                       as ServiceDocumentItemCharUUID,
      objtype_i                                                            as ServiceDocumentItemObjectType,
      header_guid                                                          as ServiceDocumentUUID,
      parent                                                               as ParentServiceDocumentItemUUID,
      @Semantics.text: true
      description_i                                                        as ServiceDocumentItemDescription,
      itm_language                                                         as Language,
      template_type                                                        as ServiceDocumentTemplateType,
      created_at_i                                                         as ServiceDocItemCreationDateTime,
      changed_at_i                                                         as ServiceDocItemChangedDateTime,
      created_by_i                                                         as ServiceDocItemCreatedByUser,
      changed_by_i                                                         as ServiceDocItemChangedByUser,
      ordered_prod                                                         as OriginallyRequestedProduct,
      @ObjectModel.foreignKey.association: '_Product'
      product_id                                                           as Product, //represents MATNR & is added to enable JOIN with MVKE
      @ObjectModel.foreignKey.association: '_ServiceDocItemCategory'
      itm_type                                                             as ServiceDocItemCategory,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      profit_center                                                        as ProfitCenter,
      cost_center                                                          as ResponsibleCostCenter,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      kokrs                                                                as ControllingArea,
      profit_determine_date                                                as ProfitCenterDeterminationDate,
      refbussolnord                                                        as RefBusinessSolutionOrder,
      refbussolnorditm                                                     as RefBusinessSolutionOrderItem,
      bundle_product_id                                                    as BusSolnOrdItemBundleProduct,
      bundle_item_number                                                   as BusSolnOrdItemBundleItem,

      // Item - Cumulated Value
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ordered_quantity                                                     as SrvcDocItmRequestedQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      billed_value                                                         as InvoiceAmountInInvoiceDocCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      billed_quantity                                                      as InvoiceQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      dlv_quantity                                                         as SrvcDocItmDeliveredQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      released_quantity                                                    as SrvcDocItmReleasedQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      confirmed_qty                                                        as CumulativeConfirmedQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      released_value                                                       as SrvcDocItmReldAmtInTransCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      main_item_cum_net_value                                              as SrvcDocItemCumulatedNetAmount,

      // Item - Product
      process_qty_num                                                      as SrvcDocItmOrdToBaseQtyNmrtr,
      process_qty_den                                                      as SrvcDocItmOrdToBaseQtyDnmntr,
      exponent10                                                           as OrderToBaseQuantityExponent,
      @ObjectModel.foreignKey.association: '_SalesUnit'
      @Semantics.unitOfMeasure:true
      process_qty_unit                                                     as ServiceDocItemQuantityUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit_2'
      @Semantics.unitOfMeasure:true
      base_qty_unit                                                        as SrvcDocItemBaseQuantityUnit,
      prod_hierarchy_relevance                                             as SrvcDocItemIsRlvtForProdHier,
      prodh_parent_node_uuid                                               as SlsProdHierarchyParentNodeUUID,
      prod_hierarchy_ori                                                   as SrvcDocItmProdHierarchyOrigin,
      // Billing Set
      bill_date                                                            as BillingDateTime,
      invcr_date                                                           as BillingDocCreationDateTime,
      billplan_timezone                                                    as BillingPlanTimeZone,

      // Item Pricing
      price_source                                                         as BillingPriceSourceName,

      // Partner Details
      @ObjectModel.foreignKey.association: '_SoldToParty'
      sold_to_party                                                        as SoldToParty,
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      sold_to_country                                                      as SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      sold_to_region                                                       as SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_ServiceTeam'
      service_team                                                         as ServiceTeam,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      person_resp                                                          as ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ServiceEmployee'
      service_employee                                                     as ServiceEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      contact_person                                                       as ContactPerson,
      @ObjectModel.foreignKey.association: '_PayerParty'
      payer                                                                as PayerParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      bill_to_party                                                        as BillToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ship_to_party                                                        as ShipToParty,

      // Status
      @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
      stat_lifecycle                                                       as ServiceDocumentItemStatus,
      @ObjectModel.foreignKey.association: '_ServiceDocItemHasError'
      stat_error                                                           as ServiceDocumentItemHasError,
      @ObjectModel.foreignKey.association: '_ServiceDocItemBillingStatus'
      stat_billing                                                         as ServiceDocItemBillingStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocItemIsRelForBillgSts'
      stat_for_billing                                                     as SrvcDocItmIsReleasedForBilling,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      stat_open                                                            as ServiceDocumentItemIsOpen,
      stat_delivery                                                        as SrvcDocItmDeliveryStatus,
      stat_goods_issue                                                     as SrvcDocItmGoodsIssueStatus,
      stat_released                                                        as ServiceDocumentItemIsReleased,
      stat_cancelled                                                       as ServiceDocumentItemIsRejected,
      @Semantics.booleanIndicator:true
      stat_withdrawn                                                       as SrvcDocItemIsWithdrawn,
      @ObjectModel.foreignKey.association: '_SrvcDocIsQuotation_2'
      stat_quotation                                                       as ServiceDocumentItemIsQuotation,

      @ObjectModel.foreignKey.association: '_SrvcDocItemTransferStatus'
      stat_transfer                                                        as SrvcDocItemTransferStatus,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcDocItemExecutionStatus'
      stat_maintenance                                                     as MaintSrvcOrdExecutionStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocExecutionStatus'
      stat_maintenance                                                     as SrvcDocItemExecutionStatus,
      // Item - Schedule Line
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      order_qty                                                            as ServiceDocumentItemQuantity,

      // Pricing Parameter Set
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      currency                                                             as TransactionCurrency,
      ref_currency                                                         as StatisticsCurrency,
      exchg_type                                                           as ExchangeRateType,
      exchg_date                                                           as ExchangeRateDate,
      exchg_rate                                                           as AccountingExchangeRate,
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      pmnttrms                                                             as PaymentTerms,

      @ObjectModel.foreignKey.association: '_PaymentMethod'
      payment_method                                                       as PaymentMethod,

      @ObjectModel.foreignKey.association: '_SrvcSEPAMandateRelevance'
      sepa_on                                                              as SrvcSEPAMandateRelevance,
      mandate_id                                                           as SEPAMandate,

      wbs_element                                                          as WBSElementInternalID,

      @ObjectModel.foreignKey.association: '_BillableControl'
      ac_indicator                                                         as BillableControl,

      @ObjectModel.foreignKey.association: '_VATRegistrationCountry'
      tax_dest_cty                                                         as VATRegistrationCountry,
      taxm1                                                                as ProductTaxClassification1,
      taxm2                                                                as ProductTaxClassification2,
      taxm3                                                                as ProductTaxClassification3,
      taxm4                                                                as ProductTaxClassification4,
      taxm5                                                                as ProductTaxClassification5,
      taxm6                                                                as ProductTaxClassification6,
      taxm7                                                                as ProductTaxClassification7,
      taxm8                                                                as ProductTaxClassification8,
      taxm9                                                                as ProductTaxClassification9,

      // Item - Pricing
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      net_value_i                                                          as ServiceDocumentItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      tax_amount_i                                                         as ServiceDocumentItemTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      gross_value_i                                                        as ServiceDocItemGrossAmount,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      net_price_i                                                          as ServiceDocumentItemNetPrice,

      // Billing Set
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      billing_block                                                        as BillingBlockReason,
      @ObjectModel.foreignKey.association: '_SrvcDocItemBillgRlvnce'
      billing_relevance                                                    as SrvcDocItmBillingRelevance,
      dip_profile                                                          as DynItemProcessorPrfl,


      // Item Product
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcMaterialPricingGroup'
      @ObjectModel.foreignKey.association: '_ProductGroup'
      prod_pr_group                                                        as ProductGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'MaterialPricingGroup_2'
      @ObjectModel.foreignKey.association: '_SrvcMaterialPricingGroup'
      prod_pr_group                                                        as SrvcMaterialPricingGroup,
      @ObjectModel.foreignKey.association: '_MaterialPricingGroup_2'
      prod_pr_group                                                        as MaterialPricingGroup_2,

      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      prc_group1                                                           as ProductGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      prc_group2                                                           as ProductGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      prc_group3                                                           as ProductGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      prc_group4                                                           as ProductGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      prc_group5                                                           as ProductGroup5,
      @ObjectModel.foreignKey.association: '_SrvcMgmtProductHierarchy'
      prod_hierarchy                                                       as ProductHierarchy,

      // Item - Sales Set
      @ObjectModel.foreignKey.association: '_Industry'
      industry                                                             as Industry,
      po_number_sold                                                       as PurchaseOrderByCustomer,
      po_number_ship                                                       as PurchaseOrderByShipToParty,
      @ObjectModel.foreignKey.association: '_ServiceDocItemRejectionReason'
      rejection                                                            as ServiceDocItemRejectionReason,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      cust_group                                                           as CustomerGroup,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      cust_group1                                                          as AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      cust_group2                                                          as AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      cust_group3                                                          as AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      cust_group4                                                          as AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      cust_group5                                                          as AdditionalCustomerGroup5,
      plant                                                                as Plant,

      // Service Subject
      catlvlguid01_01                                                      as ServiceSchema1Category1UUID,
      catlvlguid02_01                                                      as ServiceSchema1Category2UUID,
      catlvlguid03_01                                                      as ServiceSchema1Category3UUID,
      catlvlguid04_01                                                      as ServiceSchema1Category4UUID,
      catlvlguid05_01                                                      as ServiceSchema1Category5UUID,
      catlvlguid06_01                                                      as ServiceSchema1Category6UUID,
      catlvlguid07_01                                                      as ServiceSchema1Category7UUID,
      catlvlguid08_01                                                      as ServiceSchema1Category8UUID,
      catlvlguid09_01                                                      as ServiceSchema1Category9UUID,
      catlvlguid10_01                                                      as ServiceSchema1Category10UUID,
      asp_id_01                                                            as SrvcCatztnSchema1,
      cat_id_01                                                            as SrvcCatztnSchemaCategory1,

      catlvlguid01_02                                                      as ServiceSchema2Category1UUID,
      catlvlguid02_02                                                      as ServiceSchema2Category2UUID,
      catlvlguid03_02                                                      as ServiceSchema2Category3UUID,
      catlvlguid04_02                                                      as ServiceSchema2Category4UUID,
      catlvlguid05_02                                                      as ServiceSchema2Category5UUID,
      catlvlguid06_02                                                      as ServiceSchema2Category6UUID,
      catlvlguid07_02                                                      as ServiceSchema2Category7UUID,
      catlvlguid08_02                                                      as ServiceSchema2Category8UUID,
      catlvlguid09_02                                                      as ServiceSchema2Category9UUID,
      catlvlguid10_02                                                      as ServiceSchema2Category10UUID,
      asp_id_02                                                            as SrvcCatztnSchema2,
      cat_id_02                                                            as SrvcCatztnSchemaCategory2,

      // Item - Billing Plan
      billplan_d_rule_period_date                                          as SettlementPeriodRuleUUID,
      billplan_d_rule_bill_date                                            as BillingPlanBillingDateRuleUUID,
      billplan_d_rule_price_date                                           as BillingPlanPriceDateRule,
      billingplanisfinalized                                               as BillingPlanIsFinalized,

      // Organization Unit Set
      @ObjectModel.foreignKey.association: '_SalesOrganizationOrgUnit_2'
      sales_org                                                            as SalesOrganizationOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesOfficeOrgUnit_2'
      sales_office                                                         as SalesOfficeOrgUnitID,
      @ObjectModel.foreignKey.association: '_SalesGroupOrgUnit_2'
      sales_group                                                          as SalesGroupOrgUnitID,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      dis_channel                                                          as DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      division                                                             as Division,
      sales_org_resp                                                       as ResponsibleSalesOrganization,
      @ObjectModel.foreignKey.association: '_ServiceOrganizationOrgUnit_2'
      service_org                                                          as ServiceOrganization,
      @ObjectModel.foreignKey.association: '_RespSrvcOrganizationOrgUnit_2'
      service_org_resp                                                     as ResponsibleServiceOrganization,

      // Organizational units with the S/4 SD codes
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      sales_org_sd                                                         as SalesOrganization,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      sales_office_sd                                                      as SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      sales_group_sd                                                       as SalesGroup,

      // Service Organizational Units with S/4 Code
      service_team_rm                                                      as RespyMgmtServiceTeam,

      @ObjectModel.foreignKey.association: '_EnterpriseServiceOrg'
      enterprise_service_org                                               as EnterpriseServiceOrganization,

      //Service Organization-Enterprise Project
      proj_org_id                                                          as EnterpriseProjectServiceOrg,

      // Dates
      srv_cust_beg                                                         as RequestedServiceStartDateTime,
      srv_cust_end                                                         as RequestedServiceEndDateTime,
      contstart                                                            as ServiceContrItemStartDateTime,
      contend                                                              as ServiceContrItemEndDateTime,
      srv_rfirst                                                           as ServiceFirstResponseByDateTime,
      srv_rready                                                           as SrvcDocItemSLADueByDateTime,
      srvc_actual                                                          as ActualServiceStartDateTime,
      srvc_act_to                                                          as ActualServiceEndDateTime,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'ServiceWorkDuration_2'
      srq_work_dura                                                        as ServiceWorkDuration,
      srq_work_dura_2                                                      as ServiceWorkDuration_2,
      srq_work_unit                                                        as ServiceWorkDurationUnit,
      @Semantics.dateTime: true
      cont_start_ts                                                        as SrvcDocItmTmeSliceStrtDteTme,
      @Semantics.dateTime: true
      cont_end_ts                                                          as SrvcDocItmTmeSliceEndDteTme,
      @Semantics.dateTime: true
      auto_renew_start                                                     as SrvcContrItemRenewalDateTime,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      auto_renew_period                                                    as SrvcContrItemRnwlDuration,
      @ObjectModel.foreignKey.association: '_SrvcContrItemRnwlDurationUnit'
      @Semantics.unitOfMeasure:true
      auto_renew_period_unit                                               as SrvcContrItemRnwlDurationUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      auto_renew_exten                                                     as SrvcContrItemExtensionDuration,
      @ObjectModel.foreignKey.association: '_SrvcContrItemExtnDurationUnit'
      @Semantics.unitOfMeasure:true
      auto_renew_exten_unit                                                as SrvcContrItemExtnDurationUnit,
      spla_planfr                                                          as PlannedServiceStartDateTime,
      spla_planto                                                          as PlannedServiceEndDateTime,
      grace_period                                                         as SrvcDocItemGracePeriod,
      grace_period_unit                                                    as SrvcDocItemGracePeriodUnit,
      grace_period_end                                                     as SrvcDocItmGrcePerdEndDateTime,
      biz_valid_start                                                      as SbscrContrItmBizValdStrtDteTme,
      biz_valid_end                                                        as SbscrContrItmBizValdEndDteTme,
      itm_usage                                                            as SrvcDocSubitemOrigin,
      cast(ac_object_type as crmt_ac_object_type_no_conv preserving type ) as SrvcDocItmAcctAssgmtObjectType,
      ac_assignment                                                        as SrvcDocItmAcctAssgmtObject,

      // Item - Service
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ActualServiceDurationUnit'} }
      srv_conf_time                                                        as ActualServiceDuration,
      @ObjectModel.foreignKey.association: '_ActualServiceDurationUnit'
      @Semantics.unitOfMeasure:true
      srv_conf_tunit                                                       as ActualServiceDurationUnit,
      confirm_relevant                                                     as SrvcOrderConfirmationRelevance, // Despite the DB field name, this is not a boolean value
      service_type                                                         as ServiceTransactionChargeType,
      valuation_type                                                       as SrvcTransactionValuationType,
      @ObjectModel.foreignKey.association: '_ResponseProfile'
      srv_escal                                                            as ResponseProfile,
      @ObjectModel.foreignKey.association: '_ServiceProfile'
      srv_serwi                                                            as ServiceProfile,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDurationUnit'} }
      duration                                                             as ServiceDuration,
      @ObjectModel.foreignKey.association: '_ServiceDurationUnit'
      @Semantics.unitOfMeasure:true
      duration_unit                                                        as ServiceDurationUnit,
      @ObjectModel.foreignKey.association: '_ServiceDocOvertimeCat'
      overtime_cat                                                         as TimeSheetOvertimeCategory,

      // Business Solution Quotation
      warranty_id                                                          as MasterWarranty,
      contract_account                                                     as ContractAccount,
      probability                                                          as ItemOrderProbabilityInPercent,
      stat_accepted                                                        as QuotationIsAccepted,

      int_obj_no                                                           as ConfigurationNumber,
      incoterms1                                                           as IncotermsPart1,
      incoterms2                                                           as IncotermsPart2,
      dlv_prio                                                             as DeliveryPriority,
      ordercombind                                                         as OrderCombinationIsAllowed,
      part_dlv_itm                                                         as PartialDeliveryIsAllowed,

      ci_billing_cycle                                                     as CABillgCycle,
      revacc_refid                                                         as RevenueAccountingReference,
      revacc_reftype                                                       as RevenueAccountingRefType,
      //      ac_object_type                                                                                 as SettAccAssgmntObjectType,
      //      ac_assignment                                                                                  as SettlementAccountAssignment,
      //       price_source                                                                                  as PriceSource,

      // Volume & Weights

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ItemWeightUnit'} }
      gross_weight_i                                                       as ItemGrossWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      net_weight_i                                                         as ItemNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_WeightUnit'
      weight_unit_i                                                        as ItemWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      volume_i                                                             as ItemVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_VolumeUnit'
      volume_unit_i                                                        as ItemVolumeUnit,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CustomerPriceGroup'
      price_grp                                                            as MaterialPricingGroup,
      price_grp                                                            as CustomerPriceGroup,

      // Delivery details
      dlv_group                                                            as DeliveryGroup,
      @ObjectModel.foreignKey.association: '_deliveryBlockReason'
      delivery_block                                                       as DeliveryBlockReason,

      @Semantics.dateTime: true
      first_conf_date                                                      as ErlstConfirmedDeliveryDateTime,

      @Semantics.dateTime: true
      latest_conf_date                                                     as LtstConfirmedDeliveryDateTime,


      cast(first_req_date as  tzntstmps)                                   as RequestedDeliveryDateTime,
      //      cast(first_conf_date as tzntstmps)   as FirstConfdDeliveryDateTime,

      // Item - Subscription specific data
      prod_sel_type                                                        as SubscrpnOrdProdSelType,
      ci_contract_id                                                       as SubscriptionContract,
      btmf_process                                                         as SrvcTransChangeProcess,
      btmf_process_type                                                    as SrvcTransChangeProcessType,
      ci_contract_item                                                     as SrvcTransChgProcSourceItemUUID,
      ma_head_objid                                                        as CustMgmtMasterAgreement,
      ma_item_objid                                                        as CustMgmtMstrAgrmtItem,
      stat_activation                                                      as SubscrpnContrActivationStatus,
      stat_cont_ts                                                         as SubscrpnContrTimeSliceStatus,
      pool_agr_ref                                                         as SharingContractID,
      ccm_version                                                          as CrsCatalogMappingVersionNumber,
      ma_root_objid                                                        as CustMgmtMstrAgrmtParentItem,
      sharing_group_id                                                     as SubscrpnContractSharingGroupID,
      ci_partner_rule                                                      as CAPartnerSettlementRule,
      changeprocessgroup                                                   as ChangeProcessGroup,
      phase_indicator                                                      as BusSolutionQtnItemIsPhased,
      successor_of                                                         as BusSolnQtnItmPhasedPrdcssrItem,
      cont_ref_item                                                        as SubscriptionContractItem,
      withdrawal_reason                                                    as SrvcDocItemWithdrawalReason,
      refund_code                                                          as SrvcDocItemRefundType,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      recurring_charge                                                     as SrvcDocItmRecrrgChrgNetAmount,
      @Semantics.booleanIndicator:true
      default_terms_ovrwrt                                                 as SubscrpnContrTrmsAreSpecified,
      @Semantics.booleanIndicator:true
      midbillcycexprtnallwd                                                as MidBillgCycExprtnIsAllowed,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      recurring_tax                                                        as SrvcDocItmRecrrgChrgTaxAmount,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      recurring_gross                                                      as SrvcDocItmRecrrgChrgGrossAmt,
      rec_duration                                                         as SrvcDocItmRecrrgChrgDuration,
      rec_time_unit                                                        as SrvcDocItmRecrrgChrgDurnUnit,
      cont_ref                                                             as SubscriptionContractReference,
      subscrpnbillgcycle                                                   as SubscriptionBillingCycle,
      @Semantics.uuid
      rate_plan_id                                                         as SubscrpnBillgRatePlanCharUUID,
      subscriptioncontractexternalid                                       as SubscriptionContractExternalID,
      ma_share_ref                                                         as SbscrShContrSvTrMtAgrItmUUID,
      ma_share_ref_prod_id                                                 as SbscrShContrSvTrMtAgrItmCstPrd,
      @Semantics.booleanIndicator: true
      case fix_config
        when 'A' then 'X'
         else ''
         end                                                               as SvTrMtAgrItmIsFxdConfign,
      ci_billing_plan_cycle                                                as SubscrpnContrItmBillgPlnCyc,
      @Semantics.booleanIndicator: true
      subscrp_stat_is_pndg                                                 as SubscrpnOrdIsPending,
      billgcyc_billd_togthr_nr                                             as NrOfBillgCyclesBilledTogether,
      // Cancellation
      cancparty                                                            as ServiceDocumentItemCanclnParty,
      canc_reason                                                          as ServiceDocumentItmCanclnReason,
      cancproc                                                             as SrvcDocItmCanclnProcedure,

      // Auto renew
      auto_renew_period                                                    as ServiceDocumentRnwlDuration,
      auto_renew_period_unit                                               as ServiceDocRnwlDurationUnit,
      auto_renew_exten                                                     as ServiceDocExtensionDuration,
      auto_renew_exten_unit                                                as ServiceDocExtnDurationUnit,

      // Subscription Contract
      auto_renew_indicator                                                 as SubscrpnContrAutoRnwlIsActv,

      // In-House Repair Reference
      ref_inhouse_repair                                                   as ReferenceInHouseRepair,
      ref_inhouse_repair_item                                              as ReferenceInHouseRepairItem,
      has_ref_inhouse_repair                                               as RefInHouseRepairIsExisting,

      // Credit Status
      @ObjectModel.foreignKey.association: '_SrvcDocItemCreditStatus'
      stat_credit                                                          as SrvcDocItemCreditStatus,

      @ObjectModel.foreignKey.association: '_SrvcDocItmBslnCostPostgStat'
      stat_bsln_cost_postg                                                 as SrvcDocItmBslnCostPostgStatus,

      // Cost Posting Status for Continuous Planning
      @ObjectModel.foreignKey.association: '_SrvcDocItmContinuousCostStat'
      stat_cont_cost_calc                                                  as SrvcDocItmContinuousCostStatus,

      stat_concur                                                          as SrvcDocItemConcurStatus,

      is_unplanned_item                                                    as SrvcDocItemIsUnplanned,

      //Shipping
      ship_cond                                                            as ShippingCondition,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      gi_quantity                                                          as SrvcDocItmGoodsIssueQuantity,
      batch                                                                as Batch,

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
      _SrvcMgmtProductHierarchy,

      // Partner
      _SoldToParty,
      _RespEmployee,
      _ServiceTeam,
      _ServiceEmployee,
      _ContactPerson,
      _PayerParty,
      _BillToParty,
      _ShipToParty,

      // Status
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocItmLifecycleStatus'
      _ServiceDocItemStatus,
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
      _SrvcDocItemBillgRlvnce,
      _BillingRequestItem,
      _ServiceProductList,

      // Item - Product
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BaseUnit_2'
      _BaseUnit,
      _BaseUnit_2,
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

      // Organization Unit Set
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOrganizationOrgUnit_2'
      _SalesOrganizationOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesOrganizationOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesOfficeOrgUnit_2'
      _SalesOfficeOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesOfficeOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SalesGroupOrgUnit_2'
      _SalesGroupOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SalesGroupOrgUnit_2,

      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      _Division,
      _DistributionChannel,
      _ServiceTeamHeader,
      _EnterpriseServiceOrg,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ServiceOrganizationOrgUnit_2'
      _ServiceOrganizationOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceOrganizationOrgUnit_2,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_RespSrvcOrganizationOrgUnit_2'
      _RespSrvcOrganizationOrgUnit,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _RespSrvcOrganizationOrgUnit_2,

      _ServiceDocOvertimeCat,
      _Industry,
      _ServiceDocItemRejectionReason,
      _SoldToPartyRegion,
      _SoldToPartyCountry,
      _SettlementDateRule,
      _BillPlanDateRule,
      _ResponseProfile,
      _ServiceProfile,
      _TechResource,
      _MasterAgrmtItem,
      _BillableControl,
      _DeliveryBlockReason,
      _VATRegistrationCountry,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcMaterialPricingGroup'
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ProductGroup,
      _Product,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_MaterialPricingGroup_2'
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcMaterialPricingGroup,
      _MaterialPricingGroup_2,
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
      _SrvcDocIsQuotation_2,

      //RAP : Inheritance of Complex Set
      item_no_partner                                                      as SrvcDocItmPartReferenceItem,
      ref_guid_appt                                                        as SrvcDocItmApptRefObjectUUID,
      item_no_appt                                                         as SrvcDocItmApptReferenceItem,
      item_no_refobj                                                       as SrvcDocItmRefObjReferenceItem
}
```
