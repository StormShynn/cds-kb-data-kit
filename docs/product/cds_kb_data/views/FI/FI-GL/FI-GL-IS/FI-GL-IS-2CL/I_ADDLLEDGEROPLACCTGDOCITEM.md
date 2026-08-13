---
name: I_ADDLLEDGEROPLACCTGDOCITEM
description: "Addlledgeroplacctgdocitem"
semantic_vi: "View Addlledgeroplacctgdocitem CDS hiển thị thêm chi tiết đăng ký sổ cái cho các tài liệu kế toán, cho phép phân tích chi tiết về các giao dịch tài chính. Nó được sử dụng để lấy và xử lý thông tin chi tiết về các mục tài liệu kế toán."
keywords:
  - "accounting document"
  - "đơn kế toán"
  - "ledger posting"
  - "đăng ký sổ cái"
  - "financial transaction"
  - "giao dịch tài chính"
  - "accounting document item"
  - "mục tài liệu kế toán"
  - "sap fi-gl"
  - "fi-gl-is-2cl"
semantic_en: "The Addlledgeroplacctgdocitem CDS view exposes additional ledger posting details for accounting documents, allowing for item-level analysis of financial transactions. It is used to retrieve and process detailed information about accounting document items."
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - item-level
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_ADDLLEDGEROPLACCTGDOCITEM

