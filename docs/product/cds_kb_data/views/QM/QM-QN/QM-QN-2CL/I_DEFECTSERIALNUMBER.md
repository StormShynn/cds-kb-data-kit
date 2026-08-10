---
name: I_DEFECTSERIALNUMBER
description: "This CDS view provides access to serial numbers assigned to defects. This CDS view provides the data to answer the following business questions: Which serial numbers are associated with a specific defect? What is the complete list of all serial numbers associated with defects? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: QM-QN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEFECTSERIALNUMBER')/$value
semantic_en: "This CDS view provides access to serial numbers assigned to defects. This CDS view provides the data to answer the following business questions: Which serial numbers are associated with a specific defect? What is the complete list of all serial numbers associated with defects? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - QM
  - bo:companycode
  - component:QM-QN-2CL
  - interface-view
  - lob:quality management
  - QM-QN
  - QM-QN-2CL
  - metadata-only
---
# I_DEFECTSERIALNUMBER

**This CDS view provides access to serial numbers assigned to defects. This CDS view provides the data to answer the following business questions: Which serial numbers are associated with a specific defect? What is the complete list of all serial numbers associated with defects? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `QM-QN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DEFECTSERIALNUMBER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DefectInternalID` |  | |  |  | `CHAR(12)` | Internal Defect ID |
| `DfctSerialNmbrSequentialNumber` |  | |  |  | `INT2(5)` | Counter of Serial Number in a Defect |
| `Defect` |  | |  |  | `CHAR(11)` | Defect Number |
| `SerialNumber` |  | |  |  | `CHAR(18)` | Serial Number |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `SerialNumberAssignmentDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
