---
name: I_FIXEDASSETCOUNTRYDATA
description: "This CDS view provides access to the country-dependent master data of a fixed asset. The country-dependent attributes of the fixed asset business entity provide dimensions of the following countries: India Israel Japan Portugal Russia This CDS view provides the prerequisites for answering the following business questions: What is the country-dependent data of my fixed assets? What are the national classification codes of my fixed assets?"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETCOUNTRYDATA')/$value
semantic_en: "This CDS view provides access to the country-dependent master data of a fixed asset. The country-dependent attributes of the fixed asset business entity provide dimensions of the following countries: India Israel Japan Portugal Russia This CDS view provides the prerequisites for answering the following business questions: What is the country-dependent data of my fixed assets? What are the national classification codes of my fixed assets?"
tags:
  - FI
  - bo:asset
  - component:FI-FIO-AA-ANA-2CL
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - interface-view
  - lob:finance
  - master-data
  - metadata-only
---
# I_FIXEDASSETCOUNTRYDATA

**This CDS view provides access to the country-dependent master data of a fixed asset. The country-dependent attributes of the fixed asset business entity provide dimensions of the following countries: India Israel Japan Portugal Russia This CDS view provides the prerequisites for answering the following business questions: What is the country-dependent data of my fixed assets? What are the national classification codes of my fixed assets?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETCOUNTRYDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Main Asset Number |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `NationalClassification` |  | |  |  | `CHAR(12)` | National Classification Code |
| `TaxDepreciationGroup` |  | |  |  | `CHAR(4)` | Tax Depreciation Group |
| `RU_LongSerialNumber` |  | |  |  | `CHAR(32)` | Russia: Serial Number |
| `RU_WorkwearMaterial` |  | |  |  | `CHAR(40)` | Material Number |
| `RU_RetiredMasterFixedAsset` |  | |  |  | `CHAR(12)` | Number of Retired Asset |
| `RU_RetiredFixedAsset` |  | |  |  | `CHAR(4)` | Subnumber of Retired Asset |
| `RU_ProdTraceabilityStartDate` |  | |  |  | `DATS(8)` | Start date of traceability |
| `RU_ProdTraceabilityEndDate` |  | |  |  | `DATS(8)` | End date of traceability |
| `RU_AssetTNVED` |  | |  |  | `CHAR(17)` | Foreign Trade Goods Classification Code of the Customs Union |
| `RU_AssetTransportType` |  | |  |  | `CHAR(5)` | Transport Type |
| `RU_VehicleIdNumber` |  | |  |  | `CHAR(30)` | Manufacturer Vehicle Identification Number for Fleet Object |
| `RU_ManufacturingDate` |  | |  |  | `DATS(8)` | Manufacturing Date |
| `RU_VehicleEcologicalClass` |  | |  |  | `CHAR(1)` | Ecological Class |
| `RU_PropertyAddress` |  | |  |  | `CHAR(10)` | Russia: Property Address |
| `RU_PropertyOwnershipRegnDate` |  | |  |  | `DATS(8)` | Registration Date of Real Estate Ownership Rights |
| `RU_PropertyOwnershipTermnDate` |  | |  |  | `DATS(8)` | Termination Date of Real Estate Ownership Rights |
| `JP_Annex16AssetStructure` |  | |  |  | `CHAR(5)` | Japan: Asset Structure of Annex16 |
| `JP_Annex16AssetItem` |  | |  |  | `CHAR(5)` | Japan: Asset Item of Annex16 |
| `JP_Annex16LeasingAgrmtDate` |  | |  |  | `DATS(8)` | Japan: Leasing Agreement Date of Annex16-4 Report |
| `JP_PrptyTxRptCity` |  | |  |  | `CHAR(8)` | Japan: City Code of Property Tax Report |
| `JP_PrptyTxRptClassfctnKey` |  | |  |  | `CHAR(4)` | Japan: Classification Key of Property Tax Report |
| `JP_PrptyTxRptSpclDepr` |  | |  |  | `CHAR(3)` | Japan: Special Depreciation Code of Property Tax Report |
| `JP_PrptyTxRptAddlDepr` |  | |  |  | `CHAR(8)` | Additional Depreciation Code |
| `IN_AssetBlock` |  | |  |  | `CHAR(5)` | India: Block Key |
| `IN_AssetPutToUseDate` |  | |  |  | `DATS(8)` | India: Put to use date |
| `IN_AdditionalAssetBlock` |  | |  |  | `CHAR(5)` | India: Additional Depreciation Block Key |
| `IN_AssetIsResearchAndDev` |  | |  |  | `CHAR(1)` | India: R & D Asset |
| `IN_AssetIsPriorYear` |  | |  |  | `CHAR(1)` | India: Prior Year Transaction |
| `PT_VehicleTypeByEnergy` |  | |  |  | `CHAR(2)` | Portugal: Vehicle Type |
| `PT_VehicleIsWithoutLimit` |  | |  |  | `CHAR(1)` | Portugal: Is Vehicle Without Limit |
| `PT_BigRepairAssetLink` |  | |  |  | `CHAR(8)` | Portugal: Repair Asset Link |
| `PT_LandAssetLink` |  | |  |  | `CHAR(8)` | Portugal: Land Asset Link |
| `PT_AssetReportFormCategory` |  | |  |  | `CHAR(1)` | Portugal: Asset Report Form Category |
| `PT_AmortizedAssetIsReevaluated` |  | |  |  | `CHAR(1)` | Portugal: Is Amortized Asset Revaluated |
| `IL_InvmtCtrInternalCode` |  | |  |  | `CHAR(10)` | Israel: Internal code |
| `IL_InvmtCtrApprovalDocNmbr` |  | |  |  | `CHAR(15)` | Israel: Approval document number |
| `IL_InvmtCtrApprovalVersion` |  | |  |  | `CHAR(3)` | Israel: Approval version |
| `IL_InvmtCtrBogusAssetNumber` |  | |  |  | `CHAR(12)` | Israel: Bogus asset number |
| `IL_InvmtCtrAssetVersion` |  | |  |  | `CHAR(3)` | Israel: Asset version |
| `RS_GroupDeprExclusionYear` |  | |  |  | `NUMC(4)` | Exclusion Year |
| `RS_AssetLastInvoiceDate` |  | |  |  | `DATS(8)` | Last Invoice Date |
| `PL_AcquisitionProductionDate` |  | |  |  | `DATS(8)` | Fixed Asset Acquisition/Production Date |
| `PL_AcquisitionDocumentType` |  | |  |  | `CHAR(1)` | Acquisition Document Type |
| `PL_AcquisitionFormNumber` |  | |  |  | `CHAR(25)` | Asset Acquisition Form/OT Document Number |
| `PL_AssetTaxGroup` |  | |  |  | `CHAR(2)` | SAFT Asset Tax Group |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
