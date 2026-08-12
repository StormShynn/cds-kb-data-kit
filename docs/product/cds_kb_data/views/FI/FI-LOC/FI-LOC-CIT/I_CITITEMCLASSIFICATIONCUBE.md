---
name: I_CITITEMCLASSIFICATIONCUBE
description: "CIT Item Classification - Cube"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITITEMCLASSIFICATIONCUBE')/$value
semantic_en: "CIT Item Classification - Cube"
semantic_vi: "CIT Item Classification - Cube — CDS view giao diện dựa trên P_CITItemClassification2."
keywords:
  - "CIT Item Classification - Cube"
  - "cit"
  - "item"
  - "classification"
  - "cube"
  - "statry"
  - "rptg"
  - "entity"
  - "category"
  - "settlement"
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-CIT
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_CITITEMCLASSIFICATIONCUBE

**CIT Item Classification - Cube**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITITEMCLASSIFICATIONCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StatryRptgEntity` |  | |  |  | `CHAR(10)` | Reporting Entity |
| `StatryRptCategory` |  | |  |  | `CHAR(30)` | Report Category ID |
| `StatryRptRunID` |  | |  |  | `NUMC(8)` | Report Run ID |
| `CITClassificationUUID` |  | |  |  | `RAW(16)` | Global Unique ID for table |
| `CITSettlementUUID` |  | |  |  | `RAW(16)` |  |
| `CITReportingLine` |  | |  |  | `CHAR(30)` | CIT Report Line |
| `CITReportingLineDescription` |  | |  |  | `CHAR(100)` | CIT Report Line Description |
| `CITReportingItem` |  | |  |  | `CHAR(10)` | CIT Report Item |
| `CITReportingDate` |  | |  |  | `DATS(8)` | Reporting Date |
| `CITReportVersion` |  | |  |  | `CHAR(30)` | CIT Report Version |
| `BRFApplication` |  | |  |  | `CHAR(30)` | BRFplus Application name |
| `CITSettlementCode` |  | |  |  | `CHAR(30)` | CIT Settlement Code |
| `CITSettlementCodeDescription` |  | |  |  | `CHAR(50)` | CIT Settlement Code Description |
| `CITItemAmountInDisplayCurrency` |  | |  |  | `CURR(23)` | CIT Amount |
| `Currency` |  | |  |  | `CUKY(5)` | CIT Currency |
| `ItemSignIsReversed` |  | |  |  | `CHAR(1)` | Change Item Sign in Reporting |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `LedgerName` |  | |  |  | `CHAR(30)` | Ledger Name |
| `SourceLedger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `CorporateIncomeTaxHierarchy` |  | |  |  | `CHAR(42)` | Corporate Income Tax Hierarchy |
| `CITClassificationCode` |  | |  |  | `CHAR(40)` | CIT Classification Code |
| `CITClassificationCodeDesc` |  | |  |  | `CHAR(50)` | Hierarchy node description |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `GLAccountLongName` |  | |  |  | `CHAR(50)` | G/L Account Long Name |
| `AlternativeGLAccount` |  | |  |  | `CHAR(10)` | Alternative G/L Account Number In Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `AccountingDocumentHeaderText` |  | |  |  | `CHAR(25)` | Document Header Text |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Document Reference ID |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `IsReversal` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversing Another Item |
| `IsReversed` |  | |  |  | `CHAR(1)` | Indicator: Item is Reversed |
| `ReversalReferenceDocument` |  | |  |  | `CHAR(10)` | Reversal Reference Document |
| `ReversalReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Reversal Reference Document Context |
| `IsSettlement` |  | |  |  | `CHAR(1)` | Indicator: Item is Settling or Transferring Another Item |
| `IsSettled` |  | |  |  | `CHAR(1)` | Indicator: Line Item is Settled or Transferred |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `JournalEntryCreationDate` |  | |  |  | `DATS(8)` | Journal Entry Creation Date in UTC |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Fixed Asset (Main Asset Number) |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `AssetTransactionType` |  | |  |  | `CHAR(3)` | Asset Transaction Type |
| `GroupMasterFixedAsset` |  | |  |  | `CHAR(12)` | Group Asset |
| `GroupFixedAsset` |  | |  |  | `CHAR(4)` | Group Asset Subnumber |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` |  | |  |  | `CHAR(25)` | Controlling Area Name |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenterName` |  | |  |  | `CHAR(20)` | Cost Center Name |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `ControllingObject` |  | |  |  | `CHAR(22)` | Controlling Object |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `OriginObjectType` |  | |  |  | `NUMC(2)` | Type of Origin Object |
| `CostOriginGroup` |  | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `ControllingDebitCreditCode` |  | |  |  | `CHAR(1)` | Controlling Debit/Credit Code |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `OriginProfitCenter` |  | |  |  | `CHAR(10)` | Origin Profit Center |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `InternalOrderDescription` |  | |  |  | `CHAR(40)` | Internal Order Description |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `WBSDescription` |  | |  |  | `CHAR(40)` | Work Breakdown Structure Element Name |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `ProjectInternalID` |  | |  |  | `NUMC(8)` | Project Internal ID |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `BusinessProcess` |  | |  |  | `CHAR(12)` | Business Process |
| `CostObject` |  | |  |  | `CHAR(12)` | Cost Object |
| `CostAnalysisResource` |  | |  |  | `CHAR(10)` | Cost Analysis Resource |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `AccrualObject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Object |
| `AccrualObjectType` |  | |  |  | `CHAR(4)` | Type of the Accrual Object |
| `AccrualSubobject` |  | |  |  | `CHAR(32)` | Identifier of the Accrual Subobject |
| `AccrualItemType` |  | |  |  | `CHAR(11)` | Type of the Item of the Accrual Subobject |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProfitCenterName` |  | |  |  | `CHAR(20)` | Description of Profit Center |
| `AccountingDocumentCategory` |  | |  |  | `CHAR(1)` | Journal Entry Category |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `AccountingDocumentTypeName` |  | |  |  | `CHAR(20)` | Document Type Name |
| `TransactionTypeDetermination` |  | |  |  | `CHAR(3)` | Transaction Key |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry (Deprecated) |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Code |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `HouseBank` |  | |  |  | `CHAR(5)` | House Bank Key |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | House Bank Account |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` |  | |  |  | `NUMC(5)` | Purchasing Document Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductName` |  | |  |  | `CHAR(40)` | Product Description |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group for Maintenance Orders |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SupplierName` |  | |  |  | `CHAR(80)` | Name of Supplier |
| `BPSupplierName` |  | |  |  | `CHAR(81)` | Supplier Name |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `BPCustomerName` |  | |  |  | `CHAR(81)` | Customer Name |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Customer Supplier Corporate Group |
| `EliminationProfitCenter` |  | |  |  | `CHAR(10)` | Elimination Profit Center |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `SpecialGLCode` |  | |  |  | `CHAR(1)` | Special G/L Indicator |
| `PartnerCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Partner Business Area |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `PartnerControllingObjectClass` |  | |  |  | `CHAR(2)` | Partner Controlling Object Class |
| `PartnerAccountAssignment` |  | |  |  | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerOrder` |  | |  |  | `CHAR(12)` | Partner Order |
| `PartnerOrderCategory` |  | |  |  | `NUMC(2)` | Partner Order Category |
| `PartnerWBSElementInternalID` |  | |  |  | `NUMC(8)` | Partner WBS Element Internal ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `PartnerProjectInternalID` |  | |  |  | `NUMC(8)` | Partner Project Internal ID |
| `PartnerProjectExternalID` |  | |  |  | `CHAR(24)` | Partner Project External ID |
| `PartnerProjectNetwork` |  | |  |  | `CHAR(12)` | Partner Project Network |
| `PartnerSalesDocument` |  | |  |  | `CHAR(10)` | Partner Sales Document |
| `PartnerSalesDocumentItem` |  | |  |  | `NUMC(6)` | Partner Sales Document Item |
| `PartnerBusinessProcess` |  | |  |  | `CHAR(12)` | Partner Business Process |
| `PartnerCostObject` |  | |  |  | `CHAR(12)` | Partner Cost Object |
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `PartnerGrant` |  | |  |  | `CHAR(20)` | Partner Grant |
| `PartnerBudgetPeriod` |  | |  |  | `CHAR(10)` | FM: Partner Budget Period |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Reference |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Reference Document Item |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Document Context |
| `PredecessorReferenceDocument` |  | |  |  | `CHAR(10)` | Predecessor Reference Document |
| `PredecessorReferenceDocItem` |  | |  |  | `NUMC(6)` | Predecessor Reference Document Item |
| `PredecessorReferenceDocType` |  | |  |  | `CHAR(5)` | Predecessor Reference Document Type |
| `PredecessorReferenceDocCntxt` |  | |  |  | `CHAR(10)` | Predecessor Reference Document Context |
| `InvoiceReference` |  | |  |  | `CHAR(10)` | Invoice Reference |
| `InvoiceItemReference` |  | |  |  | `NUMC(3)` | Invoice Item Reference |
| `InvoiceReferenceFiscalYear` |  | |  |  | `NUMC(4)` | Invoice Reference Fiscal Year |
| `BusinessTransactionCategory` |  | |  |  | `CHAR(4)` | Business Transaction Category |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `SenderCompanyCode` |  | |  |  | `CHAR(4)` | Company Code in Sender System |
| `SenderGLAccount` |  | |  |  | `CHAR(10)` | Sender G/L Account |
| `SenderAccountAssignment` |  | |  |  | `CHAR(30)` | Sender Account Assignment |
| `SenderAccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type in Sender System |
| `SenderFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year in Sender System |
| `SenderAccountingDocument` |  | |  |  | `CHAR(10)` | Sender Journal Entry |
| `SenderLogicalSystem` |  | |  |  | `CHAR(10)` | Sender Logical System |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Classification` | `E_CITItemClassificationLog` | [0..1] |
| `_Settlement` | `E_CITSettlementLog` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITITEMCLASSIFICATIONCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITITEMCLASSIFICATIONCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICITITMCLFNC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey
@VDM.viewType: #COMPOSITE
@Analytics.dataCategory: #CUBE
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_INCLUDED
@Metadata.allowExtensions: true
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@EndUserText.label: 'CIT Item Classification - Cube'

define view I_CITItemClassificationCube

  with parameters
    P_StatryRptgEntity  : srf_reporting_entity,
    P_StatryRptCategory : srf_rep_cat_id,
    P_StatryRptRunID    : srf_report_run_id

  as select from P_CITItemClassification2(
                 P_StatryRptgEntity  : $parameters.P_StatryRptgEntity,
                 P_StatryRptCategory : $parameters.P_StatryRptCategory,
                 P_StatryRptRunID    : $parameters.P_StatryRptRunID ) as item /* Alias required for extensibility. Do not change! */

  /*Extension Include View - do not expose this association in the projection list of the view*/
  association [0..1] to E_CITItemClassificationLog as _Classification on  $projection.StatryRptgEntity      = _Classification.StatryRptgEntity
                                                                      and $projection.StatryRptCategory     = _Classification.StatryRptCategory
                                                                      and $projection.StatryRptRunID        = _Classification.StatryRptRunID
                                                                      and $projection.CITClassificationUUID = _Classification.CITClassificationUUID
                                                                      and $projection.CITReportingLine      = _Classification.CITReportingLine

  /*Extension Include View - do not expose this association in the projection list of the view*/
  association [0..1] to E_CITSettlementLog         as _Settlement     on  $projection.StatryRptgEntity  = _Settlement.StatryRptgEntity
                                                                      and $projection.StatryRptCategory = _Settlement.StatryRptCategory
                                                                      and $projection.StatryRptRunID    = _Settlement.StatryRptRunID
                                                                      and $projection.CITSettlementUUID = _Settlement.CITSettlementUUID


{
  StatryRptgEntity,
  StatryRptCategory,
  StatryRptRunID,
  CITClassificationUUID,
  CITSettlementUUID,
  CITReportingLine,
  CITReportingLineDescription,
  CITReportingItem,
  CITReportingDate,
  CITReportVersion,
  BRFApplication,
  CITSettlementCode,
  CITSettlementCodeDescription,
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'Currency'
  CITItemAmountInDisplayCurrency,
  @Semantics.currencyCode:true
  Currency,
  ItemSignIsReversed,
  
  //**** Basic Fields
  Ledger,
  LedgerName,
  SourceLedger,

  CompanyCode,
  CompanyCodeName,

  CorporateIncomeTaxHierarchy,

  CITClassificationCode,
  CITClassificationCodeDesc,

  ChartOfAccounts,

  GLAccount,
  GLAccountLongName,

  AlternativeGLAccount,
  FiscalYear,
  FiscalYearVariant,
  LedgerFiscalYear,
  FiscalYearPeriod,
  PostingDate,
  DocumentDate,
  Segment,
  AccountingDocument,
  LedgerGLLineItem,
  AccountingDocumentHeaderText,
  DocumentReferenceID,
  DocumentItemText,
  
  /***************************
    Account Assignment Fields
  ****************************/
  LogicalSystem,
  IsReversal,
  IsReversed,
  ReversalReferenceDocument,
  ReversalReferenceDocumentCntxt,
  IsSettlement,
  IsSettled,
  AccountingDocCreatedByUser,
  JournalEntryCreationDate,

  /***************************
    Asset Accounting Fields
  ****************************/
  AssetClass,
  MasterFixedAsset,
  FixedAsset,
  AssetTransactionType,
  GroupMasterFixedAsset,
  GroupFixedAsset,

  /***************************
    Cost Accounting Fields
  ****************************/
  ControllingArea,
  ControllingAreaName,

  CostCenter,
  CostCenterName,

  CostCtrActivityType,
  ControllingObject,
  ControllingObjectClass,
  OriginObjectType,
  CostOriginGroup,
  ControllingDebitCreditCode,
  PersonnelNumber,
  OriginProfitCenter,
  OriginCostCenter,
  OriginCostCtrActivityType,

  OrderID,
  InternalOrderDescription,

  OrderCategory,

  WBSElementInternalID,
  WBSDescription,

  WBSElementExternalID,
  ProjectInternalID,
  ProjectExternalID,
  ProjectNetwork,
  BusinessProcess,
  CostObject,
  CostAnalysisResource,
  WorkItem,
  AccrualObject,
  AccrualObjectType,
  AccrualSubobject,
  AccrualItemType,

  ProfitCenter,
  ProfitCenterName,

  /***************************
    Financial Accounting Fields
  ****************************/
  AccountingDocumentCategory,

  AccountingDocumentType,
  AccountingDocumentTypeName,

  TransactionTypeDetermination,
  FinancialTransactionType,
  BillingDocumentType,
  ClearingAccountingDocument,
  DebitCreditCode,
  PostingKey,
  TaxCode,
  HouseBank,
  HouseBankAccount,
  JointVenture,

  /***************************
    Logistics Fields
  ****************************/
  PurchasingDocument,
  PurchasingDocumentItem,
  SalesDocument,
  SalesDocumentItem,
  Product,
  ProductName,
  ProductGroup,
  SoldProduct,
  Plant,
  SalesOrganization,
  SalesDistrict,
  OrganizationDivision,
  DistributionChannel,

  Supplier,
  @VDM.lifecycle.status: #DEPRECATED
  @VDM.lifecycle.successor: 'BPSupplierName'
  SupplierName,
  BPSupplierName,
  
  Customer,
  @VDM.lifecycle.status: #DEPRECATED
  @VDM.lifecycle.successor: 'BPCustomerName'
  CustomerName,
  BPCustomerName,
  
  CustomerGroup,
  CustomerSupplierCountry,
  CustomerSupplierCorporateGroup,
  EliminationProfitCenter,
  ServiceContract,
  ServiceContractItem,
  ServiceContractType,
  ServiceDocument,
  ServiceDocumentItem,
  BusinessSolutionOrder,
  BusinessSolutionOrderItem,
  SpecialGLCode,

  /***************************
    Partner Fields
  ****************************/
  PartnerCompanyCode,
  PartnerCostCenter,
  PartnerProfitCenter,
  PartnerFunctionalArea,
  PartnerBusinessArea,
  PartnerSegment,
  PartnerControllingObjectClass,
  PartnerAccountAssignment,
  PartnerAccountAssignmentType,
  PartnerCostCtrActivityType,
  PartnerOrder,
  PartnerOrderCategory,
  PartnerWBSElementInternalID,
  PartnerWBSElementExternalID,
  PartnerProjectInternalID,
  PartnerProjectExternalID,
  PartnerProjectNetwork,
  PartnerSalesDocument,
  PartnerSalesDocumentItem,
  PartnerBusinessProcess,
  PartnerCostObject,
  PartnerFund,
  PartnerGrant,
  PartnerBudgetPeriod,

  /***************************
    Reference Fields
  ****************************/
  AssignmentReference,
  ReferenceDocument,
  ReferenceDocumentItem,
  ReferenceDocumentType,
  ReferenceDocumentContext,
  PredecessorReferenceDocument,
  PredecessorReferenceDocItem,
  PredecessorReferenceDocType,
  PredecessorReferenceDocCntxt,
  InvoiceReference,
  InvoiceItemReference,
  InvoiceReferenceFiscalYear,
  BusinessTransactionCategory,
  SubLedgerAcctLineItemType,

  /***************************
    Source System Fields in Central Finance
  ****************************/
  SenderCompanyCode,
  SenderGLAccount,
  SenderAccountAssignment,
  SenderAccountAssignmentType,
  SenderFiscalYear,
  SenderAccountingDocument,
  SenderLogicalSystem

}
```
