---
name: I_JITPCKGGRPITEM
description: "This CDS view provides slot-level information within packing groups. Each slot represents a position within the packing group where materials or components can be placed. This CDS view provides the data to answer the following business questions: What slots exist within a packing group? What is the cell number for each slot? What is the packing status of each slot? What is the internal packaging sequence number? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPITEM')/$value
semantic_en: "This CDS view provides slot-level information within packing groups. Each slot represents a position within the packing group where materials or components can be placed. This CDS view provides the data to answer the following business questions: What slots exist within a packing group? What is the cell number for each slot? What is the packing status of each slot? What is the internal packaging sequence number? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Packing Group Slot — CDS view giao diện dựa trên njit_d_pg_itm."
keywords:
  - "jit"
  - "packing"
  - "group"
  - "slot"
  - "pckg"
  - "item"
  - "cell"
  - "number"
  - "packg"
  - "sqnc"
  - "nmbr"
  - "status"
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
# I_JITPCKGGRPITEM

**This CDS view provides slot-level information within packing groups. Each slot represents a position within the packing group where materials or components can be placed. This CDS view provides the data to answer the following business questions: What slots exist within a packing group? What is the cell number for each slot? What is the packing status of each slot? What is the internal packaging sequence number? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpItemUUID` | ✓ | |  | `db_key` | `RAW(16)` | NodeID |
| `JITPckgGrpUUID` |  | |  | `parent_key` | `RAW(16)` | NodeID |
| `JITPckgGrpCellNumber` |  | |  | `cell_group_number` | `NUMC(6)` | JIT Packing Group Slot Number |
| `JITIntPackgSqncNmbr` |  | |  | `jitintpackgsqncnmbr` | `INT1(3)` | Data element for internal sequence number |
| `JITPackingStatus` |  | |  | `jitpackingstatus` | `CHAR(1)` | Package Group Packing Status |
| `_JITPckgGrpStatus` | | ✓ | | | | |
| `_JITPckgGrpItemRef` | | ✓ | | | | |
| `_JITPckgGrpHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITPckgGrpStatus` | `I_JITPckgGrpStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPITEM')/$value)*

```abap
@AccessControl                      : { authorizationCheck        : #CHECK,
                                        personalData.blocking     : #REQUIRED }
@Analytics                          : { dataCategory              : #DIMENSION,
                                        internalName              : #LOCAL }
@EndUserText.label                  : 'JIT Packing Group Slot'
@Metadata.allowExtensions           : true
@ObjectModel                        : { modelingPattern           : #ANALYTICAL_DIMENSION,
                                        representativeKey         : 'JITPckgGrpItemUUID',
                                        sapObjectNodeType.name    : 'JITPackingGroupSlot',
                                        supportedCapabilities     : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                        usageType                 : { dataClass       : #TRANSACTIONAL,
                                                                      serviceQuality  : #A,
                                                                      sizeCategory    : #XXL }
                                       }
@VDM.viewType                       : #BASIC

define view entity I_JITPckgGrpItem
  as select from njit_d_pg_itm
  composition[0..*]   of I_JITPckgGrpItemRef        as _JITPckgGrpItemRef
  association         to parent I_JITPckgGrpHeader  as _JITPckgGrpHeader  on $projection.JITPckgGrpUUID = _JITPckgGrpHeader.JITPckgGrpUUID
  association [0..1]  to I_JITPckgGrpStatus         as _JITPckgGrpStatus  on $projection.JITPackingStatus = _JITPckgGrpStatus.JITPckgGrpStatus

{
  key db_key              as JITPckgGrpItemUUID,
      @ObjectModel.foreignKey.association : '_JITPckgGrpHeader'
      parent_key          as JITPckgGrpUUID,
      cell_group_number   as JITPckgGrpCellNumber,
      jitintpackgsqncnmbr as JITIntPackgSqncNmbr,
      @ObjectModel.foreignKey.association : '_JITPckgGrpStatus'
      jitpackingstatus    as JITPackingStatus, //CE2102

      //Association
      _JITPckgGrpItemRef,
      _JITPckgGrpHeader,
      _JITPckgGrpStatus
}
```
