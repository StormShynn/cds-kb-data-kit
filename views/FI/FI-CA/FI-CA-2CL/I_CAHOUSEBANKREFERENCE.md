---
name: I_CAHOUSEBANKREFERENCE
description: Cahousebankreference
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - bank
  - component:FI-CA-2CL
  - lob:Finance
  - bo:Bank
---
# I_CAHOUSEBANKREFERENCE

**Cahousebankreference**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAPaymentCompanyCode` | `bukrs` |
| key `CAHouseBankReference` | `eigbv` |
| `HouseBank` | `cast(hbkid as farp_hbkid preserving type)` |
| `HouseBankAccount` | `cast(hktid as fac_hktid preserving type)` |
| `UserCodeAtBank` | `bnkid` |
| `CARegisteredNameOfPayerAtBank` | `aufbz` |
| `_Text` | *Association* |
| `_CompCode` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAHouseBankReferenceText` | [0..*] |
| `_CompCode` | `I_CompanyCode` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'House Bank Reference'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAHouseBankReference',
                sapObjectNodeType.name: 'ContrAcctgHouseBankReference',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAHouseBankReference
  as select from tfk042h
  
  association [0..*] to I_CAHouseBankReferenceText as _Text     on  $projection.CAPaymentCompanyCode = _Text.CAPaymentCompanyCode
                                                                and $projection.CAHouseBankReference = _Text.CAHouseBankReference
  association [0..1] to I_CompanyCode              as _CompCode on  $projection.CAPaymentCompanyCode = _CompCode.CompanyCode

{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.foreignKey.association: '_CompCode'
  key bukrs                                     as CAPaymentCompanyCode,
      @ObjectModel.text.association: '_Text'
  key eigbv                                     as CAHouseBankReference,
  
      cast(hbkid as farp_hbkid preserving type) as HouseBank,
      cast(hktid as fac_hktid preserving type)  as HouseBankAccount,
      bnkid                                     as UserCodeAtBank,
      aufbz                                     as CARegisteredNameOfPayerAtBank,

      _Text,
      _CompCode
}
```
