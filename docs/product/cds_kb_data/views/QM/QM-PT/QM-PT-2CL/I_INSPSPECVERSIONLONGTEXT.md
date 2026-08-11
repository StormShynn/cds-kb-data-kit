---
name: I_INSPSPECVERSIONLONGTEXT
description: "This CDS view provides access to the data of a master inspection characteristic version. This CDS view provides the data to answer the following business questions: Which master inspection characteristics exist in a plant? Which limits and tolerances are defined for a quantitative characteristic? Which inspection methods and catalogs are assigned to a master inspection characteristic? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPSPECVERSIONLONGTEXT')/$value
semantic_en: "This CDS view provides access to the data of a master inspection characteristic version. This CDS view provides the data to answer the following business questions: Which master inspection characteristics exist in a plant? Which limits and tolerances are defined for a quantitative characteristic? Which inspection methods and catalogs are assigned to a master inspection characteristic? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - QM
  - bo:companycode
  - component:QM-PT-2CL
  - interface-view
  - lob:quality management
  - plan
  - QM-PT
  - QM-PT-2CL
  - metadata-only
---
# I_INSPSPECVERSIONLONGTEXT

**This CDS view provides access to the data of a master inspection characteristic version. This CDS view provides the data to answer the following business questions: Which master inspection characteristics exist in a plant? Which limits and tolerances are defined for a quantitative characteristic? Which inspection methods and catalogs are assigned to a master inspection characteristic? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSPSPECVERSIONLONGTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionSpecificationPlant` |  | |  |  | `CHAR(4)` | Plant for Master Inspection Characteristic |
| `InspectionSpecification` |  | |  |  | `CHAR(8)` | Master Inspection Characteristic |
| `InspectionSpecificationVersion` |  | |  |  | `CHAR(6)` | Version Number of Master Inspection Characteristic |
| `LongTextInternalNumber` |  | |  |  | `INT2(5)` | Long Text Counter |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `LongTextID` |  | |  |  | `CHAR(4)` | Text ID |
| `LongTextCreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LongTextCreatedAt` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LongTextLastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LongTextLastChangedAt` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
