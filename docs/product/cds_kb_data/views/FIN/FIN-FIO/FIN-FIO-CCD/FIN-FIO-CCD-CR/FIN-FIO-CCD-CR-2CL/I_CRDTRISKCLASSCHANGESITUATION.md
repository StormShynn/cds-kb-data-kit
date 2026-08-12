---
name: I_CRDTRISKCLASSCHANGESITUATION
description: "This CDS view is designed to track changes in the credit risk class of business partners. It provides a detailed view of the credit risk class transitions, including the previous and current risk classes, the date and time of the change, and associated business partner information. This view is useful for monitoring and analyzing credit risk adjustments over time. This CDS view provides the data to answer the following business questions: What are the changes in the credit risk class for a specific business partner? When did the credit risk class change occur for a business partner? What was the previous credit risk class before the change? What is the current credit risk class after the change? What is the criticality adjustment value associated with the credit risk class change? What credit score and limit calculation rule is applied to the business partner? Which credit management business partner group does the business partner belong to? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTRISKCLASSCHANGESITUATION')/$value
semantic_en: "This CDS view is designed to track changes in the credit risk class of business partners. It provides a detailed view of the credit risk class transitions, including the previous and current risk classes, the date and time of the change, and associated business partner information. This view is useful for monitoring and analyzing credit risk adjustments over time. This CDS view provides the data to answer the following business questions: What are the changes in the credit risk class for a specific business partner? When did the credit risk class change occur for a business partner? What was the previous credit risk class before the change? What is the current credit risk class after the change? What is the criticality adjustment value associated with the credit risk class change? What credit score and limit calculation rule is applied to the business partner? Which credit management business partner group does the business partner belong to? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Risk Class Change — CDS view cơ bản dựa trên ukm_sit_rc_chg."
keywords:
  - "credit"
  - "risk"
  - "class"
  - "change"
  - "crdt"
  - "mgmt"
  - "date"
  - "time"
  - "business"
  - "partner"
  - "current"
  - "previous"
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
# I_CRDTRISKCLASSCHANGESITUATION

**This CDS view is designed to track changes in the credit risk class of business partners. It provides a detailed view of the credit risk class transitions, including the previous and current risk classes, the date and time of the change, and associated business partner information. This view is useful for monitoring and analyzing credit risk adjustments over time. This CDS view provides the data to answer the following business questions: What are the changes in the credit risk class for a specific business partner? When did the credit risk class change occur for a business partner? What was the previous credit risk class before the change? What is the current credit risk class after the change? What is the criticality adjustment value associated with the credit risk class change? What credit score and limit calculation rule is applied to the business partner? Which credit management business partner group does the business partner belong to? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTRISKCLASSCHANGESITUATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CrdtMgmtBPChangeUUID` | ✓ | |  | `guid` | `CHAR(32)` | GUID of a Master Data Change |
| `CrdtMgmtBPChangeDateTime` |  | |  | `timestamp` | `DEC(21)` | UTC time stamp in long form (YYYYMMDDhhmmss,mmmuuun) |
| `BusinessPartner` |  | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `CurrentCreditRiskClass` |  | |  | `new_risk_class` | `CHAR(3)` | Risk Class |
| `PreviousCreditRiskClass` |  | |  | `old_risk_class` | `CHAR(3)` | Risk Class (Old) |
| `CrdtRskClCritltyAdjmtValue` |  | |  | `risk_class_change` | `DEC(3)` | Risk Class Change (Using Internal Score) |
| `CreditScoreAndLimitCalcRule` |  | |  | `cast( _CreditManagementBP.CreditScoreAndLimitCalcRule as ukm_limit_and_score_calc_rule preserving type )` | `CHAR(10)` | Rule for Calculating Score and Credit Limit |
| `CrdtMgmtBusinessPartnerGroup` |  | | `_CreditManagementBP` | `CrdtMgmtBusinessPartnerGroup` | `NUMC(4)` | Customer Credit Group |
| `_CreditManagementBP` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreditManagementBP` | `I_CreditManagementBP` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTRISKCLASSCHANGESITUATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTRISKCLASSCHANGESITUATION')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Credit Risk Class Change'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType: { serviceQuality: #X,
                             sizeCategory: #S,
                             dataClass: #MIXED },
                semanticKey: [ 'BusinessPartner', 'CrdtMgmtBPChangeDateTime' ],
                representativeKey: 'CrdtMgmtBPChangeUUID',
                supportedCapabilities: [#SITUATION_TRIGGER, #SITUATION_ANCHOR, #SITUATION_DATACONTEXT]
              }
@Analytics.technicalName: 'IUKMRCCHGSIT'
@VDM: { viewType: #BASIC }
//        lifecycle.contract.type: #PUBLIC_LOCAL_API }
define view entity I_CrdtRiskClassChangeSituation
  as select from ukm_sit_rc_chg

  association [0..1] to I_CreditManagementBP as _CreditManagementBP on _CreditManagementBP.BusinessPartner = ukm_sit_rc_chg.partner
{
      @UI.hidden: true
  key guid                                                                                                      as CrdtMgmtBPChangeUUID,
      @UI.hidden: true
      timestamp                                                                                                 as CrdtMgmtBPChangeDateTime,
      @Consumption: { semanticObject:      'BusinessPartner',
                      valueHelpDefinition: [{ entity:{ name:    'I_BusinessPartnerVH',
                                                       element: 'BusinessPartner'     } }]
                    }
      partner                                                                                                   as BusinessPartner,
      @Consumption.valueHelpDefinition: [{ entity:{ name:    'I_CreditRiskClassValueHelp',
                                                    element: 'CreditRiskClass' } }]
      new_risk_class                                                                                            as CurrentCreditRiskClass,
      @Consumption.valueHelpDefinition: [{ entity:{ name:    'I_CreditRiskClassValueHelp',
                                                    element: 'CreditRiskClass' } }]
      old_risk_class                                                                                            as PreviousCreditRiskClass,
      risk_class_change                                                                                         as CrdtRskClCritltyAdjmtValue,

      @Consumption.valueHelpDefinition: [{ entity:{ name:    'I_CrdtScrAndLmtCalcRuleVH' ,
                                                    element: 'CreditScoreAndLimitCalcRule' } }]
      cast( _CreditManagementBP.CreditScoreAndLimitCalcRule as ukm_limit_and_score_calc_rule preserving type ) as CreditScoreAndLimitCalcRule,
      @Consumption.valueHelpDefinition: [{ entity: { name:    'I_CrdtMBusPartnerGroupVH',
                                                     element: 'CrdtMgmtBusinessPartnerGroup' } }]
      _CreditManagementBP.CrdtMgmtBusinessPartnerGroup                                                          as CrdtMgmtBusinessPartnerGroup,
      //      @Consumption.valueHelpDefinition: [{ entity: { name:    'I_CountryVH',
      //                                                     element: 'Country' } }]
      //      _CreditManagementBP._BusinessPartner. as BusinessPartnerCountry
      _CreditManagementBP
}
```
