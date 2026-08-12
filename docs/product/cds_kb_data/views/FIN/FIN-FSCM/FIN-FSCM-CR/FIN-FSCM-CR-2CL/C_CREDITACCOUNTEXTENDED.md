---
name: C_CREDITACCOUNTEXTENDED
description: "This CDS view retrieves information related to business partners in SAP Credit Management. It provides detailed information about the credit limit, the requested credit limit, and the exposure amount. This CDS view provides the data to answer the following business questions: What is the requested credit limit amount and the actual credit limit amount? When was the credit limit amount changed? How long is the credit limit valid? Is the business partner critical? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCOUNTEXTENDED')/$value
semantic_en: "This CDS view retrieves information related to business partners in SAP Credit Management. It provides detailed information about the credit limit, the requested credit limit, and the exposure amount. This CDS view provides the data to answer the following business questions: What is the requested credit limit amount and the actual credit limit amount? When was the credit limit amount changed? How long is the credit limit valid? Is the business partner critical? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Account Extended — CDS view tiêu dùng dựa trên I_CreditAccountExtended."
keywords:
  - "credit"
  - "account"
  - "extended"
  - "business"
  - "partner"
  - "segment"
  - "name"
  - "risk"
  - "class"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - lob:finance
  - account
---
# C_CREDITACCOUNTEXTENDED

