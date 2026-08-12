---
name: I_JITPCKGGRPHISTLREF
description: "This CDS view provides historical reference information for slot contents. It tracks the history of content assignments to packing group slots. This CDS view provides the data to answer the following business questions: What is the historical reference for slot contents? Which super packing group is referenced? What is the reference document for historical tracking? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPHISTLREF')/$value
semantic_en: "This CDS view provides historical reference information for slot contents. It tracks the history of content assignments to packing group slots. This CDS view provides the data to answer the following business questions: What is the historical reference for slot contents? Which super packing group is referenced? What is the reference document for historical tracking? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "JIT Packing Group Slot Content Histl Ref — CDS view giao diện dựa trên njit_d_pg_href."
keywords:
  - "jit"
  - "packing"
  - "group"
  - "slot"
  - "content"
  - "histl"
  - "ref"
  - "pckg"
  - "historical"
  - "item"
  - "reference"
  - "document"
  - "super"
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
# I_JITPCKGGRPHISTLREF

**This CDS view provides historical reference information for slot contents. It tracks the history of content assignments to packing group slots. This CDS view provides the data to answer the following business questions: What is the historical reference for slot contents? Which super packing group is referenced? What is the reference document for historical tracking? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPHISTLREF')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITPckgGrpHistoricalRefUUID` | ✓ | |  | `jitpckggrphistoricalrefuuid` | `RAW(16)` | NodeID |
| `JITPckgGrpItemRefUUID` |  | |  | `jitpckggrpitemrefuuid` | `RAW(16)` | NodeID |
| `JITPckgGrpUUID` |  | |  | `jitpckggrpuuid` | `RAW(16)` | NodeID |
| `ReferenceDocumentUUID` |  | |  | `referencedocumentuuid` | `RAW(16)` | NodeID |
| `JITSuperPckgGrpUUID` |  | |  | `jitsuperpckggrpuuid` | `RAW(16)` | NodeID |
| `_JITPckgGrpHeader` | | ✓ | | | | |
| `_JITSuperPckgGrpHeader` | | ✓ | | | | |
| `_JITCallCompGroupBasic` | | ✓ | | | | |
| `_JITPckgGrpItemRef` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITPckgGrpHeader` | `I_JITPckgGrpHeader` | [1..1] |
| `_JITSuperPckgGrpHeader` | `I_JITPckgGrpHeader` | [0..1] |
| `_JITCallCompGroupBasic` | `I_JITCallCompGroupBasic` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPHISTLREF')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPHISTLREF')/$value)*

```abap
@AccessControl                        : { authorizationCheck        : #MANDATORY,
                                          personalData.blocking     : #REQUIRED }
@Analytics                            : { dataCategory              : #DIMENSION,
                                          internalName              : #LOCAL } 
@EndUserText.label                    : 'JIT Packing Group Slot Content Histl Ref'
@Metadata.ignorePropagatedAnnotations : true
@Metadata.allowExtensions             : true
@ObjectModel                          : { modelingPattern           : #ANALYTICAL_DIMENSION,
                                          representativeKey         : 'JITPckgGrpHistoricalRefUUID',
                                          sapObjectNodeType.name    : 'JITPackgGrpSlotCntntHistlRef',
                                          supportedCapabilities     : [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ], 
                                          usageType                 : { dataClass       : #TRANSACTIONAL,
                                                                        serviceQuality  : #A,
                                                                        sizeCategory    : #XXL }
                                        }
@VDM.viewType                       : #BASIC

define view entity I_JITPckgGrpHistlRef
  as select from njit_d_pg_href
  association        to parent I_JITPckgGrpItemRef  as _JITPckgGrpItemRef     on $projection.JITPckgGrpItemRefUUID = _JITPckgGrpItemRef.JITPckgGrpItemRefUUID
  association [1..1] to I_JITPckgGrpHeader          as _JITPckgGrpHeader      on $projection.JITPckgGrpUUID = _JITPckgGrpHeader.JITPckgGrpUUID
  association [0..1] to I_JITPckgGrpHeader          as _JITSuperPckgGrpHeader on $projection.JITSuperPckgGrpUUID = _JITSuperPckgGrpHeader.JITPckgGrpUUID
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_JITCallCompGroupBasic     as _JITCallCompGroupBasic on $projection.ReferenceDocumentUUID = _JITCallCompGroupBasic.JITCallCompGrpUUID
{
  key jitpckggrphistoricalrefuuid as JITPckgGrpHistoricalRefUUID,
      jitpckggrpitemrefuuid       as JITPckgGrpItemRefUUID,
      @ObjectModel.foreignKey.association: '_JITPckgGrpHeader'
      jitpckggrpuuid              as JITPckgGrpUUID,
      referencedocumentuuid       as ReferenceDocumentUUID,
      @ObjectModel.foreignKey.association: '_JITSuperPckgGrpHeader'
      jitsuperpckggrpuuid         as JITSuperPckgGrpUUID,

      /* Associations */
      _JITPckgGrpHeader,
      _JITSuperPckgGrpHeader,
      _JITCallCompGroupBasic,
      _JITPckgGrpItemRef
}
```
