---
name: I_CRDTSCOREANDLMTCALCRULE
description: "Crdtscoreandlmtcalcrule"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - component:FIN-FSCM-CR-2CL
  - lob:Other
---
# I_CRDTSCOREANDLMTCALCRULE

**Crdtscoreandlmtcalcrule**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditScoreAndLimitCalcRule` | ✓ | |  | `limit_rule` |  |  |
| `CrdtScoreAndLmtCalcRuleIsDflt` |  | |  | `default_rule` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CrdtScrAndLmtCalcRuleTxt` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Calc rule for credit score and limit'
@Metadata.ignorePropagatedAnnotations:true

@VDM: { viewType: #BASIC, 
        lifecycle: { contract.type: #PUBLIC_LOCAL_API }  // Entity view is incomplete. It can search by rule name only, and not yet by formula or formula-related attributes. 
                                                         // Release under the assumption that adding elements will be possible 
      }
@ObjectModel: { usageType: { serviceQuality: #B,
                             sizeCategory:   #S,
                             dataClass: #CUSTOMIZING
                           },
                representativeKey: 'CreditScoreAndLimitCalcRule',
                supportedCapabilities: [ #SQL_DATA_SOURCE,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET ]
              }
@AbapCatalog: { sqlViewName: 'ILIMITCALCRULE',
                compiler.compareFilter: true
              }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE


define view I_CrdtScoreAndLmtCalcRule 
  as select from ukm_limit_rules
  association [0..*] to I_CrdtScrAndLmtCalcRuleTxt as _Text on $projection.CreditScoreAndLimitCalcRule = _Text.CreditScoreAndLimitCalcRule
{
      @ObjectModel.text.association: '_Text'
  key limit_rule   as CreditScoreAndLimitCalcRule,
      @Semantics.booleanIndicator
      default_rule as CrdtScoreAndLmtCalcRuleIsDflt, // UKM_DEFAULT_RULE - flag - rule is default for newly created business partners
      
   // Details about the calculation - implement when needed
   // scoring_rule as , // UKM_FORMULA    - entity - Scoring and Limit calculation formula --> with association to DB UKM_FORMULAS (ID, name, result type)
   // valid_days   as , // UKM_VALID_DAYS - value - number of days how long the result calculated by the formzula is valid. Empty = infinite validity
   // trace        as , // UKM_XTRACE     - flag - indicates if the calculation process of the formula shall be recorded for future display
   // bw_scoring   as , // UKM_BW_SCORING - flag - indicates the score is calculated in Business Warehouse, an not by the formula 
  
      _Text    
}
```
