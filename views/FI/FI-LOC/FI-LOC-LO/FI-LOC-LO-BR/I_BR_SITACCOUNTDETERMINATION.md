---
name: I_BR_SITACCOUNTDETERMINATION
description: This CDS view provides you with a list of the assignments of the general ledger of the transit stock accounts to valuation classes and to chart of accounts for Stock Transfer (STO). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_SITACCOUNTDETERMINATION')/$value
semantic_en: This CDS view provides you with a list of the assignments of the general ledger of the transit stock accounts to valuation classes and to chart of accounts for Stock Transfer (STO). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
  - stock
  - metadata-only
---
# I_BR_SITACCOUNTDETERMINATION

**This CDS view provides you with a list of the assignments of the general ledger of the transit stock accounts to valuation classes and to chart of accounts for Stock Transfer (STO). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_SITACCOUNTDETERMINATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `MaterialValuationClass` |  | |  |  | `CHAR(4)` | Valuation Class |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
