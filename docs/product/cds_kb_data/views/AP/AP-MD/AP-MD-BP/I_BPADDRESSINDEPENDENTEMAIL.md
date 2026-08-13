---
name: I_BPADDRESSINDEPENDENTEMAIL
description: "Bpaddressindependentemail"
semantic_vi: "Cung cấp địa chỉ email đối tác kinh doanh độc lập với địa chỉ của họ, hữu ích cho các luồng làm việc và giao diện xem."
keywords:
  - "business partner"
  - "đối tác kinh doanh"
  - "email address"
  - "địa chỉ email"
  - "workflow"
  - "luồng làm việc"
  - "interface view"
  - "giao diện xem"
  - "address"
  - "địa chỉ"
  - "sap"
semantic_en: "Provides business partner email addresses independent of their addresses, useful for workflows and interface views."
app_component: AP-MD-BP
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
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - workflow
  - address
  - email
  - component:AP-MD-BP
  - lob:Other
---
# I_BPADDRESSINDEPENDENTEMAIL

**Bpaddressindependentemail**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
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
| `BusinessPartner` | ✓ | | `_BusinessPartner` | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `AddressID` | ✓ | |  |  | `CHAR(10)` | Address Number |
| `Person` | ✓ | |  | `AddressPersonID` | `CHAR(10)` | Person Number |
| `OrdinalNumber` | ✓ | |  | `CommMediumSequenceNumber` | `NUMC(3)` | Sequence Number |
| `AddressIDForEdit` |  | |  | `AddressID` | `CHAR(10)` | Address Number |
| `OrdinalNumberForEdit` |  | |  | `CommMediumSequenceNumber` | `NUMC(3)` | Sequence Number |
| `IsDefaultEmailAddress` |  | |  | `EmailAddressIsCurrentDefault` | `CHAR(1)` | Indicator : Current Default Email Address |
| `EmailAddress` |  | |  |  | `CHAR(241)` | Email Address |
| `SearchEmailAddress` |  | |  | `cast('' as ad_smtpad2)` | `CHAR(20)` | E-Mail Address Search Field |
| `IsHomeEmailAddress` |  | |  | `cast('' as ad_flghome)` | `CHAR(1)` | Recipient address in this communication type (mail sys.grp) |
| `CommNumberIsNotUsed` |  | |  | `cast('' as ad_flnouse)` | `CHAR(1)` | Flag: This Communication Number is Not Used |
| `ValidityStartDateTime` |  | |  | `cast ( I_AddressEmailAddress_2.ValidityStartDate as ad_valfrom )` | `CHAR(14)` | Communication Data: Valid From (YYYYMMDDHHMMSS) |
| `ValidityEndDateTime` |  | |  | `cast ( I_AddressEmailAddress_2.ValidityEndDate as ad_valto )` | `CHAR(14)` | Communication Data: Valid To (YYYYMMDDHHMMSS) |
| `ValidityStartDate` |  | |  |  | `DATS(8)` |  |
| `ValidityEndDate` |  | |  |  | `DATS(8)` |  |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `AddressCommunicationRemarkText` |  | | `_AddressCommunicationRemark` | `CommunicationRemarkText` | `CHAR(50)` | Communication link notes |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPADDRINDEMAIL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Root View for Address Independent Email for BP app'

@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BPAddressIndependentEmail
  as select from I_AddressEmailAddress_2
    association [1..1] to I_BusinessPartner as _BusinessPartner on $projection.AddressID = _BusinessPartner.IndependentAddressID

{
  key _BusinessPartner.BusinessPartner   as BusinessPartner,
  key I_AddressEmailAddress_2.AddressID,
  key I_AddressEmailAddress_2.AddressPersonID as Person,
  key I_AddressEmailAddress_2.CommMediumSequenceNumber as OrdinalNumber,
      I_AddressEmailAddress_2.AddressID     as AddressIDForEdit,
      I_AddressEmailAddress_2.CommMediumSequenceNumber as OrdinalNumberForEdit,
      I_AddressEmailAddress_2.EmailAddressIsCurrentDefault as IsDefaultEmailAddress,
      I_AddressEmailAddress_2.EmailAddress,
      cast('' as ad_smtpad2) as SearchEmailAddress,
      cast('' as ad_flghome) as IsHomeEmailAddress,
      cast('' as ad_flnouse) as CommNumberIsNotUsed,
      //Do not use ValidityStartDateTime, use ValidityStartDate instead
      cast ( I_AddressEmailAddress_2.ValidityStartDate as ad_valfrom ) as ValidityStartDateTime,
      //Do not use ValidityEndDateTime, use ValidityEndDate instead
      cast ( I_AddressEmailAddress_2.ValidityEndDate as ad_valto ) as ValidityEndDateTime, 
      I_AddressEmailAddress_2.ValidityStartDate,
      I_AddressEmailAddress_2.ValidityEndDate,
      /* Associations */
      _BusinessPartner,
      _BusinessPartner.AuthorizationGroup,
      _AddressCommunicationRemark.CommunicationRemarkText   as AddressCommunicationRemarkText
}
where _BusinessPartner.BusinessPartner is not null;
```
