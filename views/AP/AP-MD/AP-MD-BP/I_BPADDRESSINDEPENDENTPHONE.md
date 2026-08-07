---
name: I_BPADDRESSINDEPENDENTPHONE
description: Bpaddressindependentphone
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - address
  - phone
  - component:AP-MD-BP
  - lob:Other
---
# I_BPADDRESSINDEPENDENTPHONE

**Bpaddressindependentphone**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BusinessPartner` | ✓ | | `_BusinessPartner` | `BusinessPartner` |
| `AddressID` | ✓ | |  |  |
| `Person` | ✓ | |  | `AddressPersonID` |
| `OrdinalNumber` | ✓ | |  | `CommMediumSequenceNumber` |
| `DestinationLocationCountry` |  | |  | `PhoneNumberCountry` |
| `IsDefaultPhoneNumber` |  | |  | `case when PhoneNumberType = '1' then cast('X' as boole_d) else cast(' ' as boole_d) end` |
| `OrdinalNumberForEdit` |  | |  | `CommMediumSequenceNumber` |
| `AddressIDForEdit` |  | |  | `AddressID` |
| `CommNumberIsNotUsed` |  | |  | `cast ( '' as ad_flnouse )` |
| `PhoneNumber` |  | |  | `PhoneAreaCodeSubscriberNumber` |
| `PhoneNumberExtension` |  | |  | `PhoneExtensionNumber` |
| `InternationalPhoneNumber` |  | |  |  |
| `PhoneIsSMSEnabled` |  | |  | `cast ('' as ad_flgsms)` |
| `PhoneNumberType` |  | |  |  |
| `ValidityStartDateTime` |  | |  | `cast ( BPAddressIndependentPhone.ValidityStartDate as ad_valfrom )` |
| `ValidityEndDateTime` |  | |  | `cast ( BPAddressIndependentPhone.ValidityEndDate as ad_valto )` |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` |
| `AddressCommunicationRemarkText` |  | | `_AddressCommunicationRemark` | `CommunicationRemarkText` |
| `_BusinessPartner` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPADDRINDPHONE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@EndUserText.label: 'Core view for address independent phone'
@ObjectModel.representativeKey: 'AddressID'
@VDM.viewType: #BASIC

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BPAddressIndependentPhone  as select from I_AddressPhoneNumber_2 as BPAddressIndependentPhone
 association [1..1] to I_BusinessPartner as _BusinessPartner on $projection.AddressID = _BusinessPartner.IndependentAddressID
{
   key _BusinessPartner.BusinessPartner           as BusinessPartner,
   key BPAddressIndependentPhone.AddressID,
   key BPAddressIndependentPhone.AddressPersonID  as Person,
   key BPAddressIndependentPhone.CommMediumSequenceNumber as OrdinalNumber,
   BPAddressIndependentPhone.PhoneNumberCountry as DestinationLocationCountry,
   case 
        when PhoneNumberType = '1'
            then cast('X' as boole_d)
        else
            cast(' ' as boole_d) 
      end as IsDefaultPhoneNumber,
   BPAddressIndependentPhone.CommMediumSequenceNumber as OrdinalNumberForEdit,
   BPAddressIndependentPhone.AddressID as AddressIDForEdit,
 //  BPAddressIndependentPhone.CommNumberIsNotUsed,
   cast ( '' as ad_flnouse ) as CommNumberIsNotUsed, 
   BPAddressIndependentPhone.PhoneAreaCodeSubscriberNumber as PhoneNumber,
   BPAddressIndependentPhone.PhoneExtensionNumber as PhoneNumberExtension,
   BPAddressIndependentPhone.InternationalPhoneNumber,
  // BPAddressIndependentPhone.PhoneIsSMSEnabled,
   cast ('' as ad_flgsms) as PhoneIsSMSEnabled,
   BPAddressIndependentPhone.PhoneNumberType,
   //Do not use ValidityStartDateTime, use ValidityStartDate instead
   cast ( BPAddressIndependentPhone.ValidityStartDate as ad_valfrom ) as ValidityStartDateTime,
   //Do not use ValidityEndDateTime, use ValidityEndDate instead
   cast ( BPAddressIndependentPhone.ValidityEndDate as ad_valto ) as ValidityEndDateTime, 
   BPAddressIndependentPhone.ValidityStartDate,
   BPAddressIndependentPhone.ValidityEndDate,
   /* Associations */
   _BusinessPartner,
    _BusinessPartner.AuthorizationGroup,
   _AddressCommunicationRemark.CommunicationRemarkText as AddressCommunicationRemarkText
     
  
}

where
    (PhoneNumberType = '1' or PhoneNumberType = '') //Do not return Mobile numbers
    and _BusinessPartner.BusinessPartner is not null;
```
