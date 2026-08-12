---
name: I_SRVCCONTRITMPARTNERADDRESSTP
description: "Srvccontritmpartneraddresstp"
app_component: CRM-S4-SRV-CTR-2CL
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
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SRVCCONTRITMPARTNERADDRESSTP

**Srvccontritmpartneraddresstp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceContract` | ✓ | |  |  |  |  |
| `ServiceContractItem` | ✓ | |  |  |  |  |
| `CustMgmtPartnerFunction` | ✓ | |  |  |  |  |
| `CustMgmtBusinessPartner` | ✓ | |  |  |  |  |
| `CityName` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `EmailAddress` |  | |  |  |  |  |
| `FaxAreaCodeSubscriberNumber` |  | |  |  |  |  |
| `FaxExtensionNumber` |  | |  |  |  |  |
| `FaxNumberCountry` |  | |  |  |  |  |
| `HouseNumber` |  | |  |  |  |  |
| `MobileNumber` |  | |  |  |  |  |
| `MobilePhoneCountry` |  | |  |  |  |  |
| `OrganizationName1` |  | |  |  |  |  |
| `OrganizationName2` |  | |  |  |  |  |
| `OrganizationName3` |  | |  |  |  |  |
| `OrganizationName4` |  | |  |  |  |  |
| `PhoneExtensionNumber` |  | |  |  |  |  |
| `PhoneNumber` |  | |  |  |  |  |
| `PhoneNumberCountry` |  | |  |  |  |  |
| `PostalCode` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `StreetName` |  | |  |  |  |  |
| `StreetPrefixName1` |  | |  |  |  |  |
| `StreetPrefixName2` |  | |  |  |  |  |
| `StreetSuffixName1` |  | |  |  |  |  |
| `StreetSuffixName2` |  | |  |  |  |  |
| `TaxJurisdiction` |  | |  |  |  |  |
| `_SrvcContrItemPartnerTP` | | ✓ | | | | |
| `_ServiceContractTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Partner Address in Srvc Contr Item - TP'

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
  semanticKey: [ 'ServiceContract', 'ServiceContractItem', 'CustMgmtPartnerFunction', 'CustMgmtBusinessPartner'  ],
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
    }
}
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@Metadata: {
  ignorePropagatedAnnotations: true
}

@Feature: 'CRMS4_SC_API_PARTNER_ADDRESS'

define view entity I_SrvcContrItmPartnerAddressTP
  as projection on R_SrvcContrItmPartnerAddressTP as SrvcContrItmPartnerAddress
{

  key ServiceContract,
  key ServiceContractItem,
  key CustMgmtPartnerFunction,
  key CustMgmtBusinessPartner,

      CityName,
      Country,
      EmailAddress,
      FaxAreaCodeSubscriberNumber,
      FaxExtensionNumber,
      FaxNumberCountry,
      HouseNumber,
      MobileNumber,
      MobilePhoneCountry,
      OrganizationName1,
      OrganizationName2,
      OrganizationName3,
      OrganizationName4,
      PhoneExtensionNumber,
      PhoneNumber,
      PhoneNumberCountry,
      PostalCode,
      Region,
      StreetName,
      StreetPrefixName1,
      StreetPrefixName2,
      StreetSuffixName1,
      StreetSuffixName2,
      TaxJurisdiction,

      /* Associations */
      _SrvcContrItemPartnerTP : redirected to parent I_SrvcContrItemPartnerTP,
      _ServiceContractTP      : redirected to I_ServiceContractTP
}
```
