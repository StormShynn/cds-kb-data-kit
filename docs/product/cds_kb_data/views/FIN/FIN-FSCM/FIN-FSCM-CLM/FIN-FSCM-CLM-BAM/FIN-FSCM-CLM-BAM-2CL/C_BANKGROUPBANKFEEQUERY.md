---
name: C_BANKGROUPBANKFEEQUERY
description: "This CDS view retrieves the bank fee data, including service charges and tax charges, for bank groups. This CDS view provides the prerequisites for answering the following business questions: What's the total bank service charge for each bank group? What's the total bank tax charge for each bank group?"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKGROUPBANKFEEQUERY')/$value
semantic_en: "This CDS view retrieves the bank fee data, including service charges and tax charges, for bank groups. This CDS view provides the prerequisites for answering the following business questions: What's the total bank service charge for each bank group? What's the total bank tax charge for each bank group?"
semantic_vi: "Bank Fees for Bank Groups - Query — CDS view tiêu dùng dựa trên I_BankGroupBankFeeCube."
keywords:
  - "bank"
  - "fees"
  - "for"
  - "groups"
  - "query"
  - "group"
  - "company"
  - "code"
  - "country"
  - "account"
  - "internal"
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
  - bo:project
---
# C_BANKGROUPBANKFEEQUERY

**This CDS view retrieves the bank fee data, including service charges and tax charges, for bank groups. This CDS view provides the prerequisites for answering the following business questions: What's the total bank service charge for each bank group? What's the total bank tax charge for each bank group?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKGROUPBANKFEEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankGroup` |  | |  |  | `CHAR(10)` | Bank Group ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Keys |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `BankAccountNumber` |  | |  |  | `CHAR(40)` | Bank Account Number |
| `CalendarYearMonth` |  | |  |  | `NUMC(6)` |  |
| `BankFeeSrvcComCodeIssuer` |  | |  |  | `CHAR(6)` | Bank Service Common Code Issuer |
| `BankFeeSrvcComCode` |  | |  |  | `CHAR(8)` |  |
| `BankFeeChargeType` |  | |  |  | `CHAR(12)` | Charge Type |
| `BankFeeChargeTypeText` |  | |  |  | `CHAR(20)` | Charge Type Long Text |
| `BankFeeSrvcType` |  | |  |  | `CHAR(12)` |  |
| `BankFeeService` |  | |  |  | `CHAR(35)` | Billing Service ID |
| `BankFeeServiceDescription` |  | |  |  | `CHAR(70)` | Description field of length 70 |
| `BankAccountDescription` |  | |  |  | `CHAR(60)` | Account Description |
| `ValidityStartDate` |  | |  |  | `DATS(8)` |  |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | To Date |
| `FeeType` |  | |  |  | `CHAR(12)` |  |
| `CalendarYear` |  | |  |  | `NUMC(4)` |  |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Fiori Reference Apps: Calendar Quarter |
| `DisplayCurrency` |  | |  | `cast (:P_DisplayCurrency as fxm_group_currency preserving type)` | `CUKY(5)` | Display Currency |
| `ChargePriceInDC` |  | |  | `currency_conversion( amount => OriginalChargePrice, source_currency => OriginalChargePriceCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType)` | `CURR(23)` |  |
| `TaxInDC` |  | |  | `currency_conversion( amount => TotalTaxAmount, source_currency => TotalTaxAmountCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => :P_KeyDate, exchange_rate_type => :P_ExchangeRateType )` | `CURR(23)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKGROUPBANKFEEQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKGROUPBANKFEEQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CBANKGROUPBFQ'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XXL
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@OData.publish: true
@Analytics.query: true
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey:true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Bank Fees for Bank Groups - Query'
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_BankGroupBankFeeQuery   
  with parameters
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency   : vdm_v_display_currency,
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate           : vdm_v_key_date,    
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType  : kurst,
//    @Environment.systemField: #SYSTEM_DATE
    @EndUserText.label: 'From Date' 
    P_ValidityStartDate : vdm_v_start_date,
    @EndUserText.label: 'To Date' 
    @Environment.systemField: #SYSTEM_DATE
    P_ValidityEndDate   : vdm_v_end_date       
  as select from I_BankGroupBankFeeCube(P_ValidityStartDate: :P_ValidityStartDate, P_ValidityEndDate: :P_ValidityEndDate) as BankFee
{
  //Row dimensions
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT 
  BankGroup,
    
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  CompanyCode,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @EndUserText.label: 'Bank Country/Region' 
  BankCountry,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @EndUserText.label: 'Bank Key' 
  Bank,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT 
  @EndUserText.label: 'Bank Account Technical ID'  
  BankAccountInternalID,  
    
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @EndUserText.label: 'Account Number'   
  BankAccountNumber,  
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  } 
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT 
  @EndUserText.label:  'Year and Month' 
  CalendarYearMonth,  
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @EndUserText.label: 'Service Common Code Issuer' 
  BankFeeSrvcComCodeIssuer,  
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @EndUserText.label: 'Service Common Code'  
  BankFeeSrvcComCode,
 
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @EndUserText.label: 'Charge Type'
  BankFeeChargeType,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @EndUserText.label: 'Charge Type Text'   
  BankFeeChargeTypeText,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false  }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT
  @EndUserText.label: 'Service Type'    
  BankFeeSrvcType,    
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT 
  @EndUserText.label: 'Service ID'
  BankFeeService,  
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT 
  @EndUserText.label: 'Bank Fee Service Description'
  BankFeeServiceDescription, 
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT 
  @EndUserText.label: 'Account Description'       
  BankAccountDescription,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT 
  @EndUserText.label: 'From Date'
  ValidityStartDate, 
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT 
  @EndUserText.label: 'To Date'  
  ValidityEndDate,
    
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT 
  @EndUserText.label: 'Item Type'  
  FeeType,
    
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT 
  @EndUserText.label:  'Year'
  CalendarYear,
  
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY_TEXT 
  @EndUserText.label:  'Quarter'   
  CalendarQuarter,

  @AnalyticsDetails.query.axis: #FREE
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.hidden
  @AnalyticsDetails.query.totals: #HIDE
  cast (:P_DisplayCurrency as fxm_group_currency preserving type)      as DisplayCurrency,

  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics.amount.currencyCode: 'DisplayCurrency' 
  @EndUserText.label:  'Service Charge'
  currency_conversion( amount => OriginalChargePrice,
                       source_currency => OriginalChargePriceCurrency,
                       target_currency => :P_DisplayCurrency,
                       exchange_rate_date => :P_KeyDate,
                       exchange_rate_type => :P_ExchangeRateType)       as ChargePriceInDC,   
                                    
  @AnalyticsDetails.query.axis: #COLUMNS
  @Semantics.amount.currencyCode: 'DisplayCurrency'
  @EndUserText.label:  'Tax'
  currency_conversion( amount => TotalTaxAmount,
                       source_currency => TotalTaxAmountCurrency,
                       target_currency => :P_DisplayCurrency,
                       exchange_rate_date => :P_KeyDate,
                       exchange_rate_type => :P_ExchangeRateType )       as TaxInDC                       
                     
}
```
