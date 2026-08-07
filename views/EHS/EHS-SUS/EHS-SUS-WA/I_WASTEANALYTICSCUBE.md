---
name: I_WASTEANALYTICSCUBE
description: "Waste Data Analytics - Cube"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEANALYTICSCUBE')/$value
semantic_en: "Waste Data Analytics - Cube"
tags:
  - EHS
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
  - metadata-only
---
# I_WASTEANALYTICSCUBE

**Waste Data Analytics - Cube**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEANALYTICSCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EnvrmtWasteTranspDocUUID` |  | |  |  | `RAW(16)` | Waste Transportation Document UUID |
| `EnvWstTranspDocMatlAssgdUUID` |  | |  |  | `RAW(16)` | Waste Transportation Document Material Assigned |
| `EnvrmtWasteCodeUUID` |  | |  |  | `RAW(16)` | NodeID |
| `WasteStreamRgtyCode` |  | |  |  | `CHAR(4)` | Waste Stream Regulatory Code |
| `WasteStreamRgtyCodeValue` |  | |  |  | `CHAR(4)` | Waste Stream Regulatory Code Value |
| `EnvrmtWastePartnerNmbr` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `EHSMainLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `EHSMainLocationName` |  | |  |  | `CHAR(60)` | Location |
| `CmplRqVersUUID` |  | |  |  | `RAW(16)` | Compliance Requirement UUID |
| `ClassifiedAsDangerousGood` |  | |  |  | `CHAR(2)` | Classified As |
| `WasteTranspDocID` |  | |  |  | `CHAR(20)` | ID of Waste Transportation Document |
| `EnvrmtWasteTranspDocType` |  | |  |  | `CHAR(10)` | Waste Transportation Document Type ID |
| `EnvrmtWasteTranspDocStatus` |  | |  |  | `CHAR(3)` | Waste Transportation Document Status |
| `CmplRqVersPermitNumber` |  | |  |  | `CHAR(80)` | Permit Number |
| `EnvWstTranspDocPrintedDate` |  | |  |  | `DATS(8)` | Waste Transportation Document Print Date |
| `EnvWstTranspDocHandoverDate` |  | |  |  | `DATS(8)` | Waste Transportation Document Handover Date |
| `EnvWstTranspDocTakeAcceptDate` |  | |  |  | `DATS(8)` | Transportation Document Take/Accept date |
| `EnvrmtWasteTransptrRegnID` |  | |  |  | `CHAR(20)` | Waste Registration Number |
| `EnvrmtWasteGnrtrUUID` |  | |  |  | `RAW(16)` | Waste Generator UUID |
| `EnvrmtWasteGnrtrID` |  | |  |  | `CHAR(20)` | Waste Generator ID |
| `WasteRegistrationNumber` |  | |  |  | `CHAR(60)` | Waste Registration Number |
| `WasteTransferRequestNumber` |  | |  |  | `CHAR(20)` | Number of Waste Transfer Request |
| `WasteStreamPtOfGnrtnLocUUID` |  | |  |  | `RAW(16)` | Waste Stream - Point of Generation UUID |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `WasteTransfReqStatus` |  | |  |  | `CHAR(2)` | Status of Waste Transfer Request |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WasteStreamUUID` |  | |  |  | `RAW(16)` | Waste Stream UUID |
| `WasteStreamDsplChnlUUID` |  | |  |  | `RAW(16)` | Waste Stream Disposal Channel UUID |
| `WasteDisposalChannelNumber` |  | |  |  | `CHAR(20)` | Disposal Channel Number |
| `WasteDisposalChannelName` |  | |  |  | `CHAR(40)` | Disposal Channel Name |
| `EnvrmtWasteFcltyRegistrationID` |  | |  |  | `CHAR(20)` | Waste Registration Number |
| `EnvrmtWastePartFcltyName` |  | |  |  | `CHAR(60)` | Waste Disposal Facility Name |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `EnvWstTranspDocDisposerDate` |  | |  |  | `DATS(8)` | Transportation Document Take/Accept date |
| `Material` |  | |  |  | `CHAR(40)` | Product |
| `WasteStreamContainerType` |  | |  |  | `CHAR(4)` | Waste Stream Container Type |
| `EnvrmtWasteMgmtMethCode` |  | |  |  | `CHAR(10)` | Waste Management Method Code |
| `EnvrmtWasteHazardCharcID` |  | |  |  | `CHAR(2)` | Waste Type ID |
| `EnvrmtWasteCode` |  | |  |  | `CHAR(20)` | Waste Code |
| `EnvrmtWasteCodeShortDesc` |  | |  |  | `CHAR(132)` | Normalized text used for searching |
| `WasteStreamRgtyCodeValueText` |  | |  |  | `CHAR(255)` | Description (Extra Long) |
| `CmplRqVers` |  | |  |  | `CHAR(40)` | Compliance Requirement Version ID |
| `CmplRqVersName` |  | |  |  | `CHAR(255)` | Name of the Compliance Requirement Version |
| `ComplianceRequirement` |  | |  |  | `CHAR(30)` | Compliance Requirement |
| `DngrsGoodsModeOfTransport` |  | |  |  | `CHAR(10)` | Mode of Transport |
| `EnvrmtWasteOutgoingQuantity` |  | |  |  | `DEC(10)` |  |
| `EnvrmtWasteConfirmedQuantity` |  | |  |  | `DEC(10)` |  |
| `EnvrmtWasteOutgoingQtyCode` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `EnvrmtWasteConfirmedQtyCode` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `EnvrmtWastePartDsplFcltyUUID` |  | |  |  | `RAW(16)` | Waste Disposal Facility UUID |
| `EnvrmtWastePartnerUUID` |  | |  |  | `RAW(16)` | Waste Partner UUID |
| `ChmlCmplncInfoUUID` |  | |  |  | `RAW(16)` | Chemical Compliance Information |
