---
name: C_GLACCOUNTYTDBALANCEQ
description: "Year-to-Date Balances"
app_component: FI-FIO-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTYTDBALANCEQ')/$value
semantic_en: "Year-to-Date Balances"
semantic_vi: "Year-to-Date Balances — CDS view tiêu dùng dựa trên I_GLAccountYearToDateBalanceC."
keywords:
  - "Year-To-Date Balances"
  - "year"
  - "date"
  - "balances"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "period"
tags:
  - FI
  - component:FI-FIO-GL-2CL
  - consumption-view
  - FI-FIO
  - FI-FIO-GL
  - FI-FIO-GL-2CL
  - lob:finance
---
# C_GLACCOUNTYTDBALANCEQ

**Year-to-Date Balances**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTYTDBALANCEQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `LedgerFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Ledger |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project External ID |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `CostCtrActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `AccountAssignmentNumber` |  | |  |  | `NUMC(2)` | Account Assignment Number |
| `GLAccountType` |  | |  |  | `CHAR(1)` | Type of a General Ledger Account |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction Type |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `PostingKey` |  | |  |  | `CHAR(2)` | Posting Key |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `DebitAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Company Code Currency |
| `CreditAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `DebitAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Global Currency |
| `CreditAmountInGlobalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `DebitAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Functional Currency |
| `CreditAmountInFunctionalCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Functional Currency |
| `AmountInFunctionalCurrency` |  | |  |  | `CURR(23)` | Amount in Functional Currency |
| `FunctionalCurrency` |  | |  |  | `CUKY(5)` | Functional Currency |
| `BalanceTransactionCurrency` |  | |  |  | `CUKY(5)` | Balance Transaction Currency |
| `DebitAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Balance Transaction Currency |
| `CreditAmountInBalanceTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Balance Transaction Currency |
| `AmountInBalanceTransacCrcy` |  | |  |  | `CURR(23)` | Amount in Balance Transaction Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `DebitAmountInTransCrcy` |  | |  |  | `CURR(23)` | Debit Amount in Transaction Currency |
| `CreditAmountInTransCrcy` |  | |  |  | `CURR(23)` | Credit Amount in Transaction Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `FreeDefinedCurrency1` |  | |  |  | `CUKY(5)` | Freely Defined Currency 1 |
| `DebitAmountInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 1 |
| `CreditAmountInFreeDfndCrcy1` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 1 |
| `AmountInFreeDefinedCurrency1` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `FreeDefinedCurrency2` |  | |  |  | `CUKY(5)` | Freely Defined Currency 2 |
| `DebitAmountInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 2 |
| `CreditAmountInFreeDfndCrcy2` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 2 |
| `AmountInFreeDefinedCurrency2` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `FreeDefinedCurrency3` |  | |  |  | `CUKY(5)` | Freely Defined Currency 3 |
| `DebitAmountInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 3 |
| `CreditAmountInFreeDfndCrcy3` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 3 |
| `AmountInFreeDefinedCurrency3` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `FreeDefinedCurrency4` |  | |  |  | `CUKY(5)` | Freely Defined Currency 4 |
| `DebitAmountInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 4 |
| `CreditAmountInFreeDfndCrcy4` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 4 |
| `AmountInFreeDefinedCurrency4` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `FreeDefinedCurrency5` |  | |  |  | `CUKY(5)` | Freely Defined Currency 5 |
| `DebitAmountInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 5 |
| `CreditAmountInFreeDfndCrcy5` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 5 |
| `AmountInFreeDefinedCurrency5` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `FreeDefinedCurrency6` |  | |  |  | `CUKY(5)` | Freely Defined Currency 6 |
| `DebitAmountInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 6 |
| `CreditAmountInFreeDfndCrcy6` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 6 |
| `AmountInFreeDefinedCurrency6` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `FreeDefinedCurrency7` |  | |  |  | `CUKY(5)` | Freely Defined Currency 7 |
| `DebitAmountInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 7 |
| `CreditAmountInFreeDfndCrcy7` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 7 |
| `AmountInFreeDefinedCurrency7` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `FreeDefinedCurrency8` |  | |  |  | `CUKY(5)` | Freely Defined Currency 8 |
| `DebitAmountInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Debit Amount in Free Defined Currency 8 |
| `CreditAmountInFreeDfndCrcy8` |  | |  |  | `CURR(23)` | Credit Amount in Free Defined Currency 8 |
| `AmountInFreeDefinedCurrency8` |  | |  |  | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Customer or Supplier Country/Region |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Customer Supplier Industry |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTYTDBALANCEQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GLACCOUNTYTDBALANCEQ')/$value)*

