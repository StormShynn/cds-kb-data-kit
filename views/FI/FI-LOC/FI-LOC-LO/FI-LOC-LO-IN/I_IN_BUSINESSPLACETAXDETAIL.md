---
name: I_IN_BUSINESSPLACETAXDETAIL
description: IN Businessplacetaxdetail
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - tax
  - component:FI-LOC-LO-IN
  - lob:Finance
---
# I_IN_BUSINESSPLACETAXDETAIL

**IN Businessplacetaxdetail**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |
| `BusinessPlace` | ✓ | |  |  |
| `BusinessPlaceDescription` |  | |  |  |
| `AddressID` |  | |  |  |
| `IN_GSTIdentificationNumber` |  | |  |  |
| `IN_IsBizPlaceGSTSpclEconomicZn` |  | |  |  |
| `IN_GSTTxDdctdAtSrceRegn` |  | |  |  |
| `IN_GSTBizPlaceClassfctn` |  | |  |  |
| `_CompanyCode` | | ✓ | | |
| `_Address` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Address` | `I_Address_2` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'GST India Business Place Tax Attribute'
@ObjectModel: {
  representativeKey: 'BusinessPlace',
  usageType:{
  serviceQuality: #B,
  sizeCategory: #S,
  dataClass: #ORGANIZATIONAL
  },
  semanticKey: ['CompanyCode', 'BusinessPlace'],
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
  modelingPattern: #NONE
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED,
  privilegedAssociations: ['_Address']
}
@Metadata:{
            allowExtensions: false,
            ignorePropagatedAnnotations: true
          }
define view entity I_IN_BusinessPlaceTaxDetail
  as select from P_IN_BUSINESSPLACE
  association [1..1] to I_CompanyCode   as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Address_2     as _Address     on  $projection.AddressID              = _Address.AddressID
                                                        and _Address.AddressPersonID           = ''
                                                        and _Address.AddressRepresentationCode = ''
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,
      @ObjectModel.text.element: [ 'BusinessPlaceDescription' ]
  key BusinessPlace,
      @Semantics.text:true
      BusinessPlaceDescription,
      @ObjectModel.foreignKey.association: '_Address'
      AddressID,
      IN_GSTIdentificationNumber,
      IN_IsBizPlaceGSTSpclEconomicZn,
      IN_GSTTxDdctdAtSrceRegn,
      IN_GSTBizPlaceClassfctn,
      /* Associations */
      _CompanyCode,
      _Address
}
where
  _CompanyCode.Country = 'IN'
```
