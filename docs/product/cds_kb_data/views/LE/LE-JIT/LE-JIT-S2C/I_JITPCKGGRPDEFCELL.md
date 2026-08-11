---
name: I_JITPCKGGRPDEFCELL
description: "This CDS view provides the cell definition data for JIT packing groups. It defines the slot groups within a packing group, including cell ranges, quantities per cell, and content types. This view is a composition of the root packing group definition. This CDS view provides the data to answer the following business questions: What cells are defined within a packing group? What is the quantity per cell for a slot group? What is the cell increment value for a packing group? Which component group materials are assigned to cells? What is the sort sequence for packing cells? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFCELL')/$value
semantic_en: "This CDS view provides the cell definition data for JIT packing groups. It defines the slot groups within a packing group, including cell ranges, quantities per cell, and content types. This view is a composition of the root packing group definition. This CDS view provides the data to answer the following business questions: What cells are defined within a packing group? What is the quantity per cell for a slot group? What is the cell increment value for a packing group? Which component group materials are assigned to cells? What is the sort sequence for packing cells? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Packing Group Cell Definition — CDS view giao diện dựa trên njit_d_pgd_cell."
keywords:
  - "jit"
  - "packing"
  - "group"
  - "cell"
  - "definition"
  - "pckg"
  - "pckg1st"
  - "last"
  - "incrmt"
  - "value"
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - material
---
# I_JITPCKGGRPDEFCELL

**This CDS view provides the cell definition data for JIT packing groups. It defines the slot groups within a packing group, including cell ranges, quantities per cell, and content types. This view is a composition of the root packing group definition. This CDS view provides the data to answer the following business questions: What cells are defined within a packing group? What is the quantity per cell for a slot group? What is the cell increment value for a packing group? Which component group materials are assigned to cells? What is the sort sequence for packing cells? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFCELL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpCellUUID` | ✓ | |  | `db_key` | `RAW(16)` | NodeID |
| `JITPckgGrpDefUUID` |  | |  | `parent_key` | `RAW(16)` | NodeID |
| `JITPckg1stCellID` |  | |  | `pckg_first_cell_id` | `INT1(3)` | Slot Group: First Slot ID |
| `JITPckgLastCellID` |  | |  | `pckg_last_cell_id` | `INT1(3)` | Slot Group: Last Slot ID |
| `JITPckgCellIncrmtValue` |  | |  | `pckg_cell_increment` | `INT1(3)` | Slot Group: Slot Increment |
| `JITPckgRowSqnc` |  | |  | `pckg_rows` |  |  |
| `JITPckgQtyPerCell` |  | |  | `pckg_qty_per_cell` | `QUAN(13)` | Slot Group: Quantity per Slot |
| `QuantityUnit` |  | |  | `unit_of_measure` | `UNIT(3)` | Base Unit of Measure |
| `JITPckgCntntType` |  | |  | `pckg_content_type` | `CHAR(2)` | Slot Group: Content Type |
| `JITPckgGrpDefID` |  | |  | `pckg_grp_def_id` | `CHAR(10)` | Package Group Specification ID |
| `CompGrpMatl` |  | |  | `comp_grp_mat` | `CHAR(40)` | Components Group Material |
| `JITIntPackgSortSqnc` |  | |  | `jitintpackgsqnc` | `CHAR(1)` | Internal Packing sequence |
| `JITPckgSortSqnc` |  | |  | `pckg_sort_seq` | `CHAR(1)` | Slot Group: Sort Sequence |
| `_QuantityUnitOfMeasure` | | ✓ | | | | |
| `_JITPackageGroupContentType` | | ✓ | | | | |
| `_JITPackageCellGrpSortSequence` | | ✓ | | | | |
| `_JITIntPckgCellGrpSortSequence` | | ✓ | | | | |
| `_JITChildPckgGrpDef` | | ✓ | | | | |
| `_ComponentGroupMaterial` | | ✓ | | | | |
| `_JITPackageGroupDefinition` | | ✓ | | | | |
| `_JITPckgGrpDefSlotGrpCntnt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QuantityUnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_JITPackageGroupContentType` | `I_JITPckgGrpCntntType` | [0..1] |
| `_JITPackageCellGrpSortSequence` | `I_JITPckgCellGrpSortSqnc` | [0..1] |
| `_JITIntPckgCellGrpSortSequence` | `I_JITPckgCellGrpSortSqnc` | [0..1] |
| `_JITChildPckgGrpDef` | `I_JITPckgGrpDef` | [0..1] |
| `_ComponentGroupMaterial` | `I_Material` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFCELL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFCELL')/$value)*

```abap
@AccessControl              : { authorizationCheck       : #MANDATORY
                              }
