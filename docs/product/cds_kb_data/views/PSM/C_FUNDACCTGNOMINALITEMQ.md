---
name: C_FUNDACCTGNOMINALITEMQ
description: "Nominal Values of the FSV - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNDACCTGNOMINALITEMQ')/$value
semantic_en: "Nominal Values of the FSV - Query"
semantic_vi: "Nominal Values of the FSV - Query — CDS view tiêu dùng dựa trên I_FundAcctgBalanceItemC."
keywords:
  - "nominal"
  - "values"
  - "the"
  - "fsv"
  - "query"
  - "account"
  - "hierarchy"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - PSM
  - component:PSM
  - consumption-view
---
# C_FUNDACCTGNOMINALITEMQ

**Nominal Values of the FSV - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNDACCTGNOMINALITEMQ')/$value) |

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
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
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
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNDACCTGNOMINALITEMQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNDACCTGNOMINALITEMQ')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFANOMINALITEMQ'
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
@EndUserText.label: 'Nominal Values of the FSV - Query'
define view C_FundAcctgNominalItemQ
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
    P_FiscalYearVariant         : fis_periv,

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

    @AnalyticsDetails.query.variableSequence: 60
    @Consumption.hidden: false
//    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_FiscalYearForVariant', element: 'FiscalYear' },
//                                         additionalBinding:  [ { localParameter: 'P_FiscalYearVariant', element: 'FiscalYearVariant' } ]
//                                     } ]
    //    @Consumption.valueHelpDefinition: [ { entity: { name: 'I_FiscalYearForCompanyCode', element: 'FiscalYear' },
    //                                         additionalBinding:  [ { localParameter: 'P_CompanyCode', element: 'CompanyCode' } ]
    // 
     //                                   } ]
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
  Cube.FiscalPeriod,

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

//  @AnalyticsDetails.query.axis: #FREE
//  @AnalyticsDetails.query.totals: #SHOW
//  Cube.PostingDate,
//
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
  Cube.GrantType,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.AccountAssignmentType,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  Cube.FunctionalArea
}
where
  (
       SemanticTag = 'GROSS_REV'
    or SemanticTag = 'OPEREXP'
    or SemanticTag = 'PL_RESULT'
    or SemanticTag = 'CMP_REV'
    or SemanticTag = 'CMP_EXP'
    or SemanticTag = 'CMP_PL'
  )
```
