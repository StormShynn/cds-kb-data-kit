---
name: C_JOINTVENTUREACCTGDTLHIERQRY
description: "Joint Venture Acctg Dtl Hierarchy Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JOINTVENTUREACCTGDTLHIERQRY')/$value
semantic_en: "Joint Venture Acctg Dtl Hierarchy Query"
semantic_vi: "Joint Venture Acctg Dtl Hierarchy Query — CDS view tiêu dùng dựa trên I_JointVentureAcctgExtDetail."
keywords:
  - "joint"
  - "venture"
  - "acctg"
  - "dtl"
  - "hierarchy"
  - "query"
  - "line"
  - "item"
  - "ledger"
  - "record"
  - "type"
  - "special"
  - "version"
  - "fiscal"
  - "year"
tags:
  - IS
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
---
# C_JOINTVENTUREACCTGDTLHIERQRY

**Joint Venture Acctg Dtl Hierarchy Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JOINTVENTUREACCTGDTLHIERQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JointVentureLineItem` | ✓ | |  |  | `CHAR(18)` | Joint Venture Record Number |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger |
| `RecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `SpecialLedgerVersion` |  | |  |  | `CHAR(3)` | Version |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `LedgerFiscalPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `DocumentType` |  | |  |  | `CHAR(1)` | Document Category |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Accounting Document |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Line Item in Joint Venture Document |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `GLAccount` |  | |  |  | `CHAR(10)` | Account Number |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Equity Group |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `OriginOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Internal WBS Element |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Main Asset Number |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `JointVentureRecoveryCode` |  | |  |  | `CHAR(2)` | Recovery Indicator |
| `Partner` |  | |  |  | `CHAR(10)` | Partner account number |
| `InternalOrder` |  | |  |  | `CHAR(12)` | Internal Order |
| `NetworkActivity` |  | |  |  | `CHAR(4)` | Activity Number |
| `AdditionalQuantity1Unit` |  | |  |  | `UNIT(3)` | Additional unit of measure |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Description of Line Item |
| `IsAutomaticallyPosted` |  | |  |  | `CHAR(1)` | Automatic Posting |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Accounting Document Type |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `ValDateForCurrencyTranslation` |  | |  |  | `DATS(8)` | Value Date for Currency Translation |
| `ValueDate` |  | |  |  | `DATS(8)` | Value Date |
| `RefAccountingDocument` |  | |  |  | `CHAR(10)` | Ref Accounting Document |
| `ReferenceDocumentFiscalYear` |  | |  |  | `NUMC(4)` | Reference Doc Year |
| `RefJntVentureDocumentLineItem` |  | |  |  | `NUMC(5)` | Ref JV Document Item |
| `ReferenceDocumentType` |  | |  |  | `CHAR(1)` | Reference Doc Type |
| `BusinessTransactionDocItem` |  | |  |  | `CHAR(4)` | Business Transaction |
| `RefAccountingDocumentItem` |  | |  |  | `NUMC(3)` | Ref Accounting Document Line Item |
| `PayrollType` |  | |  |  | `CHAR(2)` | Payroll Type |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Document |
| `TimeEntry` |  | |  |  | `TIMS(6)` | Time of Entry |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `BillingMonth` |  | |  |  | `DATS(8)` | Billing Month |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Item Number of Purchase Order |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `ActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `PRAAllocationFrequencyCode` |  | |  |  | `CHAR(10)` | Allocation Cycle |
| `StartDate` |  | |  |  | `DATS(8)` | Start Date |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Document Number |
| `ReferenceBillingDocument` |  | |  |  | `CHAR(10)` | Ref Billing Document |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Key for Terms of Payment |
| `ProductionMonth` |  | |  |  | `DATS(8)` | Production Month (Date to find period and year) |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(17)` | Amount in Transaction Currency |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(15)` | Quantity in Base Unit |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(17)` | Value in local currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(17)` | Value in group currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JOINTVENTUREACCTGDTLHIERQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_JOINTVENTUREACCTGDTLHIERQRY')/$value)*

```abap
@EndUserText.label: 'Joint Venture Acctg Dtl Hierarchy Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVJVADTLHIERQRY'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_JointVentureAcctgDtlHierQry
  as select from I_JointVentureAcctgExtDetail
{

  key JointVentureLineItem,
      Ledger,
      @AnalyticsDetails.query.display: #TEXT
      RecordType,
      @AnalyticsDetails.query.display: #TEXT
      SpecialLedgerVersion,
      FiscalYear,
      Currency,
      UnitOfMeasure,
      @AnalyticsDetails.query.display: #TEXT
      DebitCreditCode,
      LedgerFiscalPeriod,
      DocumentType,
      AccountingDocument,
      AccountingDocumentItem,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: false, mandatory: true }
      @AnalyticsDetails.query.variableSequence: 1
      @AnalyticsDetails.query.display: #KEY_TEXT
      CompanyCode,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 2
      @AnalyticsDetails.query.display: #KEY_TEXT
      JointVenture,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: false, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 3
      @AnalyticsDetails.query.display: #KEY_TEXT
      ControllingArea,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 4
      @AnalyticsDetails.query.display: #TEXT
