---
name: I_WORKPLACEADDRESS
description: "Workplaceaddress"
app_component: BC-SRV-BP
software_component: SAP_BASIS
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerUUID` | ✓ | |  | `partner_guid` |  |  |
| `AddressID` |  | |  | `addrnumber` |  |  |
| `BusinessPartner` |  | |  | `partner` |  |  |
| `DestinationLocationCountry` |  | |  | `_phone[1: r3_user = '1' ].country` |  |  |
| `PhoneNumber` |  | |  | `_phone[1: r3_user = '1' ].tel_number` |  |  |
| `PhoneNumberExtension` |  | |  | `_phone[1: r3_user = '1' ].tel_extens` |  |  |
| `NormalizedPhoneNumber` |  | |  | `_phone[1: r3_user = '1' ].telnr_long` |  |  |
| `MblPhoneDestinationLocCountry` |  | |  | `_phone[1: r3_user = '3' ].country` |  |  |
| `MobilePhoneNumber` |  | |  | `_phone[1: r3_user = '3' ].tel_number` |  |  |
| `MblNormalizedPhoneNumber` |  | |  | `_phone[1: r3_user = '3' ].telnr_long` |  |  |
| `FaxNumberCountry` |  | | `_CurrentDefaultFaxNumber` | `country` |  |  |
| `FaxAreaCodeSubscriberNumber` |  | | `_CurrentDefaultFaxNumber` | `fax_number` |  |  |
| `FaxExtensionNumber` |  | | `_CurrentDefaultFaxNumber` | `fax_extens` |  |  |
| `InternationalFaxNumber` |  | | `_CurrentDefaultFaxNumber` | `faxnr_long` |  |  |
| `DefaultEmailAddress` |  | |  | `_mail[1: flgdefault = 'X'].smtp_addr` |  |  |
| `ValidityStartDate` |  | |  | `tstmp_to_dats(Mom.from_timestamp,'UTC', $session.client, 'NULL')` |  |  |
| `ValidityEndDate` |  | |  | `tstmp_to_dats(Mom.to_timestamp,'UTC', $session.client, 'NULL')` |  |  |
| `Building` |  | |  | `building` |  |  |
| `RoomNumber` |  | |  | `roomnumber` |  |  |
| `Floor` |  | |  | `floor` |  |  |
| `FunctionalTitlename` |  | |  | `function` |  |  |
| `Department` |  | |  | `department` |  |  |
| `CommunicationMediumType` |  | |  | `deflt_comm` |  |  |
| `PersonNumber` |  | |  | `persnumber` |  |  |
| `AddressPersonID` |  | |  | `persnumber` |  |  |
| `IsBusinessPurposeCompleted` |  | |  | `xpcpt` |  |  |
| `AuthorizationGroup` |  | |  | `augrp` |  |  |
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
