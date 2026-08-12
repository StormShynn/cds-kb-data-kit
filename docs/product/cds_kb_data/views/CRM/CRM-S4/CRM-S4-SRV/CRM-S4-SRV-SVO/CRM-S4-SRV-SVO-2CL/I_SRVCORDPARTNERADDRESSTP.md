---
name: I_SRVCORDPARTNERADDRESSTP
description: "Srvcordpartneraddresstp"
app_component: CRM-S4-SRV-SVO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - address
  - partner
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDPARTNERADDRESSTP

**Srvcordpartneraddresstp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceOrder` | ✓ | |  |  |  |  |
| `CustMgmtPartnerFunction` | ✓ | |  |  |  |  |
| `CustMgmtBusinessPartner` | ✓ | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `CorrespondenceLanguage` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `DistrictName` |  | |  |  |  |  |
| `EmailAddress` |  | |  |  |  |  |
| `FaxAreaCodeSubscriberNumber` |  | |  |  |  |  |
| `FaxExtensionNumber` |  | |  |  |  |  |
| `FaxNumberCountry` |  | |  |  |  |  |
| `FormOfAddress` |  | |  |  |  |  |
| `HouseNumber` |  | |  |  |  |  |
| `MobileNumber` |  | |  |  |  |  |
| `MobilePhoneCountry` |  | |  |  |  |  |
| `OrganizationName1` |  | |  |  |  |  |
| `OrganizationName2` |  | |  |  |  |  |
| `OrganizationName3` |  | |  |  |  |  |
| `OrganizationName4` |  | |  |  |  |  |
| `PersonFamilyName` |  | |  |  |  |  |
| `PersonGivenName` |  | |  |  |  |  |
| `PhoneExtensionNumber` |  | |  |  |  |  |
| `PhoneNumber` |  | |  |  |  |  |
| `POBox` |  | |  |  |  |  |
| `POBoxPostalCode` |  | |  |  |  |  |
| `PostalCode` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `StreetName` |  | |  |  |  |  |
| `StreetPrefixName1` |  | |  |  |  |  |
| `StreetPrefixName2` |  | |  |  |  |  |
| `StreetSuffixName1` |  | |  |  |  |  |
| `StreetSuffixName2` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `TransportZone` |  | |  |  |  |  |
| `_SrvcOrdPartnerTP` | | ✓ | | | | |
| `_ServiceOrderTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Partner Address For Service Order - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
 lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}
//@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdPartnerAddressTP
  as projection on R_SrvcOrdPartnerAddressTP
{
  key ServiceOrder,
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
      _SrvcOrdPartnerTP : redirected to parent I_SrvcOrdPartnerTP,
      _ServiceOrderTP   : redirected to I_ServiceOrderTP

}
```
