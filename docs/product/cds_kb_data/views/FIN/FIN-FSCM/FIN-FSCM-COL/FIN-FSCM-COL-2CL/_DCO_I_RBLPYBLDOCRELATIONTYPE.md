---
name: _DCO_I_RBLPYBLDOCRELATIONTYPE
description: "This CDS view provides access to relation types for receivable and payable documents. It retrieves the valid relation type values from the domain value table and serves as a basic interface view for modeling purposes. This CDS view provides the data to answer the following business questions: What are the available relation types for receivable and payable document assignments? Which relation type codes are valid for document item assignments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_RBLPYBLDOCRELATIONTYPE')/$value
semantic_en: "This CDS view provides access to relation types for receivable and payable documents. It retrieves the valid relation type values from the domain value table and serves as a basic interface view for modeling purposes. This CDS view provides the data to answer the following business questions: What are the available relation types for receivable and payable document assignments? Which relation type codes are valid for document item assignments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
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
# _DCO_I_RBLPYBLDOCRELATIONTYPE

**This CDS view provides access to relation types for receivable and payable documents. It retrieves the valid relation type values from the domain value table and serves as a basic interface view for modeling purposes. This CDS view provides the data to answer the following business questions: What are the available relation types for receivable and payable document assignments? Which relation type codes are valid for document item assignments? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_RBLPYBLDOCRELATIONTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RblPyblDocumentRelationType` |  | |  |  | `CHAR(1)` | Relationship Type |
