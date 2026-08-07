---
name: C_RDPBATCHCLASSIFICATIONDEX
description: This CDS view is used by SAP Responsible Design and Production for the extraction of batch data. This view provides the data based on batch data. See CDS view I_Batch. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: SUS-RDP-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPBATCHCLASSIFICATIONDEX')/$value
semantic_en: This CDS view is used by SAP Responsible Design and Production for the extraction of batch data. This view provides the data based on batch data. See CDS view I_Batch. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - SUS
  - bo:companycode
  - component:SUS-RDP-INT
  - consumption-view
  - product
  - SUS-RDP
  - SUS-RDP-INT
  - metadata-only
---
# C_RDPBATCHCLASSIFICATIONDEX

**This CDS view is used by SAP Responsible Design and Production for the extraction of batch data. This view provides the data based on batch data. See CDS view I_Batch. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SUS-RDP-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPBATCHCLASSIFICATIONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `BatchClass` |  | |  |  | `CHAR(18)` | Class number |
| `BatchCharacteristic` |  | |  |  | `CHAR(30)` | Characteristic Name |
| `BatchCharacteristicValue` |  | |  |  | `CHAR(70)` | Characteristic Value |
| `ManufactureDate` |  | |  |  | `DATS(8)` | Date of Manufacture |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Change Timestamp |
