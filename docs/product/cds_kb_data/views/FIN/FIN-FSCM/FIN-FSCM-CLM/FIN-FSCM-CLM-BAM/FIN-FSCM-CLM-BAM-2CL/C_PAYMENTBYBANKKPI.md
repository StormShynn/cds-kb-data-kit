---
name: C_PAYMENTBYBANKKPI
description: "Total and Average Bank Payments - Query"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTBYBANKKPI')/$value
semantic_en: "Total and Average Bank Payments - Query"
semantic_vi: "Total and Average Bank Payments - Query — CDS view tiêu dùng dựa trên I_PaymentByBankKPI."
keywords:
  - "total"
  - "and"
  - "average"
  - "bank"
  - "payments"
  - "query"
  - "country"
  - "company"
  - "code"
  - "amount"
  - "display"
  - "currency"
tags:
  - FIN
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - payment
---
# C_PAYMENTBYBANKKPI

**Total and Average Bank Payments - Query**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTBYBANKKPI')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankCountry` | ✓ | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` | ✓ | |  |  | `CHAR(15)` | Bank Key |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `InAmountInDisplayCurrency` |  | |  |  | `CURR(23)` |  |
| `OutAmountInDisplayCurrency` |  | |  |  | `CURR(23)` |  |
| `NrOfBanksRated` |  | |  |  | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTBYBANKKPI')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYMENTBYBANKKPI')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPAYBYBANKKPI'
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
@EndUserText.label: 'Total and Average Bank Payments - Query'
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_PaymentByBankKPI 
  with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : vdm_v_exchange_rate_date,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr,
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency  : vdm_v_display_currency,
    @EndUserText.label:'From'
    P_StartDate        : vdm_v_key_date,
    @EndUserText.label:'To'
    @Environment.systemField: #SYSTEM_DATE
    P_EndDate          : vdm_v_key_date
  as select from I_PaymentByBankKPI ( P_KeyDate: $parameters.P_KeyDate, 
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
   
   @AnalyticsDetails.query.axis: #ROWS  
   @AnalyticsDetails.query.display: #TEXT_KEY
   payment.CompanyCode as CompanyCode,  
   
   payment.InAmountInDisplayCurrency, 
   payment.OutAmountInDisplayCurrency,
   payment.NrOfBanksRated
}
```
