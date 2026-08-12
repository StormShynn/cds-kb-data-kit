---
name: I_OVERDUEACCOUNTSRECEIVABLES
description: "This CDS view provides you with an overview of the overdue receivables for the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall overdue receivables? Which customers have overdue receivables?"
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OVERDUEACCOUNTSRECEIVABLES')/$value
semantic_en: "This CDS view provides you with an overview of the overdue receivables for the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall overdue receivables? Which customers have overdue receivables?"
semantic_vi: "Overdue Accounts Receivables — CDS view giao diện dựa trên P_OverdueAccountsReceivables."
keywords:
  - "overdue"
  - "accounts"
  - "receivables"
  - "company"
  - "code"
  - "customer"
  - "special"
  - "account"
  - "credit"
  - "segment"
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - interface-view
  - lob:finance
---
# I_OVERDUEACCOUNTSRECEIVABLES

**This CDS view provides you with an overview of the overdue receivables for the accounts receivables in an aging grid. The search result aggregates the amount per net due interval of the aging grid and account (company code and customer). This CDS view provides you with the information that you need to answer the following business questions: How high are the overall overdue receivables? Which customers have overdue receivables?**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OVERDUEACCOUNTSRECEIVABLES')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer |
| `SpecialGLCode` | ✓ | |  |  | `CHAR(1)` | Special G/L Indicator |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account |
| `CreditSegment` | ✓ | |  |  | `CHAR(10)` | Credit Segment |
| `NetDueIntervalText` | ✓ | |  |  | `CHAR(50)` | Net Due Date Interval |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Financial Account Type |
| `ReconciliationAccount` |  | |  |  | `CHAR(10)` | Reconciliation Account in General Ledger |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `ExchangeRateType` |  | |  | `cast( :P_ExchangeRateType as kurst )` | `CHAR(4)` | Exchange Rate Type |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Customer Basic Authorization Group |
| `CustomerFinsAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `NumberOfOpenItems` |  | |  | `cast( sum( NumberOfOpenItems ) as farp_number_of_open_items )` | `INT4(10)` | Number of Items |
| `AmountInDisplayCurrency` |  | |  | `cast( sum( AmountInDisplayCurrency ) as farp_amount_display_crcy )` | `CURR(23)` | Amount in Display Currency |
| `TotalOverdueAmtInDspCrcy` |  | |  | `cast( sum( TotalOverdueAmtInDspCrcy ) as farp_overdue_amount_dsp_crcy )` | `CURR(23)` | Overdue Amount in Display Currency |
| `TotalNotOvrdAmtInDspCrcy` |  | |  | `cast( sum( TotalNotOvrdAmtInDspCrcy ) as farp_not_overdue_amt_dsp_crcy )` | `CURR(23)` | Not Overdue Amount in Display Currency |
| `NetDueIntvl1AmtInDspCrcy` |  | |  | `cast( sum( NetDueIntvl1AmtInDspCrcy ) as farp_netdue_intvl1_amt_dspcrcy )` | `CURR(23)` | Amount in 1st Due Period (Display Currency) |
| `NetDueIntvl2AmtInDspCrcy` |  | |  | `cast( sum( NetDueIntvl2AmtInDspCrcy ) as farp_netdue_intvl2_amt_dspcrcy )` | `CURR(23)` | Amount in 2nd Due Period (Display Currency) |
| `NetDueIntvl3AmtInDspCrcy` |  | |  | `cast( sum( NetDueIntvl3AmtInDspCrcy ) as farp_netdue_intvl3_amt_dspcrcy )` | `CURR(23)` | Amount in 3rd Due Period (Display Currency) |
| `NetDueLastIntvlAmtInDspCrcy` |  | |  | `cast( sum( NetDueLastIntvlAmtInDspCrcy ) as farp_netdue_lintvl_amt_dspcrcy )` | `CURR(23)` | Overdue Amount in Last Interval in Display Currency |
| `_DisplayCurrency` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |
| `_CustomerCompany` | | ✓ | | | | |
| `_CustomerCountry` | | ✓ | | | | |
| `_CustomerRegion` | | ✓ | | | | |
| `_AccountingClerk` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |
| `_ReconciliationAccount` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_CustomerClassification` | | ✓ | | | | |
| `_CustomerAccountGroup` | | ✓ | | | | |
| `_CreditRiskClass` | | ✓ | | | | |
| `_CreditManagementBP` | | ✓ | | | | |
| `_CreditManagementSegment` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OVERDUEACCOUNTSRECEIVABLES')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OVERDUEACCOUNTSRECEIVABLES')/$value)*