```abap
@AbapCatalog:   {
                    sqlViewName: 'CFIGLACCTYTDBALQ',
                    buffering.status: #NOT_ALLOWED,
                    compiler.compareFilter: true
                }
@ObjectModel: { usageType: { sizeCategory: #XXL,
                             serviceQuality: #D,
                             dataClass: #MIXED },
                supportedCapabilities: [#ANALYTICAL_QUERY],
                modelingPattern: #ANALYTICAL_QUERY }
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Year-to-Date Balances'
@Analytics: { query: true,
              settings.maxProcessingEffort: #HIGH }
@Metadata: { ignorePropagatedAnnotations: true,
             allowExtensions: true }
@VDM.viewType: #CONSUMPTION
define view C_GLAccountYTDBalanceQ
  with parameters

    @Consumption.hidden: true
    @Environment.systemField: #USER
    P_BusinessUser      : syuname,
    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'I_UserSetGetParamForCtrlgArea',
          resultElement: 'ControllingArea',
          binding: [ { targetElement : 'BusinessUser' , type : #PARAMETER, value : 'P_BusinessUser' } ] }
    P_ControllingArea   : fis_kokrs,
    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'I_ControllingArea',
          resultElement: 'FiscalYearVariant',
          binding: [{ targetElement : 'ControllingArea' , type : #PARAMETER, value : 'P_ControllingArea' } ]
         }
    P_FiscalYearVariant : fins_periv,
    @Consumption.hidden: true
    @Consumption.derivation: { lookupEntity: 'I_MySessionContext',
        resultElement: 'UserLocalDate', binding: [
        { targetElement : 'UserID' , type : #PARAMETER, value : 'P_BusinessUser' } ]
       }
    P_KeyDate           : vdm_v_key_date
  as select from I_GLAccountYearToDateBalanceC as I_GLAccountYearToDateBalanceC
{
  @Consumption: {
                    filter: {
                                mandatory: true,
                                multipleSelections: false,
                                selectionType: #SINGLE
                            },
                    derivation: {
                                    lookupEntity: 'I_LedgerStdVH',
                                    resultElement: 'Ledger',
                                    binding: [
                                                {
                                                    targetElement : 'IsLeadingLedger' ,
                                                    type : #CONSTANT, value : 'X'
                                                }
                                            ]
                                }
                }
  @AnalyticsDetails:    {
                            query: {
                                        variableSequence: 10,
                                        axis: #FREE,
                                        display: #KEY_TEXT
                                   }
                        }
  I_GLAccountYearToDateBalanceC.Ledger,
  @Consumption: {
                    filter: {
                                multipleSelections: true,
                                selectionType: #RANGE
                            }
  }
  @AnalyticsDetails:    {
                            query: {
                                        variableSequence: 50,
                                        axis: #ROWS,
                                        display: #KEY_TEXT,
                                        totals: #SHOW
                                   }
                        }
  I_GLAccountYearToDateBalanceC.CompanyCode,
  @AnalyticsDetails:    {
                            query: {
                                        variableSequence: 20,
                                        axis: #FREE,
                                        totals: #SHOW
                                   }
                        }
  @Consumption: {
                  filter: {
                              mandatory: true,
                              multipleSelections: false,
                              selectionType: #SINGLE
                          }
               }
  @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarYearToDateRnge',
    resultElement: 'FiscalYear',
    binding: [
    { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' },
    { targetElement : 'FiscalYearVariant' , type : #PARAMETER, value : 'P_FiscalYearVariant' } ]
   }
  I_GLAccountYearToDateBalanceC.LedgerFiscalYear,
  @AnalyticsDetails:    {
                        query: {
                                    variableSequence: 30,
                                    axis: #FREE,
                                    totals: #SHOW
                               }
                    }
  @Consumption: {
                filter: {
                            mandatory: false,
                            multipleSelections: true,
                            selectionType: #RANGE

                        }
             }
  @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarYearToDateRnge',
    resultElement: 'FromFiscalYearPeriod',
    resultElementHigh: 'ToFiscalYearPeriod', binding: [
    { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' },
    { targetElement : 'FiscalYearVariant' , type : #PARAMETER, value : 'P_FiscalYearVariant' } ]
   }
  I_GLAccountYearToDateBalanceC.FiscalYearPeriod,
  @AnalyticsDetails:    {
                          query: {
                                      variableSequence: 40,
                                      axis: #FREE,
                                      totals: #SHOW
                                 }
                      }
  @Consumption: {
                  filter: {
                              mandatory: false,
                              multipleSelections: true,
                              selectionType: #INTERVAL

                          }
               }
  //  @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarYearToDateRnge',
  //    resultElement: 'FromFiscalPeriod',
  //    resultElementHigh: 'ToFiscalPeriod', binding: [
  //    { targetElement : 'CalendarDate' , type : #PARAMETER, value : 'P_KeyDate' },
  //    { targetElement : 'FiscalYearVariant' , type : #PARAMETER, value : 'P_FiscalYearVariant' } ]
  //   }
  I_GLAccountYearToDateBalanceC.FiscalPeriod,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.FiscalYearVariant,
  @AnalyticsDetails:    {
                            query: {
                                        variableSequence: 100,
                                        axis: #FREE,
                                        totals: #SHOW
                                   }
                        }
  @Consumption: {
                  filter: {
                              mandatory: false,
                              multipleSelections: true,
                              selectionType: #RANGE
                          }
               }
  I_GLAccountYearToDateBalanceC.CostCenter,
  @AnalyticsDetails:    {
                            query: {
                                        variableSequence: 110,
                                        axis: #FREE,
                                        totals: #SHOW
                                   }
                        }
  @Consumption: {
                  filter: {
                              mandatory: false,
                              multipleSelections: true,
                              selectionType: #RANGE
                          }
               }
  I_GLAccountYearToDateBalanceC.ProfitCenter,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.ControllingArea,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.WBSElementExternalID,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.ProjectExternalID,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.OrderID,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.OrderCategory,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.CostCtrActivityType,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.ProjectNetwork,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.BusinessArea,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.FunctionalArea,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.AccountAssignmentNumber,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.GLAccountType,
  @Consumption: {
                filter: {
                            mandatory: false,
                            multipleSelections: true,
                            selectionType: #RANGE
                        }
             }
  @AnalyticsDetails:    {
                            query: {
                                        variableSequence: 110
                                   }
                        }
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.Segment,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.ChartOfAccounts,
  @AnalyticsDetails:    {
                            query: {
                                        variableSequence: 40,
                                        axis: #ROWS,
                                        display: #KEY_TEXT,
                                        totals: #SHOW
                                   }
                        }
  @Consumption: {
                  filter: {
                              mandatory: false,
                              multipleSelections: true,
                              selectionType: #RANGE
                          }
               }
  I_GLAccountYearToDateBalanceC.GLAccount,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.SalesOrganization,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.BusinessTransactionType,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.Plant,
  @Consumption: {
                filter: {
                            mandatory: false,
                            multipleSelections: true,
                            selectionType: #RANGE
                        }
             }
  @AnalyticsDetails:    {
                           query: {
                                       variableSequence: 120
                                  }
                       }
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.Customer,
  @Consumption: {
                filter: {
                            mandatory: false,
                            multipleSelections: true,
                            selectionType: #RANGE
                        }
             }
  @AnalyticsDetails:    {
                            query: {
                                        variableSequence: 130
                                   }
                        }
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.Supplier,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.CustomerGroup,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.OrganizationDivision,
  @AnalyticsDetails:    {
                            query: {
                                        variableSequence: 50,
                                        axis: #FREE,
                                        totals: #SHOW
                                   }
                        }
  @Consumption: {
                  filter: {
                              mandatory: false,
                              selectionType: #INTERVAL,
                              multipleSelections: true
                          }
               }
  I_GLAccountYearToDateBalanceC.PostingDate,
  @AnalyticsDetails:    {
                          query: {
                                      variableSequence: 60,
                                      axis: #FREE,
                                      totals: #SHOW
                                 }
                      }
  @Consumption: {
                 filter: {
                             mandatory: false,
                             selectionType: #INTERVAL,
                             multipleSelections: true
                         }
              }
  I_GLAccountYearToDateBalanceC.FiscalQuarter,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.PostingKey,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.CompanyCodeCurrency as CompanyCodeCurrency,
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  I_GLAccountYearToDateBalanceC.DebitAmountInCoCodeCrcy,
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  I_GLAccountYearToDateBalanceC.CreditAmountInCoCodeCrcy,
  @Aggregation.default: #SUM
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  I_GLAccountYearToDateBalanceC.AmountInCompanyCodeCurrency,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.DebitAmountInGlobalCrcy,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.CreditAmountInGlobalCrcy,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'GlobalCurrency'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.AmountInGlobalCurrency,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.GlobalCurrency as GlobalCurrency,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FunctionalCurrency'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.DebitAmountInFunctionalCrcy,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FunctionalCurrency'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.CreditAmountInFunctionalCrcy,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FunctionalCurrency'
  I_GLAccountYearToDateBalanceC.AmountInFunctionalCurrency,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.FunctionalCurrency as FunctionalCurrency,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.BalanceTransactionCurrency as BalanceTransactionCurrency,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.DebitAmountInBalanceTransCrcy,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.CreditAmountInBalanceTransCrcy,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'BalanceTransactionCurrency'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.AmountInBalanceTransacCrcy,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.TransactionCurrency as TransactionCurrency,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.DebitAmountInTransCrcy,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.CreditAmountInTransCrcy,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.AmountInTransactionCurrency,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.FreeDefinedCurrency1 as FreeDefinedCurrency1,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.DebitAmountInFreeDfndCrcy1,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.CreditAmountInFreeDfndCrcy1,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency1'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.AmountInFreeDefinedCurrency1,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.FreeDefinedCurrency2 as FreeDefinedCurrency2,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.DebitAmountInFreeDfndCrcy2,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.CreditAmountInFreeDfndCrcy2,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency2'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.AmountInFreeDefinedCurrency2,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.FreeDefinedCurrency3 as FreeDefinedCurrency3,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.DebitAmountInFreeDfndCrcy3,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.CreditAmountInFreeDfndCrcy3,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency3'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.AmountInFreeDefinedCurrency3,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.FreeDefinedCurrency4 as FreeDefinedCurrency4,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.DebitAmountInFreeDfndCrcy4,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.CreditAmountInFreeDfndCrcy4,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency4'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.AmountInFreeDefinedCurrency4,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.FreeDefinedCurrency5 as FreeDefinedCurrency5,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.DebitAmountInFreeDfndCrcy5,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.CreditAmountInFreeDfndCrcy5,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency5'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.AmountInFreeDefinedCurrency5,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.FreeDefinedCurrency6 as FreeDefinedCurrency6,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.DebitAmountInFreeDfndCrcy6,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.CreditAmountInFreeDfndCrcy6,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency6'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.AmountInFreeDefinedCurrency6,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.FreeDefinedCurrency7 as FreeDefinedCurrency7,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.DebitAmountInFreeDfndCrcy7,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.CreditAmountInFreeDfndCrcy7,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency7'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.AmountInFreeDefinedCurrency7,
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.FreeDefinedCurrency8 as FreeDefinedCurrency8,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.DebitAmountInFreeDfndCrcy8,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.CreditAmountInFreeDfndCrcy8,
  @Aggregation.default: #SUM
  @AnalyticsDetails.query.hidden: true
  @Semantics.amount.currencyCode: 'FreeDefinedCurrency8'
  @AnalyticsDetails.query.axis: #FREE
  I_GLAccountYearToDateBalanceC.AmountInFreeDefinedCurrency8,
  
@AnalyticsDetails.query.axis: #FREE
I_GLAccountYearToDateBalanceC.CustomerSupplierCountry,

@AnalyticsDetails.query.axis: #FREE
I_GLAccountYearToDateBalanceC.CustomerSupplierIndustry

///////////////////////////////////////////////////////////////////////
// .INCLUDE ACDOC_SI_FS  Universal Journal Entry: Fields for Financial Services
///////////////////////////////////////////////////////////////////////
// 2.5.24 remove annotation @Consumption.switched.id because of problems with "Custom Analytical Queries" app
//@AnalyticsDetails.query.axis: #FREE
//@Consumption.switched.id: 'FINS_FS_ACCDIM' 
//I_GLAccountYearToDateBalanceC.FinancialServicesProductGroup,
//@AnalyticsDetails.query.axis: #FREE
//@Consumption.switched.id: 'FINS_FS_ACCDIM' 
//I_GLAccountYearToDateBalanceC.FinancialServicesBranch,
//@AnalyticsDetails.query.axis: #FREE
//@Consumption.switched.id: 'FINS_FS_ACCDIM' 
//I_GLAccountYearToDateBalanceC.FinancialDataSource    
  
}
```