@Analytics                  : { internalName             : #LOCAL,
                                technicalName            : 'IJITPGDCELL'
                              }
@EndUserText.label          : 'JIT Packing Group Cell Definition'
@Metadata.allowExtensions   : true
@ObjectModel                : { modelingPattern          : #NONE,
                                representativeKey        : 'JITPckgGrpCellUUID',
                                sapObjectNodeType.name   : 'JITPackgGrpSpecSlotGroup',
                                supportedCapabilities    : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                usageType                : { dataClass     : #MASTER,
                                                             serviceQuality: #A,
                                                             sizeCategory  : #S }
                                }

@VDM.viewType               : #BASIC
define view entity I_JITPckgGrpDefCell
  as select from njit_d_pgd_cell
  composition [0..*] of I_JITPckgGrpDefSlotGrpCntnt as _JITPckgGrpDefSlotGrpCntnt
  association        to parent I_JITPckgGrpDef             as _JITPackageGroupDefinition on $projection.JITPckgGrpDefUUID = _JITPackageGroupDefinition.JITPckgGrpDefUUID
  association [0..1] to I_UnitOfMeasure             as _QuantityUnitOfMeasure            on $projection.QuantityUnit = _QuantityUnitOfMeasure.UnitOfMeasure
  association [0..1] to I_JITPckgGrpCntntType       as _JITPackageGroupContentType       on $projection.JITPckgCntntType = _JITPackageGroupContentType.JITPckgCntntType
  association [0..1] to I_JITPckgCellGrpSortSqnc    as _JITPackageCellGrpSortSequence    on $projection.JITPckgSortSqnc = _JITPackageCellGrpSortSequence.JITPckgSortSqnc
  association [0..1] to I_JITPckgCellGrpSortSqnc    as _JITIntPckgCellGrpSortSequence    on $projection.JITIntPackgSortSqnc = _JITIntPckgCellGrpSortSequence.JITPckgSortSqnc
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_JITPckgGrpDef             as _JITChildPckgGrpDef               on $projection.JITPckgGrpDefID = _JITChildPckgGrpDef.JITPckgGrpDefID
  association [0..1] to I_Material                  as _ComponentGroupMaterial           on $projection.CompGrpMatl = _ComponentGroupMaterial.Material
{
  key db_key              as JITPckgGrpCellUUID,
      @ObjectModel.foreignKey.association: '_JITPackageGroupDefinition'
      parent_key          as JITPckgGrpDefUUID,
      pckg_first_cell_id  as JITPckg1stCellID,
      pckg_last_cell_id   as JITPckgLastCellID,
      pckg_cell_increment as JITPckgCellIncrmtValue,
      pckg_rows           as JITPckgRowSqnc,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      pckg_qty_per_cell   as JITPckgQtyPerCell,
      @ObjectModel.foreignKey.association:'_QuantityUnitOfMeasure'
      unit_of_measure     as QuantityUnit,
      @ObjectModel.foreignKey.association:'_JITPackageGroupContentType'
      pckg_content_type   as JITPckgCntntType,
      pckg_grp_def_id     as JITPckgGrpDefID,
      @ObjectModel.foreignKey.association: '_ComponentGroupMaterial'
      comp_grp_mat        as CompGrpMatl,
      @ObjectModel.foreignKey.association:'_JITIntPckgCellGrpSortSequence'
      jitintpackgsqnc     as JITIntPackgSortSqnc,
      @ObjectModel.foreignKey.association:'_JITPackageCellGrpSortSequence'
      pckg_sort_seq       as JITPckgSortSqnc,
      _QuantityUnitOfMeasure,
      _JITPackageGroupDefinition,
      _JITPackageGroupContentType,
      _JITPackageCellGrpSortSequence,
      _JITIntPckgCellGrpSortSequence,
      _JITPckgGrpDefSlotGrpCntnt,
      _JITChildPckgGrpDef,
      _ComponentGroupMaterial
}
```
