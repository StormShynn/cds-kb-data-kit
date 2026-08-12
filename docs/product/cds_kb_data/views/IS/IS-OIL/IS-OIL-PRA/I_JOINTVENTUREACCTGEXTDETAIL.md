---
name: I_JOINTVENTUREACCTGEXTDETAIL
description: "Joint Venture Accounting Extended Detail"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTUREACCTGEXTDETAIL')/$value
semantic_en: "Joint Venture Accounting Extended Detail"
semantic_vi: "Joint Venture Accounting Extended Detail — CDS view giao diện dựa trên I_JointVentureAcctgDetail."
keywords:
  - "joint"
  - "venture"
  - "accounting"
  - "extended"
  - "detail"
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
  - account
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_JOINTVENTUREACCTGEXTDETAIL

**Joint Venture Accounting Extended Detail**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTUREACCTGEXTDETAIL')/$value) |

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
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Equity Group |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | Account Number |
| `GLAccountType` |  | | `_GLAccountInChartOfAccounts` | `GLAccountType` | `CHAR(1)` | Type of a General Ledger Account |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
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
| `TaxCalculationProcedure` |  | | `_CompanyCode._Country` | `TaxCalculationProcedure` | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
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
| `ProductionMonth` |  | |  |  | `DATS(8)` | Production Month (Date to find period and year) |
| `ReferenceBillingDocument` |  | |  |  | `CHAR(10)` | Ref Billing Document |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Key for Terms of Payment |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(17)` | Amount in Transaction Currency |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(15)` | Quantity in Base Unit |
| `CompanyCodeCurrency` |  | | `_LedgerCompanyCodeCrcyRoleVH._CoCodeCurrencyRoleCurrency` | `Currency` | `CUKY(5)` | Currency Key |
| `GlobalCurrency` |  | | `_LedgerCompanyCodeCrcyRoleVH._GlobalCurrencyRoleCurrency` | `Currency` | `CUKY(5)` | Currency Key |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(17)` | Value in local currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(17)` | Value in group currency |
| `_LedgerCompanyCodeCrcyRoleVH` | | ✓ | | | | |
| `_TaxCode` | | ✓ | | | | |
| `_GLAccountType` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_TaxCalculationProcedure` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_AssetTransactionType` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CostCenterActivityType` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_DocumentType` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_IsAutomaticallyPosted` | | ✓ | | | | |
| `_JointVenture` | | ✓ | | | | |
| `_JointVentureEquityGroup` | | ✓ | | | | |
| `_JointVentureRecovery` | | ✓ | | | | |
| `_JVAPayrolltype` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_PurchasingDocument` | | ✓ | | | | |
| `_PurchasingDocumentItem` | | ✓ | | | | |
| `_RecordType` | | ✓ | | | | |
| `_SpecialLedgerVersion` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LedgerCompanyCodeCrcyRoleVH` | `I_LedgerCompanyCodeCrcyRoles` | [0..1] |
| `_TaxCode` | `I_TaxCode` | [0..1] |
| `_GLAccountType` | `I_GLAccountType` | [0..1] |
| `_GlobalCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_TaxCalculationProcedure` | `I_TaxCalculationProcedure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTUREACCTGEXTDETAIL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JOINTVENTUREACCTGEXTDETAIL')/$value)*

