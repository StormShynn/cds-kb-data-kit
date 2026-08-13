---
name: I_ADDRESSCOMMUNICATIONREMARK_2
description: "Addresscommunicationremark 2"
semantic_vi: "View I_ADDRESSCOMMUNICATIONREMARK_2 cung cấp truy cập vào các ghi chú liên lạc địa chỉ, đó là các ghi chú hoặc bình luận bổ sung liên quan đến một địa chỉ. Nó được sử dụng để truy xuất hoặc cập nhật các ghi chú này trong hệ thống quản lý địa chỉ."
keywords:
  - "address"
  - "communication"
  - "remark"
  - "address management"
  - "address id"
  - "address person id"
  - "communication medium type"
  - "communication medium sequence number"
  - "language"
  - "communication remark text"
  - "sap"
  - "bc-srv-adr"
semantic_en: "The I_ADDRESSCOMMUNICATIONREMARK_2 view provides access to address communication remarks, which are additional notes or comments associated with an address. It is used to retrieve or update these remarks in the address management system."
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
  - address
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRESSCOMMUNICATIONREMARK_2

**Addresscommunicationremark 2**

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
| `AddressID` | ✓ | |  | `addrnumber` | `CHAR(10)` | Address Number |
| `AddressPersonID` | ✓ | |  | `persnumber` | `CHAR(10)` | Person Number |
| `CommunicationMediumType` | ✓ | |  | `comm_type` | `CHAR(3)` | Communication Method (Key) (Business Address Services) |
| `CommMediumSequenceNumber` | ✓ | |  | `consnumber` | `NUMC(3)` | Sequence Number |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CommunicationRemarkText` |  | |  | `remark` | `CHAR(50)` | Communication link notes |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Remark for Communication Data'
//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
//@ObjectModel.representativeKey: 'AddressID'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_AddressCommunicationRemark_2 as select from adrt
{
  key addrnumber as AddressID,
  key persnumber as AddressPersonID,
  key comm_type  as CommunicationMediumType,
  key consnumber as CommMediumSequenceNumber,
  key langu      as Language,
      remark     as CommunicationRemarkText
}
where date_from = '00010101'
```
