---
name: I_SALESCONTRACTPARTNER
description: Salescontractpartner
app_component: SD-SLS-OA-CCO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - sales-contract
  - contract
  - partner
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRACTPARTNER

**Salescontractpartner**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesContract` | ✓ | |  |  |
| `PartnerFunction` | ✓ | |  |  |
| `SDDocPartnerSequenceNumber` | ✓ | |  |  |
| `Partner` |  | |  |  |
| `FullName` |  | |  | `cast( case SDPartner.AddressID when '' then case when SDPartner.Personnel != '00000000' then coalesce(_WorkAssignment.PersonFullName, _WorkAssignment._BusinessPartner.LastName) end else case when SDPartner.AddressObjectType = '1' then case when SDPartner.ContactPerson != '0000000000' then cast(substring(replace(concat(SDPartner._ContactPerson.FirstName, concat(' &@', SDPartner._ContactPerson.LastName) ), '&@', '') ,1,80) as ad_namtext ) when SDPartner.Personnel != '00000000' then _OrganizationAddress.AddresseeName1 else cast(concat_with_space(_OrganizationAddress.AddresseeName1, _OrganizationAddress.AddresseeName2, 1) as ad_namtext ) end when SDPartner.AddressObjectType = '2' then _PersonAddress.PersonFullName when SDPartner.AddressObjectType = '3' then _PersonWorkplaceAddress.PersonFullName end end as ad_namtext )` |
| `Customer` |  | |  |  |
| `Supplier` |  | |  |  |
| `Personnel` |  | |  |  |
| `ContactPerson` |  | |  |  |
| `AddressID` |  | |  |  |
| `AddressPersonID` |  | |  |  |
| `AddressObjectType` |  | |  |  |
| `SDDocPartnerAddressRefType` |  | |  |  |
| `BPAddrDeterminationTransaction` |  | |  |  |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  |
| `SDDocPartnerAddrIsDocSpecific` |  | |  |  |
| `ReferenceBusinessPartner` |  | |  |  |
| `VATRegistration` |  | |  |  |
| `UnloadingPointName` |  | |  |  |
| `FormOfAddress` |  | |  | `coalesce(_PersonName.FormOfAddress, _OrgNamePostalAddress.FormOfAddress )` |
| `CorrespondenceLanguage` |  | |  | `coalesce(_PersonName.CorrespondenceLanguage, _OrgNamePostalAddress.CorrespondenceLanguage )` |
| `InternationalPhoneNumber` |  | |  | `cast( case AddressID when '' then _WorkAssignment._WorkplaceAddress.NormalizedPhoneNumber else _CurrentDfltLandlinePhoneNmbr.InternationalPhoneNumber end as ad_telnrlg preserving type )` |
| `InternationalMobilePhoneNumber` |  | |  | `cast( case AddressID when '' then _WorkAssignment._WorkplaceAddress.MblNormalizedPhoneNumber else _CurrentDfltMobilePhoneNumber.InternationalPhoneNumber end as ad_telnrlg preserving type )` |
| `InternationalFaxNumber` |  | |  | `cast( case AddressID when '' then _WorkAssignment._WorkplaceAddress.InternationalFaxNumber else _CurrentDfltFaxNumber.InternationalFaxNumber end as ad_fxnrlng preserving type )` |
| `EmailAddress` |  | |  | `cast( case AddressID when '' then _WorkAssignment._WorkplaceAddress.DefaultEmailAddress else _CurrentDfltEmailAddress.EmailAddress end as vdm_sd_ad_smtpadr preserving type )` |
| `_PersonWorkplaceAddress` | | ✓ | | |
| `_OrganizationAddress` | | ✓ | | |
| `_PersonAddress` | | ✓ | | |
| `_OrgNamePostalAddress` | | ✓ | | |
| `_PartnerFunction` | | ✓ | | |
| `_Address` | | ✓ | | |
| `_SalesContract` | | ✓ | | |
| `_ContactPerson` | | ✓ | | |
| `_DfltAddrRprstn` | | ✓ | | |
| `_BusinessPartnerAddress` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PersonWorkplaceAddress` | `I_PersonWorkplaceAddress` | [0..1] |
| `_WorkAssignment` | `I_WorkAssignment` | [1] |
| `_OrganizationAddress` | `I_OrganizationAddress` | [0..1] |
| `_PersonAddress` | `I_PersonAddress` | [0..1] |
| `_OrgNamePostalAddress` | `I_AddrOrgNamePostalAddress` | [0..1] |
| `_PersonName` | `I_AddressPersonName` | [0..1] |
| `_CurrentDfltLandlinePhoneNmbr` | `I_AddrCurDfltLandlinePhoneNmbr` | [0..1] |
| `_CurrentDfltEmailAddress` | `I_AddrCurDefaultEmailAddress` | [0..1] |
| `_CurrentDfltMobilePhoneNumber` | `I_AddrCurDfltMobilePhoneNumber` | [0..1] |
| `_CurrentDfltFaxNumber` | `I_AddrCurDefaultFaxNumber` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Contract Partner'

