---
name: I_EHSRSKASSMT2RSKCTRLAUTHZNFLD
description: Risk Control Authorization Fields
app_component: EHS-SUS-HS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSRSKASSMT2RSKCTRLAUTHZNFLD')/$value
semantic_en: Risk Control Authorization Fields
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-HS
  - EHS-SUS
  - EHS-SUS-HS
  - interface-view
  - metadata-only
---
# I_EHSRSKASSMT2RSKCTRLAUTHZNFLD

**Risk Control Authorization Fields**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-HS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSRSKASSMT2RSKCTRLAUTHZNFLD')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `EHSRiskControlUUID` | `RAW(16)` | UUID in X form (binary) |
| `EHSTaskHostObjectInstance` | `CHAR(70)` | Instance Ident. in BOR Compat. Persistent Object References |
| `EHSRiskAssessmentType` | `CHAR(21)` | Risk Assessment Type |
| `EHSRiskAssessment2Status` | `CHAR(2)` | Risk Assessment Status |
| `Plant` | `CHAR(4)` | Plant ID |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `EHSRiskAssessmentAuthznGrp` | `CHAR(21)` | Authorization Group for Risk Assessment |
| `EHSRiskAssessmentIsBlocked` | `CHAR(1)` | Risk Assessment is Blocked |
