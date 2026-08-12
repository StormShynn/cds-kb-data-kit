---
name: I_CRDTSCRANDLMTCALCRULETXT
description: "Crdtscrandlmtcalcruletxt"
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
# I_CRDTSCRANDLMTCALCRULETXT

**Crdtscrandlmtcalcruletxt**

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
| `Language` | ✓ | |  | `langu` |  |  |
| `CrdtScoreAndLimitCalcRuleName` |  | |  | `text50` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Calc rules for score and limit - Txt'
@Metadata.ignorePropagatedAnnotations:true
@VDM: { viewType: #BASIC,
        lifecycle: { contract.type: #PUBLIC_LOCAL_API }

      }
@ObjectModel: { dataCategory: #TEXT,
                usageType: { serviceQuality: #B,
                             sizeCategory:   #S,
                             dataClass:      #CUSTOMIZING
                           },
                representativeKey: 'CreditScoreAndLimitCalcRule',
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]
              }
@AbapCatalog: { sqlViewName: 'ILIMITCALCRULET',
                compiler.compareFilter: true
              }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search: { searchable: true }
define view I_CrdtScrAndLmtCalcRuleTxt
  as select from ukm_limit_rule0t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key limit_rule as CreditScoreAndLimitCalcRule,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu      as Language,

      @Semantics.text: true
      @Search: { defaultSearchElement: true,
           fuzzinessThreshold:   0.8,
           ranking:              #LOW }
      text50     as CrdtScoreAndLimitCalcRuleName,
      _Language
}
```
