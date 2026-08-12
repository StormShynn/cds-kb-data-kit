---
name: I_INSPECTIONLOTSTATUS1
description: "Inspectionlotstatus 1"
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
  - status
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONLOTSTATUS1

**Inspectionlotstatus 1**

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
| `InspectionLot` | ✓ | |  |  |  |  |
| `StatusCode` | ✓ | |  |  |  |  |
| `StatusObject` |  | |  |  |  |  |
| `_InspectionLot` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionLot` | `I_InspectionLot` | [1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPLOTSTS1'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Inspection Lot Status'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:
 [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'StatusCode'
@ObjectModel.compositionRoot: true
@ObjectModel.usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #L,
    serviceQuality: #B
}

define view I_InspectionLotStatus1
  as select from           I_StatusObjectActiveStatus
    left outer to one join I_InspectionLot on I_InspectionLot.StatusObject = I_StatusObjectActiveStatus.StatusObject

  association [1] to I_InspectionLot as _InspectionLot on $projection.InspectionLot = _InspectionLot.InspectionLot

{

      @ObjectModel.foreignKey.association: '_InspectionLot'
  key I_InspectionLot.InspectionLot,
  key I_StatusObjectActiveStatus.StatusCode,
      I_StatusObjectActiveStatus.StatusObject,

      I_StatusObjectActiveStatus._StatusObject,
      _InspectionLot
}
where
  I_StatusObjectActiveStatus.StatusObject like 'QL%'
```
