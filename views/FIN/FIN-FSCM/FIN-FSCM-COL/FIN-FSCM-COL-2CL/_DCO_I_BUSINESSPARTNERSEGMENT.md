---
name: _DCO_I_BUSINESSPARTNERSEGMENT
description: "This CDS view provides access to information for business partners that is specific for a collection segment. It enables the retrieval of segment assignments, collector groups, prioritization rules, classifications, and payment behavior ratings associated with business partners. This CDS view provides the data to answer the following business questions: Which collections agent team is responsible for a specific business partner in a segment? What is the payment behavior rating for business partners in a given segment? Which business partner segments are excluded from the worklist during a specific time period? What is the account classification for a business partner in a segment? Which account prioritization rule is applied to a business partner in a segment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_BUSINESSPARTNERSEGMENT')/$value
semantic_en: "This CDS view provides access to information for business partners that is specific for a collection segment. It enables the retrieval of segment assignments, collector groups, prioritization rules, classifications, and payment behavior ratings associated with business partners. This CDS view provides the data to answer the following business questions: Which collections agent team is responsible for a specific business partner in a segment? What is the payment behavior rating for business partners in a given segment? Which business partner segments are excluded from the worklist during a specific time period? What is the account classification for a business partner in a segment? Which account prioritization rule is applied to a business partner in a segment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
keywords:
  - "Business Partner Segment Assignments (Collections and Dispute Automation)"
tags:
  - FIN
  - account
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
# _DCO_I_BUSINESSPARTNERSEGMENT

**This CDS view provides access to information for business partners that is specific for a collection segment. It enables the retrieval of segment assignments, collector groups, prioritization rules, classifications, and payment behavior ratings associated with business partners. This CDS view provides the data to answer the following business questions: Which collections agent team is responsible for a specific business partner in a segment? What is the payment behavior rating for business partners in a given segment? Which business partner segments are excluded from the worklist during a specific time period? What is the account classification for a business partner in a segment? Which account prioritization rule is applied to a business partner in a segment? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('_DCO_I_BUSINESSPARTNERSEGMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DCoBusinessPartnerUUID` |  | |  |  | `RAW(16)` | Business Partner UUID for Collection Process |
| `DCoAccountUUID` |  | |  |  | `RAW(16)` | UUID of Collection Account |
| `DebtCollectionsSegment` |  | |  |  | `CHAR(10)` | Collection Segment |
| `DCoCollectorGroup` |  | |  |  | `CHAR(40)` | Collections Agent Group |
| `DCoAccountPrioritizationRule` |  | |  |  | `CHAR(10)` | Account Prioritization Rule |
| `DbtCollsAccountClassification` |  | |  |  | `CHAR(2)` | Account Classification |
| `DCoAcctExclsnFrmWlStartDate` |  | |  |  | `DATS(8)` | Start Date from Which an Account Is Excluded from Worklist |
| `DCoAcctExclsnFrmWlEndDate` |  | |  |  | `DATS(8)` | Date Until Which an Account Is Excluded from Worklist |
| `DCoAcctMainCustContactPerson` |  | |  |  | `CHAR(10)` | Main Customer Contact Person |
| `DCoPaymentBehaviorRating` |  | |  |  | `CHAR(2)` | Payment Behavior Rating |
| `DCoAccountCreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `DCoAccountCreationDateTime` |  | |  |  | `DEC(15)` | Created On/At |
| `DCoAccountLastChangedByUser` |  | |  |  | `CHAR(12)` | Last Changed By |
| `DCoAccountLastChangeDateTime` |  | |  |  | `DEC(15)` | Last Changed On/At |
