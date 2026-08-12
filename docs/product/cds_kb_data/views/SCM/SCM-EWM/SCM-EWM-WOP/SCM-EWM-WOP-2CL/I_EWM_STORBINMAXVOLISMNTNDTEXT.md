---
name: I_EWM_STORBINMAXVOLISMNTNDTEXT
description: "Ewm Storbinmaxvolismntndtext"
app_component: SCM-EWM-WOP-2CL
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
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - text-view
  - text
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_STORBINMAXVOLISMNTNDTEXT

**Ewm Storbinmaxvolismntndtext**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
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
| `EWMStorageBinMaxVolumeIsMntnd` | ✓ | |  | `cast ( substring( dd07t.domvalue_l, 1, 1 ) as ewm_de_storbinmaxvolumeismaint preserving type )` |  |  |
| `EWMStorBinMaxVolumeMntndDesc` |  | |  | `cast( ddtext as ewm_de_storbinmaxvolmaintdesc preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Storage Bin Max Volume Is Mntnd - Text'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'EWMStorageBinMaxVolumeIsMntnd'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #S}
@Analytics.technicalName: 'IEWMSTBNMVOLMNT' 
@Metadata.ignorePropagatedAnnotations:true    
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT                                                               
define view entity I_EWM_StorBinMaxVolIsMntndText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                                     as Language,
  key cast ( substring( dd07t.domvalue_l, 1, 1 ) as ewm_de_storbinmaxvolumeismaint preserving type ) as EWMStorageBinMaxVolumeIsMntnd,
      @Semantics.text: true
      cast( ddtext as ewm_de_storbinmaxvolmaintdesc preserving type )                                as EWMStorBinMaxVolumeMntndDesc,

      /* Associations */
      _Language
}
where
      domname  = 'XFELD'
  and as4local = 'A';
```
