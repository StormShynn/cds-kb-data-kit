---
name: I_ADDRCURDEFAULTFAXNUMBER
description: "Addrcurdefaultfaxnumber"
semantic_vi: "View Addrcurdefaultfaxnumber CDS hiển thị số fax mặc định hiện tại cho địa chỉ và người liên hệ, cung cấp cách để truy xuất và quản lý thông tin số fax."
keywords:
  - "address"
  - "fax number"
  - "default fax"
  - "address person"
  - "comm medium sequence number"
  - "sap cds view"
  - "basis components"
  - "bc-srv-adr"
  - "interface view"
  - "released"
semantic_en: "The Addrcurdefaultfaxnumber CDS view exposes current default fax numbers for addresses and their associated persons, providing a way to retrieve and manage fax number information."
app_component: BC-SRV-ADR
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
  - BC-SRV-ADR
  - interface-view
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRCURDEFAULTFAXNUMBER

**Addrcurdefaultfaxnumber**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
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
| `AddressID` | ✓ | |  |  | `CHAR(10)` | Address Number |
| `AddressPersonID` | ✓ | |  |  | `CHAR(10)` | Person Number |
| `CommMediumSequenceNumber` |  | |  |  | `NUMC(3)` | Sequence Number |
| `FaxNumberCountry` |  | |  |  | `CHAR(3)` | Country/Region for Telephone/Fax Number |
| `FaxAreaCodeSubscriberNumber` |  | |  |  | `CHAR(30)` | Fax Number: Dialing Code and Number |
| `FaxExtensionNumber` |  | |  |  | `CHAR(10)` | Fax no.: Extension |
| `InternationalFaxNumber` |  | |  |  | `CHAR(30)` | Complete Number: Dialing Code+Number+Extension |
| `ValidityStartDate` |  | |  |  | `DATS(8)` |  |
| `ValidityEndDate` |  | |  |  | `DATS(8)` |  |
| `_FaxNumberCountry` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Current Default Fax Number'
//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
//@ObjectModel.representativeKey: 'AddressID'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_AddrCurDefaultFaxNumber
  as select from I_AddressFaxNumber_2
{
  key AddressID,
  key AddressPersonID,
      CommMediumSequenceNumber,
      FaxNumberCountry,
      FaxAreaCodeSubscriberNumber,
      FaxExtensionNumber,
      InternationalFaxNumber,
      ValidityStartDate,
      ValidityEndDate,
      _FaxNumberCountry
}
where
  FaxNumberIsCurrentDefault = 'X'
```
