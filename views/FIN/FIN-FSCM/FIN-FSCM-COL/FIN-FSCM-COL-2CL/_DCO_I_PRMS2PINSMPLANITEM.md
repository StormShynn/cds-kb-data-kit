---
name: _DCO_I_PRMS2PINSMPLANITEM
description: This CDS view provides access to installment plan items associated with promise to pay agreements. It enables tracking of individual payment installments including their due dates, amounts, payment status, and related financial information. This CDS view provides the data to answer the following business questions: What are the due dates and amounts for each installment in a promise to pay agreement? How much of each installment has been paid versus the total installment amount? What is the current processing status of each installment plan item? Which installments are overdue or pending payment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_PRMS2PINSMPLANITEM')/$value
semantic_en: This CDS view provides access to installment plan items associated with promise to pay agreements. It enables tracking of individual payment installments including their due dates, amounts, payment status, and related financial information. This CDS view provides the data to answer the following business questions: What are the due dates and amounts for each installment in a promise to pay agreement? How much of each installment has been paid versus the total installment amount? What is the current processing status of each installment plan item? Which installments are overdue or pending payment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
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
  - plan
  - metadata-only
---
# _DCO_I_PRMS2PINSMPLANITEM

**This CDS view provides access to installment plan items associated with promise to pay agreements. It enables tracking of individual payment installments including their due dates, amounts, payment status, and related financial information. This CDS view provides the data to answer the following business questions: What are the due dates and amounts for each installment in a promise to pay agreement? How much of each installment has been paid versus the total installment amount? What is the current processing status of each installment plan item? Which installments are overdue or pending payment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_PRMS2PINSMPLANITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoPromiseToPayUUID` |  | |  |  | `RAW(16)` | UUID of Promise to Pay |
| `DCoPrms2PInstlmntPlanItemUUID` |  | |  |  | `RAW(16)` | Installment Plan Item UUID |
| `DCoPrmsToPayInstlmntPlnDuDate` |  | |  |  | `DATS(8)` | Due Date of the Installment |
| `DCoPrmsToPayInstlmntPlnItmAmt` |  | |  |  | `CURR(23)` | Installment Amount |
| `DCoPaidInstallmentAmount` |  | |  |  | `CURR(23)` | Paid Installment Amount |
| `DCoPrmsToPayInstlmntPlnItmCrcy` |  | |  |  | `CUKY(5)` | Installment Plan Currency |
| `DCoPrms2PInstlmntPlnStatus` |  | |  |  | `NUMC(2)` | Evaluation of the Promise to Pay for the Installment Item |
| `DCoPrms2PInstlmntPlnItmCrtedBy` |  | |  |  | `CHAR(12)` | Created By |
| `DCoPrms2PInstlmntPlnCrtnDteTme` |  | |  |  | `DEC(15)` | Created On/At |
| `DCoPrms2PInstlmntPlnChgdByUsr` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoPrms2PInstlmntPlnChgDteTme` |  | |  |  | `DEC(15)` | Last Changed On/At |
