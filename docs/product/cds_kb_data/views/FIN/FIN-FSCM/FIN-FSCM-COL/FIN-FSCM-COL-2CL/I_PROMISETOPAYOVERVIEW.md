---
name: I_PROMISETOPAYOVERVIEW
description: "This CDS view provides an overview of promises to pay, allowing you to analyze payment commitments made by customers in SAP Collections Management. It helps in tracking the status and details of these promises, facilitating better financial planning and collection strategies. It aggregates and presents data related to customer payment promises, including amounts promised, paid, and outstanding, along with associated metadata such as customer details, company codes, and currency information. How many promises to pay are currently open and what is their total value? What is the distribution of promised payments across different time intervals? Which customers have the highest promised amounts? What is the total amount promised by customers in a specific currency and exchange rate type? How much of the promised amount has been paid by customers? What is the outstanding amount that is yet to be paid by customers? What are the due intervals for promised payments, and how do they impact the open amounts? Which customers have outstanding promises to pay, and what are their associated company codes and account groups? What is the status of dispute cases related to promise-to-pay agreements? How are promised payments distributed across different collection segments and regions? What is the role of collection specialists in managing promise-to-pay agreements? How do different due intervals affect the open amounts in the display currency?"
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROMISETOPAYOVERVIEW')/$value
semantic_en: "This CDS view provides an overview of promises to pay, allowing you to analyze payment commitments made by customers in SAP Collections Management. It helps in tracking the status and details of these promises, facilitating better financial planning and collection strategies. It aggregates and presents data related to customer payment promises, including amounts promised, paid, and outstanding, along with associated metadata such as customer details, company codes, and currency information. How many promises to pay are currently open and what is their total value? What is the distribution of promised payments across different time intervals? Which customers have the highest promised amounts? What is the total amount promised by customers in a specific currency and exchange rate type? How much of the promised amount has been paid by customers? What is the outstanding amount that is yet to be paid by customers? What are the due intervals for promised payments, and how do they impact the open amounts? Which customers have outstanding promises to pay, and what are their associated company codes and account groups? What is the status of dispute cases related to promise-to-pay agreements? How are promised payments distributed across different collection segments and regions? What is the role of collection specialists in managing promise-to-pay agreements? How do different due intervals affect the open amounts in the display currency?"
semantic_vi: "Promise To Pay Overview - Cube — CDS view giao diện dựa trên P_PromiseToPay4."
keywords:
  - "promise"
  - "pay"
  - "overview"
  - "cube"
  - "dispute"
  - "case"
  - "customer"
  - "contact"
  - "group"
  - "currency"
  - "company"
  - "code"
tags:
  - FIN
  - account
  - bo:businesspartner
  - component:FIN-FSCM-COL-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - payment
  - plan
---
# I_PROMISETOPAYOVERVIEW

