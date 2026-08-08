---
name: I_COLLTRLREPARTPARTNER
description: "Business Partner for Collateral RE Part"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTPARTNER')/$value
semantic_en: "Business Partner for Collateral RE Part"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_COLLTRLREPARTPARTNER

**Business Partner for Collateral RE Part**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREPARTPARTNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlREPartPartnerUUID` |  | |  |  | `RAW(16)` | GUID for part BP |
| `CollateralRealEstatePartUUID` |  | |  |  | `RAW(16)` | GUID for Object part |
| `CollateralRealEstatePartID` |  | |  |  | `NUMC(10)` | Part ID for the Object |
| `CollateralRealEstatePartnerID` |  | |  |  | `CHAR(32)` | Business Partner ID |
| `CollateralPartnerFunction` |  | |  |  | `CHAR(6)` | Business Partner Function |
| `ColltrlREPartnerShareNumerator` |  | |  |  | `INT4(10)` | Numerator of the Business Partner Ownership of Real Estate |
| `ColltrlREPrtnShareDenominator` |  | |  |  | `INT4(10)` | Denominator of Business Partner Ownership of Real Estate |
| `ColltrlREPartnerValidFromDate` |  | |  |  | `DATS(8)` | Date from which Real Estate Value stands Valid |
| `ColltrlREPartnerValidToDate` |  | |  |  | `DATS(8)` | Date unitl which Real Estate Value stands Valid |
| `ColltrlRealEstateEnteredDate` |  | |  |  | `DATS(8)` | Created On |
