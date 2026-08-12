---
name: I_PURCHASINGGROUPSTDVH
description: "Purchasing Group"
app_component: MM-PUR-GF-F4-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PURCHASINGGROUPSTDVH')/$value
semantic_en: "Purchasing Group"
tags:
  - MM
  - bo:project
  - component:MM-PUR-GF-F4-2CL
  - interface-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-GF
  - MM-PUR-GF-F4
  - MM-PUR-GF-F4-2CL
  - metadata-only
---
# I_PURCHASINGGROUPSTDVH

**Purchasing Group**

| Property | Value |
|---|---|
| App Component | `MM-PUR-GF-F4-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PURCHASINGGROUPSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingGroupName` |  | |  |  | `CHAR(18)` | Purchasing Group Name |
| `PurchasingGroupPhoneNumber` |  | |  |  | `CHAR(12)` | Telephone number of purchasing group (buyer group) |
| `PhoneNumber` |  | |  |  | `CHAR(30)` | Telephone No.: Dialing Code and Number |
| `PhoneNumberExtension` |  | |  |  | `CHAR(10)` | Telephone no.: Extension |
| `FaxNumber` |  | |  |  | `CHAR(31)` | Fax number of purchasing (buyer) group |
| `EmailAddress` |  | |  |  | `CHAR(241)` | Email Address |
