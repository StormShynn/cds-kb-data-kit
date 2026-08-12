---
name: I_CREDITLIMITCHANGESITUATION
description: "This CDS view is designed to track and analyze changes in credit limits for business partners. It provides detailed information about the credit limit adjustments, including the old and new credit limits, the percentage change, and the total adjustment amount. This view is essential for monitoring credit management activities and ensuring that credit limits are adjusted appropriately based on business needs and risk assessments. This CDS view provides the data to answer the following business questions: What are the recent changes in credit limits for specific business partners? How much has the credit limit changed in terms of percentage and total amount? What are the old and new credit limits for a given business partner and credit segment? Which credit segment and currency are associated with the credit limit change? What credit score and limit calculation rules are applied to the business partner? To which credit management business partner group does the business partner belong? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITCHANGESITUATION')/$value
semantic_en: "This CDS view is designed to track and analyze changes in credit limits for business partners. It provides detailed information about the credit limit adjustments, including the old and new credit limits, the percentage change, and the total adjustment amount. This view is essential for monitoring credit management activities and ensuring that credit limits are adjusted appropriately based on business needs and risk assessments. This CDS view provides the data to answer the following business questions: What are the recent changes in credit limits for specific business partners? How much has the credit limit changed in terms of percentage and total amount? What are the old and new credit limits for a given business partner and credit segment? Which credit segment and currency are associated with the credit limit change? What credit score and limit calculation rules are applied to the business partner? To which credit management business partner group does the business partner belong? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Limit Change — CDS view cơ bản dựa trên ukm_sit_lmt_chg."
keywords:
  - "credit"
  - "limit"
  - "change"
  - "crdt"
  - "mgmt"
  - "date"
  - "time"
  - "business"
  - "partner"
  - "segment"
  - "amount"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FIO-CCD-CR-2CL
  - FIN-FIO
  - FIN-FIO-CCD
  - FIN-FIO-CCD-CR
  - FIN-FIO-CCD-CR-2CL
  - interface-view
  - lob:finance
---
# I_CREDITLIMITCHANGESITUATION

**This CDS view is designed to track and analyze changes in credit limits for business partners. It provides detailed information about the credit limit adjustments, including the old and new credit limits, the percentage change, and the total adjustment amount. This view is essential for monitoring credit management activities and ensuring that credit limits are adjusted appropriately based on business needs and risk assessments. This CDS view provides the data to answer the following business questions: What are the recent changes in credit limits for specific business partners? How much has the credit limit changed in terms of percentage and total amount? What are the old and new credit limits for a given business partner and credit segment? Which credit segment and currency are associated with the credit limit change? What credit score and limit calculation rules are applied to the business partner? To which credit management business partner group does the business partner belong? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITCHANGESITUATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CrdtMgmtBPChangeUUID` | ✓ | |  | `guid` | `CHAR(32)` | GUID of a Master Data Change |
| `CrdtMgmtBPChangeDateTime` |  | |  | `timestamp` | `DEC(21)` | UTC time stamp in long form (YYYYMMDDhhmmss,mmmuuun) |
| `BusinessPartner` |  | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  | `credit_sgmnt` | `CHAR(10)` | Credit Segment |
| `NewCreditLimitAmount` |  | |  | `new_credit_limit` | `CURR(15)` | Credit Limit (New) |
| `OldCreditLimitAmount` |  | |  | `old_credit_limit` | `CURR(15)` | Credit Limit (Old) |
| `CreditSegmentCurrency` |  | |  | `currency` | `CUKY(5)` | Credit Segment Currency |
| `CreditLimitChangeInPercent` |  | |  | `limit_change_in_percent` | `DEC(10)` | Credit Limit Change (in Percent) |
| `CreditLimitAdjustmentAmount` |  | |  | `limit_change_total` | `CURR(15)` | Amount Change to Credit Limit |
| `CreditScoreAndLimitCalcRule` |  | |  | `cast( _CreditManagementBP.CreditScoreAndLimitCalcRule as ukm_limit_and_score_calc_rule preserving type )` | `CHAR(10)` | Rule for Calculating Score and Credit Limit |
| `CrdtMgmtBusinessPartnerGroup` |  | | `_CreditManagementBP` | `CrdtMgmtBusinessPartnerGroup` | `NUMC(4)` | Customer Credit Group |
| `_CreditManagementBP` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreditManagementBP` | `I_CreditManagementBP` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITCHANGESITUATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITCHANGESITUATION')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Credit Limit Change'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType: { serviceQuality: #X,
                             sizeCategory: #S,
                             dataClass: #MIXED },
                semanticKey: [ 'BusinessPartner', 'CreditSegment', 'CrdtMgmtBPChangeDateTime' ],
                representativeKey: 'CrdtMgmtBPChangeUUID',
                supportedCapabilities: [#SITUATION_TRIGGER, #SITUATION_ANCHOR, #SITUATION_DATACONTEXT]
                         }
@VDM: { viewType: #BASIC }
//        lifecycle.contract.type: #PUBLIC_LOCAL_API }
define view entity I_CreditLimitChangeSituation
  as select from ukm_sit_lmt_chg

  association [0..1] to I_CreditManagementBP as _CreditManagementBP on _CreditManagementBP.BusinessPartner = ukm_sit_lmt_chg.partner
{
      @UI.hidden: true
  key guid                                                                                                     as CrdtMgmtBPChangeUUID,
      @UI.hidden: true
      timestamp                                                                                                as CrdtMgmtBPChangeDateTime,
      @Consumption: { semanticObject:      'BusinessPartner',
                      valueHelpDefinition: [{ entity:{ name:    'I_BusinessPartnerVH',
                                                       element: 'BusinessPartner' } }]
                    }
      partner                                                                                                  as BusinessPartner,
      @Consumption: { valueHelpDefinition: [{ entity:{ name:    'I_CrdtMSegmentVH',
                                                       element: 'CreditSegment' } }]
                    }
      credit_sgmnt                                                                                             as CreditSegment,
      @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
      new_credit_limit                                                                                         as NewCreditLimitAmount,
      @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
      old_credit_limit                                                                                         as OldCreditLimitAmount,
      @Consumption.valueHelpDefinition: [{ entity: { name:    'I_CurrencyStdVH',
                                                     element: 'Currency' } }]
      @EndUserText.label: 'Credit Segment Currency'
      currency                                                                                                 as CreditSegmentCurrency,
      limit_change_in_percent                                                                                  as CreditLimitChangeInPercent,
      @Semantics.amount.currencyCode: 'CreditSegmentCurrency'
      limit_change_total                                                                                       as CreditLimitAdjustmentAmount,

      @Consumption.valueHelpDefinition: [{ entity:{ name:    'I_CrdtScrAndLmtCalcRuleVH' ,
                                                    element: 'CreditScoreAndLimitCalcRule' } }]
      cast( _CreditManagementBP.CreditScoreAndLimitCalcRule as ukm_limit_and_score_calc_rule preserving type ) as CreditScoreAndLimitCalcRule,
      @Consumption.valueHelpDefinition: [{ entity: { name:    'I_CrdtMBusPartnerGroupVH',
                                                     element: 'CrdtMgmtBusinessPartnerGroup' } }]
      _CreditManagementBP.CrdtMgmtBusinessPartnerGroup                                                         as CrdtMgmtBusinessPartnerGroup,
      //      @Consumption.valueHelpDefinition: [{ entity: { name:    'I_CountryVH',
      //                                                     element: 'Country' } }]
      //      _BusinessPartnerCreditProfile._CreditMgmtBPAddress.Country as BusinessPartnerCountry
      _CreditManagementBP
}
```
