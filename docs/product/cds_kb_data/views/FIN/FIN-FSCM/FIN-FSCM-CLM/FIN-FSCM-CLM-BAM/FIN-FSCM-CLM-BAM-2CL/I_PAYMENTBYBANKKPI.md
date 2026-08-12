---
name: I_PAYMENTBYBANKKPI
description: "Total and Average Bank Payments - Cube"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTBYBANKKPI')/$value
semantic_en: "Total and Average Bank Payments - Cube"
semantic_vi: "Total and Average Bank Payments - Cube — CDS view giao diện dựa trên I_PaymentByBankCube."
keywords:
  - "total"
  - "and"
  - "average"
  - "bank"
  - "payments"
  - "cube"
  - "country"
  - "company"
  - "code"
  - "banks"
  - "rated"
  - "amount"
  - "display"
  - "currency"
tags:
  - FIN
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - payment
---
# I_PAYMENTBYBANKKPI

**Total and Average Bank Payments - Cube**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTBYBANKKPI')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Bank` | ✓ | |  |  | `CHAR(15)` | Bank Key |
| `BankCountry` | ✓ | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `NrOfBanksRated` |  | |  | `1` | `INT1(3)` |  |
| `InAmountInDisplayCurrency` |  | |  | `sum( InAmountInDisplayCurrency )` | `CURR(23)` |  |
| `OutAmountInDisplayCurrency` |  | |  | `sum( OutAmountInDisplayCurrency )` | `CURR(23)` |  |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` |  |
| `_Bank` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTBYBANKKPI')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTBYBANKKPI')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPAYBYBANKKPI'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
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
@EndUserText.label: 'Total and Average Bank Payments - Cube'
@ObjectModel.supportedCapabilities: #ANALYTICAL_PROVIDER
define view I_PaymentByBankKPI
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
  as select from I_PaymentByBankCube ( P_KeyDate: $parameters.P_KeyDate, 
                                       P_ExchangeRateType: $parameters.P_ExchangeRateType,
                                       P_DisplayCurrency: $parameters.P_DisplayCurrency, 
                                       P_StartDate: $parameters.P_StartDate,
                                       P_EndDate: $parameters.P_EndDate )  as payment     
{ 
   @ObjectModel.foreignKey.association: '_Bank'
   key payment.Bank,
   @ObjectModel.foreignKey.association: '_Country'
   key payment.BankCountry,
   
   payment.CompanyCode,

   @DefaultAggregation: #SUM
   1 as NrOfBanksRated,
   
   @DefaultAggregation: #SUM
   @Semantics.amount.currencyCode: 'DisplayCurrency'
   sum( InAmountInDisplayCurrency ) as InAmountInDisplayCurrency,
   
   @DefaultAggregation: #SUM
   @Semantics.amount.currencyCode: 'DisplayCurrency'
   sum( OutAmountInDisplayCurrency ) as OutAmountInDisplayCurrency,
   
   DisplayCurrency,
   
   _Bank,
   _Country
 
} group by BankCountry,
           Bank,
           CompanyCode,
           DisplayCurrency
```
