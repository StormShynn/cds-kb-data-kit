---
name: I_ADDRCURDEFAULTEMAILADDRESS
description: "Addrcurdefaultemailaddress"
semantic_vi: "Cung cấp địa chỉ email mặc định cho địa chỉ trong hệ thống, được sử dụng để xác định phương thức liên hệ chính cho địa chỉ."
keywords:
  - "address"
  - "email"
  - "default"
  - "contact"
  - "method"
  - "sap"
  - "basis"
  - "components"
  - "bc-srv-adr"
  - "interface-view"
semantic_en: "Provides default email addresses for addresses in a system, used to identify the primary contact method for an address."
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
  - workflow
  - address
  - email
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRCURDEFAULTEMAILADDRESS

**Addrcurdefaultemailaddress**

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
| `EmailAddress` |  | |  |  | `CHAR(241)` | Email Address |
| `ValidityStartDate` |  | |  |  | `DATS(8)` |  |
| `ValidityEndDate` |  | |  |  | `DATS(8)` |  |
| `_AddressCommunicationRemark` | | ✓ | | | | |
| `_AddressCommunicationUsage` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Analytics : { dataCategory: #DIMENSION,
               dataExtraction: { enabled: true }
             }
@EndUserText.label: 'Current Default Email Address'
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

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_AddrCurDefaultEmailAddress
  as select from I_AddressEmailAddress_2
{
  key AddressID,
  key AddressPersonID,
      CommMediumSequenceNumber,
      EmailAddress,
      ValidityStartDate,
      ValidityEndDate,
      
      _AddressCommunicationRemark,
      _AddressCommunicationUsage
}
where
  EmailAddressIsCurrentDefault = 'X'
```
