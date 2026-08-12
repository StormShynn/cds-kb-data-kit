---
name: I_PAYMENTBYBANKCUBE
description: "This CDS view provides the prerequisites for answering the following business questions: What's the total incoming payment amount per bank in a certain period? What's the total outgoing payment amount per bank in a certain period? What are the banks that have the most incoming/outgoing payments in a certain period?"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTBYBANKCUBE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What's the total incoming payment amount per bank in a certain period? What's the total outgoing payment amount per bank in a certain period? What are the banks that have the most incoming/outgoing payments in a certain period?"
semantic_vi: "Bank Payments - Cube — CDS view giao diện dựa trên I_PaymentByBank."
keywords:
  - "bank"
  - "payments"
  - "cube"
  - "transaction"
  - "date"
  - "country"
  - "company"
  - "code"
  - "amount"
  - "display"
  - "currency"
tags:
  - FIN
  - bo:plant
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - payment
---
# I_PAYMENTBYBANKCUBE

**This CDS view provides the prerequisites for answering the following business questions: What's the total incoming payment amount per bank in a certain period? What's the total outgoing payment amount per bank in a certain period? What are the banks that have the most incoming/outgoing payments in a certain period?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTBYBANKCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransactionDate` | ✓ | |  |  | `DATS(8)` | Transaction Date |
| `Bank` | ✓ | |  |  | `CHAR(15)` | Bank Key |
| `BankCountry` | ✓ | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `InAmountInDisplayCurrency` |  | |  | `sum(case when payment.AmountInDisplayCurrency > 0 then AmountInDisplayCurrency else 0 end)` | `CURR(23)` |  |
| `OutAmountInDisplayCurrency` |  | |  | `sum(case when payment.AmountInDisplayCurrency < 0 then -AmountInDisplayCurrency else 0 end)` | `CURR(23)` |  |
| `AmountInDisplayCurrency` |  | |  | `sum(case when payment.AmountInDisplayCurrency > 0 then AmountInDisplayCurrency else -AmountInDisplayCurrency end)` | `CURR(23)` |  |
| `CreditRating` |  | | `_Rate` | `CreditRating` | `CHAR(3)` | Rating |
| `DisplayCurrency` |  | |  | `$parameters.P_DisplayCurrency` | `CUKY(5)` |  |
| `_Bank` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Rate` | `I_BankRating` | [0..1] |
| `_Bank` | `I_Bank` | [0..1] |
| `_Country` | `I_Country` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTBYBANKCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTBYBANKCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPAYBYBANKCUBE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.ignorePropagatedAnnotations:true 
@Metadata.allowExtensions:true
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL 
@EndUserText.label: 'Bank Payments - Cube'
@ObjectModel.supportedCapabilities: #ANALYTICAL_PROVIDER
define view I_PaymentByBankCube 
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : vdm_v_exchange_rate_date,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr,
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency  : vdm_v_display_currency,
    P_StartDate        : vdm_v_key_date,
    @Environment.systemField: #SYSTEM_DATE
    P_EndDate          : vdm_v_key_date 
  as select from I_PaymentByBank ( P_KeyDate: $parameters.P_KeyDate, 
                                   P_ExchangeRateType: $parameters.P_ExchangeRateType,
                                   P_DisplayCurrency: $parameters.P_DisplayCurrency, 
                                   P_StartDate: $parameters.P_StartDate,
                                   P_EndDate: $parameters.P_EndDate )  as payment     
  association [0..1] to I_BankRating   as _Rate    on  $projection.Bank = _Rate.Bank
                                                  and  $projection.BankCountry = _Rate.BankCountry
  association [0..1] to I_Bank    as _Bank    
                                  on $projection.BankCountry = _Bank.BankCountry
                                 and $projection.Bank  = _Bank.BankInternalID
  association [0..1] to I_Country as _Country 
                                  on $projection.BankCountry = _Country.Country 
{
   key payment.TransactionDate,
   @ObjectModel.foreignKey.association: '_Bank'
   key payment.Bank,
   @ObjectModel.foreignKey.association: '_Country'
   key payment.BankCountry,
   
   payment.CompanyCode,

   @DefaultAggregation: #SUM
   @Semantics.amount.currencyCode: 'DisplayCurrency'
   sum(case
      when payment.AmountInDisplayCurrency > 0 then AmountInDisplayCurrency
      else 0
   end)                    as InAmountInDisplayCurrency,
   
   @DefaultAggregation: #SUM
   @Semantics.amount.currencyCode: 'DisplayCurrency'
   sum(case
      when payment.AmountInDisplayCurrency < 0 then -AmountInDisplayCurrency
      else 0
   end)                    as OutAmountInDisplayCurrency,
   
   @DefaultAggregation: #SUM
   @Semantics.amount.currencyCode: 'DisplayCurrency'
   sum(case
      when payment.AmountInDisplayCurrency > 0 then AmountInDisplayCurrency
      else -AmountInDisplayCurrency
   end)                    as AmountInDisplayCurrency,
   
   _Rate.CreditRating,
   
   $parameters.P_DisplayCurrency as DisplayCurrency, 
   
   _Bank,
   _Country 
   
}
//where _Rate.CreditRating is not null
group by TransactionDate, payment.Bank, BankCountry, CompanyCode, _Rate.CreditRating
```
