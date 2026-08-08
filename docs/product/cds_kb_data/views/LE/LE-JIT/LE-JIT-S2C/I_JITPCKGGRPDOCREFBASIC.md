---
name: I_JITPCKGGRPDOCREFBASIC
description: "This CDS view provides document reference information for packing groups. It links packing groups to related business documents such as handling units and delivery documents. This CDS view provides the data to answer the following business questions: What documents are referenced by a packing group? What type of business transaction document is linked? What is the status of the referenced document? Which handling unit or delivery is associated? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LE-JIT-S2C
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDOCREFBASIC')/$value
semantic_en: "This CDS view provides document reference information for packing groups. It links packing groups to related business documents such as handling units and delivery documents. This CDS view provides the data to answer the following business questions: What documents are referenced by a packing group? What type of business transaction document is linked? What is the status of the referenced document? Which handling unit or delivery is associated? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LE
  - bo:companycode
  - component:LE-JIT-S2C
  - delivery
  - document
  - interface-view
  - LE-JIT
  - LE-JIT-S2C
  - lob:logistics execution
  - transaction
  - metadata-only
---
# I_JITPCKGGRPDOCREFBASIC

**This CDS view provides document reference information for packing groups. It links packing groups to related business documents such as handling units and delivery documents. This CDS view provides the data to answer the following business questions: What documents are referenced by a packing group? What type of business transaction document is linked? What is the status of the referenced document? Which handling unit or delivery is associated? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LE-JIT-S2C` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_JITPCKGGRPDOCREFBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITDocRefUUID` |  | |  |  | `RAW(16)` | NodeID |
| `JITPckgGrpUUID` |  | |  |  | `RAW(16)` | NodeID |
| `BusinessTransactionDocType` |  | |  |  | `CHAR(5)` | NJIT Business Transaction Document Type Code |
| `BusinessTransactionDocument` |  | |  |  | `CHAR(35)` | NJIT Business Transaction Document ID |
| `BusinessTransactionDocStatus` |  | |  |  | `CHAR(1)` | NJIT Business Transaction Document Status |
| `LogicalSystemID` |  | |  |  | `CHAR(10)` | Logical System |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Changed Date/Time |
