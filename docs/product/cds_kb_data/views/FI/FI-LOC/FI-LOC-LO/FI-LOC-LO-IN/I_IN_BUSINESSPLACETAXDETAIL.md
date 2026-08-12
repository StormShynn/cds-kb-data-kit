---
name: I_IN_BUSINESSPLACETAXDETAIL
description: "IN Businessplacetaxdetail"
app_component: FI-LOC-LO-IN
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |  |  |
| `BusinessPlace` | ✓ | |  |  |  |  |
| `BusinessPlaceDescription` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `IN_GSTIdentificationNumber` |  | |  |  |  |  |
| `IN_IsBizPlaceGSTSpclEconomicZn` |  | |  |  |  |  |
| `IN_GSTTxDdctdAtSrceRegn` |  | |  |  |  |  |
| `IN_GSTBizPlaceClassfctn` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |

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
