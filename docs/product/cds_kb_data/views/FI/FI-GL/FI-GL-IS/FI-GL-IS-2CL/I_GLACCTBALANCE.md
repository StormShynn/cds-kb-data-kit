---
name: I_GLACCTBALANCE
description: "This CDS view provides balances of various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances of a specific time frame? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCE')/$value
semantic_en: "This CDS view provides balances of various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances of a specific time frame? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center?"
semantic_vi: "G/L Account Balance — CDS view giao diện dựa trên P_GLAcctBalance."
keywords:
  - "g/l"
  - "account"
  - "balance"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "source"
  - "accounting"
  - "document"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_GLACCTBALANCE

**This CDS view provides balances of various dimensions of the journal entry including the most important business entities, such as G/L account, company code, cost center or profit center. Other attributes and hierarchies can be reached via associations. The CDS view also contains all balance carry forward postings. This CDS view provides the prerequisites for answering the following business questions: What are the G/L account balances and G/L account ending balances of a specific time frame? What are the balances within the G/L account hierarchy? What is the revenue drilled down by profit center?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  | `cast( P_GLAcctBalance.rldnr as fis_rldnr preserving type)` | `CHAR(2)` | Ledger |
| `CompanyCode` | ✓ | |  | `cast( P_GLAcctBalance.rbukrs as fis_bukrs preserving type)` | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  | `cast( P_GLAcctBalance.gjahr as fis_gjahr_no_conv preserving type)` | `NUMC(4)` | Fiscal Year |
| `SourceLedger` | ✓ | |  | `cast( P_GLAcctBalance.rldnr_pers as fins_ledger_pers preserving type)` | `CHAR(2)` | Source Ledger |
| `AccountingDocument` | ✓ | |  | `belnr` | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  | `docln` | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountFlowType` | ✓ | |  |  | `CHAR(10)` | G/L Account Flow Type |
| `FiscalPeriodDate` | ✓ | |  |  | `CHAR(11)` | Fiscal Period Date |
| `LedgerFiscalYear` |  | |  | `ryear` | `NUMC(4)` | Fiscal Year of Ledger |
| `FinancialTransactionType` |  | |  | `rmvct` | `CHAR(3)` | Financial Transaction Type |
| `BusinessTransactionType` |  | |  | `bttype` | `CHAR(4)` | Business Transaction Type |
| `ReferenceDocumentType` |  | |  | `cast( P_GLAcctBalance.awtyp as fis_awtyp )` | `CHAR(5)` | Reference Document Type |
| `LogicalSystem` |  | |  | `awsys` | `CHAR(10)` | Logical System |
| `ReferenceDocumentContext` |  | |  | `aworg` | `CHAR(10)` | Reference Document Context |
| `ReferenceDocument` |  | |  | `awref` | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentItem` |  | |  | `awitem` | `NUMC(6)` | Reference Document Item |
| `ReferenceDocumentItemGroup` |  | |  | `awitgrp` | `NUMC(6)` | Reference Document Item Group |
| `IsReversal` |  | |  | `xreversing` | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | |  | `xreversed` | `CHAR(1)` | Indicator: Item is Reversed |
| `ReversalReferenceDocumentCntxt` |  | |  | `aworg_rev` | `CHAR(10)` | Reversal Reference Document Context |
| `ReversalReferenceDocument` |  | |  | `awref_rev` | `CHAR(10)` | Reversal Reference Document |
| `IsSettlement` |  | |  | `xsettling` | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `IsSettled` |  | |  | `xsettled` | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `PredecessorReferenceDocType` |  | |  | `prec_awtyp` | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocCntxt` |  | |  | `prec_aworg` | `CHAR(10)` | Predecessor Reference Document Context |
| `PredecessorReferenceDocument` |  | |  | `prec_awref` | `CHAR(10)` | Predecessor Reference Document |
| `PredecessorReferenceDocItem` |  | |  | `prec_awitem` | `NUMC(6)` | Predecessor Reference Document Item |
| `GLAccount` |  | |  | `racct` | `CHAR(10)` | G/L Account |
| `GLAccountHierarchy` |  | |  | `racct` | `CHAR(10)` | G/L Account |
| `ProfitCenter` |  | |  | `prctr` | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  | `rfarea` | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  | `rbusa` | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `Segment` |  | |  | `segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` |  | |  | `scntr` | `CHAR(10)` | Partner Cost Center |
| `PartnerProfitCenter` |  | |  | `pprctr` | `CHAR(10)` | Partner Profit Center |
| `PartnerFunctionalArea` |  | |  | `sfarea` | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  | `sbusa` | `CHAR(4)` | Partner Business Area |
| `PartnerCompany` |  | |  | `rassc` | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` |  | |  | `psegment` | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `DebitCreditCode` |  | |  | `drcrk` | `CHAR(1)` | Debit/Credit Code |
| `FiscalYearVariant` |  | |  | `periv` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  | `fiscyearper` | `NUMC(7)` | Fiscal Year Period |
| `PostingDate` |  | |  | `budat` | `DATS(8)` | End Date of Fiscal Period |
| `AccountingDocumentType` |  | |  | `blart` | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentItem` |  | |  | `buzei` | `NUMC(3)` | Journal Entry Posting View Item |
| `AssignmentReference` |  | |  | `zuonr` | `CHAR(18)` | Assignment Reference |
| `PostingKey` |  | |  | `bschl` | `CHAR(2)` | Posting Key |
| `AccountingDocumentCategory` |  | |  | `bstat` | `CHAR(1)` | Journal Entry Category |
| `TransactionTypeDetermination` |  | |  | `ktosl` | `CHAR(3)` | Transaction Key |
| `SubLedgerAcctLineItemType` |  | |  | `slalittype` | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AccountingDocCreatedByUser` |  | |  | `usnam` | `CHAR(12)` | User that created the journal entry |
| `EliminationProfitCenter` |  | |  | `eprctr` | `CHAR(10)` | Elimination Profit Center |
| `OriginObjectType` |  | |  | `rhoart` | `NUMC(2)` | Type of Origin Object |
| `GLAccountType` |  | |  | `glaccount_type` | `CHAR(1)` | Type of a General Ledger Account |
| `ChartOfAccounts` |  | |  | `ktopl` | `CHAR(4)` | Chart of Accounts |
| `AlternativeGLAccount` |  | |  | `lokkt` | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` |  | |  | `ktop2` | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Creation Date Time |
| `InvoiceReference` |  | |  | `rebzg` | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` |  | |  | `rebzj` | `NUMC(4)` | Invoice Reference Fiscal Year |
| `FollowOnDocumentType` |  | |  | `rebzz` | `CHAR(1)` | Follow-On Document Type |
| `InvoiceItemReference` |  | |  | `rebzt` | `NUMC(3)` | Invoice Item Reference |
| `ReferencePurchaseOrderCategory` |  | |  | `rbest` | `NUMC(3)` | Category of Reference Purchase Order |
| `PurchasingDocument` |  | |  | `ebeln` | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` |  | |  | `ebelp` | `NUMC(5)` | Purchasing Document Item |
| `AccountAssignmentNumber` |  | |  | `zekkn` | `NUMC(2)` | Account Assignment Number |
| `DocumentItemText` |  | |  | `sgtxt` | `CHAR(50)` | Item Text |
| `Plant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `Supplier` |  | |  | `lifnr` | `CHAR(10)` | Supplier |
| `Customer` |  | |  | `kunnr` | `CHAR(10)` | Customer Number |
| `Material` |  | |  | `cast( P_GLAcctBalance.matnr as fis_productnumber_depr preserving type )` | `CHAR(40)` | Product (Deprecated) |
| `Product` |  | |  | `matnr` | `CHAR(40)` | Product |
| `SoldMaterial` |  | |  | `cast( P_GLAcctBalance.matnr_copa as fis_matnr_pa_depr preserving type )` | `CHAR(40)` | Product Sold (Deprecated) |
| `SoldProduct` |  | |  | `cast (matnr_copa as fins_matnr_pa preserving type)` | `CHAR(40)` | Product Sold |
| `MaterialGroup` |  | |  | `cast( P_GLAcctBalance.matkl as fis_matkl_pa_depr preserving type )` | `CHAR(9)` | Product Sold Group (Deprecated) |
| `SoldProductGroup` |  | |  | `matkl` | `CHAR(9)` | Product Sold Group |
| `ProductGroup` |  | |  | `cast (matkl_mm as productgroup preserving type)` | `CHAR(9)` | Product Group |
| `FinancialAccountType` |  | |  | `koart` | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  | `umskz` | `CHAR(1)` | Special G/L Indicator |
| `TaxCode` |  | |  | `mwskz` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `HouseBank` |  | |  | `hbkid` | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` |  | |  | `hktid` | `CHAR(5)` | House Bank Account |
| `IsOpenItemManaged` |  | |  | `xopvw` | `CHAR(1)` | Managed on an Open Item Basis |
| `ClearingAccountingDocument` |  | |  | `cast( P_GLAcctBalance.augbl as fis_augbl_depre preserving type )` | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDocFiscalYear` |  | |  | `cast( P_GLAcctBalance.auggj as fis_auggj_no_conv_depre preserving type )` | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `ClearingJournalEntry` |  | |  | `cast( P_GLAcctBalance.augbl as fis_augbl preserving type )` | `CHAR(10)` | Clearing Journal Entry |
| `ClearingJournalEntryFiscalYear` |  | |  | `cast( P_GLAcctBalance.auggj as fis_auggj_no_conv preserving type )` | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `AssetDepreciationArea` |  | |  | `afabe` | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `MasterFixedAsset` |  | |  | `anln1` | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  | `anln2` | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` |  | |  | `bzdat` | `DATS(8)` | Asset Value Date |
| `AssetTransactionType` |  | |  | `anbwa` | `CHAR(3)` | Asset Transaction Type |
| `AssetAcctTransClassfctn` |  | |  | `movcat` | `CHAR(2)` | Transaction Type Category |
| `DepreciationFiscalPeriod` |  | |  | `depr_period` | `NUMC(3)` | Fiscal Period of Depreciation |
| `GroupMasterFixedAsset` |  | |  | `anlgr` | `CHAR(12)` | Group Asset |
| `GroupFixedAsset` |  | |  | `anlgr2` | `CHAR(4)` | Group Asset Subnumber |
| `CostEstimate` |  | |  | `kalnr` | `NUMC(12)` | Cost Estimate |
| `InventorySpecialStockValnType` |  | |  | `kzbws` | `CHAR(1)` | Inventory Special Stock Valuation Type (Deprecated) |
| `InvtrySpecialStockValnType_2` |  | |  | `cast(P_GLAcctBalance.kzbws as fis_inventoryspclstockvalntype preserving type)` | `CHAR(1)` | Inventory Special Stock Valuation Type |
| `InventorySpecialStockType` |  | |  | `sobkz` | `CHAR(1)` | Inventory Special Stock Type |
| `InventorySpclStkSalesDocument` |  | |  | `mat_kdauf` | `CHAR(10)` | Inventory Special Stock Sales Document |
| `InventorySpclStkSalesDocItm` |  | |  | `mat_kdpos` | `NUMC(6)` | Inventory Special Stock Sales Document Item |
| `InvtrySpclStockWBSElmntIntID` |  | |  | `mat_pspnr` | `NUMC(8)` | Inventory Special Stock WBS Element Internal ID |
| `InvtrySpclStockWBSElmntExtID` |  | |  | `cast( P_GLAcctBalance.InvtrySpclStockWBSElmntExtID as fis_invspstock_wbsext_no_conv preserving type )` | `CHAR(24)` | Inventory Special Stock WBS Element External ID |
| `InventorySpclStockWBSElement` |  | |  | `mat_ps_posid` | `CHAR(24)` | Inventory Special Stock WBS Element |
| `InventorySpecialStockSupplier` |  | |  | `mat_lifnr` | `CHAR(10)` | Supplier of Inventory Special Stock |
| `InventoryValuationType` |  | |  | `bwtar` | `CHAR(10)` | Inventory Valuation Type |
| `ValuationArea` |  | |  | `bwkey` | `CHAR(4)` | Valuation Area |
| `SenderCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Sender System |
| `SenderGLAccount` |  | |  | `racct_sender` | `CHAR(10)` | Sender G/L Account |
| `SenderAccountAssignment` |  | |  | `accas_sender` | `CHAR(30)` | Sender Account Assignment |
| `SenderAccountAssignmentType` |  | |  | `accasty_sender` | `CHAR(2)` | Account Assignment Type in Sender System |
| `ControllingObjectDebitType` |  | |  | `beltp` | `NUMC(1)` | Controlling Object Debit Type |
| `QuantityIsIncomplete` |  | |  | `muvflg` | `NUMC(1)` | Indicator: Quantity is Incomplete |
| `OffsettingAccount` |  | |  | `gkont` | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountType` |  | |  | `gkoar` | `CHAR(1)` | Offsetting Account Type |
| `OffsettingChartOfAccounts` |  | |  |  | `CHAR(4)` | Offsetting Chart of Accounts |
| `LineItemIsCompleted` |  | |  | `erlkz` | `CHAR(1)` | Indicator: Line Item is Completed |
| `PersonnelNumber` |  | |  | `pernr` | `NUMC(8)` | Personnel Number |
| `ControllingObjectClass` |  | |  | `scope` | `CHAR(2)` | Controlling Object Class |
| `PartnerCompanyCode` |  | |  | `pbukrs` | `CHAR(4)` | Partner Company Code |
| `PartnerControllingObjectClass` |  | |  | `pscope` | `CHAR(2)` | Partner Controlling Object Class |
| `OriginCostCenter` |  | |  | `ukostl` | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` |  | |  | `ulstar` | `CHAR(6)` | Origin Cost Center Activity Type |
| `OriginProduct` |  | |  |  | `CHAR(40)` | Origin Product |
| `VarianceOriginGLAccount` |  | |  |  | `CHAR(10)` | Origin G/L Account of a Variance |
| `AccountAssignment` |  | |  | `accas` | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` |  | |  | `accasty` | `CHAR(2)` | Account Assignment Type |
| `ProjectNetwork` |  | |  | `nplnr` | `CHAR(12)` | Network Number for Account Assignment |
| `RelatedNetworkActivity` |  | |  | `nplnr_vorgn` | `CHAR(4)` | Related Network Activity |
| `BusinessProcess` |  | |  | `prznr` | `CHAR(12)` | Business Process |
| `CostObject` |  | |  | `kstrg` | `CHAR(12)` | Cost Object |
| `CustomerServiceNotification` |  | |  | `qmnum` | `CHAR(12)` | Customer Service Notification |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `PartnerServiceDocumentType` |  | |  |  | `CHAR(4)` | Partner Service Document Type |
| `PartnerServiceDocument` |  | |  |  | `CHAR(10)` | Partner Service Document |
| `PartnerServiceDocumentItem` |  | |  |  | `NUMC(6)` | Partner Service Document Item |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `OperatingConcern` |  | |  | `erkrs` | `CHAR(4)` | Operating Concern |
| `PartnerAccountAssignment` |  | |  | `paccas` | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` |  | |  | `paccasty` | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerCostCtrActivityType` |  | |  | `plstar` | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  | `PartnerOrder_2` | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` |  | |  | `pautyp` | `NUMC(2)` | Partner Order Category |
| `PartnerWBSElement` |  | |  | `pps_posid` | `CHAR(24)` | Partner WBS Element |
| `PartnerProject` |  | |  | `pps_pspid` | `CHAR(24)` | Partner Project |
| `PartnerSalesDocument` |  | |  | `pkdauf` | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` |  | |  | `pkdpos` | `NUMC(6)` | Partner Sales Document Item |
| `PartnerProjectNetwork` |  | |  | `pnplnr` | `CHAR(12)` | Partner Project Network |
| `PartnerProjectNetworkActivity` |  | |  | `pnplnr_vorgn` | `CHAR(4)` | Partner Project Network Activity |
| `PartnerBusinessProcess` |  | |  | `pprznr` | `CHAR(12)` | Partner Business Process |
| `PartnerCostObject` |  | |  | `pkstrg` | `CHAR(12)` | Partner Cost Object |
| `BillingDocumentType` |  | |  | `fkart` | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  | `vkorg` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  | `vtweg` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  | `spart` | `CHAR(2)` | Division |
| `CustomerGroup` |  | |  | `kdgrp` | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `FinancialServicesProductGroup` |  | |  |  | `CHAR(10)` | Financial Services Product Group |
| `FinancialServicesBranch` |  | |  |  | `CHAR(10)` | Financial Services Branch |
| `FinancialDataSource` |  | |  |  | `CHAR(10)` | Financial Data Source |
| `JointVenture` |  | |  | `vname` | `CHAR(6)` | Joint Venture |
| `JointVentureEquityGroup` |  | |  | `egrup` | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureCostRecoveryCode` |  | |  | `recid` | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVentureEquityType` |  | |  | `etype` | `CHAR(3)` | Joint Venture Equity Type |
| `SettlementReferenceDate` |  | |  | `dabrz` | `DATS(8)` | Settlement Reference Date |
| `CostCenter` |  | |  | `rcntr` | `CHAR(10)` | Cost Center |
| `CostCtrActivityType` |  | |  | `lstar` | `CHAR(6)` | Activity Type |
| `OrderID` |  | |  | `aufnr` | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  | `autyp` | `NUMC(2)` | Order Category |
| `WBSElementInternalID` |  | |  | `ps_psp_pnr` | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  | `posid_edit` | `CHAR(24)` | WBS Element External ID |
| `WBSElement` |  | |  | `ps_posid` | `CHAR(24)` | WBS Element |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `Project` |  | |  | `ps_pspid` | `CHAR(24)` | Project |
| `ProjectInternalID` |  | |  | `ps_prj_pnr` | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  | `pspid_edit` | `CHAR(24)` | Project External ID |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `SalesOrder` |  | |  | `kdauf` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  | `kdpos` | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  | `cast(P_GLAcctBalance.kdauf as vbeln_va)` | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  | `cast(P_GLAcctBalance.kdpos as posnr_va)` | `NUMC(6)` | Sales Document Item |
| `ClearingDate` |  | |  | `augdt` | `DATS(8)` | Clearing Date |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Consolidation Unit |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `CnsldtnFinancialStatementItem` |  | |  |  | `CHAR(10)` | Consolidation Financial Statement Item |
| `CnsldtnSubitemCategory` |  | |  |  | `CHAR(3)` | Consolidation Subitem Category |
| `CnsldtnSubitem` |  | |  |  | `CHAR(10)` | Consolidation Subitem |
| `JrnlEntryItemObsoleteReason` |  | |  |  | `CHAR(1)` | Journal Entry Item Obsolete Reason |
| `BalanceTransactionCurrency` |  | |  | `rtcur` | `CUKY(5)` | Balance Transaction Currency |
| `AmountInBalanceTransacCrcy` |  | |  | `tsl` | `CURR(23)` | Amount in Balance Transaction Currency |
| `TransactionCurrency` |  | |  | `rwcur` | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  | `wsl` | `CURR(23)` | Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  | `rhcur` | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  | `hsl` | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` |  | |  | `rkcur` | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  | `ksl` | `CURR(23)` | Amount in Global Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `FreeDefinedCurrency1` |  | |  | `rocur` | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` |  | |  | `osl` | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  | `rvcur` | `CUKY(5)` | Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency2` |  | |  | `vsl` | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  | `rbcur` | `CUKY(5)` | Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency3` |  | |  | `bsl` | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  | `rccur` | `CUKY(5)` | Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency4` |  | |  | `csl` | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  | `rdcur` | `CUKY(5)` | Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency5` |  | |  | `dsl` | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  | `recur` | `CUKY(5)` | Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency6` |  | |  | `esl` | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  | `rfcur` | `CUKY(5)` | Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency7` |  | |  | `fsl` | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  | `rgcur` | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInFreeDefinedCurrency8` |  | |  | `gsl` | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `DebitAmountInCoCodeCrcy` |  | |  | `hsl_debit` | `CURR(23)` | Debit Amount in Company Code Currency |
| `CreditAmountInCoCodeCrcy` |  | |  | `hsl_credit` | `CURR(23)` | Credit Amount in Company Code Currency |
| `DebitAmountInTransCrcy` |  | |  | `wsl_debit` | `CURR(23)` | Debit Amount in Transaction Currency |
| `CreditAmountInTransCrcy` |  | |  | `wsl_credit` | `CURR(23)` | Credit Amount in Transaction Currency |
| `DebitAmountInBalanceTransCrcy` |  | |  | `tsl_debit` | `CURR(23)` | Debit Amount in Balance Transaction Currency |
| `CreditAmountInBalanceTransCrcy` |  | |  | `tsl_credit` | `CURR(23)` | Credit Amount in Balance Transaction Currency |
| `DebitAmountInGlobalCrcy` |  | |  | `ksl_debit` | `CURR(23)` | Debit Amount in Global Currency |
| `CreditAmountInGlobalCrcy` |  | |  | `ksl_credit` | `CURR(23)` | Credit Amount in Global Currency |
| `DebitAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Functional Currency |
| `CreditAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Functional Currency |
| `DebitAmountInFreeDefinedCrcy1` |  | |  | `osl_debit` | `CURR(23)` | Debit Amount in Free Defined Currency 1 |
| `CreditAmountInFreeDefinedCrcy1` |  | |  | `osl_credit` | `CURR(23)` | Credit Amount in Free Defined Currency 1 |
| `DebitAmountInFreeDefinedCrcy2` |  | |  | `vsl_debit` | `CURR(23)` | Debit Amount in Free Defined Currency 2 |
| `CreditAmountInFreeDefinedCrcy2` |  | |  | `vsl_credit` | `CURR(23)` | Credit Amount in Free Defined Currency 2 |
| `DebitAmountInFreeDefinedCrcy3` |  | |  | `bsl_debit` | `CURR(23)` | Debit Amount in Free Defined Currency 3 |
| `CreditAmountInFreeDefinedCrcy3` |  | |  | `bsl_credit` | `CURR(23)` | Credit Amount in Free Defined Currency 3 |
| `DebitAmountInFreeDefinedCrcy4` |  | |  | `csl_debit` | `CURR(23)` | Debit Amount in Free Defined Currency 4 |
| `CreditAmountInFreeDefinedCrcy4` |  | |  | `csl_credit` | `CURR(23)` | Credit Amount in Free Defined Currency 4 |
| `DebitAmountInFreeDefinedCrcy5` |  | |  | `dsl_debit` | `CURR(23)` | Debit Amount in Free Defined Currency 5 |
| `CreditAmountInFreeDefinedCrcy5` |  | |  | `dsl_credit` | `CURR(23)` | Credit Amount in Free Defined Currency 5 |
| `DebitAmountInFreeDefinedCrcy6` |  | |  | `esl_debit` | `CURR(23)` | Debit Amount in Free Defined Currency 6 |
| `CreditAmountInFreeDefinedCrcy6` |  | |  | `esl_credit` | `CURR(23)` | Credit Amount in Free Defined Currency 6 |
| `DebitAmountInFreeDefinedCrcy7` |  | |  | `fsl_debit` | `CURR(23)` | Debit Amount in Free Defined Currency 7 |
| `CreditAmountInFreeDefinedCrcy7` |  | |  | `fsl_credit` | `CURR(23)` | Credit Amount in Free Defined Currency 7 |
| `DebitAmountInFreeDefinedCrcy8` |  | |  | `gsl_debit` | `CURR(23)` | Debit Amount in Free Defined Currency 8 |
| `CreditAmountInFreeDefinedCrcy8` |  | |  | `gsl_credit` | `CURR(23)` | Credit Amount in Free Defined Currency 8 |
| `FiscalPeriod` |  | |  | `poper` | `NUMC(3)` | Fiscal Period |
| `EndingBalanceAmtInCoCodeCrcy` |  | |  | `hsl_end_bal` | `CURR(23)` | Ending Balance in Company Code Currency |
| `EndingBalanceAmtInTransCrcy` |  | |  | `wsl_end_bal` | `CURR(23)` | Ending Balance in Transaction Currency |
| `EndingBalanceAmtInBalTransCrcy` |  | |  | `tsl_end_bal` | `CURR(23)` | Ending Balance in Balance Transaction Currency |
| `EndingBalanceAmtInGlobalCrcy` |  | |  | `ksl_end_bal` | `CURR(23)` | Ending Balance in Global Currency |
| `EndingBalanceAmtInFuncnlCrcy` |  | |  |  | `CURR(23)` | Ending Balance in Functional Currency |
| `EndingBalAmtInFreeDfndCrcy1` |  | |  | `osl_end_bal` | `CURR(23)` | Ending Balance in Free Defined Currency 1 |
| `EndingBalAmtInFreeDfndCrcy2` |  | |  | `vsl_end_bal` | `CURR(23)` | Ending Balance in Free Defined Currency 2 |
| `EndingBalAmtInFreeDfndCrcy3` |  | |  | `bsl_end_bal` | `CURR(23)` | Ending Balance in Free Defined Currency 3 |
| `EndingBalAmtInFreeDfndCrcy4` |  | |  | `csl_end_bal` | `CURR(23)` | Ending Balance in Free Defined Currency 4 |
| `EndingBalAmtInFreeDfndCrcy5` |  | |  | `dsl_end_bal` | `CURR(23)` | Ending Balance in Free Defined Currency 5 |
| `EndingBalAmtInFreeDfndCrcy6` |  | |  | `esl_end_bal` | `CURR(23)` | Ending Balance in Free Defined Currency 6 |
| `EndingBalAmtInFreeDfndCrcy7` |  | |  | `fsl_end_bal` | `CURR(23)` | Ending Balance in Free Defined Currency 7 |
| `EndingBalAmtInFreeDfndCrcy8` |  | |  | `gsl_end_bal` | `CURR(23)` | Ending Balance in Free Defined Currency 8 |
| `AccrualObjectType` |  | |  |  | `CHAR(4)` | Type of the Accrual Object |
| `AccrualObject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Object |
| `AccrualSubobject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Subobject |
| `AccrualItemType` |  | |  |  | `CHAR(11)` | Type of the Item of the Accrual Subobject |
| `AccrualObjectLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of the Accrual Object |
| `AccrualReferenceObject` |  | |  |  | `CHAR(32)` | Accrual Reference Object |
| `AccrualValueDate` |  | |  |  | `DATS(8)` | Accrual Value Date |
| `CashLedgerCompanyCode` |  | |  |  | `CHAR(4)` | Cash Origin Company Code |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `FinancialManagementArea` |  | |  | `fikrs` | `CHAR(4)` | Financial Management Area |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Management Center |
| `FundedProgram` |  | |  |  | `CHAR(24)` | Funded Program |
| `Fund` |  | |  | `rfund` | `CHAR(10)` | Fund |
| `GrantID` |  | |  | `rgrant_nbr` | `CHAR(20)` | Grant |
| `BudgetPeriod` |  | |  | `rbudget_pd` | `CHAR(10)` | Budget Period |
| `PartnerFund` |  | |  | `sfund` | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  | `sgrant_nbr` | `CHAR(20)` | Partner Grant |
| `PartnerBudgetPeriod` |  | |  | `sbudget_pd` | `CHAR(10)` | FM: Partner Budget Period |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  | `CHAR(4)` | Budget Consumption Amount Type |
| `FlowOfFundsLedgerFiscalYear` |  | |  |  | `NUMC(4)` | Funds of Flow Ledger Fiscal Year |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `GLAccountAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `SupplierBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `AcctgDocTypeAuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `_CompanyCode` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_BalanceTransactionCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_FreeDefinedCurrency1` | | ✓ | | | | |
| `_FreeDefinedCurrency2` | | ✓ | | | | |
| `_FreeDefinedCurrency3` | | ✓ | | | | |
| `_FreeDefinedCurrency4` | | ✓ | | | | |
| `_FreeDefinedCurrency5` | | ✓ | | | | |
| `_FreeDefinedCurrency6` | | ✓ | | | | |
| `_FreeDefinedCurrency7` | | ✓ | | | | |
| `_FreeDefinedCurrency8` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_PartnerSegment` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_PartnerProfitCenter` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_PartnerCostCenter` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_PartnerBusinessArea` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_PartnerFunctionalArea` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_GLAccountHierarchy` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_SoldProductGroup_2` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_CalendarDate` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_PostingKey` | | ✓ | | | | |
| `_EliminationProfitCenter` | | ✓ | | | | |
| `_InventorySpecialStockSupplier` | | ✓ | | | | |
| `_AlternativeGLAccount` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_Employment` | | ✓ | | | | |
| `_PersonWorkAgreement_1` | | ✓ | | | | |
| `_FinancialTransactionType` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_ReferenceDocumentType` | | ✓ | | | | |
| `_PredecessorReferenceDocType` | | ✓ | | | | |
| `_AccountingDocumentCategory` | | ✓ | | | | |
| `_User` | | ✓ | | | | |
| `_GLAccountType` | | ✓ | | | | |
| `_OffsettingAccountType` | | ✓ | | | | |
| `_SenderGLAccount` | | ✓ | | | | |
| `_OffsettingAccount` | | ✓ | | | | |
| `_OffsettingAccountWithBP` | | ✓ | | | | |
| `_OffsettingChartOfAccounts` | | ✓ | | | | |
| `_CountryChartOfAccounts` | | ✓ | | | | |
| `_PurchasingDocument` | | ✓ | | | | |
| `_PurchasingDocumentItem` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_TaxCode` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_ClearingAccountingDocument` | | ✓ | | | | |
| `_ClearingJournalEntry` | | ✓ | | | | |
| `_ClearingJrnlEntryFiscalYear` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_GroupMasterFixedAsset` | | ✓ | | | | |
| `_GroupFixedAsset` | | ✓ | | | | |
| `_BusinessProcess` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_PartnerOrder` | | ✓ | | | | |
| `_PartnerOrder_2` | | ✓ | | | | |
| `_PartnerOrderCategory` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_WBSElementInternalID` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_PartnerWBSElement` | | ✓ | | | | |
| `_PartnerProject` | | ✓ | | | | |
| `_PartnerSalesDocument` | | ✓ | | | | |
| `_PartnerSalesDocumentItem` | | ✓ | | | | |
| `_PartnerBusinessProcess` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_SoldMaterial` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_PartnerFund` | | ✓ | | | | |
| `_FundsCenter` | | ✓ | | | | |
| `_PartnerCompanyCode` | | ✓ | | | | |
| `_InventorySpecialStockValnType` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_InventorySpclStockValnType` | | ✓ | | | | |
| `_InventorySpclStkSalesDocument` | | ✓ | | | | |
| `_InventorySpclStkSalesDocItm` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntIntID` | | ✓ | | | | |
| `_InventorySpclStockWBSElement` | | ✓ | | | | |
| `_InvtrySpclStkWBSElmntBscData` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_ControllingObjectClass` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_PartnerControllingObjectClass` | | ✓ | | | | |
| `_OriginCostCenter` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_OriginCostCtrActivityType` | | ✓ | | | | |
| `_OrderCategory` | | ✓ | | | | |
| `_MovementCategory` | | ✓ | | | | |
| `_AssetTransactionType` | | ✓ | | | | |
| `_BudgetPeriod` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_HouseBankAccount` | | ✓ | | | | |
| `_LogicalSystem` | | ✓ | | | | |
| `_OperatingConcern` | | ✓ | | | | |
| `_ProjectNetwork` | | ✓ | | | | |
| `_PurReqValuationArea` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_FiscalCalendarDate` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceDocumentItem` | | ✓ | | | | |
| `_PartnerServiceDocumentType` | | ✓ | | | | |
| `_PartnerServiceDocument` | | ✓ | | | | |
| `_PartnerServiceDocumentItem` | | ✓ | | | | |
| `_ServiceContractType` | | ✓ | | | | |
| `_ServiceContract` | | ✓ | | | | |
| `_ServiceContractItem` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_GLAccountFlowType` | | ✓ | | | | |
| `_LedgerCompanyCodeCrcyRoles` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_PartnerGrant` | | ✓ | | | | |
| `_FinServicesProductGroup` | | ✓ | | | | |
| `_FinancialServicesBranch` | | ✓ | | | | |
| `_FinancialDataSource` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_FunctionalCurrency` | | ✓ | | | | |
| `_PartnerProjectExternalID` | | ✓ | | | | |
| `_PartnerProjctExtrnalIDText` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_PartnerWBSElemntExtrnalIDText` | | ✓ | | | | |
| `_PartnerProjectBasicData` | | ✓ | | | | |
| `_PartnerProjectBasicDataText` | | ✓ | | | | |
| `_PartnerWBSElementBasicData` | | ✓ | | | | |
| `_PartnerWBSElmntBasicDataText` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntBD` | | ✓ | | | | |
| `_InvtrySpclStockWBSElmntExtID` | | ✓ | | | | |
| `_TimeSheetOvertimeCat` | | ✓ | | | | |
| `_AccrualObjectType` | | ✓ | | | | |
| `_AccrualObject` | | ✓ | | | | |
| `_AccrualSubobject` | | ✓ | | | | |
| `_AccrualItemType` | | ✓ | | | | |
| `_CashLedgerCompanyCode` | | ✓ | | | | |
| `_CashLedgerAccount` | | ✓ | | | | |
| `_FundedProgram` | | ✓ | | | | |
| `_PartnerBudgetPeriod` | | ✓ | | | | |
| `_PubSecBudgetAccountCoCode` | | ✓ | | | | |
| `_PubSecBudgetAccount` | | ✓ | | | | |
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
| `_CustomerCompany` | | ✓ | | | | |
| `_SupplierCompany` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1] |
| `_JournalEntry` | `I_JournalEntry` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_BalanceTransactionCurrency` | `I_Currency` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1] |
| `_GlobalCurrency` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency1` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency2` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency3` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency4` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency5` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency6` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency7` | `I_Currency` | [0..1] |
| `_FreeDefinedCurrency8` | `I_Currency` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_PartnerSegment` | `I_Segment` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_PartnerProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_PartnerCostCenter` | `I_CostCenter` | [0..*] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_PartnerBusinessArea` | `I_BusinessArea` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_PartnerFunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_GLAccountHierarchy` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [1] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [1] |
| `_Material` | `I_Material` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_Ledger` | `I_Ledger` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [0..1] |
| `_MaterialGroup` | `I_MaterialGroup` | [0..1] |
| `_ProductGroup` | `I_ProductGroup` | [0..1] |
| `_SoldProductGroup` | `I_ProductGroup` | [0..1] |
| `_SoldProductGroup_2` | `I_ProductGroup_2` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_CalendarDate` | `I_CalendarDate` | [0..1] |
| `_SourceLedger` | `I_Ledger` | [0..1] |
| `_PostingKey` | `I_PostingKey` | [0..1] |
| `_EliminationProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_InventorySpecialStockSupplier` | `I_Supplier` | [0..1] |
| `_AlternativeGLAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |
| `_SalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_InternalOrder` | `I_InternalOrder` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_Employment` | `I_Employment` | [0..1] |
| `_PersonWorkAgreement_1` | `I_PersonWorkAgreement_1` | [0..1] |
| `_FinancialTransactionType` | `I_FinancialTransactionType` | [0..1] |
| `_BusinessTransactionType` | `I_BusinessTransactionType` | [0..1] |
| `_ReferenceDocumentType` | `I_ReferenceDocumentType` | [0..1] |
| `_PredecessorReferenceDocType` | `I_ReferenceDocumentType` | [0..1] |
| `_AccountingDocumentCategory` | `I_AccountingDocumentCategory` | [0..1] |
| `_User` | `I_User` | [0..1] |
| `_GLAccountType` | `I_GLAccountType` | [0..1] |
| `_OffsettingAccountType` | `I_FinancialAccountType` | [0..1] |
| `_SenderGLAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_OffsettingAccount` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_OffsettingAccountWithBP` | `I_OffsettingAccount` | [0..1] |
| `_OffsettingChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_CountryChartOfAccounts` | `I_ChartOfAccounts` | [0..1] |
| `_PurchasingDocument` | `I_PurchasingDocument` | [0..1] |
| `_PurchasingDocumentItem` | `I_PurchasingDocumentItem` | [0..1] |
| `_SpecialGLCode` | `I_SpecialGLCode` | [0..1] |
| `_TaxCode` | `I_TaxCode` | [0..*] |
| `_HouseBank` | `I_Housebank` | [0..1] |
| `_ClearingAccountingDocument` | `I_AccountingDocument` | [1..1] |
| `_ClearingJournalEntry` | `I_JournalEntry` | [0..1] |
| `_ClearingJrnlEntryFiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_FixedAsset` | `I_FixedAsset` | [0..1] |
| `_GroupMasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_GroupFixedAsset` | `I_FixedAsset` | [0..1] |
| `_BusinessProcess` | `I_BusinessProcess` | [0..1] |
| `_PartnerCostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_PartnerOrder` | `I_InternalOrder` | [0..1] |
| `_PartnerOrder_2` | `I_Order` | [0..1] |
| `_PartnerOrderCategory` | `I_OrderCategory` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_WBSElementInternalID` | `I_WBSElementByInternalKey` | [0..1] |
| `_WBSElement` | `I_WBSElement` | [0..1] |
| `_PartnerWBSElement` | `I_WBSElement` | [0..1] |
| `_PartnerProject` | `I_Project` | [0..1] |
| `_PartnerSalesDocument` | `I_SalesDocument` | [0..1] |
| `_PartnerSalesDocumentItem` | `I_SalesDocumentItem` | [0..1] |
| `_PartnerBusinessProcess` | `I_BusinessProcess` | [0..1] |
| `_BillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_SoldMaterial` | `I_Material` | [0..1] |
| `_SoldProduct` | `I_Product` | [0..1] |
| `_Fund` | `I_Fund` | [0..1] |
| `_PartnerFund` | `I_Fund` | [0..1] |
| `_FundsCenter` | `I_FundsCenter` | [0..*] |
| `_PartnerCompanyCode` | `I_CompanyCode` | [0..1] |
| `_InventorySpecialStockValnType` | `I_InventoryValuationType` | [0..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [0..1] |
| `_InventorySpclStockValnType` | `I_InvtrySpecialStockValnType` | [0..1] |
| `_InventorySpclStkSalesDocument` | `I_SalesDocument` | [0..1] |
| `_InventorySpclStkSalesDocItm` | `I_SalesDocumentItem` | [0..1] |
| `_InvtrySpclStockWBSElmntIntID` | `I_WBSElementByInternalKey` | [0..1] |
| `_InventorySpclStockWBSElement` | `I_WBSElement` | [0..1] |
| `_InvtrySpclStkWBSElmntBscData` | `I_WBSElementBasicData` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |
| `_ControllingObjectClass` | `I_ControllingObjectClass` | [0..1] |
| `_PartnerCompany` | `I_Partnercompany` | [1..1] |
| `_PartnerControllingObjectClass` | `I_ControllingObjectClass` | [0..1] |
| `_OriginCostCenter` | `I_CostCenter` | [0..*] |
| `_CostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_OriginCostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_OrderCategory` | `I_OrderCategory` | [0..1] |
| `_MovementCategory` | `I_MovementCategory` | [0..1] |
| `_AssetTransactionType` | `I_AssetTransactionType` | [0..1] |
| `_BudgetPeriod` | `I_BudgetPeriod` | [0..1] |
| `_FinancialManagementArea` | `I_FinancialManagementArea` | [0..1] |
| `_HouseBankAccount` | `I_HouseBankAccount` | [0..1] |
| `_LogicalSystem` | `I_LogicalSystem` | [0..1] |
| `_OperatingConcern` | `I_OperatingConcern` | [0..1] |
| `_ProjectNetwork` | `I_ProjectNetwork` | [0..1] |
| `_PurReqValuationArea` | `I_Purreqvaluationarea` | [0..1] |
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [0..1] |
| `_FiscalCalendarDate` | `I_FiscalCalendarDate` | [0..1] |
| `_ServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceDocumentItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_PartnerServiceDocumentType` | `I_ServiceDocumentType` | [0..1] |
| `_PartnerServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_PartnerServiceDocumentItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_ServiceContractType` | `I_ServiceDocumentType` | [0..1] |
| `_ServiceContract` | `I_SrvcDocByDocumentType` | [0..1] |
| `_ServiceContractItem` | `I_SrvcDocItemByDocumentType` | [0..1] |
| `_ProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_GLAccountFlowType` | `I_GLAccountFlowType` | [0..1] |
| `_LedgerCompanyCodeCrcyRoles` | `I_LedgerCompanyCodeCrcyRoles` | [0..1] |
| `_Grant` | `I_Grant` | [0..1] |
| `_PartnerGrant` | `I_Grant` | [0..1] |
| `_FinServicesProductGroup` | `I_FinServicesProductGroup` | [0..1] |
| `_FinancialServicesBranch` | `I_FinancialServicesBranch` | [0..1] |
| `_FinancialDataSource` | `I_FinancialDataSource` | [0..1] |
| `_CustomerSupplierIndustry` | `I_CustomerSupplierIndustry` | [0..1] |
| `_CustomerSupplierCountry` | `I_Country` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCTBALANCE')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 // Caution:
// --------
//
// As this CDS view is a very complex view und consumes data from the biggest tables of the S/4 HANA system we are forced to restrict access and give usage recommendations. 
// Please read this information carefully!
// 
// Please be informed that SAP offers various possibilities to build views for a balance calculation. 
// This CDS view is only relevant for you if you need a cumulative balances calculation over a sequence of a time dimension. In all other cases please do not use this view.
// Please check instead if the CDS view I_GLAccountYearToDateBalanceC meets your requirement.
// 
// Do not use this CDS view in the following scenarios:
// - As a CDS modelling data source within your own CDS model
// - Any scenario other than an Analytical Query 
// - In a data extraction scenario
// 
// The following section describes how the balance calculation of this CDS view works and what it was designed for:
// 
// A cumulative balance means that the line items of a period are also assigned to the balances of a future period.
// A possible reporting result can be for example:
//
//   GLAccount FiscalPeriod  DebitAmount CreditAmount  EndingBalanceInCoCodeCrcy
//   400000    001           100                       100   
//   400000    002            50                       150   
//   400000    003           100                       250   
//   400000    004                       75            175   
//   400000    005           300                       475   
//  
// To provide this result, the queries being made against this view must include a time dimension, otherwise a query of the GL Account ending balance at the end of period 005 without a time dimension 
// will result in 1150 (100+150+250-175+475) and thus in wrong balances. 
// Therefore the consumption of the CDS view must only be an analytical query with exception aggregation of type #LAST, since this exception aggregation can return the 475 GL Account ending balance 
// at the end of period 005, while native SQL ( Select GLAccount, sum(EndingBalance)… ) will return 1150.     
// 
// Assigning line items of a period to future periods in order to provide a cumulative balance requires high memory and CPU consumption in the HANA database. 
// Therefore, it is not recommended to use this CDS view as a CDS modelling data source within a different CDS model, but to only use it as an analytical provider as it is documented in the 
// @ObjectModel.supportedCapabilities annotation of the CDS view.

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'G/L Account Balance'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@Analytics: { dataCategory: #CUBE }
@Analytics.technicalName: 'IFIGLBALANCE'  //, dataExtraction.enabled: true }
//@ObjectModel.representativeKey: 'FiscalPeriodDate'
@Metadata.ignorePropagatedAnnotations: true 
@Metadata.allowExtensions: true
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@AccessControl.personalData.blocking: #REQUIRED 
@Consumption.dbHints:  ['AGGR_TARGET("ACDOCA")','NO_JOIN_THRU_AGGR']        
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE 
@Environment.sql.passValueForClient: true
@AccessControl.auditFilter: #ENABLED

define view entity I_GLAcctBalance
  with parameters
    P_FromPostingDate : fis_budat_from,
    P_ToPostingDate   : fis_budat_to

as select from P_GLAcctBalance 
( P_FromPostingDate: $parameters.P_FromPostingDate, P_ToPostingDate: $parameters.P_ToPostingDate ) 


association[1]    to I_CompanyCode            as _CompanyCode                on $projection.CompanyCode = _CompanyCode.CompanyCode
association[0..1] to I_JournalEntry           as _JournalEntry               on $projection.CompanyCode        = _JournalEntry.CompanyCode and 
                                                                                $projection.FiscalYear         = _JournalEntry.FiscalYear and 
                                                                                $projection.AccountingDocument = _JournalEntry.AccountingDocument 
association [0..1] to I_FiscalYearForCompanyCode  as _FiscalYear             on $projection.FiscalYear         = _FiscalYear.FiscalYear
                                                                                and $projection.CompanyCode    = _FiscalYear.CompanyCode  
association[0..1] to I_ControllingArea        as _ControllingArea            on $projection.ControllingArea = _ControllingArea.ControllingArea

association[0..1] to I_Currency               as _BalanceTransactionCurrency on $projection.BalanceTransactionCurrency = _BalanceTransactionCurrency.Currency 
association[0..1] to I_Currency               as _TransactionCurrency        on $projection.TransactionCurrency = _TransactionCurrency.Currency                                                                                                              
association[1]    to I_Currency               as _CompanyCodeCurrency        on $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency 
association[0..1] to I_Currency               as _GlobalCurrency             on $projection.GlobalCurrency = _GlobalCurrency.Currency 
association[0..1] to I_Currency               as _FreeDefinedCurrency1       on $projection.FreeDefinedCurrency1 = _FreeDefinedCurrency1.Currency 
association[0..1] to I_Currency               as _FreeDefinedCurrency2       on $projection.FreeDefinedCurrency2 = _FreeDefinedCurrency2.Currency 
association[0..1] to I_Currency               as _FreeDefinedCurrency3       on $projection.FreeDefinedCurrency3 = _FreeDefinedCurrency3.Currency 
association[0..1] to I_Currency               as _FreeDefinedCurrency4       on $projection.FreeDefinedCurrency4 = _FreeDefinedCurrency4.Currency 
association[0..1] to I_Currency               as _FreeDefinedCurrency5       on $projection.FreeDefinedCurrency5 = _FreeDefinedCurrency5.Currency 
association[0..1] to I_Currency               as _FreeDefinedCurrency6       on $projection.FreeDefinedCurrency6 = _FreeDefinedCurrency6.Currency 
association[0..1] to I_Currency               as _FreeDefinedCurrency7       on $projection.FreeDefinedCurrency7 = _FreeDefinedCurrency7.Currency 
association[0..1] to I_Currency               as _FreeDefinedCurrency8       on $projection.FreeDefinedCurrency8 = _FreeDefinedCurrency8.Currency 

association[0..1] to I_Segment                as _Segment                    on $projection.Segment = _Segment.Segment
association[0..1] to I_Segment                as _PartnerSegment             on $projection.PartnerSegment = _PartnerSegment.Segment
association[0..*] to I_ProfitCenter           as _ProfitCenter               on $projection.ControllingArea = _ProfitCenter.ControllingArea and  
                                                                                $projection.ProfitCenter = _ProfitCenter.ProfitCenter
association[0..*] to I_ProfitCenter           as _PartnerProfitCenter        on $projection.ControllingArea = _PartnerProfitCenter.ControllingArea and  
                                                                                $projection.PartnerProfitCenter = _PartnerProfitCenter.ProfitCenter
association[0..1] to I_ProfitCenter           as _CurrentProfitCenter        on $projection.ControllingArea            = _CurrentProfitCenter.ControllingArea and
                                                                                $projection.ProfitCenter               = _CurrentProfitCenter.ProfitCenter and
                                                                                _CurrentProfitCenter.ValidityStartDate <= $session.system_date and
                                                                                _CurrentProfitCenter.ValidityEndDate   >= $session.system_date
association[0..*] to I_CostCenter             as _CostCenter                 on $projection.ControllingArea = _CostCenter.ControllingArea and  
                                                                                $projection.CostCenter = _CostCenter.CostCenter
association[0..1] to I_CostCenter             as _CurrentCostCenter          on $projection.ControllingArea          = _CurrentCostCenter.ControllingArea and
                                                                                $projection.CostCenter               = _CurrentCostCenter.CostCenter and
                                                                                _CurrentCostCenter.ValidityStartDate <= $session.system_date and
                                                                                _CurrentCostCenter.ValidityEndDate   >= $session.system_date
association[0..*] to I_CostCenter             as _PartnerCostCenter          on $projection.ControllingArea = _PartnerCostCenter.ControllingArea and  
                                                                                $projection.PartnerCostCenter = _PartnerCostCenter.CostCenter
association[0..1] to I_BusinessArea           as _BusinessArea               on $projection.BusinessArea = _BusinessArea.BusinessArea
association[0..1] to I_BusinessArea           as _PartnerBusinessArea        on $projection.PartnerBusinessArea = _PartnerBusinessArea.BusinessArea
association[0..1] to I_FunctionalArea         as _FunctionalArea             on $projection.FunctionalArea = _FunctionalArea.FunctionalArea
association[0..1] to I_FunctionalArea         as _PartnerFunctionalArea      on $projection.PartnerFunctionalArea = _PartnerFunctionalArea.FunctionalArea

association[0..1] to I_GLAccountInChartOfAccounts as _GLAccountInChartOfAccounts on $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts and 
                                                                                    $projection.GLAccount = _GLAccountInChartOfAccounts.GLAccount 

association[0..1] to I_GLAccountInChartOfAccounts as _GLAccountHierarchy     on $projection.ChartOfAccounts = _GLAccountHierarchy.ChartOfAccounts and 
                                                                                $projection.GLAccountHierarchy = _GLAccountHierarchy.GLAccount 

association[1]    to I_ChartOfAccounts        as _ChartOfAccounts            on $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts 
association[0..1] to I_GLAccountInCompanyCode as _GLAccountInCompanyCode     on $projection.CompanyCode                = _GLAccountInCompanyCode.CompanyCode and
                                                                                $projection.GLAccount                  = _GLAccountInCompanyCode.GLAccount

association[0..1] to I_AccountingDocumentType as _AccountingDocumentType     on $projection.AccountingDocumentType = _AccountingDocumentType.AccountingDocumentType
association[0..1] to I_FinancialAccountType   as _FinancialAccountType       on $projection.FinancialAccountType = _FinancialAccountType.FinancialAccountType
association[1]    to I_DebitCreditCode        as _DebitCreditCode            on $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode

association[0..1] to I_Material               as _Material                   on  $projection.Material = _Material.Material  //do not use any longer, use _Product
association[0..1] to I_Product                as _Product                    on  $projection.Product = _Product.Product
association[0..1] to I_Plant                  as _Plant                      on $projection.Plant = _Plant.Plant
association[0..1] to I_Ledger                 as _Ledger                     on $projection.Ledger = _Ledger.Ledger

association[0..1] to I_CustomerGroup          as _CustomerGroup              on $projection.CustomerGroup = _CustomerGroup.CustomerGroup
association[0..1] to I_MaterialGroup          as _MaterialGroup              on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup //do not use any longer, use _ProductGroup
association[0..1] to I_ProductGroup           as _ProductGroup               on  $projection.ProductGroup = _ProductGroup.MaterialGroup
//association [0..1] to I_ProductGroup_2        as _ProductGroup_2             on  $projection.ProductGroup = _ProductGroup_2.ProductGroup  
association [0..1] to I_ProductGroup          as _SoldProductGroup           on  $projection.SoldProductGroup = _SoldProductGroup.MaterialGroup
  association [0..1] to I_ProductGroup_2      as _SoldProductGroup_2         on  $projection.SoldProductGroup = _SoldProductGroup_2.ProductGroup

association [0..1] to I_Customer              as _Customer                   on $projection.Customer = _Customer.Customer
association [0..1] to I_Supplier              as _Supplier                   on $projection.Supplier = _Supplier.Supplier

association [0..1] to I_CalendarDate          as _CalendarDate               on $projection.PostingDate = _CalendarDate.CalendarDate

association[0..1] to I_Ledger                 as _SourceLedger               on $projection.SourceLedger = _SourceLedger.Ledger

association[0..1] to I_PostingKey             as _PostingKey                 on $projection.PostingKey = _PostingKey.PostingKey
association[0..*] to I_ProfitCenter           as _EliminationProfitCenter    on $projection.ControllingArea = _EliminationProfitCenter.ControllingArea and  
                                                                                $projection.EliminationProfitCenter = _EliminationProfitCenter.ProfitCenter
association [0..1] to I_Supplier              as _InventorySpecialStockSupplier 
                                                                             on $projection.InventorySpecialStockSupplier = _InventorySpecialStockSupplier.Supplier
association[0..1] to I_GLAccountInChartOfAccounts as _AlternativeGLAccount   on $projection.CountryChartOfAccounts = _AlternativeGLAccount.ChartOfAccounts and 
                                                                             $projection.AlternativeGLAccount = _AlternativeGLAccount.GLAccount 

association[0..1] to I_SalesOrder                   as _SalesOrder                   on $projection.SalesOrder                      = _SalesOrder.SalesOrder
association[0..1] to I_SalesOrderItem               as _SalesOrderItem               on $projection.SalesOrder                      = _SalesOrderItem.SalesOrder and  
                                                                                        $projection.SalesOrderItem                  = _SalesOrderItem.SalesOrderItem
association[0..1] to I_SalesDocument                as _SalesDocument                on $projection.SalesDocument                   = _SalesDocument.SalesDocument
association[0..1] to I_SalesDocumentItem            as _SalesDocumentItem            on $projection.SalesDocument                   = _SalesDocumentItem.SalesDocument and  
                                                                                        $projection.SalesDocumentItem               = _SalesDocumentItem.SalesDocumentItem                                                                                        
association[0..1] to I_InternalOrder                as _InternalOrder                on $projection.OrderID                         = _InternalOrder.InternalOrder
association[0..1] to I_Order                        as _Order                        on $projection.OrderID                         = _Order.OrderID
//association[0..*] to I_CostAnalysisResource         as _CostAnalysisResource         on $projection.ControllingArea                 = _CostAnalysisResource.ControllingArea and  
//                                                                                        $projection.CostAnalysisResource            = _CostAnalysisResource.CostAnalysisResource 
                                                                                
association[0..1] to I_Employment                   as _Employment                   on $projection.PersonnelNumber                 = _Employment.EmploymentInternalID and
                                                                                        $projection.PostingDate                    <= _Employment.EndDate
association [0..1] to I_PersonWorkAgreement_1        as _PersonWorkAgreement_1         on  $projection.PersonnelNumber    = _PersonWorkAgreement_1.PersonWorkAgreement   

association[0..1] to I_FinancialTransactionType     as _FinancialTransactionType      on $projection.FinancialTransactionType       = _FinancialTransactionType.FinancialTransactionType
association[0..1] to I_BusinessTransactionType      as _BusinessTransactionType       on $projection.BusinessTransactionType        = _BusinessTransactionType.BusinessTransactionType

association[0..1] to I_ReferenceDocumentType        as _ReferenceDocumentType         on $projection.ReferenceDocumentType          = _ReferenceDocumentType.ReferenceDocumentType
association[0..1] to I_ReferenceDocumentType        as _PredecessorReferenceDocType   on $projection.PredecessorReferenceDocType    = _PredecessorReferenceDocType.ReferenceDocumentType
association[0..1] to I_AccountingDocumentCategory   as _AccountingDocumentCategory    on $projection.AccountingDocumentCategory     = _AccountingDocumentCategory.AccountingDocumentCategory

association[0..1] to I_User                         as _User                          on $projection.AccountingDocCreatedByUser     = _User.UserID

association[0..1] to I_GLAccountType                as _GLAccountType                 on $projection.GLAccountType                  = _GLAccountType.GLAccountType
association[0..1] to I_FinancialAccountType         as _OffsettingAccountType         on $projection.OffsettingAccountType          = _OffsettingAccountType.FinancialAccountType

association[0..1] to I_GLAccountInChartOfAccounts   as _SenderGLAccount               on $projection.ChartOfAccounts                = _SenderGLAccount.ChartOfAccounts and 
                                                                                         $projection.SenderGLAccount                = _SenderGLAccount.GLAccount 
// old association kept for compatibility. DO NOT USE                                                                                         
association [0..1] to I_GLAccountInChartOfAccounts  as _OffsettingAccount             on  $projection.ChartOfAccounts               = _OffsettingAccount.ChartOfAccounts
                                                                                      and $projection.OffsettingAccount             = _OffsettingAccount.GLAccount

association [0..1] to I_OffsettingAccount           as _OffsettingAccountWithBP       on  $projection.OffsettingChartOfAccounts     = _OffsettingAccountWithBP.ChartOfAccounts
                                                                                      and $projection.OffsettingAccountType         = _OffsettingAccountWithBP.OffsettingAccountType
                                                                                      and $projection.OffsettingAccount             = _OffsettingAccountWithBP.OffsettingAccount                                                                                                                                                                          
association[0..1] to I_ChartOfAccounts              as _OffsettingChartOfAccounts     on $projection.OffsettingChartOfAccounts      = _OffsettingChartOfAccounts.ChartOfAccounts                                                                                     
association[0..1] to I_ChartOfAccounts              as _CountryChartOfAccounts        on $projection.CountryChartOfAccounts         = _CountryChartOfAccounts.ChartOfAccounts

association[0..1] to I_PurchasingDocument           as _PurchasingDocument            on $projection.PurchasingDocument             = _PurchasingDocument.PurchasingDocument 
association[0..1] to I_PurchasingDocumentItem       as _PurchasingDocumentItem        on $projection.PurchasingDocument             = _PurchasingDocumentItem.PurchasingDocument and  
                                                                                         $projection.PurchasingDocumentItem         = _PurchasingDocumentItem.PurchasingDocumentItem
association[0..1] to I_SpecialGLCode                as _SpecialGLCode                 on $projection.SpecialGLCode                  = _SpecialGLCode.SpecialGLCode and
                                                                                         $projection.FinancialAccountType           = _SpecialGLCode.FinancialAccountType
association[0..*] to I_TaxCode                      as _TaxCode                       on $projection.TaxCode                        = _TaxCode.TaxCode

association[0..1] to I_Housebank                    as _HouseBank                     on $projection.CompanyCode                    = _HouseBank.CompanyCode and
                                                                                         $projection.HouseBank                      = _HouseBank.HouseBank

association[1..1] to I_AccountingDocument           as _ClearingAccountingDocument    on $projection.CompanyCode                    = _ClearingAccountingDocument.CompanyCode and 
                                                                                         $projection.FiscalYear                     = _ClearingAccountingDocument.FiscalYear and 
                                                                                         $projection.ClearingAccountingDocument     = _ClearingAccountingDocument.AccountingDocument 
association [0..1] to I_JournalEntry                as _ClearingJournalEntry          on $projection.CompanyCode                    = _ClearingJournalEntry.CompanyCode
                                                                                         and $projection.ClearingJournalEntryFiscalYear = _ClearingJournalEntry.FiscalYear
                                                                                         and $projection.ClearingJournalEntry           = _ClearingJournalEntry.AccountingDocument
association [0..1] to I_FiscalYearForCompanyCode    as _ClearingJrnlEntryFiscalYear   on $projection.ClearingJournalEntryFiscalYear = _ClearingJrnlEntryFiscalYear.FiscalYear
                                                                                         and $projection.CompanyCode                    = _ClearingJrnlEntryFiscalYear.CompanyCode

association [0..1] to I_MasterFixedAsset            as _MasterFixedAsset              on $projection.CompanyCode                    = _MasterFixedAsset.CompanyCode and
                                                                                         $projection.MasterFixedAsset               = _MasterFixedAsset.MasterFixedAsset
association[0..1] to I_FixedAsset                   as _FixedAsset                    on $projection.CompanyCode                    = _FixedAsset.CompanyCode and
                                                                                         $projection.MasterFixedAsset               = _FixedAsset.MasterFixedAsset and
                                                                                         $projection.FixedAsset                     = _FixedAsset.FixedAsset
association [0..1] to I_MasterFixedAsset            as _GroupMasterFixedAsset         on $projection.CompanyCode                    = _GroupMasterFixedAsset.CompanyCode and
                                                                                         $projection.GroupMasterFixedAsset          = _GroupMasterFixedAsset.MasterFixedAsset
association[0..1] to I_FixedAsset                   as _GroupFixedAsset               on $projection.CompanyCode                    = _GroupFixedAsset.CompanyCode and
                                                                                         $projection.GroupMasterFixedAsset          = _GroupFixedAsset.MasterFixedAsset and
                                                                                         $projection.GroupFixedAsset                = _GroupFixedAsset.FixedAsset
association[0..1] to I_BusinessProcess              as _BusinessProcess               on $projection.ControllingArea                = _BusinessProcess.ControllingArea and                                                                                        
                                                                                         $projection.BusinessProcess                = _BusinessProcess.BusinessProcess
//association[0..1] to I_ControllingObject            as _CostObject                    on $projection.CostObject                     = _CostObject.ControllingObject
association[0..*] to I_CostCenterActivityType       as _PartnerCostCtrActivityType    on $projection.ControllingArea                = _PartnerCostCtrActivityType.ControllingArea and     
                                                                                         $projection.PartnerCostCtrActivityType     = _PartnerCostCtrActivityType.CostCtrActivityType
association[0..1] to I_InternalOrder                as _PartnerOrder                  on $projection.PartnerOrder                   = _PartnerOrder.InternalOrder
association [0..1] to I_Order                       as _PartnerOrder_2                on  $projection.PartnerOrder                  = _PartnerOrder_2.OrderID       
association[0..1] to I_OrderCategory                as _PartnerOrderCategory          on $projection.PartnerOrderCategory           = _PartnerOrderCategory.OrderCategory
association [0..1] to I_WBSElementBasicData         as _WBSElementBasicData           on  $projection.WBSElementInternalID          = _WBSElementBasicData.WBSElementInternalID  
association [0..1] to I_WBSElementByExternalID      as _WBSElementExternalID          on  $projection.WBSElementExternalID          = _WBSElementExternalID.WBSElementExternalID
association[0..1] to I_WBSElementByInternalKey      as _WBSElementInternalID          on $projection.WBSElementInternalID           = _WBSElementInternalID.WBSElementInternalID
association[0..1] to I_WBSElement                   as _WBSElement                    on $projection.WBSElement                     = _WBSElement.WBSElement
association[0..1] to I_WBSElement                   as _PartnerWBSElement             on $projection.PartnerWBSElement              = _PartnerWBSElement.WBSElement
association[0..1] to I_Project                      as _PartnerProject                on $projection.PartnerProject                 = _PartnerProject.Project
association[0..1] to I_SalesDocument                as _PartnerSalesDocument          on $projection.PartnerSalesDocument           = _PartnerSalesDocument.SalesDocument
association[0..1] to I_SalesDocumentItem            as _PartnerSalesDocumentItem      on $projection.PartnerSalesDocument           = _PartnerSalesDocumentItem.SalesDocument and  
                                                                                         $projection.PartnerSalesDocumentItem       = _PartnerSalesDocumentItem.SalesDocumentItem
association[0..1] to I_BusinessProcess              as _PartnerBusinessProcess        on $projection.ControllingArea                = _PartnerBusinessProcess.ControllingArea and                                                                                        
                                                                                         $projection.PartnerBusinessProcess         = _PartnerBusinessProcess.BusinessProcess

association[0..1] to I_BillingDocumentType          as _BillingDocumentType           on $projection.BillingDocumentType            = _BillingDocumentType.BillingDocumentType 

association[0..1] to I_SalesOrganization            as _SalesOrganization             on $projection.SalesOrganization              = _SalesOrganization.SalesOrganization 
association[0..1] to I_DistributionChannel          as _DistributionChannel           on $projection.DistributionChannel            = _DistributionChannel.DistributionChannel 

association[0..1] to I_Material                     as _SoldMaterial                  on  $projection.SoldMaterial                  = _SoldMaterial.Material //do not use any longer, use _SoldProduct
association[0..1] to I_Product                      as _SoldProduct                   on  $projection.SoldProduct                   = _SoldProduct.Product

association[0..1] to I_Fund                         as _Fund                          on $projection.FinancialManagementArea        = _Fund.FinancialManagementArea and                                                                                        
                                                                                         $projection.Fund                           = _Fund.Fund
association[0..1] to I_Fund                         as _PartnerFund                   on $projection.FinancialManagementArea        = _PartnerFund.FinancialManagementArea and                                                                                        
                                                                                         $projection.PartnerFund                    = _PartnerFund.Fund
association[0..*] to I_FundsCenter                  as _FundsCenter                   on $projection.FinancialManagementArea        = _FundsCenter.FinancialManagementArea and                                                                                        
                                                                                         $projection.FundsCenter                    = _FundsCenter.FundsCenter
association[0..1] to I_CompanyCode                  as _PartnerCompanyCode            on $projection.PartnerCompanyCode             = _PartnerCompanyCode.CompanyCode
                                                                                      
association[0..1] to I_InventoryValuationType       as _InventorySpecialStockValnType  on $projection.InventorySpecialStockValnType = _InventorySpecialStockValnType.InventoryValuationType

association[0..1] to I_InventorySpecialStockType    as _InventorySpecialStockType      on $projection.InventorySpecialStockType     =  _InventorySpecialStockType.InventorySpecialStockType
association[0..1] to I_InvtrySpecialStockValnType   as _InventorySpclStockValnType    on  $projection.InvtrySpecialStockValnType_2  = _InventorySpclStockValnType.InventorySpecialStockValnType

association[0..1] to I_SalesDocument                as _InventorySpclStkSalesDocument  on $projection.InventorySpclStkSalesDocument =  _InventorySpclStkSalesDocument.SalesDocument

association[0..1] to I_SalesDocumentItem            as _InventorySpclStkSalesDocItm    on $projection.InventorySpclStkSalesDocument = _InventorySpclStkSalesDocItm.SalesDocument and  
                                                                                          $projection.InventorySpclStkSalesDocItm   = _InventorySpclStkSalesDocItm.SalesDocumentItem

association[0..1] to I_WBSElementByInternalKey      as _InvtrySpclStockWBSElmntIntID   on $projection.InvtrySpclStockWBSElmntIntID  = _InvtrySpclStockWBSElmntIntID.WBSElementInternalID
association[0..1] to I_WBSElement                   as _InventorySpclStockWBSElement   on $projection.InventorySpclStockWBSElement  = _InventorySpclStockWBSElement.WBSElement
association [0..1]  to I_WBSElementBasicData          as _InvtrySpclStkWBSElmntBscData  on  $projection.InvtrySpclStockWBSElmntIntID = _InvtrySpclStkWBSElmntBscData.WBSElementInternalID     
    
association[0..1] to I_InventoryValuationType       as _InventoryValuationType         on $projection.InventoryValuationType        = _InventoryValuationType.InventoryValuationType

//association[0..1] to I_ControllingObject            as _OriginSenderObject             on $projection.OriginSenderObject            =  _OriginSenderObject.ControllingObject 

association[0..1] to I_ControllingObjectClass       as _ControllingObjectClass         on $projection.ControllingObjectClass        =  _ControllingObjectClass.ControllingObjectClass

association[1..1] to I_Partnercompany               as _PartnerCompany                 on $projection.PartnerCompany                = _PartnerCompany.PartnerCompany

association[0..1] to I_ControllingObjectClass       as _PartnerControllingObjectClass  on $projection.PartnerControllingObjectClass =  _PartnerControllingObjectClass.ControllingObjectClass

association[0..*] to I_CostCenter                   as _OriginCostCenter               on $projection.ControllingArea               = _OriginCostCenter.ControllingArea and  
                                                                                          $projection.OriginCostCenter              = _OriginCostCenter.CostCenter
                                                                           
association[0..*] to I_CostCenterActivityType       as _CostCtrActivityType            on $projection.ControllingArea               = _CostCtrActivityType.ControllingArea and     
                                                                                          $projection.CostCtrActivityType           = _CostCtrActivityType.CostCtrActivityType

association[0..*] to I_CostCenterActivityType       as _OriginCostCtrActivityType      on $projection.ControllingArea               = _OriginCostCtrActivityType.ControllingArea and     
                                                                                          $projection.OriginCostCtrActivityType           = _OriginCostCtrActivityType.CostCtrActivityType  
                                                                                       
association[0..1] to I_OrderCategory                as _OrderCategory                  on $projection.OrderCategory                 =  _OrderCategory.OrderCategory

//association[0..1] to I_NetworkActivity             as _RelatedNetworkActivity         on $projection.ProjectNetwork                =  _RelatedNetworkActivity.ProjectNetwork and
//                                                                                          $projection.RelatedNetworkActivity        =  _RelatedNetworkActivity.NetworkActivity 

//association[0..1] to I_NetworkActivity             as _PartnerProjectNetworkActivity  on $projection.PartnerProjectNetwork         =  _PartnerProjectNetworkActivity.ProjectNetwork and
//                                                                                          $projection.PartnerProjectNetworkActivity =  _PartnerProjectNetworkActivity.NetworkActivity 
                                                                                                                                                                                                                                                                  

association[0..1] to I_MovementCategory             as _MovementCategory               on $projection.AssetAcctTransClassfctn       = _MovementCategory.AssetAcctTransClassfctn                                                                                                                                                                                                                                                            
association[0..1] to I_AssetTransactionType         as _AssetTransactionType           on $projection.AssetTransactionType          = _AssetTransactionType.AssetTransactionType                                                                                                                                                                                                                                                            

association[0..1] to I_BudgetPeriod                 as _BudgetPeriod                   on $projection.BudgetPeriod                  = _BudgetPeriod.BudgetPeriod                                                                                                                                                                                                                                                            

//association[0..*] to I_CostOriginGroup              as _CostOriginGroup                on $projection.ControllingArea               = _CostOriginGroup.ControllingArea and                                                                                                                                                                                                                                                            
//// not contained in view                                                                  $projection.CostOriginType                = _CostOriginGroup.CostOriginType and                                                                                                                                                                                                                                                           
//                                                                                          $projection.CostOriginGroup               = _CostOriginGroup.CostOriginGroup                                                                                                                                                                                                                                                            

association[0..1] to I_FinancialManagementArea      as _FinancialManagementArea        on $projection.FinancialManagementArea       = _FinancialManagementArea.FinancialManagementArea                                                                                                                                                                                                                                                            
//association[0..1] to I_FundedProgram                as _FundedProgram                  on $projection.FinancialManagementArea       = _FundedProgram.FinancialManagementArea and 
//                                                                                          $projection.FundedProgram                 = _FundedProgram.FundedProgram                                                                                                                                                                                                                                                           

association[0..1] to I_HouseBankAccount             as _HouseBankAccount               on $projection.CompanyCode                   = _HouseBankAccount.CompanyCode and
                                                                                          $projection.HouseBank                     = _HouseBankAccount.HouseBank and                                                                                                                                                                                                                                                           
                                                                                          $projection.HouseBankAccount              = _HouseBankAccount.HouseBankAccount                                                                                                                                                                                                                                                            

association[0..1] to I_LogicalSystem                as _LogicalSystem                  on $projection.LogicalSystem                 = _LogicalSystem.LogicalSystem                                                                                                                                                                                                                                                            

association[0..1] to I_OperatingConcern             as _OperatingConcern               on $projection.OperatingConcern              = _OperatingConcern.OperatingConcern                                                                                                                                                                                                                                                            

association[0..1] to I_ProjectNetwork               as _ProjectNetwork                 on $projection.ProjectNetwork                =  _ProjectNetwork.ProjectNetwork

association[0..1] to I_Purreqvaluationarea          as _PurReqValuationArea            on $projection.ValuationArea                 =  _PurReqValuationArea.ValuationArea

association[0..1] to I_FiscalYearVariant            as _FiscalYearVariant              on $projection.FiscalYearVariant             = _FiscalYearVariant.FiscalYearVariant

association [0..1] to I_FiscalCalendarDate          as _FiscalCalendarDate             on $projection.FiscalYearVariant = _FiscalCalendarDate.FiscalYearVariant and 
                                                                                          $projection.PostingDate = _FiscalCalendarDate.CalendarDate

association [0..1] to I_ServiceDocumentType         as _ServiceDocumentType           on $projection.ServiceDocumentType            = _ServiceDocumentType.ServiceDocumentType
  
association [0..1] to I_SrvcDocByDocumentType       as _ServiceDocument               on $projection.ServiceDocumentType            = _ServiceDocument.ServiceDocumentType
                                                                                         and $projection.ServiceDocument            = _ServiceDocument.ServiceDocument 
                                                                                                     
association [0..1] to I_SrvcDocItemByDocumentType   as _ServiceDocumentItem           on $projection.ServiceDocumentType            = _ServiceDocumentItem.ServiceDocumentType
                                                                                         and $projection.ServiceDocument            = _ServiceDocumentItem.ServiceDocument
                                                                                         and $projection.ServiceDocumentItem        = _ServiceDocumentItem.ServiceDocumentItem    
                                                                                         
association [0..1] to I_ServiceDocumentType         as _PartnerServiceDocumentType           on $projection.PartnerServiceDocumentType            = _PartnerServiceDocumentType.ServiceDocumentType
  
association [0..1] to I_SrvcDocByDocumentType       as _PartnerServiceDocument               on $projection.PartnerServiceDocumentType            = _PartnerServiceDocument.ServiceDocumentType
                                                                                         and $projection.PartnerServiceDocument            = _PartnerServiceDocument.ServiceDocument 
                                                                                                     
association [0..1] to I_SrvcDocItemByDocumentType   as _PartnerServiceDocumentItem           on $projection.PartnerServiceDocumentType            = _PartnerServiceDocumentItem.ServiceDocumentType
                                                                                         and $projection.PartnerServiceDocument            = _PartnerServiceDocumentItem.ServiceDocument
                                                                                         and $projection.PartnerServiceDocumentItem        = _PartnerServiceDocumentItem.ServiceDocumentItem      
  association [0..1] to I_ServiceDocumentType          as _ServiceContractType           on  $projection.ServiceContractType        = _ServiceContractType.ServiceDocumentType
  
  association [0..1] to I_SrvcDocByDocumentType        as _ServiceContract               on  $projection.ServiceContractType        = _ServiceContract.ServiceDocumentType
                                                                                         and $projection.ServiceContract            = _ServiceContract.ServiceDocument 
                                                                                                     
  association [0..1] to I_SrvcDocItemByDocumentType    as _ServiceContractItem           on  $projection.ServiceContractType        = _ServiceContractItem.ServiceDocumentType
                                                                                         and $projection.ServiceContract            = _ServiceContractItem.ServiceDocument
                                                                                         and $projection.ServiceContractItem        = _ServiceContractItem.ServiceDocumentItem  
 
association [0..1] to I_ProjectByExternalID         as _ProjectExternalID             on  $projection.ProjectExternalID = _ProjectExternalID.ProjectExternalID

association [0..1] to I_GLAccountFlowType           as _GLAccountFlowType             on  $projection.GLAccountFlowType = _GLAccountFlowType.GLAccountFlowType
association [0..1] to I_LedgerCompanyCodeCrcyRoles  as _LedgerCompanyCodeCrcyRoles    on  $projection.CompanyCode = _LedgerCompanyCodeCrcyRoles.CompanyCode
                                                                                      and $projection.Ledger      = _LedgerCompanyCodeCrcyRoles.Ledger
association [0..1] to I_Grant                        as _Grant                         on  $projection.GrantID                 = _Grant.GrantID
association [0..1] to I_Grant                        as _PartnerGrant                  on  $projection.PartnerGrant            = _PartnerGrant.GrantID

association [0..1] to I_FinServicesProductGroup   as _FinServicesProductGroup  on $projection.FinancialServicesProductGroup = _FinServicesProductGroup.FinancialServicesProductGroup
association [0..1] to I_FinancialServicesBranch   as _FinancialServicesBranch  on $projection.FinancialServicesBranch       = _FinancialServicesBranch.FinancialServicesBranch
association [0..1] to I_FinancialDataSource       as _FinancialDataSource      on $projection.FinancialDataSource           = _FinancialDataSource.FinancialDataSource
association [0..1] to I_CustomerSupplierIndustry  as _CustomerSupplierIndustry on $projection.CustomerSupplierIndustry      = _CustomerSupplierIndustry.Industry 
association [0..1] to I_Country                   as _CustomerSupplierCountry  on  $projection.CustomerSupplierCountry = _CustomerSupplierCountry.Country

{
@ObjectModel.foreignKey.association: '_Ledger'      
key cast( P_GLAcctBalance.rldnr as fis_rldnr preserving type) as Ledger,
@ObjectModel.foreignKey.association: '_CompanyCode'      
key cast( P_GLAcctBalance.rbukrs as fis_bukrs preserving type) as CompanyCode,
@ObjectModel.foreignKey.association: '_FiscalYear'
key cast( P_GLAcctBalance.gjahr as fis_gjahr_no_conv preserving type) as FiscalYear,
@ObjectModel.foreignKey.association: '_SourceLedger'      
key cast( P_GLAcctBalance.rldnr_pers as fins_ledger_pers preserving type) as SourceLedger,
@ObjectModel.foreignKey.association: '_JournalEntry'
key belnr as AccountingDocument,
key docln as LedgerGLLineItem,
@ObjectModel.foreignKey.association: '_GLAccountFlowType'
key GLAccountFlowType,
key P_GLAcctBalance.FiscalPeriodDate,


P_GLAcctBalance.ryear as LedgerFiscalYear,
//P_GLAcctBalance.rrcty as GLRecordType,

///////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_00  Unified Journal Entry: Transaction, Currencies, Units
///////////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_FinancialTransactionType'
P_GLAcctBalance.rmvct as FinancialTransactionType,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_BusinessTransactionType'
P_GLAcctBalance.bttype as BusinessTransactionType,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_ReferenceDocumentType'
cast( P_GLAcctBalance.awtyp as fis_awtyp ) as ReferenceDocumentType,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_LogicalSystem'
P_GLAcctBalance.awsys as LogicalSystem,
P_GLAcctBalance.aworg as ReferenceDocumentContext,
P_GLAcctBalance.awref as ReferenceDocument,
P_GLAcctBalance.awitem as ReferenceDocumentItem,
P_GLAcctBalance.awitgrp as ReferenceDocumentItemGroup,
//P_GLAcctBalance.SUBTA,
//@Semantics.booleanIndicator 
P_GLAcctBalance.xreversing as IsReversal,
//@Semantics.booleanIndicator 
P_GLAcctBalance.xreversed as IsReversed,
//P_GLAcctBalance.XTRUEREV,
//P_GLAcctBalance.AWTYP_REV,
P_GLAcctBalance.aworg_rev as ReversalReferenceDocumentCntxt,
P_GLAcctBalance.awref_rev as ReversalReferenceDocument,
//P_GLAcctBalance.SUBTA_REV,
//@Semantics.booleanIndicator 
P_GLAcctBalance.xsettling as IsSettlement,
//@Semantics.booleanIndicator 
P_GLAcctBalance.xsettled as IsSettled,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PredecessorReferenceDocType'
P_GLAcctBalance.prec_awtyp as PredecessorReferenceDocType,
P_GLAcctBalance.prec_aworg as PredecessorReferenceDocCntxt,
P_GLAcctBalance.prec_awref as PredecessorReferenceDocument,
P_GLAcctBalance.prec_awitem as PredecessorReferenceDocItem,
//P_GLAcctBalance.PREC_SUBTA,

@ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'      
P_GLAcctBalance.racct as GLAccount,
@ObjectModel.foreignKey.association: '_GLAccountHierarchy'      
P_GLAcctBalance.racct as GLAccountHierarchy,

////////////////////////////////////////////////////////////////////////////////////
// .INCLUDE  ACDOC_SI_GL_ACCAS Unified Journal Entry: G/L additional account assignments
////////////////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_ProfitCenter'      
P_GLAcctBalance.prctr as ProfitCenter,
@ObjectModel.foreignKey.association: '_FunctionalArea'      
P_GLAcctBalance.rfarea as FunctionalArea,
@ObjectModel.foreignKey.association: '_BusinessArea'      
P_GLAcctBalance.rbusa as BusinessArea,
@ObjectModel.foreignKey.association: '_ControllingArea'      
P_GLAcctBalance.kokrs as ControllingArea,
@ObjectModel.foreignKey.association: '_Segment'      
P_GLAcctBalance.segment as Segment,
@ObjectModel.foreignKey.association: '_PartnerCostCenter'      
P_GLAcctBalance.scntr as PartnerCostCenter,
@ObjectModel.foreignKey.association: '_PartnerProfitCenter'      
P_GLAcctBalance.pprctr as PartnerProfitCenter,
@ObjectModel.foreignKey.association: '_PartnerFunctionalArea'      
P_GLAcctBalance.sfarea as PartnerFunctionalArea,
@ObjectModel.foreignKey.association: '_PartnerBusinessArea'      
P_GLAcctBalance.sbusa as PartnerBusinessArea,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerCompany'
P_GLAcctBalance.rassc as PartnerCompany,
@ObjectModel.foreignKey.association: '_PartnerSegment'      
P_GLAcctBalance.psegment as PartnerSegment,

/////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FIX  Unified Journal Entry: Mandatory fields for G/L
////////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_DebitCreditCode'      
P_GLAcctBalance.drcrk as DebitCreditCode,
@ObjectModel.foreignKey.association: '_FiscalYearVariant'  
P_GLAcctBalance.periv as FiscalYearVariant,
P_GLAcctBalance.fiscyearper as FiscalYearPeriod,
@ObjectModel.foreignKey.association: '_FiscalCalendarDate'     
P_GLAcctBalance.budat as PostingDate,
//P_GLAcctBalance.bldat,
@ObjectModel.foreignKey.association: '_AccountingDocumentType'      
P_GLAcctBalance.blart as AccountingDocumentType,
P_GLAcctBalance.buzei as AccountingDocumentItem,
P_GLAcctBalance.zuonr as AssignmentReference,
@ObjectModel.foreignKey.association: '_PostingKey'      
P_GLAcctBalance.bschl as PostingKey,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
P_GLAcctBalance.bstat as AccountingDocumentCategory,
P_GLAcctBalance.ktosl as TransactionTypeDetermination,
P_GLAcctBalance.slalittype as SubLedgerAcctLineItemType,
P_GLAcctBalance.usnam as AccountingDocCreatedByUser,
//P_GLAcctBalance.timestamp,
@ObjectModel.foreignKey.association: '_EliminationProfitCenter'      
P_GLAcctBalance.eprctr as EliminationProfitCenter,
P_GLAcctBalance.rhoart as OriginObjectType,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_GLAccountType'
P_GLAcctBalance.glaccount_type as GLAccountType,
@ObjectModel.foreignKey.association: '_ChartOfAccounts'      
P_GLAcctBalance.ktopl as ChartOfAccounts,
@ObjectModel.foreignKey.association: '_AlternativeGLAccount'
P_GLAcctBalance.lokkt as AlternativeGLAccount,
@ObjectModel.foreignKey.association: '_CountryChartOfAccounts'
P_GLAcctBalance.ktop2 as CountryChartOfAccounts,
P_GLAcctBalance.CreationDateTime,

///////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_GEN  Unified Journal Entry: Fields for several subledgers
//////////////////////////////////////////////////////////////////////////
P_GLAcctBalance.rebzg as InvoiceReference,
P_GLAcctBalance.rebzj as InvoiceReferenceFiscalYear,
P_GLAcctBalance.rebzz as FollowOnDocumentType,
P_GLAcctBalance.rebzt as InvoiceItemReference,
P_GLAcctBalance.rbest as ReferencePurchaseOrderCategory,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PurchasingDocument'
P_GLAcctBalance.ebeln as PurchasingDocument,
P_GLAcctBalance.ebelp as PurchasingDocumentItem,
P_GLAcctBalance.zekkn as AccountAssignmentNumber,
@Semantics.text: true
P_GLAcctBalance.sgtxt as DocumentItemText,

@ObjectModel.foreignKey.association: '_Plant'      
P_GLAcctBalance.werks as Plant,
@ObjectModel.foreignKey.association: '_Supplier'      
P_GLAcctBalance.lifnr as Supplier,
@ObjectModel.foreignKey.association: '_Customer'      
P_GLAcctBalance.kunnr as Customer,

@API.element.releaseState: #DEPRECATED
@API.element.successor:   'Product'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'Product'
@ObjectModel.foreignKey.association: '_Material'      
cast( P_GLAcctBalance.matnr as fis_productnumber_depr preserving type ) as Material,

@ObjectModel.foreignKey.association: '_Product'
//cast (P_GLAcctBalance.matnr as productnumber) as Product,  already done in I_GLAccountLineItem(RawData)
P_GLAcctBalance.matnr as Product,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SoldProduct'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SoldProduct'
cast( P_GLAcctBalance.matnr_copa as fis_matnr_pa_depr preserving type ) as SoldMaterial,

@ObjectModel.foreignKey.association: '_SoldProduct'
cast (matnr_copa as fins_matnr_pa preserving type) as SoldProduct, 

@API.element.releaseState: #DEPRECATED
@API.element.successor:   'SoldProductGroup'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'SoldProductGroup'
@ObjectModel.foreignKey.association: '_MaterialGroup'      
cast( P_GLAcctBalance.matkl as fis_matkl_pa_depr preserving type ) as MaterialGroup,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_SoldProductGroup'   
P_GLAcctBalance.matkl as SoldProductGroup,
@Analytics.internalName: #LOCAL 
//@API.element.releaseState: #DEPRECATED
//@API.element.successor:   'SoldProductGroup'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: 'SoldProductGroup'
@ObjectModel.foreignKey.association: '_ProductGroup'
cast (matkl_mm as productgroup preserving type) as ProductGroup, 
//cast (matkl as productgroup preserving type) as ProductGroup, 

/////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FI  Unified Journal Entry: Fields for FI subledgers
/////////////////////////////////////////////////////////////////////////
@ObjectModel.foreignKey.association: '_FinancialAccountType'      
P_GLAcctBalance.koart as FinancialAccountType,
@ObjectModel.foreignKey.association: '_SpecialGLCode'
P_GLAcctBalance.umskz as SpecialGLCode,
P_GLAcctBalance.mwskz as TaxCode,
@ObjectModel.foreignKey.association: '_HouseBank'
P_GLAcctBalance.hbkid as HouseBank, 
@ObjectModel.foreignKey.association: '_HouseBankAccount'
P_GLAcctBalance.hktid as HouseBankAccount,
//@Semantics.booleanIndicator 
P_GLAcctBalance.xopvw as IsOpenItemManaged,
//P_GLAcctBalance.augdt,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntry'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntry' 
@ObjectModel.foreignKey.association: '_ClearingAccountingDocument'
cast( P_GLAcctBalance.augbl as fis_augbl_depre preserving type ) as ClearingAccountingDocument,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ClearingJournalEntryFiscalYear'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'   
cast( P_GLAcctBalance.auggj as fis_auggj_no_conv_depre preserving type ) as ClearingDocFiscalYear,

cast( P_GLAcctBalance.augbl as fis_augbl preserving type ) as ClearingJournalEntry,
cast( P_GLAcctBalance.auggj as fis_auggj_no_conv preserving type ) as ClearingJournalEntryFiscalYear,

//P_GLAcctBalance.xaugp as IsCleared,


/////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FAA  Unified Journal Entry: Fields for Asset Accounting
/////////////////////////////////////////////////////////////////////////
P_GLAcctBalance.afabe as AssetDepreciationArea,
@ObjectModel.foreignKey.association: '_MasterFixedAsset'
P_GLAcctBalance.anln1 as MasterFixedAsset,
@ObjectModel.foreignKey.association: '_FixedAsset'
P_GLAcctBalance.anln2 as FixedAsset,
P_GLAcctBalance.bzdat as AssetValueDate,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_AssetTransactionType'
P_GLAcctBalance.anbwa as AssetTransactionType,
P_GLAcctBalance.movcat as AssetAcctTransClassfctn,
P_GLAcctBalance.depr_period as DepreciationFiscalPeriod,
@ObjectModel.foreignKey.association: '_GroupMasterFixedAsset'
P_GLAcctBalance.anlgr as GroupMasterFixedAsset,
@ObjectModel.foreignKey.association: '_GroupFixedAsset'
P_GLAcctBalance.anlgr2 as GroupFixedAsset,
//P_GLAcctBalance.settlement_rule,

//////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_ML Unified Journal Entry: Fields for Material Ledger
//////////////////////////////////////////////////////////////////////////
P_GLAcctBalance.kalnr as CostEstimate,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   'InvtrySpecialStockValnType_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'InvtrySpecialStockValnType_2'          
@ObjectModel.foreignKey.association: '_InventorySpecialStockValnType'
P_GLAcctBalance.kzbws as InventorySpecialStockValnType,
@ObjectModel.foreignKey.association: '_InventorySpclStockValnType'      
@Analytics.internalName: #LOCAL
cast(P_GLAcctBalance.kzbws as fis_inventoryspclstockvalntype preserving type) as InvtrySpecialStockValnType_2,

//P_GLAcctBalance.xobew,
@ObjectModel.foreignKey.association: '_InventorySpecialStockType'
P_GLAcctBalance.sobkz as InventorySpecialStockType,
@ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocument'
P_GLAcctBalance.mat_kdauf as InventorySpclStkSalesDocument,
@ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocItm'
P_GLAcctBalance.mat_kdpos as InventorySpclStkSalesDocItm,
@ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntIntID'
P_GLAcctBalance.mat_pspnr as InvtrySpclStockWBSElmntIntID,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_InvtrySpclStockWBSElmntExtID'
cast( P_GLAcctBalance.InvtrySpclStockWBSElmntExtID as fis_invspstock_wbsext_no_conv preserving type ) as InvtrySpclStockWBSElmntExtID,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'InvtrySpclStockWBSElmntExtID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'InvtrySpclStockWBSElmntExtID'
@ObjectModel.foreignKey.association: '_InventorySpclStockWBSElement'
P_GLAcctBalance.mat_ps_posid as InventorySpclStockWBSElement,
@ObjectModel.foreignKey.association: '_InventorySpecialStockSupplier'
P_GLAcctBalance.mat_lifnr as InventorySpecialStockSupplier,
@ObjectModel.foreignKey.association: '_InventoryValuationType'
P_GLAcctBalance.bwtar as InventoryValuationType,
@ObjectModel.foreignKey.association: '_Purreqvaluationarea'
P_GLAcctBalance.bwkey as ValuationArea,

////////////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_CFIN   Unified Journal Entry: Fields for Central Finance
//////////////////////////////////////////////////////////////////////////////
P_GLAcctBalance.SenderCompanyCode,
P_GLAcctBalance.racct_sender as SenderGLAccount,
P_GLAcctBalance.accas_sender as SenderAccountAssignment,
P_GLAcctBalance.accasty_sender as SenderAccountAssignmentType,

////////////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_CO  Unified Journal Entry: CO fields
///////////////////////////////////////////////////////////////////////////
//P_GLAcctBalance.hkgrp as UtilsProfileConstcyChkGrp,
//P_GLAcctBalance.co_belkz as ControllingDebitCreditCode,
P_GLAcctBalance.beltp as ControllingObjectDebitType,
P_GLAcctBalance.muvflg as QuantityIsIncomplete,
@ObjectModel.foreignKey.association: '_OffsettingAccountWithBP'
P_GLAcctBalance.gkont as OffsettingAccount,
@ObjectModel.foreignKey.association: '_OffsettingAccountType'
P_GLAcctBalance.gkoar as OffsettingAccountType,
@ObjectModel.foreignKey.association: '_OffsettingChartOfAccounts'
P_GLAcctBalance.OffsettingChartOfAccounts,
P_GLAcctBalance.erlkz as LineItemIsCompleted,
P_GLAcctBalance.pernr as PersonnelNumber,
@ObjectModel.foreignKey.association: '_ControllingObjectClass'
P_GLAcctBalance.scope as ControllingObjectClass,
@ObjectModel.foreignKey.association: '_PartnerCompanyCode'
P_GLAcctBalance.pbukrs as PartnerCompanyCode,
@ObjectModel.foreignKey.association: '_PartnerControllingObjectClass'
P_GLAcctBalance.pscope as PartnerControllingObjectClass,
//P_GLAcctBalance.aufnr_org,
@ObjectModel.foreignKey.association: '_OriginCostCenter'
P_GLAcctBalance.ukostl as OriginCostCenter,
@ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
P_GLAcctBalance.ulstar as OriginCostCtrActivityType,
P_GLAcctBalance.OriginProduct,
P_GLAcctBalance.VarianceOriginGLAccount,
P_GLAcctBalance.accas as AccountAssignment,
P_GLAcctBalance.accasty as AccountAssignmentType,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_ProjectNetwork'
P_GLAcctBalance.nplnr as ProjectNetwork,
P_GLAcctBalance.nplnr_vorgn as RelatedNetworkActivity,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_BusinessProcess'
P_GLAcctBalance.prznr as BusinessProcess,
P_GLAcctBalance.kstrg as CostObject,
//P_GLAcctBalance.bemot,
P_GLAcctBalance.qmnum as CustomerServiceNotification,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceDocumentType'
P_GLAcctBalance.ServiceDocumentType,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceDocument'
P_GLAcctBalance.ServiceDocument,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceDocumentItem'
P_GLAcctBalance.ServiceDocumentItem,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerServiceDocumentType'
P_GLAcctBalance.PartnerServiceDocumentType,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerServiceDocument'
P_GLAcctBalance.PartnerServiceDocument,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerServiceDocumentItem'
P_GLAcctBalance.PartnerServiceDocumentItem,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceContractType'
ServiceContractType,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceContract'
ServiceContract,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_ServiceContractItem'
ServiceContractItem,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_TimeSheetOvertimeCat'
TimeSheetOvertimeCategory,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_OperatingConcern'
P_GLAcctBalance.erkrs as OperatingConcern,
P_GLAcctBalance.paccas as PartnerAccountAssignment,
P_GLAcctBalance.paccasty as PartnerAccountAssignmentType,
P_GLAcctBalance.plstar as PartnerCostCtrActivityType,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerOrder_2'
P_GLAcctBalance.PartnerOrder_2  as PartnerOrder,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerOrderCategory'
P_GLAcctBalance.pautyp as PartnerOrderCategory,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerWBSElement'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'PartnerWBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'PartnerWBSElementExternalID'
P_GLAcctBalance.pps_posid as PartnerWBSElement,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerProject'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'PartnerProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'PartnerProjectExternalID'
P_GLAcctBalance.pps_pspid as PartnerProject,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerSalesDocument'
P_GLAcctBalance.pkdauf as PartnerSalesDocument,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerSalesDocumentItem'
P_GLAcctBalance.pkdpos as PartnerSalesDocumentItem,
P_GLAcctBalance.pnplnr as PartnerProjectNetwork,
P_GLAcctBalance.pnplnr_vorgn as PartnerProjectNetworkActivity,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerBusinessProcess'
P_GLAcctBalance.pprznr as PartnerBusinessProcess,
P_GLAcctBalance.pkstrg as PartnerCostObject,


//////////////////////////////////////////////////////////////////////
//  .INCLUDE  ACDOC_SI_COPA  Unified Journal Entry: CO-PA fields
//////////////////////////////////////////////////////////////////////
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_BillingDocumentType'
P_GLAcctBalance.fkart as BillingDocumentType,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_SalesOrganization'
P_GLAcctBalance.vkorg as SalesOrganization,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_DistributionChannel'
P_GLAcctBalance.vtweg as DistributionChannel,
P_GLAcctBalance.spart as OrganizationDivision,

@ObjectModel.foreignKey.association: '_CustomerGroup'      
P_GLAcctBalance.kdgrp as CustomerGroup,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_CustomerSupplierCountry'      
P_GLAcctBalance.CustomerSupplierCountry,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_CustomerSupplierIndustry'      
P_GLAcctBalance.CustomerSupplierIndustry,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_FinServicesProductGroup'      
P_GLAcctBalance.FinancialServicesProductGroup,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_FinancialServicesBranch'      
P_GLAcctBalance.FinancialServicesBranch,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_FinancialDataSource'      
P_GLAcctBalance.FinancialDataSource,


//////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_PS  Unified Journal Entry: Fields for Public Sector
/////////////////////////////////////////////////////////////////////
//P_GLAcctBalance.re_bukrs,
//P_GLAcctBalance.re_account,

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_JVA  Unified Journal Entry: Fields for Joint Venture Accounting
///////////////////////////////////////////////////////////////////////
P_GLAcctBalance.vname as JointVenture,
P_GLAcctBalance.egrup as JointVentureEquityGroup,
P_GLAcctBalance.recid as JointVentureCostRecoveryCode,
//P_GLAcctBalance.vptnr,
//P_GLAcctBalance.btype,
P_GLAcctBalance.etype as JointVentureEquityType,
//P_GLAcctBalance.prodper,

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_RE STRU  0 0 Unified Journal Entry: Fields for Real Estate
///////////////////////////////////////////////////////////////////////
//P_GLAcctBalance.swenr,
//P_GLAcctBalance.sgenr,
//P_GLAcctBalance.sgrnr,
//P_GLAcctBalance.smenr,
//P_GLAcctBalance.recnnr,
//P_GLAcctBalance.snksl,
//P_GLAcctBalance.sempsl,
P_GLAcctBalance.dabrz as SettlementReferenceDate,
//P_GLAcctBalance.pswenr,
//P_GLAcctBalance.psgenr,
//P_GLAcctBalance.psgrnr,
//P_GLAcctBalance.psmenr,
//P_GLAcctBalance.precnnr,
//P_GLAcctBalance.psnksl,
//P_GLAcctBalance.psempsl,
//P_GLAcctBalance.pdabrz,

@ObjectModel.foreignKey.association: '_CostCenter'      
P_GLAcctBalance.rcntr as CostCenter,
P_GLAcctBalance.lstar as CostCtrActivityType,
//cast(P_GLAcctBalance.aufnr as fis_internalorder) as InternalOrder,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_Order'
P_GLAcctBalance.aufnr as OrderID,
@ObjectModel.foreignKey.association: '_OrderCategory'
P_GLAcctBalance.autyp as OrderCategory,
@ObjectModel.foreignKey.association: '_WBSElementInternalID'
P_GLAcctBalance.ps_psp_pnr as WBSElementInternalID,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_WBSElementExternalID'
P_GLAcctBalance.posid_edit as WBSElementExternalID,
@ObjectModel.foreignKey.association: '_WBSElement'      
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'WBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'WBSElementExternalID'
P_GLAcctBalance.ps_posid as WBSElement,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
P_GLAcctBalance.PartnerWBSElementInternalID,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
P_GLAcctBalance.PartnerWBSElementExternalID,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    'ProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: 'ProjectExternalID'
P_GLAcctBalance.ps_pspid as Project,
P_GLAcctBalance.ps_prj_pnr as ProjectInternalID,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_ProjectExternalID'
P_GLAcctBalance.pspid_edit as ProjectExternalID,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
P_GLAcctBalance.PartnerProjectInternalID,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
P_GLAcctBalance.PartnerProjectExternalID,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_SalesOrder'
P_GLAcctBalance.kdauf as SalesOrder,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_SalesOrderItem'
P_GLAcctBalance.kdpos as SalesOrderItem,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_SalesDocument'
cast(P_GLAcctBalance.kdauf as vbeln_va) as SalesDocument,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_SalesDocumentItem'
cast(P_GLAcctBalance.kdpos as posnr_va) as SalesDocumentItem,

P_GLAcctBalance.augdt as ClearingDate,
@ObjectModel.foreignKey.association: '_ConsolidationUnit'      
P_GLAcctBalance.ConsolidationUnit,
@ObjectModel.foreignKey.association: '_PartnerConsolidationUnit'  
P_GLAcctBalance.PartnerConsolidationUnit,
@ObjectModel.foreignKey.association: '_Company'  
P_GLAcctBalance.Company, 
@ObjectModel.foreignKey.association: '_ConsolidationChartOfAccounts' 
P_GLAcctBalance.ConsolidationChartOfAccounts,
@ObjectModel.foreignKey.association: '_CnsldtnFinancialStatementItem' 
P_GLAcctBalance.CnsldtnFinancialStatementItem,
@ObjectModel.foreignKey.association: '_CnsldtnSubitemCategory' 
P_GLAcctBalance.CnsldtnSubitemCategory,
@ObjectModel.foreignKey.association: '_CnsldtnSubitem' 
P_GLAcctBalance.CnsldtnSubitem,  
P_GLAcctBalance.JrnlEntryItemObsoleteReason,

@ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'      
P_GLAcctBalance.rtcur  as BalanceTransactionCurrency,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } P_GLAcctBalance.tsl  as AmountInBalanceTransacCrcy,

@ObjectModel.foreignKey.association: '_TransactionCurrency'      
P_GLAcctBalance.rwcur as TransactionCurrency,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } P_GLAcctBalance.wsl as AmountInTransactionCurrency,

@ObjectModel.foreignKey.association: '_CompanyCodeCurrency'      
P_GLAcctBalance.rhcur as CompanyCodeCurrency,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } P_GLAcctBalance.hsl as AmountInCompanyCodeCurrency,

@ObjectModel.foreignKey.association: '_GlobalCurrency'      
P_GLAcctBalance.rkcur as GlobalCurrency,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } P_GLAcctBalance.ksl as AmountInGlobalCurrency,

@ObjectModel.foreignKey.association: '_FunctionalCurrency'      
P_GLAcctBalance.FunctionalCurrency as FunctionalCurrency,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } P_GLAcctBalance.AmountInFunctionalCurrency as AmountInFunctionalCurrency,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'      
P_GLAcctBalance.rocur as FreeDefinedCurrency1,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } P_GLAcctBalance.osl as AmountInFreeDefinedCurrency1,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'      
P_GLAcctBalance.rvcur as FreeDefinedCurrency2,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } P_GLAcctBalance.vsl as AmountInFreeDefinedCurrency2,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'      
P_GLAcctBalance.rbcur as FreeDefinedCurrency3,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } P_GLAcctBalance.bsl as AmountInFreeDefinedCurrency3,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'      
P_GLAcctBalance.rccur as FreeDefinedCurrency4,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} } P_GLAcctBalance.csl as AmountInFreeDefinedCurrency4,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'      
P_GLAcctBalance.rdcur as FreeDefinedCurrency5,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} } P_GLAcctBalance.dsl as AmountInFreeDefinedCurrency5,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'      
P_GLAcctBalance.recur as FreeDefinedCurrency6,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} } P_GLAcctBalance.esl as AmountInFreeDefinedCurrency6,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'      
P_GLAcctBalance.rfcur as FreeDefinedCurrency7,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} } P_GLAcctBalance.fsl as AmountInFreeDefinedCurrency7,

@ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'      
P_GLAcctBalance.rgcur as FreeDefinedCurrency8,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} } P_GLAcctBalance.gsl as AmountInFreeDefinedCurrency8,


@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
P_GLAcctBalance.hsl_debit as DebitAmountInCoCodeCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
P_GLAcctBalance.hsl_credit as CreditAmountInCoCodeCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_GLAcctBalance.wsl_debit as DebitAmountInTransCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_GLAcctBalance.wsl_credit as CreditAmountInTransCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } 
P_GLAcctBalance.tsl_debit as DebitAmountInBalanceTransCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } 
P_GLAcctBalance.tsl_credit as CreditAmountInBalanceTransCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } 
P_GLAcctBalance.ksl_debit as DebitAmountInGlobalCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } 
P_GLAcctBalance.ksl_credit as CreditAmountInGlobalCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } 
P_GLAcctBalance.DebitAmountInFunctionalCrcy as DebitAmountInFunctionalCrcy,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } 
P_GLAcctBalance.CreditAmountInFunctionalCrcy as CreditAmountInFunctionalCrcy,


@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } 
P_GLAcctBalance.osl_debit as DebitAmountInFreeDefinedCrcy1,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } 
P_GLAcctBalance.osl_credit as CreditAmountInFreeDefinedCrcy1,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } 
P_GLAcctBalance.vsl_debit as DebitAmountInFreeDefinedCrcy2,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } 
P_GLAcctBalance.vsl_credit as CreditAmountInFreeDefinedCrcy2,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } 
P_GLAcctBalance.bsl_debit as DebitAmountInFreeDefinedCrcy3,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } 
P_GLAcctBalance.bsl_credit as CreditAmountInFreeDefinedCrcy3,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} } 
P_GLAcctBalance.csl_debit as DebitAmountInFreeDefinedCrcy4,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} } 
P_GLAcctBalance.csl_credit as CreditAmountInFreeDefinedCrcy4,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} } 
P_GLAcctBalance.dsl_debit as DebitAmountInFreeDefinedCrcy5,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} } 
P_GLAcctBalance.dsl_credit as CreditAmountInFreeDefinedCrcy5,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} } 
P_GLAcctBalance.esl_debit as DebitAmountInFreeDefinedCrcy6,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} } 
P_GLAcctBalance.esl_credit as CreditAmountInFreeDefinedCrcy6,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} } 
P_GLAcctBalance.fsl_debit as DebitAmountInFreeDefinedCrcy7,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} } 
P_GLAcctBalance.fsl_credit as CreditAmountInFreeDefinedCrcy7,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} } 
P_GLAcctBalance.gsl_debit as DebitAmountInFreeDefinedCrcy8,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} } 
P_GLAcctBalance.gsl_credit as CreditAmountInFreeDefinedCrcy8,

P_GLAcctBalance.poper as FiscalPeriod,

@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} } 
P_GLAcctBalance.hsl_end_bal as EndingBalanceAmtInCoCodeCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'TransactionCurrency'} } 
P_GLAcctBalance.wsl_end_bal as EndingBalanceAmtInTransCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} } 
P_GLAcctBalance.tsl_end_bal as EndingBalanceAmtInBalTransCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'GlobalCurrency'} } 
P_GLAcctBalance.ksl_end_bal as EndingBalanceAmtInGlobalCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FunctionalCurrency'} } 
P_GLAcctBalance.EndingBalanceAmtInFuncnlCrcy as EndingBalanceAmtInFuncnlCrcy,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} } 
P_GLAcctBalance.osl_end_bal as EndingBalAmtInFreeDfndCrcy1,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} } 
P_GLAcctBalance.vsl_end_bal as EndingBalAmtInFreeDfndCrcy2,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} } 
P_GLAcctBalance.bsl_end_bal as EndingBalAmtInFreeDfndCrcy3,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} } 
P_GLAcctBalance.csl_end_bal as EndingBalAmtInFreeDfndCrcy4,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} } 
P_GLAcctBalance.dsl_end_bal as EndingBalAmtInFreeDfndCrcy5,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} } 
P_GLAcctBalance.esl_end_bal as EndingBalAmtInFreeDfndCrcy6,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} } 
P_GLAcctBalance.fsl_end_bal as EndingBalAmtInFreeDfndCrcy7,
@DefaultAggregation: #SUM
@Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} } 
P_GLAcctBalance.gsl_end_bal as EndingBalAmtInFreeDfndCrcy8,

P_GLAcctBalance.AccrualObjectType,
P_GLAcctBalance.AccrualObject,
P_GLAcctBalance.AccrualSubobject,
P_GLAcctBalance.AccrualItemType,
@Analytics.internalName: #LOCAL 
P_GLAcctBalance.AccrualObjectLogicalSystem,
@Analytics.internalName: #LOCAL 
P_GLAcctBalance.AccrualReferenceObject,
@Analytics.internalName: #LOCAL 
P_GLAcctBalance.AccrualValueDate,  
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
P_GLAcctBalance.CashLedgerCompanyCode,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_CashLedgerAccount'
P_GLAcctBalance.CashLedgerAccount,

@ObjectModel.foreignKey.association: '_FinancialManagementArea'
@Analytics.internalName: #LOCAL 
P_GLAcctBalance.fikrs as FinancialManagementArea,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_FundsCenter'
P_GLAcctBalance.FundsCenter,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_FundedProgram'
P_GLAcctBalance.FundedProgram,

@ObjectModel.foreignKey.association: '_Fund'
@Analytics.internalName: #LOCAL 
P_GLAcctBalance.rfund as Fund,
@ObjectModel.foreignKey.association: '_Grant'
@Analytics.internalName: #LOCAL 
P_GLAcctBalance.rgrant_nbr as GrantID,

@ObjectModel.foreignKey.association: '_BudgetPeriod'
@Analytics.internalName: #LOCAL 
P_GLAcctBalance.rbudget_pd as BudgetPeriod,

@ObjectModel.foreignKey.association: '_PartnerFund'
@Analytics.internalName: #LOCAL 
P_GLAcctBalance.sfund as PartnerFund,
@Analytics.internalName: #LOCAL 
@ObjectModel.foreignKey.association: '_PartnerGrant'
P_GLAcctBalance.sgrant_nbr as PartnerGrant,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
P_GLAcctBalance.sbudget_pd as PartnerBudgetPeriod,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
P_GLAcctBalance.PubSecBudgetAccount,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
P_GLAcctBalance.PubSecBudgetAccountCoCode,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnDate'
PubSecBudgetCnsmpnDate,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclPeriod'
P_GLAcctBalance.PubSecBudgetCnsmpnFsclPeriod,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclYear'
P_GLAcctBalance.PubSecBudgetCnsmpnFsclYear,
@Analytics.internalName: #LOCAL
P_GLAcctBalance.PubSecBudgetIsRelevant,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnType'
P_GLAcctBalance.PubSecBudgetCnsmpnType,
@Analytics.internalName: #LOCAL
@ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnAmtType'
P_GLAcctBalance.PubSecBudgetCnsmpnAmtType,
//cast( concat( P_GLAcctBalance.budat, P_GLAcctBalance.poper  ) as fis_fiscalperioddate ) as FiscalPeriodDate,
//cast( concat(  P_GLAcctBalance.poper, P_GLAcctBalance.budat  ) as FIS_FISCALPERIODDATE ) as FiscalPeriodDate,

P_GLAcctBalance.FlowOfFundsLedgerFiscalYear,

P_GLAcctBalance.IsStatisticalCostCenter,
P_GLAcctBalance.IsStatisticalOrder,
P_GLAcctBalance.IsStatisticalSalesDocument,
P_GLAcctBalance.WBSIsStatisticalWBSElement,

_CompanyCode,
_JournalEntry,
_FiscalYear,
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
_Segment,
_PartnerSegment,
_ProfitCenter,
_CurrentProfitCenter,
_PartnerProfitCenter,
_CostCenter,
_CurrentCostCenter,
_PartnerCostCenter,
_BusinessArea,
_PartnerBusinessArea,
_FunctionalArea,
_PartnerFunctionalArea,
_GLAccountInChartOfAccounts,
_GLAccountHierarchy,
_ChartOfAccounts,
_GLAccountInCompanyCode,
_AccountingDocumentType,
_FinancialAccountType,
_DebitCreditCode, 
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_Product'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_Product'
_Material,
_Product,
_Plant,
_Ledger,
_CustomerGroup,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProductGroup_2'
_MaterialGroup,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProductGroup_2'
_SoldProductGroup,
_SoldProductGroup_2,    
//@API.element.releaseState: #DEPRECATED
//@API.element.successor:    '_ProductGroup_2'
//@VDM.lifecycle.status:    #DEPRECATED
//@VDM.lifecycle.successor: '_ProductGroup_2'
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProductGroup_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProductGroup_2'
_ProductGroup,
//_ProductGroup_2,
_Customer,
_Supplier,
_CalendarDate,
_SourceLedger,
_PostingKey,
_EliminationProfitCenter,
_InventorySpecialStockSupplier,
_AlternativeGLAccount,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SalesDocument'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SalesDocument'
_SalesOrder,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SalesDocumentItem'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SalesDocumentItem'
_SalesOrderItem,
_SalesDocument,
_SalesDocumentItem,
_InternalOrder,
_Order,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_PersonWorkAgreement_1'
@VDM.lifecycle.status:     #DEPRECATED
@VDM.lifecycle.successor:  '_PersonWorkAgreement_1'
_Employment,
_PersonWorkAgreement_1,
_FinancialTransactionType,
_BusinessTransactionType,
_ReferenceDocumentType,
_PredecessorReferenceDocType,
_PartnerCompanyCode,
_AccountingDocumentCategory,
_User,
_GLAccountType,
_OffsettingAccountType,
_OffsettingChartOfAccounts,
_OffsettingAccount,
_OffsettingAccountWithBP,
_SenderGLAccount,
_CountryChartOfAccounts,
_PurchasingDocument,
_PurchasingDocumentItem,
_SpecialGLCode,
_TaxCode,
_HouseBank,
_ClearingJrnlEntryFiscalYear,
_ClearingJournalEntry,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_ClearingJournalEntry'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_ClearingJournalEntry'
_ClearingAccountingDocument,
_MasterFixedAsset,
_FixedAsset,
_GroupMasterFixedAsset,
_GroupFixedAsset,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_InventorySpclStockValnType'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_InventorySpclStockValnType'
_InventorySpecialStockValnType,
_InventorySpclStockValnType,
_InventorySpecialStockType,
_InventorySpclStkSalesDocument,
_InventorySpclStkSalesDocItm,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_InvtrySpclStkWBSElmntBscData'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor:  '_InvtrySpclStkWBSElmntBscData'
_InvtrySpclStockWBSElmntIntID,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_InvtrySpclStockWBSElmntExtID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor:  '_InvtrySpclStockWBSElmntExtID'
_InventorySpclStockWBSElement,
_InvtrySpclStkWBSElmntBscData,
_InventoryValuationType,
_ControllingObjectClass,
_PartnerControllingObjectClass,
_OriginCostCenter,
_CostCtrActivityType,
_OriginCostCtrActivityType,
_OrderCategory,
//_RelatedNetworkActivity,
//_PartnerProjectNetworkActivity,
      
_BusinessProcess,
_PartnerCostCtrActivityType,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_PartnerOrder_2'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerOrder_2'
_PartnerOrder,
_PartnerOrder_2,
_PartnerOrderCategory,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_PartnerWBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerWBSElementExternalID'
_PartnerWBSElement,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_PartnerProjectExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_PartnerProjectExternalID'
_PartnerProject,
_PartnerSalesDocument,
_PartnerSalesDocumentItem,
_PartnerBusinessProcess,

@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_WBSElementExternalID'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_WBSElementExternalID'
_WBSElement,
@API.element.releaseState: #DEPRECATED
@API.element.successor:   '_WBSElementBasicData'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_WBSElementBasicData'
_WBSElementInternalID,
_WBSElementExternalID,
_WBSElementBasicData,
      
_BillingDocumentType,
      
_SalesOrganization,
_DistributionChannel,
     
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_SoldProduct'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_SoldProduct'      
_SoldMaterial,
_SoldProduct,   
      
_MovementCategory,
_AssetTransactionType,
      
_HouseBankAccount,
      
_LogicalSystem,
      
_OperatingConcern,
      
_PartnerCompany,
      
_ProjectNetwork,
      
_PurReqValuationArea,

_FiscalCalendarDate,

_FiscalYearVariant,

_ServiceDocumentType,

_ServiceDocument,

_ServiceDocumentItem,

_PartnerServiceDocumentType,

_PartnerServiceDocument,

_PartnerServiceDocumentItem,

_PartnerProjectExternalID,
_PartnerProjctExtrnalIDText,
_PartnerWBSElementExternalID,
_PartnerWBSElemntExtrnalIDText,
_PartnerProjectBasicData,
_PartnerProjectBasicDataText,
_PartnerWBSElementBasicData,
_PartnerWBSElmntBasicDataText,
@API.element.releaseState: #DEPRECATED
@API.element.successor:    '_InvtrySpclStkWBSElmntBscData'
@VDM.lifecycle.status:    #DEPRECATED
@VDM.lifecycle.successor: '_InvtrySpclStkWBSElmntBscData'  
_InvtrySpclStockWBSElmntBD,
_InvtrySpclStockWBSElmntExtID,
_ProjectExternalID,

_ServiceContract,
_ServiceContractType,
_ServiceContractItem,
_TimeSheetOvertimeCat,
_AccrualObjectType,
_AccrualObject,
_AccrualSubobject,
_AccrualItemType, 
_GLAccountFlowType,
_LedgerCompanyCodeCrcyRoles,

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

_ConsolidationUnit,
_PartnerConsolidationUnit,
_Company,
_ConsolidationChartOfAccounts,
_CnsldtnFinancialStatementItem,
_CnsldtnSubitemCategory,
_CnsldtnSubitem,
_CustomerCompany,
_SupplierCompany,
//       // Just for Authorization Check!!! DO NOT USE!!! WILL BE DEPRECATED!!!
P_GLAcctBalance.GLAccountAuthorizationGroup,
P_GLAcctBalance.SupplierBasicAuthorizationGrp,
P_GLAcctBalance.CustomerBasicAuthorizationGrp,
P_GLAcctBalance.AcctgDocTypeAuthorizationGroup,
P_GLAcctBalance.OrderType,
P_GLAcctBalance.SalesOrderType,
P_GLAcctBalance.AssetClass,

                        
_FinServicesProductGroup, 
_FinancialServicesBranch, 
_FinancialDataSource,     
_CustomerSupplierIndustry,
_CustomerSupplierCountry 

}
```
