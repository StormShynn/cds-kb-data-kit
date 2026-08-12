---
name: I_TRANSPORTCHECKRULETEXT
description: "Transportcheckruletext"
app_component: EHS-SUS-DG
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-DG
  - interface-view
  - text-view
  - transport
  - text
  - component:EHS-SUS-DG
  - lob:Other
---
# I_TRANSPORTCHECKRULETEXT

**Transportcheckruletext**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-DG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportCheckRule` | ✓ | |  | `cast( left( dd07t.domvalue_l, 2) as ehdgm_transport_check_rule preserving type )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TransportCheckRuleName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Transport Check Rule - Text'

@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'TransportCheckRule'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'ITRNSCHKRULET'
@AbapCatalog.compiler.compareFilter: true

// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true
// used for BOBF Master Data Object
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.usageType:{ serviceQuality: #A,
                         sizeCategory:  #S,         // < 1.000
                         dataClass: #META }

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_TransportCheckRuleText as select from dd07t
    association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    key cast( left( dd07t.domvalue_l, 2) as ehdgm_transport_check_rule preserving type ) as TransportCheckRule,
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key dd07t.ddlanguage as Language,
    @Semantics.text:true
    dd07t.ddtext as TransportCheckRuleName,
        
    _Language
}
where dd07t.domname  = 'EHDGM_TRANSPORT_CHECK_RULE'
  and dd07t.as4local = 'A'
```
