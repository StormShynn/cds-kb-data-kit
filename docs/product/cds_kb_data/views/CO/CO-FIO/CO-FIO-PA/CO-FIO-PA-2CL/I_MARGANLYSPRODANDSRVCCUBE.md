---
name: I_MARGANLYSPRODANDSRVCCUBE
description: "Product and Service Margins - Cube"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCCUBE')/$value
semantic_en: "Product and Service Margins - Cube"
semantic_vi: "Product and Service Margins - Cube — CDS view giao diện dựa trên I_GLAccountLineItemSemTag."
keywords:
  - "Product and Service Margins - Cube"
  - "product"
  - "and"
  - "service"
  - "margins"
  - "cube"
  - "ledger"
  - "source"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - CO
  - bo:material
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - product
---
# I_MARGANLYSPRODANDSRVCCUBE

**Product and Service Margins - Cube**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountHierarchy` | ✓ | |  |  | `CHAR(42)` | Financial Statement Version |
| `SemanticTag` | ✓ | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ValidityStartDate` | ✓ | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid To Date |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `WBSElement` |  | |  | `cast( WBSElement as fis_wbs_no_conv preserving type )` | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `BilledRevenueAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Actual Revenue |
| `RecognizableCostAmtInCCCrcy` |  | |  |  | `CURR(23)` | Actual Cost |
| `RecognizedRevnAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Revenue |
| `RecognizedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized COS |
| `RecognizedMarginAmtInCCCrcy` |  | |  |  | `CURR(23)` | Recognized Margin |
| `RevenueAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Revenue Adjustment |
| `COGSAdjustmentAmtInCCCrcy` |  | |  |  | `CURR(23)` | COS Adjustment |
| `DeferredCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Deferred COS |
| `DeferredRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Deferred Revenue |
| `AccruedRevenueAmtInCCCrcy` |  | |  |  | `CURR(23)` | Accrued Revenue |
| `AccruedCOGSAmtInCCCrcy` |  | |  |  | `CURR(23)` | Accrued COS |
| `ImminentLossRsrvAmtInCCCrcy` |  | |  |  | `CURR(23)` | Imminent Loss Reserve |
| `SalesDeductReserveAmtInCCCrcy` |  | |  |  | `CURR(23)` | Reserves for Anticipated Sales Deductions |
| `UnrlzdCostsReserveAmtInCCCrcy` |  | |  |  | `CURR(23)` | Reserves for Unrealized Costs |
| `ProjAndSlsOrdStkAmtInCCCrcy` |  | |  |  | `CURR(23)` | Project/Sales Order Stock |
| `MnlContrAccrPnLItmAmtInCCCrcy` |  | |  | `cast ( MnlContrAccrPnLItmAmtInCCCrcy as fins_mnlcontraccr )` | `CURR(23)` | Manual Contract Accruals for Profit/Loss |
| `DownPaymentAmtInCCCrcy` |  | |  |  | `CURR(23)` | Customer Down Payment |
| `SalesDeductionAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Sales Deduction |
| `_ObjectType` | | ✓ | | | | |
| `_SolutionOrder` | | ✓ | | | | |
| `_ServiceDocumentTypeNew` | | ✓ | | | | |
| `_ServiceDocumentNew` | | ✓ | | | | |
| `_ServiceDocumentItemNew` | | ✓ | | | | |
| `_ServiceContractTypeNew` | | ✓ | | | | |
| `_ServiceContractNew` | | ✓ | | | | |
| `_ServiceContractItemNew` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_GLAccountHierarchy` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_FiscalYearPeriod` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
| `_ServiceContract` | | ✓ | | | | |
| `_ServiceContractItem` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_ServiceDocumentItem` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ServiceContractType` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_ProviderContractItem` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_LedgerFiscalYearForVariant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ObjectType` | `I_MargAnlysProdAndSrvcObjType` | [0..1] |
| `_SolutionOrder` | `I_ServiceDocument` | [0..1] |
| `_ServiceDocumentTypeNew` | `I_AcctgServiceDocumentType` | [0..1] |
| `_ServiceDocumentNew` | `I_AccountingServiceDocument` | [0..1] |
| `_ServiceDocumentItemNew` | `I_AcctgSrvcDocumentItemBasic` | [0..1] |
| `_ServiceContractTypeNew` | `I_AcctgServiceDocumentType` | [0..1] |
| `_ServiceContractNew` | `I_AccountingServiceDocument` | [0..1] |
| `_ServiceContractItemNew` | `I_AcctgSrvcDocumentItemBasic` | [0..1] |
| `_Extension` | `E_JournalEntryItem` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPROSRVMARGIN'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions: true
@EndUserText.label: 'Product and Service Margins - Cube'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@VDM.viewType: #COMPOSITE
@Analytics.dataCategory: #CUBE
@ObjectModel.representativeKey: 'LedgerGLLineItem'
@Analytics.internalName: #LOCAL
@Search.searchable: false
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
define view I_MargAnlysProdAndSrvcCube
  with parameters
    P_GLAccountHierarchy : fins_sem_tag_hryid
  as select from I_GLAccountLineItemSemTag as I_GLAccountLineItemSemTag                                                            
  association [0..1] to I_MargAnlysProdAndSrvcObjType as _ObjectType on  $projection.AccountAssignmentType  = _ObjectType.MarginAnalysisObjectType
  association [0..1] to I_ServiceDocument as _SolutionOrder on  $projection.BusinessSolutionOrder  = _SolutionOrder.ServiceDocument
                                                           and  _SolutionOrder.ServiceObjectType   = 'BUS2000172'

  association [0..1] to I_AcctgServiceDocumentType   as _ServiceDocumentTypeNew     on $projection.ServiceDocumentType = _ServiceDocumentTypeNew.ServiceDocumentType
  association [0..1] to I_AccountingServiceDocument  as _ServiceDocumentNew         on $projection.ServiceDocumentType = _ServiceDocumentNew.ServiceDocumentType
                                                                                   and $projection.ServiceDocument     = _ServiceDocumentNew.ServiceDocument
  association [0..1] to I_AcctgSrvcDocumentItemBasic as _ServiceDocumentItemNew     on $projection.ServiceDocumentType = _ServiceDocumentItemNew.ServiceDocumentType
                                                                                   and $projection.ServiceDocument     = _ServiceDocumentItemNew.ServiceDocument
                                                                                   and $projection.ServiceDocumentItem = _ServiceDocumentItemNew.ServiceDocumentItem
  
  association [0..1] to I_AcctgServiceDocumentType   as _ServiceContractTypeNew     on $projection.ServiceContractType = _ServiceContractTypeNew.ServiceDocumentType
  association [0..1] to I_AccountingServiceDocument  as _ServiceContractNew         on $projection.ServiceContractType = _ServiceContractNew.ServiceDocumentType
                                                                                   and $projection.ServiceContract     = _ServiceContractNew.ServiceDocument
  association [0..1] to I_AcctgSrvcDocumentItemBasic as _ServiceContractItemNew     on $projection.ServiceContractType = _ServiceContractItemNew.ServiceDocumentType
                                                                                   and $projection.ServiceContract     = _ServiceContractItemNew.ServiceDocument
                                                                                   and $projection.ServiceContractItem = _ServiceContractItemNew.ServiceDocumentItem
                                                                                   
  association [1..1] to E_JournalEntryItem as _Extension on  $projection.SourceLedger       = _Extension.SourceLedger
                                                         and $projection.CompanyCode        = _Extension.CompanyCode
                                                         and $projection.FiscalYear         = _Extension.FiscalYear
                                                         and $projection.AccountingDocument = _Extension.AccountingDocument
                                                         and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem  
{
  @ObjectModel.foreignKey.association: '_Ledger'
  @Environment.sql.passValue: true
  key Ledger,
  @ObjectModel.foreignKey.association: '_SourceLedger'
  key SourceLedger,
  @ObjectModel.foreignKey.association: '_CompanyCode'
  @Environment.sql.passValue: true
  key CompanyCode,
  @ObjectModel.foreignKey.association: '_FiscalYear'
  @Environment.sql.passValue: true
  key FiscalYear,
  @ObjectModel.foreignKey.association: '_JournalEntry'
  key AccountingDocument,
  key LedgerGLLineItem,
  @ObjectModel.foreignKey.association: '_GLAccountHierarchy'
  @Environment.sql.passValue: true
  key GLAccountHierarchy,
  @ObjectModel.foreignKey.association: '_SemanticTag'
  key SemanticTag,
  @Semantics.businessDate.from: true
  key ValidityStartDate,
  @Semantics.businessDate.to: true
  key ValidityEndDate,
  
  FiscalYearVariant,
  @Semantics.fiscal.year: true
  LedgerFiscalYear,
  
  FiscalPeriod,
  FiscalYearPeriod,
  @ObjectModel.foreignKey.association: '_ServiceContractNew'
  ServiceContract,
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_ServiceContractItemNew'
  ServiceContractItem,
  @ObjectModel.foreignKey.association: '_SolutionOrder'
  BusinessSolutionOrder,
  BusinessSolutionOrderItem,
  @ObjectModel.foreignKey.association: '_ProviderContract'
  ProviderContract,
  @ObjectModel.foreignKey.association: '_ProviderContractItem'
  ProviderContractItem,
  @ObjectModel.foreignKey.association: '_ServiceContractTypeNew'
  ServiceContractType,
  @ObjectModel.foreignKey.association: '_ObjectType'
  AccountAssignmentType,
  @ObjectModel.foreignKey.association: '_ProjectExternalID'
  ProjectExternalID,
  @ObjectModel.foreignKey.association: '_ProfitCenter'
  ProfitCenter,
  @ObjectModel.foreignKey.association: '_ServiceDocumentTypeNew'
  ServiceDocumentType,
  @ObjectModel.foreignKey.association: '_ServiceDocumentNew'
  ServiceDocument,
  @ObjectModel.foreignKey.association: '_ServiceDocumentItemNew'
  ServiceDocumentItem,
  @ObjectModel.foreignKey.association: '_BillToParty'
  BillToParty,
  @ObjectModel.foreignKey.association: '_BusinessTransactionType'
  BusinessTransactionType,
  @ObjectModel.foreignKey.association: '_Customer'
  Customer,
  @ObjectModel.foreignKey.association: '_CustomerGroup'
  CustomerGroup,
  @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
  GLAccount,
  @ObjectModel.foreignKey.association: '_CustomerSupplierIndustry'
  CustomerSupplierIndustry,
  @ObjectModel.foreignKey.association: '_SoldProduct'
  SoldProduct,
  @ObjectModel.foreignKey.association: '_SoldProductGroup'
  SoldProductGroup,
  @ObjectModel.foreignKey.association: '_SalesOrder'
  SalesOrder,
  @ObjectModel.foreignKey.association: '_SalesOrderItem'
  SalesOrderItem,
  @ObjectModel.foreignKey.association: '_SalesDocument'
  SalesDocument,
  @ObjectModel.foreignKey.association: '_SalesDocumentItem'
  SalesDocumentItem,
  @ObjectModel.foreignKey.association: '_SalesOrganization'
  SalesOrganization,
  @ObjectModel.foreignKey.association: '_ShipToParty'
  ShipToParty,
  @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  ChartOfAccounts,
  @ObjectModel.foreignKey.association: '_ControllingArea'
  ControllingArea,
  @ObjectModel.foreignKey.association: '_BaseUnit'
  @Semantics.unitOfMeasure:true
  BaseUnit,
  @DefaultAggregation: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
  Quantity,
  BillableControl,
  @ObjectModel.foreignKey.association: '_DistributionChannel'
  DistributionChannel,
  @ObjectModel.foreignKey.association: '_Division'
  OrganizationDivision,
  @ObjectModel.foreignKey.association: '_Equipment'
  Equipment,
  @ObjectModel.foreignKey.association: '_FunctionalArea'
  FunctionalArea,
  Material,
  @ObjectModel.foreignKey.association: '_Product'
  Product,
  @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
  PartnerCostCtrActivityType,
  PersonnelNumber,
  @ObjectModel.foreignKey.association: '_Plant'
  Plant,
  @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
  CustomerSupplierCountry,
  
  //@ObjectModel.foreignKey.association: '_WBSElement'
  //@API.element.releaseState: #DEPRECATED
  //@API.element.successor:   'WBSElementExternalID'
  //@VDM.lifecycle.status:    #DEPRECATED
  //@VDM.lifecycle.successor: 'WBSElementExternalID'
  cast( WBSElement as fis_wbs_no_conv preserving type ) as WBSElement,
  
  @ObjectModel.foreignKey.association: '_WBSElementExternalID'
  //cast( WBSElementExternalID as fis_wbsext_no_conv ) as WBSElementExternalID,  //Need to be converted in Query
  WBSElementExternalID,
  
  @ObjectModel.foreignKey.association: '_SalesDistrict'
  SalesDistrict,
  
  ServicesRenderedDate,
  @ObjectModel.foreignKey.association: '_Order'
  OrderID,
  
  @ObjectModel.foreignKey.association: '_Supplier'
  Supplier,
  @ObjectModel.foreignKey.association: '_AccountingDocumentType'
  AccountingDocumentType,
  @ObjectModel.foreignKey.association: '_CostCenter'
  CostCenter,
  @ObjectModel.foreignKey.association: '_FinancialAccountType'
  FinancialAccountType,
  @ObjectModel.foreignKey.association: '_Segment'
  Segment,
  ValuationArea,
  AssetClass,
  PostingDate,

  
 //////////////////////////////////////////////////////////////////////
 //  Key Figures with Semantic Tag
 //////////////////////////////////////////////////////////////////////
  @Semantics.currencyCode:true
  CompanyCodeCurrency,
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  BilledRevenueAmtInCoCodeCrcy,
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  RecognizableCostAmtInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  RecognizedRevnAmtInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  RecognizedCOGSAmtInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  RecognizedMarginAmtInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  RevenueAdjustmentAmtInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  COGSAdjustmentAmtInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  DeferredCOGSAmtInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  DeferredRevenueAmtInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  AccruedRevenueAmtInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  AccruedCOGSAmtInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  ImminentLossRsrvAmtInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  SalesDeductReserveAmtInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  UnrlzdCostsReserveAmtInCCCrcy,
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  ProjAndSlsOrdStkAmtInCCCrcy,
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  cast ( MnlContrAccrPnLItmAmtInCCCrcy as fins_mnlcontraccr ) as MnlContrAccrPnLItmAmtInCCCrcy,
  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  DownPaymentAmtInCCCrcy,
  
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @Aggregation.default: #SUM
  SalesDeductionAmtInCoCodeCrcy,
  
 ///////////////////////////////////////////////////////////////////////
 // Associations
 ///////////////////////////////////////////////////////////////////////
  //_Extension,  //View must not expose association _Extension to extension include view E_JOURNALENTRYITEM
  _Division,
  _CustomerSupplierIndustry,
  _ProjectExternalID,
  _WBSElement,
  _WBSElementExternalID,
  _SourceLedger,
  _JournalEntry,
  _CompanyCodeCurrency,
  _BaseUnit,
   @API.element.releaseState: #DEPRECATED
   @API.element.successor: '_GLAccountHierarchy'
  _Hierarchy,
  _GLAccountHierarchy,
  _SemanticTag,
  _CurrentProfitCenter,
  _CustomerSupplierCountry,
  _GLAccountInCompanyCode,
  _ObjectType,
  _SolutionOrder,
  _CompanyCode,
  _FiscalYear,
  _FiscalYearPeriod,
  _Ledger,
  _SalesOrder,
  _SalesOrderItem,
  _SalesDocument,
  _SalesDocumentItem,
  _ServiceContract,
  _ServiceContractItem,
  _ServiceContractNew,
  _ServiceContractItemNew,
  _Customer,
  _CustomerGroup,
  _ShipToParty,
  _Product,
  _SoldProduct,
  _SoldProductGroup,
  _ProfitCenter,
  _ServiceDocumentType,
  _ServiceDocument,
  _ServiceDocumentItem,
  _ServiceDocumentTypeNew,
  _ServiceDocumentNew,
  _ServiceDocumentItemNew,
  _SalesOrganization,
  _BillToParty,
  _BusinessTransactionType,
  _ChartOfAccounts,
  _ControllingArea,
  _DistributionChannel,
  _Equipment,
  _FunctionalArea,
  _GLAccountInChartOfAccounts,
  _PartnerCostCtrActivityType,
  _Plant,
  _ServiceContractType,
  _ServiceContractTypeNew,
  _Order,
  _SalesDistrict,
  _ProviderContract,
  _ProviderContractItem,
  
  _Segment,
  _CostCenter,
  _FinancialAccountType,
  _Supplier,
  _AccountingDocumentType,
  _CurrentCostCenter,
  _LedgerFiscalYearForVariant
 }
where
  GLAccountHierarchy = $parameters.P_GLAccountHierarchy
  and(( AccountAssignmentType = 'PR' and  ControllingObjectClass = 'PA' )
  or (  AccountAssignmentType = 'OR' and  ServiceDocumentType != '' and ServiceDocument != '' )  
  or AccountAssignmentType = 'EO'
  or AccountAssignmentType = 'SV'
  or AccountAssignmentType = 'SC'
  or AccountAssignmentType = 'PD'
)
```
