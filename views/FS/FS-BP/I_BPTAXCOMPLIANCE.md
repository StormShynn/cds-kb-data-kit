---
name: I_BPTAXCOMPLIANCE
description: Business Partner Tax Compliance
app_component: FS-BP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCE')/$value
semantic_en: Business Partner Tax Compliance
tags:
  - FS
  - bo:businesspartner
  - component:FS-BP
  - FS-BP
  - interface-view
  - metadata-only
---
# I_BPTAXCOMPLIANCE

**Business Partner Tax Compliance**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BPTAXCOMPLIANCE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `BPTaxComplianceID` | `CHAR(6)` | Tax Compliance ID |
| `BPTaxComplianceType` | `CHAR(6)` | Tax Compliance Type |
| `BPTaxComplianceCountryRegion` | `CHAR(3)` | Tax Compliance: Country/Region |
| `BPTaxComplianceRegion` | `CHAR(3)` | Tax Compliance: Region |
| `BPTaxComplianceStatus` | `CHAR(1)` | Tax Compliance Status |
| `BPTaxComplianceStatusReason` | `CHAR(2)` | Tax Compliance: Reason for Status |
| `BPTaxComplianceValidFromDate` | `DATS(8)` | Tax Compliance: Start Date |
| `BPTaxComplianceValidToDate` | `DATS(8)` | Tax Compliance: End Date |
| `BPTaxComplianceRatingDate` | `DATS(8)` | Tax Compliance: Rating Date |
| `BPTaxComplianceAgreementStatus` | `CHAR(1)` | Tax Compliance: Agreement Status |
| `BPTaxComplianceAgreementDate` | `DATS(8)` | Tax Compliance: Agreement Date |
