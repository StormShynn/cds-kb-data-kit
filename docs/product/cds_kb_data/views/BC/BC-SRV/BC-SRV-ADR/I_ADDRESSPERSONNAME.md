---
name: I_ADDRESSPERSONNAME
description: "Addresspersonname"
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
  - address
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRESSPERSONNAME

**Addresspersonname**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressPersonID` | ✓ | |  | `persnumber` | `CHAR(10)` | Person Number |
| `AddressRepresentationCode` | ✓ | |  | `nation` | `CHAR(1)` | Version ID for International Addresses |
| `FormOfAddress` |  | |  | `title` | `CHAR(4)` | Form-of-Address Key |
| `GivenName` |  | |  | `name_first` | `CHAR(40)` | First Name |
| `FamilyName` |  | |  | `name_last` | `CHAR(40)` | Last Name |
| `PersonBirthName` |  | |  | `name2` | `CHAR(40)` | Name of person at birth |
| `PersonMiddleName` |  | |  | `namemiddle` | `CHAR(40)` | Middle name or second forename of a person |
| `SecondFamilyName` |  | |  | `name_last2` | `CHAR(40)` | Other Last Name of a Person |
| `AcademicTitle` |  | |  | `title_aca1` | `CHAR(4)` | Academic Title: Key |
| `AcademicTitle2` |  | |  | `title_aca2` | `CHAR(4)` | Second academic title (key) |
| `FamilyNamePrefix` |  | |  | `prefix1` | `CHAR(4)` | Name Prefix (Key) |
| `FamilyNameSecondPrefix` |  | |  | `prefix2` | `CHAR(4)` | 2nd name prefix (key) |
| `PersonNameSupplementCode` |  | |  | `title_sppl` | `CHAR(4)` | Name supplement, e.g. noble title (key) |
| `PersonNickname` |  | |  | `nickname` | `CHAR(40)` | Nickname or name used |
| `NameInitials` |  | |  | `initials` | `CHAR(10)` | "Middle Initial" or personal initials |
| `PersonFullName` |  | |  | `name_text` | `CHAR(80)` | Full Name of Person |
| `CorrespondenceLanguage` |  | |  | `langu` | `LANG(1)` | Language Key |
| `AddressPersonSearchTerm1` |  | |  | `sort1` | `CHAR(20)` | Search Term 1 |
| `AddressPersonSearchTerm2` |  | |  | `sort2` | `CHAR(20)` | Search Term 2 |
| `PersonFullNameFormattingCode` |  | |  | `nameformat` | `CHAR(2)` | Name format |
| `PersonFullNameFormattingCntry` |  | |  | `namcountry` | `CHAR(3)` | Country/Region for Name Format Rule |
| `addresscreatedbyuser` |  | |  |  | `CHAR(12)` | Created By User |
| `addresscreatedondatetime` |  | |  |  | `UTCL(27)` | Creation Date Time |
| `addresschangedbyuser` |  | |  |  | `CHAR(12)` | Last Changed By User |
| `addresschangedondatetime` |  | |  |  | `UTCL(27)` | Last Change Date Time |
| `converted` |  | |  |  | `CHAR(1)` | Generation Status of 'Full Name of Person' Field |
| `_FormOfAddress` | | ✓ | | | | |
| `_NameSupplement` | | ✓ | | | | |
| `_FamilyNamePrefix` | | ✓ | | | | |
| `_FamilyNameSecondPrefix` | | ✓ | | | | |
| `_AcademicTitle` | | ✓ | | | | |
| `_AcademicTitle2` | | ✓ | | | | |
| `_AddressRepresentationCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FormOfAddress` | `I_FormOfAddress` | [0..1] |
| `_NameSupplement` | `I_NameSupplement` | [0..1] |
| `_FamilyNamePrefix` | `I_FamilyNamePrefix` | [0..1] |
| `_FamilyNameSecondPrefix` | `I_FamilyNamePrefix` | [0..1] |
| `_AcademicTitle` | `I_AcademicTitle` | [0..1] |
| `_AcademicTitle2` | `I_AcademicTitle` | [0..1] |
| `_AddressRepresentationCode` | `I_AddressRepresentation` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Person Name'
//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.representativeKey: 'AddressPersonID'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_AddressPersonName
  as select from adrp
  association [0..1] to I_FormOfAddress    as _FormOfAddress          on $projection.FormOfAddress = _FormOfAddress.FormOfAddress

  association [0..1] to I_NameSupplement   as _NameSupplement         on $projection.PersonNameSupplementCode = _NameSupplement.PersonNameSupplementCode

  association [0..1] to I_FamilyNamePrefix as _FamilyNamePrefix       on $projection.FamilyNamePrefix = _FamilyNamePrefix.FamilyNamePrefix

  association [0..1] to I_FamilyNamePrefix as _FamilyNameSecondPrefix on $projection.FamilyNameSecondPrefix = _FamilyNameSecondPrefix.FamilyNamePrefix

  association [0..1] to I_AcademicTitle    as _AcademicTitle          on $projection.AcademicTitle = _AcademicTitle.AcademicTitle

  association [0..1] to I_AcademicTitle    as _AcademicTitle2         on $projection.AcademicTitle2 = _AcademicTitle2.AcademicTitle
  
  association [0..1] to I_AddressRepresentation as _AddressRepresentationCode  on  $projection.AddressRepresentationCode = _AddressRepresentationCode.AddressRepresentationCode
{
  key persnumber as AddressPersonID,
  @ObjectModel.foreignKey.association: '_AddressRepresentationCode'
  key nation     as AddressRepresentationCode,

      @ObjectModel.foreignKey.association: '_FormOfAddress'
      title      as FormOfAddress,
      name_first as GivenName,
      name_last  as FamilyName,
      name2      as PersonBirthName,
      namemiddle as PersonMiddleName,
      name_last2 as SecondFamilyName,
      @ObjectModel.foreignKey.association: '_AcademicTitle'
      title_aca1 as AcademicTitle,
      @ObjectModel.foreignKey.association: '_AcademicTitle2'
      title_aca2 as AcademicTitle2,
      @ObjectModel.foreignKey.association: '_FamilyNamePrefix'
      prefix1    as FamilyNamePrefix,
      @ObjectModel.foreignKey.association: '_FamilyNameSecondPrefix'
      prefix2    as FamilyNameSecondPrefix,
      @ObjectModel.foreignKey.association: '_NameSupplement'
      title_sppl as PersonNameSupplementCode,
      nickname   as PersonNickname,
      initials   as NameInitials,
      name_text  as PersonFullName,
      langu      as CorrespondenceLanguage,
      sort1      as AddressPersonSearchTerm1,
      sort2      as AddressPersonSearchTerm2,
      nameformat as PersonFullNameFormattingCode, 
      namcountry as PersonFullNameFormattingCntry,
       @Semantics.user.createdBy: true
      addresscreatedbyuser,
      @Semantics.systemDateTime.createdAt: true
      @Analytics.hidden: true
      addresscreatedondatetime,
      @Semantics.user.lastChangedBy: true
      addresschangedbyuser,
      @Semantics.systemDateTime.lastChangedAt: true
      @Analytics.hidden: true
      addresschangedondatetime,
      converted,
      
      _FormOfAddress,
      _NameSupplement,
      _FamilyNamePrefix,
      _FamilyNameSecondPrefix,
      _AcademicTitle,
      _AcademicTitle2,
      _AddressRepresentationCode
 

}
where
  date_from = '00010101'
```
