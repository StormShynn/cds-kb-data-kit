---
name: _DCO_I_ACCTGDOCUMENTORIGIN
description: "This CDS view provides access to the valid values for the accounting document origin domain. It retrieves the domain values from the data dictionary table and exposes them as a basic interface view for use in modeling scenarios. This CDS view provides the data to answer the following business questions: What are the valid accounting document origin values available in the system? Which origin types can be assigned to accounting documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCTGDOCUMENTORIGIN')/$value
semantic_en: "This CDS view provides access to the valid values for the accounting document origin domain. It retrieves the domain values from the data dictionary table and exposes them as a basic interface view for use in modeling scenarios. This CDS view provides the data to answer the following business questions: What are the valid accounting document origin values available in the system? Which origin types can be assigned to accounting documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - account
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - document
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - metadata-only
---
# _DCO_I_ACCTGDOCUMENTORIGIN

**This CDS view provides access to the valid values for the accounting document origin domain. It retrieves the domain values from the data dictionary table and exposes them as a basic interface view for use in modeling scenarios. This CDS view provides the data to answer the following business questions: What are the valid accounting document origin values available in the system? Which origin types can be assigned to accounting documents? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_ACCTGDOCUMENTORIGIN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoAccountingDocumentOrigin` |  | |  |  | `CHAR(5)` | Origin of Receivable Item |
