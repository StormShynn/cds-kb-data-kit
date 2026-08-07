---
name: I_LIQUIDATIONDATA
description: Liquidation Details
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONDATA')/$value
semantic_en: Liquidation Details
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_LIQUIDATIONDATA

**Liquidation Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LIQUIDATIONDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralLiquidationUUID` |  | |  |  | `RAW(16)` | Liquidation GUID |
| `ObjectReferenceUUID` |  | |  |  | `RAW(16)` | Object link GUID for liquidation |
| `LiquidationObjectRefSystem` |  | |  |  | `CHAR(6)` | Object System Reference ID for Liquidation |
| `LiquidationType` |  | |  |  | `CHAR(6)` | Liquidation Measure Type ID |
| `LiquidationStartDate` |  | |  |  | `DATS(8)` | Start Date for the Liquidation Measure |
| `LiquidationEndDate` |  | |  |  | `DATS(8)` | End Date of a Liquidation Measure |
| `LiquidationInitiatedBy` |  | |  |  | `CHAR(6)` | Liquidation Initiated By |
| `LiquidationApplicationDate` |  | |  |  | `DATS(8)` | Application Date for Enforcement Measure |
| `LiquidationCourtOrderDate` |  | |  |  | `DATS(8)` | Court's Order Date |
| `LqdtnCourtOrderReceivedDate` |  | |  |  | `DATS(8)` | Decision of Order Received On |
| `LiquidationDecisionClosedDate` |  | |  |  | `DATS(8)` | Date of Decision of Close |
| `LqdtnDecisionCloseReceivedDate` |  | |  |  | `DATS(8)` | Decision of Close Received On |
| `LqdtnGuaranteeCallingAmount` |  | |  |  | `CURR(17)` | Value of Guarantee at Time of Liquidation |
| `LqdtnGuaranteeCallingCurrency` |  | |  |  | `CUKY(5)` | Liquidation guarantee value currency |
| `LqdtnGuaranteeCallingDate` |  | |  |  | `DATS(8)` | Calling date for guarantees |
| `LqdtnGuaranteeEnforceableDate` |  | |  |  | `DATS(8)` | Date of Enforceable Title for Guarantees |
| `LqdtnEnfrcmntTitleObtained` |  | |  |  | `CHAR(2)` | Enforceable Title Obtained |
| `LiquidationEnforceableDesc` |  | |  |  | `CHAR(40)` | Enforceable title description |
| `LiquidationAffidavitDate` |  | |  |  | `DATS(8)` | Date of Affidavit |
| `LiquidationAffidavitDesc` |  | |  |  | `CHAR(40)` | Affidavit description |
| `LiquidationAmicableDate` |  | |  |  | `DATS(8)` | Date of the Amicable Settlement |
| `LiquidationAmicableDescription` |  | |  |  | `CHAR(40)` | CMS Liquidation Amicable description |
| `LiquidationRegistrationDate` |  | |  |  | `DATS(8)` | Registration Date |
| `LiquidationAdminRcvrReqDte` |  | |  |  | `DATS(8)` | Date of Request for Admin. Receivership |
| `LiquidationAttachmentDate` |  | |  |  | `DATS(8)` | Date of Attachment |
| `LqdtnEnfrcmntTtlRqdBfrDte` |  | |  |  | `DATS(8)` | Date Before Which the Enforcement Title is Required |
| `LqdtnOutOfCourtSettlmtDte` |  | |  |  | `DATS(8)` | Date of Out-of-Court Settlement |
