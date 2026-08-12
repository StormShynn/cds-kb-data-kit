---
name: I_CREDITLIMITUTILIZATION
description: "This CDS view is designed to provide insights into customer credit utilization by aggregating and analyzing data related to credit limits, exposures, and thresholds. It serves as a composite analytical provider that can be used to assess the credit status of business partners. This CDS view provides the data to answer the following business questions: What is the current credit exposure of a customer in a specified currency? How much of the customer's credit limit has been utilized? Is the customer exceeding their credit limit, and by how much? What is the remaining credit available for a customer? How much credit usage is within the set limit? What is the credit risk class associated with a customer? Which business partners are considered critical based on their credit utilization? How does the credit exposure compare to the valuation threshold percentage? What are the details of the credit segment and currency associated with a customer? How does the credit utilization vary across different regions and countries? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITUTILIZATION')/$value
semantic_en: "This CDS view is designed to provide insights into customer credit utilization by aggregating and analyzing data related to credit limits, exposures, and thresholds. It serves as a composite analytical provider that can be used to assess the credit status of business partners. This CDS view provides the data to answer the following business questions: What is the current credit exposure of a customer in a specified currency? How much of the customer's credit limit has been utilized? Is the customer exceeding their credit limit, and by how much? What is the remaining credit available for a customer? How much credit usage is within the set limit? What is the credit risk class associated with a customer? Which business partners are considered critical based on their credit utilization? How does the credit exposure compare to the valuation threshold percentage? What are the details of the credit segment and currency associated with a customer? How does the credit utilization vary across different regions and countries? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Customer Credit Utilization - Cube — CDS view giao diện dựa trên P_CreditLimitUtilization."
keywords:
  - "customer"
  - "credit"
  - "utilization"
  - "cube"
  - "segment"
  - "business"
  - "partner"
  - "critical"
  - "risk"
  - "class"
  - "country"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-CR-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
---
# I_CREDITLIMITUTILIZATION

**This CDS view is designed to provide insights into customer credit utilization by aggregating and analyzing data related to credit limits, exposures, and thresholds. It serves as a composite analytical provider that can be used to assess the credit status of business partners. This CDS view provides the data to answer the following business questions: What is the current credit exposure of a customer in a specified currency? How much of the customer's credit limit has been utilized? Is the customer exceeding their credit limit, and by how much? What is the remaining credit available for a customer? How much credit usage is within the set limit? What is the credit risk class associated with a customer? Which business partners are considered critical based on their credit utilization? How does the credit exposure compare to the valuation threshold percentage? What are the details of the credit segment and currency associated with a customer? How does the credit utilization vary across different regions and countries? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITUTILIZATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditSegment` | ✓ | |  | `cast( P_CreditLimitUtilization.CreditSegment as farp_credit_segment preserving type )` | `CHAR(10)` | Credit Segment |
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerIsCritical` |  | |  | `cast( BusinessPartnerIsCritical as farp_critical_account preserving type )` | `CHAR(1)` | Special Attention Required |
| `CreditRiskClass` |  | |  | `cast( CreditRiskClass as farp_risk_class preserving type )` | `CHAR(3)` | Risk Class |
| `Country` |  | |  | `cast( _BusinessPartner._CurrentDefaultAddress._StandardAddress.Country as farp_country preserving type )` | `CHAR(3)` | Country/Region |
| `Region` |  | | `_BusinessPartner._CurrentDefaultAddress._StandardAddress` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `CreditAccountGroup` |  | |  | `cast( _Partner.CreditAccountGroup as ukm_cred_group_deprecated preserving type )` | `NUMC(4)` | Customer Credit Group (Obsolete) |
| `CrdtMgmtBusinessPartnerGroup` |  | |  | `cast(_Partner.CrdtMgmtBusinessPartnerGroup as ukm_cred_group preserving type)` | `NUMC(4)` | Customer Credit Group |
| `DisplayCurrency` |  | |  | `cast( :P_DisplayCurrency as disp_curr preserving type )` | `CUKY(5)` | Display Currency |
| `CreditSegmentCurrency` |  | |  | `cast( P_CreditLimitUtilization.CreditSegmentCurrency as farp_sgm_currency preserving type)` | `CUKY(5)` | Credit Segment Currency |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `KeyDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `ValuationThresholdPercent` |  | |  |  | `DEC(5)` |  |
| `CustomerCreditExposureAmount` |  | |  | `cast( CustomerCreditExposureAmount as farp_credit_exposure preserving type )` | `CURR(23)` | Credit Exposure Amount |
| `HedgedExposureAmount` |  | |  | `cast( HedgedExposureAmount as farp_hedged_credit_exposure )` | `CURR(15)` | Hedged Credit Exposure |
| `CustomerCreditLimitAmount` |  | |  | `cast( CustomerCreditLimitAmount as farp_creditlimit_amt preserving type )` | `CURR(23)` | Customer's Credit Limit |
| `CustomerIsAboveThreshold` |  | |  | `cast( CustomerIsAboveThreshold as farp_threshold_exceeded )` | `INT4(10)` | Threshold exceeded |
| `CrdtLmtExceededAmtInDspCrcy` |  | |  | `cast( CrdtLmtExceededAmtInDspCrcy as farp_credlimit_exceeded_amt preserving type )` | `CURR(23)` | Credit Limit Exceeded Amount |
| `RemainingCreditAmtInDspCrcy` |  | |  | `cast( RemainingCreditAmtInDspCrcy_E as farp_remaining_credit_amt preserving type )` | `CURR(23)` | Remaining Credit Amount |
| `CrdtUsageWthnLmtAmtInDspCrcy` |  | |  | `cast( CrdtUsageWthnLmtAmtInDspCrcy as farp_crd_used_within_lmt_amt preserving type )` | `CURR(23)` | Credit Amount used within Limit |
| `_BusinessPartner` | | ✓ | | | | |
| `_Partner` | | ✓ | | | | |
| `_DisplayCurrency` | | ✓ | | | | |
| `_CreditSegmentCurrency` | | ✓ | | | | |
| `_CreditRiskClass` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_CreditSegment` | | ✓ | | | | |
| `_CustomerCreditGroup` | | ✓ | | | | |
| `_CrdtMBusPartnerGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_Partner` | `I_CreditManagementBP` | [0..1] |
| `_DisplayCurrency` | `I_Currency` | [1..1] |
| `_CreditSegmentCurrency` | `I_Currency` | [1..1] |
| `_CreditRiskClass` | `I_CreditRiskClass` | [1..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_CreditSegment` | `I_CreditManagementSegment` | [0..1] |
| `_CustomerCreditGroup` | `I_CustomerCreditGroup` | [0..1] |
| `_CrdtMBusPartnerGroup` | `I_CrdtMBusPartnerGroup` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITUTILIZATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITUTILIZATION')/$value)*

