---
name: I_SERVICEMARGINCUBE
description: "Service Margin - Cube"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICEMARGINCUBE')/$value
semantic_en: "Service Margin - Cube"
semantic_vi: "Service Margin - Cube — CDS view giao diện dựa trên I_GLAcctLineItemSemTagGLAcct."
keywords:
  - "Service Margin - Cube"
  - "service"
  - "margin"
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
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
---
# I_SERVICEMARGINCUBE

**Service Margin - Cube**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICEMARGINCUBE')/$value) |

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
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `Product` |  | |  |  | `CHAR(40)` | Product |
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
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
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
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `WBSElement` |  | |  | `cast( WBSElement as fis_wbs_no_conv preserving type )` | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ResultAnalysisInternalID` |  | |  | `cast( _AcctgServiceDocumentItem.ResultAnalysisInternalID as fins_ma_rev_rec_key preserving type )` | `CHAR(6)` | Revenue Recognition Key |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `InvertedAmtInCoCodeCurrency` |  | |  | `cast(( AmountInCompanyCodeCurrency * -1 ) as fis_hsl_inverted)` | `CURR(23)` | Inverted Amount in Company Code Currency |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `_ObjectType` | | ✓ | | | | |
| `_SolutionOrder` | | ✓ | | | | |
| `_ServiceDocumentTypeNew` | | ✓ | | | | |
| `_ServiceDocumentNew` | | ✓ | | | | |
| `_ServiceDocumentItemNew` | | ✓ | | | | |
| `_ServiceContractTypeNew` | | ✓ | | | | |
| `_ServiceContractNew` | | ✓ | | | | |
| `_ServiceContractItemNew` | | ✓ | | | | |
| `_AcctgServiceDocumentItem` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |
| `_LedgerFiscalYearForLedger` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_ProviderContractItem` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_BusinessTransactionType` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_TimeSheetOvertimeCat` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
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
| `_AcctgServiceDocumentItem` | `I_AcctgServiceDocumentItem` | [0..1] |
| `_CustomerSupplierIndustry` | `I_CustomerSupplierIndustry` | [0..1] |
| `_Extension` | `E_JournalEntryItem` | [1..1] |
| `_LedgerFiscalYearForLedger` | `I_FiscalYearForLedger` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICEMARGINCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SERVICEMARGINCUBE')/$value)*

