---
name: I_SRVCCONTRPARTNERADDRESSTP
description: Srvccontrpartneraddresstp
app_component: CRM-S4-SRV-CTR-2CL
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
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SRVCCONTRPARTNERADDRESSTP

**Srvccontrpartneraddresstp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceContract` | ✓ | |  |  |
| `CustMgmtPartnerFunction` | ✓ | |  |  |
| `CustMgmtBusinessPartner` | ✓ | |  |  |
| `CityName` |  | |  |  |
| `Country` |  | |  |  |
| `EmailAddress` |  | |  |  |
| `FaxAreaCodeSubscriberNumber` |  | |  |  |
| `FaxExtensionNumber` |  | |  |  |
| `FaxNumberCountry` |  | |  |  |
| `HouseNumber` |  | |  |  |
| `MobileNumber` |  | |  |  |
| `MobilePhoneCountry` |  | |  |  |
| `OrganizationName1` |  | |  |  |
| `OrganizationName2` |  | |  |  |
| `OrganizationName3` |  | |  |  |
| `OrganizationName4` |  | |  |  |
| `PhoneExtensionNumber` |  | |  |  |
| `PhoneNumber` |  | |  |  |
| `PhoneNumberCountry` |  | |  |  |
| `PostalCode` |  | |  |  |
| `Region` |  | |  |  |
| `StreetName` |  | |  |  |
| `TaxJurisdiction` |  | |  |  |
| `_SrvcContrPartnerTP` | | ✓ | | |
| `_ServiceContractTP` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Partner Address in Service Contract - TP'

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
  semanticKey: [ 'ServiceContract', 'CustMgmtPartnerFunction', 'CustMgmtBusinessPartner'  ],
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

define view entity I_SrvcContrPartnerAddressTP
  as projection on R_SrvcContrPartnerAddressTP
{
  key ServiceContract,
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
      TaxJurisdiction,

      /* Associations */
      _SrvcContrPartnerTP : redirected to parent I_SrvcContrPartnerTP,
      _ServiceContractTP  : redirected to I_ServiceContractTP

}
```