**This CDS view retrieves information related to business partners in SAP Credit Management. It provides detailed information about the credit limit, the requested credit limit, and the exposure amount. This CDS view provides the data to answer the following business questions: What is the requested credit limit amount and the actual credit limit amount? When was the credit limit amount changed? How long is the credit limit valid? Is the business partner critical? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCOUNTEXTENDED')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` | ✓ | |  |  | `CHAR(10)` | Credit Segment |
| `BusinessPartnerName` |  | | `_Partner` | `BusinessPartnerName` | `CHAR(81)` |  |
| `CreditSegmentName` |  | |  | `_CreditSegment._Text[1:Language = $session.system_language].CreditSegmentName` | `CHAR(50)` | Name of Credit Segment |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CreditRiskClassName` |  | |  | `_CreditRiskClass._Text[1:Language = $session.system_language].CreditRiskClassName` | `CHAR(40)` | Name of Risk Class |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region |
| `CountryName` |  | |  | `_Country._Text[1:Language = $session.system_language].CountryName` | `CHAR(50)` | Country/Region Name |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `RegionName` |  | |  | `_Region._RegionText[1:Language = $session.system_language].RegionName` | `CHAR(20)` | Description |
| `DisplayCurrency` |  | |  | `$parameters.P_DisplayCurrency` | `CUKY(5)` |  |
| `CustomerCreditExposureAmount` |  | |  |  | `CURR(23)` | Credit Exposure Amount |
| `CustomerCreditLimitAmount` |  | |  |  | `CURR(23)` | Customer's Credit Limit |
| `CreditLimitCalculatedAmount` |  | |  |  | `CURR(23)` | Calculated Credit Limit |
| `CreditLimitRequestedAmount` |  | |  |  | `CURR(23)` | Requested Credit Limit |
| `NumberOfBusinessPartners` |  | |  |  | `INT4(10)` | Number of Business Partners |
| `CrdtLimitIsEqualCrdtLimitCalcd` |  | |  |  | `CHAR(1)` | Current Limit Vs. Calculated Limit |
| `CrdtLimitIsEqualCrdtLimitReqd` |  | |  |  | `CHAR(1)` | Current Limit Vs. Requested Limit |
| `CreditAccountIsBlocked` |  | |  |  | `CHAR(1)` | Blocked Credit Account |
| `CreditLimitValidityEndDate` |  | |  |  | `DATS(8)` | Credit Limit Validity End Date |
| `CreditLimitLastChangeDate` |  | |  |  | `DATS(8)` | Last Change Date for Credit Limit |
| `CreditAccountGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `CreditAccountGroupName` |  | |  | `_CustomerCreditGroup._Text[1:Language = $session.system_language].CreditAccountGroupName` | `CHAR(40)` | Text for Credit Group |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `CreditAccountResubmissionDate` |  | |  |  | `DATS(8)` | Resubmission Date |
| `BusinessPartnerIsCritical` |  | |  |  | `CHAR(1)` | Special Attention Required |
| `CreditLimitIsZero` |  | |  |  | `CHAR(1)` | Credit Limit is Zero |
| `CreditAccountBlockReason` |  | |  |  | `CHAR(2)` | Credit Account Blocking Reason |
| `CrdtAcctBlockReasonDescription` |  | |  | `_BlockReason._Text[1:Language = $session.system_language].CrdtAcctBlockReasonDescription` | `CHAR(40)` | SAP Credit Management: Description for Blocks |
| `CrdtLmtIsReqdFrmAutomCalc` |  | |  |  | `CHAR(1)` | Credit Limit Request from Automatic Calculation |
| `CreditLimitReqdValidityEndDate` |  | |  |  | `DATS(8)` | Credit Limit Requested Validity End Date |
| `CreditLimitRequestDate` |  | |  |  | `DATS(8)` | Credit Limit Requested Date |
| `CrdtLimitValidityRemainingDays` |  | |  |  | `INT4(10)` | Limit Remaining Days |
| `CreditLimitLastChangeDays` |  | |  |  | `INT4(10)` | Days Since Last Change Made to Credit Limit |
| `CreditLimitUtilizationPct` |  | |  | `'CASE WHEN CustomerCreditExposureAmount = 0 THEN 0 ELSE CASE WHEN CustomerCreditLimitAmount < 0 OR CustomerCreditLimitAmount > 0 THEN NDIV0(CustomerCreditExposureAmount / CustomerCreditLimitAmount) *100 ELSE 9999999 END END' 1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCOUNTEXTENDED')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITACCOUNTEXTENDED')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCRDTACCTEXTEND'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@EndUserText.label: 'Credit Account Extended'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_CreditAccountExtended
  with parameters
    //    @EndUserText.label: 'Exchange Rate Type'
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst_curr,

    //    @EndUserText.label: 'Display Currency'
    @Consumption.defaultValue: 'USD'
    P_DisplayCurrency  : vdm_v_display_currency,

    // Read also line items from BSEG
    @Consumption.defaultValue: 'Y' // Y/N
    P_ReadLineItem     : read_fiar_lineitems,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate          : sydate,

    //obsolete, just kept for compatibility reasons
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language         : sylangu

  as select from I_CreditAccountExtended (
                                           P_ExchangeRateType : :P_ExchangeRateType,
                                           P_DisplayCurrency: :P_DisplayCurrency,
                                           P_ReadLineItem : :P_ReadLineItem,
                                           P_KeyDate : :P_KeyDate
                                           )
{
  key BusinessPartner,
  key CreditSegment,
      _Partner.BusinessPartnerName,
      _CreditSegment._Text[1:Language = $session.system_language].CreditSegmentName            as CreditSegmentName,
      CreditRiskClass,
      _CreditRiskClass._Text[1:Language = $session.system_language].CreditRiskClassName        as CreditRiskClassName,
      Country,
      _Country._Text[1:Language = $session.system_language].CountryName                        as CountryName,
      Region,
      _Region._RegionText[1:Language = $session.system_language].RegionName                    as RegionName,
      @Semantics.currencyCode: true
      $parameters.P_DisplayCurrency                                                            as DisplayCurrency,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CustomerCreditExposureAmount,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CustomerCreditLimitAmount,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CreditLimitCalculatedAmount,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CreditLimitRequestedAmount,
      NumberOfBusinessPartners,
      CrdtLimitIsEqualCrdtLimitCalcd,
      CrdtLimitIsEqualCrdtLimitReqd,
      CreditAccountIsBlocked,
      CreditLimitValidityEndDate,
      CreditLimitLastChangeDate,
      //      CreditCoordinator,

      // deprecated
      CreditAccountGroup,
      _CustomerCreditGroup._Text[1:Language = $session.system_language].CreditAccountGroupName as CreditAccountGroupName,

      @AnalyticsDetails.query.display: #KEY_TEXT
      CrdtMgmtBusinessPartnerGroup,

      CreditAccountResubmissionDate,
      BusinessPartnerIsCritical,
      CreditLimitIsZero,
      CreditAccountBlockReason,
      _BlockReason._Text[1:Language = $session.system_language].CrdtAcctBlockReasonDescription as CrdtAcctBlockReasonDescription,
      CrdtLmtIsReqdFrmAutomCalc,
      CreditLimitReqdValidityEndDate,
      CreditLimitRequestDate,
      CrdtLimitValidityRemainingDays,
      CreditLimitLastChangeDays,

      //  CreditLimitUtilizationPct,
      @DefaultAggregation: #FORMULA
      @EndUserText.label:'Credit Limit Used %'
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula:
        'CASE WHEN CustomerCreditExposureAmount = 0 THEN 0 ELSE
           CASE WHEN CustomerCreditLimitAmount < 0 OR CustomerCreditLimitAmount > 0
             THEN NDIV0(CustomerCreditExposureAmount / CustomerCreditLimitAmount) *100
             ELSE 9999999
           END
         END'
      1                                                                                        as CreditLimitUtilizationPct
}
```
