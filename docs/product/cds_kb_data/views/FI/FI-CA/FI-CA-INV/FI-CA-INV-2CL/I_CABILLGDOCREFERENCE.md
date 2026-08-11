---
name: I_CABILLGDOCREFERENCE
description: "This CDS view retrieves the object relationships of a billing document in Convergent Invoicing. The object relationships can contain links to related objects. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCREFERENCE')/$value
semantic_en: "This CDS view retrieves the object relationships of a billing document in Convergent Invoicing. The object relationships can contain links to related objects. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FI
  - billing
  - bo:billingdocument
  - component:FI-CA-INV-2CL
  - document
  - FI-CA
  - FI-CA-INV
  - FI-CA-INV-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - metadata-only
---
# I_CABILLGDOCREFERENCE

**This CDS view retrieves the object relationships of a billing document in Convergent Invoicing. The object relationships can contain links to related objects. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CABILLGDOCREFERENCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgReferenceObject` |  | |  |  | `CHAR(10)` | Reference Object |
| `CAReferenceObjectID` |  | |  |  | `CHAR(40)` | Reference Object ID |
| `CABillgDocCreationDate` |  | |  |  | `DATS(8)` | Date on Which Billing Document Was Created |
| `CABillgDocument` |  | |  |  | `CHAR(12)` | Number of Billing Document |
| `CABillgIsDocumentSimulated` |  | |  |  | `CHAR(1)` | Billing Document Is Simulated |
| `CAReferenceObjectAddlText` |  | |  |  | `CHAR(128)` | Additional Data for Reference Object |
