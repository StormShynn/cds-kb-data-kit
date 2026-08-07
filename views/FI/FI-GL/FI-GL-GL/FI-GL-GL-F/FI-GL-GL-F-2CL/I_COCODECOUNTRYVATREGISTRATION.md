---
name: I_COCODECOUNTRYVATREGISTRATION
description: Cocodecountryvatregistration
app_component: FI-GL-GL-F-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - country
  - component:FI-GL-GL-F-2CL
  - lob:Finance
---
# I_COCODECOUNTRYVATREGISTRATION

**Cocodecountryvatregistration**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-F-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |
| `VATRegistrationCountry` | ✓ | |  | `Country` |
| `VATRegistration` |  | |  |  |
| `CompanyCodeName` |  | |  |  |
| `AddressID` |  | |  |  |
| `_CompanyCode` | | ✓ | | |
| `_Country` | | ✓ | | |
| `_Address` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Address` | `I_OrgAddressDefaultRprstn` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Company Code Ctry/Reg VAT Registration'
@AccessControl.authorizationCheck: #MANDATORY
@VDM: { viewType: #BASIC, lifecycle.contract.type: #PUBLIC_LOCAL_API }
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@Analytics: { technicalName: 'ICOCDCTRYVATREGN', internalName:#LOCAL, dataCategory: #DIMENSION }
@ObjectModel: {
  usageType: { serviceQuality: #B, sizeCategory: #S, dataClass: #MASTER },
  representativeKey: 'VATRegistrationCountry',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}
@AccessControl.privilegedAssociations: ['_Address']

define view entity I_CoCodeCountryVATRegistration
  as select from I_CompanyCode
  association [1..1] to I_CompanyCode             as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Country                 as _Country     on $projection.VATRegistrationCountry = _Country.Country
  association [0..1] to I_OrgAddressDefaultRprstn as _Address     on $projection.AddressID = _Address.AddressID
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      
  key Country as VATRegistrationCountry,
      
      VATRegistration,
      @Semantics.text: true
      CompanyCodeName,
      @ObjectModel.foreignKey.association: '_Address'
      AddressID,
      
      _CompanyCode,
      _Country,
      _Address
}
union all select from t001n
association [1..1] to I_CompanyCode             as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
association [0..1] to I_Country                 as _Country     on $projection.VATRegistrationCountry = _Country.Country
association [0..1] to I_OrgAddressDefaultRprstn as _Address     on $projection.AddressID = _Address.AddressID
{

  key t001n.bukrs as CompanyCode,

  key t001n.land1 as VATRegistrationCountry,

      t001n.stceg as VATRegistration,

      t001n.butxt as CompanyCodeName,

      t001n.adrnr as AddressID,
      
      _CompanyCode,
      _Country,
      _Address
} where ( t001n.land1 <> _CompanyCode.Country )
```
