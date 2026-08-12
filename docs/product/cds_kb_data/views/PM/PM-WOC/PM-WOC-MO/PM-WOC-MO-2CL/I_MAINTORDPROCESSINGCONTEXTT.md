---
name: I_MAINTORDPROCESSINGCONTEXTT
description: "Maintordprocessingcontextt"
app_component: PM-WOC-MO-2CL
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
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - text
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDPROCESSINGCONTEXTT

**Maintordprocessingcontextt**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
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
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `MaintOrderProcessingContext` | ✓ | |  | `cast( dd07t.domvalue_l as maintorderprocessingcontext )` |  |  |
| `MaintOrdProcessingContextText` |  | |  | `ddtext` |  |  |
| `_MaintOrderProcessingContext` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintOrderProcessingContext` | `I_MaintOrderProcessingContext` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ObjectModel.usageType: {
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MIXED
}
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'MaintOrderProcessingContext'
@EndUserText.label: 'Maint Order Processing Context Text'
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER

define view entity I_MaintOrdProcessingContextT
  as select from dd07t
  association [1..1] to I_MaintOrderProcessingContext as _MaintOrderProcessingContext on $projection.MaintOrderProcessingContext = _MaintOrderProcessingContext.MaintOrderProcessingContext
  association [0..1] to I_Language                    as _Language                    on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )       as Language,
  key cast( dd07t.domvalue_l as maintorderprocessingcontext ) as MaintOrderProcessingContext,
      @Semantics.text: true
      dd07t.ddtext                                            as MaintOrdProcessingContextText,
      _Language,
      _MaintOrderProcessingContext
}
where
      dd07t.domname  = 'MAINTORDERPROCESSINGCONTEXT'
  and dd07t.as4local = 'A'
```
