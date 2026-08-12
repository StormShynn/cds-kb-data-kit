---
name: C_PUBSECGRANTCMTMTAGING
description: "Grant Open Commitments"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCMTMTAGING')/$value
semantic_en: "Grant Open Commitments"
semantic_vi: "Grant Open Commitments — CDS view tiêu dùng dựa trên I_PubSecCmtmtAgingLabel."
keywords:
  - "grant"
  - "open"
  - "commitments"
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
  - PSM
  - component:PSM-GM-GTE-IS
  - consumption-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
---
# C_PUBSECGRANTCMTMTAGING

**Grant Open Commitments**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCMTMTAGING')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `WBSElementExternalID` |  | |  | `cast( coalesce( Item.WBSElementExternalID, '' ) as fis_wbsext_no_conv preserving type )` | `CHAR(24)` | WBS Element External ID |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseRequisition` |  | |  |  | `CHAR(10)` | Purchase Requisition Number |
| `EarmarkedFundsDocument` |  | |  |  | `CHAR(10)` | Document Number for Earmarked Funds |
| `AccountAssignmentNumber` |  | |  |  | `NUMC(2)` | Account Assignment Number |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecOpnCmtmtTmeIntvl` |  | |  |  | `CHAR(20)` | Shows Time Interval to Which Grouped Open Commitments Belong |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `PubSecOpenCmtmtAgingDate` |  | |  |  | `DATS(8)` | Open Commitment Date |
| `SourceReferenceDocumentType` |  | |  |  | `CHAR(5)` | Source Reference Document Type |
| `SourceReferenceDocument` |  | |  |  | `CHAR(10)` | Source Reference Document |
| `SourceReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Source Reference Document Item |
| `SourceLogicalSystem` |  | |  |  | `CHAR(10)` | Source Logical System |
| `SourceReferenceDocumentCntxt` |  | |  |  | `CHAR(10)` | Source Reference Document Context |
| `SourceReferenceDocSubitem` |  | |  |  | `NUMC(6)` | Source Reference Document Subitem |
| `PubSecOpnCmtmtAmtInGlobCrcy1` |  | |  |  | `CURR(25)` | Open Commitment Amount in Global Currency for Time Slice A |
| `PubSecOpnCmtmtAmtInGlobCrcy2` |  | |  |  | `CURR(25)` | Open Commitment Amount in Global Currency for Time Slice B |
| `PubSecOpnCmtmtAmtInGlobCrcy3` |  | |  |  | `CURR(25)` | Open Commitment Amount in Global Currency for Time Slice C |
| `PubSecOpnCmtmtAmtInGlobCrcy4` |  | |  |  | `CURR(25)` | Open Commitment Amount in Global Currency for Time Slice D |
| `PubSecOpnCmtmtAmtInGlobCrcy5` |  | |  |  | `CURR(25)` | Open Commitment Amount in Global Currency for Time Slice E |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `PubSecOpnCmtmtAmtInTransCrcy` |  | |  |  | `CURR(25)` | Total Open Commitment Amount in Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `PubSecOpnCmtmtAmtInCoCodeCrcy` |  | |  |  | `CURR(25)` | Total Open Commitment Amount in Company Code Currency |
| `PubSecOpnCmtmtAmtInGlobCrcy` |  | |  |  | `CURR(25)` | Total Open Commitment Amount in Global Currency |
| `FundDescription` |  | |  | `Item._Fund._Text[1:Language = $session.system_language].FundDescription` | `CHAR(40)` | Fund Description |
| `FunctionalAreaName` |  | |  | `Item._FunctionalArea._Text[1:Language = $session.system_language].FunctionalAreaName` | `CHAR(25)` | Name of the Functional Area |
| `BudgetPeriodName` |  | |  | `Item._BudgetPeriod._Text[1:Language = $session.system_language].BudgetPeriodName` | `CHAR(35)` | Budget Period Name |
| `GrantName` |  | |  | `Item._Grant._Text[1:Language = $session.system_language].GrantName` | `CHAR(20)` | Short Description of the Grant |
| `CostCenterName` |  | |  | `Item._CurrentCostCenter._Text[1:Language = $session.system_language].CostCenterName` | `CHAR(20)` | Cost Center Name |
| `WBSDescription` |  | |  |  | `CHAR(40)` | Work Breakdown Structure Element Name |
| `GLAccountName` |  | |  | `Item._GLAccountInChartOfAccounts._Text[1:Language = $session.system_language].GLAccountName` | `CHAR(20)` | G/L Account Name |
| `ProfitCenterName` |  | |  | `Item._CurrentProfitCenter._Text[1:Language = $session.system_language].ProfitCenterName` | `CHAR(20)` | Description of Profit Center |
| `SegmentName` |  | |  | `Item._Segment._Text[1:Language = $session.system_language].SegmentName` | `CHAR(50)` | Segment Name |
| `GLAccountText` |  | |  | `Item._PubSecBudgetAccount._BudgetAccountText[1:Language = $session.system_language].BudgetAccountName` | `CHAR(20)` | Budget Account Name |
| `PubSecBdgtCnsmpnAmtTypeText` |  | |  | `Item._PubSecBdgtCnsmpnType._Text[1:Language = $session.system_language].PubSecBudgetCnsmpnTypeText` | `CHAR(40)` | Description of Budget Consumption Type |
| `PubSecBdgtAcctRevnExpnCodeText` |  | |  | `Item._PubSecBdgtAcctRevnExpnCode._Text[1:Language = $session.system_language].PubSecBdgtAcctRevnExpnCodeText` | `CHAR(60)` | Description of Expense or Revenue on Budget Account |
| `ReferenceDocumentTypeName` |  | |  | `Item._SourceReferenceDocumentType._Text[1:Language = $session.system_language].ReferenceDocumentTypeName` | `CHAR(20)` | Name of Object Type |
| `FundTypeDescription` |  | |  | `Item._FundType._Text[1:Language = $session.system_language].FundTypeDescription` | `CHAR(35)` | Description of Fund Type |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Name of Company Code or Company |
| `TransactionCurrencyName` |  | |  | `Item._TransactionCurrency._Text[1:Language = $session.system_language].CurrencyName` | `CHAR(40)` | Description |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCMTMTAGING')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGRANTCMTMTAGING')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSMGRNTCMTAGING'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@VDM.viewType: #CONSUMPTION
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Grant Open Commitments'

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@Analytics.internalName: #LOCAL
@Analytics.dataCategory: #CUBE
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true 

