---
name: I_EWM_STORBINMAXWGTISMNTNDTEXT
description: "Ewm Storbinmaxwgtismntndtext"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_EWM_STORBINMAXWGTISMNTNDTEXT

**Ewm Storbinmaxwgtismntndtext**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `EWMStorageBinMaxWeightIsMntnd` | ✓ | |  | `cast ( substring( dd07t.domvalue_l, 1, 1 ) as ewm_de_storbinmaxweightismaint preserving type )` |  |  |
| `EWMStorBinMaxWeightMntndDesc` |  | |  | `cast( ddtext as ewm_de_storbinmaxwgtmaintdesc preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Storage Bin Max Weight Is Mntnd - Text'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'EWMStorageBinMaxWeightIsMntnd'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #S}
@Analytics.technicalName: 'IEWMSTBNMWGTMNT'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ] 
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT                                            
define view entity I_EWM_StorBinMaxWgtIsMntndText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                                     as Language,
  key cast ( substring( dd07t.domvalue_l, 1, 1 ) as ewm_de_storbinmaxweightismaint preserving type ) as EWMStorageBinMaxWeightIsMntnd,
      @Semantics.text: true
      cast( ddtext as ewm_de_storbinmaxwgtmaintdesc preserving type )                                as EWMStorBinMaxWeightMntndDesc,

      /* Associations */
      _Language
}
where
      domname  = 'XFELD'
  and as4local = 'A';
```
