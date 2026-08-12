---
name: I_ACTUALPLANSTATKEYFIGSEMTAG
description: "This CDS view is designed to provide a comprehensive analytical framework for financial planning and actuals data, specifically focusing on statistical key figures and their association with semantic tags. It integrates various financial dimensions such as ledger, company code, fiscal year, and period, along with statistical key figures and semantic tags, to enable detailed analysis and reporting. This CDS view provides the data to answer the following business questions: How do actual and planned financial figures compare across different fiscal periods and company codes? What are the statistical key figures associated with specific semantic tags, and how do they impact financial planning? How can financial data be analyzed in terms of cost centers, profit centers, and controlling areas? What is the distribution of financial amounts across different currencies and units of measure? How do financial planning categories and semantic tags correlate with actual financial outcomes? What are the detailed ledger and accounting document entries related to specific financial planning and statistical key figures? How can financial data be aggregated and analyzed using various dimensions such as GL account hierarchies and functional areas? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTUALPLANSTATKEYFIGSEMTAG')/$value
semantic_en: "This CDS view is designed to provide a comprehensive analytical framework for financial planning and actuals data, specifically focusing on statistical key figures and their association with semantic tags. It integrates various financial dimensions such as ledger, company code, fiscal year, and period, along with statistical key figures and semantic tags, to enable detailed analysis and reporting. This CDS view provides the data to answer the following business questions: How do actual and planned financial figures compare across different fiscal periods and company codes? What are the statistical key figures associated with specific semantic tags, and how do they impact financial planning? How can financial data be analyzed in terms of cost centers, profit centers, and controlling areas? What is the distribution of financial amounts across different currencies and units of measure? How do financial planning categories and semantic tags correlate with actual financial outcomes? What are the detailed ledger and accounting document entries related to specific financial planning and statistical key figures? How can financial data be aggregated and analyzed using various dimensions such as GL account hierarchies and functional areas? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Semantic Tag with Statistical Key Figure — CDS view giao diện dựa trên P_ACTPLNSTATKEYFIGITEMSEMTAG."
keywords:
  - "Semantic Tag with Statistical Key Figure"
  - "semantic"
  - "tag"
  - "with"
  - "statistical"
  - "key"
  - "figure"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "period"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-GL-IS-2CL
  - document
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - plan
---
# I_ACTUALPLANSTATKEYFIGSEMTAG

