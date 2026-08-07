---
name: I_BPADDRESSINDEPENDENTWEBSITE
description: "Bpaddressindependentwebsite"
app_component: AP-MD-BP-RAP
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
  - component:AP-MD-BP-RAP
  - lob:Other
---
# I_BPADDRESSINDEPENDENTWEBSITE

**Bpaddressindependentwebsite**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP-RAP` |
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
| `ValidityStartDate` |  | |  | `cast ( '00010101' as abap.dats)` | `DATS(8)` |  |
| `IsDefaultURLAddress` |  | |  | `URLIsCurrentDefault` | `CHAR(1)` | Flag: this address is the default address |
| `CommNumberIsNotUsed` |  | |  | `cast ( '' as ad_flnouse )` | `CHAR(1)` | Flag: This Communication Number is Not Used |
| `UniformResourceIdentifierType` |  | |  | `AddressManagementURIType` | `CHAR(3)` | URI type flag |
| `SearchURLAddress` |  | |  | `cast ( '' as ad_uri2 )` | `CHAR(50)` | URI address search field |
| `URLFieldLength` |  | |  | `cast ('00000' as abap.int4 )` | `INT4(10)` |  |
| `WebsiteURL` |  | |  | `UniformResourceIdentifier` | `STRI(2048)` |  |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'P_BPADDINDURI'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY 
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations:  [ '_AddressCommunicationRemark' ]
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'AddressID' // Need to check
@EndUserText.label: 'BP Address independent Website'
define view I_BPAddressIndependentWebsite
  as select from I_AddressURI //P_AddressHomepageURL
  association [1..1] to I_BusinessPartner       as _BusinessPartner       on $projection.AddressID = _BusinessPartner.IndependentAddressID
 // association [0..*] to I_BPDataControllerUsage as _BPDataControllerUsage on $projection.BusinessPartner = _BPDataControllerUsage.BusinessPartner

{
  key _BusinessPartner.BusinessPartner       as BusinessPartner,
  key I_AddressURI.AddressID,
  key I_AddressURI.AddressPersonID           as Person,
  key I_AddressURI.CommMediumSequenceNumber  as OrdinalNumber,
      cast ( '00010101' as abap.dats)        as ValidityStartDate,
      I_AddressURI.URLIsCurrentDefault       as IsDefaultURLAddress,
      cast ( '' as ad_flnouse )              as CommNumberIsNotUsed,
      I_AddressURI.AddressManagementURIType  as UniformResourceIdentifierType,
      cast ( '' as ad_uri2 )                 as SearchURLAddress,
      cast ('00000' as abap.int4 )           as URLFieldLength,
      I_AddressURI.UniformResourceIdentifier as WebsiteURL,

      _BusinessPartner,
      I_AddressURI._AddressCommunicationRemark,
 //     _BPDataControllerUsage,
      I_AddressURI._AddressManagementURIType
}
where
  _BusinessPartner.BusinessPartner is not null;
```