@OData.publish: true

define view C_PubSecGrantCmtmtAging
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    @Consumption.hidden
    P_CurrentDate        : psm_open_cmtmt_param_sydats,
    @Consumption.defaultValue: '90'
    P_PubSecOpnCmtmtTme1 : psm_open_cmtmt_param_days,
    @EndUserText.label: 'Time Interval in days'
    P_PubSecOpnCmtmtTme2 : psm_open_cmtmt_param_slice

  as select from I_PubSecCmtmtAgingLabel( P_CurrentDate: :P_CurrentDate,
                                  P_PubSecOpnCmtmtTme1: :P_PubSecOpnCmtmtTme1,
                                  P_PubSecOpnCmtmtTme2: :P_PubSecOpnCmtmtTme2 ) as Item
{

       @Consumption.hidden: true
  key  Item.Ledger,
       @ObjectModel.text.element: 'CompanyCodeName'
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_CompanyCodeStdVH',
                      element: 'CompanyCode' }
         }]
  key  Item.CompanyCode,
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_FiscalYearForCompanyCode',
                      element: 'FiscalYear' },
           additionalBinding: [{ localElement: 'CompanyCode',
                                 element: 'CompanyCode' } ]
         }]
  key  Item.FiscalYear,
       @Consumption.semanticObject: 'AccountingDocument'
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_JournalEntryStdVH',
                      element: 'AccountingDocument' },
           additionalBinding: [{ localElement: 'CompanyCode',
                                 element: 'CompanyCode' },
                               { localElement: 'FiscalYear',
                                 element: 'FiscalYear' }]
         }]
  key  Item.AccountingDocument,
       @Consumption.filter.hidden: true
  key  Item.LedgerGLLineItem,

       @UI.hidden: true
       Item.FinancialManagementArea,
       @ObjectModel.text.element: ['FundDescription']
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_FundStdVH',
                      element: 'Fund' },
           additionalBinding: [{ localElement: 'FinancialManagementArea',
                                 element: 'FinancialManagementArea' }]
         }]
       Item.Fund,
       @ObjectModel.text.element: ['FundTypeDescription']
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_FundTypeStdVH',
                      element: 'FundType' },
           additionalBinding: [{ localElement: 'FinancialManagementArea',
                                 element: 'FinancialManagementArea' }]
         }]
       Item.FundType,
       @ObjectModel.text.element: ['GLAccountName']
       @Consumption.valueHelpDefinition: [
         { entity: { name : 'I_GLAccountStdVH',
                     element : 'GLAccount' },
           additionalBinding: [{ localElement: 'CompanyCode',
                                 element: 'CompanyCode' }]
         }]
       Item.GLAccount,
       @ObjectModel.text.element: ['CostCenterName']
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_CostCenterStdVH',
                      element: 'CostCenter' },
           additionalBinding: [{ localElement: 'ControllingArea',
                                 element: 'ControllingArea' }]
         }]
       Item.CostCenter,
       @ObjectModel.text.element: ['ProfitCenterName']
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_ProfitCenterStdVH',
                      element: 'ProfitCenter' },
           additionalBinding: [{ localElement: 'ControllingArea',
                                 element: 'ControllingArea' }]
         }]
       Item.ProfitCenter,
       @ObjectModel.text.element: ['FunctionalAreaName']
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_FunctionalArea',
                      element: 'FunctionalArea' }
         }]
       Item.FunctionalArea,
       @ObjectModel.text.element: ['BudgetPeriodName']
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_BudgetPeriodStdVH',
                      element: 'BudgetPeriod' }
         }]
       Item.BudgetPeriod,
       @ObjectModel.text.element: ['GrantName']
       @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_GrantStdVH',
                   element: 'GrantID' }
         }]
       Item.GrantID,
       //      @ObjectModel.text.element: ['SponsoredClass']
       @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SponsoredClassStdVH',
                   element: 'SponsoredClass' }
         }]
       Item.SponsoredClass,
       //       @ObjectModel.text.element: ['SponsoredProgram']
       @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SponsoredProgramStdVH',
                   element: 'SponsoredProgram' }
         }]
       Item.SponsoredProgram,
       @ObjectModel.text.element: ['SegmentName']
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_Segment',
                      element: 'Segment' }
         }]
       Item.Segment,
       @ObjectModel.text.element: ['WBSDescription']
       @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_WBSElementBasicDataStdVH',
                       element: 'WBSElementExternalID' }
          }]
       cast( coalesce( Item.WBSElementExternalID, '' ) as fis_wbsext_no_conv preserving type )                      as WBSElementExternalID,
       @Consumption.semanticObject: 'PurchaseOrder'
