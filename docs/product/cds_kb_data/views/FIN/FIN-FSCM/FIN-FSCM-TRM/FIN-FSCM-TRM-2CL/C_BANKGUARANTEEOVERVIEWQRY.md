---
name: C_BANKGUARANTEEOVERVIEWQRY
description: "This CDS view provides the prerequisites for answering the following business questions: What is the nominal amount of bank guarantees on a specified key date? What is the total fee amount of bank guarantees on a specified key date? What is the condition rate of bank guarantees on a specified key date? What is the outstanding bank guarantee volume made on the key date per company code, counterparty, and transaction currency? What information on live bank guarantee transactions is available in the overview? What is the average fee rate based on the bank guarantee volume? What is the total fee amount per counterparty in display currency?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKGUARANTEEOVERVIEWQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the nominal amount of bank guarantees on a specified key date? What is the total fee amount of bank guarantees on a specified key date? What is the condition rate of bank guarantees on a specified key date? What is the outstanding bank guarantee volume made on the key date per company code, counterparty, and transaction currency? What information on live bank guarantee transactions is available in the overview? What is the average fee rate based on the bank guarantee volume? What is the total fee amount per counterparty in display currency?"
semantic_vi: "Bank Guarantee Overview - Query — CDS view tiêu dùng dựa trên I_BankGuaranteeOverview."
keywords:
  - "bank"
  - "guarantee"
  - "overview"
  - "query"
  - "financial"
  - "instr"
  - "product"
  - "category"
  - "instrument"
  - "type"
  - "transaction"
  - "company"
  - "code"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - lob:finance
  - transaction
---
# C_BANKGUARANTEEOVERVIEWQRY

