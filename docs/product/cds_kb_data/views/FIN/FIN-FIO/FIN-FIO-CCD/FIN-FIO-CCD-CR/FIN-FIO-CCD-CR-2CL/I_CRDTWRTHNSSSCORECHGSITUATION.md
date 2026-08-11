---
name: I_CRDTWRTHNSSSCORECHGSITUATION
description: "This CDS view is designed to track changes in the credit worthiness scores of business partners. It provides detailed information about the adjustments in credit scores, including both the new and previous scores, the numeric values of these scores, and the percentage change. Additionally, it associates these changes with specific business partners and their credit management profiles. This CDS view provides the data to answer the following business questions: What is the current credit worthiness score of a specific business partner, and how has it changed over time? What was the previous credit worthiness score of a business partner before the latest change? What is the numeric value of the credit worthiness score, and how does it compare to the previous numeric value? What is the percentage change in the credit worthiness score for a business partner? What is the adjustment value in the credit worthiness score for a business partner? Which credit score and limit calculation rule is applied to a business partner? To which credit management business partner group does a specific business partner belong? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTWRTHNSSSCORECHGSITUATION')/$value
semantic_en: "This CDS view is designed to track changes in the credit worthiness scores of business partners. It provides detailed information about the adjustments in credit scores, including both the new and previous scores, the numeric values of these scores, and the percentage change. Additionally, it associates these changes with specific business partners and their credit management profiles. This CDS view provides the data to answer the following business questions: What is the current credit worthiness score of a specific business partner, and how has it changed over time? What was the previous credit worthiness score of a business partner before the latest change? What is the numeric value of the credit worthiness score, and how does it compare to the previous numeric value? What is the percentage change in the credit worthiness score for a business partner? What is the adjustment value in the credit worthiness score for a business partner? Which credit score and limit calculation rule is applied to a business partner? To which credit management business partner group does a specific business partner belong? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Worthiness Change — CDS view cơ bản dựa trên ukm_sit_ownr_chg."
keywords:
  - "credit"
  - "worthiness"
  - "change"
  - "crdt"
  - "mgmt"
  - "date"
  - "time"
  - "business"
  - "partner"
  - "score"
  - "value"
  - "prev"
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
# I_CRDTWRTHNSSSCORECHGSITUATION

**This CDS view is designed to track changes in the credit worthiness scores of business partners. It provides detailed information about the adjustments in credit scores, including both the new and previous scores, the numeric values of these scores, and the percentage change. Additionally, it associates these changes with specific business partners and their credit management profiles. This CDS view provides the data to answer the following business questions: What is the current credit worthiness score of a specific business partner, and how has it changed over time? What was the previous credit worthiness score of a business partner before the latest change? What is the numeric value of the credit worthiness score, and how does it compare to the previous numeric value? What is the percentage change in the credit worthiness score for a business partner? What is the adjustment value in the credit worthiness score for a business partner? Which credit score and limit calculation rule is applied to a business partner? To which credit management business partner group does a specific business partner belong? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTWRTHNSSSCORECHGSITUATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CrdtMgmtBPChangeUUID` | ✓ | |  | `guid` | `CHAR(32)` | GUID of a Master Data Change |
| `CrdtMgmtBPChangeDateTime` |  | |  | `timestamp` | `DEC(21)` | UTC time stamp in long form (YYYYMMDDhhmmss,mmmuuun) |
| `BusinessPartner` |  | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `CreditWorthinessScoreValue` |  | |  | `new_own_rating` | `CHAR(10)` | Score |
| `PrevCreditWorthinessScoreValue` |  | |  | `old_own_rating` | `CHAR(10)` | Previous Internal Score |
| `CrdtWrthnssScoreNumericValue` |  | |  | `new_own_rating_num` | `DEC(12)` | New Internal Score (Numeric) |
| `OldCrdtWrthnssScrNumericValue` |  | |  | `old_own_rating_num` | `DEC(12)` | Old Internal Score (Numeric) |
| `CrdtWrthnssScoreChangePercent` |  | |  | `own_rating_chg_in_percent` | `DEC(6)` | Change to Internal Score (in Percent) |
| `CrdtWrthnssScrAdjustmentValue` |  | |  | `own_rating_chg` | `DEC(10)` | Delta Value of Internal Score |
| `CreditScoreAndLimitCalcRule` |  | |  | `cast( _CreditManagementBP.CreditScoreAndLimitCalcRule as ukm_limit_and_score_calc_rule preserving type )` | `CHAR(10)` | Rule for Calculating Score and Credit Limit |
| `CrdtMgmtBusinessPartnerGroup` |  | | `_CreditManagementBP` | `CrdtMgmtBusinessPartnerGroup` | `NUMC(4)` | Customer Credit Group |
| `_CreditManagementBP` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreditManagementBP` | `I_CreditManagementBP` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTWRTHNSSSCORECHGSITUATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTWRTHNSSSCORECHGSITUATION')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Credit Worthiness Change'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType: { serviceQuality: #X,
                             sizeCategory: #S,
                             dataClass: #MIXED },
                semanticKey: [ 'BusinessPartner', 'CrdtMgmtBPChangeDateTime' ],
                representativeKey: 'CrdtMgmtBPChangeUUID',
                supportedCapabilities: [#SITUATION_TRIGGER, #SITUATION_ANCHOR, #SITUATION_DATACONTEXT]
              }
@Analytics.technicalName: 'IUKMSCORECHGSIT'
@VDM: { viewType: #BASIC }
//        lifecycle.contract.type: #PUBLIC_LOCAL_API }
define view entity I_CrdtWrthnssScoreChgSituation
  as select from ukm_sit_ownr_chg

  association [0..1] to I_CreditManagementBP as _CreditManagementBP on _CreditManagementBP.BusinessPartner = ukm_sit_ownr_chg.partner
{
      @UI.hidden: true
  key guid                                                                                                     as CrdtMgmtBPChangeUUID,
      @UI.hidden: true
      timestamp                                                                                                as CrdtMgmtBPChangeDateTime,
      @Consumption: { semanticObject:      'BusinessPartner',
                      valueHelpDefinition: [{ entity:{ name:    'I_BusinessPartnerVH',
                                                       element: 'BusinessPartner'     } }]
                    }
      partner                                                                                                  as BusinessPartner,
      @EndUserText.label: 'New Internal Score'
      new_own_rating                                                                                           as CreditWorthinessScoreValue,
      old_own_rating                                                                                           as PrevCreditWorthinessScoreValue,
      new_own_rating_num                                                                                       as CrdtWrthnssScoreNumericValue,
      old_own_rating_num                                                                                       as OldCrdtWrthnssScrNumericValue,
      own_rating_chg_in_percent                                                                                as CrdtWrthnssScoreChangePercent,
      own_rating_chg                                                                                           as CrdtWrthnssScrAdjustmentValue,
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