```abap
@EndUserText.label: 'Joint Venture Accounting Extended Detail'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #COMPOSITE
@AbapCatalog.sqlViewName: 'IPVJVACCTGEXTDTL'
@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'PRAJointVentureAcctgExtDetail'
// Composite view needed as otherwise basic cube view contained too many joins to get currency
// in addition to account type

define view I_JointVentureAcctgExtDetail
  as select from I_JointVentureAcctgDetail
  //left outer join t882 on  jvso1.rbukrs = t882.bukrs
  //                     and jvso1.rldnr  = t882.rldnr
  //association [0..1] to I_Companycodeledgerassignment as _CompanyCodeCurrency     on  $projection.CompanyCode = _CompanyCodeCurrency.CompanyCode
  //                                                                                and $projection.Ledger      = _CompanyCodeCurrency.Ledger
  association [0..1] to I_LedgerCompanyCodeCrcyRoles as _LedgerCompanyCodeCrcyRoleVH on  $projection.CompanyCode = _LedgerCompanyCodeCrcyRoleVH.CompanyCode
                                                                                      and $projection.Ledger      = _LedgerCompanyCodeCrcyRoleVH.Ledger
  //  association [0..1] to I_ChartOfAccounts             as _ChartOfAccounts             on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  //  association [0..1] to I_GLAccountInChartOfAccounts  as _GLAccountInChartOfAccounts  on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
  //                                                                                      and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
  association [0..1] to I_TaxCode                     as _TaxCode                     on  $projection.TaxCode                 = _TaxCode.TaxCode
                                                                                      and $projection.TaxCalculationProcedure = _TaxCode.TaxCalculationProcedure
  association [0..1] to I_GLAccountType               as _GLAccountType               on  $projection.GLAccountType = _GLAccountType.GLAccountType
  association [0..1] to I_Currency                    as _GlobalCurrency              on  $projection.GlobalCurrency = _GlobalCurrency.Currency
  association [0..1] to I_Currency                    as _CompanyCodeCurrency         on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_TaxCalculationProcedure     as _TaxCalculationProcedure     on  $projection.TaxCalculationProcedure = _TaxCalculationProcedure.TaxCalculationProcedure
{
  key JointVentureLineItem,
      Ledger,
      RecordType,
      SpecialLedgerVersion,
      FiscalYear,
      Currency,
      UnitOfMeasure,
      DebitCreditCode,
      LedgerFiscalPeriod,
      DocumentType,
      AccountingDocument,
      AccountingDocumentItem,
      CompanyCode,
      JointVenture,
      JointVentureEquityGroup,
      // @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      //  _CompanyCode.ChartOfAccounts as ChartOfAccounts,
      ChartOfAccounts,
      //  @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,
      @ObjectModel.foreignKey.association: '_GLAccountType'
      _GLAccountInChartOfAccounts.GLAccountType        as GLAccountType,
      BusinessArea,
      ControllingArea,
      CostCenter,
      OriginOrder,
      ProjectInternalID,
      ProfitCenter,
      MasterFixedAsset,
      FixedAsset,
      AssetTransactionType,
      JointVentureRecoveryCode,
      Partner,
      InternalOrder,
      NetworkActivity,
      AdditionalQuantity1Unit,
      DocumentItemText,
      IsAutomaticallyPosted,
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
      PayrollType,
      AccountingDocCreatedByUser,
      DocumentDate,
      TimeEntry,
      @ObjectModel.foreignKey.association: '_TaxCalculationProcedure'
      _CompanyCode._Country.TaxCalculationProcedure    as TaxCalculationProcedure,
      @ObjectModel.foreignKey.association: '_TaxCode'
      TaxCode,
      BillingMonth,
      PurchaseOrder,
      PurchaseOrderItem,
      TransactionTypeDetermination,
      ActivityType,
      PRAAllocationFrequencyCode,
      StartDate,
      Material,
      ReferenceDocument,
      ProductionMonth,
      ReferenceBillingDocument,
      Customer,
      Supplier,
      PaymentTerms,
      @Semantics.amount.currencyCode: 'Currency'
      AmountInTransactionCurrency,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      QuantityInBaseUnit,

      @Semantics.currencyCode: true
      _LedgerCompanyCodeCrcyRoleVH._CoCodeCurrencyRoleCurrency.Currency as CompanyCodeCurrency,
      @Semantics.currencyCode: true
      _LedgerCompanyCodeCrcyRoleVH._GlobalCurrencyRoleCurrency.Currency as GlobalCurrency,



      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      AmountInCompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      AmountInGlobalCurrency,


      /* Associations */
      _AccountingDocumentType,
      _AssetTransactionType,
      _BusinessArea,
      _ChartOfAccounts,
      _CompanyCode,
      _ControllingArea,
      _CostCenter,
      _CostCenterActivityType,
      _Currency,
      _Customer,
      _DebitCreditCode,
      _DocumentType,
      _FixedAsset,
      _GLAccount,
      _GLAccountInChartOfAccounts,
      _InternalOrder,
      _IsAutomaticallyPosted,
      _JointVenture,
      _JointVentureEquityGroup,
      _JointVentureRecovery,
      _JVAPayrolltype,
      _Ledger,
      _MasterFixedAsset,
      _Material,
      _Order,
      _Partner,
      _ProfitCenter,
      _PurchasingDocument,
      _PurchasingDocumentItem,
      _RecordType,
      _SpecialLedgerVersion,
      _Supplier,
      _TaxCode,
      _UnitOfMeasure,
//      _WBSElement,         //kjs_2646890
      _WBSElementBasicData,  //kjs_2646890
      _GLAccountType,
      _LedgerCompanyCodeCrcyRoleVH,
      _CompanyCodeCurrency,
      _GlobalCurrency,
      _TaxCalculationProcedure

      //      @Semantics.currencyCode: true
      //      _LedgerCompanyCodeCrcyRoleVH.CompanyCodeCurrency                                            as CompanyCodeCurrency,
      //      @Semantics.currencyCode: true
      //      _LedgerCompanyCodeCrcyRoleVH.GlobalCurrency                                                 as GroupCurrency,

      //@Semantics.currencyCode: true
      //_CompanyCodeCurrency.Currency3       as CompanyCodeCurrency,
      //@Semantics.currencyCode: true
      //_CompanyCodeCurrency.Currency4       as GroupCurrence,

      //@Semantics.currencyCode: true
      //t882.curr1                                   as CompanyCodeCurrency,
      //@Semantics.currencyCode: true
      //t882.curr2                                   as GroupCurrency,
      //      @DefaultAggregation: #SUM
      //      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //      jvso1.hsl                                                                                   as AmountInCompanyCodeCurrency,
      //      @DefaultAggregation: #SUM
      //      @Semantics.amount.currencyCode: 'GroupCurrency'
      //      jvso1.ksl                                                                                   as AmountInGroupCurrency,

}
```
