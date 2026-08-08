---
name: I_BPADDRESSINDEPENDENTMOBILE
description: "Bpaddressindependentmobile"
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
  - component:AP-MD-BP
  - lob:Other
---
# I_BPADDRESSINDEPENDENTMOBILE

**Bpaddressindependentmobile**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | | `_BusinessPartner` | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `AddressID` | ✓ | |  |  | `CHAR(10)` | Address Number |
| `Person` | ✓ | |  | `AddressPersonID` | `CHAR(10)` | Person Number |
| `OrdinalNumber` | ✓ | |  | `CommMediumSequenceNumber` | `NUMC(3)` | Sequence Number |
| `OrdinalNumberForEdit` |  | |  | `CommMediumSequenceNumber` | `NUMC(3)` | Sequence Number |
| `AddressIDForEdit` |  | |  | `AddressID` | `CHAR(10)` | Address Number |
| `MobilePhoneCountry` |  | |  | `PhoneNumberCountry` | `CHAR(3)` | Country/Region for Telephone/Fax Number |
| `CommNumberIsNotUsed` |  | |  | `cast ( '' as ad_flnouse )` | `CHAR(1)` | Flag: This Communication Number is Not Used |
| `MobilePhoneNumber` |  | |  | `PhoneAreaCodeSubscriberNumber` | `CHAR(30)` | Telephone No.: Dialing Code and Number |
| `PhoneNumberExtension` |  | |  | `PhoneExtensionNumber` | `CHAR(10)` | Telephone no.: Extension |
| `CompleteTelephoneNumber` |  | |  | `InternationalPhoneNumber` | `CHAR(30)` | Complete Number: Dialing Code+Number+Extension |
| `IsDefaultPhoneNumber` |  | |  | `case when PhoneNumberType = '3' then cast('X' as boole_d) else cast(' ' as boole_d) end` | `CHAR(1)` | Data element for domain BOOLE: TRUE (='X') and FALSE (=' ') |
| `PhoneIsSMSEnabled` |  | |  | `cast ('' as ad_flgsms)` | `CHAR(1)` | Indicator: Telephone is SMS-Enabled |
| `PhoneNumberType` |  | |  |  | `CHAR(1)` | Phone Number Type |
| `ValidityStartDateTime` |  | |  | `cast ( BPAddressIndependentMobile.ValidityStartDate as ad_valfrom )` | `CHAR(14)` | Communication Data: Valid From (YYYYMMDDHHMMSS) |
| `ValidityEndDateTime` |  | |  | `cast ( BPAddressIndependentMobile.ValidityEndDate as ad_valto )` | `CHAR(14)` | Communication Data: Valid To (YYYYMMDDHHMMSS) |
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
@AbapCatalog.sqlViewName: 'IBPADDRINDMOB'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@EndUserText.label: 'Root view for AddrIndMob'

@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'AddressID' // Need to check

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BPAddressIndependentMobile
  as select from I_AddressPhoneNumber_2 as BPAddressIndependentMobile
   
    association [1..1] to I_BusinessPartner as _BusinessPartner on $projection.AddressID = _BusinessPartner.IndependentAddressID

{
  key _BusinessPartner.BusinessPartner                     as BusinessPartner,
  key BPAddressIndependentMobile.AddressID,
  key BPAddressIndependentMobile.AddressPersonID as Person,
  key BPAddressIndependentMobile.CommMediumSequenceNumber   as OrdinalNumber,
      BPAddressIndependentMobile.CommMediumSequenceNumber   as OrdinalNumberForEdit,
      BPAddressIndependentMobile.AddressID                  as AddressIDForEdit,
      BPAddressIndependentMobile.PhoneNumberCountry         as MobilePhoneCountry,
      cast ( '' as ad_flnouse ) as CommNumberIsNotUsed,    
      BPAddressIndependentMobile.PhoneAreaCodeSubscriberNumber as MobilePhoneNumber,
      BPAddressIndependentMobile.PhoneExtensionNumber as PhoneNumberExtension,
      BPAddressIndependentMobile.InternationalPhoneNumber   as CompleteTelephoneNumber,
      case
             when PhoneNumberType = '3'
                 then cast('X' as boole_d)
             else
                 cast(' ' as boole_d)
           end                                              as IsDefaultPhoneNumber,
      cast ('' as ad_flgsms) as PhoneIsSMSEnabled,
      BPAddressIndependentMobile.PhoneNumberType,
      //Do not use ValidityStartDateTime, use ValidityStartDate instead
      cast ( BPAddressIndependentMobile.ValidityStartDate as ad_valfrom ) as ValidityStartDateTime,
      //Do not use ValidityEndDateTime, use ValidityEndDate instead
      cast ( BPAddressIndependentMobile.ValidityEndDate as ad_valto ) as ValidityEndDateTime, 
      BPAddressIndependentMobile.ValidityStartDate,
      BPAddressIndependentMobile.ValidityEndDate,
      
      /* Associations */
      _BusinessPartner,
      _BusinessPartner.AuthorizationGroup,
      _AddressCommunicationRemark.CommunicationRemarkText  as AddressCommunicationRemarkText
     
}
where 
  (
       PhoneNumberType = '3'
    or PhoneNumberType = '2'
  ) //Only return Mobile numbers
  and _BusinessPartner.BusinessPartner is not null;
```