**This CDS view provides the prerequisites for answering the following business questions: What is the nominal amount of bank guarantees on a specified key date? What is the total fee amount of bank guarantees on a specified key date? What is the condition rate of bank guarantees on a specified key date? What is the outstanding bank guarantee volume made on the key date per company code, counterparty, and transaction currency? What information on live bank guarantee transactions is available in the overview? What is the average fee rate based on the bank guarantee volume? What is the total fee amount per counterparty in display currency?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKGUARANTEEOVERVIEWQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialInstrProductCategory` | ✓ | |  |  | `NUMC(3)` | Product Category |
| `FinancialInstrumentProductType` | ✓ | |  |  | `CHAR(3)` | Product Type |
| `FinancialInstrTransactionType` | ✓ | |  |  | `CHAR(3)` | Financial Transaction Type |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `Counterparty` | ✓ | |  |  | `CHAR(10)` | Counterparty Number |
| `FinInstrTransactionCategory` | ✓ | |  |  | `NUMC(3)` | Transaction Category |
| `FinInstrConditionLogicGroup` | ✓ | |  |  | `NUMC(4)` | Condition Logic Group |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `InterestCalculationType` |  | |  |  | `INT1(3)` | Interest Calculation Type |
| `TransactionCurrency` |  | |  | `NominalCurrency` | `CUKY(5)` | Nominal Currency |
| `NominalAmountInNominalCurrency` |  | |  |  | `CURR(26)` |  |
| `FeeAmountInTransactionCrcy` |  | |  |  | `CURR(23)` | Financial Position Amount In Transaction Currency |
| `PaymentCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `ConditionPercentageRate` |  | |  |  | `DEC(10)` | Percentage rate for condition items |
| `NominalAmountInDisplayCurrency` |  | |  | `cast (0 as ftr_gen_nominal_amount_rc)` | `CURR(21)` | Nominal Amount in Display Currency |
| `FeeAmountInDisplayCurrency` |  | |  | `cast( 0 as ftr_gen_fee_amount_rc)` | `CURR(21)` | Fee Amount in Display Currency |
| `EstimatedFeeAmtInDisplayCrcy` |  | |  | `cast(0 as ftr_est_fee_amount_rc)` | `CURR(21)` | Estimated Fee Amount in Display Currency |
| `NmbrOfFinancialTransactions` |  | |  |  | `INT4(10)` | Number of Financial Transactions |
| `VolumeIsCounted` |  | |  |  | `CHAR(1)` | Indicator whether transaction has valid condition |
| `ConditionIsValid` |  | |  |  | `CHAR(1)` | Indicator whether transaction has valid condition |
| `ExchangeRateType` |  | |  | `$parameters.P_ExchangeRateType` | `CHAR(4)` |  |
| `_ExchangeRateTypeVH` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExchangeRateTypeVH` | `I_ExchangeRateType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKGUARANTEEOVERVIEWQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKGUARANTEEOVERVIEWQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CBKOVERVIEWQRY'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@OData.publish: true
@Metadata.allowExtensions:true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@AbapCatalog.preserveKey:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Bank Guarantee Overview - Query'
@Analytics.query: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_QUERY ]
define view C_BankGuaranteeOverviewQry
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : vdm_v_key_date,
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency  : vdm_v_display_currency,
    P_ExchangeRateType : kurst
  as select from I_BankGuaranteeOverview(
                 P_KeyDate                     : $parameters.P_KeyDate,
                 P_DisplayCurrency             : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType            : $parameters.P_ExchangeRateType) as Overview
  association [1..1] to I_ExchangeRateType as _ExchangeRateTypeVH on _ExchangeRateTypeVH.ExchangeRateType = $parameters.P_ExchangeRateType
{

        @AnalyticsDetails.query.axis: #ROWS
        @Consumption.filter: { selectionType : #SINGLE, multipleSelections: false, mandatory: true, defaultValue: '860', hidden: true }
        @AnalyticsDetails.query.variableSequence : 10
  key   Overview.FinancialInstrProductCategory,

        @AnalyticsDetails.query.axis: #ROWS
        @Consumption.filter: { selectionType : #SINGLE, multipleSelections: true, mandatory: true }
        @AnalyticsDetails.query.variableSequence : 20
  key   Overview.FinancialInstrumentProductType,

        @AnalyticsDetails.query.axis: #ROWS
        @Consumption.filter: { selectionType : #SINGLE, multipleSelections: false, mandatory: true }
        @AnalyticsDetails.query.variableSequence : 30
  key   Overview.FinancialInstrTransactionType,

  key   Overview.CompanyCode,
  key   Overview.FinancialTransaction,
  key   Overview.Counterparty,
  key   Overview.FinInstrTransactionCategory,
  key   Overview.FinInstrConditionLogicGroup,
        @Semantics.currencyCode: true
        @AnalyticsDetails.query.axis: #COLUMNS
        Overview.DisplayCurrency,
        Overview.InterestCalculationType,

        Overview.NominalCurrency              as TransactionCurrency,
        Overview.NominalAmountInNominalCurrency,

        Overview.FeeAmountInTransactionCrcy,
        Overview.PaymentCurrency,
        Overview.ConditionPercentageRate,
        @DefaultAggregation: #FORMULA
        @AnalyticsDetails.query:{
            formula : 'abs(Overview.NominalAmountInDisplayCurrency)',
            axis: #COLUMNS

        }
        cast (0 as ftr_gen_nominal_amount_rc) as NominalAmountInDisplayCurrency,

        @DefaultAggregation: #FORMULA
        @AnalyticsDetails.query:{
           formula : 'abs(Overview.FeeAmountInDisplayCurrency)',
           axis: #COLUMNS
        }
        cast( 0 as  ftr_gen_fee_amount_rc)    as FeeAmountInDisplayCurrency,

        @DefaultAggregation: #FORMULA
        @AnalyticsDetails.query:{
            formula : 'abs(Overview.EstimatedFeeAmtInDisplayCrcy)',
            axis: #COLUMNS
        }
        cast(0 as ftr_est_fee_amount_rc)      as EstimatedFeeAmtInDisplayCrcy,

        @DefaultAggregation: #SUM
        Overview.NmbrOfFinancialTransactions,

        Overview.VolumeIsCounted,
        Overview.ConditionIsValid,

        @Consumption.valueHelp: '_ExchangeRateTypeVH'
        @Consumption.defaultValue : 'M'
        @UI.hidden: true
        $parameters.P_ExchangeRateType        as ExchangeRateType,

        @UI.hidden: true
        _ExchangeRateTypeVH

}
```
