---
name: I_ENTPROJBUSSOLUTIONORDERLINK
description: "Entprojbussolutionorderlink"
app_component: PPM-SCL-STR
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
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - component:PPM-SCL-STR
  - lob:Other
---
# I_ENTPROJBUSSOLUTIONORDERLINK

**Entprojbussolutionorderlink**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
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
| `EntProjBusSolnOrderLinkUUID` | ✓ | |  | `cast( EntProjBusSolnOrderLinkUUID as /s4ppm/tv_solo_link_uuid preserving type )` |  |  |
| `ProjectUUID` |  | |  | `cast( ProjectUUID as /s4ppm/tv_project_uuid preserving type )` |  |  |
| `EntProjectObjectLinkUUID` |  | |  | `cast( EntProjectObjectLinkUUID as /s4ppm/tv_objectlink_guid preserving type )` |  |  |
| `BusinessSolutionOrder` |  | |  |  |  |  |
| `BusinessSolutionOrderItem` |  | |  |  |  |  |
| `_EntProjectProjectObjectLink` | | ✓ | | | | |
| `_EnterpriseProject` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EntProjectProjectObjectLink` | `I_EntProjectProjectObjectLink` | [0..1] |
| `_EnterpriseProject` | `I_EnterpriseProject` | [1..1] |

## Source Code

```abap
@Analytics.technicalName: 'IEPRJBSOLO'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@AccessControl.authorizationCheck: #MANDATORY

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MIXED

@ObjectModel.representativeKey: 'EntProjBusSolnOrderLinkUUID'
@EndUserText.label: 'Enterprise Project Link to Solution Order'

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true

define view entity I_EntProjBusSolutionOrderLink
  as select from P_EntProjBusSolutionOrder
  association [0..1] to I_EntProjectProjectObjectLink as _EntProjectProjectObjectLink on $projection.EntProjectObjectLinkUUID = _EntProjectProjectObjectLink.EntProjectObjectLinkUUID

  association [1..1] to I_EnterpriseProject           as _EnterpriseProject           on $projection.ProjectUUID = _EnterpriseProject.ProjectUUID
{

  key cast( EntProjBusSolnOrderLinkUUID as /s4ppm/tv_solo_link_uuid preserving type ) as EntProjBusSolnOrderLinkUUID,

      cast( ProjectUUID as /s4ppm/tv_project_uuid preserving type )                   as ProjectUUID,

      cast( EntProjectObjectLinkUUID as /s4ppm/tv_objectlink_guid preserving type )   as EntProjectObjectLinkUUID,

      BusinessSolutionOrder,

      BusinessSolutionOrderItem,

      _EntProjectProjectObjectLink,

      _EnterpriseProject

}
```