**This CDS view is designed to provide a comprehensive analytical framework for financial planning and actuals data, specifically focusing on statistical key figures and their association with semantic tags. It integrates various financial dimensions such as ledger, company code, fiscal year, and period, along with statistical key figures and semantic tags, to enable detailed analysis and reporting. This CDS view provides the data to answer the following business questions: How do actual and planned financial figures compare across different fiscal periods and company codes? What are the statistical key figures associated with specific semantic tags, and how do they impact financial planning? How can financial data be analyzed in terms of cost centers, profit centers, and controlling areas? What is the distribution of financial amounts across different currencies and units of measure? How do financial planning categories and semantic tags correlate with actual financial outcomes? What are the detailed ledger and accounting document entries related to specific financial planning and statistical key figures? How can financial data be aggregated and analyzed using various dimensions such as GL account hierarchies and functional areas? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTUALPLANSTATKEYFIGSEMTAG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | ✓ | |  |  | `NUMC(3)` | Fiscal Period |
| `StatisticalKeyFigure` | ✓ | |  |  | `CHAR(6)` | Statistical Key Figure |
| `SemanticTag` | ✓ | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `StatisticalKeyFigureItem` | ✓ | |  |  | `CHAR(22)` | Statistical Key Figure Item |
| `ValidityStartDate` | ✓ | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid-From Date |
| `GLAccountHierarchy` | ✓ | |  |  | `CHAR(42)` | Financial Statement Version |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | ✓ | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `FinancialPlanningEntryItem` | ✓ | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `StatisticalKeyFigureCategory` |  | |  |  | `CHAR(1)` | Statistical Key Figure Category |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `StatKeyFigurePlanningCategory` |  | |  | `cast (SKFPlanningCategory as fcom_skf_category)` | `CHAR(10)` | Statistical Key Figure Plan Category |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `ActualPlanStatKeyFigureCode` |  | |  |  | `CHAR(2)` | Actual Plan Code |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `InvertedAmtInCoCodeCurrency` |  | |  |  | `CURR(23)` | Inverted Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `InvertedAmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Inverted Amount in Global Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `StatisticalKeyFigQtyUnit` |  | |  |  | `UNIT(3)` | Statistical Key Figure Quantity Unit |
| `StatisticalKeyFigureQuantity` |  | |  |  | `QUAN(23)` | Statistical Key Figure Quantity |
| `ProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `PartnerProjectProfileCode` |  | |  |  | `CHAR(7)` | Project Profile |
| `AccountingDocumentHeaderText` |  | |  |  | `CHAR(25)` | Document Header Text |
| `SemanticTagGroup` |  | |  |  | `CHAR(4)` | Semantic Tag Group |
| `CreationTime` |  | |  |  | `TIMS(6)` | Creation Time |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | User that created the journal entry |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `AccountAssignment` |  | |  |  | `CHAR(30)` | Account Assignment |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Object Type |
| `PartnerAccountAssignment` |  | |  |  | `CHAR(30)` | Partner Account Assignment |
| `PartnerAccountAssignmentType` |  | |  |  | `CHAR(2)` | Partner Account Assignment Type |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `ControllingBusTransacType` |  | |  |  | `CHAR(4)` | FI-SL Business Transaction |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Order Number |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_Ledger` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_FreeDefinedCurrency1` | | ✓ | | | | |
| `_PlanningCategory` | | ✓ | | | | |
| `_StatKeyFigurePlanningCategory` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_StatisticalKeyFigure` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_FiscalPeriod` | | ✓ | | | | |
| `_Hierarchy` | | ✓ | | | | |
| `_FinStatisticalKeyFigureItem` | | ✓ | | | | |
| `_ActlPlnLineItemSemTagGLAcc` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_PartnerFunctionalArea` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension_acdoca` | `E_JournalEntryItem` | [1..1] |
| `_Extension_acdocp` | `E_FinancialPlanningEntryItem` | [1..1] |
| `_GLAccountInChartOfAccounts` | `I_GLAccountInChartOfAccounts` | [0..1] |
| `_ChartOfAccounts` | `I_ChartOfAccounts` | [1] |
| `_Ledger` | `I_Ledger` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_GlobalCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_FreeDefinedCurrency1` | `I_Currency` | [0..1] |
| `_PlanningCategory` | `I_PlanningCategory` | [0..1] |
| `_StatKeyFigurePlanningCategory` | `I_PlanningCategory` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_StatisticalKeyFigure` | `I_StatisticalKeyFigure` | [0..1] |
| `_SemanticTag` | `I_SemanticTag` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_FiscalPeriod` | `I_FiscalYearPeriodForCmpnyCode` | [0..1] |
| `_Hierarchy` | `I_GLAccountHierarchy` | [0..*] |
| `_FinStatisticalKeyFigureItem` | `I_FinStatisticalKeyFigureItem` | [0..1] |
| `_ActlPlnLineItemSemTagGLAcc` | `I_ActlPlnLineItemSemTagGLAcct` | [0..1] |
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_PartnerFunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_ServiceDocument` | `I_SrvcDocByDocumentType` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_AccountingDocumentType` | `I_AccountingDocumentType` | [0..1] |
| `_GLAccountInCompanyCode` | `I_GLAccountInCompanyCode` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTUALPLANSTATKEYFIGSEMTAG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ACTUALPLANSTATKEYFIGSEMTAG')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIACTPLNSEMTAG'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataCategory: #CUBE
@VDM.viewType: #COMPOSITE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.allowExtensions:true
@Analytics.internalName:#LOCAL 
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.ignorePropagatedAnnotations:true 
@EndUserText.label: 'Semantic Tag with Statistical Key Figure'
@ObjectModel.supportedCapabilities:[#ANALYTICAL_PROVIDER,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Consumption.dbHints:  ['NO_SUBPLAN_SHARING']
define view I_ActualPlanStatKeyFigSemTag as select from P_ACTPLNSTATKEYFIGITEMSEMTAG as P_ACTPLNSTATKEYFIGITEMSEMTAG

 association [1..1] to E_JournalEntryItem             as _Extension_acdoca     on  $projection.SourceLedger       = _Extension_acdoca.SourceLedger
                                                                                   and $projection.CompanyCode        = _Extension_acdoca.CompanyCode
                                                                                   and $projection.FiscalYear         = _Extension_acdoca.FiscalYear
                                                                                   and $projection.AccountingDocument = _Extension_acdoca.AccountingDocument
                                                                                   and $projection.LedgerGLLineItem   = _Extension_acdoca.LedgerGLLineItem
  association [1..1] to E_FinancialPlanningEntryItem   as _Extension_acdocp    on  $projection.FinancialPlanningReqTransSqnc = _Extension_acdocp.FinancialPlanningReqTransSqnc
                                                                                   and $projection.FinancialPlanningDataPacket   = _Extension_acdocp.FinancialPlanningDataPacket
                                                                                   and $projection.FinancialPlanningEntryItem    = _Extension_acdocp.FinancialPlanningEntryItem
                                                                                   
//  association [1..1] to E_StatisticalKeyFigureItem   as _Extension_finsskf    on  $projection.StatisticalKeyFigure = _Extension_finsskf.StatisticalKeyFigure
//                                                                                   and $projection.StatisticalKeyFigureItem   = _Extension_finsskf.StatisticalKeyFigureItem
//                                                                                   and $projection.ValidityStartDate    = _Extension_finsskf.ValidityStartDate   
                                                                                                                                                                 
   association [0..1] to I_GLAccountInChartOfAccounts   as _GLAccountInChartOfAccounts    on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                         and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount
  association [1]    to I_ChartOfAccounts              as _ChartOfAccounts               on  $projection.ChartOfAccounts = _ChartOfAccounts.ChartOfAccounts
  association [0..1] to I_Ledger                       as _Ledger               on  $projection.Ledger = _Ledger.Ledger
  association [0..1] to I_CompanyCode                  as _CompanyCode          on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_UnitOfMeasure                as _UnitOfMeasure        on  $projection.StatisticalKeyFigQtyUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_Currency                     as _GlobalCurrency       on  $projection.GlobalCurrency = _GlobalCurrency.Currency
  association [1..1] to I_Currency                     as _CompanyCodeCurrency  on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_Currency                     as _FreeDefinedCurrency1 on  $projection.FreeDefinedCurrency1 = _FreeDefinedCurrency1.Currency
  association [0..1] to I_PlanningCategory             as _PlanningCategory     on  $projection.PlanningCategory = _PlanningCategory.PlanningCategory
  association [0..1] to I_PlanningCategory             as _StatKeyFigurePlanningCategory  on  $projection.StatKeyFigurePlanningCategory = _StatKeyFigurePlanningCategory.PlanningCategory
  association [0..1] to I_ControllingArea              as _ControllingArea      on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..*] to I_CostCenter                   as _CostCenter           on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                                and $projection.CostCenter      = _CostCenter.CostCenter
  association [0..*] to I_ProfitCenter                 as _ProfitCenter         on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..1] to I_StatisticalKeyFigure         as _StatisticalKeyFigure on  $projection.ControllingArea      = _StatisticalKeyFigure.ControllingArea
                                                                                and $projection.StatisticalKeyFigure = _StatisticalKeyFigure.StatisticalKeyFigure
  //association [0..1] to I_StatisticalKeyFigureCat as _StatisticalKeyFigureCat on  $projection.StatisticalKeyFigureCategory = _StatisticalKeyFigureCat.StstcKeyFigCategory
  association [0..1] to I_SemanticTag                  as _SemanticTag          on  $projection.SemanticTag = _SemanticTag.SemanticTag
  //association [0..1] to I_SemanticTagGroup as _SemanticTagGroup                 on $projection.SemanticTagGroup = _SemanticTagGroup.SemanticTagGroup
  association [0..1] to I_FiscalYearForCompanyCode     as _FiscalYear           on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                                and $projection.CompanyCode = _FiscalYear.CompanyCode
  association [0..1] to I_FiscalYearPeriodForCmpnyCode as _FiscalPeriod         on  $projection.FiscalYear   = _FiscalPeriod.FiscalYear
                                                                                and $projection.FiscalPeriod = _FiscalPeriod.FiscalPeriod
                                                                                and $projection.CompanyCode  = _FiscalPeriod.CompanyCode
  //association [0..*] to I_FinancialStatementHierarchy  as _Hierarchy           on  $projection.GLAccountHierarchy = _Hierarchy.GLAccountHierarchy  
  association [0..*] to I_GLAccountHierarchy  as _Hierarchy           on  $projection.GLAccountHierarchy = _Hierarchy.GLAccountHierarchy  
   
   association[0..1] to I_FinStatisticalKeyFigureItem   as _FinStatisticalKeyFigureItem on $projection.Ledger =   _FinStatisticalKeyFigureItem.Ledger
                                                                                        and $projection.CompanyCode =  _FinStatisticalKeyFigureItem.CompanyCode
                                                                                        and $projection.FiscalYear =  _FinStatisticalKeyFigureItem.FiscalYear
                                                                                        and $projection.FiscalPeriod  =  _FinStatisticalKeyFigureItem.FiscalPeriod 
                                                                                        and $projection.StatisticalKeyFigureItem =  _FinStatisticalKeyFigureItem.StatisticalKeyFigureItem
                                                                                        and $projection.StatisticalKeyFigure =  _FinStatisticalKeyFigureItem.StatisticalKeyFigure
   
   association[0..1] to I_ActlPlnLineItemSemTagGLAcct   as _ActlPlnLineItemSemTagGLAcc on $projection.Ledger =   _ActlPlnLineItemSemTagGLAcc.Ledger
                                                                                        and $projection.CompanyCode =  _ActlPlnLineItemSemTagGLAcc.CompanyCode
                                                                                        and $projection.SourceLedger =  _ActlPlnLineItemSemTagGLAcc.SourceLedger
                                                                                        and $projection.FiscalYear =  _ActlPlnLineItemSemTagGLAcc.FiscalYear
                                                                                        and $projection.FiscalPeriod  =  _ActlPlnLineItemSemTagGLAcc.FiscalPeriod 
                                                                                        and $projection.AccountingDocument =  _ActlPlnLineItemSemTagGLAcc.AccountingDocument
                                                                                        and $projection.LedgerGLLineItem =  _ActlPlnLineItemSemTagGLAcc.LedgerGLLineItem 
                                                                                        and $projection.FinancialPlanningReqTransSqnc =  _ActlPlnLineItemSemTagGLAcc.FinancialPlanningReqTransSqnc
                                                                                        and $projection.FinancialPlanningDataPacket =  _ActlPlnLineItemSemTagGLAcc.FinancialPlanningDataPacket
                                                                                        and $projection.FinancialPlanningEntryItem =  _ActlPlnLineItemSemTagGLAcc.FinancialPlanningEntryItem
                                                                                        and $projection.GLAccountHierarchy =  _ActlPlnLineItemSemTagGLAcc.GLAccountHierarchy 
                                                                                        and $projection.SemanticTag =  _ActlPlnLineItemSemTagGLAcc.SemanticTag
                                                                                        and $projection.ValidityStartDate =  _ActlPlnLineItemSemTagGLAcc.ValidityStartDate
                                                                                        and $projection.ValidityEndDate =  _ActlPlnLineItemSemTagGLAcc.ValidityEndDate        
association [0..1]  to I_FunctionalArea               as _FunctionalArea                on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
association [0..1] to I_FunctionalArea               as _PartnerFunctionalArea         on  $projection.PartnerFunctionalArea = _PartnerFunctionalArea.FunctionalArea
//association [0..*]  to I_FunctionalAreaText           as _FunctionalAreaText            on  $projection.FunctionalArea = _FunctionalAreaText.FunctionalArea                                                                                                                                                           

/* new associations for auth check */
association[0..1] to I_ProfitCenter                as _CurrentProfitCenter         on $projection.ControllingArea            = _CurrentProfitCenter.ControllingArea and
                                                                                      $projection.ProfitCenter               = _CurrentProfitCenter.ProfitCenter and
                                                                                      _CurrentProfitCenter.ValidityStartDate <= $session.system_date and
                                                                                      _CurrentProfitCenter.ValidityEndDate   >= $session.system_date
association[0..1] to I_CostCenter                   as _CurrentCostCenter          on $projection.ControllingArea            = _CurrentCostCenter.ControllingArea and
                                                                                      $projection.CostCenter                 = _CurrentCostCenter.CostCenter and
                                                                                      _CurrentCostCenter.ValidityStartDate   <= $session.system_date and
                                                                                      _CurrentCostCenter.ValidityEndDate     >= $session.system_date
association [0..1] to I_SrvcDocByDocumentType        as _ServiceDocument           on  $projection.ServiceDocumentType        = _ServiceDocument.ServiceDocumentType
                                                                                   and $projection.ServiceDocument            = _ServiceDocument.ServiceDocument

association [0..1] to I_Supplier                    as _Supplier                   on  $projection.Supplier                  = _Supplier.Supplier 
association [0..1] to I_Customer                    as _Customer                   on $projection.Customer                   = _Customer.Customer
association [0..1] to I_AccountingDocumentType      as _AccountingDocumentType     on  $projection.AccountingDocumentType    = _AccountingDocumentType.AccountingDocumentType
association[0..1] to I_GLAccountInCompanyCode       as _GLAccountInCompanyCode     on $projection.CompanyCode                = _GLAccountInCompanyCode.CompanyCode
                                                                                  and $projection.GLAccount                  = _GLAccountInCompanyCode.GLAccount
association[0..1] to I_Order                     as _Order                   on $projection.OrderID                      = _Order.OrderID
association[0..1] to I_SalesDocument             as _SalesDocument           on $projection.SalesDocument                = _SalesDocument.SalesDocument                                                                                                                                                     

{
     
      @ObjectModel.foreignKey.association: '_Ledger'
  key Ledger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key FiscalYear,
      @ObjectModel.foreignKey.association: '_FiscalPeriod'
  key FiscalPeriod,
  @ObjectModel.foreignKey.association: '_StatisticalKeyFigure'
  key StatisticalKeyFigure,
  @ObjectModel.foreignKey.association: '_SemanticTag'
  key SemanticTag,
  key StatisticalKeyFigureItem,
  key ValidityStartDate,
  key ValidityEndDate,
  @ObjectModel.foreignKey.association: '_Hierarchy'
  key GLAccountHierarchy,
  key LedgerGLLineItem,
  key FinancialPlanningReqTransSqnc,
  key FinancialPlanningDataPacket,
  key FinancialPlanningEntryItem,
  key SourceLedger,
  key AccountingDocument,
  
  StatisticalKeyFigureCategory,
  
  @ObjectModel.foreignKey.association: '_FunctionalArea'
  FunctionalArea,
  @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
  PartnerFunctionalArea,
  PostingDate,
  
      @ObjectModel.foreignKey.association: '_CostCenter'
  CostCenter,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
ProfitCenter,
      @ObjectModel.foreignKey.association: '_ControllingArea'
  ControllingArea,
      
      @ObjectModel.foreignKey.association: '_StatKeyFigurePlanningCategory'
      cast (SKFPlanningCategory as fcom_skf_category) as StatKeyFigurePlanningCategory,
     // SKFACDOC,
//      @ObjectModel.foreignKey.association: '_FiscalYearPeriod'
      @Semantics.fiscal.yearPeriod: true
      FiscalYearPeriod,
      @Semantics.fiscal.yearVariant: true
      FiscalYearVariant,
      //key StatisticalKeyFigureItem,
      // @ObjectModel.foreignKey.association: '_StatisticalKeyFigureCat'
      // StatisticalKeyFigureCategory,
      
      @ObjectModel.foreignKey.association: '_PlanningCategory'
      PlanningCategory,
      ActualPlanCode,
      ActualPlanStatKeyFigureCode,
      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      CompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      //sum(AmountInCompanyCodeCurrency) as AmountInCompanyCodeCurrency,
      AmountInCompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      //sum(InvertedAmtInCoCodeCurrency) as InvertedAmtInCoCodeCurrency,
      InvertedAmtInCoCodeCurrency,
      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      GlobalCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      //sum(AmountInGlobalCurrency) as AmountInGlobalCurrency ,
      AmountInGlobalCurrency ,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      //sum(InvertedAmountInGlobalCurrency)  as InvertedAmountInGlobalCurrency,
      InvertedAmountInGlobalCurrency,
      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_FreeDefinedCurrency1'
      FreeDefinedCurrency1,
       @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'FreeDefinedCurrency1'} }
      //sum(AmountInFreeDefinedCurrency1) as AmountInFreeDefinedCurrency1,
      AmountInFreeDefinedCurrency1,
      @Semantics.unitOfMeasure:true
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      StatisticalKeyFigQtyUnit,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'StatisticalKeyFigQtyUnit'} }
     //sum( StatisticalKeyFigureQuantity) as StatisticalKeyFigureQuantity,
     StatisticalKeyFigureQuantity,
    
     ProjectProfileCode,
     PartnerProjectProfileCode,
     AccountingDocumentHeaderText,
     // @ObjectModel.foreignKey.association: '_SemanticTagGroup'
     SemanticTagGroup,
     CreationTime,
     CreationDate,
     AccountingDocCreatedByUser,
     PersonnelNumber,
     @ObjectModel.foreignKey.association: '_ChartOfAccounts'
     ChartOfAccounts,
     @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
     GLAccount,
     AccountAssignment,
     AccountAssignmentType,
     PartnerAccountAssignment,
     PartnerAccountAssignmentType,
     
     _GLAccountInChartOfAccounts,
     _ChartOfAccounts,
      _CompanyCode,
      _Ledger,
      _UnitOfMeasure,
      _CompanyCodeCurrency,
      _GlobalCurrency,
      _PlanningCategory,
      _ControllingArea,
      _CostCenter,
      _ProfitCenter,
      _StatisticalKeyFigure,
      // _StatisticalKeyFigureCat,
      _SemanticTag,
      _FiscalYear,
      _FiscalPeriod,
      _StatKeyFigurePlanningCategory,
      _FreeDefinedCurrency1,
      _Hierarchy,
      _FinStatisticalKeyFigureItem,
      _ActlPlnLineItemSemTagGLAcc,
      _FunctionalArea,
      _PartnerFunctionalArea,

     // _ActlPlnLineItemSemTagGLAcc._GLAccountInChartOfAccounts,
    //  _ActlPlnLineItemSemTagGLAcc._ChartOfAccounts

/* New fields and associations for auth check only - set to consumption.hidden */ 
@Consumption.hidden: true
BusinessArea,
@Consumption.hidden: true
Segment,
@Consumption.hidden: true
OrderID,
@Consumption.hidden: true
ControllingBusTransacType,
@Consumption.hidden: true
SalesDocument,
@Consumption.hidden: true
ServiceDocument,
@Consumption.hidden: true
ServiceDocumentType,      
@Consumption.hidden: true
Supplier,
@Consumption.hidden: true
Customer,
@Consumption.hidden: true
AccountingDocumentType,
@Consumption.hidden: true
FinancialAccountType,
@Consumption.hidden: true
SalesOrganization, 
@Consumption.hidden: true
DistributionChannel,
@Consumption.hidden: true
OrganizationDivision,
@Consumption.hidden: true
Plant,
@Consumption.hidden: true
AssetClass,
@Consumption.hidden: true
ValuationArea,

/* New associations for auth check only - set to consumption.hidden */      
@Consumption.hidden: true
_GLAccountInCompanyCode,
@Consumption.hidden: true
_Order,
@Consumption.hidden: true
_SalesDocument,
@Consumption.hidden: true
_CurrentProfitCenter,
@Consumption.hidden: true
_CurrentCostCenter,
@Consumption.hidden: true
_ServiceDocument,
/* Dummy associations for auth check only - set to consumption.hidden */
@Consumption.hidden: true
_Supplier,
@Consumption.hidden: true
_Customer,
@Consumption.hidden: true
_AccountingDocumentType  


}
//group by
//      Ledger,   
//      CompanyCode,   
//      FiscalYear,
//      FiscalPeriod,   
//      CostCenter,
//      ProfitCenter,
//      ControllingArea,
//      StatisticalKeyFigure,
//      SKFPlanningCategory,
//      //SKFACDOC,
//      FiscalYearPeriod,
//      GLAccountHierarchy,
//      SemanticTag,
//      PlanningCategory,
//      ActualPlanCode,
//      CompanyCodeCurrency,
//      GlobalCurrency,    
//      FreeDefinedCurrency1,
//      StatisticalKeyFigQtyUnit,
//      StatisticalKeyFigureItem,
//      ValidityStartDate,
//      FinancialPlanningReqTransSqnc,
//      FinancialPlanningDataPacket,
//      FinancialPlanningEntryItem,
//      LedgerGLLineItem,
//      ValidityEndDate,
//      SourceLedger,
//      AccountingDocument
```
