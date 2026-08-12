---
name: I_EQUIPMENTHIERARCHYNODE
description: "Equipment Hierarchy Nodes"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EQUIPMENTHIERARCHYNODE')/$value
semantic_en: "Equipment Hierarchy Nodes"
semantic_vi: "Equipment Hierarchy Nodes — CDS view giao diện dựa trên I_EquipmentTimeSeg."
keywords:
  - "equipment"
  - "hierarchy"
  - "nodes"
  - "node"
  - "equip"
  - "usage"
  - "period"
  - "sequence"
  - "number"
  - "validity"
  - "date"
  - "superordinate"
tags:
  - PM
  - component:PM-EQM-EQ-2CL
  - interface-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-EQ
  - PM-EQM-EQ-2CL
---
# I_EQUIPMENTHIERARCHYNODE

**Equipment Hierarchy Nodes**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EQUIPMENTHIERARCHYNODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HierarchyNode` | ✓ | |  | `Equipment` | `CHAR(18)` | Equipment Number |
| `EquipUsagePeriodSequenceNumber` | ✓ | |  |  | `NUMC(3)` | Consecutive numbering of EquipUsagePeriods on same day |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid To Date |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `SuperordinateEquipment` |  | |  |  | `CHAR(18)` | Superordinate Equipment |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `_Equipment` | | ✓ | | | | |
| `_EquipmentText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Equipment` | `I_EquipmentData` | [0..*] |
| `_EquipmentText` | `I_EquipmentText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EQUIPMENTHIERARCHYNODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EQUIPMENTHIERARCHYNODE')/$value)*

```abap
@EndUserText.label: 'Equipment Hierarchy Nodes'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'IEQUIHIERNODE'
@ClientHandling.algorithm: #SESSION_VARIABLE

@Hierarchy.parentChild: {
  name: 'EquipmentHierarchy',
  label: 'Equipment Hierarchy',
  recurse: {
    parent: 'SuperordinateEquipment',
    child:  'HierarchyNode'
  }
}

@Analytics: {
  dataExtraction.enabled,
  --dataExtraction.delta.changeDataCapture.automatic
  dataExtraction.delta.changeDataCapture.mapping: [{
    role: #MAIN,
    table: 'EQUZ',
    viewElement: ['HierarchyNode', 'ValidityEndDate'],--, 'Equipment', 'SuperordinateEquipment', 'ValidityStartDate'],
    tableElement: ['EQUNR', 'DATBI']--, 'EQUNR', 'HEQUI', 'DATAB']
  }]
}

@ObjectModel: {
  dataCategory: #HIERARCHY,
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L
  }
}
@ObjectModel.sapObjectNodeType.name: 'Equipment'

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]

@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'I_MaintEquipHierarchyNode'

define view I_EquipmentHierarchyNode
  as select from I_EquipmentTimeSeg
  association [0..*] to I_EquipmentData as _Equipment     on _Equipment.Equipment = $projection.Equipment
  association [0..*] to I_EquipmentText as _EquipmentText on _EquipmentText.Equipment = $projection.Equipment
 
{
  key I_EquipmentTimeSeg.Equipment as HierarchyNode,
  key I_EquipmentTimeSeg.EquipUsagePeriodSequenceNumber,
      @Semantics.businessDate.to: true
  key I_EquipmentTimeSeg.ValidityEndDate,

      @ObjectModel.foreignKey.association: '_Equipment'
      @ObjectModel.text.association: '_EquipmentText'
      I_EquipmentTimeSeg.Equipment,
      I_EquipmentTimeSeg.SuperordinateEquipment,

      @Semantics.businessDate.from: true
      I_EquipmentTimeSeg.ValidityStartDate,

      _EquipmentText,
      _Equipment
}
where
      I_EquipmentTimeSeg.ValidityEndDate                = '99991231'
  and I_EquipmentTimeSeg.EquipUsagePeriodSequenceNumber = '001'
```
