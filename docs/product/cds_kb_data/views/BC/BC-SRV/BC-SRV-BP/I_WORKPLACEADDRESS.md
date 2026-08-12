---
name: I_WORKPLACEADDRESS
description: "Workplaceaddress"
app_component: BC-SRV-BP
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
  - BC-SRV-BP
  - interface-view
  - address
  - component:BC-SRV-BP
  - lob:Basis Components
---
# I_WORKPLACEADDRESS

**Workplaceaddress**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BP` |
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
| `BusinessPartnerUUID` | ✓ | |  | `partner_guid` | `RAW(16)` | Business Partner GUID |
| `AddressID` |  | |  | `addrnumber` | `CHAR(10)` | Address Number |
| `BusinessPartner` |  | |  | `partner` | `CHAR(10)` | Business Partner Number |
| `DestinationLocationCountry` |  | |  | `_phone[1: r3_user = '1' ].country` | `CHAR(3)` | Country/Region for Telephone/Fax Number |
| `PhoneNumber` |  | |  | `_phone[1: r3_user = '1' ].tel_number` | `CHAR(30)` | Telephone No.: Dialing Code and Number |
| `PhoneNumberExtension` |  | |  | `_phone[1: r3_user = '1' ].tel_extens` | `CHAR(10)` | Telephone no.: Extension |
| `NormalizedPhoneNumber` |  | |  | `_phone[1: r3_user = '1' ].telnr_long` | `CHAR(30)` | Complete Number: Dialing Code+Number+Extension |
| `MblPhoneDestinationLocCountry` |  | |  | `_phone[1: r3_user = '3' ].country` | `CHAR(3)` | Country/Region for Telephone/Fax Number |
| `MobilePhoneNumber` |  | |  | `_phone[1: r3_user = '3' ].tel_number` | `CHAR(30)` | Telephone No.: Dialing Code and Number |
| `MblNormalizedPhoneNumber` |  | |  | `_phone[1: r3_user = '3' ].telnr_long` | `CHAR(30)` | Complete Number: Dialing Code+Number+Extension |
| `FaxNumberCountry` |  | | `_CurrentDefaultFaxNumber` | `country` | `CHAR(3)` | Country/Region for Telephone/Fax Number |
| `FaxAreaCodeSubscriberNumber` |  | | `_CurrentDefaultFaxNumber` | `fax_number` | `CHAR(30)` | Fax Number: Dialing Code and Number |
| `FaxExtensionNumber` |  | | `_CurrentDefaultFaxNumber` | `fax_extens` | `CHAR(10)` | Fax no.: Extension |
| `InternationalFaxNumber` |  | | `_CurrentDefaultFaxNumber` | `faxnr_long` | `CHAR(30)` | Complete Number: Dialing Code+Number+Extension |
| `DefaultEmailAddress` |  | |  | `_mail[1: flgdefault = 'X'].smtp_addr` | `CHAR(241)` | Email Address |
| `ValidityStartDate` |  | |  | `tstmp_to_dats(Mom.from_timestamp,'UTC', $session.client, 'NULL')` | `DATS(8)` |  |
| `ValidityEndDate` |  | |  | `tstmp_to_dats(Mom.to_timestamp,'UTC', $session.client, 'NULL')` | `DATS(8)` |  |
| `Building` |  | |  | `building` | `CHAR(10)` | Building (number or code) |
| `RoomNumber` |  | |  | `roomnumber` | `CHAR(10)` | Room or Apartment Number |
| `Floor` |  | |  | `floor` | `CHAR(10)` | Floor in Building |
| `FunctionalTitlename` |  | |  | `function` | `CHAR(40)` | Function |
| `Department` |  | |  | `department` | `CHAR(40)` | Department |
| `CommunicationMediumType` |  | |  | `deflt_comm` | `CHAR(3)` | Communication Method (Key) (Business Address Services) |
| `PersonNumber` |  | |  | `persnumber` | `CHAR(10)` | Person Number |
| `AddressPersonID` |  | |  | `persnumber` | `CHAR(10)` | Person Number |
| `IsBusinessPurposeCompleted` |  | |  | `xpcpt` | `CHAR(1)` | Business Purpose Completed Flag |
| `AuthorizationGroup` |  | |  | `augrp` | `CHAR(4)` | Authorization Group |
| `_DestinationLocationCountry` | | ✓ | | | | |
| `_MblPhoneDestinationLocCountry` | | ✓ | | | | |
| `_FaxNumberCountry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_mail` | `adr6` | [0..1] |
| `_phone` | `adr2` | [0..1] |
| `_CurrentDefaultFaxNumber` | `adr3` | [0..1] |
| `_DestinationLocationCountry` | `I_Country` | [0..1] |
| `_MblPhoneDestinationLocCountry` | `I_Country` | [0..1] |
| `_FaxNumberCountry` | `I_Country` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IEMPWPADDR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Employee Workplace Address'
@VDM.viewType: #BASIC
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XXL

define view I_WorkplaceAddress

  as select from mom052 as Mom

    inner join   but000 as bp   on bp.partner_guid = Mom.partner_guid
    inner join   adcp   as root on root.addrnumber = Mom.org_addr_number
  //and root.persnumber = bp.persnumber //Commented because of Internal Incident: 2280158276, Performance Issue with I_WorkplaceAddress due to Cyclic join

  association [0..1] to adr6      as _mail                          on  root.addrnumber = _mail.addrnumber
                                                                    and root.persnumber = _mail.persnumber

  association [0..1] to adr2      as _phone                         on  root.addrnumber = _phone.addrnumber
                                                                    and root.persnumber = _phone.persnumber

  association [0..1] to adr3      as _CurrentDefaultFaxNumber       on  root.addrnumber                     = _CurrentDefaultFaxNumber.addrnumber
                                                                    and root.persnumber                     = _CurrentDefaultFaxNumber.persnumber
                                                                    and _CurrentDefaultFaxNumber.flgdefault = 'X'

  association [0..1] to I_Country as _DestinationLocationCountry    on  $projection.DestinationLocationCountry = _DestinationLocationCountry.Country

  association [0..1] to I_Country as _MblPhoneDestinationLocCountry on  $projection.MblPhoneDestinationLocCountry = _MblPhoneDestinationLocCountry.Country

  association [0..1] to I_Country as _FaxNumberCountry              on  $projection.FaxNumberCountry = _FaxNumberCountry.Country

{
  key  Mom.partner_guid                                                  as BusinessPartnerUUID,
       root.addrnumber                                                   as AddressID,
       bp.partner                                                        as BusinessPartner,
       @ObjectModel.foreignKey.association: '_DestinationLocationCountry'
       _phone[1: r3_user = '1' ].country                                 as DestinationLocationCountry,
       _phone[1: r3_user = '1' ].tel_number                              as PhoneNumber,
       _phone[1: r3_user = '1' ].tel_extens                              as PhoneNumberExtension,
       _phone[1: r3_user = '1' ].telnr_long                              as NormalizedPhoneNumber,

       @ObjectModel.foreignKey.association: '_MblPhoneDestinationLocCountry'
       _phone[1: r3_user = '3' ].country                                 as MblPhoneDestinationLocCountry,
       _phone[1: r3_user = '3' ].tel_number                              as MobilePhoneNumber,
       _phone[1: r3_user = '3' ].telnr_long                              as MblNormalizedPhoneNumber,

       @ObjectModel.foreignKey.association: '_FaxNumberCountry'
       _CurrentDefaultFaxNumber.country                                  as FaxNumberCountry,
       _CurrentDefaultFaxNumber.fax_number                               as FaxAreaCodeSubscriberNumber,
       _CurrentDefaultFaxNumber.fax_extens                               as FaxExtensionNumber,
       _CurrentDefaultFaxNumber.faxnr_long                               as InternationalFaxNumber,

       _mail[1: flgdefault = 'X'].smtp_addr                              as DefaultEmailAddress,

       tstmp_to_dats(Mom.from_timestamp,'UTC',  $session.client, 'NULL') as ValidityStartDate,
       tstmp_to_dats(Mom.to_timestamp,'UTC',  $session.client, 'NULL')   as ValidityEndDate,

       //Addition of Building Code and Room Number
       root.building                                                     as Building,
       root.roomnumber                                                   as RoomNumber,
       root.floor                                                        as Floor,

       //Adding Function and Department fields
       root.function                                                     as FunctionalTitlename,
       root.department                                                   as Department,

       root.deflt_comm                                                   as CommunicationMediumType,

       //root.persnumber as AddressPersonID,//Internal Incident: 2280158276, Performance Issue with I_WorkplaceAddress due to Cyclic join
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: 'AddressPersonID'
       root.persnumber                                                   as PersonNumber,
       root.persnumber                                                   as AddressPersonID,


       bp.xpcpt                                                          as IsBusinessPurposeCompleted,
       bp.augrp                                                          as AuthorizationGroup,

       _DestinationLocationCountry,
       _MblPhoneDestinationLocCountry,
       _FaxNumberCountry
}
```
