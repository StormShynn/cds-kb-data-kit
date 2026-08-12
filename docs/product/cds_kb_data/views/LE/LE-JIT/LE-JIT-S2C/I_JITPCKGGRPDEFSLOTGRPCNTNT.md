---
name: I_JITPCKGGRPDEFSLOTGRPCNTNT
description: "This CDS view provides the content details for slot groups within JIT packing group cells. It links slot groups to their associated packing group definitions and component materials. This CDS view provides the data to answer the following business questions: What content is assigned to each slot group? Which component materials are in a slot group? How are slot groups linked to packing group definitions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFSLOTGRPCNTNT')/$value
semantic_en: "This CDS view provides the content details for slot groups within JIT packing group cells. It links slot groups to their associated packing group definitions and component materials. This CDS view provides the data to answer the following business questions: What content is assigned to each slot group? Which component materials are in a slot group? How are slot groups linked to packing group definitions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Packing Group Slot Group Content — CDS view giao diện (master data) dựa trên njit_d_pgd_sgc."
keywords:
  - "jit"
  - "packing"
  - "group"
  - "slot"
  - "content"
  - "pckg"
  - "cntnt"
  - "cell"
  - "comp"
  - "matl"
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
# I_JITPCKGGRPDEFSLOTGRPCNTNT

**This CDS view provides the content details for slot groups within JIT packing group cells. It links slot groups to their associated packing group definitions and component materials. This CDS view provides the data to answer the following business questions: What content is assigned to each slot group? Which component materials are in a slot group? How are slot groups linked to packing group definitions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFSLOTGRPCNTNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpDefSlotGrpCntntUUID` | ✓ | |  | `jitpckggrpdefslotgrpcntntuuid` | `RAW(16)` | NodeID |
| `JITPckgGrpCellUUID` |  | |  | `jitpckggrpcelluuid` | `RAW(16)` | NodeID |
| `JITPckgGrpDefUUID` |  | |  | `jitpckggrpdefuuid` | `RAW(16)` | NodeID |
| `CompGrpMatl` |  | |  | `compgrpmatl` | `CHAR(40)` | Components Group Material |
| `_JITPackageGroupDefinition` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_JITPackageGroupDefCell` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITPackageGroupDefinition` | `I_JITPckgGrpDef` | [0..1] |
| `_Product` | `I_Product` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFSLOTGRPCNTNT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDEFSLOTGRPCNTNT')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics                       : { dataCategory   : #DIMENSION,
                                     internalName   : #LOCAL }
@EndUserText.label               : 'JIT Packing Group Slot Group Content'
@ObjectModel: {
    usageType: {
         dataClass               : #MASTER,
         serviceQuality          : #A,
         sizeCategory            : #M
  },
  modelingPattern                : #ANALYTICAL_DIMENSION,
  representativeKey              : 'JITPckgGrpDefSlotGrpCntntUUID',
  sapObjectNodeType.name         : 'JITPackgGrpSpecSlotGrpContent' ,
  supportedCapabilities          : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}
@Metadata.allowExtensions        :true
@VDM.viewType                    : #BASIC
define view entity I_JITPckgGrpDefSlotGrpCntnt
  as select from njit_d_pgd_sgc
  association        to parent I_JITPckgGrpDefCell as _JITPackageGroupDefCell    on $projection.JITPckgGrpCellUUID = _JITPackageGroupDefCell.JITPckgGrpCellUUID
  association [0..1] to I_JITPckgGrpDef            as _JITPackageGroupDefinition on $projection.JITPckgGrpDefUUID = _JITPackageGroupDefinition.JITPckgGrpDefUUID
  association [0..1] to I_Product                  as _Product                   on $projection.CompGrpMatl = _Product.Product
{
  key jitpckggrpdefslotgrpcntntuuid as JITPckgGrpDefSlotGrpCntntUUID,
      @ObjectModel.foreignKey.association: '_JITPackageGroupDefCell'
      jitpckggrpcelluuid            as JITPckgGrpCellUUID,
      @ObjectModel.foreignKey.association: '_JITPackageGroupDefinition'
      jitpckggrpdefuuid             as JITPckgGrpDefUUID,
      @ObjectModel.foreignKey.association: '_Product'
      compgrpmatl                   as CompGrpMatl,

      // Associations
      _JITPackageGroupDefCell,
      _JITPackageGroupDefinition,
      _Product
}
```
