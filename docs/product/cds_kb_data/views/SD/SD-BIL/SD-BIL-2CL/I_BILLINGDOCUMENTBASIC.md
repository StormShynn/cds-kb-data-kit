---
name: I_BILLINGDOCUMENTBASIC
description: "Billing DocumentUMENTBASIC"
semantic_vi: "View I_BILLINGDOCUMENTBASIC cung cấp thông tin cơ bản về các tài liệu hóa đơn, bao gồm các loại và loại tài liệu hóa đơn, có ích cho việc quản lý và báo cáo tài liệu hóa đơn."
keywords:
  - "billing document"
  - "tài liệu hóa đơn"
  - "billing document basic"
  - "basic billing document"
  - "sddocumentcategory"
  - "billingdocumentcategory"
  - "billingdocumenttype"
  - "proposedbillingdocumenttype"
  - "sap sd-bil-2cl"
  - "sales & distribution"
  - "billingdocument"
semantic_en: "The I_BILLINGDOCUMENTBASIC view provides basic information about billing documents, including document categories and types, which is useful for billing document management and reporting."
app_component: SD-BIL-2CL
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
  - SD-BIL
  - interface-view
  - billing-document
  - billing
  - document
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTBASIC

**Billing DocumentUMENTBASIC**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
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
| `BillingDocument` | ✓ | |  | `vbeln` |  |  |
| `SDDocumentCategory` |  | |  | `vbtyp` |  |  |
| `BillingDocumentCategory` |  | |  | `fktyp` |  |  |
| `BillingDocumentType` |  | |  | `fkart` |  |  |
| `ProposedBillingDocumentType` |  | |  | `fkara` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `CreationTime` |  | |  | `erzet` |  |  |
| `LastChangeDate` |  | |  | `aedat` |  |  |
| `LastChangeDateTime` |  | |  | `changed_on` |  |  |
| `LogicalSystem` |  | |  | `logsys` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `BillingDocumentDate` |  | |  | `fkdat` |  |  |
| `BillingDocumentIsCancelled` |  | |  | `fksto` |  |  |
| `CancelledBillingDocument` |  | |  | `sfakn` |  |  |
| `BillingDocCombinationCriteria` |  | |  | `zukri` |  |  |
| `ManualInvoiceMaintIsRelevant` |  | |  | `mrnkz` |  |  |
| `NmbrOfPages` |  | |  | `numpg` |  |  |
| `IsIntrastatReportingRelevant` |  | |  | `intra_rel` |  |  |
| `IsIntrastatReportingExcluded` |  | |  | `intra_excl` |  |  |
| `BillingDocumentIsTemporary` |  | |  | `draft` |  |  |
| `TotalNetAmount` |  | |  | `netwr` |  |  |
| `TransactionCurrency` |  | |  | `waerk` |  |  |
| `StatisticsCurrency` |  | |  | `stwae` |  |  |
| `TotalTaxAmount` |  | |  | `mwsbk` |  |  |
| `CustomerPriceGroup` |  | |  | `konda` |  |  |
| `PriceListType` |  | |  | `pltyp` |  |  |
| `TaxDepartureCountry` |  | |  | `landtx` |  |  |
| `VATRegistration` |  | |  | `stceg` |  |  |
| `VATRegistrationOrigin` |  | |  | `stceg_h` |  |  |
| `VATRegistrationCountry` |  | |  | `stceg_l` |  |  |
| `HierarchyTypePricing` |  | |  | `hityp_pr` |  |  |
| `CustomerTaxClassification1` |  | |  | `taxk1` |  |  |
| `CustomerTaxClassification2` |  | |  | `taxk2` |  |  |
| `CustomerTaxClassification3` |  | |  | `taxk3` |  |  |
| `CustomerTaxClassification4` |  | |  | `taxk4` |  |  |
| `CustomerTaxClassification5` |  | |  | `taxk5` |  |  |
| `CustomerTaxClassification6` |  | |  | `taxk6` |  |  |
| `CustomerTaxClassification7` |  | |  | `taxk7` |  |  |
| `CustomerTaxClassification8` |  | |  | `taxk8` |  |  |
| `CustomerTaxClassification9` |  | |  | `taxk9` |  |  |
| `IsEUTriangularDeal` |  | |  | `xegdr` |  |  |
| `SDPricingProcedure` |  | |  | `kalsm` |  |  |
| `ShippingCondition` |  | |  | `vsbed` |  |  |
| `PlantSupplier` |  | |  | `ico_lifnr` |  |  |
| `IncotermsVersion` |  | |  | `incov` |  |  |
| `IncotermsClassification` |  | |  | `inco1` |  |  |
| `IncotermsTransferLocation` |  | |  | `inco2` |  |  |
| `IncotermsLocation1` |  | |  | `inco2_l` |  |  |
| `IncotermsLocation2` |  | |  | `inco3_l` |  |  |
| `PayerParty` |  | |  | `kunrg` |  |  |
| `ContractAccount` |  | |  | `vkont` |  |  |
| `CustomerPaymentTerms` |  | |  | `zterm` |  |  |
| `PaymentMethod` |  | |  | `zlsch` |  |  |
| `PaymentReference` |  | |  | `kidno` |  |  |
| `FixedValueDate` |  | |  | `valdt` |  |  |
| `AdditionalValueDays` |  | |  | `valtg` |  |  |
| `SEPAMandate` |  | |  | `mndid` |  |  |
| `DeviatingPostingDate` |  | |  | `deviating_posting_date` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `FiscalYear` |  | |  | `gjahr` |  |  |
| `AccountingDocument` |  | |  | `belnr` |  |  |
| `FiscalPeriod` |  | |  | `poper` |  |  |
| `CustomerAccountAssignmentGroup` |  | |  | `ktgrd` |  |  |
| `AccountingExchangeRateIsSet` |  | |  | `cpkur` |  |  |
| `AccountingExchangeRate` |  | |  | `cast(kurrf as kurrf_not_converted preserving type)` |  |  |
| `ExchangeRateDate` |  | |  | `kurrf_dat` |  |  |
| `ExchangeRateType` |  | |  | `kurst` |  |  |
| `DocumentReferenceID` |  | |  | `xblnr` |  |  |
| `AssignmentReference` |  | |  | `zuonr` |  |  |
| `ReversalReason` |  | |  | `stgrd` |  |  |
| `DunningArea` |  | |  | `maber` |  |  |
| `DunningBlockingReason` |  | |  | `mansp` |  |  |
| `DunningKey` |  | |  | `mschl` |  |  |
| `InternalFinancialDocument` |  | |  | `lcnum` |  |  |
| `IsRelevantForAccrual` |  | |  | `accrrel` |  |  |
| `InvoiceListType` |  | |  | `fkart_rl` |  |  |
| `InvoiceListBillingDate` |  | |  | `fkdat_rl` |  |  |
| `BillingDocRequestReference` |  | |  | `bdr_ref` |  |  |
| `BillgDocReqRefLgclSyst` |  | |  | `bdr_ref_logsys` |  |  |
| `BillgDocReqRefSDDocCategory` |  | |  | `bdr_ref_vbtyp` |  |  |
| `SoldToParty` |  | |  | `kunag` |  |  |
| `PartnerCompany` |  | |  | `vbund` |  |  |
| `PurchaseOrderByCustomer` |  | |  | `bstnk_vf` |  |  |
| `CustomerGroup` |  | |  | `kdgrp` |  |  |
| `Country` |  | |  | `land1` |  |  |
| `CityCode` |  | |  | `cityc` |  |  |
| `SalesDistrict` |  | |  | `bzirk` |  |  |
| `Region` |  | |  | `regio` |  |  |
| `County` |  | |  | `counc` |  |  |
| `CreditControlArea` |  | |  | `kkber` |  |  |
| `CustomerRebateAgreement` |  | |  | `knuma` |  |  |
| `PricingDocument` |  | |  | `knumv` |  |  |
| `OverallSDProcessStatus` |  | |  | `gbstk` |  |  |
| `OverallBillingStatus` |  | |  | `vf_status` |  |  |
| `AccountingPostingStatus` |  | |  | `buchk` |  |  |
| `AccountingTransferStatus` |  | |  | `rfbsk` |  |  |
| `BillingIssueType` |  | |  | `vf_todo` |  |  |
| `OverallBillingDocReqStatus` |  | |  | `bdr_status` |  |  |
| `InvoiceListStatus` |  | |  | `relik` |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  | `uvals` |  |  |
| `OverallPricingIncompletionSts` |  | |  | `uvprs` |  |  |
| `OverallDocumentBillingStatus` |  | |  | `fksak` |  |  |
| `PrelimBillingDocumentStatus` |  | |  | `pbd_status` |  |  |
| `InvoiceClearingStatus` |  | |  | `clrst` |  |  |
| `BillgProcDocApprovalStatus` |  | |  | `apm_approval_status` |  |  |
| `BillgProcDocApprovalReason` |  | |  | `apm_approval_reason` |  |  |
| `PricingIsIncomplete` |  | |  | `cast(uvprs as uvprs preserving type)` |  |  |
| `_DunningAreaText` | | ✓ | | | | |
| `_CreditControlAreaText` | | ✓ | | | | |
| `_ItemBasic` | | ✓ | | | | |
| `_PartnerBasic` | | ✓ | | | | |
| `_PricingElementBasic` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_BillgDocReqRefSDDocCategory` | | ✓ | | | | |
| `_BillingDocumentCategory` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_ProposedBillingDocumentType` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LogicalSystem` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_CancelledBillingDocumentBasic` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_StatisticsCurrency` | | ✓ | | | | |
| `_CustomerPriceGroup` | | ✓ | | | | |
| `_PriceListType` | | ✓ | | | | |
| `_TaxDepartureCountry` | | ✓ | | | | |
| `_VATRegistrationOrigin` | | ✓ | | | | |
| `_VATRegistrationCountry` | | ✓ | | | | |
| `_SDPricingProcedure` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_PayerParty` | | ✓ | | | | |
| `_CustomerPaymentTerms` | | ✓ | | | | |
| `_PaymentMethod` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_AccountingDocument` | | ✓ | | | | |
| `_CustomerAccountAssgmtGroup` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |
| `_ReversalReason` | | ✓ | | | | |
| `_DunningArea` | | ✓ | | | | |
| `_DunningBlockingReason` | | ✓ | | | | |
| `_DunningKey` | | ✓ | | | | |
| `_InvoiceListType` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_CityCode` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_County` | | ✓ | | | | |
| `_County_2` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |
| `_OverallSDProcessStatus` | | ✓ | | | | |
| `_OverallBillingStatus` | | ✓ | | | | |
| `_OvrlBillingDocReqStatus` | | ✓ | | | | |
| `_PrelimBillingDocumentStatus` | | ✓ | | | | |
| `_AccountingPostingStatus` | | ✓ | | | | |
| `_AccountingTransferStatus` | | ✓ | | | | |
| `_BillingIssueType` | | ✓ | | | | |
| `_InvoiceListStatus` | | ✓ | | | | |
| `_OvrlItmGeneralIncompletionSts` | | ✓ | | | | |
| `_OverallPricingIncompletionSts` | | ✓ | | | | |
| `_BillgProcDocApprovalStatus` | | ✓ | | | | |
| `_BillgProcDocApprovalReason` | | ✓ | | | | |
| `_BillgProcDocApprovalStatusT` | | ✓ | | | | |
| `_BillgProcDocApprovalReasonT` | | ✓ | | | | |
| `_InvoiceClearingStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DunningAreaText` | `I_DunningAreaText` | [0..*] |
| `_CreditControlAreaText` | `I_CreditControlAreaText` | [0..*] |
| `_ItemBasic` | `I_BillingDocumentItemBasic` | [0..*] |
| `_PartnerBasic` | `I_BillingDocumentPartnerBasic` | [1..*] |
| `_PricingElementBasic` | `I_BillingDocPrcgElmntBasic` | [0..*] |
| `_SDDocumentCategory` | `I_SDDocumentCategory` | [0..1] |
| `_BillgDocReqRefSDDocCategory` | `I_SDDocumentCategory` | [0..1] |
| `_BillingDocumentCategory` | `I_BillingDocumentCategory` | [0..1] |
| `_BillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_ProposedBillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LogicalSystem` | `I_LogicalSystem` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_CancelledBillingDocumentBasic` | `I_BillingDocumentBasic` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_StatisticsCurrency` | `I_Currency` | [0..1] |
| `_CustomerPriceGroup` | `I_CustomerPriceGroup` | [0..1] |
| `_PriceListType` | `I_PriceListType` | [0..1] |
| `_TaxDepartureCountry` | `I_Country` | [0..1] |
| `_VATRegistrationOrigin` | `I_VATRegistrationOrigin` | [0..1] |
| `_VATRegistrationCountry` | `I_Country` | [0..1] |
| `_SDPricingProcedure` | `I_SlsPricingProcedure` | [0..1] |
| `_ShippingCondition` | `I_ShippingCondition` | [0..1] |
| `_IncotermsClassification` | `I_IncotermsClassification` | [0..1] |
| `_IncotermsVersion` | `I_IncotermsVersion` | [0..1] |
| `_PayerParty` | `I_Customer` | [0..1] |
| `_CustomerPaymentTerms` | `I_CustomerPaymentTerms` | [0..1] |
| `_PaymentMethod` | `I_PaymentMethod` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_AccountingDocument` | `I_AccountingDocument` | [0..1] |
| `_FiscalPeriod` | `I_FiscalYearPeriodForCmpnyCode` | [1..1] |
| `_CustomerAccountAssgmtGroup` | `I_CustomerAccountAssgmtGroup` | [0..1] |
| `_ExchangeRateType` | `I_ExchangeRateType` | [0..1] |
| `_ReversalReason` | `I_ReversalReason` | [0..1] |
| `_DunningArea` | `I_DunningArea` | [0..1] |
| `_DunningBlockingReason` | `I_DunningBlockingReasonCode` | [0..1] |
| `_DunningKey` | `I_DunningKey` | [0..1] |
| `_InvoiceListType` | `I_BillingDocumentType` | [0..1] |
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_CityCode` | `I_CityCode` | [0..1] |
| `_SalesDistrict` | `I_SalesDistrict` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_County` | `I_CountyCode` | [0..1] |
| `_County_2` | `I_TaxingCounty` | [0..1] |
| `_CreditControlArea` | `I_CreditControlArea` | [0..1] |
| `_OverallSDProcessStatus` | `I_OverallSDProcessStatus` | [0..1] |
| `_OverallBillingStatus` | `I_OverallBillingStatus` | [0..1] |
| `_OvrlBillingDocReqStatus` | `I_OvrlBillingDocReqStatus` | [0..1] |
| `_PrelimBillingDocumentStatus` | `I_PrelimBillgDocStatus` | [0..1] |
| `_AccountingPostingStatus` | `I_AccountingPostingStatus` | [0..1] |
| `_AccountingTransferStatus` | `I_AccountingTransferStatus` | [0..1] |
| `_BillingIssueType` | `I_BillingIssueType` | [0..1] |
| `_InvoiceListStatus` | `I_InvoiceListStatus` | [0..1] |
| `_OvrlItmGeneralIncompletionSts` | `I_OvrlItmGenIncompletionSts` | [0..1] |
| `_OverallPricingIncompletionSts` | `I_OverallPrcIncompletionSts` | [0..1] |
| `_BillgProcDocApprovalStatus` | `I_SDApprovalStatus` | [0..1] |
| `_BillgProcDocApprovalReason` | `I_BillgProcDocApprovalReason` | [0..1] |
| `_BillgProcDocApprovalStatusT` | `I_SDApprovalStatusT` | [0..*] |
| `_BillgProcDocApprovalReasonT` | `I_SDApprovalReasonT` | [0..*] |
| `_InvoiceClearingStatus` | `I_InvoiceClearingStatus` | [0..1] |
| `_Extension` | `E_BillingDocument` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ISDBILLDOCBASIC'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: [ '_CreatedByUser', '_DunningAreaText', '_CreditControlAreaText' ]

