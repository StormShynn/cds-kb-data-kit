---
name: I_BPCONTACTTOADDRESS
description: Bpcontacttoaddress
app_component: AP-MD-BP
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
  - component:AP-MD-BP
  - lob:Other
---
# I_BPCONTACTTOADDRESS

**Bpcontacttoaddress**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RelationshipNumber` | ✓ | |  | `relnr` |  |  |
| `BusinessPartnerCompany` | ✓ | |  | `partner1` |  |  |
| `BusinessPartnerPerson` | ✓ | |  | `partner2` |  |  |
| `ValidityEndDate` | ✓ | |  | `date_to` |  |  |
| `AddressID` | ✓ | |  | `addrnumber` |  |  |
| `PersonNumber` |  | |  | `persnumber` |  |  |
| `IsDefaultAddress` |  | |  | `xdfadr` |  |  |
| `AddressRepresentationCode` |  | |  | `_AddressDetails[1: nation = ' '].nation` |  |  |
| `ContactRelationshipFunction` |  | |  | `_AddressDetails[1: nation = ' '].function` |  |  |
| `ContactRelationshipDepartment` |  | |  | `_AddressDetails[1: nation = ' '].department` |  |  |
| `Floor` |  | |  | `_AddressDetails[1: nation = ' '].floor` |  |  |
| `Building` |  | |  | `_AddressDetails[1: nation = ' '].building` |  |  |
| `RoomNumber` |  | |  | `_AddressDetails[1: nation = ' '].roomnumber` |  |  |
| `PrfrdCommMediumType` |  | |  | `_AddressDetails[1: nation = ' '].deflt_comm` |  |  |
| `CorrespondenceShortName` |  | |  | `_AddressDetails[1: nation = ' '].id_code` |  |  |
| `InhouseMail` |  | |  | `_AddressDetails[1: nation = ' '].ih_mail` |  |  |
| `InternationalPhoneNumber` |  | | `_Telephone_2` | `InternationalPhoneNumber` |  |  |
| `PhoneNumberCountry` |  | | `_Telephone_2` | `PhoneNumberCountry` |  |  |
| `PhoneNumber` |  | | `_Telephone_2` | `PhoneAreaCodeSubscriberNumber` |  |  |
| `InternationalMobilePhoneNumber` |  | | `_MobilePhone_2` | `InternationalPhoneNumber` |  |  |
| `MobilePhoneCountry` |  | | `_MobilePhone_2` | `PhoneNumberCountry` |  |  |
| `MobilePhoneNumber` |  | | `_MobilePhone_2` | `PhoneAreaCodeSubscriberNumber` |  |  |
| `MobilePhoneNumberExtension` |  | | `_MobilePhone_2` | `PhoneExtensionNumber` |  |  |
| `InternationalFaxNumber` |  | | `_FaxNumber_2` | `InternationalFaxNumber` |  |  |
| `FaxCountry` |  | | `_FaxNumber_2` | `FaxNumberCountry` |  |  |
| `AuthorizationGroup` |  | | `_BusinessPartnerPerson` | `AuthorizationGroup` |  |  |
| `IsBusinessPurposeCompleted` |  | | `_BusinessPartnerPerson` | `IsBusinessPurposeCompleted` |  |  |
| `_BusinessPartnerCompany` | | ✓ | | | | |
| `_BusinessPartnerPerson` | | ✓ | | | | |
| `_AddressDetails` | | ✓ | | | | |
| `_PersonDetails` | | ✓ | | | | |
| `_BPCompanyPostalAddress` | | ✓ | | | | |
| `_BPCompanyPostalAddress_2` | | ✓ | | | | |
| `_Telephone` | | ✓ | | | | |
| `_MobilePhone` | | ✓ | | | | |
| `_FaxNumber` | | ✓ | | | | |
| `_Telephone_2` | | ✓ | | | | |
| `_MobilePhone_2` | | ✓ | | | | |
| `_FaxNumber_2` | | ✓ | | | | |
| `_AddressDefaultRepresentation` | | ✓ | | | | |
| `_AddressInternationalVersions` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerCompany` | `I_BusinessPartner` | [1..1] |
| `_BusinessPartnerPerson` | `I_BusinessPartner` | [1..1] |
| `_AddressDetails` | `adcp` | [1..*] |
| `_PersonDetails` | `adrp` | [1..*] |
| `_BPCompanyPostalAddress` | `I_BusinessPartnerAddress` | [1] |
| `_BPCompanyPostalAddress_2` | `I_BusinessPartAddress_2` | [1] |
| `_Telephone` | `I_AddressPhoneNumber` | [0..1] |
| `_MobilePhone` | `I_AddressPhoneNumber` | [0..1] |
| `_FaxNumber` | `I_AddressFaxNumber` | [0..1] |
| `_Telephone_2` | `I_AddressPhoneNumber_2` | [0..1] |
| `_MobilePhone_2` | `I_AddressPhoneNumber_2` | [0..1] |
| `_FaxNumber_2` | `I_AddressFaxNumber_2` | [0..1] |
| `_AddressDefaultRepresentation` | `I_Address_2` | [0..1] |
| `_AddressInternationalVersions` | `I_Address_2` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPCNTCTADDRESS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck:  #CHECK //or #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey:'RelationshipNumber'
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Business Partner Contact To Address'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@Analytics: {
 dataCategory: #DIMENSION,
 dataExtraction: {
    enabled: true     
 }
}
@ObjectModel.sapObjectNodeType.name: 'BPRelationshipAddress'
define view I_BpContactToAddress
  as select from but052
    inner join   but000 on but052.partner2 = but000.partner

  association [1..1] to I_BusinessPartner    as _BusinessPartnerCompany on  $projection.BusinessPartnerCompany = _BusinessPartnerCompany.BusinessPartner

  association [1..1] to I_BusinessPartner    as _BusinessPartnerPerson  on  $projection.BusinessPartnerPerson = _BusinessPartnerPerson.BusinessPartner

  association [1..*] to adcp as _AddressDetails on  $projection.AddressID = _AddressDetails.addrnumber
                                                and $projection.PersonNumber = _AddressDetails.persnumber
                                                
  association [1..*] to adrp as _PersonDetails on $projection.PersonNumber = _PersonDetails.persnumber                                              
                                                                        
  association [1] to I_BusinessPartnerAddress as _BPCompanyPostalAddress on $projection.AddressID = _BPCompanyPostalAddress.AddressNumber
                                                                        and $projection.BusinessPartnerCompany = _BPCompanyPostalAddress.BusinessPartner

  association [1] to I_BusinessPartAddress_2 as _BPCompanyPostalAddress_2 on $projection.AddressID = _BPCompanyPostalAddress_2.AddressNumber
                                                                        and $projection.BusinessPartnerCompany = _BPCompanyPostalAddress_2.BusinessPartner
                                                                        
  association [0..1] to I_AddressPhoneNumber as _Telephone              on  $projection.AddressID      = _Telephone.AddressID
                                                                        and $projection.PersonNumber   = _Telephone.Person
                                                                        and _Telephone.PhoneNumberType = '1'

  association [0..1] to I_AddressPhoneNumber as _MobilePhone            on  $projection.AddressID        = _MobilePhone.AddressID
                                                                        and $projection.PersonNumber     = _MobilePhone.Person
                                                                        and _MobilePhone.PhoneNumberType = '3'

  association [0..1] to I_AddressFaxNumber   as _FaxNumber              on  $projection.AddressID         = _FaxNumber.AddressID
                                                                        and $projection.PersonNumber        = _FaxNumber.Person
                                                                        and _FaxNumber.IsDefaultFaxNumber = 'X'
  
  association [0..1] to I_AddressPhoneNumber_2 as _Telephone_2              on  $projection.AddressID      = _Telephone_2.AddressID
                                                                        and $projection.PersonNumber   = _Telephone_2.AddressPersonID
                                                                        and _Telephone_2.PhoneNumberType = '1'

  association [0..1] to I_AddressPhoneNumber_2 as _MobilePhone_2            on  $projection.AddressID        = _MobilePhone_2.AddressID
                                                                        and $projection.PersonNumber     = _MobilePhone_2.AddressPersonID
                                                                        and _MobilePhone_2.PhoneNumberType = '3'

  association [0..1] to I_AddressFaxNumber_2   as _FaxNumber_2              on  $projection.AddressID         = _FaxNumber_2.AddressID
                                                                        and $projection.PersonNumber        = _FaxNumber_2.AddressPersonID
                                                                        and _FaxNumber_2.FaxNumberIsCurrentDefault = 'X'
                                                                        
  association [0..1] to I_Address_2          as _AddressDefaultRepresentation on  $projection.AddressID  = _AddressDefaultRepresentation.AddressID
                                                                              and $projection.PersonNumber =  _AddressDefaultRepresentation.AddressPersonID     
                                                                              and _AddressDefaultRepresentation.AddressRepresentationCode is initial

  association [0..*] to I_Address_2          as _AddressInternationalVersions on  $projection.AddressID  = _AddressInternationalVersions.AddressID
                                                                              and $projection.PersonNumber = _AddressInternationalVersions.AddressPersonID 
                                                                              and _AddressInternationalVersions.AddressRepresentationCode is not initial
{
  key but052.relnr                            as RelationshipNumber,
      //--[ GENERATED:012:GlBfhyJl7kY4i6}7dD1KRG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessPartnerVH',
                     element: 'BusinessPartner' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association : '_BusinessPartnerCompany'
  key but052.partner1                         as BusinessPartnerCompany,
      //--[ GENERATED:012:GlBfhyJl7kY4i6}7dD1KRG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessPartnerVH',
                     element: 'BusinessPartner' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association : '_BusinessPartnerPerson'
  key but052.partner2                         as BusinessPartnerPerson,
  key but052.date_to                          as ValidityEndDate,
      @ObjectModel.foreignKey.association: '_AddressDetails'
  key but052.addrnumber                       as AddressID,
      but000.persnumber                       as PersonNumber,
      but052.xdfadr                           as IsDefaultAddress,
      _AddressDetails[1: nation = ' '].nation                  as AddressRepresentationCode,
      _AddressDetails[1: nation = ' '].function                as ContactRelationshipFunction,
      _AddressDetails[1: nation = ' '].department              as ContactRelationshipDepartment,
      _AddressDetails[1: nation = ' '].floor                   as Floor,
      _AddressDetails[1: nation = ' '].building                as Building,
      _AddressDetails[1: nation = ' '].roomnumber              as RoomNumber,
      _AddressDetails[1: nation = ' '].deflt_comm              as PrfrdCommMediumType,
      _AddressDetails[1: nation = ' '].id_code                 as CorrespondenceShortName,
      _AddressDetails[1: nation = ' '].ih_mail                 as InhouseMail,
      _Telephone_2.InternationalPhoneNumber,
      _Telephone_2.PhoneNumberCountry,
      _Telephone_2.PhoneAreaCodeSubscriberNumber   as PhoneNumber,
      _MobilePhone_2.InternationalPhoneNumber      as InternationalMobilePhoneNumber,
      _MobilePhone_2.PhoneNumberCountry            as MobilePhoneCountry,
      _MobilePhone_2.PhoneAreaCodeSubscriberNumber as MobilePhoneNumber,
      _MobilePhone_2.PhoneExtensionNumber          as MobilePhoneNumberExtension,
      _FaxNumber_2.InternationalFaxNumber,
      _FaxNumber_2.FaxNumberCountry                as FaxCountry,
      _BusinessPartnerPerson.AuthorizationGroup,
      _BusinessPartnerPerson.IsBusinessPurposeCompleted,

      _AddressDetails,
      _PersonDetails,
       @API.element.releaseState: #DEPRECATED  
       @API.element.successor: '_BPCompanyPostalAddress_2'        
      _BPCompanyPostalAddress,
      _BusinessPartnerCompany,
      _BusinessPartnerPerson,
       @API.element.releaseState: #DEPRECATED  
       @API.element.successor: '_Telephone_2'        
      _Telephone,
       @API.element.releaseState: #DEPRECATED  
       @API.element.successor: '_MobilePhone_2'        
      _MobilePhone,
       @API.element.releaseState: #DEPRECATED  
       @API.element.successor: '_FaxNumber_2'       
      _FaxNumber,
      _Telephone_2,
      _MobilePhone_2,
      _FaxNumber_2,
      _BPCompanyPostalAddress_2, 
      _AddressDefaultRepresentation,
      _AddressInternationalVersions      
}
```
