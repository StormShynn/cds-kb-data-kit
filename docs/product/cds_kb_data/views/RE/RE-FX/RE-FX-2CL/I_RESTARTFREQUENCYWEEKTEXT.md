---
name: I_RESTARTFREQUENCYWEEKTEXT
description: "Restartfrequencyweektext"
app_component: RE-FX-2CL
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
  - RE
  - RE-FX
  - interface-view
  - text-view
  - text
  - component:RE-FX-2CL
  - lob:Other
---
# I_RESTARTFREQUENCYWEEKTEXT

**Restartfrequencyweektext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
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
| `REStartFrequencyWeek` | ✓ | |  | `cast( dd07t.domvalue_l as recdvdmweekfrom )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `REStartFrequencyWeekName` |  | |  | `cast( dd07t.ddtext as val_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_REStartFrequencyWeek` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRESTFREQWEEKT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Start Frequency Week - Text'

@Analytics:{
            dataExtraction.enabled: true
            }

@ObjectModel: {
                usageType:{
                            serviceQuality: #A,
                            dataClass: #META,
                            sizeCategory: #S
                           },
                dataCategory: #TEXT,
                representativeKey: 'REStartFrequencyWeek',
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #EXTRACTION_DATA_SOURCE],
                sapObjectNodeType.name: 'REFrequencyStartWeekdayText'
                                         
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_REStartFrequencyWeekText
  as select from dd07t
  association        to parent I_REStartFrequencyWeek as _REStartFrequencyWeek on $projection.REStartFrequencyWeek = _REStartFrequencyWeek.REStartFrequencyWeek
  association [0..1] to I_Language                    as _Language           on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_REStartFrequencyWeek'
      @ObjectModel.text.element: ['REStartFrequencyWeekName']
  key cast( dd07t.domvalue_l as recdvdmweekfrom )          as REStartFrequencyWeek,
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as val_text preserving type )  as REStartFrequencyWeekName,
      _REStartFrequencyWeek,
      _Language
}
where
      dd07t.domname  = 'RECDWEEKDAYS'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
