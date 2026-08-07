---
name: I_SERIALNUMBERMATERIALDOC_2
description: Serial NumberMATERIALDOC 2
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
  - material
  - serial-number
  - component:LO-MD-SN-2CL
  - lob:Logistics General
  - bo:Material
---
# I_SERIALNUMBERMATERIALDOC_2

**Serial NumberMATERIALDOC 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-SN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Equipment` | ✓ | | `_MaintenanceObjectListItem` | `Equipment` |
| `MaterialDocumentYear` | ✓ | | `_MaintObjListMaterialDocument` | `MaterialDocumentYear` |
| `MaterialDocument` | ✓ | | `_MaintObjListMaterialDocument` | `MaterialDocument` |
| `MaterialDocumentItem` | ✓ | | `_MaintObjListMaterialDocument` | `MaterialDocumentItem` |
| `Material` |  | | `_MaintenanceObjectListItem` | `Material` |
| `SerialNumber` |  | | `_MaintenanceObjectListItem` | `SerialNumber` |

## Source Code

```abap
@AccessControl: { authorizationCheck: #CHECK,
                  personalData.blocking: #NOT_REQUIRED }

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

@EndUserText.label: 'Serial Number in Material Document'
@Metadata.ignorePropagatedAnnotations:true
define view entity I_SerialNumberMaterialDoc_2
  as select from I_MaintObjListMaterialDocument as _MaintObjListMaterialDocument
  -- data source association to list item cannot be used due to current CDS restrictions
  -- (could be done implicitly in field list by _A._B[inner].C, but non-maskable warnings ensue)
  -- ... join needs foreign key relationship to be defined again
    inner join I_MaintenanceObjectListItem as _MaintenanceObjectListItem
      on _MaintObjListMaterialDocument.MaintenanceObjectList = _MaintenanceObjectListItem.MaintenanceObjectList
{
  @ObjectModel.foreignKey.association: '_Equipment'
  key _MaintenanceObjectListItem.Equipment,

  @ObjectModel.foreignKey.association: '_MaterialDocumentYear'
  key _MaintObjListMaterialDocument.MaterialDocumentYear,
  @ObjectModel.foreignKey.association: '_MaterialDocument'
  key _MaintObjListMaterialDocument.MaterialDocument,
  @ObjectModel.foreignKey.association: '_MaterialDocumentItem'
  key _MaintObjListMaterialDocument.MaterialDocumentItem,

  @ObjectModel.foreignKey.association: '_Product'
  _MaintenanceObjectListItem.Material,
  _MaintenanceObjectListItem.SerialNumber,

  _MaintenanceObjectListItem._Equipment,
  _MaintObjListMaterialDocument._MaterialDocumentYear,
  _MaintObjListMaterialDocument._MaterialDocument,
  _MaintObjListMaterialDocument._MaterialDocumentItem,
  _MaintenanceObjectListItem._Product
}
```
