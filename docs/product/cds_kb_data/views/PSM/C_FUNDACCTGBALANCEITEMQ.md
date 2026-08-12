---
name: C_FUNDACCTGBALANCEITEMQ
description: "Fund Accounting Balance Item - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNDACCTGBALANCEITEMQ')/$value
semantic_en: "Fund Accounting Balance Item - Query"
semantic_vi: "Fund Accounting Balance Item - Query — CDS view tiêu dùng dựa trên I_FundAcctgBalanceItemC."
keywords:
  - "fund"
  - "accounting"
  - "balance"
  - "item"
  - "query"
  - "account"
  - "hierarchy"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "document"
tags:
  - PSM
  - account
  - component:PSM
  - consumption-view
---
# C_FUNDACCTGBALANCEITEMQ

**Fund Accounting Balance Item - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNDACCTGBALANCEITEMQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLAccountHierarchy` |  | |  |  | `CHAR(42)` | Financial Statement Version |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `SemanticTag` |  | |  |  | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmtInCoCodeCrcyPerFiscalYear` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNDACCTGBALANCEITEMQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNDACCTGBALANCEITEMQ')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFABALANCEITEMQ'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
     query: true,
     internalName: #LOCAL,
     settings: {
         maxProcessingEffort: #HIGH
     }
}
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XXL
     },
     supportedCapabilities: [ #ANALYTICAL_QUERY ]
}
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@AbapCatalog.buffering.status: #NOT_ALLOWED
@OData.publish: true
@EndUserText.label: 'Fund Accounting Balance Item - Query'
define view C_FundAcctgBalanceItemQ
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language                  : sylangu,
    @Consumption.hidden: true
    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate                   : vdm_v_key_date,
    @Consumption.hidden: true
    @Environment.systemField: #USER
    P_BusinessUser              : syuname,

    @AnalyticsDetails.query.variableSequence: 10
    @Consumption.hidden: false
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_GLAccountHierarchyStdVH', element: 'GLAccountHierarchy' } } ]
    @Consumption.derivation: { lookupEntity: 'F_FinStmntVersionUserParam',
          resultElement: 'FinancialStatementHierarchy' }
    P_FinancialStatementVersion : hryid,

    @AnalyticsDetails.query.variableSequence: 20
    @Consumption.hidden: false
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCode', element: 'CompanyCode' } } ]
    @Consumption.derivation: {
         lookupEntity: 'I_UserSettingsForCompanyCode',
           resultElement: 'CompanyCode',
           binding:  [ {
             targetElement : 'BusinessUser' ,
             type : #PARAMETER,
             value : 'P_BusinessUser'
           } ]
     }
    P_CompanyCode               : fis_bukrs,

    @Consumption.hidden: false
    @AnalyticsDetails.query.variableSequence: 30
    @Consumption.valueHelpDefinition: [ { entity: {name : 'I_Ledger', element: 'Ledger' } } ]
    @Consumption.derivation: { lookupEntity: 'I_Ledger',
      resultElement: 'Ledger',
      binding:
      [ { targetElement : 'IsLeadingLedger' ,
          type : #CONSTANT,
          value : 'X'
        }
      ]
    }
    P_Ledger                    : fins_ledger,

    @AnalyticsDetails.query.variableSequence: 40
    @Consumption.hidden: false
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' },
                                         additionalBinding:  [ { localParameter: 'P_CompanyCode', element: 'CompanyCode' } ]
                                     } ]
    @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
          resultElement: 'CalendarYear', binding: [
          { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
    P_FiscalYear                : fis_gjahr_no_conv,
    
    @Consumption.hidden: true
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_FiscalYearVariant', element: 'FiscalYearVariant' } } ]
    @Consumption.derivation: { lookupEntity: 'I_FiscalYearPeriodForCmpnyCode',
          resultElement: 'FiscalYearVariant', binding: [{ targetElement: 'FiscalYear', type : #PARAMETER, value : 'P_FiscalYear' },
                                                        { targetElement: 'CompanyCode', type : #PARAMETER, value : 'P_CompanyCode'},
                                                        { targetElement: 'FiscalPeriod', type : #CONSTANT, value : '001'} ] }
    P_FiscalYearVariant               : fis_periv, 

    @AnalyticsDetails.query.variableSequence: 50
    @Consumption.hidden: false
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_FiscalYearPeriodForCmpnyCode', element: 'FiscalPeriod' },
    additionalBinding:  [ { localParameter: 'P_FiscalYear', element: 'FiscalYear' },
                          { localParameter: 'P_CompanyCode', element: 'CompanyCode' } ] } ]
    @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
          resultElement: 'CalendarMonth', binding: [
          { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
         }
    P_ToFiscalPeriod            : fis_period_to,
    
  //  @EndUserText.label: 'Start Fiscal Year'
    @AnalyticsDetails.query.variableSequence: 60
    @Consumption.hidden: false
//    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_FiscalYearForVariant', element: 'FiscalYear' },
//                                         additionalBinding:  [ 
//                                         //{ localParameter: 'P_CompanyCode', element: 'CompanyCode' },
//                                                    { localParameter: 'P_FiscalYearVariant', element: 'FiscalYearVariant' } ]
//                                     } ]
//    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' },
//                                         additionalBinding:  [ { localParameter: 'P_CompanyCode', element: 'CompanyCode' } ]
//                                     } ]
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_FiscalYearForLedger', element: 'FiscalYear' },
                                         additionalBinding:  [ { localParameter: 'P_CompanyCode', element: 'CompanyCode' },
                                                               { localParameter: 'P_Ledger', element: 'Ledger' }  ]
                                     } ]
    @Consumption.derivation: { lookupEntity: 'I_FiscalYear',
           resultElement: 'FiscalYear', binding: [
           { targetElement : 'NextFiscalYear' , type : #PARAMETER, value : 'P_FiscalYear' } ]
        }
    P_ComparisonFiscalYear      : fis_gjahr_cmp_no_conv,

    @Consumption.hidden: false
    @AnalyticsDetails.query.variableSequence: 70 
    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_FiscalYearPeriodForCmpnyCode', element: 'FiscalPeriod' },
    additionalBinding:  [ { localParameter: 'P_FiscalYear', element: 'FiscalYear' },
                          { localParameter: 'P_CompanyCode', element: 'CompanyCode' } ] } ]

    @Consumption.derivation: { lookupEntity: 'I_CalendarDate',
          resultElement: 'CalendarMonth', binding: [
          { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' } ]
       }
    P_ToComparisonFiscalPeriod  : fis_period_to_cmp

  as select from I_FundAcctgBalanceItemC
                 ( P_FinancialStatementVersion : :P_FinancialStatementVersion,
                   P_CompanyCode:                :P_CompanyCode,
                   P_Ledger:                     :P_Ledger,
                   P_FiscalYear:                 :P_FiscalYear,
                   P_ToFiscalPeriod:             :P_ToFiscalPeriod,
                   P_ComparisonFiscalYear:       :P_ComparisonFiscalYear,
                   P_ToComparisonFiscalPeriod:   :P_ToComparisonFiscalPeriod
                 ) as Cube
{
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.GLAccountHierarchy,

  @AnalyticsDetails.query.axis: #FREE
  Cube.Ledger,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.CompanyCode,

  @AnalyticsDetails.query.axis: #FREE
  Cube.FiscalYear,

  @AnalyticsDetails.query.axis: #FREE
  Cube.AccountingDocument,

  @AnalyticsDetails.query.axis: #FREE
  Cube.LedgerGLLineItem,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.SemanticTag,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.GLAccount,

  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.Fund,

  @AnalyticsDetails.query.axis: #ROWS
  Cube.FinancialManagementArea,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.FundType,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.FiscalPeriod,

//  @AnalyticsDetails.query.axis: #FREE
//  @AnalyticsDetails.query.totals: #SHOW
//  Cube.PostingDate,
  
//  @AnalyticsDetails.query.axis: #FREE
//  @AnalyticsDetails.query.totals: #SHOW
//  Cube.FiscalPeriodEndDate,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.Segment,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.ProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  Cube.ControllingArea,

  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  Cube.CompanyCodeCurrency,

  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  AmountInCompanyCodeCurrency,
  
  @AnalyticsDetails.query.axis: #COLUMNS
  @EndUserText.label: 'Amount in Company Code Currency per FY'
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  AmtInCoCodeCrcyPerFiscalYear,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.CostCenter,
  _CostCenter[1:ValidityEndDate   >= $parameters.P_KeyDate and
                  ValidityStartDate <= $parameters.P_KeyDate]._Text[1:Language = $parameters.P_Language].CostCenterName,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.WBSElementExternalID,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.GrantID,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.GrantType
}
where
  (
       SemanticTag = 'C_PL'
    or SemanticTag = 'FUND_BAL'
    or SemanticTag = 'CSH_CSHEQV'
    or SemanticTag = 'C_CMP_PL'
    or SemanticTag = 'C_CMP_FB'
    or SemanticTag = 'C_CMP_CEQV'
  )
```
