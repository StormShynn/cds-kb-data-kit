---
name: I_BANKGROUPBANKFEECUBE
description: "This CDS view retrieves the bank fee data, including service charges and tax charges, for bank groups. This CDS view provides the prerequisites for answering the following business questions: What's the total bank service charge for each bank group? What's the total bank tax charge for each bank group?"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGROUPBANKFEECUBE')/$value
semantic_en: "This CDS view retrieves the bank fee data, including service charges and tax charges, for bank groups. This CDS view provides the prerequisites for answering the following business questions: What's the total bank service charge for each bank group? What's the total bank tax charge for each bank group?"
semantic_vi: "Bank Fees for Bank Groups - Cube — CDS view giao diện dựa trên I_BankFeeService."
keywords:
  - "bank"
  - "fees"
  - "for"
  - "groups"
  - "cube"
  - "srvc"
  - "billg"
  - "stmnt"
  - "group"
  - "type"
  - "account"
  - "internal"
  - "number"
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
  - bo:project
---
# I_BANKGROUPBANKFEECUBE

**This CDS view retrieves the bank fee data, including service charges and tax charges, for bank groups. This CDS view provides the prerequisites for answering the following business questions: What's the total bank service charge for each bank group? What's the total bank tax charge for each bank group?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGROUPBANKFEECUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BkSrvcBillgStmntUUID` | ✓ | |  |  | `CHAR(36)` | Bank Services Billing Statement UUID |
| `BankGroup` | ✓ | | `_BankGroup` | `BankHeadquarter` | `CHAR(10)` | Bank Group ID |
| `FeeType` |  | |  |  | `CHAR(12)` |  |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `BankAccountNumber` |  | |  |  | `CHAR(40)` | Bank Account Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Keys |
| `ValidityStartDate` |  | |  | `StartDateYearMonth` | `DATS(8)` |  |
| `ValidityEndDate` |  | |  | `EndDateYearMonth` | `DATS(8)` | To Date |
| `BankFeeService` |  | |  |  | `CHAR(35)` | Billing Service ID |
| `BankFeeServiceDescription` |  | |  |  | `CHAR(70)` | Description field of length 70 |
| `BankFeeSrvcComCode` |  | |  |  | `CHAR(8)` |  |
| `BankFeeSrvcComCodeIssuer` |  | |  |  | `CHAR(6)` | Bank Service Common Code Issuer |
| `BankFeeSrvcType` |  | |  |  | `CHAR(12)` |  |
| `BankFeeChargeType` |  | |  |  | `CHAR(12)` | Charge Type |
| `BankFeeChargeTypeText` |  | |  |  | `CHAR(20)` | Charge Type Long Text |
| `CalendarQuarter` |  | |  | `case substring( cast(EndDateYearMonth as abap.char(23)), 5, 2) when '01' then cast('1' as sepmra_calendarquarter preserving type) when '02' then cast('1' as sepmra_calendarquarter preserving type) when '03' then cast('1' as sepmra_calendarquarter preserving type) when '04' then cast('2' as sepmra_calendarquarter preserving type) when '05' then cast('2' as sepmra_calendarquarter preserving type) when '06' then cast('2' as sepmra_calendarquarter preserving type) when '07' then cast('3' as sepmra_calendarquarter preserving type) when '08' then cast('3' as sepmra_calendarquarter preserving type) when '09' then cast('3' as sepmra_calendarquarter preserving type) when '10' then cast('4' as sepmra_calendarquarter preserving type) when '11' then cast('4' as sepmra_calendarquarter preserving type) when '12' then cast('4' as sepmra_calendarquarter preserving type) end` | `NUMC(1)` | Fiori Reference Apps: Calendar Quarter |
| `CalendarYear` |  | |  | `cast( left( cast(EndDateYearMonth as abap.char(23)), 4 ) as abap.numc(4) )` | `NUMC(4)` |  |
| `CalendarYearMonth` |  | |  | `cast( left( cast(EndDateYearMonth as abap.char(23)), 6 ) as abap.numc(6) )` | `NUMC(6)` |  |
| `OriginalChargePriceCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `OriginalChargePrice` |  | |  |  | `CURR(23)` |  |
| `TotalTaxAmountCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `TotalTaxAmount` |  | |  |  | `CURR(23)` | Amount in Display Currency |
| `BankAccountType` |  | | `_BankAccount` | `BankAccountType` | `CHAR(10)` | Bank Account Type ID |
| `_BankGroup` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_BankAccount` | | ✓ | | | | |
| `_Bank` | | ✓ | | | | |
| `_BankCountry` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BankGroup` | `I_BankAccountWithBGN` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BankAccount` | `I_BankAccount` | [0..1] |
| `_Bank` | `I_Bank` | [0..1] |
| `_BankCountry` | `I_Country` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGROUPBANKFEECUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGROUPBANKFEECUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBANKGROUPBFC'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'BankFee'  
@EndUserText.label: 'Bank Fees for Bank Groups - Cube'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #EXTRACTION_DATA_SOURCE ]                               
define view I_BankGroupBankFeeCube 
  with parameters
    P_ValidityStartDate  : vdm_v_start_date,
    P_ValidityEndDate    : vdm_v_end_date   
  as select from I_BankFeeService                     as BankFee
  inner join   P_BankFeeChargeType_WP                 as ChargeType       on   BankFee.BkSrvcBillgStmntUUID      = ChargeType .BkSrvcBillgStmntUUID
  association [0..1] to I_BankAccountWithBGN          as _BankGroup       on   $projection.BankAccountInternalID = _BankGroup.BankAccountInternalID
  association [0..1] to I_CompanyCode                 as _CompanyCode     on   $projection.CompanyCode           = _CompanyCode.CompanyCode 
  association [0..1] to I_BankAccount                 as _BankAccount     on   $projection.BankAccountInternalID = _BankAccount.BankAccountInternalID 
  association [0..1] to I_Bank                        as _Bank            on   $projection.BankCountry = _Bank.BankCountry
                                                                          and  $projection.Bank        = _Bank.BankInternalID
  association [0..1] to I_Country                     as _BankCountry     on   $projection.BankCountry = _BankCountry.Country 
  association [0..1] to I_BusinessPartner             as _BusinessPartner on   BankGroup = _BusinessPartner.BusinessPartner 
{                                                                          
  key    BankFee.BkSrvcBillgStmntUUID,
         --BankGroup---------------------------------------------------------------------------------------------------------------------------- 
         @ObjectModel.foreignKey.association: '_BusinessPartner'         
  key    _BankGroup.BankHeadquarter as BankGroup,
         FeeType,
         --BankAccount-------------------------------------------------------------------------------------------------------------------------     
         BankAccountInternalID,         
         BankAccountNumber,
         _BankAccount._Text[1: Language = $session.system_language ].BankAccountDescription,
         --Bank--------------------------------------------------------------------------------------------------------------------------------   
         @ObjectModel.foreignKey.association: '_CompanyCode'   
         CompanyCode,  
         @ObjectModel.foreignKey.association: '_BankCountry'      
         BankCountry,
         @ObjectModel.foreignKey.association: '_Bank'
         Bank,                                                                                                                                                                                                                                                                             
         StartDateYearMonth         as ValidityStartDate,
         EndDateYearMonth           as ValidityEndDate,     
         BankFee.BankFeeService,
         BankFee.BankFeeServiceDescription,
         BankFee.BankFeeSrvcComCode,
         BankFee.BankFeeSrvcComCodeIssuer,  
         BankFee.BankFeeSrvcType, 
         ChargeType.BankFeeChargeType,
         ChargeType.BankFeeChargeTypeText,
         case substring( cast(EndDateYearMonth as abap.char(23)), 5, 2)
           when '01' then cast('1' as sepmra_calendarquarter preserving type)
           when '02' then cast('1' as sepmra_calendarquarter preserving type)
           when '03' then cast('1' as sepmra_calendarquarter preserving type)
           when '04' then cast('2' as sepmra_calendarquarter preserving type)
           when '05' then cast('2' as sepmra_calendarquarter preserving type)
           when '06' then cast('2' as sepmra_calendarquarter preserving type)
           when '07' then cast('3' as sepmra_calendarquarter preserving type)
           when '08' then cast('3' as sepmra_calendarquarter preserving type)
           when '09' then cast('3' as sepmra_calendarquarter preserving type)
           when '10' then cast('4' as sepmra_calendarquarter preserving type)
           when '11' then cast('4' as sepmra_calendarquarter preserving type)
           when '12' then cast('4' as sepmra_calendarquarter preserving type)
         end as CalendarQuarter,     
         cast( left( cast(EndDateYearMonth as abap.char(23)), 4 ) as abap.numc(4) )  as CalendarYear,
         cast( left( cast(EndDateYearMonth as abap.char(23)), 6 ) as abap.numc(6) )  as CalendarYearMonth,                     
         OriginalChargePriceCurrency, 
         @Semantics.amount.currencyCode: 'OriginalChargePriceCurrency'
         @DefaultAggregation: #SUM             
         OriginalChargePrice, 
         TotalTaxAmountCurrency,       
         @Semantics.amount.currencyCode: 'TotalTaxAmountCurrency'
         @DefaultAggregation: #SUM  
         TotalTaxAmount,
         // Used for the authority object F_CLM_BF
         @Consumption.hidden: true
         _BankAccount.BankAccountType as BankAccountType,
         
         _BankCountry,
         _CompanyCode,
         _Bank,
         _BankGroup,
         _BusinessPartner,
         _BankAccount
         
} where StartDateYearMonth >= $parameters.P_ValidityStartDate
    and EndDateYearMonth   <= $parameters.P_ValidityEndDate
    and ( FeeType = 'Service' or FeeType = 'Tax' )
```