//       @Consumption.valueHelpDefinition: [
//          { entity:  { name:    'I_PurchaseOrderStdVH',
//                       element: 'PurchaseOrder' }
//          }]
       Item.PurchaseOrder,
       @Consumption.semanticObject: 'PurchaseRequisition'
       @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_PurchaseRequisitionAPI01',
                       element: 'PurchaseRequisition' }
          }]
       Item.PurchaseRequisition,
       @Consumption.semanticObject: 'EarmarkedFundsDocument'
//       @Consumption.valueHelpDefinition: [
//          { entity:  { name:    'I_EmrkdFndsDocumentItemStdVH',
//                       element: 'EarmarkedFundsDocument' }
//          }]
       Item.EarmarkedFundsDocument,

       @Consumption.filter.hidden: true
       Item.AccountAssignmentNumber,
       @ObjectModel.text.element: ['GLAccountText']
       @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_PubSecBudgetAccountStdVH',
                       element: 'PubSecBudgetAccount' },
           additionalBinding: [{ localElement: 'CompanyCode',
                                 element: 'CompanyCode' }]
          }]
       Item.PubSecBudgetAccount,
       @ObjectModel.text.element: ['PubSecBdgtAcctRevnExpnCodeText']
       @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_PubSecBdgtAcctRevnExpnCode',
                       element: 'PubSecBdgtAcctRevnExpnCode' }
          }]
       Item.PubSecBdgtAcctRevnExpnCode,

       @ObjectModel.text.element: ['PubSecBdgtCnsmpnAmtTypeText']
       @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_PubSecBdgtCnsmpnType',
                       element: 'PubSecBudgetCnsmpnType' }
          }]
       Item.PubSecBudgetCnsmpnType,
       @Consumption.filter.hidden: true
       Item.PubSecOpnCmtmtTmeIntvl,
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_CurrencyStdVH',
                      element: 'Currency' }
         }]
       Item.GlobalCurrency,
       Item.PubSecOpenCmtmtAgingDate,
       @ObjectModel.text.element: ['ReferenceDocumentTypeName']
       @Consumption.filter.hidden: true
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_ReferenceDocumentType',
                      element: 'ReferenceDocumentType' }
         }]
       Item.SourceReferenceDocumentType,
       @Consumption.filter.hidden: true
       Item.SourceReferenceDocument,
       @Consumption.filter.hidden: true
       Item.SourceReferenceDocumentItem,
       @Consumption.filter.hidden: true
       Item.SourceLogicalSystem,
       @Consumption.filter.hidden: true
       Item.SourceReferenceDocumentCntxt,
       @Consumption.filter.hidden: true
       Item.SourceReferenceDocSubitem,

       @Semantics.amount.currencyCode: 'GlobalCurrency'
       @DefaultAggregation: #SUM
       Item.PubSecOpnCmtmtAmtInGlobCrcy1,

       @Semantics.amount.currencyCode: 'GlobalCurrency'
       @DefaultAggregation: #SUM
       Item.PubSecOpnCmtmtAmtInGlobCrcy2,

       @Semantics.amount.currencyCode: 'GlobalCurrency'
       @DefaultAggregation: #SUM
       Item.PubSecOpnCmtmtAmtInGlobCrcy3,

       @Semantics.amount.currencyCode: 'GlobalCurrency'
       @DefaultAggregation: #SUM
       Item.PubSecOpnCmtmtAmtInGlobCrcy4,

       @Semantics.amount.currencyCode: 'GlobalCurrency'
       @DefaultAggregation: #SUM
       Item.PubSecOpnCmtmtAmtInGlobCrcy5,

       // Amount fields
       @Semantics.currencyCode:true
