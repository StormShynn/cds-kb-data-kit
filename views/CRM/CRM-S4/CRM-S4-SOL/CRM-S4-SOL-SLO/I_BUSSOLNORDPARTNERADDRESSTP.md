---
name: I_BUSSOLNORDPARTNERADDRESSTP
description: Bussolnordpartneraddresstp
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - address
  - partner
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDPARTNERADDRESSTP

**Bussolnordpartneraddresstp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  |  |
| `CustMgmtPartnerFunction` | ✓ | |  |  |
| `CustMgmtBusinessPartner` | ✓ | |  |  |
| `AddressID` |  | |  |  |
| `AddressPersonID` |  | |  |  |
| `AddressObjectType` |  | |  |  |
| `AddresseeFullName` |  | |  |  |
| `CityName` |  | |  |  |
| `CorrespondenceLanguage` |  | |  |  |
| `Country` |  | |  |  |
| `DistrictName` |  | |  |  |
| `EmailAddress` |  | |  |  |
| `FaxAreaCodeSubscriberNumber` |  | |  |  |
| `FaxExtensionNumber` |  | |  |  |
| `FaxNumberCountry` |  | |  |  |
| `FormOfAddress` |  | |  |  |
| `HouseNumber` |  | |  |  |
| `MobileNumber` |  | |  |  |
| `MobilePhoneCountry` |  | |  |  |
| `OrganizationName1` |  | |  |  |
| `OrganizationName2` |  | |  |  |
| `OrganizationName3` |  | |  |  |
| `OrganizationName4` |  | |  |  |
| `PersonFamilyName` |  | |  |  |
| `PersonGivenName` |  | |  |  |
| `PhoneExtensionNumber` |  | |  |  |
| `PhoneNumber` |  | |  |  |
| `PhoneNumberCountry` |  | |  |  |
| `POBox` |  | |  |  |
| `POBoxPostalCode` |  | |  |  |
| `PostalCode` |  | |  |  |
| `Region` |  | |  |  |
| `StreetName` |  | |  |  |
| `StreetPrefixName1` |  | |  |  |
| `StreetPrefixName2` |  | |  |  |
| `StreetSuffixName1` |  | |  |  |
| `StreetSuffixName2` |  | |  |  |
| `TaxJurisdiction` |  | |  |  |
| `TransportZone` |  | |  |  |
| `_BusinessSolutionOrderTP` | | ✓ | | |
| `_BusSolnOrdPartnerTP` | | ✓ | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel.usageType: {
  dataClass:      #TRANSACTIONAL,
  serviceQuality: #C,
  sizeCategory:   #L
}

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Business Soln Order Partner Address - TP'

define view entity I_BusSolnOrdPartnerAddressTP
  as projection on R_BusSolnOrdPartnerAddressTP
{
  key BusinessSolutionOrder,
  key CustMgmtPartnerFunction,
  key CustMgmtBusinessPartner,
      AddressID,
      AddressPersonID,
      AddressObjectType,
      AddresseeFullName,
      CityName,
      CorrespondenceLanguage,
      Country,
      DistrictName,
      EmailAddress,
      FaxAreaCodeSubscriberNumber,
      FaxExtensionNumber,
      FaxNumberCountry,
      FormOfAddress,
      HouseNumber,
      MobileNumber,
      MobilePhoneCountry,
      OrganizationName1,
      OrganizationName2,
      OrganizationName3,
      OrganizationName4,
      PersonFamilyName,
      PersonGivenName,
      PhoneExtensionNumber,
      PhoneNumber,
      PhoneNumberCountry,
      POBox,
      POBoxPostalCode,
      PostalCode,
      Region,
      StreetName,
      StreetPrefixName1,
      StreetPrefixName2,
      StreetSuffixName1,
      StreetSuffixName2,
      TaxJurisdiction,
      TransportZone,

      /* associations */
      _BusinessSolutionOrderTP : redirected to I_BusinessSolutionOrderTP,
      _BusSolnOrdPartnerTP     : redirected to parent I_BusSolnOrdPartnerTP
}
```
