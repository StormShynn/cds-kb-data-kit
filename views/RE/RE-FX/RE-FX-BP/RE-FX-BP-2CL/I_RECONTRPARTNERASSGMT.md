---
name: I_RECONTRPARTNERASSGMT
description: Recontrpartnerassgmt
app_component: RE-FX-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BP
  - interface-view
  - partner
  - component:RE-FX-BP-2CL
  - lob:Other
---
# I_RECONTRPARTNERASSGMT

**Recontrpartnerassgmt**

| Property | Value |
|---|---|
| App Component | `RE-FX-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `REPartnerRelationUUID` | ✓ | |  | `objrelguid` |
| `InternalRealEstateNumber` |  | |  | `intreno` |
| `BusinessPartner` |  | |  | `partner` |
| `BusinessPartnerRole` |  | |  | `role` |
| `REPartnerRoleType` |  | |  | `subrole` |
| `AddressType` |  | |  | `addrtype` |
| `ValidityStartDate` |  | |  | `cast ( validfrom as rebdvdmvalidfrom preserving type )` |
| `ValidityEndDate` |  | |  | `cast ( validto as rebdvdmvalidto preserving type )` |
| `REPartnerApplicationCategory` |  | |  | `appl` |
| `REFractionalPrptyShrRatio` |  | |  | `bruteil` |
| `REOwnershipShrRatio` |  | |  | `bmiteig` |
| `RECoOwnershipShrRatio` |  | |  | `panteil` |
| `REFractionalShrCnvrsnRatio` |  | |  | `rfakt` |
| `ContractAccount` |  | |  | `vkont` |
| `_BusinessPartner` | | ✓ | | |
| `_BusinessPartnerRole` | | ✓ | | |
| `_REPartnerRoleType` | | ✓ | | |
| `_BusinessPartnerAddressType` | | ✓ | | |
| `_CAHeader` | | ✓ | | |
| `_REContract` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_BusinessPartnerRole` | `I_BusinessPartnerRole` | [0..1] |
| `_REPartnerRoleType` | `I_REPartnerRoleType` | [0..1] |
| `_BusinessPartnerAddressType` | `I_BusinessPartnerAddressType` | [0..1] |
| `_CAHeader` | `I_ContractAccountHeader` | [0..1] |
| `_REContract` | `I_REContract` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREPARTNERASS'
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Real Estate Partner Assignments'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'REPartnerRelationUUID',
  semanticKey: ['InternalRealEstateNumber', 'BusinessPartner', 'BusinessPartnerRole', 'ValidityStartDate'],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'REContractBusinessPartner'
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true 

// ATTENTION PERSONAL DATA BLOCKING
// Views consuming I_REPartnerAssgmt must make sure to restrict access for personal data access / DPP. Blocking only implemented on RAP consumption and above
@AccessControl.personalData.blocking: #NOT_REQUIRED

//@ClientDependent: true
@VDM.viewType: #BASIC
//@Search.searchable: true
define view entity I_REContrPartnerAssgmt
  as select from vibpobjrel as _REPartnerAssgmt
  association [0..1] to I_BusinessPartner            as _BusinessPartner            on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_BusinessPartnerRole        as _BusinessPartnerRole        on  $projection.BusinessPartnerRole = _BusinessPartnerRole.BusinessPartnerRole
  association [0..1] to I_REPartnerRoleType          as _REPartnerRoleType          on  $projection.BusinessPartnerRole = _REPartnerRoleType.BusinessPartnerRole
                                                                                    and $projection.REPartnerRoleType   = _REPartnerRoleType.REPartnerRoleType
  association [0..1] to I_BusinessPartnerAddressType as _BusinessPartnerAddressType on  $projection.AddressType = _BusinessPartnerAddressType.AddressType
  association [0..1] to I_ContractAccountHeader      as _CAHeader                   on  $projection.ContractAccount = _CAHeader.ContractAccount
  association [0..1] to I_REContract                 as _REContract                 on  $projection.InternalRealEstateNumber = _REContract.InternalRealEstateNumber

{
  key objrelguid                                             as REPartnerRelationUUID,
      intreno                                                as InternalRealEstateNumber,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      partner                                                as BusinessPartner,
      @ObjectModel.foreignKey.association: '_BusinessPartnerRole'
//      @Consumption.valueHelpDefinition: [{entity: {name: 'I_BusinessPartnerRole', element: 'BusinessPartnerRole' }}]
      @Consumption.valueHelpDefinition: [{association: '_BusinessPartnerRole'}]
      role                                                   as BusinessPartnerRole,
      subrole                                                as REPartnerRoleType,
      @ObjectModel.foreignKey.association: '_BusinessPartnerAddressType'
      addrtype                                               as AddressType,
      @Semantics.businessDate.from: true
      cast ( validfrom as rebdvdmvalidfrom preserving type ) as ValidityStartDate,
      @Semantics.businessDate.to: true
      cast ( validto as rebdvdmvalidto preserving type )     as ValidityEndDate,
      appl                                                   as REPartnerApplicationCategory,
      bruteil                                                as REFractionalPrptyShrRatio,
      bmiteig                                                as REOwnershipShrRatio,
      panteil                                                as RECoOwnershipShrRatio,
      rfakt                                                  as REFractionalShrCnvrsnRatio,
      vkont                                                  as ContractAccount,

      _BusinessPartner,
      _BusinessPartnerRole,
      _REPartnerRoleType,
      _BusinessPartnerAddressType,
      _CAHeader,
      _REContract

} where intreno like 'IS%'
```
