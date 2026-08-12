---
name: I_JITPCKGGRPDEFHIER
description: "This CDS view exposes the hierarchy relationships between JIT packing group specifications. It defines parent-child relationships between packing groups, enabling nested packing configurations. This CDS view provides the data to answer the following business questions: What is the hierarchy structure of packing groups? Which child packing groups belong to a parent packing group? What are the nested packing configurations? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFHIER')/$value
semantic_en: "This CDS view exposes the hierarchy relationships between JIT packing group specifications. It defines parent-child relationships between packing groups, enabling nested packing configurations. This CDS view provides the data to answer the following business questions: What is the hierarchy structure of packing groups? Which child packing groups belong to a parent packing group? What are the nested packing configurations? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Packing Group Definition Hierarchy — CDS view giao diện dựa trên njit_d_pgd_hier."
keywords:
  - "jit"
  - "packing"
  - "group"
  - "definition"
  - "hierarchy"
  - "pckg"
  - "hier"
  - "child"
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
---
# I_JITPCKGGRPDEFHIER

**This CDS view exposes the hierarchy relationships between JIT packing group specifications. It defines parent-child relationships between packing groups, enabling nested packing configurations. This CDS view provides the data to answer the following business questions: What is the hierarchy structure of packing groups? Which child packing groups belong to a parent packing group? What are the nested packing configurations? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFHIER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpHierUUID` | ✓ | |  | `db_key` | `RAW(16)` | NodeID |
| `JITPckgGrpDefUUID` |  | |  | `parent_key` | `RAW(16)` | NodeID |
| `JITChildPckgGrpDefUUID` |  | |  | `child_pckg_grp_def_key` | `RAW(16)` | NodeID |
| `_JITChildPckgGrpDef` | | ✓ | | | | |
| `_JITPackageGroupDefinition` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITChildPckgGrpDef` | `I_JITPckgGrpDef` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFHIER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFHIER')/$value)*

```abap
@AccessControl              : { authorizationCheck       : #MANDATORY
                              }
@Analytics                  : { dataCategory             : #DIMENSION,
                                internalName             : #LOCAL,
                                technicalName            : 'IJITPGDHIER'
                              }
@EndUserText.label          : 'JIT Packing Group Definition Hierarchy'
@Metadata.allowExtensions   : true
@ObjectModel                : { modelingPattern          : #ANALYTICAL_DIMENSION,
                                representativeKey        : 'JITPckgGrpHierUUID',
                                sapObjectNodeType.name   : 'JITPackgGrpSpecHierarchy',
                                supportedCapabilities    : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                usageType                : { dataClass     : #MASTER,
                                                             serviceQuality: #A,
                                                             sizeCategory  : #S }
                                }

@VDM.viewType               : #BASIC
define view entity I_JITPckgGrpDefHier
  as select from njit_d_pgd_hier
  association        to parent I_JITPckgGrpDef as _JITPackageGroupDefinition on $projection.JITPckgGrpDefUUID = _JITPackageGroupDefinition.JITPckgGrpDefUUID
  association [0..1] to I_JITPckgGrpDef        as _JITChildPckgGrpDef        on $projection.JITChildPckgGrpDefUUID = _JITChildPckgGrpDef.JITPckgGrpDefUUID
{
  key db_key                 as JITPckgGrpHierUUID,
      @ObjectModel.foreignKey.association:'_JITPackageGroupDefinition'
      parent_key             as JITPckgGrpDefUUID,
      @ObjectModel.foreignKey.association:'_JITChildPckgGrpDef'
      child_pckg_grp_def_key as JITChildPckgGrpDefUUID,
      _JITPackageGroupDefinition,
      _JITChildPckgGrpDef
}
```
