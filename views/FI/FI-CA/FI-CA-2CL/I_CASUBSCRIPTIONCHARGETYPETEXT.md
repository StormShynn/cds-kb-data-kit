---
name: I_CASUBSCRIPTIONCHARGETYPETEXT
description: Casubscriptionchargetypetext
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - text-view
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASUBSCRIPTIONCHARGETYPETEXT

**Casubscriptionchargetypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CASubscriptionChargeType` | `cast( left( domvalue_l,2 ) as charge_type_kk preserving type )` |
| key `Language` | `cast( ddlanguage as spras preserving type )` |
| `CASubscriptionChargeTypeText` | `cast( ddtext as charge_type_text_kk preserving type )` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICASUBSCRCHRGTPT'

@EndUserText.label: 'Subscription Charge Type - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CASubscriptionChargeType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CASubscriptionChargeTypeText
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast( left( domvalue_l,2 ) as charge_type_kk preserving type ) as CASubscriptionChargeType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )                    as Language,

      @Semantics.text
      cast( ddtext as charge_type_text_kk preserving type )          as CASubscriptionChargeTypeText,

      _Language
}
where
      domname  = 'CHARGE_TYPE_KK'
  and as4local = 'A'
```
