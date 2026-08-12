---
name: I_SERIALNUMBERPROFILETEXT
description: "Serial NumberPROFILETEXT"
app_component: LO-MD-SN-2CL
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
  - LO
  - LO-MD
  - LO-MD-SN
  - interface-view
  - text-view
  - serial-number
  - text
  - component:LO-MD-SN-2CL
  - lob:Logistics General
---
# I_SERIALNUMBERPROFILETEXT

**Serial NumberPROFILETEXT**

| Property | Value |
|---|---|
| App Component | `LO-MD-SN-2CL` |
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
| `SerialNumberProfile` | ✓ | |  | `serail` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `SerialNumberProfileDescription` |  | |  | `cast( t377p_t.serailtxt as losn_profile_description preserving type )` |  |  |
| `_SerialNumberProfile` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: { authorizationCheck: #NOT_REQUIRED,
                  personalData.blocking: #NOT_REQUIRED }

@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {
        dataClass:      #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory:   #S }
@ObjectModel.supportedCapabilities: [
  #SQL_DATA_SOURCE,
  #CDS_MODELING_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET,
  #LANGUAGE_DEPENDENT_TEXT
]
@AbapCatalog.entityBuffer.definitionAllowed: true
@EndUserText.label: 'Serial Number Profile - Text'
define view entity I_SerialNumberProfileText
  as select from t377p_t
  association to parent I_SerialNumberProfile as _SerialNumberProfile on $projection.SerialNumberProfile = _SerialNumberProfile.SerialNumberProfile
{
  key serail                                                                as SerialNumberProfile,
      @Semantics.language: true
  key spras                                                                 as Language,
      @Semantics.text: true
      cast( t377p_t.serailtxt as losn_profile_description preserving type ) as SerialNumberProfileDescription,

      _SerialNumberProfile
}
```
