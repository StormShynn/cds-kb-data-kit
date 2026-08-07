---
name: I_AGREEMENTPORTIONRULES
description: Agreement Rule Details
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONRULES')/$value
semantic_en: Agreement Rule Details
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_AGREEMENTPORTIONRULES

**Agreement Rule Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONRULES')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementPortionRulesUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_CAG_RULES |
| `AgreementPortionUUID` |  | |  |  | `RAW(16)` | GUID for Table CMS_CAG_POR |
| `AgreementPortionRulesPartnerID` |  | |  |  | `CHAR(32)` | Business Partner ID |
| `AgreementPortionRulesBPFunc` |  | |  |  | `CHAR(6)` | Business Partner Function |
| `AgreementPortionRulesCurrency` |  | |  |  | `CUKY(5)` | Currency of the Receivable  Amounts Specified in the Link |
| `AgreementPortionRulesOrgUnit` |  | |  |  | `CHAR(10)` | Organization Unit for a Receivable |
| `AgreementPortionRulesProdSet` |  | |  |  | `CHAR(6)` | Identification of a Product Set |
| `AgreementPortionRulesRemarkTxt` |  | |  |  | `CHAR(60)` | Text for remarks |
| `AgreementPortionRulesLender` |  | |  |  | `CHAR(32)` | Business Partner ID |
