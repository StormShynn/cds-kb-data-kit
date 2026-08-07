---
name: I_JITDELIVSQNCNMBRSTTGBASIC
description: This CDS view provides sequence number generation settings for delivery sequence groups. It defines number ranges, prefixes, suffixes, and length settings for delivery sequence numbers. This CDS view provides the data to answer the following business questions: What are the number range settings for sequence numbers? What prefix and suffix are used for sequence numbers? What is the last number used in the sequence? What is the packing group level for numbering? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCNMBRSTTGBASIC')/$value
semantic_en: This CDS view provides sequence number generation settings for delivery sequence groups. It defines number ranges, prefixes, suffixes, and length settings for delivery sequence numbers. This CDS view provides the data to answer the following business questions: What are the number range settings for sequence numbers? What prefix and suffix are used for sequence numbers? What is the last number used in the sequence? What is the packing group level for numbering? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - delivery
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - metadata-only
---
# I_JITDELIVSQNCNMBRSTTGBASIC

**This CDS view provides sequence number generation settings for delivery sequence groups. It defines number ranges, prefixes, suffixes, and length settings for delivery sequence numbers. This CDS view provides the data to answer the following business questions: What are the number range settings for sequence numbers? What prefix and suffix are used for sequence numbers? What is the last number used in the sequence? What is the packing group level for numbering? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITDELIVSQNCNMBRSTTGBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDelivSqncNmbrSttgUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITDelivSqncGrpUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITDelivSqncPckgGrpLevel` |  | |  |  | `NUMC(3)` | JIT: Current Level represented in a package group hierarchy |
| `JITComponentIsReordered` |  | |  |  | `CHAR(1)` | NJIT: Packing Group Usage Type |
| `JITDelivSqncFrmNmbr` |  | |  |  | `NUMC(20)` | Delivery Sequence From Number(Normal orders) |
| `JITDelivSqncToNmbr` |  | |  |  | `NUMC(20)` | Delivery Sequence To Number(Normal orders) |
| `JITDelivSqncPrefix` |  | |  |  | `CHAR(20)` | Delivery Sequence Number Prefix for normal orders |
| `JITDelivSqncLenOfShrtNmbr` |  | |  |  | `NUMC(2)` | Deliv. Seq. Short number length in case of normal orders |
| `JITReordDelivSqncSuffix` |  | |  |  | `CHAR(20)` | Suffix for Reorder Delivery Seq. Number |
| `JITDelivSqncLastNmbrUsed` |  | |  |  | `CHAR(40)` | Last number used in the Deliv. Seq. |
| `JITDelivSqncLenOfNmbr` |  | |  |  | `NUMC(2)` | JIT: Length of Last generated Number in a Seq. Grp. |