```abap
@Analytics.internalName:#LOCAL
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #CUBE
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: ['PREAGGR_BEFORE_JOIN', 'NO_JOIN_THRU_AGGR', 'USE_HEX_PLAN']
@EndUserText.label: 'Service Margin - Cube'
define view entity I_ServiceMarginCube as select from I_GLAcctLineItemSemTagGLAcct as I_GLAcctLineItemSemTagGLAcct
  association [0..1] to I_MargAnlysProdAndSrvcObjType as _ObjectType on  $projection.AccountAssignmentType  = _ObjectType.MarginAnalysisObjectType

  association [0..1] to I_ServiceDocument as _SolutionOrder on  $projection.BusinessSolutionOrder  = _SolutionOrder.ServiceDocument
                                                           and  _SolutionOrder.ServiceObjectType   = 'BUS2000172'
                 
 // association [0..1] to I_WBSElement                 as _WBSElementData                on  $projection.WBSElementExternalID = _WBSElementData.WBSElement                                                          
  
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
                                                                                   
  association [0..1] to I_AcctgServiceDocumentItem   as _AcctgServiceDocumentItem   on $projection.ServiceDocumentType = _AcctgServiceDocumentItem.ServiceDocumentType
                                                                                   and $projection.ServiceDocument     = _AcctgServiceDocumentItem.ServiceDocument
                                                                                   and $projection.ServiceDocumentItem = _AcctgServiceDocumentItem.ServiceDocumentItem
 
  association [0..1] to I_CustomerSupplierIndustry as _CustomerSupplierIndustry on  $projection.CustomerSupplierIndustry = _CustomerSupplierIndustry.Industry
                                                                                 
                                                                                   
  association [1..1] to E_JournalEntryItem as _Extension on $projection.SourceLedger       = _Extension.SourceLedger
                                                               and $projection.CompanyCode        = _Extension.CompanyCode
                                                               and $projection.FiscalYear         = _Extension.FiscalYear
                                                               and $projection.AccountingDocument = _Extension.AccountingDocument
                                                               and $projection.LedgerGLLineItem   = _Extension.LedgerGLLineItem
                                                               
  association [0..1] to I_FiscalYearForLedger       as _LedgerFiscalYearForLedger  on  $projection.LedgerFiscalYear = _LedgerFiscalYearForLedger.FiscalYear
                                                                                   and $projection.CompanyCode      = _LedgerFiscalYearForLedger.CompanyCode
                                                                                   and $projection.Ledger           = _LedgerFiscalYearForLedger.Ledger
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

  @Environment.sql.passValue: true
  key GLAccountHierarchy,
  @ObjectModel.foreignKey.association: '_SemanticTag'
  key SemanticTag,
  @Semantics.businessDate.from: true
  key ValidityStartDate,
  @Semantics.businessDate.to: true
  key ValidityEndDate,
  
  @Semantics.fiscal.yearVariant: true
  @ObjectModel.foreignKey.association: '_FiscalYearVariant'
  FiscalYearVariant,
  @Semantics.fiscal.period: true
  FiscalPeriod,
  @Semantics.fiscal.yearPeriod: true
  FiscalYearPeriod,
  @ObjectModel.foreignKey.association: '_ServiceContractNew'
  ServiceContract,
  @ObjectModel.foreignKey.association: '_ServiceContractItemNew'
  ServiceContractItem,
  @ObjectModel.foreignKey.association: '_SolutionOrder'
  BusinessSolutionOrder,
  BusinessSolutionOrderItem,
  @ObjectModel.foreignKey.association: '_ProviderContract'
  ProviderContract,
  @ObjectModel.foreignKey.association: '_ProviderContractItem'
  ProviderContractItem,
  @ObjectModel.foreignKey.association: '_SoldProduct'
  SoldProduct,
  @ObjectModel.foreignKey.association: '_Product'
  Product,
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
  @ObjectModel.foreignKey.association: '_SoldProductGroup'
  SoldProductGroup,
  @ObjectModel.foreignKey.association: '_SalesOrder'
  SalesOrder,
  @ObjectModel.foreignKey.association: '_SalesOrderItem'
  SalesOrderItem,
  @ObjectModel.foreignKey.association: '_SalesDocument'
  SalesDocument,
  @ObjectModel.foreignKey.association: '_SalesOrganization'
  SalesOrganization,
  @ObjectModel.foreignKey.association: '_ShipToParty'
  ShipToParty,
  @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  ChartOfAccounts,
  @ObjectModel.foreignKey.association: '_ControllingArea'
  ControllingArea,
  @ObjectModel.foreignKey.association: '_BaseUnit'
  BaseUnit,
  @DefaultAggregation: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
  Quantity,
  BillableControl,
  @ObjectModel.foreignKey.association: '_DistributionChannel'
  DistributionChannel,
  OrganizationDivision,
  @ObjectModel.foreignKey.association: '_Equipment'
  Equipment,
  @ObjectModel.foreignKey.association: '_FunctionalArea'
  FunctionalArea,
  @ObjectModel.foreignKey.association: '_PartnerCostCtrActivityType'
  PartnerCostCtrActivityType,
  PersonnelNumber,
  @ObjectModel.foreignKey.association: '_Plant'
  Plant,
  @ObjectModel.foreignKey.association: '_CustomerSupplierCountry'
  CustomerSupplierCountry,
  cast( WBSElement as fis_wbs_no_conv preserving type ) as WBSElement,
  
  @ObjectModel.foreignKey.association: '_WBSElementExternalID'
  WBSElementExternalID,
  
  cast( _AcctgServiceDocumentItem.ResultAnalysisInternalID as fins_ma_rev_rec_key preserving type ) as ResultAnalysisInternalID ,
  
  ServicesRenderedDate,
  
  @ObjectModel.foreignKey.association: '_TimeSheetOvertimeCat'
  TimeSheetOvertimeCategory,

  @ObjectModel.foreignKey.association: '_SalesDistrict'
  SalesDistrict,
  Segment,

  GlobalCurrency,

  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  AmountInGlobalCurrency,
 //////////////////////////////////////////////////////////////////////
 //  Key Figures with Semantic Tag
     //////////////////////////////////////////////////////////////////////
  CompanyCodeCurrency,

  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  AmountInCompanyCodeCurrency,

  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  cast(( AmountInCompanyCodeCurrency * -1 ) as fis_hsl_inverted)  as InvertedAmtInCoCodeCurrency,
  
  @ObjectModel.foreignKey.association: '_LedgerFiscalYearForLedger'
  //@Semantics.fiscal.year: true
  LedgerFiscalYear,
      
  
  @ObjectModel.foreignKey.association: '_FinancialAccountType'
  FinancialAccountType,
  @ObjectModel.foreignKey.association: '_CostCenter'
  CostCenter,
  @ObjectModel.foreignKey.association: '_Order'
  OrderID,
  @ObjectModel.foreignKey.association: '_AccountingDocumentType'
  AccountingDocumentType,
  @ObjectModel.foreignKey.association: '_Supplier'
  Supplier,
  PostingDate,
  ValuationArea,
  AssetClass,
  
  ///////////////////////////////////////////////////////////////////////
  // Associations
  ///////////////////////////////////////////////////////////////////////
  //_Extension,  //View must not expose association _Extension to extension include view E_JOURNALENTRYITEM
  _ProjectExternalID,
  _SourceLedger,
  _JournalEntry,
  _CompanyCodeCurrency,
  _BaseUnit,
  _SemanticTag,
  _CurrentProfitCenter,
  _CustomerSupplierCountry,
  _GLAccountInCompanyCode,
  _CompanyCode,
  _FiscalYear,
  _Ledger,
  _ObjectType,
  _SalesOrder,
  _SalesOrderItem,
  _SalesDocument,
  _ServiceContractNew,
  _ServiceContractItemNew,
  _ServiceContractTypeNew,
  _ProviderContract,
  _ProviderContractItem,
  _Customer,
  _CustomerGroup,
  _ShipToParty,
  _SoldProduct,
  _SoldProductGroup,
  _ProfitCenter,
  _SolutionOrder,
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
  _FiscalYearVariant,
  _PartnerCostCtrActivityType,
  _Plant,
  _SalesDistrict,
  
  _TimeSheetOvertimeCat,
  _AcctgServiceDocumentItem,
  _Product,
  //_WBSElementData,
  _WBSElementExternalID,
  _CostCenter,
  _FinancialAccountType,
  _ServiceDocument,
  _Order,
  _CurrentCostCenter,
  _AccountingDocumentType,
  _CustomerSupplierIndustry,
  _Supplier,
  _LedgerFiscalYearForVariant, //Don't use this association
  _LedgerFiscalYearForLedger
 }
where
      ValidityStartDate <= $session.system_date
  and ValidityEndDate   >= $session.system_date
  and ServiceDocument != ''
  and AccountAssignmentType != ''
```
