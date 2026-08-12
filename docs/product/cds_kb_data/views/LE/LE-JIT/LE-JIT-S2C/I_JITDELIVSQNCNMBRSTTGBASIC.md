---
name: I_JITDELIVSQNCNMBRSTTGBASIC
description: "This CDS view provides sequence number generation settings for delivery sequence groups. It defines number ranges, prefixes, suffixes, and length settings for delivery sequence numbers. This CDS view provides the data to answer the following business questions: What are the number range settings for sequence numbers? What prefix and suffix are used for sequence numbers? What is the last number used in the sequence? What is the packing group level for numbering? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCNMBRSTTGBASIC')/$value
semantic_en: "This CDS view provides sequence number generation settings for delivery sequence groups. It defines number ranges, prefixes, suffixes, and length settings for delivery sequence numbers. This CDS view provides the data to answer the following business questions: What are the number range settings for sequence numbers? What prefix and suffix are used for sequence numbers? What is the last number used in the sequence? What is the packing group level for numbering? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Delivery Sqnc Grp Number Settings — CDS view giao diện dựa trên njit_d_dsg_nrset."
keywords:
  - "delivery"
  - "sqnc"
  - "grp"
  - "number"
  - "settings"
  - "deliv"
  - "nmbr"
  - "sttg"
  - "pckg"
  - "level"
  - "component"
  - "reordered"
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - delivery
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
---
# I_JITDELIVSQNCNMBRSTTGBASIC

**This CDS view provides sequence number generation settings for delivery sequence groups. It defines number ranges, prefixes, suffixes, and length settings for delivery sequence numbers. This CDS view provides the data to answer the following business questions: What are the number range settings for sequence numbers? What prefix and suffix are used for sequence numbers? What is the last number used in the sequence? What is the packing group level for numbering? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCNMBRSTTGBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDelivSqncNmbrSttgUUID` | ✓ | |  | `jitdelivsqncnmbrsttguuid` | `RAW(16)` | NodeID |
| `JITDelivSqncGrpUUID` |  | |  | `jitdelivsqncgrpuuid` | `RAW(16)` | NodeID |
| `JITDelivSqncPckgGrpLevel` |  | |  | `jitdelivsqncpckggrplevel` | `NUMC(3)` | JIT: Current Level represented in a package group hierarchy |
| `JITComponentIsReordered` |  | |  | `jitcomponentisreordered` | `CHAR(1)` | NJIT: Packing Group Usage Type |
| `JITDelivSqncFrmNmbr` |  | |  | `jitdelivsqncfrmnmbr` | `NUMC(20)` | Delivery Sequence From Number(Normal orders) |
| `JITDelivSqncToNmbr` |  | |  | `jitdelivsqnctonmbr` | `NUMC(20)` | Delivery Sequence To Number(Normal orders) |
| `JITDelivSqncPrefix` |  | |  | `jitdelivsqncprefix` | `CHAR(20)` | Delivery Sequence Number Prefix for normal orders |
| `JITDelivSqncLenOfShrtNmbr` |  | |  | `jitdelivsqnclenofshrtnmbr` | `NUMC(2)` | Deliv. Seq. Short number length in case of normal orders |
| `JITReordDelivSqncSuffix` |  | |  | `jitreorddelivsqncsuffix` | `CHAR(20)` | Suffix for Reorder Delivery Seq. Number |
| `JITDelivSqncLastNmbrUsed` |  | |  | `jitdelivsqnclastnmbrused` | `CHAR(40)` | Last number used in the Deliv. Seq. |
| `JITDelivSqncLenOfNmbr` |  | |  | `jitdelivsqnclenofnmbr` | `NUMC(2)` | JIT: Length of Last generated Number in a Seq. Grp. |
| `_JITPackingGroupUsageType` | | ✓ | | | | |
| `_JITDelivSqncGrpHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_JITPackingGroupUsageType` | `I_JITPackingGroupUsageType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCNMBRSTTGBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCNMBRSTTGBASIC')/$value)*

```abap
@AccessControl              : { authorizationCheck      : #MANDATORY }
@Analytics                  : { dataCategory            : #DIMENSION,
                                internalName            : #LOCAL,
                                technicalName           : 'IJITDSGNMBRSETT'
                              }
@EndUserText.label          : 'Delivery Sqnc Grp Number Settings'
@Metadata.allowExtensions   :true
@ObjectModel: {
  modelingPattern           : #ANALYTICAL_DIMENSION,
  representativeKey         : 'JITDelivSqncNmbrSttgUUID',
  sapObjectNodeType.name    : 'JITDelivSqncGrpNmbrSttg',
  supportedCapabilities     : [ #ANALYTICAL_DIMENSION,
                                #CDS_MODELING_ASSOCIATION_TARGET,
                                #CDS_MODELING_DATA_SOURCE,
                                #SQL_DATA_SOURCE
                              ],
  usageType                 : { dataClass               : #MASTER,
                                serviceQuality          : #A,
                                sizeCategory            : #S
                              }
}
@VDM.viewType               : #BASIC
define view entity I_JITDelivSqncNmbrSttgBasic
  as select from njit_d_dsg_nrset
  association        to parent I_JITDelivSqncGrpHeaderBasic as _JITDelivSqncGrpHeader    on $projection.JITDelivSqncGrpUUID = _JITDelivSqncGrpHeader.JITDelivSqncGrpUUID
  association [0..1] to I_JITPackingGroupUsageType          as _JITPackingGroupUsageType on $projection.JITComponentIsReordered = _JITPackingGroupUsageType.JITPackingGroupUsageType
{
  key jitdelivsqncnmbrsttguuid  as JITDelivSqncNmbrSttgUUID,
      @ObjectModel.foreignKey.association:'_JITDelivSqncGrpHeader'
      jitdelivsqncgrpuuid       as JITDelivSqncGrpUUID,
      jitdelivsqncpckggrplevel  as JITDelivSqncPckgGrpLevel,
      @ObjectModel.foreignKey.association: '_JITPackingGroupUsageType'
      jitcomponentisreordered   as JITComponentIsReordered,
      jitdelivsqncfrmnmbr       as JITDelivSqncFrmNmbr,
      jitdelivsqnctonmbr        as JITDelivSqncToNmbr,
      jitdelivsqncprefix        as JITDelivSqncPrefix,
      jitdelivsqnclenofshrtnmbr as JITDelivSqncLenOfShrtNmbr,
      jitreorddelivsqncsuffix   as JITReordDelivSqncSuffix,
      jitdelivsqnclastnmbrused  as JITDelivSqncLastNmbrUsed,
      jitdelivsqnclenofnmbr     as JITDelivSqncLenOfNmbr,
      _JITDelivSqncGrpHeader,
      _JITPackingGroupUsageType
}
```
