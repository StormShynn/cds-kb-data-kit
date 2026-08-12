---
name: I_CUSTOMSPREFERENCETEXT
description: "Customspreferencetext"
app_component: FT-ITR-TRC
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
  - FT
  - FT-ITR
  - FT-ITR-TRC
  - interface-view
  - text-view
  - text
  - customs
  - component:FT-ITR-TRC
  - lob:Other
---
# I_CUSTOMSPREFERENCETEXT

**Customspreferencetext**

| Property | Value |
|---|---|
| App Component | `FT-ITR-TRC` |
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
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `CustomsPreference` | ✓ | |  | `cast(domvalue_l as prefe)` |  |  |
| `CustomsPreferenceDescription` |  | |  | `cast(ddtext as /sapsll/prefe_desc_r3)` |  |  |
| `_Language` | | ✓ | | | | |
| `_CustomsPreference` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CustomsPreference` | `I_CustomsPreference` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED 

@EndUserText.label: 'Preference Indicator - Text'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CustomsPreference'
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #META
}

@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                   ]
@ObjectModel.modelingPattern:#NONE
                                        
define view entity I_CustomsPreferenceText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [0..1] to I_CustomsPreference as _CustomsPreference on $projection.CustomsPreference = _CustomsPreference.CustomsPreference
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                  as Language,
      @ObjectModel.foreignKey.association: '_CustomsPreference'
  key cast(domvalue_l as prefe) as CustomsPreference, 
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking:#LOW
      cast(ddtext as /sapsll/prefe_desc_r3) as CustomsPreferenceDescription,

      _Language,
      _CustomsPreference
}
where
      domname  = 'PREFE'
  and as4local = 'A'
```
