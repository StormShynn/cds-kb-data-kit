---
name: I_INSPECTIONLOTORIGINTYPE
description: "Inspectionlotorigintype"
app_component: QM-IM-2CL
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
  - QM
  - QM-IM
  - interface-view
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONLOTORIGINTYPE

**Inspectionlotorigintype**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
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
| `InspectionLotOrigin` | ✓ | |  | `cast( tq32.herkunft as vdm_qherk preserving type )` |  |  |
| `InspectionLotOriginVariant` | ✓ | |  | `variante` |  |  |
| `InspectionLotType` |  | |  | `art` |  |  |
| `_InspectionLotOrigin` | | ✓ | | | | |
| `_InspectionLotType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLotOrigin` | `I_InspectionLotOrigin` | [1..1] |
| `_InspectionLotType` | `I_InspectionLotType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPLOTORIGNTYP'
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Assignment of Inspection Type to Origin'
@Analytics.dataCategory: #DIMENSION
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'InspectionLotOriginVariant'
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #S,
    serviceQuality: #A 
}
@Metadata.ignorePropagatedAnnotations: true
define view I_InspectionLotOriginType
   as select from tq32

     association [1..1] to I_InspectionLotOrigin as _InspectionLotOrigin
        on $projection.InspectionLotOrigin = _InspectionLotOrigin.InspectionLotOrigin

     association [1..1] to I_InspectionLotType as _InspectionLotType 
        on $projection.InspectionLotType = _InspectionLotType.InspectionLotType
{
@ObjectModel.foreignKey.association: '_InspectionLotOrigin'
  key cast( tq32.herkunft as vdm_qherk preserving type ) as InspectionLotOrigin, 
  key tq32.variante as InspectionLotOriginVariant, 

@ObjectModel.foreignKey.association: '_InspectionLotType'
      tq32.art      as InspectionLotType,
      
      _InspectionLotOrigin,
      _InspectionLotType 
}
```
