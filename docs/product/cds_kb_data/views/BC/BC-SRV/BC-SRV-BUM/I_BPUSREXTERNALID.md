---
name: I_BPUSREXTERNALID
description: "Bpusrexternalid"
semantic_vi: "View Bpusrexternalid cung cấp các định danh bên ngoài cho đối tác kinh doanh, chẳng hạn như loại và số định danh, cùng với các ngày hiệu lực. Nó được sử dụng để truy cập và quản lý định danh bên ngoài đối tác kinh doanh."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "external identifier"
  - "định danh bên ngoài"
  - "sap cds view"
  - "view"
  - "business partner external identifier"
  - "định danh bên ngoài đối tác kinh doanh"
  - "sap basis components"
  - "components"
semantic_en: "The Bpusrexternalid view provides external identifiers for business partners, such as their identification types and numbers, along with their validity dates. It is used to access and manage business partner external identifiers."
app_component: BC-SRV-BUM
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-BUM
  - interface-view
  - component:BC-SRV-BUM
  - lob:Basis Components
---
# I_BPUSREXTERNALID

**Bpusrexternalid**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BUM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `BPIdentificationType` | ✓ | |  | `type` | `CHAR(6)` | Identification Type |
| `BPIdentificationNumber` | ✓ | |  | `idnumber` | `CHAR(60)` | Identification Number |
| `ValidityStartDate` |  | |  | `valid_date_from` | `DATS(8)` | Validity Start for ID Number |
| `ValidityEndDate` |  | |  | `valid_date_to` | `DATS(8)` | Validity End for ID Number |
| `_BusinessUserBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessUserBasic` | `I_BusinessUserBasic` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Business Partner External ID (BUM)'
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view entity I_BPUsrExternalID as select from but0id 
  association [0..1] to I_BusinessUserBasic as _BusinessUserBasic on $projection.BusinessPartner = _BusinessUserBasic.BusinessPartner
{
  key partner     as BusinessPartner,
  key type        as BPIdentificationType,
  key idnumber    as BPIdentificationNumber,
      valid_date_from as ValidityStartDate,
      valid_date_to as ValidityEndDate,
      _BusinessUserBasic
}
```
