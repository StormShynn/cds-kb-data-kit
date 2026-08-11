---
name: C_CREDITLIMITUTILIZATIONQ
description: "This CDS view retrieves details about a credit limit and its usage in percent in SAP Credit Management. This CDS view provides the data to answer the following business questions: How much is the exposure amount in percent in relation to the credit limit amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLIMITUTILIZATIONQ')/$value
semantic_en: "This CDS view retrieves details about a credit limit and its usage in percent in SAP Credit Management. This CDS view provides the data to answer the following business questions: How much is the exposure amount in percent in relation to the credit limit amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Limit Utilization with Threshold — CDS view tiêu dùng dựa trên I_CreditLimitUtilization."
keywords:
  - "credit"
  - "limit"
  - "utilization"
  - "with"
  - "threshold"
  - "segment"
  - "business"
  - "partner"
  - "name"
  - "critical"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - lob:finance
---
# C_CREDITLIMITUTILIZATIONQ

**This CDS view retrieves details about a credit limit and its usage in percent in SAP Credit Management. This CDS view provides the data to answer the following business questions: How much is the exposure amount in percent in relation to the credit limit amount? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLIMITUTILIZATIONQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditSegment` | ✓ | |  |  | `CHAR(10)` | Credit Segment |
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerName` |  | | `_Partner` | `BusinessPartnerName` | `CHAR(81)` |  |
| `CreditSegmentName` |  | |  | `_CreditSegment._Text[1:Language = :P_Language].CreditSegmentName` | `CHAR(50)` | Name of Credit Segment |
| `BusinessPartnerIsCritical` |  | |  |  | `CHAR(1)` | Special Attention Required |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CreditRiskClassName` |  | |  | `_CreditRiskClass._Text[1:Language = :P_Language].CreditRiskClassName` | `CHAR(40)` | Name of Risk Class |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `CountryName` |  | |  | `_Country._Text[1:Language = :P_Language].CountryName` | `CHAR(50)` | Country/Region Name |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `RegionName` |  | |  | `_Region._RegionText[1:Language = :P_Language].RegionName` | `CHAR(20)` | Description |
| `CreditAccountGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group (Obsolete) |
| `CreditAccountGroupName` |  | |  | `_CustomerCreditGroup._Text[1:Language = :P_Language].CreditAccountGroupName` | `CHAR(40)` | Text for Credit Group |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `DisplayCurrency` |  | |  | `$parameters.P_DisplayCurrency` | `CUKY(5)` |  |
| `CreditSegmentCurrency` |  | |  |  | `CUKY(5)` | Credit Segment Currency |
| `CustomerCreditExposureAmount` |  | |  |  | `CURR(23)` | Credit Exposure Amount |
| `CustomerCreditLimitAmount` |  | |  |  | `CURR(23)` | Customer's Credit Limit |
| `HedgedExposureAmount` |  | |  |  | `CURR(15)` | Hedged Credit Exposure |
| `CustomerIsAboveThreshold` |  | |  |  | `INT4(10)` | Threshold exceeded |
| `AboveLimitAmtInDspCrcy` |  | |  | `CustomerCreditExposureAmount - CustomerCreditLimitAmount` | `CURR(24)` |  |
| `AbvThldWthnLmtAmtInDspCrcy` |  | |  | `'CustomerCreditExposureAmount - NDIV0(CustomerCreditLimitAmount * ValuationThresholdPercent / 100)' 1` | `INT1(3)` |  |
| `AbvThldPct` |  | |  | `'CASE WHEN CustomerCreditLimitAmount < 0 OR CustomerCreditLimitAmount > 0 THEN NDIV0( $projection.AbvThldWthnLmtAmtInDspCrcy / CustomerCreditLimitAmount) * 100 ELSE 200 - ValuationThresholdPercent END' 1` | `INT1(3)` |  |
| `CreditLimitUtilizationPct` |  | |  | `1` | `INT1(3)` |  |
| `WthnThldCrdtLmtUtilizationPct` |  | |  | `1` | `INT1(3)` |  |
| `LimitExceededPct` |  | |  | `1` | `INT1(3)` |  |
| `CreditLimitExceededPct` |  | |  | `'CASE WHEN CustomerCreditExposureAmount = 0 THEN 0 ELSE CASE WHEN $projection.AboveLimitAmtInDspCrcy < 0 THEN 0 ELSE $projection.LimitExceededPct END END' 1` | `INT1(3)` |  |
| `RemainingCreditPct` |  | |  | `'CASE WHEN $projection.AboveLimitAmtInDspCrcy > 0 THEN 0 ELSE NDIV0(-$projection.AboveLimitAmtInDspCrcy / CustomerCreditLimitAmount) *100 END' 1` | `INT1(3)` |  |
| `AbvThldWithinLmtPct` |  | |  | `'CASE WHEN $projection.AbvThldWthnLmtAmtInDspCrcy < 0 THEN 0 ELSE $projection.AbvThldPct - $projection.CreditLimitExceededPct END' 1` | `INT1(3)` |  |
| `AbvThldWithinLmtCrdtUtilznPct` |  | |  | `'CASE WHEN CustomerCreditExposureAmount = 0 THEN 0 ELSE CASE WHEN CustomerCreditLimitAmount < 0 OR CustomerCreditLimitAmount > 0 THEN $projection.AbvThldWithinLmtPct ELSE 20 END END' 1` | `INT1(3)` |  |
| `CreditLimitUtilizationAllPct` |  | |  | `'CASE WHEN CustomerCreditExposureAmount = 0 THEN 0 ELSE CASE WHEN CustomerCreditLimitAmount < 0 OR CustomerCreditLimitAmount > 0 THEN NDIV0(CustomerCreditExposureAmount / CustomerCreditLimitAmount) *100 ELSE 9999999 END END' 1` | `INT1(3)` |  |
| `CrdtUsageWthnLmtAmtInDspCrcy` |  | |  |  | `CURR(23)` | Credit Amount used within Limit |
| `CrdtLmtExceededAmtInDspCrcy` |  | |  |  | `CURR(23)` | Credit Limit Exceeded Amount |
| `RemainingCreditAmtInDspCrcy` |  | |  |  | `CURR(23)` | Remaining Credit Amount |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLIMITUTILIZATIONQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITLIMITUTILIZATIONQ')/$value)*