**Addlledgeroplacctgdocitem**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` |  |  |
| `AccountingDocument` | ✓ | |  | `belnr` |  |  |
| `FiscalYear` | ✓ | |  | `gjahr` |  |  |
| `AccountingDocumentItem` | ✓ | |  | `buzei` |  |  |
| `ChartOfAccounts` |  | |  | `ktopl` |  |  |
| `ClearingDate` |  | |  | `augdt` |  |  |
| `ClearingCreationDate` |  | |  | `augcp` |  |  |
| `ClearingJournalEntryFiscalYear` |  | |  | `auggj` |  |  |
| `ClearingDocFiscalYear` |  | |  | `cast( P_Bseg_Add_Com.auggj as fis_auggj_no_conv_depre preserving type )` |  |  |
| `ClearingJournalEntry` |  | |  | `augbl` |  |  |
| `ClearingAccountingDocument` |  | |  | `cast( P_Bseg_Add_Com.augbl as fis_augbl_depre preserving type )` |  |  |
| `PostingKey` |  | |  | `bschl` |  |  |
| `FinancialAccountType` |  | |  | `koart` |  |  |
| `DebitCreditCode` |  | |  | `shkzg` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `PartnerBusinessArea` |  | |  | `pargb` |  |  |
| `TaxCode` |  | |  | `mwskz` |  |  |
| `WithholdingTaxCode` |  | |  | `qsskz` |  |  |
| `TransactionTypeDetermination` |  | |  | `ktosl` |  |  |
| `ValueDate` |  | |  | `valut` |  |  |
| `AssignmentReference` |  | |  | `zuonr` |  |  |
| `DocumentItemText` |  | |  | `sgtxt` |  |  |
| `PartnerCompany` |  | |  | `vbund` |  |  |
| `FinancialTransactionType` |  | |  | `bewar` |  |  |
| `CorporateGroupAccount` |  | |  | `altkt` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `CostCenter` |  | |  | `kostl` |  |  |
| `Project` |  | |  | `projn` |  |  |
| `OrderID` |  | |  | `aufnr` |  |  |
| `MasterFixedAsset` |  | |  | `anln1` |  |  |
| `FixedAsset` |  | |  | `anln2` |  |  |
| `AssetTransactionType` |  | |  | `anbwa` |  |  |
| `IsOpenItemManaged` |  | |  | `xopvw` |  |  |
| `IsAutomaticallyCreated` |  | |  | `xauto` |  |  |
| `GLAccount` |  | |  | `hkont` |  |  |
| `IsBalanceSheetAccount` |  | |  | `xbilk` |  |  |
| `ProfitLossAccountType` |  | |  | `gvtyp` |  |  |
| `DueCalculationBaseDate` |  | |  | `zfbdt` |  |  |
| `InvoiceReference` |  | |  | `rebzg` |  |  |
| `InvoiceReferenceFiscalYear` |  | |  | `rebzj` |  |  |
| `InvoiceItemReference` |  | |  | `rebzz` |  |  |
| `FollowOnDocumentType` |  | |  | `rebzt` |  |  |
| `BillOfExchangeUsage` |  | |  | `wverw` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `Product` |  | |  | `matnr` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `ValuationArea` |  | |  | `bwkey` |  |  |
| `InventoryValuationType` |  | |  | `bwtar` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `JointVenture` |  | |  | `vname` |  |  |
| `JointVentureCostRecoveryCode` |  | |  | `recid` |  |  |
| `JointVentureEquityGroup` |  | |  | `egrup` |  |  |
| `TreasuryContractType` |  | |  | `vertt` |  |  |
| `AssetContract` |  | |  | `vertn` |  |  |
| `CashFlowType` |  | |  | `vbewa` |  |  |
| `REInternalFinNumber` |  | |  | `cast( P_Bseg_Add_Com.imkey as recaimkeyfi preserving type )` |  |  |
| `RealEstateObject` |  | |  | `imkey` |  |  |
| `SettlementReferenceDate` |  | |  | `dabrz` |  |  |
| `CommitmentItem` |  | |  | `fipos` |  |  |
| `CommitmentItemShortID` |  | |  | `cast( P_Bseg_Add_Com.fipos as fis_fipos_shortid preserving type )` |  |  |
| `CostObject` |  | |  | `kstrg` |  |  |
| `ProjectNetwork` |  | |  | `nplnr` |  |  |
| `OrderInternalBillOfOperations` |  | |  | `aufpl` |  |  |
| `OrderIntBillOfOperationsItem` |  | |  | `aplzl` |  |  |
| `WBSElementInternalID` |  | |  | `projk` |  |  |
| `ProfitabilitySegment` |  | |  | `cast( case when P_Bseg_Add_Com.paobjnr > '9999999999' then '9999999999' else lpad( P_Bseg_Add_Com.paobjnr, 10, '0' ) end as rkeobjnr_numc )` |  |  |
| `ProfitabilitySegment_2` |  | |  | `cast( P_Bseg_Add_Com.paobjnr as rkeobjnr_char )` |  |  |
| `ClearingIsReversed` |  | |  | `xragl` |  |  |
| `PaymentMethodSupplement` |  | |  | `uzawe` |  |  |
| `AlternativeGLAccount` |  | |  | `lokkt` |  |  |
| `FundsCenter` |  | |  | `fistl` |  |  |
| `Fund` |  | |  | `geber` |  |  |
| `PartnerProfitCenter` |  | |  | `pprct` |  |  |
| `Reference1IDByBusinessPartner` |  | |  | `xref1` |  |  |
| `Reference2IDByBusinessPartner` |  | |  | `xref2` |  |  |
| `EarmarkedFundsDocument` |  | |  | `kblnr` |  |  |
| `EarmarkedFundsDocumentItem` |  | |  | `kblpos` |  |  |
| `FunctionalArea` |  | |  | `fkber` |  |  |
| `PaymentCardItem` |  | |  | `rfzei` |  |  |
| `PaymentCardPaymentSettlement` |  | |  | `ccbtc` |  |  |
| `Reference3IDByBusinessPartner` |  | |  | `xref3` |  |  |
| `ClearingItem` |  | |  | `agzei` |  |  |
| `BusinessPlace` |  | |  | `bupla` |  |  |
| `TaxSection` |  | |  | `secco` |  |  |
| `CostCtrActivityType` |  | |  | `lstar` |  |  |
| `BusinessProcess` |  | |  | `prznr` |  |  |
| `GrantID` |  | |  | `grant_nbr` |  |  |
| `FundedProgram` |  | |  | `measure` |  |  |
| `Segment` |  | |  | `segment` |  |  |
| `PartnerSegment` |  | |  | `psegment` |  |  |
| `PartnerFunctionalArea` |  | |  | `pfkber` |  |  |
| `CostElement` |  | |  | `kstar` |  |  |
| `NetDueDate` |  | |  | `netdt` |  |  |
| `OffsettingAccount` |  | |  | `gkont` |  |  |
| `OffsettingAccountType` |  | |  | `gkart` |  |  |
| `OffsettingChartOfAccounts` |  | |  | `cast( ( case P_Bseg_Add_Com.gkart when 'D' then ' ' when 'K' then ' ' else P_Bseg_Add_Com.ktopl end ) as ktopl)` |  |  |
| `PartnerFund` |  | |  | `pgeber` |  |  |
| `PartnerGrant` |  | |  | `pgrant_nbr` |  |  |
| `BudgetPeriod` |  | |  | `budget_pd` |  |  |
| `PartnerBudgetPeriod` |  | |  | `pbudget_pd` |  |  |
| `AccountingDocumentCategory` |  | |  | `bstat` |  |  |
| `CashLedgerCompanyCode` |  | |  | `re_bukrs` |  |  |
| `CashLedgerAccount` |  | |  | `re_account` |  |  |
| `PubSecBudgetAccountCoCode` |  | |  | `bdgt_account_cocode` |  |  |
| `PubSecBudgetAccount` |  | |  | `bdgt_account` |  |  |
| `CompanyCodeCurrency` |  | |  | `h_hwaer` |  |  |
| `AmountInCompanyCodeCurrency` |  | |  | `dmbtr_shl` |  |  |
| `FunctionalCurrency` |  | |  | `rfccur` |  |  |
| `AmountInFunctionalCurrency` |  | |  | `fcsl_shl` |  |  |
| `TaxAmountInCoCodeCrcy` |  | |  | `mwsts_shl` |  |  |
| `ValuationDiffAmtInCoCodeCrcy` |  | |  | `bdiff_shl` |  |  |
| `TransactionCurrency` |  | |  | `h_waers` |  |  |
| `AmountInTransactionCurrency` |  | |  | `wrbtr_shl` |  |  |
| `TaxAmount` |  | |  | `wmwst_shl` |  |  |
| `BalanceTransactionCurrency` |  | |  | `pswsl` |  |  |
| `AmountInBalanceTransacCrcy` |  | |  | `pswbt_shl` |  |  |
| `AdditionalCurrency1` |  | |  | `h_hwae2` |  |  |
| `ValuationDiffAmtInAddlCrcy1` |  | |  | `bdif2_shl` |  |  |
| `AmountInAdditionalCurrency1` |  | |  | `dmbe2_shl` |  |  |
| `AdditionalCurrency2` |  | |  | `h_hwae3` |  |  |
| `AmountInAdditionalCurrency2` |  | |  | `dmbe3_shl` |  |  |
| `ValuationDiffAmtInAddlCrcy2` |  | |  | `bdif3_shl` |  |  |
| `BaseUnit` |  | |  | `meins` |  |  |
| `Quantity` |  | |  | `menge` |  |  |
| `NumberOfItems` |  | |  | `nbritm` |  |  |
| `EarmarkedFunds` |  | |  | `kblnr` |  |  |
| `EarmarkedFundsItem` |  | |  | `kblpos` |  |  |
| `_JournalEntry` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_FunctionalCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_BalanceTransactionCurrency` | | ✓ | | | | |
| `_AdditionalCurrency1` | | ✓ | | | | |
| `_AdditionalCurrency2` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_WBSElementInternalID` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_PostingKey` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_PartnerBusinessArea` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_PartnerCompany_2` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_PartnerSegment` | | ✓ | | | | |
| `_ClearingAccountingDocument` | | ✓ | | | | |
| `_ClearingJrnlEntryFiscalYear` | | ✓ | | | | |
| `_ClearingJournalEntry` | | ✓ | | | | |
| `_TaxCode` | | ✓ | | | | |
| `_FinancialTransactionType` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_AssetTransactionType` | | ✓ | | | | |
| `_ValuationArea` | | ✓ | | | | |
| `_ProjectNetwork` | | ✓ | | | | |
| `_PartnerProfitCenter` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_BusinessProcess` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_PartnerFunctionalArea` | | ✓ | | | | |
| `_OffsettingAccount` | | ✓ | | | | |
| `_OffsettingAccountType` | | ✓ | | | | |
| `_OffsettingAccountType_2` | | ✓ | | | | |
| `_CashLedgerCompanyCode` | | ✓ | | | | |
| `_CashLedgerAccount` | | ✓ | | | | |
| `_BudgetPeriod` | | ✓ | | | | |
| `_PartnerBudgetPeriod` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_PartnerGrant` | | ✓ | | | | |
| `_PubSecBudgetAccountCoCode` | | ✓ | | | | |
| `_PubSecBudgetAccount` | | ✓ | | | | |
| `_OffsettingAccountWithBP` | | ✓ | | | | |
| `_OffsettingChartOfAccounts` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JournalEntry` | `I_JournalEntry` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_Segment` | `I_Segment` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_FunctionalCurrency` | `I_Currency` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_BalanceTransactionCurrency` | `I_Currency` | [0..1] |
| `_AdditionalCurrency1` | `I_Currency` | [0..1] |
| `_AdditionalCurrency2` | `I_Currency` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_InternalOrder` | `I_InternalOrder` | [0..1] |
| `_WBSElementInternalID` | `I_WBSElementByInternalKey` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PostingKey` | `I_PostingKey` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_PartnerBusinessArea` | `I_BusinessArea` | [0..1] |
| `_PartnerCompany` | `I_CompanyCode` | [0..1] |
| `_PartnerCompany_2` | `I_Partnercompany` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |
| `_PartnerSegment` | `I_Segment` | [0..1] |
| `_ClearingAccountingDocument` | `I_AccountingDocument` | [1..1] |
| `_ClearingJrnlEntryFiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_ClearingJournalEntry` | `I_JournalEntry` | [0..1] |
| `_TaxCode` | `I_TaxCode` | [0..*] |
| `_FinancialTransactionType` | `I_FinancialTransactionType` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_FixedAsset` | `I_FixedAsset` | [0..1] |
| `_AssetTransactionType` | `I_AssetTransactionType` | [0..1] |
| `_ValuationArea` | `I_Purreqvaluationarea` | [0..1] |
| `_ProjectNetwork` | `I_ProjectNetwork` | [0..1] |
| `_PartnerProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_BusinessProcess` | `I_BusinessProcess` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_PartnerFunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_OffsettingAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_OffsettingAccountType` | `I_GLAccountType` | [0..1] |
| `_OffsettingAccountType_2` | `I_FinancialAccountType` | [0..1] |
| `_CashLedgerCompanyCode` | `I_CompanyCode` | [0..1] |
| `_CashLedgerAccount` | `I_GLAccountInCompanyCode` | [0..1] |
| `_BudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_PartnerBudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_Grant` | `I_Grant` | [0..1] |
| `_PartnerGrant` | `I_Grant` | [0..1] |
| `_PubSecBudgetAccountCoCode` | `I_CompanyCode` | [0..1] |
| `_PubSecBudgetAccount` | `I_PubSecBudgetAccount` | [0..1] |
| `_OffsettingAccountWithBP` | `I_OffsettingAccount` | [0..1] |
| `_OffsettingChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Additional Ledger Journal Entry Item'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'AccountingDocumentItem'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }
@Analytics.technicalName: 'IFIADDLDACDOCIT'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
                                     
define view entity I_AddlLedgerOplAcctgDocItem
  as select from P_Bseg_Add_Com as P_Bseg_Add_Com

  association [1..1] to I_JournalEntry               as _JournalEntry                on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                                     and $projection.FiscalYear         = _JournalEntry.FiscalYear
                                                                                     and $projection.AccountingDocument = _JournalEntry.AccountingDocument
  association [1..1] to I_CompanyCode                as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FiscalYearForCompanyCode   as _FiscalYear                  on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                                     and $projection.CompanyCode = _FiscalYear.CompanyCode                                                                               
  association [0..1] to I_ControllingArea            as _ControllingArea             on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts  on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                     and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
  association [0..*] to I_ProfitCenter               as _ProfitCenter                on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                     and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..1] to I_Segment                    as _Segment                     on  $projection.Segment = _Segment.Segment
  association [0..*] to I_CostCenter                 as _CostCenter                  on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                                     and $projection.CostCenter      = _CostCenter.CostCenter

  association [0..1] to I_ChartOfAccounts            as _ChartOfAccounts             on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [1..1] to I_Currency                   as _CompanyCodeCurrency         on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_Currency                   as _FunctionalCurrency          on  $projection.FunctionalCurrency = _FunctionalCurrency.Currency  
  association [0..1] to I_Currency                   as _TransactionCurrency         on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_Currency                   as _BalanceTransactionCurrency  on  $projection.BalanceTransactionCurrency = _BalanceTransactionCurrency.Currency
  association [0..1] to I_Currency                   as _AdditionalCurrency1         on  $projection.AdditionalCurrency1 = _AdditionalCurrency1.Currency
  association [0..1] to I_Currency                   as _AdditionalCurrency2         on  $projection.AdditionalCurrency2 = _AdditionalCurrency2.Currency
  association [0..1] to I_FinancialAccountType       as _FinancialAccountType        on  $projection.FinancialAccountType = _FinancialAccountType.FinancialAccountType
  association [0..1] to I_BusinessArea               as _BusinessArea                on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_Material                   as _Material                    on  $projection.Material = _Material.Material
  association [0..1] to I_Product                    as _Product                     on  $projection.Product = _Product.Product
  association [0..1] to I_Plant                      as _Plant                       on  $projection.Plant = _Plant.Plant
  association [0..1] to I_InternalOrder              as _InternalOrder               on  $projection.OrderID = _InternalOrder.InternalOrder
  association [0..1] to I_WBSElementByInternalKey    as _WBSElementInternalID        on  $projection.WBSElementInternalID = _WBSElementInternalID.WBSElementInternalID

  association [0..1] to I_UnitOfMeasure              as _BaseUnit                    on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure

  association [0..1] to I_PostingKey                 as _PostingKey                  on  $projection.PostingKey = _PostingKey.PostingKey
  association [0..1] to I_DebitCreditCode            as _DebitCreditCode             on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
  association [0..1] to I_BusinessArea               as _PartnerBusinessArea         on  $projection.PartnerBusinessArea = _PartnerBusinessArea.BusinessArea
  association [0..1] to I_CompanyCode                as _PartnerCompany              on  $projection.PartnerCompany = _PartnerCompany.CompanyCode
  association [0..1] to I_Partnercompany             as _PartnerCompany_2            on  $projection.PartnerCompany = _PartnerCompany_2.PartnerCompany  
  association [0..1] to I_InventoryValuationType     as _InventoryValuationType      on  $projection.InventoryValuationType = _InventoryValuationType.InventoryValuationType
  association [0..1] to I_Segment                    as _PartnerSegment              on  $projection.PartnerSegment = _PartnerSegment.Segment

  association [1..1] to I_AccountingDocument         as _ClearingAccountingDocument  on $projection.CompanyCode                    = _ClearingAccountingDocument.CompanyCode and 
                                                                                        $projection.FiscalYear                     = _ClearingAccountingDocument.FiscalYear and 
                                                                                        $projection.ClearingAccountingDocument     = _ClearingAccountingDocument.AccountingDocument 
  association [0..1] to I_FiscalYearForCompanyCode   as _ClearingJrnlEntryFiscalYear on $projection.ClearingJournalEntryFiscalYear = _ClearingJrnlEntryFiscalYear.FiscalYear and
                                                                                        $projection.CompanyCode                    = _ClearingJrnlEntryFiscalYear.CompanyCode 
  association [0..1] to I_JournalEntry               as _ClearingJournalEntry        on $projection.CompanyCode                    = _ClearingJournalEntry.CompanyCode and
                                                                                        $projection.ClearingJournalEntryFiscalYear = _ClearingJournalEntry.FiscalYear and
                                                                                        $projection.ClearingJournalEntry           = _ClearingJournalEntry.AccountingDocument
                                                                                         
  association [0..*] to I_TaxCode                    as _TaxCode                     on $projection.TaxCode                        = _TaxCode.TaxCode
  association [0..1] to I_FinancialTransactionType   as _FinancialTransactionType    on $projection.FinancialTransactionType       = _FinancialTransactionType.FinancialTransactionType
  association [0..1] to I_MasterFixedAsset           as _MasterFixedAsset            on $projection.CompanyCode                    = _MasterFixedAsset.CompanyCode and
                                                                                        $projection.MasterFixedAsset               = _MasterFixedAsset.MasterFixedAsset                                                                                        
  association [0..1] to I_FixedAsset                 as _FixedAsset                  on $projection.CompanyCode                    = _FixedAsset.CompanyCode and
                                                                                        $projection.MasterFixedAsset               = _FixedAsset.MasterFixedAsset and
                                                                                        $projection.FixedAsset                     = _FixedAsset.FixedAsset
  association [0..1] to I_AssetTransactionType       as _AssetTransactionType        on $projection.AssetTransactionType           = _AssetTransactionType.AssetTransactionType                                                                                                                                                                                                                                                            

  association [0..1] to I_Purreqvaluationarea        as _ValuationArea               on $projection.ValuationArea                  = _ValuationArea.ValuationArea
  association [0..1] to I_ProjectNetwork             as _ProjectNetwork              on $projection.ProjectNetwork                 = _ProjectNetwork.ProjectNetwork
                                                                                                                                                                                                                                                         
  association [0..*] to I_ProfitCenter               as _PartnerProfitCenter         on $projection.ControllingArea                = _PartnerProfitCenter.ControllingArea and  
                                                                                        $projection.PartnerProfitCenter            = _PartnerProfitCenter.ProfitCenter                                                                               
  association [0..*] to I_CostCenterActivityType     as _CostCtrActivityType         on $projection.ControllingArea                = _CostCtrActivityType.ControllingArea and     
                                                                                        $projection.CostCtrActivityType            = _CostCtrActivityType.CostCtrActivityType
  association [0..1] to I_BusinessProcess            as _BusinessProcess             on $projection.ControllingArea                = _BusinessProcess.ControllingArea and                                                                                        
                                                                                        $projection.BusinessProcess                = _BusinessProcess.BusinessProcess
  association [0..1] to I_FunctionalArea             as _FunctionalArea              on $projection.FunctionalArea                 = _FunctionalArea.FunctionalArea
                                                                                                                                                                                                                                                             
  association [0..1] to I_FunctionalArea             as _PartnerFunctionalArea       on $projection.PartnerFunctionalArea          = _PartnerFunctionalArea.FunctionalArea
                                                                                                                                                                                                                                                            
  association [0..1] to I_GLAccountInChartOfAccounts as _OffsettingAccount           on $projection.ChartOfAccounts                = _OffsettingAccount.ChartOfAccounts and 
                                                                                        $projection.OffsettingAccount              = _OffsettingAccount.GLAccount 
  association [0..1] to I_GLAccountType              as _OffsettingAccountType       on $projection.OffsettingAccountType          = _OffsettingAccountType.GLAccountType


  association [0..1] to I_FinancialAccountType       as _OffsettingAccountType_2     on $projection.OffsettingAccountType          = _OffsettingAccountType_2.FinancialAccountType


  association [0..1] to I_CompanyCode                as _CashLedgerCompanyCode       on  $projection.CashLedgerCompanyCode         = _CashLedgerCompanyCode.CompanyCode
  association [0..1] to I_GLAccountInCompanyCode     as _CashLedgerAccount           on  $projection.CashLedgerCompanyCode         = _CashLedgerAccount.CompanyCode 
                                                                                     and $projection.CashLedgerAccount             = _CashLedgerAccount.GLAccount                                                                                  
                                                                                  
  association [0..1] to I_BudgetPeriod               as _BudgetPeriod                on $projection.BudgetPeriod                   = _BudgetPeriod.BudgetPeriod                                                                                                                                                                                                                                                            
  association [0..1] to I_BudgetPeriod               as _PartnerBudgetPeriod         on  $projection.PartnerBudgetPeriod           = _PartnerBudgetPeriod.BudgetPeriod
  association [0..1] to I_Grant                      as _Grant                       on  $projection.GrantID                       = _Grant.GrantID   
  association [0..1] to I_Grant                      as _PartnerGrant                on  $projection.PartnerGrant                  = _PartnerGrant.GrantID                                                                                    

  association [0..1] to I_CompanyCode                as _PubSecBudgetAccountCoCode   on  $projection.PubSecBudgetAccountCoCode     = _PubSecBudgetAccountCoCode.CompanyCode       
  association [0..1] to I_PubSecBudgetAccount        as _PubSecBudgetAccount         on  $projection.PubSecBudgetAccountCoCode     = _PubSecBudgetAccount.PubSecBudgetAccountCoCode
                                                                                     and $projection.PubSecBudgetAccount           = _PubSecBudgetAccount.PubSecBudgetAccount    

  association [0..1] to I_OffsettingAccount          as _OffsettingAccountWithBP     on  $projection.OffsettingChartOfAccounts     = _OffsettingAccountWithBP.ChartOfAccounts
                                                                                     and $projection.OffsettingAccountType         = _OffsettingAccountWithBP.OffsettingAccountType
                                                                                     and $projection.OffsettingAccount             = _OffsettingAccountWithBP.OffsettingAccount
  association [0..1] to I_ChartOfAccounts            as _OffsettingChartOfAccounts   on  $projection.OffsettingChartOfAccounts     = _OffsettingChartOfAccounts.ChartOfAccounts
  association [0..1] to I_WBSElementBasicData        as _WBSElementBasicData         on  $projection.WBSElementInternalID          = _WBSElementBasicData.WBSElementInternalID  

//  association [0..1] to I_REObjectByIntFinNumber     as _REObjectByIntFinNumber      on  $projection.REInternalFinNumber           = _REObjectByIntFinNumber.REInternalFinNumber

{

      @ObjectModel.foreignKey.association: '_CompanyCode'
  key P_Bseg_Add_Com.bukrs as  CompanyCode,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key P_Bseg_Add_Com.belnr            as  AccountingDocument,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key P_Bseg_Add_Com.gjahr            as  FiscalYear,
  key P_Bseg_Add_Com.buzei            as  AccountingDocumentItem,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      P_Bseg_Add_Com.ktopl            as  ChartOfAccounts,
      P_Bseg_Add_Com.augdt            as  ClearingDate,
      P_Bseg_Add_Com.augcp            as  ClearingCreationDate,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ClearingJrnlEntryFiscalYear'
      P_Bseg_Add_Com.auggj               as  ClearingJournalEntryFiscalYear,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ClearingJournalEntryFiscalYear'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
      cast( P_Bseg_Add_Com.auggj  as fis_auggj_no_conv_depre preserving type ) as ClearingDocFiscalYear,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ClearingJournalEntry'
      P_Bseg_Add_Com.augbl            as  ClearingJournalEntry,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ClearingJournalEntry'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ClearingJournalEntry'
      @ObjectModel.foreignKey.association: '_ClearingAccountingDocument'
      cast( P_Bseg_Add_Com.augbl as fis_augbl_depre preserving type ) as ClearingAccountingDocument,

      @ObjectModel.foreignKey.association: '_PostingKey'
      P_Bseg_Add_Com.bschl            as  PostingKey,
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      P_Bseg_Add_Com.koart            as  FinancialAccountType,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      P_Bseg_Add_Com.shkzg            as  DebitCreditCode,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      P_Bseg_Add_Com.gsber            as  BusinessArea,
      @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
      P_Bseg_Add_Com.pargb            as  PartnerBusinessArea,
      P_Bseg_Add_Com.mwskz            as  TaxCode,
      P_Bseg_Add_Com.qsskz            as  WithholdingTaxCode,
      P_Bseg_Add_Com.ktosl            as  TransactionTypeDetermination,
      P_Bseg_Add_Com.valut            as  ValueDate,
      P_Bseg_Add_Com.zuonr            as  AssignmentReference,
      P_Bseg_Add_Com.sgtxt            as  DocumentItemText,
      @ObjectModel.foreignKey.association: '_PartnerCompany_2'
      P_Bseg_Add_Com.vbund            as  PartnerCompany,
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      P_Bseg_Add_Com.bewar            as  FinancialTransactionType,
      P_Bseg_Add_Com.altkt            as  CorporateGroupAccount,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      P_Bseg_Add_Com.kokrs            as  ControllingArea,
      @ObjectModel.foreignKey.association: '_CostCenter'
      P_Bseg_Add_Com.kostl            as  CostCenter,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    ''
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: ''
      P_Bseg_Add_Com.projn            as  Project,
      @ObjectModel.foreignKey.association: '_InternalOrder'
      P_Bseg_Add_Com.aufnr            as  OrderID,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      P_Bseg_Add_Com.anln1            as  MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAsset'
      P_Bseg_Add_Com.anln2            as  FixedAsset,
      @ObjectModel.foreignKey.association: '_AssetTransactionType'
      P_Bseg_Add_Com.anbwa            as  AssetTransactionType,
//      @Semantics.booleanIndicator 
      P_Bseg_Add_Com.xopvw            as  IsOpenItemManaged,
//      @Semantics.booleanIndicator 
      P_Bseg_Add_Com.xauto            as  IsAutomaticallyCreated,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      P_Bseg_Add_Com.hkont            as  GLAccount,
//      @Semantics.booleanIndicator 
      P_Bseg_Add_Com.xbilk            as  IsBalanceSheetAccount,
      P_Bseg_Add_Com.gvtyp            as  ProfitLossAccountType,
      P_Bseg_Add_Com.zfbdt            as  DueCalculationBaseDate,
      P_Bseg_Add_Com.rebzg            as  InvoiceReference,
      P_Bseg_Add_Com.rebzj            as  InvoiceReferenceFiscalYear,
      P_Bseg_Add_Com.rebzz            as  InvoiceItemReference,
      P_Bseg_Add_Com.rebzt            as  FollowOnDocumentType,
      P_Bseg_Add_Com.wverw            as  BillOfExchangeUsage,

      @ObjectModel.foreignKey.association: '_Material'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'Product'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'Product'
      P_Bseg_Add_Com.matnr            as  Material,
      @ObjectModel.foreignKey.association: '_Product'
      P_Bseg_Add_Com.matnr            as  Product,

      @ObjectModel.foreignKey.association: '_Plant'
      P_Bseg_Add_Com.werks            as  Plant,
      @ObjectModel.foreignKey.association: '_ValuationArea'
      P_Bseg_Add_Com.bwkey            as  ValuationArea,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      P_Bseg_Add_Com.bwtar            as  InventoryValuationType,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      P_Bseg_Add_Com.prctr            as  ProfitCenter,
      P_Bseg_Add_Com.vname            as  JointVenture,
      P_Bseg_Add_Com.recid            as  JointVentureCostRecoveryCode,
      P_Bseg_Add_Com.egrup            as  JointVentureEquityGroup,
      P_Bseg_Add_Com.vertt            as  TreasuryContractType,
      P_Bseg_Add_Com.vertn            as  AssetContract,
      P_Bseg_Add_Com.vbewa            as  CashFlowType,

//      @ObjectModel.foreignKey.association: '_REObjectByIntFinNumber'
      cast( P_Bseg_Add_Com.imkey as recaimkeyfi preserving type ) as REInternalFinNumber,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'REInternalFinNumber'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'REInternalFinNumber'
      P_Bseg_Add_Com.imkey            as  RealEstateObject,

      P_Bseg_Add_Com.dabrz            as  SettlementReferenceDate,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'CommitmentItemShortID'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'CommitmentItemShortID'
      P_Bseg_Add_Com.fipos                                              as  CommitmentItem,
      cast( P_Bseg_Add_Com.fipos as fis_fipos_shortid preserving type ) as  CommitmentItemShortID,

      P_Bseg_Add_Com.kstrg            as  CostObject,
      @ObjectModel.foreignKey.association: '_ProjectNetwork'      
      P_Bseg_Add_Com.nplnr            as  ProjectNetwork,
      P_Bseg_Add_Com.aufpl            as  OrderInternalBillOfOperations,
      P_Bseg_Add_Com.aplzl            as  OrderIntBillOfOperationsItem,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      P_Bseg_Add_Com.projk            as  WBSElementInternalID,
      
@API.element.releaseState: #DECOMMISSIONED
@API.element.successor:    'ProfitabilitySegment_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ProfitabilitySegment_2'
cast( case when P_Bseg_Add_Com.paobjnr > '9999999999' then '9999999999' else lpad( P_Bseg_Add_Com.paobjnr, 10, '0' ) end as rkeobjnr_numc )  as ProfitabilitySegment,
cast( P_Bseg_Add_Com.paobjnr as rkeobjnr_char ) as ProfitabilitySegment_2,       
      
//      @Semantics.booleanIndicator 
      P_Bseg_Add_Com.xragl            as  ClearingIsReversed,
      P_Bseg_Add_Com.uzawe            as  PaymentMethodSupplement,
      P_Bseg_Add_Com.lokkt            as  AlternativeGLAccount,
      P_Bseg_Add_Com.fistl            as  FundsCenter,
      P_Bseg_Add_Com.geber            as  Fund,
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      P_Bseg_Add_Com.pprct            as  PartnerProfitCenter,
      P_Bseg_Add_Com.xref1            as  Reference1IDByBusinessPartner,
      P_Bseg_Add_Com.xref2            as  Reference2IDByBusinessPartner,
      @Analytics.internalName: #LOCAL      
      P_Bseg_Add_Com.kblnr            as  EarmarkedFundsDocument,
      @Analytics.internalName: #LOCAL      
      P_Bseg_Add_Com.kblpos           as  EarmarkedFundsDocumentItem,
      @Analytics.internalName: #LOCAL      
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      P_Bseg_Add_Com.fkber            as  FunctionalArea,
      P_Bseg_Add_Com.rfzei            as  PaymentCardItem,
      P_Bseg_Add_Com.ccbtc            as  PaymentCardPaymentSettlement,
      P_Bseg_Add_Com.xref3            as  Reference3IDByBusinessPartner,
      P_Bseg_Add_Com.agzei            as  ClearingItem,
      P_Bseg_Add_Com.bupla            as  BusinessPlace,
      P_Bseg_Add_Com.secco            as  TaxSection,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      P_Bseg_Add_Com.lstar            as  CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_BusinessProcess'
      P_Bseg_Add_Com.prznr            as  BusinessProcess,
      @Analytics.internalName: #LOCAL      
      @ObjectModel.foreignKey.association: '_Grant'
      P_Bseg_Add_Com.grant_nbr        as  GrantID,
      P_Bseg_Add_Com.measure          as  FundedProgram,
      @ObjectModel.foreignKey.association: '_Segment'
      P_Bseg_Add_Com.segment          as  Segment,
      @ObjectModel.foreignKey.association: '_PartnerSegment'
      P_Bseg_Add_Com.psegment         as  PartnerSegment,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      P_Bseg_Add_Com.pfkber           as  PartnerFunctionalArea,
      P_Bseg_Add_Com.kstar            as  CostElement,
      P_Bseg_Add_Com.netdt            as  NetDueDate,
      @ObjectModel.foreignKey.association: '_OffsettingAccountWithBP'
      P_Bseg_Add_Com.gkont            as  OffsettingAccount,
      @ObjectModel.foreignKey.association: '_OffsettingAccountType_2'
      P_Bseg_Add_Com.gkart            as  OffsettingAccountType,
      @ObjectModel.foreignKey.association: '_OffsettingChartOfAccounts'
      cast( ( case P_Bseg_Add_Com.gkart
                   when 'D' then ' '  
                   when 'K' then ' '  
                   else P_Bseg_Add_Com.ktopl 
              end )
      as ktopl) as OffsettingChartOfAccounts,
      P_Bseg_Add_Com.pgeber           as  PartnerFund,
      @Analytics.internalName: #LOCAL      
      @ObjectModel.foreignKey.association: '_PartnerGrant'
      P_Bseg_Add_Com.pgrant_nbr       as  PartnerGrant,
      @ObjectModel.foreignKey.association: '_BudgetPeriod'
      P_Bseg_Add_Com.budget_pd        as  BudgetPeriod,
      @Analytics.internalName: #LOCAL      
      @ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
      P_Bseg_Add_Com.pbudget_pd       as  PartnerBudgetPeriod,
      
      @Analytics.internalName: #LOCAL      
      P_Bseg_Add_Com.bstat            as  AccountingDocumentCategory,

      @Analytics.internalName: #LOCAL      
      @ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
      P_Bseg_Add_Com.re_bukrs            as CashLedgerCompanyCode,
      @Analytics.internalName: #LOCAL      
      @ObjectModel.foreignKey.association: '_CashLedgerAccount'
      P_Bseg_Add_Com.re_account          as CashLedgerAccount,

      @Analytics.internalName: #LOCAL      
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
      P_Bseg_Add_Com.bdgt_account_cocode as PubSecBudgetAccountCoCode,
      @Analytics.internalName: #LOCAL      
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
      P_Bseg_Add_Com.bdgt_account        as PubSecBudgetAccount,

      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      P_Bseg_Add_Com.h_hwaer          as  CompanyCodeCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      P_Bseg_Add_Com.dmbtr_shl        as  AmountInCompanyCodeCurrency,
      
// Functional Currency
@ObjectModel.foreignKey.association: '_FunctionalCurrency'
P_Bseg_Add_Com.rfccur as FunctionalCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
P_Bseg_Add_Com.fcsl_shl as AmountInFunctionalCurrency,      

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      P_Bseg_Add_Com.mwsts_shl        as  TaxAmountInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      P_Bseg_Add_Com.bdiff_shl        as  ValuationDiffAmtInCoCodeCrcy,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      P_Bseg_Add_Com.h_waers          as  TransactionCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      P_Bseg_Add_Com.wrbtr_shl        as  AmountInTransactionCurrency,


      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      P_Bseg_Add_Com.wmwst_shl        as  TaxAmount,


      @ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'
      P_Bseg_Add_Com.pswsl            as  BalanceTransactionCurrency,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      P_Bseg_Add_Com.pswbt_shl        as  AmountInBalanceTransacCrcy,


      @ObjectModel.foreignKey.association: '_AdditionalCurrency1'
      P_Bseg_Add_Com.h_hwae2          as  AdditionalCurrency1,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} }
      P_Bseg_Add_Com.bdif2_shl        as  ValuationDiffAmtInAddlCrcy1,


      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} }
      P_Bseg_Add_Com.dmbe2_shl        as  AmountInAdditionalCurrency1,

 
      @ObjectModel.foreignKey.association: '_AdditionalCurrency2'
      P_Bseg_Add_Com.h_hwae3          as  AdditionalCurrency2,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} }
      P_Bseg_Add_Com.dmbe3_shl        as  AmountInAdditionalCurrency2,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} }
      P_Bseg_Add_Com.bdif3_shl        as  ValuationDiffAmtInAddlCrcy2,


      @ObjectModel.foreignKey.association: '_BaseUnit'
      P_Bseg_Add_Com.meins            as  BaseUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      P_Bseg_Add_Com.menge            as  Quantity,

      @Aggregation.default: #SUM
      P_Bseg_Add_Com.nbritm           as  NumberOfItems,

      
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'EarmarkedFundsDocument'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'EarmarkedFundsDocument'
      P_Bseg_Add_Com.kblnr            as  EarmarkedFunds,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'EarmarkedFundsDocumentItem'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'EarmarkedFundsDocumentItem'
      P_Bseg_Add_Com.kblpos           as  EarmarkedFundsItem,

      _JournalEntry,
      _CompanyCode,
      _FiscalYear,
      _ControllingArea,
      _GLAccountInChartOfAccounts,
      _ProfitCenter,
      _Segment,
      _CostCenter,
      _ChartOfAccounts,
      _FinancialAccountType,
      _BusinessArea,
      _CompanyCodeCurrency,
      _FunctionalCurrency,
      _TransactionCurrency,
      _BalanceTransactionCurrency,
      _AdditionalCurrency1,
      _AdditionalCurrency2,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_Product'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_Product'
      _Material,
      _Product,

      _Plant,
      _BaseUnit,
      _InternalOrder,

      _WBSElementBasicData,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_WBSElementBasicData'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_WBSElementBasicData'
      _WBSElementInternalID,

      _PostingKey,
      _DebitCreditCode,
      _PartnerBusinessArea,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_PartnerCompany_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerCompany_2'      
      _PartnerCompany,
      _PartnerCompany_2,
      _InventoryValuationType,
      _PartnerSegment,

      _ClearingJrnlEntryFiscalYear,
      _ClearingJournalEntry,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_ClearingJournalEntry'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ClearingJournalEntry'
      _ClearingAccountingDocument,

      _TaxCode,
      _FinancialTransactionType,
      _MasterFixedAsset,
      _FixedAsset,
      _AssetTransactionType,
      _ValuationArea,
      _ProjectNetwork,
      _PartnerProfitCenter,
      _CostCtrActivityType,
      _BusinessProcess,
      _FunctionalArea,
      _PartnerFunctionalArea,
      _OffsettingAccount,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_OffsettingAccountType_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_OffsettingAccountType_2'

      _OffsettingAccountType,
      _OffsettingAccountType_2,
            
      _CashLedgerCompanyCode,
      _CashLedgerAccount,
      _BudgetPeriod,
      _PartnerBudgetPeriod,
      _Grant,
      _PartnerGrant,
      _PubSecBudgetAccountCoCode,
      _PubSecBudgetAccount,
      
      _OffsettingAccountWithBP,
      _OffsettingChartOfAccounts
      
//      _REObjectByIntFinNumber
      
}
```
