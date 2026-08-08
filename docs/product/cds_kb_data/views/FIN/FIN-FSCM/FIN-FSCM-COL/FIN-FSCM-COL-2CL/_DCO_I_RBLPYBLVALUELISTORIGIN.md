---
name: _DCO_I_RBLPYBLVALUELISTORIGIN
description: "This CDS view provides a value list for receivable and payable code list origins. It retrieves domain values from the domain /DCO/REC_ITEM_CODELIST_ORIGIN and exposes them as structured data for use in modeling and data source scenarios. This CDS view provides the data to answer the following business questions: What are the available code list origins for receivable and payable items? Which origin codes can be used for classification of receivable and payable posting items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_RBLPYBLVALUELISTORIGIN')/$value
semantic_en: "This CDS view provides a value list for receivable and payable code list origins. It retrieves domain values from the domain /DCO/REC_ITEM_CODELIST_ORIGIN and exposes them as structured data for use in modeling and data source scenarios. This CDS view provides the data to answer the following business questions: What are the available code list origins for receivable and payable items? Which origin codes can be used for classification of receivable and payable posting items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - metadata-only
---
# _DCO_I_RBLPYBLVALUELISTORIGIN

**This CDS view provides a value list for receivable and payable code list origins. It retrieves domain values from the domain /DCO/REC_ITEM_CODELIST_ORIGIN and exposes them as structured data for use in modeling and data source scenarios. This CDS view provides the data to answer the following business questions: What are the available code list origins for receivable and payable items? Which origin codes can be used for classification of receivable and payable posting items? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_RBLPYBLVALUELISTORIGIN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RblPyblCodeOrigin` |  | |  |  | `CHAR(1)` | Origin of Posting Classification |
