---
name: I_SERIALNUMBERPHYSINVENTORYDOC
description: "Serial NumberPHYSINVENTORYDOC"
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
  - inventory
  - serial-number
  - component:LO-MD-SN-2CL
  - lob:Logistics General
  - bo:Inventory
---
# I_SERIALNUMBERPHYSINVENTORYDOC

**Serial NumberPHYSINVENTORYDOC**

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
| `Equipment` | ✓ | | `_MaintenanceObjectListItem` | `Equipment` |  |  |
| `FiscalYear` | ✓ | | `_MaintObjListPhysInventoryDoc` | `FiscalYear` |  |  |
| `PhysicalInventoryDocument` | ✓ | | `_MaintObjListPhysInventoryDoc` | `PhysicalInventoryDocument` |  |  |
| `PhysicalInventoryDocumentItem` | ✓ | | `_MaintObjListPhysInventoryDoc` | `PhysicalInventoryDocumentItem` |  |  |
| `SerialNumberPhysicalInvtryType` | ✓ | | `_MaintObjListPhysInventoryDoc` | `SerialNumberPhysicalInvtryType` |  |  |
| `Material` |  | | `_MaintenanceObjectListItem` | `Material` |  |  |
| `SerialNumber` |  | | `_MaintenanceObjectListItem` | `SerialNumber` |  |  |

## Source Code

```abap
@AccessControl: { authorizationCheck: #CHECK,
                  personalData.blocking: #NOT_REQUIRED }

//@AbapCatalog.sqlViewName: 'ISERNOPIDOCS'
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
//@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #COMPOSITE

@ObjectModel.usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #A,
        sizeCategory:   #XL }
@ObjectModel.supportedCapabilities: [
  #SQL_DATA_SOURCE,
  #CDS_MODELING_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET
]

@EndUserText.label: 'Serial Number in Physical Inventory Doc'
@Metadata.ignorePropagatedAnnotations:true
define view entity I_SerialNumberPhysInventoryDoc
  as select from I_MaintObjListPhysInventoryDoc as _MaintObjListPhysInventoryDoc
  -- data source association to list item cannot be used due to current CDS restrictions
  -- (could be done implicitly in field list by _A._B[inner].C, but non-maskable warnings ensue)
  -- ... join needs foreign key relationship to be defined again
    inner join I_MaintenanceObjectListItem as _MaintenanceObjectListItem
      on _MaintObjListPhysInventoryDoc.MaintenanceObjectList = _MaintenanceObjectListItem.MaintenanceObjectList
{
  @ObjectModel.foreignKey.association: '_Equipment'
  key _MaintenanceObjectListItem.Equipment,

  @ObjectModel.foreignKey.association: '_PhysicalInvtryDocFiscalYear'
  key _MaintObjListPhysInventoryDoc.FiscalYear,
  @ObjectModel.foreignKey.association: '_PhysicalInventoryDocument'
  key _MaintObjListPhysInventoryDoc.PhysicalInventoryDocument,
  @ObjectModel.foreignKey.association: '_PhysicalInventoryDocumentItem'
  key _MaintObjListPhysInventoryDoc.PhysicalInventoryDocumentItem,
  key _MaintObjListPhysInventoryDoc.SerialNumberPhysicalInvtryType,

  @ObjectModel.foreignKey.association: '_Product'
  _MaintenanceObjectListItem.Material,
  _MaintenanceObjectListItem.SerialNumber,

  _MaintenanceObjectListItem._Equipment,
  _MaintObjListPhysInventoryDoc._PhysicalInvtryDocFiscalYear,
  _MaintObjListPhysInventoryDoc._PhysicalInventoryDocument,
  _MaintObjListPhysInventoryDoc._PhysicalInventoryDocumentItem,
  _MaintenanceObjectListItem._Product
}
```
