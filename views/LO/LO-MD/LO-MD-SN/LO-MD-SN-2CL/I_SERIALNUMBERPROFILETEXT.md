---
name: I_SERIALNUMBERPROFILETEXT
description: Serial NumberPROFILETEXT
app_component: LO-MD-SN-2CL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SerialNumberProfile` | ✓ | |  | `serail` |
| `Language` | ✓ | |  | `spras` |
| `SerialNumberProfileDescription` |  | |  | `cast( t377p_t.serailtxt as losn_profile_description preserving type )` |
| `_SerialNumberProfile` | | ✓ | | |

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
