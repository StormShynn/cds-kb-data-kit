---
name: _DCO_I_PRMSTOPAYACCTGDOCUMENT
description: "This CDS view provides access to receivable items that are assigned to a promise to pay. It enables tracking of promised payment amounts, paid amounts, and processing status for each receivable item linked to a promise to pay arrangement. This CDS view provides the data to answer the following business questions: Which receivable items are assigned to a specific promise to pay? What is the promised amount versus the paid amount for each receivable item? What is the current processing status of promise to pay assignments? Which receivable items have outstanding promised amounts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_PRMSTOPAYACCTGDOCUMENT')/$value
semantic_en: "This CDS view provides access to receivable items that are assigned to a promise to pay. It enables tracking of promised payment amounts, paid amounts, and processing status for each receivable item linked to a promise to pay arrangement. This CDS view provides the data to answer the following business questions: Which receivable items are assigned to a specific promise to pay? What is the promised amount versus the paid amount for each receivable item? What is the current processing status of promise to pay assignments? Which receivable items have outstanding promised amounts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-COL-2CL
  - FIN-FSCM
  - FIN-FSCM-COL
  - FIN-FSCM-COL-2CL
  - lob:controlling
  - lob:finance
  - payment
  - metadata-only
---
# _DCO_I_PRMSTOPAYACCTGDOCUMENT

**This CDS view provides access to receivable items that are assigned to a promise to pay. It enables tracking of promised payment amounts, paid amounts, and processing status for each receivable item linked to a promise to pay arrangement. This CDS view provides the data to answer the following business questions: Which receivable items are assigned to a specific promise to pay? What is the promised amount versus the paid amount for each receivable item? What is the current processing status of promise to pay assignments? Which receivable items have outstanding promised amounts? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_PRMSTOPAYACCTGDOCUMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoPromiseToPayUUID` |  | |  |  | `RAW(16)` | UUID of Promise to Pay |
| `DCoPrms2PAcctgDocumentUUID` |  | |  |  | `RAW(16)` | Promise to Pay Accounting Document UUID |
| `DCoAccountingDocumentUUID` |  | |  |  | `RAW(16)` | UUID of Receivable Item |
| `DCoPrmsToPayAcctgDocPrmsdAmt` |  | |  |  | `CURR(23)` | Promised Amount |
| `DCoPaidPromisedAmount` |  | |  |  | `CURR(23)` | Paid Promised Amount |
| `DCoAccountingDocumentCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `DCoPrms2PAcctgDocumentStatus` |  | |  |  | `NUMC(2)` | Evaluation of the Promise to Pay for the Receivable Item |
| `DCoPrms2PAcctgDocLevelValue` |  | |  |  | `INT1(3)` | Count of Created Promises to Pay for This Item |
| `DCoPrmsToPayAcctgDocCrtedByUsr` |  | |  |  | `CHAR(12)` | Created By |
| `DCoPrmsToPayAcctgDocCrtnDteTme` |  | |  |  | `DEC(15)` | Created On/At |
| `DCoPrms2PAcctgDocLastChgdByUsr` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoPrms2PAcctgDocLstChgDteTme` |  | |  |  | `DEC(15)` | Last Changed On/At |
