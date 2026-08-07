---
name: _DCO_I_PROMISETOPAYCREDITITEM
description: "This CDS view provides access to credit items that are assigned to promises to pay in the context of collections and dispute automation. It enables tracking of which receivable items have been allocated to specific promise to pay agreements. This CDS view provides the data to answer the following business questions: Which receivable items are linked to a specific promise to pay agreement? What is the total amount allocated from credit items to promises to pay? Who created or last modified promise to pay credit item assignments? What is the used amount for each credit item in a promise to pay? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_PROMISETOPAYCREDITITEM')/$value
semantic_en: "This CDS view provides access to credit items that are assigned to promises to pay in the context of collections and dispute automation. It enables tracking of which receivable items have been allocated to specific promise to pay agreements. This CDS view provides the data to answer the following business questions: Which receivable items are linked to a specific promise to pay agreement? What is the total amount allocated from credit items to promises to pay? Who created or last modified promise to pay credit item assignments? What is the used amount for each credit item in a promise to pay? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
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
# _DCO_I_PROMISETOPAYCREDITITEM

**This CDS view provides access to credit items that are assigned to promises to pay in the context of collections and dispute automation. It enables tracking of which receivable items have been allocated to specific promise to pay agreements. This CDS view provides the data to answer the following business questions: Which receivable items are linked to a specific promise to pay agreement? What is the total amount allocated from credit items to promises to pay? Who created or last modified promise to pay credit item assignments? What is the used amount for each credit item in a promise to pay? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_PROMISETOPAYCREDITITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoPromiseToPayUUID` |  | |  |  | `RAW(16)` | UUID of Promise to Pay |
| `DCoPromiseToPayCreditItemUUID` |  | |  |  | `RAW(16)` | Promise to Pay Credit Item UUID |
| `DCoAccountingDocumentUUID` |  | |  |  | `RAW(16)` | UUID of Receivable Item |
| `DCoPrms2PCrdtItemUsedAmount` |  | |  |  | `CURR(23)` | Credit Amount Used for the Promise to Pay |
| `DCoPrms2PCrdtItemCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `DCoPrms2PCrdtItemCrtedByUsr` |  | |  |  | `CHAR(12)` | Created By |
| `DCoPrms2PCrdtItemCrtnDteTme` |  | |  |  | `DEC(15)` | Created On/At |
| `DCoPrms2PCrdtItemLastChgdByUsr` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoPrms2PCrdtItemLstChgDteTme` |  | |  |  | `DEC(15)` | Last Changed On/At |
