---
name: I_GLACCOUNTYEARTODATEBALANCEC
description: "General Ledger Account Balances - Cube"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTYEARTODATEBALANCEC')/$value
semantic_en: "General Ledger Account Balances - Cube"
semantic_vi: "G/L Account Balances - Cube — CDS view tổng hợp dựa trên I_GLAccountLineItem."
keywords:
  - "G/L Account Balances"
  - "g/l"
  - "account"
  - "balances"
  - "cube"
  - "source"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
  - "line"
  - "item"
tags:
  - FI
  - account
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_GLACCOUNTYEARTODATEBALANCEC

**General Ledger Account Balances - Cube**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTYEARTODATEBALANCEC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `GLBusinessTransactionType` |  | |  |  | `CHAR(4)` | Transaction Type for General Ledger |
| `BusinessTransactionCategory` |  | |  |  | `CHAR(4)` | Business Transaction Category |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `ControllingBusTransacType` |  | |  |  | `CHAR(4)` | CO Business Transaction |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Reference Document Item |
| `ReferenceDocumentItemGroup` |  | |  |  | `NUMC(6)` | Reference Document Item Group |
| `TransactionSubitem` |  | |  |  | `NUMC(6)` | Partial Document to be balanced to zero |
| `IsReversal` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversed |
| `ReversalReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Reversal Reference Document Context |
| `ReversalReferenceDocument` |  | |  |  | `CHAR(10)` | Reversal Reference Document |
| `ReversalTransactionSubitem` |  | |  |  | `NUMC(6)` | Reversal Transaction Sub Item |
| `IsSettlement` |  | |  |  | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `IsSettled` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `PredecessorReferenceDocType` |  | |  |  | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocCntxt` |  | |  |  | `CHAR(10)` | Predecessor Reference Document Context |
| `PredecessorReferenceDocument` |  | |  |  | `CHAR(10)` | Predecessor Reference Document |
| `PredecessorReferenceDocItem` |  | |  |  | `NUMC(6)` | Predecessor Reference Document Item |
| `PrdcssrJournalEntryCompanyCode` |  | |  |  | `CHAR(4)` | Preceding Journal Entry Company Code |
| `PrdcssrJournalEntryFiscalYear` |  | |  |  | `NUMC(4)` | Preceding Journal Entry Fiscal Year |
| `PredecessorJournalEntry` |  | |  |  | `CHAR(10)` | Preceding Journal Entry Document Number |
| `PredecessorJournalEntryItem` |  | |  |  | `CHAR(6)` | Preceding Journal Entry Line Item |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Reference Document Type |
| `SourceLogicalSystem` |  | |  |  | `CHAR(10)` | Source Logical System |
| `SourceReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceReferenceDocSubitem` |  | |  |  | `NUMC(6)` | Source Reference Document Subitem |
| `IsCommitment` |  | |  |  | `CHAR(1)` | Indicator: Is Commitment |
| `JrnlEntryItemObsoleteReason` |  | |  |  | `CHAR(1)` | Journal Entry Item Obsolete Reason |
| `JrnlPeriodEndClosingRunLogUUID` |  | |  |  | `RAW(16)` | UUID of Financial Closing Run |
| `OrganizationalChange` |  | |  |  | `CHAR(10)` | Orgl Change |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `FixedAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Global Currency |
| `GrpValnFixedAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Group Valuation Fixed Amount in Global Currency |
| `PrftCtrValnFxdAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Profit Center Valuation Fixed Amount in Global Currency |
| `TotalPriceVarcInGlobalCrcy` |  | |  |  | `CURR(23)` | Total Price Variance in Global Currency |
| `GrpValnTotPrcVarcInGlobCrcy` |  | |  |  | `CURR(23)` | Group Valuation Total Price Variance in Global Currency |
| `PrftCtrValnTotPrcVarcInGlbCrcy` |  | |  |  | `CURR(23)` | Profit Center Valuation Total Price Variance in Global Cur. |
| `FixedPriceVarcInGlobalCrcy` |  | |  |  | `CURR(23)` | Fixed Price Variance in Global Currency |
| `GrpValnFixedPrcVarcInGlobCrcy` |  | |  |  | `CURR(23)` | Group Valuation Fixed Price Variance in Global Currency |
| `PrftCtrValnFxdPrcVarcInGlbCrcy` |  | |  |  | `CURR(23)` | Profit Center Valuation Fixed Price Variance in Global Cur. |
| `FixedAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Fixed Amount in Company Currency |
| `ControllingObjectCurrency` |  | |  |  | `CUKY(5)` | CO Object Currency |
| `AmountInObjectCurrency` |  | |  |  | `CURR(23)` | Amount in Object Currency |
| `GrantCurrency` |  | |  |  | `CUKY(5)` | Grant currency |
| `AmountInGrantCurrency` |  | |  |  | `CURR(23)` | Grant Amount in Grant Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `FixedQuantity` |  | |  |  | `QUAN(23)` | Fixed Quantity |
| `CostSourceUnit` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `ValuationFixedQuantity` |  | |  |  | `QUAN(23)` | Valuation Fixed Quantity |
| `ReferenceQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Reference Quantity |
| `ReferenceQuantity` |  | |  |  | `QUAN(23)` | Reference quantity |
| `AdditionalQuantity1Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 1 Unit |
| `AdditionalQuantity1` |  | |  |  | `QUAN(23)` | Additional Quantity 1 |
| `AdditionalQuantity2Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 2 Unit |
| `AdditionalQuantity2` |  | |  |  | `QUAN(23)` | Additional Quantity 2 |
| `AdditionalQuantity3Unit` |  | |  |  | `UNIT(3)` | Additional Quantity 3 Unit |
| `AdditionalQuantity3` |  | |  |  | `QUAN(23)` | Additional Quantity 3 |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | Last Change Date Time |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Creation Date Time |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `EliminationProfitCenter` |  | |  |  | `CHAR(10)` | Elimination Profit Center |
| `OriginObjectType` |  | |  |  | `NUMC(2)` | Type of Origin Object |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `CountryChartOfAccounts` |  | |  |  | `CHAR(4)` | Alternative Chart of Accounts for Country/Region |
| `ItemIsSplit` |  | |  |  | `CHAR(1)` | Item changed by document splitting |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Consolidation Unit |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `CnsldtnFinancialStatementItem` |  | |  |  | `CHAR(10)` | Consolidation Financial Statement Item |
| `CnsldtnSubitemCategory` |  | |  |  | `CHAR(3)` | Consolidation Subitem Category |
| `CnsldtnSubitem` |  | |  |  | `CHAR(10)` | Consolidation Subitem |
| `InvoiceReference` |  | |  |  | `CHAR(10)` | Invoice Reference |
| `InvoiceReferenceFiscalYear` |  | |  |  | `NUMC(4)` | Invoice Reference Fiscal Year |
| `FollowOnDocumentType` |  | |  |  | `CHAR(1)` | Follow-On Document Type |
| `InvoiceItemReference` |  | |  |  | `NUMC(3)` | Invoice Item Reference |
| `ReferencePurchaseOrderCategory` |  | |  |  | `NUMC(3)` | Category of Reference Purchase Order |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Purchasing Document Item |
| `AccountAssignmentNumber` |  | |  |  | `NUMC(2)` | Account Assignment Number |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `ConditionContract` |  | |  |  | `CHAR(10)` | Condition Contract |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `TaxCountry` |  | |  |  | `CHAR(3)` | Tax Reporting Country/Region |
| `HouseBank` |  | |  |  | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | House Bank Account |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `ClearingDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry (Deprecated) |
| `ClearingJournalEntry` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `ClearingJournalEntryFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Clearing Journal Entry |
| `ValueDate` |  | |  |  | `DATS(8)` | Value Date |
| `AssetDepreciationArea` |  | |  |  | `NUMC(2)` | Asset Depreciation Area (Real or Derived) |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetValueDate` |  | |  |  | `DATS(8)` | Asset Value Date |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `AssetAcctTransClassfctn` |  | |  |  | `CHAR(2)` | Transaction Type Category |
| `DepreciationFiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period of Depreciation |
| `GroupMasterFixedAsset` |  | |  |  | `CHAR(12)` | Group Asset |
| `GroupFixedAsset` |  | |  |  | `CHAR(4)` | Group Asset Subnumber |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `PartnerMasterFixedAsset` |  | |  |  | `CHAR(12)` | Partner Fixed Asset (Partner Main Asset Number) |
| `PartnerFixedAsset` |  | |  |  | `CHAR(4)` | Partner Asset Subnumber |
| `CostEstimate` |  | |  |  | `NUMC(12)` | Cost Estimate |
| `InventorySpecialStockValnType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Valuation Type (Deprecated) |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Inventory Special Stock Type |
| `InventorySpclStkSalesDocument` |  | |  |  | `CHAR(10)` | Inventory Special Stock Sales Document |
| `InventorySpclStkSalesDocItm` |  | |  |  | `NUMC(6)` | Inventory Special Stock Sales Document Item |
| `InvtrySpclStockWBSElmntIntID` |  | |  |  | `NUMC(8)` | Inventory Special Stock WBS Element Internal ID |
| `InventorySpecialStockSupplier` |  | |  |  | `CHAR(10)` | Supplier of Inventory Special Stock |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Inventory Valuation Type |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `SenderGLAccount` |  | |  |  | `CHAR(10)` | Sender G/L Account |
| `SenderAccountAssignment` |  | |  |  | `CHAR(30)` | Sender Account Assignment |
| `SenderAccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type in Sender System |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `OriginSenderObject` |  | |  |  | `CHAR(22)` | Origin Sender Object |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit Credit Code |
| `ControllingObjectDebitType` |  | |  |  | `NUMC(1)` | Controlling Object Debit Type |
| `QuantityIsIncomplete` |  | |  |  | `NUMC(1)` | Indicator: Quantity is Incomplete |
| `OffsettingAccount` |  | |  |  | `CHAR(10)` | Offsetting Account |
| `OffsettingAccountType` |  | |  |  | `CHAR(1)` | Offsetting Account Type |
| `OffsettingChartOfAccounts` |  | |  |  | `CHAR(4)` | Offsetting Chart of Accounts |
| `LineItemIsCompleted` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Completed |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerControllingObjectClass` |  | |  |  | `CHAR(2)` | Partner Controlling Object Class |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `OriginProduct` |  | |  |  | `CHAR(40)` | Origin Product |
| `VarianceOriginGLAccount` |  | |  |  | `CHAR(10)` | Origin G/L Account of a Variance |
| `AccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSElementExternalID` |  | |  | `cast( I_GLAccountLineItem._WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv )` | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  | `cast( I_GLAccountLineItem._PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv )` | `CHAR(24)` | Partner WBS Element External ID |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  | `cast( I_GLAccountLineItem._ProjectBasicData.ProjectExternalID as fis_projectext_no_conv )` | `CHAR(24)` | Project External ID |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` |  | |  | `cast( I_GLAccountLineItem._PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv )` | `CHAR(24)` | Partner Project External ID |
| `OperatingConcern` |  | |  |  | `CHAR(4)` | Operating Concern |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `CustomerServiceNotification` |  | |  |  | `CHAR(12)` | Customer Service Notification |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `PartnerServiceDocumentType` |  | |  |  | `CHAR(4)` | Partner Service Document Type |
| `PartnerServiceDocument` |  | |  |  | `CHAR(10)` | Partner Service Document |
| `PartnerServiceDocumentItem` |  | |  |  | `NUMC(6)` | Partner Service Document Item |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `PartnerAccountAssignment` |  | |  |  | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  | `PartnerOrder_2` | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` |  | |  |  | `NUMC(2)` | Partner Order Category |
| `PartnerSalesDocument` |  | |  |  | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` |  | |  |  | `NUMC(6)` | Partner Sales Document Item |
| `PartnerProjectNetwork` |  | |  |  | `CHAR(12)` | Partner Project Network |
| `PartnerBusinessProcess` |  | |  |  | `CHAR(12)` | Partner Business Process |
| `PartnerCostObject` |  | |  |  | `CHAR(12)` | Partner Cost Object |
| `ControllingDocumentItem` |  | |  |  | `NUMC(3)` | Controlling Document Item |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustomerSupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Customer Supplier Corporate Group |
| `CashLedgerCompanyCode` |  | |  |  | `CHAR(4)` | Cash Origin Company Code |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FundsCenter` |  | |  |  | `CHAR(16)` | Funds Management Center |
| `FundedProgram` |  | |  |  | `CHAR(24)` | Funded Program |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclPeriod` |  | |  |  | `NUMC(3)` | CC Fiscal Period for Budget Consumption Date |
| `PubSecBudgetCnsmpnFsclYear` |  | |  |  | `NUMC(4)` | CC Fiscal Year for Budget Consumption Date |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnAmtType` |  | |  |  | `CHAR(4)` | Budget Consumption Amount Type |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `GteeMBudgetValidityNumber` |  | |  |  | `CHAR(3)` | Budget Validity Number |
| `FinancialServicesProductGroup` |  | |  |  | `CHAR(10)` | Financial Services Product Group |
| `FinancialServicesBranch` |  | |  |  | `CHAR(10)` | Financial Services Branch |
| `FinancialDataSource` |  | |  |  | `CHAR(10)` | Financial Data Source |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Joint Venture Equity Group |
| `JointVentureCostRecoveryCode` |  | |  |  | `CHAR(2)` | Joint Venture Cost Recovery Code |
| `JointVenturePartner` |  | |  |  | `CHAR(10)` | Joint Venture Partner |
| `JointVentureBillingType` |  | |  |  | `CHAR(2)` | Joint Venture Billing Type |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Joint Venture Equity Type |
| `JointVentureProductionDate` |  | |  |  | `DATS(8)` | Joint Venture Production Date |
| `JointVentureBillingDate` |  | |  |  | `DATS(8)` | Joint Venture Billing Date |
| `JointVentureOperationalDate` |  | |  |  | `DATS(8)` | Joint Venture Operational Date |
| `JointVentureAccountingActivity` |  | |  |  | `CHAR(2)` | Joint Venture Accounting Activity |
| `PartnerVenture` |  | |  |  | `CHAR(6)` | Partner Venture |
| `PartnerEquityGroup` |  | |  |  | `CHAR(3)` | Partner Equity Group |
| `SenderCostRecoveryCode` |  | |  |  | `CHAR(2)` | Sender Cost Recovery Code |
| `REBusinessEntity` |  | |  |  | `CHAR(8)` | RE Business Entity |
| `RealEstateBuilding` |  | |  |  | `CHAR(8)` | Real Estate Building |
| `RealEstateProperty` |  | |  |  | `CHAR(8)` | Real Estate Property |
| `RERentalObject` |  | |  |  | `CHAR(8)` | RE Rental Object |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `REServiceChargeKey` |  | |  |  | `CHAR(4)` | RE Service Charge Key |
| `RESettlementUnitID` |  | |  |  | `CHAR(5)` | RE Settlement Unit |
| `SettlementReferenceDate` |  | |  |  | `DATS(8)` | Settlement Reference Date |
| `REPartnerBusinessEntity` |  | |  |  | `CHAR(8)` | RE Partner Business Entity |
| `RealEstatePartnerBuilding` |  | |  |  | `CHAR(8)` | Real Estate Partner Building |
| `RealEstatePartnerProperty` |  | |  |  | `CHAR(8)` | Real Estate Partner Property |
| `REPartnerRentalObject` |  | |  |  | `CHAR(8)` | RE Partner Rental Object |
| `RealEstatePartnerContract` |  | |  |  | `CHAR(13)` | Real Estate Partner Contract |
| `REPartnerServiceChargeKey` |  | |  |  | `CHAR(4)` | RE Partner Service Charge Key |
| `REPartnerSettlementUnitID` |  | |  |  | `CHAR(5)` | RE Partner Settlement Unit |
| `PartnerSettlementReferenceDate` |  | |  |  | `DATS(8)` | Partner Reference Date for Settlement |
| `AccrualObjectType` |  | |  |  | `CHAR(4)` | Type of the Accrual Object |
| `AccrualObject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Object |
| `AccrualSubobject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Subobject |
| `AccrualItemType` |  | |  |  | `CHAR(11)` | Type of the Item of the Accrual Subobject |
| `AccrualValueDate` |  | |  |  | `DATS(8)` | Accrual Value Date |
| `FinancialValuationObjectType` |  | |  |  | `CHAR(4)` | Financial Valuation Object Type |
| `FinancialValuationObject` |  | |  |  | `CHAR(32)` | Financial Valuation Object |
| `FinancialValuationSubobject` |  | |  |  | `CHAR(32)` | Financial Valuation Subobject |
| `NetDueDate` |  | |  |  | `DATS(8)` | Net Due Date |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Credit Risk Class |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `OrderItem` |  | |  |  | `NUMC(4)` | Number of Order Item |
| `PartnerOrderItem` |  | |  |  | `NUMC(4)` | Partner Order Item Number |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FunctionalLocation` |  | |  |  | `CHAR(30)` | Functional Location |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `MaintenanceActivityType` |  | |  |  | `CHAR(3)` | Maintenance activity type |
| `MaintenanceOrderPlanningCode` |  | |  |  | `CHAR(1)` | Maintenance order planning indicator |
| `MaintPriorityType` |  | |  |  | `CHAR(2)` | Priority Type |
| `MaintPriority` |  | |  |  | `CHAR(1)` | Priority |
| `SuperiorOrder` |  | |  |  | `CHAR(12)` | Number of Superior Order |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group for Maintenance Orders |
| `MaintenanceOrderIsPlanned` |  | |  |  | `CHAR(1)` | Planned Parts/Work |
| `DebitAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Company Code Currency |
| `CreditAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Company Code Currency |
| `DebitAmountInTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Transaction Currency |
| `CreditAmountInTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Transaction Currency |
| `DebitAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Balance Transaction Currency |
| `CreditAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Balance Transaction Currency |
| `DebitAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Global Currency |
| `CreditAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Global Currency |
| `DebitAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Functional Currency |
| `CreditAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Functional Currency |
| `DebitAmountInFreeDfndCrcy1` |  | |  | `DebitAmountInFreeDefinedCrcy1` | `CURR(23)` | Debit Amount in Free Defined Currency 1 |
| `CreditAmountInFreeDfndCrcy1` |  | |  | `CreditAmountInFreeDefinedCrcy1` | `CURR(23)` | Credit Amount in Free Defined Currency 1 |
| `DebitAmountInFreeDfndCrcy2` |  | |  | `DebitAmountInFreeDefinedCrcy2` | `CURR(23)` | Debit Amount in Free Defined Currency 2 |
| `CreditAmountInFreeDfndCrcy2` |  | |  | `CreditAmountInFreeDefinedCrcy2` | `CURR(23)` | Credit Amount in Free Defined Currency 2 |
| `DebitAmountInFreeDfndCrcy3` |  | |  | `DebitAmountInFreeDefinedCrcy3` | `CURR(23)` | Debit Amount in Free Defined Currency 3 |
| `CreditAmountInFreeDfndCrcy3` |  | |  | `CreditAmountInFreeDefinedCrcy3` | `CURR(23)` | Credit Amount in Free Defined Currency 3 |
| `DebitAmountInFreeDfndCrcy4` |  | |  | `DebitAmountInFreeDefinedCrcy4` | `CURR(23)` | Debit Amount in Free Defined Currency 4 |
| `CreditAmountInFreeDfndCrcy4` |  | |  | `CreditAmountInFreeDefinedCrcy4` | `CURR(23)` | Credit Amount in Free Defined Currency 4 |
| `DebitAmountInFreeDfndCrcy5` |  | |  | `DebitAmountInFreeDefinedCrcy5` | `CURR(23)` | Debit Amount in Free Defined Currency 5 |
| `CreditAmountInFreeDfndCrcy5` |  | |  | `CreditAmountInFreeDefinedCrcy5` | `CURR(23)` | Credit Amount in Free Defined Currency 5 |
| `DebitAmountInFreeDfndCrcy6` |  | |  | `DebitAmountInFreeDefinedCrcy6` | `CURR(23)` | Debit Amount in Free Defined Currency 6 |
| `CreditAmountInFreeDfndCrcy6` |  | |  | `CreditAmountInFreeDefinedCrcy6` | `CURR(23)` | Credit Amount in Free Defined Currency 6 |
| `DebitAmountInFreeDfndCrcy7` |  | |  | `DebitAmountInFreeDefinedCrcy7` | `CURR(23)` | Debit Amount in Free Defined Currency 7 |
| `CreditAmountInFreeDfndCrcy7` |  | |  | `CreditAmountInFreeDefinedCrcy7` | `CURR(23)` | Credit Amount in Free Defined Currency 7 |
| `DebitAmountInFreeDfndCrcy8` |  | |  | `DebitAmountInFreeDefinedCrcy8` | `CURR(23)` | Debit Amount in Free Defined Currency 8 |
| `CreditAmountInFreeDfndCrcy8` |  | |  | `CreditAmountInFreeDefinedCrcy8` | `CURR(23)` | Credit Amount in Free Defined Currency 8 |
| `IsStatisticalOrder` |  | |  |  | `CHAR(1)` | Indicator: Internal Order is Statistical Account Assignment |
| `IsStatisticalCostCenter` |  | |  |  | `CHAR(1)` | Indicator: Cost Center is Statistical Account Assignment |
| `IsStatisticalSalesDocument` |  | |  |  | `CHAR(1)` | Sales Document is statistical |
| `WBSIsStatisticalWBSElement` |  | |  |  | `CHAR(1)` | Indicator: WBS Element is Statistical Account Assignment |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarYearQuarter` |  | |  |  | `NUMC(5)` | Year Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarYearMonth` |  | |  |  | `NUMC(6)` | Year Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarYearWeek` |  | |  |  | `NUMC(6)` | Year Week |
| `_ProjectExternalID` | | ✓ | | | | |
| `_PartnerProjectExternalID` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_PartnerWBSElementExternalID` | | ✓ | | | | |
| `_ClearingAccountingDocument` | | ✓ | | | | |
| `_PartnerOrder_2` | | ✓ | | | | |
| `_PartnerOrder` | | ✓ | | | | |
| `_FinServicesProductGroup` | | ✓ | | | | |
| `_FinancialServicesBranch` | | ✓ | | | | |
| `_FinancialDataSource` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_PartnerProjectExternalID` | `I_ProjectByExternalID` | [0..1] |
| `_WBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_PartnerWBSElementExternalID` | `I_WBSElementByExternalID` | [0..1] |
| `_ClearingAccountingDocument` | `I_JournalEntry` | [0..1] |
| `_PartnerOrder_2` | `I_Order` | [0..1] |
| `_PartnerOrder` | `I_InternalOrder` | [0..1] |
| `_FinServicesProductGroup` | `I_FinServicesProductGroup` | [0..1] |
| `_FinancialServicesBranch` | `I_FinancialServicesBranch` | [0..1] |
| `_FinancialDataSource` | `I_FinancialDataSource` | [0..1] |
| `_CustomerSupplierIndustry` | `I_CustomerSupplierIndustry` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTYEARTODATEBALANCEC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GLACCOUNTYEARTODATEBALANCEC')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
@AccessControl: {
                   authorizationCheck: #CHECK,
                   personalData.blocking:#REQUIRED
               }
