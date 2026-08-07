---
name: I_SRVCORDITEMPARTNERADDRESSTP
description: Srvcorditempartneraddresstp
app_component: CRM-S4-SRV-SVO-2CL
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
  - item-level
  - partner
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDITEMPARTNERADDRESSTP

**Srvcorditempartneraddresstp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceOrder` | ✓ | |  |  |
| `ServiceOrderItem` | ✓ | |  |  |
| `CustMgmtPartnerFunction` | ✓ | |  |  |
| `CustMgmtBusinessPartner` | ✓ | |  |  |
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
| `_SrvcOrdItmPartnerTP` | | ✓ | | |
| `_ServiceOrderTP` | | ✓ | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@EndUserText.label: 'Partner Address For Srvc Order Item - TP'

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {

   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdItemPartnerAddressTP
  as projection on R_SrvcOrdItemPartnerAddressTP
{
  key ServiceOrder,
  key ServiceOrderItem,
  key CustMgmtPartnerFunction,
  key CustMgmtBusinessPartner,
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
      //  PhoneNumberCountry,
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
      /* Associations */
      _SrvcOrdItmPartnerTP : redirected to parent I_SrvcOrdItmPartnerTP,
      _ServiceOrderTP      : redirected to I_ServiceOrderTP
      
      
}
```
