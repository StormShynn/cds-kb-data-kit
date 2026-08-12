---
name: I_ENTPROJELMNTDLVBRLTYPE
description: "Entprojelmntdlvbrltype"
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
# I_ENTPROJELMNTDLVBRLTYPE

**Entprojelmntdlvbrltype**

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
| `EntProjElmntDeliverableType` | ✓ | |  | `cast ( substring( resource_id, 1, 6 ) as /s4ppm/tv_entprojdlvbrltype preserving type )` |  |  |
| `_DeliverableTypeText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel:{ representativeKey: 'EntProjElmntDeliverableType',
               usageType.dataClass: #CUSTOMIZING,
               usageType.serviceQuality: #A,
               usageType.sizeCategory: #S,
               supportedCapabilities: [#SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,  #EXTRACTION_DATA_SOURCE],
               sapObjectNodeType.name: 'EntProjElmntDeliverableType'
                }
               
@Metadata.ignorePropagatedAnnotations:true

@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@EndUserText.label: 'Deliverable Type for Ent Proj Elmnts'
define root view entity I_EntProjElmntDlvbrlType as select from /cpd/c_map_resid
  composition [0..*] of I_EntProjElmntDlvbrlTypeText as _DeliverableTypeText
{
        @ObjectModel.text.association: '_DeliverableTypeText'
    key cast ( substring( resource_id, 1, 6 ) as /s4ppm/tv_entprojdlvbrltype preserving type ) as EntProjElmntDeliverableType,
        _DeliverableTypeText
}
where resource_type_id = '0SRV'
```
