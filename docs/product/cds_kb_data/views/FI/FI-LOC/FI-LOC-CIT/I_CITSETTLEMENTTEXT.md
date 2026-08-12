---
name: I_CITSETTLEMENTTEXT
description: "CIT Settlement Code - Text"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITSETTLEMENTTEXT')/$value
semantic_en: "CIT Settlement Code - Text"
semantic_vi: "CIT Settlement Code - Text — CDS view giao diện dựa trên ficitc_settlmtt."
keywords:
  - "cit"
  - "settlement"
  - "code"
  - "text"
  - "application"
  - "language"
  - "description"
tags:
  - FI
  - component:FI-LOC-CIT
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - lob:finance
  - lob:logistics general
  - bo:companycode
---
# I_CITSETTLEMENTTEXT

**CIT Settlement Code - Text**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITSETTLEMENTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BRFApplication` | ✓ | |  | `application_name` | `CHAR(30)` | BRFplus Application name |
| `CITSettlementCode` | ✓ | |  | `settlementcode` | `CHAR(30)` | CIT Settlement Code |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `CITSettlementCodeDescription` |  | |  | `settlementname` | `CHAR(50)` | CIT Settlement Code Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITSETTLEMENTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CITSETTLEMENTTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICITSETTLMTT'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CIT Settlement Code - Text'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

define view I_CITSettlementText as select from ficitc_settlmtt {
  key application_name as BRFApplication,
  key settlementcode as CITSettlementCode,
  @Semantics.language
  key language as Language,
  @Semantics.text
  settlementname as CITSettlementCodeDescription
}
```
