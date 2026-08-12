---
name: C_DUNNINGLEVELDISTRIBUTION
description: "This CDS view provides you with an overview of the dunning level distribution for accounts receivables. The search result aggregates the amount for each dunning level and account (company code and customer) This CDS view provides you with the information that you need to answer the following business questions: How high is the overall open amount that is subject to dunning? Which customers have overdue amounts that were already dunned? Which customers have been dunned multiple times? Is there a risk that there will be doubtful debts? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the I_DunningLevelDistribution cube. This query can be used in the key user tool KPI Design or Create Reports."
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DUNNINGLEVELDISTRIBUTION')/$value
semantic_en: "This CDS view provides you with an overview of the dunning level distribution for accounts receivables. The search result aggregates the amount for each dunning level and account (company code and customer) This CDS view provides you with the information that you need to answer the following business questions: How high is the overall open amount that is subject to dunning? Which customers have overdue amounts that were already dunned? Which customers have been dunned multiple times? Is there a risk that there will be doubtful debts? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the I_DunningLevelDistribution cube. This query can be used in the key user tool KPI Design or Create Reports."
semantic_vi: "Dunning Level Distribution Smart Business App — CDS view tiêu dùng dựa trên I_DunningLevelDistribution."
keywords:
  - "dunning"
  - "level"
  - "distribution"
  - "smart"
  - "business"
  - "app"
  - "company"
  - "code"
  - "customer"
  - "exchange"
  - "rate"
  - "type"
  - "country"
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-AR-IS-2CL
  - consumption-view
  - customer
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - lob:finance
---
# C_DUNNINGLEVELDISTRIBUTION