//       @ObjectModel.text.element: 'TransactionCurrencyName'
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_CurrencyStdVH',
                      element: 'Currency' }
         }]
       Item.TransactionCurrency,
       @Semantics.amount.currencyCode: 'TransactionCurrency'
       @DefaultAggregation: #SUM
       Item.PubSecOpnCmtmtAmtInTransCrcy,
       @Semantics.currencyCode:true
       @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_CurrencyStdVH',
                      element: 'Currency' }
         }]
       Item.CompanyCodeCurrency,
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       @DefaultAggregation: #SUM
       Item.PubSecOpnCmtmtAmtInCoCodeCrcy,
       @Semantics.amount.currencyCode: 'GlobalCurrency'
       @DefaultAggregation: #SUM
       Item.PubSecOpnCmtmtAmtInGlobCrcy,

       //account assignment text fields

       @EndUserText.label: 'Fund Desc.'
       Item._Fund._Text[1:Language = $session.system_language].FundDescription                                      as FundDescription,
       @EndUserText.label: 'Functional Area Desc.'
       Item._FunctionalArea._Text[1:Language = $session.system_language].FunctionalAreaName                         as FunctionalAreaName,
       @EndUserText.label: 'Budget Period Desc.'
       Item._BudgetPeriod._Text[1:Language = $session.system_language].BudgetPeriodName                             as BudgetPeriodName,
       @EndUserText.label: 'Grant Desc'
       Item._Grant._Text[1:Language = $session.system_language].GrantName                                           as GrantName,
       @EndUserText.label: 'Cost Center Desc.'
       Item._CurrentCostCenter._Text[1:Language = $session.system_language].CostCenterName                          as CostCenterName,
       @EndUserText.label: 'WBS Element Desc.'
       Item._WBSElementExternalID.WBSDescription                                                                    as WBSDescription,
       @EndUserText.label: 'GL Account Desc.'
       Item._GLAccountInChartOfAccounts._Text[1:Language = $session.system_language].GLAccountName                  as GLAccountName,
       @EndUserText.label: 'Profit Center Desc.'
       Item._CurrentProfitCenter._Text[1:Language = $session.system_language].ProfitCenterName                      as ProfitCenterName,
       @EndUserText.label: 'Segment Desc.'
       Item._Segment._Text[1:Language = $session.system_language].SegmentName                                       as SegmentName,
       @EndUserText.label: 'Budget Account Desc.'
       Item._PubSecBudgetAccount._BudgetAccountText[1:Language = $session.system_language].BudgetAccountName        as GLAccountText,
       @EndUserText.label: 'Budget Cnsmpn Type Desc.'
       Item._PubSecBdgtCnsmpnType._Text[1:Language = $session.system_language].PubSecBudgetCnsmpnTypeText           as PubSecBdgtCnsmpnAmtTypeText,
       Item._PubSecBdgtAcctRevnExpnCode._Text[1:Language = $session.system_language].PubSecBdgtAcctRevnExpnCodeText as PubSecBdgtAcctRevnExpnCodeText,
       Item._SourceReferenceDocumentType._Text[1:Language = $session.system_language].ReferenceDocumentTypeName     as ReferenceDocumentTypeName,
       Item._FundType._Text[1:Language = $session.system_language].FundTypeDescription                              as FundTypeDescription,
       Item._CompanyCode.CompanyCodeName                                                                            as CompanyCodeName,
       Item._TransactionCurrency._Text[1:Language = $session.system_language].CurrencyName                          as TransactionCurrencyName,

       @Consumption.hidden: true
       Item.ChartOfAccounts,
       @Consumption.hidden: true
       Item.ControllingArea,

       @Consumption.hidden: true
       Item._CurrentCostCenter,
       @Consumption.hidden: true
       Item._CurrentProfitCenter,
       @Consumption.hidden: true
       Item._GLAccountInCompanyCode,
       @Consumption.hidden: true
       Item._Grant,
       @Consumption.hidden: true
       Item._Fund

}
where
  Item.GrantID <> 'NRG'
```