```abap
//Documentation about annotations can be found at http://help.sap.com searching for CDS annotations //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.sizeCategory: #XXL //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.serviceQuality: #X //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED //Inserted by VDM CDS Suite Plugin
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #CDS_MODELING_DATA_SOURCE ]
@AbapCatalog.sqlViewName: 'IOVRDUEACCTRBLS'
@EndUserText.label: 'Overdue Accounts Receivables'
@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL   // released with Cloud 1808 and OP 1809 hence no design studio usage before 
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@AccessControl.authorizationCheck:#CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: false // I_Region is annotated as true, hence this new must have an annotation for searchable
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.viewEnhancementCategory: [ #PROJECTION_LIST , #GROUP_BY ]
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true

//@AbapCatalog.dbHints: [ { dbSystem: #ALL, hint: 'PREAGGR_BEFORE_JOIN' } ] 

define view I_OverdueAccountsReceivables
  //as select from bseg
  //{
  //key bukrs

  with parameters
    P_KeyDate               : sydate,
    P_DisplayCurrency       : vdm_v_display_currency,
    P_ExchangeRateType      : kurst_curr,
    P_NetDueInterval1InDays : farp_net_due_interval1,
    P_NetDueInterval2InDays : farp_net_due_interval2,
    P_NetDueInterval3InDays : farp_net_due_interval3
  as select from P_OverdueAccountsReceivables( P_KeyDate: :P_KeyDate,
                                                P_DisplayCurrency: :P_DisplayCurrency,
                                                P_ExchangeRateType: :P_ExchangeRateType,
                                                P_NetDueInterval1InDays: :P_NetDueInterval1InDays,
                                                P_NetDueInterval2InDays: :P_NetDueInterval2InDays,
                                                P_NetDueInterval3InDays: :P_NetDueInterval3InDays )
// Foreign Key Associations declare the dimension cube (I-View) from which the property values are derived of by Analytical Engine (see report RSRTS_ODP_DIS)
{
      @ObjectModel.foreignKey.association: '_Company'
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_Customer'
  key Customer,
      @ObjectModel.foreignKey.association: '_SpecialGLCode'
  key SpecialGLCode,
      @ObjectModel.foreignKey.association: '_GLAccount'
  key GLAccount,
      @ObjectModel.foreignKey.association: '_CreditManagementSegment'
  key CreditSegment,
  key NetDueIntervalText,

      @ObjectModel.foreignKey.association: '_FinancialAccountType'
      FinancialAccountType,
      @ObjectModel.foreignKey.association: '_ReconciliationAccount'
      ReconciliationAccount,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ChartOfAccounts,
      cast( :P_ExchangeRateType as kurst )                                                as ExchangeRateType,
      @ObjectModel.foreignKey.association: '_CreditManagementBP'
      BusinessPartner,

      @ObjectModel.foreignKey.association: '_CustomerCountry'
      CustomerCountry,
      @ObjectModel.foreignKey.association: '_CustomerRegion'
      CustomerRegion,
      @ObjectModel.foreignKey.association: '_AccountingClerk'
      AccountingClerk,
      
      @ObjectModel.foreignKey.association: '_CustomerAccountGroup'
      CustomerAccountGroup,
      @ObjectModel.foreignKey.association: '_CustomerClassification'
      CustomerClassification,

      @ObjectModel.foreignKey.association: '_CreditRiskClass'
      CreditRiskClass,

        
      // fields for authorization checks via DCL
      CustomerBasicAuthorizationGrp,
      CustomerFinsAuthorizationGrp,

      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_DisplayCurrency'
      DisplayCurrency,

      @DefaultAggregation: #SUM
      cast( sum( NumberOfOpenItems ) as farp_number_of_open_items )                                       as NumberOfOpenItems,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( AmountInDisplayCurrency ) as farp_amount_display_crcy )                                  as AmountInDisplayCurrency,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( TotalOverdueAmtInDspCrcy ) as farp_overdue_amount_dsp_crcy )                             as TotalOverdueAmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( TotalNotOvrdAmtInDspCrcy ) as farp_not_overdue_amt_dsp_crcy )                            as TotalNotOvrdAmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( NetDueIntvl1AmtInDspCrcy ) as farp_netdue_intvl1_amt_dspcrcy )                           as NetDueIntvl1AmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( NetDueIntvl2AmtInDspCrcy ) as farp_netdue_intvl2_amt_dspcrcy )                           as NetDueIntvl2AmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( NetDueIntvl3AmtInDspCrcy ) as farp_netdue_intvl3_amt_dspcrcy )                           as NetDueIntvl3AmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( sum( NetDueLastIntvlAmtInDspCrcy ) as farp_netdue_lintvl_amt_dspcrcy )                       as NetDueLastIntvlAmtInDspCrcy,
      
      // associations
      _DisplayCurrency,
      _Company,
      _Customer,
      _FinancialAccountType,
      _CustomerCompany,
      _CustomerCountry,
      _CustomerRegion,
      _AccountingClerk,
      _SpecialGLCode,
      _GLAccount,
      _ReconciliationAccount,
      _ChartOfAccounts,
      _CustomerClassification,
      _CustomerAccountGroup,
      _CreditRiskClass,
      _CreditManagementBP,
      _CreditManagementSegment
}              
group by
  CompanyCode,
  Customer,
  SpecialGLCode,
  GLAccount,
  CreditSegment,
  NetDueIntervalText,
  FinancialAccountType,
  ReconciliationAccount,
  ChartOfAccounts,
  ExchangeRateType,
  BusinessPartner,
  CustomerCountry,
  CustomerRegion,
  AccountingClerk,
  CustomerAccountGroup,
  CustomerClassification,
  CreditRiskClass,
  CustomerBasicAuthorizationGrp,
  CustomerFinsAuthorizationGrp,
  DisplayCurrency
```
