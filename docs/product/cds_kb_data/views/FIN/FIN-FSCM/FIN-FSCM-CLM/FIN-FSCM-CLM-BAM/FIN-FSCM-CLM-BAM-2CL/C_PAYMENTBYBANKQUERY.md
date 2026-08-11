---
name: C_PAYMENTBYBANKQUERY
description: "This CDS view provides the prerequisites for answering the following business questions: What's the total incoming payment amount per bank in a certain period? What's the total outgoing payment amount per bank in a certain period? Which banks have the most incoming/outgoing payments in a certain period?"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTBYBANKQUERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What's the total incoming payment amount per bank in a certain period? What's the total outgoing payment amount per bank in a certain period? Which banks have the most incoming/outgoing payments in a certain period?"
semantic_vi: "Bank Payments - Query — CDS view tiêu dùng dựa trên I_PaymentByBankCube."
keywords:
  - "bank"
  - "payments"
  - "query"
  - "country"
  - "transaction"
  - "date"
  - "company"
  - "code"
  - "amount"
  - "display"
  - "currency"
tags:
  - FIN
  - bo:plant
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - payment
---
# C_PAYMENTBYBANKQUERY

**This CDS view provides the prerequisites for answering the following business questions: What's the total incoming payment amount per bank in a certain period? What's the total outgoing payment amount per bank in a certain period? Which banks have the most incoming/outgoing payments in a certain period?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTBYBANKQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankCountry` | ✓ | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` | ✓ | |  |  | `CHAR(15)` | Bank Key |
| `TransactionDate` | ✓ | |  |  | `DATS(8)` | Transaction Date |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `InAmountInDisplayCurrency` |  | |  |  | `CURR(23)` |  |
| `OutAmountInDisplayCurrency` |  | |  |  | `CURR(23)` |  |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` |  |
| `CreditRating` |  | |  |  | `CHAR(3)` | Rating |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTBYBANKQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTBYBANKQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPAYBYBANKQRY'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@OData.publish: true
@AbapCatalog.preserveKey: true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY 
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.ignorePropagatedAnnotations:true
@Analytics.query: true
@EndUserText.label: 'Bank Payments - Query'
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_PaymentByBankQuery 
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : vdm_v_exchange_rate_date,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr,
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency  : vdm_v_display_currency,
    @EndUserText.label:'From'
    P_StartDate        : vdm_v_key_date,
    @Environment.systemField: #SYSTEM_DATE
    @EndUserText.label:'To'
    P_EndDate          : vdm_v_key_date
  as select from I_PaymentByBankCube ( P_KeyDate: $parameters.P_KeyDate, 
                                       P_ExchangeRateType: $parameters.P_ExchangeRateType,
                                       P_DisplayCurrency: $parameters.P_DisplayCurrency, 
                                       P_StartDate: $parameters.P_StartDate,
                                       P_EndDate: $parameters.P_EndDate )  as payment   
                                        
{
   @AnalyticsDetails.query.axis: #ROWS 
   @AnalyticsDetails.query.display: #TEXT_KEY
   key payment.BankCountry as BankCountry,
   
   @AnalyticsDetails.query.axis: #ROWS  
   @AnalyticsDetails.query.display: #TEXT_KEY
   key payment.Bank as Bank,  
   
   key payment.TransactionDate,
   
   @AnalyticsDetails.query.axis: #ROWS  
   @AnalyticsDetails.query.display: #TEXT_KEY
   payment.CompanyCode as CompanyCode,  
   
   payment.InAmountInDisplayCurrency, 
   payment.OutAmountInDisplayCurrency,
   payment.DisplayCurrency,
   payment.AmountInDisplayCurrency,
   payment.CreditRating 
}
```
