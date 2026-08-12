---
name: I_COCODECOUNTRYVATREGISTRATION
description: "Cocodecountryvatregistration"
app_component: FI-GL-GL-F-2CL
software_component: SAPSCORE
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `VATRegistrationCountry` | ✓ | |  | `Country` |  |  |
| `VATRegistration` |  | |  |  |  |  |
| `CompanyCodeName` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |

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