@Analytics.dataCategory: #DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Billing Process Document'

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'BillingDocument'

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #A, sizeCategory: #L }

@VDM.viewType: #BASIC

define view I_BillingDocumentBasic
  as select from vbrk
  // Association

  association [0..*] to I_DunningAreaText              as _DunningAreaText
    on  $projection.DunningArea = _DunningAreaText.DunningArea
    and $projection.CompanyCode = _DunningAreaText.CompanyCode

  association [0..*] to I_CreditControlAreaText        as _CreditControlAreaText
    on $projection.CreditControlArea = _CreditControlAreaText.CreditControlArea

  association [0..*] to I_BillingDocumentItemBasic     as _ItemBasic
    on $projection.BillingDocument = _ItemBasic.BillingDocument

  association [1..*] to I_BillingDocumentPartnerBasic  as _PartnerBasic
    on $projection.BillingDocument = _PartnerBasic.BillingDocument

  association [0..*] to I_BillingDocPrcgElmntBasic     as _PricingElementBasic
    on $projection.BillingDocument = _PricingElementBasic.BillingDocument

  association [0..1] to I_SDDocumentCategory           as _SDDocumentCategory
    on $projection.SDDocumentCategory = _SDDocumentCategory.SDDocumentCategory

  association [0..1] to I_SDDocumentCategory           as _BillgDocReqRefSDDocCategory
    on $projection.BillgDocReqRefSDDocCategory = _BillgDocReqRefSDDocCategory.SDDocumentCategory

  association [0..1] to I_BillingDocumentCategory      as _BillingDocumentCategory
    on $projection.BillingDocumentCategory = _BillingDocumentCategory.BillingDocumentCategory

  association [0..1] to I_BillingDocumentType          as _BillingDocumentType
    on $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType

  association [0..1] to I_BillingDocumentType          as _ProposedBillingDocumentType
    on $projection.ProposedBillingDocumentType = _ProposedBillingDocumentType.BillingDocumentType

  association [0..1] to I_User                         as _CreatedByUser
    on $projection.CreatedByUser = _CreatedByUser.UserID

  association [0..1] to I_LogicalSystem                as _LogicalSystem
    on $projection.LogicalSystem = _LogicalSystem.LogicalSystem

  association [0..1] to I_SalesOrganization            as _SalesOrganization
    on $projection.SalesOrganization = _SalesOrganization.SalesOrganization

  association [0..1] to I_DistributionChannel          as _DistributionChannel
    on $projection.DistributionChannel = _DistributionChannel.DistributionChannel

  association [0..1] to I_Division                     as _Division
    on $projection.Division = _Division.Division

  association [0..1] to I_BillingDocumentBasic         as _CancelledBillingDocumentBasic
    on $projection.CancelledBillingDocument = _CancelledBillingDocumentBasic.BillingDocument

  association [0..1] to I_Currency                     as _TransactionCurrency
    on $projection.TransactionCurrency = _TransactionCurrency.Currency

  association [0..1] to I_Currency                     as _StatisticsCurrency
    on $projection.StatisticsCurrency = _StatisticsCurrency.Currency

  association [0..1] to I_CustomerPriceGroup           as _CustomerPriceGroup
    on $projection.CustomerPriceGroup = _CustomerPriceGroup.CustomerPriceGroup

  association [0..1] to I_PriceListType                as _PriceListType
    on $projection.PriceListType = _PriceListType.PriceListType

  association [0..1] to I_Country                      as _TaxDepartureCountry
    on $projection.TaxDepartureCountry = _TaxDepartureCountry.Country

  association [0..1] to I_VATRegistrationOrigin        as _VATRegistrationOrigin
    on $projection.VATRegistrationOrigin = _VATRegistrationOrigin.VATRegistrationOrigin

  association [0..1] to I_Country                      as _VATRegistrationCountry
    on $projection.VATRegistrationCountry = _VATRegistrationCountry.Country

  association [0..1] to I_SlsPricingProcedure          as _SDPricingProcedure
    on $projection.SDPricingProcedure = _SDPricingProcedure.PricingProcedure

  association [0..1] to I_ShippingCondition            as _ShippingCondition
    on $projection.ShippingCondition = _ShippingCondition.ShippingCondition

  association [0..1] to I_IncotermsClassification      as _IncotermsClassification
    on $projection.IncotermsClassification = _IncotermsClassification.IncotermsClassification

  association [0..1] to I_IncotermsVersion             as _IncotermsVersion
    on $projection.IncotermsVersion = _IncotermsVersion.IncotermsVersion

  association [0..1] to I_Customer                     as _PayerParty
    on $projection.PayerParty = _PayerParty.Customer

  association [0..1] to I_CustomerPaymentTerms         as _CustomerPaymentTerms
    on $projection.CustomerPaymentTerms = _CustomerPaymentTerms.CustomerPaymentTerms

  association [0..1] to I_PaymentMethod                as _PaymentMethod
    on  $projection.PaymentMethod = _PaymentMethod.PaymentMethod
    and $projection.Country       = _PaymentMethod.Country

  association [0..1] to I_CompanyCode                  as _CompanyCode
    on $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_FiscalYearForCompanyCode     as _FiscalYear
    on  $projection.FiscalYear  = _FiscalYear.FiscalYear
    and $projection.CompanyCode = _FiscalYear.CompanyCode

  association [0..1] to I_AccountingDocument           as _AccountingDocument
    on  $projection.CompanyCode        = _AccountingDocument.CompanyCode
    and $projection.FiscalYear         = _AccountingDocument.FiscalYear
    and $projection.AccountingDocument = _AccountingDocument.AccountingDocument

  association [1..1] to I_FiscalYearPeriodForCmpnyCode as _FiscalPeriod
    on  $projection.CompanyCode  = _FiscalPeriod.CompanyCode
    and $projection.FiscalYear   = _FiscalPeriod.FiscalYear
    and $projection.FiscalPeriod = _FiscalPeriod.FiscalPeriod

  association [0..1] to I_CustomerAccountAssgmtGroup   as _CustomerAccountAssgmtGroup
    on $projection.CustomerAccountAssignmentGroup = _CustomerAccountAssgmtGroup.CustomerAccountAssignmentGroup

  association [0..1] to I_ExchangeRateType             as _ExchangeRateType
    on $projection.ExchangeRateType = _ExchangeRateType.ExchangeRateType

  association [0..1] to I_ReversalReason               as _ReversalReason
    on $projection.ReversalReason = _ReversalReason.ReversalReason

  association [0..1] to I_DunningArea                  as _DunningArea
    on  $projection.DunningArea = _DunningArea.DunningArea
    and $projection.CompanyCode = _DunningArea.CompanyCode

  association [0..1] to I_DunningBlockingReasonCode    as _DunningBlockingReason
    on $projection.DunningBlockingReason = _DunningBlockingReason.DunningBlockingReason

  association [0..1] to I_DunningKey                   as _DunningKey
    on $projection.DunningKey = _DunningKey.DunningKey

  association [0..1] to I_BillingDocumentType          as _InvoiceListType
    on $projection.InvoiceListType = _InvoiceListType.BillingDocumentType

  association [0..1] to I_Customer                     as _SoldToParty
    on $projection.SoldToParty = _SoldToParty.Customer

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

  association [0..1] to I_CountyCode                   as _County
    on  $projection.Country = _County.Country
    and $projection.Region  = _County.Region
    and $projection.County  = _County.County

  association [0..1] to I_TaxingCounty                 as _County_2
    on  $projection.Country = _County_2.Country
    and $projection.Region  = _County_2.Region
    and $projection.County  = _County_2.TaxingCounty

  association [0..1] to I_CreditControlArea            as _CreditControlArea
    on $projection.CreditControlArea = _CreditControlArea.CreditControlArea

  association [0..1] to I_OverallSDProcessStatus       as _OverallSDProcessStatus
    on $projection.OverallSDProcessStatus = _OverallSDProcessStatus.OverallSDProcessStatus

  association [0..1] to I_OverallBillingStatus         as _OverallBillingStatus
    on $projection.OverallBillingStatus = _OverallBillingStatus.OverallBillingStatus

  association [0..1] to I_OvrlBillingDocReqStatus      as _OvrlBillingDocReqStatus
    on $projection.OverallBillingDocReqStatus = _OvrlBillingDocReqStatus.OverallBillingDocReqStatus

  association [0..1] to I_PrelimBillgDocStatus         as _PrelimBillingDocumentStatus
    on $projection.PrelimBillingDocumentStatus = _PrelimBillingDocumentStatus.PrelimBillingDocumentStatus

  association [0..1] to I_AccountingPostingStatus      as _AccountingPostingStatus
    on $projection.AccountingPostingStatus = _AccountingPostingStatus.AccountingPostingStatus

  association [0..1] to I_AccountingTransferStatus     as _AccountingTransferStatus
    on $projection.AccountingTransferStatus = _AccountingTransferStatus.AccountingTransferStatus

  association [0..1] to I_BillingIssueType             as _BillingIssueType
    on $projection.BillingIssueType = _BillingIssueType.BillingIssueType

  association [0..1] to I_InvoiceListStatus            as _InvoiceListStatus
    on $projection.InvoiceListStatus = _InvoiceListStatus.InvoiceListStatus

  association [0..1] to I_OvrlItmGenIncompletionSts    as _OvrlItmGeneralIncompletionSts
    on $projection.OvrlItmGeneralIncompletionSts = _OvrlItmGeneralIncompletionSts.OvrlItmGeneralIncompletionSts

  association [0..1] to I_OverallPrcIncompletionSts    as _OverallPricingIncompletionSts
    on $projection.OverallPricingIncompletionSts = _OverallPricingIncompletionSts.OverallPricingIncompletionSts

  association [0..1] to I_SDApprovalStatus             as _BillgProcDocApprovalStatus
    on $projection.BillgProcDocApprovalStatus = _BillgProcDocApprovalStatus.SDApprovalStatus

  association [0..1] to I_BillgProcDocApprovalReason   as _BillgProcDocApprovalReason
    on  $projection.SDDocumentCategory         = _BillgProcDocApprovalReason.SDDocumentCategory
    and $projection.BillgProcDocApprovalReason = _BillgProcDocApprovalReason.BillgProcDocApprovalReason

  association [0..*] to I_SDApprovalStatusT            as _BillgProcDocApprovalStatusT
    on $projection.BillgProcDocApprovalStatus = _BillgProcDocApprovalStatusT.SDApprovalStatus

  association [0..*] to I_SDApprovalReasonT            as _BillgProcDocApprovalReasonT
    on $projection.BillgProcDocApprovalReason = _BillgProcDocApprovalReasonT.SDApprovalReason

  association [0..1] to I_InvoiceClearingStatus        as _InvoiceClearingStatus
    on $projection.InvoiceClearingStatus = _InvoiceClearingStatus.InvoiceClearingStatus

  // Extensibility
  association [0..1] to E_BillingDocument              as _Extension
    on $projection.BillingDocument = _Extension.BillingDocument

