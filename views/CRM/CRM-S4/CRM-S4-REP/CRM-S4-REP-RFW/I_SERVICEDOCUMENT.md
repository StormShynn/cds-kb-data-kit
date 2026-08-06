---
name: I_SERVICEDOCUMENT
description: Service DocumentUMENT
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
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCUMENT

**Service DocumentUMENT**

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
| `ServiceDocumentUUID` | `header_guid` |
| `ServiceDocumentCharUUID` | `header_guid_char` |
| `ServiceDocumentType` | `process_type` |
| `ServiceDocumentDescription` | `description_h` |
| `Language` | `descr_language` |
| `PostingDate` | `posting_date` |
| `ServiceDocumentTemplateType` | `template_type` |
| `ServiceDocCreationDateTime` | `created_at_h` |
| `ServiceDocChangedDateTime` | `changed_at_h` |
| `ServiceDocumentCreatedByUser` | `created_by_h` |
| `ServiceDocumentChangedByUser` | `changed_by_h` |
| `PricingDocument` | `pricing_document` |
| `PricingProcedure` | `pricing_procedure` |
| `RefBusinessSolutionOrder` | `refbussolnord` |
| `SrvcDocIsMaintServiceOrder` | `is_maintenance_order` |
| `BusinessActivityCategory` | `category` |
| `ServiceDocumentPriority` | `priority` |
| `ServiceDocNetAmount` | `} net_value_h` |
| `ServiceDocGrossAmount` | `} gross_value_h` |
| `ServiceDocTaxAmount` | `} tax_amount_h` |
| `SoldToParty` | `sold_to_party` |
| `SoldToPartyRegion` | `sold_to_region` |
| `SoldToPartyCountry` | `sold_to_country` |
| `ServiceTeam` | `service_team` |
| `ResponsibleEmployee` | `person_resp` |
| `ServiceEmployee` | `service_employee` |
| `ContactPerson` | `contact_person` |
| `ShipToParty` | `ship_to_party` |
| `BillToParty` | `bill_to_party` |
| `PayerParty` | `payer` |
| `SrvcDocTmplValdtyStartDateTime` | `cast( valid_from as crms4_template_start preserving type )` |
| `SrvcDocTmplValdtyEndDateTime` | `cast( valid_to as crms4_template_end preserving type )` |
| `RequestedServiceStartDateTime` | `srv_cust_beg` |
| `RequestedServiceEndDateTime` | `srv_cust_end` |
| `ServiceContractStartDateTime` | `contstart` |
| `ServiceContractEndDateTime` | `contend` |
| `SrvcContrEarliestStartDateTime` | `sc_earliest_start_date` |
| `SrvcContrLatestEndDateTime` | `sc_latest_end_date` |
| `SrvcQtanValidityStartDateTime` | `cast( quot_start as crms4_cont_start )` |
| `SrvcQtanValidityEndDateTime` | `cast( quot_end as crms4_cont_end )` |
| `PaymentTerms` | `pmnttrms` |
| `PaymentMethod` | `payment_method` |
| `SrvcSEPAMandateRelevance` | `sepa_on` |
| `SEPAMandate` | `mandate_id` |
| `WBSElementInternalID` | `wbs_element` |
| `TransactionCurrency` | `currency` |
| `TaxDepartureCountry` | `tax_dep_cty` |
| `VATRegistrationCountry` | `tax_dest_cty` |
| `CustomerTaxClassification1` | `taxk1` |
| `CustomerTaxClassification2` | `taxk2` |
| `CustomerTaxClassification3` | `taxk3` |
| `CustomerTaxClassification4` | `taxk4` |
| `CustomerTaxClassification5` | `taxk5` |
| `CustomerTaxClassification6` | `taxk6` |
| `CustomerTaxClassification7` | `taxk7` |
| `CustomerTaxClassification8` | `taxk8` |
| `CustomerTaxClassification9` | `taxk9` |
| `PurchaseOrderByCustomer` | `po_number_sold` |
| `CustomerPurchaseOrderDate` | `po_date_sold` |
| `ServiceDocumentRejectionReason` | `rejection` |
| `Region` | `region` |
| `SrvcDocCustHierarchyRelevance` | `cust_hierarchy_relevance` |
| `CustomerHierarchyBranchUUID` | `custh_branch_uuid` |
| `SrvcDocCustomerHierarchyOrigin` | `custh_branch_uuid_ori` |
| `ServiceDocumentStatus` | `stat_lifecycle` |
| `ServiceDocumentIsReleased` | `stat_released` |
| `ServiceDocumentHasError` | `stat_error` |
| `ServiceDocBillingStatus` | `stat_billing` |
| `ServiceDocIsReleasedForBilling` | `stat_for_billing` |
| `ServiceDocumentIsRejected` | `stat_cancelled` |
| `ServiceDocumentIsOpen` | `stat_open` |
| `SrvcDocTransferStatus` | `stat_transfer` |
| `ServiceDocumentIsQuotation` | `stat_quotation` |
| `ServiceConfirmationIsFinal` | `stat_final_conf` |
| `ServiceContractCanclnSts` | `stat_contract_cancelled` |
| `MaintSrvcOrdExecutionStatus` | `stat_maintenance` |
| `SrvcDocExecutionStatus` | `stat_maintenance` |
| `SrvcDocDeliveryStatus` | `stat_delivery` |
| `SrvcDocGoodsIssueStatus` | `stat_goods_issue` |
| `SrvcDocRejectionStatus` | `stat_rejection` |
| `SalesOrganizationOrgUnitID` | `sales_org` |
| `SalesOfficeOrgUnitID` | `sales_office` |
| `SalesGroupOrgUnitID` | `sales_group` |
| `DistributionChannel` | `dis_channel` |
| `Division` | `division` |
| `ServiceOrganization` | `service_org` |
| `ResponsibleServiceOrganization` | `service_org_resp` |
| `SalesOrganization` | `sales_org_sd` |
| `SalesOffice` | `sales_office_sd` |
| `SalesGroup` | `sales_group_sd` |
| `RespyMgmtServiceTeam` | `service_team_rm` |
| `EnterpriseServiceOrganization` | `enterprise_service_org` |
| `BillingBlockReason` | `billing_block` |
| `ServiceReasonSchema` | `asp_id_01` |
| `ServiceReasonCategory` | `cat_id_01` |
| `ServiceDefectSchema` | `asp_id_02` |
| `ServiceDefectCategory` | `cat_id_02` |
| `ServiceFirstResponseByDateTime` | `srv_rfirst` |
| `ServiceDueByDateTime` | `due_on` |
| `ErlstRequestedDeliveryDateTime` | `cast(req_dlv_date_h as tzntstmps)` |
| `RecommendedServicePriority` | `rec_priority` |
| `ServiceDocumentUrgency` | `urgency` |
| `ServiceDocumentImpact` | `impact` |
| `ServiceEscalationLevel` | `escalation` |
| `ServiceDocumentProblemCategory` | `problem_category` |
| `ServiceRisk` | `risk` |
| `ServiceDocumentCanclnParty` | `cancparty` |
| `ServiceDocumentCanclnReason` | `canc_reason` |
| `ReferenceInHouseRepair` | `ref_inhouse_repair` |
| `ReferenceInHouseRepairItem` | `ref_inhouse_repair_item` |
| `RefInHouseRepairIsExisting` | `has_ref_inhouse_repair` |
| `SrvcDocTemplateSearchTermText` | `templ_searchterm` |
| `SrvcDocCreditStatus` | `stat_credit` |
| `SrvcDocBslnCostPostgStatus` | `stat_bsln_cost_postg` |
| `SrvcDocContinuousCostStatus` | `stat_cont_cost_calc` |
| `ShippingCondition` | `ship_cond` |
| `CustomerPriceGroup` | `price_grp` |
| `SrvcDocAcctAssgmtObjectType` | `cast(ac_object_type as crmt_ac_object_type_no_conv preserving type )` |
| `SrvcDocAcctAssgmtObject` | `ac_assignment` |
| `DeliveryPriority` | `dlv_prio` |
| `IncotermsPart1` | `incoterms1` |
| `IncotermsPart2` | `incoterms2` |
| `ContractAccount` | `contract_account` |
| `_SoldToParty` | *Association* |
| `_RespEmployee` | *Association* |
| `_ServiceTeam` | *Association* |
| `_ServiceEmployee` | *Association* |
| `_ContactPerson` | *Association* |
| `_ShipToParty` | *Association* |
| `_BillToParty` | *Association* |
| `_PayerParty` | *Association* |
| `_SoldToPartyToCustomer` | *Association* |
| `_ServiceDocumentType` | *Association* |
| `_ServiceDocumentPriority` | *Association* |
| `_ServiceDocumentStatus` | *Association* |
| `_SrvcDocLifecycleStatus` | *Association* |
| `_ServiceDocBillingStatus` | *Association* |
| `_SrvcDocIsRelForBillgSts` | *Association* |
| `_ServiceDocHasError` | *Association* |
| `_ServiceDocumentIsOpen` | *Association* |
| `_BillingBlockReason` | *Association* |
| `_ActivityCategory` | *Association* |
| `_ServiceObjType` | *Association* |
| `_TransactionCurrency` | *Association* |
| `_PaymentTerms` | *Association* |
| `_SrvcSEPAMandateRelevance` | *Association* |
| `_FixedPrice` | *Association* |
| `_SalesOrganizationOrgUnit` | *Association* |
| `_SalesOfficeOrgUnit` | *Association* |
| `_SalesGroupOrgUnit` | *Association* |
| `_ServiceOrganizationOrgUnit` | *Association* |
| `_RespSrvcOrganizationOrgUnit` | *Association* |
| `_SalesOrganizationOrgUnit_2` | *Association* |
| `_SalesOfficeOrgUnit_2` | *Association* |
| `_SalesGroupOrgUnit_2` | *Association* |
| `_ServiceOrganizationOrgUnit_2` | *Association* |
| `_RespSrvcOrganizationOrgUnit_2` | *Association* |
| `_SalesOrganization` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |
| `_Division` | *Association* |
| `_DistributionChannel` | *Association* |
| `_SrvcDocumentRejectionReason` | *Association* |
| `_SoldToPartyCountry` | *Association* |
| `_TaxDepartureCountry` | *Association* |
| `_VATRegistrationCountry` | *Association* |
| `_SoldToPartyRegion` | *Association* |
| `_Region` | *Association* |
| `_ServiceRisk` | *Association* |
| `_ServiceDocProblemCategory` | *Association* |
| `_ServiceTeamHeader` | *Association* |
| `_EnterpriseServiceOrg` | *Association* |
| `_ServiceContractCanclnSts` | *Association* |
| `_SrvcDocTransferStatus` | *Association* |
| `_SrvcDocCreditStatus` | *Association* |
| `_SrvcDocBslnCostPostgStatus` | *Association* |
| `_SrvcDocContinuousCostStatus` | *Association* |
| `_PaymentMethod` | *Association* |
| `_SrvcDocExecutionStatus` | *Association* |
| `_SrvcDocIsQuotation` | *Association* |
| `_SrvcDocIsQuotation_2` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SoldToParty` | `I_BusinessPartner` | [0..1] |
| `_RespEmployee` | `I_BusinessPartner` | [0..1] |
| `_ServiceTeam` | `I_BusinessPartner` | [0..1] |
| `_ServiceEmployee` | `I_BusinessPartner` | [0..1] |
| `_ContactPerson` | `I_BusinessPartner` | [0..1] |
| `_ShipToParty` | `I_BusinessPartner` | [0..1] |
| `_BillToParty` | `I_BusinessPartner` | [0..1] |
| `_PayerParty` | `I_BusinessPartner` | [0..1] |
| `_SoldToPartyToCustomer` | `I_BusinessPartnerCustomer` | [0..*] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceDocumentPriority` | `I_ServiceDocumentPriority` | [0..1] |
| `_ServiceDocumentStatus` | `I_ServiceDocumentStatus` | [0..1] |
| `_SrvcDocLifecycleStatus` | `I_SrvcDocLifecycleStatus` | [0..1] |
| `_ServiceDocBillingStatus` | `I_ServiceDocBillingStatus` | [0..1] |
| `_SrvcDocIsRelForBillgSts` | `I_SrvcDocRelForBillgSts` | [0..1] |
| `_ServiceDocHasError` | `I_ServiceDocErrorStatus` | [0..1] |
| `_ServiceDocumentIsOpen` | `I_ServiceDocOpenStatus` | [0..1] |
| `_BillingBlockReason` | `I_BillingBlockReason` | [0..1] |
| `_ActivityCategory` | `I_BusinessActivityCategory` | [0..1] |
| `_ServiceObjType` | `I_CustMgmtBusObjType` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_PaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_SrvcSEPAMandateRelevance` | `I_SrvcSEPAMandateRelevance` | [0..1] |
| `_FixedPrice` | `I_ServiceDocumentFixedPrice` | [0..1] |
| `_SalesOrganizationOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesOfficeOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesGroupOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_ServiceOrganizationOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_RespSrvcOrganizationOrgUnit` | `I_SalesOrganizationUnit` | [0..1] |
| `_SalesOrganizationOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_SalesOfficeOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_SalesGroupOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_ServiceOrganizationOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_RespSrvcOrganizationOrgUnit_2` | `I_SrvcMgmtOrganizationUnit` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_SalesOffice` | `I_SalesOffice` | [0..1] |
| `_SalesGroup` | `I_SalesGroup` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_SrvcDocumentRejectionReason` | `I_SalesDocumentRjcnReason` | [0..1] |
| `_SoldToPartyCountry` | `I_Country` | [0..1] |
| `_TaxDepartureCountry` | `I_Country` | [0..1] |
| `_VATRegistrationCountry` | `I_Country` | [0..1] |
| `_SoldToPartyRegion` | `I_Region` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_ServiceRisk` | `I_ServiceRisk` | [0..1] |
| `_ServiceDocProblemCategory` | `I_ServiceDocProblemCategory` | [0..1] |
| `_ServiceTeamHeader` | `I_RespyMgmtTeamHeaderDetail` | [0..1] |
| `_EnterpriseServiceOrg` | `I_EnterpriseServiceOrg` | [0..1] |
| `_ServiceContractCanclnSts` | `I_ServiceContractCanclnSts` | [0..1] |
| `_SrvcDocTransferStatus` | `I_SrvcDocTransferStatus` | [0..1] |
| `_SrvcDocCreditStatus` | `I_SrvcDocCreditStatus` | [0..1] |
| `_ServiceDocumentExt` | `E_ServiceDocument` | [0..1] |
| `_SrvcDocBslnCostPostgStatus` | `I_SrvcDocBslnCostPostgStatus` | [0..1] |
| `_SrvcDocContinuousCostStatus` | `I_SrvcDocBslnCostPostgStatus` | [0..1] |
| `_PaymentMethod` | `I_SrvcDocPaymentMethod` | [0..1] |
| `_SrvcDocExecutionStatus` | `I_SrvcDocExecutionStatus` | [0..1] |
| `_SrvcDocIsQuotation` | `I_Indicator` | [1..1] |
| `_SrvcDocIsQuotation_2` | `I_SrvcDocQuotationStatus_2` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISERVDOC',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
   representativeKey: 'ServiceDocument',
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_DIMENSION,
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #A,
     sizeCategory:   #XXL
   }
}
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] } */
define view I_ServiceDocument
  as select from crms4d_serv_h
  association [0..1] to I_BusinessPartner            as _SoldToParty                   on  $projection.SoldToParty = _SoldToParty.BusinessPartner
  association [0..1] to I_BusinessPartner            as _RespEmployee                  on  $projection.ResponsibleEmployee = _RespEmployee.BusinessPartner
  association [0..1] to I_BusinessPartner            as _ServiceTeam                   on  $projection.ServiceTeam = _ServiceTeam.BusinessPartner
  association [0..1] to I_BusinessPartner            as _ServiceEmployee               on  $projection.ServiceEmployee = _ServiceEmployee.BusinessPartner
  association [0..1] to I_BusinessPartner            as _ContactPerson                 on  $projection.ContactPerson = _ContactPerson.BusinessPartner
  association [0..1] to I_BusinessPartner            as _ShipToParty                   on  $projection.ShipToParty = _ShipToParty.BusinessPartner
  association [0..1] to I_BusinessPartner            as _BillToParty                   on  $projection.BillToParty = _BillToParty.BusinessPartner
  association [0..1] to I_BusinessPartner            as _PayerParty                    on  $projection.PayerParty = _PayerParty.BusinessPartner
  association [0..*] to I_BusinessPartnerCustomer    as _SoldToPartyToCustomer         on  $projection.SoldToParty = _SoldToPartyToCustomer.BusinessPartner

  association [0..1] to I_ServiceDocumentType        as _ServiceDocumentType           on  $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType
  association [0..1] to I_ServiceDocumentPriority    as _ServiceDocumentPriority       on  $projection.ServiceDocumentPriority = _ServiceDocumentPriority.ServiceDocumentPriority
  association [0..1] to I_ServiceDocumentStatus      as _ServiceDocumentStatus         on  $projection.ServiceDocumentStatus = _ServiceDocumentStatus.ServiceDocumentStatus
  association [0..1] to I_SrvcDocLifecycleStatus     as _SrvcDocLifecycleStatus        on  $projection.ServiceDocumentStatus = _SrvcDocLifecycleStatus.ServiceDocumentStatus
  association [0..1] to I_ServiceDocBillingStatus    as _ServiceDocBillingStatus       on  $projection.ServiceDocBillingStatus = _ServiceDocBillingStatus.ServiceDocBillingStatus
  association [0..1] to I_SrvcDocRelForBillgSts      as _SrvcDocIsRelForBillgSts       on  $projection.ServiceDocIsReleasedForBilling = _SrvcDocIsRelForBillgSts.ServiceDocIsReleasedForBilling
  association [0..1] to I_ServiceDocErrorStatus      as _ServiceDocHasError            on  $projection.ServiceDocumentHasError = _ServiceDocHasError.ServiceDocumentHasError
  association [0..1] to I_ServiceDocOpenStatus       as _ServiceDocumentIsOpen         on  $projection.ServiceDocumentIsOpen = _ServiceDocumentIsOpen.ServiceDocumentIsOpen
  association [0..1] to I_BillingBlockReason         as _BillingBlockReason            on  $projection.BillingBlockReason = _BillingBlockReason.BillingBlockReason
  association [0..1] to I_BusinessActivityCategory   as _ActivityCategory              on  $projection.BusinessActivityCategory = _ActivityCategory.BusinessActivityCategory

  association [1..1] to I_CustMgmtBusObjType         as _ServiceObjType                on  $projection.ServiceObjectType = _ServiceObjType.BusinessObjectType

  association [0..1] to I_Currency                   as _TransactionCurrency           on  $projection.TransactionCurrency = _TransactionCurrency.Currency

  association [0..1] to I_PaymentTerms               as _PaymentTerms                  on  $projection.PaymentTerms = _PaymentTerms.PaymentTerms

  association [0..1] to I_SrvcSEPAMandateRelevance   as _SrvcSEPAMandateRelevance      on  $projection.SrvcSEPAMandateRelevance = _SrvcSEPAMandateRelevance.SrvcSEPAMandateRelevance

  association [0..1] to I_ServiceDocumentFixedPrice  as _FixedPrice                    on  $projection.ServiceObjectType   = _FixedPrice.ServiceObjectType
                                                                                       and $projection.ServiceDocument     = _FixedPrice.ServiceDocument
                                                                                       and $projection.PricingDocument     = _FixedPrice.PricingDocument
                                                                                       and _FixedPrice.PricingDocumentItem = '000000'

  association [0..1] to I_SalesOrganizationUnit      as _SalesOrganizationOrgUnit      on  $projection.SalesOrganizationOrgUnitID = _SalesOrganizationOrgUnit.OrganizationalUnit

  association [0..1] to I_SalesOrganizationUnit      as _SalesOfficeOrgUnit            on  $projection.SalesOfficeOrgUnitID = _SalesOfficeOrgUnit.OrganizationalUnit

  association [0..1] to I_SalesOrganizationUnit      as _SalesGroupOrgUnit             on  $projection.SalesGroupOrgUnitID = _SalesGroupOrgUnit.OrganizationalUnit

  association [0..1] to I_SalesOrganizationUnit      as _ServiceOrganizationOrgUnit    on  $projection.ServiceOrganization = _ServiceOrganizationOrgUnit.OrganizationalUnit

  association [0..1] to I_SalesOrganizationUnit      as _RespSrvcOrganizationOrgUnit   on  $projection.ResponsibleServiceOrganization = _RespSrvcOrganizationOrgUnit.OrganizationalUnit

  // Added to correct the CRM Organizational Unit
  association [0..1] to I_SrvcMgmtOrganizationUnit   as _SalesOrganizationOrgUnit_2    on  $projection.SalesOrganizationOrgUnitID = _SalesOrganizationOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit   as _SalesOfficeOrgUnit_2          on  $projection.SalesOfficeOrgUnitID = _SalesOfficeOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit   as _SalesGroupOrgUnit_2           on  $projection.SalesGroupOrgUnitID = _SalesGroupOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit   as _ServiceOrganizationOrgUnit_2  on  $projection.ServiceOrganization = _ServiceOrganizationOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SrvcMgmtOrganizationUnit   as _RespSrvcOrganizationOrgUnit_2 on  $projection.ResponsibleServiceOrganization = _RespSrvcOrganizationOrgUnit_2.OrgUnitTypeIDConcatenated

  association [0..1] to I_SalesOrganization          as _SalesOrganization             on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization

  association [0..1] to I_SalesOffice                as _SalesOffice                   on  $projection.SalesOffice = _SalesOffice.SalesOffice

  association [0..1] to I_SalesGroup                 as _SalesGroup                    on  $projection.SalesGroup = _SalesGroup.SalesGroup

  association [0..1] to I_Division                   as _Division                      on  $projection.Division = _Division.Division

  association [0..1] to I_DistributionChannel        as _DistributionChannel           on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel

  association [0..1] to I_SalesDocumentRjcnReason    as _SrvcDocumentRejectionReason   on  $projection.ServiceDocumentRejectionReason = _SrvcDocumentRejectionReason.SalesDocumentRjcnReason

  association [0..1] to I_Country                    as _SoldToPartyCountry            on  $projection.SoldToPartyCountry = _SoldToPartyCountry.Country

  association [0..1] to I_Country                    as _TaxDepartureCountry           on  $projection.TaxDepartureCountry = _TaxDepartureCountry.Country

  association [0..1] to I_Country                    as _VATRegistrationCountry        on  $projection.VATRegistrationCountry = _VATRegistrationCountry.Country

  association [0..1] to I_Region                     as _SoldToPartyRegion             on  $projection.SoldToPartyRegion  = _SoldToPartyRegion.Region
                                                                                       and $projection.SoldToPartyCountry = _SoldToPartyRegion.Country

  association [0..1] to I_Region                     as _Region                        on  $projection.Region             = _Region.Region
                                                                                       and $projection.SoldToPartyCountry = _Region.Country

  association [0..1] to I_ServiceRisk                as _ServiceRisk                   on  $projection.ServiceRisk = _ServiceRisk.ServiceRisk

  association [0..1] to I_ServiceDocProblemCategory  as _ServiceDocProblemCategory     on  $projection.ServiceDocumentProblemCategory = _ServiceDocProblemCategory.ServiceDocumentProblemCategory

  association [0..1] to I_RespyMgmtTeamHeaderDetail  as _ServiceTeamHeader             on  $projection.RespyMgmtServiceTeam = _ServiceTeamHeader.RespyMgmtTeamID

  association [0..1] to I_EnterpriseServiceOrg       as _EnterpriseServiceOrg          on  $projection.EnterpriseServiceOrganization = _EnterpriseServiceOrg.EnterpriseServiceOrganization

  association [0..1] to I_ServiceContractCanclnSts   as _ServiceContractCanclnSts      on  $projection.ServiceContractCanclnSts = _ServiceContractCanclnSts.ServiceContractCanclnSts

  association [0..1] to I_SrvcDocTransferStatus      as _SrvcDocTransferStatus         on  $projection.SrvcDocTransferStatus = _SrvcDocTransferStatus.SrvcDocTransferStatus

  association [0..1] to I_SrvcDocCreditStatus        as _SrvcDocCreditStatus           on  $projection.SrvcDocCreditStatus = _SrvcDocCreditStatus.SrvcDocCreditStatus

  association [0..1] to E_ServiceDocument            as _ServiceDocumentExt            on  $projection.ServiceObjectType = _ServiceDocumentExt.ServiceCategory
                                                                                       and $projection.ServiceDocument   = _ServiceDocumentExt.ServiceOrder

  association [0..1] to I_SrvcDocBslnCostPostgStatus as _SrvcDocBslnCostPostgStatus    on  $projection.SrvcDocBslnCostPostgStatus = _SrvcDocBslnCostPostgStatus.SrvcDocBslnCostPostgStatus

  association [0..1] to I_SrvcDocBslnCostPostgStatus as _SrvcDocContinuousCostStatus   on  $projection.SrvcDocContinuousCostStatus = _SrvcDocContinuousCostStatus.SrvcDocBslnCostPostgStatus

  association [0..1] to I_SrvcDocPaymentMethod       as _PaymentMethod                 on  $projection.PaymentMethod                = _PaymentMethod.PaymentMethod
                                                                                       and (
                                                                                          $projection.SalesOrganization             = _PaymentMethod.SalesOrganization
                                                                                          or $projection.SalesOrganizationOrgUnitID = _PaymentMethod.OrgUnitTypeIDConcatenated
                                                                                        )


  association [0..1] to I_SrvcDocExecutionStatus     as _SrvcDocExecutionStatus        on  $projection.SrvcDocExecutionStatus     = _SrvcDocExecutionStatus.SrvcDocExecutionStatus
                                                                                       and $projection.ServiceDocumentIsQuotation = _SrvcDocExecutionStatus.ServiceDocumentIsQuotation

  association [1..1] to I_Indicator                  as _SrvcDocIsQuotation            on  $projection.ServiceDocumentIsQuotation = _SrvcDocIsQuotation.IndicatorValue

  association [1..1] to I_SrvcDocQuotationStatus_2   as _SrvcDocIsQuotation_2          on  $projection.ServiceDocumentIsQuotation = _SrvcDocIsQuotation_2.ServiceDocumentIsQuotation
{
      // Header Keys
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key objtype_h                                                            as ServiceObjectType,
      @ObjectModel.text.element: 'ServiceDocumentDescription'
  key object_id                                                            as ServiceDocument,

      // Header Details
      header_guid                                                          as ServiceDocumentUUID,
      header_guid_char                                                     as ServiceDocumentCharUUID,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      process_type                                                         as ServiceDocumentType,
      @Semantics.text: true
      description_h                                                        as ServiceDocumentDescription,
      descr_language                                                       as Language,
      posting_date                                                         as PostingDate,
      template_type                                                        as ServiceDocumentTemplateType,
      created_at_h                                                         as ServiceDocCreationDateTime,
      changed_at_h                                                         as ServiceDocChangedDateTime,
      created_by_h                                                         as ServiceDocumentCreatedByUser,
      changed_by_h                                                         as ServiceDocumentChangedByUser,
      pricing_document                                                     as PricingDocument,
      pricing_procedure                                                    as PricingProcedure,
      refbussolnord                                                        as RefBusinessSolutionOrder,
      is_maintenance_order                                                 as SrvcDocIsMaintServiceOrder,

      // Activity
      @ObjectModel.foreignKey.association: '_ActivityCategory'
      category                                                             as BusinessActivityCategory,
      @ObjectModel.foreignKey.association: '_ServiceDocumentPriority'
      priority                                                             as ServiceDocumentPriority,

      // Cumulate Extension
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      net_value_h                                                          as ServiceDocNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      gross_value_h                                                        as ServiceDocGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      tax_amount_h                                                         as ServiceDocTaxAmount,

      // Partner Details
      @ObjectModel.foreignKey.association: '_SoldToParty'
      sold_to_party                                                        as SoldToParty,
      @ObjectModel.foreignKey.association: '_SoldToPartyRegion'
      sold_to_region                                                       as SoldToPartyRegion,
      @ObjectModel.foreignKey.association: '_SoldToPartyCountry'
      sold_to_country                                                      as SoldToPartyCountry,
      @ObjectModel.foreignKey.association: '_ServiceTeam'
      service_team                                                         as ServiceTeam,
      @ObjectModel.foreignKey.association: '_RespEmployee'
      person_resp                                                          as ResponsibleEmployee,
      @ObjectModel.foreignKey.association: '_ServiceEmployee'
      service_employee                                                     as ServiceEmployee,
      @ObjectModel.foreignKey.association: '_ContactPerson'
      contact_person                                                       as ContactPerson,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ship_to_party                                                        as ShipToParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      bill_to_party                                                        as BillToParty,
      payer                                                                as PayerParty,

      // Dates
      cast( valid_from as crms4_template_start preserving type )           as SrvcDocTmplValdtyStartDateTime,
      cast( valid_to as crms4_template_end preserving type )               as SrvcDocTmplValdtyEndDateTime,
      srv_cust_beg                                                         as RequestedServiceStartDateTime,
      srv_cust_end                                                         as RequestedServiceEndDateTime,
      contstart                                                            as ServiceContractStartDateTime,
      contend                                                              as ServiceContractEndDateTime,
      sc_earliest_start_date                                               as SrvcContrEarliestStartDateTime,
      sc_latest_end_date                                                   as SrvcContrLatestEndDateTime,
      cast( quot_start as crms4_cont_start )                               as SrvcQtanValidityStartDateTime,
      cast( quot_end as crms4_cont_end )                                   as SrvcQtanValidityEndDateTime,


      // Pricing Parameter Set
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      pmnttrms                                                             as PaymentTerms,

      @ObjectModel.foreignKey.association: '_PaymentMethod'
      payment_method                                                       as PaymentMethod,

      @ObjectModel.foreignKey.association: '_SrvcSEPAMandateRelevance'
      sepa_on                                                              as SrvcSEPAMandateRelevance,
      mandate_id                                                           as SEPAMandate,

      wbs_element                                                          as WBSElementInternalID,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode:true
      currency                                                             as TransactionCurrency,

      @ObjectModel.foreignKey.association: '_TaxDepartureCountry'
      tax_dep_cty                                                          as TaxDepartureCountry,

      @ObjectModel.foreignKey.association: '_VATRegistrationCountry'
      tax_dest_cty                                                         as VATRegistrationCountry,

      taxk1                                                                as CustomerTaxClassification1,
      taxk2                                                                as CustomerTaxClassification2,
      taxk3                                                                as CustomerTaxClassification3,
      taxk4                                                                as CustomerTaxClassification4,
      taxk5                                                                as CustomerTaxClassification5,
      taxk6                                                                as CustomerTaxClassification6,
      taxk7                                                                as CustomerTaxClassification7,
      taxk8                                                                as CustomerTaxClassification8,
      taxk9                                                                as CustomerTaxClassification9,

      // Sales Set
      po_number_sold                                                       as PurchaseOrderByCustomer,
      po_date_sold                                                         as CustomerPurchaseOrderDate,
      @ObjectModel.foreignKey.association: '_SrvcDocumentRejectionReason'
      rejection                                                            as ServiceDocumentRejectionReason,
      @ObjectModel.foreignKey.association: '_Region'
      region                                                               as Region,
      cust_hierarchy_relevance                                             as SrvcDocCustHierarchyRelevance,
      custh_branch_uuid                                                    as CustomerHierarchyBranchUUID,
      custh_branch_uuid_ori                                                as SrvcDocCustomerHierarchyOrigin,

      // Status
      @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
      stat_lifecycle                                                       as ServiceDocumentStatus,
      stat_released                                                        as ServiceDocumentIsReleased,
      @ObjectModel.foreignKey.association: '_ServiceDocHasError'
      stat_error                                                           as ServiceDocumentHasError,
      @ObjectModel.foreignKey.association: '_ServiceDocBillingStatus'
      stat_billing                                                         as ServiceDocBillingStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocIsRelForBillgSts'
      stat_for_billing                                                     as ServiceDocIsReleasedForBilling,
      stat_cancelled                                                       as ServiceDocumentIsRejected,
      @ObjectModel.foreignKey.association: '_ServiceDocumentIsOpen'
      stat_open                                                            as ServiceDocumentIsOpen,
      @ObjectModel.foreignKey.association: '_SrvcDocTransferStatus'
      stat_transfer                                                        as SrvcDocTransferStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocIsQuotation_2'
      stat_quotation                                                       as ServiceDocumentIsQuotation,
      stat_final_conf                                                      as ServiceConfirmationIsFinal,
      @ObjectModel.foreignKey.association: '_ServiceContractCanclnSts'
      stat_contract_cancelled                                              as ServiceContractCanclnSts,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SrvcDocExecutionStatus'
      stat_maintenance                                                     as MaintSrvcOrdExecutionStatus,
      @ObjectModel.foreignKey.association: '_SrvcDocExecutionStatus'
      stat_maintenance                                                     as SrvcDocExecutionStatus,
      stat_delivery                                                        as SrvcDocDeliveryStatus,
      stat_goods_issue                                                     as SrvcDocGoodsIssueStatus,
      stat_rejection                                                       as SrvcDocRejectionStatus,

      // Organizational Unit Set
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

      // Billing Set
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      billing_block                                                        as BillingBlockReason,

      // Subject
      asp_id_01                                                            as ServiceReasonSchema,
      cat_id_01                                                            as ServiceReasonCategory,
      asp_id_02                                                            as ServiceDefectSchema,
      cat_id_02                                                            as ServiceDefectCategory,

      // Dates
      srv_rfirst                                                           as ServiceFirstResponseByDateTime,
      due_on                                                               as ServiceDueByDateTime,
      cast(req_dlv_date_h as  tzntstmps)                                   as ErlstRequestedDeliveryDateTime,

      // Service Request
      rec_priority                                                         as RecommendedServicePriority,
      urgency                                                              as ServiceDocumentUrgency,
      impact                                                               as ServiceDocumentImpact,
      escalation                                                           as ServiceEscalationLevel,
      @ObjectModel.foreignKey.association: '_ServiceDocProblemCategory'
      problem_category                                                     as ServiceDocumentProblemCategory,
      @ObjectModel.foreignKey.association: '_ServiceRisk'
      risk                                                                 as ServiceRisk,

      // Cancel Header
      cancparty                                                            as ServiceDocumentCanclnParty,
      canc_reason                                                          as ServiceDocumentCanclnReason,

      // In-House Repair Reference
      ref_inhouse_repair                                                   as ReferenceInHouseRepair,
      ref_inhouse_repair_item                                              as ReferenceInHouseRepairItem,
      has_ref_inhouse_repair                                               as RefInHouseRepairIsExisting,

      templ_searchterm                                                     as SrvcDocTemplateSearchTermText,

      // Credit Status
      @ObjectModel.foreignKey.association: '_SrvcDocCreditStatus'
      stat_credit                                                          as SrvcDocCreditStatus,

      // Baseline Cost Posting Status
      @ObjectModel.foreignKey.association: '_SrvcDocBslnCostPostgStatus'
      stat_bsln_cost_postg                                                 as SrvcDocBslnCostPostgStatus,

      // Cost Posting Status for Continuous Planning
      @ObjectModel.foreignKey.association: '_SrvcDocContinuousCostStatus'
      stat_cont_cost_calc                                                  as SrvcDocContinuousCostStatus,

      //Shipping
      ship_cond                                                            as ShippingCondition,

      //Pricing Group
      price_grp                                                            as CustomerPriceGroup,

      cast(ac_object_type as crmt_ac_object_type_no_conv preserving type ) as SrvcDocAcctAssgmtObjectType,
      ac_assignment                                                        as SrvcDocAcctAssgmtObject,

      dlv_prio                                                             as DeliveryPriority,
      incoterms1                                                           as IncotermsPart1,
      incoterms2                                                           as IncotermsPart2,
      contract_account                                                     as ContractAccount,

      // Associations to next level
      // Header Keys Assocations
      _ServiceObjType,

      // Header Details Assocations
      _ServiceDocumentType,

      // Partner Details Associations
      _SoldToParty,
      _RespEmployee,
      _ServiceTeam,
      _ServiceEmployee,
      _ContactPerson,
      _ShipToParty,
      _BillToParty,
      _PayerParty,
      _SoldToPartyToCustomer,
      _SoldToPartyCountry,
      _SoldToPartyRegion,
      _ServiceTeamHeader,

      // Status Assocations
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocLifecycleStatus'
      _ServiceDocumentStatus,
      _SrvcDocLifecycleStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocBillingStatus,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocIsRelForBillgSts,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocumentIsOpen,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceDocHasError,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _ServiceContractCanclnSts,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocTransferStatus,

      // Billing Set Associations
      _BillingBlockReason,

      // Activity Associations
      _ActivityCategory,
      _ServiceDocumentPriority,

      // Pricing Parameter Set
      _TransactionCurrency,
      _PaymentTerms,
      _PaymentMethod,
      _TaxDepartureCountry,
      _VATRegistrationCountry,

      //sepa mandate
      _SrvcSEPAMandateRelevance,

      _FixedPrice,

      // Organization Unit Set Assocations
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
      _SalesOrganization,
      _SalesOffice,
      _SalesGroup,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _DistributionChannel,
      _Division,
      _EnterpriseServiceOrg,

      // Sales Set Assocaition
      _Region,
      _SrvcDocumentRejectionReason,

      // Service Request Association
      _ServiceRisk,
      _ServiceDocProblemCategory,

      // Credit Status association
      _SrvcDocCreditStatus,

      // Baseline Cost Posting status
      _SrvcDocBslnCostPostgStatus,

      // Cost Calc Status for Continuous Planning
      _SrvcDocContinuousCostStatus,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_SrvcDocIsQuotation_2'
      _SrvcDocIsQuotation,

      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _SrvcDocIsQuotation_2,

      _SrvcDocExecutionStatus
}
```
