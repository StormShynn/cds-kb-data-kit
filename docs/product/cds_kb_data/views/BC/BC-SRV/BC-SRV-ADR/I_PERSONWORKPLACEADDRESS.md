---
name: I_PERSONWORKPLACEADDRESS
description: "Personworkplaceaddress"
app_component: BC-SRV-ADR
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
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - address
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_PERSONWORKPLACEADDRESS

**Personworkplaceaddress**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
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
| `AddressID` | ✓ | |  |  | `CHAR(10)` | Address Number |
| `AddressPersonID` | ✓ | |  |  | `CHAR(10)` | Person Number |
| `AddressRepresentationCode` | ✓ | |  |  | `CHAR(1)` | Version ID for International Addresses |
| `CorrespondenceLanguage` |  | | `_PersonName` | `CorrespondenceLanguage` | `LANG(1)` | Language Key |
| `GivenName` |  | | `_PersonName` | `GivenName` | `CHAR(40)` | First Name |
| `FamilyName` |  | | `_PersonName` | `FamilyName` | `CHAR(40)` | Last Name |
| `PersonBirthName` |  | | `_PersonName` | `PersonBirthName` | `CHAR(40)` | Name of person at birth |
| `PersonMiddleName` |  | | `_PersonName` | `PersonMiddleName` | `CHAR(40)` | Middle name or second forename of a person |
| `SecondFamilyName` |  | | `_PersonName` | `SecondFamilyName` | `CHAR(40)` | Other Last Name of a Person |
| `AcademicTitle` |  | | `_PersonName` | `AcademicTitle` | `CHAR(4)` | Academic Title: Key |
| `AcademicTitle2` |  | | `_PersonName` | `AcademicTitle2` | `CHAR(4)` | Second academic title (key) |
| `FamilyNamePrefix` |  | | `_PersonName` | `FamilyNamePrefix` | `CHAR(4)` | Name Prefix (Key) |
| `FamilyNameSecondPrefix` |  | | `_PersonName` | `FamilyNameSecondPrefix` | `CHAR(4)` | 2nd name prefix (key) |
| `PersonNameSupplementCode` |  | | `_PersonName` | `PersonNameSupplementCode` | `CHAR(4)` | Name supplement, e.g. noble title (key) |
| `PersonNickname` |  | | `_PersonName` | `PersonNickname` | `CHAR(40)` | Nickname or name used |
| `NameInitials` |  | | `_PersonName` | `NameInitials` | `CHAR(10)` | "Middle Initial" or personal initials |
| `PersonFullName` |  | | `_PersonName` | `PersonFullName` | `CHAR(80)` | Full Name of Person |
| `FormOfAddress` |  | | `_PersonName` | `FormOfAddress` | `CHAR(4)` | Form-of-Address Key |
| `WorkplaceBuilding` |  | |  |  | `CHAR(10)` | Building (number or code) |
| `WorkplaceFloor` |  | |  |  | `CHAR(10)` | Floor in Building |
| `WorkplaceRoomNumber` |  | |  |  | `CHAR(10)` | Room or Apartment Number |
| `WorkplaceFunctionalTitleName` |  | |  |  | `CHAR(40)` | Function |
| `WorkplaceDepartmentName` |  | |  |  | `CHAR(40)` | Department |
| `WorkplacePrfrdCommMediumType` |  | |  |  | `CHAR(3)` | Communication Method (Key) (Business Address Services) |
| `WorkplaceCorrespncShortName` |  | |  |  | `CHAR(10)` | Short name for correspondence |
| `WorkplaceInhouseMail` |  | |  |  | `CHAR(10)` | Internal Mail Postal Code |
| `_OrganizationAddress` | | ✓ | | | | |
| `_EmailAddress` | | ✓ | | | | |
| `_CurrentDfltEmailAddress` | | ✓ | | | | |
| `_PhoneNumber` | | ✓ | | | | |
| `_CurrentDfltLandlinePhoneNmbr` | | ✓ | | | | |
| `_CurrentDfltMobilePhoneNumber` | | ✓ | | | | |
| `_FaxNumber` | | ✓ | | | | |
| `_CurrentDfltFaxNumber` | | ✓ | | | | |
| `_UniformResourceIdentifier` | | ✓ | | | | |
| `_MainWebsiteURL` | | ✓ | | | | |
| `_NameSupplement` | | ✓ | | | | |
| `_FamilyNamePrefix` | | ✓ | | | | |
| `_FamilyNameSecondPrefix` | | ✓ | | | | |
| `_AcademicTitle` | | ✓ | | | | |
| `_AcademicTitle2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OrganizationAddress` | `I_OrganizationAddress` | [1] |
| `_PersonName` | `I_AddressPersonName` | [1] |
| `_EmailAddress` | `I_AddressEmailAddress_2` | [0..*] |
| `_CurrentDfltEmailAddress` | `I_AddrCurDefaultEmailAddress` | [0..1] |
| `_PhoneNumber` | `I_AddressPhoneNumber_2` | [0..*] |
| `_CurrentDfltLandlinePhoneNmbr` | `I_AddrCurDfltLandlinePhoneNmbr` | [0..1] |
| `_CurrentDfltMobilePhoneNumber` | `I_AddrCurDfltMobilePhoneNumber` | [0..1] |
| `_FaxNumber` | `I_AddressFaxNumber_2` | [0..*] |
| `_CurrentDfltFaxNumber` | `I_AddrCurDefaultFaxNumber` | [0..1] |
| `_UniformResourceIdentifier` | `I_AddressURI` | [0..*] |
| `_MainWebsiteURL` | `I_AddressMainWebsiteURL` | [0..1] |
| `_NameSupplement` | `I_NameSupplement` | [0..1] |
| `_FamilyNamePrefix` | `I_FamilyNamePrefix` | [0..1] |
| `_FamilyNameSecondPrefix` | `I_FamilyNamePrefix` | [0..1] |
| `_AcademicTitle` | `I_AcademicTitle` | [0..1] |
| `_AcademicTitle2` | `I_AcademicTitle` | [0..1] |

