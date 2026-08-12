---
name: I_JITPCKGGRPITEMREF
description: "This CDS view provides content reference information for slots within packing groups. It links slots to their actual content such as JIT calls or component groups. This CDS view provides the data to answer the following business questions: What content is assigned to each packing group slot? What type of content is in each slot? Which reference document is linked to the slot content? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPITEMREF')/$value
semantic_en: "This CDS view provides content reference information for slots within packing groups. It links slots to their actual content such as JIT calls or component groups. This CDS view provides the data to answer the following business questions: What content is assigned to each packing group slot? What type of content is in each slot? Which reference document is linked to the slot content? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Packing Group Slot Content — CDS view giao diện dựa trên njit_d_pg_itmref."
keywords:
  - "jit"
  - "packing"
  - "group"
  - "slot"
  - "content"
  - "pckg"
  - "item"
  - "cntnt"
  - "type"
  - "reference"
  - "document"
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - document
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
---
# I_JITPCKGGRPITEMREF

**This CDS view provides content reference information for slots within packing groups. It links slots to their actual content such as JIT calls or component groups. This CDS view provides the data to answer the following business questions: What content is assigned to each packing group slot? What type of content is in each slot? Which reference document is linked to the slot content? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPITEMREF')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpItemRefUUID` | ✓ | |  | `db_key` | `RAW(16)` | NodeID |
| `JITPckgGrpItemUUID` |  | |  | `parent_key` | `RAW(16)` | NodeID |
| `JITPckgGrpUUID` |  | |  | `root_key` | `RAW(16)` | NodeID |
| `JITPckgCntntType` |  | |  | `pckg_content_type` | `CHAR(2)` | Slot Group: Content Type |
| `ReferenceDocumentUUID` |  | |  | `content_uuid` | `RAW(16)` | JIT key |
| `_JITPckgGrpHeader` | | ✓ | | | | |
| `_JITPckgGrpCntntType` | | ✓ | | | | |
| `_JITPckgGrpItem` | | ✓ | | | | |
| `_JITPckgGrpHistlRef` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITPckgGrpHeader` | `I_JITPckgGrpHeader` | [0..1] |
| `_JITPckgGrpCntntType` | `I_JITPckgGrpCntntType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPITEMREF')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPITEMREF')/$value)*

```abap
@AccessControl                      : { authorizationCheck        : #CHECK,
                                        personalData.blocking     : #REQUIRED }
@Analytics                          : { dataCategory              : #DIMENSION,
                                        internalName              : #LOCAL } 
@EndUserText.label                  : 'JIT Packing Group Slot Content'
@Metadata.allowExtensions           : true

@ObjectModel                        : { modelingPattern           : #ANALYTICAL_DIMENSION,
                                        representativeKey         : 'JITPckgGrpItemRefUUID',
                                        sapObjectNodeType.name    : 'JITPackingGroupSlotContent',
                                        supportedCapabilities     : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                                        usageType                 : { dataClass       : #TRANSACTIONAL,
                                                                      serviceQuality  : #A,
                                                                      sizeCategory    : #XXL }
                                      }
@VDM.viewType                       : #BASIC

define view entity I_JITPckgGrpItemRef
  as select from njit_d_pg_itmref
  composition [0..*] of I_JITPckgGrpHistlRef    as _JITPckgGrpHistlRef
  association        to parent I_JITPckgGrpItem as _JITPckgGrpItem      on $projection.JITPckgGrpItemUUID = _JITPckgGrpItem.JITPckgGrpItemUUID
  association [0..1] to I_JITPckgGrpHeader      as _JITPckgGrpHeader    on $projection.JITPckgGrpUUID     = _JITPckgGrpHeader.JITPckgGrpUUID
  association [0..1] to I_JITPckgGrpCntntType   as _JITPckgGrpCntntType on $projection.JITPckgCntntType   = _JITPckgGrpCntntType.JITPckgCntntType
{
  key db_key            as JITPckgGrpItemRefUUID,
      @ObjectModel.foreignKey.association : '_JITPckgGrpItem'
      parent_key        as JITPckgGrpItemUUID,
      @ObjectModel.foreignKey.association : '_JITPckgGrpHeader'
      root_key          as JITPckgGrpUUID,
      @ObjectModel.foreignKey.association : '_JITPckgGrpCntntType'
      pckg_content_type as JITPckgCntntType,
      content_uuid      as ReferenceDocumentUUID,

      //Association
      _JITPckgGrpItem,
      _JITPckgGrpHeader,
      _JITPckgGrpCntntType,
      _JITPckgGrpHistlRef
}
```
