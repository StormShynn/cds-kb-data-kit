---
name: I_REKEYASSGMT
description: Rekeyassgmt
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_REKEYASSGMT

**Rekeyassgmt**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalRealEstateNumber` | ✓ | |  | `intreno` |  |  |
| `RealEstateObjectType` |  | |  | `objtype` |  |  |
| `REIdentificationKey` |  | |  | `identkey` |  |  |
| `REStatusObject` |  | |  | `objnr` |  |  |
| `REInternalFinNumber` |  | |  | `cast(imkey as recaimkeyfi preserving type )` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `RealEstateContract` |  | |  | `cast(recnnr as recnvdmcnnr preserving type )` |  |  |
| `REBusinessEntity` |  | |  | `cast(swenr as rebdvdmbeno preserving type )` |  |  |
| `RERentalObject` |  | |  | `cast(smenr as rebdvdmrono preserving type )` |  |  |
| `RealEstateBuilding` |  | |  | `cast(sgenr as rebdvdmbuno preserving type )` |  |  |
| `RealEstateProperty` |  | |  | `cast(sgrnr as rebdvdmprno preserving type )` |  |  |
| `ArchitecturalObject` |  | |  | `aoid` |  |  |
| `REServiceChargeKey` |  | |  | `cast(snksl as rescvdmsckey preserving type )` |  |  |
| `RESettlementUnitID` |  | |  | `cast(sempsl as rescvdmsuid preserving type )` |  |  |
| `_REObjectType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REObjectType` | `I_REObjectType` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREKEYASS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Key Assgmt'
@Analytics.internalName: #LOCAL
@ObjectModel: {
  representativeKey: 'InternalRealEstateNumber',
  semanticKey: ['InternalRealEstateNumber'],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L
  },
  modelingPattern: #NONE,
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

define view entity I_REKeyAssgmt
  as select from vicaintreno as _REKeyAssgmt

  association [1..1] to I_REObjectType as _REObjectType on $projection.RealEstateObjectType = _REObjectType.RealEstateObjectType
  association [1..1] to I_CompanyCode  as _CompanyCode  on $projection.CompanyCode = _CompanyCode.CompanyCode

{
  key       intreno                                      as InternalRealEstateNumber,
            @ObjectModel.foreignKey.association: '_REObjectType'
            objtype                                      as RealEstateObjectType,
            identkey                                     as REIdentificationKey,
            objnr                                        as REStatusObject,
            cast(imkey as recaimkeyfi preserving type )  as REInternalFinNumber,
            @ObjectModel.foreignKey.association: '_CompanyCode'
            bukrs                                        as CompanyCode,
            cast(recnnr as recnvdmcnnr preserving type ) as RealEstateContract, 
            cast(swenr as rebdvdmbeno  preserving type ) as REBusinessEntity,
            cast(smenr as rebdvdmrono preserving type )  as RERentalObject,
            cast(sgenr as rebdvdmbuno preserving type )  as RealEstateBuilding,
            cast(sgrnr as rebdvdmprno preserving type )  as RealEstateProperty,
            aoid                                         as ArchitecturalObject,
            //PGID
            cast(snksl as rescvdmsckey preserving type ) as REServiceChargeKey,
            cast(sempsl as rescvdmsuid preserving type ) as RESettlementUnitID,
            //COMPGRP
            _REObjectType,
            _CompanyCode

}
```
