---
name: I_CRDTSCRANDLMTCALCRULEVH
description: "This CDS view is designed to provide a value help for calculation rules related to credit scores and credit limits. It serves as a basic view that can be used to search and retrieve specific calculation rules by their names, which are used in determining credit scores and limits. This CDS view provides the data to answer the following business questions: What are the available calculation rules for determining credit scores and limits? How can I search for a specific credit score and limit calculation rule by its name? What is the description or text associated with a particular credit score and limit calculation rule? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTSCRANDLMTCALCRULEVH')/$value
semantic_en: "This CDS view is designed to provide a value help for calculation rules related to credit scores and credit limits. It serves as a basic view that can be used to search and retrieve specific calculation rules by their names, which are used in determining credit scores and limits. This CDS view provides the data to answer the following business questions: What are the available calculation rules for determining credit scores and limits? How can I search for a specific credit score and limit calculation rule by its name? What is the description or text associated with a particular credit score and limit calculation rule? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Calc rules for credit score and limit — CDS view cơ bản dựa trên I_CrdtScoreAndLmtCalcRule."
keywords:
  - "calc"
  - "rules"
  - "for"
  - "credit"
  - "score"
  - "and"
  - "limit"
  - "rule"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
---
# I_CRDTSCRANDLMTCALCRULEVH

**This CDS view is designed to provide a value help for calculation rules related to credit scores and credit limits. It serves as a basic view that can be used to search and retrieve specific calculation rules by their names, which are used in determining credit scores and limits. This CDS view provides the data to answer the following business questions: What are the available calculation rules for determining credit scores and limits? How can I search for a specific credit score and limit calculation rule by its name? What is the description or text associated with a particular credit score and limit calculation rule? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTSCRANDLMTCALCRULEVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditScoreAndLimitCalcRule` | ✓ | |  |  | `CHAR(10)` | Rule for Calculating Score and Credit Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTSCRANDLMTCALCRULEVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTSCRANDLMTCALCRULEVH')/$value)*

```abap
@EndUserText.label: 'Calc rules for credit score and limit'

@VDM: { viewType: #BASIC,
        lifecycle: { contract.type: #PUBLIC_LOCAL_API }  // VH is incomplete. It can search by rule name only, and not yet by formula or formula-related attributes.
                                                         // Release under the assumption that adding elements will be possible
      }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: { dataCategory: #VALUE_HELP,
                usageType: { sizeCategory:   #S,
                             serviceQuality: #A,
                             dataClass:      #CUSTOMIZING
                           },
                resultSet.sizeCategory: #XS,  // Combobox
                representativeKey: 'CreditScoreAndLimitCalcRule',
                semanticKey: ['CreditScoreAndLimitCalcRule'],
                supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
                modelingPattern: #VALUE_HELP_PROVIDER
              }

@AbapCatalog: { sqlViewName: 'ILIMITCALCRULEVH',
                compiler.compareFilter: true
              }

@Consumption.valueHelpDefinition: [{entity.name: 'I_CrdtScoreAndLmtCalcRule' }]
@Consumption.ranked: true
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true

define view I_CrdtScrAndLmtCalcRuleVH
  as select from I_CrdtScoreAndLmtCalcRule
{
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true,
                 fuzzinessThreshold:   0.8,
                 ranking:              #HIGH }
  key CreditScoreAndLimitCalcRule as CreditScoreAndLimitCalcRule,
      _Text
}
```
