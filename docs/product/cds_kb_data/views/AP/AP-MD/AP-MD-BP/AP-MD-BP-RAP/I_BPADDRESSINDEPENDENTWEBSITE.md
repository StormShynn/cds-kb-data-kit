---
name: I_BPADDRESSINDEPENDENTWEBSITE
description: "Bpaddressindependentwebsite"
app_component: AP-MD-BP-RAP
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
