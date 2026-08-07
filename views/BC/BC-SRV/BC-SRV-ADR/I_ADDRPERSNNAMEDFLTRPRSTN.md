---
name: I_ADDRPERSNNAMEDFLTRPRSTN
description: Addrpersnnamedfltrprstn
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRPERSNNAMEDFLTRPRSTN

**Addrpersnnamedfltrprstn**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressPersonID` | ✓ | |  |  | `CHAR(10)` | Person Number |
| `AddressRepresentationCode` |  | |  |  | `CHAR(1)` | Version ID for International Addresses |
| `FormOfAddress` |  | |  |  | `CHAR(4)` | Form-of-Address Key |
| `GivenName` |  | |  |  | `CHAR(40)` | First Name |
| `FamilyName` |  | |  |  | `CHAR(40)` | Last Name |
| `PersonBirthName` |  | |  |  | `CHAR(40)` | Name of person at birth |
| `PersonMiddleName` |  | |  |  | `CHAR(40)` | Middle name or second forename of a person |
| `SecondFamilyName` |  | |  |  | `CHAR(40)` | Other Last Name of a Person |
| `AcademicTitle` |  | |  |  | `CHAR(4)` | Academic Title: Key |
| `AcademicTitle2` |  | |  |  | `CHAR(4)` | Second academic title (key) |
| `FamilyNamePrefix` |  | |  |  | `CHAR(4)` | Name Prefix (Key) |
| `FamilyNameSecondPrefix` |  | |  |  | `CHAR(4)` | 2nd name prefix (key) |
| `PersonNameSupplementCode` |  | |  |  | `CHAR(4)` | Name supplement, e.g. noble title (key) |
| `PersonNickname` |  | |  |  | `CHAR(40)` | Nickname or name used |
| `NameInitials` |  | |  |  | `CHAR(10)` | "Middle Initial" or personal initials |
| `PersonFullName` |  | |  |  | `CHAR(80)` | Full Name of Person |
| `CorrespondenceLanguage` |  | |  |  | `LANG(1)` | Language Key |
| `AddressPersonSearchTerm1` |  | |  |  | `CHAR(20)` | Search Term 1 |
| `AddressPersonSearchTerm2` |  | |  |  | `CHAR(20)` | Search Term 2 |
| `_DfltRprstnPerson` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DfltRprstnPerson` | `I_AddressPersonName` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Default Representation for Person Name'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.representativeKey: 'AddressPersonID'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_AddrPersnNameDfltRprstn 
   as select from I_AddressPersonName as Person
   association [0..*] to I_AddressPersonName as _DfltRprstnPerson on $projection.AddressPersonID = _DfltRprstnPerson.AddressPersonID
                                                                   and _DfltRprstnPerson.AddressRepresentationCode is not initial
{
key Person.AddressPersonID,
    @ObjectModel.foreignKey.association: '_AddressRepresentationCode'
    Person.AddressRepresentationCode,
    @ObjectModel.foreignKey.association: '_FormOfAddress'
    Person.FormOfAddress,
    Person.GivenName,
    Person.FamilyName,
    Person.PersonBirthName,
    Person.PersonMiddleName,
    Person.SecondFamilyName,
    @ObjectModel.foreignKey.association: '_AcademicTitle'
    Person.AcademicTitle,
    @ObjectModel.foreignKey.association: '_AcademicTitle2'
    Person.AcademicTitle2,
    @ObjectModel.foreignKey.association: '_FamilyNamePrefix'
    Person.FamilyNamePrefix,
    @ObjectModel.foreignKey.association: '_FamilyNameSecondPrefix'
    Person.FamilyNameSecondPrefix,
    @ObjectModel.foreignKey.association: '_NameSupplement'
    Person.PersonNameSupplementCode,
    Person.PersonNickname,
    Person.NameInitials,
    Person.PersonFullName,
    Person.CorrespondenceLanguage,
    Person.AddressPersonSearchTerm1,
    Person.AddressPersonSearchTerm2,
    Person._AcademicTitle,
    Person._AcademicTitle2,
    Person._AddressRepresentationCode,
    Person._FamilyNamePrefix,
    Person._FamilyNameSecondPrefix,
    Person._FormOfAddress,
    Person._NameSupplement,
    _DfltRprstnPerson  
}
where
  AddressRepresentationCode is initial
```