**This CDS view provides you with an overview of the dunning level distribution for accounts receivables. The search result aggregates the amount for each dunning level and account (company code and customer) This CDS view provides you with the information that you need to answer the following business questions: How high is the overall open amount that is subject to dunning? Which customers have overdue amounts that were already dunned? Which customers have been dunned multiple times? Is there a risk that there will be doubtful debts? This query cannot be accessed directly using SQL or custom CDS views. This query receives its data from the I_DunningLevelDistribution cube. This query can be used in the key user tool KPI Design or Create Reports.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DUNNINGLEVELDISTRIBUTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `Customer` | ✓ | |  |  | `CHAR(10)` | Customer |
| `DunningLevel` | ✓ | |  |  | `NUMC(1)` | Dunning Level |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `CustomerCountry` |  | |  |  | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `AccountingClerk` |  | |  |  | `CHAR(2)` | Accounting Clerk |
| `ReconciliationAccount` |  | |  |  | `CHAR(10)` | Reconciliation Account in General Ledger |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `CompanyCodeName` |  | | `_Company` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `CustomerName` |  | | `_Customer` | `CustomerName` | `CHAR(80)` | Name of Customer |
| `CustomerCountryName` |  | |  | `_CustomerCountry._Text[1:Language = :P_Language].CountryName` | `CHAR(50)` | Country/Region Name |
| `CustomerRegionName` |  | |  | `_CustomerRegion._RegionText[1:Language = :P_Language].RegionName` | `CHAR(20)` | Description |
| `AccountingClerkName` |  | | `_AccountingClerk` | `AccountingClerkName` | `CHAR(30)` | Name of Accounting Clerk |
| `ReconciliationAccountLongName` |  | |  | `_ReconciliationAccount._Text[1:Language = :P_Language].GLAccountLongName` | `CHAR(50)` | G/L Account Long Name |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerAccountGroupName` |  | |  | `_CustomerAccountGroup._CustomerAccountGroupText[1:Language = :P_Language].AccountGroupName` | `CHAR(30)` | Account Group Name |
| `CustomerClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `CustomerClassificationDesc` |  | |  | `_CustomerClassification._Text[1:Language = :P_Language].CustomerClassificationDesc` | `CHAR(20)` | Customer Classification Description |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `DunningLevel1AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 1 in Display Currency |
| `DunningLevel2AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 2 in Display Currency |
| `DunningLevel3AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 3 in Display Currency |
| `DunningLevel4AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 4 in Display Currency |
| `DunningLevel5AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 5 in Display Currency |
| `DunningLevel6AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 6 in Display Currency |
| `DunningLevel7AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 7 in Display Currency |
| `DunningLevel8AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 8 in Display Currency |
| `DunningLevel9AmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Amount Level 9 in Display Currency |
| `DunningLevelRngeAmtInDspCrcy` |  | |  |  | `CURR(23)` | Dunning Level Range Amount in Display Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DUNNINGLEVELDISTRIBUTION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_DUNNINGLEVELDISTRIBUTION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIDUNLVLDISTR'
@EndUserText.label: 'Dunning Level Distribution Smart Business App'
@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.query: true
@OData.publish: true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_DunningLevelDistribution
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_TodayDate                 : sydate,

    @Consumption.defaultValue: '1'
    P_LowerBoundaryDunningLevel : far_lower_bndry_dunning_level,

    @Consumption.defaultValue: '4'
    P_UpperBoundaryDunningLevel : far_upper_bndry_dunning_level,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language                  : sylangu,

    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency           : vdm_v_display_currency,

    @Consumption.defaultValue: 'M'
    @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateType' , element: 'ExchangeRateType' }                                     
                                      }]  
    P_ExchangeRateType          : kurst

  as select from I_DunningLevelDistribution(P_TodayDate:                  :P_TodayDate,
                                            P_LowerBoundaryDunningLevel:  :P_LowerBoundaryDunningLevel,
                                            P_UpperBoundaryDunningLevel:  :P_UpperBoundaryDunningLevel,
                                            P_DisplayCurrency:            :P_DisplayCurrency,
                                            P_ExchangeRateType:           :P_ExchangeRateType)

  // define 'sap:text' property in metadata annotations by stating the association to the property with annotation 'semantics.text:true'
  //         (e.g. 'Customer' and '_Customer.CustomerName as xyz')
  // define formulas for KPIs which shall be calculated after aggregation; will be executed by Analytical Engine off DB
{
  key CompanyCode,
  key Customer,
  key DunningLevel,

      ExchangeRateType,
      CustomerCountry,
      CustomerRegion,
      AccountingClerk,
      ReconciliationAccount,
      ChartOfAccounts,

      /*+[hideWarning] { "IDS" : [ "DOUBLE_JOIN" ] }*/
      _Company.CompanyCodeName                                                                   as CompanyCodeName, // no double join as C-view is only for annotations; no SQL
      /*+[hideWarning] { "IDS" : [ "DOUBLE_JOIN" ] }*/
      _Customer.CustomerName                                                                     as CustomerName, // no double join as C-view is only for annotations; no SQL
      _CustomerCountry._Text[1:Language = :P_Language].CountryName                               as CustomerCountryName,
      _CustomerRegion._RegionText[1:Language = :P_Language].RegionName                           as CustomerRegionName,
      _AccountingClerk.AccountingClerkName                                                       as AccountingClerkName,
      // due to unknown reasons the warning about double joins do not appear where they occur, hence here another suppression of the warning about double joins
      /*+[hideWarning] { "IDS" : [ "DOUBLE_JOIN" ] }*/        
      _ReconciliationAccount._Text[1:Language = :P_Language].GLAccountLongName                   as ReconciliationAccountLongName,
      
      CustomerAccountGroup                                                                       as CustomerAccountGroup,
      _CustomerAccountGroup._CustomerAccountGroupText[1:Language = :P_Language].AccountGroupName as CustomerAccountGroupName,
      CustomerClassification                                                                     as CustomerClassification,
     _CustomerClassification._Text[1:Language = :P_Language].CustomerClassificationDesc          as CustomerClassificationDesc,

      @Semantics.currencyCode:true
      DisplayCurrency,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      DunningLevel1AmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      DunningLevel2AmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      DunningLevel3AmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      DunningLevel4AmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      DunningLevel5AmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      DunningLevel6AmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      DunningLevel7AmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      DunningLevel8AmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      DunningLevel9AmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      DunningLevelRngeAmtInDspCrcy
}
```
