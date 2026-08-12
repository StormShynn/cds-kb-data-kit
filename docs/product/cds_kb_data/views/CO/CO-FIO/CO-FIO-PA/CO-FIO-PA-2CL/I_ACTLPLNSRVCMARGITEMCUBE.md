---
name: I_ACTLPLNSRVCMARGITEMCUBE
description: "This CDS view provides a comprehensive analytical cube for analyzing actual and planned service margin items. It integrates various data sources and associations to offer a detailed view of financial and service-related data, enabling in-depth analysis of service margins. This CDS view provides the data to answer the following business questions: What are the actual and planned service margins for specific service documents and contracts? How do service margins vary across different fiscal periods and years? What is the impact of different account assignment types on service margins? How do service margins correlate with specific business solution orders and items? What are the financial implications of service margins in different currencies, such as global and company code currencies? How do service margins relate to specific customers, suppliers, and industries? What is the distribution of service margins across various sales organizations, distribution channels, and sales districts? How do service margins align with specific products, equipment, and projects? What are the quantities and valuation quantities associated with service margins, and how do they relate to specific units of measure? How do service margins interact with different financial account types, cost centres, and profit centres? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTLPLNSRVCMARGITEMCUBE')/$value
semantic_en: "This CDS view provides a comprehensive analytical cube for analyzing actual and planned service margin items. It integrates various data sources and associations to offer a detailed view of financial and service-related data, enabling in-depth analysis of service margins. This CDS view provides the data to answer the following business questions: What are the actual and planned service margins for specific service documents and contracts? How do service margins vary across different fiscal periods and years? What is the impact of different account assignment types on service margins? How do service margins correlate with specific business solution orders and items? What are the financial implications of service margins in different currencies, such as global and company code currencies? How do service margins relate to specific customers, suppliers, and industries? What is the distribution of service margins across various sales organizations, distribution channels, and sales districts? How do service margins align with specific products, equipment, and projects? What are the quantities and valuation quantities associated with service margins, and how do they relate to specific units of measure? How do service margins interact with different financial account types, cost centres, and profit centres? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Actual and Plan Service Marg Item - Cube — CDS view giao diện dựa trên I_ActualPlanJournalEntryItem."
keywords:
  - "Actual and Plan Service Marg Item - Cube"
  - "actual"
  - "and"
  - "plan"
  - "service"
  - "marg"
  - "item"
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
  - account
  - bo:businesspartner
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - contract
  - customer
  - document
  - interface-view
  - lob:controlling
  - lob:finance
  - order
  - plan
  - product
  - project
  - supplier
---
# I_ACTLPLNSRVCMARGITEMCUBE