@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_DfltAddrRprstn','_PersonAddress','_PersonWorkplaceAddress','_OrgNamePostalAddress','_OrganizationAddress']
}

@AbapCatalog: {
  sqlViewName: 'ISCONTRPART',
  compiler.compareFilter: true
}
@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN', 'NO_SUBPLAN_SHARING' ]

define view I_SalesContractPartner
  as select from P_SalesContractPartner as SDPartner

  association [0..1] to I_PersonWorkplaceAddress       as _PersonWorkplaceAddress       on  $projection.AddressID                             = _PersonWorkplaceAddress.AddressID
                                                                                        and $projection.AddressPersonID                       = _PersonWorkplaceAddress.AddressPersonID
                                                                                        and $projection.AddressObjectType                     = '3'
                                                                                        and _PersonWorkplaceAddress.AddressRepresentationCode is initial

  association [1]    to I_WorkAssignment               as _WorkAssignment               on  $projection.Personnel = _WorkAssignment.WorkAssignment


  association [0..1] to I_OrganizationAddress          as _OrganizationAddress          on  $projection.AddressID                          = _OrganizationAddress.AddressID
                                                                                        and $projection.AddressPersonID                    = _OrganizationAddress.AddressPersonID
                                                                                        and $projection.AddressObjectType                  = '1'
                                                                                        and _OrganizationAddress.AddressRepresentationCode is initial
  association [0..1] to I_PersonAddress                as _PersonAddress                on  $projection.AddressID                    = _PersonAddress.AddressID
                                                                                        and $projection.AddressPersonID              = _PersonAddress.AddressPersonID
                                                                                        and $projection.AddressObjectType            = '2'
                                                                                        and _PersonAddress.AddressRepresentationCode is initial

  association [0..1] to I_AddrOrgNamePostalAddress     as _OrgNamePostalAddress         on  $projection.AddressID                           = _OrgNamePostalAddress.AddressID
                                                                                        and _OrgNamePostalAddress.AddressRepresentationCode is initial

  association [0..1] to I_AddressPersonName            as _PersonName                   on  $projection.AddressPersonID           = _PersonName.AddressPersonID
                                                                                        and _PersonName.AddressRepresentationCode is initial

  association [0..1] to I_AddrCurDfltLandlinePhoneNmbr as _CurrentDfltLandlinePhoneNmbr on  $projection.AddressID       = _CurrentDfltLandlinePhoneNmbr.AddressID
                                                                                        and $projection.AddressPersonID = _CurrentDfltLandlinePhoneNmbr.AddressPersonID

  association [0..1] to I_AddrCurDefaultEmailAddress   as _CurrentDfltEmailAddress      on  $projection.AddressID       = _CurrentDfltEmailAddress.AddressID
                                                                                        and $projection.AddressPersonID = _CurrentDfltEmailAddress.AddressPersonID

  association [0..1] to I_AddrCurDfltMobilePhoneNumber as _CurrentDfltMobilePhoneNumber on  $projection.AddressID       = _CurrentDfltMobilePhoneNumber.AddressID
                                                                                        and $projection.AddressPersonID = _CurrentDfltMobilePhoneNumber.AddressPersonID

  association [0..1] to I_AddrCurDefaultFaxNumber      as _CurrentDfltFaxNumber         on  $projection.AddressID       = _CurrentDfltFaxNumber.AddressID
                                                                                        and $projection.AddressPersonID = _CurrentDfltFaxNumber.AddressPersonID
{

  key SDPartner.SalesContract,

  key SDPartner.PartnerFunction,

  key SDPartner.SDDocPartnerSequenceNumber,

      @ObjectModel.text.element: ['FullName']
      SDPartner.Partner,
      @Semantics: {
      text: true,
      name.fullName: true
      }
      cast(
      case SDPartner.AddressID
      when ''
      then
       case
         when SDPartner.Personnel != '00000000'
          then coalesce(_WorkAssignment.PersonFullName,
                        _WorkAssignment._BusinessPartner.LastName)
       end
      else
      case
       when SDPartner.AddressObjectType = '1'
         then
           case
             when SDPartner.ContactPerson != '0000000000'
               then
                 cast(substring(replace(concat(SDPartner._ContactPerson.FirstName,
                                        concat(' &@', SDPartner._ContactPerson.LastName) ), '&@', '') ,1,80) as ad_namtext )
              when SDPartner.Personnel != '00000000'
                then _OrganizationAddress.AddresseeName1  //Document specific personnel
             else
               cast(concat_with_space(_OrganizationAddress.AddresseeName1,
                                      _OrganizationAddress.AddresseeName2, 1) as ad_namtext )
            end
       when SDPartner.AddressObjectType = '2'
         then _PersonAddress.PersonFullName
       when SDPartner.AddressObjectType = '3'
         then _PersonWorkplaceAddress.PersonFullName
      end
      end as ad_namtext )                                     as FullName,

      SDPartner.Customer,
      SDPartner.Supplier,
      SDPartner.Personnel,
      SDPartner.ContactPerson,
      SDPartner.AddressID,
      SDPartner.AddressPersonID,
      SDPartner.AddressObjectType,
      SDPartner.SDDocPartnerAddressRefType,
      SDPartner.BPAddrDeterminationTransaction,
      SDPartner.BPRefAddressIDForDocSpcfcAddr,
      SDPartner.SDDocPartnerAddrIsDocSpecific,
      SDPartner.ReferenceBusinessPartner,
      SDPartner.VATRegistration,
      @Semantics.text: true
      UnloadingPointName,

      coalesce(_PersonName.FormOfAddress,
               _OrgNamePostalAddress.FormOfAddress )          as FormOfAddress,

      coalesce(_PersonName.CorrespondenceLanguage,
               _OrgNamePostalAddress.CorrespondenceLanguage ) as CorrespondenceLanguage,

      /* Communication Related Data */
      cast(
        case AddressID
          when ''
            then _WorkAssignment._WorkplaceAddress.NormalizedPhoneNumber
          else _CurrentDfltLandlinePhoneNmbr.InternationalPhoneNumber
        end  as ad_telnrlg preserving type )                  as InternationalPhoneNumber,

      cast(
        case AddressID 
          when ''
            then _WorkAssignment._WorkplaceAddress.MblNormalizedPhoneNumber
           else _CurrentDfltMobilePhoneNumber.InternationalPhoneNumber
        end as ad_telnrlg preserving type )                   as InternationalMobilePhoneNumber,

      cast(
        case AddressID 
          when ''
            then _WorkAssignment._WorkplaceAddress.InternationalFaxNumber
          else _CurrentDfltFaxNumber.InternationalFaxNumber
        end as ad_fxnrlng preserving type )                   as InternationalFaxNumber,

      cast(
        case AddressID
         when ''
           then _WorkAssignment._WorkplaceAddress.DefaultEmailAddress
         else _CurrentDfltEmailAddress.EmailAddress
        end as vdm_sd_ad_smtpadr preserving type )            as EmailAddress,

      _PartnerFunction,
      _Address,
      _SalesContract,
      //_WorkAgreement,
      _ContactPerson,
      _DfltAddrRprstn,
      _BusinessPartnerAddress,
      _OrganizationAddress,
      _PersonAddress,
      _PersonWorkplaceAddress,
      _OrgNamePostalAddress


}
```