{
      // key
  key vbeln                                              as BillingDocument,

      // category
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      vbtyp                                              as SDDocumentCategory,

      @ObjectModel.foreignKey.association: '_BillingDocumentCategory'
      fktyp                                              as BillingDocumentCategory,

      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      fkart                                              as BillingDocumentType,

      @ObjectModel.foreignKey.association: '_ProposedBillingDocumentType'
      fkara                                              as ProposedBillingDocumentType,

      // admin
      @Semantics.personalData.isPotentiallySensitive: true
      @Semantics.user.createdBy: true
      ernam                                              as CreatedByUser,

      @Semantics.systemDate.createdAt: true
      erdat                                              as CreationDate,

      @Semantics.systemTime.createdAt
      erzet                                              as CreationTime,

      @Semantics.systemDate.lastChangedAt: true
      aedat                                              as LastChangeDate,

      @Semantics.systemDateTime.lastChangedAt: true
      changed_on                                         as LastChangeDateTime,

      @ObjectModel.foreignKey.association: '_LogicalSystem'
      logsys                                             as LogicalSystem,

      // org
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      vkorg                                              as SalesOrganization,

      @ObjectModel.foreignKey.association: '_DistributionChannel'
      vtweg                                              as DistributionChannel,

      @ObjectModel.foreignKey.association: '_Division'
      spart                                              as Division,

      // billing
      fkdat                                              as BillingDocumentDate,
      fksto                                              as BillingDocumentIsCancelled,


      // --[ GENERATED:012:GlBfhyFV7jY4{YyEh3zJr0
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BillingDocumentBasicStdVH', element: 'BillingDocument' } } ]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CancelledBillingDocumentBasic'
      sfakn                                              as CancelledBillingDocument,

      zukri                                              as BillingDocCombinationCriteria,
      mrnkz                                              as ManualInvoiceMaintIsRelevant,
      numpg                                              as NmbrOfPages,
      intra_rel                                          as IsIntrastatReportingRelevant,
      intra_excl                                         as IsIntrastatReportingExcluded,
      draft                                              as BillingDocumentIsTemporary,

      // pricing
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      netwr                                              as TotalNetAmount,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      @Semantics.currencyCode: true
      waerk                                              as TransactionCurrency,

      @ObjectModel.foreignKey.association: '_StatisticsCurrency'
      @Semantics.currencyCode: true
      stwae                                              as StatisticsCurrency,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      mwsbk                                              as TotalTaxAmount,

      @ObjectModel.foreignKey.association: '_CustomerPriceGroup'
      konda                                              as CustomerPriceGroup,

      @ObjectModel.foreignKey.association: '_PriceListType'
      pltyp                                              as PriceListType,

      @ObjectModel.foreignKey.association: '_TaxDepartureCountry'
      landtx                                             as TaxDepartureCountry,

      stceg                                              as VATRegistration,

      @ObjectModel.foreignKey.association: '_VATRegistrationOrigin'
      stceg_h                                            as VATRegistrationOrigin,

      @ObjectModel.foreignKey.association: '_VATRegistrationCountry'
      stceg_l                                            as VATRegistrationCountry,

      hityp_pr                                           as HierarchyTypePricing,

      taxk1                                              as CustomerTaxClassification1,
      taxk2                                              as CustomerTaxClassification2,
      taxk3                                              as CustomerTaxClassification3,
      taxk4                                              as CustomerTaxClassification4,
      taxk5                                              as CustomerTaxClassification5,
      taxk6                                              as CustomerTaxClassification6,
      taxk7                                              as CustomerTaxClassification7,
      taxk8                                              as CustomerTaxClassification8,
      taxk9                                              as CustomerTaxClassification9,
      xegdr                                              as IsEUTriangularDeal,

      @ObjectModel.foreignKey.association: '_SDPricingProcedure'
      kalsm                                              as SDPricingProcedure,

      // shipping
      @ObjectModel.foreignKey.association: '_ShippingCondition'
      vsbed                                              as ShippingCondition,

      ico_lifnr                                          as PlantSupplier,

      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      incov                                              as IncotermsVersion,
      // to do: add incoterms labels

      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      inco1                                              as IncotermsClassification,

      inco2                                              as IncotermsTransferLocation,
      inco2_l                                            as IncotermsLocation1,
      inco3_l                                            as IncotermsLocation2,

      // payment
      // --[ GENERATED:012:GlBfhyFV7jY4{YyEh3zJr0
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_PayerParty'
      kunrg                                              as PayerParty,

      vkont                                              as ContractAccount,

      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      zterm                                              as CustomerPaymentTerms,

      @ObjectModel.foreignKey.association: '_PaymentMethod'
      zlsch                                              as PaymentMethod,

      kidno                                              as PaymentReference,
      valdt                                              as FixedValueDate,
      valtg                                              as AdditionalValueDays,
      mndid                                              as SEPAMandate,

      // accounting
      deviating_posting_date                             as DeviatingPostingDate,

      // --[ GENERATED:012:GlBfhyFV7jY4{YyEh3zJr0
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      // ]--GENERATED      
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                              as CompanyCode,

      @ObjectModel.foreignKey.association: '_FiscalYear'
      gjahr                                              as FiscalYear,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_AccountingDocumentStdVH', element: 'AccountingDocument' },
                                            additionalBinding: [ { localElement: 'CompanyCode', element: 'CompanyCode' },
                                                                 { localElement: 'FiscalYear',  element: 'FiscalYear'  } ] } ]
      @ObjectModel.foreignKey.association: '_AccountingDocument'
      belnr                                              as AccountingDocument,

      // @ObjectModel.foreignKey.association: '_FiscalPeriod'
      poper                                              as FiscalPeriod,

      @ObjectModel.foreignKey.association: '_CustomerAccountAssgmtGroup'
      ktgrd                                              as CustomerAccountAssignmentGroup,

      cpkur                                              as AccountingExchangeRateIsSet,
      cast(kurrf as kurrf_not_converted preserving type) as AccountingExchangeRate,
      kurrf_dat                                          as ExchangeRateDate,

      @ObjectModel.foreignKey.association: '_ExchangeRateType'
      kurst                                              as ExchangeRateType,

      xblnr                                              as DocumentReferenceID,
      zuonr                                              as AssignmentReference,

      @ObjectModel.foreignKey.association: '_ReversalReason'
      stgrd                                              as ReversalReason,

      // --[ GENERATED:012:GlBfhyFV7jY4{YyEh3zJr0
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_DunningAreaStdVH', element: 'DunningArea' },
                                            additionalBinding: [ { localElement: 'CompanyCode', element: 'CompanyCode' } ] } ]
      @ObjectModel.foreignKey.association: '_DunningArea'
      @ObjectModel.text.association: '_DunningAreaText'
      // ]--GENERATED
      maber                                              as DunningArea,

      @ObjectModel.foreignKey.association: '_DunningBlockingReason'
      mansp                                              as DunningBlockingReason,

      @ObjectModel.foreignKey.association: '_DunningKey'
      mschl                                              as DunningKey,

      lcnum                                              as InternalFinancialDocument,
      accrrel                                            as IsRelevantForAccrual,

      // invoice list
      @ObjectModel.foreignKey.association: '_InvoiceListType'
      fkart_rl                                           as InvoiceListType,

      fkdat_rl                                           as InvoiceListBillingDate,

      // billing document request
      bdr_ref                                            as BillingDocRequestReference,
      bdr_ref_logsys                                     as BillgDocReqRefLgclSyst,

      @ObjectModel.foreignKey.association: '_BillgDocReqRefSDDocCategory'
      bdr_ref_vbtyp                                      as BillgDocReqRefSDDocCategory,

      // sales
      // --[ GENERATED:012:GlBfhyFV7jY4{YyEh3zJr0
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_SoldToParty'
      kunag                                              as SoldToParty,

      vbund                                              as PartnerCompany,
      bstnk_vf                                           as PurchaseOrderByCustomer,

      @ObjectModel.foreignKey.association: '_CustomerGroup'
      kdgrp                                              as CustomerGroup,

      @ObjectModel.foreignKey.association: '_Country'
      land1                                              as Country,

      @ObjectModel.foreignKey.association: '_CityCode'
      cityc                                              as CityCode,

      @ObjectModel.foreignKey.association: '_SalesDistrict'
      bzirk                                              as SalesDistrict,

      @ObjectModel.foreignKey.association: '_Region'
      regio                                              as Region,

      @ObjectModel.foreignKey.association: '_County_2'
      counc                                              as County,

      // --[ GENERATED:012:GlBfhyFV7jY4{YyEh3zJr0
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CreditControlAreaStdVH', element: 'CreditControlArea' } } ]
      @ObjectModel.foreignKey.association: '_CreditControlArea'
      @ObjectModel.text.association: '_CreditControlAreaText'
      // ]--GENERATED
      kkber                                              as CreditControlArea,

      knuma                                              as CustomerRebateAgreement,
      knumv                                              as PricingDocument,

      // status
      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      gbstk                                              as OverallSDProcessStatus,

      @ObjectModel.foreignKey.association: '_OverallBillingStatus'
      vf_status                                          as OverallBillingStatus,

      @ObjectModel.foreignKey.association: '_AccountingPostingStatus'
      buchk                                              as AccountingPostingStatus,

      @ObjectModel.foreignKey.association: '_AccountingTransferStatus'
      rfbsk                                              as AccountingTransferStatus,

      @ObjectModel.foreignKey.association: '_BillingIssueType'
      vf_todo                                            as BillingIssueType,

      @ObjectModel.foreignKey.association: '_OvrlBillingDocReqStatus'
      bdr_status                                         as OverallBillingDocReqStatus,

      @ObjectModel.foreignKey.association: '_InvoiceListStatus'
      relik                                              as InvoiceListStatus,

      @ObjectModel.foreignKey.association: '_OvrlItmGeneralIncompletionSts'
      uvals                                              as OvrlItmGeneralIncompletionSts,

      @ObjectModel.foreignKey.association: '_OverallPricingIncompletionSts'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'PricingIsIncomplete'
      uvprs                                              as OverallPricingIncompletionSts,

      // foreign key association has to be defined (in next release (?)), target: I_OvrlDocBillingStatus
      fksak                                              as OverallDocumentBillingStatus,

      @ObjectModel.foreignKey.association: '_PrelimBillingDocumentStatus'
      pbd_status                                         as PrelimBillingDocumentStatus,

      @ObjectModel.foreignKey.association: '_InvoiceClearingStatus'
      clrst                                              as InvoiceClearingStatus,

      // approval
      @ObjectModel.foreignKey.association: '_BillgProcDocApprovalStatus'
      @ObjectModel.text.association: '_BillgProcDocApprovalStatusT'
      vbrk.apm_approval_status                           as BillgProcDocApprovalStatus,

      @ObjectModel.foreignKey.association: '_BillgProcDocApprovalReason'
      @ObjectModel.text.association: '_BillgProcDocApprovalReasonT'
      apm_approval_reason                                as BillgProcDocApprovalReason,

      @Semantics.booleanIndicator: true
      cast(uvprs as uvprs preserving type)               as PricingIsIncomplete,
      
      // association
      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _ItemBasic,

      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _PartnerBasic,

      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _PricingElementBasic,

      _SDDocumentCategory,
      _BillgDocReqRefSDDocCategory,
      _BillingDocumentCategory,
      _BillingDocumentType,
      _ProposedBillingDocumentType,

      _CreatedByUser,
      _LogicalSystem,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _CancelledBillingDocumentBasic,
      _TransactionCurrency,
      _StatisticsCurrency,
      _CustomerPriceGroup,
      _PriceListType,
      _TaxDepartureCountry,
      _VATRegistrationOrigin,
      _VATRegistrationCountry,
      _SDPricingProcedure,
      _ShippingCondition,
      _IncotermsClassification,
      _IncotermsVersion,
      _PayerParty,
      _CustomerPaymentTerms,
      _PaymentMethod,
      _CompanyCode,
      _FiscalYear,
      _AccountingDocument,
      // _FiscalPeriod,
      _CustomerAccountAssgmtGroup,
      _ExchangeRateType,
      _ReversalReason,
      _DunningArea,

      _DunningBlockingReason,
      _DunningKey,
      _InvoiceListType,
      _SoldToParty,
      _CustomerGroup,
      _Country,
      _CityCode,
      _SalesDistrict,
      _Region,

      @API.element: { releaseState: #DEPRECATED, successor: '_County_2' }
      _County,

      _County_2,
      _CreditControlArea,

      _OverallSDProcessStatus,
      _OverallBillingStatus,
      _OvrlBillingDocReqStatus,
      _PrelimBillingDocumentStatus,
      _AccountingPostingStatus,
      _AccountingTransferStatus,
      _BillingIssueType,
      _InvoiceListStatus,
      _OvrlItmGeneralIncompletionSts,
      @API.element.releaseState: #DEPRECATED
      _OverallPricingIncompletionSts,

      _BillgProcDocApprovalReason,
      _BillgProcDocApprovalStatus,
      _BillgProcDocApprovalStatusT,
      _BillgProcDocApprovalReasonT,

      _InvoiceClearingStatus,

      @Consumption.hidden: true
      _DunningAreaText,

      @Consumption.hidden: true
      _CreditControlAreaText
}
```