**This CDS view provides a comprehensive analytical cube for analyzing actual and planned service margin items. It integrates various data sources and associations to offer a detailed view of financial and service-related data, enabling in-depth analysis of service margins. This CDS view provides the data to answer the following business questions: What are the actual and planned service margins for specific service documents and contracts? How do service margins vary across different fiscal periods and years? What is the impact of different account assignment types on service margins? How do service margins correlate with specific business solution orders and items? What are the financial implications of service margins in different currencies, such as global and company code currencies? How do service margins relate to specific customers, suppliers, and industries? What is the distribution of service margins across various sales organizations, distribution channels, and sales districts? How do service margins align with specific products, equipment, and projects? What are the quantities and valuation quantities associated with service margins, and how do they relate to specific units of measure? How do service margins interact with different financial account types, cost centres, and profit centres? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTLPLNSRVCMARGITEMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | ✓ | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` | ✓ | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `PostingDate` |  | |  | `cast(PostingDate as budat preserving type )` | `DATS(8)` | Posting Date in the Document |
| `FiscalYearQuarter` |  | | `_FiscalCalendarDate` | `FiscalYearQuarter` | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `BusinessSolutionOrderItem` |  | |  |  | `NUMC(6)` | Solution Order Item |
| `ProviderContract` |  | |  |  | `CHAR(20)` | Provider Contract |
| `ProviderContractItem` |  | |  |  | `NUMC(6)` | Provider Contract Item |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `ServiceContract` |  | |  |  | `CHAR(10)` | Service Contract ID |
| `ServiceContractItem` |  | |  |  | `NUMC(6)` | Service Contract Item ID |
| `ServiceContractType` |  | |  |  | `CHAR(4)` | Service Contract Type |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `ProjectExternalID` |  | |  | `cast( ProjectExternalID as ps_pspid_edit preserving type )` | `CHAR(24)` | Project Number (External) Edited |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | |  |  | `NUMC(6)` | Service Document Item ID |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `OldGLAccount` |  | |  | `cast( GLAccount as fis_racct preserving type )` | `CHAR(10)` | G/L Account |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostSourceUnit` |  | |  | `cast( CostSourceUnit as rvunit preserving type )` | `UNIT(3)` | Unit of Measure for Valuation Quantity |
| `ValuationQuantity` |  | |  |  | `QUAN(23)` | Valuation Quantity |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(23)` | Quantity |
| `BillableControl` |  | |  |  | `CHAR(2)` | Billable Control |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `WBSElement` |  | |  | `cast( WBSElement as fis_wbs_no_conv preserving type )` | `CHAR(24)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `ResultAnalysisInternalID` |  | |  | `cast( _AcctgServiceDocumentItem.ResultAnalysisInternalID as fins_ma_rev_rec_key preserving type )` | `CHAR(6)` | Revenue Recognition Key |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `ControllingObjectClass` |  | |  |  | `CHAR(2)` | Controlling Object Class |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
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
| `_OldGLAccountInChartOfAccounts` | | ✓ | | | | |
| `_AcctgServiceDocumentItem` | | ✓ | | | | |
| `_CustomerSupplierIndustry` | | ✓ | | | | |
| `_LedgerFiscalYearForLedger` | | ✓ | | | | |
| `_FiscalCalendarDate` | | ✓ | | | | |
| `_ProjectExternalID` | | ✓ | | | | |
| `_SourceLedger` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_CostSourceUnit` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CustomerSupplierCountry` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_SalesDocumentItem` | | ✓ | | | | |
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
| `_FunctionalArea` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |
| `_PartnerCostCtrActivityType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
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
| `_OldGLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_AcctgServiceDocumentItem` | `I_AcctgServiceDocumentItem` | [0..1] |
| `_CustomerSupplierIndustry` | `I_CustomerSupplierIndustry` | [0..1] |
| `_Extension_acdoca` | `E_JournalEntryItem` | [1..1] |
| `_Extension_acdocp` | `E_FinancialPlanningEntryItem` | [1..1] |
| `_LedgerFiscalYearForLedger` | `I_FiscalYearForLedger` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTLPLNSRVCMARGITEMCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTLPLNSRVCMARGITEMCUBE')/$value)*

