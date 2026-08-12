---
name: I_SERIALNUMBERPROFILEVH
description: "Serial NumberPROFILEVH"
app_component: LO-MD-SN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
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
  - value-help
  - serial-number
  - component:LO-MD-SN-2CL
  - lob:Logistics General
---
# I_SERIALNUMBERPROFILEVH

**Serial NumberPROFILEVH**

| Property | Value |
|---|---|
| App Component | `LO-MD-SN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SerialNumberProfile` | ✓ | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl: { 
  authorizationCheck: #NOT_REQUIRED,
  personalData.blocking: #NOT_REQUIRED
}
                  
@EndUserText.label: 'Serial number profile'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType: {
  serviceQuality: #C,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'SerialNumberProfile'

@ObjectModel.supportedCapabilities: [ 
  #SQL_DATA_SOURCE,
  #CDS_MODELING_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET,
  #VALUE_HELP_PROVIDER
]

@VDM.viewType: #COMPOSITE

@Search.searchable: true
@Consumption.ranked: true
define view entity I_SerialNumberProfileVH
  as select from I_SerialNumberProfile
{

      @ObjectModel.text.element: ['SerialNumberProfileDescription']
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key SerialNumberProfile,
  
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      _Text[ Language = $session.system_language ].SerialNumberProfileDescription

}
```