```abap
@EndUserText.label: 'Customer Credit Utilization - Cube'
@AbapCatalog.sqlViewName: 'ICREDLIMUTIL'
@AbapCatalog.compiler.compareFilter:true
@Analytics.dataCategory: #CUBE
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE ]
@Aggregation.allowPrecisionLoss: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_CreditLimitUtilization
  with parameters
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType          : kurst_curr,

    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency           : vdm_v_display_currency,

    P_KeyDate                   : vdm_v_exchange_rate_date,

    @Consumption.defaultValue: '80'
    P_ValuationThresholdPercent : tb_prozlimit,

    // Read also line items from BSEG
    @Consumption.defaultValue: 'Y' // Y/N
    P_ReadLineItem              : read_fiar_lineitems

  as select from P_CreditLimitUtilization
                 ( P_ExchangeRateType: :P_ExchangeRateType,
                 P_DisplayCurrency: :P_DisplayCurrency,
                 P_KeyDate: :P_KeyDate,
                 P_ThresholdPercent: :P_ValuationThresholdPercent,
                 P_ReadLineItem : :P_ReadLineItem )

  association [0..1] to I_BusinessPartner         as _BusinessPartner       on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_CreditManagementBP      as _Partner               on  $projection.BusinessPartner = _Partner.BusinessPartner

  association [1..1] to I_Currency                as _DisplayCurrency       on  $projection.DisplayCurrency = _DisplayCurrency.Currency
  association [1..1] to I_Currency                as _CreditSegmentCurrency on  $projection.CreditSegmentCurrency = _CreditSegmentCurrency.Currency
  association [1..1] to I_CreditRiskClass         as _CreditRiskClass       on  $projection.CreditRiskClass = _CreditRiskClass.CreditRiskClass
  association [0..1] to I_Country                 as _Country               on  $projection.Country = _Country.Country

  association [0..1] to I_Region                  as _Region                on  $projection.Country = _Region.Country
                                                                            and $projection.Region  = _Region.Region

  association [0..1] to I_CreditManagementSegment as _CreditSegment         on  $projection.CreditSegment = _CreditSegment.CreditSegment
  association [0..1] to I_CustomerCreditGroup     as _CustomerCreditGroup   on  $projection.CreditAccountGroup = _CustomerCreditGroup.CreditAccountGroup
  association [0..1] to I_CrdtMBusPartnerGroup    as _CrdtMBusPartnerGroup  on  $projection.CrdtMgmtBusinessPartnerGroup = _CrdtMBusPartnerGroup.CrdtMgmtBusinessPartnerGroup

{
      @ObjectModel.foreignKey.association: '_CreditSegment'
      //  key cast( cast( P_CreditLimitUtilization.CreditSegment as abap.char(10)) as farp_credit_segment preserving type ) as CreditSegment,
  key cast( P_CreditLimitUtilization.CreditSegment as farp_credit_segment preserving type )                    as CreditSegment,

      @ObjectModel.foreignKey.association: '_Partner'
  key P_CreditLimitUtilization.BusinessPartner                                                                 as BusinessPartner,

      //      @ObjectModel.foreignKey.association: '_Indicator'
      cast( BusinessPartnerIsCritical as farp_critical_account preserving type )                               as BusinessPartnerIsCritical,

      @ObjectModel.foreignKey.association: '_CreditRiskClass'
      cast( CreditRiskClass as farp_risk_class preserving type )                                               as CreditRiskClass,
      @ObjectModel.foreignKey.association: '_Country'
      cast( _BusinessPartner._CurrentDefaultAddress._StandardAddress.Country as farp_country preserving type ) as Country,

      @ObjectModel.foreignKey.association: '_Region'
      _BusinessPartner._CurrentDefaultAddress._StandardAddress.Region                                          as Region,

      // deprecated
      @ObjectModel.foreignKey.association: '_CustomerCreditGroup'
      cast( _Partner.CreditAccountGroup as ukm_cred_group_deprecated preserving type )                         as CreditAccountGroup, //deprecated

      @ObjectModel.foreignKey.association: '_CrdtMBusPartnerGroup'
      cast(_Partner.CrdtMgmtBusinessPartnerGroup as ukm_cred_group preserving type)                            as CrdtMgmtBusinessPartnerGroup,


      //    _Customer.AuthorizationGroup as CustomerBasicAuthorizationGrp,

      //      @ObjectModel.foreignKey.association: '_DisplayCurrency'
      @Semantics.currencyCode: true
      cast( :P_DisplayCurrency as disp_curr preserving type )                                                  as DisplayCurrency,

      //      @ObjectModel.foreignKey.association: '_CreditSegmentCurrency'
      //      @Semantics.currencyCode: true
      cast( P_CreditLimitUtilization.CreditSegmentCurrency as farp_sgm_currency preserving type)               as CreditSegmentCurrency,

      ExchangeRateType,

      KeyDate,

      @DefaultAggregation: #MAX
      ValuationThresholdPercent,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CustomerCreditExposureAmount as farp_credit_exposure preserving type )                             as CustomerCreditExposureAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( HedgedExposureAmount as farp_hedged_credit_exposure  )                                             as HedgedExposureAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CustomerCreditLimitAmount as farp_creditlimit_amt preserving type )                                as CustomerCreditLimitAmount,

      //  also a key figure
      @DefaultAggregation:  #SUM
      cast( CustomerIsAboveThreshold as farp_threshold_exceeded )                                              as CustomerIsAboveThreshold,


      //    @EndUserText.label: 'Credit Limit Exceeded'
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CrdtLmtExceededAmtInDspCrcy as farp_credlimit_exceeded_amt preserving type )                       as CrdtLmtExceededAmtInDspCrcy,

      //    @EndUserText.label: 'Remaining Credit Available'
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( RemainingCreditAmtInDspCrcy_E as farp_remaining_credit_amt preserving type )                       as RemainingCreditAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( CrdtUsageWthnLmtAmtInDspCrcy as farp_crd_used_within_lmt_amt preserving type )                     as CrdtUsageWthnLmtAmtInDspCrcy,

      _DisplayCurrency,
      _CreditSegmentCurrency,
      _CreditRiskClass,
      _CreditSegment,
      _Country,
      _Region,
      _BusinessPartner,
      _Partner,
      _CustomerCreditGroup,
      _CrdtMBusPartnerGroup
};
```