```abap
@Analytics.technicalName: 'IACTLPLNSRVCMITM' 
@Analytics.internalName:#LOCAL
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
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
@EndUserText.label: 'Actual and Plan Service Marg Item - Cube'
define view entity I_ActlPlnSrvcMargItemCube as select from I_ActualPlanJournalEntryItem as I_ActualPlanJournalEntryItem
//I_ActualPlanJrnlEntryItemCube  as I_ActualPlanJrnlEntryItemCube
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
  association[0..1] to I_GLAccountInChartOfAccounts   as _OldGLAccountInChartOfAccounts on $projection.ChartOfAccounts            = _OldGLAccountInChartOfAccounts.ChartOfAccounts and
                                                                                         $projection.OldGLAccount               = _OldGLAccountInChartOfAccounts.GLAccount
      
  association [0..1] to I_AcctgServiceDocumentItem   as _AcctgServiceDocumentItem   on $projection.ServiceDocumentType = _AcctgServiceDocumentItem.ServiceDocumentType
                                                                                   and $projection.ServiceDocument     = _AcctgServiceDocumentItem.ServiceDocument
                                                                                   and $projection.ServiceDocumentItem = _AcctgServiceDocumentItem.ServiceDocumentItem
 
  association [0..1] to I_CustomerSupplierIndustry as _CustomerSupplierIndustry on  $projection.CustomerSupplierIndustry = _CustomerSupplierIndustry.Industry
 
  association [1..1] to E_JournalEntryItem as _Extension_acdoca on $projection.SourceLedger       = _Extension_acdoca.SourceLedger
                                                               and $projection.CompanyCode        = _Extension_acdoca.CompanyCode
                                                               and $projection.FiscalYear         = _Extension_acdoca.FiscalYear
                                                               and $projection.AccountingDocument = _Extension_acdoca.AccountingDocument
                                                               and $projection.LedgerGLLineItem   = _Extension_acdoca.LedgerGLLineItem
                                                         
  association [1..1] to E_FinancialPlanningEntryItem   as _Extension_acdocp              on  $projection.FinancialPlanningReqTransSqnc = _Extension_acdocp.FinancialPlanningReqTransSqnc
                                                                                         and $projection.FinancialPlanningDataPacket   = _Extension_acdocp.FinancialPlanningDataPacket
                                                                                         and $projection.FinancialPlanningEntryItem    = _Extension_acdocp.FinancialPlanningEntryItem

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
  
  key FinancialPlanningReqTransSqnc,
  key FinancialPlanningDataPacket,
  key ActualPlanJournalEntryItem,
  
  cast(PostingDate as budat preserving type ) as PostingDate,
  
  _FiscalCalendarDate.FiscalYearQuarter  as FiscalYearQuarter,
  
  LedgerGLLineItem,
  FinancialPlanningEntryItem,
 
  @ObjectModel.foreignKey.association: '_SolutionOrder'
  BusinessSolutionOrder,
  BusinessSolutionOrderItem,
  ProviderContract,
  ProviderContractItem,
  
  ActualPlanCode,
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
  @ObjectModel.foreignKey.association: '_ServiceContractTypeNew'
  ServiceContractType,
  @ObjectModel.foreignKey.association: '_ObjectType'
  AccountAssignmentType,
  @ObjectModel.foreignKey.association: '_ProjectExternalID'
  cast( ProjectExternalID as ps_pspid_edit preserving type ) as ProjectExternalID,
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
  //_GLAccountInChartOfAccounts._GLAccountType,
  //@ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts._GLAccountType'
  //_GLAccountInChartOfAccounts.GLAccountType,
  @ObjectModel.foreignKey.association: '_OldGLAccountInChartOfAccounts'
  cast( GLAccount as fis_racct preserving type ) as OldGLAccount,
  @ObjectModel.foreignKey.association: '_CustomerSupplierIndustry'
  CustomerSupplierIndustry,
  @ObjectModel.foreignKey.association: '_SoldProductGroup'
  SoldProductGroup,
  @ObjectModel.foreignKey.association: '_SoldProduct'
  SoldProduct,
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
  @ObjectModel.foreignKey.association: '_CostSourceUnit'
  cast( CostSourceUnit as rvunit preserving type ) as CostSourceUnit,
  @DefaultAggregation: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'CostSourceUnit'} }
  ValuationQuantity,
  @ObjectModel.foreignKey.association: '_BaseUnit'
  BaseUnit,
  @DefaultAggregation: #SUM
  @Semantics: { quantity : {unitOfMeasure: 'BaseUnit'} }
  Quantity,
  BillableControl,
  @ObjectModel.foreignKey.association: '_DistributionChannel'
  DistributionChannel,
  OrganizationDivision,
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
  @ObjectModel.foreignKey.association: '_Product'
  Product,
  @ObjectModel.foreignKey.association: '_Equipment'
  Equipment,
  ServicesRenderedDate,
  TimeSheetOvertimeCategory,
  
  @ObjectModel.foreignKey.association: '_SalesDistrict'
  SalesDistrict,
  Segment,
  PlanningCategory,
  ControllingObjectClass,
  
  GlobalCurrency,
  
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
  //cast ( (  AmountInGlobalCurrency * -1 ) as fis_ksl ) as AmountInGlobalCurrency,
  AmountInGlobalCurrency,

  CompanyCodeCurrency,
  
  @DefaultAggregation: #SUM
  @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
  //cast ( (AmountInCompanyCodeCurrency * -1 ) as fis_hsl ) as AmountInCompanyCodeCurrency,
  AmountInCompanyCodeCurrency,
 
  @ObjectModel.foreignKey.association: '_LedgerFiscalYearForLedger'
  //@Semantics.fiscal.year: true
  LedgerFiscalYear,
  
  @ObjectModel.foreignKey.association: '_Supplier'
  Supplier,
  @ObjectModel.foreignKey.association: '_CostCenter'
  CostCenter,
  @ObjectModel.foreignKey.association: '_FinancialAccountType'
  FinancialAccountType,
  @ObjectModel.foreignKey.association: '_Order'
  OrderID,
  @ObjectModel.foreignKey.association: '_AccountingDocumentType'
  AccountingDocumentType,
  ValuationArea,
  AssetClass,
  
  //Just for Authorization Check!!!
  //Customer.CustomerAccountGroup,
  //_Customer.AuthorizationGroup,
  
///////////////////////////////////////////////////////////////////////
// Associations
///////////////////////////////////////////////////////////////////////
//_Extension,  //View must not expose association _Extension to extension include view E_JOURNALENTRYITEM
  _FiscalCalendarDate,
  _SolutionOrder,
  _ProjectExternalID,
  _SourceLedger,
  _JournalEntry,
  _CompanyCodeCurrency,
  _BaseUnit,
  _CostSourceUnit,
  _CurrentProfitCenter,
  _CustomerSupplierCountry,
  _GLAccountInCompanyCode,
  _CompanyCode,
  _FiscalYear,
  _Ledger,
  _SalesOrder,
  _SalesOrderItem,
  _SalesDocument,
  _SalesDocumentItem,
  _ServiceContractTypeNew,
  _ServiceContractNew,
  _ServiceContractItemNew,
  _ServiceDocumentTypeNew,
  _ServiceDocumentNew,
  _ServiceDocumentItemNew,
  _ObjectType,
  _Customer,
  _CustomerGroup,
  _ShipToParty,
  _SoldProduct,
  _SoldProductGroup,
  _ProfitCenter,
  _SalesOrganization,
  _BillToParty,
  _BusinessTransactionType,
  _ChartOfAccounts,
  _ControllingArea,
  _DistributionChannel,
  _FunctionalArea,
  _GLAccountInChartOfAccounts,
  _OldGLAccountInChartOfAccounts,
  _FiscalYearVariant,
  _PartnerCostCtrActivityType,
  _Plant,
  _SalesDistrict,
  
  _AcctgServiceDocumentItem,
  _Equipment,
  _Product,
  _WBSElementExternalID,
  _FinancialAccountType,
  _CostCenter,
  _CurrentCostCenter,
  _ServiceDocument,
  _Order,
  _AccountingDocumentType,
  _CustomerSupplierIndustry,
  _Supplier,
  _LedgerFiscalYearForVariant, //Don't use this association
  _LedgerFiscalYearForLedger
}
where ServiceDocument != ''
  and AccountAssignmentType != ''
  and (   _GLAccountInChartOfAccounts.GLAccountType = 'P' or
          _GLAccountInChartOfAccounts.GLAccountType = 'S' )
```