@ObjectModel:   {
                    representativeKey: 'LedgerGLLineItem',
                    usageType:  {
                                    sizeCategory: #XXL,
                                    serviceQuality: #D,
                                    dataClass: #MIXED
                                },
                   supportedCapabilities: [ #ANALYTICAL_PROVIDER,#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                   modelingPattern: #ANALYTICAL_CUBE
                }

@Analytics:     {
                    dataCategory: #CUBE,
                    internalName: #LOCAL

                }
@Analytics.technicalName: 'IFIGLACCTYTDBALC'
@VDM:           {
                    viewType: #COMPOSITE
                }
@Metadata:  {
                ignorePropagatedAnnotations: true,
                allowExtensions: true
            }
@EndUserText.label: 'G/L Account Balances - Cube'
@AccessControl.auditFilter: #ENABLED
@Environment.sql.passValueForClient: true
define view entity I_GLAccountYearToDateBalanceC
  as select from I_GLAccountLineItem as I_GLAccountLineItem

  association [0..1] to I_ProjectByExternalID      as _ProjectExternalID           on  $projection.ProjectExternalID = _ProjectExternalID.ProjectExternalID
  association [0..1] to I_ProjectByExternalID      as _PartnerProjectExternalID    on  $projection.PartnerProjectExternalID = _PartnerProjectExternalID.ProjectExternalID
  association [0..1] to I_WBSElementByExternalID   as _WBSElementExternalID        on  $projection.WBSElementExternalID = _WBSElementExternalID.WBSElementExternalID
  association [0..1] to I_WBSElementByExternalID   as _PartnerWBSElementExternalID on  $projection.PartnerWBSElementExternalID = _PartnerWBSElementExternalID.WBSElementExternalID
  association [0..1] to I_JournalEntry             as _ClearingAccountingDocument  on  $projection.CompanyCode                = _ClearingAccountingDocument.CompanyCode
                                                                                   and $projection.FiscalYear                 = _ClearingAccountingDocument.FiscalYear
                                                                                   and $projection.ClearingAccountingDocument = _ClearingAccountingDocument.AccountingDocument

  association [0..1] to I_Order                    as _PartnerOrder_2              on  $projection.PartnerOrder = _PartnerOrder_2.OrderID
  /* needed for compatibility reasons */
  association [0..1] to I_InternalOrder            as _PartnerOrder                on  $projection.PartnerOrder = _PartnerOrder.InternalOrder

  association [0..1] to I_FinServicesProductGroup  as _FinServicesProductGroup     on  $projection.FinancialServicesProductGroup = _FinServicesProductGroup.FinancialServicesProductGroup
  association [0..1] to I_FinancialServicesBranch  as _FinancialServicesBranch     on  $projection.FinancialServicesBranch = _FinancialServicesBranch.FinancialServicesBranch
  association [0..1] to I_FinancialDataSource      as _FinancialDataSource         on  $projection.FinancialDataSource = _FinancialDataSource.FinancialDataSource
  association [0..1] to I_CustomerSupplierIndustry as _CustomerSupplierIndustry    on  $projection.CustomerSupplierIndustry = _CustomerSupplierIndustry.Industry

  association of exact one to exact one E_JournalEntryItem   as _Extension         on  $projection.SourceLedger       = _Extension.SourceLedger
                                                                                   and $projection.CompanyCode        = _Extension.CompanyCode
                                                                                   and $projection.FiscalYear         = _Extension.FiscalYear
                                                                                   and $projection.AccountingDocument = _Extension.AccountingDocument
                                                                                   and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem

{
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key I_GLAccountLineItem.SourceLedger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key I_GLAccountLineItem.CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key I_GLAccountLineItem.FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key I_GLAccountLineItem.AccountingDocument,
  key I_GLAccountLineItem.LedgerGLLineItem,
      @ObjectModel.foreignKey.association: '_Ledger'
  key I_GLAccountLineItem.Ledger,
      @Consumption: {
                        filter: {
                                      mandatory: true,
                                    multipleSelections: false,
                                    selectionType: #SINGLE
                                }
                     }
      //      @Semantics.fiscal.year: true
      //       @ObjectModel.foreignKey.association: '_LedgerFiscalYearForVariant'
      I_GLAccountLineItem.LedgerFiscalYear,
      I_GLAccountLineItem.GLRecordType,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      I_GLAccountLineItem.ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      I_GLAccountLineItem.ControllingArea,
      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      I_GLAccountLineItem.FinancialTransactionType,
      I_GLAccountLineItem.GLBusinessTransactionType,
      @ObjectModel.foreignKey.association: '_BusinessTransactionCategory'
      I_GLAccountLineItem.BusinessTransactionCategory,
      @ObjectModel.foreignKey.association: '_BusinessTransactionType'
      I_GLAccountLineItem.BusinessTransactionType,
      I_GLAccountLineItem.ControllingBusTransacType,
      @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
      I_GLAccountLineItem.ReferenceDocumentType,
      I_GLAccountLineItem.LogicalSystem,
      I_GLAccountLineItem.ReferenceDocumentContext,
      I_GLAccountLineItem.ReferenceDocument,
      I_GLAccountLineItem.ReferenceDocumentItem,
      I_GLAccountLineItem.ReferenceDocumentItemGroup,
      I_GLAccountLineItem.TransactionSubitem,
      I_GLAccountLineItem.IsReversal,
      I_GLAccountLineItem.IsReversed,
      I_GLAccountLineItem.ReversalReferenceDocumentCntxt,
      I_GLAccountLineItem.ReversalReferenceDocument,
      I_GLAccountLineItem.ReversalTransactionSubitem,
      I_GLAccountLineItem.IsSettlement,
      I_GLAccountLineItem.IsSettled,
      @ObjectModel.foreignKey.association: '_PredecessorReferenceDocType'
      I_GLAccountLineItem.PredecessorReferenceDocType,
      I_GLAccountLineItem.PredecessorReferenceDocCntxt,
      I_GLAccountLineItem.PredecessorReferenceDocument,
      I_GLAccountLineItem.PredecessorReferenceDocItem,
      I_GLAccountLineItem.PrdcssrJournalEntryCompanyCode,
      I_GLAccountLineItem.PrdcssrJournalEntryFiscalYear,
      I_GLAccountLineItem.PredecessorJournalEntry,
      I_GLAccountLineItem.PredecessorJournalEntryItem,
      I_GLAccountLineItem.SourceReferenceDocumentType,
      I_GLAccountLineItem.SourceLogicalSystem,
      I_GLAccountLineItem.SourceReferenceDocumentCntxt,
      I_GLAccountLineItem.SourceReferenceDocument,
      I_GLAccountLineItem.SourceReferenceDocumentItem,
      I_GLAccountLineItem.SourceReferenceDocSubitem,
      I_GLAccountLineItem.IsCommitment,
      I_GLAccountLineItem.JrnlEntryItemObsoleteReason,
      I_GLAccountLineItem.JrnlPeriodEndClosingRunLogUUID,
      I_GLAccountLineItem.OrganizationalChange,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      I_GLAccountLineItem.GLAccount,
      @ObjectModel.foreignKey.association: '_CostCenter'
      I_GLAccountLineItem.CostCenter,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      I_GLAccountLineItem.ProfitCenter,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      I_GLAccountLineItem.FunctionalArea,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      I_GLAccountLineItem.BusinessArea,
      @ObjectModel.foreignKey.association: '_Segment'
      I_GLAccountLineItem.Segment,
      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      I_GLAccountLineItem.PartnerCostCenter,
      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      I_GLAccountLineItem.PartnerProfitCenter,
      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      I_GLAccountLineItem.PartnerFunctionalArea,
      @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
      I_GLAccountLineItem.PartnerBusinessArea,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      I_GLAccountLineItem.PartnerCompany,
      I_GLAccountLineItem.PartnerSegment,
      @ObjectModel.foreignKey.association: '_BalanceTransactionCurrency'
      I_GLAccountLineItem.BalanceTransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      I_GLAccountLineItem.AmountInBalanceTransacCrcy,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      I_GLAccountLineItem.TransactionCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      I_GLAccountLineItem.AmountInTransactionCurrency,
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      I_GLAccountLineItem.CompanyCodeCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_GLAccountLineItem.AmountInCompanyCodeCurrency,
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      I_GLAccountLineItem.GlobalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.AmountInGlobalCurrency,
      @ObjectModel.foreignKey.association: '_FunctionalCurrency'
      I_GLAccountLineItem.FunctionalCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      I_GLAccountLineItem.AmountInFunctionalCurrency,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'
      I_GLAccountLineItem.FreeDefinedCurrency1,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency1,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency2'
      I_GLAccountLineItem.FreeDefinedCurrency2,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency2,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency3'
      I_GLAccountLineItem.FreeDefinedCurrency3,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency3,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency4'
      I_GLAccountLineItem.FreeDefinedCurrency4,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency4,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency5'
      I_GLAccountLineItem.FreeDefinedCurrency5,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency5,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency6'
      I_GLAccountLineItem.FreeDefinedCurrency6,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency6,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency7'
      I_GLAccountLineItem.FreeDefinedCurrency7,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency7,
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency8'
      I_GLAccountLineItem.FreeDefinedCurrency8,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      I_GLAccountLineItem.AmountInFreeDefinedCurrency8,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.FixedAmountInGlobalCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.GrpValnFixedAmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.PrftCtrValnFxdAmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.TotalPriceVarcInGlobalCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.GrpValnTotPrcVarcInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.PrftCtrValnTotPrcVarcInGlbCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.FixedPriceVarcInGlobalCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.GrpValnFixedPrcVarcInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.PrftCtrValnFxdPrcVarcInGlbCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_GLAccountLineItem.FixedAmountInCoCodeCrcy,
      I_GLAccountLineItem.ControllingObjectCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'ControllingObjectCurrency'} }
      I_GLAccountLineItem.AmountInObjectCurrency,
      I_GLAccountLineItem.GrantCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GrantCurrency'} }
      I_GLAccountLineItem.AmountInGrantCurrency,
      @ObjectModel.foreignKey.association: '_BaseUnit'
      I_GLAccountLineItem.BaseUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      I_GLAccountLineItem.Quantity,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
      I_GLAccountLineItem.FixedQuantity,
      @ObjectModel.foreignKey.association: '_CostSourceUnit'
      I_GLAccountLineItem.CostSourceUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      I_GLAccountLineItem.ValuationQuantity,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
      I_GLAccountLineItem.ValuationFixedQuantity,
      @ObjectModel.foreignKey.association: '_ReferenceQuantityUnit'
      I_GLAccountLineItem.ReferenceQuantityUnit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ReferenceQuantityUnit'} }
      I_GLAccountLineItem.ReferenceQuantity,
      @ObjectModel.foreignKey.association: '_AdditionalQuantity1Unit'
      I_GLAccountLineItem.AdditionalQuantity1Unit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity1Unit'} }
      I_GLAccountLineItem.AdditionalQuantity1,
      @ObjectModel.foreignKey.association: '_AdditionalQuantity2Unit'
      I_GLAccountLineItem.AdditionalQuantity2Unit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity2Unit'} }
      I_GLAccountLineItem.AdditionalQuantity2,
      @ObjectModel.foreignKey.association: '_AdditionalQuantity3Unit'
      I_GLAccountLineItem.AdditionalQuantity3Unit,
      @Aggregation.default: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'AdditionalQuantity3Unit'} }
      I_GLAccountLineItem.AdditionalQuantity3,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      I_GLAccountLineItem.DebitCreditCode,
      //      @ObjectModel.foreignKey.association: '_FiscalPeriodForVariant'
      @Semantics.fiscal.period: true
      I_GLAccountLineItem.FiscalPeriod,
      //      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      @Semantics.fiscal.yearVariant: true
      I_GLAccountLineItem.FiscalYearVariant,
      //      @ObjectModel.foreignKey.association: '_FiscalYearPeriodForVariant'
      @Semantics.fiscal.yearPeriod: true
      I_GLAccountLineItem.FiscalYearPeriod,
      I_GLAccountLineItem.PostingDate,
      @Semantics.fiscal.quarter: true
      // association
      I_GLAccountLineItem._FiscalCalendarDate.FiscalQuarter                                                      as FiscalQuarter,
      I_GLAccountLineItem.DocumentDate,
      @ObjectModel.foreignKey.association: '_AccountingDocumentType'
      I_GLAccountLineItem.AccountingDocumentType,
      I_GLAccountLineItem.AccountingDocumentItem,
      I_GLAccountLineItem.AssignmentReference,
      @ObjectModel.foreignKey.association: '_AccountingDocumentCategory'
      I_GLAccountLineItem.AccountingDocumentCategory,
      @ObjectModel.foreignKey.association: '_PostingKey'
      I_GLAccountLineItem.PostingKey,
      I_GLAccountLineItem.TransactionTypeDetermination,
      @ObjectModel.foreignKey.association: '_SubLedgerAccLineItemType'
      I_GLAccountLineItem.SubLedgerAcctLineItemType,
      I_GLAccountLineItem.AccountingDocCreatedByUser,
      I_GLAccountLineItem.LastChangeDateTime,
      I_GLAccountLineItem.CreationDateTime,
      I_GLAccountLineItem.CreationDate,
      @ObjectModel.foreignKey.association: '_EliminationProfitCenter'
      I_GLAccountLineItem.EliminationProfitCenter,
      I_GLAccountLineItem.OriginObjectType,
      @ObjectModel.foreignKey.association: '_GLAccountType'
      I_GLAccountLineItem.GLAccountType,
      @ObjectModel.foreignKey.association: '_AlternativeGLAccount'
      I_GLAccountLineItem.AlternativeGLAccount,
      @ObjectModel.foreignKey.association: '_CountryChartOfAccounts'
      I_GLAccountLineItem.CountryChartOfAccounts,
      I_GLAccountLineItem.ItemIsSplit,
      @ObjectModel.foreignKey.association: '_ConsolidationUnit'
      I_GLAccountLineItem.ConsolidationUnit,
      @ObjectModel.foreignKey.association: '_PartnerConsolidationUnit'
      I_GLAccountLineItem.PartnerConsolidationUnit,
      @ObjectModel.foreignKey.association: '_Company'
      I_GLAccountLineItem.Company,
      @ObjectModel.foreignKey.association: '_ConsolidationChartOfAccounts'
      I_GLAccountLineItem.ConsolidationChartOfAccounts,
      @ObjectModel.foreignKey.association: '_CnsldtnFinancialStatementItem'
      I_GLAccountLineItem.CnsldtnFinancialStatementItem,
      @ObjectModel.foreignKey.association: '_CnsldtnSubitemCategory'
      I_GLAccountLineItem.CnsldtnSubitemCategory,
      @ObjectModel.foreignKey.association: '_CnsldtnSubitem'
      I_GLAccountLineItem.CnsldtnSubitem,
      I_GLAccountLineItem.InvoiceReference,
      I_GLAccountLineItem.InvoiceReferenceFiscalYear,
      I_GLAccountLineItem.FollowOnDocumentType,
      I_GLAccountLineItem.InvoiceItemReference,
      I_GLAccountLineItem.ReferencePurchaseOrderCategory,
      I_GLAccountLineItem.PurchasingDocument,
      I_GLAccountLineItem.PurchasingDocumentItem,
      I_GLAccountLineItem.AccountAssignmentNumber,
      I_GLAccountLineItem.DocumentItemText,
      @ObjectModel.foreignKey.association: '_SalesDocument'
      I_GLAccountLineItem.SalesDocument,
      @ObjectModel.foreignKey.association: '_SalesDocumentItem'
      I_GLAccountLineItem.SalesDocumentItem,
      @ObjectModel.foreignKey.association: '_Product'
      I_GLAccountLineItem.Product,
      @ObjectModel.foreignKey.association: '_Plant'
      I_GLAccountLineItem.Plant,
      @ObjectModel.foreignKey.association: '_Supplier'
      I_GLAccountLineItem.Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      I_GLAccountLineItem.Customer,
      I_GLAccountLineItem.ServicesRenderedDate,
      @ObjectModel.foreignKey.association: '_ConditionContract'
      I_GLAccountLineItem.ConditionContract,
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      I_GLAccountLineItem.FinancialAccountType,
      @ObjectModel.foreignKey.association: '_SpecialGLCode'
      I_GLAccountLineItem.SpecialGLCode,
      I_GLAccountLineItem.TaxCode,
      @ObjectModel.foreignKey.association: '_TaxCountry'
      I_GLAccountLineItem.TaxCountry,
      @ObjectModel.foreignKey.association: '_HouseBank'
      I_GLAccountLineItem.HouseBank,
      I_GLAccountLineItem.HouseBankAccount,
      I_GLAccountLineItem.ClearingDate,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ClearingJournalEntry'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ClearingJournalEntry'
      @ObjectModel.foreignKey.association: '_ClearingAccountingDocument'
      I_GLAccountLineItem.ClearingAccountingDocument,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ClearingJournalEntryFiscalYear'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ClearingJournalEntryFiscalYear'
      I_GLAccountLineItem.ClearingDocFiscalYear,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ClearingJournalEntry'
      ClearingJournalEntry,
      @Semantics.fiscal.year: true
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ClearingJrnlEntryFiscalYear'
      ClearingJournalEntryFiscalYear,
      I_GLAccountLineItem.ValueDate,
      I_GLAccountLineItem.AssetDepreciationArea,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      I_GLAccountLineItem.MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_FixedAsset'
      I_GLAccountLineItem.FixedAsset,
      I_GLAccountLineItem.AssetValueDate,
      @ObjectModel.foreignKey.association: '_AssetTransactionType'
      I_GLAccountLineItem.AssetTransactionType,
      @ObjectModel.foreignKey.association: '_MovementCategory'
      I_GLAccountLineItem.AssetAcctTransClassfctn,
      I_GLAccountLineItem.DepreciationFiscalPeriod,
      @ObjectModel.foreignKey.association: '_GroupMasterFixedAsset'
      I_GLAccountLineItem.GroupMasterFixedAsset,
      @ObjectModel.foreignKey.association: '_GroupFixedAsset'
      I_GLAccountLineItem.GroupFixedAsset,
      I_GLAccountLineItem.AssetClass,
      @ObjectModel.foreignKey.association: '_PartnerMasterFixedAsset'
      I_GLAccountLineItem.PartnerMasterFixedAsset,
      @ObjectModel.foreignKey.association: '_PartnerFixedAsset'
      I_GLAccountLineItem.PartnerFixedAsset,
      I_GLAccountLineItem.CostEstimate,
      I_GLAccountLineItem.InventorySpecialStockValnType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      I_GLAccountLineItem.InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocument'
      I_GLAccountLineItem.InventorySpclStkSalesDocument,
      @ObjectModel.foreignKey.association: '_InventorySpclStkSalesDocItm'
      I_GLAccountLineItem.InventorySpclStkSalesDocItm,
      @ObjectModel.foreignKey.association: '_InvtrySpclStkWBSElmntBscData'
      I_GLAccountLineItem.InvtrySpclStockWBSElmntIntID,
      I_GLAccountLineItem.InventorySpecialStockSupplier,
      @ObjectModel.foreignKey.association: '_InventoryValuationType'
      I_GLAccountLineItem.InventoryValuationType,
      I_GLAccountLineItem.ValuationArea,
      I_GLAccountLineItem.SenderGLAccount,
      I_GLAccountLineItem.SenderAccountAssignment,
      I_GLAccountLineItem.SenderAccountAssignmentType,
      I_GLAccountLineItem.CostOriginGroup,
      @ObjectModel.foreignKey.association: '_OriginSenderObject'
      I_GLAccountLineItem.OriginSenderObject,
      @ObjectModel.foreignKey.association: '_ControllingDebitCreditCode'
      I_GLAccountLineItem.ControllingDebitCreditCode,
      I_GLAccountLineItem.ControllingObjectDebitType,
      I_GLAccountLineItem.QuantityIsIncomplete,
      @ObjectModel.foreignKey.association: '_OffsettingAccountWithBP'
      I_GLAccountLineItem.OffsettingAccount,
      @ObjectModel.foreignKey.association: '_OffsettingAccountType'
      I_GLAccountLineItem.OffsettingAccountType,
      @ObjectModel.foreignKey.association: '_OffsettingChartOfAccounts'
      I_GLAccountLineItem.OffsettingChartOfAccounts,
      I_GLAccountLineItem.LineItemIsCompleted,
      I_GLAccountLineItem.PersonnelNumber,
      @ObjectModel.foreignKey.association: '_ControllingObjectClass'
      I_GLAccountLineItem.ControllingObjectClass,
      @ObjectModel.foreignKey.association: '_PartnerCompanyCode'
      I_GLAccountLineItem.PartnerCompanyCode,
      @ObjectModel.foreignKey.association: '_PartnerControllingObjectClass'
      I_GLAccountLineItem.PartnerControllingObjectClass,
      @ObjectModel.foreignKey.association: '_OriginCostCenter'
      I_GLAccountLineItem.OriginCostCenter,
      @ObjectModel.foreignKey.association: '_OriginProfitCenter'
      I_GLAccountLineItem.OriginProfitCenter,
      @ObjectModel.foreignKey.association: '_OriginCostCtrActivityType'
      I_GLAccountLineItem.OriginCostCtrActivityType,
      I_GLAccountLineItem.OriginProduct,
      I_GLAccountLineItem.VarianceOriginGLAccount,
      I_GLAccountLineItem.AccountAssignment,
      I_GLAccountLineItem.AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_CostCtrActivityType'
      I_GLAccountLineItem.CostCtrActivityType,
      @ObjectModel.foreignKey.association: '_Order'
      I_GLAccountLineItem.OrderID,
      @ObjectModel.foreignKey.association: '_OrderCategory'
      I_GLAccountLineItem.OrderCategory,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      I_GLAccountLineItem.WBSElementInternalID,
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      cast( I_GLAccountLineItem._WBSElementBasicData.WBSElementExternalID as fis_wbsext_no_conv )                as WBSElementExternalID,
      @ObjectModel.foreignKey.association: '_PartnerWBSElementBasicData'
      I_GLAccountLineItem.PartnerWBSElementInternalID,
      @ObjectModel.foreignKey.association: '_PartnerWBSElementExternalID'
      cast( I_GLAccountLineItem._PartnerWBSElementBasicData.WBSElementExternalID as fis_partner_wbsext_no_conv ) as PartnerWBSElementExternalID,
      @ObjectModel.foreignKey.association: '_ProjectBasicData'
      I_GLAccountLineItem.ProjectInternalID,
      @ObjectModel.foreignKey.association: '_ProjectExternalID'
      cast( I_GLAccountLineItem._ProjectBasicData.ProjectExternalID as fis_projectext_no_conv )                  as ProjectExternalID,
      @ObjectModel.foreignKey.association: '_PartnerProjectBasicData'
      I_GLAccountLineItem.PartnerProjectInternalID,
      @ObjectModel.foreignKey.association: '_PartnerProjectExternalID'
      cast( I_GLAccountLineItem._PartnerProjectBasicData.ProjectExternalID as fis_part_projectext_no_conv )      as PartnerProjectExternalID,
      I_GLAccountLineItem.OperatingConcern,
      I_GLAccountLineItem.ProjectNetwork,
      //      I_GLAccountLineItem.RelatedNetworkActivity, conversion exit atc check
      @ObjectModel.foreignKey.association: '_BusinessProcess'
      I_GLAccountLineItem.BusinessProcess,
      I_GLAccountLineItem.CostObject,
      @ObjectModel.foreignKey.association: '_BillableControl'
      I_GLAccountLineItem.BillableControl,
      @ObjectModel.foreignKey.association: '_CostAnalysisResource'
      I_GLAccountLineItem.CostAnalysisResource,
      I_GLAccountLineItem.CustomerServiceNotification,
      @ObjectModel.foreignKey.association: '_ServiceDocumentType'
      I_GLAccountLineItem.ServiceDocumentType,
      @ObjectModel.foreignKey.association: '_ServiceDocument'
      I_GLAccountLineItem.ServiceDocument,
      @ObjectModel.foreignKey.association: '_ServiceDocumentItem'
      I_GLAccountLineItem.ServiceDocumentItem,
      @ObjectModel.foreignKey.association: '_PartnerServiceDocumentType'
      I_GLAccountLineItem.PartnerServiceDocumentType,
      @ObjectModel.foreignKey.association: '_PartnerServiceDocument'
      I_GLAccountLineItem.PartnerServiceDocument,
      @ObjectModel.foreignKey.association: '_PartnerServiceDocumentItem'
      I_GLAccountLineItem.PartnerServiceDocumentItem,
      @ObjectModel.foreignKey.association: '_ServiceContractType'
      I_GLAccountLineItem.ServiceContractType,
      @ObjectModel.foreignKey.association: '_ServiceContract'
      I_GLAccountLineItem.ServiceContract,
      @ObjectModel.foreignKey.association: '_ServiceContractItem'
      I_GLAccountLineItem.ServiceContractItem,
      I_GLAccountLineItem.BusinessSolutionOrder,
      I_GLAccountLineItem.BusinessSolutionOrderItem,
      @ObjectModel.foreignKey.association: '_ProviderContract'
      I_GLAccountLineItem.ProviderContract,
      @ObjectModel.foreignKey.association: '_ProviderContractItem'
      I_GLAccountLineItem.ProviderContractItem,
      @ObjectModel.foreignKey.association: '_TimeSheetOvertimeCat'
      I_GLAccountLineItem.TimeSheetOvertimeCategory,
      I_GLAccountLineItem.PartnerAccountAssignment,
      I_GLAccountLineItem.PartnerAccountAssignmentType,
      @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
      I_GLAccountLineItem.PartnerCostCtrActivityType,
      @ObjectModel.foreignKey.association: '_PartnerOrder_2'
      I_GLAccountLineItem.PartnerOrder_2                                                                         as PartnerOrder,
      @ObjectModel.foreignKey.association: '_PartnerOrderCategory'
      I_GLAccountLineItem.PartnerOrderCategory,
      @ObjectModel.foreignKey.association: '_PartnerSalesDocument'
      I_GLAccountLineItem.PartnerSalesDocument,
      @ObjectModel.foreignKey.association: '_PartnerSalesDocumentItem'
      I_GLAccountLineItem.PartnerSalesDocumentItem,
      I_GLAccountLineItem.PartnerProjectNetwork,
      //      I_GLAccountLineItem.PartnerProjectNetworkActivity,
      @ObjectModel.foreignKey.association: '_PartnerBusinessProcess'
      I_GLAccountLineItem.PartnerBusinessProcess,
      I_GLAccountLineItem.PartnerCostObject,
      I_GLAccountLineItem.ControllingDocumentItem,
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      I_GLAccountLineItem.BillingDocumentType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      I_GLAccountLineItem.SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      I_GLAccountLineItem.DistributionChannel,
      I_GLAccountLineItem.OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SoldProduct'
      I_GLAccountLineItem.SoldProduct,
      @ObjectModel.foreignKey.association: '_SoldProductGroup_2'
      I_GLAccountLineItem.SoldProductGroup,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      I_GLAccountLineItem.CustomerGroup,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
      I_GLAccountLineItem.CustomerSupplierCountry,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CustomerSupplierIndustry'
      I_GLAccountLineItem.CustomerSupplierIndustry,
      I_GLAccountLineItem.SalesDistrict,
      I_GLAccountLineItem.BillToParty,
      I_GLAccountLineItem.ShipToParty,
      I_GLAccountLineItem.CustomerSupplierCorporateGroup,
      @ObjectModel.foreignKey.association: '_CashLedgerCompanyCode'
      I_GLAccountLineItem.CashLedgerCompanyCode,
      @ObjectModel.foreignKey.association: '_CashLedgerAccount'
      I_GLAccountLineItem.CashLedgerAccount,
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      I_GLAccountLineItem.FinancialManagementArea,
      I_GLAccountLineItem.FundsCenter,
      @ObjectModel.foreignKey.association: '_FundedProgram'
      I_GLAccountLineItem.FundedProgram,
      @ObjectModel.foreignKey.association: '_Fund'
      I_GLAccountLineItem.Fund,
      @ObjectModel.foreignKey.association: '_Grant'
      I_GLAccountLineItem.GrantID,
      @ObjectModel.foreignKey.association: '_BudgetPeriod'
      I_GLAccountLineItem.BudgetPeriod,
      @ObjectModel.foreignKey.association: '_PartnerFund'
      I_GLAccountLineItem.PartnerFund,
      @ObjectModel.foreignKey.association: '_PartnerGrant'
      I_GLAccountLineItem.PartnerGrant,
      @ObjectModel.foreignKey.association: '_PartnerBudgetPeriod'
      I_GLAccountLineItem.PartnerBudgetPeriod,
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
      I_GLAccountLineItem.PubSecBudgetAccount,
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
      I_GLAccountLineItem.PubSecBudgetAccountCoCode,
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnDate'
      I_GLAccountLineItem.PubSecBudgetCnsmpnDate,
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclPeriod'
      I_GLAccountLineItem.PubSecBudgetCnsmpnFsclPeriod,
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnFsclYear'
      I_GLAccountLineItem.PubSecBudgetCnsmpnFsclYear,
      I_GLAccountLineItem.PubSecBudgetIsRelevant,
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnType'
      I_GLAccountLineItem.PubSecBudgetCnsmpnType,
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnAmtType'
      I_GLAccountLineItem.PubSecBudgetCnsmpnAmtType,
      I_GLAccountLineItem.SponsoredProgram,
      I_GLAccountLineItem.SponsoredClass,
      I_GLAccountLineItem.GteeMBudgetValidityNumber,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FinServicesProductGroup'
      I_GLAccountLineItem.FinancialServicesProductGroup,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FinancialServicesBranch'
      I_GLAccountLineItem.FinancialServicesBranch,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FinancialDataSource'
      I_GLAccountLineItem.FinancialDataSource,
      I_GLAccountLineItem.JointVenture,
      I_GLAccountLineItem.JointVentureEquityGroup,
      I_GLAccountLineItem.JointVentureCostRecoveryCode,
      I_GLAccountLineItem.JointVenturePartner,
      I_GLAccountLineItem.JointVentureBillingType,
      I_GLAccountLineItem.JointVentureEquityType,
      I_GLAccountLineItem.JointVentureProductionDate,
      I_GLAccountLineItem.JointVentureBillingDate,
      I_GLAccountLineItem.JointVentureOperationalDate,
      I_GLAccountLineItem.JointVentureAccountingActivity,
      I_GLAccountLineItem.PartnerVenture,
      I_GLAccountLineItem.PartnerEquityGroup,
      I_GLAccountLineItem.SenderCostRecoveryCode,
      I_GLAccountLineItem.REBusinessEntity,
      I_GLAccountLineItem.RealEstateBuilding,
      I_GLAccountLineItem.RealEstateProperty,
      I_GLAccountLineItem.RERentalObject,
      I_GLAccountLineItem.RealEstateContract,
      I_GLAccountLineItem.REServiceChargeKey,
      I_GLAccountLineItem.RESettlementUnitID,
      I_GLAccountLineItem.SettlementReferenceDate,
      I_GLAccountLineItem.REPartnerBusinessEntity,
      I_GLAccountLineItem.RealEstatePartnerBuilding,
      I_GLAccountLineItem.RealEstatePartnerProperty,
      I_GLAccountLineItem.REPartnerRentalObject,
      I_GLAccountLineItem.RealEstatePartnerContract,
      I_GLAccountLineItem.REPartnerServiceChargeKey,
      I_GLAccountLineItem.REPartnerSettlementUnitID,
      I_GLAccountLineItem.PartnerSettlementReferenceDate,
      I_GLAccountLineItem.AccrualObjectType,
      I_GLAccountLineItem.AccrualObject,
      I_GLAccountLineItem.AccrualSubobject,
      I_GLAccountLineItem.AccrualItemType,
      I_GLAccountLineItem.AccrualValueDate,
      I_GLAccountLineItem.FinancialValuationObjectType,
      I_GLAccountLineItem.FinancialValuationObject,
      I_GLAccountLineItem.FinancialValuationSubobject,
      I_GLAccountLineItem.NetDueDate,
      I_GLAccountLineItem.CreditRiskClass,
      I_GLAccountLineItem.WorkCenterInternalID,
      //      I_GLAccountLineItem.OrderOperation,
      I_GLAccountLineItem.OrderItem,
      I_GLAccountLineItem.PartnerOrderItem,
      //      I_GLAccountLineItem.OrderSuboperation,
      @ObjectModel.foreignKey.association: '_Equipment'
      I_GLAccountLineItem.Equipment,
      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      I_GLAccountLineItem.FunctionalLocation,
      @ObjectModel.foreignKey.association: '_Assembly'
      I_GLAccountLineItem.Assembly,
      @ObjectModel.foreignKey.association: '_MaintenanceActivityType'
      I_GLAccountLineItem.MaintenanceActivityType,
      @ObjectModel.foreignKey.association: '_MaintOrdPlngDegreeCode'
      I_GLAccountLineItem.MaintenanceOrderPlanningCode,
      I_GLAccountLineItem.MaintPriorityType,
      I_GLAccountLineItem.MaintPriority,
      I_GLAccountLineItem.SuperiorOrder,
      @ObjectModel.foreignKey.association: '_ProductGroup_2'
      I_GLAccountLineItem.ProductGroup,
      I_GLAccountLineItem.MaintenanceOrderIsPlanned,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_GLAccountLineItem.DebitAmountInCoCodeCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      I_GLAccountLineItem.CreditAmountInCoCodeCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      I_GLAccountLineItem.DebitAmountInTransCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      I_GLAccountLineItem.CreditAmountInTransCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      I_GLAccountLineItem.DebitAmountInBalanceTransCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'BalanceTransactionCurrency'} }
      I_GLAccountLineItem.CreditAmountInBalanceTransCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.DebitAmountInGlobalCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      I_GLAccountLineItem.CreditAmountInGlobalCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      I_GLAccountLineItem.DebitAmountInFunctionalCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FunctionalCurrency'} }
      I_GLAccountLineItem.CreditAmountInFunctionalCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy1                                                          as DebitAmountInFreeDfndCrcy1,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy1                                                         as CreditAmountInFreeDfndCrcy1,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy2                                                          as DebitAmountInFreeDfndCrcy2,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency2'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy2                                                         as CreditAmountInFreeDfndCrcy2,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy3                                                          as DebitAmountInFreeDfndCrcy3,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency3'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy3                                                         as CreditAmountInFreeDfndCrcy3,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy4                                                          as DebitAmountInFreeDfndCrcy4,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency4'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy4                                                         as CreditAmountInFreeDfndCrcy4,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy5                                                          as DebitAmountInFreeDfndCrcy5,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency5'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy5                                                         as CreditAmountInFreeDfndCrcy5,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy6                                                          as DebitAmountInFreeDfndCrcy6,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency6'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy6                                                         as CreditAmountInFreeDfndCrcy6,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy7                                                          as DebitAmountInFreeDfndCrcy7,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency7'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy7                                                         as CreditAmountInFreeDfndCrcy7,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      I_GLAccountLineItem.DebitAmountInFreeDefinedCrcy8                                                          as DebitAmountInFreeDfndCrcy8,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency8'} }
      I_GLAccountLineItem.CreditAmountInFreeDefinedCrcy8                                                         as CreditAmountInFreeDfndCrcy8,
      I_GLAccountLineItem.IsStatisticalOrder,
      I_GLAccountLineItem.IsStatisticalCostCenter,
      I_GLAccountLineItem.IsStatisticalSalesDocument,
      I_GLAccountLineItem.WBSIsStatisticalWBSElement,
      I_GLAccountLineItem.CalendarYear,
      I_GLAccountLineItem.CalendarQuarter,
      I_GLAccountLineItem.CalendarYearQuarter,
      I_GLAccountLineItem.CalendarMonth,
      I_GLAccountLineItem.CalendarYearMonth,
      I_GLAccountLineItem.CalendarWeek,
      I_GLAccountLineItem.CalendarYearWeek,
      /* Associations */
      I_GLAccountLineItem._Assembly,
      I_GLAccountLineItem._AlternativeGLAccount,
      I_GLAccountLineItem._AdditionalQuantity3Unit,
      I_GLAccountLineItem._AssetTransactionType,
      I_GLAccountLineItem._BalanceTransactionCurrency,
      I_GLAccountLineItem._BaseUnit,
      I_GLAccountLineItem._AdditionalQuantity2Unit,
      I_GLAccountLineItem._AdditionalQuantity1Unit,
      I_GLAccountLineItem._AccountingDocumentType,
      I_GLAccountLineItem._AccountingDocumentCategory,
      I_GLAccountLineItem._BillableControl,
      I_GLAccountLineItem._BillingDocumentType,
      I_GLAccountLineItem._BudgetPeriod,
      I_GLAccountLineItem._BusinessArea,
      I_GLAccountLineItem._BusinessProcess,
      I_GLAccountLineItem._BusinessTransactionCategory,
      I_GLAccountLineItem._BusinessTransactionType,
      I_GLAccountLineItem._CashLedgerAccount,
      I_GLAccountLineItem._CashLedgerCompanyCode,
      I_GLAccountLineItem._ChartOfAccounts,
      I_GLAccountLineItem._ClearingJrnlEntryFiscalYear,
      I_GLAccountLineItem._ClearingJournalEntry,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_ClearingJournalEntry'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_ClearingJournalEntry'
      _ClearingAccountingDocument,
      I_GLAccountLineItem._CnsldtnFinancialStatementItem,
      I_GLAccountLineItem._CnsldtnSubitem,
      I_GLAccountLineItem._CnsldtnSubitemCategory,
      I_GLAccountLineItem._Company,
      I_GLAccountLineItem._CompanyCode,
      I_GLAccountLineItem._CompanyCodeCurrency,
      I_GLAccountLineItem._ConditionContract,
      I_GLAccountLineItem._ConsolidationChartOfAccounts,
      I_GLAccountLineItem._ConsolidationUnit,
      I_GLAccountLineItem._ControllingArea,
      I_GLAccountLineItem._ControllingDebitCreditCode,
      I_GLAccountLineItem._ControllingObjectClass,
      I_GLAccountLineItem._CostAnalysisResource,
      I_GLAccountLineItem._CostCenter,
      I_GLAccountLineItem._CostCtrActivityType,
      I_GLAccountLineItem._CostOriginGroup,
      I_GLAccountLineItem._CostSourceUnit,
      I_GLAccountLineItem._CountryChartOfAccounts,
      I_GLAccountLineItem._CurrentProfitCenter, // necessary for authorizationgroup/ DCL
      I_GLAccountLineItem._CurrentCostCenter, // necessary for authorizationgroup/ DCL
      I_GLAccountLineItem._Customer,
      I_GLAccountLineItem._CustomerCompany,
      I_GLAccountLineItem._CustomerGroup,
      I_GLAccountLineItem._DebitCreditCode,
      I_GLAccountLineItem._DistributionChannel,
      I_GLAccountLineItem._EliminationProfitCenter,
      I_GLAccountLineItem._Equipment,
      I_GLAccountLineItem._FinancialAccountType,
      I_GLAccountLineItem._FinancialManagementArea,
      I_GLAccountLineItem._FinancialTransactionType,
      I_GLAccountLineItem._FiscalPeriodForVariant,
      I_GLAccountLineItem._FiscalYear,
      I_GLAccountLineItem._FiscalYearPeriodForVariant,
      I_GLAccountLineItem._FiscalYearVariant,
      I_GLAccountLineItem._FixedAsset,
      I_GLAccountLineItem._FreeDefinedCurrency1,
      I_GLAccountLineItem._FreeDefinedCurrency2,
      I_GLAccountLineItem._FreeDefinedCurrency3,
      I_GLAccountLineItem._FreeDefinedCurrency4,
      I_GLAccountLineItem._FreeDefinedCurrency5,
      I_GLAccountLineItem._FreeDefinedCurrency6,
      I_GLAccountLineItem._FreeDefinedCurrency7,
      I_GLAccountLineItem._FreeDefinedCurrency8,
      I_GLAccountLineItem._FunctionalArea,
      I_GLAccountLineItem._FunctionalCurrency,
      I_GLAccountLineItem._FunctionalLocation,
      I_GLAccountLineItem._Fund,
      I_GLAccountLineItem._FundedProgram,
      I_GLAccountLineItem._GLAccountInChartOfAccounts,
      I_GLAccountLineItem._GLAccountInCompanyCode, // used for AuthorizationGroup
      I_GLAccountLineItem._GLAccountType,
      I_GLAccountLineItem._GlobalCurrency,
      I_GLAccountLineItem._Grant,
      I_GLAccountLineItem._GroupFixedAsset,
      I_GLAccountLineItem._GroupMasterFixedAsset,
      I_GLAccountLineItem._HouseBank,
      I_GLAccountLineItem._InventorySpclStkSalesDocItm,
      I_GLAccountLineItem._InventorySpclStkSalesDocument,
      I_GLAccountLineItem._InventorySpecialStockType,
      I_GLAccountLineItem._InventoryValuationType,
      I_GLAccountLineItem._InvtrySpclStkWBSElmntBscData,
      I_GLAccountLineItem._JournalEntry,
      I_GLAccountLineItem._Ledger,
      I_GLAccountLineItem._LedgerFiscalYearForVariant,
      I_GLAccountLineItem._MaintenanceActivityType,
      I_GLAccountLineItem._MaintOrdPlngDegreeCode,
      I_GLAccountLineItem._MasterFixedAsset,
      I_GLAccountLineItem._MovementCategory,
      I_GLAccountLineItem._OffsettingAccountType,
      I_GLAccountLineItem._OffsettingAccountWithBP,
      I_GLAccountLineItem._OffsettingChartOfAccounts,
      I_GLAccountLineItem._Order,
      I_GLAccountLineItem._OrderCategory,
      I_GLAccountLineItem._OriginCostCenter,
      I_GLAccountLineItem._OriginCostCtrActivityType,
      I_GLAccountLineItem._OriginProfitCenter,
      I_GLAccountLineItem._OriginSenderObject,
      I_GLAccountLineItem._PartnerBudgetPeriod,
      I_GLAccountLineItem._PartnerBusinessArea,
      I_GLAccountLineItem._PartnerBusinessProcess,
      I_GLAccountLineItem._PartnerCompany,
      I_GLAccountLineItem._PartnerCompanyCode,
      I_GLAccountLineItem._PartnerConsolidationUnit,
      I_GLAccountLineItem._PartnerControllingObjectClass,
      I_GLAccountLineItem._PartnerCostCenter,
      I_GLAccountLineItem._PartnerProjectBasicData,
      I_GLAccountLineItem._PartnerProfitCenter,
      I_GLAccountLineItem._PartnerSalesDocument,
      I_GLAccountLineItem._PartnerOrderCategory,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:   '_PartnerOrder_2'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: '_PartnerOrder_2'
      _PartnerOrder,
      _PartnerOrder_2,
      I_GLAccountLineItem._PartnerMasterFixedAsset,
      I_GLAccountLineItem._PartnerGrant,
      I_GLAccountLineItem._PartnerFund,
      I_GLAccountLineItem._PartnerFunctionalArea,
      I_GLAccountLineItem._PartnerFixedAsset,
      I_GLAccountLineItem._PartnerCostCtrActivityType,
      _PartnerProjectExternalID,
      I_GLAccountLineItem._PartnerSalesDocumentItem,
      I_GLAccountLineItem._PartnerServiceDocument,
      I_GLAccountLineItem._PartnerServiceDocumentItem,
      I_GLAccountLineItem._PartnerServiceDocumentType,
      I_GLAccountLineItem._PartnerWBSElementBasicData,
      _PartnerWBSElementExternalID,
      I_GLAccountLineItem._Plant,
      I_GLAccountLineItem._PostingKey,
      I_GLAccountLineItem._PredecessorReferenceDocType,
      I_GLAccountLineItem._Product,
      I_GLAccountLineItem._ProductGroup_2,
      I_GLAccountLineItem._ProfitCenter,
      I_GLAccountLineItem._ProjectBasicData,
      _ProjectExternalID,
      I_GLAccountLineItem._ProviderContract,
      I_GLAccountLineItem._ProviderContractItem,
      I_GLAccountLineItem._PubSecBudgetAccount,
      I_GLAccountLineItem._PubSecBudgetAccountCoCode,
      I_GLAccountLineItem._PubSecBudgetCnsmpnAmtType,
      I_GLAccountLineItem._PubSecBudgetCnsmpnDate,
      I_GLAccountLineItem._PubSecBudgetCnsmpnFsclPeriod,
      I_GLAccountLineItem._PubSecBudgetCnsmpnFsclYear,
      I_GLAccountLineItem._PubSecBudgetCnsmpnType,
      I_GLAccountLineItem._ReferenceDocumentType,
      I_GLAccountLineItem._ReferenceQuantityUnit,
      I_GLAccountLineItem._SalesDocument,
      I_GLAccountLineItem._SalesDocumentItem,
      I_GLAccountLineItem._SalesOrganization,
      I_GLAccountLineItem._Segment,
      I_GLAccountLineItem._ServiceContract,
      I_GLAccountLineItem._ServiceContractItem,
      I_GLAccountLineItem._ServiceContractType,
      I_GLAccountLineItem._ServiceDocument,
      I_GLAccountLineItem._ServiceDocumentItem,
      I_GLAccountLineItem._ServiceDocumentType,
      I_GLAccountLineItem._SoldProduct,
      I_GLAccountLineItem._SoldProductGroup_2,
      I_GLAccountLineItem._SourceLedger,
      I_GLAccountLineItem._SpecialGLCode,
      I_GLAccountLineItem._SubLedgerAccLineItemType,
      I_GLAccountLineItem._Supplier,
      I_GLAccountLineItem._SupplierCompany,
      I_GLAccountLineItem._TaxCountry,
      I_GLAccountLineItem._TimeSheetOvertimeCat,
      I_GLAccountLineItem._TransactionCurrency,
      I_GLAccountLineItem._WBSElementBasicData,
      _WBSElementExternalID,
      _FinServicesProductGroup,
      _FinancialServicesBranch,
      _FinancialDataSource,
      I_GLAccountLineItem._CustomerSupplierCountry,
      _CustomerSupplierIndustry
}
```
