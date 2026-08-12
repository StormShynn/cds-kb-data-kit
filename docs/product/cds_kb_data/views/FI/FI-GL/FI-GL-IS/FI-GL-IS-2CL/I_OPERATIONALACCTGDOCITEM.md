---
name: I_OPERATIONALACCTGDOCITEM
description: "Operationalacctgdocitem"
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
# I_OPERATIONALACCTGDOCITEM

**Operationalacctgdocitem**

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
| `AccountingDocumentItemType` |  | |  | `buzid` |  |  |
| `ClearingDate` |  | |  | `augdt` |  |  |
| `ClearingCreationDate` |  | |  | `augcp` |  |  |
| `ClearingJournalEntryFiscalYear` |  | |  | `auggj` |  |  |
| `ClearingDocFiscalYear` |  | |  | `cast( P_BSEG_COM.auggj as fis_auggj_no_conv_depre preserving type )` |  |  |
| `ClearingJournalEntry` |  | |  | `augbl` |  |  |
| `ClearingAccountingDocument` |  | |  | `cast( P_BSEG_COM.augbl as fis_augbl_depre preserving type )` |  |  |
| `PostingKey` |  | |  | `bschl` |  |  |
| `FinancialAccountType` |  | |  | `koart` |  |  |
| `SpecialGLCode` |  | |  | `umskz` |  |  |
| `SpecialGLTransactionType` |  | |  | `umsks` |  |  |
| `TargetSpecialGLCode` |  | |  | `zumsk` |  |  |
| `DebitCreditCode` |  | |  | `shkzg` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `PartnerBusinessArea` |  | |  | `pargb` |  |  |
| `TaxCode` |  | |  | `mwskz` |  |  |
| `TaxCountry` |  | |  | `tax_country` |  |  |
| `TaxRateValidityStartDate` |  | |  | `txdat_from` |  |  |
| `WithholdingTaxCode` |  | |  | `qsskz` |  |  |
| `TaxType` |  | |  | `mwart` |  |  |
| `TaxItemGroup` |  | |  | `txgrp` |  |  |
| `TransactionTypeDetermination` |  | |  | `ktosl` |  |  |
| `ValueDate` |  | |  | `valut` |  |  |
| `AssignmentReference` |  | |  | `zuonr` |  |  |
| `DocumentItemText` |  | |  | `sgtxt` |  |  |
| `InterestCalculationBlockReason` |  | |  | `cast( P_BSEG_COM.zinkz as fis_dzinkz preserving type )` |  |  |
| `PartnerCompany` |  | |  | `vbund` |  |  |
| `FinancialTransactionType` |  | |  | `bewar` |  |  |
| `CorporateGroupAccount` |  | |  | `altkt` |  |  |
| `PlanningLevel` |  | |  | `fdlev` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `CostCenter` |  | |  | `kostl` |  |  |
| `Project` |  | |  | `projn` |  |  |
| `OrderID` |  | |  | `aufnr` |  |  |
| `BillingDocument` |  | |  | `vbeln` |  |  |
| `SalesDocument` |  | |  | `vbel2` |  |  |
| `SalesDocumentItem` |  | |  | `posn2` |  |  |
| `ScheduleLine` |  | |  | `eten2` |  |  |
| `ServiceDocumentType` |  | |  | `service_doc_type` |  |  |
| `ServiceDocument` |  | |  | `service_doc_id` |  |  |
| `ServiceDocumentItem` |  | |  | `service_doc_item_id` |  |  |
| `MasterFixedAsset` |  | |  | `anln1` |  |  |
| `FixedAsset` |  | |  | `anln2` |  |  |
| `AssetTransactionType` |  | |  | `anbwa` |  |  |
| `AssetValueDate` |  | |  | `bzdat` |  |  |
| `PersonnelNumber` |  | |  | `pernr` |  |  |
| `IsSalesRelated` |  | |  | `xumsw` |  |  |
| `LineItemDisplayIsEnabled` |  | |  | `xkres` |  |  |
| `IsOpenItemManaged` |  | |  | `xopvw` |  |  |
| `AddressAndBankIsSetManually` |  | |  | `cast( P_BSEG_COM.xcpdd as farp_xcpdd )` |  |  |
| `DownPaymentIsNetProcedure` |  | |  | `xanet` |  |  |
| `IsNotCashDiscountLiable` |  | |  | `xskrl` |  |  |
| `SuplrInvcIsCapitalGoodsRelated` |  | |  | `xinve` |  |  |
| `IsAutomaticallyCreated` |  | |  | `xauto` |  |  |
| `IsUsedInPaymentTransaction` |  | |  | `xzahl` |  |  |
| `OperationalGLAccount` |  | |  | `saknr` |  |  |
| `GLAccount` |  | |  | `hkont` |  |  |
| `Customer` |  | |  | `kunnr` |  |  |
| `Supplier` |  | |  | `lifnr` |  |  |
| `BranchAccount` |  | |  | `filkd` |  |  |
| `IsBalanceSheetAccount` |  | |  | `xbilk` |  |  |
| `ProfitLossAccountType` |  | |  | `gvtyp` |  |  |
| `SpecialGLAccountAssignment` |  | |  | `hzuon` |  |  |
| `DueCalculationBaseDate` |  | |  | `zfbdt` |  |  |
| `PaymentTerms` |  | |  | `zterm` |  |  |
| `CashDiscount1Days` |  | |  | `zbd1t` |  |  |
| `CashDiscount2Days` |  | |  | `zbd2t` |  |  |
| `NetPaymentDays` |  | |  | `zbd3t` |  |  |
| `CashDiscount1Percent` |  | |  | `zbd1p` |  |  |
| `CashDiscount2Percent` |  | |  | `zbd2p` |  |  |
| `PaymentMethod` |  | |  | `zlsch` |  |  |
| `PaymentBlockingReason` |  | |  | `zlspr` |  |  |
| `FixedCashDiscount` |  | |  | `zbfix` |  |  |
| `HouseBank` |  | |  | `hbkid` |  |  |
| `BPBankAccountInternalID` |  | |  | `bvtyp` |  |  |
| `TaxDistributionCode1` |  | |  | `mwsk1` |  |  |
| `TaxDistributionCode2` |  | |  | `mwsk2` |  |  |
| `TaxDistributionCode3` |  | |  | `mwsk3` |  |  |
| `InvoiceReference` |  | |  | `rebzg` |  |  |
| `InvoiceReferenceFiscalYear` |  | |  | `rebzj` |  |  |
| `InvoiceItemReference` |  | |  | `rebzz` |  |  |
| `FollowOnDocumentType` |  | |  | `rebzt` |  |  |
| `AcctgDocItmCustomsTariffNumber` |  | |  | `zollt` |  |  |
| `AcctgDocItmCstmsClearanceDate` |  | |  | `zolld` |  |  |
| `StateCentralBankPaymentReason` |  | |  | `lzbkz` |  |  |
| `SupplyingCountry` |  | |  | `landl` |  |  |
| `RecrrgSuplrInvcIsSrvcInvoice` |  | |  | `diekz` |  |  |
| `InvoiceList` |  | |  | `samnr` |  |  |
| `BillOfExchangeUsageDocument` |  | |  | `disbn` |  |  |
| `BillOfExchangeUsage` |  | |  | `wverw` |  |  |
| `BillOfExchangePaymentRequest` |  | |  | `anfbn` |  |  |
| `BOEPaymentRequestFiscalYear` |  | |  | `anfbj` |  |  |
| `BOEPaymentRequestCompanyCode` |  | |  | `anfbu` |  |  |
| `DunningKey` |  | |  | `mschl` |  |  |
| `DunningBlockingReason` |  | |  | `mansp` |  |  |
| `LastDunningDate` |  | |  | `madat` |  |  |
| `DunningLevel` |  | |  | `manst` |  |  |
| `DunningArea` |  | |  | `maber` |  |  |
| `PaytSlipWthRefSubscriber` |  | |  | `esrnr` |  |  |
| `PaytSlipWthRefReference` |  | |  | `esrre` |  |  |
| `PaytSlipWthRefCheckDigit` |  | |  | `esrpz` |  |  |
| `WithholdingTaxCertificate` |  | |  | `qsznr` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `Product` |  | |  | `cast( P_BSEG_COM.matnr as productnumber )` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `PurchasingDocument` |  | |  | `ebeln` |  |  |
| `PurchasingDocumentItem` |  | |  | `ebelp` |  |  |
| `AccountAssignmentNumber` |  | |  | `zekkn` |  |  |
| `IsCompletelyDelivered` |  | |  | `elikz` |  |  |
| `MaterialPriceControl` |  | |  | `vprsv` |  |  |
| `ValuationArea` |  | |  | `bwkey` |  |  |
| `InventoryValuationType` |  | |  | `bwtar` |  |  |
| `VATRegistration` |  | |  | `stceg` |  |  |
| `DelivOfGoodsDestCountry` |  | |  | `egbld` |  |  |
| `DelivOfGoodsOriginCountry` |  | |  | `eglld` |  |  |
| `PaymentDifferenceReason` |  | |  | `rstgr` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `JointVenture` |  | |  | `vname` |  |  |
| `JointVentureCostRecoveryCode` |  | |  | `recid` |  |  |
| `JointVentureEquityGroup` |  | |  | `egrup` |  |  |
| `JointVenturePartner` |  | |  | `cast( P_BSEG_COM.vptnr as jv_part_cds preserving type )` |  |  |
| `TreasuryContractType` |  | |  | `vertt` |  |  |
| `AssetContract` |  | |  | `vertn` |  |  |
| `CashFlowType` |  | |  | `vbewa` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `REInternalFinNumber` |  | |  | `cast( P_BSEG_COM.imkey as recaimkeyfi preserving type )` |  |  |
| `RealEstateObject` |  | |  | `imkey` |  |  |
| `SettlementReferenceDate` |  | |  | `dabrz` |  |  |
| `CommitmentItem` |  | |  | `fipos` |  |  |
| `CommitmentItemShortID` |  | |  | `cast( P_BSEG_COM.fipos as fis_fipos_shortid preserving type )` |  |  |
| `CostObject` |  | |  | `kstrg` |  |  |
| `ProjectNetwork` |  | |  | `nplnr` |  |  |
| `OrderInternalBillOfOperations` |  | |  | `aufpl` |  |  |
| `OrderIntBillOfOperationsItem` |  | |  | `aplzl` |  |  |
| `WBSElementInternalID` |  | |  | `cast( P_BSEG_COM.projk as fis_wbsint_no_conv preserving type )` |  |  |
| `ProfitabilitySegment` |  | |  | `cast( case when P_BSEG_COM.paobjnr > '9999999999' then '9999999999' else lpad( P_BSEG_COM.paobjnr, 10, '0' ) end as rkeobjnr_numc )` |  |  |
| `ProfitabilitySegment_2` |  | |  | `cast( P_BSEG_COM.paobjnr as rkeobjnr_char )` |  |  |
| `JointVentureBillingType` |  | |  | `cast( P_BSEG_COM.btype as jv_bilind_cds preserving type )` |  |  |
| `JointVentureEquityType` |  | |  | `etype` |  |  |
| `IsEUTriangularDeal` |  | |  | `xegdr` |  |  |
| `CostOriginGroup` |  | |  | `hrkft` |  |  |
| `CompanyCodeCurrencyDetnMethod` |  | |  | `hwmet` |  |  |
| `ClearingIsReversed` |  | |  | `xragl` |  |  |
| `PaymentMethodSupplement` |  | |  | `uzawe` |  |  |
| `AlternativeGLAccount` |  | |  | `lokkt` |  |  |
| `FundsCenter` |  | |  | `fistl` |  |  |
| `Fund` |  | |  | `geber` |  |  |
| `TaxCompanyCode` |  | |  | `stbuk` |  |  |
| `PartnerProfitCenter` |  | |  | `pprct` |  |  |
| `Reference1IDByBusinessPartner` |  | |  | `xref1` |  |  |
| `Reference2IDByBusinessPartner` |  | |  | `xref2` |  |  |
| `EarmarkedFundsDocument` |  | |  | `kblnr` |  |  |
| `EarmarkedFundsDocumentItem` |  | |  | `kblpos` |  |  |
| `IsNegativePosting` |  | |  | `xnegp` |  |  |
| `PaymentCardItem` |  | |  | `rfzei` |  |  |
| `PaymentCardPaymentSettlement` |  | |  | `ccbtc` |  |  |
| `CreditControlArea` |  | |  | `kkber` |  |  |
| `AlternativePayeePayer` |  | |  | `empfb` |  |  |
| `Reference3IDByBusinessPartner` |  | |  | `xref3` |  |  |
| `DataExchangeInstruction1` |  | |  | `dtws1` |  |  |
| `DataExchangeInstruction2` |  | |  | `dtws2` |  |  |
| `DataExchangeInstruction3` |  | |  | `dtws3` |  |  |
| `DataExchangeInstruction4` |  | |  | `dtws4` |  |  |
| `BPActivityCodeGrossIncomeTax` |  | |  | `gricd` |  |  |
| `Region` |  | |  | `grirg` |  |  |
| `BPEmploymentTaxDistrType` |  | |  | `gityp` |  |  |
| `HasPaymentOrder` |  | |  | `xpypr` |  |  |
| `PaymentReference` |  | |  | `kidno` |  |  |
| `TaxDeterminationDate` |  | |  | `txdat` |  |  |
| `ClearingItem` |  | |  | `agzei` |  |  |
| `BusinessPlace` |  | |  | `bupla` |  |  |
| `TaxSection` |  | |  | `secco` |  |  |
| `CostCtrActivityType` |  | |  | `lstar` |  |  |
| `AccountsReceivableIsPledged` |  | |  | `cession_kz` |  |  |
| `AcctsReceivablePledgingCode` |  | |  | `cast( P_BSEG_COM.cession_kz as fis_cession_kz_code preserving type )` |  |  |
| `BusinessProcess` |  | |  | `prznr` |  |  |
| `GrantID` |  | |  | `grant_nbr` |  |  |
| `FunctionalArea` |  | |  | `fkber_long` |  |  |
| `CustomerIsInExecution` |  | |  | `gmvkz` |  |  |
| `FundedProgram` |  | |  | `measure` |  |  |
| `InvcItmIsExcldFrmPromptPaytAct` |  | |  | `ppa_ex_ind` |  |  |
| `LedgerGLLineItem` |  | |  | `docln` |  |  |
| `Segment` |  | |  | `segment` |  |  |
| `PartnerSegment` |  | |  | `psegment` |  |  |
| `PartnerFunctionalArea` |  | |  | `pfkber` |  |  |
| `HouseBankAccount` |  | |  | `hktid` |  |  |
| `CostElement` |  | |  | `kstar` |  |  |
| `ClearingIsLedgerGroupSpecific` |  | |  | `xlgclr` |  |  |
| `TaxItemAcctgDocItemRef` |  | |  | `taxps` |  |  |
| `PaymentServiceProvider` |  | |  | `pays_prov` |  |  |
| `PaymentRefByPaytSrvcProvider` |  | |  | `pays_tran` |  |  |
| `SEPAMandate` |  | |  | `mndid` |  |  |
| `ReferenceDocumentType` |  | |  | `awtyp` |  |  |
| `OriginalReferenceDocument` |  | |  | `awkey` |  |  |
| `ReferenceDocumentLogicalSystem` |  | |  | `awsys` |  |  |
| `AccountingDocumentItemRef` |  | |  | `posnr` |  |  |
| `FiscalPeriod` |  | |  | `h_monat` |  |  |
| `AccountingDocumentCategory` |  | |  | `h_bstat` |  |  |
| `PostingDate` |  | |  | `h_budat` |  |  |
| `DocumentDate` |  | |  | `h_bldat` |  |  |
| `AccountingDocumentType` |  | |  | `h_blart` |  |  |
| `NetDueDate` |  | |  | `netdt` |  |  |
| `CashDiscount1DueDate` |  | |  | `sk1dt` |  |  |
| `CashDiscount2DueDate` |  | |  | `sk2dt` |  |  |
| `OffsettingAccount` |  | |  | `gkont` |  |  |
| `OffsettingAccountType` |  | |  | `gkart` |  |  |
| `OffsettingChartOfAccounts` |  | |  | `gktopl` |  |  |
| `PartnerFund` |  | |  | `pgeber` |  |  |
| `PartnerGrant` |  | |  | `pgrant_nbr` |  |  |
| `BudgetPeriod` |  | |  | `budget_pd` |  |  |
| `PartnerBudgetPeriod` |  | |  | `pbudget_pd` |  |  |
| `BranchCode` |  | |  | `j_1tpbupl` |  |  |
| `BillingPeriodOfPerfStartDate` |  | |  | `perop_beg` |  |  |
| `BillingPeriodOfPerfEndDate` |  | |  | `perop_end` |  |  |
| `JointVentureProductionDate` |  | |  | `cast( P_BSEG_COM.prodper as jv_prodper_cds preserving type )` |  |  |
| `OplAcctgDocItmCntrySpcfcRef1` |  | |  | `glo_ref1` |  |  |
| `PaymentReason` |  | |  | `payt_rsn` |  |  |
| `CashLedgerCompanyCode` |  | |  | `re_bukrs` |  |  |
| `CashLedgerAccount` |  | |  | `re_account` |  |  |
| `PubSecBudgetAccountCoCode` |  | |  | `bdgt_account_cocode` |  |  |
| `PubSecBudgetAccount` |  | |  | `bdgt_account` |  |  |
| `FinancialServicesProductGroup` |  | |  | `FS_PRODUCT_GROUP` |  |  |
| `FinancialServicesBranch` |  | |  | `BRANCH_ID` |  |  |
| `FinancialDataSource` |  | |  | `DATASOURCE_ID` |  |  |
| `CustomerGroup` |  | |  | `kdgrp` |  |  |
| `CustomerSupplierCountry` |  | |  | `land1` |  |  |
| `CustomerSupplierIndustry` |  | |  | `brsch` |  |  |
| `CompanyCodeCurrency` |  | |  | `h_hwaer` |  |  |
| `AmountInCompanyCodeCurrency` |  | |  | `dmbtr_shl` |  |  |
| `FunctionalCurrency` |  | |  | `rfccur` |  |  |
| `AmountInFunctionalCurrency` |  | |  | `fcsl_shl` |  |  |
| `TaxAmountInCoCodeCrcy` |  | |  | `mwsts_shl` |  |  |
| `TaxBaseAmountInCoCodeCrcy` |  | |  | `hwbas_shl` |  |  |
| `ValuationDiffAmtInCoCodeCrcy` |  | |  | `bdiff_shl` |  |  |
| `CashDiscountAmtInCoCodeCrcy` |  | |  | `sknto_shl` |  |  |
| `TaxBrkdwnAmount1InCoCodeCrcy` |  | |  | `dmbt1_shl` |  |  |
| `TaxBrkdwnAmount2InCoCodeCrcy` |  | |  | `dmbt2_shl` |  |  |
| `TaxBrkdwnAmount3InCoCodeCrcy` |  | |  | `dmbt3_shl` |  |  |
| `NonDcblTaxAmountInCoCodeCrcy` |  | |  | `navhw_shl` |  |  |
| `InvoiceAmtInCoCodeCrcy` |  | |  | `rewrt_shl` |  |  |
| `TransactionCurrency` |  | |  | `h_waers` |  |  |
| `AmountInTransactionCurrency` |  | |  | `wrbtr_shl` |  |  |
| `OriginalTaxBaseAmount` |  | |  | `txbfw_shl` |  |  |
| `TaxAmount` |  | |  | `wmwst_shl` |  |  |
| `TaxBaseAmountInTransCrcy` |  | |  | `fwbas_shl` |  |  |
| `WithholdingTaxBaseAmount` |  | |  | `qsshb_shl` |  |  |
| `PlannedAmtInTransactionCrcy` |  | |  | `fdwbt_shl` |  |  |
| `CashDiscountBaseAmount` |  | |  | `skfbt_shl` |  |  |
| `CashDiscountAmount` |  | |  | `wskto_shl` |  |  |
| `NetPaymentAmount` |  | |  | `nebtr_shl` |  |  |
| `TaxBrkdwnAmount1InTransCrcy` |  | |  | `wrbt1_shl` |  |  |
| `TaxBrkdwnAmount2InTransCrcy` |  | |  | `wrbt2_shl` |  |  |
| `TaxBrkdwnAmount3InTransCrcy` |  | |  | `wrbt3_shl` |  |  |
| `WithholdingTaxAmount` |  | |  | `qbshb_shl` |  |  |
| `WithholdingTaxExemptionAmt` |  | |  | `qsfbt_shl` |  |  |
| `NonDcblTaxAmountInTransCrcy` |  | |  | `navfw_shl` |  |  |
| `InvoiceAmountInFrgnCurrency` |  | |  | `rewwr_shl` |  |  |
| `BalanceTransactionCurrency` |  | |  | `pswsl` |  |  |
| `AmountInBalanceTransacCrcy` |  | |  | `pswbt_shl` |  |  |
| `AdditionalCurrency1` |  | |  | `h_hwae2` |  |  |
| `ValuationDiffAmtInAddlCrcy1` |  | |  | `bdif2_shl` |  |  |
| `AmountInAdditionalCurrency1` |  | |  | `dmbe2_shl` |  |  |
| `TaxAmountInAdditionalCurrency1` |  | |  | `mwst2_shl` |  |  |
| `AdditionalCurrency2` |  | |  | `h_hwae3` |  |  |
| `AmountInAdditionalCurrency2` |  | |  | `dmbe3_shl` |  |  |
| `TaxAmountInAdditionalCurrency2` |  | |  | `mwst3_shl` |  |  |
| `ValuationDiffAmtInAddlCrcy2` |  | |  | `bdif3_shl` |  |  |
| `PaymentCurrency` |  | |  | `pycur` |  |  |
| `AmountInPaymentCurrency` |  | |  | `pyamt_shl` |  |  |
| `CreditControlAreaCurrency` |  | |  | `t014_waers` |  |  |
| `HedgedAmount` |  | |  | `absbt_shl` |  |  |
| `BaseUnit` |  | |  | `meins` |  |  |
| `Quantity` |  | |  | `menge` |  |  |
| `GoodsMovementEntryUnit` |  | |  | `erfme` |  |  |
| `QuantityInEntryUnit` |  | |  | `erfmg` |  |  |
| `PurchasingDocumentPriceUnit` |  | |  | `bprme` |  |  |
| `PurchaseOrderQty` |  | |  | `bpmng` |  |  |
| `MaterialPriceUnitQty` |  | |  | `peinh` |  |  |
| `AbsoluteAmountInCoCodeCrcy` |  | |  | `dmbtr` |  |  |
| `AbsoluteAmountInTransacCrcy` |  | |  | `wrbtr` |  |  |
| `AbsltAmtInAdditionalCurrency1` |  | |  | `dmbe2` |  |  |
| `AbsltAmtInAdditionalCurrency2` |  | |  | `dmbe3` |  |  |
| `AbsltAmtInBalanceTransacCrcy` |  | |  | `pswbt` |  |  |
| `AbsltAmtInFunctionalCurrency` |  | |  | `fcsl` |  |  |
| `AbsltAmountInPaymentCurrency` |  | |  | `pyamt` |  |  |
| `HedgedAbsoluteAmount` |  | |  | `absbt` |  |  |
| `PlannedAbsltAmtInTransCrcy` |  | |  | `fdwbt` |  |  |
| `CashDiscAbsltAmtInCoCodeCrcy` |  | |  | `sknto` |  |  |
| `CashDiscountAbsoluteAmount` |  | |  | `wskto` |  |  |
| `CashDiscountAbsoluteBaseAmount` |  | |  | `skfbt` |  |  |
| `InvoiceAbsltAmtInCoCodeCrcy` |  | |  | `rewrt` |  |  |
| `InvoiceAbsltAmtInFrgnCurrency` |  | |  | `rewwr` |  |  |
| `NetPaymentAbsoluteAmount` |  | |  | `nebtr` |  |  |
| `NonDcblTaxAbsltAmtInCoCodeCrcy` |  | |  | `navhw` |  |  |
| `NonDcblTaxAbsltAmtInTransCrcy` |  | |  | `navfw` |  |  |
| `TaxAbsltAmountInCoCodeCrcy` |  | |  | `mwsts` |  |  |
| `TaxAbsoluteAmount` |  | |  | `wmwst` |  |  |
| `TaxAbsltAmtInAddlCurrency1` |  | |  | `mwst2` |  |  |
| `TaxAbsltAmtInAddlCurrency2` |  | |  | `mwst3` |  |  |
| `TaxAbsltBaseAmountInCoCodeCrcy` |  | |  | `hwbas` |  |  |
| `TaxAbsltBaseAmountInTransCrcy` |  | |  | `fwbas` |  |  |
| `OriglTxAbsltBaseAmountInCCCrcy` |  | |  | `txbhw` |  |  |
| `OriginalTaxAbsoluteBaseAmount` |  | |  | `txbfw` |  |  |
| `OriglTxAbsltBaseAmtInAddlCrcy1` |  | |  | `txbh2` |  |  |
| `OriglTxAbsltBaseAmtInAddlCrcy2` |  | |  | `txbh3` |  |  |
| `TaxBrkdwnAbsltAmt1InCoCodeCrcy` |  | |  | `dmbt1` |  |  |
| `TaxBrkdwnAbsltAmt2InCoCodeCrcy` |  | |  | `dmbt2` |  |  |
| `TaxBrkdwnAbsltAmt3InCoCodeCrcy` |  | |  | `dmbt3` |  |  |
| `TaxBrkdwnAbsltAmt1InTransCrcy` |  | |  | `wrbt1` |  |  |
| `TaxBrkdwnAbsltAmt2InTransCrcy` |  | |  | `wrbt2` |  |  |
| `TaxBrkdwnAbsltAmt3InTransCrcy` |  | |  | `wrbt3` |  |  |
| `WithholdingTaxAbsoluteAmount` |  | |  | `qbshb` |  |  |
| `WithholdingTaxAbsoluteBaseAmt` |  | |  | `qsshb` |  |  |
| `WhldgTaxExemptionAbsltAmount` |  | |  | `qsfbt` |  |  |
| `ValnDiffAbsltAmtInCoCodeCrcy` |  | |  | `bdiff` |  |  |
| `ValnDiffAbsltAmtInAddlCrcy1` |  | |  | `bdif2` |  |  |
| `ValnDiffAbsltAmtInAddlCrcy2` |  | |  | `bdif3` |  |  |
| `UnadjustedDebitCreditCode` |  | |  | `shkzg_unadjusted` |  |  |
| `ReceivableFinancingStatus` |  | |  | `rbl_fincg_status` |  |  |
| `NumberOfItems` |  | |  | `nbritm` |  |  |
| `EarmarkedFunds` |  | |  | `kblnr` |  |  |
| `EarmarkedFundsItem` |  | |  | `kblpos` |  |  |
| `IN_GSTPartner` |  | |  | `gst_part` |  |  |
| `IN_GSTPlaceOfSupply` |  | |  | `plc_sup` |  |  |
| `IN_HSNOrSACCode` |  | |  | `hsn_sac` |  |  |
| `IN_InvoiceReferenceNumber` |  | |  | `irn` |  |  |
| `OriglTaxBaseAmountInCoCodeCrcy` |  | |  | `txbhw_shl` |  |  |
| `OriginalTaxBaseAmtInAddlCrcy1` |  | |  | `txbh2_shl` |  |  |
| `OriginalTaxBaseAmtInAddlCrcy2` |  | |  | `txbh3_shl` |  |  |
| `DigitalPaymentType` |  | |  | `dp_payment_type` |  |  |
| `PaymentByDigitalPaymentService` |  | |  | `dp_trans_id` |  |  |
| `GLAccountAuthorizationGroup` |  | |  | `cast( '' as brgru)` |  |  |
| `SupplierBasicAuthorizationGrp` |  | |  | `cast( '' as brgru)` |  |  |
| `CustomerBasicAuthorizationGrp` |  | |  | `cast( '' as brgru)` |  |  |
| `AcctgDocTypeAuthorizationGroup` |  | |  | `cast( '' as brgru)` |  |  |
| `OrderType` |  | |  | `cast( '' as aufart)` |  |  |
| `SalesOrderType` |  | |  | `cast( '' as auart)` |  |  |
| `AssetClass` |  | |  | `cast( '' as anlkl)` |  |  |
| `_JournalEntry` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ControllingAreaText` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_CostCenterText` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_SegmentText` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerText` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_OneTimeAccountBP` | | ✓ | | | | |
| `_JournalEntryItemOneTimeData` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierText` | | ✓ | | | | |
| `_SupplierCompany` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_ChartOfAccountsText` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_AccountingDocumentTypeText` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_FunctionalCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_BalanceTransactionCurrency` | | ✓ | | | | |
| `_AdditionalCurrency1` | | ✓ | | | | |
| `_AdditionalCurrency2` | | ✓ | | | | |
| `_PaymentCurrency` | | ✓ | | | | |
| `_CreditControlAreaCurrency` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_FinancialAccountTypeText` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_FunctionalAreaText` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_BusinessAreaText` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_MaterialText` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_WBSElementInternalID` | | ✓ | | | | |
| `_WBSElementInternalIDText` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_WBSElementBasicDataText` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_GoodsMovementEntryUnit` | | ✓ | | | | |
| `_PurchasingDocumentPriceUnit` | | ✓ | | | | |
| `_AccountingDocumentCategory` | | ✓ | | | | |
| `_AccountingDocumentCategoryT` | | ✓ | | | | |
| `_PostingKey` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_PartnerBusinessArea` | | ✓ | | | | |
| `_PartnerBusinessAreaText` | | ✓ | | | | |
| `_TaxCountry` | | ✓ | | | | |
| `_TaxType` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_PartnerCompanyText` | | ✓ | | | | |
| `_PartnerCompany_2` | | ✓ | | | | |
| `_PartnerCompanyText_2` | | ✓ | | | | |
| `_SupplyingCountry` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_PaymentDifferenceReason` | | ✓ | | | | |
| `_PaymentDifferenceReasonText` | | ✓ | | | | |
| `_PartnerSegment` | | ✓ | | | | |
| `_PartnerSegmentText` | | ✓ | | | | |
| `_SupplierBankDetails` | | ✓ | | | | |
| `_ClearingAccountingDocument` | | ✓ | | | | |
| `_ClearingJrnlEntryFiscalYear` | | ✓ | | | | |
| `_ClearingJournalEntry` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_TaxCode` | | ✓ | | | | |
| `_FinancialTransactionType` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_SalesDoc` | | ✓ | | | | |
| `_SalesDocItem` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_MasterFixedAssetText` | | ✓ | | | | |
| `_FixedAssetText` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_AssetTransactionType` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |
| `_Employment` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_PurchasingDocument` | | ✓ | | | | |
| `_PurchasingDocumentItem` | | ✓ | | | | |
| `_ValuationArea` | | ✓ | | | | |
| `_ProjectNetwork` | | ✓ | | | | |
| `_ProjectNetworkText` | | ✓ | | | | |
| `_CostOriginGroup` | | ✓ | | | | |
| `_PartnerProfitCenter` | | ✓ | | | | |
| `_ProfitCenterText` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_BusinessProcess` | | ✓ | | | | |
| `_BusinessProcessText` | | ✓ | | | | |
| `_PartnerFunctionalArea` | | ✓ | | | | |
| `_HouseBankAccount` | | ✓ | | | | |
| `_HouseBankAccountText` | | ✓ | | | | |
| `_ReferenceDocumentType` | | ✓ | | | | |
| `_FiscalPeriod` | | ✓ | | | | |
| `_OffsettingChartOfAccounts` | | ✓ | | | | |
| `_OffsettingChartOfAccountsText` | | ✓ | | | | |
| `_OffsettingAccount` | | ✓ | | | | |
| `_OffsettingAccountWithBP` | | ✓ | | | | |
| `_OffsettingAccountType` | | ✓ | | | | |
| `_OffsettingAccountTypeText` | | ✓ | | | | |
| `_CashLedgerCompanyCode` | | ✓ | | | | |
| `_CashLedgerAccount` | | ✓ | | | | |
| `_BudgetPeriod` | | ✓ | | | | |
| `_BudgetPeriodText` | | ✓ | | | | |
| `_PartnerBudgetPeriod` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_PartnerGrant` | | ✓ | | | | |
| `_PubSecBudgetAccountCoCode` | | ✓ | | | | |
| `_PubSecBudgetAccount` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceDocumentItem` | | ✓ | | | | |
| `_FinServicesProductGroup` | | ✓ | | | | |
| `_FinancialServicesBranch` | | ✓ | | | | |
| `_FinancialDataSource` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JournalEntry` | `I_JournalEntry` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_CostCenterText` | `I_CostCenterText` | [0..*] |
| `_Segment` | `I_Segment` | [0..1] |
| `_SegmentText` | `I_SegmentText` | [0..*] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerText` | `I_Customer` | [0..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [0..1] |
| `_OneTimeAccountBP` | `I_OneTimeAccountBP` | [0..1] |
| `_JournalEntryItemOneTimeData` | `I_JournalEntryItemOneTimeData` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierText` | `I_Supplier` | [0..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_ChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_AccountingDocumentTypeText` | `I_AccountingDocumentTypeText` | [0..*] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_FunctionalCurrency` | `I_Currency` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_BalanceTransactionCurrency` | `I_Currency` | [0..1] |
| `_AdditionalCurrency1` | `I_Currency` | [0..1] |
| `_AdditionalCurrency2` | `I_Currency` | [0..1] |
| `_PaymentCurrency` | `I_Currency` | [0..1] |
| `_CreditControlAreaCurrency` | `I_Currency` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_FinancialAccountTypeText` | `I_FinancialAccountTypeText` | [0..*] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_FunctionalAreaText` | `I_FunctionalAreaText` | [0..*] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_Material` | `I_Material` | [0..1] |
| `_MaterialText` | `I_MaterialText` | [0..*] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductText` | `I_ProductDescription` | [0..*] |
| `_Plant` | `I_Plant` | [0..1] |
| `_InternalOrder` | `I_InternalOrder` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_WBSElementInternalID` | `I_WBSElementByInternalKey` | [0..1] |
| `_WBSElementInternalIDText` | `I_WBSElementByInternalKey` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementBasicDataText` | `I_WBSElementBasicData` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_GoodsMovementEntryUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PurchasingDocumentPriceUnit` | `I_UnitOfMeasure` | [0..1] |
| `_AccountingDocumentCategory` | `I_AccountingDocumentCategory` | [0..1] |
| `_AccountingDocumentCategoryT` | `I_AccountingDocumentCategoryT` | [0..*] |
| `_PostingKey` | `I_PostingKey` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_PartnerBusinessArea` | `I_BusinessArea` | [0..1] |
| `_PartnerBusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_TaxCountry` | `I_Country` | [0..1] |
| `_TaxType` | `I_TaxType` | [0..1] |
| `_PartnerCompany` | `I_CompanyCode` | [0..1] |
| `_PartnerCompanyText` | `I_CompanyCode` | [0..1] |
| `_PartnerCompany_2` | `I_Partnercompany` | [0..1] |
| `_PartnerCompanyText_2` | `I_Partnercompany` | [0..1] |
| `_SupplyingCountry` | `I_Country` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |
| `_PaymentDifferenceReason` | `I_PaymentDifferenceReason` | [0..1] |
| `_PaymentDifferenceReasonText` | `I_PaymentDifferenceReasonT` | [0..*] |
| `_PartnerSegment` | `I_Segment` | [0..1] |
| `_PartnerSegmentText` | `I_SegmentText` | [0..*] |
| `_SupplierBankDetails` | `I_SuplrBankDetailsByIntId` | [0..1] |
| `_ClearingAccountingDocument` | `I_AccountingDocument` | [1..1] |
| `_ClearingJrnlEntryFiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_ClearingJournalEntry` | `I_JournalEntry` | [0..1] |
| `_SpecialGLCode` | `I_SpecialGLCode` | [0..1] |
| `_TaxCode` | `I_TaxCode` | [0..*] |
| `_FinancialTransactionType` | `I_FinancialTransactionType` | [0..1] |
| `_SalesDocument` | `I_SalesOrder` | [0..1] |
| `_SalesDocumentItem` | `I_SalesOrderItem` | [0..1] |
| `_SalesDoc` | `I_SalesDocument` | [0..1] |
| `_SalesDocItem` | `I_SalesDocumentItem` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_MasterFixedAssetText` | `I_MasterFixedAsset` | [0..1] |
| `_FixedAssetText` | `I_FixedAsset` | [0..1] |
| `_FixedAsset` | `I_FixedAsset` | [0..1] |
| `_AssetTransactionType` | `I_AssetTransactionType` | [0..1] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |
| `_Employment` | `I_Employment` | [0..1] |
| `_HouseBank` | `I_Housebank` | [0..1] |
| `_PurchasingDocument` | `I_PurchasingDocument` | [0..1] |
| `_PurchasingDocumentItem` | `I_PurchasingDocumentItem` | [0..1] |
| `_ValuationArea` | `I_Purreqvaluationarea` | [0..1] |
| `_ProjectNetwork` | `I_ProjectNetwork` | [0..1] |
| `_ProjectNetworkText` | `I_ProjectNetwork` | [0..1] |
| `_CostOriginGroup` | `I_CostOriginGroup` | [0..*] |
| `_PartnerProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_ProfitCenterText` | `I_ProfitCenterText` | [0..*] |
| `_CostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_BusinessProcess` | `I_BusinessProcess` | [0..1] |
| `_BusinessProcessText` | `I_BusinessProcessText` | [0..*] |
| `_PartnerFunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_HouseBankAccount` | `I_HouseBankAccount` | [0..1] |
| `_HouseBankAccountText` | `I_HouseBankAccountText` | [0..*] |
| `_ReferenceDocumentType` | `I_ReferenceDocumentType` | [0..1] |
| `_FiscalPeriod` | `I_FiscalYearPeriodForCmpnyCode` | [0..1] |
| `_OffsettingChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_OffsettingChartOfAccountsText` | `I_ChartOfAccountsText` | [0..*] |
| `_OffsettingAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_OffsettingAccountWithBP` | `I_OffsettingAccount` | [0..1] |
| `_OffsettingAccountType` | `I_FinancialAccountType` | [0..1] |
| `_OffsettingAccountTypeText` | `I_FinancialAccountTypeText` | [0..*] |
| `_CashLedgerCompanyCode` | `I_CompanyCode` | [0..1] |
| `_CashLedgerAccount` | `I_GLAccountInCompanyCode` | [0..1] |
| `_BudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_BudgetPeriodText` | `I_BudgetPeriodText` | [0..*] |
| `_PartnerBudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_Grant` | `I_Grant` | [0..1] |
| `_PartnerGrant` | `I_Grant` | [0..1] |
| `_PubSecBudgetAccountCoCode` | `I_CompanyCode` | [0..1] |
| `_PubSecBudgetAccount` | `I_PubSecBudgetAccount` | [0..1] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceDocumentItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_FinServicesProductGroup` | `I_FinServicesProductGroup` | [0..1] |
| `_FinancialServicesBranch` | `I_FinancialServicesBranch` | [0..1] |
| `_FinancialDataSource` | `I_FinancialDataSource` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_CustomerSupplierCountry` | `I_Country` | [0..1] |
| `_CustomerSupplierIndustry` | `I_CustomerSupplierIndustry` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Operational Accounting Document Item'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'AccountingDocumentItem'
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #C
@Analytics: { 
      dataCategory: #DIMENSION, 
      dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping: 
            [
              { 
                table: 'BSEG',
                role: #MAIN,
                viewElement: ['CompanyCode', 'AccountingDocument', 'FiscalYear', 'AccountingDocumentItem'],
                tableElement: ['bukrs', 'belnr', 'gjahr', 'buzei']
              }
            ] 
         }
      }
    }
@Analytics.technicalName: 'IFIOPACCTGDOCIT'
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]

@ObjectModel.sapObjectNodeType.name: 'OperationalAcctgDocItem'
@AccessControl.auditFilter: #ENABLED 
                                     
define view entity I_OperationalAcctgDocItem
  as select from P_BSEG_COM as P_BSEG_COM //inner join t001 on P_BSEG_COM.bukrs = t001.bukrs

  /* *************************************************************
   *  association zur ID
   * *************************************************************
  */
  association [0..1] to I_JournalEntry                 as _JournalEntry                  on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                                         and $projection.FiscalYear         = _JournalEntry.FiscalYear
                                                                                         and $projection.AccountingDocument = _JournalEntry.AccountingDocument
  association [1..1] to I_CompanyCode                  as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FiscalYearForCompanyCode     as _FiscalYear                    on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                                         and $projection.CompanyCode = _FiscalYear.CompanyCode
  //association [0..1] to I_FiscalYear                 as _FiscalYear                 on  $projection.FiscalYear  = _FiscalYear.FiscalYear
  //                                                                                  and $projection.FiscalYearVariant = _FiscalYear.FiscalYearVariant
  association [0..1] to I_ControllingArea              as _ControllingArea               on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_ControllingArea              as _ControllingAreaText           on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  association [0..1] to I_GLAccountInChartOfAccounts   as _GLAccountInChartOfAccounts    on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                         and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
  association [0..1] to I_GLAccountInCompanyCode       as _GLAccountInCompanyCode        on  $projection.CompanyCode = _GLAccountInCompanyCode.CompanyCode
                                                                                         and $projection.GLAccount   = _GLAccountInCompanyCode.GLAccount
  association [0..*] to I_ProfitCenter                 as _ProfitCenter                  on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                         and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..1] to I_ProfitCenter                 as _CurrentProfitCenter           on  $projection.ControllingArea            = _CurrentProfitCenter.ControllingArea
                                                                                         and $projection.ProfitCenter               = _CurrentProfitCenter.ProfitCenter
                                                                                         and _CurrentProfitCenter.ValidityStartDate <= $session.system_date
                                                                                         and _CurrentProfitCenter.ValidityEndDate   >= $session.system_date
  association [0..*] to I_CostCenter                   as _CostCenter                    on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                                         and $projection.CostCenter      = _CostCenter.CostCenter
  association [0..1] to I_CostCenter                   as _CurrentCostCenter             on  $projection.ControllingArea          = _CurrentCostCenter.ControllingArea
                                                                                         and $projection.CostCenter               = _CurrentCostCenter.CostCenter
                                                                                         and _CurrentCostCenter.ValidityStartDate <= $session.system_date
                                                                                         and _CurrentCostCenter.ValidityEndDate   >= $session.system_date
  association [0..*] to I_CostCenterText               as _CostCenterText                on  $projection.ControllingArea = _CostCenterText.ControllingArea
                                                                                         and $projection.CostCenter      = _CostCenterText.CostCenter
  association [0..1] to I_Segment                      as _Segment                       on  $projection.Segment = _Segment.Segment
  association [0..*] to I_SegmentText                  as _SegmentText                   on  $projection.Segment = _SegmentText.Segment

  association [0..1] to I_Customer                     as _Customer                      on  $projection.Customer    = _Customer.Customer
  association [0..1] to I_Customer                     as _CustomerText                  on  $projection.Customer    = _CustomerText.Customer
  association [0..1] to I_CustomerCompany              as _CustomerCompany               on  $projection.Customer    = _CustomerCompany.Customer
                                                                                         and $projection.CompanyCode = _CustomerCompany.CompanyCode   

// do not use: #DEPRECATED  ; use _JournalEntryItemOneTimeData
  association [0..1] to I_OneTimeAccountBP             as _OneTimeAccountBP              on  $projection.CompanyCode        = _OneTimeAccountBP.CompanyCode
                                                                                         and $projection.FiscalYear         = _OneTimeAccountBP.FiscalYear
                                                                                         and $projection.AccountingDocument = _OneTimeAccountBP.AccountingDocument
                                                                                         and $projection.AccountingDocumentItem = _OneTimeAccountBP.AccountingDocumentItem
    
  association [0..1] to I_JournalEntryItemOneTimeData  as _JournalEntryItemOneTimeData   on  $projection.CompanyCode        = _JournalEntryItemOneTimeData.CompanyCode
                                                                                         and $projection.FiscalYear         = _JournalEntryItemOneTimeData.FiscalYear
                                                                                         and $projection.AccountingDocument = _JournalEntryItemOneTimeData.AccountingDocument
                                                                                         and $projection.AccountingDocumentItem = _JournalEntryItemOneTimeData.AccountingDocumentItem                                                                                     
                                                                                         
  association [0..1] to I_Supplier                     as _Supplier                      on  $projection.Supplier    = _Supplier.Supplier
  association [0..1] to I_Supplier                     as _SupplierText                  on  $projection.Supplier    = _SupplierText.Supplier
  association [0..1] to I_SupplierCompany              as _SupplierCompany               on  $projection.Supplier    = _SupplierCompany.Supplier
                                                                                         and $projection.CompanyCode = _SupplierCompany.CompanyCode 
                                                                                         
  association [0..1] to I_ChartOfAccounts              as _ChartOfAccounts               on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [0..*] to I_ChartOfAccountsText          as _ChartOfAccountsText           on  $projection.ChartOfAccounts = _ChartOfAccountsText.ChartOfAccounts
  association [0..1] to I_AccountingDocumentType       as _AccountingDocumentType        on  $projection.AccountingDocumentType = _AccountingDocumentType.AccountingDocumentType
  association [0..*] to I_AccountingDocumentTypeText   as _AccountingDocumentTypeText    on  $projection.AccountingDocumentType = _AccountingDocumentTypeText.AccountingDocumentType
  association [1..1] to I_Currency                     as _CompanyCodeCurrency           on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_Currency                     as _FunctionalCurrency            on  $projection.FunctionalCurrency = _FunctionalCurrency.Currency  
  association [0..1] to I_Currency                     as _TransactionCurrency           on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_Currency                     as _BalanceTransactionCurrency    on  $projection.BalanceTransactionCurrency = _BalanceTransactionCurrency.Currency
  association [0..1] to I_Currency                     as _AdditionalCurrency1           on  $projection.AdditionalCurrency1 = _AdditionalCurrency1.Currency
  association [0..1] to I_Currency                     as _AdditionalCurrency2           on  $projection.AdditionalCurrency2 = _AdditionalCurrency2.Currency
  association [0..1] to I_Currency                     as _PaymentCurrency               on  $projection.PaymentCurrency = _PaymentCurrency.Currency
  association [0..1] to I_Currency                     as _CreditControlAreaCurrency     on  $projection.CreditControlAreaCurrency = _CreditControlAreaCurrency.Currency
  association [0..1] to I_FinancialAccountType         as _FinancialAccountType          on  $projection.FinancialAccountType = _FinancialAccountType.FinancialAccountType
  association [0..*] to I_FinancialAccountTypeText     as _FinancialAccountTypeText      on  $projection.FinancialAccountType = _FinancialAccountTypeText.FinancialAccountType
  association [0..1] to I_FunctionalArea               as _FunctionalArea                on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..*] to I_FunctionalAreaText           as _FunctionalAreaText            on  $projection.FunctionalArea = _FunctionalAreaText.FunctionalArea
  association [0..1] to I_BusinessArea                 as _BusinessArea                  on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..*] to I_BusinessAreaText             as _BusinessAreaText              on  $projection.BusinessArea = _BusinessAreaText.BusinessArea
  association [0..1] to I_Material                     as _Material                      on  $projection.Material = _Material.Material //do not use any longer, use _Product
  association [0..*] to I_MaterialText                 as _MaterialText                  on  $projection.Material = _MaterialText.Material
  association [0..1] to I_Product                      as _Product                       on  $projection.Product = _Product.Product
  association [0..*] to I_ProductDescription           as _ProductText                   on  $projection.Product = _ProductText.Product
  association [0..1] to I_Plant                        as _Plant                         on  $projection.Plant = _Plant.Plant
  association [0..1] to I_InternalOrder                as _InternalOrder                 on  $projection.OrderID = _InternalOrder.InternalOrder
  association [0..1] to I_Order                        as _Order                         on  $projection.OrderID = _Order.OrderID

  association [0..1] to I_WBSElementByInternalKey      as _WBSElementInternalID          on  $projection.WBSElementInternalID = _WBSElementInternalID.WBSElementInternalID
  association [0..1] to I_WBSElementByInternalKey      as _WBSElementInternalIDText      on  $projection.WBSElementInternalID = _WBSElementInternalIDText.WBSElementInternalID
  association [0..1] to I_WBSElementBasicData          as _WBSElementBasicData           on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID  
  association [0..1] to I_WBSElementBasicData          as _WBSElementBasicDataText       on  $projection.WBSElementInternalID = _WBSElementBasicDataText.WBSElementInternalID

  association [0..1] to I_UnitOfMeasure                as _BaseUnit                      on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _GoodsMovementEntryUnit        on  $projection.GoodsMovementEntryUnit = _GoodsMovementEntryUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _PurchasingDocumentPriceUnit   on  $projection.PurchasingDocumentPriceUnit = _PurchasingDocumentPriceUnit.UnitOfMeasure

  association [0..1] to I_AccountingDocumentCategory   as _AccountingDocumentCategory    on  $projection.AccountingDocumentCategory = _AccountingDocumentCategory.AccountingDocumentCategory
  association [0..*] to I_AccountingDocumentCategoryT  as _AccountingDocumentCategoryT   on  $projection.AccountingDocumentCategory = _AccountingDocumentCategoryT.AccountingDocumentCategory
  //  association [0..1] to I_AccountingDocumentCatGroupT as _AccountingDocumentCatGroupT  on $projection.AccountingDocumentCatGroup  = _AccountingDocumentCatGroupT.AccountingDocumentCatGroup

  association [0..1] to I_PostingKey                   as _PostingKey                    on  $projection.PostingKey = _PostingKey.PostingKey
  association [0..1] to I_DebitCreditCode              as _DebitCreditCode               on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
  association [0..1] to I_BusinessArea                 as _PartnerBusinessArea           on  $projection.PartnerBusinessArea = _PartnerBusinessArea.BusinessArea
  association [0..*] to I_BusinessAreaText             as _PartnerBusinessAreaText       on  $projection.PartnerBusinessArea = _PartnerBusinessAreaText.BusinessArea
  association [0..1] to I_Country                      as _TaxCountry                    on  $projection.TaxCountry = _TaxCountry.Country
  association [0..1] to I_TaxType                      as _TaxType                       on  $projection.TaxType = _TaxType.TaxType
  association [0..1] to I_CompanyCode                  as _PartnerCompany                on  $projection.PartnerCompany = _PartnerCompany.CompanyCode
  association [0..1] to I_CompanyCode                  as _PartnerCompanyText            on  $projection.PartnerCompany = _PartnerCompanyText.CompanyCode
  association [0..1] to I_Partnercompany               as _PartnerCompany_2              on  $projection.PartnerCompany = _PartnerCompany_2.PartnerCompany
  association [0..1] to I_Partnercompany               as _PartnerCompanyText_2          on  $projection.PartnerCompany = _PartnerCompanyText_2.PartnerCompany  
  association [0..1] to I_Country                      as _SupplyingCountry              on  $projection.SupplyingCountry = _SupplyingCountry.Country
  association [0..1] to I_InventoryValuationType       as _InventoryValuationType        on  $projection.InventoryValuationType = _InventoryValuationType.InventoryValuationType
  association [0..1] to I_PaymentDifferenceReason      as _PaymentDifferenceReason       on  $projection.PaymentDifferenceReason = _PaymentDifferenceReason.PaymentDifferenceReason
                                                                                         and $projection.CompanyCode             = _PaymentDifferenceReason.CompanyCode
  association [0..*] to I_PaymentDifferenceReasonT     as _PaymentDifferenceReasonText   on  $projection.PaymentDifferenceReason = _PaymentDifferenceReasonText.PaymentDifferenceReason
                                                                                         and $projection.CompanyCode             = _PaymentDifferenceReasonText.CompanyCode
  association [0..1] to I_Segment                      as _PartnerSegment                on  $projection.PartnerSegment = _PartnerSegment.Segment
  association [0..*] to I_SegmentText                  as _PartnerSegmentText            on  $projection.PartnerSegment = _PartnerSegmentText.Segment
  association [0..1] to I_SuplrBankDetailsByIntId      as _SupplierBankDetails           on  $projection.Supplier                = _SupplierBankDetails.Supplier
                                                                                         and $projection.BPBankAccountInternalID = _SupplierBankDetails.BPBankAccountInternalID

  association [1..1] to I_AccountingDocument           as _ClearingAccountingDocument    on  $projection.CompanyCode                    = _ClearingAccountingDocument.CompanyCode
                                                                                         and $projection.FiscalYear                     = _ClearingAccountingDocument.FiscalYear
                                                                                         and $projection.ClearingAccountingDocument     = _ClearingAccountingDocument.AccountingDocument
  association [0..1] to I_FiscalYearForCompanyCode     as _ClearingJrnlEntryFiscalYear   on  $projection.ClearingJournalEntryFiscalYear = _ClearingJrnlEntryFiscalYear.FiscalYear
                                                                                         and $projection.CompanyCode                    = _ClearingJrnlEntryFiscalYear.CompanyCode
  association [0..1] to I_JournalEntry                 as _ClearingJournalEntry          on  $projection.CompanyCode                    = _ClearingJournalEntry.CompanyCode
                                                                                         and $projection.ClearingJournalEntryFiscalYear = _ClearingJournalEntry.FiscalYear
                                                                                         and $projection.ClearingJournalEntry           = _ClearingJournalEntry.AccountingDocument
                                                                                         
  association [0..1] to I_SpecialGLCode                as _SpecialGLCode                 on  $projection.SpecialGLCode        = _SpecialGLCode.SpecialGLCode
                                                                                         and $projection.FinancialAccountType = _SpecialGLCode.FinancialAccountType
  association [0..*] to I_TaxCode                      as _TaxCode                       on  $projection.TaxCode = _TaxCode.TaxCode
  //above solution for association to I_TaxCode not supported. TaxCalculationProcedure required as additional key field to make TaxCode unique
  //association[0..1] to I_TaxCode                      as _TaxCode                       on $projection.TaxCode = _TaxCode.TaxCode and
  //                                                                                         $projection._Company._Country.TaxCalculationProcedure = _TaxCode.TaxCalculationProcedure
  association [0..1] to I_FinancialTransactionType     as _FinancialTransactionType      on  $projection.FinancialTransactionType = _FinancialTransactionType.FinancialTransactionType
  association [0..1] to I_SalesOrder                   as _SalesDocument                 on  $projection.SalesDocument = _SalesDocument.SalesOrder
  association [0..1] to I_SalesOrderItem               as _SalesDocumentItem             on  $projection.SalesDocument     = _SalesDocumentItem.SalesOrder
                                                                                         and $projection.SalesDocumentItem = _SalesDocumentItem.SalesOrderItem
  association [0..1] to I_SalesDocument                as _SalesDoc                      on  $projection.SalesDocument = _SalesDoc.SalesDocument
  association [0..1] to I_SalesDocumentItem            as _SalesDocItem                  on  $projection.SalesDocument     = _SalesDocItem.SalesDocument
                                                                                         and $projection.SalesDocumentItem = _SalesDocItem.SalesDocumentItem
  association [0..1] to I_MasterFixedAsset             as _MasterFixedAsset              on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                                         and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
  association [0..1] to I_MasterFixedAsset             as _MasterFixedAssetText          on  $projection.CompanyCode      = _MasterFixedAssetText.CompanyCode
                                                                                         and $projection.MasterFixedAsset = _MasterFixedAssetText.MasterFixedAsset
  association [0..1] to I_FixedAsset                   as _FixedAssetText                on  $projection.CompanyCode      = _FixedAssetText.CompanyCode
                                                                                         and $projection.MasterFixedAsset = _FixedAssetText.MasterFixedAsset
                                                                                         and $projection.FixedAsset       = _FixedAssetText.FixedAsset
  association [0..1] to I_FixedAsset                   as _FixedAsset                    on  $projection.CompanyCode      = _FixedAsset.CompanyCode
                                                                                         and $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                                         and $projection.FixedAsset       = _FixedAsset.FixedAsset
  association [0..1] to I_AssetTransactionType         as _AssetTransactionType          on  $projection.AssetTransactionType = _AssetTransactionType.AssetTransactionType

  association [0..1] to I_PersonWorkAgreement_1        as _PersonWorkAgreement_1         on  $projection.PersonnelNumber  = _PersonWorkAgreement_1.PersonWorkAgreement
  association [0..1] to I_Employment                   as _Employment                    on  $projection.PersonnelNumber = _Employment.EmploymentInternalID
  //                                                                                   and  $projection.PostingDate                   >= _Employment.StartDate
  //                                                                                   and  $projection.PostingDate                   <= _Employment.EndDate
  
  association [0..1] to I_Housebank                    as _HouseBank                     on  $projection.CompanyCode = _HouseBank.CompanyCode
                                                                                         and $projection.HouseBank   = _HouseBank.HouseBank
  association [0..1] to I_PurchasingDocument           as _PurchasingDocument            on  $projection.PurchasingDocument = _PurchasingDocument.PurchasingDocument
  association [0..1] to I_PurchasingDocumentItem       as _PurchasingDocumentItem        on  $projection.PurchasingDocument     = _PurchasingDocumentItem.PurchasingDocument
                                                                                         and $projection.PurchasingDocumentItem = _PurchasingDocumentItem.PurchasingDocumentItem
  association [0..1] to I_Purreqvaluationarea          as _ValuationArea                 on  $projection.ValuationArea = _ValuationArea.ValuationArea
  association [0..1] to I_ProjectNetwork               as _ProjectNetwork                on  $projection.ProjectNetwork = _ProjectNetwork.ProjectNetwork
  association [0..1] to I_ProjectNetwork               as _ProjectNetworkText            on  $projection.ProjectNetwork = _ProjectNetworkText.ProjectNetwork
  association [0..*] to I_CostOriginGroup              as _CostOriginGroup               on  $projection.ControllingArea = _CostOriginGroup.ControllingArea
                                                                                         and
                                                                                             // not contained in view                                                                $projection.CostOriginType                 = _CostOriginGroup.CostOriginType and
                                                                                             $projection.CostOriginGroup = _CostOriginGroup.CostOriginGroup
  association [0..*] to I_ProfitCenter                 as _PartnerProfitCenter           on  $projection.ControllingArea     = _PartnerProfitCenter.ControllingArea
                                                                                         and $projection.PartnerProfitCenter = _PartnerProfitCenter.ProfitCenter
  association [0..*] to I_ProfitCenterText             as _ProfitCenterText              on  $projection.ControllingArea = _ProfitCenterText.ControllingArea
                                                                                         and $projection.ProfitCenter    = _ProfitCenterText.ProfitCenter
  association [0..*] to I_CostCenterActivityType       as _CostCtrActivityType           on  $projection.ControllingArea     = _CostCtrActivityType.ControllingArea
                                                                                         and $projection.CostCtrActivityType = _CostCtrActivityType.CostCtrActivityType
  association [0..1] to I_BusinessProcess              as _BusinessProcess               on  $projection.ControllingArea = _BusinessProcess.ControllingArea
                                                                                         and $projection.BusinessProcess = _BusinessProcess.BusinessProcess
  association [0..*] to I_BusinessProcessText          as _BusinessProcessText           on  $projection.ControllingArea = _BusinessProcessText.ControllingArea
                                                                                         and $projection.BusinessProcess = _BusinessProcessText.BusinessProcess
  association [0..1] to I_FunctionalArea               as _PartnerFunctionalArea         on  $projection.PartnerFunctionalArea = _PartnerFunctionalArea.FunctionalArea
  association [0..1] to I_HouseBankAccount             as _HouseBankAccount              on  $projection.CompanyCode      = _HouseBankAccount.CompanyCode
                                                                                         and $projection.HouseBank        = _HouseBankAccount.HouseBank
                                                                                         and $projection.HouseBankAccount = _HouseBankAccount.HouseBankAccount
  association [0..*] to I_HouseBankAccountText         as _HouseBankAccountText          on  $projection.CompanyCode      = _HouseBankAccountText.CompanyCode
                                                                                         and $projection.HouseBank        = _HouseBankAccountText.HouseBank
                                                                                         and $projection.HouseBankAccount = _HouseBankAccountText.HouseBankAccount
  association [0..1] to I_ReferenceDocumentType        as _ReferenceDocumentType         on  $projection.ReferenceDocumentType = _ReferenceDocumentType.ReferenceDocumentType
  association [0..1] to I_FiscalYearPeriodForCmpnyCode as _FiscalPeriod                  on  $projection.FiscalYear   = _FiscalPeriod.FiscalYear
                                                                                         and $projection.FiscalPeriod = _FiscalPeriod.FiscalPeriod
                                                                                         and $projection.CompanyCode  = _FiscalPeriod.CompanyCode
  association [0..1] to I_ChartOfAccounts              as _OffsettingChartOfAccounts     on  $projection.OffsettingChartOfAccounts = _OffsettingChartOfAccounts.ChartOfAccounts
  association [0..*] to I_ChartOfAccountsText          as _OffsettingChartOfAccountsText on  $projection.OffsettingChartOfAccounts = _OffsettingChartOfAccountsText.ChartOfAccounts
  // old association kept for compatibility. DO NOT USE
  association [0..1] to I_GLAccountInChartOfAccounts   as _OffsettingAccount             on  $projection.ChartOfAccounts   = _OffsettingAccount.ChartOfAccounts
                                                                                         and $projection.OffsettingAccount = _OffsettingAccount.GLAccount

  association [0..1] to I_OffsettingAccount            as _OffsettingAccountWithBP       on  $projection.OffsettingChartOfAccounts  = _OffsettingAccountWithBP.ChartOfAccounts
                                                                                         and $projection.OffsettingAccountType      = _OffsettingAccountWithBP.OffsettingAccountType
                                                                                         and $projection.OffsettingAccount          = _OffsettingAccountWithBP.OffsettingAccount
  //association [0..1] to I_Glaccounttype              as _OffsettingAccountType       on $projection.OffsettingAccountType          = _OffsettingAccountType.GLAccountType
  association [0..1] to I_FinancialAccountType         as _OffsettingAccountType         on  $projection.OffsettingAccountType      = _OffsettingAccountType.FinancialAccountType
  association [0..*] to I_FinancialAccountTypeText     as _OffsettingAccountTypeText     on  $projection.OffsettingAccountType      = _OffsettingAccountTypeText.FinancialAccountType

  association [0..1] to I_CompanyCode                  as _CashLedgerCompanyCode         on  $projection.CashLedgerCompanyCode      = _CashLedgerCompanyCode.CompanyCode
  association [0..1] to I_GLAccountInCompanyCode       as _CashLedgerAccount             on  $projection.CashLedgerCompanyCode      = _CashLedgerAccount.CompanyCode 
                                                                                         and $projection.CashLedgerAccount          = _CashLedgerAccount.GLAccount                                                                                  
                                                                                  
  association [0..1] to I_BudgetPeriod                 as _BudgetPeriod                  on  $projection.BudgetPeriod               = _BudgetPeriod.BudgetPeriod
  association [0..*] to I_BudgetPeriodText             as _BudgetPeriodText              on  $projection.BudgetPeriod               = _BudgetPeriodText.BudgetPeriod
  association [0..1] to I_BudgetPeriod                 as _PartnerBudgetPeriod           on  $projection.PartnerBudgetPeriod        = _PartnerBudgetPeriod.BudgetPeriod
  association [0..1] to I_Grant                        as _Grant                         on  $projection.GrantID                    = _Grant.GrantID   
  association [0..1] to I_Grant                        as _PartnerGrant                  on  $projection.PartnerGrant               = _PartnerGrant.GrantID                                                                                    
                                                                                         
  association [0..1] to I_CompanyCode                  as _PubSecBudgetAccountCoCode     on  $projection.PubSecBudgetAccountCoCode  = _PubSecBudgetAccountCoCode.CompanyCode       
  association [0..1] to I_PubSecBudgetAccount          as _PubSecBudgetAccount           on  $projection.PubSecBudgetAccountCoCode  = _PubSecBudgetAccount.PubSecBudgetAccountCoCode
                                                                                         and $projection.PubSecBudgetAccount        = _PubSecBudgetAccount.PubSecBudgetAccount    

  association [0..1] to I_ServiceDocumentType          as _ServiceDocumentType           on  $projection.ServiceDocumentType        = _ServiceDocumentType.ServiceDocumentType
  
  association [0..1] to I_SrvcDocByDocumentType        as _ServiceDocument               on  $projection.ServiceDocumentType        = _ServiceDocument.ServiceDocumentType
                                                                                         and $projection.ServiceDocument            = _ServiceDocument.ServiceDocument 
                                                                                                     
  association [0..1] to I_SrvcDocItemByDocumentType    as _ServiceDocumentItem           on  $projection.ServiceDocumentType        = _ServiceDocumentItem.ServiceDocumentType
                                                                                         and $projection.ServiceDocument            = _ServiceDocumentItem.ServiceDocument
                                                                                         and $projection.ServiceDocumentItem        = _ServiceDocumentItem.ServiceDocumentItem                                                                                         
//  association [0..1] to I_REObjectByIntFinNumber       as _REObjectByIntFinNumber        on  $projection.REInternalFinNumber        = _REObjectByIntFinNumber.REInternalFinNumber

association [0..1] to I_FinServicesProductGroup   as _FinServicesProductGroup  on $projection.FinancialServicesProductGroup = _FinServicesProductGroup.FinancialServicesProductGroup
association [0..1] to I_FinancialServicesBranch   as _FinancialServicesBranch  on $projection.FinancialServicesBranch       = _FinancialServicesBranch.FinancialServicesBranch
association [0..1] to I_FinancialDataSource       as _FinancialDataSource      on $projection.FinancialDataSource           = _FinancialDataSource.FinancialDataSource
association [0..1] to I_CustomerGroup             as _CustomerGroup            on $projection.CustomerGroup = _CustomerGroup.CustomerGroup
association [0..1] to I_Country                   as _CustomerSupplierCountry  on $projection.CustomerSupplierCountry = _CustomerSupplierCountry.Country
association [0..1] to I_CustomerSupplierIndustry  as _CustomerSupplierIndustry on $projection.CustomerSupplierIndustry      = _CustomerSupplierIndustry.Industry 
  
{

@ObjectModel.foreignKey.association: '_CompanyCode'
key P_BSEG_COM.bukrs    as  CompanyCode,
    @ObjectModel.foreignKey.association: '_JournalEntry'
key P_BSEG_COM.belnr               as  AccountingDocument,
    @ObjectModel.foreignKey.association: '_FiscalYear'
key P_BSEG_COM.gjahr               as  FiscalYear,
key P_BSEG_COM.buzei               as  AccountingDocumentItem,

@ObjectModel.foreignKey.association: '_ChartOfAccounts'
P_BSEG_COM.ktopl               as  ChartOfAccounts,
P_BSEG_COM.buzid               as  AccountingDocumentItemType,

P_BSEG_COM.augdt               as  ClearingDate,
P_BSEG_COM.augcp               as  ClearingCreationDate,

@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ClearingJrnlEntryFiscalYear'
P_BSEG_COM.auggj               as  ClearingJournalEntryFiscalYear,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntryFiscalYear'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
cast( P_BSEG_COM.auggj  as fis_auggj_no_conv_depre preserving type ) as ClearingDocFiscalYear,

@Analytics.internalName: #LOCAL        
@ObjectModel.foreignKey.association: '_ClearingJournalEntry'
P_BSEG_COM.augbl               as  ClearingJournalEntry,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntry'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntry'      
@ObjectModel.foreignKey.association: '_ClearingAccountingDocument'
cast( P_BSEG_COM.augbl as fis_augbl_depre preserving type ) as ClearingAccountingDocument,

@ObjectModel.foreignKey.association: '_PostingKey'
P_BSEG_COM.bschl               as  PostingKey,
@ObjectModel.foreignKey.association: '_FinancialAccountType'
P_BSEG_COM.koart               as  FinancialAccountType,
@ObjectModel.foreignKey.association: '_SpecialGLCode'
P_BSEG_COM.umskz               as  SpecialGLCode,
P_BSEG_COM.umsks               as  SpecialGLTransactionType,
P_BSEG_COM.zumsk               as  TargetSpecialGLCode,
@ObjectModel.foreignKey.association: '_DebitCreditCode'
P_BSEG_COM.shkzg               as  DebitCreditCode,
@ObjectModel.foreignKey.association: '_BusinessArea'
P_BSEG_COM.gsber               as  BusinessArea,
@ObjectModel.foreignKey.association: '_PartnerBusinessArea'
P_BSEG_COM.pargb               as  PartnerBusinessArea,
//      @ObjectModel.foreignKey.association: '_TaxCode'
P_BSEG_COM.mwskz               as  TaxCode,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_TaxCountry'
P_BSEG_COM.tax_country        as  TaxCountry, 
P_BSEG_COM.txdat_from as TaxRateValidityStartDate,
P_BSEG_COM.qsskz               as  WithholdingTaxCode,
//shzuz,
//stekz,
@ObjectModel.foreignKey.association: '_TaxType'
P_BSEG_COM.mwart               as  TaxType,
P_BSEG_COM.txgrp               as  TaxItemGroup,
P_BSEG_COM.ktosl               as  TransactionTypeDetermination,
//kursr,
P_BSEG_COM.valut               as  ValueDate,
P_BSEG_COM.zuonr               as  AssignmentReference,
P_BSEG_COM.sgtxt               as  DocumentItemText,
cast( P_BSEG_COM.zinkz as fis_dzinkz preserving type ) as InterestCalculationBlockReason,
@ObjectModel.foreignKey.association: '_PartnerCompany_2'
P_BSEG_COM.vbund               as  PartnerCompany,
@ObjectModel.foreignKey.association: '_FinancialTransactionType'
P_BSEG_COM.bewar               as  FinancialTransactionType,
P_BSEG_COM.altkt               as  CorporateGroupAccount,
//vorgn,
P_BSEG_COM.fdlev               as  PlanningLevel,
//fdgrp,
//fdtag,
//fkont,
@ObjectModel.foreignKey.association: '_ControllingArea'
P_BSEG_COM.kokrs               as  ControllingArea,
@ObjectModel.foreignKey.association: '_CostCenter'
P_BSEG_COM.kostl               as  CostCenter,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: ''
P_BSEG_COM.projn               as  Project,           // DO NOT USE ; this is the old unused Project

@ObjectModel.foreignKey.association: '_Order'
P_BSEG_COM.aufnr               as  OrderID,
P_BSEG_COM.vbeln               as  BillingDocument,
@ObjectModel.foreignKey.association: '_SalesDoc'
P_BSEG_COM.vbel2               as  SalesDocument,
@ObjectModel.foreignKey.association: '_SalesDocItem'
P_BSEG_COM.posn2               as  SalesDocumentItem,
P_BSEG_COM.eten2               as  ScheduleLine,

@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                     element: 'ServiceDocumentType' }
        }]
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceDocumentType'
P_BSEG_COM.service_doc_type    as  ServiceDocumentType,
@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_AcctgServiceDocumentVH',
                     element: 'ServiceDocument' }
        }]
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceDocument'
P_BSEG_COM.service_doc_id      as  ServiceDocument,
@Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                     element: 'ServiceDocumentItem' }
        }]
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceDocumentItem'
P_BSEG_COM.service_doc_item_id as  ServiceDocumentItem,

@ObjectModel.foreignKey.association: '_MasterFixedAsset'
P_BSEG_COM.anln1               as  MasterFixedAsset,
@ObjectModel.foreignKey.association: '_FixedAsset'
P_BSEG_COM.anln2               as  FixedAsset,
@ObjectModel.foreignKey.association: '_AssetTransactionType'
P_BSEG_COM.anbwa               as  AssetTransactionType,
P_BSEG_COM.bzdat               as  AssetValueDate,
@ObjectModel.foreignKey.association: '_Employment'
P_BSEG_COM.pernr               as  PersonnelNumber,
//@Semantics.booleanIndicator
P_BSEG_COM.xumsw               as  IsSalesRelated,
//xhres,
//@Semantics.booleanIndicator
P_BSEG_COM.xkres               as  LineItemDisplayIsEnabled,
//@Semantics.booleanIndicator
P_BSEG_COM.xopvw               as  IsOpenItemManaged,

cast( P_BSEG_COM.xcpdd as farp_xcpdd ) as  AddressAndBankIsSetManually,
//xskst,
//xsauf,
//xspro,
//xserg,
//xfakt,
//xuman,
@Analytics.internalName: #LOCAL      
//@Semantics.booleanIndicator
P_BSEG_COM.xanet               as  DownPaymentIsNetProcedure,
//@Semantics.booleanIndicator
P_BSEG_COM.xskrl               as  IsNotCashDiscountLiable,
P_BSEG_COM.xinve               as SuplrInvcIsCapitalGoodsRelated,
//xpanz,
//@Semantics.booleanIndicator
P_BSEG_COM.xauto               as  IsAutomaticallyCreated,
//xncop,
//@Semantics.booleanIndicator
P_BSEG_COM.xzahl               as  IsUsedInPaymentTransaction,
P_BSEG_COM.saknr               as  OperationalGLAccount,
@ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
P_BSEG_COM.hkont               as  GLAccount,
@ObjectModel.foreignKey.association: '_Customer'
P_BSEG_COM.kunnr               as  Customer,
@ObjectModel.foreignKey.association: '_Supplier'
P_BSEG_COM.lifnr               as  Supplier,
P_BSEG_COM.filkd               as  BranchAccount,
//@Semantics.booleanIndicator
P_BSEG_COM.xbilk               as  IsBalanceSheetAccount,
P_BSEG_COM.gvtyp               as  ProfitLossAccountType,
P_BSEG_COM.hzuon               as  SpecialGLAccountAssignment,
P_BSEG_COM.zfbdt               as  DueCalculationBaseDate,
P_BSEG_COM.zterm               as  PaymentTerms,
P_BSEG_COM.zbd1t               as  CashDiscount1Days,
P_BSEG_COM.zbd2t               as  CashDiscount2Days,
P_BSEG_COM.zbd3t               as  NetPaymentDays,
P_BSEG_COM.zbd1p               as  CashDiscount1Percent,
P_BSEG_COM.zbd2p               as  CashDiscount2Percent,
P_BSEG_COM.zlsch               as  PaymentMethod,
P_BSEG_COM.zlspr               as  PaymentBlockingReason,
P_BSEG_COM.zbfix               as  FixedCashDiscount,
@ObjectModel.foreignKey.association: '_HouseBank'
P_BSEG_COM.hbkid               as  HouseBank,
@ObjectModel.foreignKey.association: '_SupplierBankDetails'
P_BSEG_COM.bvtyp               as  BPBankAccountInternalID,
P_BSEG_COM.mwsk1               as  TaxDistributionCode1,
P_BSEG_COM.mwsk2               as  TaxDistributionCode2,
P_BSEG_COM.mwsk3               as  TaxDistributionCode3,
P_BSEG_COM.rebzg               as  InvoiceReference,
P_BSEG_COM.rebzj               as  InvoiceReferenceFiscalYear,
P_BSEG_COM.rebzz               as  InvoiceItemReference,
P_BSEG_COM.rebzt               as  FollowOnDocumentType,
P_BSEG_COM.zollt               as  AcctgDocItmCustomsTariffNumber, 
P_BSEG_COM.zolld               as  AcctgDocItmCstmsClearanceDate,
P_BSEG_COM.lzbkz               as  StateCentralBankPaymentReason,
@ObjectModel.foreignKey.association: '_SupplyingCountry'
P_BSEG_COM.landl               as  SupplyingCountry,
P_BSEG_COM.diekz               as  RecrrgSuplrInvcIsSrvcInvoice,
P_BSEG_COM.samnr               as  InvoiceList,
//abper as SettlementFiscalYearPeriod,
//vrskz,
//vrsdt,
P_BSEG_COM.disbn               as BillOfExchangeUsageDocument,
//disbj,
//disbz,
P_BSEG_COM.wverw               as BillOfExchangeUsage,
P_BSEG_COM.anfbn               as BillOfExchangePaymentRequest,
P_BSEG_COM.anfbj               as BOEPaymentRequestFiscalYear,
P_BSEG_COM.anfbu               as BOEPaymentRequestCompanyCode,
//anfae,
//blnkz,
//blnpz,
P_BSEG_COM.mschl               as  DunningKey,
P_BSEG_COM.mansp               as  DunningBlockingReason,
P_BSEG_COM.madat               as  LastDunningDate,
P_BSEG_COM.manst               as  DunningLevel,
P_BSEG_COM.maber               as  DunningArea,
P_BSEG_COM.esrnr               as  PaytSlipWthRefSubscriber,
P_BSEG_COM.esrre               as  PaytSlipWthRefReference,
P_BSEG_COM.esrpz               as  PaytSlipWthRefCheckDigit,
P_BSEG_COM.qsznr               as  WithholdingTaxCertificate,
@ObjectModel.foreignKey.association: '_Material'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'Product'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'Product'
P_BSEG_COM.matnr               as  Material, // do not use any longer, use Product
@ObjectModel.foreignKey.association: '_Product'
cast( P_BSEG_COM.matnr as productnumber ) as  Product,
@ObjectModel.foreignKey.association: '_Plant'
P_BSEG_COM.werks               as  Plant,
@ObjectModel.foreignKey.association: '_PurchasingDocument'
P_BSEG_COM.ebeln               as  PurchasingDocument,
@ObjectModel.foreignKey.association: '_PurchasingDocumentItem'
P_BSEG_COM.ebelp               as  PurchasingDocumentItem,
P_BSEG_COM.zekkn               as  AccountAssignmentNumber,
//@Semantics.booleanIndicator
P_BSEG_COM.elikz               as  IsCompletelyDelivered,
P_BSEG_COM.vprsv               as  MaterialPriceControl,
@ObjectModel.foreignKey.association: '_ValuationArea'
P_BSEG_COM.bwkey               as  ValuationArea,
@ObjectModel.foreignKey.association: '_InventoryValuationType'
P_BSEG_COM.bwtar               as  InventoryValuationType,
//bustw,
//psalt,
//tbtkz,
//spgrp,
//spgrm,
//spgrt,
//spgrg,
//spgrv,
//spgrq,
P_BSEG_COM.stceg               as  VATRegistration,
P_BSEG_COM.egbld               as  DelivOfGoodsDestCountry,
P_BSEG_COM.eglld               as DelivOfGoodsOriginCountry,
@ObjectModel.foreignKey.association: '_PaymentDifferenceReason'
P_BSEG_COM.rstgr               as  PaymentDifferenceReason,
//ryacq,
//rpacq,
@ObjectModel.foreignKey.association: '_ProfitCenter'
P_BSEG_COM.prctr               as  ProfitCenter,
//xhkom,
P_BSEG_COM.vname               as  JointVenture,
P_BSEG_COM.recid               as  JointVentureCostRecoveryCode,
P_BSEG_COM.egrup               as  JointVentureEquityGroup,
cast( P_BSEG_COM.vptnr as jv_part_cds preserving type ) as JointVenturePartner,
P_BSEG_COM.vertt               as  TreasuryContractType,
P_BSEG_COM.vertn               as  AssetContract,
P_BSEG_COM.vbewa               as  CashFlowType,
//depot,
P_BSEG_COM.txjcd    as  TaxJurisdiction,

//@ObjectModel.foreignKey.association: '_REObjectByIntFinNumber'
cast( P_BSEG_COM.imkey as recaimkeyfi preserving type ) as REInternalFinNumber,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'REInternalFinNumber'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'REInternalFinNumber'
P_BSEG_COM.imkey               as  RealEstateObject,

P_BSEG_COM.dabrz               as  SettlementReferenceDate,
//popts,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    'CommitmentItemShortID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'CommitmentItemShortID'
P_BSEG_COM.fipos                                              as  CommitmentItem,
cast( P_BSEG_COM.fipos as fis_fipos_shortid preserving type ) as  CommitmentItemShortID,

P_BSEG_COM.kstrg               as  CostObject,
@ObjectModel.foreignKey.association: '_ProjectNetwork'
P_BSEG_COM.nplnr               as  ProjectNetwork,
P_BSEG_COM.aufpl               as  OrderInternalBillOfOperations,
P_BSEG_COM.aplzl               as  OrderIntBillOfOperationsItem,
@ObjectModel.foreignKey.association: '_WBSElementInternalID'
cast( P_BSEG_COM.projk as fis_wbsint_no_conv preserving type ) as WBSElementInternalID,

@API.element.releaseState: #DECOMMISSIONED
@API.element.successor:    'ProfitabilitySegment_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ProfitabilitySegment_2'
cast( case when P_BSEG_COM.paobjnr > '9999999999' then '9999999999' else lpad( P_BSEG_COM.paobjnr, 10, '0' ) end as rkeobjnr_numc )  as ProfitabilitySegment,
cast( P_BSEG_COM.paobjnr as rkeobjnr_char ) as ProfitabilitySegment_2, 

//pasubnr,
//spgrs,
//spgrc,
cast( P_BSEG_COM.btype as jv_bilind_cds preserving type ) as JointVentureBillingType,
P_BSEG_COM.etype               as  JointVentureEquityType,
//@Semantics.booleanIndicator
P_BSEG_COM.xegdr               as  IsEUTriangularDeal,
//lnran,
//      @ObjectModel.foreignKey.association: '_CostOriginGroup'
P_BSEG_COM.hrkft               as  CostOriginGroup,
P_BSEG_COM.hwmet               as  CompanyCodeCurrencyDetnMethod,
//glupm,
//@Semantics.booleanIndicator
P_BSEG_COM.xragl               as  ClearingIsReversed,
P_BSEG_COM.uzawe               as  PaymentMethodSupplement,
//      @ObjectModel.foreignKey.association: '_AlternativeGLAccount'
P_BSEG_COM.lokkt               as  AlternativeGLAccount,
//@ObjectModel.foreignKey.association: '_FundsCenter'
P_BSEG_COM.fistl               as  FundsCenter,
//@ObjectModel.foreignKey.association: '_Fund'
P_BSEG_COM.geber               as  Fund,
P_BSEG_COM.stbuk               as TaxCompanyCode,
@ObjectModel.foreignKey.association: '_PartnerProfitCenter'
P_BSEG_COM.pprct               as  PartnerProfitCenter,
P_BSEG_COM.xref1               as  Reference1IDByBusinessPartner,
P_BSEG_COM.xref2               as  Reference2IDByBusinessPartner,
@Analytics.internalName: #LOCAL      
P_BSEG_COM.kblnr               as  EarmarkedFundsDocument,
@Analytics.internalName: #LOCAL      
P_BSEG_COM.kblpos              as  EarmarkedFundsDocumentItem,
//fkber,
//obzei,
//@Semantics.booleanIndicator
P_BSEG_COM.xnegp               as  IsNegativePosting,
P_BSEG_COM.rfzei               as  PaymentCardItem,
P_BSEG_COM.ccbtc               as  PaymentCardPaymentSettlement,
P_BSEG_COM.kkber               as  CreditControlArea,
P_BSEG_COM.empfb               as  AlternativePayeePayer,
P_BSEG_COM.xref3               as  Reference3IDByBusinessPartner,
P_BSEG_COM.dtws1               as  DataExchangeInstruction1,
P_BSEG_COM.dtws2               as  DataExchangeInstruction2,
P_BSEG_COM.dtws3               as  DataExchangeInstruction3,
P_BSEG_COM.dtws4               as  DataExchangeInstruction4,
P_BSEG_COM.gricd               as  BPActivityCodeGrossIncomeTax,
P_BSEG_COM.grirg               as  Region,
P_BSEG_COM.gityp               as  BPEmploymentTaxDistrType,
//@Semantics.booleanIndicator
P_BSEG_COM.xpypr               as  HasPaymentOrder,
P_BSEG_COM.kidno               as  PaymentReference,
//idxsp,
//linfv,
//kontt,
//kontl,
//uebgdat,
P_BSEG_COM.txdat               as  TaxDeterminationDate,
P_BSEG_COM.agzei               as  ClearingItem,
P_BSEG_COM.bupla               as  BusinessPlace,
P_BSEG_COM.secco               as  TaxSection,
@ObjectModel.foreignKey.association: '_CostCtrActivityType'
P_BSEG_COM.lstar               as  CostCtrActivityType,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    'AcctsReceivablePledgingCode'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'AcctsReceivablePledgingCode'
P_BSEG_COM.cession_kz                                                as  AccountsReceivableIsPledged,
cast( P_BSEG_COM.cession_kz as fis_cession_kz_code preserving type ) as  AcctsReceivablePledgingCode,

@ObjectModel.foreignKey.association: '_BusinessProcess'
P_BSEG_COM.prznr               as  BusinessProcess,
//pendays,
//penrc,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_Grant'
P_BSEG_COM.grant_nbr           as  GrantID,
@ObjectModel.foreignKey.association: '_FunctionalArea'
P_BSEG_COM.fkber_long          as  FunctionalArea,
//@Semantics.booleanIndicator
P_BSEG_COM.gmvkz               as  CustomerIsInExecution,
//srtype,
//intreno,
P_BSEG_COM.measure             as  FundedProgram,
P_BSEG_COM.ppa_ex_ind          as  InvcItmIsExcldFrmPromptPaytAct,
P_BSEG_COM.docln               as  LedgerGLLineItem,
@ObjectModel.foreignKey.association: '_Segment'
P_BSEG_COM.segment             as  Segment,
@ObjectModel.foreignKey.association: '_PartnerSegment'
P_BSEG_COM.psegment            as  PartnerSegment,
@ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
P_BSEG_COM.pfkber              as  PartnerFunctionalArea,
@ObjectModel.foreignKey.association: '_HouseBankAccount'
P_BSEG_COM.hktid               as  HouseBankAccount,
P_BSEG_COM.kstar               as  CostElement,
P_BSEG_COM.xlgclr              as ClearingIsLedgerGroupSpecific,
P_BSEG_COM.taxps               as TaxItemAcctgDocItemRef,
P_BSEG_COM.pays_prov           as  PaymentServiceProvider,
P_BSEG_COM.pays_tran           as  PaymentRefByPaytSrvcProvider,
P_BSEG_COM.mndid               as  SEPAMandate,
//xfrge_bseg,
@ObjectModel.foreignKey.association: '_ReferenceDocumentType'
P_BSEG_COM.awtyp               as  ReferenceDocumentType,
P_BSEG_COM.awkey               as  OriginalReferenceDocument,
P_BSEG_COM.awsys               as  ReferenceDocumentLogicalSystem,
P_BSEG_COM.posnr               as  AccountingDocumentItemRef,
//buzei_sender,
@ObjectModel.foreignKey.association: '_FiscalPeriod'
P_BSEG_COM.h_monat             as  FiscalPeriod,
@ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
P_BSEG_COM.h_bstat             as  AccountingDocumentCategory,

P_BSEG_COM.h_budat             as  PostingDate,
P_BSEG_COM.h_bldat             as  DocumentDate,
@ObjectModel.foreignKey.association: '_AccountingDocumentType'
P_BSEG_COM.h_blart             as  AccountingDocumentType,
P_BSEG_COM.netdt               as  NetDueDate,
P_BSEG_COM.sk1dt               as  CashDiscount1DueDate,
P_BSEG_COM.sk2dt               as  CashDiscount2DueDate,
//fqftype,
//lqitem,
@ObjectModel.foreignKey.association: '_OffsettingAccountWithBP'
P_BSEG_COM.gkont               as  OffsettingAccount,
@ObjectModel.foreignKey.association: '_OffsettingAccountType'
P_BSEG_COM.gkart               as  OffsettingAccountType,
@ObjectModel.foreignKey.association: '_OffsettingChartOfAccounts'
P_BSEG_COM.gktopl              as  OffsettingChartOfAccounts,
//ghkon,
//      @ObjectModel.foreignKey.association: '_PartnerFund'
P_BSEG_COM.pgeber              as  PartnerFund,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerGrant'
P_BSEG_COM.pgrant_nbr          as  PartnerGrant,
@ObjectModel.foreignKey.association: '_BudgetPeriod'
P_BSEG_COM.budget_pd           as  BudgetPeriod,
@Analytics.internalName: #LOCAL      
@ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
P_BSEG_COM.pbudget_pd          as  PartnerBudgetPeriod,
P_BSEG_COM.j_1tpbupl           as  BranchCode,
P_BSEG_COM.perop_beg as BillingPeriodOfPerfStartDate,
P_BSEG_COM.perop_end as BillingPeriodOfPerfEndDate, 
//fastpay,
//ignr_ivref,
//fmfgus_key,
//fmxdocnr,
//fmxyear,
//fmxdocln,
//fmxzekkn,
cast( P_BSEG_COM.prodper as jv_prodper_cds preserving type ) as JointVentureProductionDate,

P_BSEG_COM.glo_ref1            as OplAcctgDocItmCntrySpcfcRef1,

P_BSEG_COM.payt_rsn            as PaymentReason,

@Analytics.internalName: #LOCAL      
@ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
P_BSEG_COM.re_bukrs            as CashLedgerCompanyCode,
@Analytics.internalName: #LOCAL      
@ObjectModel.foreignKey.association: '_CashLedgerAccount'
P_BSEG_COM.re_account          as CashLedgerAccount,

@Analytics.internalName: #LOCAL      
@ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
P_BSEG_COM.bdgt_account_cocode as PubSecBudgetAccountCoCode,
@Analytics.internalName: #LOCAL      
@ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
P_BSEG_COM.bdgt_account        as PubSecBudgetAccount,


@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_FinServicesProductGroup'
P_BSEG_COM.FS_PRODUCT_GROUP    as FinancialServicesProductGroup,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_FinancialServicesBranch'
P_BSEG_COM.BRANCH_ID           as FinancialServicesBranch,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_FinancialDataSource'
P_BSEG_COM.DATASOURCE_ID       as FinancialDataSource,               
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_CustomerGroup'
P_BSEG_COM.kdgrp               as CustomerGroup, 
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_CustomerSupplierCountry'      
P_BSEG_COM.land1               as CustomerSupplierCountry, 
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_CustomerSupplierIndustry'         
P_BSEG_COM.brsch               as CustomerSupplierIndustry,


@ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
P_BSEG_COM.h_hwaer             as  CompanyCodeCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
P_BSEG_COM.dmbtr_shl           as  AmountInCompanyCodeCurrency,

// Functional Currency
@ObjectModel.foreignKey.association: '_FunctionalCurrency'
P_BSEG_COM.rfccur as FunctionalCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
P_BSEG_COM.fcsl_shl as AmountInFunctionalCurrency,   

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } kzbtr_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } txbhw_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
P_BSEG_COM.mwsts_shl           as  TaxAmountInCoCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
P_BSEG_COM.hwbas_shl           as  TaxBaseAmountInCoCodeCrcy,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } hwzuz_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
P_BSEG_COM.bdiff_shl           as  ValuationDiffAmtInCoCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
P_BSEG_COM.sknto_shl           as  CashDiscountAmtInCoCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
P_BSEG_COM.dmbt1_shl           as TaxBrkdwnAmount1InCoCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
P_BSEG_COM.dmbt2_shl           as TaxBrkdwnAmount2InCoCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
P_BSEG_COM.dmbt3_shl           as TaxBrkdwnAmount3InCoCodeCrcy,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } blnbt_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
P_BSEG_COM.navhw_shl           as NonDcblTaxAmountInCoCodeCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
P_BSEG_COM.rewrt_shl           as  InvoiceAmtInCoCodeCrcy,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } bonfb_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } nprei_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } rdiff_shl as CurrDiff,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } ppdiff_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } penlc1_shl,

@ObjectModel.foreignKey.association: '_TransactionCurrency'
P_BSEG_COM.h_waers             as  TransactionCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
P_BSEG_COM.wrbtr_shl           as  AmountInTransactionCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
P_BSEG_COM.txbfw_shl           as  OriginalTaxBaseAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
P_BSEG_COM.wmwst_shl           as  TaxAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
P_BSEG_COM.fwbas_shl           as  TaxBaseAmountInTransCrcy,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } fwzuz_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
P_BSEG_COM.qsshb_shl           as  WithholdingTaxBaseAmount,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } gbetr_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
P_BSEG_COM.fdwbt_shl           as  PlannedAmtInTransactionCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
P_BSEG_COM.skfbt_shl           as  CashDiscountBaseAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
P_BSEG_COM.wskto_shl           as  CashDiscountAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
P_BSEG_COM.nebtr_shl           as  NetPaymentAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.wrbt1_shl as TaxBrkdwnAmount1InTransCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.wrbt2_shl as TaxBrkdwnAmount2InTransCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.wrbt3_shl as TaxBrkdwnAmount3InTransCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
P_BSEG_COM.qbshb_shl           as  WithholdingTaxAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
P_BSEG_COM.qsfbt_shl           as  WithholdingTaxExemptionAmt,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.navfw_shl           as NonDcblTaxAmountInTransCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
P_BSEG_COM.rewwr_shl           as  InvoiceAmountInFrgnCurrency,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } bualt_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } sctax_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } sttax_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } penfc_shl,


@ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'
P_BSEG_COM.pswsl               as  BalanceTransactionCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
P_BSEG_COM.pswbt_shl           as  AmountInBalanceTransacCrcy,


@ObjectModel.foreignKey.association: '_AdditionalCurrency1'
P_BSEG_COM.h_hwae2             as  AdditionalCurrency1,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} }
P_BSEG_COM.bdif2_shl           as  ValuationDiffAmtInAddlCrcy1,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } rdif2_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} }
P_BSEG_COM.dmbe2_shl           as  AmountInAdditionalCurrency1,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } dmb21_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } dmb22_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } dmb23_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } 
P_BSEG_COM.mwst2_shl          as TaxAmountInAdditionalCurrency1,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } navh2_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } sknt2_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } txbh2_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } ppdif2_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } penlc2_shl,


@ObjectModel.foreignKey.association: '_AdditionalCurrency2'
P_BSEG_COM.h_hwae3             as  AdditionalCurrency2,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} }
P_BSEG_COM.dmbe3_shl           as  AmountInAdditionalCurrency2,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } dmb31_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } dmb32_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } dmb33_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } 
P_BSEG_COM.mwst3_shl          as TaxAmountInAdditionalCurrency2,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } navh3_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } sknt3_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} }
P_BSEG_COM.bdif3_shl           as  ValuationDiffAmtInAddlCrcy2,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } rdif3_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } txbh3_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } ppdif3_shl,

//@Aggregation.default: #SUM
//@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } penlc3_shl,


@ObjectModel.foreignKey.association: '_PaymentCurrency'
P_BSEG_COM.pycur               as  PaymentCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'PaymentCurrency'} }
P_BSEG_COM.pyamt_shl           as  AmountInPaymentCurrency,

@ObjectModel.foreignKey.association: '_CreditControlAreaCurrency'
P_BSEG_COM.t014_waers          as  CreditControlAreaCurrency,
//@Semantics: { amount : {currencyCode: 'CreditControlAreaCurrency'} } klibt_shl,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CreditControlAreaCurrency'} }
P_BSEG_COM.absbt_shl           as  HedgedAmount,

@ObjectModel.foreignKey.association: '_BaseUnit'
P_BSEG_COM.meins               as  BaseUnit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
P_BSEG_COM.menge               as  Quantity,

@ObjectModel.foreignKey.association: '_GoodsMovementEntryUnit'
P_BSEG_COM.erfme               as  GoodsMovementEntryUnit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'GoodsMovementEntryUnit'} }
P_BSEG_COM.erfmg               as  QuantityInEntryUnit,

@ObjectModel.foreignKey.association: '_PurchasingDocumentPriceUnit'
P_BSEG_COM.bprme               as  PurchasingDocumentPriceUnit,
@Aggregation.default: #SUM
@Semantics: { quantity : {unitOfMeasure: 'PurchasingDocumentPriceUnit'} }
P_BSEG_COM.bpmng               as  PurchaseOrderQty,

//      @Aggregation.default: #NONE   // Is default for Type DEC unsigned and 0 decimals in SADL, in AE it will be treated as characteristic 
@Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
P_BSEG_COM.peinh               as  MaterialPriceUnitQty,

///////////////////////////////////////////////////////////////////////////////
//Absolute Amount (Original BSEG Amounts)
///////////////////////////////////////////////////////////////////////////////
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
P_BSEG_COM.dmbtr               as AbsoluteAmountInCoCodeCrcy ,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.wrbtr               as AbsoluteAmountInTransacCrcy ,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } 
P_BSEG_COM.dmbe2               as AbsltAmtInAdditionalCurrency1,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } 
P_BSEG_COM.dmbe3               as AbsltAmtInAdditionalCurrency2,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } 
P_BSEG_COM.pswbt               as AbsltAmtInBalanceTransacCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
P_BSEG_COM.fcsl               as AbsltAmtInFunctionalCurrency,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'PaymentCurrency'} } 
P_BSEG_COM.pyamt               as AbsltAmountInPaymentCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CreditControlAreaCurrency'} }                                                                                                       
P_BSEG_COM.absbt               as HedgedAbsoluteAmount,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.fdwbt               as PlannedAbsltAmtInTransCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
P_BSEG_COM.sknto               as CashDiscAbsltAmtInCoCodeCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.wskto               as CashDiscountAbsoluteAmount,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.skfbt               as CashDiscountAbsoluteBaseAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
P_BSEG_COM.rewrt               as InvoiceAbsltAmtInCoCodeCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.rewwr               as InvoiceAbsltAmtInFrgnCurrency,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.nebtr               as NetPaymentAbsoluteAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
P_BSEG_COM.navhw               as NonDcblTaxAbsltAmtInCoCodeCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.navfw               as NonDcblTaxAbsltAmtInTransCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
P_BSEG_COM.mwsts               as TaxAbsltAmountInCoCodeCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.wmwst               as TaxAbsoluteAmount,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } 
P_BSEG_COM.mwst2               as TaxAbsltAmtInAddlCurrency1,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } 
P_BSEG_COM.mwst3               as TaxAbsltAmtInAddlCurrency2,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
P_BSEG_COM.hwbas               as TaxAbsltBaseAmountInCoCodeCrcy ,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.fwbas               as TaxAbsltBaseAmountInTransCrcy ,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
P_BSEG_COM.txbhw               as OriglTxAbsltBaseAmountInCCCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.txbfw               as OriginalTaxAbsoluteBaseAmount,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } 
P_BSEG_COM.txbh2               as OriglTxAbsltBaseAmtInAddlCrcy1 ,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } 
P_BSEG_COM.txbh3               as OriglTxAbsltBaseAmtInAddlCrcy2 ,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
P_BSEG_COM.dmbt1               as TaxBrkdwnAbsltAmt1InCoCodeCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
P_BSEG_COM.dmbt2               as TaxBrkdwnAbsltAmt2InCoCodeCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
P_BSEG_COM.dmbt3               as TaxBrkdwnAbsltAmt3InCoCodeCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
P_BSEG_COM.wrbt1               as TaxBrkdwnAbsltAmt1InTransCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
P_BSEG_COM.wrbt2               as TaxBrkdwnAbsltAmt2InTransCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
P_BSEG_COM.wrbt3               as TaxBrkdwnAbsltAmt3InTransCrcy,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.qbshb               as WithholdingTaxAbsoluteAmount ,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.qsshb               as WithholdingTaxAbsoluteBaseAmt ,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_BSEG_COM.qsfbt               as WhldgTaxExemptionAbsltAmount,

@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
P_BSEG_COM.bdiff               as ValnDiffAbsltAmtInCoCodeCrcy,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency1'} } 
P_BSEG_COM.bdif2               as ValnDiffAbsltAmtInAddlCrcy1,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'AdditionalCurrency2'} } 
P_BSEG_COM.bdif3               as ValnDiffAbsltAmtInAddlCrcy2,

P_BSEG_COM.shkzg_unadjusted    as UnadjustedDebitCreditCode,

P_BSEG_COM.rbl_fincg_status    as ReceivableFinancingStatus,

@Aggregation.default: #SUM
P_BSEG_COM.nbritm              as  NumberOfItems,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    'EarmarkedFundsDocument'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'EarmarkedFundsDocument'
P_BSEG_COM.kblnr               as  EarmarkedFunds,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'EarmarkedFundsDocumentItem'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'EarmarkedFundsDocumentItem'
P_BSEG_COM.kblpos              as  EarmarkedFundsItem,

///////////////////////////////////////////////////////////////////////////////
//GST India BSEG Append
///////////////////////////////////////////////////////////////////////////////
P_BSEG_COM.gst_part            as IN_GSTPartner,
P_BSEG_COM.plc_sup             as IN_GSTPlaceOfSupply,
P_BSEG_COM.hsn_sac             as IN_HSNOrSACCode,    
P_BSEG_COM.irn                 as IN_InvoiceReferenceNumber,

///////////////////////////////////////////////////////////////////////////////
//Globalisation Columbia BSEG Append
///////////////////////////////////////////////////////////////////////////////
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
P_BSEG_COM.txbhw_shl           as OriglTaxBaseAmountInCoCodeCrcy,
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
P_BSEG_COM.txbh2_shl           as OriginalTaxBaseAmtInAddlCrcy1,
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
P_BSEG_COM.txbh3_shl           as OriginalTaxBaseAmtInAddlCrcy2, 

P_BSEG_COM.dp_payment_type as DigitalPaymentType,
P_BSEG_COM.dp_trans_id as PaymentByDigitalPaymentService,

_AccountingDocumentCategoryT,
_AccountingDocumentCategory,
_AccountingDocumentType,
_AccountingDocumentTypeText,
_AdditionalCurrency1,
_AdditionalCurrency2,
_AssetTransactionType,
_BalanceTransactionCurrency,
_BaseUnit,
_BudgetPeriod,
_BudgetPeriodText,
_BusinessArea,
_BusinessAreaText,
_BusinessProcess,
_BusinessProcessText,
_CashLedgerAccount,
_CashLedgerCompanyCode,
_ChartOfAccounts,
_ChartOfAccountsText,
_ClearingJrnlEntryFiscalYear,
_ClearingJournalEntry,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ClearingJournalEntry'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ClearingJournalEntry'
_ClearingAccountingDocument,
_CompanyCode,
_CompanyCodeCurrency,
_FunctionalCurrency,
_ControllingArea,
_ControllingAreaText,
_CostCenter,
_CostCenterText,
_CostCtrActivityType,
_CostOriginGroup,
_CreditControlAreaCurrency,
_CurrentCostCenter,
_CurrentProfitCenter,
_Customer,
_CustomerCompany,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_JournalEntryItemOneTimeData'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_JournalEntryItemOneTimeData'
_OneTimeAccountBP,
_JournalEntryItemOneTimeData,
_CustomerText,
_DebitCreditCode,

_PersonWorkAgreement_1,
//@API.element.releaseState: #DEPRECATED
//@API.element.successor:    '_PersonWorkAgreement_1'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PersonWorkAgreement_1'
_Employment,

_FinancialAccountType,
_FinancialAccountTypeText,
_FinancialTransactionType,
_FiscalPeriod,
_FiscalYear,
_FixedAsset,
_FixedAssetText,
_FunctionalArea,
_FunctionalAreaText,
_GLAccountInChartOfAccounts,
_GLAccountInCompanyCode,
_GoodsMovementEntryUnit,
_Grant,
_HouseBank,
_HouseBankAccount,
_HouseBankAccountText,
_InternalOrder,
_InventoryValuationType,
_JournalEntry,
_MasterFixedAsset,
_MasterFixedAssetText,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_Product'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_Product'
_Material,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ProductText'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ProductText'
_MaterialText,
_OffsettingAccount,
_OffsettingAccountType,
_OffsettingAccountTypeText,
_OffsettingAccountWithBP,
_OffsettingChartOfAccounts,
_OffsettingChartOfAccountsText,
_Order,
_PartnerBudgetPeriod,
_PartnerBusinessArea,
_PartnerBusinessAreaText,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerCompany_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerCompany_2' 
_PartnerCompany,
_PartnerCompany_2,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PartnerCompanyText_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerCompanyText_2' 
_PartnerCompanyText,
_PartnerCompanyText_2,
_PartnerFunctionalArea,
_PartnerGrant,
_PartnerProfitCenter,
_PartnerSegment,
_PartnerSegmentText,
_PaymentCurrency,
_PaymentDifferenceReason,
_PaymentDifferenceReasonText,
_Plant,
_PostingKey,
_Product,
_ProductText,
_ProfitCenter,
_ProfitCenterText,
_ProjectNetwork,
_ProjectNetworkText,
_PubSecBudgetAccount,
_PubSecBudgetAccountCoCode,
_PurchasingDocument,
_PurchasingDocumentItem,
_PurchasingDocumentPriceUnit,
_ReferenceDocumentType,

_SalesDoc,
_SalesDocItem,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SalesDoc'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_SalesDoc'
_SalesDocument,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SalesDocItem'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_SalesDocItem'
_SalesDocumentItem,

_Segment,
_SegmentText,
_SpecialGLCode,
_Supplier,
_SupplierCompany,
_SupplierBankDetails,
_SupplierText,
_SupplyingCountry,
_TaxCountry,
_TaxCode,
_TaxType,
_TransactionCurrency,
//@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
_ValuationArea,

_WBSElementBasicData,
//@API.element.releaseState: #DEPRECATED
//@API.element.successor:    '_WBSElementBasicData'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_WBSElementBasicData'
_WBSElementInternalID,

_WBSElementBasicDataText,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_WBSElementBasicDataText'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_WBSElementBasicDataText'
_WBSElementInternalIDText,

_ServiceDocumentType,
_ServiceDocument,
_ServiceDocumentItem,

_FinServicesProductGroup,
_FinancialServicesBranch,
_FinancialDataSource,
_CustomerGroup,
_CustomerSupplierCountry,
_CustomerSupplierIndustry,

//_REObjectByIntFinNumber,

// Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
cast( '' as brgru)  as  GLAccountAuthorizationGroup,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
cast( '' as brgru)  as  SupplierBasicAuthorizationGrp,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
cast( '' as brgru)  as  CustomerBasicAuthorizationGrp,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
cast( '' as brgru)  as  AcctgDocTypeAuthorizationGroup,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
cast( '' as aufart) as  OrderType,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
cast( '' as auart)  as  SalesOrderType,
@API.element.releaseState: #DEPRECATED
//@API.element.successor:    ''
@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: ''
cast( '' as anlkl)  as  AssetClass

}
```