## Source Code

```abap
@Analytics : {
          dataCategory: #FACT,
          dataExtraction: {
           enabled: true }
           }           
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.privilegedAssociations: ['_OrganizationAddress', '_EmailAddress', '_CurrentDfltEmailAddress', '_PhoneNumber', '_CurrentDfltLandlinePhoneNmbr', '_CurrentDfltMobilePhoneNumber', '_FaxNumber', '_CurrentDfltFaxNumber', '_UniformResourceIdentifier', '_MainWebsiteURL']
@EndUserText.label: 'Corporate Workplace Address of a Person'
//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
//@ObjectModel.representativeKey: 'AddressID'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PersonWorkplaceAddress'
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_PersonWorkplaceAddress
  as select from I_AddressWorkplaceDetails

  association [1]    to I_OrganizationAddress          as _OrganizationAddress          on  _OrganizationAddress.AddressID                 = $projection.AddressID
                                                                                        and _OrganizationAddress.AddressRepresentationCode = $projection.AddressRepresentationCode
                                                                                        and _OrganizationAddress.AddressPersonID           = ''

  association [1]    to I_AddressPersonName            as _PersonName                   on  _PersonName.AddressPersonID           = $projection.AddressPersonID
                                                                                        and _PersonName.AddressRepresentationCode = $projection.AddressRepresentationCode

  association [0..*] to I_AddressEmailAddress_2        as _EmailAddress                 on  _EmailAddress.AddressID       = $projection.AddressID
                                                                                        and _EmailAddress.AddressPersonID = $projection.AddressPersonID

  association [0..1] to I_AddrCurDefaultEmailAddress   as _CurrentDfltEmailAddress      on  _CurrentDfltEmailAddress.AddressID       = $projection.AddressID
                                                                                        and _CurrentDfltEmailAddress.AddressPersonID = $projection.AddressPersonID

  association [0..*] to I_AddressPhoneNumber_2         as _PhoneNumber                  on  _PhoneNumber.AddressID       = $projection.AddressID
                                                                                        and _PhoneNumber.AddressPersonID = $projection.AddressPersonID

  association [0..1] to I_AddrCurDfltLandlinePhoneNmbr as _CurrentDfltLandlinePhoneNmbr on  _CurrentDfltLandlinePhoneNmbr.AddressID       = $projection.AddressID
                                                                                        and _CurrentDfltLandlinePhoneNmbr.AddressPersonID = $projection.AddressPersonID

  association [0..1] to I_AddrCurDfltMobilePhoneNumber as _CurrentDfltMobilePhoneNumber on  _CurrentDfltMobilePhoneNumber.AddressID       = $projection.AddressID
                                                                                        and _CurrentDfltMobilePhoneNumber.AddressPersonID = $projection.AddressPersonID

  association [0..*] to I_AddressFaxNumber_2           as _FaxNumber                    on  _FaxNumber.AddressID       = $projection.AddressID
                                                                                        and _FaxNumber.AddressPersonID = $projection.AddressPersonID

  association [0..1] to I_AddrCurDefaultFaxNumber      as _CurrentDfltFaxNumber         on  _CurrentDfltFaxNumber.AddressID       = $projection.AddressID
                                                                                        and _CurrentDfltFaxNumber.AddressPersonID = $projection.AddressPersonID

  association [0..*] to I_AddressURI                   as _UniformResourceIdentifier    on  _UniformResourceIdentifier.AddressID       = $projection.AddressID
                                                                                        and _UniformResourceIdentifier.AddressPersonID = $projection.AddressPersonID

  association [0..1] to I_AddressMainWebsiteURL        as _MainWebsiteURL               on  _MainWebsiteURL.AddressID       = $projection.AddressID
                                                                                        and _MainWebsiteURL.AddressPersonID = $projection.AddressPersonID

  association [0..1] to I_NameSupplement               as _NameSupplement               on  $projection.personnamesupplementcode = _NameSupplement.PersonNameSupplementCode

  association [0..1] to I_FamilyNamePrefix             as _FamilyNamePrefix             on  $projection.familynameprefix = _FamilyNamePrefix.FamilyNamePrefix

  association [0..1] to I_FamilyNamePrefix             as _FamilyNameSecondPrefix       on  $projection.familynamesecondprefix = _FamilyNameSecondPrefix.FamilyNamePrefix

  association [0..1] to I_AcademicTitle                as _AcademicTitle                on  $projection.academictitle = _AcademicTitle.AcademicTitle

  association [0..1] to I_AcademicTitle                as _AcademicTitle2               on  $projection.academictitle2 = _AcademicTitle2.AcademicTitle


{
  key I_AddressWorkplaceDetails.AddressID,
  key I_AddressWorkplaceDetails.AddressPersonID,
  key I_AddressWorkplaceDetails.AddressRepresentationCode,

      _PersonName.CorrespondenceLanguage,
      _PersonName.GivenName,
      _PersonName.FamilyName,
      _PersonName.PersonBirthName,
      _PersonName.PersonMiddleName,
      _PersonName.SecondFamilyName,
      @ObjectModel.foreignKey.association: '_AcademicTitle'
      @ObjectModel.sapObjectNodeTypeReference: 'AcademicTitle'
      _PersonName.AcademicTitle,
      @ObjectModel.foreignKey.association: '_AcademicTitle2'
      @ObjectModel.sapObjectNodeTypeReference: 'AcademicTitle'
      _PersonName.AcademicTitle2,
      @ObjectModel.foreignKey.association: '_FamilyNamePrefix'
      @ObjectModel.sapObjectNodeTypeReference: 'AcademicTitle'
      _PersonName.FamilyNamePrefix,
      @ObjectModel.foreignKey.association: '_FamilyNameSecondPrefix'
      @ObjectModel.sapObjectNodeTypeReference: 'AcademicTitle'
      _PersonName.FamilyNameSecondPrefix,
      @ObjectModel.foreignKey.association: '_NameSupplement'
      @ObjectModel.sapObjectNodeTypeReference: 'AcademicTitle'
      _PersonName.PersonNameSupplementCode,
      _PersonName.PersonNickname,
      _PersonName.NameInitials,
      _PersonName.PersonFullName,
      _PersonName.FormOfAddress,

      I_AddressWorkplaceDetails.WorkplaceBuilding,
      I_AddressWorkplaceDetails.WorkplaceFloor,
      I_AddressWorkplaceDetails.WorkplaceRoomNumber,
      I_AddressWorkplaceDetails.WorkplaceFunctionalTitleName,
      I_AddressWorkplaceDetails.WorkplaceDepartmentName,
      I_AddressWorkplaceDetails.WorkplacePrfrdCommMediumType,
      I_AddressWorkplaceDetails.WorkplaceCorrespncShortName,
      I_AddressWorkplaceDetails.WorkplaceInhouseMail,

      _EmailAddress,
      _PhoneNumber,
      _FaxNumber,
      _UniformResourceIdentifier,

      _CurrentDfltEmailAddress,
      _CurrentDfltLandlinePhoneNmbr,
      _CurrentDfltMobilePhoneNumber,
      _CurrentDfltFaxNumber,
      _MainWebsiteURL,

      _OrganizationAddress,
      _NameSupplement,
      _FamilyNamePrefix,
      _FamilyNameSecondPrefix,
      _AcademicTitle,
      _AcademicTitle2
}
where
  PersonAddressObjectType = 'C'
```
