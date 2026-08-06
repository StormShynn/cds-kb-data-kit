---
name: C_WASTEANALYTICSQUERY
description: Waste Data Analytics - Query
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_WASTEANALYTICSQUERY')/$value
semantic_en: Waste Data Analytics - Query
tags:
  - EHS
  - component:EHS-SUS-WA
  - consumption-view
  - EHS-SUS
  - EHS-SUS-WA
  - metadata-only
---
# C_WASTEANALYTICSQUERY

**Waste Data Analytics - Query**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_WASTEANALYTICSQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EnvrmtWasteTranspDocUUID` | `RAW(16)` | Waste Transportation Document UUID |
| `EnvWstTranspDocMatlAssgdUUID` | `RAW(16)` | Waste Transportation Document Material Assigned |
| `EnvrmtWasteCodeUUID` | `RAW(16)` | NodeID |
| `WasteStreamRgtyCode` | `CHAR(4)` | Waste Stream Regulatory Code |
| `WasteStreamRgtyCodeValue` | `CHAR(4)` | Waste Stream Regulatory Code Value |
| `EnvrmtWastePartnerNmbr` | `CHAR(10)` | Business Partner Number |
| `EHSMainLocationID` | `CHAR(20)` | Location ID |
| `EHSMainLocationName` | `CHAR(60)` | Location |
| `CmplRqVersUUID` | `RAW(16)` | Compliance Requirement UUID |
| `ClassifiedAsDangerousGood` | `CHAR(2)` | Classified As |
| `WasteTranspDocID` | `CHAR(20)` | ID of Waste Transportation Document |
| `EnvrmtWasteTranspDocType` | `CHAR(10)` | Waste Transportation Document Type ID |
| `EnvrmtWasteTranspDocStatus` | `CHAR(3)` | Waste Transportation Document Status |
| `CmplRqVersPermitNumber` | `CHAR(80)` | Permit Number |
| `EnvWstTranspDocPrintedDate` | `DATS(8)` | Waste Transportation Document Print Date |
| `EnvWstTranspDocHandoverDate` | `DATS(8)` | Waste Transportation Document Handover Date |
| `EnvWstTranspDocTakeAcceptDate` | `DATS(8)` | Transportation Document Take/Accept date |
| `EnvrmtWasteTransptrRegnID` | `CHAR(20)` | Waste Registration Number |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `EnvWstTranspDocDisposerDate` | `DATS(8)` | Transportation Document Take/Accept date |
| `EnvrmtWasteGnrtrUUID` | `RAW(16)` | Waste Generator UUID |
| `EnvrmtWasteGnrtrID` | `CHAR(20)` | Waste Generator ID |
| `WasteRegistrationNumber` | `CHAR(60)` | Waste Registration Number |
| `WasteTransferRequestNumber` | `CHAR(20)` | Number of Waste Transfer Request |
| `EHSLocationID` | `CHAR(20)` | Location ID |
| `WasteTransfReqStatus` | `CHAR(2)` | Status of Waste Transfer Request |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `WasteDisposalChannelNumber` | `CHAR(20)` | Disposal Channel Number |
| `WasteDisposalChannelName` | `CHAR(40)` | Disposal Channel Name |
| `EnvrmtWasteFcltyRegistrationID` | `CHAR(20)` | Waste Registration Number |
| `EnvrmtWastePartFcltyName` | `CHAR(60)` | Waste Disposal Facility Name |
| `Material` | `CHAR(40)` | Product |
| `WasteStreamContainerType` | `CHAR(4)` | Waste Stream Container Type |
| `EnvrmtWasteMgmtMethCode` | `CHAR(10)` | Waste Management Method Code |
| `EnvrmtWasteCode` | `CHAR(20)` | Waste Code |
| `EnvrmtWasteCodeShortDesc` | `CHAR(132)` | Normalized text used for searching |
| `EnvrmtWasteHazardCharcID` | `CHAR(2)` | Waste Type ID |
| `CmplRqVers` | `CHAR(40)` | Compliance Requirement Version ID |
| `CmplRqVersName` | `CHAR(255)` | Name of the Compliance Requirement Version |
| `WasteStreamRgtyCodeValueText` | `CHAR(255)` | Description (Extra Long) |
| `EnvrmtWasteOutgoingQuantity` | `INT1(3)` |  |
| `EnvrmtWasteConfirmedQuantity` | `INT1(3)` |  |
| `EnvrmtWasteOutgoingQtyCode` | `UNIT(3)` | Base Unit of Measure |
| `EnvrmtWasteConfirmedQtyCode` | `UNIT(3)` | Base Unit of Measure |
