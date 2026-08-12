---
name: I_GLACCOUNTLINEITEMRAWDATA
description: "GL AccountLINEITEMRAWDATA"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - gl-account
  - item-level
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_GLACCOUNTLINEITEMRAWDATA

**GL AccountLINEITEMRAWDATA**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  | `rldnr` |  |  |
| `CompanyCode` | ✓ | |  | `rbukrs` |  |  |
| `FiscalYear` | ✓ | |  | `gjahr` |  |  |
| `AccountingDocument` | ✓ | |  | `belnr` |  |  |
| `LedgerGLLineItem` | ✓ | |  | `docln` |  |  |
| `LedgerFiscalYear` |  | |  | `ryear` |  |  |
| `GLRecordType` |  | |  | `rrcty` |  |  |
| `JrnlEntrAltvFYConsecutiveID` |  | |  | `DOCNR_LD` |  |  |
| `ChartOfAccounts` |  | |  | `ktopl` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `FinancialTransactionType` |  | |  | `rmvct` |  |  |
| `GLBusinessTransactionType` |  | |  | `vorgn` |  |  |
| `BusinessTransactionCategory` |  | |  | `bttype` |  |  |
| `BusinessTransactionType` |  | |  | `cbttype` |  |  |
| `FinancialClosingStep` |  | |  | `closingstep` |  |  |
| `ControllingBusTransacType` |  | |  | `vrgng` |  |  |
| `ReferenceDocumentType` |  | |  | `awtyp` |  |  |
| `LogicalSystem` |  | |  | `awsys` |  |  |
| `ReferenceDocumentContext` |  | |  | `aworg` |  |  |
| `ReferenceDocument` |  | |  | `awref` |  |  |
| `ReferenceDocumentItem` |  | |  | `cast( P_ACDOCA.awitem as fis_awitem preserving type )` |  |  |
| `ReferenceDocumentItemGroup` |  | |  | `cast( P_ACDOCA.awitgrp as fis_awitgrp preserving type )` |  |  |
| `TransactionSubitem` |  | |  | `subta` |  |  |
| `AccountingNotificationUUID` |  | |  | `ACCTG_NOTIF_UUID` |  |  |
| `OffsettingLedgerGLLineItem` |  | |  | `offstg_docln` |  |  |
| `IsReversal` |  | |  | `xreversing` |  |  |
| `IsReversed` |  | |  | `xreversed` |  |  |
| `ReversalReferenceDocumentType` |  | |  | `awtyp_rev` |  |  |
| `ReversalReferenceDocumentCntxt` |  | |  | `cast( P_ACDOCA.aworg_rev as fis_aworg_rev preserving type )` |  |  |
| `ReversalReferenceDocument` |  | |  | `cast( P_ACDOCA.awref_rev as fis_awref_rev preserving type )` |  |  |
| `ReversalTransactionSubitem` |  | |  | `subta_rev` |  |  |
| `IsSettlement` |  | |  | `xsettling` |  |  |
| `IsSettled` |  | |  | `xsettled` |  |  |
| `PredecessorReferenceDocType` |  | |  | `cast( P_ACDOCA.prec_awtyp as fis_prec_awtyp preserving type )` |  |  |
| `PredecessorReferenceDocCntxt` |  | |  | `cast( P_ACDOCA.prec_aworg as fis_prec_aworg preserving type )` |  |  |
| `PredecessorReferenceDocument` |  | |  | `cast( P_ACDOCA.prec_awref as fis_prec_awref preserving type )` |  |  |
| `PredecessorReferenceDocItem` |  | |  | `cast( P_ACDOCA.prec_awitem as fis_prec_awitem preserving type )` |  |  |
| `PrdcssrJournalEntryCompanyCode` |  | |  | `cast( P_ACDOCA.prec_bukrs as fins_prec_bukrs_gfc preserving type )` |  |  |
| `PrdcssrJournalEntryFiscalYear` |  | |  | `prec_gjahr` |  |  |
| `PredecessorJournalEntry` |  | |  | `cast( P_ACDOCA.prec_belnr as fins_prec_belnr_gfc preserving type )` |  |  |
| `PredecessorJournalEntryItem` |  | |  | `cast( P_ACDOCA.prec_docln as fins_prec_docln_gfc preserving type )` |  |  |
| `SourceReferenceDocumentType` |  | |  | `cast( P_ACDOCA.src_awtyp as fis_src_awtyp preserving type )` |  |  |
| `SourceLogicalSystem` |  | |  | `cast( P_ACDOCA.src_awsys as fis_src_awsys preserving type )` |  |  |
| `SourceReferenceDocumentCntxt` |  | |  | `cast( P_ACDOCA.src_aworg as fis_src_aworg preserving type )` |  |  |
| `SourceReferenceDocument` |  | |  | `cast( P_ACDOCA.src_awref as fis_src_awref preserving type )` |  |  |
| `SourceReferenceDocumentItem` |  | |  | `cast( P_ACDOCA.src_awitem as fis_src_awitem preserving type )` |  |  |
| `SourceReferenceDocSubitem` |  | |  | `cast( P_ACDOCA.src_awsubit as fis_src_awsubit preserving type )` |  |  |
| `IsCommitment` |  | |  | `cast( P_ACDOCA.xcommitment as fis_xcommitment preserving type )` |  |  |
| `JrnlEntryItemObsoleteReason` |  | |  | `obs_reason` |  |  |
| `JournalEntryIsSecondaryEntry` |  | |  | `XSECONDARY` |  |  |
| `JrnlPeriodEndClosingRunLogUUID` |  | |  | `closing_run_id` |  |  |
| `OrganizationalChange` |  | |  | `orgl_change` |  |  |
| `GLAccount` |  | |  | `racct` |  |  |
| `CostCenter` |  | |  | `rcntr` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `FunctionalArea` |  | |  | `rfarea` |  |  |
| `BusinessArea` |  | |  | `rbusa` |  |  |
| `Segment` |  | |  | `segment` |  |  |
| `PartnerCostCenter` |  | |  | `scntr` |  |  |
| `PartnerProfitCenter` |  | |  | `pprctr` |  |  |
| `PartnerFunctionalArea` |  | |  | `sfarea` |  |  |
| `PartnerBusinessArea` |  | |  | `sbusa` |  |  |
| `PartnerCompany` |  | |  | `rassc` |  |  |
| `PartnerSegment` |  | |  | `psegment` |  |  |
| `BalanceTransactionCurrency` |  | |  | `rtcur` |  |  |
| `AmountInBalanceTransacCrcy` |  | |  | `tsl` |  |  |
| `TransactionCurrency` |  | |  | `rwcur` |  |  |
| `AmountInTransactionCurrency` |  | |  | `wsl` |  |  |
| `CompanyCodeCurrency` |  | |  | `rhcur` |  |  |
| `AmountInCompanyCodeCurrency` |  | |  | `hsl` |  |  |
| `GlobalCurrency` |  | |  | `rkcur` |  |  |
| `AmountInGlobalCurrency` |  | |  | `ksl` |  |  |
| `FunctionalCurrency` |  | |  | `rfccur` |  |  |
| `AmountInFunctionalCurrency` |  | |  | `fcsl` |  |  |
| `FreeDefinedCurrency1` |  | |  | `rocur` |  |  |
| `AmountInFreeDefinedCurrency1` |  | |  | `osl` |  |  |
| `FreeDefinedCurrency2` |  | |  | `rvcur` |  |  |
| `AmountInFreeDefinedCurrency2` |  | |  | `vsl` |  |  |
| `FreeDefinedCurrency3` |  | |  | `cast( P_ACDOCA.rbcur as fis_curr3 preserving type )` |  |  |
| `AmountInFreeDefinedCurrency3` |  | |  | `bsl` |  |  |
| `FreeDefinedCurrency4` |  | |  | `cast( P_ACDOCA.rccur as fis_curr4 preserving type )` |  |  |
| `AmountInFreeDefinedCurrency4` |  | |  | `csl` |  |  |
| `FreeDefinedCurrency5` |  | |  | `cast( P_ACDOCA.rdcur as fis_curr5 preserving type )` |  |  |
| `AmountInFreeDefinedCurrency5` |  | |  | `dsl` |  |  |
| `FreeDefinedCurrency6` |  | |  | `cast( P_ACDOCA.recur as fis_curr6 preserving type )` |  |  |
| `AmountInFreeDefinedCurrency6` |  | |  | `esl` |  |  |
| `FreeDefinedCurrency7` |  | |  | `rfcur` |  |  |
| `AmountInFreeDefinedCurrency7` |  | |  | `fsl` |  |  |
| `FreeDefinedCurrency8` |  | |  | `cast( P_ACDOCA.rgcur as fis_curr8 preserving type )` |  |  |
| `AmountInFreeDefinedCurrency8` |  | |  | `gsl` |  |  |
| `FixedAmountInGlobalCrcy` |  | |  | `kfsl` |  |  |
| `GrpValnFixedAmtInGlobCrcy` |  | |  | `cast( P_ACDOCA.kfsl2 as fis_vgcur12_fix2 preserving type )` |  |  |
| `PrftCtrValnFxdAmtInGlobCrcy` |  | |  | `cast( P_ACDOCA.kfsl3 as fis_vgcur12_fix3 preserving type )` |  |  |
| `FixedAmountInCoCodeCrcy` |  | |  | `hfsl` |  |  |
| `FixedAmountInTransCrcy` |  | |  | `wfsl` |  |  |
| `TotalPriceVarcInGlobalCrcy` |  | |  | `psl` |  |  |
| `GrpValnTotPrcVarcInGlobCrcy` |  | |  | `cast( P_ACDOCA.psl2 as fis_vpcur12_2 preserving type )` |  |  |
| `PrftCtrValnTotPrcVarcInGlbCrcy` |  | |  | `cast( P_ACDOCA.psl3 as fis_vpcur12_3 preserving type )` |  |  |
| `FixedPriceVarcInGlobalCrcy` |  | |  | `pfsl` |  |  |
| `GrpValnFixedPrcVarcInGlobCrcy` |  | |  | `cast( P_ACDOCA.pfsl2 as fis_vpfcur12_2 preserving type )` |  |  |
| `PrftCtrValnFxdPrcVarcInGlbCrcy` |  | |  | `cast( P_ACDOCA.pfsl3 as fis_vpfcur12_3 preserving type )` |  |  |
| `ControllingObjectCurrency` |  | |  | `rco_ocur` |  |  |
| `AmountInObjectCurrency` |  | |  | `cast( P_ACDOCA.co_osl as fis_vco_ocur12 preserving type )` |  |  |
| `GrantCurrency` |  | |  | `rgm_ocur` |  |  |
| `AmountInGrantCurrency` |  | |  | `gm_osl` |  |  |
| `BaseUnit` |  | |  | `runit` |  |  |
| `Quantity` |  | |  | `msl` |  |  |
| `FixedQuantity` |  | |  | `cast( P_ACDOCA.mfsl as fis_quan1_12_fix preserving type )` |  |  |
| `CostSourceUnit` |  | |  | `rvunit` |  |  |
| `ValuationQuantity` |  | |  | `cast( P_ACDOCA.vmsl as fis_vquan1_12 preserving type )` |  |  |
| `ValuationFixedQuantity` |  | |  | `cast( P_ACDOCA.vmfsl as fis_vquan1_12_fix preserving type )` |  |  |
| `ReferenceQuantityUnit` |  | |  | `rrunit` |  |  |
| `ReferenceQuantity` |  | |  | `rmsl` |  |  |
| `AdditionalQuantity1Unit` |  | |  | `cast( P_ACDOCA.qunit1 as fis_qunit1 preserving type )` |  |  |
| `AdditionalQuantity1` |  | |  | `cast( P_ACDOCA.quant1 as fis_quan1_l preserving type )` |  |  |
| `AdditionalQuantity2Unit` |  | |  | `cast( P_ACDOCA.qunit2 as fis_qunit2 preserving type )` |  |  |
| `AdditionalQuantity2` |  | |  | `cast( P_ACDOCA.quant2 as fis_quan2_l preserving type )` |  |  |
| `AdditionalQuantity3Unit` |  | |  | `cast( P_ACDOCA.qunit3 as fis_qunit3 preserving type )` |  |  |
| `AdditionalQuantity3` |  | |  | `cast( P_ACDOCA.quant3 as fis_quan3_l preserving type )` |  |  |
| `IncmpltSummableValnQtyUnt` |  | |  | `CO_MEINH` |  |  |
| `IncmpltSummableValnQty` |  | |  | `CO_MEGBTR` |  |  |
| `IncmpltSummableValnFxdQty` |  | |  | `CO_MEFBTR` |  |  |
| `DebitCreditCode` |  | |  | `drcrk` |  |  |
| `FiscalPeriod` |  | |  | `poper` |  |  |
| `FiscalYearVariant` |  | |  | `periv` |  |  |
| `FiscalYearPeriod` |  | |  | `fiscyearper` |  |  |
| `PostingDate` |  | |  | `budat` |  |  |
| `DocumentDate` |  | |  | `bldat` |  |  |
| `AccountingDocumentType` |  | |  | `blart` |  |  |
| `AccountingDocumentItem` |  | |  | `buzei` |  |  |
| `AssignmentReference` |  | |  | `zuonr` |  |  |
| `AccountingDocumentCategory` |  | |  | `bstat` |  |  |
| `JournalEntryItemCategory` |  | |  | `linetype` |  |  |
| `PostingKey` |  | |  | `bschl` |  |  |
| `TransactionTypeDetermination` |  | |  | `ktosl` |  |  |
| `SubLedgerAcctLineItemType` |  | |  | `slalittype` |  |  |
| `AccountingDocCreatedByUser` |  | |  | `usnam` |  |  |
| `LastChangeDateTime` |  | |  | `cast( (case when P_ACDOCA.last_change_datetime <> 0 then P_ACDOCA.last_change_datetime when P_ACDOCA.last_change_datetime = 0 then P_ACDOCA.timestamp end) as fis_lastchange_datetime preserving type )` |  |  |
| `CreationDateTime` |  | |  | `cast( P_ACDOCA.timestamp as fis_creation_datetime preserving type )` |  |  |
| `CreationDate` |  | |  | `cast(substring( cast(P_ACDOCA.timestamp as abap.char(30)) , 1 , 8) as fis_cpdat)` |  |  |
| `EliminationProfitCenter` |  | |  | `cast( P_ACDOCA.eprctr as fis_eprctr preserving type )` |  |  |
| `OriginObjectType` |  | |  | `rhoart` |  |  |
| `GLAccountType` |  | |  | `glaccount_type` |  |  |
| `AlternativeGLAccount` |  | |  | `cast(P_ACDOCA.lokkt as fis_alternativeglaccount preserving type )` |  |  |
| `CountryChartOfAccounts` |  | |  | `ktop2` |  |  |
| `ItemIsSplit` |  | |  | `cast( P_ACDOCA.xsplitmod as xsplitmod_acd preserving type )` |  |  |
| `ConsolidationUnit` |  | |  | `rbunit` |  |  |
| `PartnerConsolidationUnit` |  | |  | `rbuptr` |  |  |
| `Company` |  | |  | `rcomp` |  |  |
| `ConsolidationChartOfAccounts` |  | |  | `ritclg` |  |  |
| `CnsldtnFinancialStatementItem` |  | |  | `ritem` |  |  |
| `CnsldtnSubitemCategory` |  | |  | `sityp` |  |  |
| `CnsldtnSubitem` |  | |  | `subit` |  |  |
| `InvoiceReference` |  | |  | `rebzg` |  |  |
| `InvoiceReferenceFiscalYear` |  | |  | `rebzj` |  |  |
| `FollowOnDocumentType` |  | |  | `cast( P_ACDOCA.rebzt as fis_rebzt preserving type )` |  |  |
| `InvoiceItemReference` |  | |  | `rebzz` |  |  |
| `ReferencePurchaseOrderCategory` |  | |  | `rbest` |  |  |
| `PurchasingDocument` |  | |  | `ebeln` |  |  |
| `PurchasingDocumentItem` |  | |  | `ebelp` |  |  |
| `AccountAssignmentNumber` |  | |  | `cast( P_ACDOCA.zekkn as fis_dzekkn preserving type )` |  |  |
| `DocumentItemText` |  | |  | `sgtxt` |  |  |
| `SalesDocument` |  | |  | `cast(P_ACDOCA.kdauf as vbeln_va preserving type)` |  |  |
| `SalesDocumentItem` |  | |  | `cast(P_ACDOCA.kdpos as posnr_va preserving type)` |  |  |
| `Product` |  | |  | `cast (P_ACDOCA.matnr as productnumber)` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `Supplier` |  | |  | `lifnr` |  |  |
| `Customer` |  | |  | `kunnr` |  |  |
| `ServicesRenderedDate` |  | |  | `fbuda` |  |  |
| `PerformancePeriodStartDate` |  | |  | `perop_beg` |  |  |
| `PerformancePeriodEndDate` |  | |  | `perop_end` |  |  |
| `ConditionContract` |  | |  | `coco_num` |  |  |
| `ExchangeRateDate` |  | |  | `wwert` |  |  |
| `ComponentBreakdown` |  | |  | `cast( P_ACDOCA.ucb_id as fis_fucb_id preserving type )` |  |  |
| `CompBreakdownScaleNumerator` |  | |  | `cast( P_ACDOCA.ucb_scale_numerator as fin_fucb_scale_numerator preserving type )` |  |  |
| `FinancialAccountType` |  | |  | `koart` |  |  |
| `SpecialGLCode` |  | |  | `umskz` |  |  |
| `TaxCode` |  | |  | `mwskz` |  |  |
| `TaxCountry` |  | |  | `tax_country` |  |  |
| `HouseBank` |  | |  | `hbkid` |  |  |
| `HouseBankAccount` |  | |  | `hktid` |  |  |
| `IsOpenItemManaged` |  | |  | `xopvw` |  |  |
| `ClearingDate` |  | |  | `augdt` |  |  |
| `ClearingDocFiscalYear` |  | |  | `cast( P_ACDOCA.auggj as fis_auggj_no_conv_depre preserving type )` |  |  |
| `ClearingAccountingDocument` |  | |  | `cast( P_ACDOCA.augbl as fis_augbl_depre preserving type )` |  |  |
| `ClearingJournalEntryFiscalYear` |  | |  | `auggj` |  |  |
| `ClearingJournalEntry` |  | |  | `augbl` |  |  |
| `ValueDate` |  | |  | `valut` |  |  |
| `GeneralLedgerAgingScope` |  | |  | `AGING` |  |  |
| `GeneralLedgerAgingIncrement` |  | |  | `AGING_INCRMNT` |  |  |
| `AssetDepreciationArea` |  | |  | `afabe` |  |  |
| `MasterFixedAsset` |  | |  | `anln1` |  |  |
| `FixedAsset` |  | |  | `anln2` |  |  |
| `AssetValueDate` |  | |  | `bzdat` |  |  |
| `AssetTransactionType` |  | |  | `anbwa` |  |  |
| `AssetAcctTransClassfctn` |  | |  | `movcat` |  |  |
| `DepreciationFiscalPeriod` |  | |  | `depr_period` |  |  |
| `GroupMasterFixedAsset` |  | |  | `anlgr` |  |  |
| `GroupFixedAsset` |  | |  | `anlgr2` |  |  |
| `AssetClass` |  | |  | `anlkl` |  |  |
| `PartnerMasterFixedAsset` |  | |  | `panl1` |  |  |
| `PartnerFixedAsset` |  | |  | `panl2` |  |  |
| `CostEstimate` |  | |  | `kalnr` |  |  |
| `InventorySpecialStockValnType` |  | |  | `cast( P_ACDOCA.kzbws as fis_inventoryspclstockvalntype preserving type )` |  |  |
| `IsSupplierStockValuation` |  | |  | `cast( P_ACDOCA.xobew as fis_mlxobew preserving type )` |  |  |
| `InventorySpecialStockType` |  | |  | `cast( P_ACDOCA.sobkz as fis_inventoryspecialstocktype preserving type )` |  |  |
| `InventorySpclStkSalesDocument` |  | |  | `cast( P_ACDOCA.mat_kdauf as fis_mlmat_kdauf preserving type )` |  |  |
| `InventorySpclStkSalesDocItm` |  | |  | `cast( P_ACDOCA.mat_kdpos as fis_mlmat_kdpos preserving type )` |  |  |
| `InvtrySpclStockWBSElmntIntID` |  | |  | `cast( P_ACDOCA.mat_pspnr as fis_invspstock_wbsint_no_conv preserving type )` |  |  |
| `InventorySpclStockWBSElement` |  | |  | `cast( P_ACDOCA.mat_ps_posid as fis_invspstock_wbs_no_conv preserving type )` |  |  |
| `InventorySpecialStockSupplier` |  | |  | `mat_lifnr` |  |  |
| `InventoryValuationType` |  | |  | `cast( P_ACDOCA.bwtar as fis_bwtar_d preserving type )` |  |  |
| `ValuationArea` |  | |  | `bwkey` |  |  |
| `MaterialLedgerProcessType` |  | |  | `cast(P_ACDOCA.mlptyp as fml_process_type preserving type )` |  |  |
| `MaterialLedgerCategory` |  | |  | `cast(P_ACDOCA.mlcateg as fml_category preserving type )` |  |  |
| `SlsPriceAmountInCoCodeCrcy` |  | |  | `cast(P_ACDOCA.hvkwrt as fis_lcrcy_sp_value preserving type )` |  |  |
| `ProductPriceControl` |  | |  | `cast(P_ACDOCA.vprsv as fml_price_control preserving type )` |  |  |
| `ProcurementAlternative` |  | |  | `cast( P_ACDOCA.qsbvalt as fis_ml_qsbvalt preserving type )` |  |  |
| `ProductionProcess` |  | |  | `cast( P_ACDOCA.qsprocess as fis_ml_qsprocess preserving type )` |  |  |
| `CurPlanProjSlsOrdValnStrategy` |  | |  | `lbwst` |  |  |
| `SenderCompanyCode` |  | |  | `cast( P_ACDOCA.bukrs_sender as fis_bukrs_sender preserving type )` |  |  |
| `SenderGLAccount` |  | |  | `racct_sender` |  |  |
| `SenderAccountAssignment` |  | |  | `cast( P_ACDOCA.accas_sender as fis_accas_sender preserving type )` |  |  |
| `SenderAccountAssignmentType` |  | |  | `cast( P_ACDOCA.accasty_sender as fis_accasty_sender preserving type )` |  |  |
| `ControllingObject` |  | |  | `cast( P_ACDOCA.objnr as fis_objnr preserving type)` |  |  |
| `ControllingKeySubNumber` |  | |  | `hrkft` |  |  |
| `CostOriginGroup` |  | |  | `hkgrp` |  |  |
| `OriginSenderObject` |  | |  | `uspob` |  |  |
| `ControllingDebitCreditCode` |  | |  | `cast( P_ACDOCA.co_belkz as fis_co_belkz preserving type )` |  |  |
| `OriginCtrlgDebitCreditCode` |  | |  | `co_beknz` |  |  |
| `ControllingObjectDebitType` |  | |  | `cast( P_ACDOCA.beltp as fis_bp_inout preserving type )` |  |  |
| `QuantityIsIncomplete` |  | |  | `muvflg` |  |  |
| `SettlementDistributionRuleGrp` |  | |  | `bureg` |  |  |
| `OffsettingAccount` |  | |  | `gkont` |  |  |
| `OffsettingAccountType` |  | |  | `cast( P_ACDOCA.gkoar as fis_gkoar preserving type )` |  |  |
| `OffsettingChartOfAccounts` |  | |  | `case P_ACDOCA.gkoar when 'D' then cast (' ' as fis_offsettingktopl preserving type ) when 'K' then cast (' ' as fis_offsettingktopl preserving type ) else cast( P_ACDOCA.ktopl as fis_offsettingktopl preserving type ) end` |  |  |
| `LineItemIsCompleted` |  | |  | `erlkz` |  |  |
| `PersonnelNumber` |  | |  | `pernr` |  |  |
| `ProfitabilitySegment` |  | |  | `paobjnr` |  |  |
| `ControllingObjectClass` |  | |  | `scope` |  |  |
| `PartnerCompanyCode` |  | |  | `cast( P_ACDOCA.pbukrs as fis_pbukrs preserving type )` |  |  |
| `PartnerControllingObjectClass` |  | |  | `pscope` |  |  |
| `OriginProfitCenter` |  | |  | `uprctr` |  |  |
| `OriginOrder` |  | |  | `aufnr_org` |  |  |
| `OriginCostCtrActivityType` |  | |  | `ulstar` |  |  |
| `OriginCostCenter` |  | |  | `ukostl` |  |  |
| `OriginProduct` |  | |  | `UMATNR` |  |  |
| `VarianceOriginGLAccount` |  | |  | `VARC_UACCT` |  |  |
| `AccountAssignment` |  | |  | `accas` |  |  |
| `AccountAssignmentType` |  | |  | `accasty` |  |  |
| `CostCtrActivityType` |  | |  | `lstar` |  |  |
| `OrderID` |  | |  | `aufnr` |  |  |
| `OrderCategory` |  | |  | `autyp` |  |  |
| `WBSElementInternalID` |  | |  | `cast( P_ACDOCA.ps_psp_pnr as fis_wbsint_no_conv preserving type )` |  |  |
| `WBSElement` |  | |  | `cast( P_ACDOCA.ps_posid as fis_wbs_no_conv preserving type )` |  |  |
| `PartnerWBSElementInternalID` |  | |  | `cast( P_ACDOCA.pps_psp_pnr as fis_partner_wbsint_no_conv preserving type )` |  |  |
| `PartnerWBSElement` |  | |  | `cast( P_ACDOCA.pps_posid as fis_partner_wbs_no_conv preserving type )` |  |  |
| `ProjectInternalID` |  | |  | `cast( P_ACDOCA.ps_prj_pnr as fis_projectint_no_conv preserving type )` |  |  |
| `Project` |  | |  | `cast( P_ACDOCA.ps_pspid as fis_project_no_conv preserving type )` |  |  |
| `PartnerProjectInternalID` |  | |  | `cast( P_ACDOCA.pps_prj_pnr as fis_part_projectint_no_conv preserving type )` |  |  |
| `PartnerProject` |  | |  | `cast( P_ACDOCA.pps_pspid as fis_part_project_no_conv preserving type )` |  |  |
| `OperatingConcern` |  | |  | `erkrs` |  |  |
| `ProjectNetwork` |  | |  | `nplnr` |  |  |
| `RelatedNetworkActivity` |  | |  | `nplnr_vorgn` |  |  |
| `BusinessProcess` |  | |  | `prznr` |  |  |
| `CostObject` |  | |  | `kstrg` |  |  |
| `BillableControl` |  | |  | `bemot` |  |  |
| `CostAnalysisResource` |  | |  | `rsrce` |  |  |
| `CustomerServiceNotification` |  | |  | `cast( P_ACDOCA.qmnum as fis_qmnum preserving type )` |  |  |
| `ServiceDocumentType` |  | |  | `service_doc_type` |  |  |
| `ServiceDocument` |  | |  | `service_doc_id` |  |  |
| `ServiceDocumentItem` |  | |  | `service_doc_item_id` |  |  |
| `PartnerServiceDocumentType` |  | |  | `cast( P_ACDOCA.pservice_doc_type as fis_psrvdoc_type preserving type )` |  |  |
| `PartnerServiceDocument` |  | |  | `cast( P_ACDOCA.pservice_doc_id as fis_psrvdoc_id preserving type )` |  |  |
| `PartnerServiceDocumentItem` |  | |  | `cast( P_ACDOCA.pservice_doc_item_id as fis_psrvdoc_item_id preserving type )` |  |  |
| `ServiceContractType` |  | |  | `service_contract_type` |  |  |
| `ServiceContract` |  | |  | `service_contract_id` |  |  |
| `ServiceContractItem` |  | |  | `service_contract_item_id` |  |  |
| `BusinessSolutionOrder` |  | |  | `solution_order_id` |  |  |
| `BusinessSolutionOrderItem` |  | |  | `solution_order_item_id` |  |  |
| `ProviderContract` |  | |  | `vtkey` |  |  |
| `ProviderContractItem` |  | |  | `vtpos` |  |  |
| `RevenueAccountingContract` |  | |  | `ra_contract_id` |  |  |
| `PerformanceObligation` |  | |  | `ra_pob_id` |  |  |
| `TimeSheetOvertimeCategory` |  | |  | `overtimecat` |  |  |
| `PartnerAccountAssignment` |  | |  | `paccas` |  |  |
| `PartnerAccountAssignmentType` |  | |  | `paccasty` |  |  |
| `StstclAccountAssignmentType1` |  | |  | `co_accasty_n1` |  |  |
| `StstclAccountAssignmentType2` |  | |  | `co_accasty_n2` |  |  |
| `StstclAccountAssignmentType3` |  | |  | `co_accasty_n3` |  |  |
| `WorkPackage` |  | |  | `cast( P_ACDOCA.ps_posid as /cpd/plan_item_id )` |  |  |
| `WorkItem` |  | |  | `work_item_id` |  |  |
| `PartnerCostCtrActivityType` |  | |  | `plstar` |  |  |
| `PartnerOrder` |  | |  | `paufnr` |  |  |
| `PartnerOrderCategory` |  | |  | `pautyp` |  |  |
| `PartnerSalesDocument` |  | |  | `pkdauf` |  |  |
| `PartnerSalesDocumentItem` |  | |  | `pkdpos` |  |  |
| `PartnerProjectNetwork` |  | |  | `cast( P_ACDOCA.pnplnr as fis_par_npln preserving type )` |  |  |
| `PartnerProjectNetworkActivity` |  | |  | `pnplnr_vorgn` |  |  |
| `PartnerBusinessProcess` |  | |  | `cast( P_ACDOCA.pprznr as fis_par_prznr preserving type )` |  |  |
| `PartnerCostObject` |  | |  | `pkstrg` |  |  |
| `ControllingDocumentItem` |  | |  | `cast( P_ACDOCA.co_buzei as co_buzei_acd preserving type )` |  |  |
| `VarianceOriginGroup` |  | |  | `varc_hkgrp` |  |  |
| `BillingDocumentType` |  | |  | `fkart` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldProduct` |  | |  | `matnr_copa` |  |  |
| `SoldProductGroup` |  | |  | `matkl` |  |  |
| `CustomerGroup` |  | |  | `kdgrp` |  |  |
| `CustomerSupplierCountry` |  | |  | `cast( P_ACDOCA.land1 as fis_land1_gp preserving type )` |  |  |
| `CustomerSupplierIndustry` |  | |  | `cast( P_ACDOCA.brsch as fis_brsch preserving type )` |  |  |
| `SalesDistrict` |  | |  | `bzirk` |  |  |
| `BillToParty` |  | |  | `kunre` |  |  |
| `ShipToParty` |  | |  | `kunwe` |  |  |
| `CustomerSupplierCorporateGroup` |  | |  | `cast( P_ACDOCA.konzs as fis_konzs preserving type )` |  |  |
| `CashLedgerCompanyCode` |  | |  | `re_bukrs` |  |  |
| `CashLedgerAccount` |  | |  | `re_account` |  |  |
| `FinancialManagementArea` |  | |  | `fikrs` |  |  |
| `CommitmentItem` |  | |  | `fipex` |  |  |
| `FundsCenter` |  | |  | `fistl` |  |  |
| `FundedProgram` |  | |  | `measure` |  |  |
| `Fund` |  | |  | `rfund` |  |  |
| `GrantID` |  | |  | `rgrant_nbr` |  |  |
| `BudgetPeriod` |  | |  | `rbudget_pd` |  |  |
| `PartnerFund` |  | |  | `sfund` |  |  |
| `PartnerGrant` |  | |  | `sgrant_nbr` |  |  |
| `PartnerBudgetPeriod` |  | |  | `cast( P_ACDOCA.sbudget_pd as fis_fm_pbudget_period preserving type )` |  |  |
| `PubSecBudgetAccount` |  | |  | `bdgt_account` |  |  |
| `PubSecBudgetAccountCoCode` |  | |  | `bdgt_account_cocode` |  |  |
| `PubSecBudgetCnsmpnDate` |  | |  | `bdgt_cnsmpn_date` |  |  |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  | `bdgt_cnsmpn_period` |  |  |
| `PubSecBudgetCnsmpnFsclYear` |  | |  | `bdgt_cnsmpn_year` |  |  |
| `PubSecBudgetIsRelevant` |  | |  | `bdgt_relevant` |  |  |
| `PubSecBudgetCnsmpnType` |  | |  | `bdgt_cnsmpn_type` |  |  |
| `PubSecBudgetCnsmpnAmtType` |  | |  | `bdgt_cnsmpn_amount_type` |  |  |
| `SponsoredProgram` |  | |  | `rsponsored_prog` |  |  |
| `SponsoredClass` |  | |  | `rsponsored_class` |  |  |
| `GteeMBudgetValidityNumber` |  | |  | `rbdgt_vldty_nbr` |  |  |
| `EarmarkedFundsDocument` |  | |  | `kblnr` |  |  |
| `EarmarkedFundsDocumentItem` |  | |  | `kblpos` |  |  |
| `FinancialServicesProductGroup` |  | |  | `FS_PRODUCT_GROUP` |  |  |
| `FinancialServicesBranch` |  | |  | `BRANCH_ID` |  |  |
| `FinancialDataSource` |  | |  | `DATASOURCE_ID` |  |  |
| `JointVenture` |  | |  | `vname` |  |  |
| `JointVentureEquityGroup` |  | |  | `cast( P_ACDOCA.egrup as jv_egroup_cds preserving type )` |  |  |
| `JointVentureCostRecoveryCode` |  | |  | `cast( P_ACDOCA.recid as jv_recind_cds preserving type )` |  |  |
| `JointVenturePartner` |  | |  | `cast( P_ACDOCA.vptnr as jv_part_cds preserving type )` |  |  |
| `JointVentureBillingType` |  | |  | `cast( P_ACDOCA.btype as jv_bilind_cds preserving type )` |  |  |
| `JointVentureEquityType` |  | |  | `cast( P_ACDOCA.etype as jv_etype_cds preserving type )` |  |  |
| `JointVentureProductionDate` |  | |  | `cast( P_ACDOCA.prodper as jv_prodper_cds preserving type )` |  |  |
| `JointVentureBillingDate` |  | |  | `cast( P_ACDOCA.billm as jv_billm_cds preserving type )` |  |  |
| `JointVentureOperationalDate` |  | |  | `cast( P_ACDOCA.pom as jv_pom_cds preserving type )` |  |  |
| `CutbackRun` |  | |  | `cast( P_ACDOCA.cbrunid as jv_cbrunid_cds preserving type )` |  |  |
| `JointVentureAccountingActivity` |  | |  | `cast( P_ACDOCA.jvactivity as jv_activity_cds preserving type )` |  |  |
| `PartnerVenture` |  | |  | `cast( P_ACDOCA.pvname as jv_pvname_cds preserving type )` |  |  |
| `PartnerEquityGroup` |  | |  | `cast( P_ACDOCA.pegrup as jv_pegrup_cds preserving type )` |  |  |
| `SenderCostRecoveryCode` |  | |  | `cast( P_ACDOCA.s_recind as jv_srecind_cds preserving type )` |  |  |
| `CutbackAccount` |  | |  | `cast( P_ACDOCA.cbracct as jv_cbracct_cds preserving type )` |  |  |
| `CutbackCostObject` |  | |  | `cast( P_ACDOCA.cbobjnr as jv_cbobjnr_cds preserving type )` |  |  |
| `REBusinessEntity` |  | |  | `SWENR` |  |  |
| `RealEstateBuilding` |  | |  | `SGENR` |  |  |
| `RealEstateProperty` |  | |  | `SGRNR` |  |  |
| `RERentalObject` |  | |  | `SMENR` |  |  |
| `RealEstateContract` |  | |  | `RECNNR` |  |  |
| `REServiceChargeKey` |  | |  | `snksl` |  |  |
| `RESettlementUnitID` |  | |  | `sempsl` |  |  |
| `SettlementReferenceDate` |  | |  | `cast( P_ACDOCA.dabrz as fis_dabrbez preserving type )` |  |  |
| `REPartnerBusinessEntity` |  | |  | `pswenr` |  |  |
| `RealEstatePartnerBuilding` |  | |  | `psgenr` |  |  |
| `RealEstatePartnerProperty` |  | |  | `psgrnr` |  |  |
| `REPartnerRentalObject` |  | |  | `psmenr` |  |  |
| `RealEstatePartnerContract` |  | |  | `precnnr` |  |  |
| `REPartnerServiceChargeKey` |  | |  | `psnksl` |  |  |
| `REPartnerSettlementUnitID` |  | |  | `psempsl` |  |  |
| `PartnerSettlementReferenceDate` |  | |  | `pdabrz` |  |  |
| `AccrualObjectType` |  | |  | `acrobjtype` |  |  |
| `AccrualObjectLogicalSystem` |  | |  | `acrlogsys` |  |  |
| `AccrualObject` |  | |  | `acrobj_id` |  |  |
| `AccrualSubobject` |  | |  | `acrsobj_id` |  |  |
| `AccrualItemType` |  | |  | `acritmtype` |  |  |
| `AccrualReferenceObject` |  | |  | `acrrefobj_id` |  |  |
| `AccrualValueDate` |  | |  | `acrvaldat` |  |  |
| `FinancialValuationObjectType` |  | |  | `cast( P_ACDOCA.valobjtype as fis_val_obj_type preserving type )` |  |  |
| `FinancialValuationObject` |  | |  | `cast( P_ACDOCA.valobj_id as fis_val_obj_id preserving type )` |  |  |
| `FinancialValuationSubobject` |  | |  | `cast( P_ACDOCA.valsobj_id as fis_val_subobj_id preserving type )` |  |  |
| `NetDueDate` |  | |  | `netdt` |  |  |
| `CreditRiskClass` |  | |  | `risk_class` |  |  |
| `WorkCenterInternalID` |  | |  | `arbid` |  |  |
| `OrderOperation` |  | |  | `vornr` |  |  |
| `OrderItem` |  | |  | `aufps` |  |  |
| `PartnerOrderItem` |  | |  | `paufps` |  |  |
| `OrderSuboperation` |  | |  | `uvorn` |  |  |
| `Equipment` |  | |  | `equnr` |  |  |
| `FunctionalLocation` |  | |  | `tplnr` |  |  |
| `Assembly` |  | |  | `istru` |  |  |
| `MaintenanceActivityType` |  | |  | `ilart` |  |  |
| `MaintenanceOrderPlanningCode` |  | |  | `plknz` |  |  |
| `MaintPriorityType` |  | |  | `artpr` |  |  |
| `MaintPriority` |  | |  | `priok` |  |  |
| `SuperiorOrder` |  | |  | `maufnr` |  |  |
| `ProductGroup` |  | |  | `cast( P_ACDOCA.matkl_mm as fis_matkl_mm preserving type )` |  |  |
| `MaintenanceOrderIsPlanned` |  | |  | `planned_parts_work` |  |  |
| `OriginOrderOperation` |  | |  | `vornr_org` |  |  |
| `JrnlEntryItemMigrationSource` |  | |  | `mig_source` |  |  |
| `_JournalEntry` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | | | |
| `_FiscalPeriodForVariant` | | ✓ | | | | |
| `_FiscalYearPeriodForVariant` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_FiscalCalendarDate` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_BalanceTransactionCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_FunctionalCurrency` | | ✓ | | | | |
| `_FreeDefinedCurrency1` | | ✓ | | | | |
| `_FreeDefinedCurrency2` | | ✓ | | | | |
| `_FreeDefinedCurrency3` | | ✓ | | | | |
| `_FreeDefinedCurrency4` | | ✓ | | | | |
| `_FreeDefinedCurrency5` | | ✓ | | | | |
| `_FreeDefinedCurrency6` | | ✓ | | | | |
| `_FreeDefinedCurrency7` | | ✓ | | | | |
| `_FreeDefinedCurrency8` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_CostSourceUnit` | | ✓ | | | | |
| `_AdditionalQuantity1Unit` | | ✓ | | | | |
| `_AdditionalQuantity2Unit` | | ✓ | | | | |
| `_AdditionalQuantity3Unit` | | ✓ | | | | |
| `_ReferenceQuantityUnit` | | ✓ | | | | |
| `_IncmpltSummableValnQtyUnt` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompany` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_ProductGroup_2` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_SoldProductGroup_2` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_OriginOrder` | | ✓ | | | | |
| `_CostAnalysisResource` | | ✓ | | | | |
| `_FinancialTransactionType` | | ✓ | | | | |
| `_BusinessTransactionCategory` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_ReferenceDocumentType` | | ✓ | | | | |
| `_PredecessorReferenceDocType` | | ✓ | | | | |
| `_PartnerCostCenter` | | ✓ | | | | |
| `_PartnerProfitCenter` | | ✓ | | | | |
| `_PartnerBusinessArea` | | ✓ | | | | |
| `_PartnerFunctionalArea` | | ✓ | | | | |
| `_PartnerCompanyCode` | | ✓ | | | | |
| `_PartnerSegment` | | ✓ | | | | |
| `_AccountingDocumentCategory` | | ✓ | | | | |
| `_PostingKey` | | ✓ | | | | |
| `_SubLedgerAccLineItemType` | | ✓ | | | | |
| `_EliminationProfitCenter` | | ✓ | | | | |
| `_GLAccountType` | | ✓ | | | | |
| `_OffsettingAccountType` | | ✓ | | | | |
| `_AlternativeGLAccount` | | ✓ | | | | |
| `_OffsettingAccount` | | ✓ | | | | |
| `_OffsettingChartOfAccounts` | | ✓ | | | | |
| `_CountryChartOfAccounts` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_TaxCode` | | ✓ | | | | |
| `_TaxCountry` | | ✓ | | | | |
| `_ClearingAccountingDocument` | | ✓ | | | | |
| `_ClearingJrnlEntryFiscalYear` | | ✓ | | | | |
| `_ClearingJournalEntry` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_GroupMasterFixedAsset` | | ✓ | | | | |
| `_PartnerMasterFixedAsset` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_GroupFixedAsset` | | ✓ | | | | |
| `_PartnerFixedAsset` | | ✓ | | | | |
| `_BusinessProcess` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_PartnerOrder` | | ✓ | | | | |
| `_PartnerOrderCategory` | | ✓ | | | | |
| `_PartnerSalesDocument` | | ✓ | | | | |
| `_PartnerSalesDocumentItem` | | ✓ | | | | |
| `_PartnerBusinessProcess` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_OriginProduct` | | ✓ | | | | |
| `_InventorySpecialStockValnType` | | ✓ | | | | |
| `_InventorySpclStockValnType` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_InventorySpclStkSalesDocument` | | ✓ | | | | |
| `_InventorySpclStkSalesDocItm` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntBasic` | | ✓ | | | | |
| `_InvtrySpclStkWBSElmntBscData` | | ✓ | | | | |
| `_InventorySpecialStockSupplier` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_ControllingDebitCreditCode` | | ✓ | | | | |
| `_OriginCtrlgDebitCreditCode` | | ✓ | | | | |
| `_OriginSenderObject` | | ✓ | | | | |
| `_ControllingObjectClass` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_PartnerControllingObjectClass` | | ✓ | | | | |
| `_OriginCostCenter` | | ✓ | | | | |
| `_OriginProfitCenter` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_OriginCostCtrActivityType` | | ✓ | | | | |
| `_OrderCategory` | | ✓ | | | | |
| `_MovementCategory` | | ✓ | | | | |
| `_AssetTransactionType` | | ✓ | | | | |
| `_CostOriginGroup` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_OperatingConcern` | | ✓ | | | | |
| `_ValuationArea` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_BillableControl` | | ✓ | | | | |
| `_ConditionContract` | | ✓ | | | | |
| `_MaintenanceOrder` | | ✓ | | | | |
| `_MaintenanceOrderOperation` | | ✓ | | | | |
| `_MaintenanceOrderSubOperation` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_Assembly` | | ✓ | | | | |
| `_MaintenanceActivityType` | | ✓ | | | | |
| `_WorkPackage` | | ✓ | | | | |
| `_WorkPackageWorkItem` | | ✓ | | | | |
| `_TimeSheetOvertimeCat` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceDocumentItem` | | ✓ | | | | |
| `_ServiceContractType` | | ✓ | | | | |
| `_ServiceContract` | | ✓ | | | | |
| `_ServiceContractItem` | | ✓ | | | | |
| `_PartnerServiceDocumentType` | | ✓ | | | | |
| `_PartnerServiceDocument` | | ✓ | | | | |
| `_PartnerServiceDocumentItem` | | ✓ | | | | |
| `_ProjectBasicData` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_PartnerProjectBasicData` | | ✓ | | | | |
| `_PartnerWBSElementBasicData` | | ✓ | | | | |
| `_AccrualObjectType` | | ✓ | | | | |
| `_AccrualObject` | | ✓ | | | | |
| `_AccrualSubobject` | | ✓ | | | | |
| `_AccrualItemType` | | ✓ | | | | |
| `_CreditRiskClass` | | ✓ | | | | |
| `_FinValuationObjectType` | | ✓ | | | | |
| `_SemTagGLAccount` | | ✓ | | | | |
| `_CashLedgerCompanyCode` | | ✓ | | | | |
| `_CashLedgerAccount` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_FundsCenter` | | ✓ | | | | |
| `_FundedProgram` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_BudgetPeriod` | | ✓ | | | | |
| `_PartnerFund` | | ✓ | | | | |
| `_PartnerGrant` | | ✓ | | | | |
| `_PartnerBudgetPeriod` | | ✓ | | | | |
| `_PubSecBudgetAccountCoCode` | | ✓ | | | | |
| `_PubSecBudgetAccount` | | ✓ | | | | |
| `_SponsoredProgram` | | ✓ | | | | |
| `_SponsoredClass` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnDate` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnFsclPeriod` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnFsclYear` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnType` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnAmtType` | | ✓ | | | | |
| `_ConsolidationUnit` | | ✓ | | | | |
| `_PartnerConsolidationUnit` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_ConsolidationChartOfAccounts` | | ✓ | | | | |
| `_CnsldtnFinancialStatementItem` | | ✓ | | | | |
| `_CnsldtnSubitemCategory` | | ✓ | | | | |
| `_CnsldtnSubitem` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_ProviderContractItem` | | ✓ | | | | |
| `_AccountAssignmentType` | | ✓ | | | | |
| `_JrnlEntryItemObsoleteRsn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JournalEntry` | `I_JournalEntry` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [1..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_LedgerFiscalYearForVariant` | `I_FiscalYearForVariant` | [0..1] |
| `_FiscalPeriodForVariant` | `I_FiscalPeriodForVariant` | [0..1] |
| `_FiscalYearPeriodForVariant` | `I_FiscalYearPeriodForVariant` | [0..1] |
| `_CalendarDate` | `I_CalendarDate` | [0..1] |
| `_FiscalCalendarDate` | `I_FiscalCalendarDate` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_BalanceTransactionCurrency` | `I_Currency` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_GlobalCurrency` | `I_Currency` | [0..1] |
| `_FunctionalCurrency` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency1` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency2` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency3` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency4` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency5` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency6` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency7` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency8` | `I_Currency` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CostSourceUnit` | `I_UnitOfMeasure` | [0..1] |
| `_AdditionalQuantity1Unit` | `I_UnitOfMeasure` | [0..1] |
| `_AdditionalQuantity2Unit` | `I_UnitOfMeasure` | [0..1] |
| `_AdditionalQuantity3Unit` | `I_UnitOfMeasure` | [0..1] |
| `_ReferenceQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_IncmpltSummableValnQtyUnt` | `I_UnitOfMeasure` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_Ledger` | `I_Ledger` | [1..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerCompany` | `I_CustomerCompany` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompany` | `I_SupplierCompany` | [0..1] |
| `_ProductGroup` | `I_ProductGroup` | [0..1] |
| `_ProductGroup_2` | `I_ProductGroup_2` | [0..1] |
| `_SoldProductGroup` | `I_ProductGroup` | [0..1] |
| `_SoldProductGroup_2` | `I_ProductGroup_2` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_OriginOrder` | `I_Order` | [0..1] |
| `_CostAnalysisResource` | `I_CostAnalysisResource` | [0..*] |
| `_FinancialTransactionType` | `I_FinancialTransactionType` | [0..1] |
| `_BusinessTransactionCategory` | `I_BusinessTransactionCategory` | [0..1] |
| `_BusinessTransactionType` | `I_BusinessTransactionType` | [0..1] |
| `_ReferenceDocumentType` | `I_ReferenceDocumentType` | [0..1] |
| `_PredecessorReferenceDocType` | `I_ReferenceDocumentType` | [0..1] |
| `_PartnerCostCenter` | `I_CostCenter` | [0..*] |
| `_PartnerProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_PartnerBusinessArea` | `I_BusinessArea` | [0..1] |
| `_PartnerFunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_PartnerCompanyCode` | `I_CompanyCode` | [0..1] |
| `_PartnerSegment` | `I_Segment` | [0..1] |
| `_AccountingDocumentCategory` | `I_AccountingDocumentCategory` | [0..1] |
| `_PostingKey` | `I_PostingKey` | [0..1] |
| `_SubLedgerAccLineItemType` | `I_SubLedgerAccLineItemType` | [0..1] |
| `_User` | `I_User` | [0..1] |
| `_EliminationProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_GLAccountType` | `I_GLAccountType` | [0..1] |
| `_OffsettingAccountType` | `I_FinancialAccountType` | [0..1] |
| `_AlternativeGLAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_OffsettingAccount` | `I_OffsettingAccount` | [0..1] |
| `_OffsettingChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_CountryChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_SpecialGLCode` | `I_SpecialGLCode` | [0..1] |
| `_TaxCode` | `I_TaxCode` | [0..*] |
| `_TaxCountry` | `I_Country` | [0..1] |
| `_ClearingAccountingDocument` | `I_AccountingDocument` | [1..1] |
| `_ClearingJrnlEntryFiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_ClearingJournalEntry` | `I_JournalEntry` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_GroupMasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_PartnerMasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_FixedAsset` | `I_FixedAsset` | [0..1] |
| `_GroupFixedAsset` | `I_FixedAsset` | [0..1] |
| `_PartnerFixedAsset` | `I_FixedAsset` | [0..1] |
| `_BusinessProcess` | `I_BusinessProcess` | [0..1] |
| `_PartnerCostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_PartnerOrder` | `I_InternalOrder` | [0..1] |
| `_PartnerOrderCategory` | `I_OrderCategory` | [0..1] |
| `_PartnerSalesDocument` | `I_SalesDocument` | [0..1] |
| `_PartnerSalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_PartnerBusinessProcess` | `I_BusinessProcess` | [0..1] |
| `_BillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_SoldProduct` | `I_Product` | [0..1] |
| `_OriginProduct` | `I_Product` | [0..1] |
| `_InventorySpecialStockValnType` | `I_InventoryValuationType` | [0..1] |
| `_InventorySpclStockValnType` | `I_InvtrySpecialStockValnType` | [0..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [0..1] |
| `_InventorySpclStkSalesDocument` | `I_SalesDocument` | [0..1] |
| `_InventorySpclStkSalesDocItm` | `I_SalesDocumentItem` | [0..1] |
| `_InvtrySpclStockWBSElmntBasic` | `I_WBSElementBasicData` | [0..1] |
| `_InvtrySpclStkWBSElmntBscData` | `I_WBSElementBasicData` | [0..1] |
| `_InventorySpecialStockSupplier` | `I_Supplier` | [0..1] |
| `_InvtrySpclStockSupplierText` | `I_Supplier` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |
| `_ControllingDebitCreditCode` | `I_ControllingDebitCreditCode` | [0..1] |
| `_OriginCtrlgDebitCreditCode` | `I_ControllingDebitCreditCode` | [0..1] |
| `_OriginSenderObject` | `I_ControllingObject` | [0..1] |
| `_ControllingObjectClass` | `I_ControllingObjectClass` | [0..1] |
| `_PartnerCompany` | `I_Partnercompany` | [0..1] |
| `_PartnerControllingObjectClass` | `I_ControllingObjectClass` | [0..1] |
| `_OriginCostCenter` | `I_CostCenter` | [0..*] |
| `_OriginProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_OriginCostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_OrderCategory` | `I_OrderCategory` | [0..1] |
| `_MovementCategory` | `I_MovementCategory` | [0..1] |
| `_AssetTransactionType` | `I_AssetTransactionType` | [0..1] |
| `_CostOriginGroup` | `I_CostOriginGroup` | [0..*] |
| `_CustomerSupplierCountry` | `I_Country` | [0..1] |
| `_SalesDistrict` | `I_SalesDistrict` | [0..1] |
| `_BillToParty` | `I_Customer` | [0..1] |
| `_ShipToParty` | `I_Customer` | [0..1] |
| `_OperatingConcern` | `I_OperatingConcern` | [0..1] |
| `_ValuationArea` | `I_ValuationArea` | [0..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_BillableControl` | `I_BillableControl` | [0..1] |
| `_ConditionContract` | `I_ConditionContract` | [0..1] |
| `_MaintenanceOrder` | `I_MaintenanceOrder` | [0..1] |
| `_MaintenanceOrderOperation` | `I_MaintenanceOrderOperation` | [0..1] |
| `_MaintenanceOrderSubOperation` | `I_MaintenanceOrderSubOperation` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_FunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_Assembly` | `I_Product` | [0..1] |
| `_MaintenanceActivityType` | `I_MaintenanceActivityType` | [0..1] |
| `_WorkPackage` | `I_WorkPackage` | [0..1] |
| `_WorkPackageWorkItem` | `I_WorkPackageWorkItem` | [0..1] |
| `_TimeSheetOvertimeCat` | `I_TimeSheetOvertimeCat` | [0..1] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceDocumentItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_ServiceContractType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceContract` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceContractItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_PartnerServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_PartnerServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_PartnerServiceDocumentItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_ProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_PartnerProjectBasicData` | `I_ProjectBasicData` | [0..1] |
| `_PartnerWBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_AccrualObjectType` | `I_AccrualObjectType` | [0..1] |
| `_AccrualObject` | `I_AccrualObject` | [0..1] |
| `_AccrualSubobject` | `I_AccrualSubObject` | [0..1] |
| `_AccrualItemType` | `I_AccrualItemType` | [0..1] |
| `_CreditRiskClass` | `I_CreditRiskClass` | [0..1] |
| `_FinValuationObjectType` | `I_FinValuationObjectType` | [0..1] |
| `_SemTagGLAccount` | `I_SemTagGLAccount` | [0..*] |
| `_CashLedgerCompanyCode` | `I_CompanyCode` | [0..1] |
| `_CashLedgerAccount` | `I_GLAccountInCompanyCode` | [0..1] |
| `_FinancialManagementArea` | `I_FinancialManagementArea` | [0..1] |
| `_FundsCenter` | `I_FundsCenter` | [0..*] |
| `_FundedProgram` | `I_FundedProgram` | [0..1] |
| `_Fund` | `I_Fund` | [0..1] |
| `_Grant` | `I_Grant` | [0..1] |
| `_BudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_PartnerFund` | `I_Fund` | [0..1] |
| `_PartnerGrant` | `I_Grant` | [0..1] |
| `_PartnerBudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_PubSecBudgetAccountCoCode` | `I_CompanyCode` | [0..1] |
| `_PubSecBudgetAccount` | `I_PubSecBudgetAccount` | [0..1] |
| `_SponsoredProgram` | `I_SponsoredProgramCore` | [0..1] |
| `_SponsoredClass` | `I_SponsoredClassCore` | [0..1] |
| `_PubSecBudgetCnsmpnDate` | `I_FiscCalendarDateForCompCode` | [0..1] |
| `_PubSecBudgetCnsmpnFsclPeriod` | `I_FiscalYearPeriodForCmpnyCode` | [0..1] |
| `_PubSecBudgetCnsmpnFsclYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_PubSecBudgetCnsmpnType` | `I_PubSecBdgtCnsmpnType` | [0..1] |
| `_PubSecBudgetCnsmpnAmtType` | `I_PubSecBdgtCnsmpnAmtType` | [0..1] |
| `_ConsolidationUnit` | `I_CnsldtnUnit_3` | [0..1] |
| `_PartnerConsolidationUnit` | `I_CnsldtnUnit_3` | [0..1] |
| `_Company` | `I_Globalcompany` | [0..1] |
| `_ConsolidationChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [0..1] |
| `_CnsldtnFinancialStatementItem` | `I_CnsldtnFinStmntItem` | [0..1] |
| `_CnsldtnSubitemCategory` | `I_CnsldtnSubItemCategory` | [0..1] |
| `_CnsldtnSubitem` | `I_CnsldtnSubItem` | [0..1] |
| `_ProviderContract` | `I_ProviderContract` | [0..1] |
| `_ProviderContractItem` | `I_ProviderContractItem` | [0..1] |
| `_AccountAssignmentType` | `I_AccountAssignmentType` | [0..1] |
| `_JrnlEntryItemObsoleteRsn` | `I_JrnlEntryItemObsoleteRsn` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 //////////////////////////////////////////////////////////////////////////////
// Documentation: This view does not implement the logic for extension ledgers
// Result will be incomplete for ledgers other than basis ledgers
// For correct data of all ledgers use
// I_JournalEntryItem (change flows)
// I_GLAccountLineItem (for calculation of balances of Balance Sheet Accounts (includes BCF for GL Account Balances calculation)
@EndUserText.label: 'Raw Data of G/L Account Line Item'

@Analytics.technicalName: 'IFIGLACCTLIR'

@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: { representativeKey: 'LedgerGLLineItem',
                usageType.sizeCategory: #XXL,
                usageType.dataClass:  #TRANSACTIONAL,
                usageType.serviceQuality: #B,
                supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ],
                modelingPattern: #ANALYTICAL_CUBE,
                sapObjectNodeType.name: 'GeneralLedgerAccountLineItem'  }
@Analytics: {
      dataCategory: #CUBE,
      internalName: #LOCAL,
      dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:
            [
              {
                table: 'ACDOCA',
                role: #MAIN,
                viewElement: ['SourceLedger', 'CompanyCode', 'FiscalYear', 'AccountingDocument', 'LedgerGLLineItem'],
                tableElement: ['rldnr', 'rbukrs', 'gjahr', 'belnr', 'docln']
              }
            ]
         }
      }
    }


@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.auditFilter: #ENABLED
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@Environment.sql.passValueForClient: true

//@AccessControl.privilegedAssociations: ['_User' ]

define view entity I_GLAccountLineItemRawData
  as select from P_ACDOCA

  /* *************************************************************
   *  association zur ID
   * *************************************************************
  */

  association [0..1] to I_JournalEntry                 as _JournalEntry                  on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                                         and $projection.FiscalYear         = _JournalEntry.FiscalYear
                                                                                         and $projection.AccountingDocument = _JournalEntry.AccountingDocument
  association [1..1] to I_CompanyCode                  as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_FiscalYearVariant            as _FiscalYearVariant             on  $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant
  association [0..1] to I_FiscalYearForCompanyCode     as _FiscalYear                    on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                                         and $projection.CompanyCode = _FiscalYear.CompanyCode
  association [0..1] to I_FiscalYearForVariant         as _LedgerFiscalYearForVariant    on  $projection.LedgerFiscalYear  = _LedgerFiscalYearForVariant.FiscalYear
                                                                                         and $projection.FiscalYearVariant = _LedgerFiscalYearForVariant.FiscalYearVariant
  association [0..1] to I_FiscalPeriodForVariant       as _FiscalPeriodForVariant        on  $projection.LedgerFiscalYear  = _FiscalPeriodForVariant.FiscalYear
                                                                                         and $projection.FiscalPeriod      = _FiscalPeriodForVariant.FiscalPeriod
                                                                                         and $projection.FiscalYearVariant = _FiscalPeriodForVariant.FiscalYearVariant
  association [0..1] to I_FiscalYearPeriodForVariant   as _FiscalYearPeriodForVariant    on  $projection.FiscalYearPeriod  = _FiscalYearPeriodForVariant.FiscalYearPeriod
                                                                                         and $projection.FiscalYearVariant = _FiscalYearPeriodForVariant.FiscalYearVariant

  association [0..1] to I_CalendarDate                 as _CalendarDate                  on  $projection.PostingDate = _CalendarDate.CalendarDate
  association [0..1] to I_FiscalCalendarDate           as _FiscalCalendarDate            on  $projection.PostingDate       = _FiscalCalendarDate.CalendarDate
                                                                                         and $projection.FiscalYearVariant = _FiscalCalendarDate.FiscalYearVariant
  association [0..1] to I_ControllingArea              as _ControllingArea               on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_Currency                     as _BalanceTransactionCurrency    on  $projection.BalanceTransactionCurrency = _BalanceTransactionCurrency.Currency
  association [0..1] to I_Currency                     as _TransactionCurrency           on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [1..1] to I_Currency                     as _CompanyCodeCurrency           on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency

  association [0..1] to I_Currency                     as _GlobalCurrency                on  $projection.GlobalCurrency = _GlobalCurrency.Currency
  association [0..1] to I_Currency                     as _FunctionalCurrency            on  $projection.FunctionalCurrency = _FunctionalCurrency.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency1          on  $projection.FreeDefinedCurrency1 = _FreeDefinedCurrency1.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency2          on  $projection.FreeDefinedCurrency2 = _FreeDefinedCurrency2.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency3          on  $projection.FreeDefinedCurrency3 = _FreeDefinedCurrency3.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency4          on  $projection.FreeDefinedCurrency4 = _FreeDefinedCurrency4.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency5          on  $projection.FreeDefinedCurrency5 = _FreeDefinedCurrency5.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency6          on  $projection.FreeDefinedCurrency6 = _FreeDefinedCurrency6.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency7          on  $projection.FreeDefinedCurrency7 = _FreeDefinedCurrency7.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency8          on  $projection.FreeDefinedCurrency8 = _FreeDefinedCurrency8.Currency

  association [0..1] to I_UnitOfMeasure                as _BaseUnit                      on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _CostSourceUnit                on  $projection.CostSourceUnit = _CostSourceUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _AdditionalQuantity1Unit       on  $projection.AdditionalQuantity1Unit = _AdditionalQuantity1Unit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _AdditionalQuantity2Unit       on  $projection.AdditionalQuantity2Unit = _AdditionalQuantity2Unit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _AdditionalQuantity3Unit       on  $projection.AdditionalQuantity3Unit = _AdditionalQuantity3Unit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _ReferenceQuantityUnit         on  $projection.ReferenceQuantityUnit   = _ReferenceQuantityUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _IncmpltSummableValnQtyUnt     on  $projection.IncmpltSummableValnQtyUnt = _IncmpltSummableValnQtyUnt.UnitOfMeasure

  association [0..1] to I_Segment                      as _Segment                       on  $projection.Segment = _Segment.Segment

  association [0..*] to I_ProfitCenter                 as _ProfitCenter                  on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                         and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..*] to I_CostCenter                   as _CostCenter                    on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                                         and $projection.CostCenter      = _CostCenter.CostCenter
  association [0..1] to I_BusinessArea                 as _BusinessArea                  on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_FunctionalArea               as _FunctionalArea                on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea

  association [0..1] to I_GLAccountInChartOfAccounts   as _GLAccountInChartOfAccounts    on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                         and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
  association [0..1] to I_GLAccountInCompanyCode       as _GLAccountInCompanyCode        on  $projection.CompanyCode = _GLAccountInCompanyCode.CompanyCode
                                                                                         and $projection.GLAccount   = _GLAccountInCompanyCode.GLAccount
  association [0..1] to I_ChartOfAccounts              as _ChartOfAccounts               on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts

  association [0..1] to I_AccountingDocumentType       as _AccountingDocumentType        on  $projection.AccountingDocumentType = _AccountingDocumentType.AccountingDocumentType
  association [0..1] to I_FinancialAccountType         as _FinancialAccountType          on  $projection.FinancialAccountType = _FinancialAccountType.FinancialAccountType
  association [0..1] to I_DebitCreditCode              as _DebitCreditCode               on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode

  association [0..1] to I_Product                      as _Product                       on  $projection.Product = _Product.Product
  association [0..1] to I_Plant                        as _Plant                         on  $projection.Plant = _Plant.Plant

  association [1..1] to I_Ledger                       as _Ledger                        on  $projection.SourceLedger = _Ledger.Ledger

  association [0..1] to I_Customer                     as _Customer                      on  $projection.Customer = _Customer.Customer
  association [0..1] to I_CustomerCompany              as _CustomerCompany               on  $projection.Customer    = _CustomerCompany.Customer
                                                                                         and $projection.CompanyCode = _CustomerCompany.CompanyCode   
  association [0..1] to I_CustomerGroup                as _CustomerGroup                 on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup

  association [0..1] to I_Supplier                     as _Supplier                      on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_SupplierCompany              as _SupplierCompany               on  $projection.Supplier    = _SupplierCompany.Supplier
                                                                                         and $projection.CompanyCode = _SupplierCompany.CompanyCode 

  association [0..1] to I_ProductGroup                 as _ProductGroup                  on  $projection.ProductGroup = _ProductGroup.MaterialGroup
  association [0..1] to I_ProductGroup_2               as _ProductGroup_2                on  $projection.ProductGroup = _ProductGroup_2.ProductGroup
  association [0..1] to I_ProductGroup                 as _SoldProductGroup              on  $projection.SoldProductGroup = _SoldProductGroup.MaterialGroup
  association [0..1] to I_ProductGroup_2               as _SoldProductGroup_2            on  $projection.SoldProductGroup = _SoldProductGroup_2.ProductGroup

  //  association [0..1] to I_SalesOrder                   as _SalesOrder                    on  $projection.SalesOrder = _SalesOrder.SalesOrder
  //  association [0..1] to I_SalesOrderItem               as _SalesOrderItem                on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
  //                                                                                         and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem
  association [0..1] to I_SalesDocument                as _SalesDocument                 on  $projection.SalesDocument = _SalesDocument.SalesDocument
  association [0..1] to I_SalesDocumentItem            as _SalesDocumentItem             on  $projection.SalesDocument     = _SalesDocumentItem.SalesDocument
                                                                                         and $projection.SalesDocumentItem = _SalesDocumentItem.SalesDocumentItem

  association [0..1] to I_Order                        as _Order                         on  $projection.OrderID = _Order.OrderID
  association [0..1] to I_Order                        as _OriginOrder                   on  $projection.OriginOrder  = _OriginOrder.OrderID
  association [0..*] to I_CostAnalysisResource         as _CostAnalysisResource          on  $projection.ControllingArea      = _CostAnalysisResource.ControllingArea
                                                                                         and $projection.CostAnalysisResource = _CostAnalysisResource.CostAnalysisResource

  association [0..1] to I_FinancialTransactionType     as _FinancialTransactionType      on  $projection.FinancialTransactionType = _FinancialTransactionType.FinancialTransactionType
  
  association [0..1] to I_BusinessTransactionCategory  as _BusinessTransactionCategory   on  $projection.BusinessTransactionCategory = _BusinessTransactionCategory.BusinessTransactionCategory  
  association [0..1] to I_BusinessTransactionType      as _BusinessTransactionType       on  $projection.BusinessTransactionType     = _BusinessTransactionType.BusinessTransactionType
  //  association [0..1] to I_ControllingBusTransacType    as _ControllingBusTransacType     on  $projection.ControllingBusTransacType = _ControllingBusTransacType.BusinessTransactionType

  association [0..1] to I_ReferenceDocumentType        as _ReferenceDocumentType         on  $projection.ReferenceDocumentType = _ReferenceDocumentType.ReferenceDocumentType
  association [0..1] to I_ReferenceDocumentType        as _PredecessorReferenceDocType   on  $projection.PredecessorReferenceDocType = _PredecessorReferenceDocType.ReferenceDocumentType
  association [0..*] to I_CostCenter                   as _PartnerCostCenter             on  $projection.ControllingArea   = _PartnerCostCenter.ControllingArea
                                                                                         and $projection.PartnerCostCenter = _PartnerCostCenter.CostCenter
  association [0..*] to I_ProfitCenter                 as _PartnerProfitCenter           on  $projection.ControllingArea     = _PartnerProfitCenter.ControllingArea
                                                                                         and $projection.PartnerProfitCenter = _PartnerProfitCenter.ProfitCenter
  association [0..1] to I_BusinessArea                 as _PartnerBusinessArea           on  $projection.PartnerBusinessArea = _PartnerBusinessArea.BusinessArea
  association [0..1] to I_FunctionalArea               as _PartnerFunctionalArea         on  $projection.PartnerFunctionalArea = _PartnerFunctionalArea.FunctionalArea
  association [0..1] to I_CompanyCode                  as _PartnerCompanyCode            on  $projection.PartnerCompanyCode = _PartnerCompanyCode.CompanyCode
  association [0..1] to I_Segment                      as _PartnerSegment                on  $projection.PartnerSegment = _PartnerSegment.Segment

  association [0..1] to I_AccountingDocumentCategory   as _AccountingDocumentCategory    on  $projection.AccountingDocumentCategory = _AccountingDocumentCategory.AccountingDocumentCategory

  association [0..1] to I_PostingKey                   as _PostingKey                    on  $projection.PostingKey = _PostingKey.PostingKey

  association [0..1] to I_SubLedgerAccLineItemType     as _SubLedgerAccLineItemType      on  $projection.SubLedgerAcctLineItemType = _SubLedgerAccLineItemType.SubLedgerAcctLineItemType
  association [0..1] to I_User                         as _User                          on  $projection.AccountingDocCreatedByUser = _User.UserID

  association [0..*] to I_ProfitCenter                 as _EliminationProfitCenter       on  $projection.ControllingArea         = _EliminationProfitCenter.ControllingArea
                                                                                         and $projection.EliminationProfitCenter = _EliminationProfitCenter.ProfitCenter

  association [0..1] to I_GLAccountType                as _GLAccountType                 on  $projection.GLAccountType = _GLAccountType.GLAccountType
  association [0..1] to I_FinancialAccountType         as _OffsettingAccountType         on  $projection.OffsettingAccountType = _OffsettingAccountType.FinancialAccountType
  association [0..1] to I_GLAccountInChartOfAccounts   as _AlternativeGLAccount          on  $projection.CountryChartOfAccounts = _AlternativeGLAccount.ChartOfAccounts
                                                                                         and $projection.AlternativeGLAccount   = _AlternativeGLAccount.GLAccount

  association [0..1] to I_OffsettingAccount            as _OffsettingAccount             on  $projection.OffsettingChartOfAccounts = _OffsettingAccount.ChartOfAccounts
                                                                                         and $projection.OffsettingAccountType     = _OffsettingAccount.OffsettingAccountType
                                                                                         and $projection.OffsettingAccount         = _OffsettingAccount.OffsettingAccount

  association [0..1] to I_ChartOfAccounts              as _OffsettingChartOfAccounts     on  $projection.OffsettingChartOfAccounts = _OffsettingChartOfAccounts.ChartOfAccounts
  association [0..1] to I_ChartOfAccounts              as _CountryChartOfAccounts        on  $projection.CountryChartOfAccounts = _CountryChartOfAccounts.ChartOfAccounts

//  association [0..1] to I_PurchasingDocument           as _PurchasingDocument            on  $projection.PurchasingDocument = _PurchasingDocument.PurchasingDocument
//  association [0..1] to I_PurchasingDocumentItem       as _PurchasingDocumentItem        on  $projection.PurchasingDocument     = _PurchasingDocumentItem.PurchasingDocument
//                                                                                           and $projection.PurchasingDocumentItem = _PurchasingDocumentItem.PurchasingDocumentItem
  association [0..1] to I_SpecialGLCode                as _SpecialGLCode                 on  $projection.SpecialGLCode        = _SpecialGLCode.SpecialGLCode
                                                                                         and $projection.FinancialAccountType = _SpecialGLCode.FinancialAccountType
  association [0..*] to I_TaxCode                      as _TaxCode                       on  $projection.TaxCode = _TaxCode.TaxCode
  //above solution for association to I_TaxCode not supported. TaxCalculationProcedure required as additional key field to make TaxCode unique
  //association[0..1] to I_TaxCode                      as _TaxCode                       on $projection.TaxCode = _TaxCode.TaxCode and
  //                                                                                         $projection._Company_Country.TaxCalculationProcedure = _TaxCode.TaxCalculationProcedure
  association [0..1] to I_Country                      as _TaxCountry                    on  $projection.TaxCountry = _TaxCountry.Country
  //  association [0..1] to I_Housebank                    as _HouseBank                     on  $projection.CompanyCode = _HouseBank.CompanyCode
  //                                                                                         and $projection.HouseBank   = _HouseBank.HouseBank
                                                                                         
// the following association is wrong and will be deprecated
  association [1..1] to I_AccountingDocument           as _ClearingAccountingDocument    on  $projection.CompanyCode                = _ClearingAccountingDocument.CompanyCode
                                                                                         and $projection.FiscalYear                 = _ClearingAccountingDocument.FiscalYear
                                                                                         and $projection.ClearingAccountingDocument = _ClearingAccountingDocument.AccountingDocument
                                                                                         
  association [0..1] to I_FiscalYearForCompanyCode     as _ClearingJrnlEntryFiscalYear    on $projection.ClearingJournalEntryFiscalYear = _ClearingJrnlEntryFiscalYear.FiscalYear
                                                                                         and $projection.CompanyCode                    = _ClearingJrnlEntryFiscalYear.CompanyCode
  association [0..1] to I_JournalEntry                 as _ClearingJournalEntry          on  $projection.CompanyCode                    = _ClearingJournalEntry.CompanyCode
                                                                                         and $projection.ClearingJournalEntryFiscalYear = _ClearingJournalEntry.FiscalYear
                                                                                         and $projection.ClearingJournalEntry           = _ClearingJournalEntry.AccountingDocument                                                                                         
                                                                                         
  association [0..1] to I_MasterFixedAsset             as _MasterFixedAsset              on  $projection.CompanyCode                = _MasterFixedAsset.CompanyCode
                                                                                         and $projection.MasterFixedAsset           = _MasterFixedAsset.MasterFixedAsset
  association [0..1] to I_MasterFixedAsset             as _GroupMasterFixedAsset         on  $projection.CompanyCode                = _GroupMasterFixedAsset.CompanyCode
                                                                                         and $projection.GroupMasterFixedAsset      = _GroupMasterFixedAsset.MasterFixedAsset
  association [0..1] to I_MasterFixedAsset             as _PartnerMasterFixedAsset       on  $projection.CompanyCode                = _PartnerMasterFixedAsset.CompanyCode
                                                                                         and $projection.PartnerMasterFixedAsset    = _PartnerMasterFixedAsset.MasterFixedAsset
  association [0..1] to I_FixedAsset                   as _FixedAsset                    on  $projection.CompanyCode                = _FixedAsset.CompanyCode
                                                                                         and $projection.MasterFixedAsset           = _FixedAsset.MasterFixedAsset
                                                                                         and $projection.FixedAsset                 = _FixedAsset.FixedAsset
  association [0..1] to I_FixedAsset                   as _GroupFixedAsset               on  $projection.CompanyCode                = _GroupFixedAsset.CompanyCode
                                                                                         and $projection.GroupMasterFixedAsset      = _GroupFixedAsset.MasterFixedAsset
                                                                                         and $projection.GroupFixedAsset            = _GroupFixedAsset.FixedAsset
  association [0..1] to I_FixedAsset                   as _PartnerFixedAsset             on  $projection.CompanyCode                = _PartnerFixedAsset.CompanyCode
                                                                                         and $projection.PartnerMasterFixedAsset    = _PartnerFixedAsset.MasterFixedAsset
                                                                                         and $projection.PartnerFixedAsset          = _PartnerFixedAsset.FixedAsset

  association [0..1] to I_BusinessProcess              as _BusinessProcess               on  $projection.ControllingArea = _BusinessProcess.ControllingArea
                                                                                         and $projection.BusinessProcess = _BusinessProcess.BusinessProcess

  association [0..*] to I_CostCenterActivityType       as _PartnerCostCtrActivityType    on  $projection.ControllingArea            = _PartnerCostCtrActivityType.ControllingArea
                                                                                         and $projection.PartnerCostCtrActivityType = _PartnerCostCtrActivityType.CostCtrActivityType
  association [0..1] to I_InternalOrder                as _PartnerOrder                  on  $projection.PartnerOrder    = _PartnerOrder.InternalOrder

  association [0..1] to I_OrderCategory                as _PartnerOrderCategory          on  $projection.PartnerOrderCategory = _PartnerOrderCategory.OrderCategory
  association [0..1] to I_SalesDocument                as _PartnerSalesDocument          on  $projection.PartnerSalesDocument = _PartnerSalesDocument.SalesDocument
  association [0..1] to I_SalesDocumentItem            as _PartnerSalesDocumentItem      on  $projection.PartnerSalesDocument     = _PartnerSalesDocumentItem.SalesDocument
                                                                                         and $projection.PartnerSalesDocumentItem = _PartnerSalesDocumentItem.SalesDocumentItem
  association [0..1] to I_BusinessProcess              as _PartnerBusinessProcess        on  $projection.ControllingArea        = _PartnerBusinessProcess.ControllingArea
                                                                                         and $projection.PartnerBusinessProcess = _PartnerBusinessProcess.BusinessProcess
  association [0..1] to I_BillingDocumentType          as _BillingDocumentType           on  $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType

  association [0..1] to I_SalesOrganization            as _SalesOrganization             on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel          as _DistributionChannel           on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel

  association [0..1] to I_Product                      as _SoldProduct                   on  $projection.SoldProduct = _SoldProduct.Product
  
  association [0..1] to I_Product                      as _OriginProduct                 on  $projection.OriginProduct = _OriginProduct.Product

  association [0..1] to I_InventoryValuationType       as _InventorySpecialStockValnType on  $projection.InventorySpecialStockValnType = _InventorySpecialStockValnType.InventoryValuationType
  association [0..1] to I_InvtrySpecialStockValnType   as _InventorySpclStockValnType    on  $projection.InventorySpecialStockValnType = _InventorySpclStockValnType.InventorySpecialStockValnType
  association [0..1] to I_InventorySpecialStockType    as _InventorySpecialStockType     on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType

  association [0..1] to I_SalesDocument                as _InventorySpclStkSalesDocument on  $projection.InventorySpclStkSalesDocument = _InventorySpclStkSalesDocument.SalesDocument

  association [0..1] to I_SalesDocumentItem            as _InventorySpclStkSalesDocItm   on  $projection.InventorySpclStkSalesDocument = _InventorySpclStkSalesDocItm.SalesDocument
                                                                                         and $projection.InventorySpclStkSalesDocItm   = _InventorySpclStkSalesDocItm.SalesDocumentItem

  association [0..1] to I_WBSElementBasicData          as _InvtrySpclStockWBSElmntBasic  on  $projection.InvtrySpclStockWBSElmntIntID = _InvtrySpclStockWBSElmntBasic.WBSElementInternalID  // do not use
  association [0..1] to I_WBSElementBasicData          as _InvtrySpclStkWBSElmntBscData  on  $projection.InvtrySpclStockWBSElmntIntID = _InvtrySpclStkWBSElmntBscData.WBSElementInternalID

  association [0..1] to I_Supplier                     as _InventorySpecialStockSupplier on  $projection.InventorySpecialStockSupplier = _InventorySpecialStockSupplier.Supplier
  association [0..1] to I_Supplier                     as _InvtrySpclStockSupplierText   on  $projection.InventorySpecialStockSupplier = _InvtrySpclStockSupplierText.Supplier

  association [0..1] to I_InventoryValuationType       as _InventoryValuationType        on  $projection.InventoryValuationType = _InventoryValuationType.InventoryValuationType

  association [0..1] to I_ControllingDebitCreditCode   as _ControllingDebitCreditCode    on  $projection.ControllingDebitCreditCode = _ControllingDebitCreditCode.ControllingDebitCreditCode
  association [0..1] to I_ControllingDebitCreditCode   as _OriginCtrlgDebitCreditCode    on  $projection.OriginCtrlgDebitCreditCode = _OriginCtrlgDebitCreditCode.ControllingDebitCreditCode
  association [0..1] to I_ControllingObject            as _OriginSenderObject            on  $projection.OriginSenderObject = _OriginSenderObject.ControllingObject

  association [0..1] to I_ControllingObjectClass       as _ControllingObjectClass        on  $projection.ControllingObjectClass = _ControllingObjectClass.ControllingObjectClass

  association [0..1] to I_Partnercompany               as _PartnerCompany                on  $projection.PartnerCompany = _PartnerCompany.PartnerCompany

  association [0..1] to I_ControllingObjectClass       as _PartnerControllingObjectClass on  $projection.PartnerControllingObjectClass = _PartnerControllingObjectClass.ControllingObjectClass

  association [0..*] to I_CostCenter                   as _OriginCostCenter              on  $projection.ControllingArea  = _OriginCostCenter.ControllingArea
                                                                                         and $projection.OriginCostCenter = _OriginCostCenter.CostCenter

  association [0..*] to I_ProfitCenter                 as _OriginProfitCenter            on  $projection.ControllingArea    = _OriginProfitCenter.ControllingArea
                                                                                         and $projection.OriginProfitCenter = _OriginProfitCenter.ProfitCenter
  association [0..*] to I_CostCenterActivityType       as _CostCtrActivityType           on  $projection.ControllingArea     = _CostCtrActivityType.ControllingArea
                                                                                         and $projection.CostCtrActivityType = _CostCtrActivityType.CostCtrActivityType

  association [0..*] to I_CostCenterActivityType       as _OriginCostCtrActivityType     on  $projection.ControllingArea           = _OriginCostCtrActivityType.ControllingArea
                                                                                         and $projection.OriginCostCtrActivityType = _OriginCostCtrActivityType.CostCtrActivityType

  association [0..1] to I_OrderCategory                as _OrderCategory                 on  $projection.OrderCategory = _OrderCategory.OrderCategory

    association [0..1] to I_MovementCategory             as _MovementCategory              on  $projection.AssetAcctTransClassfctn = _MovementCategory.AssetAcctTransClassfctn
    association [0..1] to I_AssetTransactionType         as _AssetTransactionType          on  $projection.AssetTransactionType = _AssetTransactionType.AssetTransactionType

  association [0..*] to I_CostOriginGroup              as _CostOriginGroup               on  $projection.ControllingArea = _CostOriginGroup.ControllingArea
                                                                                         and $projection.CostOriginGroup = _CostOriginGroup.CostOriginGroup
  association [0..1] to I_Country                      as _CustomerSupplierCountry       on  $projection.CustomerSupplierCountry = _CustomerSupplierCountry.Country
  association [0..1] to I_SalesDistrict                as _SalesDistrict                 on  $projection.SalesDistrict = _SalesDistrict.SalesDistrict
  association [0..1] to I_Customer                     as _BillToParty                   on  $projection.BillToParty = _BillToParty.Customer
  association [0..1] to I_Customer                     as _ShipToParty                   on  $projection.ShipToParty = _ShipToParty.Customer

  //  association [0..1] to I_HouseBankAccount             as _HouseBankAccount              on  $projection.CompanyCode      = _HouseBankAccount.CompanyCode
  //                                                                                         and $projection.HouseBank        = _HouseBankAccount.HouseBank
  //                                                                                         and $projection.HouseBankAccount = _HouseBankAccount.HouseBankAccount
  //  association [0..1] to I_LogicalSystem                as _LogicalSystem                 on  $projection.LogicalSystem = _LogicalSystem.LogicalSystem
  association [0..1] to I_OperatingConcern             as _OperatingConcern              on  $projection.OperatingConcern = _OperatingConcern.OperatingConcern
  //  association [0..1] to I_ProjectNetwork               as _ProjectNetwork                on  $projection.ProjectNetwork = _ProjectNetwork.ProjectNetwork
  association [0..1] to I_ValuationArea                as _ValuationArea                 on  $projection.ValuationArea = _ValuationArea.ValuationArea
  association [0..1] to I_WorkCenter                   as _WorkCenter                    on  $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
                                                                                         and _WorkCenter.WorkCenterTypeCode   = 'A'

  association [0..1] to I_BillableControl              as _BillableControl               on  $projection.BillableControl     = _BillableControl.BillableControl

  association [0..1] to I_ConditionContract            as _ConditionContract             on  $projection.ConditionContract = _ConditionContract.ConditionContract

  association [0..1] to I_MaintenanceOrder             as _MaintenanceOrder              on  $projection.OrderID       = _MaintenanceOrder.MaintenanceOrder
                                                                                         and $projection.OrderCategory = '30'
  association [0..1] to I_MaintenanceOrderOperation    as _MaintenanceOrderOperation     on  $projection.OrderID        = _MaintenanceOrderOperation.MaintenanceOrder
                                                                                         and $projection.OrderOperation = _MaintenanceOrderOperation.MaintenanceOrderOperation
                                                                                         and $projection.OrderCategory  = '30'
  association [0..1] to I_MaintenanceOrderSubOperation as _MaintenanceOrderSubOperation  on  $projection.OrderID           = _MaintenanceOrderSubOperation.MaintenanceOrder
                                                                                         and $projection.OrderOperation    = _MaintenanceOrderSubOperation.MaintenanceOrderOperation
                                                                                         and $projection.OrderSuboperation = _MaintenanceOrderSubOperation.MaintenanceOrderSubOperation

  association [0..1] to I_Equipment                    as _Equipment                     on  $projection.Equipment = _Equipment.Equipment

  association [0..1] to I_FunctionalLocation           as _FunctionalLocation            on  $projection.FunctionalLocation = _FunctionalLocation.FunctionalLocation
  association [0..1] to I_Product                      as _Assembly                      on  $projection.Assembly = _Assembly.Product
  association [0..1] to I_MaintenanceActivityType      as _MaintenanceActivityType       on  $projection.MaintenanceActivityType = _MaintenanceActivityType.MaintenanceActivityType
  //  association [0..1] to I_MaintOrdPlngDegreeCode      as _MaintOrdPlngDegreeCode       on  $projection.MaintenanceOrderPlanningCode = _MaintOrdPlngDegreeCode.MaintenanceOrderPlanningCode
  //  association [0..1] to I_PMNotificationPriorityType  as _PMNotificationPriorityType   on  $projection.MaintPriorityType            = _PMNotificationPriorityType.MaintPriorityType
  //  association [0..1] to I_PMNotificationPriority      as _PMNotificationPriority       on  $projection.MaintPriority                = _PMNotificationPriority.MaintPriority
  //                                                                                       and $projection.MaintPriorityType            = _PMNotificationPriority.MaintPriorityType

  //  association [0..1] to I_Order                        as _SuperiorOrder                 on  $projection.SuperiorOrder                = _Order.OrderID
  association [0..1] to I_WorkPackage                  as _WorkPackage                   on  $projection.WorkPackage = _WorkPackage.WorkPackage
  association [0..1] to I_WorkPackageWorkItem          as _WorkPackageWorkItem           on  $projection.WorkItem    = _WorkPackageWorkItem.WorkItem
                                                                                         and $projection.WorkPackage = _WorkPackageWorkItem.WorkPackage
  association [0..1] to I_TimeSheetOvertimeCat         as _TimeSheetOvertimeCat          on  $projection.TimeSheetOvertimeCategory = _TimeSheetOvertimeCat.TimeSheetOvertimeCategory
  association [0..1] to I_ServiceDocumentType          as _ServiceDocumentType           on  $projection.ServiceDocumentType = _ServiceDocumentType.ServiceDocumentType

  association [0..1] to I_SrvcDocByDocumentType        as _ServiceDocument               on  $projection.ServiceDocumentType = _ServiceDocument.ServiceDocumentType
                                                                                         and $projection.ServiceDocument     = _ServiceDocument.ServiceDocument

  association [0..1] to I_SrvcDocItemByDocumentType    as _ServiceDocumentItem           on  $projection.ServiceDocumentType = _ServiceDocumentItem.ServiceDocumentType
                                                                                         and $projection.ServiceDocument     = _ServiceDocumentItem.ServiceDocument
                                                                                         and $projection.ServiceDocumentItem = _ServiceDocumentItem.ServiceDocumentItem

  association [0..1] to I_ServiceDocumentType          as _ServiceContractType           on  $projection.ServiceContractType = _ServiceContractType.ServiceDocumentType

  association [0..1] to I_SrvcDocByDocumentType        as _ServiceContract               on  $projection.ServiceContractType = _ServiceContract.ServiceDocumentType
                                                                                         and $projection.ServiceContract     = _ServiceContract.ServiceDocument

  association [0..1] to I_SrvcDocItemByDocumentType    as _ServiceContractItem           on  $projection.ServiceContractType = _ServiceContractItem.ServiceDocumentType
                                                                                         and $projection.ServiceContract     = _ServiceContractItem.ServiceDocument
                                                                                         and $projection.ServiceContractItem = _ServiceContractItem.ServiceDocumentItem

  association [0..1] to I_ServiceDocumentType          as _PartnerServiceDocumentType    on  $projection.PartnerServiceDocumentType = _PartnerServiceDocumentType.ServiceDocumentType

  association [0..1] to I_SrvcDocByDocumentType        as _PartnerServiceDocument        on  $projection.PartnerServiceDocumentType = _PartnerServiceDocument.ServiceDocumentType
                                                                                         and $projection.PartnerServiceDocument     = _PartnerServiceDocument.ServiceDocument

  association [0..1] to I_SrvcDocItemByDocumentType    as _PartnerServiceDocumentItem    on  $projection.PartnerServiceDocumentType = _PartnerServiceDocumentItem.ServiceDocumentType
                                                                                         and $projection.PartnerServiceDocument     = _PartnerServiceDocumentItem.ServiceDocument
                                                                                         and $projection.PartnerServiceDocumentItem = _PartnerServiceDocumentItem.ServiceDocumentItem
  association [0..1] to I_ProjectBasicData             as _ProjectBasicData              on  $projection.ProjectInternalID = _ProjectBasicData.ProjectInternalID
  association [0..1] to I_WBSElementBasicData          as _WBSElementBasicData           on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
  association [0..1] to I_ProjectBasicData             as _PartnerProjectBasicData       on  $projection.PartnerProjectInternalID = _PartnerProjectBasicData.ProjectInternalID
  association [0..1] to I_WBSElementBasicData          as _PartnerWBSElementBasicData    on  $projection.PartnerWBSElementInternalID = _PartnerWBSElementBasicData.WBSElementInternalID

  association [0..1] to I_AccrualObjectType            as _AccrualObjectType             on  $projection.AccrualObjectType = _AccrualObjectType.AccrualObjectType

  association [0..1] to I_AccrualObject                as _AccrualObject                 on  $projection.AccrualObjectType = _AccrualObject.AccrualObjectType
                                                                                         and _AccrualObject.AccrualObjectLogicalSystem  = ''
                                                                                         and $projection.CompanyCode       = _AccrualObject.CompanyCode
                                                                                         and $projection.AccrualObject     = _AccrualObject.AccrualObject


  association [0..1] to I_AccrualSubObject             as _AccrualSubobject              on  $projection.AccrualObjectType = _AccrualSubobject.AccrualObjectType
                                                                                         and _AccrualSubobject.AccrualObjectLogicalSystem  = ''
                                                                                         and $projection.CompanyCode       = _AccrualSubobject.CompanyCode
                                                                                         and $projection.AccrualObject     = _AccrualSubobject.AccrualObject
                                                                                         and $projection.AccrualSubobject  = _AccrualSubobject.AccrualSubobject

  association [0..1] to I_AccrualItemType              as _AccrualItemType               on  $projection.AccrualObjectType = _AccrualItemType.AccrualObjectType
                                                                                         and $projection.AccrualItemType   = _AccrualItemType.AccrualItemType

  association [0..1] to I_CreditRiskClass              as _CreditRiskClass               on  $projection.CreditRiskClass = _CreditRiskClass.CreditRiskClass

  association [0..1] to I_FinValuationObjectType       as _FinValuationObjectType        on  $projection.FinancialValuationObjectType = _FinValuationObjectType.FinancialValuationObjectType

  association [0..*] to I_SemTagGLAccount              as _SemTagGLAccount               on  $projection.GLAccount       = _SemTagGLAccount.GLAccount
                                                                                         and $projection.ChartOfAccounts = _SemTagGLAccount.ChartOfAccounts

  // Public Sector (start)
  association [0..1] to I_CompanyCode                  as _CashLedgerCompanyCode         on  $projection.CashLedgerCompanyCode = _CashLedgerCompanyCode.CompanyCode

  //  association [0..1] to I_GLAccount                  as _CashLedgerAccount        on  $projection.CashLedgerCompanyCode   = _CashLedgerAccount.CompanyCode
  //                                                                                  and $projection.CashLedgerAccount       = _CashLedgerAccount.GLAccount

  association [0..1] to I_GLAccountInCompanyCode       as _CashLedgerAccount             on  $projection.CashLedgerCompanyCode = _CashLedgerAccount.CompanyCode
                                                                                         and $projection.CashLedgerAccount     = _CashLedgerAccount.GLAccount

  association [0..1] to I_FinancialManagementArea      as _FinancialManagementArea       on  $projection.FinancialManagementArea = _FinancialManagementArea.FinancialManagementArea

  association [0..*] to I_FundsCenter                  as _FundsCenter                   on  $projection.FinancialManagementArea = _FundsCenter.FinancialManagementArea
                                                                                         and $projection.FundsCenter             = _FundsCenter.FundsCenter

  association [0..1] to I_FundedProgram                as _FundedProgram                 on  $projection.FinancialManagementArea = _FundedProgram.FinancialManagementArea
                                                                                         and $projection.FundedProgram           = _FundedProgram.FundedProgram

  association [0..1] to I_Fund                         as _Fund                          on  $projection.FinancialManagementArea = _Fund.FinancialManagementArea
                                                                                         and $projection.Fund                    = _Fund.Fund

  association [0..1] to I_Grant                        as _Grant                         on  $projection.GrantID                 = _Grant.GrantID

  association [0..1] to I_BudgetPeriod                 as _BudgetPeriod                  on  $projection.BudgetPeriod = _BudgetPeriod.BudgetPeriod

  association [0..1] to I_Fund                         as _PartnerFund                   on  $projection.FinancialManagementArea = _PartnerFund.FinancialManagementArea
                                                                                         and $projection.PartnerFund             = _PartnerFund.Fund

  association [0..1] to I_Grant                        as _PartnerGrant                  on  $projection.PartnerGrant            = _PartnerGrant.GrantID

  association [0..1] to I_BudgetPeriod                 as _PartnerBudgetPeriod           on  $projection.PartnerBudgetPeriod = _PartnerBudgetPeriod.BudgetPeriod

  association [0..1] to I_CompanyCode                  as _PubSecBudgetAccountCoCode     on  $projection.PubSecBudgetAccountCoCode = _PubSecBudgetAccountCoCode.CompanyCode

  association [0..1] to I_PubSecBudgetAccount          as _PubSecBudgetAccount           on  $projection.PubSecBudgetAccountCoCode = _PubSecBudgetAccount.PubSecBudgetAccountCoCode
                                                                                         and $projection.PubSecBudgetAccount       = _PubSecBudgetAccount.PubSecBudgetAccount
                                                                                         
// not C1 released                                                                                         
  association [0..1] to I_SponsoredProgramCore         as _SponsoredProgram           on  $projection.SponsoredProgram             = _SponsoredProgram.SponsoredProgram  
  association [0..1] to I_SponsoredClassCore           as _SponsoredClass             on  $projection.SponsoredClass               = _SponsoredClass.SponsoredClass                                                                                           

  association [0..1] to I_FiscCalendarDateForCompCode  as _PubSecBudgetCnsmpnDate        on  $projection.PubSecBudgetCnsmpnDate    = _PubSecBudgetCnsmpnDate.CalendarDate
                                                                                         and $projection.PubSecBudgetAccountCoCode = _PubSecBudgetCnsmpnDate.CompanyCode

  association [0..1] to I_FiscalYearPeriodForCmpnyCode as _PubSecBudgetCnsmpnFsclPeriod  on  $projection.PubSecBudgetAccountCoCode    = _PubSecBudgetCnsmpnFsclPeriod.CompanyCode
                                                                                         and $projection.PubSecBudgetCnsmpnFsclYear   = _PubSecBudgetCnsmpnFsclPeriod.FiscalYear
                                                                                         and $projection.PubSecBudgetCnsmpnFsclPeriod = _PubSecBudgetCnsmpnFsclPeriod.FiscalPeriod

  association [0..1] to I_FiscalYearForCompanyCode     as _PubSecBudgetCnsmpnFsclYear    on  $projection.PubSecBudgetAccountCoCode  = _PubSecBudgetCnsmpnFsclYear.CompanyCode
                                                                                         and $projection.PubSecBudgetCnsmpnFsclYear = _PubSecBudgetCnsmpnFsclYear.FiscalYear

  association [0..1] to I_PubSecBdgtCnsmpnType         as _PubSecBudgetCnsmpnType        on  $projection.PubSecBudgetCnsmpnType = _PubSecBudgetCnsmpnType.PubSecBudgetCnsmpnType

  association [0..1] to I_PubSecBdgtCnsmpnAmtType      as _PubSecBudgetCnsmpnAmtType     on  $projection.PubSecBudgetCnsmpnAmtType = _PubSecBudgetCnsmpnAmtType.PubSecBudgetCnsmpnAmtType

  // Public Sector (end)
  
  association [0..1] to I_CnsldtnUnit_3             as _ConsolidationUnit                on  $projection.ConsolidationUnit             = _ConsolidationUnit.ConsolidationUnit      
  association [0..1] to I_CnsldtnUnit_3             as _PartnerConsolidationUnit         on  $projection.PartnerConsolidationUnit      = _PartnerConsolidationUnit.ConsolidationUnit
  association [0..1] to I_Globalcompany             as _Company                          on  $projection.Company                       = _Company.Company
  association [0..1] to I_CnsldtnChartOfAccounts    as _ConsolidationChartOfAccounts     on  $projection.ConsolidationChartOfAccounts  = _ConsolidationChartOfAccounts.ConsolidationChartOfAccounts
  association [0..1] to I_CnsldtnFinStmntItem       as _CnsldtnFinancialStatementItem    on  $projection.ConsolidationChartOfAccounts  = _CnsldtnFinancialStatementItem.ConsolidationChartOfAccounts
                                                                                         and $projection.CnsldtnFinancialStatementItem = _CnsldtnFinancialStatementItem.FinancialStatementItem
  association [0..1] to I_CnsldtnSubItemCategory    as _CnsldtnSubitemCategory           on  $projection.CnsldtnSubitemCategory        = _CnsldtnSubitemCategory.SubItemCategory
  association [0..1] to I_CnsldtnSubItem            as _CnsldtnSubitem                   on  $projection.CnsldtnSubitemCategory        = _CnsldtnSubitem.SubItemCategory
                                                                                         and $projection.CnsldtnSubitem                = _CnsldtnSubitem.SubItem  

  association [0..1]  to I_ProviderContract         as _ProviderContract                 on  $projection.ProviderContract     = _ProviderContract.ProviderContract
  association [0..1]  to I_ProviderContractItem     as _ProviderContractItem             on  $projection.ProviderContract     = _ProviderContractItem.ProviderContract
                                                                                         and $projection.ProviderContractItem = _ProviderContractItem.ProviderContractItem
                                                                                         
  association [0..1]  to I_AccountAssignmentType    as _AccountAssignmentType            on  $projection.AccountAssignmentType = _AccountAssignmentType.AccountAssignmentType                                                                                    
                                                                                         
  association [0..1]  to I_JrnlEntryItemObsoleteRsn as _JrnlEntryItemObsoleteRsn         on  $projection.JrnlEntryItemObsoleteReason     = _JrnlEntryItemObsoleteRsn.JrnlEntryItemObsoleteReason
  
  association of exact one to exact one E_JournalEntryItem as _Extension                 on  $projection.SourceLedger       = _Extension.SourceLedger
                                                                                         and $projection.CompanyCode        = _Extension.CompanyCode
                                                                                         and $projection.FiscalYear         = _Extension.FiscalYear
                                                                                         and $projection.AccountingDocument = _Extension.AccountingDocument
                                                                                         and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem

{
      @ObjectModel.foreignKey.association: '_Ledger'
  key P_ACDOCA.rldnr                                                                                            as SourceLedger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key P_ACDOCA.rbukrs                                                                                           as CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key P_ACDOCA.gjahr                                                                                            as FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key P_ACDOCA.belnr                                                                                            as AccountingDocument,
  key P_ACDOCA.docln                                                                                            as LedgerGLLineItem,

      @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      @Semantics.fiscal.year: true
      P_ACDOCA.ryear                                                                                            as LedgerFiscalYear,
      P_ACDOCA.rrcty                                                                                            as GLRecordType,
      P_ACDOCA.DOCNR_LD as JrnlEntrAltvFYConsecutiveID,

      // Test workaround
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      P_ACDOCA.ktopl                                                                                            as ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      P_ACDOCA.kokrs                                                                                            as ControllingArea,

      ///////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_00  Unified Journal Entry: Transaction, Currencies, Units
      ///////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      P_ACDOCA.rmvct                                                                                            as FinancialTransactionType,
      P_ACDOCA.vorgn                                                                                            as GLBusinessTransactionType,
@ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
P_ACDOCA.bttype as BusinessTransactionCategory, 
@ObjectModel.foreignKey.association: '_BusinessTransactionType'
P_ACDOCA.cbttype as BusinessTransactionType, 
P_ACDOCA.closingstep as FinancialClosingStep,     
      P_ACDOCA.vrgng                                                                                            as ControllingBusTransacType,
      @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
      P_ACDOCA.awtyp                                                                                            as ReferenceDocumentType,
      //      @ObjectModel.foreignKey.association: '_LogicalSystem'
      P_ACDOCA.awsys                                                                                            as LogicalSystem,
      P_ACDOCA.aworg                                                                                            as ReferenceDocumentContext,
      P_ACDOCA.awref                                                                                            as ReferenceDocument,      
      cast( P_ACDOCA.awitem as fis_awitem preserving type ) as ReferenceDocumentItem,      
      cast( P_ACDOCA.awitgrp as fis_awitgrp preserving type ) as ReferenceDocumentItemGroup,
      P_ACDOCA.subta     as TransactionSubitem,
      P_ACDOCA.ACCTG_NOTIF_UUID as AccountingNotificationUUID,
      P_ACDOCA.offstg_docln as OffsettingLedgerGLLineItem,
      P_ACDOCA.xreversing                                                                                       as IsReversal,
      P_ACDOCA.xreversed                                                                                        as IsReversed,
      //XTRUEREV,
      P_ACDOCA.awtyp_rev as ReversalReferenceDocumentType,      
      cast( P_ACDOCA.aworg_rev as fis_aworg_rev preserving type ) as ReversalReferenceDocumentCntxt,      
      cast( P_ACDOCA.awref_rev as fis_awref_rev preserving type ) as ReversalReferenceDocument,
      P_ACDOCA.subta_rev                                                                                        as ReversalTransactionSubitem,
      P_ACDOCA.xsettling                                                                                        as IsSettlement,
      P_ACDOCA.xsettled                                                                                         as IsSettled,
      cast( P_ACDOCA.prec_awtyp as fis_prec_awtyp preserving type ) as PredecessorReferenceDocType,
      cast( P_ACDOCA.prec_aworg as fis_prec_aworg preserving type ) as PredecessorReferenceDocCntxt,      
      cast( P_ACDOCA.prec_awref as fis_prec_awref preserving type ) as PredecessorReferenceDocument,
      cast( P_ACDOCA.prec_awitem as fis_prec_awitem preserving type ) as PredecessorReferenceDocItem,
      //PREC_SUBTA,
      cast( P_ACDOCA.prec_bukrs as  fins_prec_bukrs_gfc preserving type )                                       as PrdcssrJournalEntryCompanyCode,
      P_ACDOCA.prec_gjahr as PrdcssrJournalEntryFiscalYear,
      cast( P_ACDOCA.prec_belnr as  fins_prec_belnr_gfc preserving type )                                       as PredecessorJournalEntry,
      cast( P_ACDOCA.prec_docln as  fins_prec_docln_gfc preserving type )                                       as PredecessorJournalEntryItem,

      cast( P_ACDOCA.src_awtyp as fis_src_awtyp preserving type ) as SourceReferenceDocumentType,
      cast( P_ACDOCA.src_awsys as fis_src_awsys preserving type ) as SourceLogicalSystem,
      cast( P_ACDOCA.src_aworg as fis_src_aworg preserving type ) as SourceReferenceDocumentCntxt,
      cast( P_ACDOCA.src_awref as fis_src_awref preserving type ) as SourceReferenceDocument,
      cast( P_ACDOCA.src_awitem as fis_src_awitem preserving type ) as SourceReferenceDocumentItem,
      cast( P_ACDOCA.src_awsubit as fis_src_awsubit preserving type ) as SourceReferenceDocSubitem,
      cast( P_ACDOCA.xcommitment as fis_xcommitment preserving type ) as IsCommitment,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_JrnlEntryItemObsoleteRsn'      
      P_ACDOCA.obs_reason                                                                                       as JrnlEntryItemObsoleteReason,
      P_ACDOCA.XSECONDARY as JournalEntryIsSecondaryEntry,
      P_ACDOCA.closing_run_id                                                                                   as JrnlPeriodEndClosingRunLogUUID,
      P_ACDOCA.orgl_change as OrganizationalChange,

      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      P_ACDOCA.racct                                                                                            as GLAccount,


      ////////////////////////////////////////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_GL_ACCAS Unified Journal Entry: G/L additional account assignments
      ////////////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_CostCenter'
      P_ACDOCA.rcntr                                                                                            as CostCenter,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      P_ACDOCA.prctr                                                                                            as ProfitCenter,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      P_ACDOCA.rfarea                                                                                           as FunctionalArea,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      P_ACDOCA.rbusa                                                                                            as BusinessArea,
      @ObjectModel.foreignKey.association: '_Segment'
      P_ACDOCA.segment                                                                                          as Segment,
      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      P_ACDOCA.scntr                                                                                            as PartnerCostCenter,
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      P_ACDOCA.pprctr                                                                                           as PartnerProfitCenter,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      P_ACDOCA.sfarea                                                                                           as PartnerFunctionalArea,
      @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
      P_ACDOCA.sbusa                                                                                            as PartnerBusinessArea,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      P_ACDOCA.rassc                                                                                            as PartnerCompany,
      P_ACDOCA.psegment                                                                                         as PartnerSegment,


      /////////////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_VALUE_DATA Unified Journal Entry: Value Fields
      /////////////////////////////////////////////////////////////////////////////////////

      @ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'
      P_ACDOCA.rtcur                                                                                            as BalanceTransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      P_ACDOCA.tsl                                                                                              as AmountInBalanceTransacCrcy,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      P_ACDOCA.rwcur                                                                                            as TransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      P_ACDOCA.wsl                                                                                              as AmountInTransactionCurrency,

      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      P_ACDOCA.rhcur                                                                                            as CompanyCodeCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      P_ACDOCA.hsl                                                                                              as AmountInCompanyCodeCurrency,

      ////////////////////////////////////
      // NEW
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      P_ACDOCA.rkcur                                                                                            as GlobalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      P_ACDOCA.ksl                                                                                              as AmountInGlobalCurrency,
      
      // Functional Currency
      @ObjectModel.foreignKey.association: '_FunctionalCurrency'
      P_ACDOCA.rfccur as FunctionalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      P_ACDOCA.fcsl as AmountInFunctionalCurrency,      

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'
      P_ACDOCA.rocur                                                                                            as FreeDefinedCurrency1,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      P_ACDOCA.osl                                                                                              as AmountInFreeDefinedCurrency1,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'
      P_ACDOCA.rvcur                                                                                            as FreeDefinedCurrency2,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      P_ACDOCA.vsl                                                                                              as AmountInFreeDefinedCurrency2,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'
      cast( P_ACDOCA.rbcur as fis_curr3 preserving type ) as FreeDefinedCurrency3,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      P_ACDOCA.bsl                                                                                              as AmountInFreeDefinedCurrency3,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'
      cast( P_ACDOCA.rccur as fis_curr4 preserving type ) as FreeDefinedCurrency4,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      P_ACDOCA.csl                                                                                              as AmountInFreeDefinedCurrency4,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'
      cast( P_ACDOCA.rdcur as fis_curr5 preserving type ) as FreeDefinedCurrency5,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      P_ACDOCA.dsl                                                                                              as AmountInFreeDefinedCurrency5,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'
      cast( P_ACDOCA.recur as fis_curr6 preserving type ) as FreeDefinedCurrency6,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      P_ACDOCA.esl                                                                                              as AmountInFreeDefinedCurrency6,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'
      P_ACDOCA.rfcur                                                                                            as FreeDefinedCurrency7,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      P_ACDOCA.fsl                                                                                              as AmountInFreeDefinedCurrency7,

      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'
      cast( P_ACDOCA.rgcur as fis_curr8 preserving type ) as FreeDefinedCurrency8,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      P_ACDOCA.gsl                                                                                              as AmountInFreeDefinedCurrency8,
      ////////////////////////////////////

      ////////////////////////////////////
      // NEW
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      P_ACDOCA.kfsl as FixedAmountInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }      
      cast( P_ACDOCA.kfsl2 as fis_vgcur12_fix2 preserving type ) as GrpValnFixedAmtInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }      
      cast( P_ACDOCA.kfsl3 as fis_vgcur12_fix3 preserving type ) as PrftCtrValnFxdAmtInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      P_ACDOCA.hfsl as FixedAmountInCoCodeCrcy,
      
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }      
      P_ACDOCA.wfsl as FixedAmountInTransCrcy,
               
      //
      //      @Aggregation.default: #SUM
      //      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      //      hfsl2                                                                                              as GrpValnFixedAmtInCoCodeCrcy,
      //
      //      @Aggregation.default: #SUM
      //      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      //      hfsl3                                                                                              as PrftCtrValnFxdAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      P_ACDOCA.psl                                                                                              as TotalPriceVarcInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      cast( P_ACDOCA.psl2 as fis_vpcur12_2 preserving type ) as GrpValnTotPrcVarcInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      cast( P_ACDOCA.psl3 as fis_vpcur12_3 preserving type ) as PrftCtrValnTotPrcVarcInGlbCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      P_ACDOCA.pfsl                                                                                             as FixedPriceVarcInGlobalCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }      
      cast( P_ACDOCA.pfsl2 as fis_vpfcur12_2 preserving type ) as GrpValnFixedPrcVarcInGlobCrcy,

      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }      
      cast( P_ACDOCA.pfsl3 as fis_vpfcur12_3 preserving type ) as PrftCtrValnFxdPrcVarcInGlbCrcy,
      ////////////////////////////////////


      P_ACDOCA.rco_ocur                                                                                         as ControllingObjectCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }      
      cast( P_ACDOCA.co_osl as fis_vco_ocur12 preserving type ) as AmountInObjectCurrency,

      P_ACDOCA.rgm_ocur                                                                                         as GrantCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GrantCurrency'} }
      P_ACDOCA.gm_osl                                                                                           as AmountInGrantCurrency,


      @ObjectModel.foreignKey.association: '_BaseUnit'
      P_ACDOCA.runit                                                                                            as BaseUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      P_ACDOCA.msl                                                                                              as Quantity,

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      cast( P_ACDOCA.mfsl as fis_quan1_12_fix preserving type ) as FixedQuantity,

      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      P_ACDOCA.rvunit                                                                                           as CostSourceUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }    
      cast( P_ACDOCA.vmsl as fis_vquan1_12 preserving type ) as ValuationQuantity, 

      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }      
      cast( P_ACDOCA.vmfsl as fis_vquan1_12_fix preserving type ) as ValuationFixedQuantity,

      @ObjectModel.foreignKey.association: '_ReferenceQuantityUnit'
      P_ACDOCA.rrunit                                                                                           as ReferenceQuantityUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ReferenceQuantityUnit'} }
      P_ACDOCA.rmsl                                                                                             as ReferenceQuantity,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity1Unit'
      cast( P_ACDOCA.qunit1 as fis_qunit1 preserving type )  as AdditionalQuantity1Unit,      
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity1Unit'} }
      cast( P_ACDOCA.quant1 as fis_quan1_l preserving type ) as AdditionalQuantity1,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity2Unit'
      cast( P_ACDOCA.qunit2 as fis_qunit2 preserving type )  as AdditionalQuantity2Unit, 
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity2Unit'} }
      cast( P_ACDOCA.quant2 as fis_quan2_l preserving type ) as AdditionalQuantity2,

      @ObjectModel.foreignKey.association: '_AdditionalQuantity3Unit'
      cast( P_ACDOCA.qunit3 as fis_qunit3 preserving type )  as AdditionalQuantity3Unit, 
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity3Unit'} }
      cast( P_ACDOCA.quant3 as fis_quan3_l preserving type ) as AdditionalQuantity3,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_IncmpltSummableValnQtyUnt'
      P_ACDOCA.CO_MEINH as IncmpltSummableValnQtyUnt,       // IncompleteSummableValuationQuantityUnit
      
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'IncmpltSummableValnQtyUnt'} }
      P_ACDOCA.CO_MEGBTR as IncmpltSummableValnQty,                 // IncompleteSummableValuationQuantity
      
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'IncmpltSummableValnQtyUnt'} }
      P_ACDOCA.CO_MEFBTR as IncmpltSummableValnFxdQty,               // IncompleteSummableValuationFixQuantity

      /////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FIX  Unified Journal Entry: Mandatory fields for G/L
      ////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      P_ACDOCA.drcrk                                                                                            as DebitCreditCode,
      @ObjectModel.foreignKey.association: '_FiscalPeriodForVariant'
      @Semantics.fiscal.period: true
      P_ACDOCA.poper                                                                                            as FiscalPeriod,
      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      P_ACDOCA.periv                                                                                            as FiscalYearVariant,
      @ObjectModel.foreignKey.association: '_FiscalYearPeriodForVariant'
      @Semantics.fiscal.yearPeriod: true
      P_ACDOCA.fiscyearper                                                                                      as FiscalYearPeriod,
      P_ACDOCA.budat                                                                                            as PostingDate,
      P_ACDOCA.bldat                                                                                            as DocumentDate,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      P_ACDOCA.blart                                                                                            as AccountingDocumentType,
      P_ACDOCA.buzei                                                                                            as AccountingDocumentItem,
      P_ACDOCA.zuonr                                                                                            as AssignmentReference,
      @ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
      P_ACDOCA.bstat                                                                                            as AccountingDocumentCategory,
P_ACDOCA.linetype as JournalEntryItemCategory,      
      @ObjectModel.foreignKey.association: '_PostingKey'
      P_ACDOCA.bschl                                                                                            as PostingKey,
      P_ACDOCA.ktosl                                                                                            as TransactionTypeDetermination,
      @ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
      P_ACDOCA.slalittype                                                                                       as SubLedgerAcctLineItemType,
      //      @ObjectModel.foreignKey.association: '_User'
      P_ACDOCA.usnam                                                                                            as AccountingDocCreatedByUser,
      cast( 
        (case when P_ACDOCA.last_change_datetime <> 0 then P_ACDOCA.last_change_datetime
              when P_ACDOCA.last_change_datetime =  0 then P_ACDOCA.timestamp 
         end)
                      as fis_lastchange_datetime preserving type )                                     as LastChangeDateTime,
      cast( P_ACDOCA.timestamp as fis_creation_datetime preserving type )                                       as CreationDateTime,
      -- cast(div(timestamp, 1000000) as FIS_TIMESTAMP) as CreationDate,
//    cast( cast(substring( cast(timestamp as abap.char(30)) , 1 , 8) as abap.dats(8))  as fis_cpdat ) as CreationDate,
      cast(substring( cast(P_ACDOCA.timestamp as abap.char(30)) , 1 , 8) as fis_cpdat)                          as CreationDate,
      @ObjectModel.foreignKey.association: '_EliminationProfitCenter'     
      cast( P_ACDOCA.eprctr as fis_eprctr preserving type ) as EliminationProfitCenter, 
      P_ACDOCA.rhoart                                                                                           as OriginObjectType,
      @ObjectModel.foreignKey.association: '_GLAccountType'
      P_ACDOCA.glaccount_type                                                                                   as GLAccountType,
      @ObjectModel.foreignKey.association: '_AlternativeGLAccount'
      cast(P_ACDOCA.lokkt as fis_alternativeglaccount preserving type )                                         as AlternativeGLAccount,
      @ObjectModel.foreignKey.association: '_CountryChartOfAccounts'
      P_ACDOCA.ktop2                                                                                            as CountryChartOfAccounts,
      cast( P_ACDOCA.xsplitmod as xsplitmod_acd preserving type  ) as ItemIsSplit,
      
      
      /////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FINCS   Universal Journal Entry: Fields for Group Reporting
      ////////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_ConsolidationUnit'      
      P_ACDOCA.rbunit                                                                                           as ConsolidationUnit,
      @ObjectModel.foreignKey.association: '_PartnerConsolidationUnit'  
      P_ACDOCA.rbuptr                                                                                           as PartnerConsolidationUnit,
      @ObjectModel.foreignKey.association: '_Company'  
      P_ACDOCA.rcomp                                                                                            as Company, 
      @ObjectModel.foreignKey.association: '_ConsolidationChartOfAccounts' 
      P_ACDOCA.ritclg                                                                                           as ConsolidationChartOfAccounts,
      @ObjectModel.foreignKey.association: '_CnsldtnFinancialStatementItem' 
      P_ACDOCA.ritem                                                                                            as CnsldtnFinancialStatementItem,
      @ObjectModel.foreignKey.association: '_CnsldtnSubitemCategory' 
      P_ACDOCA.sityp                                                                                            as CnsldtnSubitemCategory,
      @ObjectModel.foreignKey.association: '_CnsldtnSubitem' 
      P_ACDOCA.subit                                                                                            as CnsldtnSubitem,      


      ///////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_GEN  Unified Journal Entry: Fields for several subledgers
      //////////////////////////////////////////////////////////////////////////
      P_ACDOCA.rebzg                                                                                            as InvoiceReference,
      P_ACDOCA.rebzj                                                                                            as InvoiceReferenceFiscalYear,
      cast( P_ACDOCA.rebzt as fis_rebzt preserving type ) as FollowOnDocumentType,
      P_ACDOCA.rebzz                                                                                            as InvoiceItemReference,
      P_ACDOCA.rbest                                                                                            as ReferencePurchaseOrderCategory,
//      @ObjectModel.foreignKey.association: '_PurchasingDocument'
      P_ACDOCA.ebeln                                                                                            as PurchasingDocument,
//      @ObjectModel.foreignKey.association: '_PurchasingDocumentItem'
      P_ACDOCA.ebelp                                                                                            as PurchasingDocumentItem,      
      cast( P_ACDOCA.zekkn as fis_dzekkn preserving type ) as AccountAssignmentNumber,
      P_ACDOCA.sgtxt                                                                                            as DocumentItemText,
      //      @ObjectModel.foreignKey.association: '_SalesOrder'
      //      kdauf                                                                                              as SalesOrder,
      //      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      //      kdpos                                                                                              as SalesOrderItem,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      cast(P_ACDOCA.kdauf as vbeln_va preserving type)                                                          as SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      cast(P_ACDOCA.kdpos as posnr_va preserving type)                                                          as SalesDocumentItem,

      @ObjectModel.foreignKey.association: '_Product'
      cast (P_ACDOCA.matnr as productnumber)                                                                    as Product,
      @ObjectModel.foreignKey.association: '_Plant'
      P_ACDOCA.werks                                                                                            as Plant,
      @ObjectModel.foreignKey.association: '_Supplier'
      P_ACDOCA.lifnr                                                                                            as Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      P_ACDOCA.kunnr                                                                                            as Customer,
      P_ACDOCA.fbuda                                                                                            as ServicesRenderedDate,
      P_ACDOCA.perop_beg as PerformancePeriodStartDate,
      P_ACDOCA.perop_end as PerformancePeriodEndDate,
      @ObjectModel.foreignKey.association: '_ConditionContract'
      P_ACDOCA.coco_num                                                                                         as ConditionContract,
      P_ACDOCA.wwert                                                                                            as ExchangeRateDate,
      
      cast( P_ACDOCA.ucb_id as fis_fucb_id preserving type ) as ComponentBreakdown,
      cast( P_ACDOCA.ucb_scale_numerator as fin_fucb_scale_numerator preserving type ) as CompBreakdownScaleNumerator,
      /////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FI  Unified Journal Entry: Fields for FI subledgers
      /////////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      P_ACDOCA.koart                                                                                            as FinancialAccountType,
      @ObjectModel.foreignKey.association: '_SpecialGLCode'
      P_ACDOCA.umskz                                                                                            as SpecialGLCode,
      //      @ObjectModel.foreignKey.association: '_TaxCode'
      P_ACDOCA.mwskz                                                                                            as TaxCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_TaxCountry'
      P_ACDOCA.tax_country        as  TaxCountry,
      //      @ObjectModel.foreignKey.association: '_HouseBank'
      P_ACDOCA.hbkid                                                                                            as HouseBank,
      //      @ObjectModel.foreignKey.association: '_HouseBankAccount'
      P_ACDOCA.hktid                                                                                            as HouseBankAccount,
//      @Semantics.booleanIndicator
      P_ACDOCA.xopvw                                                                                            as IsOpenItemManaged,
      P_ACDOCA.augdt                                                                                            as ClearingDate,
      
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntryFiscalYear'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'      
cast( P_ACDOCA.auggj as fis_auggj_no_conv_depre preserving type ) as ClearingDocFiscalYear,  
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntry'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntry' 
@ObjectModel.foreignKey.association: '_ClearingAccountingDocument'    
cast( P_ACDOCA.augbl as fis_augbl_depre preserving type ) as ClearingAccountingDocument,      
      
P_ACDOCA.auggj as ClearingJournalEntryFiscalYear,
P_ACDOCA.augbl as ClearingJournalEntry,      
      
      P_ACDOCA.valut                                                                                            as ValueDate,
      P_ACDOCA.AGING         as GeneralLedgerAgingScope,
      P_ACDOCA.AGING_INCRMNT as GeneralLedgerAgingIncrement,

      /////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_FAA  Unified Journal Entry: Fields for Asset Accounting
      /////////////////////////////////////////////////////////////////////////
      P_ACDOCA.afabe                                                                                            as AssetDepreciationArea,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      P_ACDOCA.anln1                                                                                            as MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAsset'
      P_ACDOCA.anln2                                                                                            as FixedAsset,
      P_ACDOCA.bzdat                                                                                            as AssetValueDate,
            @ObjectModel.foreignKey.association: '_AssetTransactionType'
      P_ACDOCA.anbwa                                                                                            as AssetTransactionType,
            @ObjectModel.foreignKey.association: '_MovementCategory'
      P_ACDOCA.movcat                                                                                           as AssetAcctTransClassfctn,
      P_ACDOCA.depr_period                                                                                      as DepreciationFiscalPeriod,
      @ObjectModel.foreignKey.association: '_GroupMasterFixedAsset'
      P_ACDOCA.anlgr                                                                                            as GroupMasterFixedAsset,
      @ObjectModel.foreignKey.association: '_GroupFixedAsset'
      P_ACDOCA.anlgr2                                                                                           as GroupFixedAsset,
      P_ACDOCA.anlkl                                                                                            as AssetClass,
      @ObjectModel.foreignKey.association: '_PartnerMasterFixedAsset'
      P_ACDOCA.panl1                                                                                            as PartnerMasterFixedAsset,
      @ObjectModel.foreignKey.association: '_PartnerFixedAsset'
      P_ACDOCA.panl2                                                                                            as PartnerFixedAsset,

      //////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_ML Unified Journal Entry: Fields for Material Ledger
      //////////////////////////////////////////////////////////////////////////
      P_ACDOCA.kalnr                                                                                            as CostEstimate,
      @ObjectModel.foreignKey.association: '_InventorySpclStockValnType'
      cast( P_ACDOCA.kzbws as fis_inventoryspclstockvalntype preserving type ) as InventorySpecialStockValnType,
      cast( P_ACDOCA.xobew as fis_mlxobew preserving type ) as IsSupplierStockValuation,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      cast( P_ACDOCA.sobkz as fis_inventoryspecialstocktype preserving type ) as InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocument'      
      cast( P_ACDOCA.mat_kdauf as fis_mlmat_kdauf preserving type ) as InventorySpclStkSalesDocument, //  as InventorySpecialStockSalesDocument,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocItm'
      cast( P_ACDOCA.mat_kdpos as fis_mlmat_kdpos preserving type ) as InventorySpclStkSalesDocItm, //  as InventorySpecialStockSalesDocumentItem,
      @ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntBasic'
      cast( P_ACDOCA.mat_pspnr as fis_invspstock_wbsint_no_conv preserving type )                               as InvtrySpclStockWBSElmntIntID,

@API.element.releaseState: #DEPRECATED
@API.element.successor:   'InvtrySpclStockWBSElmntIntID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'InvtrySpclStockWBSElmntIntID'
      cast( P_ACDOCA.mat_ps_posid as fis_invspstock_wbs_no_conv preserving type )                               as InventorySpclStockWBSElement,

      @ObjectModel.foreignKey.association: '_InventorySpecialStockSupplier'
      P_ACDOCA.mat_lifnr                                                                                        as InventorySpecialStockSupplier,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      cast( P_ACDOCA.bwtar as fis_bwtar_d preserving type ) as InventoryValuationType,
      //      @ObjectModel.foreignKey.association: '_Purreqvaluationarea'
      P_ACDOCA.bwkey                                                                                            as ValuationArea,
      
cast(P_ACDOCA.mlptyp as fml_process_type preserving type ) as MaterialLedgerProcessType,
cast(P_ACDOCA.mlcateg as fml_category preserving type ) as MaterialLedgerCategory,
@Aggregation.default: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
cast(P_ACDOCA.hvkwrt as fis_lcrcy_sp_value preserving type ) as SlsPriceAmountInCoCodeCrcy,
cast(P_ACDOCA.vprsv as fml_price_control preserving type ) as ProductPriceControl,

cast( P_ACDOCA.qsbvalt as fis_ml_qsbvalt preserving type ) as ProcurementAlternative,
cast( P_ACDOCA.qsprocess as fis_ml_qsprocess preserving type ) as ProductionProcess,

P_ACDOCA.lbwst as CurPlanProjSlsOrdValnStrategy,

      ////////////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_CFIN   Unified Journal Entry: Fields for Central Finance
      //////////////////////////////////////////////////////////////////////////////
      cast( P_ACDOCA.bukrs_sender as fis_bukrs_sender preserving type ) as SenderCompanyCode,
      //@ObjectModel.foreignKey.association: '_SenderGLAccount'
      P_ACDOCA.racct_sender                                                                                     as SenderGLAccount,
      cast( P_ACDOCA.accas_sender as fis_accas_sender preserving type ) as SenderAccountAssignment,      
      cast( P_ACDOCA.accasty_sender as fis_accasty_sender preserving type ) as SenderAccountAssignmentType,
 

      ////////////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
      ///////////////////////////////////////////////////////////////////////////
      cast( P_ACDOCA.objnr as fis_objnr preserving type)                                                        as ControllingObject,
      //      @ObjectModel.foreignKey.association: '_CostOriginGroup'
      P_ACDOCA.hrkft                                                                                            as ControllingKeySubNumber,      
      P_ACDOCA.hkgrp                                                                                            as CostOriginGroup,
      @ObjectModel.foreignKey.association: '_OriginSenderObject'
      P_ACDOCA.uspob                                                                                            as OriginSenderObject,
      @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'      
      cast( P_ACDOCA.co_belkz as fis_co_belkz preserving type )  as ControllingDebitCreditCode,
      @ObjectModel.foreignKey.association: '_OriginCtrlgDebitCreditCode'
      P_ACDOCA.co_beknz                                                                                         as OriginCtrlgDebitCreditCode,      
      cast( P_ACDOCA.beltp as fis_bp_inout preserving type ) as ControllingObjectDebitType,
      P_ACDOCA.muvflg                                                                                           as QuantityIsIncomplete,
      P_ACDOCA.bureg as SettlementDistributionRuleGrp,
      @ObjectModel.foreignKey.association: '_OffsettingAccount'
      P_ACDOCA.gkont                                                                                            as OffsettingAccount,
      @ObjectModel.foreignKey.association: '_OffsettingAccountType'
      cast( P_ACDOCA.gkoar as fis_gkoar preserving type ) as OffsettingAccountType,
      @ObjectModel.foreignKey.association: '_OffsettingChartOfAccounts'
      case P_ACDOCA.gkoar
        when 'D' then cast ('    ' as fis_offsettingktopl preserving type )
        when 'K' then cast ('    ' as fis_offsettingktopl preserving type )
        else cast( P_ACDOCA.ktopl as fis_offsettingktopl preserving type ) 
      end                                                                                              as OffsettingChartOfAccounts,
      P_ACDOCA.erlkz                                                                                            as LineItemIsCompleted,
      P_ACDOCA.pernr                                                                                            as PersonnelNumber,
      P_ACDOCA.paobjnr as ProfitabilitySegment,
      @ObjectModel.foreignKey.association: '_ControllingObjectClass'
      P_ACDOCA.scope                                                                                            as ControllingObjectClass,
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'      
      cast( P_ACDOCA.pbukrs as fis_pbukrs preserving type ) as PartnerCompanyCode,
      @ObjectModel.foreignKey.association: '_PartnerControllingObjectClass'
      P_ACDOCA.pscope                                                                                           as PartnerControllingObjectClass,
      @ObjectModel.foreignKey.association: '_OriginProfitCenter'
      P_ACDOCA.uprctr                                                                                           as OriginProfitCenter,
            
      @ObjectModel.foreignKey.association: '_OriginOrder'
      P_ACDOCA.aufnr_org                                                                                        as OriginOrder,

      @ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
      P_ACDOCA.ulstar   as OriginCostCtrActivityType,
      @ObjectModel.foreignKey.association: '_OriginCostCenter'
      P_ACDOCA.ukostl as OriginCostCenter,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_OriginProduct'
      P_ACDOCA.UMATNR as OriginProduct,
      P_ACDOCA.VARC_UACCT as VarianceOriginGLAccount,

      P_ACDOCA.accas                                                                                            as AccountAssignment,  
      @Analytics.internalName: #LOCAL    
      @ObjectModel.foreignKey.association: '_AccountAssignmentType'
      P_ACDOCA.accasty                                                                                          as AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      P_ACDOCA.lstar                                                                                            as CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_Order'
      P_ACDOCA.aufnr                                                                                            as OrderID,
      @ObjectModel.foreignKey.association: '_OrderCategory'
      P_ACDOCA.autyp                                                                                            as OrderCategory,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      cast( P_ACDOCA.ps_psp_pnr as fis_wbsint_no_conv preserving type )                                         as WBSElementInternalID,

@API.element.releaseState: #DEPRECATED
@API.element.successor:   'WBSElementInternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'WBSElementInternalID'
      cast( P_ACDOCA.ps_posid as fis_wbs_no_conv preserving type )                                              as WBSElement,

      @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
      cast( P_ACDOCA.pps_psp_pnr as fis_partner_wbsint_no_conv preserving type )                                as PartnerWBSElementInternalID,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    'PartnerWBSElementInternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'PartnerWBSElementInternalID'
      cast( P_ACDOCA.pps_posid as fis_partner_wbs_no_conv preserving type )                                     as PartnerWBSElement,

      @ObjectModel.foreignKey.association: '_ProjectBasicData'
      cast( P_ACDOCA.ps_prj_pnr as fis_projectint_no_conv preserving type )                                     as ProjectInternalID,

@API.element.releaseState: #DEPRECATED
@API.element.successor:   'ProjectInternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ProjectInternalID'
      cast( P_ACDOCA.ps_pspid as fis_project_no_conv preserving type  )                                         as Project,

      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      cast( P_ACDOCA.pps_prj_pnr as fis_part_projectint_no_conv preserving type )                               as PartnerProjectInternalID,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    'PartnerProjectInternalID'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  'PartnerProjectInternalID'
      cast( P_ACDOCA.pps_pspid as fis_part_project_no_conv preserving type )                                    as PartnerProject,

      @ObjectModel.foreignKey.association: '_OperatingConcern'
      P_ACDOCA.erkrs                                                                                            as OperatingConcern,
      //      @ObjectModel.foreignKey.association: '_ProjectNetwork'
      P_ACDOCA.nplnr                                                                                            as ProjectNetwork,
      //      @ObjectModel.foreignKey.association: '_RelatedNetworkActivity'
      P_ACDOCA.nplnr_vorgn                                                                                      as RelatedNetworkActivity,
      @ObjectModel.foreignKey.association: '_BusinessProcess'
      P_ACDOCA.prznr                                                                                            as BusinessProcess,
      P_ACDOCA.kstrg                                                                                            as CostObject,
      //      @ObjectModel.foreignKey.association: '_BillableControl'
      P_ACDOCA.bemot                                                                                            as BillableControl,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      P_ACDOCA.rsrce                                                                                            as CostAnalysisResource,      
      cast( P_ACDOCA.qmnum as fis_qmnum preserving type ) as CustomerServiceNotification,

      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                           element: 'ServiceDocumentType' }
              }]
      //@ObjectModel.foreignKey.association: '_ServiceDocumentType'
      P_ACDOCA.service_doc_type                                                                                 as ServiceDocumentType,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentVH',
                           element: 'ServiceDocument' }
              }]
      //@ObjectModel.foreignKey.association: '_ServiceDocument'
      P_ACDOCA.service_doc_id                                                                                   as ServiceDocument,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                           element: 'ServiceDocumentItem' }
              }]
      //@ObjectModel.foreignKey.association: '_ServiceDocumentItem'
      P_ACDOCA.service_doc_item_id                                                                              as ServiceDocumentItem,

      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentTypeVH',
                           element: 'ServiceDocumentType' }
              }]
      //@ObjectModel.foreignKey.association: '_PartnerServiceDocumentType'
      cast( P_ACDOCA.pservice_doc_type as fis_psrvdoc_type preserving type )  as PartnerServiceDocumentType,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentVH',
                           element: 'ServiceDocument' }
              }]
      //@ObjectModel.foreignKey.association: '_PartnerServiceDocument'     
      cast( P_ACDOCA.pservice_doc_id as fis_psrvdoc_id preserving type ) as PartnerServiceDocument,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceDocumentItemVH',
                           element: 'ServiceDocumentItem' }
              }]
      //@ObjectModel.foreignKey.association: '_PartnerServiceDocumentItem'
      cast( P_ACDOCA.pservice_doc_item_id as fis_psrvdoc_item_id preserving type ) as PartnerServiceDocumentItem,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_ServiceContractTypeStdVH',
                           element: 'ServiceDocumentType' }
              }]

      //@ObjectModel.foreignKey.association: '_ServiceContractType'
      P_ACDOCA.service_contract_type                                                                            as ServiceContractType,
      @Consumption.valueHelpDefinition: [
              { entity:  { name:    'I_AcctgServiceContractVH',
                           element: 'ServiceContract' }
              }]
      //@Analytics.internalName: #LOCAL
      //@ObjectModel.foreignKey.association: '_ServiceContract'
      P_ACDOCA.service_contract_id                                                                              as ServiceContract,
      //@ObjectModel.foreignKey.association: '_ServiceContractItem'
      P_ACDOCA.service_contract_item_id                                                                         as ServiceContractItem,

P_ACDOCA.solution_order_id as BusinessSolutionOrder,
P_ACDOCA.solution_order_item_id as BusinessSolutionOrderItem,

      @ObjectModel.foreignKey.association: '_ProviderContract'
      P_ACDOCA.vtkey as ProviderContract,
      @ObjectModel.foreignKey.association: '_ProviderContractItem'
      P_ACDOCA.vtpos as ProviderContractItem,
      
      P_ACDOCA.ra_contract_id as RevenueAccountingContract,
      P_ACDOCA.ra_pob_id as PerformanceObligation,         

      //@ObjectModel.foreignKey.association: '_TimeSheetOvertimeCat'
      P_ACDOCA.overtimecat                                                                                      as TimeSheetOvertimeCategory,
      P_ACDOCA.paccas                                                                                           as PartnerAccountAssignment,
      P_ACDOCA.paccasty                                                                                         as PartnerAccountAssignmentType,      
      P_ACDOCA.co_accasty_n1 as StstclAccountAssignmentType1,
      P_ACDOCA.co_accasty_n2 as StstclAccountAssignmentType2,
      P_ACDOCA.co_accasty_n3 as StstclAccountAssignmentType3,       
      
      cast( P_ACDOCA.ps_posid as /cpd/plan_item_id )                                                            as WorkPackage,
      P_ACDOCA.work_item_id                                                                                     as WorkItem,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      P_ACDOCA.plstar                                                                                           as PartnerCostCtrActivityType,
         
      @ObjectModel.foreignKey.association: '_PartnerOrder'
      P_ACDOCA.paufnr as PartnerOrder,

      @ObjectModel.foreignKey.association: '_PartnerOrderCategory'
      P_ACDOCA.pautyp                                                                                           as PartnerOrderCategory,
      @ObjectModel.foreignKey.association: '_PartnerSalesDocument'
      P_ACDOCA.pkdauf                                                                                           as PartnerSalesDocument,
      @ObjectModel.foreignKey.association: '_PartnerSalesDocumentItem'
      P_ACDOCA.pkdpos                                                                                           as PartnerSalesDocumentItem,      
      cast( P_ACDOCA.pnplnr as fis_par_npln preserving type ) as PartnerProjectNetwork,
      //      @ObjectModel.foreignKey.association: '_PartnerProjectNetworkActivity'      
      P_ACDOCA.pnplnr_vorgn as PartnerProjectNetworkActivity,
      @ObjectModel.foreignKey.association: '_PartnerBusinessProcess'
      cast( P_ACDOCA.pprznr as fis_par_prznr preserving type ) as PartnerBusinessProcess,     
      P_ACDOCA.pkstrg                                                                                           as PartnerCostObject,
      cast( P_ACDOCA.co_buzei as co_buzei_acd preserving type  ) as ControllingDocumentItem,
      
      P_ACDOCA.varc_hkgrp as VarianceOriginGroup, 

      //////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
      //////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      P_ACDOCA.fkart                                                                                            as BillingDocumentType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      P_ACDOCA.vkorg                                                                                            as SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      P_ACDOCA.vtweg                                                                                            as DistributionChannel,
      P_ACDOCA.spart                                                                                            as OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SoldProduct'
      P_ACDOCA.matnr_copa                                                                                       as SoldProduct,
      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      P_ACDOCA.matkl                                                                                            as SoldProductGroup,

      @ObjectModel.foreignKey.association: '_CustomerGroup'
      P_ACDOCA.kdgrp                                                                                            as CustomerGroup,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'      
      cast( P_ACDOCA.land1 as fis_land1_gp preserving type ) as CustomerSupplierCountry,            
      cast( P_ACDOCA.brsch as fis_brsch preserving type ) as CustomerSupplierIndustry,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      P_ACDOCA.bzirk                                                                                            as SalesDistrict,
      P_ACDOCA.kunre                                                                                            as BillToParty,
      P_ACDOCA.kunwe                                                                                            as ShipToParty,
      cast( P_ACDOCA.konzs as fis_konzs preserving type ) as CustomerSupplierCorporateGroup,


      //////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_PS  Unified Journal Entry: Fields for Public Sector
      /////////////////////////////////////////////////////////////////////
      @ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
      P_ACDOCA.re_bukrs                                                                                         as CashLedgerCompanyCode,

      @ObjectModel.foreignKey.association: '_CashLedgerAccount'
      P_ACDOCA.re_account                                                                                       as CashLedgerAccount,

      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      P_ACDOCA.fikrs                                                                                            as FinancialManagementArea,
      
      P_ACDOCA.fipex as CommitmentItem,      

      @ObjectModel.foreignKey.association: '_FundsCenter'
      P_ACDOCA.fistl                                                                                            as FundsCenter,

      @ObjectModel.foreignKey.association: '_FundedProgram'
      P_ACDOCA.measure                                                                                          as FundedProgram,

      @ObjectModel.foreignKey.association: '_Fund'
      P_ACDOCA.rfund                                                                                            as Fund,

      @ObjectModel.foreignKey.association: '_Grant'
      P_ACDOCA.rgrant_nbr                                                                                       as GrantID,

      @ObjectModel.foreignKey.association: '_BudgetPeriod'
      P_ACDOCA.rbudget_pd                                                                                       as BudgetPeriod,

      @ObjectModel.foreignKey.association: '_PartnerFund'
      P_ACDOCA.sfund                                                                                            as PartnerFund,

      @ObjectModel.foreignKey.association: '_PartnerGrant'
      P_ACDOCA.sgrant_nbr                                                                                       as PartnerGrant,

      @ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'     
      cast( P_ACDOCA.sbudget_pd as fis_fm_pbudget_period preserving type ) as PartnerBudgetPeriod,

      @ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
      P_ACDOCA.bdgt_account                                                                                     as PubSecBudgetAccount,

      @ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
      P_ACDOCA.bdgt_account_cocode                                                                              as PubSecBudgetAccountCoCode,

      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnDate'
      P_ACDOCA.bdgt_cnsmpn_date                                                                                 as PubSecBudgetCnsmpnDate,

      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclPeriod'
      P_ACDOCA.bdgt_cnsmpn_period                                                                               as PubSecBudgetCnsmpnFsclPeriod,

      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclYear'
      P_ACDOCA.bdgt_cnsmpn_year                                                                                 as PubSecBudgetCnsmpnFsclYear,

      P_ACDOCA.bdgt_relevant                                                                                    as PubSecBudgetIsRelevant,

      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnType'
      P_ACDOCA.bdgt_cnsmpn_type                                                                                 as PubSecBudgetCnsmpnType,

      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnAmtType'
      P_ACDOCA.bdgt_cnsmpn_amount_type                                                                          as PubSecBudgetCnsmpnAmtType,

//      @ObjectModel.foreignKey.association: '_SponsoredProgram'
      P_ACDOCA.rsponsored_prog as SponsoredProgram,

//      @ObjectModel.foreignKey.association: '_SponsoredClass'
      P_ACDOCA.rsponsored_class as SponsoredClass,
      
      P_ACDOCA.rbdgt_vldty_nbr as GteeMBudgetValidityNumber,     
      
      P_ACDOCA.kblnr as EarmarkedFundsDocument,
      P_ACDOCA.kblpos as EarmarkedFundsDocumentItem,       
      
      
      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_JVA  Universal Journal Entry: Fields for Financial Services
      ///////////////////////////////////////////////////////////////////////
P_ACDOCA.FS_PRODUCT_GROUP as FinancialServicesProductGroup,
P_ACDOCA.BRANCH_ID as FinancialServicesBranch,
P_ACDOCA.DATASOURCE_ID as FinancialDataSource,
        

      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_JVA  Unified Journal Entry: Fields for Joint Venture Accounting
      ///////////////////////////////////////////////////////////////////////
      P_ACDOCA.vname                                                                                            as JointVenture,
      cast( P_ACDOCA.egrup as jv_egroup_cds preserving type )                                                   as JointVentureEquityGroup,
      cast( P_ACDOCA.recid as jv_recind_cds preserving type )                                                   as JointVentureCostRecoveryCode,
      cast( P_ACDOCA.vptnr as jv_part_cds preserving type )                                                     as JointVenturePartner,
      cast( P_ACDOCA.btype as jv_bilind_cds preserving type )                                                   as JointVentureBillingType,
      cast( P_ACDOCA.etype as jv_etype_cds preserving type )                                                    as JointVentureEquityType,
      cast( P_ACDOCA.prodper as jv_prodper_cds preserving type )                                                as JointVentureProductionDate,
      cast( P_ACDOCA.billm as jv_billm_cds preserving type )                                                    as JointVentureBillingDate,
      cast( P_ACDOCA.pom as jv_pom_cds preserving type )                                                        as JointVentureOperationalDate,
      cast( P_ACDOCA.cbrunid as jv_cbrunid_cds preserving type )                                                as CutbackRun,
      cast( P_ACDOCA.jvactivity as jv_activity_cds preserving type )                                            as JointVentureAccountingActivity,
      cast( P_ACDOCA.pvname as jv_pvname_cds preserving type )                                                  as PartnerVenture,
      cast( P_ACDOCA.pegrup as jv_pegrup_cds preserving type )                                                  as PartnerEquityGroup,
      cast( P_ACDOCA.s_recind as jv_srecind_cds preserving type )                                               as SenderCostRecoveryCode,
      cast( P_ACDOCA.cbracct as jv_cbracct_cds preserving type )                                                as CutbackAccount,
      cast( P_ACDOCA.cbobjnr as jv_cbobjnr_cds preserving type )                                                as CutbackCostObject,

      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_RE STRU  0 0 Unified Journal Entry: Fields for Real Estate
      ///////////////////////////////////////////////////////////////////////
      P_ACDOCA.SWENR as REBusinessEntity,
      P_ACDOCA.SGENR as RealEstateBuilding,
      P_ACDOCA.SGRNR as RealEstateProperty,
      P_ACDOCA.SMENR as RERentalObject,
      P_ACDOCA.RECNNR as RealEstateContract,
P_ACDOCA.snksl as REServiceChargeKey,
P_ACDOCA.sempsl as RESettlementUnitID,      
cast( P_ACDOCA.dabrz as fis_dabrbez preserving type ) as SettlementReferenceDate,      
P_ACDOCA.pswenr as REPartnerBusinessEntity,
P_ACDOCA.psgenr as RealEstatePartnerBuilding,
P_ACDOCA.psgrnr as RealEstatePartnerProperty,
P_ACDOCA.psmenr as REPartnerRentalObject,
P_ACDOCA.precnnr as RealEstatePartnerContract,
P_ACDOCA.psnksl as REPartnerServiceChargeKey,
P_ACDOCA.psempsl as REPartnerSettlementUnitID,
P_ACDOCA.pdabrz as PartnerSettlementReferenceDate,


      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_ACR STRU  0 0 Universal Journal Entry: Fields for Accrual object
      ///////////////////////////////////////////////////////////////////////
      //   AccrualObject      --(1:N)-->  AccrualSubobject  --(1:N)-->  Accrual(Subobject)Item (this field is not stored in ACDOCA)
      //   AccrualObjectType                                            AccrualItemType  are the corresponding types
      //@ObjectModel.foreignKey.association: '_AccrualObjectType'
      P_ACDOCA.acrobjtype   as AccrualObjectType,
      P_ACDOCA.acrlogsys    as AccrualObjectLogicalSystem,
      //@ObjectModel.foreignKey.association: '_AccrualObject'
      P_ACDOCA.acrobj_id    as AccrualObject,
      //@ObjectModel.foreignKey.association: '_AccrualSubobject'
      P_ACDOCA.acrsobj_id   as AccrualSubobject,
      //@ObjectModel.foreignKey.association: '_AccrualItemType'
      P_ACDOCA.acritmtype   as AccrualItemType,
      P_ACDOCA.acrrefobj_id as AccrualReferenceObject,
      P_ACDOCA.acrvaldat    as AccrualValueDate,


      ///////////////////////////////////////////////////////////////////////
      // .INCLUDE ACDOC_SI_VAL STRU  0 0 Universal Journal Entry: Fields for Fin. Valuation Object
      ///////////////////////////////////////////////////////////////////////      
      cast( P_ACDOCA.valobjtype as fis_val_obj_type preserving type ) as FinancialValuationObjectType,    
      cast( P_ACDOCA.valobj_id as fis_val_obj_id preserving type ) as FinancialValuationObject,
      cast( P_ACDOCA.valsobj_id as fis_val_subobj_id preserving type ) as FinancialValuationSubobject,
      P_ACDOCA.netdt                                                                                            as NetDueDate,
      P_ACDOCA.risk_class                                                                                       as CreditRiskClass,

      //////////////////////////////////////////////////////////////////////
      //  .INCLUDE  ACDOC_SI_LOG  Universal Journal Entry: Fields for Logistics
      //////////////////////////////////////////////////////////////////////

      P_ACDOCA.arbid                                                                                            as WorkCenterInternalID,
      P_ACDOCA.vornr                                                                                            as OrderOperation,
      P_ACDOCA.aufps                                                                                            as OrderItem,
      P_ACDOCA.paufps                                                                                           as PartnerOrderItem,

      //////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_LOG_ACT:  New Fields  PM  //
      //////////////////////////////////////////////////
      //  @ObjectModel.foreignKey.association: '_MaintenanceOrderSubOperation'      // Triangle Condition
      P_ACDOCA.uvorn                                                                                            as OrderSuboperation,
      @ObjectModel.foreignKey.association: '_Equipment'
      P_ACDOCA.equnr                                                                                            as Equipment,
      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      P_ACDOCA.tplnr                                                                                            as FunctionalLocation,
      @ObjectModel.foreignKey.association: '_Assembly'
      P_ACDOCA.istru                                                                                            as Assembly,
      @ObjectModel.foreignKey.association: '_MaintenanceActivityType'
      P_ACDOCA.ilart                                                                                            as MaintenanceActivityType,
      //@ObjectModel.foreignKey.association: '_MaintOrdPlngDegreeCode'
      P_ACDOCA.plknz                                                                                            as MaintenanceOrderPlanningCode,
      //@ObjectModel.foreignKey.association: '_PMNotificationPriorityType'
      P_ACDOCA.artpr                                                                                            as MaintPriorityType,
      //@ObjectModel.foreignKey.association: '_PMNotificationPriority'
      P_ACDOCA.priok                                                                                            as MaintPriority,
      //@ObjectModel.foreignKey.association: '_SuperiorOrder'
      P_ACDOCA.maufnr                                                                                           as SuperiorOrder,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      cast( P_ACDOCA.matkl_mm  as fis_matkl_mm preserving type )                                                as ProductGroup,
      P_ACDOCA.planned_parts_work                                                                               as MaintenanceOrderIsPlanned,
      P_ACDOCA.vornr_org as OriginOrderOperation,
      
      
      //////////////////////////////////////////////////////////////////////////
      // .INCLUDE  ACDOC_SI_TECH:  Universal Journal Entry: Technical Fields  //
      ////////////////////////////////////////////////////////////////////////// 
P_ACDOCA.mig_source as JrnlEntryItemMigrationSource,
      

      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      //   case drcrk  when 'S' then  cast( hsl as fis_dr_hsl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_hsl preserving type)
      //   end as DebitAmountInCoCodeCrcy,
      //   @Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      //   case drcrk  when 'H' then  cast( hsl as fis_cr_hsl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_hsl preserving type)
      //   end as CreditAmountInCoCodeCrcy,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      //   case drcrk  when 'S' then  cast( wsl as fis_dr_wsl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_wsl preserving type)
      //   end as DebitAmountInTransCrcy,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      //   case drcrk  when 'H' then  cast( wsl as fis_cr_wsl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_wsl preserving type)
      //   end as CreditAmountInTransCrcy,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      //   case drcrk  when 'S' then  cast( tsl as fis_dr_tsl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_tsl preserving type)
      //   end as DebitAmountInBalanceTransCrcy,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      //   case drcrk  when 'H' then  cast( tsl as fis_cr_tsl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_tsl preserving type)
      //   end as CreditAmountInBalanceTransCrcy,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      //   case drcrk  when 'S' then  cast( ksl as fis_dr_ksl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_ksl preserving type)
      //   end as DebitAmountInGlobalCrcy,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      //   case drcrk  when 'H' then  cast( ksl as fis_cr_ksl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_ksl preserving type)
      //   end as CreditAmountInGlobalCrcy,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      //   case drcrk  when 'S' then  cast( osl as fis_dr_osl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_osl preserving type)
      //   end as DebitAmountInFreeDfndCrcy1,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      //   case drcrk  when 'H' then  cast( osl as fis_cr_osl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_osl preserving type)
      //   end as CreditAmountInFreeDfndCrcy1,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      //   case drcrk  when 'S' then  cast( vsl as fis_dr_vsl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_vsl preserving type)
      //   end as DebitAmountInFreeDfndCrcy2,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      //   case drcrk  when 'H' then  cast( vsl as fis_cr_vsl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_vsl preserving type)
      //   end as CreditAmountInFreeDfndCrcy2,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      //   case drcrk  when 'S' then  cast( bsl as fis_dr_bsl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_bsl preserving type)
      //   end as DebitAmountInFreeDfndCrcy3,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      //   case drcrk  when 'H' then  cast( bsl as fis_cr_bsl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_bsl preserving type)
      //   end as CreditAmountInFreeDfndCrcy3,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      //   case drcrk  when 'S' then  cast( csl as fis_dr_csl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_csl preserving type)
      //   end as DebitAmountInFreeDfndCrcy4,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      //   case drcrk  when 'H' then  cast( csl as fis_cr_csl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_csl preserving type)
      //   end as CreditAmountInFreeDfndCrcy4,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      //   case drcrk  when 'S' then  cast( dsl as fis_dr_dsl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_dsl preserving type)
      //   end as DebitAmountInFreeDfndCrcy5,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      //   case drcrk  when 'H' then  cast( dsl as fis_cr_dsl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_dsl preserving type)
      //   end as CreditAmountInFreeDfndCrcy5,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      //   case drcrk  when 'S' then  cast( esl as fis_dr_esl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_esl preserving type)
      //   end as DebitAmountInFreeDfndCrcy6,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      //   case drcrk  when 'H' then  cast( esl as fis_cr_esl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_esl preserving type)
      //   end as CreditAmountInFreeDfndCrcy6,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      //   case drcrk  when 'S' then  cast( fsl as fis_dr_fsl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_fsl preserving type)
      //   end as DebitAmountInFreeDfndCrcy7,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      //   case drcrk  when 'H' then  cast( fsl as fis_cr_fsl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_fsl preserving type)
      //   end as CreditAmountInFreeDfndCrcy7,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      //   case drcrk  when 'S' then  cast( gsl as fis_dr_gsl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_dr_gsl preserving type)
      //   end as DebitAmountInFreeDfndCrcy8,
      //
      //@Aggregation.default: #SUM
      //@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      //   case drcrk  when 'H' then  cast( gsl as fis_cr_gsl preserving type)
      //                        else  cast( cast( '0' as abap.curr( 23,2))   as fis_cr_gsl preserving type)
      //   end as CreditAmountInFreeDfndCrcy8,
      //
      //
      //case when ( accasty != 'OR' and accasty != 'OP' and accasty != 'OV' ) and aufnr != ''    then cast( 'X' as fins_xaufnr_stat preserving type)
      //                                                                                         else cast( ' ' as fins_xaufnr_stat preserving type)
      //end as IsStatisticalOrder,
      //
      //case when ( accasty != 'KL' and accasty != 'KS' ) and rcntr != ''    then cast( 'X' as fins_xkostl_stat preserving type)
      //                                                                     else cast( ' ' as fins_xkostl_stat preserving type)
      //end as IsStatisticalCostCenter,
      //
      //case when accasty != 'VB' and kdauf != ''   then cast( 'X' as fins_xkdpos_stat preserving type)
      //                                            else cast( ' ' as fins_xkdpos_stat preserving type)
      //end as IsStatisticalSalesDocument,
      //
      //case when ( accasty != 'PR' ) and ( ps_posid != ' ' and ps_pspid != ' ' ) then cast( 'X' as fins_xps_posid_stat preserving type )
      //                                                                          else cast( ' ' as fins_xps_posid_stat preserving type )
      //end as WBSIsStatisticalWBSElement,


      ///////////////////////////////////////////////////////////////////////////////
      // Associations
      ///////////////////////////////////////////////////////////////////////////////

      _JournalEntry,
      _CompanyCode,
      _FiscalYear,
      _FiscalPeriodForVariant,
      _LedgerFiscalYearForVariant,
      _FiscalYearVariant,
      _FiscalYearPeriodForVariant,
      _CalendarDate,
      _FiscalCalendarDate,
      _ControllingArea,
      _BalanceTransactionCurrency,
      _TransactionCurrency,
      _CompanyCodeCurrency,
      _GlobalCurrency,
      _FunctionalCurrency,
      _FreeDefinedCurrency1,
      _FreeDefinedCurrency2,
      _FreeDefinedCurrency3,
      _FreeDefinedCurrency4,
      _FreeDefinedCurrency5,
      _FreeDefinedCurrency6,
      _FreeDefinedCurrency7,
      _FreeDefinedCurrency8,
      _BaseUnit,
      _CostSourceUnit,
      _AdditionalQuantity1Unit,
      _AdditionalQuantity2Unit,
      _AdditionalQuantity3Unit,
      _ReferenceQuantityUnit,
      _IncmpltSummableValnQtyUnt,
      _Segment,
      _ProfitCenter,
      _CostCenter,
      _CostAnalysisResource,
      _AccountAssignmentType,

      _PartnerWBSElementBasicData,
      _BusinessArea,
      _FunctionalArea,
      _GLAccountInChartOfAccounts,
      _GLAccountInCompanyCode,
      _ChartOfAccounts,
      _AccountingDocumentType,
      _FinancialAccountType,
      _DebitCreditCode,
      _Product,
      _Plant,
      _Ledger,
      //      _SourceLedger,
      //      @UI.hidden: true
      //      _SourceLedgerText,

      _Customer,
      _CustomerCompany,
      _CustomerGroup,

      _Supplier,
      _SupplierCompany,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ProductGroup_2'
_ProductGroup,
_ProductGroup_2,

@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProductGroup_2'
_SoldProductGroup,
_SoldProductGroup_2,

      //      _SalesOrder,
      //      _SalesOrderItem,
      _SalesDocument,
      _SalesDocumentItem,

      //      _InternalOrder,
      _Order,
      _OriginOrder,

      _FinancialTransactionType,
      _BusinessTransactionCategory,
      _BusinessTransactionType,
      //      _ControllingBusTransacType,
      _ReferenceDocumentType,
_PredecessorReferenceDocType,
      _PartnerCostCenter,
      _PartnerProfitCenter,
      _PartnerBusinessArea,
      _PartnerFunctionalArea,
      _PartnerCompanyCode,
      _PartnerSegment,

      _AccountingDocumentCategory,

      _PostingKey,
      _SubLedgerAccLineItemType,
      //      _User,

      _EliminationProfitCenter,

      //_ControllingObject,

      _GLAccountType,
      _OffsettingAccountType,
      _OffsettingChartOfAccounts,
      _OffsettingAccount,

      _AlternativeGLAccount,
      _CountryChartOfAccounts,

//      _PurchasingDocument,
//      _PurchasingDocumentItem,

      _SpecialGLCode,
      _TaxCode,
      _TaxCountry,
      //      _HouseBank,

_ClearingJrnlEntryFiscalYear,
_ClearingJournalEntry,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ClearingJournalEntry'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ClearingJournalEntry'
_ClearingAccountingDocument,      

      _MasterFixedAsset,
      _GroupMasterFixedAsset,
      _PartnerMasterFixedAsset,
      _FixedAsset,
      _GroupFixedAsset,
      _PartnerFixedAsset,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_InventorySpclStockValnType'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_InventorySpclStockValnType'
      _InventorySpecialStockValnType,
      _InventorySpclStockValnType,
      _InventorySpecialStockType,
      _InventorySpclStkSalesDocument,
      _InventorySpclStkSalesDocItm,
      _InvtrySpclStockWBSElmntBasic,     // do not use
      _InvtrySpclStkWBSElmntBscData,
      _InventorySpecialStockSupplier,
      _InventoryValuationType,
      _ControllingDebitCreditCode,
      _OriginCtrlgDebitCreditCode,
      _OriginSenderObject,
      _ControllingObjectClass,
      _PartnerControllingObjectClass,
      _OriginCostCenter,
      _OriginProfitCenter,
      _CostCtrActivityType,
      _OriginCostCtrActivityType,
      _OrderCategory,
      //_RelatedNetworkActivity,
      //_PartnerProjectNetworkActivity,

      _BusinessProcess,
      _PartnerCostCtrActivityType,     
      _PartnerOrder,
      _PartnerOrderCategory,
      _PartnerSalesDocument,
      _PartnerSalesDocumentItem,
      _PartnerBusinessProcess,
      _BillingDocumentType,

      _SalesOrganization,
      _DistributionChannel,
      _SoldProduct,
      _OriginProduct,
            _MovementCategory,
            _AssetTransactionType,
      _CostOriginGroup,
      _CustomerSupplierCountry,
      _SalesDistrict,
      _BillToParty,
      _ShipToParty,
      //      _HouseBankAccount,
      //      _LogicalSystem,
      _OperatingConcern,
      _PartnerCompany,
      //      _ProjectNetwork,
            _ValuationArea,
      _WorkCenter,
            _BillableControl,
      _ServiceDocumentType,
      _ServiceDocument,
      _ServiceDocumentItem,
      _ServiceContract,
      _ServiceContractItem,
      _ServiceContractType,
      _PartnerServiceDocumentType,
      _PartnerServiceDocument,
      _PartnerServiceDocumentItem,
      _ConditionContract,
      _Equipment,
      _FunctionalLocation,
      _MaintenanceActivityType,
      //_MaintOrdPlngDegreeCode,
      //_PMNotificationPriorityType,
      //_PMNotificationPriority,
      _MaintenanceOrder,
      _MaintenanceOrderOperation,
      _MaintenanceOrderSubOperation,
      _Assembly,
      //_SuperiorOrder,
      _WorkPackage,
      _WorkPackageWorkItem,
      _TimeSheetOvertimeCat,
      _WBSElementBasicData,
      _ProjectBasicData,
      _PartnerProjectBasicData,

      _AccrualObjectType,
      _AccrualObject,
      _AccrualSubobject,
      _AccrualItemType,

      _CreditRiskClass,
      _FinValuationObjectType,

      _SemTagGLAccount,

      _CashLedgerCompanyCode,
      _CashLedgerAccount,
      _FinancialManagementArea,
      _FundsCenter,
      _FundedProgram,
      _Fund,
      _Grant,
      _BudgetPeriod,
      _PartnerFund,
      _PartnerGrant,
      _PartnerBudgetPeriod,
      _PubSecBudgetAccountCoCode,
      _PubSecBudgetAccount,
      _PubSecBudgetCnsmpnDate,
      _PubSecBudgetCnsmpnFsclPeriod,
      _PubSecBudgetCnsmpnFsclYear,
      _PubSecBudgetCnsmpnType,
      _PubSecBudgetCnsmpnAmtType,
      _SponsoredProgram,
      _SponsoredClass,
      
      _ConsolidationUnit,
      _PartnerConsolidationUnit,
      _Company,
      _ConsolidationChartOfAccounts,
      _CnsldtnFinancialStatementItem,
      _CnsldtnSubitemCategory,
      _CnsldtnSubitem,     

      _ProviderContract,
      _ProviderContractItem,
      _JrnlEntryItemObsoleteRsn

      //_Extension  Extensions must be local
}
```
