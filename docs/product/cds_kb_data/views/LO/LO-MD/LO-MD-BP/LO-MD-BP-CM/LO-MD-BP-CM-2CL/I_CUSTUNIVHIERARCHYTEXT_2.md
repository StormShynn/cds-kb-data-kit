---
name: I_CUSTUNIVHIERARCHYTEXT_2
description: "Customer Univ Hierarchy Header - Text"
app_component: LO-MD-BP-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTUNIVHIERARCHYTEXT_2')/$value
semantic_en: "Customer Univ Hierarchy Header - Text"
tags:
  - LO
  - bo:businesspartner
  - component:LO-MD-BP-CM-2CL
  - customer
  - interface-view
  - LO-MD
  - LO-MD-BP
  - LO-MD-BP-CM
  - LO-MD-BP-CM-2CL
  - lob:logistics general
  - metadata-only
---
# I_CUSTUNIVHIERARCHYTEXT_2

**Customer Univ Hierarchy Header - Text**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTUNIVHIERARCHYTEXT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `UniversalHierarchy` |  | |  |  | `CHAR(40)` | Hierarchy ID |
| `CustUnivHierarchyValidEndDate` |  | |  |  | `DATS(8)` | Validity End Date |
| `CustUnivHierarchyValidStartDte` |  | |  |  | `DATS(8)` | Validity Start Date |
| `HierarchyType` |  | |  |  | `CHAR(4)` | Hierarchy Type |
| `CustomerUniversalHierarchyText` |  | |  |  | `CHAR(50)` | Hierarchy description |