//      @AnalyticsDetails.query.displayHierarchy: #ON //3106893
      @AnalyticsDetails.query.hierarchyInitialLevel: 3
      @AnalyticsDetails.query.axis: #COLUMNS
      CostCenter,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: false, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 5
      @AnalyticsDetails.query.display: #TEXT
      ChartOfAccounts,
      @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: false, defaultValue: 'P' }
      @AnalyticsDetails.query.variableSequence: 6
      @AnalyticsDetails.query.display: #TEXT
      GLAccountType,
      @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
      @AnalyticsDetails.query.variableSequence: 7
      @AnalyticsDetails.query.display: #TEXT
//      @AnalyticsDetails.query.displayHierarchy: #ON //3106893
      @AnalyticsDetails.query.hierarchyInitialLevel: 3
      @AnalyticsDetails.query.axis: #ROWS
      GLAccount,
      @AnalyticsDetails.query.display: #KEY_TEXT
      JointVentureEquityGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BusinessArea,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OriginOrder,
      //CostObjectOrder.ControllingObjectDescription,
      //_WBSElement.WBSElement,
      //_WBSElement.WBSElementShortID,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ProjectInternalID,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ProfitCenter,
      @AnalyticsDetails.query.display: #KEY_TEXT
      MasterFixedAsset,
      @AnalyticsDetails.query.display: #KEY_TEXT
      FixedAsset,
      @AnalyticsDetails.query.display: #TEXT
      AssetTransactionType,
      @AnalyticsDetails.query.display: #KEY_TEXT
      JointVentureRecoveryCode,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Partner,
      @AnalyticsDetails.query.display: #KEY_TEXT
      InternalOrder,
      NetworkActivity,
      AdditionalQuantity1Unit,
      DocumentItemText,
      @AnalyticsDetails.query.display: #TEXT
      IsAutomaticallyPosted,
      @AnalyticsDetails.query.display: #TEXT
      AccountingDocumentType,
      BusinessTransactionType,
      PostingDate,
      ValDateForCurrencyTranslation,
      ValueDate,
      RefAccountingDocument,
      ReferenceDocumentFiscalYear,
      RefJntVentureDocumentLineItem,
      ReferenceDocumentType,
      BusinessTransactionDocItem,
      RefAccountingDocumentItem,
      @AnalyticsDetails.query.display: #TEXT
      PayrollType,
      AccountingDocCreatedByUser,
      DocumentDate,
      TimeEntry,
      TaxCode,
      BillingMonth,
      PurchaseOrder,
      PurchaseOrderItem,
      TransactionTypeDetermination,
      @AnalyticsDetails.query.display: #TEXT
      ActivityType,
      PRAAllocationFrequencyCode,
      StartDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Material,
      ReferenceDocument,
      ReferenceBillingDocument,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Customer,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Supplier,
      PaymentTerms,
      ProductionMonth,

      @AnalyticsDetails.query.axis: #COLUMNS
      AmountInTransactionCurrency,
      //      @AnalyticsDetails.query.axis: #COLUMNS
      //      AmountInCompanyCodeCurrency,
      //      @AnalyticsDetails.query.axis: #COLUMNS
      //      AmountInGroupCurrency,
      @AnalyticsDetails.query.hidden
      QuantityInBaseUnit,
      @AnalyticsDetails.query.hidden
      AmountInCompanyCodeCurrency,
      @AnalyticsDetails.query.hidden
      AmountInGlobalCurrency
}
where
  Ledger = '4A';
```