```abap
//@EndUserText.label: 'Credit Limit Utilization with Threshold'
@AbapCatalog.sqlViewName: 'CCREDLIMUTILQ'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@EndUserText.label: 'Credit Limit Utilization with Threshold' // "Note n. 2557349
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_CreditLimitUtilizationQ
  with parameters
    //    @EndUserText.label: 'Threshold percent'
    @Consumption.defaultValue: '80'
    P_ValuationThresholdPercent : tb_prozlimit /* default '80' */,

    //    @EndUserText.label: 'Exchange Rate Type'
    @Consumption.valueHelpDefinition: [{ entity: { name: 'I_ExchangeRateType' , element: 'ExchangeRateType' }
                                      }]    
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType          : kurst_curr,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate                   : sydate,

    //    @EndUserText.label: 'Display Currency'
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency           : vdm_v_display_currency,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language                  : sylangu,

    // Read also line items from BSEG
    @Consumption.defaultValue: 'Y' // Y/N
    P_ReadLineItem              : read_fiar_lineitems

  as select from I_CreditLimitUtilization (P_ExchangeRateType : :P_ExchangeRateType,  P_DisplayCurrency: :P_DisplayCurrency,
                                           P_KeyDate : :P_KeyDate, P_ValuationThresholdPercent: :P_ValuationThresholdPercent,
                                           P_ReadLineItem : :P_ReadLineItem )
{
  key CreditSegment,

  key BusinessPartner,

      _Partner.BusinessPartnerName,

      _CreditSegment._Text[1:Language = :P_Language].CreditSegmentName            as CreditSegmentName,

      BusinessPartnerIsCritical,
//      _Indicator._IndicatorText[1:Language = :P_Language].IndicatorText,

      CreditRiskClass,
      _CreditRiskClass._Text[1:Language = :P_Language].CreditRiskClassName        as CreditRiskClassName,

      Country,
      _Country._Text[1:Language = :P_Language].CountryName                        as CountryName,
      Region,
      _Region._RegionText[1:Language = :P_Language].RegionName                    as RegionName,

      CreditAccountGroup, //deprecated
      _CustomerCreditGroup._Text[1:Language = :P_Language].CreditAccountGroupName as CreditAccountGroupName,

      @AnalyticsDetails.query.display: #KEY_TEXT      
      CrdtMgmtBusinessPartnerGroup,
      
      //DisplayCurrency as DisplayCurrency,
      @Semantics.currencyCode: true
      $parameters.P_DisplayCurrency                                               as DisplayCurrency, // "Note n. 2557349

      @Semantics.currencyCode: true
      CreditSegmentCurrency,

      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CustomerCreditExposureAmount,      

      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CustomerCreditLimitAmount,
      
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      HedgedExposureAmount,     

      //  Is Customer above threshold (0/1)?
      //------------------------------------
      CustomerIsAboveThreshold,

      //-------------------------------------------------------------------------
      // Percent values calculated here because of aggregation issues
      // (aggregations like #SUM, #MIN, #MAX don't work for percent values):

      // help field
      @Consumption.hidden: true
      CustomerCreditExposureAmount -  CustomerCreditLimitAmount                   as AboveLimitAmtInDspCrcy,

      // help field, hidden
      @Consumption.hidden: true
      @DefaultAggregation: #FORMULA
      //    @EndUserText.label: 'AbvThldWithinLmt'
      @EndUserText.label: 'AbvThldWthnLmtAmtInDspCrcy'
      @AnalyticsDetails.query.formula:
         'CustomerCreditExposureAmount - NDIV0(CustomerCreditLimitAmount * ValuationThresholdPercent / 100)'
      //    1 as AbvThldWithinLmt, //not approved as GFN
      1                                                                           as AbvThldWthnLmtAmtInDspCrcy,


      // help field, hidden
      @Consumption.hidden: true
      @DefaultAggregation: #FORMULA
      //    @EndUserText.label: 'AbvThldWithinLmtCrdtUtilznPct2'
      @EndUserText.label: 'AbvThldPct'
      @AnalyticsDetails.query.formula:
      //         'NDIV0( $projection.AbvThldWthnLmtAmtInDspCrcy / CustomerCreditLimitAmount) * 100'
           'CASE WHEN CustomerCreditLimitAmount < 0 OR CustomerCreditLimitAmount > 0 
            THEN NDIV0( $projection.AbvThldWthnLmtAmtInDspCrcy / CustomerCreditLimitAmount) * 100
            ELSE 200 - ValuationThresholdPercent
         END'
      //    1 as AbvThldWithinLmtCrdtUtilznPct2,  //not approved as GFN
      1                                                                           as AbvThldPct,



      //   CreditLimitUtilizationPct,   // this is 100% maximal
      //   ----------------------------------------------------
      //   @DefaultAggregation: #FORMULA
      //   @AnalyticsDetails.exceptionAggregationSteps: {exceptionAggregationBehavior: #NONE,
      //                                                  exceptionAggregationElements:  [ 'CreditSegment', 'BusinessPartner' ] }
      //   0 + CreditLimitUtilizationPct as CreditLimitUtilizationPct,
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Credit Limit Used %'
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.AboveLimitAmtInDspCrcy > 0 
                                           THEN 100
                                           ELSE NDIV0(CustomerCreditExposureAmount / CustomerCreditLimitAmount) *100
                                      END'
      1                                                                           as CreditLimitUtilizationPct,


      //  CreditUtilizationWthnThrldPct,   // this is threshold % value maximal
      //  ---------------------------------------------------------------------
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Used Within Threshold %'
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula: 'CASE WHEN $projection.CreditLimitUtilizationPct < ValuationThresholdPercent 
                                           THEN $projection.CreditLimitUtilizationPct
                                           ELSE ValuationThresholdPercent
                                      END'
      1                                                                           as WthnThldCrdtLmtUtilizationPct,


      //    CreditLimitExceededPct,    // this is the percent value ABOVE credit limit
      //    If CustomerCreditLimitAmount = 0 we set a fixed value of 99999
      //    --------------------------------------------------------------------------
      // help field, hidden
      @Consumption.hidden: true
      @DefaultAggregation: #FORMULA
      //    @EndUserText.label: 'HelpField1'
      @EndUserText.label: 'LimitExceededPct'
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula: 'CASE WHEN CustomerCreditLimitAmount < 0 OR CustomerCreditLimitAmount > 0
                                         THEN NDIV0($projection.AboveLimitAmtInDspCrcy / CustomerCreditLimitAmount) *100
                                         ELSE 99999999                                              
                                      END'
      //    1 as HelpField1,      //not approved as a GFN
      1                                                                           as LimitExceededPct,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Credit Limit Exceeded %'
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula:
           'CASE WHEN CustomerCreditExposureAmount = 0 
               THEN 0
               ELSE 
                   CASE WHEN $projection.AboveLimitAmtInDspCrcy < 0 
                       THEN 0  
                       ELSE $projection.LimitExceededPct                                                                                                                                         
                   END
             END'
      1                                                                           as CreditLimitExceededPct,
      //////    @AnalyticsDetails.query.formula: 'CASE WHEN $projection.AboveLimitAmtInDspCrcy < 0
      //////                                           THEN 0
      //////                                           ELSE NDIV0($projection.AboveLimitAmtInDspCrcy / CustomerCreditLimitAmount) *100
      //////                                      END'


      //    RemainingCreditPct,    //  this is 100% maximum
      //    -----------------------------------------------
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Remaining Credit %'
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula: 
        'CASE WHEN $projection.AboveLimitAmtInDspCrcy > 0 
           THEN 0
           ELSE NDIV0(-$projection.AboveLimitAmtInDspCrcy / CustomerCreditLimitAmount) *100
         END'
      1                                                                           as RemainingCreditPct,


      //  AbvThldWithinLmtCrdtUtilznPct,
      //  Example: Limit=100 USD, Credit used = 90 USD, Threshold = 80% => AbvThldWithinLmtCrdtUtilznPct=10%
      //  -------------------------------------------------------------------------------------------------
      // help field, hidden
      @Consumption.hidden: true
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'AbvThldWithinLmtPct'
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula:
         'CASE WHEN $projection.AbvThldWthnLmtAmtInDspCrcy < 0 THEN 0
             ELSE $projection.AbvThldPct - $projection.CreditLimitExceededPct
        END'
      //    1 as HelpField2,   //not approved as GFN
      1                                                                           as AbvThldWithinLmtPct,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Above Threshold Within Limit %'
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula:
        'CASE WHEN CustomerCreditExposureAmount = 0 THEN 0 ELSE
           CASE WHEN CustomerCreditLimitAmount < 0 OR CustomerCreditLimitAmount > 0 
             THEN $projection.AbvThldWithinLmtPct
             ELSE 20
           END
         END'
      1                                                                           as AbvThldWithinLmtCrdtUtilznPct,


      //  CreditLimitUtilizationAllPct,
      //  sum of percent values, this is needed only for sorting purposes in the chart
      //  this value is more than 100% if credit limit is exceeded
      //  ----------------------------------------------------------------------------
      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Limit Used Overall %'
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula:
        'CASE WHEN CustomerCreditExposureAmount = 0 THEN 0 ELSE
          CASE WHEN CustomerCreditLimitAmount < 0 OR CustomerCreditLimitAmount > 0
           THEN NDIV0(CustomerCreditExposureAmount / CustomerCreditLimitAmount) *100
           ELSE 9999999
          END
         END'           
//          'CASE WHEN CustomerCreditExposureAmount = 0 THEN 0 ELSE
//              CASE WHEN CustomerCreditLimitAmount < 0 OR CustomerCreditLimitAmount > 0 
//                THEN $projection.CreditLimitUtilizationPct + $projection.CreditLimitExceededPct
//                ELSE 9999999
//              END
//            END'
      1                                                                           as CreditLimitUtilizationAllPct,


      // Calculated Amounts:
      //--------------------
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CrdtUsageWthnLmtAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CrdtLmtExceededAmtInDspCrcy,

      @Semantics.amount.currencyCode: 'DisplayCurrency'
      RemainingCreditAmtInDspCrcy
};
```