**This CDS view provides an overview of promises to pay, allowing you to analyze payment commitments made by customers in SAP Collections Management. It helps in tracking the status and details of these promises, facilitating better financial planning and collection strategies. It aggregates and presents data related to customer payment promises, including amounts promised, paid, and outstanding, along with associated metadata such as customer details, company codes, and currency information. How many promises to pay are currently open and what is their total value? What is the distribution of promised payments across different time intervals? Which customers have the highest promised amounts? What is the total amount promised by customers in a specific currency and exchange rate type? How much of the promised amount has been paid by customers? What is the outstanding amount that is yet to be paid by customers? What are the due intervals for promised payments, and how do they impact the open amounts? Which customers have outstanding promises to pay, and what are their associated company codes and account groups? What is the status of dispute cases related to promise-to-pay agreements? How are promised payments distributed across different collection segments and regions? What is the role of collection specialists in managing promise-to-pay agreements? How do different due intervals affect the open amounts in the display currency?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROMISETOPAYOVERVIEW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` | ✓ | |  | `cast( case_guid as scmg_case_guid preserving type )` | `CHAR(32)` | Technical Case Key (Case GUID) |
| `CustomerContactUUID` |  | |  |  | `CHAR(32)` | Customer Contact Key |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Standard Currency in Client |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `DueDate` |  | |  |  | `DATS(8)` | Date for Which Payment Is Promised |
| `CreationDate` |  | |  |  | `DATS(8)` | Date on Which Promise to Pay Was Given |
| `Status` |  | |  | `cast( Status as bdm_promise_state preserving type )` | `CHAR(1)` | State of Promise to Pay |
| `CaseSystemStatus` |  | |  |  | `CHAR(3)` | Case: System Status |
| `CustomerCountry` |  | |  | `cast( _Customer._StandardAddress.Country as farp_land1 preserving type )` | `CHAR(3)` | Country / Region Key |
| `CustomerRegion` |  | | `_Customer._StandardAddress` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `CollectionSpecialistUserName` |  | |  |  | `CHAR(12)` | Collection Specialist |
| `CollectionSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `CustomerBasicAuthorizationGrp` |  | | `_Customer` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `CustomerAccountGroup` |  | | `_Customer` | `CustomerAccountGroup` | `CHAR(4)` | Customer Account Group |
| `DisplayCurrency` |  | |  | `cast( :P_DisplayCurrency as disp_curr preserving type )` | `CUKY(5)` | Display Currency |
| `ExchangeRateType` |  | |  | `cast( :P_ExchangeRateType as kurst preserving type)` | `CHAR(4)` | Exchange Rate Type |
| `PromisedAmount` |  | |  | `cast( PromisedAmountInDspCrcy as bdm_promised_amount preserving type )` | `CURR(15)` | Amount Promised for Payment |
| `PaidAmount` |  | |  | `cast( PaidAmountInDspCrcy as bdm_paid_amount preserving type )` | `CURR(15)` | Amount Paid |
| `PromiseToPayDueDays` |  | |  | `cast( PromiseToPayDueDays as farp_promise_to_pay_due_days preserving type )` | `INT4(10)` | Promise To Pay Due Days |
| `PromiseToPayDueIntervalInDays` |  | |  | `cast( PromiseToPayDueIntervalInDays as farp_p2p_due_intvl_in_days preserving type )` | `INT2(5)` | Promise To Pay Due Period in Days |
| `NetDueInterval1InDays` |  | |  | `cast( NetDueInterval1InDays as farp_due_interval1 preserving type )` | `INT2(5)` | Net Due Interval 1 in Days |
| `NetDueInterval2InDays` |  | |  | `cast( NetDueInterval2InDays as farp_due_interval2 preserving type )` | `INT2(5)` | Net Due Interval 2 in Days |
| `NetDueInterval3InDays` |  | |  | `cast( NetDueInterval3InDays as farp_due_interval3 preserving type )` | `INT2(5)` | Net Due Interval 3 in Days |
| `OpenAmountInDisplayCrcy` |  | |  | `cast( OpenAmountInDisplayCrcy as farp_p2p_openamt preserving type )` | `CURR(23)` | Open Promised Amount |
| `BrokenAmountInDisplayCrcy` |  | |  | `cast( BrokenAmountInDisplayCrcy as farp_brokenamt preserving type )` | `CURR(23)` | Broken Amount |
| `PromiseToPayDueIntervalText` |  | |  | `cast( PromiseToPayDueIntervalText as farp_due_intv_p2p_text preserving type )` | `CHAR(18)` | Promise To Pay Due Period in Days |
| `DueIntvl1OpenAmtInDspCrcy` |  | |  | `cast( DueIntvl1OpenAmtInDspCrcy as farp_intvl1_p2p_amt_dspcrcy preserving type )` | `CURR(23)` | Payment Promises in 1st Period |
| `DueIntvl2OpenAmtInDspCrcy` |  | |  | `cast( DueIntvl2OpenAmtInDspCrcy as farp_intvl2_p2p_amt_dspcrcy preserving type )` | `CURR(23)` | Payment Promises in 2st Period |
| `DueIntvl3OpenAmtInDspCrcy` |  | |  | `cast( DueIntvl3OpenAmtInDspCrcy as farp_intvl3_p2p_amt_dspcrcy preserving type )` | `CURR(23)` | Payment Promises in 3rd Period |
| `DueIntvl4OpenAmtInDspCrcy` |  | |  | `cast( DueIntvl4OpenAmtInDspCrcy as farp_intvl4_p2p_amt_dspcrcy preserving type )` | `CURR(23)` | Payment Promises in 4th Period |
| `_ContactCard` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_CollectionSegment` | | ✓ | | | | |
| `_CaseSystemStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ContactCard` | `I_DisputeCaseContact` | [0..1] |
| `_Company` | `I_CompanyCode` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_CollectionSegment` | `I_CollectionSegment` | [0..1] |
| `_CaseSystemStatus` | `I_CaseStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROMISETOPAYOVERVIEW')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROMISETOPAYOVERVIEW')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IP2POVERVIEW'
//@AbapCatalog.compiler.compareFilter:true
@EndUserText.label: 'Promise To Pay Overview - Cube'
@VDM.viewType: #COMPOSITE
@Analytics.dataCategory : #CUBE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'DisputeCaseUUID'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE ]
define view I_PromiseToPayOverview
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate               : sydate,
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency       : vdm_v_display_currency,
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType      : kurst_curr,
    @Consumption.hidden: true
    @Consumption.defaultValue: 10
    P_NetDueInterval1InDays : farp_due_interval1,
    @Consumption.hidden: true
    @Consumption.defaultValue: 20
    P_NetDueInterval2InDays : farp_due_interval2,
    @Consumption.hidden: true
    @Consumption.defaultValue: 30
    P_NetDueInterval3InDays : farp_due_interval3

  as select from P_PromiseToPay4
                 ( P_KeyDate : $parameters.P_KeyDate,
                 P_DisplayCurrency : $parameters.P_DisplayCurrency,
                 P_ExchangeRateType : $parameters.P_ExchangeRateType,
                 P_NetDueInterval1InDays : :P_NetDueInterval1InDays,
                 P_NetDueInterval2InDays : :P_NetDueInterval2InDays,
                 P_NetDueInterval3InDays : :P_NetDueInterval3InDays
                 )
  //association [0..1] to I_PMContactCardUser as _ContactCard on $projection.CollectionSpecialistUserName = _ContactCard.UserID
  association [0..1] to I_DisputeCaseContact as _ContactCard       on  $projection.CollectionSpecialistUserName = _ContactCard.UserID
  association [0..1] to I_CompanyCode        as _Company           on  _Company.CompanyCode = $projection.CompanyCode
  association [0..1] to I_Customer           as _Customer          on  _Customer.Customer = $projection.Customer
  association [0..1] to I_Currency           as _DisplayCurrency   on  $projection.DisplayCurrency = _DisplayCurrency.Currency
  association [0..1] to I_Country            as _Country           on  $projection.CustomerCountry = _Country.Country
  association [0..1] to I_Region             as _Region            on  $projection.CustomerCountry = _Region.Country
                                                                   and $projection.CustomerRegion  = _Region.Region
  association [0..1] to I_CollectionSegment  as _CollectionSegment on  $projection.CollectionSegment = _CollectionSegment.CollectionSegment
  association [0..1] to I_CaseStatus         as _CaseSystemStatus  on  $projection.CaseSystemStatus = _CaseSystemStatus.Status

{
  key cast( case_guid as scmg_case_guid preserving type )                                 as DisputeCaseUUID,
      CustomerContactUUID,
      GroupCurrency,
      @ObjectModel.foreignKey.association: '_Company'
      CompanyCode,
      @ObjectModel.foreignKey.association: '_Customer'
      Customer,
      DueDate,
      CreationDate,
      cast( Status as bdm_promise_state preserving type )                                 as Status,
      @ObjectModel.foreignKey.association: '_CaseSystemStatus'
      CaseSystemStatus,
      @ObjectModel.foreignKey.association: '_Country'
      cast( _Customer._StandardAddress.Country as farp_land1 preserving type )            as CustomerCountry,
      //    _Customer._StandardAddress.Country as CustomerCountry
      //   _Company.Country as CustomerCountry  ,
      @ObjectModel.foreignKey.association: '_Region'
      _Customer._StandardAddress.Region                                                   as CustomerRegion,
      //   _Company._Address.Region as CustomerRegion
      @ObjectModel.foreignKey.association: '_ContactCard'
      CollectionSpecialistUserName,
      @ObjectModel.foreignKey.association: '_CollectionSegment'
      CollectionSegment,
      _Customer.AuthorizationGroup                                                        as CustomerBasicAuthorizationGrp,
      _Customer.CustomerAccountGroup                                                      as CustomerAccountGroup,

      //  ,@ObjectModel.foreignKey.association: '_DisplayCurrency'
      @Semantics.currencyCode:true
      cast( :P_DisplayCurrency as disp_curr preserving type )                             as DisplayCurrency,
      cast( :P_ExchangeRateType as kurst preserving type)                                 as ExchangeRateType,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( PromisedAmountInDspCrcy as bdm_promised_amount preserving type )              as PromisedAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( PaidAmountInDspCrcy as bdm_paid_amount preserving type )                      as PaidAmount,
      @DefaultAggregation: #MAX
      cast( PromiseToPayDueDays as farp_promise_to_pay_due_days preserving type )         as PromiseToPayDueDays,
      @DefaultAggregation: #MAX
      @ObjectModel.text.element: 'PromiseToPayDueIntervalText'
      cast( PromiseToPayDueIntervalInDays as farp_p2p_due_intvl_in_days preserving type ) as PromiseToPayDueIntervalInDays,
      @DefaultAggregation: #MAX
      cast( NetDueInterval1InDays as farp_due_interval1 preserving type )                 as NetDueInterval1InDays,
      @DefaultAggregation: #MAX
      cast( NetDueInterval2InDays as farp_due_interval2 preserving type )                 as NetDueInterval2InDays,
      @DefaultAggregation: #MAX
      cast( NetDueInterval3InDays as farp_due_interval3 preserving type )                 as NetDueInterval3InDays,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( OpenAmountInDisplayCrcy as farp_p2p_openamt preserving type )                 as OpenAmountInDisplayCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( BrokenAmountInDisplayCrcy as farp_brokenamt preserving type )                 as BrokenAmountInDisplayCrcy,

      //       ,@DefaultAggregation: #SUM
      //        @Semantics.amount.currencyCode: 'DisplayCurrency'
      //        cast( OverdueAmountInDisplayCrcy as FARP_OVERDUE_AMOUNT_DSP_CRCY ) as OverdueAmountInDisplayCrcy

      @Semantics.text:true
      //   @DefaultAggregation:#NONE
      cast( PromiseToPayDueIntervalText as farp_due_intv_p2p_text preserving type )       as PromiseToPayDueIntervalText,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( DueIntvl1OpenAmtInDspCrcy as farp_intvl1_p2p_amt_dspcrcy preserving type )    as DueIntvl1OpenAmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( DueIntvl2OpenAmtInDspCrcy as farp_intvl2_p2p_amt_dspcrcy preserving type )    as DueIntvl2OpenAmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( DueIntvl3OpenAmtInDspCrcy as farp_intvl3_p2p_amt_dspcrcy preserving type )    as DueIntvl3OpenAmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( DueIntvl4OpenAmtInDspCrcy as farp_intvl4_p2p_amt_dspcrcy preserving type )    as DueIntvl4OpenAmtInDspCrcy,
      _ContactCard,
      _DisplayCurrency,
      _Country,
      _Region,
      _Company,
      _Customer,
      _CollectionSegment,
      _CaseSystemStatus
}
```
